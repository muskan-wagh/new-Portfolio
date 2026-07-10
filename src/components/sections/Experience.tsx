"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section-gap">
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
              05
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="heading-section sticky top-24"
            >
              Experience
            </motion.h2>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border-subtle hidden md:block" />

              <div className="flex flex-col gap-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fadeUp}
                    className="relative md:pl-8"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-[-3.5px] top-[7px] w-[7px] h-[7px] rounded-full bg-border" />

                    <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] gap-2 md:gap-6">
                      <p className="font-display text-[0.8125rem] font-medium text-text-tertiary md:text-right tabular-nums tracking-[-0.01em]">
                        {exp.period}
                      </p>
                      <div>
                        <h3 className="heading-card">{exp.role}</h3>
                        <p className="body-sm mt-0.5">{exp.company}</p>
                        <p className="body text-[0.8125rem] mt-2.5">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
