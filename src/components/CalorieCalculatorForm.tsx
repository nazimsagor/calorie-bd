"use client";

import { FormEvent, useMemo, useState } from "react";
import { ACTIVITY_LABELS, ActivityLevel, calculateCalorieTargets, Sex } from "@/lib/calorie";

export default function CalorieCalculatorForm() {
  const [age, setAge] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [heightFeet, setHeightFeet] = useState<number | "">("");
  const [heightInches, setHeightInches] = useState<number | "">("");
  const [sex, setSex] = useState<Sex>("male");
  const [activity, setActivity] = useState<ActivityLevel>("sedentary");
  const [submitted, setSubmitted] = useState(false);

  const heightCm =
    typeof heightFeet === "number" && typeof heightInches === "number"
      ? heightFeet * 30.48 + heightInches * 2.54
      : null;

  const hasValidInputs =
    typeof age === "number" &&
    age > 0 &&
    typeof weight === "number" &&
    weight > 0 &&
    typeof heightFeet === "number" &&
    heightFeet >= 0 &&
    typeof heightInches === "number" &&
    heightInches >= 0 &&
    heightCm !== null &&
    heightCm > 0;

  const calories = useMemo(() => {
    if (!hasValidInputs || heightCm === null) {
      return null;
    }

    return calculateCalorieTargets(weight, heightCm, age, sex, activity);
  }, [activity, age, hasValidInputs, heightCm, sex, weight]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-4">
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
            Feet
            <input
              className="rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-500"
              type="number"
              min={0}
              value={heightFeet}
              onChange={(event) => setHeightFeet(event.target.value === "" ? "" : Number(event.target.value))}
              required
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Inches
            <input
              className="rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-500"
              type="number"
              min={0}
              value={heightInches}
              onChange={(event) => setHeightInches(event.target.value === "" ? "" : Number(event.target.value))}
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
    </>
  );
}
