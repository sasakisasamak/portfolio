export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} M.S. All rights reserved.
        </p>
        <p className="font-mono text-xs text-slate-600">
          Built with Next.js & AI-driven development
        </p>
      </div>
    </footer>
  );
}
