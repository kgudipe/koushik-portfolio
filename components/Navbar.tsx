"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-7 py-4 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#060812]/90 backdrop-blur-md"
          : "border-b border-white/[0.04]"
      }`}
    >
      <div className="font-grotesk text-[15px] font-bold text-white tracking-tight">
        kg<span className="text-indigo-400">.</span>dev
      </div>

      <ul className="flex gap-6 list-none">
        {["Work", "Systems", "About"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-inter text-[12px] text-gray-600 hover:text-gray-400 transition-colors no-underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-1.5 font-inter text-[12px] font-medium px-4 py-1.5 rounded-lg text-indigo-300 transition-colors no-underline"
        style={{
          background: "rgba(129,140,248,0.1)",
          border: "0.5px solid rgba(129,140,248,0.3)",
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Resume
      </a>
    </nav>
  );
}
