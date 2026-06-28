import { BRAND, type Project } from "./projects";
import {
  APP_NAME,
  PLAY_STORE_URL,
  SITE_URL,
  IMAGES,
} from "./constants";

export function getSoftwareApplicationSchemaForProject(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.fullName,
    operatingSystem: "Android",
    applicationCategory:
      project.category === "Health & Fitness"
        ? "HealthApplication"
        : "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    ...(project.playStoreUrl
      ? {
          downloadUrl: project.playStoreUrl,
          url: `${SITE_URL}${project.href}`,
        }
      : {}),
    image: `${SITE_URL}${project.icon}`,
    description: project.description,
  };
}

/** @deprecated Use getSoftwareApplicationSchemaForProject on app pages */
export function getSoftwareApplicationSchema() {
  return getSoftwareApplicationSchemaForProject({
    slug: "resume-builder",
    name: "Resume Builder",
    fullName: APP_NAME,
    tagline: "",
    description:
      "AI-powered resume builder and CV maker app with ATS-friendly templates, PDF export, and guided step-by-step builder.",
    category: "Productivity",
    status: "live",
    playStoreUrl: PLAY_STORE_URL,
    packageId: "europasscvmake.app.dev",
    href: "/resume-builder",
    accentClass: "",
    features: [],
    icon: IMAGES.logo,
    iconAlt: IMAGES.logoAlt,
  });
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND.logo}`,
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.name,
    url: SITE_URL,
    description: BRAND.description,
  };
}

export function getBlogPostingSchema(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: BRAND.name,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${BRAND.logo}`,
      },
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
