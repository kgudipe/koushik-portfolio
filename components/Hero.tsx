import PipelineAnimation from "./PipelineAnimation";
import BlurText from "@/components/ui/BlurText";

const tags = ["Python", "FastAPI", "Apache Kafka", "Spark", "Next.js", "Kubernetes", "AWS · Azure"];

export default function Hero() {
  return (
    <section id="about" className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 px-7 pt-12 pb-10">
      {/* Left */}
      <div>
        <div
          className="inline-flex items-center gap-1.5 font-inter text-[11px] text-indigo-300 rounded-full px-3 py-1.5 mb-5"
          style={{ background: "rgba(99,102,241,0.1)", border: "0.5px solid rgba(99,102,241,0.3)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-blink" />
          Open to roles · Remote ok
        </div>

        <h1 className="font-grotesk text-[46px] font-bold tracking-[-1.8px] leading-[1.05] mb-2">
          <BlurText
            text="Koushik"
            delay={80}
            animateBy="letters"
            className="text-gray-50"
          />
          <BlurText
            text="Gudipelly"
            delay={160}
            animateBy="letters"
            className="text-indigo-400"
          />
        </h1>

        <p className="font-inter text-[15px] text-gray-600 leading-relaxed mb-5">
          <strong className="text-gray-500 font-medium">Backend · Fullstack · ML</strong> engineer with 4+ years building fraud detection platforms, real-time streaming pipelines, and distributed microservices at Bank of America and Deloitte.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((t) => (
            <span
              key={t}
              className="font-inter text-[11px] text-gray-600 px-2.5 py-1 rounded-md"
              style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2.5">
          <a
            href="#work"
            className="font-inter text-[13px] font-medium px-5 py-2.5 rounded-[9px] bg-indigo-500 text-white no-underline hover:bg-indigo-400 transition-colors"
          >
            See my work
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 font-inter text-[13px] font-medium px-5 py-2.5 rounded-[9px] text-gray-400 no-underline transition-colors"
            style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.12)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download resume
          </a>
        </div>
      </div>

      {/* Right — pipeline */}
      <PipelineAnimation />
    </section>
  );
}
