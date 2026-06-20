import Link from "next/link";
import Image from "next/image";
import { Star, Download, Shield, Zap } from "lucide-react";
import { Badge, Container, Section } from "@/components/ui/button";
import { CtaSection } from "@/components/conversion/cta-section";
import { PlayStoreBadge, PlayStoreButton } from "@/components/conversion/play-store-badge";
import { HOME_FEATURES_PREVIEW } from "@/lib/features";
import { ANDROID_IMAGES, APP_TAGLINE, IMAGES, REVIEWS, TRUST } from "@/lib/constants";
import { AppScreenshot } from "@/components/marketing/app-screenshot";

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
              Create professional, ATS-friendly resumes in seconds on Android.
              20+ templates, guided builder, and instant PDF export — 100% free
              on Google Play.
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

          <AppScreenshot
            image="heroTemplates"
            priority
            containerClassName="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-violet-500/10"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
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
            Our Android resume builder app packs professional tools into a
            simple, mobile-first experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_FEATURES_PREVIEW.map((feature) => {
            const asset = ANDROID_IMAGES[feature.image];
            return (
              <Link
                key={feature.title}
                href="/features"
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
              >
                <div className="relative aspect-[9/16] max-h-52 overflow-hidden border-b border-border/60 bg-muted/20">
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    width={asset.width}
                    height={asset.height}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="inline-flex rounded-xl bg-violet-500/10 p-2">
                    <feature.icon className="h-5 w-5 text-violet-600" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-violet-600">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Link>
            );
          })}
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

export function LandDreamJobSection() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AppScreenshot
            image="landDreamJob"
            containerClassName="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border shadow-xl lg:max-w-md"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Land Your Dream Job on Android
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Download free from Google Play and build a standout ATS resume
              today. Switch between modern, minimal, and professional templates
              — all from your phone.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "No sign-up required — start instantly",
                "Works offline — build anywhere",
                "Free forever with premium upgrades",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PlayStoreButton>Get the Android App</PlayStoreButton>
            </div>
          </div>
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
          <AppScreenshot
            image="guidedBuilder"
            containerClassName="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border shadow-xl lg:max-w-md"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Guided 8-Step Builder
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From personal info to export — we guide you through every step on
              Android. Smart forms, auto-save, and drag-to-reorder sections help
              you create a UK CV faster than any manual tool.
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
              <div className="flex items-center gap-3">
                <Image
                  src={review.avatar}
                  alt={review.avatarAlt}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-violet-500/20"
                  loading="lazy"
                />
                <div>
                  <footer className="text-sm font-semibold">{review.name}</footer>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
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
              Modern CV templates, ATS-friendly layouts, and professional
              designs — all editable on your Android phone. Switch templates with
              one tap.
            </p>
            <Link
              href="/templates"
              className="mt-6 inline-flex text-sm font-semibold text-violet-600 hover:underline dark:text-violet-400"
            >
              Browse all templates →
            </Link>
          </div>
          <AppScreenshot
            image="templatesGallery"
            containerClassName="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border shadow-xl lg:max-w-md"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
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
      <LandDreamJobSection />
      <AppShowcaseSection />
      <TemplatesPreviewSection />
      <SocialProofSection />
      <CtaSection variant="secondary" />
      <CtaSection variant="urgency" buttonText="Upgrade Now" />
    </>
  );
}
