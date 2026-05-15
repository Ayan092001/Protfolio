import SectionHeader from "./SectionHeader";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    tag: "Web App",
    name: "Payslip Generator",
    desc: "Developed a streamlined web application designed to automate the payroll process for small businesses. By replacing manual calculations with a logic-driven engine, the tool eliminates human error in tax deductions and salary breakdowns. Users can input employee data and instantly generate high-quality, print-ready PDF payslips, significantly reducing administrative overhead.",
    tech: ["React", "CSS", "My SQL"],
    github: "https://github.com/Ayan092001/Payslip_Generator",
  },
  {
    tag: "Web App",
    name: "Spotify Clone",
    desc: "Built a high-performance music streaming platform that mirrors the core functionality of Spotify. The project focuses on delivering a seamless user journey—from dynamic playlist discovery to an uninterrupted audio playback experience. I prioritized a mobile-first responsive design and fluid transitions to ensure the interface feels like a native application.",
    tech: ["React", "Tailwind CSS", "Context API"],
    github: "#",
  },
];

export default function Projects({ dark }) {
  const bg          = dark ? "bg-stone-900 border-stone-800"  : "bg-stone-100 border-stone-200";
  const card        = dark ? "bg-stone-800 border-stone-700 hover:border-blue-500" : "bg-white border-stone-200 hover:border-blue-500";
  const name        = dark ? "text-white"    : "text-stone-900";
  const desc        = dark ? "text-stone-400" : "text-stone-500";
  const foot        = dark ? "border-stone-700" : "border-stone-100";
  const badge       = dark ? "bg-blue-900/40 text-blue-300" : "bg-blue-50 text-blue-700";
  const gh          = dark ? "text-stone-500 hover:text-blue-400" : "text-stone-400 hover:text-blue-600";
  const seeMoreCard = dark
    ? "bg-stone-800 border-stone-700 hover:border-blue-500 text-stone-300 hover:text-blue-400"
    : "bg-white border-stone-200 hover:border-blue-500 text-stone-500 hover:text-blue-600";

  return (
    <section id="projects" className={`py-24 px-6 border-t-2 transition-colors duration-300 ${bg}`}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader pill="Things I've built" pillColor="blue" title="Projects" dark={dark} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {projects.map((p) => (
            <div key={p.name} className={`border rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-200 ${card}`}>
              <div className="h-1 bg-linear-to-r from-blue-600 to-blue-400" />
              <div className="p-5 flex-1">
                <div className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-2">{p.tag}</div>
                <h3 className={`font-serif text-xl mb-2 ${name}`}>{p.name}</h3>
                <p className={`text-sm leading-relaxed ${desc}`}>{p.desc}</p>
              </div>
              <div className={`px-5 py-4 border-t flex items-center justify-between ${foot}`}>
                <div className="flex gap-2 flex-wrap">
                  {p.tech.map((t) => (
                    <span key={t} className={`text-xs px-2 py-1 rounded-full font-medium ${badge}`}>{t}</span>
                  ))}
                </div>
                <a href={p.github} className={`text-xs transition-colors ml-3 shrink-0 ${gh}`} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              </div>
            </div>
          ))}

          {/* See more card */}
          <a
          
            href="https://github.com/Ayan092001?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`border rounded-xl flex flex-col items-center justify-center gap-3 p-8 hover:-translate-y-1 transition-all duration-200 group ${seeMoreCard}`}
          >
            <span className="text-sm font-medium tracking-wide flex items-center gap-1.5">
              See more <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </span>
          </a>

        </div>
      </div>
      </section>
  );
}