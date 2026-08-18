import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

const routes = [
  "/",
  "/work/masonry-redesign",
  "/work/masonry-weather-planner",
  "/work/lol-draft-helper",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
