import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Portfolio
          </h1>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A curated archive of visual and digital work.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-slate-300">
            This page will gradually fill with real projects captured while
            travelling — photography sets, aerial sequences, web builds and
            motion pieces. For now, it outlines how JMViews organises work by
            discipline.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Visual Photography */}
            <Link
              href="/portfolio/visual-photography"
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-emerald-500/70 hover:bg-slate-900"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Visual Photography
              </div>
              <h2 className="mt-3 text-lg font-semibold text-slate-50">
                Still images with intention
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                High-resolution photography focused on light, composition and
                story: urban moments, travel journals, portraits and
                documentary-style sets — grouped into visual-photography
                collections.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Urban stories
                </span>
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Travel & landscape
                </span>
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Portrait series
                </span>
              </div>
              <span className="mt-4 text-xs text-emerald-400">
                View collection →
              </span>
            </Link>

            {/* Aerial Cinematography */}
            <Link
              href="/portfolio/aerial-cinematography"
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-emerald-500/70 hover:bg-slate-900"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Aerial Cinematography
              </div>
              <h2 className="mt-3 text-lg font-semibold text-slate-50">
                Perspective from above
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Drone photography and motion sequences showing cities,
                coastlines and landscapes from above. Built for hero visuals,
                intros and campaigns that need a cinematic vantage point.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Coastal flights
                </span>
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  City overheads
                </span>
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Movement & motion
                </span>
              </div>
              <span className="mt-4 text-xs text-emerald-400">
                View collection →
              </span>
            </Link>

            {/* Digital Projects */}
            <Link
              href="/portfolio/digital-projects"
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-emerald-500/70 hover:bg-slate-900"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Digital Projects
              </div>
              <h2 className="mt-3 text-lg font-semibold text-slate-50">
                Web, interfaces & 3D-enhanced work
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Custom websites, interface layouts, identity pieces and, over
                time, work that blends in motion or 3D elements — combining
                visuals and development into practical digital products.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Website builds
                </span>
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  UI layouts
                </span>
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Brand & logo work
                </span>
              </div>
              <span className="mt-4 text-xs text-emerald-400">
                View collection →
              </span>
            </Link>
          </div>

          <p className="mt-10 text-xs text-slate-500">
            As new work is produced, this page will evolve into a grid of
            collections and case studies.
          </p>
        </div>
      </section>
    </div>
  );
}