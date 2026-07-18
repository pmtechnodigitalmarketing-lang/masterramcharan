import { business } from "../data/business";
import { SEO_DEFAULTS } from "../data/seo";

export const buildOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": `${SEO_DEFAULTS.siteUrl}/#organization`,
  name: business.name,
  legalName: business.legalName,
  url: business.url,
  logo: business.logo,
  image: business.logo,
  email: business.email,
  telephone: business.telephone,
  sameAs: business.sameAs,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: business.telephone,
    email: business.email,
    contactType: "customer service",
    areaServed: "US",
  },
});
