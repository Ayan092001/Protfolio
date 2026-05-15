import SectionHeader from "./SectionHeader";

const timeline = [
  {
    date: "2026 — Present",
    role: "Open to Work 🚀",
    org: "Actively seeking first role",
    desc: "Looking for junior developer positions where I can contribute, grow, and learn from experienced engineers in a real-world environment.",
  },
  {
    date: "2023",
    role: "Freelance Web Projects",
    org: "Self-initiated",
    desc: "Built small websites and web tools for personal projects and peers, gaining hands-on experience with HTML, CSS, and JavaScript.",
  },
  {
    date: "2019 — 2022",
    role: "B.A",
    org: "The University of Burdwan",
    desc: "A comprehensive program focused on developing critical thinking, effective communication, and a deep understanding. This degree provided me a strong foundation in analytical research and problem-solving within complex social and cultural contexts",
  },
];

export default function Experience({ dark }) {
  const bg   = dark ? "bg-stone-950 border-stone-800" : "bg-green-50 border-stone-200";
  const line = dark ? "bg-stone-700" : "bg-stone-200";
  const date = dark ? "text-stone-500" : "text-stone-400";
  const role = dark ? "text-stone-100" : "text-stone-900";
  const org  = dark ? "text-stone-500" : "text-stone-400";
  const desc = dark ? "text-stone-400" : "text-stone-500";

  return (
    <section id="experience" className={`py-24 px-6 border-t-2 transition-colors duration-300 ${bg}`}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader pill="My journey" pillColor="green" title="Education & Experience" dark={dark} />
        <div className="relative pl-8 max-w-2xl">
          <div className={`absolute left-0 top-2 bottom-2 w-px ${line}`} />
          {timeline.map((item, i) => (
            <div key={i} className="relative mb-10 last:mb-0">
              <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white ring-2 ring-blue-600" />
              <div className={`text-xs mb-1 ${date}`}>{item.date}</div>
              <div className={`font-semibold text-base ${role}`}>{item.role}</div>
              <div className={`text-sm mb-2 ${org}`}>{item.org}</div>
              <p className={`text-sm leading-relaxed ${desc}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
