import { Link } from "@remix-run/react";

interface FeedFooterProps {
  covered?: boolean;
}

export default function FeedFooter({
  covered = false,
}: FeedFooterProps) {
  return (
    <footer className={`feed-footer${covered ? " is-covered" : ""}`}>
      <div className="feed-footer-links">
        <Link to="/about">about</Link>
        <Link to="/archive">archive</Link>
        <Link to="/partner">partner</Link>
        <Link to="/policies/privacy">privacy</Link>
        <Link to="/policies/terms">terms</Link>
        <Link to="/book">advertise</Link>
        <Link to="/submit-post">submit post</Link>
      </div>

      <p className="feed-copyright">thepoast © 2026</p>
    </footer>
  );
}