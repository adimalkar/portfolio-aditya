import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";
import { educations } from "@/utils/data/educations";

export default function Education() {
  return (
    <div id="education" className="education">
      <h3>Education & credentials</h3>
      {educations.map(e => <div className="degree-row" key={e.title}><strong>{e.title}</strong><p>{e.institution} · {e.year}</p></div>)}
      <div className="certs">{personalData.certifications.map(c =>
        <a key={c.name} href={c.url} aria-label={"Verify AWS Certified " + c.name + ", " + c.level}>
          <Image src={c.image} width={50} height={50} alt="" />
          <div><strong>{c.name}</strong><span>AWS · {c.level}</span></div>
        </a>)}</div>
    </div>
  );
}
