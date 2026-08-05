// @flow strict
import { experiences } from "@/utils/data/experience";

function Experience() {
  return (
    <section id="experience">
      <span className="waypoint" data-side="0.72" data-name="EXPERIENCE" />
      <div className="wrap">
        <div className="eyebrow rv">WAYPOINT 02 <span className="coords" data-coords /></div>
        <h2 className="island-name rv">Ports of <em>Call</em></h2>
        <p className="section-sub rv">
          Every port taught the crew something different — tuning, pipelines, and how to keep
          models honest in production waters.
        </p>

        <div className="ports">
          {experiences.map((exp) => (
            <article className="port rv" key={exp.id}>
              <div className="when">
                {exp.duration}
                {exp.place && <span className="place">{exp.place}</span>}
              </div>
              <div>
                <h3>{exp.title}</h3>
                <div className="org">{exp.company}</div>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
