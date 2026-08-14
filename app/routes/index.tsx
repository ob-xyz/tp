import { useState, useEffect, useRef } from "react";
import { Link, useNavigation, useActionData, useLoaderData } from "@remix-run/react";
import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import Altcha from "../components/altcha";

import scroll from "~/style/scss/components/showscroll.css";

import li from "~/../public/img/social/linkedin.png";
import x from "~/../public/img/social/x.png";
import ig from "~/../public/img/social/instagram.png";
import info from "~/../public/img/social/info.png";
import yt from "~/../public/img/social/youtube.png";
import j from "~/../public/img/ja6.png";
import logo from "~/../public/img/ja.png";
import txtlogo from "~/../public/img/ja6.png";

export const links = () => [
  { rel: "stylesheet", href: scroll },
  { rel: "preconnect", href: "https://img.thepoast.com" },
  { rel: "dns-prefetch", href: "https://img.thepoast.com" },
];

export function shouldRevalidate() {
  return false;
}

function getExcerpt(html: string = "", subject: string = "", length = 140) {
  if (!html) return "";

  let text = String(html).replace(/\{\{[\s\S]*?\}\}/g, "");

  {
    const boldRe = /<(strong|b|h[1-6])[^>]*>[\s\S]*?<\/\1>/gi;
    let m;
    while ((m = boldRe.exec(text)) !== null) {
      if (!/chris\s+signore/i.test(m[0])) {
        text = text.slice(0, m.index) + text.slice(m.index + m[0].length);
        break;
      }
    }
  }

  text = text.replace(/<[^>]+>/g, " ");
  text = text.replace(/^[\s\S]*?Chris\s+Signore[^\w]*/i, "");
  text = text.replace(/\b(?:https?:\/\/)?(?:www\.)?[\w-]+\.\w{2,}\b/gi, "");
  text = text
    .replace(/this is a \d+ minute.*?read/gi, "")
    .replace(/View Online|Sign Up/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  if (subject) {
    const escapedSubject = String(subject).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    text = text.replace(new RegExp(`^${escapedSubject}\\s*`, "i"), "");

    const words = String(subject).split(/\s+/).filter(Boolean);
    if (words.length > 0) {
      const firstFewWords = words.slice(0, 3).join("\\s+");
      text = text.replace(new RegExp(`^${firstFewWords}\\s*`, "i"), "");
    }
  }

  text = text.replace(/^(?:[a-z0-9][^\s]*\s+)+(?=[A-Z])/, "");
  const cleanedText = text.replace(/^[\s,·•:-]+/, "").trim();

  return cleanedText.length > length
    ? cleanedText.substring(0, length) + "..."
    : cleanedText;
}

function getCoverImage(html: string = "") {
  if (!html) return null;

  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const images: string[] = [];
  let match;

  while ((match = imgRegex.exec(String(html))) !== null) {
    const fullTag = match[0];
    const src = match[1];

    const isAvatarOrIcon =
      /avatar|headshot|profile|logo|icon|author/i.test(fullTag) ||
      /avatar|headshot|profile|logo|icon|author/i.test(src);

    if (!isAvatarOrIcon) {
      images.push(src);
    }
  }

  return images.length > 1 ? images[1] : images[0] || null;
}

let cachedArticles: { data: any[]; timestamp: number } | null = null;
const CACHE_TTL_MS = 10 * 60 * 1000;

export async function loader({ request }: LoaderFunctionArgs) {
  const now = Date.now();

  if (cachedArticles && now - cachedArticles.timestamp < CACHE_TTL_MS) {
    return json(
      { articles: cachedArticles.data },
      {
        headers: {
          "Cache-Control": "public, max-age=600, s-maxage=600",
        },
      }
    );
  }

  const username = process.env.LISTMONK_USERNAME;
  const token = process.env.LISTMONK_TOKEN;
  const authHeader = `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);

  try {
    const response = await fetch(
      "https://app.thepoast.com/api/campaigns?status=finished&order_by=created_at&order=DESC&per_page=30",
      {
        headers: {
          Authorization: authHeader,
          Accept: "application/json",
        },
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`Feed Error: ${response.status} ${response.statusText}`);
      return json({ articles: cachedArticles?.data || [] });
    }

    const data = await response.json();
    const campaigns = data?.data?.results || data?.data || [];

    const cutoffDate = new Date("2026-08-07T00:00:00Z");
    const seenDates = new Set<string>();
    const uniqueDailyCampaigns: any[] = [];

    for (const c of campaigns) {
      const rawDate = c.sent_at || c.created_at;
      if (!rawDate) continue;

      const campaignDate = new Date(rawDate);

      if (campaignDate < cutoffDate) {
        continue;
      }

      const dateKey = campaignDate.toISOString().split("T")[0];

      if (!seenDates.has(dateKey)) {
        seenDates.add(dateKey);
        uniqueDailyCampaigns.push(c);
      }
    }

    const targetCampaigns = uniqueDailyCampaigns.slice(0, 12);

    const fullArticles = await Promise.all(
      targetCampaigns.map(async (c: any) => {
        let bodyContent = c.body || "";

        if (!bodyContent && c.id) {
          try {
            const detailController = new AbortController();
            const detailTimeout = setTimeout(() => detailController.abort(), 2000);

            const detailRes = await fetch(`https://app.thepoast.com/api/campaigns/${c.id}`, {
              headers: { Authorization: authHeader, Accept: "application/json" },
              signal: detailController.signal,
            });
            clearTimeout(detailTimeout);

            if (detailRes.ok) {
              const detailData = await detailRes.json();
              bodyContent = detailData?.data?.body || "";
            }
          } catch (e) {
            // Fall back gracefully if detailed campaign request times out
          }
        }

        return {
          id: c.id,
          subject: c.subject || "Untitled Issue",
          date: c.sent_at || c.created_at || new Date().toISOString(),
          excerpt: getExcerpt(bodyContent, c.subject),
          coverImage: getCoverImage(bodyContent),
        };
      })
    );

    cachedArticles = { data: fullArticles, timestamp: now };

    return json(
      { articles: fullArticles },
      {
        headers: {
          "Cache-Control": "public, max-age=600, s-maxage=600",
        },
      }
    );
  } catch (error: any) {
    clearTimeout(timeoutId);
    console.error("Failed to load feed:", error);
    return json({ articles: cachedArticles?.data || [] });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  console.log("New Poast Subscriber:", email);
  return json({ success: true });
}

export default function Index() {
  const { articles } = useLoaderData<typeof loader>();
  const [showModal, setShowModal] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const headerImgRef = useRef<HTMLImageElement>(null);
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();

  useEffect(() => {
    const isSubscribed = localStorage.getItem("thepoast_subscribed");
    const hasSeenThisSession = sessionStorage.getItem("thepoast_seen_session");

    if (!isSubscribed && !hasSeenThisSession) {
      const timer = setTimeout(() => {
        setShowModal(true);
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

  // Triggers sticky nav as soon as user scrolls to headerimg
  useEffect(() => {
    const headerImg = headerImgRef.current;
    if (!headerImg) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyNav(!entry.isIntersecting),
      { 
        threshold: 0,
        rootMargin: "-500px 0px 0px 0px" // Adjust pixel offset here (-100px, -300px, etc.)
      }
    );

    observer.observe(headerImg);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      {/* STICKY SUBSCRIBE NAV */}
      <div className={`sticky-nav${showStickyNav ? " visible" : ""}`}>
        <img className="sticky-logo" src={logo} alt="The Poast" loading="lazy" decoding="async" />
        <Link to="/subscribe" className="sticky-subscribe">
          Subscribe
        </Link>
      </div>

      {/* POPUP MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img className="" src={txtlogo} alt="The Poast" loading="eager" decoding="async" />
            <p>Trusted by 35,000+ execs and builders</p>
            <p>Know who's winning the arms race with this free newsletter</p>
            <p>Just scroll The Poast to check the leader board.</p>
            <form method="post" action="https://app.thepoast.com/subscription/form">
              <div className="input-wrapper">
                <input className="email" type="email" name="email" required placeholder="Email Address *" />
                <button className="submit" type="submit">
                  {navigation.state === "submitting" ? "..." : "Subscribe"}
                </button>
              </div>
              <Altcha />
              <input id="6d48f" type="hidden" name="l" defaultChecked value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
              <input type="hidden" name="nonce" />
            </form>
            <p className="dismiss-text" onClick={() => setShowModal(false)}>
              No thanks! I'm already subscribed
            </p>
          </div>
        </div>
      )}

      {/* HEADER SECTION */}
      <div className="header">
        <div className="nav">
          <img className="logo" src={logo} alt="The Poast Logo" loading="eager" decoding="async" />
          <Link className="info" to="/info">
            <img src={info} alt="More Info" loading="lazy" decoding="async" />
          </Link>
        </div>
        <h1>This free newsletter is the fastest way to become smarter about AI.</h1>
        <h2>Every day, 35,000+ execs and builders scroll The Poast to know who's winning the AI arms race.</h2>
        <div className="outer-header">
          <div className="inner-header">
            <div className="social">
              <a className="x" href="https://x.com/thepoast" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="X (Twitter)" loading="lazy" decoding="async" />
              </a>
              <a className="ig" href="https://instagram.com/thepoast" target="_blank" rel="noopener noreferrer">
                <img src={ig} alt="Instagram" loading="lazy" decoding="async" />
              </a>
              <a className="li" href="https://linkedin.com/company/thepoast" target="_blank" rel="noopener noreferrer">
                <img src={li} alt="LinkedIn" loading="lazy" decoding="async" />
              </a>
              <a className="yt" href="https://youtube.com/@thepoast" target="_blank" rel="noopener noreferrer">
                <img src={yt} alt="YouTube" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
          <div className="inner-header2">
            <Link to="/subscribe">Subscribe</Link>
          </div>
        </div>
        {/* IntersectionObserver ref bound directly to headerimg */}
        <img
          ref={headerImgRef}
          className="headerimg"
          src={j}
          alt="The Poast"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </div>

      {/* ARCHIVE FEED SECTION */}
      {articles && articles.length > 0 && (
        <main className="feed-container">
          <section className="article-grid">
            {articles.map((article: any, index: number) => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="article-card-link"
              >
                <article className="feed-card">
                  {article.coverImage && (
                    <div className="card-image-wrapper">
                      <img
                        src={article.coverImage}
                        alt={article.subject}
                        loading={index < 3 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                  )}
                  <div className="card-content">
                    <span className="card-date">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <h2 className="card-title">{article.subject}</h2>
                    <p className="card-excerpt">{article.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </section>
        </main>
      )}
    </div>
  );
}