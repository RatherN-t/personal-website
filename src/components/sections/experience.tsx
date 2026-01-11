"use client";

import { motion } from "motion/react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";
import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  current?: boolean;
  logo?: string;
  gradient: string;
}

const experiences: Experience[] = [
  {
    company: "Anthrobyte.ai",
    role: "AI Engineer Intern",
    period: "Dec 2025 – Present",
    location: "Remote",
    description: [
      "Working on human-first AI transformation projects",
    ],
    current: true,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    company: "Excel Academics Australia",
    role: "Academic Tutor",
    period: "Nov 2025 – Present",
    location: "Australia",
    description: [
      "Providing academic tutoring and mentorship",
      "Helping students develop problem-solving skills",
      "Creating personalized learning strategies",
    ],
    current: true,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    company: "ROBO-G",
    role: "Teaching Assistant / Intern",
    period: "Apr 2019 – Jan 2020",
    location: "India",
    description: [
      "Guided students ages 9–15 in robotics fundamentals",
      "Built and programmed LEGO EV3 robots for tasks like line following and warehouse automation",
      "Taught problem-solving approaches and multiple solution exploration",
    ],
    gradient: "from-amber-500 to-orange-500",
  },
];

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-[var(--accent)]/30"
    >
      {/* Gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${experience.gradient}`} />

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {experience.company}
            </h3>
            {experience.current && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-emerald-400">Current</span>
              </span>
            )}
          </div>
          <p className="text-[var(--accent)] font-medium">{experience.role}</p>
        </div>

        {/* Logo placeholder */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${experience.gradient} flex items-center justify-center`}>
          <Briefcase size={20} className="text-white" />
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[var(--text-muted)]">
        <div className="flex items-center gap-1.5">
          <Calendar size={14} />
          <span>{experience.period}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin size={14} />
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Description */}
      <ul className="space-y-2">
        {experience.description.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[var(--text-muted)] flex-shrink-0" />
            <span className={item.includes("PLACEHOLDER") ? "italic text-[var(--accent-warm)]" : ""}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-[var(--accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Career
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
                Experience
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] max-w-md md:text-right">
              From teaching robotics to building AI systems. Hands-on roles that shaped my skills.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 gap-6">
          {experiences.map((experience, index) => (
            <StaggerItem key={index}>
              <ExperienceCard experience={experience} index={index} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
