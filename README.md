# CORE Dev

A release and development journal for CORE projects. Plain HTML, CSS, and a small JavaScript theme switcher. No framework, package installation, analytics, external fonts, or build step.

## Site structure

- `index.html`: the update index and project list.
- Root-level article `.html` files: complete, independently addressable articles.
- `style.css`: shared responsive layouts and theme colors.
- `theme.js`: System → Light → Dark theme control, persisted locally when storage is available.

## GitHub Pages

Repository: `iiankehn/core-dev` (public).
In **Settings → Pages**, use **Deploy from a branch**, branch **main**, folder **/(root)**. Every push to `main` publishes the static site.

Site: https://dev.iiankehn.com/
Relative URLs work with the GitHub Pages project path. The 404 page uses `<base href="/core-dev/">` to handle missing nested paths; change that to `/` if moving to a custom domain.

## Add an update

1. Copy an existing article in Root-level article `.html` files to a descriptive new `.html` filename.
2. Change its title, description, category, date, author, article body, and related-entry link. Use the actual release date and include a source/release link. Clearly identify work in progress and relevant known issues.
3. Add the article to the recent entries in `index.html`, ordered newest first. If it becomes the featured release, update the cover, date, headline, excerpt, and both links.
4. Commit and push to `main`. GitHub Pages publishes the updated HTML.

Articles render completely without JavaScript. Without JavaScript, the site follows the system color scheme. The theme button is progressively revealed when available. Main text is at least 16px; smaller type is used for metadata. Mobile, tablet, desktop, keyboard focus, reduced motion, and print styles are included.

## Included articles

- Slate 2026.10: Notes and Forge come together — October 7, 2026.
- Introducing CORE Dev — October 7, 2026.
- Acute Web 1.1 — October 5, 2026.
- Acute Web 1.0.1 — September 28, 2026.
- Acute Web 1.0 — September 28, 2026.

Release details were checked against the public Acute Web GitHub release notes on October 7, 2026. The 1.1 article includes the reported Waydroid startup issue rather than implying compatibility has been validated.

Slate 2026.10 details and download links were checked against the published `slate-2026-10` release in `iiankehn/slate-android` on October 7, 2026. The article explains both the in-place Notes upgrade and the separate standalone-Forge import path.

