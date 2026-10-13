import type { MouseEvent } from "react";
import { Link } from "@remix-run/react";

interface FeedTopbarProps {
  hidden?: boolean;
  onSubscribe?: (event: MouseEvent<HTMLAnchorElement>) => void;
  showSubscribe?: boolean;
}

export default function FeedTopbar({
  hidden = false,
  onSubscribe,
  showSubscribe = true,
}: FeedTopbarProps) {
  return (
    <header className={`feed-topbar${hidden ? " is-hidden" : ""}`}>
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