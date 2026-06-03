export function Process() {
  const steps = [
    {
      number: "01",
      title: "Initial Enquiry",
      description:
        "Contact me with a brief overview of your matter. I will respond within one working day to confirm whether I can assist, flag any conflicts of interest, and outline the likely scope of work.",
    },
    {
      number: "02",
      title: "Scoping & Instruction",
      description:
        "We agree the specific questions to be addressed, the materials required, timelines, and fee structure. For legal matters, formal instructions are issued to my professional address.",
    },
    {
      number: "03",
      title: "Analysis",
      description:
        "Systematic, documented linguistic analysis of all provided materials. Where appropriate, I use peer-reviewed computational tools alongside traditional close-text methods.",
    },
    {
      number: "04",
      title: "Reporting",
      description:
        "A clear, structured written report setting out my findings, the evidence base, and my conclusions, with appropriate caveats. Legal reports comply with CPR Part 35 and equivalent standards.",
    },
    {
      number: "05",
      title: "Follow-Up Support",
      description:
        "Available to respond to supplemental questions, prepare for cross-examination, provide oral evidence in court or tribunal, or attend conference with counsel.",
    },
  ];

  return (
    <section id="process" style={{ backgroundColor: "#0a0f1e", padding: "7rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div style={{ position: "sticky", top: "8rem" }}>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#c9a96e",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              How It Works
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#f0ede8",
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              A Transparent,
              <br />
              <em style={{ color: "#c9a96e", fontStyle: "italic" }}>Structured Process</em>
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#8a9ab5",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              From initial contact to final report, every engagement is handled with rigour,
              confidentiality, and clear communication. You will always know where the matter
              stands.
            </p>
            <div
              style={{
                backgroundColor: "#111827",
                border: "1px solid rgba(201,169,110,0.15)",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#c9a96e",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                Confidentiality
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#8a9ab5",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                }}
              >
                All materials and communications are treated as strictly confidential. NDAs
                and data-handling agreements are available on request. Data is processed in
                accordance with UK GDPR.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <div
                key={step.number}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  paddingBottom: "2.5rem",
                  position: "relative",
                }}
              >
                {/* Vertical connector */}
                {i < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "1.35rem",
                      top: "2.5rem",
                      bottom: 0,
                      width: "1px",
                      backgroundColor: "rgba(201,169,110,0.2)",
                    }}
                  />
                )}
                <div
                  style={{
                    flexShrink: 0,
                    width: "2.75rem",
                    height: "2.75rem",
                    border: "1px solid rgba(201,169,110,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0a0f1e",
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#c9a96e",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      color: "#f0ede8",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      marginBottom: "0.5rem",
                      paddingTop: "0.5rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#8a9ab5",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
