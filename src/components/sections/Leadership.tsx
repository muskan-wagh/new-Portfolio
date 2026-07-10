"use client";

import { motion } from "framer-motion";
import { leadership } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const card = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export default function Leadership() {
  return (
    <section id="leadership" className="section-gap bg-surface">
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
              06
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="heading-section sticky top-24"
            >
              Leadership
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
              {leadership.map((item) => (
                <motion.div
                  key={item.id}
                  variants={card}
                  className="card p-5 md:p-6 flex flex-col"
                >
                  <p className="body-sm">{item.organization}</p>
                  <h3 className="heading-card mt-0.5">{item.title}</h3>
                  <p className="body text-[0.8125rem] mt-2.5 flex-1">
                    {item.description}
                  </p>
                  <div className="divider-thin my-4" />
                  <div className="flex flex-wrap gap-5">
                    {item.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="stat-number text-[1.5rem] md:text-[1.75rem]">
                          {m.value}
                        </p>
                        <p className="stat-label text-[0.6875rem]">{m.label}</p>
                      </div>
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
