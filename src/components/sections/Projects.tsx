"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon, GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

// ─── Shared Sub-Components ───

function TechBadges({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span key={t} className="tech-badge">
          {t}
        </span>
      ))}
    </div>
  );
}

function MetricBlock({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
    </div>
  );
}

function GhostCTA({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="cta-ghost group">
      {label}
      <ArrowUpRightIcon width={12} height={12} className="arrow-icon" />
    </a>
  );
}

function GhostCTAWithIcon({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="cta-ghost group">
      {icon}
      {label}
      <ArrowUpRightIcon width={12} height={12} className="arrow-icon" />
    </a>
  );
}

function AnimatedDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease }}
      className="divider-animated origin-left"
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.625rem] uppercase tracking-[0.15em] text-text-tertiary font-medium">
      {children}
    </span>
  );
}

function StatusPill({ status }: { status: string }) {
  return (
    <span className={`text-[0.625rem] font-medium px-2 py-0.5 rounded-full ${
      status === "Live"
        ? "bg-green-500/8 text-green-400"
        : "bg-yellow-500/8 text-yellow-400"
    }`}>
      {status}
    </span>
  );
}

// ─── Preview: Campus Connect — Browser Mockup ───

function CampusConnectPreview() {
  return (
    <div className="browser-window preview-glow h-full">
      <div className="browser-bar">
        <span className="browser-dot bg-red-500/60" />
        <span className="browser-dot bg-yellow-500/60" />
        <span className="browser-dot bg-green-500/60" />
        <span className="browser-url">campusconnect.app</span>
      </div>
      <div className="p-5 md:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-text">Discover</span>
          <div className="flex gap-1.5">
            <span className="text-[0.625rem] px-2.5 py-1 rounded-full bg-accent/10 text-accent">Feed</span>
            <span className="text-[0.625rem] px-2.5 py-1 rounded-full border border-border-subtle text-text-tertiary">Events</span>
            <span className="text-[0.625rem] px-2.5 py-1 rounded-full border border-border-subtle text-text-tertiary">Clubs</span>
          </div>
        </div>
        <div className="space-y-2.5">
          {[
            { text: "Just joined the Robotics Club! Anyone else into competitive coding?", likes: 12, comments: 5 },
            { text: "Hackathon next weekend — teams forming now. Register by Friday!", likes: 28, comments: 9 },
            { text: "New Design Workshop: Figma to Prototype in 2 hours. Limited seats!", likes: 15, comments: 3 },
          ].map((post, i) => (
            <div key={i} className="border border-border-subtle rounded-lg p-3 hover:border-accent/30 transition-colors">
              <p className="text-xs text-text-secondary leading-relaxed line-clamp-1">{post.text}</p>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-[0.625rem] text-text-tertiary">&#9829; {post.likes}</span>
                <span className="text-[0.625rem] text-text-tertiary">&#9993; {post.comments}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Preview: DEV Collab — Architecture Diagram ───

function DevCollabPreview() {
  return (
    <div className="browser-window preview-glow h-full">
      <div className="browser-bar">
        <span className="browser-dot bg-red-500/60" />
        <span className="browser-dot bg-yellow-500/60" />
        <span className="browser-dot bg-green-500/60" />
        <span className="browser-url">System Architecture</span>
      </div>
      <div className="p-5 md:p-6">
        <div className="flex flex-col items-center gap-3">
          <div className="flow-node w-full max-w-[180px]">React SPA</div>
          <svg width="12" height="20" viewBox="0 0 12 20" className="flow-arrow">
            <path d="M6 0v17M1 12l5 5 5-5" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
          <div className="flex items-center gap-2 w-full justify-center">
            <div className="flow-node flex-1 max-w-[120px]">JWT Auth</div>
            <svg width="12" height="12" viewBox="0 0 12 12" className="flow-arrow">
              <path d="M0 6h9M5 2l4 4-4 4" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
            <div className="flow-node flex-1 max-w-[120px]">Express API</div>
          </div>
          <svg width="12" height="20" viewBox="0 0 12 20" className="flow-arrow">
            <path d="M6 0v17M1 12l5 5 5-5" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
          <div className="flex items-center gap-3 w-full justify-center">
            <div className="flow-node max-w-[100px]">MongoDB</div>
            <span className="text-text-tertiary text-[0.625rem]">+</span>
            <div className="flow-node max-w-[100px]">Redis</div>
          </div>
          <svg width="12" height="20" viewBox="0 0 12 20" className="flow-arrow">
            <path d="M6 0v17M1 12l5 5 5-5" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
          <div className="flow-node w-full max-w-[180px] border-accent/30">Socket.io Real-time</div>
        </div>
      </div>
    </div>
  );
}

// ─── Preview: Estate — App Interface ───

function EstatePreview() {
  return (
    <div className="browser-window preview-glow h-full">
      <div className="browser-bar">
        <span className="browser-dot bg-red-500/60" />
        <span className="browser-dot bg-yellow-500/60" />
        <span className="browser-dot bg-green-500/60" />
        <span className="browser-url">estate.app</span>
      </div>
      <div className="p-5 md:p-6 space-y-4">
        <div className="border border-border-subtle rounded-lg px-3 py-2 flex items-center gap-2">
          <span className="text-text-tertiary text-xs">&#128269;</span>
          <span className="text-xs text-text-tertiary">Search by location, price, type...</span>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {["All", "House", "Apartment", "Villa", "Land"].map((f) => (
            <span key={f} className={`text-[0.625rem] px-2.5 py-1 rounded-full ${
              f === "All" ? "bg-accent/10 text-accent" : "border border-border-subtle text-text-tertiary"
            }`}>
              {f}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { title: "Modern Villa", price: "$450,000", beds: "4", baths: "3" },
            { title: "City Apartment", price: "$280,000", beds: "2", baths: "1" },
            { title: "Studio Loft", price: "$180,000", beds: "1", baths: "1" },
            { title: "Family Home", price: "$350,000", beds: "3", baths: "2" },
          ].map((card, i) => (
            <div key={i} className="border border-border-subtle rounded-lg p-3 hover:border-accent/30 transition-colors">
              <div className="h-8 rounded bg-gradient-to-br from-accent/10 to-transparent mb-2" />
              <div className="text-xs font-medium text-text">{card.title}</div>
              <div className="text-[0.625rem] text-accent mt-0.5">{card.price}</div>
              <div className="text-[0.625rem] text-text-tertiary mt-0.5">{card.beds} bed &middot; {card.baths} bath</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Preview: API Tester — Workflow ───

function ApiTesterPreview() {
  return (
    <div className="browser-window preview-glow h-full">
      <div className="browser-bar">
        <span className="browser-dot bg-red-500/60" />
        <span className="browser-dot bg-yellow-500/60" />
        <span className="browser-dot bg-green-500/60" />
        <span className="browser-url">API Tester</span>
      </div>
      <div className="p-5 md:p-6">
        <div className="grid grid-cols-5 gap-3 h-full">
          <div className="col-span-2 space-y-2.5">
            <div className="flex gap-1.5">
              <span className="text-[0.625rem] px-2 py-1 rounded border border-border-subtle text-text-tertiary bg-surface">GET</span>
              <div className="flex-1 border border-border-subtle rounded px-2 py-1 text-[0.625rem] text-text-tertiary">/api/v1/users</div>
            </div>
            <div className="border border-border-subtle rounded p-2.5 space-y-1">
              <div className="text-[0.625rem] text-text-tertiary uppercase tracking-wider">Headers</div>
              <div className="text-[0.625rem] text-text-tertiary font-mono">Authorization: Bearer &lt;token&gt;</div>
              <div className="text-[0.625rem] text-text-tertiary font-mono">Content-Type: application/json</div>
            </div>
            <div className="border border-border-subtle rounded p-2.5 space-y-1">
              <div className="text-[0.625rem] text-text-tertiary uppercase tracking-wider">Body</div>
              <div className="text-[0.625rem] text-text-tertiary font-mono leading-relaxed">{`{ "query": "..." }`}</div>
            </div>
            <div className="text-[0.625rem] px-3 py-1.5 rounded border border-accent/30 text-accent text-center">
              Send Request &#8594;
            </div>
          </div>
          <div className="col-span-3 border border-border-subtle rounded p-2.5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[0.625rem] text-green-400 font-medium">200 OK</span>
              <span className="text-[0.625rem] text-text-tertiary">342ms</span>
            </div>
            <div className="h-px bg-border-subtle" />
            <div className="font-mono text-[0.625rem] text-text-secondary leading-relaxed">
              <span className="text-text-tertiary">{`{`}</span><br />
              <span className="pl-2 text-text-tertiary">{'"status": '}</span>success<br />
              <span className="pl-2 text-text-tertiary">{'"data": '}</span>[<br />
              <span className="pl-4 text-text-tertiary">{`{ "id": 1, "name": "..." },`}</span><br />
              <span className="pl-4 text-text-tertiary">{`{ "id": 2, "name": "..." }`}</span><br />
              <span className="pl-2">]</span><br />
              <span className="text-text-tertiary">{`}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Project 1: Campus Connect — Editorial Split ───

function CampusConnectSection() {
  const p = projects[0];
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          <div className="flex items-center gap-3 mb-4">
            <SectionLabel>{p.category}</SectionLabel>
            <StatusPill status={p.status} />
            <span className="text-[0.625rem] text-text-tertiary">{p.timeline}</span>
          </div>

          <h3 className="display-lg mb-5">{p.title}</h3>

          <p className="body-sm text-text-secondary leading-relaxed mb-5">{p.overview}</p>

          <div className="flex flex-wrap gap-5 mb-6">
            {p.metrics.map((m) => (
              <MetricBlock key={m.label} value={m.value} label={m.label} />
            ))}
          </div>

          <div className="mb-5">
            <TechBadges items={p.tech} />
          </div>

          <div className="flex items-center gap-6">
            <GhostCTA href={p.demo} label="Live Demo" />
            <GhostCTAWithIcon href={p.github} label="Source" icon={<GithubIcon width={12} height={12} />} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <div className="h-full min-h-[280px]">
            <CampusConnectPreview />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

// ─── Project 2: DEV Collab — Architecture & Features ───

function DevCollabSection() {
  const p = projects[1];
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          <div className="h-full min-h-[280px]">
            <DevCollabPreview />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <div className="flex items-center gap-3 mb-4">
            <SectionLabel>{p.category}</SectionLabel>
            <StatusPill status={p.status} />
            <span className="text-[0.625rem] text-text-tertiary">{p.timeline}</span>
          </div>

          <h3 className="display-lg mb-5">{p.title}</h3>

          <p className="body-sm text-text-secondary leading-relaxed mb-5">{p.overview}</p>

          <div className="mb-5">
            <SectionLabel>Key Features</SectionLabel>
            <div className="mt-2 space-y-1.5">
              {p.keyFeatures.slice(0, 3).map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <span className="feature-dot mt-[0.375rem]" />
                  <span className="text-xs text-text-secondary">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-5 mb-5">
            {p.metrics.map((m) => (
              <MetricBlock key={m.label} value={m.value} label={m.label} />
            ))}
          </div>

          <div className="mb-5">
            <TechBadges items={p.tech} />
          </div>

          <div className="flex items-center gap-6">
            <GhostCTA href={p.demo} label="Live Demo" />
            <GhostCTAWithIcon href={p.github} label="Source" icon={<GithubIcon width={12} height={12} />} />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

// ─── Project 3: Estate — Visual Hero ───

function EstateSection() {
  const p = projects[2];
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-3">
          <SectionLabel>{p.category}</SectionLabel>
          <StatusPill status={p.status} />
          <span className="text-[0.625rem] text-text-tertiary">{p.timeline}</span>
        </div>
        <h3 className="display-lg mb-3">{p.title}</h3>
        <p className="body-sm text-text-secondary leading-relaxed max-w-xl">{p.overview}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
        className="mb-6"
      >
        <div className="max-h-[360px] overflow-hidden rounded-xl">
          <EstatePreview />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <div className="flex flex-wrap gap-5 mb-4">
            {p.metrics.map((m) => (
              <MetricBlock key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
          <TechBadges items={p.tech} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="flex items-center gap-6"
        >
          <GhostCTA href={p.demo} label="Live Demo" />
          <GhostCTAWithIcon href={p.github} label="Source" icon={<GithubIcon width={12} height={12} />} />
        </motion.div>
      </div>
    </motion.article>
  );
}

// ─── Project 4: API Tester — Tool Workflow ───

function ApiTesterSection() {
  const p = projects[3];
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="lg:order-2"
        >
          <div className="h-full min-h-[280px]">
            <ApiTesterPreview />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="lg:order-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <SectionLabel>{p.category}</SectionLabel>
            <StatusPill status={p.status} />
            <span className="text-[0.625rem] text-text-tertiary">{p.timeline}</span>
          </div>

          <h3 className="display-lg mb-5">{p.title}</h3>

          <p className="body-sm text-text-secondary leading-relaxed mb-5">{p.overview}</p>

          <div className="mb-5">
            <SectionLabel>Key Features</SectionLabel>
            <div className="mt-2 space-y-1.5">
              {p.keyFeatures.slice(0, 3).map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <span className="feature-dot mt-[0.375rem]" />
                  <span className="text-xs text-text-secondary">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-5 mb-5">
            {p.metrics.map((m) => (
              <MetricBlock key={m.label} value={m.value} label={m.label} />
            ))}
          </div>

          <div className="mb-5">
            <TechBadges items={p.tech} />
          </div>

          <div className="flex items-center gap-6">
            <GhostCTA href={p.demo} label="Live Demo" />
            <GhostCTAWithIcon href={p.github} label="Source" icon={<GithubIcon width={12} height={12} />} />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

// ─── Main Export ───

export default function Projects() {
  return (
    <section id="work" className="section-gap">
      <div className="container-lg">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-number mb-4 block"
        >
          03
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="heading-xl mb-16 md:mb-20"
        >
          Featured Work
        </motion.h2>

        <div className="space-y-0">
          <CampusConnectSection />
          <div className="my-16 md:my-20">
            <AnimatedDivider />
          </div>
          <DevCollabSection />
          <div className="my-16 md:my-20">
            <AnimatedDivider />
          </div>
          <EstateSection />
          <div className="my-16 md:my-20">
            <AnimatedDivider />
          </div>
          <ApiTesterSection />
        </div>
      </div>
    </section>
  );
}
