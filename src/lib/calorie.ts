export type Sex = "male" | "female";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "active";

export const ACTIVITY_FACTORS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
};

export const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  sedentary: "Sedentary (little or no exercise)",
  light: "Light (exercise 1-3 days/week)",
  moderate: "Moderate (exercise 3-5 days/week)",
  active: "Active (exercise 6-7 days/week)",
};

export function calculateBmr(weightKg: number, heightCm: number, ageYears: number, sex: Sex): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * ageYears;
  return sex === "male" ? base + 5 : base - 161;
}

export function calculateCalorieTargets(
  weightKg: number,
  heightCm: number,
  ageYears: number,
  sex: Sex,
  activityLevel: ActivityLevel,
) {
  const bmr = calculateBmr(weightKg, heightCm, ageYears, sex);
  const maintenance = Math.round(bmr * ACTIVITY_FACTORS[activityLevel]);

  return {
    maintenance,
    loss: Math.max(0, maintenance - 500),
    gain: maintenance + 500,
  };
}
