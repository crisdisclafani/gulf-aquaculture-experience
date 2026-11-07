# Gulf Aquaculture 3D — sources

Three.js scene published at `profile-site/3d/`.

- `npm install && node build.mjs` → `dist3d/index.html` + `dist3d/app.js`
- Copy `dist3d/index.html` and `dist3d/app.js` to `profile-site/3d/`. The assets (`fish-*.webp`, `hamour.mp4`, `hamour-poster.jpg`, `poster.webp`) already live in `profile-site/3d/assets/`.
- `src/fishdata.js` (embedded base64 media for the single-file build) is not stored here: the split build replaces it with the files in `profile-site/3d/assets/`. To build, create a stub:
  `export const FISH_TEX = {}; export const HAMOUR_POSTER = ''; export const HAMOUR_VIDEO_B64 = '';`
