export default function DigitalProjectsPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-10">
          {/* Centered section heading — matched to Contact page */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Digital Projects
            </h1>

            <p className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Web, interfaces &amp; 3D-enhanced work.
            </p>

            <p className="mt-1.5 text-sm leading-snug text-slate-300">
              Selected digital pieces combining layout, interaction and visual direction. This page reflects how JMViews approaches building for the web, with work that will continue to grow over time.
            </p>
          </div>

          {/* Projects grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Project 1 */}
            <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Project One
              </h2>

              <p className="mt-2 text-base font-semibold text-slate-50">
                Responsive Node.js / Express web app
              </p>

              <p className="mt-2 text-xs text-slate-300">
                A deployed full-stack web app focused on structure, routing and
                user-facing layout — demonstrating practical application code
                and end-to-end project delivery.
              </p>

              <ul className="mt-3 space-y-1 text-[11px] text-slate-400">
                <li>Role: Front-end &amp; application implementation</li>
                <li>Focus: Layout, routing, deployment</li>
                <li>Type: Personal / portfolio project</li>
              </ul>

              <a
                href="https://project3rb-d3edfb5c8d9d.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-medium text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                View live project →
              </a>
            </article>

            {/* Project 2 */}
            <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Project Two
              </h2>

              <p className="mt-2 text-base font-semibold text-slate-50">
                Memory game — front-end interaction project
              </p>

              <p className="mt-2 text-xs text-slate-300">
                A browser-based interactive memory game demonstrating DOM logic,
                event handling, state thinking and front-end user feedback
                patterns.
              </p>

              <ul className="mt-3 space-y-1 text-[11px] text-slate-400">
                <li>Role: Front-end development</li>
                <li>Focus: Interaction logic &amp; UI behaviour</li>
                <li>Type: Personal / practice-to-portfolio project</li>
              </ul>

              <a
                href="https://jermainemckenna.github.io/project2-l-memory-game/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-medium text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                View live project →
              </a>
            </article>
          </div>

          {/* Footer note */}
          <p className="mt-8 text-xs text-center text-slate-500">
            Additional projects and case studies will be added over time as the JMViews portfolio develops.
          </p>
        </div>
      </section>
    </div>
  );
}