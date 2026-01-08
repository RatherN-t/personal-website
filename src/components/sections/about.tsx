"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { MapPin, GraduationCap, Briefcase, Heart } from "lucide-react";

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
              a first-year Computer Science student at <span className="text-[var(--accent)]">UNSW Sydney</span>, 
              majoring in Artificial Intelligence with a minor in Finance. I'm passionate about building 
              intelligent systems that bridge the gap between cutting-edge technology and real-world impact.
            </p>

            <p>
              My journey into tech started early — at 14, I was selected as one of <span className="text-[var(--text-primary)] font-medium">30 students nationwide</span> for 
              the National Institute of Advanced Studies (NIAS) program, attending weekend classes with 
              IISc professors. That experience sparked my love for prototyping and problem-solving.
            </p>

            <p>
              From building <span className="text-[var(--accent)]">shiftable road dividers</span> with LEGO EV3 and ultrasonic sensors, 
              to creating ML-powered rock-paper-scissors games, I thrive at the intersection of 
              hardware, software, and human-centered design.
            </p>

            <p>
              Currently, I'm working as an <span className="text-[var(--text-primary)] font-medium">AI Engineer Intern at Anthrobyte.ai</span>, 
              where I'm building AI-powered applications. When I'm not coding, you'll find me 
              mentoring students, exploring new technologies, or diving into the latest in AI research.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { icon: MapPin, label: "Based in", value: "Sydney, AU" },
              { icon: GraduationCap, label: "Studying", value: "CS + AI" },
              { icon: Briefcase, label: "Working at", value: "Anthrobyte.ai" },
              { icon: Heart, label: "Passionate about", value: "Robotics" },
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
