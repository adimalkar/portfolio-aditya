'use client';

/* ============================================================
   THE VOYAGE — interaction layer (React port)
   1. Living sea (canvas: contour waves + mouse ripples)
   2. The route & the ship (scroll-driven sail along a chart line)
   3. Ship's log (Mumbai -> Hoboken coordinates as you scroll)
   4. Scroll reveals + per-section coordinates
   ============================================================ */

import { useEffect, useRef } from 'react';

const LEGS = [
  'Departing Mumbai…',
  'Crossing the Arabian Sea',
  'Rounding the Cape',
  'Mid-Atlantic — steady as she goes',
  'Approaching the Hudson',
  'Docked at Hoboken — open to opportunities',
];
const START = { lat: 19.0760, lon: 72.8777 };   // Mumbai
const END = { lat: 40.7440, lon: -74.0324 };     // Hoboken

export default function VoyageStage() {
  const canvasRef = useRef(null);
  const routeRef = useRef(null);
  const shipRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const NS = 'http://www.w3.org/2000/svg';
    const listeners = [];
    const on = (target, type, fn, opts) => {
      target.addEventListener(type, fn, opts);
      listeners.push(() => target.removeEventListener(type, fn, opts));
    };
    let rafSea = 0;
    let rafShip = 0;

    /* ---------- 1. THE LIVING SEA ---------- */
    const cv = canvasRef.current;
    const ctx = cv.getContext('2d');
    let W, H, t = 0, ripples = [], lastRipple = 0;
    const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
    size();
    on(window, 'resize', size);

    on(window, 'pointermove', (e) => {
      const now = performance.now();
      if (now - lastRipple > 90) {
        ripples.push({ x: e.clientX, y: e.clientY, r: 4, a: 0.35 });
        if (ripples.length > 26) ripples.shift();
        lastRipple = now;
      }
    });
    on(window, 'pointerdown', (e) => {
      ripples.push({ x: e.clientX, y: e.clientY, r: 6, a: 0.5 });
    });

    const seaFrame = () => {
      t += 0.012;
      const scroll = scrollY * 0.15;
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#0a1d27'); g.addColorStop(0.55, '#0d2530'); g.addColorStop(1, '#07151c');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

      const rows = 9;
      for (let i = 0; i < rows; i++) {
        const baseY = ((i + 0.5) / rows) * H + Math.sin(t * 0.4 + i) * 8 - (scroll % (H / rows));
        ctx.beginPath();
        for (let x = 0; x <= W; x += 14) {
          const y = baseY
            + Math.sin(x * 0.006 + t + i * 1.7) * 9
            + Math.sin(x * 0.0017 - t * 0.6 + i) * 16;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(223,233,228,${0.05 + 0.025 * Math.sin(t + i)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (let i = 0; i < 5; i++) {
        const gx = (Math.sin(t * 0.21 + i * 2.1) * 0.5 + 0.5) * W;
        const gy = (Math.sin(t * 0.13 + i * 1.3) * 0.5 + 0.5) * H;
        const rg = ctx.createRadialGradient(gx, gy, 0, gx, gy, 220);
        rg.addColorStop(0, 'rgba(79,160,170,0.05)'); rg.addColorStop(1, 'rgba(79,160,170,0)');
        ctx.fillStyle = rg; ctx.fillRect(gx - 220, gy - 220, 440, 440);
      }

      ripples = ripples.filter((r) => r.a > 0.01);
      for (const r of ripples) {
        ctx.beginPath(); ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(223,233,228,${r.a})`; ctx.lineWidth = 1.2; ctx.stroke();
        ctx.beginPath(); ctx.arc(r.x, r.y, r.r * 0.55, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(217,164,65,${r.a * 0.6})`; ctx.stroke();
        r.r += 1.6; r.a *= 0.955;
      }
      if (!reduceMotion) rafSea = requestAnimationFrame(seaFrame);
    };
    seaFrame();

    /* ---------- 2. THE ROUTE & THE SHIP ---------- */
    const routeSvg = routeRef.current;
    const ship = shipRef.current;
    let routePath, tracedPath, routeLen = 0, wptDots = [];

    const buildRoute = () => {
      const docH = document.documentElement.scrollHeight;
      routeSvg.setAttribute('width', innerWidth);
      routeSvg.setAttribute('height', docH);
      routeSvg.style.height = docH + 'px';
      routeSvg.innerHTML = '';

      const waypoints = [...document.querySelectorAll('.waypoint')];
      if (!waypoints.length) { routePath = null; return; }

      const pts = waypoints.map((w) => {
        const sec = w.closest('section');
        const r = sec.getBoundingClientRect();
        const y = r.top + scrollY + r.height * 0.42;
        const x = innerWidth * parseFloat(w.dataset.side);
        return { x, y };
      });
      pts.unshift({ x: pts[0].x, y: Math.max(40, pts[0].y - 260) });
      pts.push({ x: innerWidth * 0.5, y: docH - 70 });

      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
        const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
        const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
        d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
      }

      routePath = document.createElementNS(NS, 'path');
      routePath.id = 'route-path'; routePath.setAttribute('d', d);
      tracedPath = document.createElementNS(NS, 'path');
      tracedPath.id = 'route-traced'; tracedPath.setAttribute('d', d);
      routeSvg.append(routePath, tracedPath);
      routeLen = routePath.getTotalLength();
      tracedPath.setAttribute('pathLength', '1000');
      tracedPath.style.strokeDasharray = '0 1000';

      wptDots = [];
      pts.slice(1, -1).forEach((p) => {
        const c = document.createElementNS(NS, 'circle');
        c.setAttribute('cx', p.x); c.setAttribute('cy', p.y); c.setAttribute('r', 6);
        c.setAttribute('class', 'wpt-dot');
        routeSvg.appendChild(c);
        wptDots.push({ el: c, y: p.y });
      });
    };

    let curT = 0;
    const shipFrame = () => {
      if (routePath) {
        const docH = document.documentElement.scrollHeight - innerHeight;
        const targetT = Math.min(1, Math.max(0, scrollY / Math.max(1, docH)));
        curT += (targetT - curT) * (reduceMotion ? 1 : 0.07);

        const L = curT * routeLen;
        const p = routePath.getPointAtLength(L);
        const p2 = routePath.getPointAtLength(Math.min(routeLen, L + 10));
        const ang = Math.atan2(p2.y - p.y, p2.x - p.x) * 180 / Math.PI;
        const flip = (p2.x - p.x) < -0.5;

        const bob = reduceMotion ? 0 : Math.sin(performance.now() / 650) * 3;
        ship.style.transform = `translate(${p.x}px, ${p.y + bob}px)`;
        ship.querySelector('.hull-group').style.transform =
          `rotate(${Math.max(-16, Math.min(16, ang * 0.35))}deg) scaleX(${flip ? -1 : 1})`;

        tracedPath.style.strokeDasharray = `${curT * 1000} 1000`;
        for (const w of wptDots) w.el.classList.toggle('passed', p.y > w.y - 8);

        updateLog(curT, targetT);
      }
      rafShip = requestAnimationFrame(shipFrame);
    };

    /* ---------- 3. SHIP'S LOG: Mumbai -> Hoboken ---------- */
    let lastT = 0, lastTime = performance.now();
    const elCoords = document.getElementById('vl-coords');
    const elLeg = document.getElementById('vl-leg');
    const elBar = document.getElementById('vl-bar');
    const elKnots = document.getElementById('vl-knots');
    function updateLog(tNorm, rawT) {
      const lat = START.lat + (END.lat - START.lat) * tNorm;
      const lon = START.lon + (END.lon - START.lon) * tNorm;
      if (elCoords) elCoords.textContent =
        `${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'}, ${Math.abs(lon).toFixed(4)}° ${lon >= 0 ? 'E' : 'W'}`;
      if (elLeg) elLeg.textContent =
        rawT > 0.985 ? LEGS[5] : LEGS[Math.min(4, Math.floor(tNorm * 5))];
      if (elBar) elBar.style.width = (tNorm * 100) + '%';
      const now = performance.now();
      const knots = Math.min(30, Math.abs(tNorm - lastT) / Math.max(1, (now - lastTime)) * 60000);
      if (elKnots) elKnots.textContent = knots.toFixed(1) + ' kn';
      lastT = tNorm; lastTime = now;
    }

    /* ---------- 4. reveals + per-section coordinates ---------- */
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.rv').forEach((el) => io.observe(el));

    const stampCoords = () => {
      const docH = document.documentElement.scrollHeight - innerHeight;
      document.querySelectorAll('[data-coords]').forEach((el) => {
        const sec = el.closest('section');
        const tt = Math.min(1, (sec.offsetTop) / Math.max(1, docH));
        const lat = START.lat + (END.lat - START.lat) * tt;
        const lon = START.lon + (END.lon - START.lon) * tt;
        el.textContent = `· ${Math.abs(lat).toFixed(2)}°${lat >= 0 ? 'N' : 'S'} ${Math.abs(lon).toFixed(2)}°${lon >= 0 ? 'E' : 'W'}`;
      });
    };

    /* ---------- boot ---------- */
    const boot = () => { buildRoute(); stampCoords(); };
    boot();
    // re-run after fonts/images settle
    const bootTimer = setTimeout(boot, 400);
    on(window, 'load', boot);
    let rszTimer;
    on(window, 'resize', () => { clearTimeout(rszTimer); rszTimer = setTimeout(boot, 180); });
    rafShip = requestAnimationFrame(shipFrame);

    return () => {
      cancelAnimationFrame(rafSea);
      cancelAnimationFrame(rafShip);
      clearTimeout(bootTimer);
      clearTimeout(rszTimer);
      io.disconnect();
      listeners.forEach((off) => off());
    };
  }, []);

  return (
    <>
      <canvas id="sea-canvas" ref={canvasRef} aria-hidden="true" />
      <svg id="route-layer" ref={routeRef} aria-hidden="true" />

      {/* THE SHIP */}
      <div id="ship" ref={shipRef} aria-hidden="true">
        <svg viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
          <g className="hull-group">
            <g className="wake">
              <path d="M10 66 q6 3 12 0" stroke="#dfe9e4" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".5" />
              <path d="M5 71 q8 4 16 0" stroke="#dfe9e4" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".3" />
            </g>
            <path d="M64 50 L78 39" stroke="#5b4427" strokeWidth="3" strokeLinecap="round" />
            <path d="M66 48 L76 41 L74 50 Z" fill="#e2d2ae" stroke="#caa05a" strokeWidth=".8" />
            <rect x="40.5" y="6" width="3" height="50" rx="1.5" fill="#5b4427" />
            <path d="M24 23 Q42 17 60 23 L63 45 Q42 54 21 45 Z" fill="#ecdfc3" stroke="#caa05a" strokeWidth="1.2" />
            <g transform="translate(42,34)">
              <path d="M-8 6 L8 -4 M-8 -4 L8 6" stroke="#2a2118" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M-4.6 0.5 a4.6 4.6 0 1 1 9.2 0 q0 2.6 -1.6 3.4 l0 1.6 l-6 0 l0 -1.6 q-1.6 -0.8 -1.6 -3.4 Z" fill="#2a2118" />
              <circle cx="-1.9" cy="0.2" r="1.15" fill="#ecdfc3" />
              <circle cx="1.9" cy="0.2" r="1.15" fill="#ecdfc3" />
            </g>
            <path d="M36 14 h12 l-1.6 6 h-8.8 Z" fill="#3a2c1d" stroke="#1f160d" strokeWidth="1" />
            <path className="flag" d="M43 5 Q52 4 61 8 Q52 11 43 13 Z" fill="#1f160d" />
            <circle cx="50" cy="8.6" r="1.7" fill="#ecdfc3" />
            <path d="M15 50 L69 50 Q72 59 63 66 Q42 75 23 66 Q12 59 15 50 Z" fill="#7a4a26" stroke="#3a2c1d" strokeWidth="1.5" />
            <path d="M13 44 Q11 50 16 51 L21 50 Q18 47 19 44 Z" fill="#5b4427" />
            <path d="M71 44 Q73 50 68 51 L63 50 Q66 47 65 44 Z" fill="#5b4427" />
            <rect x="16" y="51.5" width="52" height="3.6" rx="1.8" fill="#d9a441" />
            <circle cx="30" cy="61" r="2" fill="#2a2118" stroke="#d9a441" strokeWidth="1" />
            <circle cx="42" cy="62" r="2" fill="#2a2118" stroke="#d9a441" strokeWidth="1" />
            <circle cx="54" cy="61" r="2" fill="#2a2118" stroke="#d9a441" strokeWidth="1" />
            <g transform="translate(69,42)">
              <ellipse cx="0" cy="3" rx="3.4" ry="4.4" fill="#1f160d" />
              <ellipse cx="0.4" cy="3.8" rx="2" ry="3" fill="#ecdfc3" />
              <circle cx="0" cy="-1.4" r="2.6" fill="#1f160d" />
              <circle cx="0.9" cy="-1.8" r="0.7" fill="#fff" />
              <path d="M2.2 -1 L5 -0.2 L2.2 0.8 Z" fill="#e88d2a" />
            </g>
          </g>
        </svg>
      </div>

      {/* VOYAGE LOG */}
      <div id="voyage-log" role="status" aria-label="Voyage progress">
        <div className="vl-head"><span>SHIP&apos;S LOG</span><span id="vl-knots">0.0 kn</span></div>
        <div className="vl-coords" id="vl-coords">19.0760° N, 72.8777° E</div>
        <div className="vl-leg" id="vl-leg">Departing Mumbai…</div>
        <div className="vl-bar"><i id="vl-bar" /></div>
      </div>
    </>
  );
}
