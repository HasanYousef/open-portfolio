export default function Header() {
  return (
    <nav className="z-40 fixed flex justify-around items-center w-full bg-black/50 backdrop-blur-xl border-b border-slate-900 py-2 px-4">
      <div className="flex justify-between items-center w-full max-w-5xl">
        <span className="text-lg text-slate-400"></span>
        <button className="inline-flex h-8 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1a222b,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-sm text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {"Resume.pdf"}
        </button>
      </div>
    </nav>
  );
}
