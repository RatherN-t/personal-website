"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { MapPin, GraduationCap, Briefcase, Heart, Code } from "lucide-react";

const technologies = [
  "Python",
  "TensorFlow",
  "FastAPI",
  "React.js",
  "MCP Servers",
  "Agentic AI",
  "TypeScript",
  "Data Analysis",
  "Excel (Pivots, VLOOKUP)",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-[var(--accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
              The Story So Far
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              I'm <span className="text-[var(--text-primary)] font-medium">Yash Mittal</span>, 
              currently pursuing a Computer Science degree with a major in <span className="text-[var(--accent)]">Artificial Intelligence</span> at 
              the University of New South Wales.
            </p>

            <p>
              Right now, I'm working at an <span className="text-[var(--text-primary)] font-medium">AI startup</span> where 
              I designed a cost optimiser to help a supply chain company save money. I love tackling 
              interesting challenges, solving problems, and developing innovative solutions that 
              make a real impact.
            </p>

            <p>
              Outside of work, I enjoy the occasional swim, playing table tennis, and I'm a 
              proud tech enthusiast. I've watched every <span className="text-[var(--accent)]">WWDC</span> keynote 
              and I'm always excited to explore what's next in technology.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <Code size={18} className="text-[var(--accent)]" />
              <p className="text-sm font-semibold text-[var(--text-primary)] tracking-wide uppercase">
                Technologies I've learned along the way
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1.5 text-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-full text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { icon: MapPin, label: "Based in", value: "Sydney, AU" },
              { icon: GraduationCap, label: "Studying", value: "CS + AI at UNSW" },
              { icon: Briefcase, label: "Working at", value: "AI Startup" },
              { icon: Heart, label: "Hobbies", value: "Swimming, Ping Pong" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-center"
              >
                <item.icon size={20} className="mx-auto text-[var(--accent)] mb-2" />
                <p className="text-xs text-[var(--text-muted)] mb-1">{item.label}</p>
                <p className="text-sm font-medium text-[var(--text-primary)]">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
