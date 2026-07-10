"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="container-lg flex h-14 md:h-16 items-center justify-between">
        <a
          href="#"
          className="font-display text-[0.8125rem] font-medium tracking-[-0.01em] text-text"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {siteConfig.nav.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-text transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-text transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border-subtle bg-bg/98 backdrop-blur-md">
          <div className="container-lg py-8 flex flex-col gap-6">
            {siteConfig.nav.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.8125rem] uppercase tracking-[0.1em] font-medium text-text-tertiary hover:text-text transition-colors"
                onClick={() => setMobileOpen(false)}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
