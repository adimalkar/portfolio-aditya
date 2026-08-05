// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <section id="about">
      <span className="waypoint" data-side="0.26" data-name="ABOUT" />
      <div className="wrap">
        <div className="portrait-frame rv">
          <div className="ring" />
          <Image
            src={personalData.profile}
            width={300}
            height={300}
            alt="Aditya Malkar"
            priority
          />
          <div className="badge">Captain · est. 2001</div>
        </div>
        <div>
          <div className="eyebrow rv">WAYPOINT 01 <span className="coords" data-coords /></div>
          <h2 className="island-name rv">Home <em>Port</em></h2>
          <div className="about-copy rv">
            {personalData.aboutParagraphs.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
          <div className="fact-row rv">
            {personalData.facts.map((fact, i) => (
              <span className="fact" key={i}><i>{fact.icon}</i> {fact.label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
