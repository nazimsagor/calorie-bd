import CalorieCalculatorForm from "@/components/CalorieCalculatorForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50/40 px-4 py-10 sm:py-14">
      <section className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur sm:p-10">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Fitness Toolkit
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Calculate your daily calorie needs in seconds
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Enter your basic profile details and get a quick estimate you can
            use to plan meals and workouts.
          </p>
        </div>

        <CalorieCalculatorForm />
      </section>
    </main>
  );
}
