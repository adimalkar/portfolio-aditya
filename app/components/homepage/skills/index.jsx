import { skillGroups } from "@/utils/data/skills";

export default function Skills() {
  return (
    <div id="skills" className="toolkit">
      <h3>Technical toolkit</h3>
      <dl>{skillGroups.map(group => <div key={group.name}><dt>{group.name}</dt><dd>{group.tools.join(" · ")}</dd></div>)}</dl>
    </div>
  );
}
