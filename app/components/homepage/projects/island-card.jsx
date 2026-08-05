'use client';

import { useEffect, useRef, useState } from "react";

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
  // The global scroll-reveal observer adds `.in` imperatively; React must own it
  // here too, or re-rendering on toggle strips it and the card fades to opacity 0.
  const [revealed, setRevealed] = useState(false);
  const ref = useRef(null);
  const no = `ISLE ${String(index + 1).padStart(2, "0")}`;
  const toggle = () => setOpen((v) => !v);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.classList.contains("in")) {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`island rv${revealed ? " in" : ""}${open ? " open" : ""}`}
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
        {project.award && <div className="ic-award">🏆 {project.award}</div>}
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
        <div className="ic-foot">
          <span className="ic-hint">
            <span className="open-label">WEIGH ANCHOR — COLLAPSE</span>
            <span className="close-label">DROP ANCHOR — FULL CHART</span>
          </span>
          {project.code ? (
            <a
              className="ic-repo"
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${project.name} source on GitHub`}
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GITHUB
            </a>
          ) : (
            <span className="ic-repo private">PRIVATE REPO</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default IslandCard;
