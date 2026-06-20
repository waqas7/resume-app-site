import { Container, Section } from "@/components/ui/button";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";
import { ResumePreview } from "./resume-preview";

function BeforeResume() {
  return (
    <div className="rounded-xl border border-red-200 bg-white p-3 dark:border-red-900/50 dark:bg-zinc-950">
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-700 dark:bg-red-950 dark:text-red-400">
          Before — 42% ATS
        </span>
      </div>
      <div className="space-y-2 text-[9px] text-zinc-600 dark:text-zinc-400">
        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">john cv</p>
        <p>email: john@gmail.com phone: 123456</p>
        <p className="font-bold">work</p>
        <p>worked at company did stuff for 2 years</p>
        <p className="font-bold">skills</p>
        <p>microsoft word, team player, hard worker</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {["No headings", "Vague bullets", "Missing keywords"].map((issue) => (
            <span
              key={issue}
              className="rounded bg-red-50 px-1.5 py-0.5 text-[8px] text-red-600 dark:bg-red-950/50"
            >
              ✗ {issue}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AfterResume() {
  return (
    <div className="overflow-hidden rounded-xl border border-emerald-200 bg-white shadow-lg dark:border-emerald-900/50 dark:bg-zinc-950">
      <div className="flex items-center gap-2 border-b border-emerald-100 bg-emerald-50 px-3 py-2 dark:border-emerald-900 dark:bg-emerald-950/30">
        <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold text-white">
          After — 94% ATS
        </span>
        <span className="text-[10px] text-emerald-700 dark:text-emerald-400">
          +3 interview callbacks
        </span>
      </div>
      <div className="aspect-[3/4] max-h-64">
        <ResumePreview variant="ats-standard" />
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            From Generic CV to{" "}
            <span className="gradient-text">Interview-Ready</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            See how our ATS resume builder transforms weak CVs into
            professional, keyword-optimised documents UK recruiters actually
            read.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
          <BeforeResume />
          <div className="hidden flex-col items-center gap-2 md:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg">
              →
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              AI + Templates
            </span>
          </div>
          <AfterResume />
        </div>

        <div className="mt-10 flex justify-center">
          <PlayStoreButton>Transform Your CV Free</PlayStoreButton>
        </div>
      </Container>
    </Section>
  );
}
