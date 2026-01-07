export default function ServicesPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Services
          </h1>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Digital services that bring together web, visuals, and motion.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-slate-300">
            JMViews is built to handle the core things that make you look good
            online — from the website itself to the visuals and edits that live
            on it and across your socials.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Web */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-lg font-semibold text-slate-50">
                Web design & development
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Custom websites built with modern tools. Designed for portfolios,
                landing pages, small businesses, and creators who want something
                faster and sharper than a template.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-400">
                <li>Responsive layouts for mobile and desktop</li>
                <li>Clean, maintainable code and SEO foundations</li>
                <li>Room to grow into blogs, case studies, and more</li>
              </ul>
            </div>

            {/* Photography / Aerial */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-lg font-semibold text-slate-50">
                Photography & aerial cinematography
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                High-resolution stills and aerial sequences shot on Sony and DJI.
                Built for hero images, background visuals, and social content
                with a consistent visual language.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-400">
                <li>Urban and travel series</li>
                <li>Coastlines, landscapes, and overheads</li>
                <li>Sets designed with web and socials in mind</li>
              </ul>
            </div>

            {/* Video / 3D */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-lg font-semibold text-slate-50">
                Video editing, motion & 3D
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Edits, motion graphics and early-stage 3D work for promos,
                reels, and short-form content. Ideal for intros, hero banners,
                and content that needs movement to feel alive.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-400">
                <li>Cutdowns and social-first edits</li>
                <li>Subtle motion graphics and titles</li>
                <li>3D and animation as it evolves in your practice</li>
              </ul>
            </div>

            {/* Branding */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-lg font-semibold text-slate-50">
                Logo & brand identity
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Visual systems that sit behind everything else — logos, colour
                palettes, and simple guidelines that make your site, thumbnails,
                and socials feel like one coherent thing.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-400">
                <li>Logo marks and wordmarks</li>
                <li>Colour and type suggestions</li>
                <li>Basic usage notes for consistency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}