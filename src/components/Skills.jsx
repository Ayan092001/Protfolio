import SectionHeader from "./SectionHeader";

import { SiJavascript, SiReact, SiTailwindcss, SiHtml5, SiNodedotjs, SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { icon: <SiJavascript className="text-yellow-400 text-xl" />, name: "JavaScript",  level: "Intermediate" },
  { icon: <SiReact className="text-cyan-400 text-xl" />,        name: "React",        level: "Learning"     },
  { icon: <SiTailwindcss className="text-cyan-400 text-xl" />,  name: "Tailwind CSS", level: "Learning"     },
  { icon: <SiHtml5 className="text-orange-500 text-xl" />,      name: "HTML & CSS",   level: "Comfortable"  },
  { icon: <SiNodedotjs className="text-green-500 text-xl" />,   name: "Node.js",      level: "Learning"     },
  { icon: <SiMysql className="text-blue-500 text-xl" />,        name: "MySQL",        level: "Learning"     },
  { icon: <TbApi className="text-violet-500 text-xl" />,        name: "REST APIs",    level: "Beginner"     },
  { icon: <SiExpress className="text-stone-400 text-xl" />,     name: "Express.js",   level: "Beginner"     },
  { icon: <SiMongodb className="text-green-500 text-xl" />,     name: "MongoDB",      level: "Beginner"     },
];

export default function Skills({ dark }) {
  const bg   = dark ? "bg-stone-950 border-stone-800" : "bg-blue-50 border-stone-200";
  const card = dark ? "bg-stone-800 border-stone-700 hover:border-blue-500" : "bg-white border-stone-200 hover:border-blue-500";
  const name = dark ? "text-stone-100" : "text-stone-800";
  const lvl  = dark ? "text-stone-500" : "text-stone-400";
  const icon = dark ? "bg-blue-900/40" : "bg-blue-50";

  return (
    <section id="skills" className={`py-24 px-6 border-t-2 transition-colors duration-300 ${bg}`}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader pill="What I know" pillColor="indigo" title="Skills" dark={dark} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className={`flex items-center gap-3 border rounded-lg p-4 hover:-translate-y-1 transition-all duration-200 ${card}`}>
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg text-2xl shrink-0 ${icon}`}>
                {skill.icon}
              </div>
              <div>
                <div className={`text-sm font-medium ${name}`}>{skill.name}</div>
                <div className={`text-xs ${lvl}`}>{skill.level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}