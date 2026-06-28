export type ProjectStatus = "live" | "coming-soon";

export type Project = {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  category: string;
  status: ProjectStatus;
  playStoreUrl: string | null;
  packageId: string | null;
  href: string;
  accentClass: string;
  features: string[];
  icon: string;
  iconAlt: string;
};

export const BRAND = {
  name: "MWK Technologies",
  shortName: "MWK",
  tagline: "Simple Android apps that work offline.",
  description:
    "MWK Technologies builds practical Android apps — from CV makers to daily affirmations — designed to work offline with no fuss.",
  logo: "/images/brand/mwk-logo.svg",
  logoAlt: "MWK Technologies logo",
};

export const HUB_NAV_LINKS = [
  { href: "/#apps", label: "Apps" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const PROJECTS: Project[] = [
  {
    slug: "resume-builder",
    name: "Resume Builder",
    fullName: "Resume Builder – CV Maker PDF",
    tagline: "ATS-friendly CV maker with PDF export",
    description:
      "Create professional UK resumes in minutes. 20+ templates, guided builder, ATS-friendly formats, and one-tap PDF export — free on Google Play.",
    category: "Productivity",
    status: "live",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=europasscvmake.app.dev",
    packageId: "europasscvmake.app.dev",
    href: "/resume-builder",
    accentClass: "from-blue-600 to-violet-600",
    features: [
      "20+ ATS-friendly resume templates",
      "Guided 8-step CV builder",
      "One-tap PDF export & sharing",
      "Works offline — no sign-up required",
    ],
    icon: "/images/resume-builder-cv-maker-app-logo.webp",
    iconAlt: "Resume Builder CV Maker app icon",
  },
  {
    slug: "mindfuel",
    name: "MindFuel",
    fullName: "Mindfuel: Daily Affirmations",
    tagline: "Daily affirmations for confidence, calm & self-love",
    description:
      "Start your day with powerful affirmations. Categories for confidence, success, calm, and self-love — plus custom quotes, reminders, and shareable images. Works offline.",
    category: "Health & Fitness",
    status: "live",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.mwktech.affirmations.mindfuel",
    packageId: "com.mwktech.affirmations.mindfuel",
    href: "/mindfuel",
    accentClass: "from-amber-500 to-orange-600",
    features: [
      "Daily affirmation reminders",
      "Categories: confidence, calm, self-love & more",
      "Create your own custom affirmations",
      "Share beautiful quote images",
      "Clean, minimal & offline",
    ],
    icon: "/images/projects/mindfuel-icon.svg",
    iconAlt: "MindFuel Daily Affirmations app icon",
  },
  {
    slug: "chat-meme",
    name: "Chat Meme",
    fullName: "Chat Meme – Fake Text Story Maker",
    tagline: "Fake text memes — pick a chat style, export & share",
    description:
      "Create fake text conversation memes in seconds. Choose green chat, blue bubbles, or Android message styles — type both sides, export as image or video, share anywhere.",
    category: "Entertainment",
    status: "coming-soon",
    playStoreUrl: null,
    packageId: null,
    href: "/chat-meme",
    accentClass: "from-emerald-500 to-teal-600",
    features: [
      "Multiple chat styles to choose from",
      "Type sent & received messages",
      "Export as image or video",
      "Share to WhatsApp, Instagram & more",
    ],
    icon: "/images/projects/chat-meme-icon.svg",
    iconAlt: "Chat Meme fake text story maker app icon",
  },
  {
    slug: "document-scanner",
    name: "Document Scanner",
    fullName: "Document Scanner – PDF Scan & Export",
    tagline: "Scan documents to PDF — fast, offline, on your phone",
    description:
      "Turn photos into crisp PDF documents. Scan receipts, notes, and paperwork on your Android phone — crop, enhance, and export without an account.",
    category: "Productivity",
    status: "coming-soon",
    playStoreUrl: null,
    packageId: null,
    href: "/document-scanner",
    accentClass: "from-sky-500 to-indigo-600",
    features: [
      "Camera scan to PDF",
      "Auto crop & enhance",
      "Organise scanned documents",
      "Share & export offline",
    ],
    icon: "/images/projects/document-scanner-icon.svg",
    iconAlt: "Document Scanner PDF app icon",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const RESUME_BUILDER_NAV = [
  { href: "/resume-builder/features", label: "Features" },
  { href: "/resume-builder/templates", label: "Templates" },
  { href: "/resume-builder/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
