"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useReducedMotion } from "motion/react";

interface Line {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  length: number;
  baseAlpha: number;
  currentAlpha: number;
  delay: number;
}

interface ParticlePortraitProps {
  imageSrc?: string;
  className?: string;
}

export function ParticlePortrait({ 
  imageSrc = "/profile.jpg",
  className = ""
}: ParticlePortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const linesRef = useRef<Line[]>([]);
  const imageLoadedRef = useRef(false);
  const startTimeRef = useRef<number | null>(null);
  const [size, setSize] = useState(400);
  const prefersReducedMotion = useReducedMotion();

  // Responsive sizing
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setSize(Math.min(260, width - 40));
      } else if (width <= 768) {
        setSize(Math.min(320, width - 60));
      } else if (width <= 1024) {
        setSize(380);
      } else {
        setSize(450);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = size;
    const canvasHeight = size;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    let animationId: number;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offscreen.width = canvasWidth;
      offscreen.height = canvasHeight;

      const scale = 0.85;
      const imgAspect = img.width / img.height;

      let drawHeight = canvasHeight * scale;
      let drawWidth = drawHeight * imgAspect;

      if (drawWidth > canvasWidth * scale) {
        drawWidth = canvasWidth * scale;
        drawHeight = drawWidth / imgAspect;
      }

      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      offCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      const imageData = offCtx.getImageData(0, 0, canvasWidth, canvasHeight);
      const pixels = imageData.data;

      const lines: Line[] = [];
      const rowGap = size <= 320 ? 5 : 6;

      for (let y = 0; y < canvasHeight; y += rowGap) {
        let x = 0;
        while (x < canvasWidth) {
          const i = (y * canvasWidth + x) * 4;
          const a = pixels[i + 3];

          if (a > 128) {
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];
            const brightness = (r + g + b) / (3 * 255);

            // Skip white/very bright pixels (background)
            if (brightness > 0.85) {
              x += 4;
              continue;
            }

            // Invert brightness for dark-on-light images (darker = more visible)
            // Apply contrast boost to highlight face features
            const invertedBrightness = 1 - brightness;
            const contrastedBrightness = Math.pow(invertedBrightness, 0.7); // Boost mid-tones

            const lineLength = Math.floor(
              3 + brightness * (size <= 320 ? 10 : 15)
            );

            // Scatter effect for initial animation (skip if reduced motion)
            const scatterX = prefersReducedMotion ? 0 : (Math.random() - 0.5) * 300;
            const scatterY = prefersReducedMotion ? 0 : (Math.random() - 0.5) * 300;

            lines.push({
              x: x + scatterX,
              y: y + scatterY,
              targetX: x,
              targetY: y,
              vx: 0,
              vy: 0,
              length: lineLength,
              baseAlpha: 0.5 + brightness * 0.5,
              currentAlpha: prefersReducedMotion ? 0.5 + brightness * 0.5 : 0,
              delay: prefersReducedMotion ? 0 : Math.random() * 0.3,
            });

            x += lineLength + 3;
          } else {
            x += 4;
          }
        }
      }

      linesRef.current = lines;
      imageLoadedRef.current = true;
      startTimeRef.current = performance.now();
    };

    const draw = () => {
      animationId = requestAnimationFrame(draw);

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      if (!imageLoadedRef.current || !startTimeRef.current) return;

      const lines = linesRef.current;
      const mouse = mouseRef.current;
      const elapsed = (performance.now() - startTimeRef.current) / 1000;

      lines.forEach((p) => {
        const particleTime = elapsed - p.delay;

        if (particleTime < 0) return;

        // Fade in animation
        if (!prefersReducedMotion) {
          const fadeProgress = Math.min(particleTime / 1.5, 1);
          const easedFade = 1 - Math.pow(1 - fadeProgress, 2);
          p.currentAlpha = p.baseAlpha * easedFade;

          const moveProgress = Math.min(particleTime / 2.5, 1);
          const easedMove = 1 - Math.pow(1 - moveProgress, 3);

          // Mouse interaction - push particles away
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 80;

            if (dist < maxDist && dist > 0) {
              const force = (1 - dist / maxDist) * 2.5;
              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
            }
          }

          // Pull back to target position
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;

          const pullStrength = 0.01 + easedMove * 0.07;
          p.vx += dx * pullStrength;
          p.vy += dy * pullStrength;

          // Damping
          p.vx *= 0.92;
          p.vy *= 0.92;

          p.x += p.vx;
          p.y += p.vy;
        }

        // Draw the line particle - using accent teal color
        ctx.strokeStyle = `rgba(6, 182, 212, ${p.currentAlpha})`;
        ctx.lineWidth = size <= 320 ? 1.5 : 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.length, p.y);
        ctx.stroke();
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current.x = touch.clientX - rect.left;
      mouseRef.current.y = touch.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleLeave);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleLeave);

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleLeave);
    };
  }, [size, imageSrc, prefersReducedMotion]);

  return (
    <div className={`relative ${className}`}>
      {/* Glow effect behind */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/20 via-[var(--accent-purple)]/10 to-transparent rounded-full blur-3xl"
        style={{ transform: "scale(1.2)" }}
      />
      <canvas
        ref={canvasRef}
        className="relative z-10"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          cursor: "crosshair",
        }}
      />
    </div>
  );
}
