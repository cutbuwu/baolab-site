import type { Metadata } from "next";
import { getArticlesSorted } from "./data";

export const metadata: Metadata = {
  title: "Denza News Australia — BAOLAB",
  description:
    "The latest Denza news, launches, and technology updates for Australia. Z9 GT, B5, B8, D9, Flash Charge, and more.",
  openGraph: {
    title: "Denza News Australia — BAOLAB",
    description:
      "Latest Denza news, launches, and technology updates for Australia.",
    url: "https://baolab.au/news",
  },
};

export default function NewsPage() {
  const sorted = getArticlesSorted();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Denza Australia News",
    itemListElement: sorted.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://baolab.au/news/${a.slug}`,
      name: a.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <p className="news-label">NEWS</p>
            <h1>Denza in Australia</h1>
            <p>
              Launches, technology, and everything happening with Denza &amp; BYD
              Down Under.
            </p>
          </div>

          <div className="news-grid">
            {sorted.map((article) => (
              <a
                key={article.slug}
                href={`/news/${article.slug}`}
                className="news-card"
              >
                {article.image && (
                  <div className="news-card-image">
                    <img src={article.image} alt={article.title} className="news-listing-image" />
                  </div>
                )}
                <div className="news-card-meta">
                  <span className="news-category">{article.category}</span>
                  <span className="news-date">
                    {new Date(article.date).toLocaleDateString("en-AU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="news-card-title">{article.title}</h2>
                <p className="news-card-excerpt">{article.excerpt}</p>
                <span className="news-card-link">Read article →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
