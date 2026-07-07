"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Item = {
  kind: "Work" | "Education";
  date: string;
  present?: boolean;
  role: string;
  org: string;
  place: string;
  summary: string;
  highlights: string[];
  accent: string;
};

const items: Item[] = [
  {
    kind: "Work",
    date: "Aug 2024 — Present",
    present: true,
    role: "Software Engineer, Backend / Python",
    org: "Bank of America",
    place: "NC, USA",
    summary:
      "Building a real-time fraud detection platform that scores 1–2M transactions a day and blocks fraud before settlement.",
    highlights: ["Sub-second scoring", "+12–15% accuracy", "Kafka + Spark", "−30% deploy time"],
    accent: "#818CF8",
  },
  {
    kind: "Education",
    date: "Aug 2023 — May 2025",
    role: "M.S. in Computer Science",
    org: "NC State University",
    place: "Raleigh, NC, USA",
    summary:
      "Deepened distributed systems, machine learning, and data-engineering foundations while working in industry.",
    highlights: ["Distributed systems", "Machine learning", "Data engineering"],
    accent: "#C4B5FD",
  },
  {
    kind: "Work",
    date: "Jan 2021 — Jul 2023",
    role: "Full Stack Software Developer",
    org: "Deloitte",
    place: "Hyderabad, India",
    summary:
      "Built FastAPI microservices for an e-commerce order platform at 40–50K daily transactions and led a monolith-to-microservices migration.",
    highlights: ["Monolith → microservices", "REST + GraphQL APIs", "Kafka + WebSockets", "Redis caching"],
    accent: "#67E8F9",
  },
];

function TimelineRow({ t, i }: { t: Item; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
    >
      {/* Node on the spine */}
      <div className="absolute -left-9 top-1.5 flex items-center justify-center" style={{ width: 15, height: 15 }}>
        {t.present && (
          <span
            className="absolute inset-0 rounded-full animate-pulse-ring"
            style={{ border: `1.5px solid ${t.accent}` }}
            aria-hidden="true"
          />
        )}
        <span
          className="w-[13px] h-[13px] rounded-full"
          style={{
            background: "#060812",
            border: `2px solid ${t.accent}`,
            boxShadow: `0 0 10px ${t.accent}66`,
          }}
        />
      </div>

      {/* Card */}
      <div
        className="group rounded-2xl p-5 transition-all duration-200"
        style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.08)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${t.accent}55`;
          e.currentTarget.style.background = "rgba(255,255,255,0.035)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.background = "rgba(255,255,255,0.02)";
        }}
      >
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <span
            className="font-inter text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
            style={{ background: `${t.accent}1f`, border: `0.5px solid ${t.accent}44`, color: t.accent }}
          >
            {t.kind}
          </span>
          <span
            className="inline-flex items-center gap-1.5 font-inter text-[11px] font-medium px-2 py-0.5 rounded whitespace-nowrap"
            style={
              t.present
                ? { background: "rgba(16,185,129,0.1)", border: "0.5px solid rgba(16,185,129,0.3)", color: "#6EE7B7" }
                : { background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", color: "#9CA3AF" }
            }
          >
            {t.present && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-blink" />}
            {t.date}
          </span>
        </div>

        <h3 className="font-grotesk text-[17px] font-bold text-gray-50 tracking-tight mb-1">{t.role}</h3>
        <div className="font-inter text-[12.5px] text-gray-500 mb-3">
          <span className="font-medium" style={{ color: t.accent }}>{t.org}</span>
          <span className="text-gray-700 mx-1.5">·</span>
          {t.place}
        </div>

        <p className="font-inter text-[13px] text-gray-400 leading-relaxed mb-3.5 max-w-2xl">{t.summary}</p>

        <div className="flex flex-wrap gap-1.5">
          {t.highlights.map((h) => (
            <span
              key={h}
              className="font-mono text-[10.5px] px-2 py-1 rounded-md text-gray-500"
              style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)" }}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const spineRef = useRef<HTMLDivElement>(null);
  const spineInView = useInView(spineRef, { once: true, amount: 0.12 });

  return (
    <section id="experience" className="relative z-10 px-7 py-11">
      <div className="font-inter text-[11px] uppercase tracking-widest text-indigo-500 mb-2.5">
        The road so far
      </div>
      <h2 className="font-grotesk text-[28px] font-bold text-gray-50 tracking-tight mb-9">Journey</h2>

      <div className="relative" ref={spineRef}>
        {/* Animated timeline spine */}
        <motion.div
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top"
          style={{ background: "linear-gradient(180deg, #818CF8 0%, #C4B5FD 50%, #67E8F9 100%)" }}
          initial={{ scaleY: 0, opacity: 0.4 }}
          animate={spineInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0.4 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />

        <div className="space-y-4 pl-9">
          {items.map((t, i) => (
            <TimelineRow key={t.org + t.date} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
