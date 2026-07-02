const deep = [
  {
    cat: "Backend and APIs",
    skills: [
      { name: "FastAPI / Python",   pct: 95 },
      { name: "Microservices",      pct: 90 },
      { name: "Spring Boot",        pct: 75 },
      { name: "GraphQL / REST",     pct: 80 },
      { name: "Async programming",  pct: 85 },
    ],
  },
  {
    cat: "Data and streaming",
    skills: [
      { name: "Apache Kafka",       pct: 92 },
      { name: "Spark / PySpark",    pct: 88 },
      { name: "PostgreSQL / MySQL", pct: 85 },
      { name: "Redis / Snowflake",  pct: 78 },
      { name: "ETL pipelines",      pct: 82 },
    ],
  },
  {
    cat: "Cloud and DevOps",
    skills: [
      { name: "Docker / Kubernetes",   pct: 88 },
      { name: "Azure AKS",             pct: 82 },
      { name: "AWS (EC2/S3/RDS)",      pct: 80 },
      { name: "Jenkins / GitLab CI",   pct: 85 },
      { name: "Prometheus / Grafana",  pct: 78 },
    ],
  },
  {
    cat: "ML and analytics",
    skills: [
      { name: "XGBoost / Scikit-learn", pct: 85 },
      { name: "TensorFlow / CNNs",      pct: 75 },
      { name: "Feature engineering",    pct: 88 },
      { name: "Pandas / NumPy",         pct: 90 },
      { name: "Anomaly detection",      pct: 80 },
    ],
  },
];

const tags = [
  { label: "Python",       group: "lang" },
  { label: "Java",         group: "lang" },
  { label: "TypeScript",   group: "lang" },
  { label: "JavaScript",   group: "lang" },
  { label: "SQL",          group: "lang" },
  { label: "Flask",        group: "backend" },
  { label: "WebSockets",   group: "backend" },
  { label: "Pydantic",     group: "backend" },
  { label: "OpenAPI",      group: "backend" },
  { label: "JWT / OAuth2", group: "security" },
  { label: "RBAC",         group: "security" },
  { label: "SonarQube",    group: "security" },
  { label: "PyTest",       group: "testing" },
  { label: "Mockito",      group: "testing" },
  { label: "AWS Cognito",  group: "cloud" },
  { label: "AWS Glue",     group: "cloud" },
  { label: "AWS Amplify",  group: "cloud" },
  { label: "Nexus",        group: "devops" },
  { label: "Prisma ORM",   group: "backend" },
  { label: "PySpark",      group: "data" },
];

export default function Skills() {
  return (
    <section id="systems" className="relative z-10 px-7 pb-11">
      <div className="font-inter text-[11px] uppercase tracking-widest text-indigo-500 mb-2.5">
        Capabilities
      </div>
      <h2 className="font-grotesk text-[28px] font-bold text-gray-50 tracking-tight mb-8">
        Skills
      </h2>

      {/* Skill bars — 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {deep.map((c) => (
          <div
            key={c.cat}
            className="rounded-xl p-[18px]"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "0.5px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="font-inter text-[10px] uppercase tracking-widest text-indigo-500 mb-3">
              {c.cat}
            </div>
            {c.skills.map((s, i) => (
              <div key={s.name} className="flex items-center justify-between mb-2.5">
                <span className="font-inter text-[12px] text-gray-400">{s.name}</span>
                <div
                  className="w-[60px] h-[3px] rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="h-full rounded-full bg-indigo-500 animate-bar-in"
                    style={{
                      width: `${s.pct}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Tag cloud — everything else */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "rgba(255,255,255,0.015)",
          border: "0.5px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="font-inter text-[10px] uppercase tracking-widest text-gray-700 mb-3">
          Also worked with
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t.label}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md text-gray-600"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}