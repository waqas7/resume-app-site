"use client";

import { useEffect, useState } from "react";
import { PlayStoreBadge } from "./play-store-badge";
import { TRUST } from "@/lib/constants";
import { Star } from "lucide-react";

export function StickyDownloadBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 shadow-2xl backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">Resume Builder App</p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {TRUST.rating} · {TRUST.downloadCount} downloads
          </p>
        </div>
        <PlayStoreBadge size="sm" />
      </div>
    </div>
  );
}
