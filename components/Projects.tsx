"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const sideProjects = [
  {
    icon: "🔍",
    iconBg: "rgba(139,92,246,0.12)",
    tag: "AI · Fullstack",
    tagBg: "rgba(139,92,246,0.1)",
    tagBorder: "rgba(139,92,246,0.25)",
    tagColor: "#A78BFA",
    title: "AI resume analyzer",
    desc: "Upload a resume and job description — get instant match scoring, gap analysis, and rewrite suggestions via Gemini API.",
    stack: ["React", "FastAPI", "Gemini API", "Python"],
    live: "https://ai-resume-analyzer-six-mauve.vercel.app",
    github: "https://github.com/kgudipe/ai-resume-analyzer.git",
  },
  {
    icon: "📊",
    iconBg: "rgba(16,185,129,0.1)",
    tag: "Fullstack",
    tagBg: "rgba(16,185,129,0.08)",
    tagBorder: "rgba(16,185,129,0.22)",
    tagColor: "#34D399",
    title: "Project management platform",
    desc: "Full-stack app with Gantt charts, dashboards, Cognito auth, and Prisma ORM deployed on AWS EC2 and RDS.",
    stack: ["Next.js", "TypeScript", "Node.js", "AWS"],
    live: "https://project-management-app-mocha-six.vercel.app",
    github: "https://github.com/kgudipe/ProjectManagement-App.git",
  },
  {
    icon: "🧠",
    iconBg: "rgba(245,158,11,0.1)",
    tag: "ML · CV",
    tagBg: "rgba(245,158,11,0.08)",
    tagBorder: "rgba(245,158,11,0.22)",
    tagColor: "#FBBF24",
    title: "Real-time emotion detection",
    desc: "CNN (VGG16) trained on large-scale image datasets — classifying 7 emotions in real time with ~95% validation accuracy.",
    stack: ["Python", "TensorFlow", "OpenCV", "VGG16"],
    live: null,
    github: "#",
  },
];

const featuredStack = [
  "Python","FastAPI","Apache Kafka","Spark Streaming",
  "XGBoost","Scikit-learn","MySQL","Docker","Kubernetes","Jenkins",
];

const metrics = [
  { n: "1–2M", l: "daily transactions" },
  { n: "<1s",  l: "scoring latency" },
  { n: "15%",  l: "earlier detection" },
  { n: "30%",  l: "faster deploys" },
];

export default function Projects() {
  return (
    <section id="work" className="relative z-10 px-7 py-11">
      <div className="font-inter text-[11px] uppercase tracking-widest text-indigo-500 mb-2.5">Selected work</div>
      <h2 className="font-grotesk text-[28px] font-bold text-gray-50 tracking-tight mb-8">Projects</h2>

      {/* FEATURED */}
      <ScrollReveal containerClassName="mb-4" baseRotation={1} enableBlur={false}>
        <div
          className="rounded-2xl p-6"
          style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.2)" }}
        >
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className="inline-flex items-center gap-1.5 font-inter text-[10px] font-medium px-2.5 py-1 rounded-md"
              style={{ background: "rgba(16,185,129,0.1)", border: "0.5px solid rgba(16,185,129,0.3)", color: "#6EE7B7" }}
            >
              Professional · Bank of America
            </span>
            <span
              className="font-inter text-[10px] font-medium px-2.5 py-1 rounded-md"
              style={{ background: "rgba(99,102,241,0.15)", border: "0.5px solid rgba(99,102,241,0.35)", color: "#C7D2FE" }}
            >
              Backend · ML · Streaming
            </span>
          </div>

          <h3 className="font-grotesk text-[19px] font-bold text-gray-50 tracking-tight mb-3">
            Real-time fraud detection pipeline
          </h3>

          <p className="font-inter text-[13px] text-gray-600 leading-relaxed mb-4">
            Architected a real-time fraud detection platform at Bank of America processing 1–2M daily transactions across card payments, Zelle, ACH, and online banking. Built event-driven Kafka + Spark pipelines, ML-backed XGBoost scoring, rule-based detection logic, and FastAPI microservices — blocking fraud within 1–2 seconds before settlement.
          </p>

          {/* Architecture flow */}
          <div
            className="rounded-xl px-4 py-3 font-mono text-[11px] text-gray-600 leading-loose mb-4"
            style={{ background: "rgba(0,0,0,0.2)", border: "0.5px solid rgba(255,255,255,0.06)" }}
          >
            {["Transaction input","Kafka topic","Spark Streaming","Feature engineering","XGBoost scorer","FastAPI response"]
              .map((step, i, arr) => (
                <span key={step}>
                  <span className="text-indigo-400">{step}</span>
                  {i < arr.length - 1 && <span className="text-gray-800 mx-1.5">→</span>}
                </span>
              ))}
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-3 mb-4">
            {metrics.map((m) => (
              <div
                key={m.l}
                className="rounded-lg px-3.5 py-2"
                style={{ background: "rgba(16,185,129,0.07)", border: "0.5px solid rgba(16,185,129,0.18)" }}
              >
                <div className="font-grotesk text-[19px] font-bold text-emerald-400">{m.n}</div>
                <div className="font-inter text-[10px] text-gray-600 mt-0.5">{m.l}</div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {featuredStack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md text-gray-500"
                style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.09)" }}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <a
              href="/case-study"
              className="font-inter text-[12px] font-semibold px-4 py-2 rounded-lg bg-indigo-500 text-white no-underline hover:bg-indigo-400 transition-colors"
            >
              Read case study →
            </a>
            <a
              href="/fraud-pipeline-architecture.svg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[12px] font-medium px-4 py-2 rounded-lg text-gray-600 no-underline transition-colors"
              style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.1)" }}
            >
              Architecture diagram
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* SIDE PROJECTS */}
      <div className="font-inter text-[11px] uppercase tracking-widest text-gray-700 mb-3.5">Side projects</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {sideProjects.map((p) => (
          <ScrollReveal key={p.title} containerClassName="h-full" baseRotation={1} enableBlur={false}>
            <div
              className="h-full rounded-[13px] p-[18px] transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
            >
              <div
                className="w-9 h-9 rounded-[9px] flex items-center justify-center text-base mb-3"
                style={{ background: p.iconBg }}
              >
                {p.icon}
              </div>
              <span
                className="inline-block font-inter text-[10px] font-medium px-2 py-1 rounded-[5px] mb-2.5"
                style={{ background: p.tagBg, border: `0.5px solid ${p.tagBorder}`, color: p.tagColor }}
              >
                {p.tag}
              </span>
              <h3 className="font-grotesk text-[13px] font-semibold text-gray-200 mb-1.5">{p.title}</h3>
              <p className="font-inter text-[11px] text-gray-700 leading-relaxed mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] px-1.5 py-0.5 rounded-[5px] text-gray-600"
                    style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-1.5">
                {p.live && (
                  <a
                    href={p.live}
                    className="font-inter text-[11px] font-medium px-2.5 py-1.5 rounded-md no-underline"
                    style={{ background: "rgba(99,102,241,0.15)", border: "0.5px solid rgba(99,102,241,0.25)", color: "#A5B4FC" }}
                  >
                    Live demo
                  </a>
                )}
                <a
                  href={p.github}
                  className="font-inter text-[11px] font-medium px-2.5 py-1.5 rounded-md text-gray-600 no-underline"
                  style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.08)" }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
