import type { Metadata } from "next";
import { articles, getArticleBySlug } from "../data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const article = getArticleBySlug(slug);
    if (!article) return {};
    return {
      title: `${article.title} — BAOLAB News`,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        url: `https://baolab.au/news/${slug}`,
        type: "article",
        publishedTime: article.date,
      },
    };
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    datePublished: article.date,
    description: article.excerpt,
    url: `https://baolab.au/news/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "BAOLAB",
      url: "https://baolab.au",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="section">
        <div className="container article-container">
          <a href="/news" className="article-back">
            ← Back to News
          </a>

          <div className="article-meta">
            <span className="news-category">{article.category}</span>
            <span className="news-date">
              {new Date(article.date).toLocaleDateString("en-AU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="article-title">{article.title}</h1>

          {article.image && (
            <div className="article-hero">
              <img src={article.image} alt={article.title} />
            </div>
          )}

          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {article.related && article.related.length > 0 && (
            <div className="article-related">
              <h3>Related Articles</h3>
              <div className="related-links">
                {article.related.map((r) => (
                  <a
                    key={r.slug}
                    href={`/news/${r.slug}`}
                    className="related-card"
                  >
                    {r.title} →
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
