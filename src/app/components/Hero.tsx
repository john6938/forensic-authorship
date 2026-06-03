const BG = "#111111";
const GOLD = "#c9a96e";
const MUTED = "#8a8a8a";
const FG = "#f0ede8";
const CARD = "#1c1c1c";

export function Hero() {
  return (
    <section
      id="top"
      style={{
        backgroundColor: BG,
        backgroundImage: `radial-gradient(ellipse 70% 50% at 55% 40%, rgba(201,169,110,0.05) 0%, transparent 65%)`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
      }} />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        {/* Overline */}
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: "2rem", height: "1px", backgroundColor: GOLD }} />
          <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
            Forensic Authorship &amp; AI Detection Consultancy
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Headline — wider */}
          <div className="md:col-span-3">
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: FG,
              fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)",
              lineHeight: 1.1,
              fontWeight: 500,
              marginBottom: "1.75rem",
            }}>
              Forensic authorship:{" "}
              <em style={{ color: GOLD, fontStyle: "italic" }}>where language becomes evidence.</em>
            </h1>
            <p style={{
              fontFamily: "Inter, sans-serif",
              color: MUTED,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: "42ch",
              marginBottom: "2.25rem",
            }}>
              Bespoke forensic authorship analysis for police forces and legal teams.
              Evidence-based AI detection consultancy for institutions and companies.
              Rigorous. Defensible. Expert witness–ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" style={{
                backgroundColor: GOLD, color: BG,
                padding: "0.9rem 2rem", fontSize: "0.78rem", letterSpacing: "0.12em",
                textTransform: "uppercase", fontFamily: "Inter, sans-serif", fontWeight: 500,
                display: "inline-block", transition: "opacity 0.2s ease",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "1"}
              >
                Request a Consultation
              </a>
              <a href="#ai-detection" style={{
                border: "1px solid rgba(201,169,110,0.4)", color: FG,
                padding: "0.9rem 2rem", fontSize: "0.78rem", letterSpacing: "0.12em",
                textTransform: "uppercase", fontFamily: "Inter, sans-serif",
                display: "inline-block", transition: "border-color 0.2s ease",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = GOLD}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,169,110,0.4)"}
              >
                AI Detection Services
              </a>
            </div>
          </div>

          {/* Stats column */}
          <div className="md:col-span-2" style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(201,169,110,0.12)" }}>
            {[
              { value: "15+", label: "Years of specialist practice" },
              { value: "20+", label: "Language-evidence reports submitted" },
              { value: "AI", label: "Detection advisory since 2022" },
              { value: "100%", label: "Methodologically defensible reports" },
            ].map(s => (
              <div key={s.label} style={{ backgroundColor: CARD, padding: "1.75rem 1.5rem" }}>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", color: GOLD, fontSize: "2rem", fontWeight: 500, lineHeight: 1, marginBottom: "0.4rem" }}>
                  {s.value}
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.8rem", lineHeight: 1.5 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: `linear-gradient(transparent, ${BG})`, pointerEvents: "none" }} />
    </section>
  );
}
