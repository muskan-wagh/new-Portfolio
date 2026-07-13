"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
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

export default function Achievements() {
  return (
    <section className="section-gap-sm">
      <div className="container-lg">
        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="card p-6 md:p-10 lg:p-12"
        >
          <motion.span
            variants={item}
            className="section-number"
          >
            07
          </motion.span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-5">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={item}>
                <p className="stat-number mb-2">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
                {stat.description && (
                  <p className="body-sm mt-3 text-text-tertiary">{stat.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
