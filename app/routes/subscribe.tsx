import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";

import info from "~/../public/img/social/info.png";
import li from "~/../public/img/social/linkedin.png";
import x from "~/../public/img/social/x.png";
import ig from "~/../public/img/social/instagram.png";
import yt from "~/../public/img/social/youtube.png";
import j from "~/../public/img/ja7.png";
import logo from "~/../public/img/ja.png";
export default function Index() {
  return (
    <div className="subscribe-container">
      <div className="header">
        <div className="nav">
        <img className="logo" src={logo} alt="The Poast Logo" />
        <Link className="info" to="/info">
            <img src={info} alt="More Info" />
        </Link>
        </div>
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
             <Link to="/">Home</Link>
          </div>
        </div>
          <form method="post" action="https://app.thepoast.com/subscription/form">
          <h1>Get The Poast for free</h1>
          <div className="input-wrapper">
            <input className="email" type="text" name="firstName" placeholder="First Name *" />
          </div>
          <div className="input-wrapper">
            <input className="email" type="email" name="email" required placeholder="Email Address *" />
            <button className="submit" type="submit">Subscribe</button>
          </div>
          <Altcha />
          <input id="6d48f" type="hidden" name="l" checked value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
          <input type="hidden" name="nonce" />
        </form>
          <img className="headerimg" src={j} alt="The Poast" />
      </div>
    </div>
  );
}