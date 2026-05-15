import SectionHeader from "./SectionHeader";

const stats = [
  { num: "∞",    label: "Curiosity to keep learning" },
  { num: "0→1",  label: "Love for building from scratch" },
  { num: "100%", label: "Ready & committed" },
];

export default function About({ dark }) {
  const bg   = dark ? "bg-stone-900 border-stone-800"  : "bg-white border-stone-200";
  const text = dark ? "text-stone-400" : "text-stone-500";
  const card = dark ? "bg-stone-800 border-stone-700"  : "bg-white border-stone-200";
  const num  = "text-blue-500";
  const lbl  = dark ? "text-stone-500" : "text-stone-400";

  return (
    <section id="about" className={`py-24 px-6 border-t-2 transition-colors duration-300 ${bg}`}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader pill="About me" pillColor="blue" title="Who I am" dark={dark} />
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className={`space-y-4 leading-relaxed text-[0.97rem] ${text}`}>
            <p>I'm Ayan Das, a B.A graduated based in Kolkata, India. I love turning ideas into working software — whether it's a clean web interface or a well-structured backend service.</p>
            <p>I'm actively looking for my first professional role where I can apply what I've learned, collaborate with a talented team, and grow as an engineer every single day.</p>
            <p>When I'm not coding, I enjoy exploring new tech, reading about software architecture, and solving problems just for the fun of it.</p>
          </div>
          <div className="flex flex-col gap-4">
            {stats.map((s) => (
              <div key={s.num} className={`p-5 border border-l-4 border-l-blue-600 rounded-lg transition-colors duration-300 ${card}`}>
                <div className={`font-serif text-3xl leading-none mb-1 ${num}`}>{s.num}</div>
                <div className={`text-xs font-medium ${lbl}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
