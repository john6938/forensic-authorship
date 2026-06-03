import { ImageWithFallback } from "./figma/ImageWithFallback";

const BG = "#111111";
const GOLD = "#c9a96e";
const MUTED = "#8a8a8a";
const FG = "#f0ede8";

const PHOTO_URL = "https://images.unsplash.com/photo-1543769657-fcf1236421bc?w=600&h=750&fit=crop&auto=format";

export function About() {
  return (
    <section id="about" style={{ backgroundColor: BG, padding: "7rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: "-1.5rem", left: "-1.5rem", right: "1.5rem", bottom: "1.5rem", border: "1px solid rgba(201,169,110,0.2)", pointerEvents: "none" }} />
            <ImageWithFallback
              src={PHOTO_URL}
              alt="Close-up of handwritten journal text"
              style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", display: "block", filter: "grayscale(30%) contrast(1.05)", position: "relative", zIndex: 1 }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,17,17,0.5) 0%, transparent 50%)", zIndex: 2, pointerEvents: "none" }} />
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div style={{ width: "2px", height: "2.5rem", backgroundColor: GOLD }} />
              <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                About the Consultant
              </p>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 500, lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Specialist Expertise,{" "}
              <em style={{ color: GOLD, fontStyle: "italic" }}>Independently Applied.</em>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { text: "I am an independent forensic linguist with over fifteen years of specialist practice, spanning criminal law, civil litigation, and academic integrity.", bright: true },
                { text: "In legal contexts, I have provided authorship evidence in Crown Court trials, High Court civil proceedings, and inquests. I am accustomed to the demands of cross-examination and the standards required of expert witnesses." },
                { text: "A significant and growing part of my practice now concerns AI-generated text. Since 2022 I have advised universities, regulatory bodies, and legal teams on the linguistic features that distinguish human from machine authorship, as well as the serious evidentiary limitations of automated detection tools." },
                { text: "I operate exclusively as an independent consultant, accepting instructions from institutions and individuals alike. My duty is to the evidence, not to the outcome my instructing party might prefer." },
              ].map(({ text, bright }, i) => (
                <p key={i} style={{ fontFamily: "Inter, sans-serif", color: bright ? "#c4bfb8" : MUTED, fontSize: "0.92rem", lineHeight: 1.8 }}>
                  {text}
                </p>
              ))}
            </div>

            <div style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: "1.5rem" }}>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                "My obligation is to provide honest, accurate, and complete evidence; not to advocate for the party instructing me."
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Expert Witness Declaration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
