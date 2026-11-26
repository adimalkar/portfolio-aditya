import { contributions } from "@/utils/data/projects-data";

export default function Contributions() {
  return (
    <section className="section contributions" id="open-source" aria-labelledby="oss-heading">
      <div className="wrap split">
        <div className="section-intro">
          <h2 id="oss-heading">Open <em>source.</em></h2>
          <p>A few fixes that made it upstream, with the code review and regression tests behind each change.</p>
          <a className="text-link" href="https://github.com/search?q=author%3Aadimalkar+is%3Amerged+-user%3Aadimalkar&type=pullrequests">More merged pull requests</a>
        </div>
        <div className="contribution-list">
          {contributions.map(pr => <article key={pr.url}>
            <div><h3><a href={pr.url}>{pr.project}</a></h3><a className="pr-number" href={pr.url} aria-label={pr.project + " pull request " + pr.id}>#{pr.id}</a></div>
            <p>{pr.text}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}
