import type { MouseEvent } from "react";
import { Link } from "@remix-run/react";

interface FeedTopbarProps {
  hidden?: boolean;
  onSubscribe: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export default function FeedTopbar({
  hidden = false,
  onSubscribe,
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

      <a
        className="feed-subscribe"
        href="#subscribe"
        onClick={onSubscribe}
      >
        Subscribe
      </a>
    </header>
  );
}