import { Brain, ShieldCheck, FileSearch, AlertCircle, ChevronRight } from "lucide-react";

const BG = "#111111";
const GOLD = "#c9a96e";
const MUTED = "#8a8a8a";
const FG = "#f0ede8";
const CARD = "#1c1c1c";
const CARD2 = "#222222";

const offerings = [
  {
    icon: FileSearch,
    title: "Single-Document Assessment",
    description:
      "Detailed linguistic examination of a specific submission to determine whether it exhibits features characteristic of large language model generation — with documented rationale for your decision.",
  },
  {
    icon: Brain,
    title: "Institutional Advisory Service",
    description:
      "Ongoing retainer for universities and colleges: expert review of flagged submissions, guidance to integrity panels, and defensible second opinions ahead of disciplinary proceedings.",
  },
  {
    icon: ShieldCheck,
    title: "Policy & Process Review",
    description:
      "Independent audit of your existing AI detection process. I identify gaps, challenge over-reliance on automated tools, and help you build legally robust procedures.",
  },
  {
    icon: AlertCircle,
    title: "Contested Cases & Appeals",
    description:
      "Expert analysis for students appealing AI-misconduct findings, or for institutions defending disputed decisions. Evidence-based, not outcome-driven.",
  },
];

const whyItems = [
  {
    heading: "No tool is reliable on its own.",
    body: "Turnitin AI, GPTZero, Copyleaks, and similar products produce both false positives and false negatives at documented rates. A positive result from automated software is not evidence of misconduct — it is a reason to investigate further.",
  },
  {
    heading: "Linguistic analysis provides what software cannot.",
    body: "Human expert analysis considers register consistency, idiolect, developmental writing patterns, argument structure, and pragmatic coherence — features that distinguish genuine student work from AI output with far greater nuance than any classifier.",
  },
  {
    heading: "Your decisions must be defensible.",
    body: "Academic misconduct findings have serious consequences for students. Decisions based solely on algorithmic probability scores risk legal challenge, reputational harm, and — most importantly — wrongly penalising honest students.",
  },
  {
    heading: "I work for the evidence, not the outcome.",
    body: "My analysis is conducted independently. I accept instructions from institutions and students alike. Where the evidence is ambiguous, I say so — and ambiguity should favour the student.",
  },
];

export function AIDetection() {
  return (
    <section id="ai-detection" style={{ backgroundColor: CARD2, padding: "7rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div style={{ width: "2px", height: "2.5rem", backgroundColor: GOLD }} />
          <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Specialist Focus
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-14 items-end">
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: FG,
              fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
              fontWeight: 500,
              lineHeight: 1.15,
            }}>
              Evidence-Based AI Detection{" "}
              <em style={{ color: GOLD, fontStyle: "italic" }}>for Organisations</em>
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.95rem", lineHeight: 1.8 }}>
              The rapid adoption of generative AI has created a genuine evidentiary crisis in
              higher education. Automated detection tools are neither accurate enough nor
              legally robust enough to serve as the sole basis for misconduct decisions. I
              provide the expert human analysis that bridges this gap.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {offerings.map(({ icon: Icon, title, description }) => (
            <div key={title}
              style={{ backgroundColor: CARD, border: "1px solid rgba(201,169,110,0.1)", padding: "2rem", transition: "border-color 0.25s ease" }}
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
          ))}
        </div>

        {/* Why linguistic analysis */}
        <div style={{ backgroundColor: BG, border: "1px solid rgba(201,169,110,0.12)", padding: "3rem" }}>
          <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            The Case for Expert Analysis
          </p>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 500, lineHeight: 1.2, marginBottom: "2.5rem" }}>
            Why Automated Detection Is Not Enough
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {whyItems.map(({ heading, body }) => (
              <div key={heading} style={{ display: "flex", gap: "1rem" }}>
                <ChevronRight size={16} color={GOLD} style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                <div>
                  <p style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "1rem", fontWeight: 500, marginBottom: "0.5rem" }}>
                    {heading}
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.875rem", lineHeight: 1.7 }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(201,169,110,0.12)", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.9rem" }}>
              Interested in a standing advisory arrangement for your institution?
            </p>
            <a href="#contact" style={{
              border: `1px solid ${GOLD}`, color: GOLD,
              padding: "0.75rem 1.5rem", fontSize: "0.75rem", letterSpacing: "0.12em",
              textTransform: "uppercase", fontFamily: "Inter, sans-serif",
              display: "inline-block", transition: "all 0.2s ease", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = GOLD; (e.currentTarget as HTMLAnchorElement).style.color = BG; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = GOLD; }}
            >
              Discuss a Retainer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
