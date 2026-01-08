---
applyTo: '**'
---

# Coding Preferences
- Framework: Next.js 16+ with App Router
- Styling: Tailwind CSS v4 with CSS custom properties for theming
- Animation: Motion (Framer Motion) v12+ with reduced motion support
- Smooth Scroll: Lenis library with custom provider
- TypeScript: Strict typing, use explicit types for motion variants
- Fonts: Inter (sans) + JetBrains Mono (mono) via next/font

# Project Architecture
- `/src/app`: Next.js App Router pages and layouts
- `/src/components`: Reusable React components
- `/src/components/sections`: Page section components (hero, experience, projects, etc.)
- `/src/components/providers`: Context providers (smooth-scroll)
- `/src/components/ui`: Base UI components (reveal, etc.)
- `/src/lib`: Utilities, hooks, and motion variants
- `/public`: Static assets
- `/public/projects/[name]/poster.svg`: Project poster images

# Design Tokens (Updated Dec 2025)
- Deep ink background: #08090a (--bg-primary)
- Card background: #111214 (--bg-card)
- Primary accent: Electric teal #06b6d4 (--accent)
- Warm accent: Coral #f97316 (--accent-warm)
- Purple accent: #a855f7 (--accent-purple)
- Aurora gradient background with noise texture
- Glass morphism for nav and cards
- Gradient borders using nested div technique

# Motion Patterns
- Enter duration: 500ms
- Standard transitions: 300ms
- Fast interactions: 150ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Stagger children: 0.05s delay
- 3D tilt effect: useMotionValue + useSpring + useTransform

# Solutions Repository
- Motion ease type errors: Use `[number, number, number, number]` tuple type
- Reduced motion: Check with `useReducedMotion()` hook from motion/react
- Section reveals: Use intersection observer with `useInView`
- Smooth scrolling: Use Lenis with SmoothScrollProvider wrapper
- Scroll-driven animation: Use useScroll + useTransform from motion/react
- Animated counters: Use useEffect with setInterval, check inView first
- Gradient borders: Wrap element in container with gradient bg, inner div has solid bg

# Key Components Created
- SmoothScrollProvider: Lenis integration with anchor link handling
- RoadDividerScene: Scroll-driven "wow scene" with SVG animation
- Experience: Work history cards with gradient accents
- Achievements: Animated stat counters with useInView trigger
- Projects: 3D tilt effect on hover using mouse position

# Deployment
- Platform: Vercel (recommended)
- Build command: next build
- Static export supported
- Images: Replace SVG placeholders in /public/projects/
