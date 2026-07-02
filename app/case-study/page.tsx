import Link from "next/link";

const stack = [
  {
    name: "Apache Kafka",
    reason:
      "Ingests transaction events from multiple banking channels — card swipes, Zelle transfers, ACH payments, and online banking — into partitioned topics. Configured producers and consumers for high-throughput streaming without data loss. Partition strategy distributes load evenly across brokers, keeping the system stable during peak events like holiday seasons where volume approaches 2M transactions per day.",
  },
  {
    name: "Spark Structured Streaming",
    reason:
      "Consumes Kafka streams and runs real-time transformations — filtering invalid transactions, normalising currency formats, and enriching data with customer metadata from reference systems. Built checkpointing and fault-tolerance so no transaction is lost on node failure. If a Spark job restarts due to node failure, it resumes from the last checkpoint without duplicating transaction processing.",
  },
  {
    name: "XGBoost + Scikit-learn",
    reason:
      "Selected over deep learning because it handles imbalanced fraud datasets better and consistently hits under 200ms inference — matching the latency SLA. Tuned using grid search and cross-validation. Primary evaluation metrics were precision, recall, F1, and ROC-AUC — minimising false negatives is more important than overall accuracy in fraud detection.",
  },
  {
    name: "FastAPI",
    reason:
      "Exposes fraud scoring APIs that accept transaction payloads and return real-time risk scores under 200ms. Request validation layer rejects malformed or incomplete data early, reducing downstream processing failures. User profile caching reduces database calls and improves API performance under high concurrent load.",
  },
  {
    name: "Flask (auxiliary services)",
    reason:
      "Rule evaluation, logging, and transaction validation services built in Flask — keeping the rules engine and ML scoring service independently deployable and evolvable. This separation meant the rule logic could be updated without touching the ML inference layer.",
  },
  {
    name: "MySQL (optimised)",
    reason:
      "Indexed on transaction_id, user_id, and timestamp. Partitioned large transaction tables. Removed full table scans identified via MySQL EXPLAIN plans. Query time dropped from ~200–250ms to ~150–180ms — a 20% improvement that compounds significantly at 1–2M daily transactions.",
  },
  {
    name: "Kubernetes + Jenkins",
    reason:
      "Before automation: manual build + test + deploy took 45–60 minutes. After: Jenkins pipeline with Docker and Kubernetes brings it to 30–40 minutes via parallel build execution, container reuse, and faster rollback. SonarQube and Nexus integrated for code quality gating and artifact management.",
  },
];

const outcomes = [
  { num: "1–2M",   label: "Daily transactions processed",     sub: "Across card payments, Zelle, ACH, online banking — with headroom for peak days" },
  { num: "<2s",    label: "End-to-end processing latency",     sub: "Down from 3–5 seconds — measured via end-to-end timestamp tracking" },
  { num: "<200ms", label: "Fraud scoring API response",        sub: "FastAPI inference service response time under full production load" },
  { num: "15%",    label: "Earlier fraud detection",           sub: "Rule-based velocity + geo anomaly logic catching patterns ML alone missed" },
  { num: "12–15%", label: "Detection accuracy lift",           sub: "XGBoost over prior rule-only system — measured on precision, recall, ROC-AUC" },
  { num: "20%",    label: "Query time reduction",              sub: "MySQL from ~200–250ms to ~150–180ms via indexing and partition strategy" },
  { num: "30%",    label: "Deployment cycle cut",              sub: "From 45–60 min manual process to 30–40 min automated Jenkins pipeline" },
];

const timeline = [
  { phase: "Discovery",     duration: "2 weeks",  desc: "Audited existing batch pipeline. Mapped transaction volume patterns across channels — card, ACH, Zelle, online. Identified 3–5 second processing lag as primary risk. Defined latency SLA: fraud scoring must complete within 2 seconds end-to-end." },
  { phase: "Architecture",  duration: "2 weeks",  desc: "Designed Kafka topic structure and partition strategy. Defined Spark Streaming topology and microservice boundaries. Evaluated ML candidates — selected XGBoost over deep learning based on latency benchmarks and performance on imbalanced fraud datasets." },
  { phase: "Core pipeline", duration: "6 weeks",  desc: "Built Kafka producers and consumers. Implemented Spark Structured Streaming jobs with checkpointing and fault-tolerance. Built feature engineering layer — 28+ features including velocity, geo, device fingerprinting, and behavioural signals. Integrated XGBoost inference with FastAPI scoring service." },
  { phase: "Rule engine",   duration: "3 weeks",  desc: "Implemented velocity checks (per minute/hour/day), geo-location anomaly detection via lat-long distance calculation, device fingerprinting, and adaptive behavioural profiling. Tested against real fraud scenarios: card cloning, account takeover, identity theft, card testing." },
  { phase: "Hardening",     duration: "3 weeks",  desc: "JWT auth + RBAC across all microservices for AML/KYC compliance. MySQL schema redesign and index optimisation. Load tested to 2M daily transactions. SonarQube + Nexus quality gates enforced on every PR. Prometheus + Grafana dashboards for pipeline observability." },
  { phase: "Production",    duration: "Ongoing",  desc: "Deployed on Kubernetes (AKS). React.js fraud analyst dashboard with Redux state management for real-time alert visualisation. Centralised logging and exception handling across services. Continuous model retraining on new fraud signal data." },
];

const rules = [
  { label: "Velocity checks", desc: "Transaction count per minute, hour, and day — detects rapid-fire card testing fraud scenarios" },
  { label: "Geo-location anomaly", desc: "Distance between successive transactions using lat-long — flags impossible travel patterns across countries" },
  { label: "Device fingerprinting", desc: "Device ID, IP, browser metadata, login patterns — catches single account accessed from multiple devices" },
  { label: "Behavioural profiling", desc: "Adaptive thresholds per customer risk profile — reduces false positives on legitimate unusual transactions" },
];

const outcomeList = [
  "Processing latency cut from 3–5 seconds to under 2 seconds end-to-end via Kafka + Spark optimisation",
  "FastAPI fraud scoring API responds under 200ms — well within the low-latency SLA",
  "ML + rule hybrid layer caught 15% more fraud earlier than the previous rule-only system",
  "XGBoost improved detection accuracy 12–15% — measured on precision, recall, F1, and ROC-AUC",
  "Behavioural baseline profiling reduced false positives — fewer legitimate customers incorrectly flagged",
  "MySQL query time dropped from ~200–250ms to ~150–180ms via indexing on transaction_id, user_id, timestamp",
  "Deployment cycle cut 30% — 45–60 min manual process → 30–40 min automated Jenkins pipeline",
  "JWT + RBAC enforcement across all microservices met AML/KYC compliance and audit requirements",
  "Prometheus + Grafana dashboards gave the team real-time visibility into pipeline health and streaming lag",
  "React.js fraud analyst dashboard with real-time alert updates replaced manual reporting",
];

const divider = { border: "none", borderTop: "0.5px solid rgba(255,255,255,0.06)", marginBottom: "3.5rem" } as React.CSSProperties;

export default function CaseStudy() {
  return (
    <main className="relative min-h-screen" style={{ background: "#060812", color: "#f9fafb" }}>

      <div
        className="pointer-events-none fixed rounded-full"
        style={{ width: 400, height: 400, background: "#4338CA", opacity: 0.09, top: -100, right: -80, filter: "blur(80px)" }}
        aria-hidden="true"
      />

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-7 py-4"
        style={{ borderBottom: "0.5px solid rgba(255,255,255,0.06)", background: "rgba(6,8,18,0.9)", backdropFilter: "blur(12px)" }}
      >
        <Link href="/" className="font-grotesk text-[15px] font-bold text-white no-underline tracking-tight">
          kg<span className="text-indigo-400">.</span>dev
        </Link>
        <Link href="/" className="flex items-center gap-1.5 font-inter text-[12px] text-gray-600 no-underline hover:text-gray-400 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to portfolio
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-7 py-14 relative z-10">

        {/* ── HEADER ── */}
        <div className="mb-14">
          <div className="flex flex-wrap gap-2 mb-5">
            {[
              { label: "Professional · Bank of America", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.3)",  color: "#6EE7B7" },
              { label: "Backend · ML · Streaming",       bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.3)",  color: "#A5B4FC" },
              { label: "Aug 2024 – Present",             bg: "rgba(255,255,255,0.04)",border: "rgba(255,255,255,0.09)",color: "#6B7280" },
            ].map((b) => (
              <span key={b.label} className="font-inter text-[11px] font-medium px-2.5 py-1 rounded-md"
                style={{ background: b.bg, border: `0.5px solid ${b.border}`, color: b.color }}>
                {b.label}
              </span>
            ))}
          </div>
          <h1 className="font-grotesk text-[38px] font-bold text-gray-50 tracking-[-1.2px] leading-tight mb-4">
            Real-Time Fraud Detection &amp; Risk Scoring Platform
          </h1>
          <p className="font-inter text-[16px] text-gray-500 leading-relaxed">
            A high-throughput, event-driven fraud detection system at Bank of America — processing 1–2M daily
            transactions across card payments, Zelle, ACH, and online banking with end-to-end scoring latency
            under 2 seconds.
          </p>
        </div>

        {/* ── METRICS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {outcomes.map((o) => (
            <div key={o.label} className="rounded-xl p-4"
              style={{ background: "rgba(16,185,129,0.06)", border: "0.5px solid rgba(16,185,129,0.15)" }}>
              <div className="font-grotesk text-[22px] font-bold text-emerald-400 tracking-tight leading-none mb-1">{o.num}</div>
              <div className="font-inter text-[11px] text-gray-300 font-medium mb-1">{o.label}</div>
              <div className="font-inter text-[10px] text-gray-600 leading-snug">{o.sub}</div>
            </div>
          ))}
        </div>

        <hr style={divider} />

        {/* ── 01 PROBLEM ── */}
        <section className="mb-14">
          <div className="font-inter text-[11px] uppercase tracking-widest text-indigo-400 mb-3">01 — Problem</div>
          <h2 className="font-grotesk text-[24px] font-bold text-gray-50 tracking-tight mb-5">
            Batch detection wasn&apos;t fast enough to stop fraud
          </h2>
          <p className="font-inter text-[15px] text-gray-500 leading-relaxed mb-4">
            Bank of America processes millions of transactions daily across debit and credit cards, Zelle transfers,
            ACH payments, wire transfers, and online banking. Fraud can happen in milliseconds across any of these
            channels. The existing batch-based system analysed transactions hours after they occurred — by then,
            funds had already moved and the intervention window had closed.
          </p>
          <p className="font-inter text-[15px] text-gray-500 leading-relaxed mb-6">
            Beyond speed, the system had to meet AML and KYC compliance requirements, reduce false positives that
            frustrated legitimate customers, and defend against sophisticated fraud patterns — card cloning, account
            takeover, identity theft, and card testing — that static rules alone couldn&apos;t catch.
          </p>
          <div className="rounded-xl p-5" style={{ background: "rgba(239,68,68,0.05)", border: "0.5px solid rgba(239,68,68,0.15)" }}>
            <div className="font-inter text-[11px] uppercase tracking-widest text-red-400 mb-3">Core problems</div>
            <ul className="space-y-2.5">
              {[
                "Processing lag of 3–5 seconds — needed to get below 2 seconds end-to-end",
                "Batch detection cycle meant fraud was flagged hours after the event",
                "Static rule engine caused false positives — legitimate customers incorrectly flagged",
                "No ML layer — couldn't detect novel fraud patterns that rules missed",
                "No real-time signal correlation across geo, device, and velocity data",
                "Manual deployment process took 45–60 minutes — slowed model iteration",
                "No observability — zero visibility into pipeline health, lag, or scoring drift",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 font-inter text-[14px] text-gray-500">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr style={divider} />

        {/* ── 02 DECISIONS ── */}
        <section className="mb-14">
          <div className="font-inter text-[11px] uppercase tracking-widest text-indigo-400 mb-3">02 — Decisions</div>
          <h2 className="font-grotesk text-[24px] font-bold text-gray-50 tracking-tight mb-5">
            Architecture choices and why
          </h2>
          <p className="font-inter text-[15px] text-gray-500 leading-relaxed mb-8">
            Every technology decision was made against two hard constraints: end-to-end latency under 2 seconds
            and financial-grade reliability. The system follows an event-driven microservices architecture.
          </p>

          {/* Flow */}
          <div className="rounded-xl px-5 py-4 font-mono text-[11px] text-gray-600 leading-loose mb-8 overflow-x-auto"
            style={{ background: "rgba(0,0,0,0.25)", border: "0.5px solid rgba(255,255,255,0.06)" }}>
            {[
              "Transaction event",
              "Kafka topic",
              "Spark Structured Streaming",
              "Feature engineering",
              "XGBoost + Rule engine",
              "FastAPI scoring API",
              "Dashboard + Audit log",
            ].map((step, i, arr) => (
              <span key={step}>
                <span className="text-indigo-400">{step}</span>
                {i < arr.length - 1 && <span className="text-gray-800 mx-2">→</span>}
              </span>
            ))}
          </div>

          <div className="space-y-4 mb-8">
            {stack.map((s) => (
              <div key={s.name} className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.07)" }}>
                <div className="font-mono text-[13px] font-semibold text-indigo-300 mb-2">{s.name}</div>
                <p className="font-inter text-[14px] text-gray-500 leading-relaxed">{s.reason}</p>
              </div>
            ))}
          </div>

          {/* Rule engine */}
          <div className="rounded-xl p-5" style={{ background: "rgba(99,102,241,0.06)", border: "0.5px solid rgba(99,102,241,0.18)" }}>
            <div className="font-inter text-[11px] uppercase tracking-widest text-indigo-400 mb-2">Rule engine — layered on top of ML, not replacing it</div>
            <p className="font-inter text-[14px] text-gray-500 leading-relaxed mb-4">
              Both layers run in parallel and their outputs are combined using weighted scoring logic to generate
              a final fraud probability. Rules catch known patterns instantly; XGBoost catches novel patterns
              rules miss. Adaptive thresholds change fraud sensitivity based on transaction type and customer
              risk profile — reducing false positives on legitimate unusual transactions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {rules.map((r) => (
                <div key={r.label} className="rounded-lg px-3 py-2.5"
                  style={{ background: "rgba(99,102,241,0.08)", border: "0.5px solid rgba(99,102,241,0.15)" }}>
                  <div className="font-inter text-[11px] font-semibold text-indigo-300 mb-1">{r.label}</div>
                  <div className="font-inter text-[11px] text-gray-600 leading-snug">{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr style={divider} />

        {/* ── 03 REAL SCENARIO ── */}
        <section className="mb-14">
          <div className="font-inter text-[11px] uppercase tracking-widest text-indigo-400 mb-3">03 — Real scenario</div>
          <h2 className="font-grotesk text-[24px] font-bold text-gray-50 tracking-tight mb-5">
            How a fraud event flows through the system
          </h2>
          <p className="font-inter text-[15px] text-gray-500 leading-relaxed mb-6">
            A customer normally transacts locally in New Jersey. Then a $6,000 transaction is initiated
            from a new device in another country.
          </p>

          <div className="space-y-2 mb-6">
            {[
              { step: "01", label: "Kafka captures the event instantly", color: "#818CF8", bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.2)" },
              { step: "02", label: "Spark detects geo-location anomaly — impossible travel from NJ", color: "#67E8F9", bg: "rgba(14,116,144,0.08)", border: "rgba(14,116,144,0.2)" },
              { step: "03", label: "Rule engine flags device mismatch — new device ID never seen before", color: "#C4B5FD", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)" },
              { step: "04", label: "XGBoost assigns high fraud probability based on combined feature signals", color: "#FCD34D", bg: "rgba(180,83,9,0.08)", border: "rgba(180,83,9,0.2)" },
              { step: "05", label: "Combined score exceeds threshold — transaction blocked", color: "#FCA5A5", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)" },
              { step: "06", label: "Fraud analyst dashboard shows alert in real time via React + Redux", color: "#6EE7B7", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
              { step: "07", label: "Customer receives security notification — financial loss prevented before settlement", color: "#6EE7B7", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-3 rounded-xl px-4 py-3"
                style={{ background: s.bg, border: `0.5px solid ${s.border}` }}>
                <span className="font-mono text-[10px] font-semibold mt-0.5 flex-shrink-0" style={{ color: s.color }}>{s.step}</span>
                <span className="font-inter text-[13px] text-gray-400 leading-snug">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl px-5 py-4 font-mono text-[12px] text-gray-600"
            style={{ background: "rgba(0,0,0,0.2)", border: "0.5px solid rgba(255,255,255,0.06)" }}>
            Total time from transaction to block:{" "}
            <span className="text-emerald-400 font-semibold">under 2 seconds</span>
          </div>
        </section>

        <hr style={divider} />

        {/* ── 04 TIMELINE ── */}
        <section className="mb-14">
          <div className="font-inter text-[11px] uppercase tracking-widest text-indigo-400 mb-3">04 — Timeline</div>
          <h2 className="font-grotesk text-[24px] font-bold text-gray-50 tracking-tight mb-8">How it was built</h2>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ background: "rgba(99,102,241,0.2)" }} />
            <div className="space-y-6 pl-8">
              {timeline.map((t) => (
                <div key={t.phase} className="relative">
                  <div className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full border"
                    style={{ background: "#060812", borderColor: "#6366F1", borderWidth: "1.5px" }} />
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="font-grotesk text-[14px] font-semibold text-gray-200">{t.phase}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md"
                      style={{ background: "rgba(99,102,241,0.1)", border: "0.5px solid rgba(99,102,241,0.25)", color: "#818CF8" }}>
                      {t.duration}
                    </span>
                  </div>
                  <p className="font-inter text-[13px] text-gray-600 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr style={divider} />

        {/* ── 05 OUTCOME ── */}
        <section className="mb-14">
          <div className="font-inter text-[11px] uppercase tracking-widest text-indigo-400 mb-3">05 — Outcome</div>
          <h2 className="font-grotesk text-[24px] font-bold text-gray-50 tracking-tight mb-5">What shipped</h2>
          <p className="font-inter text-[15px] text-gray-500 leading-relaxed mb-6">
            The platform moved Bank of America from batch fraud detection with multi-second lag to a fully
            real-time event-driven system — blocking fraud before settlement, at scale, with full observability.
          </p>
          <div className="rounded-xl p-5" style={{ background: "rgba(16,185,129,0.05)", border: "0.5px solid rgba(16,185,129,0.15)" }}>
            <ul className="space-y-3">
              {outcomeList.map((o) => (
                <li key={o} className="flex items-start gap-2.5 font-inter text-[14px] text-gray-400">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          style={{ background: "rgba(99,102,241,0.07)", border: "0.5px solid rgba(99,102,241,0.2)" }}>
          <div>
            <div className="font-grotesk text-[17px] font-bold text-gray-50 mb-1">Want to talk through the architecture?</div>
            <div className="font-inter text-[13px] text-gray-600">Open to backend, fullstack, and ML roles. Based in CA.</div>
          </div>
          <a href="mailto:youremail@gmail.com"
            className="font-inter text-[13px] font-semibold px-6 py-3 rounded-xl bg-indigo-500 text-white no-underline hover:bg-indigo-400 transition-colors whitespace-nowrap">
            Get in touch →
          </a>
        </div>

      </div>

      <footer className="relative z-10 flex justify-between px-7 py-4 font-inter text-[11px] text-gray-800 mt-8"
        style={{ borderTop: "0.5px solid rgba(255,255,255,0.04)" }}>
        <span>kg.dev · placeholder</span>
        <Link href="/" className="text-gray-700 no-underline hover:text-gray-500 transition-colors">← Back to portfolio</Link>
      </footer>
    </main>
  );
}