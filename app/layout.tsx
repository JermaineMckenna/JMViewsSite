import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const YEAR = new Date().getFullYear();

export const metadata: Metadata = {
  title: "JMViews — Digital Creative Studio",
  description:
    "JMViews is a digital creative studio specialising in web design & development, photography, aerial cinematography, video editing, 3D and branding.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={
          inter.className +
          " bg-slate-950 text-slate-50 min-h-screen overflow-x-hidden"
        }
      >
        <div className="flex min-h-screen flex-col bg-slate-950">
          {/* Header */}
          <header className="bg-slate-950">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center font-semibold tracking-tight">
                <Link href="/" className="text-slate-50">
                  JMViews
                </Link>
                {/* Show "Digital Services" only from small screens up so it can't break mobile layout */}
                <span className="ml-2 hidden align-middle text-xs uppercase tracking-[0.2em] text-slate-400 sm:inline-block">
                  Digital Services
                </span>
              </div>

              <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <Link href="/services" className="hover:text-slate-50">
                  Services
                </Link>
                <Link href="/portfolio" className="hover:text-slate-50">
                  Portfolio
                </Link>
                <Link href="/about" className="hover:text-slate-50">
                  About
                </Link>
                <Link href="/contact" className="hover:text-slate-50">
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 bg-slate-950">{children}</main>

          {/* Footer */}
          <footer className="bg-slate-950 border-t border-slate-800/80">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <span className="block">
                  © {YEAR} JMViews. All rights reserved.
                </span>

                <span className="block text-slate-600">
                  Web Design · Photography · Aerial Cinematography · Video · 3D ·
                  Branding
                </span>
                <a
                  href="mailto:jmviews@hotmail.com"
                  className="block text-slate-400 hover:text-slate-200"
                >
                  jmviews@hotmail.com
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-start gap-2 sm:justify-end sm:gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/jaymviews/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="JMViews on Instagram"
                  className="rounded-full border border-slate-700 bg-slate-900/60 p-2 hover:border-emerald-500/70 hover:bg-slate-900"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-slate-200"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      ry="5"
                      className="fill-none stroke-current"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      className="fill-none stroke-current"
                      strokeWidth="1.6"
                    />
                    <circle cx="17" cy="7" r="1" className="fill-current" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@jmviews94?lang=en-GB"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="JMViews on TikTok"
                  className="rounded-full border border-slate-700 bg-slate-900/60 p-2 hover:border-emerald-500/70 hover:bg-slate-900"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-slate-200"
                  >
                    <path
                      d="M15.5 5.1c.6.7 1.4 1.3 2.3 1.7.4.2.9.3 1.4.4v2.3c-.8-.1-1.5-.3-2.2-.6-.5-.2-1-.4-1.5-.7v6.1c0 2.8-2.2 5-4.9 5-2.7 0-4.9-2.2-4.9-5 0-2.7 2.2-4.9 4.9-4.9.3 0 .7 0 1 .1v2.4c-.3-.1-.6-.2-.9-.2-1.3 0-2.4 1.1-2.4 2.5 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4V3.9h2.4v1.2z"
                      className="fill-current"
                    />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/JermaineMckenna/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="JMViews on GitHub"
                  className="rounded-full border border-slate-700 bg-slate-900/60 p-2 hover:border-emerald-500/70 hover:bg-slate-900"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-slate-200"
                  >
                    <path
                      d="M12 2C6.5 2 2 6.6 2 12.1c0 4.5 2.9 8.2 6.9 9.5.5.1.6-.2.6-.4v-1.6c-2.8.6-3.4-1.3-3.4-1.3-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.3 1 1.3 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2.2-.3-4.4-1.1-4.4-4.9 0-1.1.4-2 1-2.8-.1-.2-.4-1.2.1-2.4 0 0 .8-.3 2.8 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-1.3 2.8-1 2.8-1 .5 1.2.2 2.2.1 2.4.6.8 1 1.7 1 2.8 0 3.8-2.3 4.6-4.5 4.9.3.3.6.8.6 1.6v2.3c0 .2.1.5.6.4 4-1.3 6.9-5 6.9-9.5C22 6.6 17.5 2 12 2z"
                      className="fill-current"
                    />
                  </svg>
                </a>

                {/* Behance */}
                <a
                  href="https://www.behance.net/jermainemckenna1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="JMViews on Behance"
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-2 py-1 hover:border-emerald-500/70 hover:bg-slate-900"
                >
                  <span className="px-1 text-[11px] font-semibold text-slate-200">
                    Be
                  </span>
                </a>

                {/* Pinterest */}
                <a
                  href="https://uk.pinterest.com/jermainemckenna_/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="JMViews on Pinterest"
                  className="rounded-full border border-slate-700 bg-slate-900/60 p-2 hover:border-emerald-500/70 hover:bg-slate-900"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-slate-200"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      className="fill-none stroke-current"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M11.7 7.5c-2.3 0-3.7 1.6-3.7 3.5 0 1.4.8 2.4 2.1 2.8.2-.2.3-.5.4-.9l.1-.5c-.3-.2-.5-.6-.5-1.1 0-1 .7-1.8 1.9-1.8 1 0 1.6.6 1.6 1.5 0 1.1-.6 1.9-1.3 1.9-.3 0-.6-.2-.7-.4-.1.3-.2.7-.2 1l-.4 1.7"
                      className="fill-none stroke-current"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}