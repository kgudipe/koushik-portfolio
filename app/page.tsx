import Navbar from "@/components/Navbar";
import Orbs from "@/components/Orbs";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "#060812" }}>
      <Orbs />
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Skills />
      <Contact />
      <footer
        className="relative z-10 flex justify-between px-7 py-4 font-inter text-[11px] text-gray-800"
        style={{ borderTop: "0.5px solid rgba(255,255,255,0.04)" }}
      >
        <span>kg.dev · placeholder</span>
        <span>Built with Next.js · Tailwind · Deployed on Vercel</span>
      </footer>
    </main>
  );
}
