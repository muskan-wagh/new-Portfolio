"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const item = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-gap bg-surface">
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
              04
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="heading-section sticky top-24"
            >
              Technical
              <br />
              Expertise
            </motion.h2>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              variants={container}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {skillCategories.map((cat) => (
                <motion.div
                  key={cat.category}
                  variants={item}
                  className="card-ghost p-5 md:p-6"
                >
                  <h3 className="label mb-4">{cat.category}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="body text-[0.8125rem]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
