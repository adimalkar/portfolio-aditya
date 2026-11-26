"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  ["Projects", "projects"], ["Open source", "open-source"], ["Experience", "experience"], ["About", "about"], ["Contact", "contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    if (!open) return;
    function escape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current.focus();
      }
    }
    function outside(event) {
      if (!header.current.contains(event.target)) setOpen(false);
    }
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header className="header" ref={header}>
      <div className="wrap nav-inner">
        <a className="brand" href="/#hero" onClick={() => setOpen(false)}>
          <span className="monogram" aria-hidden="true">am.</span> Aditya Malkar
        </a>
        <button className="menu-toggle" ref={button} type="button" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}<span className={open ? "menu-lines opened" : "menu-lines"} aria-hidden="true" />
        </button>
        <nav id="navigation" aria-label="Main navigation" className={open ? "nav open" : "nav"}>
          {sections.map(([label, id]) => <a key={id} href={"/#" + id} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
