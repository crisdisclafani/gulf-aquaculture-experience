import './seed.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { renderer, camera, composer, bokeh, setWorld, render, adapt, DEMO, CAPTURE, TIER, MOBILE, Q } from './core.js';
import { buildExterior, HERO_CAGE, G } from './exterior.js';
import { buildBrood } from './brood.js';
import { buildHatch, HERO_TANK } from './hatch.js';
import { buildUnder } from './under.js';
import { STR } from './i18n.js';

const $ = s => document.querySelector(s), $$ = s => document.querySelectorAll(s);
const V = (x, y, z) => new THREE.Vector3(x, y, z);
gsap.ticker.remove(gsap.updateRoot); gsap.ticker.lagSmoothing(0); gsap.updateRoot(0); // pin GSAP's clock to the app clock (T) so timing never depends on load time
let T = 0; // app clock (seconds) — drives GSAP, shaders, fish: identical in live and capture modes

// ---------------- worlds ----------------
const EXT = buildExterior(renderer);
const BRD = buildBrood(renderer, TIER);
const HAT = buildHatch(renderer, TIER, camera);
const UND = buildUnder(renderer, TIER);
EXT.offset = V(0, 0, 0); BRD.offset = V(0, 0, 0); HAT.offset = V(0, 0, 0); UND.offset = HERO_CAGE.clone();
let W = EXT;
function useWorld(w) { W = w; setWorld(w); bokeh.enabled = false; buildHotspots(w === EXT ? (state.cagesMode ? EXT.cageHotspots : EXT.hotspots) : w.hotspots); }

// ---------------- camera rig ----------------
// rig.pos / rig.tgt are in "journey" coordinates (exterior world coordinates; underwater adds the cage offset)
const rig = { pos: V(-330, 210, 330), tgt: V(-40, 0, -20), sway: 1, fov: 40 };
let mode = 'rig'; // 'rig' | 'orbit' | 'follow' | 'drift'
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false; controls.enableDamping = true; controls.dampingFactor = .08;
let flight = null;
function fly(points, targets, dur, ease = 'power2.inOut', extra = {}) {
  if (flight) flight.kill();
  stopOrbit();
  mode = 'rig';
  const P = new THREE.CatmullRomCurve3([rig.pos.clone(), ...points], false, 'centripetal');
  const Tg = new THREE.CatmullRomCurve3([rig.tgt.clone(), ...targets], false, 'centripetal');
  const o = { p: 0 }, f0 = rig.fov, f1 = extra.fov ?? rig.fov, s0 = rig.sway;
  flight = gsap.to(o, { p: 1, duration: dur, ease, onUpdate() { P.getPoint(o.p, rig.pos); Tg.getPoint(o.p, rig.tgt); rig.fov = f0 + (f1 - f0) * o.p; rig.sway = s0 * (1 - o.p) + (extra.sway ?? 1) * o.p; extra.onUpdate && extra.onUpdate(o.p); }, onComplete() { flight = null; extra.onComplete && extra.onComplete(); if (!DEMO) startOrbit(); } });
  return flight;
}
function place(pos, tgt, fov = rig.fov) { if (flight) flight.kill(); flight = null; rig.pos.copy(pos); rig.tgt.copy(tgt); rig.fov = fov; }
function startOrbit() { if (DEMO || CAPTURE || mode !== 'rig') return; mode = 'orbit'; controls.target.copy(rig.tgt).sub(W.offset); controls.enabled = true; const lim = { [EXT === W]: 1 }; controls.minDistance = W === EXT ? 20 : 1; controls.maxDistance = W === EXT ? 700 : 25; controls.maxPolarAngle = W === EXT ? 1.45 : Math.PI; }
function stopOrbit() { if (mode === 'orbit') { rig.pos.copy(camera.position).add(W.offset); rig.tgt.copy(controls.target).add(W.offset); } controls.enabled = false; }
const lookTmp = V(0, 0, 0);
function applyCamera(dt) {
  if (mode === 'orbit') { controls.dampingFactor = 1 - Math.pow(.92, Math.min(dt, .1) * 60); controls.update(); return; } // damping tuned at 60 fps, now per-second
  if (mode === 'follow') updateFollow(dt);
  if (mode === 'drift') { const a = drift.a0 + (T - drift.t0) * .016; rig.pos.set(HERO_CAGE.x + Math.cos(a) * drift.r, drift.y + Math.sin((T - drift.t0) * .2) * .08, HERO_CAGE.z + Math.sin(a) * drift.r); rig.tgt.set(HERO_CAGE.x + Math.cos(a + 1.9) * 4, drift.y - .6, HERO_CAGE.z + Math.sin(a + 1.9) * 4); }
  const sw = rig.sway * (W === EXT ? extSway : .05); // very light hand-held drift; almost none over the water
  camera.position.copy(rig.pos).sub(W.offset).add(lookTmp.set(Math.sin(T * .21) * sw, Math.sin(T * .17 + 1) * sw * .5, Math.cos(T * .19) * sw));
  camera.lookAt(lookTmp.copy(rig.tgt).sub(W.offset));
  // portrait phones: widen the aerial views so the campus still fits across the narrow screen (landscape unchanged)
  let fov = rig.fov;
  if (W === EXT && camera.aspect < .8) fov = Math.min(72, Math.max(fov, 2 * Math.atan(Math.tan(fov * Math.PI / 360) * .8 / camera.aspect) * 180 / Math.PI));
  if (Math.abs(camera.fov - fov) > .01) { camera.fov = fov; camera.updateProjectionMatrix(); }
}
const drift = { a0: 0, t0: 0, r: 8, y: -4.5 };
function setDrift() { const C = HERO_CAGE; drift.a0 = Math.atan2(rig.pos.z - C.z, rig.pos.x - C.x); drift.t0 = T; drift.r = Math.hypot(rig.pos.x - C.x, rig.pos.z - C.z); drift.y = rig.pos.y; mode = 'drift'; }
let extSway = 2.2; // campus aerial drift (m); set low over the sea cages

// ---------------- i18n ----------------
let lang = 'en';
const t = k => (STR[lang][k] ?? STR.en[k] ?? k);
function applyLang(l) {
  lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-t]').forEach(e => e.textContent = t(e.dataset.t));
  document.querySelectorAll('[data-th]').forEach(e => e.innerHTML = t(e.dataset.th));
  document.querySelectorAll('[data-t-aria]').forEach(e => e.setAttribute('aria-label', t(e.dataset.tAria)));
  $('#menuBtn').setAttribute('aria-label', t('menu'));
  document.querySelectorAll('#langToggle button').forEach(b => b.classList.toggle('on', b.dataset.l === l));
  $('#btnLangCard').innerHTML = l === 'ar' ? '<span>EN</span>' : '<span class="ar">عربي</span>';
  buildHotspots(currentHS); renderCrumb(); renderLevel(); setPP(pp, true); selectSpecies(spSel, true);
}

// ---------------- hotspots ----------------
let HS = [], currentHS = [];
const hsLayer = $('#hotspots');
function buildHotspots(list) {
  currentHS = list; hsLayer.innerHTML = '';
  HS = list.map(h => {
    const el = document.createElement('div'); el.className = 'hs'; el.dataset.id = h.id;
    el.innerHTML = `<i></i><span class="ln"></span><div class="hl"><b>${t(h.key)}</b><span>${t(h.sub)}</span></div>`;
    el.setAttribute('role', 'button'); el.tabIndex = 0;
    el.addEventListener('click', e => { e.stopPropagation(); ui(() => onHotspot(h.id))(); }); el.addEventListener('keydown', e => (e.key === 'Enter' || e.key === ' ') && el.click());
    el.style.visibility = 'hidden'; hsLayer.appendChild(el);
    return { ...h, el, a: 0 };
  });
  HS.forEach(h => h.el.classList.toggle('sel', h.id === selHS));
}
let selHS = null, hsVisible = false;
function showHotspots(on, stagger = .12) { hsVisible = on; HS.forEach((h, i) => gsap.to(h, { a: on ? 1 : 0, duration: on ? .6 : .3, delay: on ? i * stagger : 0, ease: 'power2.out' })); }
function selectHS(id) { selHS = id; HS.forEach(h => h.el.classList.toggle('sel', h.id === id)); }
const pv = V(0, 0, 0);
// UI rects that hide a hotspot underneath (a hotspot under a panel can't be seen or tapped, so it steps aside)
const OCC_SEL = '.panel,.card,header.top,.crumb,.concept,section.lifecycle';
let occ = [], occN = 0;
function occluders() {
  if (occN++ % 4) return occ; // refresh every 4th frame: cheap, and never more than a few frames stale
  occ = [];
  for (const e of document.querySelectorAll(OCC_SEL)) { const c = getComputedStyle(e); if (c.visibility === 'visible' && +c.opacity > .3 && c.display !== 'none') occ.push(e.getBoundingClientRect()); }
  return occ;
}
const covered = (x0, y0, x1, y1, R) => R.some(r => x1 > r.left - 6 && x0 < r.right + 6 && y1 > r.top - 6 && y0 < r.bottom + 6);
function projectHotspots() {
  const R = occluders(), placed = [];
  for (const h of HS) {
    pv.copy(h.pos).project(camera);
    const vis = pv.z < 1 && h.a > .001 && Math.abs(pv.x) < 1.1 && Math.abs(pv.y) < 1.1;
    if (!vis) { h.el.style.visibility = 'hidden'; continue; }
    const x = (pv.x * .5 + .5) * innerWidth, y = (-pv.y * .5 + .5) * innerHeight;
    // label on its natural side unless that side runs into a panel, the screen edge or another hotspot; hidden only if a panel blocks both sides
    const w = h.el.offsetWidth, hh = h.el.offsetHeight, y0 = y - 10, pref = x > innerWidth * .7;
    let left = pref, best = 9;
    for (const l of [pref, !pref]) {
      const x0 = l ? x - w + 10 : x - 10, x1 = x0 + w;
      if (covered(x0, y0, x1, y0 + hh, R)) continue;
      const sc = (Math.max(0, -x0) + Math.max(0, x1 - innerWidth)) / 30 + (covered(x0, y0, x1, y0 + hh, placed) ? 1 : 0);
      if (sc < best) { best = sc; left = l; }
    }
    if (best === 9) { h.el.style.visibility = 'hidden'; continue; }
    const x0 = left ? x - w + 10 : x - 10; placed.push({ left: x0 + 6, right: x0 + w - 6, top: y0 + 6, bottom: y0 + hh - 6 });
    h.el.classList.toggle('l', left);
    h.el.style.visibility = 'visible'; h.el.style.opacity = h.a;
    h.el.style.transform = `translate(${left ? x - w + 10 : x - 10}px,${y0}px) scale(${.85 + .15 * h.a})`;
  }
  // fish tag follows the selected fish
  if (UND.state.sel >= 0 && W === UND) {
    const fp = UND.school.p[UND.state.sel]; pv.copy(fp).project(camera);
    const x = (pv.x * .5 + .5) * innerWidth; pv.copy(fp).addScaledVector(camera.up, -UND.school.s[UND.state.sel] * .62).project(camera);
    const y = (-pv.y * .5 + .5) * innerHeight, ft = $('#fishTag'), fw2 = ft.offsetWidth, fh = ft.offsetHeight;
    let ty = y + 8; const tx = Math.max(8, Math.min(innerWidth - fw2 - 8, x - 60));
    if (covered(tx, ty, tx + fw2, ty + fh, R)) { pv.copy(fp).addScaledVector(camera.up, UND.school.s[UND.state.sel] * .62).project(camera); ty = (-pv.y * .5 + .5) * innerHeight - fh - 8; } // card in the way: tag above the fish
    ty = Math.max(innerWidth <= 760 ? 124 : 8, Math.min(innerHeight - fh - 8, ty)); ft.style.transform = `translate(${tx}px,${ty}px)`;
  }
}

// ---------------- breadcrumb & levels ----------------
let crumb = [], level = 1, levelKey = 'lv1';
function setCrumb(c) { crumb = c; renderCrumb(); }
function renderCrumb() {
  const el = $('#crumb'); el.innerHTML = '';
  crumb.forEach((c, i) => {
    if (i) { const s = document.createElement('i'); s.textContent = lang === 'ar' ? '‹' : '›'; el.appendChild(s); }
    const a = document.createElement('a'); a.href = '#'; a.textContent = t(c.k); a.dataset.k = c.k; if (i === crumb.length - 1) { a.className = 'on'; a.setAttribute('aria-current', 'page'); }
    const fn = c.fn || CRUMB_FN[c.k]; a.onclick = e => { e.preventDefault(); ui(fn)(); }; el.appendChild(a);
  });
  el.scrollLeft = lang === 'ar' ? -el.scrollWidth : el.scrollWidth; // mobile: the current step stays in view
}
function setLevel(n, k) { level = n; levelKey = k; renderLevel(); }
function renderLevel() {
  $('#dots').innerHTML = Array.from({ length: 7 }, (_, i) => `<button data-lv="${i + 1}" aria-label="${t('lvl')} ${i + 1} · ${t('lv' + (i + 1))}" title="${t('lv' + (i + 1))}" class="${i + 1 < level ? 'd' : i + 1 === level ? 'on' : ''}"></button>`).join('');
  $$('#dots button').forEach(b => b.onclick = ui(LEVEL_FN[b.dataset.lv]));
  $('#levelTxt').innerHTML = `${t('lvl')} <b>${level}</b> ${t('of')} 7 · ${t(levelKey)}`;
}
function setNav(k) { document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('on', a.dataset.nav === k)); }

// ---------------- panels ----------------
const shown = new Set();
function show(sel, from = { y: 18 }, d = 0) { const el = $(sel); shown.add(sel); gsap.killTweensOf(el); return gsap.fromTo(el, { autoAlpha: 0, x: 0, y: 0, ...from }, { autoAlpha: 1, x: 0, y: 0, duration: .8, delay: d, ease: 'power3.out' }); }
function hide(sel, d = 0) { const el = $(sel); shown.delete(sel); gsap.killTweensOf(el); return gsap.to(el, { autoAlpha: 0, duration: .35, delay: d, ease: 'power2.in' }); }
function hideAll(except = []) { [...shown].forEach(s => { if (!except.includes(s)) hide(s); }); }
function toast(k, dur = 3.2) { const el = $('#toast'); el.textContent = t(k); gsap.killTweensOf(el); gsap.timeline().fromTo(el, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: .4 }).to(el, { autoAlpha: 0, duration: .4 }, dur); }
const veil = $('#veil');
function veilSwap(fn, inD = .45, outD = .65) {
  return gsap.timeline().to(veil, { opacity: 1, duration: inD, ease: 'power2.in' }).call(fn).to(veil, { opacity: 0, duration: outD, ease: 'power2.out' });
}
function count(el, to, dur = 1.6, fmt = v => Math.round(v).toLocaleString('en-US')) { const o = { v: 0 }; gsap.to(o, { v: to, duration: dur, ease: 'power2.out', onUpdate: () => el.textContent = fmt(o.v) }); }

// ---------------- photoperiod (live control of the hall lighting) ----------------
let pp = 0;
function setPP(v, silent) {
  pp = Math.max(0, Math.min(1, v));
  $('#ppFill').style.width = pp * 100 + '%'; $('#ppKnob').style.left = pp * 100 + '%';
  $('#ppLabel').textContent = t(pp < .34 ? 'ppDay' : pp < .72 ? 'ppDusk' : 'ppNight');
  if (lang === 'ar') { $('#ppKnob').style.left = 'auto'; $('#ppKnob').style.right = pp * 100 + '%'; $('#ppKnob').style.marginRight = '-10px'; $('#ppFill').style.marginInlineStart = 'auto'; } else { $('#ppKnob').style.right = 'auto'; $('#ppKnob').style.marginRight = '0'; }
  BRD.setPhoto(pp);
}
{ const s = $('#ppSlider'); let drag = false; const at = e => { const r = s.getBoundingClientRect(); let v = (e.clientX - r.left) / r.width; if (lang === 'ar') v = 1 - v; setPP(v); };
  s.addEventListener('pointerdown', e => { drag = true; s.setPointerCapture(e.pointerId); at(e); }); s.addEventListener('pointermove', e => drag && at(e)); s.addEventListener('pointerup', () => drag = false); }

// ---------------- navigation (shared by manual use and the guided demo) ----------------
const state = { where: 'campus', cagesMode: false };
function crumbCampus() { return { k: 'crCampus', fn: goCampus }; }
function goCampus() {
  hideAll(); resetFish(); state.cagesMode = false; selectHS(null);
  const go = () => { useWorld(EXT); extSway = 2.2; const tall = innerWidth < innerHeight * .8; // portrait phone: steeper view so the buildings spread down the screen
    if (tall) { place(V(-190, 330, 210), V(-50, 0, -40), 40); fly([V(-165, 300, 170)], [V(-50, 0, -45)], 10, 'sine.out'); }
    else { place(V(-330, 210, 330), V(-40, 0, -20), 40); fly([V(-290, 175, 270)], [V(-35, 0, -25)], 10, 'sine.out'); } showHotspots(true); };
  if (W !== EXT || state.where !== 'campus') veilSwap(go); else go();
  state.where = 'campus'; state.introHidden = false; setCrumb([{ k: 'crCampus' }]); setLevel(1, 'lv1'); setNav('campus'); show('#intro', { y: 18 }, .6);
}
function enterBroodstock() {
  hideAll(); resetFish(); selectHS('brood'); state.where = 'brood';
  setCrumb([crumbCampus(), { k: 'crFac' }, { k: 'crBrood' }]); setLevel(2, 'lv2'); setNav('facilities');
  const inside = () => {
    useWorld(BRD); setPP(0);
    place(V(29, 2.3, 1.5), V(0, 1.4, 0), 44);
    fly([V(21, 3.0, 6), V(13, 3.7, 10.5)], [V(4, 1.2, 1), V(-6, .8, -1.5)], 5.2, 'power2.out', { sway: 1 });
    setLevel(3, 'lv3'); show('#brood', { x: lang === 'ar' ? -40 : 40 }, 1.2);
  };
  if (W === EXT) {
    showHotspots(false);
    fly([V(-150, 115, 215), V(-20, 46, 140), V(-6, 16, 96)], [V(-20, 0, 10), V(-5, 4, 40), V(-5, 5, 42)], 4.4, 'power2.inOut', { fov: 44 });
    gsap.delayedCall(3.7, () => veilSwap(inside, .45, .7));
  } else veilSwap(inside);
}
function goHatchery() {
  hideAll(); resetFish(); state.where = 'hatch';
  setCrumb([crumbCampus(), { k: 'crFac' }, { k: 'crHatch' }, { k: 'crL3T6' }]); setNav('facilities');
  veilSwap(() => {
    useWorld(HAT); setLevel(4, 'lv4');
    place(V(13, 1.9, -1.5), V(4, 1.1, 2.0), 44);
    fly([V(8.5, 2.1, -1.6), V(5.3, 2.35, -.6)], [V(4, 1.0, 2.2), V(1.5, .85, 3.2)], 4.6, 'power2.out');
    showHotspots(true);
    show('#lifecycle', { y: -14 }, .8); show('#tank', { x: lang === 'ar' ? -40 : 40 }, 1.3);
    gsap.delayedCall(1.3, () => {
      document.querySelectorAll('.lc-step').forEach((s, i) => { s.classList.toggle('done', i < 1); s.classList.toggle('on', i === 1); });
      gsap.fromTo('#lcFill', { width: '0%' }, { width: '33%', duration: 1.2, ease: 'power2.out' });
      count($('#cStocked'), 750000); count($('#cHatched'), 580000, 1.8); count($('#cUnhatched'), 170000, 1.8);
      gsap.fromTo('#rateBar', { width: '0%' }, { width: (580 / 750 * 100).toFixed(1) + '%', duration: 1.8, ease: 'power2.out' });
    });
  });
}
function larvaeCloseUp() {
  showHotspots(false);
  fly([V(3.8, 1.95, 1.2), V(3.2, 1.45, 2.7)], [V(2.6, .8, 3.4), V(2.85, .55, 3.75)], 3.4, 'power2.inOut', { fov: 36, sway: .25 });
}
function goSeaCages() {
  hideAll(); resetFish(); state.where = 'cages'; state.cagesMode = true;
  setCrumb([crumbCampus(), { k: 'crCages' }, { k: 'crC03' }]); setNav('cages');
  veilSwap(() => {
    useWorld(EXT); setLevel(5, 'lv5'); extSway = .25;
    document.querySelectorAll('.lc-step').forEach((s, i) => { s.classList.toggle('done', i < 3); s.classList.toggle('on', i === 3); });
    place(V(-60, 70, 20), V(120, 0, -80), 46);
    fly([V(90, 55, -30), V(260, 38, -60), V(372, 24, -86)], [V(300, 0, -110), V(400, 0, -118), V(414, -1, -124)], 6.2, 'power1.inOut', { fov: 42 });
    gsap.delayedCall(4.2, () => { showHotspots(true); selectHS('c03'); show('#cages', { x: lang === 'ar' ? -40 : 40 }); });
  });
}
function diveCage(then) {
  if (typeof then !== 'function') then = null;
  if (W === UND) return underDrift(then);
  if (W !== EXT || !state.cagesMode) { // from campus / inside a building: cut to the cage first, then dive
    hideAll(); resetFish(); showHotspots(false); state.where = 'under';
    setCrumb([crumbCampus(), { k: 'crCages' }, { k: 'crC03' }, { k: 'crUnder' }]); setLevel(6, 'lv6'); setNav('cages');
    veilSwap(() => { state.cagesMode = true; useWorld(EXT); extSway = .25; place(V(HERO_CAGE.x - 5, 20, HERO_CAGE.z + 32), V(HERO_CAGE.x, -1, HERO_CAGE.z), 46); dive(then); });
    return;
  }
  dive(then);
}
function dive(then) {
  hideAll(); resetFish(); showHotspots(false); state.where = 'under';
  setCrumb([crumbCampus(), { k: 'crCages' }, { k: 'crC03' }, { k: 'crUnder' }]); setLevel(6, 'lv6'); setNav('cages');
  const C = HERO_CAGE; let crossed = false;
  fly([V(C.x - 3, 9, C.z + 15), V(C.x - 2, 1.2, C.z + 8.5), V(C.x - 2.5, -1.6, C.z + 7.5), V(C.x - 4, -4.4, C.z + 7)],
      [V(C.x, -1, C.z), V(C.x - .5, -2, C.z + 2), V(C.x + 1, -4.5, C.z), V(C.x + 3, -5, C.z - 2)], 5.4, 'power1.inOut',
      { fov: 50, sway: .5, onUpdate() { if (!crossed && rig.pos.y < 0) { crossed = true; useWorld(UND); UND.burst(rig.pos.clone().sub(C).add(V(0, -.8, -1.2)), T); bokeh.enabled = false; show('#depth', { x: lang === 'ar' ? 20 : -20 }); } },
        onComplete() { setDrift(); show('#tapHint', { y: 10 }, .6); if (then) gsap.delayedCall(.4, then); } });
}
// ---- fish selection: ring, slow motion, follow camera with depth of field, fish card ----
const fol = { k: 0, pos: V(0, 0, 0), tgt: V(0, 0, 0), side: 1 };
function pickFishNear(sx, sy) {
  let best = -1, bd = 1e9;
  UND.school.p.forEach((p, i) => { pv.copy(p).project(camera); if (pv.z > 1) return; const d = Math.hypot((pv.x * .5 + .5) * innerWidth - sx, (-pv.y * .5 + .5) * innerHeight - sy); const dist = camera.position.distanceTo(p); if (dist < 3 || dist > 12) return; if (d + dist * 8 < bd) { bd = d + dist * 8; best = i; } });
  return best;
}
function selectFish(i) {
  if (i < 0) return;
  const S = UND.state, first = S.sel < 0; S.sel = i;
  hide('#tapHint'); UND.ring.visible = true;
  gsap.fromTo(UND.ringM.uniforms.uA, { value: 0 }, { value: 1, duration: .8 });
  gsap.to(S, { timeScale: .32, duration: 1.4, ease: 'power2.out' });
  if (mode !== 'follow') { fol.pos.copy(rig.pos); fol.tgt.copy(rig.tgt); }
  mode = 'follow'; fol.k = 0; gsap.to(fol, { k: 1, duration: 2.2, ease: 'power2.inOut' });
  bokeh.enabled = true;
  show('#fishTag', { y: 8 }, .3);
  setLevel(7, 'lv7'); setCrumb([crumbCampus(), { k: 'crCages' }, { k: 'crC03' }, { k: 'crHamour' }]);
  if (first || !shown.has('#card')) show('#card', { x: lang === 'ar' ? -70 : 70 }, first ? 1.2 : .3);
  setNav('cages');
}
const tv = V(0, 0, 0), fw = V(0, 0, 0), sd = V(0, 0, 0), up = V(0, 1, 0), wantP = V(0, 0, 0), wantT = V(0, 0, 0), camR = V(0, 0, 0);
function updateFollow(dt) {
  const S = UND.state, p = UND.school.p[S.sel], v = UND.school.v[S.sel]; if (!p) { mode = 'rig'; return; }
  fw.copy(v).setY(v.y * .3).normalize(); sd.crossVectors(up, fw).normalize();
  const side = lang === 'ar' ? -1 : 1; fol.side += (side - fol.side) * (1 - Math.pow(14 / 15, dt * 30));
  wantP.copy(p).addScaledVector(fw, -.9).addScaledVector(sd, 1.85).addScaledVector(up, .28).add(HERO_CAGE);
  camR.copy(sd); // fish placed off-centre, away from the card
  wantT.copy(p).addScaledVector(fw, .25).add(HERO_CAGE);
  const mob = innerWidth <= 760; // phone: the card is a bottom sheet, so frame the fish high and centred instead of to one side
  const ofs = tv.subVectors(wantP, wantT).normalize().cross(up).normalize().multiplyScalar(mob ? 0 : -.62 * fol.side);
  wantT.add(ofs); if (mob) wantT.addScaledVector(up, -.46);
  const a = 1 - Math.exp(-dt * 2.2);
  fol.pos.lerp(wantP, a); fol.tgt.lerp(wantT, a);
  const kf = fol.k < 1 ? 1 - Math.pow(1 - (fol.k * .2 + .02), dt * 30) : 1; // same per-second response at any frame rate (identical at the 30 fps capture step)
  rig.pos.lerp(fol.pos, kf); rig.tgt.lerp(fol.tgt, kf);
  rig.fov += (38 - rig.fov) * a * .5; rig.sway = .15;
  const dist = camera.position.distanceTo(p);
  bokeh.uniforms.focus.value = dist; bokeh.uniforms.aperture.value = .0042 * fol.k; bokeh.uniforms.maxblur.value = .0075;
}
function nextFish() { selectFish(pickFishNear(innerWidth * (lang === 'ar' ? .7 : .3), innerHeight * .5)); }
function setLang(l) {
  if (l === lang) return;
  if (shown.has('#card')) {
    gsap.timeline().to('#card', { autoAlpha: 0, x: lang === 'ar' ? -30 : 30, duration: .3, ease: 'power2.in' }).call(() => applyLang(l)).fromTo('#card', { autoAlpha: 0, x: l === 'ar' ? -60 : 60 }, { autoAlpha: 1, x: 0, duration: .7, ease: 'power3.out' });
  } else applyLang(l);
}
function showEnd() {
  hideAll(); hide('#fishTag');
  gsap.to(UND.ringM.uniforms.uA, { value: 0, duration: .6 }); gsap.to(UND.state, { timeScale: 1, duration: 2 });
  gsap.to(bokeh.uniforms.aperture, { value: 0, duration: 1.2, onComplete: () => bokeh.enabled = false });
  mode = 'rig'; UND.state.sel = -1;
  const C = HERO_CAGE;
  fly([V(C.x - 3, -5.5, C.z + 6), V(C.x - 1.5, -6.5, C.z + 3)], [V(C.x, -2.5, C.z - 2), V(C.x + 1, 0, C.z - 4)], 9, 'sine.inOut', { fov: 50, sway: .4 });
  gsap.fromTo('#endcard', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.6, delay: .8, ease: 'power2.out' });
  gsap.fromTo('.end-inner > *', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: .14, delay: 1.1, ease: 'power3.out' });
}

// ---------------- UI wiring ----------------
function onHotspot(id) {
  if (id === 'brood') enterBroodstock();
  else if (id === 'hatch') goHatchery();
  else if (id === 'labs' || id === 'ras') { selectHS(id); const h = HS.find(x => x.id === id); fly([V(h.pos.x - 80, 60, h.pos.z + 90)], [h.pos.clone().setY(G + 4)], 2.6); toast(id === 'labs' ? 'toastLabs' : 'toastRas', 4); }
  else if (id === 'cages') goSeaCages();
  else if (id === 'c03') diveCage();
  else if (id === 'l3t6') larvaeCloseUp();
}
// every control goes through ui(): closes the mobile menu and the end card, then navigates
function ui(fn) { return e => { if (e && e.preventDefault && e.currentTarget && e.currentTarget.tagName === 'A') e.preventDefault(); closeMenu(); if (!DEMO && getComputedStyle($('#endcard')).visibility === 'visible') gsap.to('#endcard', { autoAlpha: 0, duration: .4 }); fn && fn(); }; }
const CRUMB_FN = { crCampus: goCampus, crFac: enterBroodstock, crBrood: enterBroodstock, crHatch: goHatchery, crL3T6: () => (W === HAT ? larvaeCloseUp() : goHatchery()),
  crCages: goSeaCages, crC03: () => (W === UND && UND.state.sel >= 0 ? underDrift() : goSeaCages()), crUnder: () => underDrift(), crHamour: goFishCard };
const LEVEL_FN = { 1: goCampus, 2: enterBroodstock, 3: enterBroodstock, 4: goHatchery, 5: goSeaCages, 6: () => (W === UND ? underDrift() : diveCage()), 7: goFishCard };
function resetFish() {
  const S = UND.state; if (S.sel < 0) return;
  if (mode === 'follow') mode = 'rig'; // freeze the camera where it is; the next fly() takes over
  S.sel = -1; gsap.killTweensOf(fol); hide('#fishTag'); gsap.to(S, { timeScale: 1, duration: 1.2 });
  gsap.to(UND.ringM.uniforms.uA, { value: 0, duration: .5, onComplete: () => { UND.ring.visible = false; } });
  gsap.to(bokeh.uniforms.aperture, { value: 0, duration: .8, onComplete: () => { bokeh.enabled = false; } });
}
function underDrift(then) { // back to the free underwater view (from the fish card)
  if (W !== UND) return diveCage(then);
  hideAll(); resetFish(); state.where = 'under';
  setCrumb([crumbCampus(), { k: 'crCages' }, { k: 'crC03' }, { k: 'crUnder' }]); setLevel(6, 'lv6'); setNav('cages'); show('#depth', { x: lang === 'ar' ? 20 : -20 });
  const C = HERO_CAGE;
  fly([V(C.x - 4, -4.4, C.z + 7)], [V(C.x + 3, -5, C.z - 2)], 2.4, 'power2.inOut', { fov: 50, sway: .5, onComplete() { setDrift(); show('#tapHint', { y: 10 }, .3); if (typeof then === 'function') gsap.delayedCall(.3, then); } });
}
function pickHero() { let i = heroFish(); if (i < 0) i = pickFishNear(innerWidth * .5, innerHeight * .5); return i < 0 ? 0 : i; }
function goFishCard() { // open the Hamour fish card from anywhere
  if (W === UND && mode !== 'rig') { hide('#species'); hide('#trace'); show('#depth'); selectFish(UND.state.sel >= 0 ? UND.state.sel : pickHero()); return; }
  diveCage(() => selectFish(pickHero()));
}
// Species & Traceability panels (facts from the film only; everything else labelled placeholder)
const SP = { hamour: { d: 'spHamour', go: 'spGoHamour', fn: goFishCard }, seabream: { d: 'spSeabream', go: 'spGoSeabream', fn: goHatchery },
  shaari: { d: 'spPh' }, hamrah: { d: 'spPh' }, ummdrais: { d: 'spPh' } };
let spSel = 'hamour';
function selectSpecies(k, silent) {
  spSel = k; $$('#spList button').forEach(b => { const on = b.dataset.sp === k; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  const d = SP[k]; $('#spName').textContent = t(k === 'ummdrais' ? 'ummdrais' : k); $('#spDetail').textContent = t(d.d);
  $('#spGo').style.display = d.fn ? '' : 'none'; if (d.fn) $('#spGo').textContent = t(d.go); $('#spPhTag').style.display = d.fn ? 'none' : '';
}
function openPanel(id, nav) { hideAll(); show(id, { x: lang === 'ar' ? -40 : 40 }); setNav(nav); state.panel = id; }
function restorePanel() {
  hide('#species'); hide('#trace'); state.panel = null;
  const w = state.where, from = { x: lang === 'ar' ? -40 : 40 };
  if (w === 'campus') { if (!state.introHidden) show('#intro'); setNav('campus'); }
  else if (w === 'brood') { show('#brood', from); setNav('facilities'); }
  else if (w === 'hatch') { show('#lifecycle', { y: -14 }); show('#tank', from); setNav('facilities'); }
  else if (w === 'cages') { show('#cages', from); setNav('cages'); }
  else if (w === 'under') { show('#depth'); if (UND.state.sel >= 0) { show('#card', from); show('#fishTag'); } else show('#tapHint'); setNav('cages'); }
}
const TR_FN = [enterBroodstock, goHatchery, () => toast('toastNursery', 4), goSeaCages, () => toast('toastHarvest', 4)];
const LC_FN = [enterBroodstock, () => (state.where === 'hatch' ? larvaeCloseUp() : goHatchery()), () => toast('toastNursery', 4), goSeaCages];
function setStage(j) { // fish card stage tabs: highlight the stage and its point on the traceability line
  $$('#card .chips button').forEach((b, i) => { b.classList.toggle('on', i === j); b.setAttribute('aria-pressed', i === j); });
  $$('#card .tl i').forEach((d, i) => { d.classList.toggle('d', i < j); d.classList.toggle('on', i === j); });
}
// mobile / tablet menu
function closeMenu() { $('header.top').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false'); }
$('#menuBtn').onclick = () => { const o = !$('header.top').classList.contains('open'); $('header.top').classList.toggle('open', o); $('#menuBtn').setAttribute('aria-expanded', o); };

$('#btnStart').onclick = ui(() => enterBroodstock());
$('#btnFree').onclick = ui(() => { hide('#intro'); state.introHidden = true; toast('toastFree'); });
$('#btnToHatch').onclick = ui(goHatchery); $('#btnLarvae').onclick = ui(larvaeCloseUp); $('#btnToCages').onclick = ui(goSeaCages); $('#btnDive').onclick = ui(() => diveCage());
$('#btnNext').onclick = ui(nextFish); $('#btnAR').onclick = ui(() => toast('toastAR', 4.5));
$('#btnLangCard').onclick = ui(() => setLang(lang === 'ar' ? 'en' : 'ar'));
$$('#langToggle button').forEach(b => b.onclick = ui(() => setLang(b.dataset.l)));
const NAV_FN = { campus: goCampus, facilities: enterBroodstock, cages: goSeaCages, species: () => openPanel('#species', 'species'), trace: () => openPanel('#trace', 'trace') };
$$('#nav a').forEach(a => a.onclick = ui(NAV_FN[a.dataset.nav]));
$$('#spList button').forEach(b => b.onclick = ui(() => selectSpecies(b.dataset.sp)));
$('#spGo').onclick = ui(() => { hide('#species'); state.panel = null; SP[spSel].fn(); });
$$('#trList button').forEach(b => b.onclick = ui(() => { $$('#trList button').forEach(x => x.classList.toggle('on', x === b)); const i = +b.dataset.tr; if (i === 2 || i === 4) TR_FN[i](); else { hide('#trace'); state.panel = null; TR_FN[i](); } }));
$$('.x[data-close]').forEach(b => b.onclick = ui(restorePanel));
$$('.lc-step').forEach(s => { s.setAttribute('role', 'button'); s.tabIndex = 0; s.onclick = ui(LC_FN[+s.dataset.s]); s.onkeydown = e => (e.key === 'Enter' || e.key === ' ') && s.onclick(e); });
$$('#card .chips button').forEach((b, i) => b.onclick = ui(() => setStage(i)));
$('#fishTag').onclick = ui(() => { if (shown.has('#card')) hide('#card'); else show('#card', { x: lang === 'ar' ? -70 : 70 }); });
{ let down = null; renderer.domElement.addEventListener('pointerdown', e => down = [e.clientX, e.clientY]);
  renderer.domElement.addEventListener('pointerup', e => { if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 6) return; if (W === UND) { const i = pickFishNear(e.clientX, e.clientY); if (i >= 0) selectFish(i); } }); }
controls.addEventListener('start', () => {});

// ---------------- illustrative live values ----------------
function liveValues() {
  if (shown.has('#brood')) { $('#vTemp').textContent = (24.6 + Math.sin(T * .7) * .04).toFixed(1); $('#vSal').textContent = (38.2 + Math.sin(T * .4 + 1) * .05).toFixed(1); $('#vO2').textContent = (7.1 - pp * .2 + Math.sin(T * .9) * .05).toFixed(1); $('#vPh').textContent = (8.10 + Math.sin(T * .5 + 2) * .01).toFixed(2); }
  if (shown.has('#card')) { $('#fT').textContent = (26.4 + Math.sin(T * .6) * .05).toFixed(1); $('#fO').textContent = (6.8 + Math.sin(T * .8 + 1) * .05).toFixed(1); }
  if (shown.has('#depth') || W === UND) { const d = Math.max(0, -camera.position.y); $('#depthVal').textContent = d.toFixed(1); $('#depthBar').style.top = Math.min(136, d / 12 * 136) + 'px'; }
}

// ---------------- guided demo (?demo=1): a scripted cursor presses the real UI ----------------
const cur = { x: innerWidth * .55, y: innerHeight * .62 }, curEl = $('#cursor');
function curDraw() { curEl.style.transform = `translate(${cur.x - 5}px,${cur.y - 3}px)`; }
function center(el) { const r = (typeof el === 'string' ? $(el) : el).getBoundingClientRect(); return { x: r.left + r.width * .5, y: r.top + r.height * .55 }; }
function moveTo(get, dur = 1.1) { const o = { p: 0 }; let s; return gsap.to(o, { p: 1, duration: dur, ease: 'power2.inOut', onUpdate() { if (!s) s = { ...cur }; const g = get(); cur.x = s.x + (g.x - s.x) * o.p; cur.y = s.y + (g.y - s.y) * o.p; curDraw(); } }); }
function press(sel, fn) {
  const el = typeof sel === 'string' ? $(sel) : sel;
  gsap.fromTo('#cursor .ripple', { scale: .3, opacity: .95 }, { scale: 1.35, opacity: 0, duration: .7, ease: 'power2.out' });
  gsap.fromTo('#cursor svg', { scale: .85 }, { scale: 1, duration: .25, transformOrigin: '20% 10%' });
  if (el) { el.classList.add('pressed'); gsap.delayedCall(.16, () => el.classList.remove('pressed')); }
  fn ? fn() : el.click();
}
function heroFish() { // a well-placed fish in front of the camera
  let best = -1, bs = 1e9;
  UND.school.p.forEach((p, i) => { pv.copy(p).project(camera); if (pv.z > 1) return; const dist = camera.position.distanceTo(p); const sx = pv.x, sy = pv.y; const score = Math.hypot(sx + .15, sy + .05) * 6 + Math.abs(dist - 5.5); if (Math.abs(sx) < .7 && Math.abs(sy) < .6 && dist > 3.5 && dist < 9 && score < bs) { bs = score; best = i; } });
  return best;
}
function runDemo() {
  curEl.style.display = 'block'; gsap.set(curEl, { autoAlpha: 0 }); curDraw();
  const tl = gsap.timeline();
  const C = (time, fn) => tl.call(fn, null, time);
  C(5.0, () => gsap.to(curEl, { autoAlpha: 1, duration: .4 }));
  C(5.1, () => moveTo(() => center('#btnStart'), 1.2));
  C(6.5, () => press('#btnStart'));
  // broodstock: drag the photoperiod (really dims the hall), then back
  C(16.6, () => moveTo(() => center('#ppKnob'), 1.1));
  C(17.9, () => { press(null, () => {}); const o = { v: 0 }; gsap.to(o, { v: .78, duration: 1.9, ease: 'power1.inOut', onUpdate() { setPP(o.v); const c = center('#ppKnob'); cur.x = c.x; cur.y = c.y; curDraw(); } }); });
  C(21.0, () => { const o = { v: .78 }; gsap.to(o, { v: 0, duration: 1.5, ease: 'power1.inOut', onUpdate() { setPP(o.v); const c = center('#ppKnob'); cur.x = c.x; cur.y = c.y; curDraw(); } }); });
  C(23.0, () => moveTo(() => center('#btnToHatch'), 1.0));
  C(24.2, () => press('#btnToHatch'));
  C(31.4, () => moveTo(() => center('#btnLarvae'), 1.1));
  C(32.6, () => press('#btnLarvae'));
  C(38.4, () => moveTo(() => center('#btnToCages'), 1.0));
  C(39.6, () => press('#btnToCages'));
  C(47.0, () => moveTo(() => center('#btnDive'), 1.1));
  C(48.3, () => press('#btnDive'));
  let fishI = -1;
  C(56.0, () => { fishI = heroFish(); moveTo(() => { pv.copy(UND.school.p[fishI]).project(camera); return { x: (pv.x * .5 + .5) * innerWidth, y: (-pv.y * .5 + .5) * innerHeight }; }, 1.3); });
  C(57.4, () => press(null, () => selectFish(fishI)));
  C(58.2, () => gsap.to(curEl, { autoAlpha: 0, duration: .5 }));
  C(62.6, () => { gsap.to(curEl, { autoAlpha: 1, duration: .3 }); moveTo(() => center('#btnLangCard'), 1.1); });
  C(63.9, () => press('#btnLangCard'));
  C(68.6, () => moveTo(() => center('#langToggle button[data-l=en]'), 1.2));
  C(69.9, () => press('#langToggle button[data-l=en]'));
  C(71.0, () => gsap.to(curEl, { autoAlpha: 0, duration: .5 }));
  C(72.4, () => showEnd());
  return tl;
}
export const DEMO_LENGTH = 82;

// ---------------- frame loop ----------------
function step(dt) {
  T += dt; gsap.updateRoot(T);
  applyCamera(dt); camera.updateMatrixWorld();
  W.update(dt, T, camera);
  liveValues(); projectHotspots();
}
async function boot() {
  const fonts = ['500 20px "Cormorant Garamond"', 'italic 400 20px "Cormorant Garamond"', '600 20px "Cormorant Garamond"', '400 16px Inter', '600 16px Inter', '400 20px "Noto Naskh Arabic"', '400 16px "Noto Sans Arabic"', '600 16px "Noto Sans Arabic"'];
  await Promise.all(fonts.map(f => document.fonts.load(f, 'Aaهامور'))); await document.fonts.ready;
  gsap.updateRoot(0); console.log('gsap t0', gsap.globalTimeline.time());
  applyLang('en');
  // warm up every world once so shader compilation does not stall the first transition
  for (const w of [BRD, HAT, UND, EXT]) { useWorld(w); w.update(0, 0, camera); renderer.compile(w.scene, camera); render(); }
  useWorld(EXT); applyCamera(0);
  $('#loading').style.display = 'none';
  goCampus(); gsap.to(veil, { opacity: 0, duration: 1.4, ease: 'power2.out', delay: .1 });
  if (DEMO) runDemo();
  // deep links for the website embed: ?scene=campus|brood|hatch|cages|under|fish, or postMessage {ga:'scene', id}
  const SCENES = { campus: goCampus, brood: enterBroodstock, hatch: goHatchery, cages: goSeaCages, under: diveCage, fish: goFishCard };
  if (!DEMO && !CAPTURE && SCENES[Q.get('scene')]) gsap.delayedCall(1.8, ui(SCENES[Q.get('scene')]));
  addEventListener('message', e => { const d = e.data; if (!DEMO && e.source === parent && d && d.ga === 'scene' && SCENES[d.id]) ui(SCENES[d.id])(); });
  if (CAPTURE) {
    window.__frame = dt => { step(dt ?? 1 / 30); render(); };
    window.__advance = (n, dt = 1 / 30) => { for (let i = 0; i < n; i++) step(dt); };
    window.__T = () => T;
    step(0); render(); window.__ready = true;
  } else {
    // one clock (T) drives camera, water and UI; the raw rAF delta is clamped and smoothed so frame-time jitter
    // (very common on phones: 16/17/33 ms alternation, thermal throttling) does not turn into camera/water judder
    let last = performance.now(), sdt = 1 / 60;
    const loop = now => { const rd = (now - last) / 1000; last = now; adapt(rd); const c = Math.min(Math.max(rd, 1 / 240), 1 / 20); sdt += (c - sdt) * .2; step(sdt); render(); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }
}
boot();
