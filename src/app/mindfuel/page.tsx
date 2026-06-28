import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ProjectLanding } from "@/components/marketing/project-landing";
import { getProjectBySlug } from "@/lib/projects";

const project = getProjectBySlug("mindfuel")!;

export const metadata: Metadata = buildMetadata({
  title: "MindFuel – Daily Affirmations App",
  description: project.description,
  path: "/mindfuel",
  keywords: [
    "daily affirmations app",
    "positive affirmations",
    "affirmation reminders Android",
    "offline affirmations app",
    "MindFuel affirmations",
  ],
});

export default function MindFuelPage() {
  return <ProjectLanding project={project} />;
}
