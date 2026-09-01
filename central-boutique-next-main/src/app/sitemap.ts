import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hotelcentral.co.in";
  const routes = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/rooms",
    "/services",
    "/hotel/overview",
    "/hotel/rooms-suites",
    "/hotel/offers",
    "/privacy-policy",
    "/terms-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/hotel/") ? 0.8 : 0.6,
  }));
}
