import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { getInterior } from './interiors.js';
import { createAmbient } from './audio.js';
const ambient = createAmbient();
import { FISH_TEX, HAMOUR_POSTER, HAMOUR_VIDEO_B64 } from './fishdata.js';
let HAMOUR_URL = null;
function hamourVideoURL() { if (!HAMOUR_URL && !HAMOUR_VIDEO_B64.startsWith('data:') && HAMOUR_VIDEO_B64.length < 300) HAMOUR_URL = HAMOUR_VIDEO_B64; if (!HAMOUR_URL) { const bin = atob(HAMOUR_VIDEO_B64); const u8 = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i); HAMOUR_URL = URL.createObjectURL(new Blob([u8], { type: 'video/mp4' })); } return HAMOUR_URL; }

/* =====================================================================
   CONTENT CONFIG — edit freely (names, texts, stats are placeholders)
   ===================================================================== */
const CONFIG = {
  title: 'Sheikh Khalifa Marine Research Center',
  brand: 'Marine Research Center', // top-left label
  intro: false, // big title over the opening fly-in
  kicker: 'Operated by Gulf Aquaculture since November 2025',
  subtitle: 'Umm Al Quwain · UAE — Interactive Masterplan',
};

// Building functions from public sources on the SKMRC (clusters: broodstock, hatchery, weaning,
// nursery, offices, plant room, generator room, pump station + research labs & education centre).
// Site: coastal strip in Umm Al Quwain — sea on one side, mainland on the other (as in the renders).
// Which real building hosts which function is an assumption: adjust the mapping here.
const BUILDINGS = [
  { id: 'visitor', name: 'Education & Visitor Center', tag: 'Public · Education',
    desc: 'The Marine Innovation Park: alongside the hatchery and nursery, SKMRC hosts a science discovery division for research and younger audiences.',
    stats: [['Innovation', 'Park'], ['Science', 'Discovery division'], ['Schools', '& young audiences']], script: 'Innovation at its heart.', bullets: ['Marine Innovation Park', 'Science discovery division', 'Academic spaces & staff canteen'] },
  { id: 'research', name: 'Research & Administration Wing', tag: 'R&D · Offices',
    desc: 'Fourteen dedicated laboratories for diagnostics, microbiology and water quality, with the offices of the Gulf Aquaculture team.',
    stats: [['14', 'Labs · ISO/IEC 17025'], ['1,200 m²', 'Office space'], ['Canteen', '& academic spaces']], script: 'Science behind every fish.', bullets: ['Microbial testing: viruses, bacteria, parasites', 'Water-quality parameters', 'Provisioned for ISO/IEC 17025'] },
  { id: 'nursery', name: 'Weaning & Nursery', tag: 'Hatchery Building · West',
    desc: 'Nursery and weaning halls where juveniles move from live feed to formulated diets and grow into healthy fry.',
    stats: [['20 M', 'Fry target 2026'], ['Hamour', 'Red Snapper · Sheri'], ['Weaning', 'Live → dry feed']], script: 'Grown with patience.', bullets: ['Currently focusing on Hamour, Red Snapper and Sheri', 'Target production of 20 million fry in 2026'] },
  { id: 'hatchery', name: 'Larval Rearing Hall', tag: 'Hatchery Building · Phase 2',
    desc: 'Biosecure larval rearing systems in the Phase 2 hatchery, with offices, producing three species throughout the year.',
    stats: [['20 M+', 'Larvae / year'], ['3', 'Species / year'], ['26', 'RAS systems']], script: 'Where life begins.', bullets: ['Production of 3 species throughout the year', 'Annual capacity of 20+ million larvae', '~18,000 m² of hatchery space in two phases'] },
  { id: 'livefeed', name: 'Live Feed & Labs', tag: 'Hatchery Building · East',
    desc: 'Sustainable feed systems: live feed and algae rooms producing the microscopic food larvae need in their first days.',
    stats: [['7', 'Live algae species'], ['3', 'Live feeds'], ['Year-round', 'Production']], script: 'Tiny food, big future.', bullets: ['Rotifers, Artemia and Copepods', '7 species of live algae, year-round'] },
  { id: 'broodstock', name: 'Broodstock Building', tag: 'Production · Sea water intake',
    desc: 'In SKMRC the team manages and breeds the broodstocks of native and commercial Gulf species, fed by the sea water intake room.',
    stats: [['7', 'Broodstock species'], ['Year-round', 'Spawning'], ['Intake', 'Sea water room']], script: 'Strong parents, strong stock.', bullets: ['Seabream, Hamour, Shaari, Mangrove Snapper', 'Mullet, Cobia and Naisrah'] },
  { id: 'plantroom', name: 'Plant Room', tag: 'Infrastructure',
    desc: 'Water treatment and life-support systems that keep every tank of the hatchery running around the clock.',
    stats: [['24/7', 'Life support'], ['Water', 'Treatment'], ['RAS', 'Filtration']], script: 'Quietly keeping it all alive.', bullets: ['Water treatment & filtration', 'Life support for every tank'] },
  { id: 'genroom', name: 'Generator Room', tag: 'Infrastructure',
    desc: 'Back-up generators, switchgear and the transformer that guarantee power to the life-support systems.',
    stats: [['Backup', 'Power'], ['Transformer', 'Grid link'], ['Fire', 'Water tank']], script: 'Never a moment off.', bullets: ['Back-up generators', 'Transformer & switchgear'] },
  { id: 'phase1', name: 'Phase 1 Hatchery', tag: 'Existing buildings',
    desc: 'Production stream one of SKMRC: nursery, weaning and offices, hatchery and broodstock halls with their own plant room, header tanks and generator room.',
    stats: [['Phase 1', 'Production stream'], ['Header', 'Tanks'], ['18,000 m²', 'Hatchery · 2 phases']], script: 'Where it all started.', bullets: ['Nursery, weaning & office', 'Hatchery and broodstock halls', 'Plant room, header tanks & generator room'] },
  { id: 'seacages', name: 'Sea Cage Grow-Out', tag: 'Phase 4 · Open sea',
    desc: 'Circular open-sea cages where fingerlings from the hatchery grow to market size in the natural Gulf environment, linked to shore by floating walkways.',
    stats: [['Phase 4', 'Grow-out'], ['Open sea', 'Cages'], ['Local', 'Species']], script: 'Back to the Gulf.', bullets: ['Phase 4 · sea cage grow-out', 'Fish raised in their natural environment'] },
];
BUILDINGS.forEach((b, i) => (b.n = String(i + 1).padStart(2, '0')));

/* =====================================================================
   SETUP
   ===================================================================== */
const root = document.getElementById('aqua-app');
const stage = root.querySelector('.aq-stage');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
const IS_MOBILE = matchMedia('(pointer: coarse)').matches || Math.min(screen.width, screen.height) < 820;
const PR_MAX = Math.min(window.devicePixelRatio, IS_MOBILE ? 1.5 : 2);
let PR = PR_MAX;
renderer.setPixelRatio(PR);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.55;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
stage.appendChild(renderer.domElement);

const labelRenderer = new CSS2DRenderer();
labelRenderer.domElement.className = 'aq-labels';
stage.appendChild(labelRenderer.domElement);

const scene = new THREE.Scene();
const FOG_DAY = new THREE.Color('#e3d7c4');
const FOG_NIGHT = new THREE.Color('#141c33');
scene.fog = new THREE.Fog(FOG_DAY.clone(), 420, 2300);

const camera = new THREE.PerspectiveCamera(38, 1, 1, 9000);
const HOME = { pos: new THREE.Vector3(-320, 185, 105), target: new THREE.Vector3(0, 0, -40) };
camera.position.set(-900, 620, 900);

const controls = new OrbitControls(camera, labelRenderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.maxPolarAngle = 1.38;
controls.minDistance = 30;
controls.maxDistance = 750;
controls.target.copy(HOME.target);
controls.autoRotateSpeed = 0.35;
controls.enabled = false;

// lights
const hemi = new THREE.HemisphereLight('#cfe6ff', '#c9b48e', 0.9);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#ffe2b8', 3.2);
sun.castShadow = true;
sun.shadow.mapSize.set(IS_MOBILE ? 2048 : 4096, IS_MOBILE ? 2048 : 4096);
sun.shadow.camera.left = -250; sun.shadow.camera.right = 250;
sun.shadow.camera.top = 220; sun.shadow.camera.bottom = -220;
sun.shadow.camera.near = 10; sun.shadow.camera.far = 900;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.6;
scene.add(sun, sun.target);

// sky
const sky = new Sky();
sky.scale.setScalar(6000);
const su = sky.material.uniforms;
su.turbidity.value = 7; su.rayleigh.value = 1.8; su.mieCoefficient.value = 0.006; su.mieDirectionalG.value = 0.82;
scene.add(sky);
const sunDir = new THREE.Vector3();
const SUN_AZ = THREE.MathUtils.degToRad(300);
function setSun(elevDeg) {
  const phi = THREE.MathUtils.degToRad(90 - elevDeg);
  sunDir.setFromSphericalCoords(1, phi, SUN_AZ);
  su.sunPosition.value.copy(sunDir);
  const d = sunDir.clone();
  if (d.y < 0.25) d.y = 0.25 + (0.25 - d.y); // keep a usable "moon" light at night
  sun.position.copy(d.normalize().multiplyScalar(450));
}

// environment maps (day / night) from sky
const pmrem = new THREE.PMREMGenerator(renderer);
function skyEnv(elev) {
  setSun(elev);
  const envScene = new THREE.Scene();
  scene.remove(sky); envScene.add(sky);
  const rt = pmrem.fromScene(envScene, 0, 1, 10000);
  envScene.remove(sky); scene.add(sky);
  return rt.texture;
}
const SUN_DAY = 16, SUN_NIGHT = -4.5;
let _envNight = null; const getEnvNight = () => (_envNight || (_envNight = skyEnv(SUN_NIGHT)));
const envDay = skyEnv(SUN_DAY);
setTimeout(() => (window.requestIdleCallback || (f => f()))(() => getEnvNight()), 6000);
scene.environment = envDay;
scene.environmentIntensity = 0.6;

/* =====================================================================
   HELPERS
   ===================================================================== */
const V2 = (x, z) => new THREE.Vector2(x, z);
function roundedRectShape(x0, z0, x1, z1, r) {
  const s = new THREE.Shape();
  s.moveTo(x0 + r, z0);
  s.lineTo(x1 - r, z0); s.quadraticCurveTo(x1, z0, x1, z0 + r);
  s.lineTo(x1, z1 - r); s.quadraticCurveTo(x1, z1, x1 - r, z1);
  s.lineTo(x0 + r, z1); s.quadraticCurveTo(x0, z1, x0, z1 - r);
  s.lineTo(x0, z0 + r); s.quadraticCurveTo(x0, z0, x0 + r, z0);
  return s;
}
// flat shape lying on XZ (shape y -> world z)
function flatShape(shape, y, mat, curveSegs = 12) {
  const g = new THREE.ShapeGeometry(shape, curveSegs);
  g.rotateX(Math.PI / 2); // shape (x,y) -> (x,0,y), but faces down: flip winding + normals
  const ix = g.index.array;
  for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; }
  const nr = g.attributes.normal; for (let i = 0; i < nr.count; i++) nr.setXYZ(i, 0, 1, 0);
  const m = new THREE.Mesh(g, mat);
  m.position.y = y;
  m.receiveShadow = true;
  return m;
}
// round the corners of a polyline
function roundPolyline(pts, r, closed = false, seg = 8) {
  const out = [];
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const p = pts[i];
    const hasPrev = closed || i > 0, hasNext = closed || i < n - 1;
    if (!hasPrev || !hasNext) { out.push(p.clone()); continue; }
    const a = pts[(i - 1 + n) % n], b = pts[(i + 1) % n];
    const da = a.clone().sub(p), db = b.clone().sub(p);
    const la = da.length(), lb = db.length();
    const rr = Math.min(r, la / 2, lb / 2);
    da.normalize(); db.normalize();
    if (Math.abs(da.dot(db)) > 0.995) { out.push(p.clone()); continue; }
    const s = p.clone().addScaledVector(da, rr), e = p.clone().addScaledVector(db, rr);
    for (let k = 0; k <= seg; k++) {
      const t = k / seg, it = 1 - t;
      out.push(new THREE.Vector2(
        it * it * s.x + 2 * it * t * p.x + t * t * e.x,
        it * it * s.y + 2 * it * t * p.y + t * t * e.y));
    }
  }
  return out;
}
function resample(pts, step, closed = false) {
  const src = closed ? [...pts, pts[0]] : pts;
  const out = [src[0].clone()];
  let carry = 0;
  for (let i = 0; i < src.length - 1; i++) {
    const a = src[i], b = src[i + 1];
    const L = a.distanceTo(b);
    let d = step - carry;
    while (d <= L) { out.push(a.clone().lerp(b, d / L)); d += step; }
    carry = L - (d - step);
  }
  if (closed && out.length > 1 && out[out.length - 1].distanceTo(out[0]) < step * 0.5) out.pop();
  return out;
}
function tangents(pts, closed) {
  const n = pts.length;
  return pts.map((p, i) => {
    const a = pts[closed ? (i - 1 + n) % n : Math.max(i - 1, 0)];
    const b = pts[closed ? (i + 1) % n : Math.min(i + 1, n - 1)];
    return b.clone().sub(a).normalize();
  });
}
function offsetLine(pts, off, closed) {
  const t = tangents(pts, closed);
  return pts.map((p, i) => new THREE.Vector2(p.x - t[i].y * off, p.y + t[i].x * off));
}
function ribbonGeo(pts, width, closed = false) {
  const t = tangents(pts, closed);
  const pos = [], uv = [], idx = [];
  let acc = 0;
  pts.forEach((p, i) => {
    if (i > 0) acc += p.distanceTo(pts[i - 1]);
    const nx = -t[i].y * width / 2, nz = t[i].x * width / 2;
    pos.push(p.x + nx, 0, p.y + nz, p.x - nx, 0, p.y - nz);
    uv.push(0, acc / width, 1, acc / width);
  });
  const n = pts.length;
  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const a = i * 2, b = ((i + 1) % n) * 2;
    idx.push(a, b, a + 1, a + 1, b, b + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  // ensure normals point up
  const nrm = g.attributes.normal;
  for (let i = 0; i < nrm.count; i++) nrm.setXYZ(i, 0, 1, 0);
  return g;
}
const rand = (() => { let s = 1337; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();

/* =====================================================================
   MATERIALS
   ===================================================================== */
const M = {
  sand: new THREE.MeshStandardMaterial({ color: '#d2c9b4', roughness: 1 }),
  concrete: new THREE.MeshStandardMaterial({ color: '#b3b1aa', roughness: 0.95 }),
  grass: new THREE.MeshStandardMaterial({ color: '#6f9a4c', roughness: 1 }),
  asphalt: new THREE.MeshStandardMaterial({ color: '#2a2c30', roughness: 0.85 }),
  brick: new THREE.MeshStandardMaterial({ color: '#9a4b3a', roughness: 0.9 }),
  stone: new THREE.MeshStandardMaterial({ color: '#e4e0d6', roughness: 0.8 }),
  paint: new THREE.MeshStandardMaterial({ color: '#f4f4f0', roughness: 0.6, emissive: '#ffffff', emissiveIntensity: 0.05 }),
  white: new THREE.MeshStandardMaterial({ color: '#f6f5f1', roughness: 0.55 }),
  roof: new THREE.MeshStandardMaterial({ color: '#dcdcd7', roughness: 0.8 }),
  dark: new THREE.MeshStandardMaterial({ color: '#2b3036', roughness: 0.5, metalness: 0.4 }),
  metal: new THREE.MeshStandardMaterial({ color: '#b9c0c6', roughness: 0.35, metalness: 0.8 }),
  solar: new THREE.MeshStandardMaterial({ color: '#1b2c4d', roughness: 0.25, metalness: 0.6 }),
  palmLeaf: new THREE.MeshStandardMaterial({ color: '#4f7d33', roughness: 0.9, side: THREE.DoubleSide }),
  trunk: new THREE.MeshStandardMaterial({ color: '#8a6a48', roughness: 1 }),
  tree: new THREE.MeshStandardMaterial({ color: '#5f8d3e', roughness: 0.95, flatShading: true }),
  redTree: new THREE.MeshStandardMaterial({ color: '#c0392b', roughness: 0.9, flatShading: true }),
  window: new THREE.MeshStandardMaterial({ color: '#28414f', roughness: 0.15, metalness: 0.6, emissive: '#ffcf8a', emissiveIntensity: 0 }),
  bulb: new THREE.MeshStandardMaterial({ color: '#fff4dc', emissive: '#ffd7a0', emissiveIntensity: 0.2 }),
  glass: new THREE.MeshPhysicalMaterial({ color: '#9fd6f0', roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.45, emissive: '#ffcc88', emissiveIntensity: 0, envMapIntensity: 1.5 }),
  hdpe: new THREE.MeshStandardMaterial({ color: '#1d2125', roughness: 0.6 }),
  net: new THREE.MeshStandardMaterial({ color: '#0e2a33', roughness: 1, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false }),
};

// facade texture (subtle ribbed cladding like the renders)
function claddingTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#f3f2ee'; g.fillRect(0, 0, 256, 128);
  for (let x = 0; x < 256; x += 8) { g.fillStyle = 'rgba(0,0,0,0.07)'; g.fillRect(x, 0, 2, 128); g.fillStyle = 'rgba(255,255,255,0.6)'; g.fillRect(x + 2, 0, 1, 128); }
  g.fillStyle = 'rgba(0,0,0,0.10)'; g.fillRect(0, 124, 256, 4);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}
const CLAD = claddingTexture();

/* =====================================================================
   WATER (custom shader: shore SDF, foam, shallow lagoon colours)
   ===================================================================== */
// mainland: everything with z > -60 and x < 185 (sea to the south and around the east tip)
// Site from the as-built plan (Phase-02): plan px → scene units (0.25 u/px, 1 u ≈ 0.8 m), origin at plan (700,600).
const P = (px, py) => new THREE.Vector2((px - 700) * 0.25, (py - 600) * 0.25);
// sea: south of COAST_S, east of COAST_E and north-east of the diagonal beach line
const COAST_S = 112, COAST_E = 185;
const DIAG = { p: new THREE.Vector2(-51, -162), d: new THREE.Vector2(0.802, 0.597), n: new THREE.Vector2(0.597, -0.802) };
const waterUniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
  uTime: { value: 0 }, uNight: { value: 0 },
  uSunDir: { value: new THREE.Vector3() },
}]);
const water = new THREE.Mesh(
  new THREE.PlaneGeometry(9000, 9000, IS_MOBILE ? 110 : 220, IS_MOBILE ? 110 : 220).rotateX(-Math.PI / 2),
  new THREE.ShaderMaterial({
    uniforms: waterUniforms, fog: true,
    vertexShader: /* glsl */`
      uniform float uTime; varying vec3 vW;
      #include <fog_pars_vertex>
      void main(){
        vec4 wp = modelMatrix * vec4(position,1.0);
        wp.y += sin(wp.x*0.035+uTime*0.7)*0.35 + sin(wp.z*0.05-uTime*0.9)*0.25;
        vW = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */`
      uniform float uTime; uniform float uNight; uniform vec3 uSunDir; varying vec3 vW;
      #include <common>
      #include <fog_pars_fragment>
      float sdRB(vec2 p, vec2 b, float r){ vec2 q=abs(p)-b+r; return length(max(q,0.))+min(max(q.x,q.y),0.)-r; }
      float sdB(vec2 p, vec2 b){ vec2 q=abs(p)-b; return length(max(q,0.))+min(max(q.x,q.y),0.); }
      float h21(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float a=.5, s=0.; for(int i=0;i<4;i++){ s+=a*vn(p); p*=2.03; a*=.5; } return s; }
      void main(){
        vec2 p = vW.xz;
        float a1 = p.y - ${(COAST_S + 5).toFixed(1)}, a2 = p.x - ${(COAST_E + 5).toFixed(1)};
        float a3 = dot(p - vec2(${DIAG.p.x.toFixed(2)}, ${DIAG.p.y.toFixed(2)}), vec2(${DIAG.n.x.toFixed(3)}, ${DIAG.n.y.toFixed(3)})) - 5.0;
        float k = 12.0; float d = k * log(exp(a1 / k) + exp(a2 / k) + exp(a3 / k)); // smooth max → rounded tip
        // normal from layered waves
        float t = uTime;
        vec2 g = vec2(0.);
        g += vec2(0.035,0.0)*cos(p.x*0.035+t*0.7)*0.35*3.;
        g += vec2(0.0,0.05)*cos(p.y*0.05-t*0.9)*0.25*3.;
        float n1 = fbm(p*0.08+vec2(t*0.12,t*0.07));
        float n2 = fbm(p*0.08+vec2(0.37,0.11)+vec2(t*0.12,t*0.07));
        float n3 = fbm(p*0.08+vec2(0.11,0.37)+vec2(t*0.12,t*0.07));
        g += vec2(n2-n1, n3-n1)*2.2;
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        vec3 V = normalize(cameraPosition - vW);
        // colours
        vec3 shallow = vec3(0.36,0.86,0.80);
        vec3 mid = vec3(0.07,0.58,0.66);
        vec3 deep = vec3(0.03,0.27,0.42);
        float s1 = smoothstep(0., 22., d), s2 = smoothstep(18., 160., d);
        vec3 col = mix(shallow, mid, s1);
        col = mix(col, deep, s2);
        // caustic shimmer in shallows
        float caus = pow(fbm(p*0.25+vec2(t*0.3,-t*0.2)),3.)*1.6*(1.-s1);
        col += caus*vec3(0.5,0.9,0.85);
        // sky reflection + fresnel
        float fr = pow(1.-max(dot(N,V),0.),4.);
        vec3 skyC = mix(vec3(0.62,0.80,0.93), vec3(0.08,0.12,0.26), uNight);
        col = mix(col, skyC, fr*0.65);
        // sun / moon glint
        vec3 L = normalize(vec3(uSunDir.x, max(uSunDir.y,0.18), uSunDir.z));
        vec3 H = normalize(L+V);
        float spec = pow(max(dot(N,H),0.), 420.);
        col += spec * mix(vec3(1.0,0.86,0.62)*5., vec3(0.7,0.8,1.0)*2., uNight);
        // shore foam + breaking rings
        float fn = fbm(p*0.35+vec2(t*0.4,t*0.25));
        float band = 1.-smoothstep(0.,3.2+fn*2.,d);
        float rings = smoothstep(0.82,1.,sin(d*0.55 - t*1.6)*0.5+0.5)*(1.-smoothstep(3.,22.,d))*smoothstep(0.35,0.7,fn);
        float foam = clamp(band + rings*0.7,0.,1.);
        col = mix(col, vec3(0.97), foam*0.9);
        // night
        col *= mix(1.0, 0.16, uNight);
        col += foam*uNight*0.03;
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  }));
scene.add(water);
const WU = water.material.uniforms;

/* =====================================================================
   LAND
   ===================================================================== */
{
  const far = 3000, zDiagE = DIAG.p.y + (COAST_E - DIAG.p.x) / DIAG.d.x * DIAG.d.y;
  const nw = DIAG.p.clone().addScaledVector(DIAG.d, -far);
  const pts = roundPolyline([V2(-far, COAST_S), V2(COAST_E, COAST_S), V2(COAST_E, zDiagE), nw, V2(-far, nw.y)], 24, true, 10);
  const landShape = new THREE.Shape(pts);
  const g = new THREE.ExtrudeGeometry(landShape, { depth: 6, bevelEnabled: true, bevelThickness: 2.5, bevelSize: 5, bevelSegments: 4, curveSegments: 24 });
  g.rotateX(Math.PI / 2);
  const sand = new THREE.Mesh(g, M.sand); sand.position.y = 0.6; sand.receiveShadow = true; scene.add(sand);
}
const GROUND_Y = 3.15;
const diagZ = (x, off = 0) => -150 + (x + 60) * 0.744 + off; // z of the plot boundary line at x
// hard ground of the campus (inside the plot boundary)
scene.add(flatShape(new THREE.Shape(roundPolyline([V2(-178, 104), V2(170, 104), V2(170, diagZ(170)), V2(-93.6, -175), V2(-178, -175)], 10, true)), GROUND_Y + 0.02, M.concrete));
// lawns & landscaping (from the plan)
[[-158, -112, -121, -55, 10], [-113, -78, -90, -58, 3], [-152.5, -42.5, -122.5, 16.25, 4], [-175, 26, -164, 98, 2], [104, 27, 128, 98, 3]].forEach(([x0, z0, x1, z1, r]) =>
  scene.add(flatShape(roundedRectShape(x0, z0, x1, z1, r), GROUND_Y + 0.03, M.grass)));
// stone breakwater along the south shore
{
  const rg = new THREE.DodecahedronGeometry(1, 0);
  const rocks = new THREE.InstancedMesh(rg, new THREE.MeshStandardMaterial({ color: '#8d8679', roughness: 1, flatShading: true }), 900);
  let k = 0;
  for (let x = -320; x < COAST_E - 8; x += 1.4) for (let r = 0; r < 3; r++) {
    if (k >= 900) break;
    const s = 0.9 + rand() * 1.1;
    rocks.setMatrixAt(k++, new THREE.Matrix4().compose(new THREE.Vector3(x + rand(), GROUND_Y - 0.6 - r * 0.9, 106 + r * 2.4 + rand()), new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, 0)), new THREE.Vector3(s * 1.4, s, s * 1.2)));
  }
  rocks.count = k; rocks.receiveShadow = rocks.castShadow = true; scene.add(rocks);
}

/* =====================================================================
   ROADS
   ===================================================================== */
const ROAD_Y = GROUND_Y + 0.08;
const roadGroup = new THREE.Group(); scene.add(roadGroup);
const dashMatrices = [];
const lampSpots = [];
function addRoad(pts2, { width = 7, closed = false, walk = 2.2, dash = true, lamps = 0 } = {}) {
  const pts = resample(pts2, 1.5, closed);
  if (walk > 0) {
    const wg = new THREE.Mesh(ribbonGeo(pts, width + walk * 2, closed), M.brick);
    wg.position.y = ROAD_Y - 0.03; wg.receiveShadow = true; roadGroup.add(wg);
  }
  const rg = new THREE.Mesh(ribbonGeo(pts, width, closed), M.asphalt);
  rg.position.y = ROAD_Y; rg.receiveShadow = true; roadGroup.add(rg);
  const tg = tangents(pts, closed);
  if (dash) {
    pts.forEach((p, i) => {
      if (i % 4 !== 0) return;
      dashMatrices.push(new THREE.Matrix4().compose(new THREE.Vector3(p.x, ROAD_Y + 0.03, p.y),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.atan2(-tg[i].y, tg[i].x), 0)), new THREE.Vector3(1, 1, 1)));
    });
  }
  if (lamps) {
    const every = Math.round(lamps / 1.5);
    pts.forEach((p, i) => {
      if (i % every !== 0) return;
      const side = (i / every) % 2 ? 1 : -1, o = width / 2 + walk * 0.6;
      lampSpots.push(new THREE.Vector3(p.x - tg[i].y * o * side, GROUND_Y, p.y + tg[i].x * o * side));
    });
  }
  return pts;
}
const RB = { x: -160, z: -50, r: 11 };       // roundabout (plan 60,400)
const CDS = { x: 130, z: 91.25, r: 10 };     // cul-de-sac (plan 1220,965)
// west road: mainland → roundabout → south shore
addRoad([V2(-900, RB.z), V2(RB.x - RB.r, RB.z)], { lamps: 20 }); // access from the mainland (west)
addRoad([V2(RB.x, RB.z + RB.r), V2(RB.x, 100.75)], { lamps: 18 });
// north service road (roundabout → along the hatchery building → diagonal road)
const R3 = [P(105, 405), P(590, 410), P(650, 385), P(720, 316)];
addRoad(roundPolyline(R3, 10), { lamps: 16 });
// diagonal coast road to the cul-de-sac
const RD = [P(720, 316), P(1150, 620), P(1200, 680), P(1218, 740), P(1218, 925)]; // only from the hatchery junction to the cul-de-sac
addRoad(roundPolyline(RD, 14), { lamps: 16 });
// central road between Phase 2 and Phase 1, wrapping down to the south road
addRoad(roundPolyline([V2(RB.x, 21.25), P(1080, 685), P(1105, 710), P(1105, 1003)], 10), { lamps: 18 });
// south shore road
addRoad(roundPolyline([V2(RB.x - 20, 100.75), P(1190, 1003), V2(CDS.x - 2, CDS.z + CDS.r - 0.5)], 8), { lamps: 18 });
// west link road beside the hatchery building
addRoad([P(225, 418), P(225, 680)], { width: 6, lamps: 14 });
// drop-off lay-by at the visitor centre
addRoad(new THREE.SplineCurve([V2(RB.x, RB.z - RB.r), V2(-163, -68), V2(-150, -76), V2(-142, -70), V2(-133, -82), V2(-126, -92)]).getPoints(40), { width: 6, dash: false, lamps: 12 });
function ring(c, w) {
  const circ = []; for (let i = 0; i < 64; i++) { const a = i / 64 * Math.PI * 2; circ.push(V2(c.x + Math.cos(a) * c.r, c.z + Math.sin(a) * c.r)); }
  addRoad(circ, { closed: true, width: w, walk: 1.6, dash: false });
  const island = new THREE.Mesh(new THREE.CylinderGeometry(c.r - w / 2, c.r - w / 2, 0.5, 48), M.grass);
  island.position.set(c.x, ROAD_Y + 0.1, c.z); island.receiveShadow = true; scene.add(island);
  const curb = new THREE.Mesh(new THREE.TorusGeometry(c.r - w / 2, 0.35, 8, 64), M.brick);
  curb.rotation.x = Math.PI / 2; curb.position.set(c.x, ROAD_Y + 0.25, c.z); scene.add(curb);
}
ring(RB, 7); ring(CDS, 7);
// research-wing car park (22 + 8 spaces)
{
  scene.add(flatShape(new THREE.Shape(roundPolyline([P(375, 300), P(470, 255), P(560, 385), P(380, 395)], 3, true)), ROAD_Y - 0.01, M.asphalt.clone()));
  for (let i = 0; i < 12; i++) {
    const a = P(395 + i * 13, 330 + i * 2.5);
    const l = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 5.5).rotateX(-Math.PI / 2), M.paint);
    l.position.set(a.x, ROAD_Y + 0.02, a.y); l.rotation.y = -0.5; scene.add(l);
  }
}
// plot boundary (red line, as in the masterplan render)
{
  const red = new THREE.MeshStandardMaterial({ color: '#d0302a', emissive: '#ff2a1f', emissiveIntensity: 0.25 });
  const b = new THREE.Mesh(ribbonGeo(resample([V2(-93.6, -175), V2(170, diagZ(170))], 1), 0.8), red);
  b.position.y = GROUND_Y + 0.06; scene.add(b);
}
// dashes instanced
{
  const dg = new THREE.PlaneGeometry(2.6, 0.35).rotateX(-Math.PI / 2);
  const im = new THREE.InstancedMesh(dg, M.paint, dashMatrices.length);
  dashMatrices.forEach((m, i) => im.setMatrixAt(i, m));
  scene.add(im);
}
/* =====================================================================
   BUILDINGS
   ===================================================================== */
const pickables = [];
const buildingObjs = {}; // id -> { group, mats:[], center, size, pinY }
const windowMeshes = [];
function registerBuilding(id, group, center, size, pinY) {
  const mats = [];
  group.traverse(o => {
    if (o.isMesh) {
      o.userData.bid = id; pickables.push(o);
      if (o.material && o.material.userData && o.material.userData.highlight) mats.push(o.material);
    }
  });
  buildingObjs[id] = { group, mats, center, size, pinY };
  group.scale.y = 0.001; // for the rise-up intro
}
function bodyMaterial(w) {
  const t = CLAD.clone(); t.needsUpdate = true; t.repeat.set(Math.max(1, Math.round(w / 6)), 1);
  const m = new THREE.MeshStandardMaterial({ map: t, color: '#ffffff', roughness: 0.6, emissive: '#2ee6d6', emissiveIntensity: 0 });
  m.userData.highlight = true;
  return m;
}
function roofMaterial() {
  const m = M.roof.clone(); m.emissive = new THREE.Color('#2ee6d6'); m.emissiveIntensity = 0; m.userData.highlight = true; return m;
}
function box(w, h, d, mats) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mats); m.castShadow = m.receiveShadow = true; return m; }

function makeHall(id, parts, opts = {}) {
  // parts: [{x0,x1,z0,z1,h}]
  const xs = parts.flatMap(p => [p.x0, p.x1]), zs = parts.flatMap(p => [p.z0, p.z1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minZ = Math.min(...zs), maxZ = Math.max(...zs);
  const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;
  const group = new THREE.Group(); group.position.set(cx, GROUND_Y, cz);
  const maxH = Math.max(...parts.map(p => p.h));
  const bm = bodyMaterial(Math.max(maxX - minX, maxZ - minZ));
  const rm = roofMaterial();
  parts.forEach(p => {
    const w = p.x1 - p.x0, d = p.z1 - p.z0;
    const px = (p.x0 + p.x1) / 2 - cx, pz = (p.z0 + p.z1) / 2 - cz;
    const b = box(w, p.h, d, [bm, bm, rm, rm, bm, bm]);
    b.position.set(px, p.h / 2, pz); group.add(b);
    // parapet
    const par = box(w + 0.4, 0.8, d + 0.4, [bm, bm, rm, rm, bm, bm]);
    par.scale.set(1, 1, 1); par.position.set(px, p.h + 0.2, pz);
    const inner = box(w - 1.2, 0.9, d - 1.2, rm); inner.position.set(px, p.h + 0.25, pz);
    group.add(par, inner);
    // window bands on long sides
    const bandH = 1.3, by = p.h * 0.62;
    if (w >= d) {
      [-1, 1].forEach(s => { const wb = box(w * 0.86, bandH, 0.3, M.window); wb.position.set(px, by, pz + s * (d / 2 + 0.05)); group.add(wb); windowMeshes.push(wb); });
      // loading doors
      for (let i = 0; i < Math.floor(w / 9); i++) { const dr = box(3.2, 4, 0.25, M.dark); dr.position.set(px - w / 2 + 5 + i * 9, 2, pz + (d / 2 + 0.06)); group.add(dr); }
    } else {
      [-1, 1].forEach(s => { const wb = box(0.3, bandH, d * 0.86, M.window); wb.position.set(px + s * (w / 2 + 0.05), by, pz); group.add(wb); windowMeshes.push(wb); });
    }
    // rooftop HVAC
    const n = Math.floor(w * d / 260);
    for (let i = 0; i < n; i++) {
      const u = box(2 + rand() * 2, 1.2 + rand(), 2 + rand() * 1.5, M.metal);
      u.position.set(px + (rand() - 0.5) * (w - 8), p.h + 0.9, pz + (rand() - 0.5) * (d - 8)); group.add(u);
    }
    // solar
    if (opts.solar) {
      const rows = Math.floor((d - 6) / 3.2), cols = Math.floor((w - 8) / 2.4);
      const pg = new THREE.BoxGeometry(2.1, 0.12, 2.6);
      const im = new THREE.InstancedMesh(pg, M.solar, rows * cols); im.castShadow = true;
      let k = 0; const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.32, 0, 0));
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++)
        im.setMatrixAt(k++, new THREE.Matrix4().compose(new THREE.Vector3(px - w / 2 + 5 + c * 2.4, p.h + 1.0, pz - d / 2 + 4.5 + r * 3.2), q, new THREE.Vector3(1, 1, 1)));
      group.add(im);
    }
  });
  scene.add(group);
  registerBuilding(id, group, new THREE.Vector3(cx, GROUND_Y, cz), Math.max(maxX - minX, maxZ - minZ), maxH + 9);
  return group;
}

// Phase 2 — Hatchery Building (three zones), Broodstock Building, Plant Room, Generator Room
makeHall('nursery', [{ x0: -113.75, x1: -57.5, z0: -34.5, z1: 0.5, h: 10 }]);
makeHall('hatchery', [{ x0: -57.5, x1: -15, z0: -34.5, z1: 0.5, h: 10 }, { x0: -38.75, x1: -15, z0: 0.5, z1: 15, h: 7 }]);
makeHall('livefeed', [{ x0: -15, x1: 1.25, z0: -34.5, z1: 0.5, h: 10 }, { x0: -15, x1: 1.25, z0: 0.5, z1: 15, h: 7 }]);
makeHall('broodstock', [{ x0: 3.75, x1: 50, z0: -32.5, z1: 13.75, h: 12 }, { x0: 25, x1: 32.5, z0: -41.25, z1: -32.5, h: 7 }]);
makeHall('plantroom', [{ x0: 50, x1: 71.25, z0: -16.25, z1: 10, h: 9 }]);
makeHall('genroom', [{ x0: 80, x1: 91.25, z0: 1.25, z1: 12.5, h: 5.5 }]);
// Phase 1 — existing hatchery buildings (south row)
makeHall('phase1', [
  { x0: -140, x1: -57.5, z0: 36.25, z1: 75, h: 11 }, { x0: -57.5, x1: -25, z0: 32.5, z1: 90, h: 11 },
  { x0: -16.25, x1: 32.5, z0: 31.25, z1: 62.5, h: 10 }, { x0: -12.5, x1: 38.75, z0: 66.25, z1: 90, h: 9 },
  { x0: 46.25, x1: 93.75, z0: 31.25, z1: 53.75, h: 10 }, { x0: 51.25, x1: 93.75, z0: 70, z1: 85, h: 8 }]);
buildingObjs.phase1.pinY = 20;
// live-feed: algae photobioreactor columns along the north facade (glow at night)
{
  const fm = buildingObjs.livefeed;
  M.algae = new THREE.MeshPhysicalMaterial({ color: '#57c46a', roughness: 0.15, transparent: true, opacity: 0.75, emissive: '#5dff7a', emissiveIntensity: 0.05 });
  M.algaeB = new THREE.MeshPhysicalMaterial({ color: '#c9a640', roughness: 0.15, transparent: true, opacity: 0.75, emissive: '#ffcf4d', emissiveIntensity: 0.05 });
  const cg = new THREE.CylinderGeometry(0.8, 0.8, 6, 16);
  for (let i = 0; i < 5; i++) {
    const c = new THREE.Mesh(cg, i % 2 ? M.algae : M.algaeB); c.castShadow = true;
    c.position.set(-6 + i * 3, 3, -26.5); c.userData.bid = 'livefeed'; fm.group.add(c); pickables.push(c);
  }
}
// small service buildings, transformer, fire-fighting tank, substation
[[108.75, 33.75, 116.25, 42.5, 4], [111, 47.5, 125, 58.75, 5], [-7.5, -61, 5, -48.75, 6], [92, 4, 98, 10, 3.5]].forEach(([x0, z0, x1, z1, h]) => {
  const b = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, h, z1 - z0), M.white); b.castShadow = b.receiveShadow = true;
  b.position.set((x0 + x1) / 2, GROUND_Y + h / 2, (z0 + z1) / 2); scene.add(b);
});
{
  const ft = new THREE.Mesh(new THREE.BoxGeometry(16, 3, 13), M.concrete); ft.position.set(149, GROUND_Y + 1.5, 72); ft.castShadow = true; scene.add(ft);
  [[145, 72], [153, 72]].forEach(([x, z]) => { const c = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 4.5, 24), M.white); c.position.set(x, GROUND_Y + 3 + 2.25, z); c.castShadow = true; scene.add(c); });
}
// research & administration wing: two bars along the diagonal road around a planted courtyard
{
  const c = new THREE.Vector2(-55, -95), ang = Math.atan2(0.714, 1), dir = new THREE.Vector2(Math.cos(ang), Math.sin(ang)), nrm = new THREE.Vector2(dir.y, -dir.x);
  const g = new THREE.Group(); g.position.set(c.x, GROUND_Y, c.y); g.rotation.y = -ang;
  const bm = bodyMaterial(80), rm = roofMaterial();
  [[0, 7, 88, 11, 9], [-8, -11.5, 64, 9, 9]].forEach(([along, off, len, wid, h]) => {
    const b = box(len, h, wid, [bm, bm, rm, rm, bm, bm]); b.position.set(along, h / 2, -off); g.add(b);
    [-1, 1].forEach(sd => { const wb = box(len * 0.88, 1.6, 0.3, M.window); wb.position.set(along, h * 0.55, -off + sd * (wid / 2 + 0.05)); g.add(wb); windowMeshes.push(wb); });
    const par = box(len + 0.4, 0.8, wid + 0.4, [bm, bm, rm, rm, bm, bm]); par.position.set(along, h + 0.2, -off); g.add(par);
  });
  const court = flatShape(roundedRectShape(-40, -3.5, 36, 3, 1), 0.04, M.grass); court.position.y = 0.04; g.add(court);
  const red = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(2.2, 1), M.redTree, 11); red.castShadow = true;
  for (let i = 0; i < 11; i++) red.setMatrixAt(i, new THREE.Matrix4().compose(new THREE.Vector3(-34 + i * 6.5, 3.6, -0.3 + (i % 2 ? 1 : -1)), new THREE.Quaternion(), new THREE.Vector3(0.9, 1, 0.9)));
  g.add(red);
  scene.add(g);
  registerBuilding('research', g, new THREE.Vector3(c.x, GROUND_Y, c.y), 70, 18);
  buildingObjs.research.dir = dir; buildingObjs.research.nrm = nrm;
}
// ---------- the shell dome (Visitor Center) ----------
const DOME = { x: -107.5, z: -108.75, rx: 16, rz: 16, h: 13, base: 4.5 };
{
  const g = new THREE.Group(); g.position.set(DOME.x, GROUND_Y, DOME.z);
  // plaza
  const plaza = new THREE.Mesh(new THREE.CylinderGeometry(23.5, 23.5, 0.3, 72), M.stone);
  plaza.position.y = 0.1; plaza.receiveShadow = true; g.add(plaza);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(23.5, 0.4, 8, 96), M.brick); ring.rotation.x = Math.PI / 2; ring.position.y = 0.25; g.add(ring);
  // glass drum
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, DOME.base, 72, 1, true), M.glass);
  drum.scale.set(DOME.rx * 0.93, 1, DOME.rz * 0.93); drum.position.y = DOME.base / 2 + 0.25; g.add(drum);
  const core = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, DOME.base - 0.2, 48), new THREE.MeshStandardMaterial({ color: '#d8cbb3', emissive: '#ffb86b', emissiveIntensity: 0 }));
  core.scale.set(DOME.rx * 0.7, 1, DOME.rz * 0.7); core.position.y = DOME.base / 2 + 0.25; g.add(core);
  M.domeCore = core.material;
  // mullions
  const mg = new THREE.BoxGeometry(0.25, DOME.base, 0.25);
  const mull = new THREE.InstancedMesh(mg, M.metal, 64);
  for (let i = 0; i < 64; i++) { const a = i / 64 * Math.PI * 2; mull.setMatrixAt(i, new THREE.Matrix4().makeTranslation(Math.cos(a) * DOME.rx * 0.935, DOME.base / 2 + 0.25, Math.sin(a) * DOME.rz * 0.935)); }
  g.add(mull);
  // shell: ribbed ellipsoid, apex shifted back like a scallop
  const U = 160, Vn = 40, pos = [], idx = [];
  for (let j = 0; j <= Vn; j++) {
    const v = j / Vn, phi = v * Math.PI / 2;
    for (let i = 0; i <= U; i++) {
      const th = i / U * Math.PI * 2;
      const rib = 1 + 0.07 * Math.pow(Math.abs(Math.cos(th * 9)), 0.5) * Math.pow(Math.cos(phi), 0.7) - 0.035;
      const lip = 1 + 0.06 * (1 - v) * (0.5 + 0.5 * Math.cos(th)); // front lip flares
      const cr = Math.cos(phi) * rib * lip;
      const x = DOME.rx * Math.cos(th) * cr - Math.sin(phi) * 4.5;
      const z = DOME.rz * Math.sin(th) * cr;
      const y = DOME.base + 0.2 + DOME.h * Math.sin(phi) * (1 + 0.08 * Math.cos(th));
      pos.push(x, y, z);
    }
  }
  for (let j = 0; j < Vn; j++) for (let i = 0; i < U; i++) {
    const a = j * (U + 1) + i, b = a + U + 1;
    idx.push(a, b, a + 1, a + 1, b, b + 1);
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); sg.setIndex(idx); sg.computeVertexNormals();
  const shellMat = new THREE.MeshPhysicalMaterial({ color: '#fbfaf6', roughness: 0.45, sheen: 0.6, sheenColor: new THREE.Color('#fff2dd'), clearcoat: 0.3, side: THREE.DoubleSide, emissive: '#2ee6d6', emissiveIntensity: 0 });
  shellMat.userData.highlight = true;
  const shell = new THREE.Mesh(sg, shellMat); shell.castShadow = true; shell.receiveShadow = true; g.add(shell);
  // rim band
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1, 0.012, 8, 120), M.white);
  rim.scale.set(DOME.rx * 1.02, DOME.rz * 1.02, 30); rim.rotation.x = Math.PI / 2; rim.position.y = DOME.base + 0.2; g.add(rim);
  // entrance canopy
  const ent = box(4, 0.5, 9, M.white); ent.position.set(-DOME.rx * 0.7, DOME.base + 0.2, DOME.rz * 0.78); ent.rotation.y = 0.84; g.add(ent);
  scene.add(g);
  registerBuilding('visitor', g, new THREE.Vector3(DOME.x, GROUND_Y, DOME.z), 36, DOME.h + DOME.base + 10);
  // keep the plaza out of the rise-up / highlight picking
  pickables.splice(pickables.indexOf(plaza), 1);
}

// ---------- tensile canopy parking (white sails) ----------
{
  const sail = new THREE.PlaneGeometry(9, 9, 12, 12).rotateX(-Math.PI / 2);
  const p = sail.attributes.position;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i); p.setY(i, (x * z) / 20 * 0.9 + 0.8 * Math.cos(x / 9 * Math.PI)); }
  sail.computeVertexNormals();
  const sm = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.5, side: THREE.DoubleSide, emissive: '#fff', emissiveIntensity: 0.05 });
  for (let i = 0; i < 6; i++) {
    const s = new THREE.Mesh(sail, sm); s.castShadow = true;
    const a = P(400 + i * 24, 338 + i * 4);
    s.position.set(a.x, GROUND_Y + 5, a.y); s.rotation.y = -0.5 + (i % 2 ? 0.08 : -0.08); scene.add(s);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 6, 6), M.metal); pole.position.set(a.x + 2, GROUND_Y + 3, a.y + 3.5); scene.add(pole);
  }
}
// ---------- entrance arch ----------
{
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-130, GROUND_Y, -58.5), new THREE.Vector3(-131, GROUND_Y + 10, -53.5), new THREE.Vector3(-132.5, GROUND_Y + 13, -47.5),
    new THREE.Vector3(-132, GROUND_Y + 9, -43.5), new THREE.Vector3(-130.5, GROUND_Y, -39.5)]);
  const arch = new THREE.Mesh(new THREE.TubeGeometry(curve, 80, 0.45, 12), M.metal); arch.castShadow = true; scene.add(arch);
  const c2 = new THREE.CatmullRomCurve3(curve.points.map(p => p.clone().add(new THREE.Vector3(1.6, -0.6 * (p.y - GROUND_Y) / 13, 0))));
  const arch2 = new THREE.Mesh(new THREE.TubeGeometry(c2, 80, 0.22, 10), M.white); scene.add(arch2);
}
const pens = [];
{
  const coastPt = (t, s) => DIAG.p.clone().addScaledVector(DIAG.d, t).addScaledVector(DIAG.n, s);
  const ang = Math.atan2(DIAG.d.y, DIAG.d.x);
  const penMat = M.hdpe.clone(); penMat.emissive = new THREE.Color('#2ee6d6'); penMat.emissiveIntensity = 0; penMat.userData.highlight = true;
  const g = new THREE.Group(); scene.add(g);
  function cage(x, z, r, birdNet) {
    const pen = new THREE.Group(); pen.position.set(x, 0.4, z);
    const t1 = new THREE.Mesh(new THREE.TorusGeometry(r, 0.45, 10, 72), penMat); t1.rotation.x = Math.PI / 2;
    const t2 = t1.clone(); t2.scale.setScalar(1 + 1.2 / r);
    const rail = new THREE.Mesh(new THREE.TorusGeometry(r + 0.6, 0.12, 6, 72), M.metal); rail.rotation.x = Math.PI / 2; rail.position.y = 1.3;
    const net = new THREE.Mesh(new THREE.CylinderGeometry(r - 0.2, r - 1.5, 7, 48, 1, true), M.net); net.position.y = -3;
    const inner = new THREE.Mesh(new THREE.CircleGeometry(r - 0.3, 48).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#0a3d4d', roughness: 0.3, metalness: 0.2 })); inner.position.y = -0.1;
    const nP = Math.round(r * 1.6), posts = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.07, 0.07, 1.3, 4), M.metal, nP);
    for (let j = 0; j < nP; j++) { const a = j / nP * Math.PI * 2; posts.setMatrixAt(j, new THREE.Matrix4().makeTranslation(Math.cos(a) * (r + 0.6), 0.65, Math.sin(a) * (r + 0.6))); }
    pen.add(t1, t2, rail, net, inner, posts);
    if (birdNet) { // anti-bird ropes from a centre pole, as in the video
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 5, 6), M.metal); pole.position.y = 2.5; pen.add(pole);
      const lp = []; for (let j = 0; j < 12; j++) { const a = j / 12 * Math.PI * 2; lp.push(new THREE.Vector3(0, 5, 0), new THREE.Vector3(Math.cos(a) * (r + 0.6), 1.3, Math.sin(a) * (r + 0.6))); }
      pen.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(lp), new THREE.LineBasicMaterial({ color: '#dfe6ea', transparent: true, opacity: 0.6 })));
    }
    pen.userData.phase = rand() * 6;
    g.add(pen); pens.push(pen); return pen;
  }
  // near-shore cages (no jetty: access by boat)
  for (let i = 0; i < 4; i++) for (const sd of [-1, 1]) { const c = coastPt(90 + i * 20, 44 + sd * 11); cage(c.x, c.y, 8.5, true); }
  // open-sea cage farm further out, on a mooring grid with buoys
  const buoys = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
    const q = coastPt(70 + c * 38, 120 + r * 38); cage(q.x, q.y, 13, false);
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.8, 10, 8), new THREE.MeshStandardMaterial({ color: '#ff8a1f', roughness: 0.5 })); b.position.set(q.x + 19, 0.4, q.y + 19); scene.add(b); buoys.push(b);
  }
  // work boat circling the farm
  const boat = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.BoxGeometry(9, 1.6, 3.4), M.white); hull.position.y = 0.6;
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 2.6), M.dark); cabin.position.set(-1, 2.2, 0);
  const wake = new THREE.Mesh(new THREE.PlaneGeometry(16, 4).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.35, depthWrite: false })); wake.position.set(-12, 0.15, 0);
  boat.add(hull, cabin, wake); scene.add(boat);
  const farmC = coastPt(127, 158);
  pens.boat = { boat, c: farmC, buoys };
  registerBuilding('seacages', g, new THREE.Vector3(coastPt(120, 90).x, 0, coastPt(120, 90).y), 120, 14);
  g.scale.y = 1; g.position.y = -12;
  buildingObjs.seacages.near = coastPt(120, 44);
}

/* =====================================================================
   VEGETATION + STREET LIGHTS
   ===================================================================== */
const LAWNS = [[-158, -112, -121, -55], [-113, -78, -90, -58], [-152.5, -42.5, -122.5, 16.25], [-175, 26, -164, 98], [104, 27, 128, 98]];
const occupied = (x, z) => Math.hypot(x - DOME.x, z - DOME.z) < 26 || Math.hypot(x - RB.x, z - RB.z) < 15;
{
  // palm geometry
  const leaves = [];
  for (let i = 0; i < 8; i++) {
    const lf = new THREE.PlaneGeometry(1.1, 5.2, 1, 4);
    const p = lf.attributes.position;
    for (let k = 0; k < p.count; k++) { const y = p.getY(k) + 2.6; p.setY(k, y); p.setZ(k, -0.06 * y * y); p.setX(k, p.getX(k) * (1 - y / 6.5)); }
    lf.rotateX(-Math.PI / 2 + 0.35); lf.rotateY(i / 8 * Math.PI * 2);
    leaves.push(lf);
  }
  const crown = mergeGeometries(leaves);
  const trunkG = new THREE.CylinderGeometry(0.22, 0.35, 1, 6).translate(0, 0.5, 0);
  const palmSpots = [];
  // along the diagonal coast road, sea side
  resample(roundPolyline(RD.slice(0, 2), 14), 11).forEach((p, i, arr) => { if (i === 0 || i === arr.length - 1) return; const t = arr[i + 1].clone().sub(arr[i - 1]).normalize(); palmSpots.push([p.x + t.y * 7, p.y - t.x * 7]); });
  for (let z = -34; z <= 90; z += 12) palmSpots.push([RB.x - 7, z]);
  for (let x = -300; x <= -176; x += 12) palmSpots.push([x, RB.z - 7], [x, RB.z + 7]);
  for (let x = -140; x <= 95; x += 13) palmSpots.push([x, 27.8]);
  for (let a = 0; a < 7; a++) { const ang = Math.PI * 0.55 + a / 6 * Math.PI * 0.9; palmSpots.push([DOME.x + Math.cos(ang) * 26, DOME.z + Math.sin(ang) * 26]); }
  const filtered = palmSpots.filter(([x, z]) => !(Math.hypot(x - RB.x, z - RB.z) < 14));
  const tr = new THREE.InstancedMesh(trunkG, M.trunk, filtered.length), cr = new THREE.InstancedMesh(crown, M.palmLeaf, filtered.length);
  tr.castShadow = cr.castShadow = true;
  filtered.forEach(([x, z], i) => {
    const h = 7 + rand() * 3;
    tr.setMatrixAt(i, new THREE.Matrix4().compose(new THREE.Vector3(x, GROUND_Y, z), new THREE.Quaternion(), new THREE.Vector3(1, h, 1)));
    cr.setMatrixAt(i, new THREE.Matrix4().compose(new THREE.Vector3(x, GROUND_Y + h, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rand() * 6, 0)), new THREE.Vector3(1, 1, 1)));
  });
  scene.add(tr, cr);
  // desert shrubs on the mainland
  {
    const sg = new THREE.IcosahedronGeometry(1, 0);
    const sh = new THREE.InstancedMesh(sg, new THREE.MeshStandardMaterial({ color: '#6f7a45', roughness: 1, flatShading: true }), 320);
    let k = 0;
    for (let i = 0; i < 2000 && k < 320; i++) {
      const x = -800 + rand() * 640, z = -700 + rand() * 800;
      if (Math.abs(x - RB.x) < 14 || z > 100 || Math.abs(z - RB.z) < 14) continue;
      if (z < diagZ(x, 8)) continue; // stay on the mainland side, away from the beach
      if (x > -180) continue;
      const s = 0.4 + rand() * 0.9;
      sh.setMatrixAt(k++, new THREE.Matrix4().compose(new THREE.Vector3(x, GROUND_Y + s * 0.3, z), new THREE.Quaternion(), new THREE.Vector3(s * 1.4, s * 0.7, s * 1.4)));
    }
    sh.count = k; scene.add(sh);
  }
  // round trees on lawns
  const tg = new THREE.IcosahedronGeometry(2.6, 1);
  const spots = [];
  for (let i = 0; i < 600 && spots.length < 40; i++) {
    const L = LAWNS[Math.floor(rand() * LAWNS.length)], x = L[0] + 3 + rand() * (L[2] - L[0] - 6), z = L[1] + 3 + rand() * (L[3] - L[1] - 6);
    if (!occupied(x, z)) spots.push([x, z]);
  }
  const trees = new THREE.InstancedMesh(tg, M.tree, spots.length); trees.castShadow = true;
  const trunks = new THREE.InstancedMesh(trunkG, M.trunk, spots.length);
  spots.forEach(([x, z], i) => {
    const s = 0.7 + rand() * 0.7;
    trees.setMatrixAt(i, new THREE.Matrix4().compose(new THREE.Vector3(x, GROUND_Y + 3.5 * s + 1.2, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rand(), rand(), 0)), new THREE.Vector3(s, s * 1.1, s)));
    trunks.setMatrixAt(i, new THREE.Matrix4().compose(new THREE.Vector3(x, GROUND_Y, z), new THREE.Quaternion(), new THREE.Vector3(1, 2.5 * s, 1)));
  });
  scene.add(trees, trunks);
  // big tree on the roundabout island
  const big = new THREE.Mesh(new THREE.IcosahedronGeometry(4.2, 1), new THREE.MeshStandardMaterial({ color: '#a3742f', flatShading: true, roughness: 1 }));
  big.position.set(RB.x, GROUND_Y + 7, RB.z); big.castShadow = true; scene.add(big);
  const bt = new THREE.Mesh(trunkG, M.trunk); bt.scale.set(1.5, 5, 1.5); bt.position.set(RB.x, GROUND_Y, RB.z); scene.add(bt);
}
// street lights
{
  const pole = new THREE.CylinderGeometry(0.12, 0.16, 7, 6).translate(0, 3.5, 0);
  const head = new THREE.SphereGeometry(0.45, 10, 8);
  const pl = new THREE.InstancedMesh(pole, M.metal, lampSpots.length);
  const hd = new THREE.InstancedMesh(head, M.bulb, lampSpots.length);
  lampSpots.forEach((p, i) => {
    pl.setMatrixAt(i, new THREE.Matrix4().makeTranslation(p.x, p.y, p.z));
    hd.setMatrixAt(i, new THREE.Matrix4().makeTranslation(p.x, p.y + 7.1, p.z));
  });
  scene.add(pl, hd);
}

/* =====================================================================
   CARS (looping along road lanes)
   ===================================================================== */
class Track {
  constructor(pts, closed = true) {
    this.p = resample(pts, 1, closed); if (closed) this.p.push(this.p[0].clone());
    this.L = [0]; for (let i = 1; i < this.p.length; i++) this.L.push(this.L[i - 1] + this.p[i].distanceTo(this.p[i - 1]));
    this.total = this.L[this.L.length - 1];
  }
  at(d) {
    d = ((d % this.total) + this.total) % this.total;
    let lo = 0, hi = this.L.length - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (this.L[m] < d) lo = m; else hi = m; }
    const t = (d - this.L[lo]) / (this.L[hi] - this.L[lo] || 1);
    const a = this.p[lo], b = this.p[hi];
    return { x: a.x + (b.x - a.x) * t, z: a.y + (b.y - a.y) * t, ang: Math.atan2(-(b.y - a.y), b.x - a.x) };
  }
}
function arc(cx, cz, r, a0, a1, n = 16) { const o = []; for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; o.push(V2(cx + Math.cos(a) * r, cz + Math.sin(a) * r)); } return o; }
const LOOP = [V2(RB.x, 21.25), V2(101.25, 21.25), V2(101.25, 100.75), V2(RB.x, 100.75)];
const loopLane = new Track(offsetLine(resample(roundPolyline(LOOP, 10, true), 1, true), 1.7, true));
const loopLane2 = new Track(offsetLine(resample(roundPolyline([...LOOP].reverse(), 10, true), 1, true), 1.7, true));
// out-and-back route: mainland → roundabout → north road → diagonal coast road → cul-de-sac
function outBack(F) {
  const a = offsetLine(resample(roundPolyline(F, 8), 1), -1.7, false);
  const b = offsetLine(resample(roundPolyline([...F].reverse(), 8), 1), -1.7, false);
  return new Track([...a, ...arc(CDS.x, CDS.z, CDS.r, -Math.PI * 0.5, Math.PI * 1.5, 24), ...b], true);
}
const grand = outBack([V2(-900, RB.z), V2(RB.x - RB.r - 1, RB.z), ...arc(RB.x, RB.z, RB.r, Math.PI, Math.PI * 2, 12).slice(1), ...R3, ...RD.slice(1)]);
const carColors = ['#f5f5f5', '#1c1f24', '#b8bec5', '#2c5d9e', '#f5f5f5', '#8e1e22', '#d9d9d9'];
const cars = [];
const carBodyG = new THREE.BoxGeometry(4.2, 1.2, 2);
const carCabG = new THREE.BoxGeometry(2.3, 0.9, 1.8);
const lightMat = new THREE.MeshStandardMaterial({ color: '#fff', emissive: '#fff6e0', emissiveIntensity: 0.3 });
const tailMat = new THREE.MeshStandardMaterial({ color: '#600', emissive: '#ff2020', emissiveIntensity: 0.3 });
function makeCar(track, d, speed) {
  const g = new THREE.Group();
  const col = carColors[Math.floor(rand() * carColors.length)];
  const body = new THREE.Mesh(carBodyG, new THREE.MeshStandardMaterial({ color: col, roughness: 0.3, metalness: 0.6 })); body.position.y = 0.9; body.castShadow = true;
  const cab = new THREE.Mesh(carCabG, new THREE.MeshStandardMaterial({ color: '#1a2630', roughness: 0.1, metalness: 0.8 })); cab.position.set(-0.3, 1.9, 0);
  const hl = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.3, 1.6), lightMat); hl.position.set(2.12, 1, 0);
  const tl = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.3, 1.6), tailMat); tl.position.set(-2.12, 1, 0);
  g.add(body, cab, hl, tl);
  scene.add(g);
  cars.push({ g, track, d, speed });
}
for (let i = 0; i < 6; i++) makeCar(loopLane, i * 70 + rand() * 20, 9 + rand() * 4);
for (let i = 0; i < 4; i++) makeCar(loopLane2, i * 100 + rand() * 20, 8 + rand() * 4);
for (let i = 0; i < 16; i++) makeCar(grand, i * (grand.total / 16), 13 + rand() * 6);
// parked cars
for (let i = 0; i < 16; i++) {
  if (rand() < 0.3) continue;
  const g = new THREE.Group();
  const body = new THREE.Mesh(carBodyG, new THREE.MeshStandardMaterial({ color: carColors[i % carColors.length], roughness: 0.3, metalness: 0.6 })); body.position.y = 0.9; body.castShadow = true;
  const cab = new THREE.Mesh(carCabG, new THREE.MeshStandardMaterial({ color: '#1a2630', roughness: 0.1, metalness: 0.8 })); cab.position.set(-0.3, 1.9, 0);
  g.add(body, cab); g.rotation.y = Math.PI / 2;
  const a = P(398 + (i % 11) * 13, 345 + (i % 11) * 2.5 + (i > 10 ? 28 : 0)); g.rotation.y = Math.PI / 2 - 0.5; g.position.set(a.x, GROUND_Y, a.y); scene.add(g);
}

/* =====================================================================
   BIRDS + STARS
   ===================================================================== */
const birds = [];
{
  const wing = new THREE.BufferGeometry();
  wing.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, -0.4, 0, 1.6, 0.6, 0, 0.3], 3));
  wing.computeVertexNormals();
  const bm = new THREE.MeshBasicMaterial({ color: '#2a2a2a', side: THREE.DoubleSide, fog: true });
  for (let i = 0; i < 18; i++) {
    const g = new THREE.Group();
    const l = new THREE.Mesh(wing, bm), r = new THREE.Mesh(wing, bm); r.scale.z = -1;
    g.add(l, r); g.scale.setScalar(1.4);
    g.userData = { l, r, rad: 60 + rand() * 50, h: 45 + rand() * 25, sp: 0.1 + rand() * 0.05, ph: rand() * 6.28, cx: 20 + rand() * 60, cz: -170 + rand() * 40 };
    scene.add(g); birds.push(g);
  }
}
const stars = (() => {
  const n = 1800, p = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const v = new THREE.Vector3().setFromSphericalCoords(4000, Math.acos(rand() * 0.95), rand() * 6.283); p.set([v.x, v.y, v.z], i * 3); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  const s = new THREE.Points(g, new THREE.PointsMaterial({ color: '#fff', size: 1.8, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false }));
  scene.add(s); return s;
})();

/* =====================================================================
   PINS (HTML) + selection glow
   ===================================================================== */
let downPos = null;
const pinEls = {};
const stems = [];
BUILDINGS.forEach((b) => {
  const o = buildingObjs[b.id]; if (!o) return;
  const el = document.createElement('div');
  el.className = 'aq-pin';
  el.innerHTML = `<button class="aq-pin-dot" aria-label="${b.name}"><span>${b.n}</span><i></i><i></i></button><div class="aq-pin-label"><small>${b.tag}</small>${b.name}</div>`;
  el.addEventListener('pointerdown', (e) => { e.stopPropagation(); downPos = null; });
  el.querySelector('button').addEventListener('click', (e) => { e.stopPropagation(); if (ready) select(b.id); });
  el.addEventListener('pointerenter', () => setHover(b.id));
  el.addEventListener('pointerleave', () => setHover(null));
  const obj = new CSS2DObject(el);
  const base = o.id === 'pens' ? 0 : GROUND_Y;
  const pc = b.id === 'seacages' ? o.near : o.center;
  obj.position.set(pc.x, (b.id === 'seacages' ? 0 : GROUND_Y) + o.pinY, pc.y !== undefined && pc.z === undefined ? pc.y : pc.z);
  obj.center.set(0.5, 1);
  scene.add(obj);
  pinEls[b.id] = { el, obj, baseY: obj.position.y };
  // stem
  const sg = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0)]);
  const sm = new THREE.LineBasicMaterial({ color: '#7ff5ea', transparent: true, opacity: 0, depthWrite: false });
  const stem = new THREE.Line(sg, sm);
  const baseY = b.id === 'seacages' ? 0 : GROUND_Y;
  const topY = baseY + o.pinY - 1.5, botY = baseY + o.pinY - 9;
  stem.position.set(obj.position.x, botY, obj.position.z); stem.scale.y = Math.max(topY - botY, 0.1);
  scene.add(stem); stems.push(stem);
});

// selection footprint glow
const selGlow = (() => {
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uOp: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `uniform float uTime; uniform float uOp; varying vec2 vUv;
      void main(){ vec2 c=vUv-.5; float d=length(c)*2.;
        float ring=smoothstep(0.02,0.,abs(fract(d-uTime*0.6)-0.5)-0.46);
        float edge=smoothstep(1.,0.92,d)*smoothstep(0.85,0.98,d);
        float a=(ring*0.5+edge)*smoothstep(1.,0.9,d)*uOp;
        gl_FragColor=vec4(vec3(0.18,0.95,0.88)*a*0.9, a); }`,
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), mat);
  m.renderOrder = 5; scene.add(m); return m;
})();

/* =====================================================================
   POST-PROCESSING
   ===================================================================== */
const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: IS_MOBILE ? 0 : 4 }));
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);
let curScene = scene, curInterior = null, curInteriorId = null;
const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.25, 0.6, 0.92);
composer.addPass(bloom);
composer.addPass(new OutputPass());

/* =====================================================================
   UI
   ===================================================================== */
const ui = {
  panel: root.querySelector('.aq-panel'),
  chips: root.querySelector('.aq-chips'),
  intro: root.querySelector('.aq-intro'),
  loader: root.querySelector('.aq-loader'),
  hint: root.querySelector('.aq-hint'),
};
root.querySelector('.aq-intro h1').textContent = CONFIG.title;
root.querySelector('.aq-intro p').textContent = CONFIG.subtitle;
root.querySelector('.aq-brand b').textContent = CONFIG.brand || CONFIG.title;
root.querySelector('.aq-brand span').textContent = CONFIG.kicker;
{ const ch = root.querySelector('.aq-chips');
  const edges = () => { const m = ch.scrollWidth - ch.clientWidth; ch.classList.toggle('fade-l', ch.scrollLeft > 4); ch.classList.toggle('fade-r', ch.scrollLeft < m - 4); };
  ch.addEventListener('wheel', (e) => { if (ch.scrollWidth > ch.clientWidth && Math.abs(e.deltaY) > Math.abs(e.deltaX)) { ch.scrollLeft += e.deltaY; e.preventDefault(); } }, { passive: false });
  ch.addEventListener('scroll', edges, { passive: true }); new ResizeObserver(edges).observe(ch); setTimeout(edges, 500);
  new MutationObserver(() => { const a = ch.querySelector('.aq-chip.active'); a && a.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' }); setTimeout(edges, 600); }).observe(ch, { attributes: true, subtree: true, attributeFilter: ['class'] }); }
BUILDINGS.forEach(b => {
  const c = document.createElement('button'); c.className = 'aq-chip'; c.dataset.id = b.id;
  c.innerHTML = `<span>${b.n}</span><b>${b.name}</b>`; c.title = b.name;
  c.addEventListener('click', () => select(b.id));
  c.addEventListener('pointerenter', () => setHover(b.id)); c.addEventListener('pointerleave', () => setHover(null));
  ui.chips.appendChild(c);
});
const statCls = (v) => { const n = String(v).length; return n > 9 ? 'xl' : n > 6 ? 'l' : ''; };
function renderPanel(b) {
  const i = BUILDINGS.indexOf(b);
  ui.panel.innerHTML = `
    <div class="aq-grab" aria-label="Expand or collapse"></div>
    <button class="aq-close" aria-label="Close">×</button>
    <div class="aq-p-hero"><div class="aq-p-head">SKMRC <i>◆</i> ${b.n}</div><span class="aq-p-num">${b.n}</span>${b.script ? `<div class="aq-p-script">${b.script}</div>` : ''}<div class="aq-p-wave"></div></div>
    <div class="aq-p-body">
      <div class="aq-p-tag">${b.tag}</div>
      <h2>${b.name}</h2>
      <p>${b.desc}</p>
      ${b.bullets ? `<ul class="aq-p-list">${b.bullets.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
      <div class="aq-p-stats">${b.stats.map(([v, l]) => `<div><b class="${statCls(v)}">${v}</b><small>${l}</small></div>`).join('')}</div>
      <button class="aq-cta" data-id="${b.id}">Discover more →</button>
    </div>
    <div class="aq-p-nav"><button data-go="-1">‹ Prev</button><span>${i + 1} / ${BUILDINGS.length}</span><button data-go="1">Next ›</button></div>`;
  ui.panel.querySelector('.aq-close').onclick = () => deselect();
  ui.panel.querySelectorAll('[data-go]').forEach(btn => btn.onclick = () => {
    const j = (i + Number(btn.dataset.go) + BUILDINGS.length) % BUILDINGS.length; select(BUILDINGS[j].id);
  });
  ui.panel.querySelector('.aq-cta').onclick = () => emit('aqua:cta', { id: b.id, building: b });
}
root.querySelector('[data-act="night"]').addEventListener('click', (e) => { setNight(!night.target); e.currentTarget.classList.toggle('on', night.target === 1); });
root.querySelector('[data-act="tour"]').addEventListener('click', (e) => { toggleTour(); });
{ const sb = root.querySelector('[data-act="sound"]');
  const upd = () => { sb.classList.toggle('snd-on', ambient.playing); sb.classList.toggle('muted', !ambient.enabled); sb.classList.toggle('snd-wait', ambient.enabled && !ambient.playing);
    sb.title = !ambient.enabled ? 'Sound off — click to enable' : ambient.playing ? 'Sound on — click to mute' : 'Click anywhere to start the sound';; const lb = sb.querySelector('b'); if (lb) lb.textContent = ambient.enabled && !ambient.playing ? 'Tap for sound' : 'Sound'; };
  sb.addEventListener('click', (e) => { e.stopPropagation(); if (ambient.enabled && !ambient.playing) ambient.start(); else ambient.setEnabled(!ambient.enabled); upd(); });
  ambient.onChange(upd); upd(); }
root.querySelector('[data-act="home"]').addEventListener('click', () => { stopTour(); if (mode === 'interior') exitBuilding(() => deselect()); else deselect(); });

/* =====================================================================
   INTERACTION
   ===================================================================== */
const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
let hovered = null, selected = null;
let lastInteract = performance.now();
function pick(e) {
  const r = renderer.domElement.getBoundingClientRect();
  ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hit = raycaster.intersectObjects(pickables, false)[0];
  return hit ? hit.object.userData.bid : null;
}
labelRenderer.domElement.addEventListener('pointerdown', (e) => { downPos = [e.clientX, e.clientY]; lastInteract = performance.now(); stopTour(true); });
labelRenderer.domElement.addEventListener('pointermove', (e) => {
  if (!ready || e.buttons) return;
  if (mode === 'interior') { const k = pickItem(e); setHoverItem(k); labelRenderer.domElement.style.cursor = k ? 'pointer' : 'grab'; return; }
  if (mode !== 'orbit' && mode !== 'drone') return;
  const id = pick(e); setHover(id);
  labelRenderer.domElement.style.cursor = id ? 'pointer' : (mode === 'drone' ? 'crosshair' : 'grab');
});
labelRenderer.domElement.addEventListener('pointerup', (e) => {
  if (!ready || !downPos) return;
  if (Math.hypot(e.clientX - downPos[0], e.clientY - downPos[1]) > 5) return;
  if (mode === 'interior') { const k = pickItem(e); if (k) selectItem(k, pickInst); return; }
  if (mode !== 'orbit' && mode !== 'drone') return;
  const id = pick(e); if (id) select(id); else if (selected) deselect();
});
labelRenderer.domElement.addEventListener('wheel', () => { lastInteract = performance.now(); }, { passive: true });

function setHover(id) {
  if (hovered === id) return;
  hovered = id;
  Object.entries(pinEls).forEach(([k, p]) => p.el.classList.toggle('hover', k === id));
  ui.chips.querySelectorAll('.aq-chip').forEach(c => c.classList.toggle('hover', c.dataset.id === id));
}
function select(id, fromTour = false) {
  const b = BUILDINGS.find(x => x.id === id); const o = buildingObjs[id]; if (!b || !o) return;
  if (!fromTour) stopTour(true);
  selected = id; lastInteract = performance.now();
  Object.entries(pinEls).forEach(([k, p]) => p.el.classList.toggle('active', k === id));
  ui.chips.querySelectorAll('.aq-chip').forEach(c => c.classList.toggle('active', c.dataset.id === id));
  renderPanel(b); root.classList.add('panel-open');
  // camera
  const c = o.center.clone(); c.y = id === 'pens' ? 0 : GROUND_Y + 4;
  const dir = camera.position.clone().sub(controls.target).setY(0).normalize();
  if (dir.lengthSq() < 0.01) dir.set(-0.7, 0, 0.7);
  const af = Math.pow(Math.max(1, 1.1 / camera.aspect), 0.85);
  const dist = (o.size * 1.25 + 62) * af;
  const pos = c.clone().addScaledVector(dir, dist).add(new THREE.Vector3(0, (o.size * 0.7 + 42) * af, 0));
  if (fromTour) { if (mode === 'orbit') flyTo(pos, c, 1.8); } else enterBuilding(id);
  // glow
  selGlow.position.set(o.center.x, (id === 'pens' ? 1.2 : GROUND_Y + 0.25), o.center.z);
  const s = o.size * (id === 'pens' ? 1.0 : 1.45); selGlow.scale.set(s, 1, s);
  glowOp.target = 1;
  emit('aqua:select', { id, building: b });
}
function deselect() {
  if (mode === 'interior' || mode === 'transit') { deselectQuiet(); return; }
  selected = null; root.classList.remove('panel-open');
  Object.values(pinEls).forEach(p => p.el.classList.remove('active'));
  ui.chips.querySelectorAll('.aq-chip').forEach(c => c.classList.remove('active'));
  glowOp.target = 0;
  if (mode === 'orbit') flyTo(HOME.pos, HOME.target, 1.8);
  emit('aqua:deselect', {});
}
function emit(type, detail) {
  root.dispatchEvent(new CustomEvent(type, { detail, bubbles: true }));
  if (window.parent !== window) window.parent.postMessage({ type, id: detail.id || null }, '*');
}
window.addEventListener('message', (e) => {
  const d = e.data || {};
  if (d.type === 'aqua:focus' && d.id) select(d.id);
  if (d.type === 'aqua:home') deselect();
  if (d.type === 'aqua:night') setNight(!!d.value);
  if (d.type === 'aqua:mode' && d.mode) setMode(d.mode);
});

// camera tween
let fly = null;
const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
function flyTo(pos, target, dur) {
  fly = { p0: camera.position.clone(), t0: controls.target.clone(), p1: pos.clone(), t1: target.clone(), start: performance.now(), dur: dur * 1000 };
  controls.enabled = false; controls.autoRotate = false;
}
// tour
let tour = null;
function toggleTour() { tour ? stopTour() : startTour(); }
function startTour() {
  tour = { i: -1, next: 0 };
  root.querySelector('[data-act="tour"]').classList.add('on');
}
function stopTour(silent) {
  if (!tour) return; tour = null;
  root.querySelector('[data-act="tour"]').classList.remove('on');
}


/* =====================================================================
   FLIGHT MODES: free drone + cinematic fly-through
   ===================================================================== */
let mode = 'orbit'; // 'orbit' | 'drone' | 'cine'
const M_PER_UNIT = 0.8;
const hud = {
  el: root.querySelector('.aq-hud'), alt: root.querySelector('[data-hud="alt"]'), spd: root.querySelector('[data-hud="spd"]'),
  hdg: root.querySelector('[data-hud="hdg"]'), tape: root.querySelector('.aq-hud-tape'), rec: root.querySelector('[data-hud="rec"]'),
  cap: root.querySelector('.aq-caption'), capT: root.querySelector('.aq-caption b'), capS: root.querySelector('.aq-caption small'),
};
const drone = { pos: new THREE.Vector3(), vel: new THREE.Vector3(), yaw: 0, pitch: -0.3, roll: 0, speed: 26, keys: {}, look: null, sticks: {}, boxes: [], recStart: 0 };
const fovT = { v: 38, target: 38 };
function setMode(m) {
  if (m === mode) return;
  const prev = mode; mode = m;
  root.classList.toggle('mode-drone', m === 'drone');
  root.classList.toggle('mode-cine', m === 'cine');
  root.querySelector('[data-act="drone"]').classList.toggle('on', m === 'drone');
  root.querySelector('[data-act="cine"]').classList.toggle('on', m === 'cine');
  stopTour(true); fly = null;
  if (m === 'orbit') {
    const f = new THREE.Vector3(); camera.getWorldDirection(f);
    const tgt = camera.position.clone().addScaledVector(f, Math.min(120, Math.max(30, (camera.position.y - GROUND_Y) / Math.max(0.2, -f.y))));
    tgt.y = Math.max(GROUND_Y, Math.min(tgt.y, 20));
    controls.target.copy(tgt); camera.up.set(0, 1, 0);
    controls.enabled = true; fovT.target = 38; hideCaption();
    if (prev === 'cine') flyTo(HOME.pos, HOME.target, 2.2);
  } else {
    controls.enabled = false; controls.autoRotate = false;
    if (selected && m === 'cine') { deselectQuiet(); }
  }
  if (m === 'drone') {
    drone.pos.copy(camera.position);
    const d = new THREE.Vector3(); camera.getWorldDirection(d);
    drone.yaw = Math.atan2(-d.x, -d.z); drone.pitch = Math.asin(THREE.MathUtils.clamp(d.y, -0.99, 0.99));
    drone.vel.set(0, 0, 0); drone.roll = 0; fovT.target = 62; drone.recStart = performance.now();
    drone.boxes = Object.entries(buildingObjs).map(([id, o]) => new THREE.Box3().setFromObject(o.group).expandByScalar(2.5));
    root.focus({ preventScroll: true });
  }
  if (m === 'cine') startCine();
  emit('aqua:mode', { mode: m });
}
function deselectQuiet() {
  selected = null; root.classList.remove('panel-open'); glowOp.target = 0;
  Object.values(pinEls).forEach(p => p.el.classList.remove('active'));
  ui.chips.querySelectorAll('.aq-chip').forEach(c => c.classList.remove('active'));
}

// ---- keyboard / mouse / touch for the drone
const KEYMAP = { KeyW: 'f', ArrowUp: 'f', KeyS: 'b', ArrowDown: 'b', KeyA: 'l', ArrowLeft: 'l', KeyD: 'r', ArrowRight: 'r',
  KeyE: 'u', Space: 'u', KeyQ: 'd', KeyC: 'd', ShiftLeft: 'boost', ShiftRight: 'boost' };
window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && mode === 'interior') { exitBuilding(); return; }
  if (e.code === 'Escape' && (mode === 'drone' || mode === 'cine')) { setMode('orbit'); return; }
  if (mode !== 'drone') return;
  const k = KEYMAP[e.code]; if (k) { drone.keys[k] = true; e.preventDefault(); }
});
window.addEventListener('keyup', (e) => { const k = KEYMAP[e.code]; if (k) drone.keys[k] = false; });
window.addEventListener('blur', () => { drone.keys = {}; });
const lab = labelRenderer.domElement;
lab.addEventListener('pointerdown', (e) => {
  if (mode !== 'drone') return;
  const r = lab.getBoundingClientRect();
  if (e.pointerType === 'touch' && e.clientX - r.left < r.width / 2) drone.sticks[e.pointerId] = { kind: 'move', x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY };
  else drone.sticks[e.pointerId] = { kind: 'look', x: e.clientX, y: e.clientY };
  lab.setPointerCapture(e.pointerId);
});
lab.addEventListener('pointermove', (e) => {
  const st = drone.sticks[e.pointerId]; if (mode !== 'drone' || !st) return;
  if (st.kind === 'look') {
    const k = e.pointerType === 'touch' ? 0.006 : 0.0035;
    drone.yaw -= (e.clientX - st.x) * k; drone.pitch = THREE.MathUtils.clamp(drone.pitch - (e.clientY - st.y) * k, -1.45, 0.7);
  }
  st.x = e.clientX; st.y = e.clientY;
});
const endStick = (e) => { delete drone.sticks[e.pointerId]; };
lab.addEventListener('pointerup', endStick); lab.addEventListener('pointercancel', endStick);
lab.addEventListener('wheel', (e) => { if (mode === 'drone') drone.speed = THREE.MathUtils.clamp(drone.speed * (1 - e.deltaY * 0.001), 6, 120); }, { passive: true });
root.querySelectorAll('[data-alt]').forEach(b => {
  const dir = b.dataset.alt;
  b.addEventListener('pointerdown', (e) => { e.stopPropagation(); drone.keys[dir] = true; });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => b.addEventListener(ev, () => { drone.keys[dir] = false; }));
});

const _f = new THREE.Vector3(), _r = new THREE.Vector3(), _tv = new THREE.Vector3();
function updateDrone(dt, t) {
  const K = drone.keys;
  let f = (K.f ? 1 : 0) - (K.b ? 1 : 0), sx = (K.r ? 1 : 0) - (K.l ? 1 : 0), u = (K.u ? 1 : 0) - (K.d ? 1 : 0);
  // touch move-stick
  Object.values(drone.sticks).forEach(st => {
    if (st.kind !== 'move') return;
    f += THREE.MathUtils.clamp(-(st.y - st.y0) / 60, -1, 1); sx += THREE.MathUtils.clamp((st.x - st.x0) / 60, -1, 1);
  });
  f = THREE.MathUtils.clamp(f, -1, 1); sx = THREE.MathUtils.clamp(sx, -1, 1);
  const boost = K.boost ? 2.6 : 1;
  _f.set(-Math.sin(drone.yaw), 0, -Math.cos(drone.yaw));
  _r.set(Math.cos(drone.yaw), 0, -Math.sin(drone.yaw));
  _tv.copy(_f).multiplyScalar(f).addScaledVector(_r, sx).multiplyScalar(drone.speed * boost);
  _tv.y = u * drone.speed * 0.7;
  drone.vel.lerp(_tv, Math.min(1, dt * 2.2));
  drone.pos.addScaledVector(drone.vel, dt);
  // limits + collisions
  drone.pos.y = THREE.MathUtils.clamp(drone.pos.y, GROUND_Y + 2.5, 420);
  drone.pos.x = THREE.MathUtils.clamp(drone.pos.x, -900, 900); drone.pos.z = THREE.MathUtils.clamp(drone.pos.z, -800, 900);
  drone.boxes.forEach(bx => {
    if (!bx.containsPoint(drone.pos)) return;
    const p = drone.pos;
    const pen = [[p.x - bx.min.x, 'x', bx.min.x], [bx.max.x - p.x, 'x', bx.max.x], [p.y - bx.min.y, 'y', bx.min.y], [bx.max.y - p.y, 'y', bx.max.y], [p.z - bx.min.z, 'z', bx.min.z], [bx.max.z - p.z, 'z', bx.max.z]];
    pen.sort((a, b) => a[0] - b[0]); const [, ax, v] = pen[0];
    p[ax] = v; drone.vel[ax] = 0;
  });
  // banking + hover sway
  const localSide = drone.vel.dot(_r) / Math.max(drone.speed, 1);
  const localFwd = drone.vel.dot(_f) / Math.max(drone.speed, 1);
  drone.roll += (-localSide * 0.18 - drone.roll) * Math.min(1, dt * 3);
  camera.position.copy(drone.pos); camera.position.y += Math.sin(t * 1.7) * 0.06;
  camera.rotation.order = 'YXZ';
  camera.rotation.set(drone.pitch - localFwd * 0.035 + Math.sin(t * 1.3) * 0.004, drone.yaw, drone.roll + Math.sin(t * 0.9) * 0.004);
  // HUD
  const spd = drone.vel.length() * M_PER_UNIT * 3.6;
  hud.alt.textContent = Math.round((drone.pos.y - GROUND_Y) * M_PER_UNIT) + ' m';
  hud.spd.textContent = Math.round(spd) + ' km/h';
  updateHeading(drone.yaw);
  const rs = Math.floor((performance.now() - drone.recStart) / 1000);
  hud.rec.textContent = `REC ${String(Math.floor(rs / 60)).padStart(2, '0')}:${String(rs % 60).padStart(2, '0')}`;
  nearestCaption(drone.pos, 70);
}
function updateHeading(yaw) {
  let deg = ((-THREE.MathUtils.radToDeg(yaw)) % 360 + 360) % 360; // 0 = -Z (sea / south-west in our scene)
  deg = (deg + 180) % 360; // treat the sea direction as S
  const names = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  hud.hdg.textContent = `${names[Math.round(deg / 45) % 8]} ${String(Math.round(deg)).padStart(3, '0')}°`;
  hud.tape.style.backgroundPositionX = `${-deg * 4}px`;
}

// ---- cinematic fly-through
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const CINE = {
  pos: new THREE.CatmullRomCurve3([V3(40, 90, -330), V3(70, 22, -175), V3(-40, 30, -175), V3(-125, 24, -150), V3(-150, 16, -95),
    V3(-150, 12, -60), V3(-128, 9, -48.75), V3(-60, 11, -46), V3(18, 16, -48), V3(85, 34, -30), V3(175, 80, 50), V3(80, 140, 200), V3(-300, 150, 75)], false, 'centripetal'),
  tgt: new THREE.CatmullRomCurve3([V3(80, 0, -150), V3(80, 2, -120), V3(-70, 6, -100), V3(-107, 8, -109), V3(-107, 6, -109),
    V3(-160, 4, -50), V3(-90, 6, -48), V3(-10, 6, -36), V3(30, 6, -18), V3(60, 5, 0), V3(40, 0, 40), V3(-10, 0, 20), V3(-5, 0, -35)], false, 'centripetal'),
  dur: 56, start: 0,
};
function startCine() { CINE.start = performance.now(); fovT.target = 46; drone.recStart = performance.now(); camera.up.set(0, 1, 0); }
const _p = new THREE.Vector3(), _t = new THREE.Vector3(), _p2 = new THREE.Vector3();
function updateCine(t) {
  const k = (performance.now() - CINE.start) / 1000 / CINE.dur;
  if (k >= 1) { setMode('orbit'); return; }
  const u = k < 0.06 ? (k * k) / 0.12 : k > 0.94 ? 1 - ((1 - k) * (1 - k)) / 0.12 : k - 0.03; // soft in/out
  const uu = THREE.MathUtils.clamp(u / 0.94 * 0.94 + 0, 0, 1);
  CINE.pos.getPoint(uu, _p); CINE.tgt.getPoint(uu, _t);
  camera.position.copy(_p); camera.position.y += Math.sin(t * 1.1) * 0.12;
  camera.lookAt(_t);
  // bank into the turns
  CINE.pos.getPoint(Math.min(1, uu + 0.01), _p2);
  const turn = new THREE.Vector3().subVectors(_p2, _p).normalize().cross(new THREE.Vector3().subVectors(_t, _p).normalize()).y;
  camera.rotateZ(THREE.MathUtils.clamp(turn * 0.25, -0.08, 0.08));
  hud.alt.textContent = Math.round((_p.y - GROUND_Y) * M_PER_UNIT) + ' m';
  const d = new THREE.Vector3(); camera.getWorldDirection(d); updateHeading(Math.atan2(-d.x, -d.z));
  hud.spd.textContent = 'AUTO';
  const rs = Math.floor((performance.now() - CINE.start) / 1000);
  hud.rec.textContent = `REC 00:${String(rs).padStart(2, '0')}`;
  nearestCaption(_t, 55);
}
// lower-third caption with the building we are looking at
let capId = null;
function nearestCaption(p, maxD) {
  let best = null, bd = maxD;
  Object.entries(buildingObjs).forEach(([id, o]) => { const d = Math.hypot(o.center.x - p.x, o.center.z - p.z) - o.size * 0.35; if (d < bd) { bd = d; best = id; } });
  if (best === capId) return;
  capId = best;
  hud.cap.classList.remove('show');
  if (!best) return;
  const b = BUILDINGS.find(x => x.id === best);
  setTimeout(() => { if (capId !== best) return; hud.capT.textContent = b.name; hud.capS.textContent = `${b.n} · ${b.tag}`; hud.cap.classList.add('show'); }, 250);
}
function hideCaption() { capId = null; hud.cap.classList.remove('show'); }
root.querySelector('[data-act="drone"]').addEventListener('click', () => setMode(mode === 'drone' ? 'orbit' : 'drone'));
root.querySelector('[data-act="cine"]').addEventListener('click', () => setMode(mode === 'cine' ? 'orbit' : 'cine'));
root.querySelector('.aq-hud-exit').addEventListener('click', () => setMode('orbit'));

/* =====================================================================
   ENTER A BUILDING: flight to the door → portal → interior
   ===================================================================== */
let seq = null;
const portal = root.querySelector('.aq-portal');
function runSeq(steps) { seq = { steps, i: 0, t0: performance.now() }; steps[0].start && steps[0].start(); }
function updateSeq(now) {
  const st = seq.steps[seq.i]; const k = Math.min((now - seq.t0) / (st.dur * 1000), 1);
  st.update && st.update(k);
  if (k >= 1) {
    st.end && st.end(); seq.i++; seq.t0 = now;
    if (seq.i >= seq.steps.length) seq = null; else seq.steps[seq.i].start && seq.steps[seq.i].start();
  }
}
function setFov(v) { camera.fov = v; fovT.v = fovT.target = v; camera.updateProjectionMatrix(); }
const easeIn = k => k * k * k, easeOut = k => 1 - Math.pow(1 - k, 3);
function doorFor(id) {
  const o = buildingObjs[id], g = GROUND_Y;
  const D = {
    visitor: [DOME.x - 11.5, DOME.z + 13, -0.67, 0.75],
    nursery: [-85, 0.5, 0, 1], hatchery: [-27, 15, 0, 1], livefeed: [-7, 15, 0, 1],
    broodstock: [14, -32.5, 0, -1], plantroom: [60, 10, 0, 1], genroom: [86, 12.5, 0, 1], phase1: [8, 31.25, 0, -1],
  }[id];
  if (id === 'research') { const n = o.nrm.clone().negate(); const p = new THREE.Vector2(o.center.x, o.center.z).addScaledVector(n, 16.5); return { p: new THREE.Vector3(p.x, g, p.y), n: new THREE.Vector3(n.x, 0, n.y), o }; }
  if (id === 'seacages') { const c = pens[0].position; return { p: new THREE.Vector3(c.x, -2.5, c.z), n: new THREE.Vector3(0.25, 1, 0.25).normalize(), o }; }
  return { p: new THREE.Vector3(D[0], g, D[1]), n: new THREE.Vector3(D[2], 0, D[3]).normalize(), o };
}
function hideCSS(sc) { sc.traverse(o => { if (o.isCSS2DObject) o.element.style.display = 'none'; }); }
function interiorLimits(on) {
  controls.minDistance = on ? 2 : 30; controls.maxDistance = on ? 34 : 750; controls.maxPolarAngle = on ? 1.62 : 1.38;
}
function switchTo(sc, it, id) {
  clearItem(); ifly = null; if (hoverBox.parent) hoverBox.parent.remove(hoverBox); if (selBox.parent) selBox.parent.remove(selBox);
  hideCSS(curScene);
  curScene = sc; renderPass.scene = sc; curInterior = it; curInteriorId = id;
  ambient.setEnv(id);
  root.classList.toggle('mode-interior', !!it);
}
function dollySteps(from, to, fov0, fov1, dur, onEnd) {
  const p0 = from.pos.clone(), t0 = from.target.clone(), p1 = to.pos.clone(), t1 = to.target.clone(), tg = new THREE.Vector3();
  return { dur, update: (k) => {
    const e = ease(k);
    camera.position.lerpVectors(p0, p1, e); tg.lerpVectors(t0, t1, e); camera.up.set(0, 1, 0); camera.lookAt(tg);
    setFov(THREE.MathUtils.lerp(fov0, fov1, easeOut(k)));
    portal.style.opacity = String(Math.max(0, 1 - k * 2.4));
  }, end: () => { controls.target.copy(t1); onEnd && onEnd(); } };
}
function enterBuilding(id) {
  if (seq) return;
  if (mode === 'drone' || mode === 'cine') { setMode('orbit'); fly = null; }
  const it = getInterior(id, renderer, (k) => selectItem(k));
  stopTour(true); fly = null; controls.enabled = false; controls.autoRotate = false;
  const finish = () => { mode = 'interior'; interiorLimits(true); controls.enabled = true; lastInteract = performance.now(); emit('aqua:enter', { id }); };
  if (mode === 'interior') { // jump from one interior to another
    if (curInteriorId === id) return;
    mode = 'transit';
    runSeq([
      { dur: 0.45, update: (k) => { portal.style.opacity = String(k); setFov(THREE.MathUtils.lerp(camera.fov, 85, k * 0.2)); } },
      { dur: 2.4, start: () => { switchTo(it.scene, it, id); camera.position.copy(it.entry.pos); setFov(80); }, ...dollySteps(it.entry, it.view, 80, 50, 2.4, finish) },
    ]);
    return;
  }
  mode = 'transit';
  const d = doorFor(id), up = new THREE.Vector3(0, 1, 0);
  const A = d.p.clone().addScaledVector(d.n, 42).addScaledVector(up, 16), At = d.p.clone().addScaledVector(up, 3);
  const P2 = d.p.clone().addScaledVector(d.n, 0.6).addScaledVector(up, 3), T2 = d.p.clone().addScaledVector(d.n, -25).addScaledVector(up, 3);
  // glowing doorway
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(7, 5.5), new THREE.MeshBasicMaterial({ color: '#7ff5ea', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
  glow.position.copy(d.p).addScaledVector(d.n, 0.4).addScaledVector(up, 2.75); glow.lookAt(glow.position.clone().add(d.n)); scene.add(glow);
  const c0 = camera.position.clone(), tg0 = controls.target.clone(), tg = new THREE.Vector3();
  const arcH = c0.distanceTo(A) * 0.1;
  runSeq([
    { dur: 2.4, update: (k) => {
      const e = ease(k); camera.position.lerpVectors(c0, A, e); camera.position.y += Math.sin(e * Math.PI) * arcH;
      tg.lerpVectors(tg0, At, e); camera.up.set(0, 1, 0); camera.lookAt(tg); setFov(THREE.MathUtils.lerp(fovT.v, 42, 0.05));
      glow.material.opacity = e * 0.25;
    } },
    { dur: 1.15, update: (k) => {
      const e = easeIn(k); camera.position.lerpVectors(A, P2, e); tg.lerpVectors(At, T2, easeOut(k)); camera.lookAt(tg);
      setFov(THREE.MathUtils.lerp(42, 82, e));
      glow.material.opacity = 0.25 + e * 0.75;
      portal.style.opacity = String(Math.max(0, (k - 0.55) / 0.45));
    }, end: () => { scene.remove(glow); glow.geometry.dispose(); } },
    { dur: 2.6, start: () => { switchTo(it.scene, it, id); camera.position.copy(it.entry.pos); }, ...dollySteps(it.entry, it.view, 82, 50, 2.6, finish) },
  ]);
}
function exitBuilding(after) {
  if (mode !== 'interior' || seq) return;
  const id = curInteriorId, d = doorFor(id), up = new THREE.Vector3(0, 1, 0);
  mode = 'transit'; controls.enabled = false; controls.autoRotate = false;
  const from = { pos: d.p.clone().addScaledVector(d.n, 3).addScaledVector(up, 3), target: d.p.clone().addScaledVector(d.n, 40).addScaledVector(up, 3) };
  const to = { pos: d.p.clone().addScaledVector(d.n, d.o.size * 1.1 + 55).addScaledVector(up, d.o.size * 0.5 + 34), target: d.o.center.clone().setY(GROUND_Y + 4) };
  runSeq([
    { dur: 0.45, update: (k) => { portal.style.opacity = String(k); } },
    { dur: 2.6, start: () => { switchTo(scene, null, null); interiorLimits(false); camera.position.copy(from.pos); },
      ...dollySteps(from, to, 75, 38, 2.6, () => { mode = 'orbit'; controls.enabled = true; emit('aqua:exit', { id }); after && after(); }) },
  ]);
}
root.querySelector('.aq-exitbld').addEventListener('click', () => exitBuilding());

/* =====================================================================
   INTERIOR ELEMENTS: hover, click → focus + info card with live values
   ===================================================================== */
let hoverItem = null, selItem = null, ifly = null, liveTimer = null, pickInst = null, selFish = null;
const fishMark = (() => { const el = document.createElement('div'); el.className = 'aq-fishsel'; el.innerHTML = '<i></i><b></b>'; const o = new CSS2DObject(el); o.visible = false; return o; })();
const hoverBox = new THREE.Box3Helper(new THREE.Box3(), new THREE.Color('#ffffff'));
const selBox = new THREE.Box3Helper(new THREE.Box3(), new THREE.Color('#f0a43c'));
[hoverBox, selBox].forEach(h => { h.material.toneMapped = false; h.material.transparent = true; h.visible = false; });
hoverBox.material.opacity = 0.45;
function pickItem(e) {
  if (!curInterior) return null;
  const r = renderer.domElement.getBoundingClientRect();
  ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  pickInst = null;
  if (curInterior.fish) {
    const ray = raycaster.ray, p = new THREE.Vector3(), tol = e.pointerType === 'touch' ? 1.6 : 1.0;
    let best = null;
    curInterior.fish.forEach(sch => {
      for (let i = 0; i < sch.n; i++) {
        p.fromArray(sch.pos, i * 3); const along = p.clone().sub(ray.origin).dot(ray.direction); if (along < 0.5) continue;
        const d = ray.distanceToPoint(p), r = sch.sc[i] * tol + along * 0.012;
        if (d < r && (!best || along < best.along)) best = { sch, i, along };
      }
    });
    if (best) { pickInst = best; return best.sch.item; }
  }
  const hits = raycaster.intersectObjects(curInterior.scene.children, true);
  for (const h of hits) { let o = h.object; while (o && !o.userData.item) o = o.parent; if (o) return o.userData.item; if (!h.object.material || !h.object.material.transparent) break; }
  return null;
}
function attachHelpers() { if (curInterior) { curInterior.scene.add(hoverBox, selBox); } }
function setHoverItem(k) {
  if (k === hoverItem) return; hoverItem = k;
  root.querySelectorAll('.aq-tag-link').forEach(el => el.classList.toggle('hover', el.dataset.item === k));
  if (!k || k === selItem || curInterior.items[k].noFocus) { hoverBox.visible = false; return; }
  attachHelpers(); hoverBox.box.copy(curInterior.items[k].hit).expandByScalar(0.15); hoverBox.visible = true;
}
function selectItem(k, inst) {
  if (mode !== 'interior' || !curInterior) return;
  const it = curInterior.items[k]; if (!it) return;
  selItem = k; attachHelpers(); hoverBox.visible = false;
  if (it.noFocus) { // a fish: flash its school, mark the individual, no camera move
    selBox.visible = false;
    const sch = curInterior.fish && curInterior.fish.find(x => x.item === k);
    selFish = sch ? { sch, i: inst && inst.sch === sch ? inst.i : 0 } : null;
    if (selFish) { curInterior.scene.add(fishMark); fishMark.visible = true; fishMark.element.querySelector('b').textContent = fishId(k, selFish.i); }
    curInterior.scene.traverse(o => { if (o.isInstancedMesh && o.userData.item) { const on = o.userData.item === k; o.material.emissiveIntensity = on ? 0.55 : 0; } });
    setTimeout(() => curInterior && curInterior.scene.traverse(o => { if (o.isInstancedMesh && o.userData.fish) o.material.emissiveIntensity = 0; }), 1400);
    renderItemPanel(it, selFish ? selFish.i : null); root.classList.add('panel-open'); lastInteract = performance.now();
    emit('aqua:item', { id: curInteriorId, item: k, fish: selFish ? fishId(k, selFish.i) : null }); return;
  }
  selBox.box.copy(it.hit).expandByScalar(0.25); selBox.visible = true;
  root.querySelectorAll('.aq-tag-link').forEach(el => el.classList.toggle('active', el.dataset.item === k));
  // camera: frame the element, keep the current viewing side
  const c = new THREE.Vector3(), sz = new THREE.Vector3(); it.hit.getCenter(c); it.hit.getSize(sz);
  const dir = camera.position.clone().sub(c); dir.y = Math.max(dir.y, dir.length() * 0.35); dir.normalize();
  const dist = THREE.MathUtils.clamp(Math.max(sz.x, sz.z) * 0.9 + sz.y + 4, 5, 24);
  const to = c.clone().addScaledVector(dir, dist); to.clamp(curInterior.bounds.min, curInterior.bounds.max);
  ifly = { p0: camera.position.clone(), t0: controls.target.clone(), p1: to, t1: c, start: performance.now(), dur: 1100 };
  controls.enabled = false;
  renderItemPanel(it); root.classList.add('panel-open');
  lastInteract = performance.now();
  emit('aqua:item', { id: curInteriorId, item: k });
}
function clearItem() {
  selFish = null; fishMark.visible = false; if (fishMark.parent) { fishMark.element.style.display = 'none'; fishMark.parent.remove(fishMark); }
  selItem = null; selBox.visible = false; hoverBox.visible = false; hoverItem = null;
  root.querySelectorAll('.aq-tag-link').forEach(el => el.classList.remove('active', 'hover'));
  clearInterval(liveTimer); liveTimer = null;
}
const FISH_ID = { 'fish-hamour': ['HAM', 640, 0.22], 'fish-shaari': ['SHA', 410, 0.2], 'fish-hamrah': ['HMR', 380, 0.2], 'fish-ummdrais': ['UMD', 450, 0.2] };
function fishId(k, i) { const p = FISH_ID[k]; return p ? `${p[0]}-${String(410 + i * 7).padStart(4, '0')}` : ''; }
function fishCard(k, i) {
  const p = FISH_ID[k]; if (!p) return null;
  const r = (n) => { const x = Math.sin((i + 1) * 12.9898 + n * 78.233) * 43758.5453; return x - Math.floor(x); };
  const w = Math.round(p[1] * (0.75 + r(1) * 0.55)), len = Math.round(Math.cbrt(w / 0.0125)), age = 7 + Math.floor(r(2) * 6), chk = 1 + Math.floor(r(3) * 9);
  return { id: fishId(k, i), w, len, rows: [['Tag ID', fishId(k, i)], ['Weight', `${w} g`], ['Length', `${len} cm`], ['Age', `${age} months`], ['Batch', `SC-07 · B${12 + (i % 5)}`], ['Origin', 'SKMRC hatchery'], ['Health', `Healthy · checked ${chk} day${chk > 1 ? 's' : ''} ago`]] };
}
function renderItemPanel(it, fishIdx = null) {
  const fc = fishIdx !== null && fishIdx !== undefined ? fishCard(it.key, fishIdx) : null;
  const b = BUILDINGS.find(x => x.id === curInteriorId);
  const keys = curInterior.items._order, i = keys.indexOf(it.key);
  const board = it.board ? `<div class="aq-board">${it.board.map(([l, v]) => `<div><span>${l}:</span> <b>${v}</b></div>`).join('')}</div>` : '';
  const live = (it.live || []).map(([l, base, amp, unit, dec], j) => `<div class="aq-live-row"><span>${l}</span><b data-live="${j}">${amp || typeof base !== 'number' ? '' : ''}${base === 0 && !amp && unit && isNaN(Number(unit)) ? unit : (Number(base).toFixed(dec) + (unit ? ' ' + unit : ''))}</b></div>`).join('');
  ui.panel.innerHTML = `
    <div class="aq-grab" aria-label="Expand or collapse"></div>
    <button class="aq-close" aria-label="Close">×</button>
    <div class="aq-p-hero aq-p-hero-item${it.media ? ' aq-p-hero-fish' : ''}"><div class="aq-p-head">${b.name} <i>◆</i> ${b.n}</div>${it.media ? `<img class="aq-p-fish" src="${FISH_TEX[it.media.img]}" alt="${it.name}">` : `<span class="aq-p-code">${it.code}</span>`}<span class="aq-p-in">${it.media ? (fc ? fc.id + ' · ' + it.name : 'Species · Sea Cage Grow-Out') : 'Inside · ' + b.name}</span><div class="aq-p-wave"></div></div>
    <div class="aq-p-body">
      <button class="aq-back">← ${b.name}</button>
      <div class="aq-p-tag">${it.kind}</div>
      <h2>${it.name}</h2>
      ${it.media && it.media.video ? `<div class="aq-p-media"><video class="aq-p-video" poster="${HAMOUR_POSTER}" autoplay muted loop playsinline controls></video><span>Hamour in the wild</span></div>` : ''}
      <p>${it.desc}</p>
      ${fc ? `<div class="aq-indiv"><div class="aq-indiv-h"><i></i>This fish · ${fc.id}</div><dl>${fc.rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl></div>` : ''}
      ${it.facts ? `<div class="aq-facts-h">Species profile</div><dl class="aq-facts">${it.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>` : ''}
      ${board}
      <div class="aq-p-stats">${it.stats.map(([v, l]) => `<div><b class="${statCls(v)}">${v}</b><small>${l}</small></div>`).join('')}</div>
      ${live ? `<div class="aq-live"><div class="aq-live-h"><i></i>LIVE DATA</div>${live}</div>` : ''}
      <button class="aq-cta">More details →</button>
    </div>
    <div class="aq-p-nav"><button data-go="-1">‹ Prev</button><span>${i + 1} / ${keys.length}</span><button data-go="1">Next ›</button></div>`;
  ui.panel.querySelector('.aq-close').onclick = () => { clearItem(); deselectQuiet(); };
  ui.panel.querySelector('.aq-back').onclick = () => backToBuilding();
  const vid = ui.panel.querySelector('.aq-p-video');
  if (vid) {
    vid.src = hamourVideoURL(); vid.play().catch(() => {});
    const dk = () => ambient.duck(!vid.paused && !vid.muted && vid.volume > 0 && vid.isConnected);
    ['play', 'pause', 'volumechange', 'ended'].forEach(ev => vid.addEventListener(ev, dk));
    const mo = new MutationObserver(() => { if (!vid.isConnected) { ambient.duck(false); mo.disconnect(); } }); mo.observe(ui.panel, { childList: true, subtree: true });
  }
  ui.panel.querySelector('.aq-cta').onclick = () => emit('aqua:cta', { id: curInteriorId, item: it.key });
  ui.panel.querySelectorAll('[data-go]').forEach(btn => btn.onclick = () => selectItem(keys[(i + Number(btn.dataset.go) + keys.length) % keys.length]));
  clearInterval(liveTimer);
  if (fc && it.live) it = { ...it, live: [['Weight (this fish)', fc.w, 1.5, 'g', 0], ...it.live.slice(1)] };
  const vals = (it.live || []).map(([, base]) => base);
  liveTimer = setInterval(() => {
    (it.live || []).forEach(([l, base, amp, unit, dec], j) => {
      if (!amp) return;
      vals[j] = THREE.MathUtils.clamp(vals[j] + (Math.random() - 0.5) * amp * 0.6 + (base - vals[j]) * 0.08, base - amp * 2, base + amp * 2);
      const el = ui.panel.querySelector(`[data-live="${j}"]`); if (!el) return;
      el.textContent = Number(vals[j]).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + (unit ? ' ' + unit : '');
      el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick');
    });
  }, 1200);
}
function backToBuilding() {
  clearItem();
  const b = BUILDINGS.find(x => x.id === curInteriorId); renderPanel(b);
  ifly = { p0: camera.position.clone(), t0: controls.target.clone(), p1: curInterior.view.pos.clone(), t1: curInterior.view.target.clone(), start: performance.now(), dur: 1200 };
  controls.enabled = false;
}
function updateIfly(now) {
  if (!ifly) return;
  const k = Math.min((now - ifly.start) / ifly.dur, 1), e = ease(k);
  camera.position.lerpVectors(ifly.p0, ifly.p1, e); controls.target.lerpVectors(ifly.t0, ifly.t1, e);
  if (k >= 1) { ifly = null; if (mode === 'interior') controls.enabled = true; }
}

/* =====================================================================
   MOBILE: adaptive resolution, bottom-sheet gestures, touch joystick
   ===================================================================== */
const perf = { frames: 0, t0: performance.now(), good: 0 };
function adaptResolution(now) {
  perf.frames++;
  const dt = now - perf.t0; if (dt < 2000) return;
  const fps = perf.frames * 1000 / dt; perf.frames = 0; perf.t0 = now;
  if (document.hidden) return;
  if (fps < 28 && PR > 0.75) { PR = Math.max(0.75, PR - 0.25); resize(); perf.good = 0; }
  else if (fps > 55 && PR < PR_MAX) { if (++perf.good >= 3) { PR = Math.min(PR_MAX, PR + 0.25); resize(); perf.good = 0; } }
}
// bottom sheet (mobile): three heights — peek / half / full. Tap the handle or swipe on the header.
{
  const setSheet = (s) => { root.classList.toggle('sheet-peek', s === 'peek'); root.classList.toggle('sheet-full', s === 'full'); };
  const cur = () => root.classList.contains('sheet-peek') ? 'peek' : root.classList.contains('sheet-full') ? 'full' : 'half';
  const up = { peek: 'half', half: 'full', full: 'full' }, down = { full: 'half', half: 'peek', peek: 'peek' };
  ui.panel.addEventListener('click', (e) => { if (e.target.closest('.aq-grab')) setSheet(cur() === 'peek' ? 'half' : cur() === 'half' ? 'full' : 'half'); });
  let y0 = null, fromBody = false;
  ui.panel.addEventListener('touchstart', (e) => {
    const head = e.target.closest('.aq-grab, .aq-p-hero');
    const body = e.target.closest('.aq-p-body');
    fromBody = !!body && body.scrollTop <= 0;
    y0 = (head || fromBody) ? e.touches[0].clientY : null;
  }, { passive: true });
  ui.panel.addEventListener('touchmove', (e) => {
    if (y0 === null) return; const dy = e.touches[0].clientY - y0;
    if (dy > 45) { setSheet(down[cur()]); y0 = null; }
    else if (dy < -45 && !fromBody) { setSheet(up[cur()]); y0 = null; }
    else if (dy < -45 && fromBody && cur() !== 'full') { setSheet('full'); y0 = null; }
  }, { passive: true });
  new MutationObserver(() => { if (!root.classList.contains('panel-open') && (root.classList.contains('sheet-peek') || root.classList.contains('sheet-full'))) setSheet('half'); }).observe(root, { attributes: true, attributeFilter: ['class'] });
}
// visible joystick for the drone's move stick
const stickEl = document.createElement('div'); stickEl.className = 'aq-stick'; stickEl.innerHTML = '<i></i>'; root.appendChild(stickEl);
function updateStickEl() {
  const st = Object.values(drone.sticks).find(s => s.kind === 'move');
  if (!st || mode !== 'drone') { stickEl.classList.remove('on'); return; }
  const r = root.getBoundingClientRect();
  stickEl.classList.add('on'); stickEl.style.left = (st.x0 - r.left) + 'px'; stickEl.style.top = (st.y0 - r.top) + 'px';
  const dx = THREE.MathUtils.clamp(st.x - st.x0, -46, 46), dy = THREE.MathUtils.clamp(st.y - st.y0, -46, 46);
  stickEl.firstChild.style.transform = `translate(${dx}px, ${dy}px)`;
}

// day / night
const night = { v: 0, target: 0 };
const glowOp = { v: 0, target: 0 };
function setNight(on) { night.target = on ? 1 : 0; root.classList.toggle('is-night', on); ambient.setNight(on ? 1 : 0); }

/* =====================================================================
   RESIZE
   ===================================================================== */
let W = 1, H = 1;
const panelShift = { v: 0 };
function resize() {
  const r = stage.getBoundingClientRect();
  W = Math.max(1, r.width); H = Math.max(1, r.height);
  renderer.setPixelRatio(PR); composer.setPixelRatio(PR);
  renderer.setSize(W, H); labelRenderer.setSize(W, H); composer.setSize(W, H);
  bloom.setSize(W, H);
  camera.aspect = W / H; camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(stage);
resize();

/* =====================================================================
   LOOP
   ===================================================================== */
const timer = new THREE.Timer();
timer.connect(document); // pauses cleanly when the tab is hidden
let ready = false;
let introStart = 0;
const tmpC = new THREE.Color();
const BUILD_ORDER = ['visitor', 'research', 'nursery', 'hatchery', 'livefeed', 'broodstock', 'plantroom', 'genroom', 'phase1', 'seacages'];
function animate(ts) {
  timer.update(ts);
  const rdt = Math.min(timer.getDelta(), 0.5), dt = Math.min(rdt, 0.05), t = timer.getElapsed();
  const now = performance.now();

  // intro
  if (introStart) {
    const it = (now - introStart) / 1000;
    BUILD_ORDER.forEach((id, i) => {
      const o = buildingObjs[id]; const k = THREE.MathUtils.clamp((it - 1.0 - i * 0.22) / 1.1, 0, 1);
      const e = 1 - Math.pow(1 - k, 3);
      const over = k < 1 ? e * (1 + 0.08 * Math.sin(k * Math.PI)) : 1;
      if (id === 'seacages') o.group.position.y = -12 + 12 * e; else o.group.scale.y = Math.max(0.001, over);
    });
    BUILDINGS.forEach((b, i) => { const p = pinEls[b.id]; if (p && it > 3.6 + i * 0.09) p.el.classList.add('in'); });
    stems.forEach((s, i) => { s.material.opacity = THREE.MathUtils.clamp((it - 3.6 - i * 0.09) * 2, 0, 0.55); });
    if (it > 3.4 || !CONFIG.intro) ui.intro.classList.add('out');
    if (it > 5.6 && !ready) { ready = true; controls.enabled = true; root.classList.add('ready');
      const qm = new URLSearchParams(location.search).get('mode'); if (qm === 'cinematic') setMode('cine'); if (qm === 'drone') setMode('drone'); }
  }

  // camera fly
  if (fly) {
    const k = Math.min((now - fly.start) / fly.dur, 1), e = ease(k);
    camera.position.lerpVectors(fly.p0, fly.p1, e);
    // arc upward mid-flight
    camera.position.y += Math.sin(e * Math.PI) * fly.p0.distanceTo(fly.p1) * 0.12;
    controls.target.lerpVectors(fly.t0, fly.t1, e);
    if (k >= 1) { fly = null; if (ready) controls.enabled = true; }
  }

  // tour
  if (tour && ready && now > tour.next && !fly && mode === 'orbit') {
    tour.i = (tour.i + 1) % BUILDINGS.length;
    select(BUILDINGS[tour.i].id, true);
    tour.next = now + 6500;
  }
  // idle auto-rotate
  controls.autoRotate = ready && (mode === 'orbit' || (mode === 'interior' && !selItem && !ifly)) && !fly && !tour && now - lastInteract > 12000;
  controls.autoRotateSpeed = mode === 'interior' ? 0.25 : 0.35;

  // panel view shift (desktop): keep the building centred in the free area
  const open = root.classList.contains('panel-open');
  const wantShift = open && W > 760 ? Math.min(400, W * 0.32) / 2 : 0;
  const wantShiftY = open && W <= 760 ? H * (root.classList.contains('sheet-peek') ? 0.08 : root.classList.contains('sheet-full') ? 0.3 : 0.22) : 0;
  panelShift.v += (wantShift - panelShift.v) * Math.min(1, rdt * 4);
  panelShift.y = (panelShift.y || 0) + (wantShiftY - (panelShift.y || 0)) * Math.min(1, rdt * 4);
  camera.setViewOffset(W, H, panelShift.v, panelShift.y, W, H);

  // highlight
  Object.entries(buildingObjs).forEach(([id, o]) => {
    const want = id === selected ? 0.16 : id === hovered ? 0.12 : 0;
    o.mats.forEach(m => { m.emissiveIntensity += (want - m.emissiveIntensity) * Math.min(1, rdt * 8); });
  });
  glowOp.v += (glowOp.target - glowOp.v) * Math.min(1, rdt * 4);
  selGlow.material.uniforms.uOp.value = glowOp.v;
  selGlow.material.uniforms.uTime.value = t;
  selGlow.visible = glowOp.v > 0.01;

  // day/night
  night.v += (night.target - night.v) * Math.min(1, rdt * 1.6);
  const n = night.v;
  setSun(THREE.MathUtils.lerp(SUN_DAY, SUN_NIGHT, n));
  scene.environment = n > 0.5 ? getEnvNight() : envDay;
  scene.environmentIntensity = THREE.MathUtils.lerp(0.45, 0.35, n);
  sun.intensity = THREE.MathUtils.lerp(3.2, 0.35, n);
  sun.color.lerpColors(tmpC.set('#ffe2b8'), new THREE.Color('#8fb0ff'), n);
  hemi.intensity = THREE.MathUtils.lerp(0.65, 0.12, n);
  scene.fog.color.lerpColors(FOG_DAY, FOG_NIGHT, n);
  renderer.toneMappingExposure = THREE.MathUtils.lerp(0.4, 0.5, n);
  M.window.emissiveIntensity = n * 3.2;
  M.bulb.emissiveIntensity = 0.2 + n * 9;
  M.glass.emissiveIntensity = n * 1.4;
  if (M.domeCore) M.domeCore.emissiveIntensity = n * 2.2;
  M.algae.emissiveIntensity = 0.05 + n * 2.5; M.algaeB.emissiveIntensity = 0.05 + n * 2;
  lightMat.emissiveIntensity = 0.3 + n * 8; tailMat.emissiveIntensity = 0.3 + n * 5;
  stars.material.opacity = Math.max(0, n - 0.4) * 1.4;
  bloom.strength = THREE.MathUtils.lerp(0.15, 0.75, n);
  bloom.threshold = THREE.MathUtils.lerp(1.6, 1.05, n);
  WU.uNight.value = n;
  WU.uSunDir.value.copy(sunDir).multiplyScalar(n > 0.5 ? -1 : 1).setY(Math.abs(sunDir.y) + 0.05);
  WU.uTime.value = t;

  // cars
  cars.forEach(c => { c.d += c.speed * dt; const p = c.track.at(c.d); c.g.position.set(p.x, GROUND_Y + 0.05, p.z); c.g.rotation.y = p.ang; c.g.visible = p.z < 700; });
  // pens bobbing
  pens.forEach(p => { p.position.y = 0.4 + Math.sin(t * 0.9 + p.userData.phase) * 0.18; p.rotation.z = Math.sin(t * 0.7 + p.userData.phase) * 0.01; });
  if (pens.boat) { const B = pens.boat, a = t * 0.05; B.boat.position.set(B.c.x + Math.cos(a) * 92, 0.3 + Math.sin(t * 1.3) * 0.15, B.c.y + Math.sin(a) * 92); B.boat.rotation.set(Math.sin(t * 1.1) * 0.03, -a - Math.PI / 2, Math.sin(t * 0.9) * 0.04); B.buoys.forEach((b, i) => { b.position.y = 0.4 + Math.sin(t * 1.5 + i) * 0.2; }); }
  // birds
  birds.forEach(b => {
    const u = b.userData, a = t * u.sp + u.ph;
    b.position.set(u.cx + Math.cos(a) * u.rad, u.h + Math.sin(a * 2.3) * 4, u.cz + Math.sin(a) * u.rad * 0.6);
    b.rotation.y = -a - Math.PI / 2;
    const f = Math.sin(t * 9 + u.ph * 3) * 0.6; u.l.rotation.x = f; u.r.rotation.x = -f;
  });
  // pins bob
  Object.values(pinEls).forEach((p, i) => { p.obj.position.y = p.baseY + Math.sin(t * 1.4 + i) * 0.6; });

  adaptResolution(now); updateStickEl();
  if (seq) updateSeq(now);
  if (curInterior && curScene === curInterior.scene) {
    curInterior.update(t);
    renderer.toneMappingExposure = curInterior.exposure || 0.55; bloom.strength = 0.4; bloom.threshold = 1.3;
  }
  if (mode === 'drone') updateDrone(dt, t);
  else if (mode === 'cine') updateCine(t);
  else if (mode === 'orbit' || mode === 'interior') {
    if (mode === 'interior') { updateIfly(now); selBox.material.opacity = 0.6 + Math.sin(t * 4) * 0.35; if (selFish) fishMark.position.fromArray(selFish.sch.pos, selFish.i * 3); }
    controls.update();
    if (mode === 'interior') { const bb = curInterior.bounds; camera.position.clamp(bb.min, bb.max); controls.target.clamp(bb.min, bb.max); }
  }
  fovT.v += (fovT.target - fovT.v) * Math.min(1, rdt * 2.5);
  if (Math.abs(camera.fov - fovT.v) > 0.01) { camera.fov = fovT.v; camera.updateProjectionMatrix(); }
  composer.render();
  labelRenderer.render(curScene, camera);
  requestAnimationFrame(animate);
}

// boot
setSun(SUN_DAY);
requestAnimationFrame(() => {
  ui.loader.classList.add('out');
  introStart = performance.now();
  flyTo(HOME.pos, HOME.target, 5.2);
  animate();
});

// public API
window.GulfAquaScene = {
  buildings: BUILDINGS,
  focus: select, home: deselect, setNight, startTour, stopTour,
  drone: () => setMode('drone'), flythrough: () => setMode('cine'), orbit: () => setMode('orbit'),
  enter: (id) => select(id), exit: () => exitBuilding(), inspect: (k) => selectItem(k),
  view: (px, py, pz, tx, ty, tz, s = 2) => flyTo(new THREE.Vector3(px, py, pz), new THREE.Vector3(tx, ty, tz), s),
  fishScreen: (n = 0, i = 3) => { if (!curInterior || !curInterior.fish) return null; const s = curInterior.fish[n]; const v = new THREE.Vector3().fromArray(s.pos, i * 3).project(camera); const r = renderer.domElement.getBoundingClientRect(); return [r.left + (v.x + 1) / 2 * r.width, r.top + (1 - v.y) / 2 * r.height, v.z]; },
  on: (type, cb) => root.addEventListener(type, (e) => cb(e.detail)),
  sound: (v) => { ambient.setEnabled(v === undefined ? !ambient.enabled : v); return ambient.enabled; },
};
