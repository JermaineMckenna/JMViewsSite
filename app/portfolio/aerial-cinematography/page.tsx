export default function AerialCinematographyPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Aerial Cinematography
          </h1>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Perspective from above.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-slate-300">
            A dedicated space for drone work — coastlines, cities and
            landscapes seen from above. Designed for projects that need cinematic
            overheads, movement and a sense of scale.
          </p>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center text-sm text-slate-300">
            <p className="font-semibold text-slate-100">
              Aerial sequences and stills are coming soon.
            </p>
            <p className="mt-2">
              Upcoming shoots will bring in new locations and flight paths.
              Those sequences will be curated here as the aerial portfolio
              evolves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}