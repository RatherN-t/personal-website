# Placeholders to Replace

This document lists all placeholder content that needs to be replaced with your real assets before deploying.

## 🖼️ Images

### Profile Images
| File | Current State | Action Needed |
|------|---------------|---------------|
| `/public/profile/monogram.svg` | SVG "YM" monogram | Replace with your actual headshot or keep the monogram |
| `/public/profile/headshot.jpg` | Does not exist | Add a professional headshot (recommended 400x400+ pixels) |

### Project Images
| File | Current State | Action Needed |
|------|---------------|---------------|
| `/public/projects/road-dividers/poster.svg` | Placeholder SVG illustration | Replace with actual project screenshot/photo |
| `/public/projects/bridges/poster.svg` | Placeholder SVG illustration | Replace with actual Warren Truss bridge photo |
| `/public/projects/rps-ml/poster.svg` | Placeholder SVG illustration | Replace with ML RPS project screenshot |
| `/public/projects/iot-car/poster.svg` | Placeholder SVG illustration | Replace with Arduino car photo |

**Tip:** For best results, use 16:10 aspect ratio images (e.g., 800x500px, 1200x750px)

---

## 📝 Content to Verify

### Experience Section (`/src/components/sections/experience.tsx`)

**Anthrobyte.ai role:**
- Verify job title: "AI Engineer Intern"
- Verify period: "Dec 2025 – Present" (update if needed)
- Verify/update bullet points with actual responsibilities:
  - "Building AI-powered applications and features"
  - "Working with [specific technologies — add details]"
  - "Collaborating with the engineering team on [projects]"

### Hero Section (`/src/components/sections/hero.tsx`)
- Verify tagline text matches your preferred messaging
- Update floating badges if needed (currently: "UNSW Sydney", "AI Engineer Intern")

---

## 🔗 Links to Verify

| Location | Current Value | Action |
|----------|---------------|--------|
| Contact email | `y.mittal@student.unsw.edu.au` | Verify correct |
| LinkedIn | `https://www.linkedin.com/in/yash-mittal-993223352/` | Verify correct |
| GitHub | `https://github.com/RatherN-t` | Verify correct |
| Road Divider YouTube | `youtube.com/watch?v=YOUR_VIDEO_ID` | Replace with actual video ID |

---

## 🚀 Deployment Checklist

- [ ] Replace all placeholder images with real photos
- [ ] Update Anthrobyte.ai experience details
- [ ] Test all navigation links
- [ ] Test reduced motion accessibility (use system settings)
- [ ] Test on mobile devices
- [ ] Update OG image for social sharing (`/public/og-image.png`)
- [ ] Deploy to Vercel: `vercel deploy --prod`

---

## 📁 File Structure

```
personal_website/
├── public/
│   ├── profile/
│   │   ├── monogram.svg      ← Replace or keep
│   │   └── headshot.jpg      ← Add this
│   └── projects/
│       ├── road-dividers/poster.svg
│       ├── bridges/poster.svg
│       ├── rps-ml/poster.svg
│       └── iot-car/poster.svg
├── src/
│   ├── app/
│   │   ├── globals.css       ← Theme colors
│   │   ├── layout.tsx        ← Metadata & SEO
│   │   └── page.tsx          ← Section ordering
│   └── components/
│       └── sections/
│           ├── hero.tsx
│           ├── experience.tsx  ← Update Anthrobyte details
│           ├── projects.tsx
│           ├── road-divider-scene.tsx  ← WOW scene
│           ├── skills.tsx
│           ├── achievements.tsx
│           └── contact.tsx
└── PLACEHOLDERS.md           ← This file
```
