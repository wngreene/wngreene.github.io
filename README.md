# wngreene.github.io

[W. Nicholas Greene's](https://wngreene.github.io) personal website, built with
[Astro](https://astro.build) and hosted on GitHub Pages.

Pushing to `master` builds and deploys automatically via GitHub Actions
(`.github/workflows/deploy.yml`). Build output is never committed.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # serve dist/ locally
```

## Layout

| Path | Purpose |
| --- | --- |
| `src/pages/` | One file per page. `index.astro` → `/`, `pubs.astro` → `/pubs.html` |
| `src/layouts/Base.astro` | Shared `<head>`, nav, and footer |
| `src/components/Publication.astro` | Renders a single publication entry |
| `src/data/publications.yaml` | Publication data — edit this to add a paper |
| `src/data/site.ts` | Site metadata and author links |
| `src/content.config.ts` | Schema that validates `publications.yaml` at build time |
| `public/` | Copied to the site root verbatim (PDFs, images, CSS) |

## Adding a publication

Add an entry to `src/data/publications.yaml` and set `order: 1`, bumping the
others. It appears on both the homepage and the publications page. The build
fails with an explicit error if a field is missing or an author key is unknown.

## URLs

Page URLs are `.html` files (`build.format: 'file'`) because published papers
cite `/pubs.html` and `/data/papers/*.pdf`. Do not change this.

## History

Pre-Astro state is preserved in two tags:

- `pre-astro-master` — the built HTML formerly served from `master`
- `jekyll-dev-final` — the Jekyll source formerly on the `dev` branch
