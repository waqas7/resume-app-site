import { cn } from "@/lib/utils";
import { ResumePreview } from "./resume-preview";

type MockupShellProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};

function MockupShell({ children, className, title }: MockupShellProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-zinc-50 to-zinc-100 shadow-xl dark:from-zinc-900 dark:to-zinc-950",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-zinc-900 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-red-400" />
        <div className="h-2 w-2 rounded-full bg-amber-400" />
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        {title && (
          <span className="ml-2 text-[10px] font-medium text-zinc-400">{title}</span>
        )}
      </div>
      {children}
    </div>
  );
}

export function EditorMockup({ className }: { className?: string }) {
  return (
    <MockupShell title="AI Resume Editor" className={className}>
      <div className="flex min-h-[220px] md:min-h-[260px]">
        <aside className="hidden w-28 shrink-0 border-r border-border bg-card p-3 sm:block">
          {["Personal", "Experience", "Education", "Skills", "Summary"].map(
            (s, i) => (
              <div
                key={s}
                className={`mb-1 rounded-lg px-2 py-1.5 text-[10px] ${
                  i === 1
                    ? "bg-violet-600 font-medium text-white"
                    : "text-muted-foreground"
                }`}
              >
                {s}
              </div>
            )
          )}
        </aside>
        <main className="flex-1 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Work Experience</h3>
            <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-medium text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
              ✨ AI Assist
            </span>
          </div>
          <div className="mt-3 space-y-2">
            <label className="text-[10px] font-medium text-muted-foreground">
              Job Title
            </label>
            <div className="rounded-lg border border-border bg-background px-3 py-2 text-xs">
              Senior Marketing Manager
            </div>
            <label className="text-[10px] font-medium text-muted-foreground">
              Achievements
            </label>
            <div className="rounded-lg border border-violet-300 bg-violet-50 px-3 py-2 text-xs dark:border-violet-700 dark:bg-violet-950/30">
              Led cross-functional team of 8 to deliver £1.2M revenue growth…
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            {["Rewrite", "Shorten", "Add metrics"].map((action) => (
              <span
                key={action}
                className="rounded-full border border-border px-2 py-0.5 text-[9px] text-muted-foreground"
              >
                {action}
              </span>
            ))}
          </div>
        </main>
      </div>
    </MockupShell>
  );
}

export function ATSCheckerMockup({ className }: { className?: string }) {
  return (
    <MockupShell title="ATS Optimization Checker" className={className}>
      <div className="grid min-h-[220px] gap-3 p-4 md:min-h-[260px] md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm dark:bg-zinc-950">
          <ResumePreview variant="ats-standard" />
        </div>
        <div className="space-y-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-900 dark:bg-emerald-950/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                ATS Score
              </span>
              <span className="text-2xl font-bold text-emerald-600">94</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-emerald-200 dark:bg-emerald-900">
              <div className="h-full w-[94%] rounded-full bg-emerald-500" />
            </div>
          </div>
          {[
            { label: "Keyword match", status: "Strong", ok: true },
            { label: "Section headings", status: "Clear", ok: true },
            { label: "File format", status: "PDF-ready", ok: true },
            { label: "Contact info", status: "Complete", ok: true },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2"
            >
              <span className="text-[11px]">{item.label}</span>
              <span className="text-[10px] font-medium text-emerald-600">
                ✓ {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

export function TemplatePickerMockup({ className }: { className?: string }) {
  const templates = [
    "modern-green",
    "minimal-clean",
    "classic-blue",
    "professional-navy",
  ] as const;

  return (
    <MockupShell title="Template Gallery" className={className}>
      <div className="p-4">
        <div className="mb-3 flex gap-2">
          {["All", "Modern", "Minimal", "Corporate"].map((cat, i) => (
            <span
              key={cat}
              className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                i === 0
                  ? "bg-violet-600 text-white"
                  : "border border-border text-muted-foreground"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {templates.map((variant, i) => (
            <div
              key={variant}
              className={`overflow-hidden rounded-lg border-2 bg-white shadow-sm ${
                i === 0 ? "border-violet-500 ring-2 ring-violet-500/20" : "border-border"
              }`}
            >
              <div className="aspect-[3/4]">
                <ResumePreview variant={variant} compact />
              </div>
              {i === 0 && (
                <div className="bg-violet-600 py-0.5 text-center text-[8px] font-medium text-white">
                  Selected
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

export function PDFExportMockup({ className }: { className?: string }) {
  return (
    <MockupShell title="Export & Share" className={className}>
      <div className="flex min-h-[220px] items-center gap-4 p-4 md:min-h-[260px]">
        <div className="w-1/2 overflow-hidden rounded-xl border border-border bg-white shadow-lg">
          <ResumePreview variant="classic-blue" />
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-xs font-semibold">Export as</p>
          {[
            { fmt: "PDF", desc: "Print-ready A4", active: true },
            { fmt: "PNG", desc: "Share on social", active: false },
            { fmt: "JPG", desc: "Email attachment", active: false },
          ].map((opt) => (
            <div
              key={opt.fmt}
              className={`rounded-xl border px-3 py-2.5 ${
                opt.active
                  ? "border-violet-500 bg-violet-50 dark:bg-violet-950/30"
                  : "border-border bg-card"
              }`}
            >
              <p className="text-xs font-semibold">{opt.fmt}</p>
              <p className="text-[10px] text-muted-foreground">{opt.desc}</p>
            </div>
          ))}
          <div className="mt-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 py-2 text-center text-xs font-semibold text-white">
            Download PDF
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

export function CoverLetterMockup({ className }: { className?: string }) {
  return (
    <MockupShell title="Cover Letter Generator" className={className}>
      <div className="grid min-h-[220px] gap-3 p-4 md:min-h-[260px] md:grid-cols-2">
        <div className="rounded-xl border border-border bg-white p-4 text-[9px] leading-relaxed text-zinc-700 shadow-sm dark:bg-zinc-950 dark:text-zinc-300">
          <p className="font-semibold">Dear Hiring Manager,</p>
          <p className="mt-2">
            I am writing to express my interest in the Marketing Manager
            position at BrightPath Ltd. With 6+ years of experience driving
            measurable growth across UK digital channels…
          </p>
          <p className="mt-2 text-violet-600">✨ AI-generated · Editable</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold">Auto-filled from CV</p>
          {["Name", "Job title", "Company", "Key achievements"].map((field) => (
            <div
              key={field}
              className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2"
            >
              <span className="text-[11px] text-muted-foreground">{field}</span>
              <span className="text-[10px] text-emerald-600">✓ Synced</span>
            </div>
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

export function ScoreMockup({ className }: { className?: string }) {
  return (
    <MockupShell title="Resume Score" className={className}>
      <div className="p-4">
        <div className="flex items-center gap-4">
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                className="stroke-muted"
                strokeWidth="2"
              />
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                className="stroke-violet-600"
                strokeWidth="2.5"
                strokeDasharray="78 100"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-xl font-bold">78</span>
          </div>
          <div>
            <p className="text-sm font-semibold">Good — almost ready!</p>
            <p className="text-[11px] text-muted-foreground">
              Complete 2 more sections to reach 90+
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {[
            { section: "Personal Info", score: 100 },
            { section: "Experience", score: 85 },
            { section: "Skills", score: 60 },
            { section: "Summary", score: 0 },
          ].map((item) => (
            <div key={item.section}>
              <div className="flex justify-between text-[10px]">
                <span>{item.section}</span>
                <span className="font-medium">{item.score}%</span>
              </div>
              <div className="mt-0.5 h-1.5 overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full rounded-full ${
                    item.score === 100
                      ? "bg-emerald-500"
                      : item.score > 0
                        ? "bg-violet-500"
                        : "bg-zinc-300"
                  }`}
                  style={{ width: `${Math.max(item.score, 2)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

export function GuidedBuilderMockup({ className }: { className?: string }) {
  return (
    <MockupShell title="Guided Builder — Step 4 of 8" className={className}>
      <div className="p-4">
        <div className="mb-3 flex gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${
                i < 4 ? "bg-violet-600" : "bg-muted"
              }`}
            />
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-semibold">Experience Details</p>
            {["Company name", "Role", "Start date", "Description"].map(
              (field, i) => (
                <div
                  key={field}
                  className="rounded-lg border border-border bg-background px-3 py-2"
                >
                  <p className="text-[9px] text-muted-foreground">{field}</p>
                  {i < 2 && (
                    <p className="text-[11px] font-medium">
                      {i === 0 ? "BrightPath Ltd" : "Senior Marketing Manager"}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
            <ResumePreview variant="modern-green" compact />
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

export function DragDropMockup({ className }: { className?: string }) {
  return (
    <MockupShell title="Drag & Drop Sections" className={className}>
      <div className="flex min-h-[220px] gap-3 p-4 md:min-h-[260px]">
        <div className="w-2/5 space-y-1.5">
          {[
            { label: "Personal Info", locked: true },
            { label: "Summary", locked: false },
            { label: "Experience", locked: false, active: true },
            { label: "Education", locked: false },
            { label: "Skills", locked: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 text-[10px] ${
                item.active
                  ? "border-violet-500 bg-violet-50 shadow-md dark:bg-violet-950/30"
                  : "border-border bg-card"
              }`}
            >
              <span className="text-muted-foreground">⠿</span>
              <span className="font-medium">{item.label}</span>
              {item.locked && (
                <span className="ml-auto text-[8px] text-muted-foreground">🔒</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 overflow-hidden rounded-xl border border-border bg-white">
          <ResumePreview variant="minimal-clean" />
        </div>
      </div>
    </MockupShell>
  );
}

export type FeatureMockupType =
  | "editor"
  | "ats"
  | "templates"
  | "export"
  | "cover-letter"
  | "score"
  | "guided"
  | "drag-drop";

export function FeatureMockup({
  type,
  className,
}: {
  type: FeatureMockupType;
  className?: string;
}) {
  const map: Record<FeatureMockupType, React.ReactNode> = {
    editor: <EditorMockup className={className} />,
    ats: <ATSCheckerMockup className={className} />,
    templates: <TemplatePickerMockup className={className} />,
    export: <PDFExportMockup className={className} />,
    "cover-letter": <CoverLetterMockup className={className} />,
    score: <ScoreMockup className={className} />,
    guided: <GuidedBuilderMockup className={className} />,
    "drag-drop": <DragDropMockup className={className} />,
  };
  return map[type];
}
