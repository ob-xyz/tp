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
              <p>Hey - I'm happy you finally found this section!</p>
              <p> I know this wasn't the easiest place to stumble into, but now that's you're here, I might as well let you in on some internet gold.</p>
              <p>For years, I've been obsessed with one question.</p>
              <p><b>How should we consume information on a noisy internet?</b></p>
              <p>This single question has taken my down the weirdest rabbit holes. But first I want to tell you a bit about me....</p>
              <p>I'm Chris Signore. I grew up in a small town in Canada called Westport. It had roughly 600 people when we moved there, and still has roughly 600 people. And it's a big reason I still love living here.</p>
              <p>But I did have to move away. To get my business degree from university. And for my first job at ProSlide Technology. It lasted half a decade before I had the courage to go back to my roots and build things for myself.</p>
              <p>In 2017 I started doing just that. I began by posting about business news and stocks across the internet, rediscovering my love for making things (even if it was just content).</p>
              <p>I couldn't help but noticed the internet had changed a lot since I was a kid. There were a few big companies who controlled all the attention, and they were amplifying the worse.</p>
              <p>So I launched Jeffamazon. My first email newsletter. And a way to own my audience.</p>
              <p>It blew up with more people signing up than I could ever on-board. It forced me to rethink everything.</p>
              <p>So I tore it all down and started rebuilding the foundation. By 2020 I had a functional product and started to scale my on-boarding and develop a daily cadance.</p>
              <p>And by the mid-2020s it began to look less and less like a newsletter and more like a newsfeed but without the profile pictures or people. It was a weird moment in time for Jeffamazon that eventually led to me registering thepoast.com.</p>
              <p>But it was still a big struggled. So I tore it all down again and went all in on The Poast. My goal? The world's first email newsfeed with real people, real stories, and real posts from across the web.</p>
              <p>I'm still all in on The Poast and it's growing faster than ever. But as much as I wanna brag about it, it's really one of those products you just gotta experience for yourself.</p>
              <p>Sign up for free at <Link className="subscribe" to="/subscribe">thepoast.com/subscribe</Link></p>
              <p>Cheers<br />Chris Signore</p>
          </div>
        </div>
        </div>
    </div>
  );
}