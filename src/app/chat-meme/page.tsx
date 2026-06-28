import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ProjectLanding } from "@/components/marketing/project-landing";
import { getProjectBySlug } from "@/lib/projects";

const project = getProjectBySlug("chat-meme")!;

export const metadata: Metadata = buildMetadata({
  title: "Chat Meme – Fake Text Story Maker",
  description: project.description,
  path: "/chat-meme",
  keywords: [
    "fake text meme maker",
    "chat story maker",
    "fake conversation meme",
    "text meme generator Android",
  ],
});

export default function ChatMemePage() {
  return <ProjectLanding project={project} />;
}
