import { Link } from "@remix-run/react";

import j from "~/../public/img/ja6.png";
import logo from "~/../public/img/ja.png";

export default function Confirm() {
  return (
    <div className="container">
      <div className="header">
        <div className="nav">
        <img className="logo" src={logo} alt="The Poast Logo" />
        <br />
        </div>
        <h1 style={{ fontSize: 52 }}>✓</h1>
        <h1 style={{ fontSize: 30, textAlign: "center" }}>Welcome back to The Poast</h1>
        <h2 style={{ fontSize: 18, textAlign: "left" }}><br />Thanks for giving us a second shot :)</h2>
        <h2 style={{ fontSize: 18, textAlign: "left" }}><br />Expect our fast feed in your inbox every day. It stitches together the best business-minded news, posts, and and snarky comments from across the web. You can check out the latest issue <Link to='/live'>here →</Link></h2>
        <h2 style={{ fontSize: 18, textAlign: "left" }}><br /><em>P.S. If you don't receive an email, please check your spam or promotions folder and "move us" to your primary inbox to ensure you get The Poast each day.</em></h2>
        <h2 style={{ fontSize: 18, textAlign: "left" }}><br />See you soon!</h2>
        <h2 style={{ fontSize: 18, textAlign: "left" }}><br />—The Poast<br /><br /><br /><br /></h2>
        <img className="headerimg" src={j} alt="The Poast" />
      </div>
    </div>
  );
}