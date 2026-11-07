import { build } from 'esbuild';
import fs from 'fs';
// Single-file build (dist/gulf-aquaculture-3d.html) + split web build (dist3d/: index.html + app.js + assets/)
const base = { entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', write: false, target: 'es2020' };
const r = await build(base);
const js = r.outputFiles[0].text.replace(/<\/script/g, '<\\/script');
const tpl = fs.readFileSync('template.html', 'utf8');
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/gulf-aquaculture-3d.html', tpl.split('/*__BUNDLE__*/').join(js));
// split build: fish/video as external files, fetched only when needed
const ext = { name: 'ext-assets', setup(b) {
  b.onResolve({ filter: /fishdata\.js$/ }, () => ({ path: 'fishdata-ext', namespace: 'ext' }));
  b.onLoad({ filter: /.*/, namespace: 'ext' }, () => ({ loader: 'js', contents:
    `export const FISH_TEX={hamour:'assets/fish-hamour.webp',shaari:'assets/fish-shaari.webp',hamrah:'assets/fish-hamrah.webp',ummdrais:'assets/fish-ummdrais.webp'};
     export const HAMOUR_POSTER='assets/hamour-poster.jpg'; export const HAMOUR_VIDEO_B64='assets/hamour.mp4';` }));
} };
const r2 = await build({ ...base, plugins: [ext] });
const v = Date.now().toString(36);
fs.mkdirSync('dist3d/assets', { recursive: true });
fs.writeFileSync('dist3d/app.js', r2.outputFiles[0].text);
const html2 = tpl.replace('<script>/*__BUNDLE__*/</script>', `<script defer src="app.js?v=${v}"></script>`)
  .replace('</head>', '<link rel="preload" href="app.js?v=' + v + '" as="script">\n</head>');
fs.writeFileSync('dist3d/index.html', html2);
console.log('single', (fs.statSync('dist/gulf-aquaculture-3d.html').size/1024|0)+'KB', '| split app.js', (fs.statSync('dist3d/app.js').size/1024|0)+'KB');
