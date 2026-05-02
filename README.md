# Aondre Franklin — Professional Portfolio

Personal portfolio website for **Aondre Franklin**, Senior DevOps Engineer at Bank of America. Built to give recruiters, hiring managers, and collaborators a clear picture of my experience, projects, and technical background.

---

## What's on the site

### Home

A quick overview of who I am and what I do — key metrics from my work (62% deployment time reduction, 8h → 3h pipeline improvement), core competencies, and featured work highlights.

### About

My full professional background — work history timeline from contractor to senior technical lead at Bank of America, technical skills by category, certifications in progress, and a summary of what I'm currently working on.

### Projects

Key initiatives and tools I've built across enterprise DevOps and personal development — including the enterprise hotfix pipeline, MSI-to-ZIP deployment migration, release management platform, and more. Each entry covers the problem, tools used, and measurable impact.

### Blog

Writing about DevOps, automation, cloud architecture, career progression, and lessons from working in enterprise financial infrastructure. Topics include CI/CD pipeline strategy, Ansible, PowerShell scripting, AWS, and more.

### Contact

A contact modal for recruiters, collaborators, or anyone who wants to get in touch — routes directly to my inbox via the Resend API.

---

## Tech stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Framework  | Next.js 14 (App Router)   |
| Language   | TypeScript                |
| Styling    | CSS Modules               |
| Icons      | Lucide React              |
| Blog       | MDX + Contentlayer        |
| Email      | Resend API                |
| Fonts      | Plus Jakarta Sans + Inter |
| Deployment | Netlify                   |

---

## Project structure

```
app/                  # Pages and API routes — each folder is a URL
├── page.tsx          # Home
├── about/            # About page
├── projects/         # Projects page
├── blog/             # Blog index + individual post pages
└── api/contact/      # Email handler — server side only

components/           # Reusable UI components
├── Sidebar.tsx       # Shared navigation
├── ContactModal.tsx  # Contact form modal
└── ui/               # Small components — StatCard, ProjectCard, BlogCard

content/posts/        # Blog posts — written in MDX

lib/                  # Content as typed TypeScript data
├── resume-data.ts    # Work history, skills, certifications
└── projects-data.ts  # Project details and impact metrics

styles/
└── prose.module.css  # Blog post typography
```

---

## Running locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment variables

Create a `.env.local` file in the root of the project and add the following. This file is gitignored and should never be committed.

```
RESEND_API_KEY=your_api_key_here
```

Get a free API key at [resend.com](https://resend.com).

---

## Deployment

This site is deployed on **Netlify**, connected to this GitHub repository. Every push to `main` triggers an automatic deployment.

Before deploying, add `RESEND_API_KEY` to your Netlify environment variables under **Site settings → Environment variables**. Without this the contact form will fail silently in production.

---

## Contact

- **Email** — aondref@gmail.com
- **LinkedIn** — [linkedin.com/in/aondrefranklin](https://linkedin.com/in/aondrefranklin)
- **GitHub** — [github.com/aondrefranklin](https://github.com/aondrefranklin)
