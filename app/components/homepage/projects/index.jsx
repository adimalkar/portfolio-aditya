import Image from "next/image";
import { featuredProjects, selectedProjects, archiveProjects } from "@/utils/data/projects-data";
import { personalData } from "@/utils/data/personal-data";

export default function Projects() {
  return (
    <section className="work section" id="projects" aria-labelledby="projects-heading">
      <div className="wrap">
        <div className="section-heading">
          <h2 id="projects-heading">Selected <em>work.</em></h2>
          <a className="text-link" href={personalData.github + "?tab=repositories"}>All repositories</a>
        </div>
        <div className="featured-grid">
          {featuredProjects.map(p => (
            <article key={p.name} className="project-card">
              <a className={"project-image " + p.theme} href={p.code} aria-label={p.name + " repository"}>
                <Image src={p.image} alt={p.alt} width={p.width} height={p.height} sizes="(max-width: 720px) 92vw, 520px" />
              </a>
              <div className="project-copy">
                <p className="kicker">{p.category}</p>
                <h3><a href={p.code}>{p.name}</a></h3>
                <p>{p.description}</p>
                <ul className="tags" aria-label="Technologies">{p.tools.map(t => <li key={t}>{t}</li>)}</ul>
                <div className="project-links"><a className="text-link" href={p.code} aria-label={"View " + p.name + " source"}>View source</a>
                  {p.demo && <a className="text-link" href={p.demo}>Live demo</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="project-rows">
          {selectedProjects.map(p => (
            <article className="project-row" key={p.name}>
              <div><p className="kicker">{p.category}</p><h3>{p.code ? <a href={p.code}>{p.name}</a> : p.name}</h3></div>
              <p>{p.description}</p>
              {p.code ? (
                <a className="text-link" href={p.code} aria-label={"View " + p.name + " source"}>View source</a>
              ) : (
                <a className="text-link" href={personalData.resume} aria-label={"Read about " + p.name + " in my résumé"}>Résumé (PDF)</a>
              )}
            </article>
          ))}
        </div>
        <details className="archive"><summary>Earlier projects</summary>
          <ul>{archiveProjects.map(p => <li key={p.name}><strong>{p.code ? <a href={p.code}>{p.name}</a> : p.name}</strong><span>{p.description}</span></li>)}</ul>
        </details>
      </div>
    </section>
  );
}
