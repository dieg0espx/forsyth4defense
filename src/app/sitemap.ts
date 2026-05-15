import type { MetadataRoute } from "next";

const SITE_URL = "https://www.forsyth4defense.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "",
    "/attorney",
    "/philosophy",
    "/personal",
    "/resources",
    "/news",
    "/testimonials",
    "/contact",
    "/privacy",
    "/disclaimer",
    "/sitemap-page",
    "/practice-areas/sex-crimes",
    "/practice-areas/dui",
    "/practice-areas/three-strikes",
    "/practice-areas/domestic-violence",
    "/practice-areas/cannabis",
    "/practice-areas/federal-weapons",
    "/practice-areas/attempted-homicide",
    "/practice-areas/homicide-kidnapping",
    "/cases/recent",
    "/cases/past",
    "/cases/sex-crimes",
    "/cases/dui",
    "/cases/three-strikes",
    "/cases/domestic-violence",
    "/cases/suzanne-little",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/practice-areas") ? 0.8 : 0.6,
  }));
}
