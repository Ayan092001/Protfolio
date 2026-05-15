import SectionHeader from "./SectionHeader";

const links = [
  {
    label: "✉️ Email me",
    href: "https://mail.google.com/mail/?view=cm&to=ayand9332@gmail.com&su=Hiring Inquiry",
    external: true,
  },
  {
    label: "💼 LinkedIn",
    href: "https://www.linkedin.com/in/ayan-das-a33a56168/",
    external: true,
  },
];

export default function Contact({ dark }) {
  const bg  = dark ? "bg-stone-900 border-stone-800"  : "bg-orange-50 border-stone-200";
  const text = dark ? "text-stone-400" : "text-stone-500";
  const btn  = dark
    ? "bg-stone-800 border-stone-700 text-stone-300 hover:border-blue-500 hover:text-blue-400"
    : "bg-white border-stone-200 text-stone-700 hover:border-blue-500 hover:text-blue-600";

  return (
    <section id="contact" className={`py-24 px-6 border-t-2 transition-colors duration-300 ${bg}`}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader pill="Say hello" pillColor="orange" title="Contact me" dark={dark} />
        <div className="max-w-xl">
          <p className={`leading-relaxed mb-8 text-[0.97rem] ${text}`}>
            I'm actively looking for my first opportunity as a software
            developer. If you have an open role, a project idea, or just want
            to say hello — my inbox is always open. Let's talk!
          </p>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 border rounded-lg text-sm hover:-translate-y-0.5 transition-all duration-200 ${btn}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}