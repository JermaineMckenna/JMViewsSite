import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
          <div className="flex-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Digital Services · Web · 3D · Photo · Video
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              JMViews is an independent digital practice creating{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                standout visuals, 3D,
              </span>{" "}
              and fast, modern websites.
            </h1>
            <p className="mt-6 max-w-xl text-sm text-slate-300 sm:text-base">
              Focused on helping brands and individuals look sharp online:
              custom web design, cinematic photography, aerial cinematography,
              video editing, and an evolving 3D & motion skillset.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                Start a project
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-slate-700 px-6 py-2 text-sm font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900"
              >
                View services
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-slate-800 px-6 py-2 text-sm font-medium text-slate-300 hover:border-slate-600 hover:bg-slate-900"
              >
                View portfolio
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400">
              <span>Digital services studio</span>
              <span>Modern front-end & full-stack</span>
              <span>Sony A7R V photography</span>
              <span>DJI Mavic aerials</span>
              <span>Video editing & motion</span>
              <span>3D & animation (in progress)</span>
            </div>
          </div>

          {/* Studio disciplines summary */}
          <div className="mt-8 flex flex-1 flex-col gap-4 md:mt-0">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="flex h-full flex-col justify-between">
                <div className="text-xs text-slate-400">Studio disciplines</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
                    <span>Web design & development</span>
                    <span className="text-emerald-400">
                      Modern web full-stack
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
                    <span>Photography & aerials</span>
                    <span className="text-emerald-400">Sony · DJI</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
                    <span>Video, motion & 3D</span>
                    <span className="text-emerald-400">
                      Editing · Motion · 3D
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
                    <span>Branding & logo design</span>
                    <span className="text-emerald-400">Visual identity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Three feature boxes under Studio Disciplines */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-xs text-slate-400">
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-3">
                <div className="text-emerald-400">Web</div>
                <div className="mt-1 text-slate-100">High-performance sites</div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-3">
                <div className="text-emerald-400">Visuals</div>
                <div className="mt-1 text-slate-100">Photo &amp; aerial sets</div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-3">
                <div className="text-emerald-400">3D &amp; Motion</div>
                <div className="mt-1 text-slate-100">Animation &amp; edits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four boxes: Services / Portfolio / About / Contact */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Services */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Services
              </h2>
              <p className="mt-3 text-xl font-semibold tracking-tight text-slate-50">
                End-to-end digital services.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Web, visuals, motion and 3D — a small set of services designed
                for creators and brands who want their online presence to feel
                intentional, not generic.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex text-sm text-emerald-400 hover:text-emerald-300"
              >
                View services →
              </Link>
            </div>

            {/* Portfolio */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Portfolio
              </h2>
              <p className="mt-3 text-xl font-semibold tracking-tight text-slate-50">
                Visual and digital projects.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                This will gradually fill with real shoots, flights, edits, and
                builds captured while travelling — organised into photography,
                aerial cinematography, digital projects, and later motion & 3D.
              </p>
              <Link
                href="/portfolio"
                className="mt-4 inline-flex text-sm text-emerald-400 hover:text-emerald-300"
              >
                Explore portfolio →
              </Link>
            </div>

            {/* About */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                About
              </h2>
              <p className="mt-3 text-xl font-semibold tracking-tight text-slate-50">
                A one-person digital studio.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                JMViews brings together web development, photography, aerial
                work and video into one place. The aim is to make things that
                look good and run well for both clients and future employers.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex text-sm text-emerald-400 hover:text-emerald-300"
              >
                Read more →
              </Link>
            </div>

            {/* Contact */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Contact
              </h2>
              <p className="mt-3 text-xl font-semibold tracking-tight text-slate-50">
                Ready when you are.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Use the contact page to outline your project or ideas. Whether
                it&apos;s a site, a set of visuals, or something that blends web
                and 3D, this is where the conversation starts.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex text-sm text-emerald-400 hover:text-emerald-300"
              >
                Go to contact →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}