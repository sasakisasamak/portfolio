"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#career", label: "Career" },
  { href: "#value", label: "Value" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-800/80 bg-navy-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-semibold text-white">
          M.S<span className="text-emerald-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-lg border border-navy-600 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-emerald-500/60 hover:text-white sm:inline-flex"
          >
            お問い合わせ
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy-700 text-slate-300 transition-colors hover:border-emerald-500/60 hover:text-white sm:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-navy-800/80 bg-navy-950/95 px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-navy-800 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-emerald-500 px-3 py-2.5 text-center text-sm font-medium text-navy-950 transition-colors hover:bg-emerald-400"
            >
              お問い合わせ
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
