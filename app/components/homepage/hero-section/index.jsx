import { personalData } from "@/utils/data/personal-data";
import DensityPlot from "./density-plot";

export default function HeroSection() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="intro">
          <p className="role"><span aria-hidden="true" />{personalData.designation}</p>
          <h1 id="hero-title">Aditya <em>Malkar<span>.</span></em></h1>
          <p className="lede">I build retrieval systems that cite their sources, vision models that inspect insurance claims, and developer tools that explain slow builds.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore projects</a>
            <a className="button secondary" href={personalData.resume} download="Aditya_Malkar_Resume.pdf">Download résumé</a>
          </div>
        </div>
        <DensityPlot />
      </div>
      <div className="hero-foot">
        <div className="wrap facts">
          <span><i aria-hidden="true" className="fact-mark pin" />{personalData.address}</span>
          <span><i aria-hidden="true" className="fact-mark degree" />M.S. Data Science, Stevens</span>
          <a href="#education"><i aria-hidden="true" className="fact-mark cert" />2 AWS certifications</a>
        </div>
      </div>
    </section>
  );
}
