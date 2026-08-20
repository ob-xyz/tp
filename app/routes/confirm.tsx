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
        <h2 style={{ fontSize: 18, textAlign: "left" }}><br />Thanks for giving me a second shot :)</h2>
        <h2 style={{ fontSize: 18, textAlign: "left" }}><br />Expect my feed in your inbox every morning. It brings together the world’s top business-minded news, comments, and posts from across the web, and delivers it to you in a fast feed that takes about a minute to read. Check out the <Link to='/live'>latest issue here →</Link></h2>
        <h2 style={{ fontSize: 18, textAlign: "left" }}><br /><em>P.S. If you don't receive an email, please check your spam or promotions folder and "move us" to your primary inbox to ensure you get the poast each morning.</em></h2>
        <h2 style={{ fontSize: 18, textAlign: "left" }}><br />See you bright and early 🏴‍☠️</h2>
        <h2 style={{ fontSize: 18, textAlign: "left" }}><br />—Chris from The Poast<br /><br /><br /><br /></h2>
        <img className="headerimg" src={j} alt="The Poast" />
      </div>
    </div>
  );
}