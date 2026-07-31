import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";

const stackGroups = [
  {
    label: "言語",
    items: ["Java", "Kotlin", "Groovy", "TypeScript", "JavaScript", "Ruby", "SQL"],
  },
  {
    label: "フロントエンド",
    items: ["React", "Next.js", "MUI", "HTML / CSS"],
  },
  {
    label: "バックエンド・FW",
    items: ["Spring Boot", "MyBatis", "Sinatra"],
  },
  {
    label: "データベース",
    items: ["SQL Server", "Oracle Database", "MySQL", "AuroraDB"],
  },
  {
    label: "インフラ・クラウド",
    items: ["Google Cloud (GCP)", "Azure", "Docker", "Linux"],
  },
  {
    label: "開発ツール・手法",
    items: ["Git / GitHub / GitLab", "Jira", "JMeter", "GitHub Copilot", "AI駆動開発"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Tech Stack" title="技術スタック" />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-navy-700 bg-navy-700 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, index) => (
            <FadeIn key={group.label} delay={index * 0.08}>
              <div className="h-full bg-navy-900/60 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-emerald-400/80">
                  {group.label}
                </p>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm font-medium text-slate-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
