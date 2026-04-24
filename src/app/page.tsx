"use client";

import { FormEvent, useMemo, useState } from "react";

type Sex = "male" | "female";
type ActivityLevel = "sedentary" | "light" | "moderate" | "active";

const ACTIVITY_FACTORS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
};

const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  sedentary: "Sedentary (little or no exercise)",
  light: "Light (exercise 1-3 days/week)",
  moderate: "Moderate (exercise 3-5 days/week)",
  active: "Active (exercise 6-7 days/week)",
};

function calculateBmr(weight: number, height: number, age: number, sex: Sex): number {
  const base = 10 * weight + 6.25 * height - 5 * age;
  return sex === "male" ? base + 5 : base - 161;
}

export default function Home() {
  const [age, setAge] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [sex, setSex] = useState<Sex>("male");
  const [activity, setActivity] = useState<ActivityLevel>("sedentary");
  const [submitted, setSubmitted] = useState(false);

  const hasValidInputs =
    typeof age === "number" && age > 0 && typeof weight === "number" && weight > 0 && typeof height === "number" && height > 0;

  const calories = useMemo(() => {
    if (!hasValidInputs) {
      return null;
    }

    const bmr = calculateBmr(weight, height, age, sex);
    const maintenance = Math.round(bmr * ACTIVITY_FACTORS[activity]);

    return {
      maintenance,
      loss: maintenance - 500,
      gain: maintenance + 500,
    };
  }, [activity, age, hasValidInputs, height, sex, weight]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-8">
      <section className="w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Calorie Calculator BD</h1>
        <p className="mt-3 text-center text-slate-600">Calculate maintenance, weight loss, and weight gain calories using Mifflin-St Jeor.</p>

        <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-3">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Age (years)
              <input
                className="rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-500"
                type="number"
                min={1}
                value={age}
                onChange={(event) => setAge(event.target.value === "" ? "" : Number(event.target.value))}
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Weight (kg)
              <input
                className="rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-500"
                type="number"
                min={1}
                value={weight}
                onChange={(event) => setWeight(event.target.value === "" ? "" : Number(event.target.value))}
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Height (cm)
              <input
                className="rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-500"
                type="number"
                min={1}
                value={height}
                onChange={(event) => setHeight(event.target.value === "" ? "" : Number(event.target.value))}
                required
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Sex
              <select
                className="rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-500"
                value={sex}
                onChange={(event) => setSex(event.target.value as Sex)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Activity level
              <select
                className="rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-500"
                value={activity}
                onChange={(event) => setActivity(event.target.value as ActivityLevel)}
              >
                {Object.entries(ACTIVITY_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button
            className="w-full rounded-md bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
            type="submit"
          >
            Calculate calories
          </button>
        </form>

        {submitted && !hasValidInputs && (
          <p className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Please enter valid values for age, weight, and height.
          </p>
        )}

        {submitted && calories && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
              <h2 className="text-sm font-medium text-slate-600">Maintenance calories</h2>
              <p className="mt-2 text-2xl font-bold text-slate-900">{calories.maintenance} kcal/day</p>
            </article>

            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
              <h2 className="text-sm font-medium text-slate-600">Weight loss calories</h2>
              <p className="mt-2 text-2xl font-bold text-slate-900">{calories.loss} kcal/day</p>
            </article>

            <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
              <h2 className="text-sm font-medium text-slate-600">Weight gain calories</h2>
              <p className="mt-2 text-2xl font-bold text-slate-900">{calories.gain} kcal/day</p>
            </article>
          </div>
        )}
      </section>
    </main>
  );
}
