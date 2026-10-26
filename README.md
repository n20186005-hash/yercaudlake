# Yercaud Lake & Boat House visitor guide

Independent visitor information in the existing Tamil and English languages. The lake and the boat-house service have different access considerations. Dated Maps information and district pages are attributed separately; confirm current service, boarding conditions and prices at the relevant counter.

The original static Astro/Tailwind architecture is retained. Tamil and English homepages, equivalent legal/settings pages and localized error pages are rendered as HTML. The existing native Cloudflare Worker handles `/api/weather` and serves static assets. Its default configuration targets the existing `yercaudlake` project, with the ASSETS binding and Worker-first routing.

Use the exact Node and pnpm versions declared by package.json. Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`, `pnpm audit:source` and `node scripts/verify-build.mjs`. The normal deployment path is `npx wrangler deploy`; its dry-run form validates the default entry without uploading. Do not change engine declarations or the frozen lockfile to fit another local runtime.

Weather uses fixed lake coordinates and an Open-Meteo model, not device geolocation or an on-site observation. Validated current and seven-day data have bounded fetch/body deadlines and a ten-minute native cache. The existing static build snapshot and client refresh remain; recent browser data may be reused with its provider time. A forecast does not establish boat operations, water level, permission to swim or trail access.

The existing analytics settings retain opt-in loading, immediate runtime withdrawal, verified complete-choice storage, failure feedback and a single loader after regrant. No consent banner was added. The privacy pages explain maps, weather storage, offline pages and possible separate hosting performance measurement.

Seven existing photographs are retained. `/CREDITS.txt` publishes each author, exact Commons source, licence and resizing/compression notice. Individual licences apply; historical photographs do not establish current conditions.

Local validation is separate from publication and production acceptance. Verify the deployed revision, HTTP/HTTPS and www entrances, true error status, required assets, both languages and actual mobile/desktop interactions before declaring a release complete.
