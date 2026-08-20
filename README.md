# Ramses Salazar — Portfolio

Professional portfolio for **Ramses Salazar**, Senior Backend Developer & Solutions Architect.

Built with Next.js, TypeScript, Tailwind CSS and deployed to GitHub Pages.

## Technologies

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** for icons
- Static export for GitHub Pages

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Build

```bash
npm run build
```

Static files will be exported to the `out/` directory.

## Deployment

The project is configured for GitHub Pages deployment via GitHub Actions.

### Setup

1. Replace `<GITHUB_USERNAME>` in `.github/workflows/deploy.yml` with your GitHub username
2. Set `NEXT_PUBLIC_BASE_PATH` in `.env.local` to `/<your-username>` (or leave empty for custom domain)
3. Enable GitHub Pages in repository settings (Source: GitHub Actions)
4. Push to `main` branch to trigger deployment

### Custom Domain

If using a custom domain, set `NEXT_PUBLIC_BASE_PATH=` (empty) in `.env.local` and remove the `basePath` and `assetPrefix` configuration.

## Configuration

The GitHub username is configured via the `NEXT_PUBLIC_BASE_PATH` environment variable in `.env.local`. Update this value when deploying to a different GitHub Pages URL.

## Structure

```
src/
  app/           # Next.js App Router pages and layouts
  components/    # React components
  data/          # Static data (profile, experience, projects, skills)
  lib/           # Utility functions and hooks
```

## Privacy

This portfolio intentionally excludes personal information such as phone numbers, physical addresses, passport numbers, and personal references. Only professional contact information is displayed.
