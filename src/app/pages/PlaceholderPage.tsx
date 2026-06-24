export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-12 text-center h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">{title}</h1>
        <p className="text-slate-500 max-w-lg mx-auto">
          This page is under construction. Navigate back to the Home page to explore the full Kalra Hospitals experience.
        </p>
      </div>
    </div>
  );
}
