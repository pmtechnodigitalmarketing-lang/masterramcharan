import { business } from "../data/business";
import { SEO_DEFAULTS } from "../data/seo";

export const buildLocalBusinessSchema = () => ({
  "@type": "ProfessionalService",
  "@id": `${SEO_DEFAULTS.siteUrl}/#business`,
  name: business.name,
  legalName: business.legalName,
  url: business.url,
  logo: business.logo,
  image: business.logo,
  email: business.email,
  telephone: business.telephone,
  priceRange: business.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.streetAddress,
    addressLocality: business.address.addressLocality,
    addressRegion: business.address.addressRegion,
    postalCode: business.address.postalCode,
    addressCountry: business.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.latitude,
    longitude: business.geo.longitude,
  },
  openingHoursSpecification: business.openingHours.map((hours) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: hours.dayOfWeek,
    opens: hours.opens,
    closes: hours.closes,
  })),
  areaServed: { "@type": "Country", name: "United States" },
  sameAs: business.sameAs,
});
