# wngreene.github.io

[W. Nicholas Greene's](https://wngreene.github.io) personal website, built with
[Astro](https://astro.build) and hosted on GitHub Pages.

Pushing to `master` builds and deploys automatically via GitHub Actions
(`.github/workflows/deploy.yml`). Build output is never committed.

This requires **Settings → Pages → Source = "GitHub Actions"**. If it is ever
set back to "Deploy from a branch", the site breaks: there is no built HTML in
the repository for Pages to serve.

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

The site was built with Jekyll until August 2026. Source lived on the `dev`
branch, was built locally, and the output was hand-copied onto `master`, which
Pages served directly. Two tags preserve that state:

- `pre-astro-master` — the built HTML formerly served from `master`
- `jekyll-dev-final` — the last commit of the Jekyll source on `dev`

The `dev` branch is retained but no longer used. Nothing reads from it, and
changes made there have no effect on the site.
