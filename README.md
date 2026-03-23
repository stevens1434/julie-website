# Julie Stevens Hiring Portfolio

Static Astro site for Julie Stevens' employer-facing DNP-FNP portfolio. The project is designed for GitHub Pages and keeps the site fast, fully static, and easy to maintain.

## Local Development

```bash
npm install
npm run dev
```

The local Astro dev server now defaults to [http://localhost:3000](http://localhost:3000) for both `npm run dev` and `npm start`.

## Environment Variables

Copy `.env.example` to `.env` for local development and set values as needed.

Use relative paths for local public assets so the build can prefix them correctly on GitHub Pages.

## Deployment

1. Create a GitHub repository and push this project.
2. In the repository settings, enable GitHub Pages with GitHub Actions.
3. Add repository variables if you want to configure the form endpoint, booking link, or asset paths without committing them.
4. Merge or push to `main` to trigger deployment.

## Content Updates

- Update structured content in `src/data/site.ts`.
- Replace or add public assets under `public/`.
- If Julie publishes a Google appointment schedule or Formspree form later, add those values through env vars and redeploy.
