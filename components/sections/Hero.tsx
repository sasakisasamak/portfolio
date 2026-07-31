"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Hero セクション
 *
 * サイトの「顔」となる部分。決裁者に対して 3 秒で
 * 「何を」「どれくらい速く」「なぜ信頼できるか」を伝えることを目的とする。
 *
 * 署名的要素（Signature）：
 * 「従来の開発」と「AI駆動開発」の期間を横棒タイムラインで比較するビジュアル。
 * 抽象的な数字の羅列ではなく、M.S氏の核となる価値提案
 * 「従来の2倍速」を “時間の長さそのもの” で視覚的に証明する。
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* 背景装飾：グリッド + 上部からのエメラルドグロー */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-glow-emerald" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
          {/* 左：メインコピー */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/60 px-4 py-1.5 font-mono text-xs tracking-wide text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Full-Cycle System Engineer
            </span>

            <h1 className="mt-6 break-keep font-display text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-[3.25rem] text-balance">
              AI駆動開発 ×
              <br />
              フルサイクル開発。
              <br />
              要件定義から
              <br />
              リリースまで、
              <br />
              <span className="text-emerald-400">従来の2倍速</span>
              で確実な
              <br />
              システムへ。
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              基本設計から実装・テスト・リリースまでを一気通貫で担当。
              Claude等の生成AIを実務レベルで開発フローに組み込み、
              スピードと品質を高い次元で両立します。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 font-medium text-navy-950 transition-colors hover:bg-emerald-400"
              >
                お問い合わせ
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* 右：署名的ビジュアル — 開発期間の比較タイムライン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-navy-700 bg-navy-900/60 p-6 backdrop-blur-sm sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                Development Timeline
              </p>

              <div className="mt-8 space-y-8">
                {/* 従来の開発 */}
                <TimelineRow
                  label="従来の開発"
                  weeks="12週間"
                  widthPercent={100}
                  delay={0.4}
                  color="bg-navy-600"
                  textColor="text-slate-400"
                />
                {/* AI駆動開発 */}
                <TimelineRow
                  label="AI駆動開発（M.S）"
                  weeks="約6週間"
                  widthPercent={50}
                  delay={0.75}
                  color="bg-emerald-500"
                  textColor="text-emerald-400"
                  highlight
                />
              </div>

              <p className="mt-8 border-t border-navy-700 pt-6 text-xs leading-relaxed text-slate-500">
                ※ 一般的な中規模Webシステム開発（要件定義〜リリース）を想定した目安期間です。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({
  label,
  weeks,
  widthPercent,
  delay,
  color,
  textColor,
  highlight = false,
}: {
  label: string;
  weeks: string;
  widthPercent: number;
  delay: number;
  color: string;
  textColor: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className={`text-sm font-medium ${highlight ? "text-white" : "text-slate-300"}`}>
          {label}
        </span>
        <span className={`font-mono text-sm font-semibold ${textColor}`}>
          {weeks}
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-navy-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${widthPercent}%` }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}
