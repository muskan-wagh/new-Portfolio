"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="section-gap relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/30 to-bg pointer-events-none" />

      <div className="container-lg relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-number mb-8 block"
          >
            08
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="heading-2xl mb-6"
          >
            Let&apos;s create something
            <br />
            <span className="text-text-tertiary">remarkable together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="body-lg text-text-tertiary max-w-lg mx-auto mb-12"
          >
            I&apos;m always looking for ambitious projects and meaningful
            collaborations. Whether you have an idea, a problem to solve, or
            just want to connect — let&apos;s talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex flex-col items-center gap-8"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-3 text-xl font-medium text-text hover:text-text-tertiary transition-colors group"
            >
              {siteConfig.email}
              <ArrowUpRightIcon width={18} height={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="h-px w-16 bg-border-subtle" />

            <div className="flex items-center gap-8">
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
              <span className="text-text-tertiary text-sm font-medium">
                {siteConfig.location}
              </span>
            </div>

            <div className="h-px w-16 bg-border-subtle" />

            <p className="body-sm text-text-tertiary">
              Available for freelance, full-time, and consulting opportunities
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
