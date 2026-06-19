import Link from "next/link";
import Image from "next/image";
import { Star, Download, Shield, Zap } from "lucide-react";
import { Badge, Container, Section } from "@/components/ui/button";
import { CtaSection } from "@/components/conversion/cta-section";
import { PlayStoreBadge, PlayStoreButton } from "@/components/conversion/play-store-badge";
import { HOME_FEATURES_PREVIEW } from "@/lib/features";
import { APP_TAGLINE, IMAGES, TRUST } from "@/lib/constants";

const REVIEWS = [
  {
    name: "Sarah M.",
    text: "Best CV maker app I've used. Created my resume in 10 minutes and got 3 interview calls!",
    rating: 5,
  },
  {
    name: "James K.",
    text: "The ATS templates actually work. My resume passed every screening system I applied to.",
    rating: 5,
  },
  {
    name: "Priya R.",
    text: "Love the guided builder and PDF export. So much easier than Word templates.",
    rating: 5,
  },
];

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pb-12 pt-16 md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge className="mb-6">#1 Free Resume Builder App on Android</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {APP_TAGLINE.split(" with ")[0]}{" "}
              <span className="gradient-text">with AI</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Create professional, ATS-friendly resumes in seconds. 20+ templates,
              guided builder, and instant PDF export — 100% free to download.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {TRUST.rating} ({TRUST.reviewCount} reviews)
              </span>
              <span className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                {TRUST.downloadCount} downloads
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PlayStoreBadge size="lg" />
              <PlayStoreButton>Download Free</PlayStoreButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: Shield, label: "No Sign-Up" },
                { icon: Zap, label: "Offline-First" },
                { icon: Download, label: "Free Forever" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm"
                >
                  <Icon className="h-4 w-4 text-violet-600" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-blue-600/10 to-violet-600/10 shadow-2xl shadow-violet-500/10">
              <Image
                src={IMAGES.heroFeatureGraphic}
                alt="Resume Builder app showing multiple CV templates on Android phones"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function FeaturesPreviewSection() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Everything You Need to{" "}
            <span className="gradient-text">Get Hired</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our AI resume builder app packs professional tools into a simple,
            mobile-first experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_FEATURES_PREVIEW.map((feature) => (
            <Link
              key={feature.title}
              href="/features"
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
            >
              <div className="inline-flex rounded-xl bg-violet-500/10 p-3">
                <feature.icon className="h-6 w-6 text-violet-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-violet-600">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/features"
            className="text-sm font-semibold text-violet-600 hover:underline dark:text-violet-400"
          >
            Explore all features →
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export function AppShowcaseSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
            <Image
              src={IMAGES.featureWelcome}
              alt="Resume Builder app welcome screen with guided get started steps"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Guided 8-Step Builder
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From personal info to export — we guide you through every step.
              Smart forms, auto-save, and drag-to-reorder sections help you
              create resume online faster than any manual CV tool.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Intelligent fields that help you fill faster",
                "Your progress is saved as you go",
                "Reorder sections to highlight what matters",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PlayStoreButton>Start Building Free</PlayStoreButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function SocialProofSection() {
  return (
    <Section className="border-y border-border bg-muted/20">
      <Container>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <p className="mt-2 text-2xl font-bold">{TRUST.rating} out of 5</p>
          <p className="text-muted-foreground">
            Based on {TRUST.reviewCount} reviews on Google Play
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.name}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold">
                — {review.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function TemplatesPreviewSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              20+ ATS Resume Templates
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Modern CV templates, ATS-friendly layouts, and professional designs
              — all editable on your phone. Switch templates with one tap.
            </p>
            <Link
              href="/templates"
              className="mt-6 inline-flex text-sm font-semibold text-violet-600 hover:underline dark:text-violet-400"
            >
              Browse all templates →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
            <Image
              src={IMAGES.featureTemplates}
              alt="20+ stunning resume templates in the CV maker app"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function HomePageContent() {
  return (
    <>
      <HeroSection />
      <FeaturesPreviewSection />
      <CtaSection variant="primary" />
      <AppShowcaseSection />
      <TemplatesPreviewSection />
      <SocialProofSection />
      <CtaSection variant="secondary" />
      <CtaSection variant="urgency" buttonText="Upgrade Now" />
    </>
  );
}
