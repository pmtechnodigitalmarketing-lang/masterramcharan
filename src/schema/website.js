import { SEO_DEFAULTS } from "../data/seo";

export const buildWebsiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${SEO_DEFAULTS.siteUrl}/#website`,
  name: SEO_DEFAULTS.siteName,
  url: SEO_DEFAULTS.siteUrl,
  publisher: { "@id": `${SEO_DEFAULTS.siteUrl}/#organization` },
});
