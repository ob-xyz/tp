import type { CSSProperties } from "react";
import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/** Same breakpoint the page SCSS uses for mobile. */
const MOBILE_QUERY = "(max-width: 640px)";

const SIDE_BORDER_STYLE: CSSProperties = {
  boxSizing: "border-box",
  borderLeft: "2px solid var(--feed-hairline)",
  borderRight: "2px solid var(--feed-hairline)",
  borderTop: "none",
};

/**
 * Side-border styles for the feed column. Returns {} on mobile (and during
 * SSR / first render), so borders only appear on larger screens once the
 * page has mounted.
 */
export function useSideBorders(): CSSProperties {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      setEnabled(true);
      return;
    }

    const query = window.matchMedia(MOBILE_QUERY);
    const update = () => setEnabled(!query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return enabled ? SIDE_BORDER_STYLE : {};
}

const heightCache = new Map<string, number>();

const keyFor = (id: string, interactive: boolean) =>
  `${interactive ? "full" : "lead"}:${id}`;

export function getCachedHeight(
  id: string,
  interactive = false
) {
  return heightCache.get(keyFor(id, interactive));
}

/**
 * Removes any border-top (and <hr> dividers) on elements that touch the very
 * top of the embedded document, i.e. the divider the email template draws
 * above its first post. Only elements flush with the top edge are touched,
 * so dividers between posts are left alone.
 */
function stripTopBorder(doc: Document) {
  const body = doc.body;
  const view = doc.defaultView;
  if (!body || !view) return;

  const top = body.getBoundingClientRect().top;

  const walk = (parent: Element, depth: number) => {
    if (depth > 12) return;

    for (const child of Array.from(parent.children)) {
      const rect = child.getBoundingClientRect();

      // Skip hidden elements and anything not flush with the top edge
      if (rect.width === 0 && rect.height === 0) continue;
      if (rect.top - top > 2) continue;

      if (child.tagName === "HR") {
        (child as HTMLElement).style.setProperty("display", "none", "important");
        continue;
      }

      if (parseFloat(view.getComputedStyle(child).borderTopWidth) > 0) {
        (child as HTMLElement).style.setProperty(
          "border-top",
          "none",
          "important"
        );
      }

      walk(child, depth + 1);
    }
  };

  walk(body, 0);
}

type Props = {
  id: string;
  title: string;
  html?: string;
  src?: string;
  interactive?: boolean;
  fallbackHeight?: number;
  onLoaded?: () => void;
  lazy?: boolean;
  /**
   * Draw hairline side borders around the embed from the parent page.
   * The email HTML inside the iframe only draws its own side borders at
   * wider viewports (media query), and an iframe's viewport is its own
   * width (<= 600px), so those borders never appear when embedded.
   */
  bordered?: boolean;
  /** Remove the divider line at the very top of the embedded content. */
  hideTopBorder?: boolean;
};

function FeedEmbed({
  id,
  title,
  html,
  src,
  interactive = false,
  fallbackHeight = 360,
  onLoaded,
  lazy = false,
  bordered = false,
  hideTopBorder = false,
}: Props) {
  const key = keyFor(id, interactive);
  const sideBorders = useSideBorders();

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const observedBody = useRef<HTMLElement | null>(null);
  const onLoadedRef = useRef(onLoaded);
  const firedRef = useRef(false);

  onLoadedRef.current = onLoaded;

  const [height, setHeight] = useState(
    () => heightCache.get(key) ?? fallbackHeight
  );

  const fireLoaded = useCallback(() => {
    if (firedRef.current) return;

    firedRef.current = true;
    onLoadedRef.current?.();
  }, []);

  const attach = useCallback(() => {
    const document = iframeRef.current?.contentDocument;
    const body = document?.body;

    if (!body || body.childElementCount === 0) {
      return false;
    }

    if (hideTopBorder && document) stripTopBorder(document);

    const measure = () => {
      const next = Math.ceil(
        Math.max(
          body.scrollHeight,
          body.offsetHeight
        )
      );

      if (next <= 0) return;

      heightCache.set(key, next);

      setHeight((previous) =>
        Math.abs(previous - next) > 1
          ? next
          : previous
      );
    };

    measure();

    if (observedBody.current !== body) {
      observedBody.current = body;

      observerRef.current?.disconnect();

      if (typeof ResizeObserver !== "undefined") {
        const observer = new ResizeObserver(measure);

        observer.observe(body);

        observerRef.current = observer;
      }
    }

    return true;
  }, [key, hideTopBorder]);

  const handleLoad = useCallback(() => {
    attach();
    fireLoaded();
  }, [attach, fireLoaded]);

  useEffect(() => {
    firedRef.current = false;
    observedBody.current = null;

    let cancelled = false;
    let timer: number | undefined;

    const startedAt = performance.now();

    const delays = [
      0,
      16,
      50,
      100,
      250,
      500,
      1000,
      1500,
    ];

    let attempt = 0;

    const poll = () => {
      if (cancelled) return;

      if (attach()) {
        fireLoaded();
        return;
      }

      if (
        performance.now() - startedAt >= 10_000
      ) {
        return;
      }

      const delay =
        delays[
          Math.min(
            attempt++,
            delays.length - 1
          )
        ];

      timer = window.setTimeout(
        poll,
        delay
      );
    };

    const document =
      iframeRef.current?.contentDocument;

    if (
      document?.readyState === "complete" &&
      document.body?.childElementCount
    ) {
      attach();
      fireLoaded();
    } else {
      poll();
    }

    return () => {
      cancelled = true;

      if (timer !== undefined) {
        window.clearTimeout(timer);
      }

      observerRef.current?.disconnect();

      observerRef.current = null;
      observedBody.current = null;
    };
  }, [
    html,
    src,
    attach,
    fireLoaded,
  ]);

  if (!src && !html) {
    return null;
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        boxSizing: "border-box",
        ...(bordered ? sideBorders : null),
      }}
    >
      <iframe
        ref={iframeRef}
        title={title}
        {...(
          src
            ? { src }
            : { srcDoc: html ?? "" }
        )}
        scrolling="no"
        loading={
          lazy ? "lazy" : "eager"
        }
        onLoad={handleLoad}
        sandbox={
          interactive
            ? "allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            : "allow-same-origin"
        }
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          margin: 0,
          padding: 0,
          overflow: "hidden",
          background:
            "light-dark(#fff, #000)",
          colorScheme: "light dark",
        }}
      />
    </div>
  );
}

export default memo(FeedEmbed);