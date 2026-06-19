export type TemplateCategory = "modern" | "ats" | "professional";

export type ResumeTemplate = {
  id: string;
  name: string;
  category: TemplateCategory;
  description: string;
  slug: string;
};

export const TEMPLATE_CATEGORIES: {
  id: TemplateCategory | "all";
  label: string;
  seoHeading: string;
}[] = [
  {
    id: "all",
    label: "All Templates",
    seoHeading: "All Resume Templates — CV Maker App",
  },
  {
    id: "modern",
    label: "Modern CV",
    seoHeading: "Modern CV Templates — Resume Builder App",
  },
  {
    id: "ats",
    label: "ATS Friendly",
    seoHeading: "ATS Friendly Resume Templates — Get Past Applicant Tracking",
  },
  {
    id: "professional",
    label: "Professional",
    seoHeading: "Professional Resume Templates — Executive & Corporate CVs",
  },
];

export const RESUME_TEMPLATES: ResumeTemplate[] = [
  {
    id: "modern-green",
    name: "Modern Green",
    category: "modern",
    slug: "modern-green-cv-template",
    description:
      "A sleek modern CV template with a green sidebar—ideal for tech and creative roles.",
  },
  {
    id: "minimal-clean",
    name: "Minimal Clean",
    category: "modern",
    slug: "minimal-clean-cv-template",
    description:
      "Minimal resume format with generous whitespace for a polished, contemporary look.",
  },
  {
    id: "classic-blue",
    name: "Classic Blue",
    category: "professional",
    slug: "classic-blue-professional-template",
    description:
      "Traditional professional resume template with blue accents—trusted by hiring managers.",
  },
  {
    id: "executive-premium",
    name: "Executive Premium",
    category: "professional",
    slug: "executive-premium-resume-template",
    description:
      "High-contrast executive template with gold accents for senior leadership roles.",
  },
  {
    id: "ats-simple",
    name: "ATS Simple",
    category: "ats",
    slug: "ats-simple-resume-template",
    description:
      "Clean ATS resume template with single-column layout for maximum parser compatibility.",
  },
  {
    id: "ats-standard",
    name: "ATS Standard",
    category: "ats",
    slug: "ats-standard-cv-template",
    description:
      "Standard ATS-friendly CV format with clear headings recruiters and bots love.",
  },
  {
    id: "modern-dark",
    name: "Modern Dark",
    category: "modern",
    slug: "modern-dark-cv-template",
    description:
      "Dark-mode modern CV template with bold typography for designers and developers.",
  },
  {
    id: "professional-navy",
    name: "Professional Navy",
    category: "professional",
    slug: "professional-navy-resume-template",
    description:
      "Corporate navy professional template perfect for finance, law, and consulting.",
  },
  {
    id: "ats-keyword",
    name: "ATS Keyword Optimized",
    category: "ats",
    slug: "ats-keyword-optimized-template",
    description:
      "ATS resume template structured for keyword-rich job descriptions and fast scanning.",
  },
  {
    id: "modern-gradient",
    name: "Modern Gradient",
    category: "modern",
    slug: "modern-gradient-cv-template",
    description:
      "Eye-catching modern CV with subtle gradient accents for standout applications.",
  },
  {
    id: "professional-classic",
    name: "Professional Classic",
    category: "professional",
    slug: "professional-classic-cv-template",
    description:
      "Timeless professional CV template suitable for UK jobs and international applications.",
  },
  {
    id: "ats-minimal",
    name: "ATS Minimal",
    category: "ats",
    slug: "ats-minimal-resume-template",
    description:
      "Ultra-minimal ATS template—no graphics, no tables, just parseable content.",
  },
];
