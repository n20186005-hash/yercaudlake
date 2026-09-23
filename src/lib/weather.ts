// Shared weather helpers for Yercaud Lake & Boat House.
// Used both at build time / server-render (WeatherSection) and in the bundled
// client script. All user-facing text is Tamil and strictly neutral — never
// mentions the data source, "free", "API key", etc.

export const WMO: Record<number, { t: string; i: string }> = {
  0: { t: 'வானம் தெளிவு', i: '☀️' },
  1: { t: 'பெரும்பாலும் தெளிவு', i: '🌤️' },
  2: { t: 'ஓரளவு மேகம்', i: '⛅' },
  3: { t: 'மேகமூட்டம்', i: '☁️' },
  45: { t: 'மூடுபனி', i: '🌫️' },
  48: { t: 'பனிமூட்டம்', i: '🌫️' },
  51: { t: 'லேசான தூறல்', i: '🌦️' },
  53: { t: 'தூறல்', i: '🌧️' },
  55: { t: 'அடர்ந்த தூறல்', i: '🌧️' },
  56: { t: 'உறைபனி தூறல்', i: '🌧️' },
  57: { t: 'உறைபனி தூறல்', i: '🌧️' },
  61: { t: 'லேசான மழை', i: '🌦️' },
  63: { t: 'மிதமான மழை', i: '🌧️' },
  65: { t: 'பலத்த மழை', i: '🌧️' },
  66: { t: 'உறைபனி மழை', i: '🌧️' },
  67: { t: 'உறைபனி மழை', i: '🌧️' },
  71: { t: 'லேசான பனி', i: '🌨️' },
  73: { t: 'மிதமான பனி', i: '🌨️' },
  75: { t: 'பனிப்பொழிவு', i: '❄️' },
  77: { t: 'பனித்துகள்', i: '❄️' },
  80: { t: 'லேசான மழை பொழிவு', i: '🌦️' },
  81: { t: 'மழை பொழிவு', i: '🌧️' },
  82: { t: 'பலத்த மழை பொழிவு', i: '⛈️' },
  85: { t: 'பனி மழை', i: '🌨️' },
  86: { t: 'பனி மழை', i: '🌨️' },
  95: { t: 'இடியுடன் கூடிய மழை', i: '⛈️' },
  96: { t: 'இடி & ஆலங்கட்டி', i: '⛈️' },
  99: { t: 'இடி & ஆலங்கட்டி', i: '⛈️' }
};

export function codeInfo(c: number): { t: string; i: string } {
  return WMO[c] || { t: 'மாறுபட்ட வானிலை', i: '🌤️' };
}

// km/h → Beaufort scale (used for "காற்று X நிலை").
export function kmhToBeaufort(kmh: number): number {
  const s = Number(kmh) || 0;
  const limits = [1, 5, 11, 19, 28, 38, 49, 61, 74, 88, 102, 117];
  let b = 0;
  for (let i = 0; i < limits.length; i++) {
    if (s >= limits[i]) b = i + 1;
    else break;
  }
  return b;
}

const TA_DAY = ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'];
const TA_MON = ['ஜன', 'பிப்', 'மார்', 'ஏப்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆக', 'செப்', 'அக்', 'நவ', 'டிச'];

export function dayLabel(d: string): { d: string; m: string } {
  try {
    const dt = new Date(d + 'T12:00:00');
    return { d: TA_DAY[dt.getDay()], m: dt.getDate() + ' ' + TA_MON[dt.getMonth()] };
  } catch {
    return { d: '', m: '' };
  }
}

export function fmtC(v: number): string {
  return Math.round(v) + '°';
}

export interface Advice {
  outfit: string[];
  plan: string[];
  items: string[];
  risk: string | null;
}

function isRain(c: number): boolean {
  return [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(c);
}
function isStorm(c: number): boolean {
  return [95, 96, 99].includes(c);
}
function isFog(c: number): boolean {
  return [45, 48].includes(c);
}

// Derive visitor-executable advice from the forecast.
// Risk is derived from current conditions (no official alert feed); it is NOT
// presented as a government warning. The lake/boat + hill-station context is
// covered (boat pauses, lightning on hills, ghat-road slip, misty viewpoints).
export function buildAdvice(data: any): Advice {
  const cur = data?.current;
  const day = data?.daily;
  const code: number = cur?.weather_code ?? day?.weather_code?.[0] ?? 0;
  const tmax: number | undefined = day?.temperature_2m_max?.[0];
  const tmin: number | undefined = day?.temperature_2m_min?.[0];
  const precip: number | undefined = day?.precipitation_probability_max?.[0];
  const uv: number | undefined = day?.uv_index_max?.[0];
  const wind: number | undefined = cur?.wind_speed_10m;
  const beaufort = wind != null ? kmhToBeaufort(wind) : 0;

  const outfit: string[] = [];
  const plan: string[] = [];
  const items: string[] = [];
  let risk: string | null = null;

  // --- Risk (top, red; derived from forecast, not an official alert) ---
  if (isStorm(code)) {
    risk = '⚠️ மின்னல் / இடியுடன் கூடிய மழை: மலை ஏறுதல், ஏரிப் படகு சவாரி, மரத்தடியில் நிற்பதைத் தவிர்க்கவும்; நீர் விளையாட்டுகள் நிறுத்தப்படலாம்.';
  } else if (code === 65 || code === 82 || (precip != null && precip >= 80)) {
    risk = '⚠️ பலத்த மழை: பள்ளத்தாக்கு / தாழ்வான பகுதிகளை விட்டு விலகுங்கள்; ஏரிப் படகு & சவாரிகள் நிறுத்தப்படலாம்.';
  } else if (beaufort >= 7) {
    risk = '⚠️ பலத்த காற்று: ஏரிக்கரை விளம்பு / பாறைகளை விட்டு விலகுங்கள்; படகுச் சேவைகள் நிறுத்தப்படலாம்.';
  } else if (isFog(code)) {
    risk = '⚠️ மூடுபனி: பார்வைத் திறன் குறைவு — மலைச்சாலை & ஏரிக் காட்சிகளில் மிகவும் எச்சரிக்கையாக இருங்கள்.';
  }

  // --- Precipitation ---
  if (precip != null && precip >= 60) {
    outfit.push('மழை வாய்ப்பு அதிகம்; நீர் புகாத ஆடை / மடித்துக்கொள்ளும் குடையை எடுத்துச் செல்லுங்கள்.');
    plan.push('மழை வாய்ப்பு இருப்பதால் உட்புற இடங்களை (அண்ணா பூங்கா குடில்கள் போன்றவை) முன்னுரிமைப்படுத்தவும்; படகு சவாரி நிறுத்தப்படலாம்.');
    items.push('☂️ குடை / மழைக்கோட்');
  } else if (isRain(code)) {
    outfit.push('இலேசான மழை — வழுக்கும் பாதைகளில் கவனமாக நடக்கவும்.');
    plan.push('திறந்தவெளி அனுபவம் குறைவாக இருக்கலாம்; படகுக்குப் பதில் ஏரிக்கரை நடையைத் தேர்வுசெய்யலாம்.');
    items.push('☂️ மடித்த குடை');
  }

  if (isStorm(code) || code === 65 || code === 82) {
    if (!items.includes('☂️ குடை / மழைக்கோட்')) {
      items.push('🧥 மழைக்கோட் (நீளக் குடை பரிந்துரைக்கப்படவில்லை — காற்று வலுவாக உள்ளது)');
    }
  }

  // --- Heat & UV (avoid duplicate sunscreen via if/else-if) ---
  if (tmax != null && tmax >= 32) {
    outfit.push('வெப்பம் அதிகம்; இலேசான, காற்றோட்டமான ஆடைகள் அணியவும்.');
    plan.push('நண்பகல் வெப்பத்தைத் தவிர்த்து காலை / மாலை நேரங்களில் ஏரிக்கரையில் இருங்கள்; படகு நேரத்தைக் குறைக்கவும்.');
    items.push('🧴 சூரியப் பாதுகாப்பு (SPF), 🕶️ கண்ணாடி, 💧 போதுமான குடிநீர்');
  } else if (uv != null && uv >= 5) {
    items.push('🧴 சூரியப் பாதுகாப்பு (SPF), 🕶️ கண்னாடி, 🧢 தொப்பி');
  } else if (code === 0 || code === 1) {
    items.push('🧴 சூரியப் பாதுகாப்பு (வெளிச்சம் அதிகம்)');
  }

  // --- Cold / diurnal range / hill chill ---
  const diff = tmax != null && tmin != null ? tmax - tmin : 0;
  if (diff > 8) {
    outfit.push('பகல்–இரவு வெப்ப வேறுபாடு அதிகம்; அணியும் / கழற்றும் வசதிக்கு ஒரு சிறிய ஜாக்கெட் எடுத்துச் செல்லுங்கள்.');
  }
  if (tmax != null && tmax <= 10) {
    outfit.push('வெப்பநிலை குறைவு; தடித்த ஜாக்கெட் / தலைக்கவசம் அணியவும்.');
    items.push('🧥 தடித்த ஜாக்கெட்');
  }
  if (tmin != null && tmin <= 14) {
    outfit.push('மலை வெப்பநிலை குளிர்ச்சியாக இருக்கலாம்; ஒரு சிறிய ஜாக்கெட் பயனுள்ளது.');
  }

  // --- Wind ---
  if (beaufort >= 5 && beaufort < 7) {
    plan.push('காற்று சற்று அதிகம்; ஏரிப் படகு / திறந்தவெளிச் சவாரிகள் நிறுத்தப்படலாம்.');
    items.push('🧢 தொப்பி காற்றில் பறக்கலாம் — இறுக்கமான தலைப்பாகை நல்லது');
  }

  // --- Clear / cloudy ---
  if (code === 0 || code === 1) {
    plan.push('வானம் தெளிவாக உள்ளது; ஏரிக்கரை நடை & சூரிய உதய / அஸ்தமனக் காட்சிகளுக்கு ஏற்றது.');
  } else if (code === 2 || code === 3) {
    plan.push('வெளிச்சம் மென்மையானது; புகைப்படம் எடுப்பதற்கும் நீண்ட நேர வெளிச்சுற்றுலாவுக்கும் ஏற்றது.');
  }

  // --- Defaults ---
  if (outfit.length === 0) outfit.push('வானிலை சாதாரணம்; வழக்கமான செல்லும் ஆடைகள் போதுமானது.');
  if (plan.length === 0) plan.push('இன்று வெளிச்சுற்றுலாவுக்கு ஏற்ற நாள்; ஏரிக்கரையில் படகு & நடைப்பயணத்தைத் திட்டமிடலாம்.');
  if (items.length === 0) items.push('வழக்கமான பயணப் பொருட்கள் போதுமானவை.');

  const uniq = (a: string[]) => Array.from(new Set(a));
  return { outfit: uniq(outfit), plan: uniq(plan), items: uniq(items), risk };
}

function block(title: string, arr: string[]): string {
  return `<div class="rounded-2xl bg-white/10 p-5"><h3 class="font-extrabold text-[#f4d98d]">${title}</h3><ul class="mt-3 space-y-2 text-sm leading-7 text-white/85">${arr
    .map((x) => `<li class="flex gap-2"><span class="text-[#9fe0c4]">✓</span><span>${x}</span></li>`)
    .join('')}</ul></div>`;
}

// Full advice HTML (risk banner + 3 labelled blocks + neutral derivation note).
export function renderAdvice(a: Advice): string {
  const risk = a.risk
    ? `<div class="mb-5 rounded-2xl bg-[#7a1f2b]/40 p-5 ring-1 ring-[#ff9aa6]/40"><p class="font-extrabold leading-7 text-[#ffd5da]">${a.risk}</p></div>`
    : '';
  const grid = `<div class="grid gap-5 md:grid-cols-3">${block('உடைப் பரிந்துரை', a.outfit)}${block(
    'விளையாட்டுத் திட்டம்',
    a.plan
  )}${block('உடன் எடுத்துச் செல்வது', a.items)}</div>`;
  const note =
    '<p class="mt-5 text-xs leading-6 text-white/45">இது வானிலை முன்னறிவிப்பிலிருந்து பெறப்பட்ட பரிந்துரை; அதிகாரப்பூர்வ வானிலை எச்சரிக்கைகளுக்கு உத்தியோகபூர்வ அறிவிப்புகளைப் பார்க்கவும்.</p>';
  return risk + grid + note;
}

export function renderCurrent(d: any): string {
  const c = d?.current;
  if (!c) return '';
  const ci = codeInfo(c.weather_code);
  const precip = d?.daily?.precipitation_probability_max?.[0];
  const beaufort = kmhToBeaufort(c.wind_speed_10m);
  return `<div class="flex h-full flex-col justify-between gap-6">
    <div class="flex items-center gap-5">
      <span class="text-6xl leading-none" aria-hidden="true">${ci.i}</span>
      <div><div class="text-5xl font-black">${fmtC(c.temperature_2m)}</div><p class="mt-1 font-extrabold text-[#f4d98d]">${ci.t}</p></div>
    </div>
    <dl class="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
      <div class="rounded-2xl bg-white/10 p-3"><dt class="text-white/60">உணர்வு</dt><dd class="mt-1 text-lg font-black">${fmtC(c.apparent_temperature)}</dd></div>
      <div class="rounded-2xl bg-white/10 p-3"><dt class="text-white/60">ஈரப்பதம்</dt><dd class="mt-1 text-lg font-black">${Math.round(c.relative_humidity_2m)}%</dd></div>
      <div class="rounded-2xl bg-white/10 p-3"><dt class="text-white/60">காற்று</dt><dd class="mt-1 text-lg font-black">${Math.round(c.wind_speed_10m)} km/h <span class="text-xs text-white/55">(${beaufort} நிலை)</span></dd></div>
      <div class="rounded-2xl bg-white/10 p-3"><dt class="text-white/60">மழை வாய்ப்பு</dt><dd class="mt-1 text-lg font-black">${precip != null ? precip + '%' : '—'}</dd></div>
    </dl>
  </div>`;
}

export function renderDays(d: any): string {
  const dl = d?.daily;
  if (!dl) return '';
  return dl.time
    .map((t: string, i: number) => {
      const lb = dayLabel(t);
      const ii = codeInfo(dl.weather_code[i]);
      const pr = dl.precipitation_probability_max[i];
      const uv = dl.uv_index_max?.[i];
      return `<div class="rounded-2xl bg-white/10 p-4 text-center ring-1 ring-white/15">
        <p class="font-extrabold text-[#f4d98d]">${lb.d}</p>
        <p class="text-xs text-white/55">${lb.m}</p>
        <div class="my-3 text-3xl" aria-hidden="true">${ii.i}</div>
        <p class="text-sm leading-5 text-white/80">${ii.t}</p>
        <p class="mt-2 font-black">${fmtC(dl.temperature_2m_max[i])} <span class="text-white/55">/ ${fmtC(dl.temperature_2m_min[i])}</span></p>
        ${pr != null ? `<p class="mt-1 text-xs text-[#a9e0f2]">☔ ${pr}%</p>` : ''}
        ${uv != null ? `<p class="text-xs text-white/55">☀️ UV ${uv}</p>` : ''}
      </div>`;
    })
    .join('');
}
