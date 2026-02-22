# Heba Alazzeh Portfolio

## Overview
Arabian Nights themed portfolio website for Heba Alazzeh - UC Berkeley CS student, Google SWE Intern, Stanford AI Researcher.

## Architecture
- **Frontend**: React + Vite single-page application with Tailwind CSS
- **Backend**: Express.js (minimal - serves static frontend)
- **Theme**: Dark mode Arabian Nights aesthetic with deep purples, midnight blues, and gold accents
- **Fonts**: Playfair Display (headings), Inter (body), Amiri (decorative), JetBrains Mono (code)

## Project Structure
- `client/src/pages/home.tsx` - Main portfolio page with all sections
- `client/src/App.tsx` - Root component, forces dark mode
- `client/src/index.css` - Theme tokens (Arabian Nights colors)
- `client/public/images/` - Hero background and pattern overlay images

## Sections
1. Hero - Full-screen with parallax, star field animation, company badges
2. About - Bio, animated organization logo carousel (20 orgs)
3. Education - UC Berkeley (4.0 GPA), College of San Mateo (4.0 GPA, Summa Cum Laude), combined coursework blurb
4. Experience - Tech-only timeline: Google, Snap (Evan Spiegel post link), Uber, Kodely, SMCCCD Web Services, Tessellations School
5. Research - Stanford ISL (AI pilot assistant, publication link) and Stanford Mineral-X (GitHub link)
6. Projects - 12 project cards with GitHub/live links (View More toggle, shows 6 initially)
7. Leadership & Involvement - 16 items: Stanford SERIS, Break Through Tech, Girls Who Code, CS Club VP, GDC Scholar, Harvard WECode, NVIDIA GTC, Columbia EngAGE, etc. (View More toggle, shows 6 initially)
8. Skills - Languages, Frameworks, Tools, Libraries, Databases
9. Certifications - 13 certificates (View More toggle, shows 6 initially)
10. Recommendations - Carousel with 3 recommendations (auto-advancing, prev/next controls)
11. Contact - Email, Follow on LinkedIn, GitHub links

## Key Design Decisions
- Dark mode only (Arabian Nights aesthetic)
- Gold primary color (hsl 42), deep purple backgrounds (hsl 260)
- Framer Motion animations with scroll-triggered reveals
- Geometric floating decorations and arabesque SVG ornaments
- Responsive with mobile hamburger menu

## Running
- `npm run dev` starts Express + Vite on port 5000
