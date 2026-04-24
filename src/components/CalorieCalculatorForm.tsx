export default function CalorieCalculatorForm() {
  return (
    <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Calorie Calculator
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Fill out your details to estimate your daily calorie needs.
      </p>

      <form className="mt-6 space-y-5">
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
            className="h-12 w-full rounded-xl border border-slate-300 px-4 text-base text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="weight" className="text-sm font-medium text-slate-800">
            Weight in kg
          </label>
          <input
            id="weight"
            name="weight"
            type="number"
            inputMode="decimal"
            min={1}
            step="0.1"
            placeholder="e.g. 70"
            className="h-12 w-full rounded-xl border border-slate-300 px-4 text-base text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="height" className="text-sm font-medium text-slate-800">
            Height in cm
          </label>
          <input
            id="height"
            name="height"
            type="number"
            inputMode="decimal"
            min={1}
            step="0.1"
            placeholder="e.g. 175"
            className="h-12 w-full rounded-xl border border-slate-300 px-4 text-base text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
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
            className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="activityLevel" className="text-sm font-medium text-slate-800">
            Activity level
          </label>
          <select
            id="activityLevel"
            name="activityLevel"
            defaultValue=""
            className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
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
          className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-slate-900 px-6 text-base font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
        >
          Calculate
        </button>
      </form>
    </section>
  );
}
