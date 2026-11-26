import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";
import Education from "../education";
import Skills from "../skills";

export default function AboutSection() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="wrap">
        <div className="split">
          <div className="section-intro"><h2 id="about-heading">About <em>me.</em></h2></div>
          <div className="bio">
            <Image src={personalData.profile} alt="Aditya Malkar" width={128} height={136} sizes="96px" />
            <div><p>I studied computer engineering in Mumbai and came to New Jersey for a master’s in data science at Stevens. I’m especially interested in what happens after a model gives an answer. Can someone check its source? Can we measure when it gets something wrong?</p>
              <p>Those questions shape my work on retrieval, evaluation, and the tools engineers use to run ML systems.</p></div>
          </div>
        </div>
        <div className="background-grid"><Education /><Skills /></div>
      </div>
    </section>
  );
}
