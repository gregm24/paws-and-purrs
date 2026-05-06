"use client";

import { useState, useEffect, useRef } from "react";
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
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pillsRef = useRef<HTMLDivElement>(null);

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
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Keep active pill scrolled into view
  useEffect(() => {
    const container = pillsRef.current;
    if (!container) return;
    const pill = container.querySelector<HTMLElement>(`[data-section="${activeSection}"]`);
    if (pill) {
      container.scrollLeft =
        pill.offsetLeft - container.offsetWidth / 2 + pill.offsetWidth / 2;
    }
  }, [activeSection]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-navy shadow-lg" : "bg-navy/95"
      }`}
    >
      {/* Header bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20">
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold text-orange tracking-tight hover:text-orange-light transition-colors"
          >
            Paws &amp; Purrs
          </a>
          <div className="hidden md:block">
            <NavLinks
              links={NAV_LINKS}
              activeSection={activeSection}
              orientation="horizontal"
            />
          </div>
        </div>
      </div>

      {/* Mobile pill strip — visible below md */}
      <div className="md:hidden border-t border-white/10">
        <div
          ref={pillsRef}
          className="scrollbar-hide flex gap-2 px-4 py-2 overflow-x-auto"
        >
          {NAV_LINKS.map((link) => {
            const active = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                data-section={link.href.slice(1)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  active
                    ? "bg-orange text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
