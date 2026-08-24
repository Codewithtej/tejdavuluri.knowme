# Deployment guide

This is a static Vite website. The production output is written to `dist` and can be hosted by any static hosting service.

## GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`.

1. Open the repository on GitHub.
2. Go to **Settings**, then **Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to the `main` branch, or run the workflow manually from the **Actions** tab.
5. GitHub will publish the generated `dist` folder.

The relative Vite base path lets the site work from either a project URL or a custom domain.

## Vercel

1. Import the GitHub repository into Vercel.
2. Vercel will detect the included `vercel.json` configuration.
3. Confirm the build command is `npm run build` and the output directory is `dist`.
4. Deploy.

## Netlify

1. Import the GitHub repository into Netlify.
2. Netlify will read `netlify.toml` automatically.
3. Deploy the site.

## Cloudflare Pages

1. Connect the repository to Cloudflare Pages.
2. Select the Vite framework preset.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Deploy.

## Custom domain

Add the domain in the hosting provider's dashboard first. The provider will show the exact DNS records to add at the domain registrar. Enable the provider's managed HTTPS certificate after DNS verification. No source code changes are normally required.

