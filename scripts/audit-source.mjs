import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd(); let failed=false;
const forbidden=[/example\.com/i,/https?:\/\/localhost/i,/chrome-extension:\/\//i];
const exts=new Set(['.astro','.ts','.mjs','.js','.json','.jsonc','.md','.txt','.css','.svg','.webmanifest']);
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(['node_modules','dist','.astro','.git'].includes(e.name))continue;const f=path.join(d,e.name);if(e.isDirectory())walk(f);else if(exts.has(path.extname(e.name))&&e.name!=='audit-source.mjs'){const t=fs.readFileSync(f,'utf8');for(const r of forbidden)if(r.test(t)){console.error('தடைசெய்யப்பட்ட குறிப்பு:',path.relative(root,f));failed=true;}}}}
walk(root);
for(const f of ['logo.svg','favicon.svg','favicon-16x16.png','favicon-32x32.png','apple-touch-icon.png'])if(!fs.existsSync(path.join(root,'public',f))){console.error('காணவில்லை:',f);failed=true;}
// pnpm-workspace.yaml is intentional: it only sets allowBuilds for esbuild under pnpm 11 (single-package repo).
if(failed)process.exit(1); console.log('SOURCE_AUDIT: PASS');
