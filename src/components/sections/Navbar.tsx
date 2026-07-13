"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
            className="md:hidden relative z-50 flex flex-col items-center justify-center gap-[3px] w-11 h-11 px-3"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-4 bg-text transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[2.5px]" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-text transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[280px] max-w-[85vw] bg-bg/95 backdrop-blur-xl border-l border-border-subtle md:hidden shadow-2xl"
            >
              <div className="flex flex-col pt-28 px-6 gap-1">
                {siteConfig.nav.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, ease }}
                      className={`relative px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200 min-h-[44px] flex items-center ${
                        isActive
                          ? "text-bg bg-text"
                          : "text-text-tertiary hover:text-text hover:bg-surface/50"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
