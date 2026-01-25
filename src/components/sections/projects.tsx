"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";
import { Play, ArrowUpRight, ExternalLink } from "lucide-react";
import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  highlight: string;
  stat: string;
  statLabel: string;
  image: string;
  videoUrl?: string;
  link?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Price Intelligence System",
    description:
      "Web-based pipeline that takes a product name and country as input, scrapes global listings via Serper API, and uses AI guardrails to validate, filter, and normalise noisy price data. Outputs reliable min/median/max prices for pricing decisions.",
    tags: ["Python", "Serper API", "Data Pipeline", "AI Validation"],
    highlight: "End-to-end pipeline",
    stat: "3",
    statLabel: "Price metrics",
    image: "/projects/price-intelligence/poster.svg",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    title: "Property Yield Prediction",
    description:
      "XGBoost regression model to predict rental yields for investment properties. Includes SHAP explainability for feature importance analysis and a FastAPI inference endpoint for real-time predictions.",
    tags: ["XGBoost", "SHAP", "FastAPI", "ML Pipeline"],
    highlight: "Explainable ML",
    stat: "API",
    statLabel: "Inference",
    image: "/projects/property-yield/poster.svg",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
  },
  {
    title: "Legal Document Analysis",
    description:
      "Multi-agent RAG pipeline for automated legal due diligence. Uses LangChain for orchestration and Qdrant for vector storage to extract and summarise key information from PDF contracts.",
    tags: ["LangChain", "Qdrant", "RAG", "Document AI"],
    highlight: "Multi-agent RAG",
    stat: "PDF",
    statLabel: "Input format",
    image: "/projects/legal-analysis/poster.svg",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    title: "Gesture Recognition",
    description:
      "Real-time computer vision system that classifies rock-paper-scissors hand gestures from webcam input. Built as a complete ML pipeline from data capture to model inference.",
    tags: ["Computer Vision", "Python", "OpenCV", "ML"],
    highlight: "Real-time CV",
    stat: "Live",
    statLabel: "Webcam input",
    image: "/projects/gesture-recognition/poster.svg",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--accent)]/30"
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`} />
        
        {/* Project number */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[var(--bg-primary)]/80 backdrop-blur-sm flex items-center justify-center border border-[var(--border)]">
          <span className="text-sm font-bold text-[var(--text-primary)]">0{index + 1}</span>
        </div>

        {/* Stat badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[var(--bg-primary)]/80 backdrop-blur-sm border border-[var(--border)]">
          <p className="text-lg font-bold text-[var(--accent)]">{project.stat}</p>
          <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{project.statLabel}</p>
        </div>
      </div>

      <div className="relative p-6" style={{ transform: "translateZ(20px)" }}>
        {/* Highlight badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" />
          <span className="text-xs font-medium text-[var(--accent)]">
            {project.highlight}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm mb-5 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-secondary)] rounded-md border border-[var(--border)]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2.5 py-1 text-xs font-medium text-[var(--text-muted)]">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-glow)] transition-colors"
            >
              <Play size={16} className="fill-current" />
              Watch Demo
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
            >
              View Project
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, var(--accent)/8, transparent 40%)`,
        }}
      />
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-[var(--accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Featured Work
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
                Projects
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] max-w-md md:text-right">
              ML pipelines, data systems, and backend services. 
              Projects focused on practical engineering.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <ProjectCard project={project} index={index} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
