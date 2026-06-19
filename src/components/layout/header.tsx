import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, APP_SHORT_NAME, IMAGES } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { Container } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src={IMAGES.logo}
            alt={APP_SHORT_NAME}
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="hidden font-bold sm:inline">{APP_SHORT_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
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
          <PlayStoreButton className="hidden px-4 py-2 text-sm sm:inline-flex">
            Download
          </PlayStoreButton>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
