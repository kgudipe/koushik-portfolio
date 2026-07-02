const stats = [
  { num: "2", suffix: "M", desc: "transactions / day" },
  { num: "4", suffix: "+", desc: "years experience" },
  { num: "30", suffix: "%", desc: "deployment cycle cut" },
  { num: "15", suffix: "%", desc: "earlier fraud detection" },
];

export default function Stats() {
  return (
    <div
      className="grid grid-cols-4 relative z-10"
      style={{ borderTop: "0.5px solid rgba(255,255,255,0.05)", borderBottom: "0.5px solid rgba(255,255,255,0.05)" }}
    >
      {stats.map((s, i) => (
        <div
          key={s.desc}
          className="px-7 py-5"
          style={{ borderRight: i < 3 ? "0.5px solid rgba(255,255,255,0.05)" : "none" }}
        >
          <div className="font-grotesk text-[30px] font-bold text-gray-50 tracking-tight leading-none">
            {s.num}
            <em className="not-italic text-indigo-400">{s.suffix}</em>
          </div>
          <div className="font-inter text-[11px] text-gray-600 mt-1">{s.desc}</div>
        </div>
      ))}
    </div>
  );
}
