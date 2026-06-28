import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomePageContent } from "@/components/marketing/home-sections";
import { JsonLd } from "@/components/seo/json-ld";
import { getSoftwareApplicationSchemaForProject } from "@/lib/schema";
import { getProjectBySlug } from "@/lib/projects";
import { APP_TAGLINE, KEYWORDS } from "@/lib/constants";

const project = getProjectBySlug("resume-builder")!;

export const metadata: Metadata = buildMetadata({
  title: APP_TAGLINE,
  description:
    "Download the best resume builder app for Android. Create ATS-friendly CVs with AI, 20+ professional templates, and one-click PDF export. Free on Google Play.",
  path: "/resume-builder",
  keywords: KEYWORDS,
});

export default function ResumeBuilderPage() {
  return (
    <>
      <JsonLd data={getSoftwareApplicationSchemaForProject(project)} />
      <HomePageContent />
    </>
  );
}
