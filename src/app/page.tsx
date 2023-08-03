export default function Home() {
  return (
    <div className="h-screen bg-slate-900 p-8 text-slate-100">
      <h1 className="flex items-center gap-3 text-3xl font-bold before:flex before:h-8 before:w-0.5 before:bg-sky-500 sm:text-5xl lg:text-6xl">
        Hello Tailwind
      </h1>
      <h2>Hello Tailwind</h2>
      <p>Hello Tailwind</p>
      <button className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium transition-colors enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60">
        Sign in
      </button>
    </div>
  );
}
