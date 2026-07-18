import { business } from "../data/business";
import { SEO_DEFAULTS } from "../data/seo";

export const buildPersonSchema = ({
  name = business.name,
  jobTitle = "Psychic Reader & Spiritual Advisor",
  description,
  image = business.logo,
} = {}) => ({
  "@type": "Person",
  "@id": `${SEO_DEFAULTS.siteUrl}/#person`,
  name,
  jobTitle,
  ...(description && { description }),
  image,
  url: business.url,
  worksFor: { "@id": `${SEO_DEFAULTS.siteUrl}/#organization` },
});
