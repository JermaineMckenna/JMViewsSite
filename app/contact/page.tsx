"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Request failed");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      console.error("Contact submit error:", err);
      setErrorMsg(String(err?.message || "Something went wrong."));
      setStatus("error");
    }
  }

  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-4 sm:py-6">
          <div className="w-full max-w-2xl text-center sm:text-left">
            <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Contact
            </h1>

            <p className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s talk about your project.
            </p>

            <p className="mt-2 mx-auto max-w-2xl text-sm text-slate-300 leading-snug tracking-normal sm:mx-0">
              Use the form below to outline what you have in mind - whether it's a
              website, a set of visuals, or something that blends web, video and 3D.
              You&apos;ll receive a reply once your message has been reviewed.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full max-w-2xl space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <div className="grid gap-2">
              <label className="text-xs font-medium text-slate-200">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/40 focus:ring-2"
                placeholder="Your name"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs font-medium text-slate-200">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/40 focus:ring-2"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs font-medium text-slate-200">
                Project type
              </label>
              <input
                name="projectType"
                type="text"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/40 focus:ring-2"
                placeholder="Web, 3D, photography, video edit, etc."
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs font-medium text-slate-200">
                Budget (optional)
              </label>
              <input
                name="budget"
                type="text"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/40 focus:ring-2"
                placeholder="Rough range is fine"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs font-medium text-slate-200">Message</label>
              <textarea
                name="message"
                required
                className="min-h-[140px] w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/40 focus:ring-2"
                placeholder="Share some details about what you need…"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send enquiry"}
            </button>

            {status === "success" && (
              <p className="mt-2 text-xs text-emerald-400">
                Thanks for reaching out — your message has been sent.
              </p>
            )}

            {status === "error" && (
              <p className="mt-2 text-xs text-rose-400">
                {errorMsg || "Something went wrong. Please try again."}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
