# billionth-shit.org

A playful, minimal site built with Vite + React + Tailwind and shadcn-style components, served by a Cloudflare Worker with static asset hosting.

## Local dev

1. Install Node.js 18+.
2. Install deps: `npm i`
3. Run dev server: `npm run dev`

## Build

```
npm run build
```
Outputs static assets to `dist/`.

## Cloudflare Worker

- Worker script is in `worker/index.ts`.
- Static assets are deployed via Wrangler using the `[assets]` block in `wrangler.toml`.
- SPA routes fall back to `index.html` for client-side routing.

## Deploy

1. Login: `npx wrangler login` (or `npm exec wrangler login`)
2. Build: `npm run build`
3. Deploy (preview on workers.dev): `npm run cf:deploy`

To bind to your custom domain, either:
- Deploy with production env (routes are already set in `wrangler.toml`): `npm run cf:deploy -- --env production`
- Or use the Cloudflare Dashboard: Workers & Queues → your Worker → Triggers → Add Route → `billionth-shit.org/*`.

## Structure

- `/src/pages/*` – simple routes (Home, Lab, Notes, Projects, About, Contact)
- `/src/components/*` – header, footer, basic shadcn-style `Button`, theme toggle
- `/worker/index.ts` – Worker entry that serves static assets and SPA fallback

## Notes

- This uses a minimal shadcn-style setup without the CLI; feel free to add more components later.
- Replace placeholder copy and lists with your real content.
