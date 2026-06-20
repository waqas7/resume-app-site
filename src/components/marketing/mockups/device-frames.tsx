import { cn } from "@/lib/utils";

type FrameProps = {
  children: React.ReactNode;
  className?: string;
  label?: string;
};

export function IPhoneFrame({ children, className, label }: FrameProps) {
  return (
    <div className={cn("relative", className)}>
      {label && (
        <span className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-violet-600/90 px-3 py-0.5 text-[10px] font-semibold text-white shadow-lg">
          {label}
        </span>
      )}
      <div className="rounded-[2rem] border-[3px] border-zinc-800 bg-zinc-900 p-1.5 shadow-2xl shadow-violet-500/20 dark:border-zinc-700">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-white">
          <div className="flex items-center justify-between bg-zinc-950 px-4 py-1.5">
            <span className="text-[9px] font-medium text-white">9:41</span>
            <div className="absolute left-1/2 top-1 h-4 w-16 -translate-x-1/2 rounded-full bg-zinc-900" />
            <div className="flex gap-0.5">
              <div className="h-2 w-2 rounded-full bg-white/80" />
              <div className="h-2 w-3 rounded-sm bg-white/80" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export function DesktopFrame({ children, className, label }: FrameProps) {
  return (
    <div className={cn("relative", className)}>
      {label && (
        <span className="absolute -top-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600/90 px-3 py-0.5 text-[10px] font-semibold text-white shadow-lg">
          {label}
        </span>
      )}
      <div className="overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-900 shadow-2xl shadow-blue-500/15">
        <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-950 px-3 py-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
          <div className="mx-auto flex h-5 w-48 items-center justify-center rounded-md bg-zinc-800/80 text-[9px] text-zinc-400">
            resume-builder.app/editor
          </div>
        </div>
        <div className="bg-zinc-100 dark:bg-zinc-900">{children}</div>
      </div>
      <div className="mx-auto mt-1 h-3 w-24 rounded-b-lg bg-zinc-800" />
      <div className="mx-auto h-1 w-40 rounded-full bg-zinc-700/60" />
    </div>
  );
}
