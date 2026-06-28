"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PlayStoreBadge } from "@/components/conversion/play-store-badge";
import { PLAY_STORE_URL } from "@/lib/constants";
import { MINDFUEL_PLAY_STORE_URL } from "@/lib/mindfuel";

export function StickyDownloadBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isResume = pathname.startsWith("/resume-builder");
  const isMindFuel =
    pathname.startsWith("/daily-affirmations-app") ||
    pathname.startsWith("/mindfuel");

  const showBar = isResume || isMindFuel;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!showBar || !visible) return null;

  const label = isMindFuel ? "MindFuel App" : "Resume Builder App";
  const playUrl = isMindFuel ? MINDFUEL_PLAY_STORE_URL : PLAY_STORE_URL;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 shadow-2xl backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{label}</p>
          <p className="text-xs text-muted-foreground">Free on Google Play</p>
        </div>
        <PlayStoreBadge size="sm" playStoreUrl={playUrl} />
      </div>
    </div>
  );
}
