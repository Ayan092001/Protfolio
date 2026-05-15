export default function SectionHeader({ pill, pillColor, title, dark }) {
  const colorMap = {
    blue:   dark ? "bg-blue-900/50 text-blue-300"   : "bg-blue-100 text-blue-700",
    indigo: dark ? "bg-indigo-900/50 text-indigo-300" : "bg-indigo-100 text-indigo-700",
    teal:   dark ? "bg-teal-900/50 text-teal-300"   : "bg-teal-100 text-teal-700",
    green:  dark ? "bg-green-900/50 text-green-300"  : "bg-green-100 text-green-700",
    orange: dark ? "bg-orange-900/50 text-orange-300" : "bg-orange-100 text-orange-700",
  };
  const titleColor = dark ? "text-white" : "text-stone-900";
  const border = "border-blue-600";

  return (
    <div className="mb-10">
      <span className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${colorMap[pillColor] || colorMap.blue}`}>
        {pill}
      </span>
      <h2 className={`font-serif text-4xl md:text-5xl tracking-tight leading-tight border-l-4 ${border} pl-4 ${titleColor}`}>
        {title}
      </h2>
    </div>
  );
}
