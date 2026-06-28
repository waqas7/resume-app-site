"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BRAND, HUB_NAV_LINKS, RESUME_BUILDER_NAV, getProjectBySlug } from "@/lib/projects";
import { APP_SHORT_NAME, IMAGES } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { Container } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

function getNavContext(pathname: string) {
  if (pathname.startsWith("/resume-builder")) {
    return {
      variant: "resume" as const,
      navLinks: RESUME_BUILDER_NAV,
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=europasscvmake.app.dev",
      brandLabel: APP_SHORT_NAME,
      brandIcon: IMAGES.logo,
      brandIconAlt: IMAGES.logoAlt,
      homeHref: "/resume-builder",
    };
  }

  const appMatch = pathname.match(
    /^\/(daily-affirmations-app|mindfuel|chat-meme|document-scanner)/
  );
  if (appMatch) {
    const slug =
      appMatch[1] === "daily-affirmations-app" || appMatch[1] === "mindfuel"
        ? "mindfuel"
        : appMatch[1];
    const project = getProjectBySlug(slug);
    if (project) {
      return {
        variant: "app" as const,
        navLinks: HUB_NAV_LINKS,
        playStoreUrl: project.playStoreUrl,
        brandLabel: project.name,
        brandIcon: project.icon,
        brandIconAlt: project.iconAlt,
        homeHref: project.href,
      };
    }
  }

  return {
    variant: "hub" as const,
    navLinks: HUB_NAV_LINKS,
    playStoreUrl: null,
    brandLabel: BRAND.name,
    brandIcon: BRAND.logo,
    brandIconAlt: BRAND.logoAlt,
    homeHref: "/",
  };
}

export function Header() {
  const pathname = usePathname();
  const ctx = getNavContext(pathname);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={ctx.homeHref} className="flex items-center gap-2.5 shrink-0">
          <Image
            src={ctx.brandIcon}
            alt={ctx.brandIconAlt}
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="hidden font-bold sm:inline max-w-[140px] truncate md:max-w-none">
            {ctx.brandLabel}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {ctx.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {ctx.playStoreUrl ? (
            <PlayStoreButton
              playStoreUrl={ctx.playStoreUrl}
              className="hidden px-4 py-2 text-sm sm:inline-flex"
            >
              Download
            </PlayStoreButton>
          ) : (
            <Link
              href="/#apps"
              className="hidden rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white sm:inline-flex"
            >
              Our Apps
            </Link>
          )}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
