"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  return (
    <section id="expertise" className="section-gap">
      <div className="container-lg">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-number mb-4 block"
        >
          04
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="heading-xl mb-8 md:mb-10"
        >
          Technical Mastery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i, ease }}
              whileHover={{ y: -4, borderColor: "var(--color-accent)" }}
              className="border border-border-subtle rounded-xl bg-surface p-4 md:p-6 transition-colors"
            >
              <h3 className="text-sm font-medium text-text mb-3 md:mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
