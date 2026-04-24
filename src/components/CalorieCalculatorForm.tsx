export default function CalorieCalculatorForm() {
  return (
    <section className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Calorie Calculator
        </h1>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Add your details to estimate your daily calorie target.
        </p>
      </header>

      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" aria-label="Calorie calculator form">
        <div className="space-y-2">
          <label htmlFor="age" className="text-sm font-medium text-slate-800">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            inputMode="numeric"
            min={1}
            placeholder="e.g. 28"
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-base text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="weight" className="text-sm font-medium text-slate-800">
            Weight (kg)
          </label>
          <input
            id="weight"
            name="weight"
            type="number"
            inputMode="decimal"
            min={1}
            step="0.1"
            placeholder="e.g. 70"
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-base text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="height" className="text-sm font-medium text-slate-800">
            Height (cm)
          </label>
          <input
            id="height"
            name="height"
            type="number"
            inputMode="decimal"
            min={1}
            step="0.1"
            placeholder="e.g. 175"
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-base text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="gender" className="text-sm font-medium text-slate-800">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            defaultValue=""
            className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="activityLevel" className="text-sm font-medium text-slate-800">
            Activity level
          </label>
          <select
            id="activityLevel"
            name="activityLevel"
            defaultValue=""
            className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          >
            <option value="" disabled>
              Select activity level
            </option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
          </select>
        </div>

        <button
          type="submit"
          className="sm:col-span-2 mt-1 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        >
          Calculate Calories
        </button>
      </form>

      <aside className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
        <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          Your Results
        </span>
        <p className="mt-2 text-sm text-emerald-900">
          Fill the form and tap calculate to view your estimated daily calorie
          needs.
        </p>
      </aside>
    </section>
  );
}
