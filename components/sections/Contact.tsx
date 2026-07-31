"use client";

import { useState, type FormEvent } from "react";
import { Github, Linkedin, Loader2, Send } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(body.error || "送信に失敗しました。");
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setErrorMessage("通信エラーが発生しました。時間をおいて再度お試しください。");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-navy-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="お気軽にご相談ください"
          description="開発のご依頼、案件のご相談、まずはお話だけでも歓迎です。"
        />

        <FadeIn delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mt-14 space-y-6 rounded-2xl border border-navy-700 bg-navy-900/60 p-8 sm:p-10"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field name="name" label="お名前" placeholder="山田 太郎" required />
              <Field name="company" label="会社名" placeholder="株式会社◯◯" />
            </div>
            <Field
              name="email"
              label="メールアドレス"
              placeholder="you@example.com"
              type="email"
              required
            />
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="ご相談内容をご記入ください"
                className="w-full rounded-lg border border-navy-600 bg-navy-800/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500/60"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 font-medium text-navy-950 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  送信中...
                </>
              ) : (
                <>
                  送信する
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="text-sm text-emerald-400">
                送信しました。ご連絡ありがとうございます。追ってご返信いたします。
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">{errorMessage}</p>
            )}
          </form>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-6">
            <SocialLink href="https://github.com/" icon={Github} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/" icon={Linkedin} label="LinkedIn" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-navy-600 bg-navy-800/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500/60"
      />
    </div>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-600 text-slate-400 transition-colors hover:border-emerald-500/60 hover:text-emerald-400"
    >
      <Icon size={18} />
    </a>
  );
}
