"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { MapPin, GraduationCap, Briefcase, Heart } from "lucide-react";

// Tech stack with categories and visual properties
const techStack = [
  { name: "Python", category: "Language", color: "#3776AB", size: "large" },
  { name: "TensorFlow", category: "ML/AI", color: "#FF6F00", size: "medium" },
  { name: "FastAPI", category: "Backend", color: "#009688", size: "medium" },
  { name: "React.js", category: "Frontend", color: "#61DAFB", size: "large" },
  { name: "TypeScript", category: "Language", color: "#3178C6", size: "medium" },
  { name: "Agentic AI", category: "ML/AI", color: "#8B5CF6", size: "large" },
  { name: "MCP Servers", category: "Infrastructure", color: "#06B6D4", size: "medium" },
  { name: "Data Analysis", category: "Skills", color: "#F97316", size: "medium" },
  { name: "Excel", category: "Tools", color: "#217346", size: "small" },
];

function TechCard({ tech, index }: { tech: typeof techStack[0]; index: number }) {
  const sizeClasses = {
    large: "col-span-2 row-span-2",
    medium: "col-span-1 row-span-1",
    small: "col-span-1 row-span-1",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02, 
        y: -4,
        transition: { duration: 0.2 } 
      }}
      className={`${sizeClasses[tech.size as keyof typeof sizeClasses]} relative group cursor-pointer`}
    >
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
        style={{ backgroundColor: tech.color }}
      />
      
      {/* Card content */}
      <div className="relative h-full p-5 bg-[var(--bg-card)]/80 backdrop-blur-sm border border-[var(--border)] rounded-2xl overflow-hidden group-hover:border-[var(--border-hover)] transition-all duration-300">
        {/* Gradient accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)` }}
        />
        
        {/* Floating orb decoration */}
        <div 
          className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
          style={{ backgroundColor: tech.color }}
        />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <span 
              className="inline-block px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-full mb-3 border"
              style={{ 
                color: tech.color, 
                borderColor: `${tech.color}40`,
                backgroundColor: `${tech.color}10`
              }}
            >
              {tech.category}
            </span>
            <h3 className={`font-semibold text-[var(--text-primary)] group-hover:text-white transition-colors ${
              tech.size === "large" ? "text-xl md:text-2xl" : "text-base md:text-lg"
            }`}>
              {tech.name}
            </h3>
          </div>
          
          {/* Decorative icon/pattern for large cards */}
          {tech.size === "large" && (
            <div className="mt-4">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-8 rounded-full opacity-40"
                    style={{ backgroundColor: tech.color }}
                    animate={{ 
                      height: [32, 16, 24, 32],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

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

        {/* Modern Bento Grid Tech Stack */}
        <Reveal delay={0.15}>
          <div className="mt-16">
            <div className="text-center mb-8">
              <motion.p 
                className="text-sm font-semibold text-[var(--text-muted)] tracking-[0.2em] uppercase mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Tech Stack
              </motion.p>
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Tools I Work With
              </motion.h3>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[80px] md:auto-rows-[100px]">
              {techStack.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
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
