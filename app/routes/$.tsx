import { Link } from "@remix-run/react";

import li from "~/../public/img/social/linkedin.png";
import x from "~/../public/img/social/x.png";
import ig from "~/../public/img/social/instagram.png";
import yt from "~/../public/img/social/youtube.png";
import j from "~/../public/img/ja6.png";
import logo from "~/../public/img/ja.png";
import info from "~/../public/img/social/info.png";

export default function Index() {
  return (
    <div className="container">
      <div className="header">
        <div className="nav">
        <img className="logo" src={logo} alt="The Poast Logo" />
        {/* <Link className="info" to="/info">
            <img src={info} alt="More Info" />
        </Link> */}
        </div>
        <h1>This is the fastest way to keep up with tech</h1>
        <h2><a href="/today">The Poast</a> is like a LinkedIn or X feed, but for email. Just scroll to read what's happening in tech.</h2>
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
            <Link to="/subscribe">Subscribe</Link>
          </div>
        </div>
        <img className="headerimg" src={j} alt="The Poast" />
                <div className="err">
            <h1>404 | This page could not be found.</h1>
        </div>
      </div>
    </div>
  );
}