import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { KEYWORDS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Resume Templates — ATS Friendly & Modern CV Designs",
  description:
    "Browse 20+ ATS resume templates including modern CV, professional, and ATS-friendly formats. Use our resume builder app to customize and export as PDF.",
  path: "/templates",
  keywords: [...KEYWORDS, "resume templates", "CV templates", "ATS friendly templates"],
});

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
