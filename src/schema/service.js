import { SEO_DEFAULTS } from "../data/seo";

export const buildServiceSchema = (service) => ({
  "@type": "Service",
  "@id": `${SEO_DEFAULTS.siteUrl}/services/${service.id}#service`,
  name: service.title,
  description: service.shortDescription,
  url: `${SEO_DEFAULTS.siteUrl}/services/${service.id}`,
  serviceType: service.title,
  provider: { "@id": `${SEO_DEFAULTS.siteUrl}/#organization` },
  areaServed: { "@type": "Country", name: "United States" },
  ...(service.image && {
    image: `${SEO_DEFAULTS.siteUrl}${encodeURI(service.image)}`,
  }),
});
