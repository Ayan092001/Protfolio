import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar({ dark, toggleDark }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = links.find((link) => {
        const el = document.getElementById(link.toLowerCase());
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 80 && rect.bottom > 80;
      });
      setActive(current || "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = dark
    ? "bg-black/80 border-white/10"
    : "bg-white/75 border-white/60";
  const shadow = scrolled ? (dark ? "shadow-lg shadow-black/40" : "shadow-lg shadow-black/10") : "";
  const logoText = dark ? "text-white" : "text-stone-900";
  const pillBg = dark ? "bg-white/8 border-white/12" : "bg-black/5 border-black/8";
  const linkDefault = dark ? "text-stone-400 hover:text-white" : "text-stone-500 hover:text-stone-900";
  const linkActive = dark ? "bg-white/12 text-white shadow-black/30" : "bg-white text-stone-900 shadow-black/12";
  const themeBg = dark ? "bg-white/10 hover:bg-white/20" : "bg-black/6 hover:bg-black/12";
  const divider = dark ? "bg-white/12" : "bg-black/12";
  const mobileMenuBg = dark ? "bg-black/90 border-white/10" : "bg-white/95 border-stone-200";
  const mobileLinkDefault = dark ? "text-stone-400 hover:text-white hover:bg-white/8" : "text-stone-500 hover:text-stone-900 hover:bg-stone-100";
  const mobileLinkActive = dark ? "bg-white/12 text-white" : "bg-stone-100 text-stone-900 font-medium";
  const hamburger = dark ? "text-stone-400 hover:text-white" : "text-stone-500 hover:text-stone-900";

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${navBg} ${shadow}`}
    >
      <div className="max-w-5xl mx-auto px-6 h-[68px] flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
          <span className={`font-serif text-[1.1rem] tracking-tight transition-colors ${logoText}`}>
            Ayan Das
          </span>
        </a>

        {/* Desktop — floating pill nav */}
        <ul
          className={`hidden md:flex items-center gap-0.5 list-none border rounded-full px-1 py-1 backdrop-blur-sm transition-colors ${pillBg}`}
        >
          {links.map((link) => (
            <li key={link} className="relative">
              <a
                href={`#${link.toLowerCase()}`}
                className={`relative text-[0.81rem] font-medium px-4 py-1.5 rounded-full transition-all duration-200 block ${
                  active === link
                    ? `shadow-sm ${linkActive}`
                    : linkDefault
                }`}
              >
                {/* Underline bar on hover (not active) */}
                {active !== link && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-8 transition-all duration-200" />
                )}
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          {/* Theme toggle */}
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className={`w-9 h-9 rounded-full flex items-center justify-center text-[1rem] transition-all duration-300 hover:rotate-12 hover:scale-110 ${themeBg}`}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <div className={`hidden md:block w-px h-5 ${divider}`} />

          {/* Green available dot */}
          <span className="hidden md:block relative flex-shrink-0">
            <span className="block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.25)] animate-pulse" />
          </span>

          {/* Hire me CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.8rem] font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden group"
          >
            <span className="relative z-10">Hire me</span>
            <span className="relative z-10 text-blue-200 text-xs">↗</span>
            {/* Shimmer layer */}
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-1.5 rounded-lg transition-colors ${hamburger}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className={`md:hidden border-t backdrop-blur-xl px-5 py-4 ${mobileMenuBg}`}>
          <ul className="flex flex-col gap-1 list-none mb-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`block text-sm px-4 py-2.5 rounded-xl transition-all duration-200 ${
                    active === link ? mobileLinkActive : mobileLinkDefault
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
            onClick={() => setOpen(false)}
          >
            Hire me ↗
          </a>
        </div>
      )}
    </nav>
  );
}
