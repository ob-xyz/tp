import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const heightCache = new Map<string, number>();

const keyFor = (id: string, interactive: boolean) =>
  `${interactive ? "full" : "lead"}:${id}`;

export function getCachedHeight(
  id: string,
  interactive = false
) {
  return heightCache.get(keyFor(id, interactive));
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
}: Props) {
  const key = keyFor(id, interactive);

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
  }, [key]);

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