import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Sparkles, Target, Zap } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/ui/button";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { SUPPORT_EMAIL, KEYWORDS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About & Contact — Resume Builder App Support",
  description:
    "Learn about our mission to make resume building easy with AI. Contact support for help with our CV maker app. Better than manual Word templates.",
  path: "/contact",
  keywords: KEYWORDS,
});

const WHY_AI = [
  {
    icon: Sparkles,
    title: "AI-Powered Writing",
    text: "Get smart suggestions for summaries and bullet points — no blank page anxiety.",
  },
  {
    icon: Target,
    title: "ATS-Optimized Output",
    text: "Templates and checks designed to pass applicant tracking systems.",
  },
  {
    icon: Zap,
    title: "Mobile-First Speed",
    text: "Build and export on your phone in minutes, not hours at a desktop.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section className="pt-16">
        <Container>
          <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Our mission is simple: help everyone create a professional,
            ATS-friendly resume — regardless of design skills or budget. The
            Resume Builder & CV Maker App puts powerful career tools in your
            pocket, for free.
          </p>
        </Container>
      </Section>

      <Section className="bg-muted/30 pt-0">
        <Container>
          <h2 className="text-2xl font-bold">
            Why Our AI Resume Builder Beats Manual CV Tools
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {WHY_AI.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <item.icon className="h-8 w-8 text-violet-600" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">
            Unlike Word templates or generic online editors, our CV maker app
            combines guided step-by-step building, live preview, drag-and-drop
            reordering, and one-tap PDF export — all optimized for Android.
            Learn more on our{" "}
            <Link href="/features" className="text-violet-600 hover:underline">
              features page
            </Link>{" "}
            or browse{" "}
            <Link href="/templates" className="text-violet-600 hover:underline">
              ATS resume templates
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold">Contact Support</h2>
          <p className="mt-4 text-muted-foreground">
            Need help with the app, billing, or templates? Reach out — we
            typically respond within 24 hours.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-center">
            <Mail className="mx-auto h-10 w-10 text-violet-600" />
            <p className="mt-4 font-semibold">Email Support</p>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Resume%20Builder%20App%20Support`}
              className="mt-2 block text-lg text-violet-600 hover:underline dark:text-violet-400"
            >
              {SUPPORT_EMAIL}
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Resume%20Builder%20App%20Support`}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Send Email
            </a>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="text-center">
          <PlayStoreButton>Download the App</PlayStoreButton>
        </Container>
      </Section>
    </>
  );
}
