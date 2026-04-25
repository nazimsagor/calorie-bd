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

        <form className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="block text-sm font-medium text-slate-800">Age → বয়স</span>
            <input
              type="number"
              placeholder="আপনার বয়স লিখুন"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-emerald-500 transition focus:ring-2"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-medium text-slate-800">Weight → ওজন (কেজি)</span>
            <input
              type="number"
              placeholder="ওজন (kg)"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-emerald-500 transition focus:ring-2"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-medium text-slate-800">Height → উচ্চতা (সেমি)</span>
            <input
              type="number"
              placeholder="উচ্চতা (cm)"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-emerald-500 transition focus:ring-2"
            />
          </label>

          <label className="space-y-2">
            <span className="block text-sm font-medium text-slate-800">Gender → লিঙ্গ</span>
            <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-emerald-500 transition focus:ring-2">
              <option>নির্বাচন করুন</option>
              <option>Male (পুরুষ)</option>
              <option>Female (মহিলা)</option>
            </select>
          </label>

          <label className="space-y-2 sm:col-span-2">
            <span className="block text-sm font-medium text-slate-800">Activity → কাজের ধরণ</span>
            <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-emerald-500 transition focus:ring-2">
              <option>নির্বাচন করুন</option>
              <option>Low (কম চলাফেরা)</option>
              <option>Moderate (মাঝারি চলাফেরা)</option>
              <option>High (বেশি চলাফেরা)</option>
            </select>
          </label>

          <div className="pt-1 sm:col-span-2">
            <button
              type="button"
              className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-base font-semibold text-white transition hover:bg-emerald-700"
            >
              Calculate করুন
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
