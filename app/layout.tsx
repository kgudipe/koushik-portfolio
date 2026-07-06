import type { Metadata } from "next";
// @ts-ignore: CSS module type declarations not available in this environment
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  ),
  title: "Koushik Gudipelly — Backend & Fullstack Engineer",
  description:
    "Backend, fullstack, and ML engineer with 4+ years building high-throughput systems at Bank of America and Deloitte. Specialised in FastAPI, Kafka, Spark, and Next.js.",
  keywords: [
    "backend engineer",
    "python engineer",
    "fullstack developer",
    "FastAPI",
    "Apache Kafka",
    "Spark",
    "Next.js",
    "machine learning",
  ],
  authors: [{ name: "Koushik Gudipelly" }],
  openGraph: {
    title: "Koushik Gudipelly — Backend & Fullstack Engineer",
    description:
      "Building systems that process millions of events daily. Open to backend, fullstack, and ML roles.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koushik Gudipelly — Backend & Fullstack Engineer",
    description:
      "Building systems that process millions of events daily. Open to backend, fullstack, and ML roles.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
