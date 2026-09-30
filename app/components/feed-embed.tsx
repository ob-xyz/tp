import { useCallback, useEffect, useRef, useState } from "react";

// Survives client-side navigation, so returning to the list doesn't re-jump.
const heightCache = new Map<string, number>();

const keyFor = (id: string, interactive: boolean) =>
  `${interactive ? "full" : "lead"}:${id}`;

export function getCachedHeight(id: string, interactive = false) {
  return heightCache.get(keyFor(id, interactive));
}

type Props = {
  id: string;
  html: string;
  title: string;
  interactive?: boolean;
  fallbackHeight?: number;
};

export default function FeedEmbed({
  id,
  html,
  title,
  interactive = false,
  fallbackHeight = 360,
}: Props) {
  const key = keyFor(id, interactive);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const observedBody = useRef<HTMLElement | null>(null);

  const [height, setHeight] = useState(
    () => heightCache.get(key) ?? fallbackHeight
  );

  const attach = useCallback(() => {
    const body = iframeRef.current?.contentDocument?.body;
    if (!body || body.childElementCount === 0) return false;

    const measure = () => {
      const next = Math.ceil(Math.max(body.scrollHeight, body.offsetHeight));
      if (next <= 0) return;
      heightCache.set(key, next);
      setHeight((prev) => (Math.abs(prev - next) > 1 ? next : prev));
    };

    measure();

    // Don't re-observe the same body twice.
    if (observedBody.current !== body) {
      observedBody.current = body;
      observerRef.current?.disconnect();
      if (typeof ResizeObserver !== "undefined") {
        observerRef.current = new ResizeObserver(measure);
        observerRef.current.observe(body);
      }
    }

    return true;
  }, [key]);

  // Don't wait for the iframe "load" event (it waits for every image).
  // Poll each frame until the document has content, then attach.
  useEffect(() => {
    observedBody.current = null;
    let raf = 0;
    const startedAt = performance.now();

    const tick = () => {
      if (attach()) return;
      if (performance.now() - startedAt > 10_000) return;
      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      observerRef.current?.disconnect();
      observedBody.current = null;
    };
  }, [html, attach]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        contain: "content",
      }}
    >
      <iframe
        ref={iframeRef}
        title={title}
        srcDoc={html}
        scrolling="no"
        onLoad={attach}
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
        }}
      />
    </div>
  );
}