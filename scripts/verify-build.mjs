import { readFileSync, existsSync, readdirSync } from 'node:fs';
import assert from 'node:assert/strict';
const read = p => readFileSync(`dist/${p}`, 'utf8');
const SITE = 'https://yercaudlake.com';

// Every guide slug — mirrors src/data/guides/. Long-form pages live at
// /<slug>/ (Tamil) and /en/<slug>/ (English).
const guideSlugs = [
  'boating/guide','boating/prices','boating/timings','boating/online-booking','boating/with-kids','boating/weekend-queues',
  'visit/best-time','visit/lakeside-walk','visit/photo-spots','visit/lake-nature-history',
  'transport/from-salem','transport/from-salem-junction','transport/from-yercaud-bus-stand','transport/parking','transport/ghat-road-driving','transport/bus-vs-taxi','transport/from-bengaluru',
  'food/restaurants-near-lake','food/cafes-with-lake-views','food/vegetarian-near-lake','food/breakfast-before-boating','food/lunch-after-boating','food/snacks-tea-after-lake','food/family-friendly-meals',
  'nearby/anna-park','nearby/deer-park','nearby/kiliyur-falls','nearby/ladys-seat','nearby/gents-childrens-seat','nearby/pagoda-point','nearby/rose-garden-silk-farm','nearby/botanical-garden','nearby/shevaroyan-temple',
  'itineraries/lake-in-one-hour','itineraries/lake-half-day','itineraries/one-day-from-lake','itineraries/two-days-from-lake','itineraries/family-with-kids','itineraries/low-walking','itineraries/rainy-day','itineraries/lake-viewpoints-sunset','itineraries/car-free'
];

const routes = [
  { file: 'index.html', url: '/', en: false, noindex: false },
  { file: 'en/index.html', url: '/en/', en: true, noindex: false },
  { file: 'cookies/index.html', url: '/cookies/', en: false, noindex: true },
  { file: 'privacy/index.html', url: '/privacy/', en: false, noindex: true },
  { file: 'terms/index.html', url: '/terms/', en: false, noindex: true },
  { file: 'en/cookies/index.html', url: '/en/cookies/', en: true, noindex: true },
  { file: 'en/privacy/index.html', url: '/en/privacy/', en: true, noindex: true },
  { file: 'en/terms/index.html', url: '/en/terms/', en: true, noindex: true },
  { file: '404.html', url: '/404/', en: false, noindex: true },
  { file: 'en/404/index.html', url: '/en/404/', en: true, noindex: true }
];
for (const slug of guideSlugs) {
  routes.push({ file: `${slug}/index.html`, url: `/${slug}/`, en: false, noindex: false, guide: true });
  routes.push({ file: `en/${slug}/index.html`, url: `/en/${slug}/`, en: true, noindex: false, guide: true });
}

let assertions = 0;
const ok = (v, m) => { assert.ok(v, m); assertions++; };
for (const r of routes) {
  const h = read(r.file);
  ok(h.includes(`lang="${r.en ? 'en' : 'ta'}-IN"`), r.file + ' lang');
  ok((h.match(/<h1(?:\s|>)/g) || []).length === 1, r.file + ' one H1');
  ok(/<title>[^<]+<\/title>/.test(h), r.file + ' title');
  ok(/name="description" content="[^"]+"/.test(h), r.file + ' description');
  ok(h.includes(`rel="canonical" href="${SITE}${r.url}"`), r.file + ' self canonical');
  ok(h.includes('hreflang="ta"') && h.includes('hreflang="en"'), r.file + ' real language counterparts');
  ok(!h.includes('content="noindex,follow"') || r.noindex, r.file + ' unexpected noindex');
  ok(!h.includes('aggregateRating') && !h.includes('openingHours') && !h.includes('isAccessibleForFree'), r.file + ' no unsupported structured promises');
  if (r.guide) {
    ok(h.includes('BreadcrumbList'), r.file + ' breadcrumb schema');
    ok(h.includes('FAQPage'), r.file + ' FAQ schema');
    ok(h.includes('"ItemList"'), r.file + ' related ItemList schema');
    ok(h.includes(r.en ? 'From Yercaud Lake' : 'ஏற்காடு ஏரியிலிருந்து'), r.file + ' from-lake section');
  }
  for (const m of h.matchAll(/(?:src|href)="(\/_astro\/[^"?#]+|\/images\/[^"?#]+|\/analytics\.js)"/g)) ok(existsSync('dist' + m[1]), r.file + ' local asset ' + m[1]);
}

const guideTitles = [], guideDescs = [];
for (const slug of guideSlugs) {
  for (const file of [`${slug}/index.html`, `en/${slug}/index.html`]) {
    const h = read(file);
    guideTitles.push(h.match(/<title>([^<]+)<\/title>/)[1]);
    guideDescs.push(h.match(/name="description" content="([^"]+)"/)[1]);
  }
}
ok(new Set(guideTitles).size === guideTitles.length, 'guide titles unique across both languages');
ok(new Set(guideDescs).size === guideDescs.length, 'guide descriptions unique across both languages');

// Structural symmetry and content-block coverage. Both language versions of a
// guide must render the same number of headings and list items, exactly five
// FAQs, and both a "confirm on the day" and a "pitfalls / mistakes" section.
// Heading wording varies by page, so each group is matched against the pooled
// heading text rather than a single fixed string.
const h2text = s => [...s.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(m => m[1]).join(' | ');
const countOf = (s, re) => (s.match(re) || []).length;
const confirmEn = /to confirm on the day|to check on the day/;
const confirmTa = /உறுதி|சரிபார்/;
const pitfallEn = /Common mistakes|pitfalls|Safety and courtesy|Practical points|not guaranteed/i;
const pitfallTa = /தவறு|கவனிக்க|பாதுகாப்ப|நடைமுறை|உறுதி அல்ல/;
for (const slug of guideSlugs) {
  const en = read(`en/${slug}/index.html`);
  const ta = read(`${slug}/index.html`);
  ok(countOf(en, /<h2(?:\s|>)/g) === countOf(ta, /<h2(?:\s|>)/g), slug + ' EN/TA heading parity');
  ok(countOf(en, /<li(?:\s|>)/g) === countOf(ta, /<li(?:\s|>)/g), slug + ' EN/TA list-item parity');
  ok(countOf(en, /"@type":"Question"/g) === 5, slug + ' EN five FAQs');
  ok(countOf(ta, /"@type":"Question"/g) === 5, slug + ' TA five FAQs');
  ok(confirmEn.test(h2text(en)) && confirmTa.test(h2text(ta)), slug + ' confirm-on-the-day section in both languages');
  ok(pitfallEn.test(h2text(en)) && pitfallTa.test(h2text(ta)), slug + ' pitfalls/mistakes section in both languages');
}

// Reader-facing language purity in the sources block. Source labels, dates and
// notes come from bilingual data, so each language version must render its own
// text: an English page must carry no Tamil, and a Tamil page must stay Tamil
// with only short proper nouns in Latin script (no English sentences leaking
// through). The block is anchored by its heading and ends at the next section.
const srcBlock = (h, heading) => {
  const i = h.indexOf(`text-2xl font-black text-[#0b4148]">${heading}</h2>`);
  if (i === -1) return null;
  return h.slice(i, h.indexOf('</section>', i)).replace(/<[^>]+>/g, ' ').replace(/https?:\/\/\S+/g, ' ');
};
const hasTamil = s => /[\u0B80-\u0BFF]/.test(s);
const longestLatinWords = s => (s.match(/[A-Za-z][A-Za-z'’.&-]*(?: [A-Za-z'’.&-]+)*/g) || [])
  .reduce((n, m) => Math.max(n, m.trim().split(/\s+/).length), 0);
for (const slug of guideSlugs) {
  const en = srcBlock(read(`en/${slug}/index.html`), 'Sources');
  const ta = srcBlock(read(`${slug}/index.html`), 'ஆதாரங்கள்');
  ok(en !== null && ta !== null, slug + ' sources block rendered in both languages');
  ok(en !== null && !hasTamil(en), slug + ' English sources block carries no Tamil text');
  ok(ta !== null && hasTamil(ta), slug + ' Tamil sources block is written in Tamil');
  ok(ta !== null && longestLatinWords(ta) < 6, slug + ' Tamil sources block has no English sentence');
}

for (const [p, prefix] of [['index.html', ''], ['en/index.html', '/en']]) {
  const h = read(p), en = p.startsWith('en/');
  ok(h.includes('23,888') && h.includes('2018') && h.includes('2025'), p + ' dated visitor sources');
  ok(h.includes('application/ld+json') && h.includes('FAQPage'), p + ' existing FAQ schema');
  ok(h.includes('id="weather-init"') && h.includes('wx-current') && h.includes('wx-days'), p + ' snapshot/client mount');
  ok(h.includes(en ? 'id="guides"' : 'id="வழிகாட்டிகள்"'), p + ' guides hub section');
  ok(h.includes('"CollectionPage"'), p + ' guides collection schema');
  for (const slug of guideSlugs) ok(h.includes(`href="${prefix}/${slug}/"`), p + ' links to ' + slug);
}

const sitemapUrls = [...read('sitemap-0.xml').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]).sort();
const expectedUrls = [
  `${SITE}/`, `${SITE}/en/`,
  ...guideSlugs.flatMap(slug => [`${SITE}/${slug}/`, `${SITE}/en/${slug}/`])
].sort();
assert.deepEqual(sitemapUrls, expectedUrls); assertions++;

for (const f of ['robots.txt', 'sitemap-index.xml', 'site.webmanifest', 'sw.js', 'analytics.js', 'CREDITS.txt']) ok(existsSync('dist/' + f), f + ' published');
ok(read('robots.txt').includes('https://yercaudlake.com/sitemap-index.xml'), 'robots sitemap');
ok(readdirSync('dist/images').filter(f => f.endsWith('.jpg')).length === 7, 'seven real photos retained');
ok(read('CREDITS.txt').includes('Mandayamr') && read('CREDITS.txt').includes('4.0'), 'published individual photo credit');
console.log(JSON.stringify({ status: 'PASS', routes: routes.length, guidePages: guideSlugs.length * 2, sitemapUrls: sitemapUrls.length, assertions }));
