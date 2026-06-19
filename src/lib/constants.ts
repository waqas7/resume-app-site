export const APP_NAME = "Resume Builder & CV Maker App";
export const APP_SHORT_NAME = "Resume Builder";
export const APP_TAGLINE = "Build ATS-Friendly Resumes in Seconds with AI";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://waqaskay.com";
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=europasscvmake.app.dev";
export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@waqaskay.com";

export const TRUST = {
  rating: 4.8,
  ratingCount: 12500,
  downloadCount: "100K+",
  reviewCount: "12K+",
};

export const KEYWORDS = [
  "resume builder app",
  "CV maker app",
  "ATS resume templates",
  "create resume online",
  "AI resume builder",
];

export const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/templates", label: "Templates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const IMAGES = {
  logo: "/images/logo.svg",
  heroFeatureGraphic: "/images/hero-feature-graphic.svg",
  heroLandDreamJob: "/images/hero-land-dream-job.svg",
  featureGuidedBuilder: "/images/feature-guided-builder.svg",
  featureLivePreview: "/images/feature-live-preview.svg",
  featureTemplates: "/images/feature-templates.svg",
  featureDragDrop: "/images/feature-drag-drop.svg",
  featureManageResumes: "/images/feature-manage-resumes.svg",
  featureExport: "/images/feature-export.svg",
  featureWelcome: "/images/feature-welcome.svg",
  ogDefault: "/images/hero-feature-graphic.svg",
};
