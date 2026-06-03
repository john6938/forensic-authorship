import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { AIDetection } from "./components/AIDetection";
import { Services } from "./components/Services";
import { Expertise } from "./components/Expertise";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div style={{ backgroundColor: "#111111", overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <AIDetection />
      <Services />
      <Expertise />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
