# Forensic Authorship Consultant Landing Page

React/Vite/TypeScript site generated from Figma. Original design: https://www.figma.com/design/RMlIXUehkskkhwNjrwJ6WK/Forensic-Authorship-Consultant-Landing-Page

## Local development

```bash
pnpm install
pnpm run dev
```

## Deployment

### GitHub Pages (development/staging)

Any push to `main` triggers the GitHub Actions workflow and deploys automatically.

Live URL: `https://john6938.github.io/forensic-authorship/`

The `base` in `vite.config.ts` defaults to `/forensic-authorship/` via the `VITE_BASE` env var.

### cpanel (production)

Build with root-relative paths:

```bash
VITE_BASE=/ pnpm run build
```

Upload the contents of `dist/` to the public directory on cpanel. No other changes needed — the `VITE_BASE` override handles all asset paths.
