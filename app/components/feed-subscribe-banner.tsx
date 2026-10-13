import { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";

import Altcha from "~/components/altcha";

interface FeedSubscribeBannerProps {
  visible: boolean;
}

export default function FeedSubscribeBanner({
  visible,
}: FeedSubscribeBannerProps) {
  const [expanded, setExpanded] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (expanded && visible) {
      emailRef.current?.focus({ preventScroll: true });
    }
  }, [expanded, visible]);

  return (
    <aside
      className={`feed-banner${visible ? " is-visible" : ""}`}
      aria-label="Subscribe to thepoast"
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="feed-banner-inner">
        <div className="feed-banner-title">
          Get The Poast for free
        </div>

        {!expanded ? (
          <button
            type="button"
            className="feed-banner-btn"
            onClick={() => setExpanded(true)}
          >
            Subscribe
          </button>
        ) : (
          <form
            method="post"
            action="https://app.thepoast.com/subscription/form"
            className="feed-banner-form"
          >
            <div className="feed-input-bar">
              <input
                className="feed-input email-input"
                type="email"
                name="email"
                required
                ref={emailRef}
                placeholder="Email Address *"
              />

              <button
                className="feed-submit"
                type="submit"
              >
                Subscribe
              </button>
            </div>

            <div className="feed-verify-row">
              <div className="feed-altcha-wrap">
                <Altcha />
              </div>

              <div className="feed-legal">
                By submitting, you agree to our{" "}
                <Link to="/policies/terms">
                  terms
                </Link>{" "}
                &amp;{" "}
                <Link to="/policies/privacy">
                  privacy
                </Link>
              </div>
            </div>

            <input
              id="6d48f"
              type="hidden"
              name="l"
              value="6d48fffe-7d37-4c14-b317-3e4cda33a647"
            />

            <input
              type="hidden"
              name="nonce"
            />
          </form>
        )}
      </div>
    </aside>
  );
}