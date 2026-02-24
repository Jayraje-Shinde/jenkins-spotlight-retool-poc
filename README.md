# Jenkins Contributor Spotlight — Vite + React POC

A proof of concept for the [GSoC 2026 project: Retooling the Jenkins Contributor Spotlight](https://www.jenkins.io/projects/gsoc/).  
The goal is to replace the existing Gatsby-based pipeline with a simpler Vite + React stack.

**[Live Demo](https://jenkins-spotlight-retool-poc-p5v8.vercel.app/)** · **[Original Jenkins Spotlight](https://contributors.jenkins.io)**

---

## What This POC Does

- Parses contributor `.adoc` files at build time using `import.meta.glob` (eager) and Asciidoctor.js
- Normalises contributor data at load time so no `undefined` values leak into the UI
- Renders individual contributor pages via React Router with dynamic slug-based routing
- Fuzzy search on the landing page across `name`, `location`, and `slug` fields using Fuse.js
- Sanitises rendered AsciiDoc HTML with DOMPurify before DOM injection
- 404 handling — invalid slugs redirect to a not found page

## What This POC Does Not Do

This is scoped intentionally. The following are out of scope for the POC but would be part of a full GSoC implementation:

- CI/CD integration with the jenkins.io build pipeline
- Pagination on the landing page
- Full coverage of all production `.adoc` attributes from the real contributor files
- Accessibility audit
- Unit/integration tests

---

## Tech Stack

| Purpose | Library |
|---|---|
| Build tool | Vite |
| UI | React + TypeScript |
| Component library | Material UI |
| Routing | React Router |
| AsciiDoc parsing | Asciidoctor.js |
| Search | Fuse.js |
| Sanitisation | DOMPurify |

---

## Running Locally

```bash
git clone https://github.com/Jayraje-Shinde/jenkins-spotlight-retool-poc
cd jenkins-spotlight-retool-poc
npm install
npm run dev
```

Sample `.adoc` contributor files are included in `src/content/` so the app works out of the box.

---

## Key Technical Decisions

**`import.meta.glob` over a custom build script** — Vite's glob import runs at build time and outputs a static bundle. No server, no database, no GraphQL layer. The contributor data is fully resolved before the app ships, which is the same guarantee Gatsby's static generation provides but with far less configuration overhead.

**Fuse.js over a build-time search index** — For a POC with a small dataset this is fine. For production, a build-time index like Pagefind would be more appropriate and is worth evaluating.

**DOMPurify on AsciiDoc output** — Asciidoctor.js converts `.adoc` to raw HTML. Since that HTML is injected via `dangerouslySetInnerHTML`, sanitisation is non-negotiable even when the source files are trusted, as a defence-in-depth measure.

---

## Project Structure

```
src/
├── content/          # Sample .adoc contributor files
├── data/
│   └── contributors.ts   # Build-time AsciiDoc parsing and normalisation
├── pages/
│   ├── LandingPage.tsx
│   ├── Contributor.tsx
│   └── NotFoundPage.tsx
├── components/
│   └── Layout.tsx
├── types/
│   └── types.ts
└── theme/
    └── theme.ts
```

---

## Author

**Jayraje Shinde** — Second year CS student, AISSMS College of Engineering, Pune, India  
GSoC 2026 applicant
