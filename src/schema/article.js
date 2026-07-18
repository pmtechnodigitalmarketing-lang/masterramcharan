import { SEO_DEFAULTS } from "../data/seo";

export const buildArticleSchema = (article) => ({
  "@type": "BlogPosting",
  "@id": `${SEO_DEFAULTS.siteUrl}/insights#article-${article.id}`,
  headline: article.title,
  description: article.excerpt,
  image: article.image
    ? `${SEO_DEFAULTS.siteUrl}${encodeURI(article.image)}`
    : SEO_DEFAULTS.image,
  author: { "@id": `${SEO_DEFAULTS.siteUrl}/#person` },
  publisher: { "@id": `${SEO_DEFAULTS.siteUrl}/#organization` },
  mainEntityOfPage: `${SEO_DEFAULTS.siteUrl}/insights`,
  ...(article.datePublished && { datePublished: article.datePublished }),
});
