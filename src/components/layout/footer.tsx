import Link from "next/link";
import Image from "next/image";
import {
  APP_NAME,
  APP_SHORT_NAME,
  IMAGES,
  NAV_LINKS,
  PLAY_STORE_URL,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/constants";
import { Container } from "@/components/ui/button";
import { PlayStoreBadge } from "@/components/conversion/play-store-badge";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src={IMAGES.logo}
                alt={APP_SHORT_NAME}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold">{APP_SHORT_NAME}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {APP_NAME} — the fastest way to create ATS-friendly resumes and
              professional CVs on Android. Free download with premium upgrades
              available.
            </p>
            <div className="mt-6">
              <PlayStoreBadge />
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Pages</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="hover:text-foreground"
                >
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Google Play Store
                </a>
              </li>
              <li>
                <a href={SITE_URL} className="hover:text-foreground">
                  muhammadwaqaskhan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <p>
            Keywords: resume builder app · CV maker app · ATS resume templates
          </p>
        </div>
      </Container>
    </footer>
  );
}
