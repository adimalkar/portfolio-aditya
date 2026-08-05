// @flow strict
import { projectsData } from "@/utils/data/projects-data";
import IslandCard from "./island-card";

function Projects() {
  return (
    <section id="projects">
      <span className="waypoint" data-side="0.3" data-name="PROJECTS" />
      <div className="wrap">
        <div className="eyebrow rv">WAYPOINT 03 <span className="coords" data-coords /></div>
        <h2 className="island-name rv">The <em>Archipelago</em></h2>
        <p className="section-sub rv">
          Each island is a shipped project. Drop anchor on any of them for the full chart.
        </p>

        <div className="grid">
          {projectsData.map((project, index) => (
            <IslandCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
