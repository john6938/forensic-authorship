import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const BG = "#111111";
const GOLD = "#c9a96e";
const MUTED = "#8a8a8a";
const FG = "#f0ede8";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "AI Detection", href: "#ai-detection" },
    { label: "Services", href: "#services" },
    { label: "Methodology", href: "#methodology" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: scrolled ? "rgba(17,17,17,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(201,169,110,0.15)` : "none",
        transition: "all 0.3s ease",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG }}>
          <span style={{ color: GOLD }}>Forensic</span> Authorship
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ color: MUTED, fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
                className="hover:text-[#c9a96e] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block"
          style={{
            border: `1px solid ${GOLD}`,
            color: GOLD,
            padding: "0.5rem 1.25rem",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = GOLD; (e.currentTarget as HTMLAnchorElement).style.color = BG; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = GOLD; }}
        >
          Enquire
        </a>

        <button className="md:hidden" style={{ color: FG }} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{ backgroundColor: BG, borderTop: "1px solid rgba(201,169,110,0.15)" }} className="md:hidden px-6 pb-6 pt-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: MUTED, display: "block", padding: "0.75rem 0", fontSize: "0.875rem", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid rgba(201,169,110,0.1)" }}
              className="hover:text-[#c9a96e] transition-colors"
            >{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            style={{ marginTop: "1.5rem", display: "block", textAlign: "center", border: `1px solid ${GOLD}`, color: GOLD, padding: "0.75rem", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Enquire
          </a>
        </div>
      )}
    </nav>
  );
}
