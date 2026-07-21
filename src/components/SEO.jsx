import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SEO_DEFAULTS } from "../data/seo";

const toAbsoluteUrl = (path) => {
  if (!path) return SEO_DEFAULTS.siteUrl;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SEO_DEFAULTS.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

/**
 * Reusable enterprise SEO component. Renders meta tags, Open Graph, Twitter
 * Cards, and (optionally) one or more JSON-LD schema objects via the
 * `schema` prop â€” pass an array of objects produced by the builders in
 * `src/schema/*.js` (no `@context` needed on each, it's added here).
 */
const SEO = ({
  title = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
  keywords = SEO_DEFAULTS.keywords,
  canonical,
  image = SEO_DEFAULTS.image,
  imageAlt = SEO_DEFAULTS.imageAlt,
  robots,
  noindex = false,
  type = "website",
  schema = [],
}) => {
  const location = useLocation();
  const url = toAbsoluteUrl(canonical || location.pathname);
  const absoluteImage = toAbsoluteUrl(image);
  const robotsContent = noindex ? "noindex, nofollow" : robots || SEO_DEFAULTS.robots;

  const schemaList = (Array.isArray(schema) ? schema : [schema]).filter(Boolean);
  const jsonLd =
    schemaList.length === 0
      ? null
      : schemaList.length === 1
      ? { "@context": "https://schema.org", ...schemaList[0] }
      : { "@context": "https://schema.org", "@graph": schemaList };

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SEO_DEFAULTS.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
