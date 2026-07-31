import { Zap, Compass, ShieldCheck, ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";

type ValueItem = {
  tag: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

const values: ValueItem[] = [
  {
    tag: "SPEED & SECURITY",
    icon: Zap,
    title: "AI活用による「圧倒的スピード」と「セキュアなコード品質」",
    description:
      "GitHub Copilot等の生成AIをコーディング規約・レビュー観点と組み合わせて運用。実装速度を高めながら、脆弱性や品質劣化を防ぐダブルチェック体制を構築します。",
  },
  {
    tag: "REQUIREMENTS & DESIGN",
    icon: Compass,
    title: "リーダー経験を活かした「手戻りのない要件定義と設計」",
    description:
      "プロジェクトリーダーとしての経験を活かし、上流工程で仕様の曖昧さを潰し込みます。後工程での手戻りを未然に防ぐ、精度の高い基本設計を提供します。",
  },
  {
    tag: "ROBUSTNESS",
    icon: ShieldCheck,
    title: "共通処理設計とテスト網羅率の向上による「堅牢なシステム構築」",
    description:
      "共通処理・共通コンポーネントを適切に設計し、保守性の高いアーキテクチャを実現。テストカバレッジを高く保つことで、リリース後も安心して運用できる基盤を作ります。",
  },
];

export default function Value() {
  return (
    <section id="value" className="relative bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Choose Me"
          title="3つの強み"
          description="スピードと品質、どちらか一方ではなく両方を求める事業会社・SIer様に向けて。"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <FadeIn key={value.tag} delay={index * 0.12}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-700 bg-navy-900/50 p-8 transition-colors duration-300 hover:border-emerald-500/50">
                  {/* ホバー時のさりげないグロー */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/0 blur-3xl transition-colors duration-500 group-hover:bg-emerald-500/10" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-navy-600 bg-navy-800 text-emerald-400">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-slate-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-emerald-400"
                    />
                  </div>

                  <span className="relative mt-6 block font-mono text-[11px] tracking-[0.15em] text-emerald-400/80">
                    {value.tag}
                  </span>

                  <h3 className="relative mt-3 font-display text-lg font-semibold leading-snug text-white">
                    {value.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-relaxed text-slate-400">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
