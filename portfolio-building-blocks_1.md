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
  --blue-50:    #EFF6FF;
  --blue-100:   #DBEAFE;
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

**lib/resume-data.ts** — contains three exports:
- `workHistory` — 4 roles at Bank of America (Contractor, Apprentice, TA2, Senior DevOps Engineer)
- `skillCategories` — 4 categories: CI/CD & DevOps, Automation & Scripting, Cloud & Infrastructure, Languages & Development
- `certifications` — 4 entries with status: 'In progress', 'Exam pending', 'Planned', 'Completed'

**lib/projects-data.ts** — contains one export:
- `projects` — 8 projects, each with title, description, category ('automation' | 'platform' | 'infra'), tools array, status ('Delivered' | 'In progress'), and impact string

**The 8 projects in order:**
1. Hotfix Release Automation Suite — automation — 93% time reduction
2. Grandparent Release Architecture — automation — API call reduction
3. XL Release UI Platform Tool — platform — in progress
4. Enterprise Hotfix Pipeline — platform — delivered
5. MSI-to-ZIP Deployment Migration — infra — 62% deployment reduction
6. .NET Legacy Runtime Removal Script — automation — delivered
7. 3rd Enterprise Datacenter Buildout — infra — delivered
8. XL Release Script Optimization — automation — delivered

**The 4 certification statuses and their badge colors:**
```ts
const statusClass = {
  'In progress': styles.badgeProgress,   // amber
  'Exam pending': styles.badgePending,   // amber
  'Planned':     styles.badgePlanned,    // gray
  'Completed':   styles.badgeDone,       // green
}
```

**TypeScript skill focus:** Defining interfaces, union types for limited values ('automation' | 'platform' | 'infra')

**Done when:** No TypeScript errors in either file. All 8 projects and 4 certs are in the data.

---

## Phase 1 — Layout (The frame everything lives inside)

### layout.tsx — root layout shell

**Steps:**
1. Set up two-column structure — sidebar (fixed left) and main content (margin-left: var(--sidebar-w))
2. Import and apply fonts to the html element
3. Add metadata export — title and description for SEO
4. Import Sidebar and Topbar components here so they appear on every page

**Metadata to use:**
```ts
export const metadata = {
  title: 'Aondre Franklin — Senior DevOps Engineer',
  description: 'Senior DevOps Engineer at Bank of America with 5 years driving enterprise CI/CD automation at scale.'
}
```

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

**Content:**
- Logo: "Aondre Franklin" (name) + "Senior DevOps Engineer" (role subtitle)
- Nav links: Home, About, Projects, Blog (4 links)
- Footer: "Open to opportunities" badge with pulsing green dot, LinkedIn and GitHub links

**Steps:**
1. Build static structure first — name/role at top, nav links in middle, footer at bottom
2. Use Flexbox column with justify-content: space-between to push footer to bottom
3. Add 'use client' at the top — needed for usePathname
4. Import usePathname from next/navigation
5. Compare pathname against each link's href to apply the active class
6. Style the active state — white text, subtle background, white left border using ::before pseudo-element
7. Pulsing green dot on availability badge — CSS animation

**React/Next.js skill focus:** usePathname hook, 'use client' directive, clsx for conditional class names

```tsx
'use client'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const pathname = usePathname()
className={clsx(styles.link, pathname === '/about' && styles.active)}
```

**Done when:** Clicking each nav link highlights the correct item, active state updates on navigate, availability dot pulses.

---

### Stub all four pages

**Routes to create:**
- app/page.tsx → yourdomain.com/
- app/about/page.tsx → yourdomain.com/about
- app/projects/page.tsx → yourdomain.com/projects
- app/blog/page.tsx → yourdomain.com/blog

**Steps:**
1. Create each folder and page.tsx with a basic heading
2. Click every nav link and confirm the URL changes and heading appears

**Done when:** All four routes work and active nav state updates correctly on each page.

---

## Phase 2 — Home Page

### Hero section

**Left column content:**
- Eyebrow: "Senior DevOps Engineer · Bank of America · 5 Years"
- Headline: "Automating enterprise infrastructure at scale." — "infrastructure" in blue
- Desc: Lead with senior technical lead role and CI/CD at scale
- Sub-desc: Java/Linux ownership, hotfix pipeline, cross-team strategy
- Two buttons: "View experience" (links to About) and "See projects →" (links to Projects)

**Right column — 4 StatCards:**
1. 93% — Hotfix process time reduction
2. 62% — Pipeline deployment time reduction
3. 15 — Dev teams supported
4. 500+ — Components personally onboarded

**Steps:**
1. Two-column CSS Grid — grid-template-columns: 1fr 320px
2. Build StatCard component in components/ui/ — takes icon (Lucide), number, label as props
3. Headline "infrastructure" wrapped in a span with color: var(--blue)
4. Primary button solid blue, secondary transparent with lblue border
5. Both buttons have hover transitions

**CSS skill focus:** CSS Grid, transition property for hover animations

**Component to build:** StatCard.tsx — icon + number + label, stat-icon uses var(--blue-50) background

---

### Platform scale section

This section is new — it sits between the hero and the skill chips. It communicates the real scale of your work at a glance.

**6 scale cards to render:**
1. 15 — Active dev teams supported
2. 12 — Organizations served
3. 400+ — Releases managed
4. 3,500+ — Components onboarded (team)
5. 500+ — Components I personally led
6. 3 — Enterprise datacenters

**Steps:**
1. Section eyebrow label: "Platform scale"
2. CSS Grid — grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
3. Each card: large blue number (var(--font-display), var(--blue)) + small muted label
4. Store the 6 scale items as an array and .map() over them

**React skill focus:** auto-fill with minmax — creates a responsive grid that reflows automatically

---

### Core competencies chips

**Skills to include (in this order — primary skills highlighted):**
- Primary (blue background): Jenkins, XL Release, Ansible Tower, CI/CD Pipelines, Python, PowerShell
- Standard: Bitbucket, Artifactory, Linux (RHEL), Windows Server, WebSphere, Apache Tomcat, AWS (SAA in progress), Terraform (trained), Kubernetes (studying), Next.js, React

**Steps:**
1. Section eyebrow: "Core competencies"
2. Store as two arrays — primarySkills and standardSkills — or one array with a `primary: boolean` field
3. .map() to render chips, applying the primary CSS class conditionally

---

### What I do — 4 highlight cards

**4 cards:**
1. Pipeline Engineering — "End-to-end CI/CD ownership" — Java/Linux pipeline delivery across Jenkins, XL Release, Ansible Tower
2. Automation — "Scripting & process automation" — Python/PowerShell, hotfix automation, XL Release UI tool
3. Release Management — "Hotfix pipeline SME" — enterprise hotfix pipeline, escalation point, SME bank-wide
4. Technical Leadership — "Senior lead & cross-team advisor" — standups, 3 contractors, consulting peer teams

**Steps:**
1. Section eyebrow: "What I do"
2. Two-column CSS Grid — grid-template-columns: 1fr 1fr
3. Each card: icon (Lucide), eyebrow label, title, description
4. Hover — border changes to var(--lblue), card lifts with translateY(-2px)

**Done when:** Hero renders correctly with real stats, scale grid shows 6 real numbers, chips render from data, highlight cards have working hover states.

---

## Phase 3 — About Page

### Two-column layout with sticky card

**Left profile card content:**
- Avatar: "AF" initials in blue rounded square
- Name: Aondre Franklin
- Role: Senior DevOps Engineer / Bank of America · Platform Engineering
- Info rows: Charlotte NC, 646-713-5852, aondref@gmail.com, github.com/aondrefranklin, "4 yrs 11 months · 3 promotions"
- Two buttons: "Get in touch" (opens modal), "Download resume"

**Steps:**
1. CSS Grid — grid-template-columns: 260px 1fr
2. Profile card: position: sticky, top: 76px
3. Each info row: Lucide icon + text, separated by border-bottom

**CSS skill focus:** position: sticky

---

### Professional summary

Write this as a short bio above the timeline — 3 paragraphs:
1. Lead with 93% hotfix time reduction and grandparent architecture — the strongest recent impact
2. Platform scale (15 teams, 12 orgs, 400+ releases) and the 62% pipeline improvement
3. What's coming next — SAA, Terraform, Kubernetes, XL Release UI tool

---

### Work history timeline

**4 timeline entries (import from lib/resume-data.ts):**

1. Apr 2024 – Present · DevOps Engineer (Senior-level) · Charlotte, NC
   - Senior lead, Java/Linux owner, leads standups, directs 3 contractors
   - 93% hotfix time reduction — automation suite in active use
   - Grandparent/parent/child architecture — reduced API calls, consolidated 5 release groups
   - Took over stalled Java/Linux projects with no prior Linux experience — unblocked all delays
   - Building XL Release UI platform tool in Python and Next.js

2. Feb 2023 – Apr 2024 · Technical Analyst II · Jersey City, NJ
   - Co-led enterprise pipeline migration — 62% deployment reduction (8h → 3h)
   - 3rd enterprise datacenter buildout
   - Framework products CICD onboarding (most critical tier)
   - Windows Server 2016 → 2019 migration + .NET remediation script

3. Jan 2022 – Feb 2023 · DevOps Apprentice · Jersey City, NJ
   - Early-stage CI/CD migration planning
   - Deployment support and triage

4. Jun 2021 – Jan 2022 · DevOps Engineer (Contractor) · Bronx, NY
   - Daily deployments for Merrill and Benefits Online
   - Post-deployment automation

**Steps:**
1. Import workHistory from lib/resume-data.ts
2. Each item: CSS Grid — date right-aligned left, content right with dots and connecting line
3. Vertical line is ::after on each item, dot is ::before on the content
4. .map() over workHistory — nested .map() for bullet points inside each role

**CSS skill focus:** pseudo-elements for the timeline dots and connecting line

---

### Technical skills

**4 categories (import from lib/resume-data.ts):**
1. CI/CD & DevOps — Jenkins, XL Release, Ansible Tower, Bitbucket, Artifactory, Release Management, SDLC, NPT Remediation
2. Automation & Scripting — Python, PowerShell, Bash, Ansible Playbooks, Ansible Inventories, JSON
3. Cloud & Infrastructure — AWS (SAA in progress), Terraform (trained, exam Q1 2027), Kubernetes (CKA planned Q2 2027), Windows Server 2016/2019, Linux (RHEL), WebSphere, Apache Tomcat, IIS
4. Languages & Development — Python, JavaScript, Java, React, Next.js, FastAPI, HTML/CSS

**Steps:**
1. Map over skillCategories
2. Nested .map() over skills inside each category
3. Highlight variant (blue background) for the primary skills

---

### Certifications

**4 entries with 4 badge statuses:**
1. AWS Solutions Architect Associate (SAA-C03) — "In progress" — amber badge
2. HashiCorp Terraform Associate (003) — "Exam pending" — amber badge (training done, exam Q1 2027)
3. Certified Kubernetes Administrator (CKA) — "Planned" — gray badge (studying via KodeKloud, exam Q2 2027)
4. Software Engineering — Per Scholas — "Completed" — green badge

**Note:** This is updated from the original — AWS cert is now SAA (Solutions Architect Associate), not CDA. Terraform training is complete at BofA, exam is pending. CKA is a new addition.

**Steps:**
1. Import certifications from lib/resume-data.ts
2. Render each as a card with icon, title, issuer, and status badge
3. Object lookup maps status string to CSS class

**Done when:** Sticky profile card works, timeline renders all 4 roles with bullets, nested skills map correctly, cert badges show correct color for each status.

---

## Phase 4 — Projects Page

### Filter buttons

**3 filters (updated from original):**
- All projects
- Automation (5 projects: hotfix automation suite, grandparent architecture, .NET script, XL Release optimization, and contact modal is dev so this changes)
- Platform (2 projects: XL Release UI tool, enterprise hotfix pipeline)
- Infrastructure (2 projects: MSI-to-ZIP migration, datacenter buildout)

**Note:** Categories changed from 'dev'/'3d' to 'automation'/'platform'/'infra' to reflect the actual nature of the work. Update your Project interface accordingly.

```ts
export interface Project {
  title:       string
  description: string
  category:    'automation' | 'platform' | 'infra'
  tools:       string[]
  status:      'Delivered' | 'Delivered · In use' | 'In progress'
  impact:      string
}
```

**Steps:**
1. 'use client' at top — needed for useState
2. const [filter, setFilter] = useState('all')
3. Derive visible array on every render
4. Active filter gets solid blue background

---

### Project cards — 8 total

**Build ProjectCard.tsx with these sections:**
- Header row: icon (Lucide) on the left, status badge on the right
- Body: title, description, tool chips, impact callout (blue tinted box)

**Status badge variants:**
```ts
const statusClass = {
  'Delivered':          styles.statusLive,   // green
  'Delivered · In use': styles.statusLive,   // green
  'In progress':        styles.statusWip,    // amber
}
```

**Impact callout box:** blue-50 background, blue-100 border, bold "Impact:" label followed by the impact string. This is what makes the cards recruiter-friendly — the outcome is immediately visible.

**Steps:**
1. Build ProjectCard.tsx in components/ui/ — takes a Project object as a prop
2. Map over visible projects array
3. Always include key prop — use project.title

**Done when:** All 4 filters work correctly, 8 cards render with real data, status badges and impact callouts display correctly.

---

## Phase 5 — Blog

Do this phase in one focused session.

### Contentlayer setup

**Steps:**
1. npm install contentlayer next-contentlayer date-fns
2. Wrap next.config.js with withContentlayer
3. Create contentlayer.config.ts — define Post document type with title, date, description, category, and computed slug
4. Create one real .mdx post in content/posts/ — use the hotfix automation post as your first one

**Your first real post (good one to start with):**
```
---
title: How I reduced our hotfix release process by 93% with Python
date: 2025-06-01
description: The problem, the design decisions, and the grandparent architecture.
category: Automation
---
```

**Frontmatter fields your schema needs:** title, date, description, category

---

### Blog index page

**Layout:**
- Featured post card at the top — larger, grid layout with decorative number on the right
- Section eyebrow: "All posts"
- Blog card grid below — repeat(auto-fill, minmax(260px, 1fr))

**6 planned posts (all currently "Coming soon"):**
1. How I reduced our hotfix release process by 93% with Python — Automation
2. What 5 years of enterprise CI/CD taught me about building reliable pipelines — DevOps
3. Jenkins vs XL Release: when to use which and how to use both — DevOps
4. From contractor to senior lead at the same company in under 4 years — Career
5. Pivoting from AWS CDA to Solutions Architect mid-study — here's why — Cloud
6. What it actually means to be a technical lead on a small DevOps team — Leadership

**Steps:**
1. Import allPosts from contentlayer/generated
2. Sort by date, newest first
3. First in sorted array = featured post
4. Rest = BlogCard grid
5. Use date-fns format() for clean dates

---

### Individual post page — [slug]

**Steps:**
1. Receive slug from params
2. Find matching post — if none, call notFound()
3. Use useMDXComponent to render MDX body
4. Wrap in prose class for typography
5. Style prose.module.css — h1, h2, h3, p, code, pre, ul, li, blockquote
6. Add generateStaticParams

```tsx
export function generateStaticParams() {
  return allPosts.map(post => ({ slug: post.slug }))
}
```

**Done when:** Index shows all posts, clicking a post renders with styled typography, new .mdx file = new post automatically.

---

## Phase 6 — Contact Modal

### Modal UI

**Form fields:**
- Name (text input)
- Email (email input)
- Reason (select): Job opportunity / recruiting, Collaboration or consulting, Technical question, Just saying hello
- Message (textarea)

**Note:** "Job opportunity / recruiting" is the first option — the primary audience for this site is recruiters.

**Steps:**
1. Modal open/close state in layout.tsx — pass openModal as a prop to Topbar's "Get in touch" button
2. Overlay: position fixed, inset 0, z-index 200, semi-transparent background
3. Centered modal card using flexbox on overlay
4. Three close behaviors — X button, clicking overlay background, Escape key
5. Check e.target === overlay to prevent closing when clicking modal card
6. All form fields are controlled inputs (value + onChange)
7. Focus state on inputs — border changes to var(--blue)

**CSS skill focus:** position: fixed with inset: 0, z-index stacking

---

### Resend email API

**Steps:**
1. npm install resend
2. Create .env.local — RESEND_API_KEY=your_key
3. Create app/api/contact/route.ts — POST handler that validates fields and calls Resend
4. In ContactModal — fetch('/api/contact') on submit
5. Handle four states: idle, loading, success, error
6. Disable submit button and show loading text during submission

**Done when:** Modal opens/closes all three ways, email arrives at aondref@gmail.com on submit, all four states render correctly.

---

## Phase 7 — Deploy to Netlify

### Pre-deploy checklist

1. Run npm run build — fix every error before pushing
2. Confirm .env.local and .next/ are in .gitignore
3. Verify all 8 project cards have real content
4. Verify cert badges show correct colors (amber for in progress/pending, gray for planned, green for completed)
5. Verify platform scale numbers are accurate
6. Test all 4 filter buttons on the projects page
7. Submit the contact form end to end — confirm email arrives

### Deploy steps

1. git add . && git commit -m "ready for deploy" && git push origin main
2. Netlify — Add new site → Import from GitHub → Select repo
3. Build command: npm run build — Publish directory: .next
4. Site settings → Environment variables → Add RESEND_API_KEY
5. Domain management → Add custom domain → Update DNS records
6. SSL provisions automatically — live within 10–30 minutes

**Done when:** Site loads on custom domain over HTTPS, contact form sends a real email, every page and link works in production.

---

## Data reference — what goes in each lib/ file

### lib/resume-data.ts

```ts
export interface WorkItem {
  company:   string
  role:      string
  location:  string
  period:    string
  bullets:   string[]
}

export interface SkillCategory {
  category: string
  skills:   { name: string; highlight: boolean }[]
}

export interface Certification {
  title:   string
  issuer:  string
  status:  'In progress' | 'Exam pending' | 'Planned' | 'Completed'
}

export const workHistory: WorkItem[] = [ /* 4 roles */ ]
export const skillCategories: SkillCategory[] = [ /* 4 categories */ ]
export const certifications: Certification[] = [ /* 4 certs */ ]
```

### lib/projects-data.ts

```ts
export interface Project {
  title:       string
  description: string
  category:    'automation' | 'platform' | 'infra'
  tools:       string[]
  status:      'Delivered' | 'Delivered · In use' | 'In progress'
  impact:      string
}

export const projects: Project[] = [ /* 8 projects */ ]
```

---

## Quick reference — what changed from the original plan

| Area | Original | Updated |
|---|---|---|
| Lead stat | 62% deployment reduction | 93% hotfix time reduction (stronger) |
| Home sections | Hero, chips, featured cards | Hero, platform scale grid, chips, highlight cards |
| Platform scale | Not in original | New section — 6 real numbers from brag document |
| Project count | 6 | 8 (added grandparent architecture + XL Release optimization) |
| Project categories | dev / 3d | automation / platform / infra |
| Certifications | 3 (AWS CDA, Terraform, Per Scholas) | 4 (AWS SAA, Terraform, CKA, Per Scholas) |
| AWS cert | CDA (Certified Developer) | SAA (Solutions Architect Associate) — pivoted |
| Terraform status | Training in progress | Training complete at BofA, exam pending Q1 2027 |
| CKA | Not in original | Added — studying via KodeKloud, exam planned Q2 2027 |
| Blog topics | General DevOps | Specific to actual work — hotfix automation, grandparent architecture, career progression |
| Cert badge statuses | progress / earned | progress / pending / planned / earned (4 variants) |

---

## Skills you'll build in each phase

| Phase | CSS Skills | React/Next.js Skills |
|---|---|---|
| Foundation | CSS variables, reset, base styles | next/font, TypeScript interfaces and union types |
| Layout | position fixed, Flexbox column | usePathname, 'use client', clsx |
| Home | CSS Grid, auto-fill/minmax, transitions | Props, .map(), StatCard component, Lucide icons |
| About | position sticky, ::before/::after pseudo-elements | Nested .map(), object lookup for badge colors |
| Projects | — | useState, derived state, union type categories, key prop |
| Blog | Prose typography | Dynamic routes, generateStaticParams, Contentlayer |
| Contact | position fixed overlay, inset, z-index | Controlled inputs, async fetch, four UI states |
| Deploy | — | Build process, environment variables, Netlify config |
