// Cloudflare Worker — serves the static Astro build (via the ASSETS binding) and
// proxies /api/weather, fetching from Open-Meteo on the server and caching at the edge.
// The weather data source is never exposed to site visitors.

interface Env {
  ASSETS: { fetch: (input: Request | string) => Promise<Response> };
}

const LAT = 11.78333;
const LON = 78.21028;
const CACHE_SECONDS = 600;

function weatherUrl(): string {
  const params = new URLSearchParams({
    latitude: String(LAT),
    longitude: String(LON),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max',
    timezone: 'Asia/Kolkata',
    wind_speed_unit: 'kmh',
    forecast_days: '7'
  });
  return 'https://api.open-meteo.com/v1/forecast?' + params.toString();
}

async function handleWeather(ctx: ExecutionContext): Promise<Response> {
  const api = weatherUrl();
  const cacheKey = new Request(api);
  try {
    const hit = await caches.default.match(cacheKey);
    if (hit) return hit;
  } catch { /* cache unavailable — fall through to live fetch */ }

  let res: Response;
  try {
    res = await fetch(api, {
      cf: { cacheTtl: CACHE_SECONDS },
      headers: { 'User-Agent': 'yercaudlake-guide/1.0 (+https://yercaudlake.com)' }
    });
  } catch {
    return jsonError(502);
  }
  if (!res || !res.ok) return jsonError(502);

  const out = new Response(res.body, res);
  out.headers.set('content-type', 'application/json; charset=utf-8');
  out.headers.set('cache-control', `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`);
  out.headers.set('access-control-allow-origin', '*');
  try { ctx.waitUntil(caches.default.put(cacheKey, out.clone())); } catch { /* best-effort cache */ }
  return out;
}

function jsonError(status: number): Response {
  return new Response(JSON.stringify({ error: 'weather_unavailable' }), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
  });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/weather') return handleWeather(ctx);
    // All other requests are served from the static Astro build.
    return env.ASSETS.fetch(request);
  }
};
