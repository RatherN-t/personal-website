"use client";

import { motion, useReducedMotion as useFramerReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { fadeInUp, fadeInUpReduced, staggerContainer } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useFramerReducedMotion();

  const variants = prefersReducedMotion ? fadeInUpReduced : fadeInUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
}

export function StaggerReveal({ children, className }: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReducedMotion = useFramerReducedMotion();
  const variants = prefersReducedMotion ? fadeInUpReduced : fadeInUp;

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
