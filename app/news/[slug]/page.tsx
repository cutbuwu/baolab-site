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

  // FAQ schema for articles with FAQ sections
  const faqJsonLd = slug === "denza-b8-factory-sentry-mode" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does sentry mode drain the battery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, sentry mode consumes electricity while active. However, the Retained SOC setting automatically shuts it off when your battery drops to your chosen threshold (30-80%). Denza recommends fully charging at least once a week if sentry mode is on all the time."
        }
      },
      {
        "@type": "Question",
        name: "Do I need a memory card for sentry mode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You need a 32GB or larger memory card inserted in the vehicle's card slot. Without it, sentry mode will still detect movement and alert you, but recordings won't be saved."
        }
      },
      {
        "@type": "Question",
        name: "Will sentry mode affect my warranty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Factory sentry mode is an official Denza feature delivered via OTA update. It's fully supported and does not affect your vehicle's warranty."
        }
      },
      {
        "@type": "Question",
        name: "Does sentry mode work in the dark?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sentry mode uses the vehicle's cameras to detect movement. However, Denza notes that ambient light and camera performance limitations may affect detection accuracy in very dark or very bright conditions."
        }
      },
      {
        "@type": "Question",
        name: "Can I use sentry mode and ADB-enabled apps at the same time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If you've enabled ADB on your B8, the factory sentry mode update won't affect your ADB access. Both can work independently."
        }
      },
      {
        "@type": "Question",
        name: "Why do my side mirrors unfold when sentry mode is on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The side mirrors unfold to give the cameras a clear view of the vehicle's surroundings. This is normal behavior. Be mindful of mirror damage if you park in very tight spaces."
        }
      }
    ]
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
