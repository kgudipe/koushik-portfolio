const links = [
  { label: "Email",    href: "mailto:gudipellykoushik@gmail.com", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/koushik-gudipelly/", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { label: "GitHub",   href: "https://github.com/kgudipe", icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
];

export default function Contact() {
  return (
    <div
      className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-7 py-11"
      style={{ borderTop: "0.5px solid rgba(255,255,255,0.05)" }}
    >
      <div>
        <h2 className="font-grotesk text-[26px] font-bold text-gray-50 tracking-tight mb-1.5">
          Let&apos;s build something.
        </h2>
        <p className="font-inter text-[13px] text-gray-600 max-w-xs leading-relaxed">
          Open to backend, fullstack, and ML-adjacent roles. Based in CA — open to full time, remote and hybrid.
        </p>
        <div className="flex gap-2 mt-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-inter text-[12px] font-medium px-3.5 py-2 rounded-lg text-gray-500 no-underline transition-colors hover:text-gray-300"
              style={{ background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.1)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {l.icon.split(" M").map((d, i) => (
                  <path key={i} d={i === 0 ? d : "M" + d} />
                ))}
              </svg>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <a
        href="mailto:gudipellykoushik@gmail.com"
        className="font-grotesk text-[13px] font-semibold px-7 py-3.5 rounded-xl bg-indigo-500 text-white no-underline hover:bg-indigo-400 transition-colors whitespace-nowrap"
      >
        Get in touch →
      </a>
    </div>
  );
}
