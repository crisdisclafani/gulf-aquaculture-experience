/* =========================================================================
   SKMRC CAMPUS — interactive 3D tour (concept)
   Reconstructed from two architectural renders: the shell-roofed visitor
   centre at the entrance (render 1) and the hatchery halls on the coastal
   strip (render 2). The two meet along the campus boulevard, where render 2's
   corner shows the dome. Sea cages are built offshore as in "Egg to Harvest".
   Layout and dimensions are indicative.
   ========================================================================= */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const $ = s => document.querySelector(s);
const TAU = Math.PI * 2, G = 1.6;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOBILE = Math.min(innerWidth, innerHeight) < 700;
const LOW = new URLSearchParams(location.search).get('q') === 'low';

/* ---------------- renderer, camera ---------------- */
const canvas = $('#c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(LOW ? 1 : Math.min(devicePixelRatio, MOBILE ? 1.5 : 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(42, 1, 1, 9000);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; controls.dampingFactor = .07; controls.maxPolarAngle = 1.42; controls.minDistance = 25; controls.maxDistance = 1400;
controls.screenSpacePanning = false; controls.enabled = false;

/* ---------------- helpers ---------------- */
function canvasTex(w, h, draw, srgb = true) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t; }
function noiseTex(size, amp, base) { return canvasTex(size, size, (g, w, h) => { const img = g.createImageData(w, h); for (let i = 0; i < w * h; i++) { const v = base + (Math.random() - .5) * amp; img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255; } g.putImageData(img, 0, 0); }); }
const ribNormal = canvasTex(256, 16, (g, w, h) => { const img = g.createImageData(w, h); for (let x = 0; x < w; x++) { const nx = Math.sin(x / w * 18 * TAU) * .5; for (let y = 0; y < h; y++) { const i = (y * w + x) * 4; img.data[i] = 128 + nx * 127; img.data[i + 1] = 128; img.data[i + 2] = 240; img.data[i + 3] = 255; } } g.putImageData(img, 0, 0); }, false);
const M = (o) => new THREE.MeshStandardMaterial(o);
const mats = {
  wall: M({ color: '#f1f0ec', roughness: .55, metalness: .05, normalMap: ribNormal, normalScale: new THREE.Vector2(.6, .6) }),
  roof: M({ color: '#e4e4e2', roughness: .6, metalness: .1, transparent: true, opacity: 1 }),
  plain: M({ color: '#efece5', roughness: .8 }),
  glass: M({ color: '#3b5a6c', roughness: .06, metalness: .8, envMapIntensity: 1.2 }),
  grey: M({ color: '#bdbcb8', roughness: .6, metalness: .3 }),
  asphalt: M({ color: '#2d2e31', roughness: .92 }),
  pave: M({ color: '#a9a7a2', roughness: .95 }),
  plaza: M({ color: '#d8d3c8', roughness: .9 }),
  brick: M({ color: '#8f3a2c', roughness: .9 }),
  lawn: M({ color: '#5f8a3a', roughness: 1 }),
  shell: M({ color: '#fbfaf6', roughness: .45, side: THREE.DoubleSide }),
  fabric: M({ color: '#ffffff', roughness: .65, side: THREE.DoubleSide }),
  trunk: M({ color: '#6d5a45', roughness: .9 }),
  leaf: M({ color: '#4e7a34', roughness: .95, flatShading: true }),
  leaf2: M({ color: '#6e8f3e', roughness: .95, flatShading: true }),
  autumn: M({ color: '#a8732f', roughness: .95, flatShading: true }),
  red: M({ color: '#b5462e', roughness: .9, flatShading: true }),
  palm: M({ color: '#4d7a2c', roughness: .9, side: THREE.DoubleSide, flatShading: true }),
  tankBlue: M({ color: '#2f7f95', roughness: .35, metalness: .1 }),
  tankWhite: M({ color: '#e8eef0', roughness: .5 }),
  boundary: M({ color: '#cc2b23', roughness: .7 }),
  hdpe: M({ color: '#e8e8e3', roughness: .7 }), collar: M({ color: '#2f6f80', roughness: .5 }), buoy: M({ color: '#f07a24', roughness: .45 }),
};
mats.asphalt.map = noiseTex(128, 26, 90); mats.asphalt.map.repeat.set(40, 40);
mats.pave.map = noiseTex(128, 30, 170); mats.pave.map.repeat.set(80, 80);
const add = (geo, mat, x = 0, y = 0, z = 0, cast = true, parent = scene) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = cast; m.receiveShadow = true; parent.add(m); return m; };

/* ---------------- land shape ----------------
   x → east (along the coast), z → south (inland). North shore along the whole site;
   east of x≈60 the land narrows to a strip with sea on both sides (render 2).        */
const zN = x => -190 + 10 * Math.sin(x / 95) + 6 * Math.sin(x / 37 + 1);
const zS = x => x < 60 ? 3000 : 175 + 2600 * Math.max(0, (60 - x)) / 60 + 8 * Math.sin(x / 51);
const XTIP = 470;
const landD = (x, z) => Math.min(z - zN(x), zS(x) - z, XTIP - x + 30 * Math.pow(Math.max(0, Math.abs(z + 5) / 180), 2));
const SUN = new THREE.Vector3(-.45, .55, .7).normalize();

/* ---------------- sky ---------------- */
const SKY = `uniform vec3 uSun; vec3 skyCol(vec3 d){ float h=d.y; vec3 top=vec3(.16,.40,.78), hor=vec3(.74,.83,.88); vec3 c=mix(hor,top,pow(clamp(h,0.,1.),.5)); c=mix(c,vec3(.82,.84,.84),smoothstep(0.,-.06,h)); float s=max(dot(d,uSun),0.); c+=vec3(1.,.9,.75)*(pow(s,6.)*.18); return c; }`;
const HAZE = new THREE.Color(.80, .84, .86);
{ const m = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false, uniforms: { uSun: { value: SUN } },
    vertexShader: `varying vec3 vD; void main(){ vD=position; vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.); gl_Position=p.xyww; }`,
    fragmentShader: SKY + `varying vec3 vD; void main(){ vec3 d=normalize(vD); vec3 c=skyCol(d); c+=vec3(1.,.95,.85)*pow(max(dot(d,uSun),0.),1400.)*30.; gl_FragColor=vec4(c,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }` });
  const s = new THREE.Mesh(new THREE.SphereGeometry(6000, 40, 20), m); s.frustumCulled = false; s.renderOrder = -10; scene.add(s); }
scene.fog = new THREE.Fog(HAZE, 1400, 5200);
{ const pm = new THREE.PMREMGenerator(renderer), es = new THREE.Scene(); es.background = new THREE.Color('#b9cfdc');
  es.add(new THREE.HemisphereLight('#cfe3f5', '#cdbb98', 2)); scene.environment = pm.fromScene(es, .02).texture; }
scene.add(new THREE.HemisphereLight(0xd6e8f7, 0xd8c7a3, .65));
const sun = new THREE.DirectionalLight(0xfff1dc, 3.0);
sun.position.copy(SUN).multiplyScalar(900); sun.target.position.set(0, 0, 0); scene.add(sun, sun.target);
sun.castShadow = !LOW; sun.shadow.mapSize.set(MOBILE ? 2048 : 4096, MOBILE ? 2048 : 4096);
Object.assign(sun.shadow.camera, { left: -620, right: 620, top: 420, bottom: -420, near: 200, far: 2200 });
sun.shadow.bias = -.0004; sun.shadow.normalBias = .8;

/* ---------------- terrain ---------------- */
{ const S = 3600, N = LOW ? 120 : 300, g = new THREE.PlaneGeometry(S, S, N, N).rotateX(-Math.PI / 2), p = g.attributes.position, col = new Float32Array(p.count * 3);
  const sand = new THREE.Color('#ead9b6').convertSRGBToLinear(), wet = new THREE.Color('#c7b089').convertSRGBToLinear(), dune = new THREE.Color('#e6cfa0').convertSRGBToLinear(), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) { const x = p.getX(i) + 100, z = p.getZ(i) + 300; p.setX(i, x); p.setZ(i, z);
    const d = landD(x, z); let h = G * THREE.MathUtils.smoothstep(d, -2, 22) - 4 * (1 - THREE.MathUtils.smoothstep(d, -80, -1));
    const far = THREE.MathUtils.smoothstep(z, 360, 900); h += far * (Math.sin(x * .012) * Math.sin(z * .015) + .5) * 7;
    p.setY(i, h); c.copy(sand).lerp(dune, far * .6).lerp(wet, 1 - THREE.MathUtils.smoothstep(d, 0, 9));
    const v = .95 + .1 * Math.sin(x * .07) * Math.sin(z * .05); col[i * 3] = c.r * v; col[i * 3 + 1] = c.g * v; col[i * 3 + 2] = c.b * v; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals();
  const t = add(g, M({ vertexColors: true, roughness: .97 }), 0, 0, 0, false); t.receiveShadow = true; }

/* ---------------- sea ---------------- */
const CAGES = []; for (let r = 0; r < 2; r++) for (let k = 0; k < 4; k++) CAGES.push([40 + k * 52, -430 - r * 52]);
const CAGE_R = 14;
const water = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 0 }, uSun: { value: SUN }, uHaze: { value: HAZE }, uCages: { value: CAGES.map(([x, z]) => new THREE.Vector2(x, z)) } },
  vertexShader: `varying vec3 vW; void main(){ vec4 w=modelMatrix*vec4(position,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,
  fragmentShader: SKY + `uniform float uTime; uniform vec3 uHaze; uniform vec2 uCages[8]; varying vec3 vW;
    float zN(float x){ return -190.+10.*sin(x/95.)+6.*sin(x/37.+1.); }
    float zS(float x){ return x<60.?3000.:175.+2600.*max(0.,60.-x)/60.+8.*sin(x/51.); }
    float landD(vec2 p){ return min(min(p.y-zN(p.x), zS(p.x)-p.y), 470.-p.x+30.*pow(max(0.,abs(p.y+5.)/180.),2.)); }
    float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
    float vn(vec2 p){ vec2 i=floor(p),f=fract(p); f=f*f*(3.-2.*f); return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y); }
    void main(){ vec3 V=cameraPosition-vW; float dist=length(V); V/=dist; vec2 p=vW.xz;
      vec2 dh=vec2(0.); float fw=length(fwidth(p))+1e-4;
      #define W(dx,dy,f,a,s) { vec2 dd=normalize(vec2(dx,dy)); dh+=dd*a*f*cos(dot(dd,p)*f+uTime*s)*smoothstep(1.2,.25,f*fw); }
      W(1.,.2,.03,.5,.5) W(.7,.7,.05,.26,.7) W(.2,1.,.09,.12,.9) W(-.6,.8,.16,.05,1.2) W(.9,-.4,.28,.022,1.6) W(.3,-1.,.6,.008,2.2)
      vec3 N=normalize(vec3(-dh.x,1.,-dh.y));
      float d=-landD(p);
      vec3 deep=vec3(.004,.08,.16), mid=vec3(.01,.26,.34), shal=vec3(.08,.58,.56), sb=vec3(.45,.66,.55);
      vec3 base=mix(deep,mid,exp(-max(d,0.)/300.)); base=mix(base,shal,exp(-max(d,0.)/45.)); base=mix(base,sb,exp(-max(d,0.)/8.)*.65);
      for(int i=0;i<8;i++){ float dc=length(p-uCages[i]); base=mix(base,vec3(.02,.2,.22),smoothstep(13.6,12.8,dc)*.85); }
      float fr=.02+.98*pow(1.-max(dot(N,V),0.),5.); vec3 R=reflect(-V,N); R.y=abs(R.y);
      vec3 col=base*(.45+.55*max(dot(N,uSun),0.)); col=mix(col,skyCol(R)*.85,fr*.55);
      col+=vec3(1.,.95,.85)*(pow(max(dot(R,uSun),0.),220.)*2.4+pow(max(dot(R,uSun),0.),40.)*.08);
      float foam=(1.-smoothstep(0.,4.,d))*smoothstep(-1.,.3,d)*(.55+.45*sin(d*2.2-uTime*.6+sin(p.x*.08)*2.))*(.6+.4*vn(p*.6));
      col=mix(col,vec3(.93,.94,.92),foam*.7); col=mix(col,uHaze,1.-exp(-dist*.00026));
      gl_FragColor=vec4(col,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }` });
add(new THREE.PlaneGeometry(9000, 9000).rotateX(-Math.PI / 2), water, 0, 0, 0, false);

/* ---------------- curves: roads with brick kerbs ---------------- */
function ribbon(pts, w, mat, y, closed = false, uvScale = 1) {
  const curve = new THREE.CatmullRomCurve3(pts.map(([x, z]) => new THREE.Vector3(x, 0, z)), closed, 'centripetal');
  const n = Math.max(8, Math.round(curve.getLength() / 3)), P = [], UV = [], I = [];
  let len = 0, prev = null;
  for (let i = 0; i <= n; i++) { const t = i / n, p = curve.getPointAt(t), tg = curve.getTangentAt(t), nx = -tg.z, nz = tg.x;
    if (prev) len += p.distanceTo(prev); prev = p;
    P.push(p.x + nx * w / 2, y, p.z + nz * w / 2, p.x - nx * w / 2, y, p.z - nz * w / 2); UV.push(0, len / uvScale, 1, len / uvScale);
    if (i < n) { const a = i * 2; I.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); } }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(UV, 2)); g.setIndex(I); g.computeVertexNormals();
  const m = add(g, mat, 0, 0, 0, false); m.receiveShadow = true; return curve;
}
const dashTex = canvasTex(64, 256, (g, w, h) => { g.fillStyle = '#2d2e31'; g.fillRect(0, 0, w, h); g.fillStyle = '#f2f2ee'; g.fillRect(w / 2 - 2, 0, 4, h * .45); g.fillStyle = 'rgba(240,240,236,.7)'; g.fillRect(2, 0, 2, h); g.fillRect(w - 4, 0, 2, h); });
const roadMat = M({ map: dashTex, roughness: .9 });
const ROADS = {};
function road(name, pts, w = 11, closed = false, kerb = true) {
  if (kerb) ribbon(pts, w + 5, mats.brick, G + .06, closed);
  ROADS[name] = ribbon(pts, w, roadMat, G + .1, closed, 8);
}

/* ======================= ZONE 1 — ENTRANCE & VISITOR CENTRE (render 1) ======================= */
// lawns & plaza
const lawnTex = canvasTex(512, 512, (g, w, h) => { g.fillStyle = '#5f8a3a'; g.fillRect(0, 0, w, h); for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${40 + Math.random() * 40},${90 + Math.random() * 50},${30 + Math.random() * 20},.25)`; g.fillRect(Math.random() * w, Math.random() * h, 3, 3); }
  g.strokeStyle = 'rgba(235,235,225,.95)'; g.lineWidth = 7; for (let k = -2; k < 6; k++) { g.beginPath(); g.moveTo(k * 140, 0); g.lineTo(k * 140 + 260, h); g.stroke(); } });
mats.lawn.map = lawnTex; lawnTex.repeat.set(1, 1);
const lawn = (x, z, w, d, r = 0) => { const m = add(new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2), mats.lawn, x, G + .05, z, false); m.rotation.y = r; };
lawn(-260, 40, 180, 110, .15); lawn(-125, 82, 90, 70, -.1); lawn(-345, -20, 90, 120); lawn(-150, -55, 90, 45, .1);
add(new THREE.CircleGeometry(62, 64).rotateX(-Math.PI / 2), mats.plaza, -330, G + .08, -70, false);
add(new THREE.RingGeometry(62, 66, 64).rotateX(-Math.PI / 2), mats.brick, -330, G + .09, -70, false);

// shell-roofed visitor & innovation centre: glazed drum under a ribbed oval shell
const dome = new THREE.Group(); dome.position.set(-330, G, -70); scene.add(dome);
{ const RX = 46, RZ = 34;
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 7, 64, 1, true), mats.glass); drum.scale.set(RX * .82, 1, RZ * .82); drum.position.y = 3.5; dome.add(drum);
  const mull = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 7, 48, 1, true), M({ color: '#dfe3e4', wireframe: true })); mull.scale.copy(drum.scale); mull.position.y = 3.5; dome.add(mull);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, .9, 64), mats.plain); base.scale.set(RX * .86, 1, RZ * .86); base.position.y = .45; dome.add(base);
  // shell: elliptical cap with radial pleats and a scalloped, slightly lifted rim
  const sg = new THREE.SphereGeometry(1, 144, 40, 0, TAU, 0, Math.PI * .5), p = sg.attributes.position;
  for (let i = 0; i < p.count; i++) { let x = p.getX(i), y = p.getY(i), z = p.getZ(i); const a = Math.atan2(z, x), r = Math.hypot(x, z);
    const pleat = 1 + .035 * Math.abs(Math.sin(a * 9)) * r; const rim = Math.pow(r, 6) * (.06 + .05 * Math.cos(a * 18));
    p.setXYZ(i, x * RX * pleat, y * 15 + 7 - rim * 6 + (1 - y) * 0, z * RZ * pleat); }
  sg.computeVertexNormals();
  const shell = new THREE.Mesh(sg, mats.shell); shell.castShadow = shell.receiveShadow = true; dome.add(shell);
  for (let k = 0; k < 18; k++) { const a = k / 18 * TAU, pts = []; for (let s = 0; s <= 20; s++) { const th = s / 20 * Math.PI * .5, r = Math.sin(th); pts.push(new THREE.Vector3(Math.cos(a) * r * RX * 1.012, Math.cos(th) * 15 + 7.1, Math.sin(a) * r * RZ * 1.012)); }
    const rib = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, .25, 5), M({ color: '#e9e8e2', roughness: .5 })); rib.castShadow = true; dome.add(rib); }
  // entrance canopy & sign
  const sign = canvasTex(1024, 128, (g, w, h) => { g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h); g.fillStyle = '#1d4a64'; g.font = '600 46px Inter, Arial'; g.textAlign = 'center'; g.fillText('SHEIKH KHALIFA MARINE RESEARCH CENTRE', w / 2, 80); });
  const s = new THREE.Mesh(new THREE.PlaneGeometry(26, 3.2), M({ map: sign, roughness: .5 })); s.position.set(8, 5.2, RZ * .84 + .2); s.rotation.y = .18; dome.add(s);
  dome.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
}
// long courtyard building behind the dome (with red-leaf trees) & beach wall
const visitorBlock = new THREE.Group(); scene.add(visitorBlock);
add(new THREE.BoxGeometry(150, 8, 18), mats.plain, -300, G + 4, -139, true, visitorBlock);
add(new THREE.BoxGeometry(150, .6, 19), mats.plain, -300, G + 8.3, -139, true, visitorBlock);
for (let k = 0; k < 14; k++) add(new THREE.BoxGeometry(3, 6, .4), M({ color: '#e7c26a', roughness: .6 }), -360 + k * 9, G + 3.6, -129.6, false, visitorBlock);
add(new THREE.BoxGeometry(320, 2.4, .6), mats.plain, -260, G + 1.2, -160);
// tensile canopies (five domed sails) on the car park
const canopies = new THREE.Group(); scene.add(canopies);
add(new THREE.PlaneGeometry(70, 26).rotateX(-Math.PI / 2), mats.pave, -225, G + .07, -108, false, canopies);
for (let k = 0; k < 5; k++) { const g2 = new THREE.SphereGeometry(1, 24, 10, 0, TAU, 0, Math.PI / 2); g2.scale(6.2, 4.2, 9); const m = add(g2, mats.fabric, -250 + k * 12.5, G + 1.2, -108, true, canopies); }
// entrance gateway arch over the boulevard
{ const pts = []; for (let s = 0; s <= 30; s++) { const t = s / 30, a = Math.PI * t; pts.push(new THREE.Vector3(0, Math.sin(a) * 16, Math.cos(a) * 14)); }
  const arch = add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, .55, 8), M({ color: '#cfd2d3', roughness: .3, metalness: .7 }), -205, G, -20); arch.rotation.y = .25;
  add(new THREE.BoxGeometry(3, 2, 3), mats.plain, -205 - 3.5, G + 1, -6.5); add(new THREE.BoxGeometry(3, 2, 3), mats.plain, -205 + 3.5, G + 1, -33.5); }

// roads (render 1): inland approach → curving drive → roundabout → boulevard → hatchery loop (render 2)
road('approach', [[-430, 330], [-380, 210], [-330, 140], [-280, 120], [-230, 110], [-170, 90], [-130, 60]]);
road('drive', [[-130, 60], [-150, 20], [-200, 5], [-250, 10], [-295, -10], [-290, -40]]);
road('round', (() => { const a = []; for (let i = 0; i < 24; i++) { const t = i / 24 * TAU; a.push([-95 + Math.cos(t) * 26, 60 + Math.sin(t) * 26]); } return a; })(), 11, true);
road('boulevard', [[-215, -20], [-160, -18], [-110, -20], [-60, -22], [0, -22], [80, -22], [160, -20], [240, -22], [330, -22], [420, -20]]);
road('east', [[-69, 60], [-30, 98], [60, 112], [130, 135], [230, 138], [330, 130], [420, 110], [455, 60], [455, -20]]);
road('north', [[-110, -22], [-112, -100], [-100, -160], [0, -164], [100, -164], [220, -160], [330, -158], [420, -150], [452, -100], [455, -20]]);
add(new THREE.CircleGeometry(19, 48).rotateX(-Math.PI / 2), mats.lawn, -95, G + .12, 60, false);

// trees: palms along roads, round trees on the lawns, the big autumn tree on the roundabout, red trees in the courtyard
const dummy = new THREE.Object3D();
function inst(geo, mat, arr, fn) { const m = new THREE.InstancedMesh(geo, mat, arr.length); arr.forEach((a, i) => { fn(a, i); dummy.updateMatrix(); m.setMatrixAt(i, dummy.matrix); }); m.castShadow = m.receiveShadow = true; scene.add(m); return m; }
const palms = [], rounds = [];
for (const [name, every] of [['approach', 22], ['boulevard', 26], ['drive', 20], ['east', 30]]) { const c = ROADS[name], L = c.getLength(); for (let s = 10; s < L; s += every) { const t = s / L, p = c.getPointAt(t), tg = c.getTangentAt(t); for (const side of [1, -1]) palms.push([p.x - tg.z * 12 * side, p.z + tg.x * 12 * side]); } }
for (let i = 0; i < 70; i++) rounds.push([-380 + Math.random() * 300, 10 + Math.random() * 120]);
for (let i = 0; i < 24; i++) rounds.push([-200 + Math.random() * 120, -95 + Math.random() * 20]);
inst(new THREE.CylinderGeometry(.35, .5, 1, 6), mats.trunk, palms, ([x, z]) => { dummy.position.set(x, G + 5, z); dummy.scale.set(1, 10, 1); dummy.rotation.set(0, 0, 0); });
const frond = new THREE.ConeGeometry(4.2, 2.4, 7, 1, true); frond.translate(0, -1.2, 0);
inst(frond, mats.palm, palms, ([x, z]) => { dummy.position.set(x, G + 11, z); dummy.scale.set(1, 1, 1); dummy.rotation.set(0, Math.random() * 6, 0); });
inst(new THREE.CylinderGeometry(.3, .45, 1, 6), mats.trunk, rounds, ([x, z]) => { dummy.position.set(x, G + 1.8, z); dummy.scale.set(1, 3.6, 1); dummy.rotation.set(0, 0, 0); });
inst(new THREE.IcosahedronGeometry(1, 1), mats.leaf2, rounds, ([x, z]) => { const s = 3 + Math.random() * 1.6; dummy.position.set(x, G + 4.6, z); dummy.scale.set(s, s * .85, s); dummy.rotation.set(0, Math.random() * 6, 0); });
add(new THREE.CylinderGeometry(.9, 1.3, 9, 8), mats.trunk, -95, G + 4.5, 60);
for (let k = 0; k < 7; k++) add(new THREE.IcosahedronGeometry(5 + Math.random() * 2, 1), mats.autumn, -95 + Math.cos(k) * 5, G + 12 + Math.sin(k * 2) * 2, 60 + Math.sin(k) * 5);
for (let k = 0; k < 14; k++) { add(new THREE.CylinderGeometry(.25, .35, 3, 5), mats.trunk, -360 + k * 9, G + 1.5, -154); add(new THREE.IcosahedronGeometry(2.8, 1), mats.red, -360 + k * 9, G + 4.4, -154); }

/* ======================= ZONE 2 — HATCHERY HALLS (render 2) ======================= */
add(new THREE.PlaneGeometry(530, 320).rotateX(-Math.PI / 2), mats.pave, 185, G + .03, -10, false);
const BUILDINGS = [];
function hall(id, x, z, w, d, h, tanks, label) {
  const g = new THREE.Group(); g.position.set(x, G, z); scene.add(g);
  const sx = mats.wall.clone(); const lid = new THREE.MeshBasicMaterial({ visible: false });
  const walls = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [sx, sx, lid, sx, sx, sx]); walls.position.y = h / 2; walls.userData.mat = sx;
  const roof = new THREE.Mesh(new THREE.BoxGeometry(w + .8, .7, d + .8), mats.roof.clone()); roof.material.transparent = false; roof.position.y = h + .35;
  walls.castShadow = roof.castShadow = true; walls.receiveShadow = roof.receiveShadow = true; g.add(walls, roof);
  for (let i = 0; i < Math.round(w / 30); i++) { const u = new THREE.Mesh(new THREE.BoxGeometry(4, 1.8, 3), mats.grey); u.position.set(-w / 2 + (i + .5) * w / Math.round(w / 30), h + 1.5, (i % 2 ? .25 : -.25) * d); u.castShadow = true; g.add(u); }
  const inside = new THREE.Group(); inside.visible = false; g.add(inside);
  add(new THREE.PlaneGeometry(w - 2, d - 2).rotateX(-Math.PI / 2), M({ color: '#c9cdcf', roughness: .8 }), 0, .1, 0, false, inside);
  if (tanks) { const { r, rows, cols, kind } = tanks; for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const tx = -w / 2 + (i + .5) * w / cols, tz = -d / 2 + (j + .5) * d / rows;
      if (kind === 'round') { add(new THREE.CylinderGeometry(r, r, 2.2, 28), mats.tankBlue, tx, 1.2, tz, false, inside); add(new THREE.TorusGeometry(r, .18, 6, 28).rotateX(Math.PI / 2), mats.tankWhite, tx, 2.3, tz, false, inside); }
      else add(new THREE.BoxGeometry(w / cols * .7, 1.6, d / rows * .62), mats.tankBlue, tx, .9, tz, false, inside); } }
  const b = { id, g, walls, roof, inside, label, top: new THREE.Vector3(x, G + h + 6, z), size: Math.max(w, d), h }; BUILDINGS.push(b); return b;
}
hall('p1h', -20, -115, 150, 50, 13, { kind: 'round', r: 3.2, rows: 3, cols: 14 }, 'Phase 01 · Hatchery & Broodstock');
hall('p2h', 175, -115, 160, 54, 13, { kind: 'round', r: 3.4, rows: 3, cols: 15 }, 'Phase 02 · Hatchery & Broodstock');
hall('p1n', 40, 45, 130, 56, 11, { kind: 'rect', rows: 4, cols: 8 }, 'Phase 01 · Nursery & Weaning');
hall('p2n', 168, 55, 100, 50, 10, { kind: 'rect', rows: 4, cols: 6 }, 'Phase 02 · Nursery & Weaning');
hall('labs', 276, 58, 80, 44, 9, null, 'Offices & 14 Laboratories');
hall('plant', 392, 55, 96, 46, 10, { kind: 'rect', rows: 2, cols: 5 }, 'Plant & Generator Rooms');
hall('ras', 345, -112, 70, 46, 11, { kind: 'round', r: 4.4, rows: 2, cols: 5 }, 'Live Feed & Algae');
// header tanks & small units at the tip
const headerT = new THREE.Group(); scene.add(headerT);
for (let k = 0; k < 4; k++) add(new THREE.CylinderGeometry(4, 4, 9, 24), mats.tankWhite, 420 + (k % 2) * 11, G + 4.5, -110 + Math.floor(k / 2) * 11, true, headerT);
add(new THREE.BoxGeometry(18, 6, 12), mats.plain, 425, G + 3, -70, true, headerT);
// red property boundary along the eastern tip (render 2)
{ const pts = [[300, -205], [462, -150], [478, 40], [430, 165]]; for (let i = 0; i < pts.length - 1; i++) { const [x1, z1] = pts[i], [x2, z2] = pts[i + 1], L = Math.hypot(x2 - x1, z2 - z1); const m = add(new THREE.BoxGeometry(L, 1.2, .5), mats.boundary, (x1 + x2) / 2, G + .6, (z1 + z2) / 2, false); m.rotation.y = -Math.atan2(z2 - z1, x2 - x1); } }

/* ======================= SEA CAGES ======================= */
const cageGroup = new THREE.Group(); scene.add(cageGroup);
{ const netTex = canvasTex(256, 256, (g, w, h) => { g.strokeStyle = 'rgba(25,40,40,1)'; g.lineWidth = 8; g.beginPath(); g.moveTo(0, 0); g.lineTo(w, h); g.moveTo(w, 0); g.lineTo(0, h); g.stroke(); });
  netTex.repeat.set(220, 6); const netMat = M({ map: netTex, transparent: true, opacity: .6, depthWrite: false, side: THREE.DoubleSide, roughness: .9 });
  const tA = new THREE.TorusGeometry(CAGE_R, .34, 10, 96).rotateX(Math.PI / 2), tB = new THREE.TorusGeometry(CAGE_R + .75, .34, 10, 96).rotateX(Math.PI / 2), tC = new THREE.TorusGeometry(CAGE_R + .38, .1, 8, 128).rotateX(Math.PI / 2);
  const netG = new THREE.CylinderGeometry(CAGE_R + .3, CAGE_R + .3, 1.1, 96, 1, true), postG = new THREE.CylinderGeometry(.08, .08, 1.1, 6);
  for (const [cx, cz] of CAGES) { const g = new THREE.Group(); g.position.set(cx, 0, cz);
    const a = new THREE.Mesh(tA, mats.hdpe), b = new THREE.Mesh(tB, mats.hdpe), c = new THREE.Mesh(tC, mats.hdpe); a.position.y = b.position.y = .15; c.position.y = 1.2;
    const n = new THREE.Mesh(netG, netMat); n.position.y = .65; g.add(a, b, c, n);
    for (let k = 0; k < 24; k++) { const an = k / 24 * TAU, po = new THREE.Mesh(postG, mats.hdpe); po.position.set(Math.cos(an) * (CAGE_R + .38), .7, Math.sin(an) * (CAGE_R + .38)); g.add(po); }
    for (let k = 0; k < 4; k++) { const an = k / 4 * TAU + .4, bu = new THREE.Mesh(new THREE.SphereGeometry(.7, 14, 10), mats.buoy); bu.position.set(Math.cos(an) * (CAGE_R + 7), .2, Math.sin(an) * (CAGE_R + 7)); g.add(bu); }
    cageGroup.add(g); }
  // feed barge & jetty linking the campus to the cages
  const barge = new THREE.Group(); barge.position.set(250, 0, -456); scene.add(barge);
  add(new THREE.BoxGeometry(22, 2.2, 12), M({ color: '#d9662b', roughness: .6 }), 0, .6, 0, true, barge);
  add(new THREE.BoxGeometry(10, 4, 8), mats.plain, -3, 3.6, 0, true, barge); add(new THREE.CylinderGeometry(2.4, 2.4, 6, 18), mats.tankWhite, 6, 4.5, 0, true, barge);
  const jetty = add(new THREE.BoxGeometry(6, .8, 220), M({ color: '#9da3a6', roughness: .8 }), 120, 1.1, -300, true);
  for (let k = 0; k < 22; k++) add(new THREE.CylinderGeometry(.35, .35, 5, 6), mats.grey, 117 + (k % 2) * 6, -1, -200 - k * 10, false);
}
// work boats moving between jetty and cages
const boats = [];
for (let k = 0; k < 2; k++) { const b = new THREE.Group(); add(new THREE.BoxGeometry(9, 1.4, 3.4), M({ color: k ? '#f2f2ee' : '#d9662b', roughness: .5 }), 0, .6, 0, true, b); add(new THREE.BoxGeometry(3, 2, 2.6), mats.plain, -1.5, 2, 0, true, b); scene.add(b); boats.push(b); }

/* ======================= traffic (cars on the roads) ======================= */
const cars = [];
const carCols = ['#4f8fc9', '#f2f2ee', '#2b2b2e', '#b0b4b8', '#8c1f1f'];
for (let k = 0; k < 9; k++) { const c = new THREE.Group(); add(new THREE.BoxGeometry(4.4, 1.1, 1.9), M({ color: carCols[k % 5], roughness: .35, metalness: .5 }), 0, .85, 0, true, c); add(new THREE.BoxGeometry(2.4, .8, 1.7), mats.glass, -.2, 1.75, 0, true, c); scene.add(c);
  cars.push({ c, road: ['approach', 'boulevard', 'drive', 'east', 'boulevard', 'north', 'approach', 'east', 'boulevard'][k], t: Math.random(), v: (8 + Math.random() * 6) * (k % 2 ? 1 : -1), side: k % 2 ? -2.6 : 2.6 }); }

/* ======================= TOUR ======================= */
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const STOPS = [
  { id: 'arrival', k: 'Render 1 · Entrance', t: 'Arrival at SKMRC', d: 'The approach road sweeps past landscaped lawns to the roundabout and the gateway arch — exactly the view of the first render.', cam: V(-60, 120, 260), tgt: V(-230, 0, -30) },
  { id: 'dome', k: 'Visitor & Innovation Centre', t: 'The shell', d: 'A glazed drum under a ribbed, shell-shaped roof: the public face of the centre, home to the Marine Innovation Park and its science discovery division.', cam: V(-255, 46, 18), tgt: V(-330, 10, -70), b: 'dome' },
  { id: 'meet', k: 'Where the two renders meet', t: 'The campus boulevard', d: 'Past the gateway arch the boulevard runs east along the coast. Here render 1 hands over to render 2: the dome sits at the corner of the hatchery plan.', cam: V(-120, 55, 30), tgt: V(40, 0, -30) },
  { id: 'p1h', k: 'Render 2 · Phase 01', t: 'Hatchery & Broodstock', d: 'Broodstock conditioning and larval rearing in round tanks. Select a building to see inside: the roof turns transparent.', cam: V(-110, 150, 40), tgt: V(-20, 0, -115), b: 'p1h' },
  { id: 'p2h', k: 'Render 2 · Phase 02', t: 'The second production stream', d: '≈18,000 m² of hatchery space across two production streams: phase one and phase two.', cam: V(110, 160, 40), tgt: V(180, 0, -115), b: 'p2h' },
  { id: 'nursery', k: 'Nursery & weaning', t: 'From larvae to fry', d: 'Rectangular nursery tanks where fry are weaned and graded before the move to sea.', cam: V(-20, 140, 190), tgt: V(45, 0, 45), b: 'p1n' },
  { id: 'labs', k: 'Laboratories & plant', t: '14 laboratories, header tanks, plant rooms', d: 'Offices and laboratories, live-feed and algae rooms, plant and generator rooms, and the header tanks at the tip of the site.', cam: V(330, 110, 170), tgt: V(330, 0, -10), b: 'labs' },
  { id: 'aerial', k: 'Render 2 · Overview', t: 'The hatchery strip', d: 'The full hatchery plan from above, with the sea on both sides and the red property boundary — the view of the second render.', cam: V(60, 330, 260), tgt: V(200, 0, -20) },
  { id: 'sea', k: 'Offshore', t: 'Sea cages', d: 'Juveniles move early to sea cages a short boat ride from the campus, fed from the barge and linked by the service jetty.', cam: V(330, 60, -330), tgt: V(120, 0, -455) },
  { id: 'all', k: 'The whole campus', t: 'From the shell to the sea', d: 'Explore freely: drag to orbit, scroll to zoom, click a building to look inside.', cam: V(-520, 420, 420), tgt: V(0, 0, -120) },
];
const B = Object.fromEntries(BUILDINGS.map(b => [b.id, b]));
B.dome = { id: 'dome', g: dome, label: 'Visitor & Innovation Centre', top: V(-330, G + 30, -70) };
const LABELS = [...BUILDINGS, B.dome, { id: 'gate', label: 'Gateway arch', top: V(-205, G + 22, -20) }, { id: 'cages', label: 'Sea cages', top: V(118, 10, -455) }, { id: 'header', label: 'Header tanks', top: V(426, G + 15, -105) }];

/* camera flights */
let flight = null, cur = -1, auto = false, autoTimer = null;
const easeIO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
function flyTo(cam, tgt, dur = 3.2, done) {
  const p0 = camera.position.clone(), t0 = controls.target.clone(), mid = p0.clone().lerp(cam, .5); mid.y = Math.max(p0.y, cam.y) + p0.distanceTo(cam) * .18;
  const curve = new THREE.QuadraticBezierCurve3(p0, mid, cam.clone());
  flight = { curve, t0, t1: tgt.clone(), start: performance.now(), dur: (reduced ? .01 : dur) * 1000, done };
  controls.enabled = false;
}
function go(i) {
  cur = (i + STOPS.length) % STOPS.length; const s = STOPS[cur];
  const dist = camera.position.distanceTo(s.cam);
  flyTo(s.cam, s.tgt, THREE.MathUtils.clamp(dist / 140, 2.2, 5.5), () => { controls.enabled = true; if (auto) autoTimer = setTimeout(() => go(cur + 1), 6500); });
  select(s.b || null);
  $('#k').textContent = `${String(cur + 1).padStart(2, '0')} / ${STOPS.length} · ${s.k}`; $('#t').textContent = s.t; $('#d').textContent = s.d;
  $('#card').classList.remove('in'); void $('#card').offsetWidth; $('#card').classList.add('in');
  document.querySelectorAll('#steps button').forEach((b, j) => b.classList.toggle('on', j === cur));
}
/* selection: highlight + x-ray roof */
let selected = null;
function select(id) {
  if (selected && selected.roof) { selected.inside.visible = false; selected.roof.material.opacity = 1; selected.roof.material.transparent = false; selected.roof.material.needsUpdate = true; selected.walls.userData.mat.emissive.setRGB(0, 0, 0); }
  selected = id ? B[id] : null;
  if (selected && selected.roof) { selected.inside.visible = true; selected.roof.material.transparent = true; selected.roof.material.opacity = .08; selected.roof.material.needsUpdate = true; selected.walls.userData.mat.emissive.setRGB(.12, .06, 0); }
  document.querySelectorAll('.lbl').forEach(l => l.classList.toggle('on', l.dataset.id === id));
}

/* ---------------- labels ---------------- */
const lblBox = $('#labels');
LABELS.forEach(b => { const el = document.createElement('button'); el.className = 'lbl'; el.dataset.id = b.id; el.innerHTML = `<i></i><span>${b.label}</span>`; lblBox.appendChild(el); b.el = el;
  el.addEventListener('click', () => { stopAuto(); const s = STOPS.findIndex(s => s.b === b.id); if (s >= 0) go(s); else { const p = b.top.clone(); flyTo(p.clone().add(V(60, 70, 90)), p.clone().setY(0), 2.6, () => controls.enabled = true); select(B[b.id]?.roof ? b.id : null); } }); });
const tmp = new THREE.Vector3();
function placeLabels() {
  for (const b of LABELS) { tmp.copy(b.top).project(camera); const vis = tmp.z < 1 && Math.abs(tmp.x) < 1.1 && Math.abs(tmp.y) < 1.1; const d = camera.position.distanceTo(b.top);
    b.el.style.opacity = vis ? THREE.MathUtils.clamp(1.6 - d / 700, 0, 1) : 0; b.el.style.pointerEvents = vis && d < 900 ? 'auto' : 'none';
    b.el.style.transform = `translate(${(tmp.x * .5 + .5) * innerWidth}px,${(-tmp.y * .5 + .5) * innerHeight}px)`; }
}
/* ---------------- picking ---------------- */
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(); let down = null;
canvas.addEventListener('pointerdown', e => { down = [e.clientX, e.clientY]; stopAuto(); });
canvas.addEventListener('pointerup', e => { if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 6) return;
  ndc.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
  const objs = [...BUILDINGS.flatMap(b => [b.walls, b.roof]), ...dome.children];
  const hit = ray.intersectObjects(objs, false)[0]; if (!hit) return;
  const b = BUILDINGS.find(b => b.walls === hit.object || b.roof === hit.object) || (dome.children.includes(hit.object) ? B.dome : null);
  if (b) b.el.click(); });

/* ---------------- minimap ---------------- */
const mm = $('#mini'), mctx = mm.getContext('2d');
function drawMini() { const W = mm.width, H = mm.height, sx = x => (x + 470) / 980 * W, sz = z => (z + 520) / 760 * H;
  mctx.fillStyle = '#1b6170'; mctx.fillRect(0, 0, W, H);
  mctx.fillStyle = '#e7d6b2'; mctx.beginPath(); mctx.moveTo(sx(-480), sz(zN(-480))); for (let x = -480; x <= XTIP; x += 10) mctx.lineTo(sx(x), sz(zN(x)));
  for (let x = XTIP; x >= -480; x -= 10) mctx.lineTo(sx(x), sz(Math.min(zS(x), 240))); mctx.fill();
  mctx.fillStyle = '#ffffff'; BUILDINGS.forEach(b => { const p = b.g.position, w = b.walls.geometry.parameters.width, d = b.walls.geometry.parameters.depth; mctx.fillRect(sx(p.x - w / 2), sz(p.z - d / 2), w / 980 * W, d / 760 * H); });
  mctx.beginPath(); mctx.ellipse(sx(-330), sz(-70), 46 / 980 * W, 34 / 760 * H, 0, 0, TAU); mctx.fill();
  mctx.strokeStyle = '#f2f2ee'; CAGES.forEach(([x, z]) => { mctx.beginPath(); mctx.arc(sx(x), sz(z), 14 / 980 * W, 0, TAU); mctx.stroke(); });
  mctx.strokeStyle = 'rgba(226,161,60,.9)'; mctx.setLineDash([3, 3]); mctx.strokeRect(sx(-440), sz(-170), sx(-120) - sx(-440), sz(240) - sz(-170)); mctx.strokeRect(sx(-110), sz(-200), sx(480) - sx(-110), sz(200) - sz(-200)); mctx.setLineDash([]);
  mctx.fillStyle = '#E2A13C'; mctx.font = '600 10px Inter, Arial'; mctx.fillText('1', sx(-430), sz(-150)); mctx.fillText('2', sx(-100), sz(-182));
  const c = camera.position, t = controls.target; mctx.fillStyle = '#ff5a3c'; mctx.beginPath(); mctx.arc(sx(c.x), sz(c.z), 4, 0, TAU); mctx.fill();
  mctx.strokeStyle = '#ff5a3c'; mctx.beginPath(); mctx.moveTo(sx(c.x), sz(c.z)); mctx.lineTo(sx(t.x), sz(t.z)); mctx.stroke(); }
mm.addEventListener('click', e => { const r = mm.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * 980 - 470, z = (e.clientY - r.top) / r.height * 760 - 520; stopAuto(); flyTo(V(x + 80, 160, z + 160), V(x, 0, z), 2.4, () => controls.enabled = true); });

/* ---------------- UI wiring ---------------- */
$('#steps').innerHTML = STOPS.map((s, i) => `<button type="button" title="${s.t}"><b>${String(i + 1).padStart(2, '0')}</b><span>${s.t}</span></button>`).join('');
document.querySelectorAll('#steps button').forEach((b, i) => b.addEventListener('click', () => { stopAuto(); go(i); }));
$('#next').addEventListener('click', () => { stopAuto(); go(cur + 1); });
$('#prev').addEventListener('click', () => { stopAuto(); go(cur - 1); });
const autoBtn = $('#auto');
function stopAuto() { auto = false; clearTimeout(autoTimer); autoBtn.textContent = '▶ Guided tour'; autoBtn.setAttribute('aria-pressed', 'false'); }
autoBtn.addEventListener('click', () => { if (auto) return stopAuto(); auto = true; autoBtn.textContent = '❚❚ Pause tour'; autoBtn.setAttribute('aria-pressed', 'true'); go(cur < 0 ? 0 : cur + 1); });
$('#start').addEventListener('click', () => { $('#intro').classList.add('gone'); auto = true; autoBtn.textContent = '❚❚ Pause tour'; autoBtn.setAttribute('aria-pressed', 'true'); go(0); });
$('#free').addEventListener('click', () => { $('#intro').classList.add('gone'); go(STOPS.length - 1); });
addEventListener('keydown', e => { if (e.key === 'ArrowRight') { stopAuto(); go(cur + 1); } if (e.key === 'ArrowLeft') { stopAuto(); go(cur - 1); } });

/* ---------------- loop ---------------- */
function resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w < h ? 58 : 42; camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();
camera.position.set(-760, 520, 640); controls.target.set(-200, 0, -40); camera.lookAt(controls.target);
let last = performance.now(), T = 0, introT = 0;
function frame(now) {
  const dt = Math.min(.05, (now - last) / 1000); last = now; T += dt;
  water.uniforms.uTime.value = T;
  if (flight) { const p = Math.min(1, (now - flight.start) / flight.dur), e = easeIO(p);
    camera.position.copy(flight.curve.getPoint(e)); controls.target.lerpVectors(flight.t0, flight.t1, e); camera.lookAt(controls.target);
    if (p >= 1) { const d = flight.done; flight = null; d && d(); } }
  else if (cur < 0 && !reduced) { introT += dt; const a = introT * .04; camera.position.set(-200 + Math.cos(a + 2.4) * 720, 380 - Math.min(introT * 4, 120), -40 + Math.sin(a + 2.4) * 720); camera.lookAt(controls.target); }
  else controls.update();
  for (const k of cars) { const c = ROADS[k.road], L = c.getLength(); k.t = ((k.t + k.v * dt / L) % 1 + 1) % 1; const p = c.getPointAt(k.t), tg = c.getTangentAt(k.t);
    k.c.position.set(p.x - tg.z * k.side, G + .1, p.z + tg.x * k.side); k.c.rotation.y = Math.atan2(-tg.z * Math.sign(k.v), tg.x * Math.sign(k.v)); }
  boats.forEach((b, i) => { const a = T * .05 + i * Math.PI; b.position.set(150 + Math.cos(a) * 110, .2 + Math.sin(T * 1.3 + i) * .15, -440 + Math.sin(a) * 60); b.rotation.y = -a - Math.PI / 2 * (i ? 1 : 1); });
  cageGroup.children.forEach((g, i) => { g.position.y = Math.sin(T * .9 + i) * .12; g.rotation.z = Math.sin(T * .7 + i * 2) * .006; });
  if (selected && selected.roof) selected.walls.userData.mat.emissive.setRGB(.1 + .06 * Math.sin(T * 3), .05, 0);
  renderer.render(scene, camera); placeLabels(); if ((T * 10 | 0) % 2 === 0) drawMini();
  requestAnimationFrame(frame);
}
renderer.compile(scene, camera);
$('#loading').classList.add('gone');
requestAnimationFrame(frame);
window.__ready = true;
