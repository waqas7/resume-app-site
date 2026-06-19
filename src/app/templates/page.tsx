"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Section, Badge } from "@/components/ui/button";
import { CtaSection } from "@/components/conversion/cta-section";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import {
  RESUME_TEMPLATES,
  TEMPLATE_CATEGORIES,
  type TemplateCategory,
} from "@/lib/templates";

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

      <Section className="pt-0">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">{activeHeading}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((template) => (
              <article
                key={template.id}
                className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-violet-500/30 hover:shadow-lg"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-6">
                  <div className="h-full rounded-lg border border-border/50 bg-white p-4 shadow-sm dark:bg-zinc-900">
                    <div className="h-3 w-1/2 rounded bg-violet-600/30" />
                    <div className="mt-4 space-y-2">
                      <div className="h-2 w-full rounded bg-muted" />
                      <div className="h-2 w-4/5 rounded bg-muted" />
                      <div className="h-2 w-3/5 rounded bg-muted" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {template.name} — Resume Template
                  </h3>
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
