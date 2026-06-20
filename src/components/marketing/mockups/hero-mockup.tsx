import { DesktopFrame, IPhoneFrame } from "./device-frames";
import { ResumePreview } from "./resume-preview";

export function HeroMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
      role="img"
      aria-label="ATS resume builder app editor interface on iPhone and desktop with UK CV preview"
    >
      <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-violet-600/5 via-transparent to-blue-600/10 p-4 md:p-6">
        <DesktopFrame
          label="Desktop — ATS Preview"
          className="absolute left-0 top-0 w-[72%] -rotate-1"
        >
          <div className="flex h-36 md:h-44">
            <aside className="w-14 shrink-0 border-r border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="space-y-1.5">
                {["Editor", "Templates", "Export", "Score"].map((item, i) => (
                  <div
                    key={item}
                    className={`rounded px-1.5 py-1 text-[8px] font-medium ${
                      i === 0
                        ? "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300"
                        : "text-zinc-500"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>
            <div className="flex flex-1 gap-2 p-2">
              <div className="flex-1 rounded-lg border border-zinc-200 bg-white p-2 dark:border-zinc-700 dark:bg-zinc-950">
                <p className="text-[8px] font-semibold text-zinc-800 dark:text-zinc-200">
                  Work Experience
                </p>
                <div className="mt-1.5 space-y-1">
                  <div className="h-2 w-full rounded bg-zinc-100 dark:bg-zinc-800" />
                  <div className="h-2 w-4/5 rounded bg-zinc-100 dark:bg-zinc-800" />
                  <div className="mt-2 flex items-center gap-1 rounded-md bg-violet-50 px-1.5 py-1 dark:bg-violet-950/50">
                    <span className="text-[7px] text-violet-600">✨ AI</span>
                    <span className="text-[7px] text-zinc-600 dark:text-zinc-400">
                      Increased revenue by 35%…
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex gap-1">
                  <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[7px] font-medium text-emerald-700">
                    ATS 94%
                  </span>
                  <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[7px] font-medium text-blue-700">
                    Keywords ✓
                  </span>
                </div>
              </div>
              <div className="w-[38%] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-700">
                <ResumePreview variant="ats-standard" compact />
              </div>
            </div>
          </div>
        </DesktopFrame>

        <IPhoneFrame
          label="Mobile — Editor"
          className="absolute -bottom-2 -right-1 w-[38%] rotate-2 md:-bottom-4 md:right-2 md:w-[34%]"
        >
          <div className="bg-zinc-50 p-2 dark:bg-zinc-950">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[9px] font-bold text-zinc-800 dark:text-white">
                Step 4 of 8
              </span>
              <span className="rounded-full bg-violet-600 px-1.5 py-0.5 text-[7px] text-white">
                Preview
              </span>
            </div>
            <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700">
              <ResumePreview variant="modern-green" compact />
            </div>
            <div className="mt-2 h-6 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600" />
          </div>
        </IPhoneFrame>
      </div>
    </div>
  );
}
