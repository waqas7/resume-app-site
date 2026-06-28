"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  BRAND,
  HUB_NAV_LINKS,
  RESUME_BUILDER_NAV,
  getProjectBySlug,
} from "@/lib/projects";
import { PLAY_STORE_URL } from "@/lib/constants";

function getMobileNavContext(pathname: string) {
  if (pathname.startsWith("/resume-builder")) {
    return {
      navLinks: RESUME_BUILDER_NAV,
      playStoreUrl: PLAY_STORE_URL,
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
    return {
      navLinks: HUB_NAV_LINKS,
      playStoreUrl: project?.playStoreUrl ?? null,
    };
  }

  return { navLinks: HUB_NAV_LINKS, playStoreUrl: null };
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { navLinks, playStoreUrl } = getMobileNavContext(pathname);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
        aria-label="Toggle menu"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-border bg-background p-4 shadow-lg">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            {playStoreUrl ? (
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Download on Google Play
              </a>
            ) : (
              <Link
                href="/#apps"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Browse {BRAND.shortName} Apps
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
