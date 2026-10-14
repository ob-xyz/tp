import type { MouseEvent, ReactNode } from "react";
import { Link } from "@remix-run/react";

interface FeedTopbarProps {
  hidden?: boolean;
  onSubscribe?: (event: MouseEvent<HTMLAnchorElement>) => void;
  showSubscribe?: boolean;
  /** Optional content for the left column (e.g. a status dot + label). */
  leftContent?: ReactNode;
}

export default function FeedTopbar({
  hidden = false,
  onSubscribe,
  showSubscribe = true,
  leftContent,
}: FeedTopbarProps) {
  return (
    <header className={`feed-topbar${hidden ? " is-hidden" : ""}`}>
      {leftContent ? (
        <div
          className="feed-topbar-left"
          style={{ gridColumn: 1, justifySelf: "start", minWidth: 0 }}
        >
          {leftContent}
        </div>
      ) : null}

      <Link className="feed-mark" to="/">
        <img
          src="/img/tp.png"
          alt="thepoast"
          loading="eager"
          decoding="async"
        />
      </Link>

      {showSubscribe && (
        <a
          className="feed-subscribe"
          href="#subscribe"
          onClick={onSubscribe}
        >
          Subscribe
        </a>
      )}
    </header>
  );
}