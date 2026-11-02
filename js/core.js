import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export const Q = new URLSearchParams(location.search);
export const DEMO = Q.has('demo');
export const CAPTURE = Q.has('capture');
export const MOBILE = Math.min(innerWidth, innerHeight) < 700;
// quality tier: 2 = desktop, 1 = mobile / low; adaptive pixel ratio on top
export const TIER = Q.get('q') ? +Q.get('q') : (MOBILE ? 1 : 2);

export const renderer = new THREE.WebGLRenderer({ antialias: false, precision: 'highp', powerPreference: 'high-performance', preserveDrawingBuffer: CAPTURE });
const MAXPR = CAPTURE ? 1 : Math.min(devicePixelRatio, 1.5);
let pr = MAXPR;
renderer.setPixelRatio(pr);
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById('stage').appendChild(renderer.domElement);

export const camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.05, 7000);

const rt = new THREE.WebGLRenderTarget(innerWidth * pr, innerHeight * pr, { type: THREE.HalfFloatType, samples: 4 });
export const composer = new EffectComposer(renderer, rt);
const dummyScene = new THREE.Scene();
export const renderPass = new RenderPass(dummyScene, camera);
export const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.25, 0.55, 0.9);
export const bokeh = new BokehPass(dummyScene, camera, { focus: 6, aperture: 0.0025, maxblur: 0.008 });
bokeh.enabled = false;
const output = new OutputPass();
composer.addPass(renderPass); composer.addPass(bloom); composer.addPass(bokeh); composer.addPass(output);

export let world = null;
export function setWorld(w) {
  world = w;
  renderPass.scene = w.scene; bokeh.scene = w.scene;
  bloom.strength = w.bloom ?? 0.25; bloom.threshold = w.bloomThreshold ?? 0.9; bloom.radius = w.bloomRadius ?? 0.55;
  renderer.toneMappingExposure = w.exposure ?? 1.0;
  renderer.shadowMap.needsUpdate = true;
  camera.near = w.near ?? 0.1; camera.far = w.far ?? 7000; camera.updateProjectionMatrix();
}

let rw = 0, rh = 0, rp = 0;
export function resize() {
  if (innerWidth === rw && innerHeight === rh && pr === rp) return; // nothing changed: never reallocate (a realloc is a visible hitch)
  rw = innerWidth; rh = innerHeight; rp = pr;
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setPixelRatio(pr); renderer.setSize(innerWidth, innerHeight);
  composer.setPixelRatio(pr); composer.setSize(innerWidth, innerHeight);
}
let rq = 0; addEventListener('resize', () => { cancelAnimationFrame(rq); rq = requestAnimationFrame(resize); }); // coalesce (iOS fires many while the toolbar animates)
resize();

// Adaptive quality, decided ONCE: after a warm-up, measure the median frame time over 3 s windows and lower the internal
// resolution at most twice if the device is slow. It never goes back up and never toggles bloom, so there is no
// periodic resolution / brightness "pop" (the old governor re-decided every 2 s and oscillated on phones).
let warm = 0, acc = 0, win = [], drops = 0, locked = false;
export function adapt(realDt) {
  if (CAPTURE || locked) return;
  if (realDt > .25 || document.hidden) return; // tab switch or a one-off hitch: ignore
  warm += realDt; if (warm < 2.5) return;      // shader compile / first transition
  win.push(realDt); acc += realDt; if (acc < 3) return;
  win.sort((x, y) => x - y); const med = win[win.length >> 1]; win = []; acc = 0;
  if (med > 1 / 40 && drops < 2 && pr > .75) { pr = Math.max(.75, +(pr * .75).toFixed(3)); drops++; resize(); }
  else locked = true;
  if (drops >= 2) locked = true;
}
export function render() { composer.render(); }
