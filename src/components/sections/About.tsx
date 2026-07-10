"use client";

import { motion } from "framer-motion";
import { siteConfig, coreValues, currentFocus } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section id="about" className="section-gap">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
          {/* Left column: Heading + bio */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-number"
            >
              02
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="heading-section mb-5"
            >
              About
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="body-lg mb-5 text-body-width"
            >
              {siteConfig.bio}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="body text-body-width"
            >
              {siteConfig.approach}
            </motion.p>
          </div>

          {/* Right column: Core Values + Current Focus */}
          <div className="lg:col-span-7 lg:col-start-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Core Values */}
              <div className="card p-5 md:p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="label mb-5"
                >
                  Core Values
                </motion.h3>
                <div className="flex flex-col gap-4">
                  {coreValues.map((v, i) => (
                    <motion.div
                      key={v.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    >
                      <h4 className="text-[0.8125rem] font-medium text-text">
                        {v.title}
                      </h4>
                      <p className="body-sm mt-1">{v.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Current Focus */}
              <div className="card p-5 md:p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="label mb-5"
                >
                  Current Focus
                </motion.h3>
                <div className="flex flex-col gap-4">
                  {currentFocus.map((f, i) => (
                    <motion.div
                      key={f.area}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                    >
                      <h4 className="text-[0.8125rem] font-medium text-text">
                        {f.area}
                      </h4>
                      <p className="body-sm mt-1">{f.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
