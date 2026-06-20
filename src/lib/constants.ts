export const APP_NAME = "Resume Builder & CV Maker App";
export const APP_SHORT_NAME = "Resume Builder";
export const APP_TAGLINE = "Build ATS-Friendly Resumes in Seconds with AI";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://muhammadwaqaskhan.com";
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=europasscvmake.app.dev";
export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@muhammadwaqaskhan.com";

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
  logoAlt: "Resume Builder and CV Maker App logo UK",
  ogDefault: "/images/og-resume-builder-app.svg",
  ogAlt:
    "ATS resume builder app — create professional UK CVs with AI templates and PDF export",
  avatars: {
    sarah: "/images/avatars/reviewer-sarah-marketing-uk.webp",
    james: "/images/avatars/reviewer-james-tech-uk.webp",
    priya: "/images/avatars/reviewer-priya-graduate-uk.webp",
  },
};

export const REVIEWS = [
  {
    name: "Sarah M.",
    role: "Marketing Manager, London",
    text: "Best CV maker app I've used. Created my resume in 10 minutes and got 3 interview calls!",
    rating: 5,
    avatar: IMAGES.avatars.sarah,
    avatarAlt: "Sarah M. UK marketing professional reviewing resume builder app",
  },
  {
    name: "James K.",
    role: "Software Engineer, Manchester",
    text: "The ATS templates actually work. My resume passed every screening system I applied to.",
    rating: 5,
    avatar: IMAGES.avatars.james,
    avatarAlt: "James K. UK tech professional ATS resume template review",
  },
  {
    name: "Priya R.",
    role: "Recent Graduate, Birmingham",
    text: "Love the guided builder and PDF export. So much easier than Word templates.",
    rating: 5,
    avatar: IMAGES.avatars.priya,
    avatarAlt: "Priya R. UK graduate using CV maker app on Android",
  },
];
