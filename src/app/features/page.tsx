import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/button";
import { CtaSection } from "@/components/conversion/cta-section";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { FEATURES } from "@/lib/features";
import { KEYWORDS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Features — AI Resume Builder & ATS Tools",
  description:
    "Explore AI resume generator, ATS optimization checker, professional templates, PDF export, cover letter generator, and resume score tools in our CV maker app.",
  path: "/features",
  keywords: [...KEYWORDS, "AI resume generator", "ATS optimization", "PDF resume export"],
});

export default function FeaturesPage() {
  return (
    <>
      <Section className="pt-16">
        <Container>
          <h1 className="text-4xl font-bold md:text-5xl">
            Powerful Features for Your{" "}
            <span className="gradient-text">Perfect CV</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Everything you need to create resume online with our AI resume
            builder app — from guided editing to ATS-friendly export.
          </p>
        </Container>
      </Section>

      {FEATURES.map((feature, index) => (
        <Section
          key={feature.id}
          id={feature.id}
          className={index % 2 === 1 ? "bg-muted/30" : undefined}
        >
          <Container>
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="inline-flex rounded-xl bg-violet-500/10 p-3">
                  <feature.icon className="h-7 w-7 text-violet-600" />
                </div>
                <h2 className="mt-4 text-3xl font-bold">{feature.title}</h2>
                <p className="mt-2 text-xl font-medium text-violet-600 dark:text-violet-400">
                  {feature.headline}
                </p>
                <p className="mt-4 text-muted-foreground">{feature.description}</p>
                <ul className="mt-6 space-y-2">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-violet-600" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <PlayStoreButton>Try It Free</PlayStoreButton>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
                <Image
                  src={feature.image}
                  alt={`${feature.title} in Resume Builder app`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <CtaSection variant="primary" />
    </>
  );
}
