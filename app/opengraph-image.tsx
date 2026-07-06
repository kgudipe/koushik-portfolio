import { ImageResponse } from "next/og";

export const alt = "Koushik Gudipelly — Backend, Fullstack & ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#060812",
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(99,102,241,0.28), transparent 42%), radial-gradient(circle at 88% 82%, rgba(139,92,246,0.20), transparent 46%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
          <div style={{ width: 13, height: 13, borderRadius: 999, background: "#34D399" }} />
          <div style={{ fontSize: 24, color: "#A5B4FC", letterSpacing: 1 }}>
            Open to roles · CA, USA · Remote ok
          </div>
        </div>

        <div style={{ display: "flex", gap: 24, fontSize: 96, fontWeight: 700, letterSpacing: -4 }}>
          <div style={{ color: "#F9FAFB" }}>Koushik</div>
          <div style={{ color: "#818CF8" }}>Gudipelly</div>
        </div>

        <div style={{ display: "flex", fontSize: 34, color: "#9CA3AF", marginTop: 24, maxWidth: 940, lineHeight: 1.35 }}>
          Backend · Fullstack · ML Engineer — real-time fraud detection, streaming
          pipelines, and distributed microservices.
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 44 }}>
          {["Python", "FastAPI", "Kafka", "Spark", "Kubernetes"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 24,
                color: "#C7D2FE",
                padding: "10px 20px",
                borderRadius: 10,
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.32)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
