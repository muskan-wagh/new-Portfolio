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
    <section className="flex items-center pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface to-bg z-0" />

      <div className="container-lg relative z-10">
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="max-w-2xl"
        >
          <motion.div variants={item} className="mb-6">
            <span className="text-accent/80 font-light tracking-[0.15em] uppercase text-[0.625rem]">
              AI Engineer &middot; Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1 variants={item} className="display-2xl mb-10 text-text">
            Hi, I&apos;m
            <br />
            <span className="text-text">Muskan Wagh</span>
          </motion.h1>

          <motion.p variants={item} className="text-[0.9375rem] text-text-secondary leading-relaxed max-w-lg mb-12 font-light">
            I engineer intelligent digital products that transform complex AI systems into intuitive user experiences.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-5 mb-12">
            <a
              href="#work"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-bg text-[0.6875rem] font-medium tracking-[0.12em] uppercase transition-all duration-300 hover:bg-accent-hover hover:translate-y-[-1px] hover:shadow-lg hover:shadow-accent/20"
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
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-text-tertiary transition-all duration-300 hover:text-text border border-border-subtle hover:border-text-tertiary/40"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-8">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon width={18} height={18} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon width={18} height={18} />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75h-3.27l7.201-8.22L2.01 2.25H8.16l4.711 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <span className="text-text-tertiary text-[0.625rem] font-light tracking-[0.15em] uppercase">
              {siteConfig.location}
            </span>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
