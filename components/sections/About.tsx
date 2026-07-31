import FadeIn from "../ui/FadeIn";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-navy-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="About Me" title="M.S" />
            <FadeIn delay={0.1}>
              <p className="mt-6 font-mono text-sm text-slate-500">
                Full-Cycle System Engineer
                <br />
                27 years old
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <FadeIn delay={0.15}>
              <p className="text-lg leading-loose text-slate-300">
                はじめまして。基本設計から実装、テスト、リリースまで一気通貫で担当する
                システムエンジニアのM.Sです。JavaやKotlinを用いたバックエンド開発を
                中心に、Reactを用いたフロントエンドまで幅広く対応可能です。
              </p>
              <p className="mt-6 text-lg leading-loose text-slate-300">
                最大の特徴は、実務レベルでGitHub Copilot等の生成AIを開発フローに
                組み込んでいる点です。「圧倒的なスピード」と、これまで培った
                「SEとしての確実な品質担保・設計力」を両立した開発プロセスをご提供します。
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
