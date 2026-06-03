const GOLD = "#c9a96e";
const MUTED = "#8a8a8a";
const FG = "#f0ede8";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0d0d", borderTop: "1px solid rgba(201,169,110,0.1)", padding: "3rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "1.05rem", marginBottom: "0.5rem" }}>
              <span style={{ color: GOLD }}>Forensic</span> Authorship Consulting
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.82rem", lineHeight: 1.65 }}>
              Independent forensic linguistic analysis and AI detection consultancy for
              legal teams and educational institutions.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Services</p>
            {["AI Detection Consultancy", "Authorship Attribution", "Authorship Profiling", "Authorship Verification", "Policy & Process Advisory"].map(s => (
              <p key={s} style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem" }}>{s}</p>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Contact</p>
            {["anon@tobedecided.com", "+44 (0)XX XXXX XXXX", "Birmingham, United Kingdom"].map(v => (
              <p key={v} style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem" }}>{v}</p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(201,169,110,0.08)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem" }}>
          <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.75rem" }}>© 2026 Forensic Authorship Consulting. All rights reserved.</p>
          <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.75rem" }}>Member: British Computer Society · Expert Witness Certificate for Criminal Law</p>
        </div>
      </div>
    </footer>
  );
}
