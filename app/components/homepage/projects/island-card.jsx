'use client';

import { useState } from "react";

// Small generative island: sand mass, shallows, palms, expedition flag.
function IslandArt({ palms = 1, seed = 0 }) {
  return (
    <svg className="land" viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="180" cy="112" rx="168" ry="16" fill="#16404c" opacity=".8" />
      <ellipse cx="180" cy="110" rx="146" ry="12" fill="#1d5566" opacity=".7" />
      <g className="mass">
        <path
          d={`M52 108 Q80 ${82 + seed * 4} 132 88 Q180 ${72 + seed * 6} 236 86 Q292 80 308 108 Q260 118 180 118 Q104 118 52 108 Z`}
          fill="#e2d2ae"
        />
        <path
          d="M70 106 Q120 96 180 100 Q244 96 294 106 Q240 113 180 113 Q116 113 70 106 Z"
          fill="#caa05a"
          opacity=".5"
        />
        {Array.from({ length: palms }).map((_, i) => (
          <g className="palm" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
            <path
              d={`M${150 + i * 26} 96 q${4 - i * 2} -22 ${2 - i} -34`}
              stroke="#5b4427"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <g fill="#2f7d5c">
              <path d={`M${152 + i * 25} 60 q-16 -8 -26 2 q14 8 26 -2z`} />
              <path d={`M${152 + i * 25} 60 q16 -10 28 0 q-14 10 -28 0z`} />
              <path d={`M${152 + i * 25} 60 q-4 -16 8 -22 q4 14 -8 22z`} />
            </g>
          </g>
        ))}
        <g className="iflag">
          <rect x="84" y="58" width="2.5" height="42" fill="#5b4427" />
          <path d="M86 58 l22 5 l-22 5z" fill="#ff6f59" />
        </g>
      </g>
    </svg>
  );
}

function IslandCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const no = `ISLE ${String(index + 1).padStart(2, "0")}`;
  const toggle = () => setOpen((v) => !v);

  return (
    <article
      className={`island rv${open ? " open" : ""}`}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <IslandArt palms={project.palm} seed={index} />
      <div className="island-card">
        <div className="ic-no"><span>{no}</span><span>{project.chartedYear}</span></div>
        <h3>{project.name}</h3>
        <p className="ic-desc">{project.summary}</p>
        <div className="ic-stats">
          {project.stats?.map(([k, v], i) => (
            <span className="stat" key={i}>{k} <b>{v}</b></span>
          ))}
        </div>
        <div className="ic-more">
          <p className="ic-desc">{project.description}</p>
          <div className="tools">
            {project.tools?.map((tool, i) => (
              <span className="tool" key={i}>{tool}</span>
            ))}
          </div>
          <div className="ic-links" onClick={(e) => e.stopPropagation()}>
            {project.code && (
              <a href={project.code} target="_blank" rel="noopener noreferrer">View Code ↗</a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
            )}
            {!project.code && !project.demo && (
              <span className="private">Private repository</span>
            )}
          </div>
        </div>
        <div className="ic-hint">
          <span className="open-label">WEIGH ANCHOR — COLLAPSE</span>
          <span className="close-label">DROP ANCHOR — FULL CHART</span>
        </div>
      </div>
    </article>
  );
}

export default IslandCard;
