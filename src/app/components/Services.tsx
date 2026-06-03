import { Scale, UserCheck, FileText } from "lucide-react";

const BG = "#111111";
const GOLD = "#c9a96e";
const MUTED = "#8a8a8a";
const FG = "#f0ede8";
const CARD = "#1c1c1c";

const legalServices = [
  {
    icon: UserCheck,
    title: "Authorship Attribution",
    description:
      "Linguistic comparison of disputed texts against known samples to establish or exclude authorship with documented methodology suitable for evidentiary use.",
  },
  {
    icon: FileText,
    title: "Authorship Verification",
    description:
      "Determination of whether a questioned document — statement, confession, will, contract, or threat communication — was authored by the stated individual.",
  },
  {
    icon: Scale,
    title: "Authorship Profiling",
    description:
      "Where no known suspect exists: systematic analysis of anonymous or disputed texts to build a profile of the probable author — dialect, register, education level, and idiolect markers.",
  },
];

function ServiceCard({ icon: Icon, title, description }: { icon: React.ComponentType<{ size?: number; color?: string }>; title: string; description: string }) {
  return (
    <div style={{ backgroundColor: CARD, border: "1px solid rgba(201,169,110,0.1)", padding: "2rem", transition: "border-color 0.25s ease" }}
      className="group hover:border-[rgba(201,169,110,0.4)]"
    >
      <div style={{ marginBottom: "1.1rem" }}><Icon size={20} color={GOLD} /></div>
      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "1.05rem", fontWeight: 500, marginBottom: "0.65rem" }}>
        {title}
      </h3>
      <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.875rem", lineHeight: 1.7 }}>
        {description}
      </p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" style={{ backgroundColor: BG, padding: "7rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div style={{ width: "2px", height: "2.5rem", backgroundColor: GOLD }} />
          <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Legal &amp; Investigative
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mb-10 items-end">
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 500, lineHeight: 1.2 }}>
            Forensic Authorship Services for{" "}
            <em style={{ color: GOLD, fontStyle: "italic" }}>Police &amp; Legal Teams</em>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.95rem", lineHeight: 1.8 }}>
            Analysis conducted to the standard required for investigative intelligence and
            court-admissible expert evidence. Reports comply with CPR Part 35 and equivalent
            jurisdiction standards.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {legalServices.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>

        {/* Typical instruction contexts */}
        <div style={{ backgroundColor: "#1c1c1c", border: "1px solid rgba(201,169,110,0.1)", padding: "2rem 2.5rem" }}>
          <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            Typical Instruction Contexts
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { heading: "Threat Communications", body: "Anonymous letters, online messages, ransom notes — linguistic comparison to suspect writing samples." },
              { heading: "Disputed Statements", body: "Police interviews, witness statements, and confessions queried as to whether the words are the signatory's own." },
              { heading: "Document Fraud", body: "Wills, contracts, and identity documents where authorship or editorial interference is in question." },
            ].map(({ heading, body }) => (
              <div key={heading}>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "0.95rem", fontWeight: 500, marginBottom: "0.4rem" }}>{heading}</p>
                <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.83rem", lineHeight: 1.65 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
