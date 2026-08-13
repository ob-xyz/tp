import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import scroll from "~/style/scss/components/showscroll.css";

export const links = () => [{ rel: "stylesheet", href: scroll }];

function getExcerpt(html: string = "", subject: string = "", length = 140) {
  if (!html) return "";

  // 1. Strip Go template tags
  let text = html.replace(/\{\{[\s\S]*?\}\}/g, "");

  // 2. Convert HTML tags to spaces
  text = text.replace(/<[^>]+>/g, " ");

  // 3. Strip everything up through the author header line/signature block
  text = text.replace(/^[\s\S]*?Chris\s+Signore[^\w]*/i, "");

  // 4. Fallback cleanup for remaining meta phrases
  text = text
    .replace(/this is a \d+ minute.*?read/gi, "")
    .replace(/View Online|Sign Up/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  // 5. Strip duplicate campaign subject if repeated at start of body preview
  if (subject) {
    const escapedSubject = subject.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const subjectRegex = new RegExp(`^${escapedSubject}\\s*`, "i");
    text = text.replace(subjectRegex, "");
  }

  // 6. Clean up leading punctuation or symbols
  const cleanedText = text.replace(/^[\s,·•:-]+/, "");

  return cleanedText.length > length
    ? cleanedText.substring(0, length) + "..."
    : cleanedText;
}

function getCoverImage(html: string = "") {
  if (!html) return null;

  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const images: string[] = [];
  let match;

  while ((match = imgRegex.exec(html)) !== null) {
    const fullTag = match[0];
    const src = match[1];

    const isAvatarOrIcon =
      /avatar|headshot|profile|logo|icon|author/i.test(fullTag) ||
      /avatar|headshot|profile|logo|icon|author/i.test(src);

    if (!isAvatarOrIcon) {
      images.push(src);
    }
  }

  // Returns the 2nd valid story image (skips header image)
  return images.length > 1 ? images[1] : images[0] || null;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const username = process.env.USERNAME;
  const token = process.env.TOKEN;
  const authHeader = `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`;

  try {
    const response = await fetch(
      "https://app.thepoast.com/api/campaigns?status=finished&order_by=created_at&order=DESC&per_page=50",
      {
        headers: {
          Authorization: authHeader,
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      console.error(`Listmonk Feed Error: ${response.status} ${response.statusText}`);
      return json({ articles: [] });
    }

    const data = await response.json();
    const campaigns = data?.data?.results || data?.data || [];

    const cutoffDate = new Date("2026-08-01T00:00:00Z");
    const seenDates = new Set<string>();
    const uniqueDailyCampaigns: any[] = [];

    for (const c of campaigns) {
      const rawDate = c.sent_at || c.created_at;
      if (!rawDate) continue;

      const campaignDate = new Date(rawDate);

      // Ignore anything before August 1, 2026
      if (campaignDate < cutoffDate) {
        continue;
      }

      // Deduplicate to 1 campaign per calendar day
      const dateKey = campaignDate.toISOString().split("T")[0];

      if (!seenDates.has(dateKey)) {
        seenDates.add(dateKey);
        uniqueDailyCampaigns.push(c);
      }
    }

    const articles = uniqueDailyCampaigns.slice(0, 12).map((c: any) => ({
      id: c.id,
      subject: c.subject || "Untitled Issue",
      date: c.sent_at || c.created_at || new Date().toISOString(),
      excerpt: getExcerpt(c.body, c.subject),
      coverImage: getCoverImage(c.body),
    }));

    return json({ articles });
  } catch (error) {
    console.error("Failed to load feed:", error);
    return json({ articles: [] });
  }
}

export default function Feed() {
  const { articles } = useLoaderData<typeof loader>();

  if (!articles || articles.length === 0) {
    return (
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>No published articles found.</h2>
      </div>
    );
  }

  return (
    <main className="feed-container">
      <header className="feed-header">
        <h1>The Poast Archive</h1>
      </header>

      <section className="article-grid">
        {articles.map((article: any) => (
          <Link
            key={article.id}
            to={`/articles/${article.id}`}
            className="article-card-link"
          >
            <article className="feed-card">
              {article.coverImage && (
                <div className="card-image-wrapper">
                  <img src={article.coverImage} alt={article.subject} />
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
  );
}