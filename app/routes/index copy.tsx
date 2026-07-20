import { useState, useEffect } from "react";
import { Link, Form, useNavigation, useActionData } from "@remix-run/react";
import { json, type ActionFunctionArgs } from "@remix-run/node";
import Altcha from "../components/altcha";

import li from "~/../public/img/social/linkedin.png";
import x from "~/../public/img/social/x.png";
import ig from "~/../public/img/social/instagram.png";
import info from "~/../public/img/social/info.png";
import yt from "~/../public/img/social/youtube.png";
import j from "~/../public/img/ja7.png";
import logo from "~/../public/img/ja.png";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  // Logic for your Poast-specific mailing list here
  console.log("New Poast Subscriber:", email);
  return json({ success: true });
}

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();

  useEffect(() => {
    // Unique keys for The Poast tracking
    const isSubscribed = localStorage.getItem("thepoast_subscribed");
    const hasSeenThisSession = sessionStorage.getItem("thepoast_seen_session");

    // Only trigger if they haven't subscribed AND haven't seen it in this tab session
    if (!isSubscribed && !hasSeenThisSession) {
      const timer = setTimeout(() => {
        setShowModal(true);
        // Mark as seen immediately so it doesn't re-trigger during navigation
        sessionStorage.setItem("thepoast_seen_session", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (actionData?.success) {
      localStorage.setItem("thepoast_subscribed", "true");
      setShowModal(false);
    }
  }, [actionData]);

  return (
    <div className="container">
      {/* POPUP MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>Sign up to The Poast's fast feed</p>
            <p>Start your day with an unfair advantage. Sign up to our fast feed of technology's best posts. Plus, the top AI tools, links, and ideas in your inbox every day.</p>
            <form method="post" action="https://app.thepoast.com/subscription/form">
              <div className="input-wrapper">
                <input className="email" type="email" name="email" required placeholder="Email Address *" />
                <button className="submit" type="submit">
                  {navigation.state === "submitting" ? "..." : "Sign Up"}
                </button>
              </div>
              <Altcha />
              <input id="6d48f" type="hidden" name="l" checked value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
              <input type="hidden" name="nonce" />
            </form>
              <p className="dismiss-text" onClick={() => setShowModal(false)}>
              No thanks! I'm already signed up
            </p>
          </div>
        </div>
      )}

      {/* HEADER SECTION */}
      <div className="header">
        <div className="nav">
        <img className="logo" src={logo} alt="The Poast Logo" />
        {/* <Link className="info" to="/info">
            <img src={info} alt="More Info" />
        </Link> */}
        </div>
        <h1>This newsfeed is the fastest way to keep up with tech without having to doomscroll</h1>
        <h2>Every day <a href="/today">The Poast</a> connects technology's top voices and posts into a 1-minute newsfeed delivered to 40,000+ execs and builders across the world.</h2>
          <div className="outer-header">
          <div className="inner-header">
            <div className="social">
              <a className="x" href="https://x.com/thepoast" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="X (Twitter)" />
              </a>
              <a className="ig" href="https://instagram.com/thepoast" target="_blank" rel="noopener noreferrer">
                <img src={ig} alt="Instagram" />
              </a>
              <a className="li" href="https://linkedin.com/company/thepoast" target="_blank" rel="noopener noreferrer">
                <img src={li} alt="LinkedIn" />
              </a>
              <a className="yt" href="https://youtube.com/@thepoast" target="_blank" rel="noopener noreferrer">
                <img src={yt} alt="YouTube" />
              </a>
            </div>
          </div>
          <div className="inner-header2">
            <Link to="/subscribe">Sign&nbsp;up</Link>
          </div>
        </div>
        <img className="headerimg" src={j} alt="The Poast" />
            
      </div>

    </div>
  );
}