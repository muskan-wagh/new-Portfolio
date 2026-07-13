"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function IconAI() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-accent" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M12 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v1" />
      <path d="M4 10v-1a3 3 0 0 1 3-3h2V5a3 3 0 0 1 3-3" />
      <path d="M12 22a3 3 0 0 1-3-3v-1H7a3 3 0 0 1-3-3v-1" />
      <path d="M20 14v1a3 3 0 0 1-3 3h-2v1a3 3 0 0 1-3 3" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconStack() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-accent" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconRAG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-accent" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
      <path d="M7 12h10" />
      <path d="M7 12 2 7" />
      <path d="M17 12l5-5" />
      <path d="M7 12l-5 5" />
      <path d="M17 12l5 5" />
    </svg>
  );
}

function IconTool() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-accent" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1-2.84 2.84l-4.3 4.3" />
      <path d="m3 21 8-8" />
      <path d="M3 3l7 7" />
      <path d="M21 3l-7 7" />
    </svg>
  );
}

function Card({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.08 * index, ease }}
      whileHover={{ y: -4, borderColor: "var(--color-accent)" }}
      className="border border-border-subtle rounded-xl bg-surface p-5 md:p-6 transition-colors"
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="story" className="section-gap">
      <div className="container-lg">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-number mb-4 block"
        >
          02
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="heading-xl mb-14 md:mb-18"
        >
          My Story
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-20 md:space-y-24">
          {/* WHO I AM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <span className="label-lg mb-4 block">Who I Am</span>
            <p className="body-xl leading-relaxed">
              I build AI-powered digital products that combine thoughtful engineering with
              intuitive user experiences. As a final-year Computer Science student, I enjoy
              solving real-world problems through AI, full-stack development, and product design.
            </p>
          </motion.div>

          {/* WHAT I BUILD */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <span className="label-lg mb-5 block">What I Build</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { icon: <IconAI />, title: "AI Applications", desc: "Production-ready AI systems powered by LLMs and modern workflows." },
                { icon: <IconStack />, title: "Full-Stack Products", desc: "Fast, scalable web applications with intuitive user experiences." },
                { icon: <IconRAG />, title: "RAG Systems", desc: "Retrieval-augmented AI solutions built for accurate, grounded responses." },
                { icon: <IconTool />, title: "Developer Tools", desc: "Tools and workflows that improve developer productivity." },
              ].map((item, i) => (
                <Card key={item.title} index={i}>
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="text-sm font-medium text-text mb-1.5">{item.title}</h4>
                  <p className="text-xs text-text-tertiary leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
