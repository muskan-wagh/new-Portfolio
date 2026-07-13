"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const item = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export default function Hero() {
  return (
    <section className="flex items-center pt-20 md:pt-36 pb-12 md:pb-20 relative overflow-hidden min-h-[100dvh] md:min-h-0">
      <div className="absolute inset-0 bg-gradient-to-br from-surface to-bg z-0" />

      <div className="container-lg relative z-10">
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="max-w-2xl mx-auto md:mx-0 text-center md:text-left"
        >
          <motion.div variants={item} className="mb-4 md:mb-6">
            <span className="text-accent/80 font-light tracking-[0.15em] uppercase text-[0.625rem]">
              AI Engineer &middot; Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1 variants={item} className="display-2xl mb-6 md:mb-10 text-text">
            Hi, I&apos;m
            <br />
            <span className="text-text">Muskan Wagh</span>
          </motion.h1>

          <motion.p variants={item} className="body-sm md:text-[0.9375rem] text-text-secondary leading-relaxed max-w-lg mx-auto md:mx-0 mb-8 md:mb-12">
            I engineer intelligent digital products that transform complex AI systems into intuitive user experiences.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 mb-8 md:mb-12">
            <a
              href="#work"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-accent text-bg text-[0.6875rem] font-medium tracking-[0.12em] uppercase transition-all duration-300 hover:bg-accent-hover hover:translate-y-[-1px] hover:shadow-lg hover:shadow-accent/20 w-full sm:w-auto"
            >
              <span>Explore My Work</span>
              <ArrowUpRightIcon
                width={13}
                height={13}
                className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:translate-y-[-3px]"
              />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-text-tertiary transition-all duration-300 hover:text-text border border-border-subtle hover:border-text-tertiary/40 w-full sm:w-auto"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center justify-center md:justify-start gap-6 md:gap-8">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon width={20} height={20} />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75h-3.27l7.201-8.22L2.01 2.25H8.16l4.711 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <span className="text-text-tertiary text-[0.625rem] font-light tracking-[0.15em] uppercase hidden md:inline">
              {siteConfig.location}
            </span>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
