export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            About
          </h1>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            JMViews is a one-person digital studio exploring web, visuals and motion.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-slate-300">
            JMViews combines modern web development with photography, aerial
            footage, video editing and a growing 3D skillset. The goal is to
            build work that looks good and runs well — whether it&apos;s a site,
            a set of images, or a piece of motion.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Approach */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Approach
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                The idea is to keep things simple and intentional: one space
                where code and images work together. Websites, photography,
                aerials and edits are treated as part of the same story, not
                separate pieces.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                As the portfolio grows, JMViews becomes a record of that journey:
                travelling to capture new material, experimenting with motion and
                3D, and building projects that mix those disciplines in a way
                that still feels clean and usable.
              </p>
            </div>

            {/* Tools & Focus */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Tools & Focus
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <span className="font-semibold text-slate-100">Web stack:</span>{" "}
                  Modern front-end and full-stack thinking using tools like
                  React/Next.js, TypeScript and clean CSS utility systems.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Capture:</span>{" "}
                  Sony A7R V and DJI drone work focused on light, movement and
                  story — shot with web and social formats in mind.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Post:</span>{" "}
                  Editing and motion tools to cut, grade and animate — from
                  social-first edits to more cinematic pieces.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Identity:</span>{" "}
                  Logos, colour and simple brand systems so that sites, visuals
                  and thumbnails feel like they belong together.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}