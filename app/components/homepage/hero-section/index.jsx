// @flow strict
import { personalData } from "@/utils/data/personal-data";

function HeroSection() {
  return (
    <section id="hero">
      <span className="waypoint" data-side="0.5" data-name="DEPART" />
      <div className="wrap">
        <div>
          <div className="log-stamp">
            <span className="blink" /> SHIP&apos;S LOG — ENTRY 001 · COURSE SET
          </div>
          <h1 className="hero-title">
            <span className="name">Aditya Malkar</span>
            <span className="role">{personalData.designation}</span>
          </h1>
          <p className="hero-line">
            Charting a course from <b>raw data to working systems</b> — deep learning models,
            AI agents, and pipelines that hold up in open water. M.S. Data Science,
            Stevens Institute of Technology. AWS certified, twice over.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">EXPLORE THE ARCHIPELAGO ↓</a>
            <a className="btn btn-ghost" href={personalData.resume} target="_blank" rel="noopener noreferrer">GET RESUME</a>
            <div className="hero-socials">
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>
              </a>
              <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 16 16"><path d="M0 1.15C0 .52.53 0 1.18 0h13.64C15.47 0 16 .52 16 1.15v13.7c0 .63-.53 1.15-1.18 1.15H1.18A1.17 1.17 0 0 1 0 14.85V1.15zm4.94 12.25V6.17H2.54v7.23h2.4zM3.74 5.18c.84 0 1.36-.55 1.36-1.24-.02-.71-.52-1.25-1.34-1.25-.82 0-1.36.54-1.36 1.25 0 .69.52 1.24 1.33 1.24h.01zm4.91 8.22V9.36c0-.22.02-.43.08-.59.17-.43.57-.88 1.23-.88.87 0 1.22.66 1.22 1.63v3.88h2.4V9.25c0-2.22-1.18-3.25-2.76-3.25-1.27 0-1.84.7-2.16 1.19v.02h-.02l.02-.02V6.17h-2.4c.03.68 0 7.23 0 7.23h2.4z" /></svg>
              </a>
              <a href={personalData.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                <svg viewBox="0 0 16 16"><path d="M12.6.75h2.45L9.7 6.88 16 15.25h-4.93L7.2 10.2l-4.42 5.05H.32l5.73-6.56L0 .75h5.06l3.5 4.62L12.6.75zm-.86 13.03h1.36L4.32 2.15H2.86l8.88 11.63z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <aside className="chart-card" aria-label="Voyage manifest summary">
          <div className="cc-title">VOYAGE MANIFEST · NO. AM-2026</div>
          <div className="row"><span className="k">vessel</span><span className="v">&quot;Aditya Malkar&quot;</span></div>
          <div className="row"><span className="k">class</span><span className="v">DataScientist</span></div>
          <div className="row"><span className="k">home_port</span><span className="v">Jersey City, NJ</span></div>
          <div className="row"><span className="k">rigging</span><span className="v">Python · PyTorch · Spark</span></div>
          <div className="row"><span className="k">instruments</span><span className="v">AWS · LangChain · Docker</span></div>
          <div className="row"><span className="k">mission</span><span className="v">Building AI systems</span></div>
          <div className="row"><span className="k">is_hireable()</span><span className="v"><span className="ok">True</span> <span style={{ color: 'var(--ink-soft)' }}># always</span></span></div>
        </aside>
      </div>
      <div className="scroll-cue">SCROLL TO SAIL</div>
    </section>
  );
}

export default HeroSection;
