import type { Metadata } from "next";
import { APP_NAME, KEYWORDS, SITE_URL } from "./constants";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = KEYWORDS,
  ogImage = "/images/hero-feature-graphic.svg",
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === "/" ? `${title} | ${APP_NAME}` : `${title} | ${APP_NAME}`;

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
      siteName: APP_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: APP_NAME }],
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
      icon: "/images/logo.svg",
      apple: "/images/logo.svg",
    },
  };
}
