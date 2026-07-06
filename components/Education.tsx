export default function Education() {
  return (
    <section id="education" className="relative z-10 px-7 pb-11">
      <div className="font-inter text-[11px] uppercase tracking-widest text-indigo-500 mb-3.5">Education</div>

      <div
        className="rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
        style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-start gap-3.5">
          <div
            className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(99,102,241,0.12)", border: "0.5px solid rgba(99,102,241,0.25)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A5B4FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10L12 5 2 10l10 5 10-5z" />
              <path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5" />
            </svg>
          </div>
          <div>
            <h3 className="font-grotesk text-[17px] font-bold text-gray-50 tracking-tight mb-1">
              Master of Science in Computer Science
            </h3>
            <div className="font-inter text-[13px] text-gray-500">
              <span className="text-indigo-300 font-medium">NC State University</span>
              <span className="text-gray-700 mx-1.5">·</span>
              Raleigh, NC, USA
            </div>
          </div>
        </div>

        <span
          className="inline-flex self-start font-inter text-[11px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap"
          style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", color: "#9CA3AF" }}
        >
          Aug 2023 – May 2025
        </span>
      </div>
    </section>
  );
}
