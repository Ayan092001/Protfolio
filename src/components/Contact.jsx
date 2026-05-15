import SectionHeader from "./SectionHeader";

export default function Contact({ dark }) {
  const handleEmailClick = () => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isAndroid) {
      window.location.href =
        "intent://compose?to=ayand9332@gmail.com&subject=Hiring Inquiry#Intent;scheme=googlegmail;package=com.google.android.gm;end";
    } else if (isIOS) {
      window.location.href =
        "googlegmail://co?to=ayand9332@gmail.com&subject=Hiring Inquiry";
    } else {
      window.open(
        "https://mail.google.com/mail/?view=cm&to=ayand9332@gmail.com&su=Hiring Inquiry",
        "_blank"
      );
    }
  };

  const bg   = dark ? "bg-stone-900 border-stone-800"  : "bg-orange-50 border-stone-200";
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

            {/* Email */}
            <button
              onClick={handleEmailClick}
              className={`inline-flex items-center gap-2 px-5 py-3 border rounded-lg text-sm hover:-translate-y-0.5 transition-all duration-200 ${btn}`}
            >
              ✉️ Email me
            </button>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ayan-das-a33a56168/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 border rounded-lg text-sm hover:-translate-y-0.5 transition-all duration-200 ${btn}`}
            >
              💼 LinkedIn
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}