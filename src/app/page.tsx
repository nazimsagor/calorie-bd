export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-100 via-white to-emerald-50 px-4 py-12 sm:px-6">
      <section className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-300/40 backdrop-blur sm:p-8">
        <header className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Calorie Calculator BD
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Stay on track with smarter daily nutrition
          </h1>
          <p className="mx-auto max-w-xl text-sm text-slate-600 sm:text-base">
            Enter your basics and instantly view your calorie estimate with a
            clean, athlete-inspired interface.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-700">
            Age
            <input
              type="number"
              placeholder="28"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            Weight (kg)
            <input
              type="number"
              placeholder="72"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            Height (cm)
            <input
              type="number"
              placeholder="175"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            Activity Level
            <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100">
              <option>Moderate</option>
              <option>Light</option>
              <option>Active</option>
            </select>
          </label>
        </div>

        <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-400/30 transition hover:from-emerald-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 sm:text-base">
          Calculate Calories
        </button>

        <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 text-left shadow-inner shadow-emerald-200/60">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Your Results
          </p>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div>
              <p className="text-sm text-slate-600">Recommended daily intake</p>
              <p className="text-3xl font-bold text-slate-900">2,180 kcal</p>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
              Balanced Goal
            </span>
          </div>
        </section>
      </section>
    </main>
  );
}
