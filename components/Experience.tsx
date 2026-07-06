const roles = [
  {
    title: "Software Engineer — Backend / Python",
    company: "Bank of America",
    location: "NC, USA",
    dates: "Aug 2024 – Present",
    current: true,
    stack: ["Python", "FastAPI", "Kafka", "Spark", "XGBoost", "Kubernetes", "Jenkins", "MySQL"],
    bullets: [
      "Architected a real-time fraud detection backend processing 1–2M daily transactions with FastAPI, Kafka, and Spark Streaming — sub-second scoring latency.",
      "Built ML-backed fraud scoring services (XGBoost, Scikit-learn) as FastAPI microservices, lifting detection accuracy 12–15% while cutting false positives.",
      "Designed scalable Kafka + Spark pipelines for real-time ingestion, transformation, and validation of high-volume financial transaction streams.",
      "Developed rule-based detection logic — velocity checks, geo-location anomalies, device fingerprinting, and behavioral profiling — improving early detection 15%.",
      "Optimized MySQL schema design, indexing, and query execution, reducing query times 20% across core transaction tables.",
      "Automated CI/CD with Jenkins, Docker, Kubernetes, SonarQube, and Nexus — cutting deployment cycle time 30% and improving release consistency.",
      "Implemented JWT authentication and RBAC across microservices for secure access control and financial compliance.",
    ],
  },
  {
    title: "Full Stack Software Developer",
    company: "Deloitte",
    location: "Hyderabad, India",
    dates: "Jan 2021 – Jul 2023",
    current: false,
    stack: ["Python", "FastAPI", "Spring Boot", "Kafka", "GraphQL", "Redis", "Azure AKS", "WebSockets"],
    bullets: [
      "Designed a Python/FastAPI microservices backend for an e-commerce order management platform handling 40–50K daily transactions, improving stability under peak load.",
      "Led migration of a legacy monolith to domain-driven microservices (FastAPI async + Spring Boot), cutting release cycles 30% and enabling independent deployments.",
      "Built REST and GraphQL APIs with FastAPI, Pydantic, and OpenAPI — response latency ~300ms → ~200ms with strict schema validation.",
      "Implemented event-driven order tracking with Apache Kafka and WebSockets, reducing peak processing lag 25%.",
      "Cut API response latency ~500ms → ~300ms via Redis caching and async processing.",
      "Established CI/CD pipelines with GitLab CI, Docker, and PyTest, improving build reliability and deployment consistency.",
      "Deployed and monitored cloud-native services on Azure AKS with Prometheus + Grafana observability, maintaining high availability in production.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-7 py-11">
      <div className="font-inter text-[11px] uppercase tracking-widest text-indigo-500 mb-2.5">Career</div>
      <h2 className="font-grotesk text-[28px] font-bold text-gray-50 tracking-tight mb-8">Experience</h2>

      <div className="space-y-4">
        {roles.map((r) => (
          <div
            key={r.company}
            className="rounded-2xl p-6"
            style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="font-grotesk text-[18px] font-bold text-gray-50 tracking-tight mb-1">{r.title}</h3>
                <div className="font-inter text-[13px] text-gray-500">
                  <span className="text-indigo-300 font-medium">{r.company}</span>
                  <span className="text-gray-700 mx-1.5">·</span>
                  {r.location}
                </div>
              </div>
              <span
                className="inline-flex items-center gap-1.5 self-start font-inter text-[11px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap"
                style={
                  r.current
                    ? { background: "rgba(16,185,129,0.1)", border: "0.5px solid rgba(16,185,129,0.3)", color: "#6EE7B7" }
                    : { background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", color: "#9CA3AF" }
                }
              >
                {r.current && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-blink" />}
                {r.dates}
              </span>
            </div>

            <ul className="space-y-2 mb-4">
              {r.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 font-inter text-[13px] text-gray-500 leading-relaxed">
                  <span className="text-indigo-500 mt-1.5 flex-shrink-0 leading-none">▸</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {r.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-md text-gray-500"
                  style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.09)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
