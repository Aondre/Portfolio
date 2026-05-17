# Professional Portfolio — Building Blocks

Complete step-by-step breakdown for building the professional portfolio site.
Work through each phase in order. Do not move to the next phase until the current one is fully working.

---

## Phase 0 — Foundation (Do this first, before anything else)

### globals.css

**What it is:** The only CSS file that isn't scoped. Affects the entire site.

**Steps:**
1. Paste Josh Comeau's CSS reset at the top — read every line before pasting (joshwcomeau.com/css/custom-css-reset)
2. Define your color palette as CSS variables on :root
3. Define spacing scale, border radius, and sidebar width as variables
4. Set base body styles — background, text color, font, line-height

**Your color variables:**
```css
:root {
  --white:      #FFFFFF;
  --blue:       #2563EB;
  --lblue:      #60A5FA;
  --bg:         #F1F5F9;
  --navy:       #0F172A;
  --slate:      #334155;
  --muted:      #64748B;
  --border:     #E2E8F0;
  --blue-light: #EFF6FF;
  --sp-xs: 4px;   --sp-sm: 8px;
  --sp-md: 16px;  --sp-lg: 24px;  --sp-xl: 40px;
  --r-sm: 6px;    --r-md: 10px;   --r-lg: 14px;
  --sidebar-w: 230px;
}
```

**CSS skill focus:** CSS custom properties — defining with -- and using with var()

**Done when:** Dev server runs with no errors and you can reference var(--blue) in any module file.

---

### Fonts — Plus Jakarta Sans + Inter

**Steps:**
1. Import both fonts from next/font/google in layout.tsx
2. Assign each a CSS variable name (variable: '--font-display', variable: '--font-body')
3. Apply both className values to the html element
4. Add --font-display and --font-body to your :root in globals.css

**CSS skill focus:** How next/font works and why it's better than a Google Fonts link tag

**Done when:** You can set font-family: var(--font-display) in any module file and see Plus Jakarta Sans render.

---

### Data files — lib/ folder

**Why first:** Write your content as data before you write any markup. Pages import and map over this data — keeps your markup clean.

**Steps:**
1. Create lib/resume-data.ts — work history (4 roles), skills by category (4 categories), certifications (3)
2. Create lib/projects-data.ts — all 6 projects, each with title, description, category, tools array, status, impact

**TypeScript skill focus:** Defining interfaces — the shape of each data object. WorkItem, Project, SkillCategory.

**Done when:** No TypeScript errors in either file. Your data matches the content in the HTML prototype.

---

## Phase 1 — Layout (The frame everything lives inside)

### layout.tsx — root layout shell

**Steps:**
1. Set up two-column structure — sidebar (fixed left) and main content (margin-left: var(--sidebar-w))
2. Import and apply fonts to the html element
3. Add metadata export — title and description for SEO
4. Import Sidebar and Topbar components here so they appear on every page

**CSS skill focus:** position: fixed, margin-left to offset content from a fixed sidebar

```css
/* layout.module.css */
.wrapper { display: flex; }
.sidebar {
  width: var(--sidebar-w);
  min-height: 100vh;
  position: fixed;
  top: 0; left: 0;
  background: var(--blue);
}
.main {
  margin-left: var(--sidebar-w);
  flex: 1;
  min-height: 100vh;
}
```

**Done when:** Blue sidebar appears on the left and content shifts right automatically on every page.

---

### Sidebar component

**Steps:**
1. Build static structure first — logo at top, nav links in middle, footer with availability badge and social links at bottom
2. Use Flexbox column with justify-content: space-between to push footer to bottom
3. Add 'use client' at the top — needed for usePathname
4. Import usePathname from next/navigation — returns the current URL path
5. Compare pathname against each link's href to apply the active class
6. Style the active state — white text, subtle background, white left border using ::before pseudo-element

**React/Next.js skill focus:** usePathname hook, 'use client' directive, clsx for conditional class names

```tsx
'use client'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const pathname = usePathname()
// In JSX:
className={clsx(styles.link, pathname === '/about' && styles.active)}
```

**Done when:** Clicking each nav link highlights the correct item and updates as you navigate.

---

### Stub all four pages

**Steps:**
1. Create app/about/page.tsx, app/projects/page.tsx, app/blog/page.tsx
2. Each needs only a basic export default function returning a heading
3. Click every nav link and confirm the URL changes and the right heading appears

**Done when:** All four routes work and active nav state updates correctly on each page.

---

## Phase 2 — Home Page

### Hero section

**Steps:**
1. Two-column CSS Grid — grid-template-columns: 1fr 320px
2. Left column: eyebrow label, large headline, description paragraph, two buttons
3. Right column: four StatCard components stacked vertically
4. Headline uses var(--font-display), large size (44px+), tight letter-spacing
5. One word in headline wrapped in a span with color: var(--blue)
6. Primary button — solid blue. Secondary button — transparent with lblue border
7. Both buttons have cursor: pointer and smooth hover transitions

**CSS skill focus:** CSS Grid for two-column layout, transition property for hover animations

**Component to build:** StatCard.tsx in components/ui/ — takes icon (Lucide), number, and label as props

---

### Tech stack chips

**Steps:**
1. Section eyebrow label with a line extending right (::after flex: 1)
2. Store tech stack as a string array in the page file
3. Use .map() to render each chip
4. Hover state changes border to var(--blue)

**React skill focus:** Rendering lists with .map() in JSX

---

### Featured work cards

**Steps:**
1. Two-column CSS Grid — grid-template-columns: 1fr 1fr
2. Each card: thumbnail area, tag, title, description, tech chips
3. Hover — border changes to var(--lblue), card lifts with transform: translateY(-3px)
4. Wrap both transitions in the transition property

**Done when:** Hero renders correctly, stat cards show real data, tech chips render from array, cards have working hover states.

---

## Phase 3 — About Page

### Two-column layout with sticky card

**Steps:**
1. CSS Grid — grid-template-columns: 260px 1fr
2. Left profile card: position: sticky, top: 76px (clears the topbar)
3. Profile card contains — initials avatar, name, role, info rows, two buttons

**CSS skill focus:** position: sticky — stays in view while the right column scrolls past it

---

### Work history timeline

**Steps:**
1. Import workHistory from lib/resume-data.ts
2. Each timeline item is a CSS Grid with two columns — date left, content right
3. Vertical connecting line is an ::after pseudo-element on each item
4. The dot is a ::before pseudo-element on the content column
5. .map() over workHistory to render each item

**CSS skill focus:** Using ::before and ::after for decorative UI without extra HTML elements

---

### Skills grid + certifications

**Steps:**
1. Import skills from lib/resume-data.ts
2. Map over categories, then map over skills inside each — nested .map()
3. Cert cards use an object lookup to map status to a CSS class

```tsx
const statusClass = {
  'In progress': styles.badgeProgress,
  'Completed':   styles.badgeDone,
}
// Use: className={statusClass[cert.status]}
```

**Done when:** Profile card is sticky, timeline renders from data, nested skills map correctly, cert badges show right color.

---

## Phase 4 — Projects Page

### Filter buttons

**Steps:**
1. Add 'use client' at the top — needed for useState
2. const [filter, setFilter] = useState('all')
3. Derive visible projects — filter the array on every render, don't store in state
4. Active filter button gets solid blue background via clsx

```tsx
const visible = projects.filter(p =>
  filter === 'all' || p.category === filter
)
```

**React skill focus:** Derived state — compute from existing state instead of storing duplicates

---

### Project cards

**Steps:**
1. Build ProjectCard.tsx in components/ui/ — takes a Project object as a prop
2. Card contains: thumbnail, tag, title, description, tool chips, status badge, impact callout
3. Map over visible array — always include key prop

```tsx
visible.map(project => (
  <ProjectCard key={project.title} project={project} />
))
```

**Done when:** All three filters work, cards show/hide correctly, status badges show correct colors.

---

## Phase 5 — Blog

Do this phase in one focused session. It has more moving parts than the other pages.

### Contentlayer setup

**Steps:**
1. npm install contentlayer next-contentlayer date-fns
2. Wrap next.config.js with withContentlayer
3. Create contentlayer.config.ts — define Post document type with title, date, description, category fields and a computed slug
4. Create one real .mdx post in content/posts/ with frontmatter at the top
5. Run dev server — confirm Contentlayer processes the file without errors

**Frontmatter format:**
```
---
title: Your post title
date: 2025-01-01
description: A short description
category: DevOps
---

Post content in Markdown here...
```

---

### Blog index page

**Steps:**
1. Import allPosts from 'contentlayer/generated'
2. Sort by date — newest first
3. First post = featured post (render larger)
4. Rest = BlogCard components in a grid
5. Use date-fns format() to display dates cleanly

---

### Individual post page — app/blog/[slug]/page.tsx

**Steps:**
1. Receive slug from params
2. Find matching post — if none, call notFound()
3. Use useMDXComponent to render the MDX body
4. Wrap content in a div with the prose class for typography
5. Style prose.module.css — target h1, h2, h3, p, code, pre, ul, li, blockquote
6. Add generateStaticParams — pre-builds every post at build time

```tsx
export function generateStaticParams() {
  return allPosts.map(post => ({ slug: post.slug }))
}
```

**Done when:** Index shows all posts, clicking a post renders it with styled typography, adding a new .mdx file creates a new post automatically.

---

## Phase 6 — Contact Modal

### Modal UI

**Steps:**
1. Modal open/close state lives in layout.tsx — pass openModal as a prop to Topbar
2. Overlay: position fixed, inset 0, semi-transparent background, z-index 200
3. Modal card centered on overlay using flexbox
4. Three close behaviors — X button, clicking overlay background, Escape key
5. Check e.target === overlay element to prevent closing when clicking the modal itself
6. Form fields: name, email, reason (select), message — controlled inputs (value + onChange)
7. Style focus state on inputs — border changes to var(--blue)

**CSS skill focus:** position: fixed with inset: 0 for full-screen overlays, z-index stacking context

---

### Resend email API

**Steps:**
1. npm install resend
2. Create .env.local — add RESEND_API_KEY=your_key
3. Create app/api/contact/route.ts — receives POST, validates fields, calls Resend
4. In ContactModal — fetch /api/contact on submit
5. Handle four states: idle, loading, success, error
6. Disable submit button during loading, show confirmation on success, show message on error

**Done when:** Modal opens/closes all three ways, email arrives in inbox on submit, all four form states render correctly.

---

## Phase 7 — Deploy to Netlify

### Pre-deploy checklist

1. Run npm run build — fix every error before pushing
2. Confirm .env.local and .next/ are in .gitignore
3. Replace all placeholder content with real data
4. Test every nav link and submit the contact form end to end

### Deploy steps

1. git add . && git commit -m "ready for deploy" && git push origin main
2. In Netlify — Add new site → Import from GitHub → Select repo
3. Build command: npm run build — Publish directory: .next
4. Site settings → Environment variables → Add RESEND_API_KEY
5. Domain management → Add custom domain → Update DNS records
6. SSL provisions automatically — live within 10–30 minutes

**Done when:** Site loads on your custom domain over HTTPS, contact form sends a real email, every page and link works in production.

---

## Quick reference — skills you'll build in each phase

| Phase | CSS Skills | React/Next.js Skills |
|---|---|---|
| Foundation | CSS variables, resets, base styles | next/font, TypeScript interfaces |
| Layout | position fixed, Flexbox | usePathname, 'use client', clsx |
| Home | CSS Grid, transitions, transforms | Props, .map(), Lucide icons |
| About | position sticky, pseudo-elements | Nested .map(), object lookups |
| Projects | — | useState, derived state, key prop |
| Blog | Prose typography | Dynamic routes, generateStaticParams, Contentlayer |
| Contact | position fixed overlay, z-index | Controlled inputs, async fetch, multiple UI states |
| Deploy | — | Build process, environment variables |
