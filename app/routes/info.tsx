import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Altcha from "../components/altcha";
import scroll from "~/style/scss/components/showscroll.css";

import info from "~/../public/img/social/info.png";
import cs from "~/../public/img/cs.jpg";
import li from "~/../public/img/social/linkedin.png";
import x from "~/../public/img/social/x.png";
import ig from "~/../public/img/social/instagram.png";
import yt from "~/../public/img/social/youtube.png";
import logo from "~/../public/img/ja.png";

import ti from "~/../public/img/press/ti.svg";
import wsj from "~/../public/img/press/wsj.svg";
import nyt from "~/../public/img/press/nyt.svg";
import bi from "~/../public/img/press/bi.svg";
import fastco from "~/../public/img/press/fastcompany.svg";
import bloomberg from "~/../public/img/press/bloomberg.svg";
import cnbc from "~/../public/img/press/cnbc.svg";
import axios from "~/../public/img/press/axios.svg";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: scroll },
];
export default function Index() {
  return (
    <div className="moreinfo-container">
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
      </div>
        <div className="inner-container">
            <h2>Editor-in-Chief</h2>
            <div className="profile-outside">
            <div className="profile">
                <a href="https://linkedin.com/in/chrissignore" target="_blank" rel="noopener noreferrer">
                <img className="headerimg" src={cs} alt="It's me (Chris Signore)" />
                <div className="inner-profile">
                    <h1>Chris Signore</h1>
                    <div className="social">
                        <a className="li" href="https://linkedin.com/in/chrissignore" target="_blank" rel="noopener noreferrer">
                            <img src={li} alt="LinkedIn" />
                        </a>
                        <a className="x" href="https://x.com/chrissignore" target="_blank" rel="noopener noreferrer">
                            <img src={x} alt="X (Twitter)" />
                        </a>
                    </div>
                </div>
                </a>
            </div>
            <div className="subscribe">
                <h1>Get The Poast for free</h1>
                <div className="logo-grid">
                    <form method="post" action="https://app.thepoast.com/subscription/form">
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
                </div>
            </div>
            </div>
        </div>
        <div className="inner-container2">
        <h2>Selected Press</h2>
        <div className="outer-header">
          <div className="inner-header">
            <div className="social">
                <a href="https://wsj.com/" target="_blank" rel="noopener noreferrer">
                <img src={wsj} alt="Wall Street Journal" />
              </a>
                <a href="https://cnbc.com/" target="_blank" rel="noopener noreferrer">
                <img src={cnbc} alt="CNBC" />
              </a>
              <a href="https://bloomberg.com" target="_blank" rel="noopener noreferrer">
                <img src={bloomberg} alt="Bloomberg" />
              </a>
              <a href="https://fastcompany.com" target="_blank" rel="noopener noreferrer">
                <img src={fastco} alt="Fast Company" />
              </a>
            </div>
            <div className="social">
                <a href="https://businessinsider.com/" target="_blank" rel="noopener noreferrer">
                <img src={bi} alt="Business Insider" />
              </a>
                <a href="https://theinformation.com/" target="_blank" rel="noopener noreferrer">
                <img src={ti} alt="The Information" />
              </a>
              <a href="https://nyt.com/" target="_blank" rel="noopener noreferrer">
                <img src={nyt} alt="New York Times" />
              </a>
              <a href="https://axios.com/@" target="_blank" rel="noopener noreferrer">
                <img src={axios} alt="Axios" />
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="inner-container3">
        <h2>About The Poast</h2>
        <div className="outer-header">
          <div className="inner-header">
            <p>Every app just wants one thing: your time.</p>
            <p>One more scroll. One more click. One more notification.</p>
            <p>It's not that there's too much information. It's that finding the signal means walking through hours of noise designed to keep you there.</p>
            <p>I know because I tried to escape. I deleted the apps. I even tried ditching my phone. And it worked.</p>
            <p>I noticed I'd fall asleep almost instantly. Then I'd wake up wiggling my toes, ready to go. I started following through on the things I'd always said I'd do, and my relationships became drastically better.</p>
            <p>But it came with one nagging problem. I still felt disconnected from my friends, my family, and even my interests. The strange part is that leaving the apps doesn't just disconnect you from social media—it changes how you feel connected to the world.</p>
            <p>I still wanted to catch the important ideas, the new breakthroughs, and the people building the coolest things on the planet. After all, they're the ones driving the conversations that really matter.</p>
            <p>I knew I didn't want another endless feed. So I started building the thing I wished already existed.</p>
            <p><strong>The Poast</strong> is a one-minute daily feed of the most interesting ideas, posts, and trends in technology.</p>
            <p>No algorithm. No infinite scroll. No rage bait.</p>
            <p>Just enough to know what's happening, so you can spend the other 23 hours and 59 minutes building your life.</p>
            <p>If you're building a company, investing in the future, or simply curious about where the world is going, it's time to start protecting your attention.</p>
            <p><strong>Scroll less. Know more.</strong></p>
            <p>Chris Signore from The Poast</p>
          </div>
        </div>
        </div>
    </div>
  );
}