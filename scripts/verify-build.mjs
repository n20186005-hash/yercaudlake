import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const dir = join(process.cwd(), 'dist');
console.log('dist:', readdirSync(dir).join(', '));
console.log('images:', readdirSync(join(dir, 'images')).filter((f) => f.endsWith('.jpg')).length);
const c = readFileSync(join(dir, 'index.html'), 'utf8');
const ms = [
  'https://yercaudlake.com/', 'og:image:alt', '"@id":"https://yercaudlake.com/#attraction"',
  'isAccessibleForFree', 'hasMap', '/site.webmanifest', 'serviceWorker.register("/sw.js")',
  'yercaud-lake-boathouse.jpg'
];
for (const m of ms) console.log((c.includes(m) ? 'OK  ' : 'MISS') + ' ' + m);
const sm = readFileSync(join(dir, 'sitemap-0.xml'), 'utf8');
console.log('sitemap locs:', (sm.match(/<loc>/g) || []).length, sm.includes('yercaudlake.com') ? 'OK' : 'MISS');
const files = ['site.webmanifest', 'sw.js', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'robots.txt'];
console.log('pwa files:', files.map((f) => f + '=' + existsSync(join(dir, f))).join(' '));
console.log('robots:', readFileSync(join(dir, 'robots.txt'), 'utf8').replace(/\n/g, ' | '));
console.log('sw register:', c.includes("navigator.serviceWorker.register('/sw.js')") ? 'OK' : 'MISS');
console.log('privacy sw:', readFileSync(join(dir, 'privacy', 'index.html'), 'utf8').includes('/sw.js') ? 'OK' : 'MISS');
console.log('sources section:', c.includes('id="ஆதாரங்கள்"') ? 'OK' : 'MISS');
console.log('manifest:', readFileSync(join(dir, 'site.webmanifest'), 'utf8'));
