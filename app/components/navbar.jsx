// @flow strict
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/#about", label: "ABOUT" },
    { href: "/#experience", label: "EXPERIENCE" },
    { href: "/#skills", label: "SKILLS" },
    { href: "/#projects", label: "PROJECTS" },
    { href: "/#education", label: "EDUCATION" },
    { href: "/#contact", label: "CONTACT" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-glass py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-[92rem] mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="group flex items-center gap-2">
              <span className="text-2xl font-bold relative">
                <span className="text-[#00ff88] group-hover:text-[#00d4ff] transition-colors duration-300">
                  ADITYA
                </span>
                <span className="text-white ml-1">MALKAR</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00ff88] to-[#00d4ff] group-hover:w-full transition-all duration-300" />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  className="relative block px-4 py-2 no-underline outline-none group" 
                  href={item.href}
                >
                  <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-[#00ff88] font-medium tracking-wide">
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#00ff88] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-[#00ff88] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#00ff88] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#00ff88] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <ul className="flex flex-col items-center space-y-2 py-4 bg-[#0a0e1a]/95 backdrop-blur-xl rounded-lg border border-[#1e3a5f]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  className="block px-6 py-3 text-gray-300 hover:text-[#00ff88] transition-colors duration-300"
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
