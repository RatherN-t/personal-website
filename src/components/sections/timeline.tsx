"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/ui/reveal";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "education" | "achievement" | "project";
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2016",
    title: "Kumon Honor Roll",
    description: "Advanced Student Honor Roll — 6 months ahead in mathematics",
    type: "achievement",
  },
  {
    year: "2019",
    title: "SOF IGK Olympiad",
    description: "Class topper, silver medal in national olympiad",
    type: "achievement",
  },
  {
    year: "2019",
    title: "WRO South India",
    description: "World Robotics Olympiad — EV3 robot mission with team of 4",
    type: "project",
  },
  {
    year: "2019",
    title: "ROBO-G Internship",
    description: "Summer intern mentoring students in robotics camp",
    type: "education",
  },
  {
    year: "2020",
    title: "NIAS Selection",
    description: "1 of 30 selected nationwide — weekend classes with IISc professors",
    type: "achievement",
  },
  {
    year: "2020",
    title: "IISc Open House",
    description: "Presented road-divider prototype to 100+ visitors",
    type: "project",
  },
  {
    year: "2022",
    title: "5K Cyclothon",
    description: "Cancer awareness event with CyteCare",
    type: "achievement",
  },
  {
    year: "2024",
    title: "UNSW Sydney",
    description: "Started B.S. Computer Science — AI Major, Finance Minor",
    type: "education",
  },
  {
    year: "2027",
    title: "Graduation",
    description: "Expected completion of Computer Science degree",
    type: "education",
  },
];

const typeColors = {
  education: "bg-blue-500",
  achievement: "bg-amber-500",
  project: "bg-emerald-500",
};

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  return (
    <div className="relative flex gap-6 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-[7px] top-4 bottom-0 w-px bg-[var(--border)]" />

      {/* Dot */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className={`w-4 h-4 rounded-full ${typeColors[event.type]} ring-4 ring-[var(--bg-primary)]`}
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <span className="text-sm font-mono text-[var(--accent)]">{event.year}</span>
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            {event.title}
          </h3>
        </div>
        <p className="text-[var(--text-secondary)] text-sm">{event.description}</p>
      </div>
    </div>
  );
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="py-24 md:py-32 px-6 bg-[var(--bg-secondary)]/50"
    >
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-4">
              Timeline
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Key milestones from early achievements to current studies.
            </p>
          </div>
        </Reveal>

        {/* Legend */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {Object.entries(typeColors).map(([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${color}`} />
                <span className="text-sm text-[var(--text-muted)] capitalize">{type}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Animated progress line */}
          {!prefersReducedMotion && (
            <motion.div
              style={{ height: progressHeight }}
              className="absolute left-[7px] top-0 w-px bg-gradient-to-b from-[var(--accent)] to-[var(--accent-glow)] z-0"
            />
          )}

          <StaggerReveal>
            {timelineEvents.map((event, index) => (
              <StaggerItem key={index}>
                <TimelineItem event={event} index={index} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
