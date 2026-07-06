const deep = [
  {
    cat: "Backend and APIs",
    skills: ["FastAPI / Python", "Microservices", "Spring Boot", "GraphQL / REST", "Async programming"],
  },
  {
    cat: "Data and streaming",
    skills: ["Apache Kafka", "Spark / PySpark", "PostgreSQL / MySQL", "Redis / Snowflake", "ETL pipelines"],
  },
  {
    cat: "Cloud and DevOps",
    skills: ["Docker / Kubernetes", "Azure AKS", "AWS (EC2/S3/RDS)", "Jenkins / GitLab CI", "Prometheus / Grafana"],
  },
  {
    cat: "ML and analytics",
    skills: ["XGBoost / Scikit-learn", "TensorFlow / CNNs", "Feature engineering", "Pandas / NumPy", "Anomaly detection"],
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
            <div className="font-inter text-[10px] uppercase tracking-widest text-indigo-500 mb-3.5">
              {c.cat}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {c.skills.map((s) => (
                <span
                  key={s}
                  className="font-inter text-[11px] text-indigo-200 px-2.5 py-1 rounded-md"
                  style={{ background: "rgba(99,102,241,0.1)", border: "0.5px solid rgba(99,102,241,0.22)" }}
                >
                  {s}
                </span>
              ))}
            </div>
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