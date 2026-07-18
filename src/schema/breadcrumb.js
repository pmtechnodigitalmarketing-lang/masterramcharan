import { SEO_DEFAULTS } from "../data/seo";

export const buildBreadcrumbSchema = (items = []) => {
  if (!items.length) return null;

  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${SEO_DEFAULTS.siteUrl}${item.url}`,
    })),
  };
};
