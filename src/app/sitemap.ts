import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";
import { getAllSlugs } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/contact",
    "/blog",
    ...PROJECTS.map((p) => p.href),
    "/resume-builder/features",
    "/resume-builder/templates",
    "/resume-builder/pricing",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path.startsWith("/resume-builder") && !path.includes("/") ? 0.9 : 0.8,
  }));

  const blogRoutes = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
