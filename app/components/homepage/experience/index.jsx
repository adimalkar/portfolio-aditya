import { experiences } from "@/utils/data/experience";

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="wrap split">
        <div className="section-intro"><h2 id="experience-heading">Experience<span>.</span></h2></div>
        <div className="experience-list">{experiences.map(job =>
          <article key={job.company}>
            <p className="kicker">{job.duration}</p>
            <h3>{job.company}</h3>
            <p className="job-title">{job.title}</p>
            <p>{job.description}</p>
          </article>
        )}</div>
      </div>
    </section>
  );
}
