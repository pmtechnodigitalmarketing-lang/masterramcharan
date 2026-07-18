import fs from "fs";
import { services } from "../src/data/services.js";
import { stateSlugs } from "../src/data/locations.js";
import { SEO_DEFAULTS } from "../src/data/seo.js";

const DOMAIN = SEO_DEFAULTS.siteUrl;

const today = new Date().toISOString().split("T")[0];

// Static pages
const staticRoutes = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    path: "/about",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/services",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/faq",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/contact",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/insights",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    path: "/find-us",
    priority: "0.7",
    changefreq: "monthly",
  },
];

// Service pages
const serviceRoutes = services.map((service) => ({
  path: `/services/${service.id}`,
  priority: "0.8",
  changefreq: "monthly",
}));

// State pages
const locationRoutes = stateSlugs.map((slug) => ({
  path: `/location/${slug}`,
  priority: "0.7",
  changefreq: "monthly",
}));

const routes = [
  ...staticRoutes,
  ...serviceRoutes,
  ...locationRoutes,
];

const urls = routes
  .map(
    (route) => `
  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);

console.log(`✅ Sitemap generated successfully!`);
console.log(`Static Pages : ${staticRoutes.length}`);
console.log(`Services     : ${serviceRoutes.length}`);
console.log(`Locations    : ${locationRoutes.length}`);
console.log(`Total URLs   : ${routes.length}`);