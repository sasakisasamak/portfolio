import { Calendar, Users } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import {
  PHASES,
  careerProjects,
  selfStudyProject,
  type CareerProject,
} from "@/lib/career";

export default function Career() {
  return (
    <section id="career" className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Career"
          title="経歴・実績"
          description="要件定義から保守・運用まで、一気通貫で担当してきたプロジェクトの概要です。"
        />

        <div className="relative mt-16 space-y-10 border-l border-navy-700 pl-8 sm:pl-10">
          {careerProjects.map((project, index) => (
            <FadeIn key={project.title} delay={Math.min(index * 0.06, 0.3)}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}

          <FadeIn delay={0.1}>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-slate-500 uppercase">
                <span className="h-px w-6 bg-navy-600" />
                Self-Directed Learning
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <ProjectCard project={selfStudyProject} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: CareerProject }) {
  return (
    <div className="relative">
      <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400 sm:-left-[calc(2.5rem+5px)]" />

      <div className="rounded-2xl border border-navy-700 bg-navy-900/50 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400/90">
            <Calendar size={13} />
            {project.period}
          </span>
          {project.duration && (
            <span className="font-mono text-xs text-slate-500">
              {project.duration}
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-slate-400">
          <span className="font-medium text-slate-200">{project.role}</span>
          {project.team.length > 0 && (
            <span className="inline-flex items-center gap-1.5">
              <Users size={14} className="text-slate-500" />
              {project.team.join(" / ")}
            </span>
          )}
        </div>

        <PhaseTags phases={project.phases} />
        <StackTags stack={project.stack} />

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:leading-loose">
          {project.overview}
        </p>
      </div>
    </div>
  );
}

function PhaseTags({ phases }: { phases: CareerProject["phases"] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {PHASES.map((phase) => {
        const active = (phases as readonly string[]).includes(phase);
        return (
          <span
            key={phase}
            className={
              active
                ? "rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400"
                : "rounded-md border border-navy-700 px-2 py-1 text-xs text-slate-600"
            }
          >
            {phase}
          </span>
        );
      })}
    </div>
  );
}

function StackTags({ stack }: { stack: CareerProject["stack"] }) {
  const groups: { label: string; items: string[] }[] = [
    { label: "言語", items: stack.languages },
    { label: "DB", items: stack.db },
    { label: "OS", items: stack.os },
    { label: "FW・ツール", items: stack.tools },
  ];

  return (
    <div className="mt-4 space-y-2">
      {groups.map(
        (group) =>
          group.items.length > 0 &&
          group.items[0] !== "-" && (
            <div
              key={group.label}
              className="flex flex-col gap-1 text-xs sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-2 sm:gap-y-1.5"
            >
              <span className="shrink-0 font-mono uppercase tracking-wide text-slate-500 sm:mt-0.5">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-navy-800 px-2 py-0.5 text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
}
