import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          {/* Top grid: hero + studio disciplines */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-start">
            {/* Hero copy */}
            <div>
              <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                JMViews
              </h1>
              <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Digital services for web, visuals & motion.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
                A personal studio-led practice combining web design, development,
                photography, aerial cinematography, and video. Built to support
                brands, creatives and businesses that need considered digital work.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
                >
                  Start a project
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-6 py-2 text-sm font-medium text-slate-200 hover:border-emerald-500/70 hover:bg-slate-900"
                >
                  View portfolio
                </Link>
              </div>
            </div>

            {/* Studio disciplines card */}
            <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Studio disciplines
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li className="flex items-start justify-between gap-4">
                  <span>Web design &amp; development</span>
                  <span className="text-xs text-slate-400">
                    Portfolio-ready builds
                  </span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span>Photography &amp; aerial</span>
                  <span className="text-xs text-slate-400">
                    Sony + DJI content
                  </span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span>Video editing</span>
                  <span className="text-xs text-slate-400">
                    Short-form &amp; story-led
                  </span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <span>3D &amp; motion (in development)</span>
                  <span className="text-xs text-slate-400">
                    Learning &amp; expanding
                  </span>
                </li>
              </ul>
            </aside>
          </div>

          {/* Services summary cards under hero/discipline */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Web */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Web
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-50">
                Interfaces, landing pages &amp; portfolio builds.
              </p>
              <p className="mt-3 text-xs text-slate-300">
                Clean, responsive layouts built with modern web practices, aimed
                at both client work and a strong development portfolio.
              </p>
            </div>

            {/* Visuals */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Visuals
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-50">
                Photography, aerial content &amp; edits.
              </p>
              <p className="mt-3 text-xs text-slate-300">
                Still and moving imagery captured on Sony and DJI, edited and
                graded for social, portfolio and client use.
              </p>
            </div>

            {/* 3D & motion */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                3D &amp; Motion
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-50">
                Early-stage 3D, animation &amp; motion graphics.
              </p>
              <p className="mt-3 text-xs text-slate-300">
                A developing area of the studio, with a focus on adding motion
                and dimensionality to future digital projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}