"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

// Tech stack with categories and visual properties - all compact now
const techStack = [
  { name: "Python", category: "Language", color: "#3776AB" },
  { name: "XGBoost", category: "ML", color: "#FF6F00" },
  { name: "FastAPI", category: "Backend", color: "#009688" },
  { name: "LangChain", category: "ML", color: "#61DAFB" },
  { name: "TypeScript", category: "Language", color: "#3178C6" },
  { name: "Scikit-learn", category: "ML", color: "#8B5CF6" },
  { name: "Google Cloud", category: "Cloud", color: "#06B6D4" },
  { name: "Streamlit", category: "Tools", color: "#F97316" },
  { name: "PostgreSQL", category: "Database", color: "#336791" },
];

function TechCard({ tech, index }: { tech: typeof techStack[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        transition: { duration: 0.15 } 
      }}
      className="relative group cursor-pointer"
    >
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300"
        style={{ backgroundColor: tech.color }}
      />
      
      {/* Card content */}
      <div className="relative p-3 bg-[var(--bg-card)]/80 backdrop-blur-sm border border-[var(--border)] rounded-xl overflow-hidden group-hover:border-[var(--border-hover)] transition-all duration-200">
        {/* Gradient accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)` }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <span 
            className="inline-block px-1.5 py-0.5 text-[8px] font-medium uppercase tracking-wider rounded mb-1.5 border"
            style={{ 
              color: tech.color, 
              borderColor: `${tech.color}40`,
              backgroundColor: `${tech.color}10`
            }}
          >
            {tech.category}
          </span>
          <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-white transition-colors">
            {tech.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Two column layout for About + Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: About Me */}
          <div>
            <Reveal>
              <div className="mb-6">
                <p className="text-[var(--accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">
                  About Me
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                  Who I Am
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I'm <span className="text-[var(--text-primary)] font-medium">Yash Mittal</span>, 
                  a Computer Science student majoring in <span className="text-[var(--accent)]">Artificial Intelligence</span> at 
                  the University of New South Wales.
                </p>

                <p>
                  Currently an <span className="text-[var(--text-primary)] font-medium">AI Engineer Intern at Anthrobyte.ai</span>, 
                  where I build internal tools, predictive models, and dashboards. I enjoy working across 
                  the full stack; from data pipelines to deployed services.
                </p>

                <p>
                  Outside of work, I enjoy swimming and table tennis.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: Tech Stack */}
          <div>
            <Reveal delay={0.15}>
              <div className="mb-6">
                <p className="text-[var(--text-muted)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">
                  Tech Stack
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                  Tools I Use
                </h3>
              </div>
            </Reveal>
            
            <div className="grid grid-cols-3 gap-2">
              {techStack.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
