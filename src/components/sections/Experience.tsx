"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journey } from "@/lib/data";
import type { JourneyItem } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const typeLabel: Record<JourneyItem["type"], string> = {
  work: "Engineering",
  community: "Leadership",
  build: "Project",
  learning: "Growth",
};

const typeColor: Record<JourneyItem["type"], string> = {
  work: "text-accent border-accent/30",
  community: "text-text-tertiary border-border-subtle",
  build: "text-accent/70 border-accent/20",
  learning: "text-text-tertiary/60 border-border-subtle",
};

const relevantTypes: JourneyItem["type"][] = ["work", "community"];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className="w-3 h-3 transition-transform duration-300"
      style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
    >
      <path d="M6 4l4 4-4 4" />
    </svg>
  );
}

function Row({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: JourneyItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.04 * index, ease }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 md:gap-4 py-3 md:py-3.5 group text-left"
      >
        <span className="text-[0.625rem] font-medium text-text-tertiary/30 w-5 flex-shrink-0 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 text-sm md:text-base font-medium text-text truncate group-hover:text-accent transition-colors">
          {item.role}
        </span>
        <span className="hidden sm:block text-xs text-text-tertiary/60 flex-shrink-0">
          {item.organization}
        </span>
        <span className="hidden md:block text-[0.625rem] text-text-tertiary/40 flex-shrink-0 w-16 text-right tabular-nums">
          {item.year}
        </span>
        <span className={`text-[0.5rem] font-medium px-2 py-0.5 rounded-full border flex-shrink-0 ${typeColor[item.type]}`}>
          {typeLabel[item.type]}
        </span>
        <span className="text-text-tertiary/40 flex-shrink-0">
          <Chevron open={isOpen} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <div className="pb-4 md:pb-5 pl-8 md:pl-9">
              <p className="text-xs text-text-secondary/70 leading-relaxed mb-3 max-w-xl">
                {item.description}
              </p>
              <ul className="space-y-1.5 mb-3">
                {item.achievements.slice(0, 3).map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-text-tertiary/60 leading-relaxed">
                    <span className="mt-[5px] h-px w-3 flex-shrink-0 bg-text-tertiary/20" />
                    {a}
                  </li>
                ))}
              </ul>
              {item.tech && item.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span key={t} className="text-[0.5rem] font-medium tracking-wide text-text-tertiary/40 uppercase px-1.5 py-0.5 border border-border-subtle rounded">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const items = journey.filter((item) => relevantTypes.includes(item.type));

  return (
    <section id="journey" className="section-gap">
      <div className="container-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-14">
          <div>
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
              className="heading-section"
            >
              Engineering<br />
              Journey
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="body-sm text-text-tertiary/60 max-w-xs md:text-right flex-shrink-0"
          >
            Community leadership, AI engineering, and continuous learning.
          </motion.p>
        </div>

        <div className="max-w-4xl">
          {items.map((item, i) => (
            <div key={item.id}>
              <div className="h-px bg-border-subtle/50" />
              <Row
                item={item}
                index={i}
                isOpen={expandedId === item.id}
                onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
              />
            </div>
          ))}
          <div className="h-px bg-border-subtle/50" />
        </div>
      </div>
    </section>
  );
}
