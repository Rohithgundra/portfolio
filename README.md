# Rohith Reddy

Portfolio site for a Technical Architect. Static Astro site, deployed free on GitHub Pages.

**Live:** https://rohithgundra.github.io/portfolio/

> The path is lowercase (`/portfolio/`) because GitHub Pages derives it from the repository name. The root `https://rohithgundra.github.io/` returns 404 unless a repository named `rohithgundra.github.io` exists.

## Local

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. GitHub Actions builds the site and publishes GitHub Pages.

In the repository settings, open **Pages** and set the source to **GitHub Actions**.

The workflow publishes a project site at `https://rohithgundra.github.io/portfolio/` (repository name lowercased). If this repository is renamed to `rohithgundra.github.io`, the site is served from the root `https://rohithgundra.github.io/` instead — `astro.config.mjs` detects this automatically and drops the `/portfolio` base.
