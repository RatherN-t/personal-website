"use client";

import { motion } from "motion/react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";
import { Code, Brain, Cpu, Users, Database, Globe, Wrench, MessageCircle } from "lucide-react";

interface SkillGroup {
  title: string;
  icon: typeof Code;
  skills: string[];
  gradient: string;
}

const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "C", "TypeScript", "Java", "SQL"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Data Analysis"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Hardware & IoT",
    icon: Cpu,
    skills: ["Arduino", "LEGO EV3", "Sensors", "Embedded Systems", "Robotics"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["React", "Next.js", "Node.js", "REST APIs", "Tailwind CSS"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Linux", "Docker", "VS Code", "Jupyter"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Public Speaking", "Mentoring", "Problem-Solving", "Collaboration"],
    gradient: "from-yellow-500 to-amber-500",
  },
];

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)]/30 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        {/* Header with icon */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${group.gradient}`}>
            <group.icon size={18} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            {group.title}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all duration-200 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[var(--accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
              Skills & Technologies
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From low-level hardware to high-level AI — I enjoy building across the entire stack.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <StaggerItem key={index}>
              <SkillCard group={group} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
