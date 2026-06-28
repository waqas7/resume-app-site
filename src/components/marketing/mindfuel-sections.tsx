import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Bell,
  Heart,
  Sparkles,
  Sun,
  Target,
  Users,
} from "lucide-react";
import { Container, Section, Badge } from "@/components/ui/button";
import {
  PlayStoreBadge,
  PlayStoreButton,
} from "@/components/conversion/play-store-badge";
import {
  MINDFUEL_AUDIENCES,
  MINDFUEL_BENEFITS,
  MINDFUEL_FEATURES,
  MINDFUEL_IMAGES,
  MINDFUEL_PLAY_STORE_URL,
  MINDFUEL_SEO_FOOTER,
} from "@/lib/mindfuel";

function MindFuelCta({
  primary = "Download MindFuel Now",
  secondary,
}: {
  primary?: string;
  secondary?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <PlayStoreButton playStoreUrl={MINDFUEL_PLAY_STORE_URL}>
        {primary}
      </PlayStoreButton>
      {secondary ? (
        <PlayStoreBadge playStoreUrl={MINDFUEL_PLAY_STORE_URL} />
      ) : null}
    </div>
  );
}

export function MindFuelHeroSection() {
  return (
    <Section className="relative overflow-hidden pb-12 pt-12 md:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

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
            <Badge className="mb-6 border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300">
              <Sparkles className="mr-1 h-3 w-3" />
              Live on Google Play
            </Badge>

            {/* SEO H1 */}
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Daily Affirmations App for{" "}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Positive Mindset
              </span>
            </h1>

            <p className="mt-4 text-xl font-semibold text-foreground/90 md:text-2xl">
              Transform Your Mindset with Daily Affirmations
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Build confidence, reduce stress, and stay motivated with powerful
              daily affirmations designed to rewire your thinking.
            </p>

            <div className="mt-8">
              <MindFuelCta
                primary="Download MindFuel Now"
                secondary="badge"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Start your positive journey today — free on Android.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-violet-500/20 shadow-2xl shadow-violet-500/10">
              <Image
                src={MINDFUEL_IMAGES.featureGraphic.src}
                alt={MINDFUEL_IMAGES.featureGraphic.alt}
                width={MINDFUEL_IMAGES.featureGraphic.width}
                height={MINDFUEL_IMAGES.featureGraphic.height}
                className="h-auto w-full"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <Image
              src={MINDFUEL_IMAGES.icon.src}
              alt={MINDFUEL_IMAGES.icon.alt}
              width={80}
              height={80}
              className="absolute -bottom-4 -left-4 h-20 w-20 rounded-2xl shadow-xl ring-4 ring-background md:-bottom-6 md:-left-6 md:h-24 md:w-24"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function MindFuelWhySection() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Your Daily Boost for a{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Positive Mindset
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            MindFuel is a powerful daily affirmations app designed to help you
            stay positive, confident, and focused. Whether you&apos;re starting
            your morning or need a quick mental reset, MindFuel delivers the
            right affirmations at the right time.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Using proven mindset techniques, our affirmations help reinforce
            positive thinking patterns and support long-term mental well-being.
          </p>
        </div>
      </Container>
    </Section>
  );
}

const FEATURE_ICONS = [Sun, Heart, Target, Bell, Sparkles] as const;

export function MindFuelFeaturesSection() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Powerful Features to Improve Your Mindset
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Everything you need to build a consistent affirmation habit — offline,
            distraction-free, and designed for real results.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {MINDFUEL_FEATURES.map((feature, index) => {
            const Icon = FEATURE_ICONS[index] ?? Sparkles;
            const screenshot = MINDFUEL_IMAGES.screenshots[feature.screenshot];
            return (
              <article
                key={feature.title}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="border-b border-border bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-2xl">
                      {feature.emoji}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-violet-600" />
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                      </div>
                      <p className="mt-2 text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
                {screenshot && (
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={800}
                    height={800}
                    className="h-auto w-full"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export function MindFuelBenefitsSection() {
  return (
    <Section
      id="benefits-of-affirmations"
      className="scroll-mt-20 border-y border-border bg-muted/20"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Why Use Daily Affirmations?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Daily affirmations are a simple yet powerful tool to reshape your
              thoughts and beliefs. With consistent use, affirmations can:
            </p>
            <ul className="mt-8 space-y-4">
              {MINDFUEL_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-600" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              MindFuel makes it easy to build this life-changing habit.{" "}
              <Link
                href="#how-to-build-positive-mindset"
                className="font-medium text-violet-600 hover:underline dark:text-violet-400"
              >
                Learn how to build a positive mindset →
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {MINDFUEL_IMAGES.screenshots.slice(0, 4).map((shot) => (
              <div
                key={shot.src}
                className="overflow-hidden rounded-xl border border-border shadow-md"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={400}
                  height={400}
                  className="h-auto w-full"
                  loading="lazy"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function MindFuelMindsetSection() {
  return (
    <Section id="how-to-build-positive-mindset" className="scroll-mt-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            How to Build a Positive Mindset
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A positive mindset isn&apos;t built overnight — it&apos;s a daily
            practice. MindFuel helps you:
          </p>
          <ol className="mt-8 space-y-4 text-muted-foreground">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                1
              </span>
              <span>
                <strong className="text-foreground">Start each morning</strong>{" "}
                with a curated affirmation matched to your goals.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                2
              </span>
              <span>
                <strong className="text-foreground">Stay consistent</strong> with
                gentle reminders at a time that fits your routine.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                3
              </span>
              <span>
                <strong className="text-foreground">Track your progress</strong>{" "}
                with streaks and saved affirmations that resonate with you.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                4
              </span>
              <span>
                <strong className="text-foreground">Rewire negative patterns</strong>{" "}
                by repeating affirmations for confidence, calm, and self-love.
              </span>
            </li>
          </ol>
          <p className="mt-8 text-muted-foreground">
            Read more about{" "}
            <Link
              href="#benefits-of-affirmations"
              className="font-medium text-violet-600 hover:underline dark:text-violet-400"
            >
              the benefits of daily affirmations
            </Link>{" "}
            and start your practice with MindFuel today.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function MindFuelAudienceSection() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Users className="mx-auto h-10 w-10 text-violet-600" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Built for Everyone
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            MindFuel is perfect for:
          </p>
          <ul className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {MINDFUEL_AUDIENCES.map((audience) => (
              <li
                key={audience}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-violet-600" />
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export function MindFuelGallerySection() {
  return (
    <Section>
      <Container>
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          See MindFuel in Action
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          A calm, beautiful daily affirmations app — browse categories, save
          favourites, and track your streak.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MINDFUEL_IMAGES.screenshots.map((shot) => (
            <figure
              key={shot.src}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={400}
                height={400}
                className="h-auto w-full"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <figcaption className="border-t border-border p-4">
                <p className="font-semibold">{shot.title}</p>
                <p className="text-sm text-muted-foreground">{shot.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function MindFuelCtaSection() {
  return (
    <Section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-violet-700 via-fuchsia-700 to-indigo-800" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
      <Container className="text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Start Your Mindset Transformation Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          Take control of your thoughts and unlock your full potential with
          MindFuel. Start using daily affirmations and experience real change in
          your mindset.
        </p>
        <div className="mt-8">
          <MindFuelCta primary="Download MindFuel Now" />
        </div>
        <p className="mt-6 text-sm font-medium text-white/80">
          Build Confidence. Stay Positive. Achieve More.
        </p>
      </Container>
    </Section>
  );
}

export function MindFuelSeoFooter() {
  return (
    <Section className="border-t border-border py-10">
      <Container>
        <p className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
          {MINDFUEL_SEO_FOOTER}
        </p>
      </Container>
    </Section>
  );
}

export function MindFuelPageContent() {
  return (
    <>
      <MindFuelHeroSection />
      <MindFuelWhySection />
      <MindFuelFeaturesSection />
      <MindFuelBenefitsSection />
      <MindFuelMindsetSection />
      <MindFuelAudienceSection />
      <MindFuelGallerySection />
      <MindFuelCtaSection />
      <MindFuelSeoFooter />
    </>
  );
}
