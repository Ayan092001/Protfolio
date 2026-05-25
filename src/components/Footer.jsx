export default function Footer({ dark }) {
  const bg   = dark ? "bg-stone-950 border-stone-800" : "bg-stone-900 border-stone-700";
  const sub  = dark ? "text-stone-500" : "text-stone-400";

  return (
    <footer className={`px-6 py-6 border-t-2 transition-colors duration-300 ${bg}`}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
        <span className="font-serif text-white text-base">Ayan Das</span>
        <span className={sub}>Built with React & Tailwind CSS · Kolkata, India · 2026</span>
      </div>
    </footer>
  );
}
