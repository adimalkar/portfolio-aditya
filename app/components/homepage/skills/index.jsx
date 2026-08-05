// @flow strict
import { skillGroups } from "@/utils/data/skills";

function Skills() {
  return (
    <section id="skills">
      <span className="waypoint" data-side="0.68" data-name="SKILLS" />
      <div className="wrap">
        <div className="eyebrow rv" style={{ justifyContent: "center" }}>
          WAYPOINT 04 <span className="coords" data-coords />
        </div>
        <h2 className="island-name rv" style={{ textAlign: "center" }}>Cargo <em>Manifest</em></h2>
        <p className="section-sub rv" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          Everything in the hold has been used on a real crossing — no decorative cargo.
        </p>

        <div className="manifest rv">
          <div className="m-head">
            <h3>Bill of Lading</h3>
            <span className="m-id">VESSEL AM-2026 · INSPECTED &amp; SEALED</span>
          </div>
          {skillGroups.map((group) => (
            <div className="m-group" key={group.name}>
              <div className="g-name">{group.name}</div>
              <div className="crates">
                {group.crates.map((crate, i) => (
                  <span className={`crate${crate.heavy ? " heavy" : ""}`} key={i}>
                    {crate.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="stamp">INSPECTED · NO FLUFF</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
