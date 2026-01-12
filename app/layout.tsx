import type { Metadata } from "next";
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

function IconInstagram() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M15.5 5.1c.6.7 1.4 1.3 2.3 1.7.4.2.9.3 1.4.4v2.3c-.8-.1-1.5-.3-2.2-.6-.5-.2-1-.4-1.5-.7v6.1c0 2.8-2.2 5-4.9 5-2.7 0-4.9-2.2-4.9-5 0-2.7 2.2-4.9 4.9-4.9.3 0 .7 0 1 .1v2.4c-.3-.1-.6-.2-.9-.2-1.3 0-2.4 1.1-2.4 2.5 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4V3.9h2.4v1.2z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.6 2 12.1c0 4.5 2.9 8.2 6.9 9.5.5.1.6-.2.6-.4v-1.6c-2.8.6-3.4-1.3-3.4-1.3-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.3 1 1.3 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2.2-.3-4.4-1.1-4.4-4.9 0-1.1.4-2 1-2.8-.1-.2-.4-1.2.1-2.4 0 0 .8-.3 2.8 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-1.3 2.8-1 2.8-1 .5 1.2.2 2.2.1 2.4.6.8 1 1.7 1 2.8 0 3.8-2.3 4.6-4.5 4.9.3.3.6.8.6 1.6v2.3c0 .2.1.5.6.4 4-1.3 6.9-5 6.9-9.5C22 6.6 17.5 2 12 2z" />
    </svg>
  );
}

function IconBehance() {
  // Simple Behance mark
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M9.2 11.2c.9-.4 1.5-1.2 1.5-2.2 0-2-1.6-3-3.9-3H2.9v12h4.4c2.5 0 4.2-1.1 4.2-3.5 0-1.6-.8-2.7-2.3-3.3zM5.2 8h1.5c1 0 1.7.3 1.7 1.2 0 .9-.6 1.3-1.6 1.3H5.2V8zm1.8 8H5.2v-3.4h1.9c1.2 0 2 .4 2 1.7 0 1.3-.8 1.7-2.1 1.7zm7.2-8.9h3.8V5.8h-3.8v1.3zM16 8.8c-2.6 0-4.4 1.9-4.4 4.7 0 2.9 1.7 4.7 4.6 4.7 2 0 3.5-1 4.1-2.8H18c-.2.6-.7 1-1.4 1-1 0-1.6-.6-1.7-1.8h5.6c.1-3.2-1.3-5.8-4-5.8zm-1.1 3.8c.1-1 .6-1.6 1.5-1.6.9 0 1.4.6 1.4 1.6h-2.9z" />
    </svg>
  );
}

function IconPinterest() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        d="M11.7 7.5c-2.3 0-3.7 1.6-3.7 3.5 0 1.4.8 2.4 2.1 2.8.2-.2.3-.5.4-.9l.1-.5c-.3-.2-.5-.6-.5-1.1 0-1 .7-1.8 1.9-1.8 1 0 1.6.6 1.6 1.5 0 1.1-.6 1.9-1.3 1.9-.3 0-.6-.2-.7-.4-.1.3-.2.7-.2 1l-.4 1.7"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const social = [
    { href: "https://www.instagram.com/jaymviews/", label: "Instagram", icon: <IconInstagram /> },
    { href: "https://www.tiktok.com/@jmviews94?lang=en-GB", label: "TikTok", icon: <IconTikTok /> },
    { href: "https://github.com/JermaineMckenna/", label: "GitHub", icon: <IconGitHub /> },
    { href: "https://www.behance.net/jermainemckenna1", label: "Behance", icon: <IconBehance /> },
    { href: "https://uk.pinterest.com/jermainemckenna_/", label: "Pinterest", icon: <IconPinterest /> },
  ];

  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-950 text-slate-50"}>
        <div className="flex min-h-screen flex-col bg-slate-950">
          {/* Header */}
          <header className="bg-slate-950">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center font-semibold tracking-tight">
                <Link href="/" className="text-slate-50">
                  JMViews
                </Link>

                {/* Hide on very small screens so it can't cause horizontal overflow */}
                <span className="ml-2 hidden align-middle text-xs uppercase tracking-[0.2em] text-slate-400 sm:inline-block">
                  Digital Services
                </span>
              </div>

              {/* FIX: consistent link sizing so “Services” + “Contact” never drift/disappear */}
              <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-300 sm:justify-end">
                <Link className="inline-flex items-center whitespace-nowrap leading-none hover:text-slate-50" href="/services">
                  Services
                </Link>
                <Link className="inline-flex items-center whitespace-nowrap leading-none hover:text-slate-50" href="/portfolio">
                  Portfolio
                </Link>
                <Link className="inline-flex items-center whitespace-nowrap leading-none hover:text-slate-50" href="/about">
                  About
                </Link>
                <Link className="inline-flex items-center whitespace-nowrap leading-none hover:text-slate-50" href="/contact">
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 bg-slate-950">{children}</main>

          {/* Footer */}
          <footer className="border-t border-slate-800/80 bg-slate-950">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <span className="block">© {YEAR} JMViews. All rights reserved.</span>
                <span className="block text-slate-600">
                  Web Design · Photography · Aerial Cinematography · Video · 3D · Branding
                </span>
                <a href="mailto:jmviews@hotmail.com" className="block text-slate-400 hover:text-slate-200">
                  jmviews@hotmail.com
                </a>
              </div>

              {/* Social links — FIXED sizing + stable hover */}
              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                {social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`JMViews on ${item.label}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200
                               transition-colors duration-150
                               hover:border-emerald-400 hover:text-emerald-400
                               focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                  >
                    <span className="pointer-events-none flex h-4 w-4 items-center justify-center">
                      {item.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}