import type { Metadata } from "next";
import { IMAGES, KEYWORDS, SITE_URL } from "./constants";
import { BRAND } from "./projects";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = KEYWORDS,
  ogImage = path === "/" ? BRAND.logo : IMAGES.ogDefault,
  ogImageAlt = path === "/" ? BRAND.logoAlt : IMAGES.ogAlt,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === "/"
      ? `${BRAND.name} — ${title}`
      : `${title} | ${BRAND.name}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: fullTitle,
      description,
      siteName: BRAND.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/images/resume-builder-app-icon-192.png", sizes: "192x192", type: "image/png" },
        { url: IMAGES.appIcon, sizes: "512x512", type: "image/webp" },
      ],
      apple: [
        { url: "/images/resume-builder-app-icon-192.png", sizes: "192x192", type: "image/png" },
      ],
    },
  };
}
