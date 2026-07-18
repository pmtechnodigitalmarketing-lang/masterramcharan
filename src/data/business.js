// Single source of truth for NAP (Name/Address/Phone) and other business
// facts used across SEO metadata, structured data, and contact UI.
//
// NOTE: openingHours below is a placeholder (most psychic/astrology
// consultations are phone/video based) — confirm and edit if the real
// hours differ. geo lat/lon were geocoded from the street address via
// OpenStreetMap Nominatim and should be cross-checked against the
// business's Google Business Profile for exact precision.

export const business = {
  name: 'Psychic Charan',
  legalName: 'Psychic Charan Elite Consulting',
  url: 'https://psychiccharan.com',
  logo: 'https://psychiccharan.com/images/Psychic%20Charan%20Logo.webp',
  email: 'Psychiccharan@gmail.com',
  telephone: '+14704611807',
  telephoneDisplay: '+1 (470) 461-1807',
  whatsapp: '+14704611807',
  address: {
    streetAddress: '3740 Club Dr #2209',
    addressLocality: 'Duluth',
    addressRegion: 'GA',
    postalCode: '30096',
    addressCountry: 'US',
  },
  addressDisplay: '3740 Club Dr #2209, Duluth, GA 30096',
  geo: {
    latitude: 34.0106973,
    longitude: -84.1731873,
  },
  openingHours: [
    {
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday',
      ],
      opens: '09:00',
      closes: '21:00',
    },
  ],
  priceRange: '$$$',
  sameAs: [],
};

export const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(business.addressDisplay)}`;
export const telHref = `tel:${business.telephone}`;
export const whatsappHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;
export const mailtoHref = `mailto:${business.email}`;
