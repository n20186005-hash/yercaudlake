import { readFileSync, existsSync, readdirSync } from 'node:fs';
import assert from 'node:assert/strict';
const read = p => readFileSync(`dist/${p}`, 'utf8');
const routes = ['index.html','en/index.html','cookies/index.html','privacy/index.html','terms/index.html','en/cookies/index.html','en/privacy/index.html','en/terms/index.html','404.html','en/404/index.html'];
const expectedPaths = ['/','/en/','/cookies/','/privacy/','/terms/','/en/cookies/','/en/privacy/','/en/terms/','/404/','/en/404/'];
let assertions = 0;
const ok=(v,m)=>{assert.ok(v,m);assertions++};
for (const [i,p] of routes.entries()) {
 const h=read(p), en=p.startsWith('en/');
 ok(h.includes(`lang="${en?'en':'ta'}-IN"`),p+' lang');
 ok((h.match(/<h1(?:\s|>)/g)||[]).length===1,p+' one H1');
 ok(/<title>[^<]+<\/title>/.test(h),p+' title');
 ok(/name="description" content="[^"]+"/.test(h),p+' description');
 ok(h.includes(`rel="canonical" href="https://yercaudlake.com${expectedPaths[i]}"`),p+' self canonical');
 ok(h.includes('hreflang="ta"')&&h.includes('hreflang="en"'),p+' real language counterparts');
 ok(i<2?!h.includes('content="noindex,follow"'):h.includes('content="noindex,follow"'),p+' indexing');
 ok(!h.includes('aggregateRating')&&!h.includes('openingHours')&&!h.includes('isAccessibleForFree'),p+' no unsupported structured promises');
 for(const m of h.matchAll(/(?:src|href)="(\/_astro\/[^"?#]+|\/images\/[^"?#]+|\/analytics\.js)"/g))ok(existsSync('dist'+m[1]),p+' local asset '+m[1]);
}
for(const p of ['index.html','en/index.html']) {
 const h=read(p);ok(h.includes('23,888')&&h.includes('2018')&&h.includes('2025'),p+' dated visitor sources');
 ok(h.includes('application/ld+json')&&h.includes('FAQPage'),p+' existing FAQ schema');
 ok(h.includes('id="weather-init"')&&h.includes('wx-current')&&h.includes('wx-days'),p+' snapshot/client mount');
}
const sm=read('sitemap-0.xml');
assert.deepEqual([...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]).sort(),['https://yercaudlake.com/','https://yercaudlake.com/en/']);assertions++;
for(const f of ['robots.txt','sitemap-index.xml','site.webmanifest','sw.js','analytics.js','CREDITS.txt'])ok(existsSync('dist/'+f),f+' published');
ok(read('robots.txt').includes('https://yercaudlake.com/sitemap-index.xml'),'robots sitemap');
ok(readdirSync('dist/images').filter(f=>f.endsWith('.jpg')).length===7,'seven real photos retained');
ok(read('CREDITS.txt').includes('Mandayamr')&&read('CREDITS.txt').includes('4.0'),'published individual photo credit');
console.log(JSON.stringify({status:'PASS',routes:routes.length,assertions}));
