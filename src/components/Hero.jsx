export default function Hero({ dark }) {
  const bg = dark ? "bg-stone-950 border-stone-800" : "bg-stone-50 border-stone-200";
  const h1 = dark ? "text-white" : "text-stone-900";
  const sub = dark ? "text-stone-400" : "text-stone-500";
  const btnOutline = dark
    ? "border-stone-600 text-stone-300 hover:border-blue-500 hover:text-blue-400"
    : "border-stone-300 text-stone-800 hover:border-blue-600 hover:text-blue-600";

  return (
    <section id="hero" className={`min-h-[90vh] flex flex-col justify-center px-6 py-24 border-b-2 transition-colors duration-300 ${bg}`}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-6 h-px bg-blue-600" />
          <span className="text-xs font-medium tracking-widest uppercase text-blue-600">
            Open to opportunities
          </span>
        </div>

        <h1 className={`font-serif text-6xl md:text-8xl leading-[1.05] tracking-tight mb-6 ${h1}`}>
          Hi, I'm{" "}
          <span className="text-blue-600">Ayan Das</span>
        </h1>

        <p className={`text-lg max-w-md leading-relaxed mb-10 ${sub}`}>
          A fresher software developer from Kolkata — passionate about building
          clean, efficient, and useful applications. Ready to learn fast and
          contribute from day one.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded transition-colors duration-200">
            Get in touch
          </a>
          <a href="#projects" className={`px-6 py-3 border text-sm font-medium rounded transition-colors duration-200 ${btnOutline}`}>
            See my work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
