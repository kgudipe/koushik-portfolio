"use client";
import { useEffect, useState } from "react";

export default function PipelineAnimation() {
  const [tps, setTps] = useState(847);
  const [lat, setLat] = useState(851);

  useEffect(() => {
    const interval = setInterval(() => {
      setTps(Math.round(847 + (Math.random() - 0.5) * 60));
      setLat(Math.round(851 + (Math.random() - 0.5) * 40));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { cx: 40,  label: "TXN",   color: "#3730A3", text: "#818CF8" },
    { cx: 120, label: "KAFKA", color: "#155E75", text: "#67E8F9" },
    { cx: 200, label: "SPARK", color: "#5B21B6", text: "#C4B5FD" },
    { cx: 270, label: "XGBST",color: "#92400E", text: "#FCD34D" },
    { cx: 330, label: "API",   color: "#065F46", text: "#6EE7B7" },
  ];

  const packets = [
    { color: "#818CF8", begin: "0s",    path: "M 40 28 L 330 28" },
    { color: "#818CF8", begin: "0.73s", path: "M 40 28 L 330 28" },
    { color: "#10B981", begin: "1.46s", path: "M 40 28 L 330 28" },
    { color: "#EF4444", begin: "1.9s",  path: "M 200 28 L 330 28", fraud: true },
  ];

  const pills = [
    { label: "Kafka · 3 topics",  bg: "rgba(55,48,163,.15)",  border: "rgba(99,102,241,.3)",   text: "#818CF8" },
    { label: "28 features",        bg: "rgba(91,33,182,.12)",  border: "rgba(167,139,250,.25)", text: "#C4B5FD" },
    { label: "<1s latency",        bg: "rgba(16,185,129,.08)", border: "rgba(16,185,129,.25)",  text: "#6EE7B7" },
    { label: "95.2% accuracy",     bg: "rgba(239,68,68,.08)",  border: "rgba(239,68,68,.25)",   text: "#FCA5A5" },
  ];

  return (
    <div
      className="rounded-2xl p-5 overflow-hidden"
      style={{ background: "rgba(255,255,255,0.025)", border: "0.5px solid rgba(255,255,255,0.07)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5 font-inter text-[10px] text-gray-600 uppercase tracking-widest">
          <span className="w-[5px] h-[5px] rounded-full bg-emerald-400 inline-block animate-blink" />
          Fraud pipeline · live at BofA
        </div>
        <div className="flex gap-3 font-mono text-[11px] text-gray-600">
          <span>txn/s <span className="text-emerald-400">{tps}</span></span>
          <span>lat <span className="text-emerald-400">{lat}ms</span></span>
        </div>
      </div>

      {/* SVG pipeline */}
      <svg viewBox="0 0 370 56" className="w-full block mb-3" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="28" x2="330" y2="28" stroke="#111827" strokeWidth="1.5" />

        {nodes.map((n) => (
          <g key={n.label}>
            <circle cx={n.cx} cy={28} r={14} fill="#0F172A" stroke={n.color} strokeWidth="1" />
            <text
              x={n.cx} y={32}
              textAnchor="middle"
              fontFamily="JetBrains Mono"
              fontSize={n.label.length > 4 ? "6" : "7"}
              fill={n.text}
              fontWeight="600"
            >
              {n.label}
            </text>
          </g>
        ))}

        {packets.map((p, i) => (
          <circle key={i} r={p.fraud ? 5 : 4} fill={p.color} opacity="0">
            <animateMotion dur="2.2s" begin={p.begin} repeatCount="indefinite" path={p.path} />
            <animate
              attributeName="opacity"
              values={p.fraud ? "0;0;.9;.9;0" : "0;1;1;0"}
              keyTimes={p.fraud ? "0;0.01;0.07;0.93;1" : "0;0.05;0.92;1"}
              dur="2.2s"
              begin={p.begin}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* Pills */}
      <div className="flex flex-wrap gap-1.5">
        {pills.map((p) => (
          <span
            key={p.label}
            className="font-mono text-[10px] px-2 py-1 rounded-md"
            style={{ background: p.bg, border: `0.5px solid ${p.border}`, color: p.text }}
          >
            {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}
