"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { siteConfig } from "@/lib/data";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScroll = useRef(0);
  const initialized = useRef(false);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    setVisible(currentScroll < 100 || currentScroll < lastScroll.current);
    lastScroll.current = currentScroll;

    const sections = siteConfig.nav.map((l) => l.href.replace("#", ""));
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 200) {
        setActiveSection(id);
        return;
      }
    }
    setActiveSection("");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (!initialized.current) {
      initialized.current = true;
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <nav className="flex items-center gap-1 md:gap-1.5 bg-bg/70 backdrop-blur-xl border border-border-subtle rounded-full px-2 md:px-3 py-1.5 md:py-2 shadow-lg shadow-black/5">
          <a
            href="#"
            className="font-display text-sm font-semibold tracking-tight text-text px-3 md:px-4 py-1.5 mr-1 md:mr-2"
          >
            {siteConfig.name}
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {siteConfig.nav.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-bg"
                      : "text-text-tertiary hover:text-text"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-text rounded-full" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[3px] p-2 px-3"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-4 bg-text transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[2px]" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-text transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[2px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="fixed top-20 left-4 right-4 z-50 bg-bg/95 backdrop-blur-xl border border-border-subtle rounded-2xl shadow-xl md:hidden overflow-hidden">
            <div className="flex flex-col py-3">
              {siteConfig.nav.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-3.5 text-sm font-medium text-text-tertiary hover:text-text hover:bg-surface/50 transition-all duration-200 border-b border-border-subtle last:border-b-0"
                  onClick={() => setMobileOpen(false)}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  );
}
