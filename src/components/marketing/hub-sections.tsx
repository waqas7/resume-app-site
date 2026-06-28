import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container, Section, Badge } from "@/components/ui/button";
import { BRAND, PROJECTS, type Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/5"
    >
      <div
        className={`flex items-center gap-4 bg-gradient-to-br ${project.accentClass} p-6 text-white`}
      >
        <Image
          src={project.icon}
          alt={project.iconAlt}
          width={56}
          height={56}
          className="h-14 w-14 rounded-2xl shadow-md ring-2 ring-white/20"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <Badge
              className={
                project.status === "live"
                  ? "border-white/30 bg-white/20 text-white"
                  : "border-white/20 bg-black/20 text-white/90"
              }
            >
              {project.status === "live" ? "Live" : "Coming soon"}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-white/90">{project.category}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-medium">{project.tagline}</p>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {project.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 group-hover:gap-2 dark:text-violet-400">
          {project.status === "live" ? "View app" : "Learn more"}
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function HubHeroSection() {
  return (
    <Section className="relative overflow-hidden pb-12 pt-16 md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src={BRAND.logo}
              alt={BRAND.logoAlt}
              width={96}
              height={96}
              className="h-20 w-20 rounded-2xl shadow-lg ring-1 ring-border md:h-24 md:w-24"
              priority
            />
          </div>
          <Badge className="mb-6">
            <Sparkles className="mr-1 h-3 w-3" />
            Android Apps by {BRAND.name}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {BRAND.tagline.split(" offline")[0]}
            <span className="gradient-text"> offline</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            {BRAND.description}
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function ProjectsGridSection() {
  return (
    <Section id="apps" className="bg-muted/30 pb-20">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our Apps</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Four focused Android apps — each built to solve one problem well.
            Download on Google Play or explore what&apos;s coming next.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function HubPageContent() {
  return (
    <>
      <HubHeroSection />
      <ProjectsGridSection />
    </>
  );
}
