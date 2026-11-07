// Procedural modern interiors, one per building (concept content).
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { roomItems } from './items.js';
import { FISH_TEX } from './fishdata.js';

let ENV = null;
const R = (() => { let s = 4242; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
const mat = (o) => new THREE.MeshStandardMaterial(o);
const M = {
  concrete: mat({ color: '#b8bcbf', roughness: 0.32 }),
  epoxy: mat({ color: '#5d7482', roughness: 0.22 }),
  vinyl: mat({ color: '#d9dee1', roughness: 0.4 }),
  oak: mat({ color: '#b98f62', roughness: 0.45 }),
  stoneFloor: mat({ color: '#d8d2c6', roughness: 0.25 }),
  wall: mat({ color: '#eef0f1', roughness: 0.85 }),
  ceil: mat({ color: '#2a2f35', roughness: 0.9 }),
  led: mat({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 3 }),
  steel: mat({ color: '#c9ced3', roughness: 0.28, metalness: 0.85 }),
  dark: mat({ color: '#1e242a', roughness: 0.5, metalness: 0.3 }),
  white: mat({ color: '#f3f4f5', roughness: 0.45 }),
  blackTop: mat({ color: '#15181b', roughness: 0.3 }),
  fiber: mat({ color: '#2f6ea6', roughness: 0.35, side: THREE.DoubleSide }),
  fiberW: mat({ color: '#eef2f4', roughness: 0.3, side: THREE.DoubleSide }),
  water: new THREE.MeshPhysicalMaterial({ color: '#2cc4e0', roughness: 0.05, transparent: true, opacity: 0.38, emissive: '#0a6e8c', emissiveIntensity: 0.6, depthWrite: false }),
  waterTop: new THREE.MeshPhysicalMaterial({ color: '#1aa9c9', roughness: 0.02, metalness: 0.1, transparent: true, opacity: 0.7, emissive: '#0b5f78', emissiveIntensity: 0.5 }),
  glass: new THREE.MeshPhysicalMaterial({ color: '#cfeefa', roughness: 0.05, transparent: true, opacity: 0.16, depthWrite: false }),
  plant: mat({ color: '#4f8a3c', roughness: 0.9, flatShading: true }),
  pot: mat({ color: '#e6e1d8', roughness: 0.6 }),
  chair: mat({ color: '#2b3138', roughness: 0.6 }),
  yellow: mat({ color: '#e3a923', roughness: 0.5, metalness: 0.3 }),
  pipeBlue: mat({ color: '#2a78c2', roughness: 0.35, metalness: 0.4 }),
  pipeGreen: mat({ color: '#2f9a6a', roughness: 0.35, metalness: 0.4 }),
  pipeGrey: mat({ color: '#9aa3ab', roughness: 0.35, metalness: 0.6 }),
  accent: mat({ color: '#2ee6d6', emissive: '#2ee6d6', emissiveIntensity: 1.6 }),
};

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function dashboard(title, accent = '#2ee6d6') {
  return canvasTex(768, 432, (g, w, h) => {
    const bg = g.createLinearGradient(0, 0, w, h); bg.addColorStop(0, '#071722'); bg.addColorStop(1, '#0d2a3a');
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.fillStyle = accent; g.font = '600 26px sans-serif'; g.fillText(title.toUpperCase(), 28, 46);
    g.fillStyle = 'rgba(255,255,255,.5)'; g.font = '16px sans-serif'; g.fillText('SKMRC · LIVE MONITORING', 28, 72);
    // line chart
    g.strokeStyle = accent; g.lineWidth = 3; g.beginPath();
    for (let i = 0; i <= 40; i++) { const x = 28 + i * 11, y = 230 - Math.sin(i * 0.35) * 40 - R() * 30; i ? g.lineTo(x, y) : g.moveTo(x, y); }
    g.stroke();
    g.strokeStyle = 'rgba(255,255,255,.12)'; g.lineWidth = 1;
    for (let i = 0; i < 5; i++) { g.beginPath(); g.moveTo(28, 120 + i * 40); g.lineTo(470, 120 + i * 40); g.stroke(); }
    // bars
    for (let i = 0; i < 8; i++) { const bh = 40 + R() * 140; g.fillStyle = i % 3 ? 'rgba(46,230,214,.75)' : '#ffcf6b'; g.fillRect(510 + i * 30, 300 - bh, 20, bh); }
    // KPI tiles
    [['26.1°C', 'TEMP'], ['7.9 mg/L', 'O₂'], ['36 ppt', 'SAL']].forEach(([v, l], i) => {
      g.fillStyle = 'rgba(255,255,255,.06)'; g.fillRect(28 + i * 245, 330, 225, 80);
      g.fillStyle = '#fff'; g.font = '700 30px sans-serif'; g.fillText(v, 44 + i * 245, 372);
      g.fillStyle = 'rgba(255,255,255,.55)'; g.font = '14px sans-serif'; g.fillText(l, 44 + i * 245, 396);
    });
  });
}
function poster(title, sub, c1, c2) {
  return canvasTex(512, 768, (g, w, h) => {
    const bg = g.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, c1); bg.addColorStop(1, c2);
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(255,255,255,.18)'; g.lineWidth = 2;
    for (let i = 0; i < 9; i++) { g.beginPath(); g.arc(w * 0.75, h * 0.35, 40 + i * 28, 0, Math.PI * 2); g.stroke(); }
    g.fillStyle = '#fff'; g.font = '300 54px sans-serif';
    title.split('\n').forEach((l, i) => g.fillText(l, 40, h - 200 + i * 62));
    g.font = '600 20px sans-serif'; g.fillStyle = 'rgba(255,255,255,.75)'; g.fillText(sub.toUpperCase(), 40, h - 60);
  });
}
const windowView = () => canvasTex(512, 256, (g, w, h) => {
  const s = g.createLinearGradient(0, 0, 0, h * 0.62); s.addColorStop(0, '#9cc9e6'); s.addColorStop(1, '#f7dcb4');
  g.fillStyle = s; g.fillRect(0, 0, w, h * 0.62);
  const sea = g.createLinearGradient(0, h * 0.62, 0, h); sea.addColorStop(0, '#2aa3b6'); sea.addColorStop(1, '#0d5f78');
  g.fillStyle = sea; g.fillRect(0, h * 0.62, w, h);
  g.fillStyle = 'rgba(255,255,255,.5)'; for (let i = 0; i < 40; i++) g.fillRect(R() * w, h * 0.64 + R() * h * 0.34, 10 + R() * 30, 1.5);
});

// ---------- primitives
function add(scene, geo, m, x, y, z, ry = 0) { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.rotation.y = ry; scene.add(o); return o; }
const box = (s, w, h, d, m, x, y, z, ry) => add(s, new THREE.BoxGeometry(w, h, d), m, x, y, z, ry);
const cyl = (s, r, h, m, x, y, z, seg = 32, open = false) => add(s, new THREE.CylinderGeometry(r, r, h, seg, 1, open), m, x, y, z);
function pipe(s, pts, r, m) { const c = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(...p)), false, 'catmullrom', 0.05); return add(s, new THREE.TubeGeometry(c, Math.max(20, pts.length * 12), r, 12), m, 0, 0, 0); }
function tag(s, x, y, z, title, sub) {
  const el = document.createElement('div'); el.className = 'aq-tag';
  el.innerHTML = `<i></i><div><b>${title}</b><small>${sub}</small></div>`;
  const o = new CSS2DObject(el); o.position.set(x, y, z); o.center.set(0, 0.5); s.add(o); return o;
}

// ---------- fish
let FISH_G = null;
function fishGeo() {
  if (FISH_G) return FISH_G;
  const body = new THREE.SphereGeometry(1, 18, 12); body.scale(1, 0.38, 0.26);
  const tail = new THREE.ConeGeometry(0.42, 0.7, 4); tail.rotateZ(Math.PI / 2); tail.translate(-1.15, 0, 0); tail.scale(1, 1, 0.3);
  tail.deleteAttribute('uv'); body.deleteAttribute('uv');
  FISH_G = mergeGeometries([body, tail]); FISH_G.computeVertexNormals(); return FISH_G;
}
// photo-textured fish: a 'pillow' of two curved planes with the species picture, tail beating in the vertex shader
let PHOTO_G = null; const FISH_TIME = { value: 0 };
function photoFishGeo() {
  if (PHOTO_G) return PHOTO_G;
  const mk = (side) => {
    const g = new THREE.PlaneGeometry(2, 1, 28, 8); const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i); const prof = Math.sqrt(Math.max(0, 1 - (2 * y) ** 2)) * (0.35 + 0.65 * Math.max(0, 1 - Math.abs(x - 0.25) / 1.3)); p.setZ(i, side * 0.13 * prof); }
    if (side < 0) { g.rotateY(Math.PI); g.scale(-1, 1, 1); const ix = g.index.array; for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; } }
    g.computeVertexNormals(); return g;
  };
  PHOTO_G = mergeGeometries([mk(1), mk(-1)]); return PHOTO_G;
}
const TL = new THREE.TextureLoader();
function photoFishMat(key) {
  const tex = TL.load(FISH_TEX[key]); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const m = new THREE.MeshStandardMaterial({ map: tex, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.45, metalness: 0.1, emissive: '#ff9a3c', emissiveIntensity: 0 });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = FISH_TIME;
    sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      float ph = float(gl_InstanceID) * 1.37;
      float tw = clamp((0.55 - position.x) / 1.55, 0.0, 1.0);
      transformed.z += sin(position.x * 2.4 - uTime * 6.5 + ph) * 0.2 * tw * tw;
      transformed.x += sin(uTime * 6.5 + ph) * 0.015;`);
  };
  return m;
}
function school(s, { cx, cz, r0, r1, y0, y1, n, size, color, speed = 0.4, line = null, photo = null, item = null }) {
  const im = new THREE.InstancedMesh(photo ? photoFishGeo() : fishGeo(), photo ? photoFishMat(photo) : mat({ color, roughness: 0.4, metalness: 0.3 }), n);
  if (item) { im.userData.item = item; im.userData.fish = true; }
  const fs = Array.from({ length: n }, (_, i) => ({ a: R() * 6.28, r: r0 + R() * (r1 - r0), y: y0 + R() * (y1 - y0), sp: speed * (0.7 + R() * 0.6), ph: R() * 6.28, sc: size * (i === 0 ? 1.25 : 0.75 + R() * 0.5) }));
  if (photo) { fs[0].r = Math.min(Math.max(fs[0].r, 6.5), 9); fs[0].sp = speed * 0.6; }
  s.add(im);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), sc = new THREE.Vector3();
  const lead = new THREE.Vector3(); const posArr = new Float32Array(n * 3);
  const fn = (t) => {
    fs.forEach((f, i) => {
      if (line) { // back and forth along a raceway
        const u = Math.sin(t * f.sp * 0.25 + f.ph); const dir = Math.cos(t * f.sp * 0.25 + f.ph) > 0 ? 0 : Math.PI;
        p.set(cx + u * line, f.y + Math.sin(t * 2 + f.ph) * 0.05, cz + (f.r - (r0 + r1) / 2)); e.set(0, dir, Math.sin(t * 6 + f.ph) * 0.05);
      } else {
        const a = f.a + t * f.sp / Math.max(f.r, 0.5);
        p.set(cx + Math.cos(a) * f.r, f.y + Math.sin(t * 1.3 + f.ph) * 0.08, cz + Math.sin(a) * f.r); e.set(0, -a - Math.PI / 2, Math.sin(t * 7 + f.ph) * 0.06);
      }
      q.setFromEuler(e); sc.setScalar(f.sc); m4.compose(p, q, sc); im.setMatrixAt(i, m4);
      if (i === 0) lead.copy(p);
      posArr[i * 3] = p.x; posArr[i * 3 + 1] = p.y; posArr[i * 3 + 2] = p.z;
    });
    im.instanceMatrix.needsUpdate = true;
    if (photo) { FISH_TIME.value = t; if (!im.boundingSphere || im.boundingSphere.radius < 15) im.boundingSphere = new THREE.Sphere(new THREE.Vector3(cx, (y0 + y1) / 2, cz), Math.max(r1, 4) + 3); }
  };
  fn.lead = lead; fn.size = size; fn.first = fs[0]; fn.pos = posArr; fn.n = n; fn.sc = fs.map(f => f.sc); fn.item = item; return fn;
}

// ---------- room shell
function shell(s, { w, d, h, floor = M.concrete, view = true }) {
  const f = new THREE.Mesh(new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2), floor); s.add(f);
  box(s, w, 0.3, d, M.ceil, 0, h + 0.15, 0);
  box(s, w, h, 0.3, M.wall, 0, h / 2, d / 2);
  box(s, 0.3, h, d, M.wall, -w / 2, h / 2, 0);
  box(s, 0.3, h, d, M.wall, w / 2, h / 2, 0);
  if (view) { // back wall with panoramic glazing on the Gulf
    box(s, w, 1.2, 0.3, M.wall, 0, 0.6, -d / 2); box(s, w, h - 7, 0.3, M.wall, 0, 7 + (h - 7) / 2, -d / 2);
    const v = new THREE.Mesh(new THREE.PlaneGeometry(w, 5.8), new THREE.MeshBasicMaterial({ map: windowView(), toneMapped: false }));
    v.position.set(0, 4.1, -d / 2 - 0.2); s.add(v);
    for (let x = -w / 2; x <= w / 2; x += 4) box(s, 0.15, 5.8, 0.2, M.dark, x, 4.1, -d / 2 + 0.05);
  } else box(s, w, h, 0.3, M.wall, 0, h / 2, -d / 2);
  // linear LED strips
  for (let x = -w / 2 + 4; x < w / 2; x += 6) box(s, 0.25, 0.08, d * 0.86, M.led, x, h - 0.05, 0);
  s.add(new THREE.HemisphereLight('#ffffff', '#6d747c', 0.45));
  const dl = new THREE.DirectionalLight('#fff4e6', 0.7); dl.position.set(-10, 20, -15); s.add(dl);
  return { min: new THREE.Vector3(-w / 2 + 1, 0.8, -d / 2 + 1), max: new THREE.Vector3(w / 2 - 1, h - 0.6, d / 2 - 0.8) };
}
const W = 60, D = 36, H = 10;
const std = (extra = {}) => ({
  entry: { pos: new THREE.Vector3(0, 2.2, D / 2 - 1.2), target: new THREE.Vector3(0, 2.2, D / 2 - 12) },
  view: { pos: new THREE.Vector3(14, 7.5, 12), target: new THREE.Vector3(0, 1.5, -4) }, ...extra,
});

// ---------- builders
const B = {
  broodstock(s) {
    const bounds = shell(s, { w: W, d: D, h: H, floor: M.epoxy }); const up = [];
    [[-15, -7], [15, -7], [-15, 8], [15, 8]].forEach(([x, z], i) => {
      cyl(s, 6, 2.4, M.fiber, x, 1.2, z, 48, true);
      add(s, new THREE.RingGeometry(5.95, 6.25, 48).rotateX(-Math.PI / 2), M.steel, x, 2.42, z);
      cyl(s, 5.95, 2.2, M.water, x, 1.1, z, 48);
      add(s, new THREE.CircleGeometry(5.95, 48).rotateX(-Math.PI / 2), M.waterTop, x, 2.21, z);
      up.push(school(s, { cx: x, cz: z, r0: 1.5, r1: 5.2, y0: 0.5, y1: 1.8, n: 16, size: 0.75, color: i % 2 ? '#8b6a47' : '#9aa6ad', speed: 1.1 }));
      const pl = new THREE.PointLight('#5fdcff', 6, 14); pl.position.set(x, 4, z); s.add(pl);
    });
    // catwalk + overhead pipes
    box(s, 2.2, 0.15, D - 4, M.steel, 0, 2.6, 0);
    pipe(s, [[-28, 8.6, -15], [28, 8.6, -15]], 0.35, M.pipeBlue); pipe(s, [[-28, 8.2, -14], [28, 8.2, -14]], 0.25, M.pipeGreen);
    [-15, 15].forEach(x => pipe(s, [[x, 8.6, -15], [x, 8.6, -7], [x, 4.5, -7]], 0.15, M.pipeGrey));
    tag(s, -15, 4.2, -7, 'Broodstock tank', 'Hammour · 60 m³');
    tag(s, 15, 4.2, 8, 'Photoperiod control', 'Light & temperature cycles');
    tag(s, 0, 4.5, -14, 'Egg collectors', 'Spawn harvested daily');
    return { bounds, update: (t) => up.forEach(u => u(t)), ...std() };
  },
  hatchery(s) {
    const bounds = shell(s, { w: W, d: D, h: H, floor: M.epoxy }); const up = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) {
      const x = -20 + c * 8, z = -10 + r * 8;
      cyl(s, 1.7, 2, M.fiberW, x, 2.2, z, 32, true);
      add(s, new THREE.ConeGeometry(1.7, 1.2, 32, 1, true).rotateX(Math.PI), M.fiberW, x, 0.6 + 0.0, z);
      cyl(s, 1.65, 1.8, new THREE.MeshPhysicalMaterial({ color: '#45d4ee', transparent: true, opacity: 0.5, emissive: '#1fb0d8', emissiveIntensity: 1.1, depthWrite: false }), x, 2.15, z);
      [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([a, b]) => cyl(s, 0.07, 1.2, M.steel, x + a * 1.2, 0.6, z + b * 1.2, 6));
      // larvae: tiny bright dots, slowly swirling
      const n = 60, pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { const a = R() * 6.28, rr = R() * 1.5; pos.set([Math.cos(a) * rr, 1.4 + R() * 1.6, Math.sin(a) * rr], i * 3); }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const pts = new THREE.Points(g, new THREE.PointsMaterial({ color: '#e9fbff', size: 0.06 })); pts.position.set(x, 0, z); s.add(pts);
      const dir = c % 2 ? 1 : -1; up.push((t) => { pts.rotation.y = t * 0.15 * dir; });
    }
    pipe(s, [[-28, 8.5, -14], [28, 8.5, -14]], 0.3, M.pipeBlue);
    for (let c = 0; c < 6; c++) pipe(s, [[-20 + c * 8, 8.5, -14], [-20 + c * 8, 8.5, 6], [-20 + c * 8, 3.6, 6]], 0.08, M.pipeGrey);
    box(s, 10, 2.2, 1.2, M.white, -18, 1.1, 14); const scr = box(s, 3, 1.7, 0.1, mat({ map: dashboard('Hatchery'), emissiveMap: dashboard('Hatchery'), emissive: '#fff', emissiveIntensity: 1 }), -18, 3.4, 14.4);
    scr.rotation.y = Math.PI;
    tag(s, -20, 3.8, -10, 'Larval rearing tanks', 'Day 1–25 · 26 °C');
    tag(s, 12, 3.8, 6, 'Green-water culture', 'Live feed dosing');
    tag(s, -18, 4.6, 14, 'Water-quality station', 'O₂ · pH · salinity');
    return { bounds, update: (t) => up.forEach(u => u(t)), ...std() };
  },
  livefeed(s) {
    const bounds = shell(s, { w: W, d: D, h: H, floor: M.vinyl, view: false });
    const tubeG = new THREE.CylinderGeometry(0.32, 0.32, 5.6, 16);
    const mats = [
      new THREE.MeshPhysicalMaterial({ color: '#55d36d', transparent: true, opacity: 0.85, emissive: '#5dff7a', emissiveIntensity: 1.4, roughness: 0.1 }),
      new THREE.MeshPhysicalMaterial({ color: '#c8b13e', transparent: true, opacity: 0.85, emissive: '#ffd34d', emissiveIntensity: 1.3, roughness: 0.1 }),
      new THREE.MeshPhysicalMaterial({ color: '#3fbf9a', transparent: true, opacity: 0.85, emissive: '#47ffc8', emissiveIntensity: 1.3, roughness: 0.1 }),
    ];
    for (let r = 0; r < 5; r++) {
      const im = new THREE.InstancedMesh(tubeG, mats[r % 3], 16);
      for (let c = 0; c < 16; c++) im.setMatrixAt(c, new THREE.Matrix4().makeTranslation(-22 + c * 2.9, 3.2, -13 + r * 5.5));
      s.add(im);
      box(s, 48, 0.2, 0.8, M.steel, -0.25, 0.3, -13 + r * 5.5); box(s, 48, 0.12, 0.6, M.steel, -0.25, 6.1, -13 + r * 5.5);
    }
    // rotifer cones
    for (let i = 0; i < 4; i++) { add(s, new THREE.ConeGeometry(1.1, 2.2, 24, 1, true).rotateX(Math.PI), M.fiberW, 24, 2.2, -10 + i * 6); cyl(s, 1.05, 0.3, mats[1], 24, 3.1, -10 + i * 6, 24); }
    s.children.filter(o => o.isLight).forEach(l => l.intensity *= 0.15);
    const g1 = new THREE.PointLight('#7dff9a', 30, 40); g1.position.set(-6, 5, -2); s.add(g1);
    tag(s, -22, 6.6, -13, 'Phytoplankton photobioreactors', 'Nannochloropsis · Isochrysis');
    tag(s, 24, 4, -10, 'Rotifer culture cones', 'Zooplankton for first feeding');
    tag(s, -4, 6.6, 9, 'LED growth spectrum', '24 h controlled light');
    const bub = (t) => mats.forEach((m, i) => { m.emissiveIntensity = 1.2 + Math.sin(t * 1.5 + i * 2) * 0.25; });
    return { bounds, update: bub, exposure: 0.42, ...std({ view: { pos: new THREE.Vector3(12, 5, 14), target: new THREE.Vector3(-4, 3, -4) } }) };
  },
  nursery(s) {
    const bounds = shell(s, { w: W, d: D, h: H, floor: M.epoxy }); const up = [];
    [-10.5, -3.5, 3.5, 10.5].forEach((z, i) => {
      box(s, 46, 1.4, 0.3, M.fiberW, 0, 0.7, z - 2.2); box(s, 46, 1.4, 0.3, M.fiberW, 0, 0.7, z + 2.2);
      box(s, 0.3, 1.4, 4.4, M.fiberW, -23, 0.7, z); box(s, 0.3, 1.4, 4.4, M.fiberW, 23, 0.7, z);
      box(s, 45.6, 1.2, 4.1, M.water, 0, 0.6, z); box(s, 45.6, 0.02, 4.1, M.waterTop, 0, 1.21, z);
      up.push(school(s, { cx: 0, cz: z, r0: -1.6, r1: 1.6, y0: 0.35, y1: 1.0, n: 40, size: 0.35, color: '#a9b4ba', speed: 2.2, line: 20 }));
      // automatic feeder on a rail
      box(s, 46, 0.15, 0.15, M.steel, 0, 3.2, z); const fd = box(s, 1, 0.8, 1, M.yellow, 0, 2.8, z);
      up.push((t) => { fd.position.x = Math.sin(t * 0.18 + i) * 21; });
    });
    tag(s, -16, 2.6, -10.5, 'Weaning raceways', 'Live → formulated feed');
    tag(s, 10, 3.8, 3.5, 'Automatic feeders', 'Precision feeding on rails');
    tag(s, 16, 2.6, 10.5, 'Nursery stock', 'Fingerlings 2–4 g');
    return { bounds, update: (t) => up.forEach(u => u(t)), ...std() };
  },
  research(s) {
    const bounds = shell(s, { w: W, d: D, h: H, floor: M.vinyl });
    const scr = dashboard('Genomics'), scr2 = dashboard('Water quality', '#ffcf6b');
    for (let r = 0; r < 3; r++) for (let c = 0; c < 2; c++) {
      const x = -14 + c * 20, z = -8 + r * 8;
      box(s, 12, 0.9, 2.2, M.white, x, 0.45, z); box(s, 12.2, 0.06, 2.4, M.blackTop, x, 0.93, z);
      box(s, 12, 1.6, 0.3, M.white, x, 1.75, z); // shelf spine
      for (let k = 0; k < 3; k++) {
        const sm = box(s, 1.4, 0.85, 0.06, mat({ map: k % 2 ? scr : scr2, emissiveMap: k % 2 ? scr : scr2, emissive: '#fff', emissiveIntensity: 0.9 }), x - 4 + k * 4, 1.5, z + 0.9); sm.rotation.x = -0.08;
        // microscope
        box(s, 0.3, 0.6, 0.3, M.dark, x - 2.5 + k * 4, 1.25, z - 0.5); cyl(s, 0.12, 0.5, M.dark, x - 2.5 + k * 4, 1.6, z - 0.35, 12);
      }
      for (let k = 0; k < 6; k++) cyl(s, 0.12, 0.3, new THREE.MeshPhysicalMaterial({ color: ['#2ee6d6', '#ffcf6b', '#ff7aa2'][k % 3], transparent: true, opacity: 0.8, emissive: ['#2ee6d6', '#ffcf6b', '#ff7aa2'][k % 3], emissiveIntensity: 0.8 }), x - 5 + k * 0.4, 2.7, z, 10);
    }
    // fume hoods along the side wall
    for (let i = 0; i < 5; i++) {
      box(s, 0.2, 3.2, 3.2, M.white, -29.2, 1.6, -12 + i * 5);
      box(s, 1.8, 3.4, 3.2, M.white, -28.3, 1.7, -12 + i * 5).scale.set(1, 1, 1);
      box(s, 0.05, 1.6, 2.8, M.glass, -27.35, 1.9, -12 + i * 5);
      box(s, 1.6, 0.05, 2.8, mat({ color: '#fff', emissive: '#e8f6ff', emissiveIntensity: 1.5 }), -28.3, 3.0, -12 + i * 5);
    }
    // glass partition + office strip
    box(s, 0.08, 3.5, 20, M.glass, 20, 1.75, 4);
    tag(s, -14, 3, -8, 'Genomics & fish-health lab', '14 labs · ISO/IEC 17025');
    tag(s, -28, 4, 3, 'Fume hoods', 'Chemistry & sample prep');
    tag(s, 6, 3, 8, 'Water-quality analytics', 'Red-tide & plankton monitoring');
    return { bounds, update: (t) => { scr.offset.x = (t * 0.02) % 1; }, ...std() };
  },
  offices(s) {
    const bounds = shell(s, { w: W, d: D, h: H, floor: M.oak });
    const scr = dashboard('Operations');
    const vw = box(s, 16, 6, 0.2, mat({ map: dashboard('Fingerling deliveries'), emissiveMap: dashboard('Fingerling deliveries'), emissive: '#fff', emissiveIntensity: 1.1 }), -12, 4.2, -17.6);
    for (let g = 0; g < 4; g++) {
      const gx = -18 + (g % 2) * 16, gz = -6 + Math.floor(g / 2) * 10;
      box(s, 7, 0.08, 3.4, M.white, gx, 0.76, gz);
      [[-2.5, -1], [2.5, -1], [-2.5, 1], [2.5, 1]].forEach(([dx, dz]) => {
        box(s, 0.08, 0.76, 3.4, M.dark, gx + dx * 1.35, 0.38, gz);
        const m = box(s, 1.1, 0.65, 0.05, mat({ map: scr, emissiveMap: scr, emissive: '#fff', emissiveIntensity: 0.9 }), gx + dx * 0.55, 1.2, gz + dz * 0.3); m.rotation.y = dz > 0 ? Math.PI : 0;
        box(s, 0.6, 0.9, 0.6, M.chair, gx + dx * 0.55, 0.45, gz + dz * 1.2);
      });
      box(s, 7, 0.9, 0.05, M.glass, gx, 1.2, gz);
    }
    // glass meeting room
    [[8, 0, 12, 0.08], [8, 0, 0.08, 10]].forEach(() => {});
    box(s, 12, 3.4, 0.08, M.glass, 20, 1.7, 2); box(s, 0.08, 3.4, 10, M.glass, 14, 1.7, -3);
    box(s, 7, 0.1, 2.6, M.oak, 20, 0.78, -3); for (let i = 0; i < 6; i++) box(s, 0.6, 0.9, 0.6, M.chair, 17.5 + (i % 3) * 2.5, 0.45, -3 + (i < 3 ? -2 : 2));
    // plants
    for (let i = 0; i < 9; i++) { const x = -26 + i * 6.4, z = 14; cyl(s, 0.6, 1, M.pot, x, 0.5, z, 16); add(s, new THREE.IcosahedronGeometry(1.1, 1), M.plant, x, 1.9, z); }
    tag(s, -12, 7.7, -17, 'Operations video wall', 'Production & logistics live');
    tag(s, 20, 3.6, -3, 'Partner meeting room', 'Research & industry partners');
    tag(s, -18, 2.4, -6, 'Open-plan offices', 'Gulf Aquaculture team');
    return { bounds, update: (t) => { scr.offset.x = (t * 0.03) % 1; }, ...std() };
  },
  plantroom(s) {
    const bounds = shell(s, { w: W, d: D, h: H, floor: M.concrete, view: false }); const fans = [];
    for (let i = 0; i < 3; i++) {
      const x = -18 + i * 11;
      box(s, 8, 3.2, 3.6, M.yellow, x, 1.6, -11); box(s, 1.2, 3.4, 3.8, M.dark, x + 4.4, 1.7, -11);
      const fan = add(s, new THREE.CylinderGeometry(1.3, 1.3, 0.1, 6), M.steel, x + 5.1, 1.7, -11); fan.rotation.z = Math.PI / 2; fans.push(fan);
      pipe(s, [[x - 2, 3.2, -11], [x - 2, 8, -11], [x - 2, 8, -16]], 0.3, M.dark);
    }
    for (let i = 0; i < 4; i++) { const u = cyl(s, 0.6, 5, M.steel, 0, 1.4, 0, 24); u.rotation.z = Math.PI / 2; u.position.set(12, 1.2 + (i % 2) * 1.6, -4 + Math.floor(i / 2) * 3); }
    for (let i = 0; i < 3; i++) cyl(s, 1.5, 4, M.fiber, 22, 2, -12 + i * 4.5);
    [[M.pipeBlue, 8.4], [M.pipeGreen, 7.6], [M.pipeGrey, 6.8]].forEach(([m, y], k) => pipe(s, [[-29, y, -6 + k * 2], [29, y, -6 + k * 2]], 0.35, m));
    [-10, 0, 10, 20].forEach(x => pipe(s, [[x, 8.4, -6], [x, 8.4, 4], [x, 2, 4]], 0.18, M.pipeBlue));
    const pn = box(s, 6, 2.4, 0.6, M.dark, -16, 1.6, 12);
    box(s, 5, 1.4, 0.05, mat({ map: dashboard('Life support', '#ffcf6b'), emissiveMap: dashboard('Life support', '#ffcf6b'), emissive: '#fff', emissiveIntensity: 1 }), -16, 1.9, 11.65).rotation.y = Math.PI;
    tag(s, -18, 4.2, -11, 'Backup generators', 'N+1 redundancy');
    tag(s, 12, 3.6, -1, 'UV sterilisation', 'Pathogen control');
    tag(s, 22, 4.6, -7.5, 'Biofilters', 'Nitrification');
    return { bounds, update: (t) => fans.forEach((f, i) => { f.rotation.x = t * 12 + i; }), ...std() };
  },
  pumpstation(s) {
    const bounds = shell(s, { w: 44, d: 30, h: 10, floor: M.concrete, view: false }); const up = [];
    // intake pit with moving water
    box(s, 20, 0.1, 8, M.dark, 0, -0.02, -9);
    const wtex = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#0d5f78'; g.fillRect(0, 0, w, h); g.strokeStyle = 'rgba(160,240,255,.35)'; for (let i = 0; i < 30; i++) { g.beginPath(); g.arc(R() * w, R() * h, 10 + R() * 40, 0, 3); g.stroke(); } });
    wtex.wrapS = wtex.wrapT = THREE.RepeatWrapping; wtex.repeat.set(3, 1.2);
    add(s, new THREE.PlaneGeometry(19, 7).rotateX(-Math.PI / 2), mat({ map: wtex, emissive: '#0b5f78', emissiveIntensity: 0.5, roughness: 0.05 }), 0, 0.05, -9);
    for (let x = -9; x <= 9; x += 0.8) box(s, 0.08, 0.1, 8, M.steel, x, 0.12, -9);
    for (let i = 0; i < 4; i++) {
      const x = -12 + i * 8;
      cyl(s, 1.1, 2.4, M.pipeBlue, x, 1.2, 3); cyl(s, 0.8, 1.6, M.steel, x, 3.2, 3, 24);
      pipe(s, [[x, 1, 3], [x, 1, -5], [x, -1, -8]], 0.45, M.pipeGreen);
      pipe(s, [[x, 1.2, 3.8], [x, 1.2, 9], [x, 7.5, 9], [x, 7.5, 14.5]], 0.4, M.pipeBlue);
    }
    for (let i = 0; i < 3; i++) cyl(s, 1.6, 4.2, M.fiberW, -16 + i * 4, 2.1, 11, 24);
    tag(s, 0, 1.6, -9, 'Seawater intake', 'Screened Gulf water');
    tag(s, 4, 4.8, 3, 'Pump array', '4 × duty / standby');
    tag(s, -12, 4.8, 11, 'Sand filters', 'Pre-filtration');
    return { bounds, update: (t) => { wtex.offset.y = (t * 0.05) % 1; wtex.offset.x = Math.sin(t * 0.3) * 0.05; }, ...std({
      entry: { pos: new THREE.Vector3(0, 2.2, 13.8), target: new THREE.Vector3(0, 2.2, 3) },
      view: { pos: new THREE.Vector3(12, 7, 10), target: new THREE.Vector3(0, 1, -3) } }) };
  },
  visitor(s) {
    const up = [];
    s.background = new THREE.Color('#dfe9ee');
    add(s, new THREE.CircleGeometry(26, 64).rotateX(-Math.PI / 2), M.stoneFloor, 0, 0, 0);
    // ribbed shell ceiling (seen from inside)
    const sh = new THREE.SphereGeometry(1, 72, 24, 0, Math.PI * 2, 0, Math.PI / 2);
    const p = sh.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), y = p.getY(i); const a = Math.atan2(z, x); const k = 1 + 0.05 * Math.abs(Math.cos(a * 9)) * (1 - y); p.setXYZ(i, x * k, y, z * k); }
    sh.computeVertexNormals();
    const shellM = mat({ color: '#f7f6f2', roughness: 0.6, side: THREE.BackSide, emissive: '#fff8ee', emissiveIntensity: 0.15 });
    const shellMesh = add(s, sh, shellM, 0, 4.5, 0); shellMesh.scale.set(26, 13, 26);
    add(s, new THREE.CircleGeometry(3, 32).rotateX(Math.PI / 2), mat({ color: '#fff', emissive: '#fff', emissiveIntensity: 3 }), 0, 17.4, 0);
    // glass drum with views
    const drum = add(s, new THREE.CylinderGeometry(26, 26, 4.5, 72, 1, true), new THREE.MeshBasicMaterial({ map: (() => { const t = windowView(); t.wrapS = THREE.RepeatWrapping; t.repeat.set(4, 1); return t; })(), side: THREE.BackSide, toneMapped: false }), 0, 2.25, 0);
    for (let i = 0; i < 48; i++) { const a = i / 48 * Math.PI * 2; box(s, 0.15, 4.5, 0.15, M.dark, Math.cos(a) * 25.8, 2.25, Math.sin(a) * 25.8); }
    // central cylindrical aquarium
    cyl(s, 6, 10, M.water, 0, 5.4, 0, 64);
    cyl(s, 6.3, 0.4, M.steel, 0, 0.2, 0, 64); cyl(s, 6.3, 0.5, M.steel, 0, 10.5, 0, 64);
    const aqL = new THREE.PointLight('#4fd8ff', 40, 30); aqL.position.set(0, 6, 0); s.add(aqL);
    up.push(school(s, { cx: 0, cz: 0, r0: 1.5, r1: 5.4, y0: 1.2, y1: 9.5, n: 70, size: 0.42, color: '#d9c27a', speed: 1.6 }));
    up.push(school(s, { cx: 0, cz: 0, r0: 2, r1: 5.2, y0: 1.5, y1: 9, n: 12, size: 0.9, color: '#7f8f9a', speed: 0.9 }));
    // exhibition panels
    const ex = [['Restocking\nthe Gulf', 'Native species', '#0c8fa6', '#06344c'], ['Hammour', 'Epinephelus coioides', '#b5602e', '#3a1a10'], ['From egg to\nfingerling', '45 days', '#2b9a6a', '#0e3326'], ['Food security', 'UAE 2051', '#4a5bd1', '#111a4d'], ['Cobia', 'Rachycentron canadum', '#5c6e7a', '#1c252b'], ['Live feed', 'Plankton cultures', '#7cae2b', '#24360b']];
    ex.forEach(([t, sub, c1, c2], i) => {
      const a = -0.6 + i * 0.42 + Math.PI;
      const pnl = box(s, 3.2, 4.8, 0.12, mat({ map: poster(t, sub, c1, c2), emissiveMap: poster(t, sub, c1, c2), emissive: '#fff', emissiveIntensity: 0.6 }), Math.cos(a) * 18, 2.6, Math.sin(a) * 18);
      pnl.lookAt(0, 2.6, 0);
    });
    // curved reception desk + benches
    const desk = add(s, new THREE.TorusGeometry(4, 0.6, 8, 32, Math.PI * 0.7), M.white, 15, 0.9, 6); desk.rotation.x = Math.PI / 2; desk.rotation.z = -0.4;
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + 0.3; const b = box(s, 3.2, 0.5, 0.9, M.oak, Math.cos(a) * 9.5, 0.25, Math.sin(a) * 9.5); b.lookAt(0, 0.25, 0); }
    s.add(new THREE.HemisphereLight('#ffffff', '#c9c2b5', 0.6));
    tag(s, 0, 11.5, 0, 'Living aquarium', '360° cylinder · native species');
    tag(s, -17, 5.6, 2, 'Exhibition: the Gulf', 'Science for the public');
    tag(s, 15, 2.2, 6, 'Welcome desk', 'Schools & visitor tours');
    return { bounds: { min: new THREE.Vector3(-22, 0.8, -22), max: new THREE.Vector3(22, 15, 22) }, update: (t) => up.forEach(u => u(t)),
      entry: { pos: new THREE.Vector3(23, 2.2, 3), target: new THREE.Vector3(10, 2.6, 1) },
      view: { pos: new THREE.Vector3(17, 6, 13), target: new THREE.Vector3(0, 4, 0) } };
  },
  genroom(s) {
    const bounds = shell(s, { w: 44, d: 30, h: 10, floor: M.concrete, view: false }); const fans = [];
    for (let i = 0; i < 3; i++) {
      const x = -12 + i * 12;
      box(s, 8, 3.4, 3.8, M.yellow, x, 1.7, -6); box(s, 1.3, 3.6, 4, M.dark, x + 4.6, 1.8, -6);
      const fan = add(s, new THREE.CylinderGeometry(1.4, 1.4, 0.1, 6), M.steel, x + 5.3, 1.8, -6); fan.rotation.z = Math.PI / 2; fans.push(fan);
      pipe(s, [[x - 2.5, 3.4, -6], [x - 2.5, 8.5, -6], [x - 2.5, 8.5, -14.5]], 0.35, M.dark);
      box(s, 8.6, 0.25, 4.4, M.steel, x, 0.12, -6);
    }
    for (let i = 0; i < 6; i++) box(s, 1.6, 2.6, 1, M.pipeGrey, -15 + i * 2, 1.3, 9);
    box(s, 4, 3.2, 3, M.dark, 14, 1.6, 9);
    box(s, 3.4, 1.6, 0.05, mat({ map: dashboard('Power', '#ffcf6b'), emissiveMap: dashboard('Power', '#ffcf6b'), emissive: '#fff', emissiveIntensity: 1 }), -8, 3.4, 9.52).rotation.y = Math.PI;
    tag(s, -12, 4.6, -6, 'Backup generators', 'N+1 · automatic start');
    tag(s, -10, 3.2, 9, 'Switchgear', 'Electrical distribution');
    tag(s, 14, 3.8, 9, 'Transformer', 'Grid connection');
    return { bounds, update: (t) => fans.forEach((f, i) => { f.rotation.x = t * 14 + i; }), ...std({
      entry: { pos: new THREE.Vector3(0, 2.2, 13.8), target: new THREE.Vector3(0, 2.2, 3) },
      view: { pos: new THREE.Vector3(12, 6.5, 10), target: new THREE.Vector3(-2, 1.5, -4) } }) };
  },
  phase1(s) {
    const bounds = shell(s, { w: W, d: D, h: H, floor: M.epoxy }); const up = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) {
      const x = -20 + c * 10, z = -10 + r * 9;
      box(s, 7, 1.3, 0.25, M.fiberW, x, 0.65, z - 2.6); box(s, 7, 1.3, 0.25, M.fiberW, x, 0.65, z + 2.6);
      box(s, 0.25, 1.3, 5.4, M.fiberW, x - 3.5, 0.65, z); box(s, 0.25, 1.3, 5.4, M.fiberW, x + 3.5, 0.65, z);
      box(s, 6.8, 1.1, 5, M.water, x, 0.55, z); box(s, 6.8, 0.02, 5, M.waterTop, x, 1.11, z);
      up.push(school(s, { cx: x, cz: z, r0: 0.6, r1: 2.0, y0: 0.35, y1: 0.95, n: 10, size: 0.28, color: '#b9c3c8', speed: 1.2 }));
    }
    pipe(s, [[-28, 8.4, -15], [28, 8.4, -15]], 0.3, M.pipeBlue);
    tag(s, -20, 2.4, -10, 'Incubation & larval units', 'Phase 1 hatchery');
    tag(s, 10, 2.4, 8, 'Nursery tanks', 'Fingerlings for UAE farms');
    tag(s, 20, 2.4, -1, 'Seabream batch', 'Stocked from Phase 2 eggs');
    return { bounds, update: (t) => up.forEach(u => u(t)), ...std() };
  },
  seacages(s) {
    // underwater, inside an open-sea cage
    s.background = new THREE.Color('#0b4a62'); s.fog = new THREE.FogExp2('#0d5a74', 0.045); s.environmentIntensity = 0.15;
    const up = [];
    s.add(new THREE.HemisphereLight('#bff4ff', '#06303f', 1.4));
    const sunL = new THREE.DirectionalLight('#dffaff', 1.5); sunL.position.set(4, 20, 2); s.add(sunL);
    const ctex = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#5fd6ee'; g.fillRect(0, 0, w, h); g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 3;
      for (let i = 0; i < 26; i++) { g.beginPath(); const x = R() * w, y = R() * h; g.moveTo(x, y); g.bezierCurveTo(x + 30, y - 20, x + 60, y + 25, x + 90, y); g.stroke(); } });
    ctex.wrapS = ctex.wrapT = THREE.RepeatWrapping; ctex.repeat.set(6, 6);
    const surf = add(s, new THREE.PlaneGeometry(120, 120).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ map: ctex, side: THREE.DoubleSide, transparent: true, opacity: 0.9, fog: false }), 0, 10, 0);
    const net = add(s, new THREE.CylinderGeometry(14, 13, 18, 56, 14, true), new THREE.MeshBasicMaterial({ color: '#9fe3ef', wireframe: true, transparent: true, opacity: 0.28 }), 0, 1, 0);
    add(s, new THREE.TorusGeometry(14, 0.35, 8, 72).rotateX(Math.PI / 2), M.dark, 0, 9.8, 0);
    add(s, new THREE.CircleGeometry(13, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#0e3b4a', wireframe: true, transparent: true, opacity: 0.3 }), 0, -8, 0);
    // light shafts
    const shaftM = new THREE.MeshBasicMaterial({ color: '#c8f6ff', transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
    const shafts = [];
    for (let i = 0; i < 9; i++) { const sh = add(s, new THREE.ConeGeometry(2.2 + R() * 2, 26, 16, 1, true), shaftM, -10 + R() * 20, -2, -10 + R() * 20); sh.rotation.z = 0.15 - R() * 0.3; shafts.push(sh); }
    up.push(school(s, { cx: 0, cz: 0, r0: 3, r1: 10, y0: -5, y1: 1, n: 26, size: 1.25, speed: 1.1, photo: 'hamour', item: 'fish-hamour' }));
    up.push(school(s, { cx: 0, cz: 0, r0: 5, r1: 12, y0: 0, y1: 6, n: 40, size: 0.8, speed: 2.0, photo: 'shaari', item: 'fish-shaari' }));
    up.push(school(s, { cx: 0, cz: 0, r0: 4, r1: 11, y0: -2, y1: 4, n: 34, size: 0.75, speed: 1.7, photo: 'hamrah', item: 'fish-hamrah' }));
    up.push(school(s, { cx: 0, cz: 0, r0: 2, r1: 9, y0: 2, y1: 7.5, n: 22, size: 0.95, speed: 1.4, photo: 'ummdrais', item: 'fish-ummdrais' }));
    // one hotspot riding on a fish of each species
    const FT = [['fish-hamour', 'Hamour', 'Orange-spotted grouper'], ['fish-shaari', 'Shaari', 'Spangled emperor'], ['fish-hamrah', 'Hamrah', 'Red snapper'], ['fish-ummdrais', 'Umm Drais', 'Reef snapper']];
    const fishSchools = up.slice(0, 4);
    const riders = FT.map(([key, t1, t2], i) => { const o = tag(s, 0, 0, 0, t1, t2); o.userData.item = key; o.element.classList.add('aq-fishspot'); return { o, sch: up[i] }; });
    up.push(() => riders.forEach(({ o, sch }) => o.position.copy(sch.lead).add(new THREE.Vector3(0, sch.size * 0.75 + 0.4, 0))));
    // drifting particles
    const n = 600, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) pos.set([(R() - 0.5) * 30, -8 + R() * 18, (R() - 0.5) * 30], i * 3);
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(pg, new THREE.PointsMaterial({ color: '#e8fdff', size: 0.06, transparent: true, opacity: 0.7 })); s.add(pts);
    tag(s, 0, 8.6, -13, 'Open-sea cage', 'Phase 4 · sea cage grow-out');
    tag(s, -12, -2, 2, 'Net enclosure', 'Natural Gulf water exchange');
    [surf, ...shafts, pts].forEach(o => { o.userData.noPick = true; o.raycast = () => {}; });
    return { fish: fishSchools, bounds: { min: new THREE.Vector3(-11, -6, -11), max: new THREE.Vector3(11, 8.8, 11) }, exposure: 0.8,
      update: (t) => { up.forEach(u => u(t)); ctex.offset.set(t * 0.01, t * 0.013); pts.position.y = Math.sin(t * 0.2) * 0.4; pts.rotation.y = t * 0.01; shafts.forEach((sh, i) => { sh.material.opacity = 0.06 + Math.sin(t * 0.7 + i) * 0.02; }); },
      entry: { pos: new THREE.Vector3(2, 8.5, 9), target: new THREE.Vector3(0, 2, 0) },
      view: { pos: new THREE.Vector3(2, 1, 3), target: new THREE.Vector3(-4, 3, -6) } };
  },
};


const cache = {};
export function getInterior(id, renderer, onItem) {
  if (cache[id]) return cache[id];
  if (!ENV) { const pm = new THREE.PMREMGenerator(renderer); ENV = pm.fromScene(new RoomEnvironment(), 0.04).texture; }
  const scene = new THREE.Scene(); scene.environment = ENV; scene.environmentIntensity = 0.35;
  if (!scene.background) scene.background = new THREE.Color('#0d1217');
  const it = (B[id] || B.offices)(scene);
  const b = it.bounds;
  it.update(0.01);
  const items = markItems(scene, roomItems(id), onItem);
  cache[id] = { scene, ...it, items, bounds: new THREE.Box3(b.min.clone ? b.min.clone() : b.min, b.max.clone ? b.max.clone() : b.max) };
  return cache[id];
}

// assign every mesh whose centre falls inside an item box to that item (smallest box wins)
function markItems(scene, defs, onItem) {
  const items = {}; const order = [];
  defs.forEach(d => { if (!d.box) d.box = [0, 0, 0, 0, 0, 0]; d.box3 = new THREE.Box3(new THREE.Vector3(d.box[0], d.box[1], d.box[2]), new THREE.Vector3(d.box[3], d.box[4], d.box[5])); d.vol = (d.box[3] - d.box[0]) * (d.box[4] - d.box[1]) * (d.box[5] - d.box[2]); d.hit = new THREE.Box3(); items[d.key] = d; order.push(d.key); });
  scene.updateMatrixWorld(true);
  const bb = new THREE.Box3(), c = new THREE.Vector3(), sz = new THREE.Vector3();
  const find = (p) => { let best = null; defs.forEach(d => { if (!d.direct && d.box3.containsPoint(p) && (!best || d.vol < best.vol)) best = d; }); return best; };
  scene.traverse(o => {
    if (o.isCSS2DObject) {
      const d = (o.userData.item && items[o.userData.item]) || find(o.position) || find(o.position.clone().setY(Math.min(o.position.y, 3)));
      if (d) { o.element.dataset.item = d.key; o.element.classList.add('aq-tag-link');
        o.element.addEventListener('pointerdown', e => e.stopPropagation());
        o.element.addEventListener('click', e => { e.stopPropagation(); onItem && onItem(d.key); }); }
      return;
    }
    if (!(o.isMesh || o.isPoints)) return;
    if (o.userData.item) { const d0 = items[o.userData.item]; if (d0) d0.hit.setFromCenterAndSize(new THREE.Vector3(0, 1, 0), new THREE.Vector3(24, 14, 24)); return; }
    if (o.isInstancedMesh) { o.computeBoundingBox(); bb.copy(o.boundingBox).applyMatrix4(o.matrixWorld); }
    else { if (!o.geometry.boundingBox) o.geometry.computeBoundingBox(); bb.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld); }
    bb.getCenter(c); bb.getSize(sz);
    if (!o.isInstancedMesh && Math.max(sz.x, sz.y, sz.z) > 50) return; // floors, walls, ceilings
    const d = find(c); if (!d) return;
    o.userData.item = d.key; d.hit.union(bb);
  });
  order.forEach(k => { const d = items[k]; if (d.hit.isEmpty()) d.hit.copy(d.box3); });
  items._order = order;
  return items;
}
