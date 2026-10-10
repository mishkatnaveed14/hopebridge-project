# HopeBridge Foundation — Charity Landing Page

A single-page charity / nonprofit landing page built with **React + Vite**, plain **CSS3**, and **GSAP + ScrollTrigger** animations. Inspired by the Helpass charity template layout.

## Getting started

```bash
npm install
npm run dev      # start the local dev server
npm run build    # create a production build in dist/
```

Requires Node.js 18 or newer.

## Project structure

```
src/
  components/        one file per page section
    Header.jsx       fixed header + mobile menu
    Hero.jsx         top banner with headline and image
    About.jsx        about section with facts
    Causes.jsx       donation cause cards with progress bars
    Volunteers.jsx   volunteer team cards
    Events.jsx       upcoming event cards
    Stats.jsx        animated impact counters
    Testimonials.jsx testimonial slider (prev/next)
    Blog.jsx         latest news cards
    Cta.jsx          donation banner with demo form
    Footer.jsx       footer with links, contact, socials
  data/
    siteData.js      ★ ALL editable text, links, stats, cards
  styles/
    global.css       ★ colors, fonts, container width, buttons
    header.css       header + navigation
    hero.css         hero section
    sections.css     all middle sections
    footer.css       footer
    responsive.css   tablet + mobile rules
  hooks/
    useGsapAnimations.js  ★ all GSAP/ScrollTrigger animations
  App.jsx            section order lives here
  main.jsx           entry point
public/
  assets/            all images (replace these with your own)
```

## Where to change things (customization guide)

| What you want to change | File to edit |
| --- | --- |
| Brand name, tagline, logo text | `src/data/siteData.js` → `brand` |
| Phone, email, address | `src/data/siteData.js` → `contact` |
| Menu labels | `src/data/siteData.js` → `navLinks` |
| Hero heading, text, buttons, image | `src/data/siteData.js` → `hero` |
| About text, date, location | `src/data/siteData.js` → `about` |
| Cause cards (title, raised/goal, text) | `src/data/siteData.js` → `causes.items` |
| Volunteer names & photos | `src/data/siteData.js` → `volunteers.members` |
| Events | `src/data/siteData.js` → `events.items` |
| Impact numbers | `src/data/siteData.js` → `stats` |
| Testimonials | `src/data/siteData.js` → `testimonials.items` |
| Blog posts | `src/data/siteData.js` → `blog.posts` |
| Footer text & social links | `src/data/siteData.js` → `footer` |
| Main colors (orange, green, cream…) | `src/styles/global.css` → `:root` variables |
| Fonts | `index.html` (Google Fonts link) + `--font-*` in `global.css` |
| Page width / section spacing | `--container-width`, `--section-spacing` in `global.css` |
| Button shape | `--radius-button` in `global.css` |
| Animations (speed, style) | `src/hooks/useGsapAnimations.js` |
| Section order | `src/App.jsx` |
| Images | replace files in `public/assets/` (keep the same filenames, or update the paths in `siteData.js`) |

## Notes

- The donation form in the CTA banner is a **visual demo only** — it validates the amount and shows a thank-you message, but no payment is processed.
- Animations respect `prefers-reduced-motion` and clean up on unmount.
- No CSS frameworks are used — everything is hand-written CSS with custom properties.
# softland-project
