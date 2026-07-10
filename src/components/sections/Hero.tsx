"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between">
      <div className="container-lg flex-1 flex items-center pt-28 md:pt-36 pb-12">
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          <motion.span variants={item} className="section-number">
            01
          </motion.span>

          <motion.div variants={item} className="label mb-5 md:mb-6">
            Portfolio &middot; 2026 Edition
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-start">
            <div className="lg:col-span-7">
              <motion.h1 variants={item} className="display-xl">
                Building
                <br />
                <span className="text-text-tertiary">Intelligent</span>
                <br />
                <span className="text-accent">Digital</span>{" "}
                Products
              </motion.h1>
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <motion.p variants={item} className="body-lg mb-7 max-w-xs">
                {siteConfig.description}
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap gap-3 mb-7">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                  <ArrowUpRightIcon width={13} height={13} />
                </a>
                <a href="#contact" className="btn btn-outline">
                  Get in Touch
                </a>
              </motion.div>

              <motion.div variants={item} className="flex items-center gap-4">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-text transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon width={15} height={15} />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-text transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon width={15} height={15} />
                </a>
                <span className="text-text-tertiary text-[0.8125rem] ml-1">
                  {siteConfig.location}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="container-lg pb-8"
      >
        <div className="divider" />
      </motion.div>
    </section>
  );
}
