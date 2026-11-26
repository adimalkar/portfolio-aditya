import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Contributions from "./components/homepage/projects/contributions";
import Experience from "./components/homepage/experience";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";

export default function Home() {
  return <><HeroSection /><Projects /><Contributions /><Experience /><AboutSection /><ContactSection /></>;
}
