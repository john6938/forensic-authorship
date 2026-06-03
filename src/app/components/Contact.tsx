import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const BG = "#111111";
const GOLD = "#c9a96e";
const MUTED = "#8a8a8a";
const FG = "#f0ede8";
const CARD = "#1c1c1c";
const INPUT_BG = "#242424";

export function Contact() {
  const [form, setForm] = useState({ name: "", organisation: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", backgroundColor: INPUT_BG, border: "1px solid rgba(201,169,110,0.2)",
    color: FG, padding: "0.85rem 1rem", fontFamily: "Inter, sans-serif",
    fontSize: "0.9rem", outline: "none", transition: "border-color 0.2s ease",
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.72rem",
    letterSpacing: "0.14em", textTransform: "uppercase" as const, display: "block", marginBottom: "0.45rem",
  };
  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => e.currentTarget.style.borderColor = GOLD;
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)";

  return (
    <section id="contact" style={{ backgroundColor: "#181818", padding: "7rem 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div style={{ width: "2px", height: "2.5rem", backgroundColor: GOLD }} />
              <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Get in Touch
              </p>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 500, lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Discuss Your Matter{" "}
              <em style={{ color: GOLD, fontStyle: "italic" }}>in Confidence.</em>
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              Initial enquiries are welcomed from solicitors, barristers, police forces,
              university integrity teams, and other institutional clients. All communications
              are treated as strictly confidential.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {[
                { icon: Mail, label: "Email", value: "Available on request" },
                { icon: Phone, label: "Telephone", value: "Available on request" },
                { icon: MapPin, label: "Location", value: "Birmingham; nationwide instructions accepted" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "2.5rem", height: "2.5rem", border: "1px solid rgba(201,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={16} color={GOLD} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{label}</p>
                    <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.88rem", lineHeight: 1.5 }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: CARD, border: "1px solid rgba(201,169,110,0.12)", padding: "1.5rem" }}>
              <p style={{ fontFamily: "Inter, sans-serif", color: GOLD, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Response Time</p>
              <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.875rem", lineHeight: 1.65 }}>
                All enquiries receive a response within one working day. For urgent matters, particularly where court deadlines apply, please note this in your message.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div style={{ backgroundColor: CARD, border: "1px solid rgba(201,169,110,0.3)", padding: "3rem 2rem", textAlign: "center" }}>
                <div style={{ width: "3rem", height: "3rem", border: `1px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <Send size={18} color={GOLD} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: FG, fontSize: "1.4rem", fontWeight: 500, marginBottom: "0.75rem" }}>
                  Enquiry Received
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.9rem", lineHeight: 1.7 }}>
                  Thank you for reaching out. I will be in contact within one working day to
                  discuss your matter in confidence.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange} placeholder="Dr. Jane Smith" style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={labelStyle}>Organisation</label>
                    <input name="organisation" value={form.organisation} onChange={handleChange} placeholder="Chambers / Force / University" style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="j.smith@chambers.co.uk" style={inputStyle} onFocus={focus} onBlur={blur} />
                </div>
                <div>
                  <label style={labelStyle}>Nature of Enquiry *</label>
                  <select required name="type" value={form.type} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer", appearance: "none" as React.CSSProperties["appearance"] }} onFocus={focus} onBlur={blur}>
                    <option value="" disabled style={{ backgroundColor: INPUT_BG }}>Select category</option>
                    <optgroup label="AI Detection" style={{ backgroundColor: INPUT_BG }}>
                      <option value="ai-assessment" style={{ backgroundColor: INPUT_BG }}>Single-Document AI Assessment</option>
                      <option value="ai-retainer" style={{ backgroundColor: INPUT_BG }}>Institutional Advisory Retainer</option>
                      <option value="ai-appeal" style={{ backgroundColor: INPUT_BG }}>Contested Finding / Student Appeal</option>
                      <option value="ai-policy" style={{ backgroundColor: INPUT_BG }}>Policy & Process Review</option>
                    </optgroup>
                    <optgroup label="Legal & Investigative" style={{ backgroundColor: INPUT_BG }}>
                      <option value="legal-attribution" style={{ backgroundColor: INPUT_BG }}>Authorship Attribution</option>
                      <option value="legal-profiling" style={{ backgroundColor: INPUT_BG }}>Authorship Profiling</option>
                      <option value="legal-verification" style={{ backgroundColor: INPUT_BG }}>Authorship Verification</option>
                    </optgroup>
                    <option value="other" style={{ backgroundColor: INPUT_BG }}>Other / General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Brief Description *</label>
                  <textarea required name="message" value={form.message} onChange={handleChange} rows={5}
                    placeholder="Please provide a brief overview. You do not need to share confidential details at this stage."
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }} onFocus={focus} onBlur={blur} />
                </div>
                <button type="submit" style={{
                  backgroundColor: GOLD, color: BG, padding: "1rem 2rem",
                  fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 500,
                  letterSpacing: "0.12em", textTransform: "uppercase", border: "none",
                  cursor: "pointer", transition: "opacity 0.2s ease", width: "100%",
                }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  Submit Enquiry
                </button>
                <p style={{ fontFamily: "Inter, sans-serif", color: MUTED, fontSize: "0.78rem", lineHeight: 1.6, textAlign: "center" }}>
                  All enquiries are treated as strictly confidential. Providing your details
                  does not create an expert witness relationship.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
