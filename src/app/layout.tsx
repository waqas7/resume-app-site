import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { StickyDownloadBar } from "@/components/conversion/sticky-download-bar";
import { GoogleAnalytics } from "@/components/seo/google-analytics";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getOrganizationSchema,
  getSoftwareApplicationSchema,
  getWebSiteSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { APP_TAGLINE, KEYWORDS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: APP_TAGLINE,
  description:
    "Download the best resume builder app for Android. Create ATS-friendly CVs with AI, 20+ professional templates, and one-click PDF export. Free on Google Play.",
  path: "/",
  keywords: KEYWORDS,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <JsonLd
            data={[
              getSoftwareApplicationSchema(),
              getOrganizationSchema(),
              getWebSiteSchema(),
            ]}
          />
          <GoogleAnalytics />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyDownloadBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
