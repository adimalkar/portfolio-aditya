import Link from "next/link";

export const metadata = {
  title: "Off the Charts | Aditya Malkar",
  description: "This waypoint isn't on any chart.",
};

function NotFound() {
  return (
    <section id="not-found">
      <div className="nf-wrap">
        <div className="nf-stamp">
          <span className="blink" /> SHIP&apos;S LOG — POSITION UNKNOWN
        </div>

        <svg className="nf-compass" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#d9a441" strokeWidth="1.5" opacity=".5" />
          <circle cx="60" cy="60" r="42" fill="none" stroke="#d9a441" strokeWidth="1" opacity=".3" />
          {["N", "E", "S", "W"].map((d, i) => (
            <text
              key={d}
              x="60"
              y="17"
              textAnchor="middle"
              fill="#8aa3a3"
              fontSize="11"
              fontFamily="monospace"
              transform={`rotate(${i * 90} 60 60)`}
            >
              {d}
            </text>
          ))}
          <g className="nf-needle">
            <path d="M60 26 L67 60 L60 55 L53 60 Z" fill="#ff6f59" />
            <path d="M60 94 L53 60 L60 65 L67 60 Z" fill="#dfe9e4" opacity=".75" />
          </g>
          <circle cx="60" cy="60" r="4" fill="#d9a441" />
        </svg>

        <h1 className="nf-code">404</h1>
        <h2 className="nf-title">
          Off the <em>Charts</em>
        </h2>
        <p className="nf-copy">
          You&apos;ve sailed past the edge of the map. There&apos;s no waypoint here — no island, no
          port, not even a decent sandbar. Let&apos;s get you back to known waters.
        </p>

        <div className="nf-actions">
          <Link className="btn btn-primary" href="/">
            RETURN TO PORT ↑
          </Link>
          <Link className="btn btn-ghost" href="/#projects">
            EXPLORE THE ARCHIPELAGO ↓
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
