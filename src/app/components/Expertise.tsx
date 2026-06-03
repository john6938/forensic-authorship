const BG2 = "#181818";
const GOLD = "#c9a96e";
const MUTED = "#8a8a8a";
const FG = "#f0ede8";
const CARD = "#1c1c1c";

const methodologies = [
  {
    label: "Idiolect Analysis",
    description: "Systematic identification of individual-level linguistic habits: lexical choices, syntactic preferences, punctuation patterns, and spelling idiosyncrasies that persist across a writer's output.",
  },
  {
    label: "Corpus-Based Comparison",
    description: "Quantitative comparison of linguistic features against large reference corpora to establish statistical rarity and author-specificity of the features under examination.",
  },
  {
    label: "Stylometric Profiling",
    description: "Computational stylometry using validated feature sets to produce measurable, reproducible similarity scores between questioned and known texts.",
  },
  {
    label: "AI vs. Human Discourse Analysis",
    description: "Examination of pragmatic coherence, register consistency, and developmental writing markers to distinguish genuine student writing from large language model output.",
  },
];

const credentials = [
  { cat: "Academic", items: ["PhD in Applied Linguistics, Aston Institute for Forensic Linguistics, Aston University", "Multiple Master's degrees"] },
  { cat: "Professional", items: ["Member of the British Computer Society", "Expert Witness Certificate for Criminal Law"] },
  { cat: "Research", items: ["Peer-reviewed publications in forensic linguistics", "Conference presentations (UK & international)", "Applied NLP and authorship analysis research"] },
  { cat: "Client Sectors", items: ["UK Police forces & regional crime units", "Russell Group & post-92 universities", "Commercial & criminal defence solicitors"] },
];

export function Expertise() {
  return (
    <section id="methodology" style={{ backgroundColor: BG2, padding: "7rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left: credentials */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div style={{ width: "2px", height: "2.5rem", backgroundColor: GOLD }} />
              <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Credentials
              </p>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "clamp(1.75rem, 3vw, 2.4rem)", fontWeight: 500, lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Academic Rigour.{" "}
              <em style={{ color: GOLD, fontStyle: "italic" }}>Practical Authority.</em>
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2.25rem" }}>
              Every report is grounded in peer-reviewed methodology and written to withstand
              cross-examination. Where evidence is uncertain, I say so; expert reliability depends on intellectual honesty.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {credentials.map(c => (
                <div key={c.cat}>
                  <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.65rem" }}>
                    {c.cat}
                  </p>
                  <ul>
                    {c.items.map(item => (
                      <li key={item} style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.8rem", lineHeight: 1.65, paddingLeft: "1rem", position: "relative", marginBottom: "0.3rem" }}>
                        <span style={{ position: "absolute", left: 0, color: GOLD }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: methodology */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div style={{ width: "2px", height: "2.5rem", backgroundColor: GOLD }} />
              <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Analytical Methods
              </p>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "clamp(1.75rem, 3vw, 2.4rem)", fontWeight: 500, lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Methodology That{" "}
              <em style={{ color: GOLD, fontStyle: "italic" }}>Withstands Scrutiny.</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(201,169,110,0.1)", marginTop: "2.25rem" }}>
              {methodologies.map(m => (
                <div key={m.label} style={{ backgroundColor: CARD, padding: "1.5rem", transition: "background-color 0.2s ease" }}
                  className="hover:bg-[#222222]"
                >
                  <p style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "1rem", fontWeight: 500, marginBottom: "0.45rem" }}>
                    {m.label}
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.855rem", lineHeight: 1.65 }}>
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
