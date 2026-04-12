# Agends

This document defines the operating rules for this personal website project.

## Project Type

- This is a **plain static website**.
- Source files are simple HTML/CSS/JS assets under `wwwroot/`.
- No backend, no server-side rendering, no database, no framework migration.

## Hosting Constraint

- Production hosting is **https://www.statichost.eu/**.
- The site should remain compatible with static file hosting.
- Do not introduce features that require Node.js runtime, PHP, Python, or any server process on the host.

## Change Rules

- Keep pages lightweight and fast.
- Prefer semantic HTML and minimal JavaScript.
- Keep external dependencies minimal; avoid build-only toolchains unless explicitly requested.
- Preserve existing URL/file structure unless a deliberate migration is approved.

## Content & Legal

- Keep personal profile/contact content accurate and up to date.
- Ensure legal/imprint content in `wwwroot/LegalNotice.html` remains present and accessible.

## Deployment Expectation

- Deployment should stay a simple static publish/upload flow to `statichost.eu`.
- Any proposed change must be reviewed against this question:
  - “Can this still be hosted as plain static files on statichost.eu?”
  - If not, the change is out of scope.
