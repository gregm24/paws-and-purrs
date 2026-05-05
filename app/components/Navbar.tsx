"use client";

import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Charities", href: "#charities" },
  { label: "Future Goal", href: "#future-goal" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-navy shadow-lg" : "bg-navy/95"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-orange tracking-tight hover:text-orange-light transition-colors"
          >
            Paws &amp; Purrs
          </a>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <NavLinks
              links={NAV_LINKS}
              activeSection={activeSection}
              orientation="horizontal"
            />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-md text-cream hover:bg-navy-light transition-colors"
          >
            <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
            <span
              className={`block w-5 h-0.5 bg-current mb-1 transition-all ${isOpen ? "opacity-0" : ""}`}
            />
            <span className="block w-5 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-navy border-t border-navy-light px-4 pb-4"
        >
          <NavLinks
            links={NAV_LINKS}
            activeSection={activeSection}
            orientation="vertical"
            onLinkClick={closeMenu}
          />
        </div>
      )}
    </nav>
  );
}
