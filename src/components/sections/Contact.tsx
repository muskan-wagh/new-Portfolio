"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="section-gap">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-number"
            >
              08
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="display-lg mb-5"
            >
              Let&apos;s Build
              <br />
              <span className="text-text-tertiary">Something</span>
              <br />
              Together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="body-lg max-w-md"
            >
              I&apos;m always open to discussing new projects, ideas, or
              opportunities. Whether you have a question or just want to say
              hello, feel free to reach out.
            </motion.p>
          </div>

          <div className="lg:col-span-7 lg:col-start-7 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="card p-6 md:p-8"
              >
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="label mb-1.5">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="link-underline text-[0.9375rem]"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="divider-thin" />
                  <div>
                    <h3 className="label mb-1.5">Location</h3>
                    <p className="body">{siteConfig.location}</p>
                  </div>
                  <div className="divider-thin" />
                  <div>
                    <h3 className="label mb-1.5">Social</h3>
                    <div className="flex items-center gap-4">
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
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7"
            >
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn btn-primary"
              >
                Send an Email
                <ArrowUpRightIcon width={13} height={13} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
