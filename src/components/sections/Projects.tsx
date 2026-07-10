"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { projects } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-gap">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-number"
            >
              03
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="heading-section sticky top-24"
            >
              Selected
              <br />
              Projects
            </motion.h2>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {projects.map((project, i) => (
                <motion.article
                  key={project.id}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="border-t border-border py-8 md:py-10 first:border-t-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
                    {/* Project info */}
                    <div className="md:col-span-5">
                      <span className="label mb-2 block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="heading-card text-lg md:text-xl mb-2">
                        {project.title}
                      </h3>
                      <p className="body text-sm max-w-sm">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[0.6875rem] text-text-tertiary border border-border-subtle px-2 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 mt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-[0.8125rem]"
                        >
                          Source
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-[0.8125rem]"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>

                    {/* Case study card */}
                    <div className="md:col-span-7">
                      <div className="card p-5 md:p-6 h-full">
                        <div className="flex flex-col gap-4 h-full">
                          <CaseStudyBlock
                            label="Problem"
                            text={project.problem}
                          />
                          <div className="divider-thin" />
                          <CaseStudyBlock
                            label="Solution"
                            text={project.solution}
                          />
                          <div className="divider-thin" />
                          <CaseStudyBlock
                            label="Impact"
                            text={project.impact}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="label mb-1.5">{label}</h4>
      <p className="body text-[0.8125rem]">{text}</p>
    </div>
  );
}
