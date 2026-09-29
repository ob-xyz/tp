import { Link } from "@remix-run/react";
import { useEffect, useState, type ReactNode } from "react";
import logo from "~/../public/img/tp.png";

type TocItem = { id: string; label: string };

type LegalPageProps = {
  title: string;
  effective: string;
  toc?: TocItem[];
  children: ReactNode;
};

export default function LegalPage({
  title,
  effective,
  toc,
  children,
}: LegalPageProps) {
  const [showStickyNav, setShowStickyNav] = useState(false);

  /* ------------------------------ STICKY NAV ------------------------------ */
  useEffect(() => {
    const handleScroll = () => setShowStickyNav(window.scrollY > 50);

    handleScroll(); // handle reloads midway down the page
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="content-privacy" id="top-of-page">
      {/* STICKY SUBSCRIBE NAV */}
      <div className={`sticky-nav${showStickyNav ? " visible" : ""}`}>
        <Link className="sticky-logo" to="/" aria-label="The Poast home">
          <img src={logo} alt="The Poast" loading="lazy" decoding="async" />
        </Link>
        <Link to="/subscribe" className="sticky-subscribe">
          Subscribe
        </Link>
      </div>

      <Link to="/" className="logo" aria-label="The Poast home">
        <img src={logo} alt="The Poast Logo" />
      </Link>

      <main className="content-privacy2">
        <h2>
          <span>{title}.</span>
          <br />
          Effective: {effective}.
        </h2>

        {toc && toc.length > 0 && (
          <nav className="legal-toc" aria-label="On this page">
            <p className="legal-toc-label">On this page</p>
            <ol>
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {children}

        <a className="legal-top" href="#top-of-page">
          Back to top ↑
        </a>
      </main>

    </div>
  );
}