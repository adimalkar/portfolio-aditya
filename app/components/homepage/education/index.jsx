// @flow strict
import { educations } from "@/utils/data/educations";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function Education() {
  return (
    <section id="education">
      <span className="waypoint" data-side="0.34" data-name="EDUCATION" />
      <div className="wrap">
        <div className="lighthouse-art rv" aria-hidden="true">
          <svg width="180" height="290" viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg">
            <path className="lh-beam" d="M60 34 L190 6 L190 60 Z" fill="#d9a441" opacity=".5" />
            <ellipse cx="60" cy="190" rx="46" ry="10" fill="#16404c" />
            <path d="M46 70 L74 70 L82 185 L38 185 Z" fill="#ecdfc3" />
            <path d="M46 86 L76 86 L77 102 L45 102 Z" fill="#9c2f1e" />
            <path d="M44 122 L78 122 L79 138 L43 138 Z" fill="#9c2f1e" />
            <path d="M42 158 L80 158 L81 174 L41 174 Z" fill="#9c2f1e" />
            <rect x="48" y="40" width="24" height="30" rx="3" fill="#2a2118" />
            <rect x="52" y="44" width="16" height="16" rx="2" fill="#ffd98a" />
            <path d="M44 40 L76 40 L60 22 Z" fill="#9c2f1e" />
            <circle cx="60" cy="34" r="3" fill="#ffd98a" />
          </svg>
        </div>
        <div>
          <div className="eyebrow rv">WAYPOINT 05 <span className="coords" data-coords /></div>
          <h2 className="island-name rv">The <em>Lighthouse</em></h2>
          <div className="edu-list">
            {educations.map((edu) => (
              <article className="edu rv" key={edu.id}>
                <div className="when">
                  {edu.duration}{edu.location ? ` · ${edu.location.toUpperCase()}` : ""}
                </div>
                <h3>{edu.title}</h3>
                <div className="school">{edu.institution}</div>
                <p dangerouslySetInnerHTML={{ __html: edu.description }} />
              </article>
            ))}
            {personalData.achievements?.length > 0 && (
              <div className="honours rv">
                <div className="h-label">HONOURS</div>
                {personalData.achievements.map((item, i) => (
                  <article className="honour" key={i}>
                    <div className="h-ribbon">🏆 {item.award.toUpperCase()} · {item.year}</div>
                    <h3>
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          {item.title} ↗
                        </a>
                      ) : item.title}
                    </h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            )}
            {personalData.certifications?.length > 0 && (
              <div className="certs rv">
                <div className="h-label">CERTIFICATIONS</div>
                <div className="cert-grid">
                  {personalData.certifications.map((cert, i) => (
                    <a
                      className="cert-badge"
                      key={i}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Verify ${cert.name} on Credly`}
                    >
                      <Image
                        src={cert.image}
                        alt={`${cert.name} — ${cert.level}`}
                        width={110}
                        height={110}
                      />
                      <span className="cb-name">{cert.name}</span>
                      <span className="cb-level">{cert.level} · Verify ↗</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
