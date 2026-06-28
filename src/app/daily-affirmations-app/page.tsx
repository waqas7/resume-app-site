import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { MindFuelPageContent } from "@/components/marketing/mindfuel-sections";
import { JsonLd } from "@/components/seo/json-ld";
import { getSoftwareApplicationSchemaForProject } from "@/lib/schema";
import { getProjectBySlug } from "@/lib/projects";
import { MINDFUEL_KEYWORDS } from "@/lib/mindfuel";

const project = getProjectBySlug("mindfuel")!;

export const metadata: Metadata = buildMetadata({
  title:
    "MindFuel – Daily Affirmations App for Positive Mindset & Motivation",
  description:
    "Boost your mindset with daily affirmations. MindFuel helps you build confidence, reduce stress, and stay motivated every day. Download now.",
  path: "/daily-affirmations-app",
  keywords: MINDFUEL_KEYWORDS,
  ogImage: "/images/mindfuel/feature-graphic.png",
  ogImageAlt:
    "MindFuel daily affirmations app — transform your mindset with positive affirmations",
});

export default function DailyAffirmationsAppPage() {
  return (
    <>
      <JsonLd data={getSoftwareApplicationSchemaForProject(project)} />
      <MindFuelPageContent />
    </>
  );
}
