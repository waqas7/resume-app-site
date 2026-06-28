"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BRAND, PROJECTS, HUB_NAV_LINKS } from "@/lib/projects";
import { SUPPORT_EMAIL } from "@/lib/constants";
import { Container } from "@/components/ui/button";

export function Footer() {
  const pathname = usePathname();
  const isResumeSection = pathname.startsWith("/resume-builder");

  return (
    <footer className="border-t border-border bg-muted/30 py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src={BRAND.logo}
                alt={BRAND.logoAlt}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold">{BRAND.name}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {BRAND.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Apps</h3>
            <ul className="mt-4 space-y-2">
              {PROJECTS.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={project.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {project.name}
                    {project.status === "coming-soon" && (
                      <span className="ml-1 text-xs opacity-70">(soon)</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {HUB_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
              {isResumeSection && (
                <>
                  <li>
                    <Link
                      href="/resume-builder/features"
                      className="hover:text-foreground"
                    >
                      Resume Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resume-builder/templates"
                      className="hover:text-foreground"
                    >
                      Resume Templates
                    </Link>
                  </li>
                </>
              )}
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-foreground">
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>muhammadwaqaskhan.com</p>
        </div>
      </Container>
    </footer>
  );
}
