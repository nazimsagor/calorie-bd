import CalorieCalculatorForm from "@/components/CalorieCalculatorForm";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <h1 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Calorie Calculator BD
        </h1>
        <p className="mt-2 text-center text-sm text-slate-600 sm:text-base">
          আপনার দৈনিক ক্যালোরি হিসাবের জন্য তথ্য দিন
        </p>

        <div className="mt-8">
          <CalorieCalculatorForm />
        </div>
      </section>
    </main>
  );
}
