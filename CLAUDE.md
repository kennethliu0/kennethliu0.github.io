# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Kenneth Liu, built with Astro 5 and deployed to GitHub Pages via GitHub Actions.

## Commands

- `pnpm dev` — Start dev server
- `pnpm build` — Production build (outputs to `dist/`)
- `pnpm preview` — Preview production build locally

Package manager is **pnpm** (specified in `package.json` `packageManager` field).

## Architecture

Single-page Astro site with no client-side framework (pure Astro components + vanilla JS).

- `src/data/portfolio.ts` — All portfolio content (projects, employment, skills, social links, about text). This is the single source of truth for site content — update this file to change what appears on the site.
- `src/pages/index.astro` — Single page entry point; imports data and passes it as props to components.
- `src/layouts/Layout.astro` — HTML shell with meta tags (SEO, Open Graph, Twitter cards).
- `src/components/PortfolioContent.astro` — Main content: hero, projects grid, employment timeline, skills grid, footer.
- `src/components/Navigation.astro` — Sticky nav with scroll-based active section highlighting (vanilla JS).
- `src/styles/global.css` — All styling in one CSS file.
- `public/` — Static assets (favicon, resume PDF, profile banner image).

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages using the official `withastro/action`.

## Notes

- Skill icons are loaded from `cdn.jsdelivr.net` (devicons) — this domain is allowlisted in `astro.config.mjs` for image optimization.
- TypeScript is configured with Astro's strict preset and React JSX settings (in `tsconfig.json`), though no React components are currently used.
