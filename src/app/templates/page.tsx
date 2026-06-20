"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Section, Badge } from "@/components/ui/button";
import { CtaSection } from "@/components/conversion/cta-section";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import {
  FEATURED_TEMPLATES,
  RESUME_TEMPLATES,
  TEMPLATE_CATEGORIES,
  type TemplateCategory,
} from "@/lib/templates";
import { ResumePreview } from "@/components/marketing/mockups/resume-preview";

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | "all">(
    "all"
  );

  const filtered =
    activeCategory === "all"
      ? RESUME_TEMPLATES
      : RESUME_TEMPLATES.filter((t) => t.category === activeCategory);

  const activeHeading =
    TEMPLATE_CATEGORIES.find((c) => c.id === activeCategory)?.seoHeading ??
    "Resume Templates";

  return (
    <>
      <Section className="pt-16">
        <Container>
          <Badge className="mb-4">20+ Professional Designs</Badge>
          <h1 className="text-4xl font-bold md:text-5xl">
            ATS Resume Templates for Every Career
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Browse modern CV templates, ATS-friendly layouts, and professional
            resume formats. Our CV maker app makes it easy to create resume
            online and export as PDF.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {TEMPLATE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                    : "border border-border bg-card hover:bg-muted"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-muted/20 py-12">
        <Container>
          <h2 className="mb-6 text-xl font-bold">Featured UK Templates</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_TEMPLATES.map((template) => (
              <article
                key={template.id}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:border-violet-500/30 hover:shadow-md"
              >
                <div
                  className="aspect-[3/4] bg-zinc-100 p-3 dark:bg-zinc-900"
                  role="img"
                  aria-label={template.imageAlt}
                >
                  <div className="h-full overflow-hidden rounded-md border border-border/60 bg-white shadow-sm">
                    <ResumePreview variant={template.previewVariant} />
                  </div>
                </div>
                <div className="border-t border-border px-3 py-2">
                  <p className="text-sm font-semibold">{template.name}</p>
                  <p className="text-[11px] capitalize text-muted-foreground">
                    {template.category}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">{activeHeading}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((template) => (
              <article
                key={template.id}
                className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-violet-500/30 hover:shadow-lg"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-violet-500/5 to-blue-500/5 p-4">
                  <div
                    className="h-full overflow-hidden rounded-lg border border-border/50 bg-white shadow-md dark:bg-zinc-950"
                    role="img"
                    aria-label={template.imageAlt}
                  >
                    <ResumePreview variant={template.previewVariant} />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">
                      {template.name} — Resume Template
                    </h3>
                    <span className="shrink-0 rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-medium capitalize text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
                      {template.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {template.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-8 text-center">
            <p className="text-muted-foreground">
              All templates available in the app.{" "}
              <Link href="/blog/best-resume-formats-uk-jobs" className="text-violet-600 hover:underline">
                Read our UK resume format guide
              </Link>{" "}
              or{" "}
              <Link href="/pricing" className="text-violet-600 hover:underline">
                compare free vs premium
              </Link>
              .
            </p>
            <div className="mt-6">
              <PlayStoreButton>Use Templates Free</PlayStoreButton>
            </div>
          </div>
        </Container>
      </Section>

      <CtaSection variant="secondary" />
    </>
  );
}
