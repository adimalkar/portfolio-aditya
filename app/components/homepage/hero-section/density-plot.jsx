"use client";

import { useState } from "react";
import Image from "next/image";

const views = {
  Surface: { image: "/work/gaussian-surface.webp", alt: "Three Gaussian components combine into a wireframe density surface with neighboring peaks." },
  Contours: { image: "/work/gaussian-contours.webp", alt: "Top-down contours of the same Gaussian mixture. Each curve connects points of equal probability density." },
};

export default function DensityPlot() {
  const [view, setView] = useState("Surface");
  return (
    <figure className="plot">
      <div className="plot-frame">
        <span className="corner tl" /><span className="corner tr" /><span className="corner bl" /><span className="corner br" />
        <span className="plot-type">Bivariate density</span>
        <Image src={views[view].image} width={1260} height={806} sizes="(max-width: 720px) 95vw, 50vw" alt={views[view].alt} priority />
      </div>
      <figcaption>
        <span>Gaussian mixture</span>
        <div className="switch" role="group" aria-label="Density plot view">
          {Object.keys(views).map(name => <button key={name} type="button" aria-pressed={view === name} onClick={() => setView(name)}>{name}</button>)}
        </div>
      </figcaption>
    </figure>
  );
}
