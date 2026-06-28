import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ProjectLanding } from "@/components/marketing/project-landing";
import { getProjectBySlug } from "@/lib/projects";

const project = getProjectBySlug("document-scanner")!;

export const metadata: Metadata = buildMetadata({
  title: "Document Scanner – PDF Scan & Export",
  description: project.description,
  path: "/document-scanner",
  keywords: [
    "document scanner app Android",
    "scan to PDF offline",
    "PDF scanner app",
    "mobile document scanner",
  ],
});

export default function DocumentScannerPage() {
  return <ProjectLanding project={project} />;
}
