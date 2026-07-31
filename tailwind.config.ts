import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ベースカラー：ダークネイビー
        navy: {
          950: "#080B14", // 最深部の背景
          900: "#0B0F1C", // セクション背景
          800: "#111827", // カード背景
          700: "#1B2436", // ボーダー・区切り線
          600: "#2A3550",
        },
        // アクセント：エメラルドグリーン（AI・先進性）
        emerald: {
          400: "#34D9A0",
          500: "#12B886",
          600: "#0E9A70",
        },
        // テキスト用スレート
        slate: {
          200: "#E4E9F2",
          400: "#9AA5B8",
          500: "#7A8499",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "glow-emerald":
          "radial-gradient(circle at 50% 0%, rgba(18,184,134,0.15), transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
