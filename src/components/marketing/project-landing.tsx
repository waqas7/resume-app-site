import Link from "next/link";
import Image from "next/image";
import { Check, ArrowLeft } from "lucide-react";
import { Container, Section, Badge } from "@/components/ui/button";
import { PlayStoreBadge, PlayStoreButton } from "@/components/conversion/play-store-badge";
import { JsonLd } from "@/components/seo/json-ld";
import { getSoftwareApplicationSchemaForProject } from "@/lib/schema";
import { type Project } from "@/lib/projects";
import { SUPPORT_EMAIL } from "@/lib/constants";

type ProjectLandingProps = {
  project: Project;
};

export function ProjectLanding({ project }: ProjectLandingProps) {
  const isLive = project.status === "live" && project.playStoreUrl;

  return (
    <>
      {isLive && (
        <JsonLd data={getSoftwareApplicationSchemaForProject(project)} />
      )}
      <Section className="pt-12 md:pt-16">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All apps
          </Link>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Image
                  src={project.icon}
                  alt={project.iconAlt}
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] rounded-2xl shadow-lg ring-1 ring-border"
                  priority
                />
                <div>
                  <Badge
                    className={
                      project.status === "live"
                        ? undefined
                        : "bg-muted text-muted-foreground"
                    }
                  >
                    {project.status === "live" ? "Live on Google Play" : "Coming soon"}
                  </Badge>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </div>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                {project.fullName}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">{project.tagline}</p>
              <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>

              <ul className="mt-8 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                {isLive ? (
                  <>
                    <PlayStoreButton playStoreUrl={project.playStoreUrl!}>
                      Download on Google Play
                    </PlayStoreButton>
                    <PlayStoreBadge playStoreUrl={project.playStoreUrl!} />
                  </>
                ) : (
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`${project.name} app — notify me at launch`)}`}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110"
                  >
                    Notify me at launch
                  </a>
                )}
              </div>
            </div>

            <div
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.accentClass} p-8 shadow-2xl`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
              <div className="relative mx-auto max-w-xs">
                <Image
                  src={project.icon}
                  alt={project.iconAlt}
                  width={320}
                  height={320}
                  className="mx-auto h-auto w-full rounded-[2rem] shadow-2xl ring-4 ring-white/20"
                  priority
                />
              </div>
              <p className="relative mt-6 text-center text-sm font-medium text-white/90">
                {project.fullName}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {project.slug === "resume-builder" && (
        <Section className="border-t border-border bg-muted/20 py-12">
          <Container>
            <h2 className="text-2xl font-bold">Explore Resume Builder</h2>
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                { href: "/resume-builder/features", label: "Features" },
                { href: "/resume-builder/templates", label: "Templates" },
                { href: "/resume-builder/pricing", label: "Pricing" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
