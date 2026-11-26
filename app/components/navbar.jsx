'use client';

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "ABOUT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#skills", label: "SKILLS" },
  { href: "#education", label: "EDUCATION" },
  { href: "#contact", label: "CONTACT" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="voyage-header">
      <a className="brand" href="#hero"><b>ADITYA</b>&nbsp;MALKAR</a>
      <button
        className="nav-toggle"
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        MENU
      </button>
      <nav className={`main${menuOpen ? " openv" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeId === item.href.slice(1) ? "active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
