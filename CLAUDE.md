# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project

[Company Name] — landing page for an AI consultancy that builds plug-and-play AI solutions for businesses. Content is placeholder (lorem ipsum) until copy is finalized.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Language:** TypeScript

## Git Workflow

- Push all changes to GitHub with clear, descriptive commit messages summarizing what changed and why.

## Font Preference

- **Always use SF Pro / system fonts** (`-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif`)
- Configure via `next/font/local` or Tailwind `fontFamily` — do NOT use Google Fonts or external font CDNs
- Do NOT override fonts inline with `style={{ fontFamily: ... }}` on individual elements

---

# Color System

## Palette

- **Background:** `#FFFFFF` (white)
- **Surface:** `#F5F5F5` (light gray — alternating sections, cards)
- **Border/Muted:** `#E5E5E5` (subtle dividers, borders)
- **Body text:** `#737373` (neutral gray)
- **Headings:** `#0A0A0A` (near-black)
- **Primary foreground:** `#171717` (dark text on light backgrounds)
- **Accent:** TBD — build the foundation in neutrals first. An accent color will be added later.

## Rules

- Do NOT use default Tailwind color palette (blue-500, indigo-600, etc.) as primary colors
- All interactive elements should use subtle hover states with gray shifts until an accent color is defined
- Keep it monochrome and clean — let typography and spacing create hierarchy

---

# Frontend & Design Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Design Philosophy
- **Less is more.** The site has access to world-class video and photo content. Let visuals do the talking.
- Design should be a clean, minimal frame that elevates the media — not compete with it.
- Keep text short and understated. Large visuals, minimal copy.
- Prefer full-bleed imagery/video, generous whitespace, and restrained typography.

## Content
- Use **lorem ipsum** placeholder text for all copy. Do not write real marketing copy.
- Structure sections logically (hero, services, about, contact) but keep text as placeholders.
- Placeholder media: use solid gray blocks or `https://placehold.co/WIDTHxHEIGHT` until real assets are provided.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).

## Local Server
- The dev server is Next.js. Check if it's running: `lsof -i :3000 | grep LISTEN`. If not, start it: `npm run dev`.
- The app runs at `http://localhost:3000`.
- If the server is already running, do not start a second instance.

## Brand Assets
- Check the `brand-assets/` folder before designing.
- Logo and brand guide will be added — use styled text as logo placeholder for now.

## Anti-Generic Guardrails
- **Colors:** Stick to the neutral palette defined above. No random Tailwind defaults.
- **Shadows:** Use subtle, layered shadows with low opacity. No flat `shadow-md`.
- **Typography:** SF Pro Display for headings, SF Pro Text for body. Tight tracking (`-0.035em`) on large headings, generous line-height (`1.7`) on body.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
- **Spacing:** Use intentional, consistent spacing tokens via Tailwind.
- **Depth:** Surfaces should have a layering system (base → elevated → floating).

## Screenshots
- **Always save screenshots to `temporary-screenshots/`** in the project root (e.g. `temporary-screenshots/screenshot-contact.png`)
- Never save screenshots to the project root or any other directory
- The `temporary-screenshots/` folder is gitignored — it's for review only

## Hard Rules
- Do not add sections, features, or content not in the spec
- Do not "improve" a reference design — match it
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not write real marketing copy — use lorem ipsum
