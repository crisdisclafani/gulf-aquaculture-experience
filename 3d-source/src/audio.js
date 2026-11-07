// Procedural ambient soundscape (Web Audio, no audio files).
// A different theme for each setting: campus (sea, breeze, gulls), visitor dome (Arabic hijaz plucks over a drone),
// research (soft electric piano), hatchery halls (water tanks, aeration), live-feed labs (bubbling columns, instrument beeps),
// plant / generator rooms (machinery, pump pulse), sea cages (underwater, whale-like glides).
export function createAmbient() {
  let ctx = null, on = true, started = false, theme = 'campus', nightV = 0, duckV = 1;
  try { if (localStorage.getItem('aqua-sound-v2') === '0') on = false; } catch (e) {}
  const N = {};
  const listeners = new Set();

  const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
  const pick = a => a[(Math.random() * a.length) | 0];

  // ---------------- themes ----------------
  const T = {
    campus: { chords: [[50, 57, 62, 66, 69, 73], [47, 54, 59, 62, 66, 69], [43, 50, 55, 59, 62, 66], [45, 52, 57, 61, 64, 69]],
      scale: [62, 64, 66, 69, 71, 74, 76, 78, 81], voice: 'bell', every: [2.5, 7], padLP: 1400, pad: 1, verb: 0.55,
      lp: 18000, nat: 1, sea: 0.42, wind: 0.12, hum: 0, air: 0, trickle: 0, mach: 0, fx: 'campus' },
    visitor: { chords: [[38, 45, 50, 57]], chordLen: 16, scale: [62, 63, 66, 67, 69, 70, 72, 74, 75, 78], voice: 'oud', every: [0.35, 1.1], phrase: true,
      padLP: 900, pad: 0.9, verb: 0.8, lp: 900, nat: 0.35, sea: 0.3, wind: 0, hum: 0, air: 0.04, trickle: 0, mach: 0, fx: 'drum' },
    research: { chords: [[53, 60, 64, 67, 71], [50, 57, 62, 65, 69], [46, 53, 58, 62, 65], [48, 55, 60, 64, 67]],
      scale: [65, 67, 69, 71, 72, 76, 77, 79], voice: 'epiano', every: [1.4, 3.5], padLP: 1200, pad: 0.75, verb: 0.45,
      lp: 600, nat: 0.25, sea: 0.25, wind: 0, hum: 0.012, air: 0.05, trickle: 0, mach: 0, fx: 'none' },
    tanks: { chords: [[45, 52, 57, 60, 64, 66], [43, 50, 55, 59, 62, 66], [41, 48, 53, 57, 60, 64], [43, 50, 55, 59, 62, 67]],
      scale: [69, 71, 72, 74, 76, 78, 81], voice: 'bell', every: [3, 8], padLP: 1000, pad: 0.75, verb: 0.6,
      lp: 650, nat: 0.3, sea: 0.3, wind: 0, hum: 0.03, air: 0.08, trickle: 0.11, mach: 0, fx: 'bubbles' },
    lab: { chords: [[52, 59, 64, 68, 70, 75], [49, 56, 61, 64, 68, 71], [45, 52, 57, 61, 64, 68]],
      scale: [76, 78, 80, 83, 85, 88], voice: 'bell', every: [2.5, 6], padLP: 1800, pad: 0.65, verb: 0.5,
      lp: 600, nat: 0.25, sea: 0.25, wind: 0, hum: 0.02, air: 0.06, trickle: 0.05, mach: 0, fx: 'lab' },
    machines: { chords: [[33, 40, 45, 52], [31, 38, 43, 50]], chordLen: 14, scale: [57, 60, 62, 64], voice: 'bell', every: [7, 14], padLP: 500, pad: 0.6, verb: 0.35,
      lp: 400, nat: 0.2, sea: 0.25, wind: 0, hum: 0.05, air: 0.08, trickle: 0, mach: 0.07, fx: 'pump' },
    under: { chords: [[37, 44, 49, 56, 61, 65], [34, 41, 46, 53, 58, 61], [42, 49, 54, 58, 61, 66]], chordLen: 13,
      scale: [61, 63, 65, 68, 70, 73, 75], voice: 'bell', every: [3, 7], padLP: 650, pad: 0.85, verb: 0.85,
      lp: 320, nat: 0.8, sea: 0.45, wind: 0, hum: 0.04, air: 0.15, trickle: 0, mach: 0, fx: 'under' },
  };
  const THEME_OF = { visitor: 'visitor', research: 'research', offices: 'research', nursery: 'tanks', hatchery: 'tanks', broodstock: 'tanks', phase1: 'tanks',
    livefeed: 'lab', plantroom: 'machines', genroom: 'machines', pumpstation: 'machines', seacages: 'under' };

  // ---------------- graph ----------------
  function noiseBuf(sec, pink = true) {
    const len = ctx.sampleRate * sec, b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c); let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < len; i++) {
        const w = Math.random() * 2 - 1;
        if (!pink) { d[i] = w * 0.5; continue; }
        b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759; b2 = 0.969 * b2 + w * 0.153852;
        b3 = 0.8665 * b3 + w * 0.3104856; b4 = 0.55 * b4 + w * 0.5329522; b5 = -0.7616 * b5 - w * 0.016898;
        d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11; b6 = w * 0.115926;
      }
    }
    return b;
  }
  function impulse(sec, decay) {
    const len = ctx.sampleRate * sec, b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = b.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay); }
    return b;
  }
  const g = (v = 1) => { const n = ctx.createGain(); n.gain.value = v; return n; };
  const filt = (type, f, q = 0.7) => { const n = ctx.createBiquadFilter(); n.type = type; n.frequency.value = f; n.Q.value = q; return n; };
  const osc = (type, f) => { const o = ctx.createOscillator(); o.type = type; o.frequency.value = f; return o; };
  const ramp = (p, v, t = 1.5) => { const now = ctx.currentTime; p.cancelScheduledValues(now); p.setTargetAtTime(v, now, Math.max(0.05, t / 3)); };

  function build() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    N.master = g(0); N.comp = ctx.createDynamicsCompressor(); N.master.connect(N.comp); N.comp.connect(ctx.destination);
    N.verb = ctx.createConvolver(); N.verb.buffer = impulse(4.5, 2.6); N.verbOut = g(0.55); N.verb.connect(N.verbOut); N.verbOut.connect(N.master);
    N.natLP = filt('lowpass', 18000); N.nat = g(1); N.natLP.connect(N.nat); N.nat.connect(N.master);
    const pink = noiseBuf(6), white = noiseBuf(3, false);
    const one = ctx.createConstantSource ? ctx.createConstantSource() : null; one && one.start();
    // sea swell
    const sea = ctx.createBufferSource(); sea.buffer = pink; sea.loop = true;
    const seaLP = filt('lowpass', 520); N.seaG = g(0); sea.connect(seaLP); seaLP.connect(N.seaG); N.seaG.connect(N.natLP);
    N.seaBase = g(0.42); one && one.connect(N.seaBase); N.seaBase.connect(N.seaG.gain);
    const lfo = osc('sine', 0.085), lfoG = g(0.3); lfo.connect(lfoG); lfoG.connect(N.seaG.gain);
    const lfo2 = osc('sine', 0.033), lfo2G = g(220); lfo2.connect(lfo2G); lfo2G.connect(seaLP.frequency);
    const foam = ctx.createBufferSource(); foam.buffer = white; foam.loop = true; const foamBP = filt('bandpass', 3200, 0.5), foamG = g(0);
    foam.connect(foamBP); foamBP.connect(foamG); foamG.connect(N.natLP); const lfoF = g(0.035); lfo.connect(lfoF); lfoF.connect(foamG.gain);
    // breeze
    const wind = ctx.createBufferSource(); wind.buffer = pink; wind.loop = true; wind.playbackRate.value = 0.7;
    const windBP = filt('bandpass', 420, 0.9); N.windG = g(0); wind.connect(windBP); windBP.connect(N.windG); N.windG.connect(N.natLP);
    const lfoW = osc('sine', 0.05), lfoWG = g(180); lfoW.connect(lfoWG); lfoWG.connect(windBP.frequency);
    // indoor room tone: hum + air
    const hum = osc('sine', 50), hum2 = osc('sine', 100.3), hum3 = osc('triangle', 150.2);
    N.humG = g(0); hum.connect(N.humG); const h2 = g(0.4), h3 = g(0.12); hum2.connect(h2); hum3.connect(h3); h2.connect(N.humG); h3.connect(N.humG); N.humG.connect(N.master);
    const air = ctx.createBufferSource(); air.buffer = pink; air.loop = true; const airLP = filt('lowpass', 260); N.airG = g(0); air.connect(airLP); airLP.connect(N.airG); N.airG.connect(N.master);
    // water trickle (tanks)
    const tr = ctx.createBufferSource(); tr.buffer = white; tr.loop = true; const trBP = filt('bandpass', 1500, 1.4); N.trG = g(0);
    tr.connect(trBP); trBP.connect(N.trG); N.trG.connect(N.master); N.trG.connect(N.verb);
    const lfoT = osc('sine', 3.1), lfoTG = g(600); lfoT.connect(lfoTG); lfoTG.connect(trBP.frequency);
    // machinery
    const m1 = osc('sawtooth', 49.6), m2 = osc('sawtooth', 74.1); const mLP = filt('lowpass', 320, 2); N.machG = g(0);
    m1.connect(mLP); m2.connect(mLP); mLP.connect(N.machG); N.machG.connect(N.master);
    const lfoM = osc('sine', 0.4), lfoMG = g(60); lfoM.connect(lfoMG); lfoMG.connect(mLP.frequency);
    [sea, foam, wind, lfo, lfo2, lfoW, hum, hum2, hum3, air, tr, lfoT, m1, m2, lfoM].forEach(s => s.start());
    N.fx = g(1); N.fx.connect(N.master); N.fx.connect(N.verb);
    newVoiceBus();
    timer = setInterval(tick, 200);
  }

  // per-theme musical bus (cross-faded on theme change)
  function newVoiceBus() {
    const old = N.bus;
    N.bus = g(0); N.busLP = filt('lowpass', T[theme].padLP, 0.4); N.busLP.connect(N.bus); N.bus.connect(N.master); N.bus.connect(N.verb);
    ramp(N.bus.gain, T[theme].pad, 3);
    if (old) { ramp(old.gain, 0, 1.5); setTimeout(() => { try { old.disconnect(); } catch (e) {} }, 6000); }
  }

  // ---------------- voices ----------------
  function chord(t, notes, len) {
    notes.forEach((m, i) => {
      [0, 1].forEach(k => {
        const o = osc(k ? 'triangle' : 'sine', mtof(m) * (k ? 1.003 : 0.998)); const e = g(0); o.connect(e); e.connect(N.busLP);
        const a = (i === 0 ? 0.05 : 0.028) * (k ? 0.5 : 1);
        e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(a, t + 4); e.gain.setValueAtTime(a, t + len - 3); e.gain.linearRampToValueAtTime(0, t + len + 2.5);
        o.start(t); o.stop(t + len + 3);
      });
    });
  }
  function bell(t, m, vol = 0.07) {
    const o = osc('sine', mtof(m)), o2 = osc('sine', mtof(m) * 4.02), e = g(0), e2 = g(0);
    o.connect(e); o2.connect(e2); e.connect(N.busLP); e2.connect(N.busLP);
    e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(vol, t + 0.01); e.gain.exponentialRampToValueAtTime(0.0001, t + 3.2);
    e2.gain.setValueAtTime(0, t); e2.gain.linearRampToValueAtTime(vol * 0.18, t + 0.005); e2.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
    o.start(t); o2.start(t); o.stop(t + 3.4); o2.stop(t + 3.4);
  }
  function oud(t, m, vol = 0.06) { // plucked string
    const f = mtof(m), o = osc('sawtooth', f), o2 = osc('square', f * 1.002), lp = filt('lowpass', f * 8, 3), e = g(0);
    const o2g = g(0.3); o.connect(lp); o2.connect(o2g); o2g.connect(lp); lp.connect(e); e.connect(N.busLP);
    lp.frequency.setValueAtTime(f * 9, t); lp.frequency.exponentialRampToValueAtTime(f * 1.4, t + 0.5);
    e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(vol, t + 0.004); e.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
    o.start(t); o2.start(t); o.stop(t + 1.5); o2.stop(t + 1.5);
  }
  function epiano(t, m, vol = 0.05) { // simple FM electric piano
    const f = mtof(m), car = osc('sine', f), mod = osc('sine', f * 14), mg = g(f * 1.6), e = g(0);
    mod.connect(mg); mg.connect(car.frequency); car.connect(e); e.connect(N.busLP);
    mg.gain.setValueAtTime(f * 1.6, t); mg.gain.exponentialRampToValueAtTime(1, t + 0.35);
    e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(vol, t + 0.006); e.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
    car.start(t); mod.start(t); car.stop(t + 2.7); mod.stop(t + 2.7);
  }
  function bubble(t, vol = 0.05) {
    const f0 = 300 + Math.random() * 500, o = ctx.createOscillator(), e = g(0); o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f0 * 2.6, t + 0.06);
    o.connect(e); e.connect(N.fx); e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(vol, t + 0.008); e.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
    o.start(t); o.stop(t + 0.12);
  }
  function cricket(t) {
    const o = osc('sine', 4300 + Math.random() * 400), e = g(0); o.connect(e); e.connect(N.nat);
    for (let k = 0; k < 3; k++) { const s = t + k * 0.07; e.gain.setValueAtTime(0, s); e.gain.linearRampToValueAtTime(0.012 * nightV, s + 0.01); e.gain.linearRampToValueAtTime(0, s + 0.045); }
    o.start(t); o.stop(t + 0.3);
  }
  function gull(t) { // distant seagull: falling nasal sweep, 2–3 calls
    const n = 2 + (Math.random() * 2 | 0), pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    const out = g(0.018); if (pan) { pan.pan.value = Math.random() * 1.6 - 0.8; out.connect(pan); pan.connect(N.natLP); } else out.connect(N.natLP);
    for (let k = 0; k < n; k++) {
      const s = t + k * (0.32 + Math.random() * 0.1), o = osc('sawtooth', 1500), bp = filt('bandpass', 1900, 4), e = g(0);
      o.connect(bp); bp.connect(e); e.connect(out);
      o.frequency.setValueAtTime(1350, s); o.frequency.linearRampToValueAtTime(1750, s + 0.06); o.frequency.exponentialRampToValueAtTime(950, s + 0.28);
      e.gain.setValueAtTime(0, s); e.gain.linearRampToValueAtTime(1, s + 0.03); e.gain.exponentialRampToValueAtTime(0.001, s + 0.3);
      o.start(s); o.stop(s + 0.32);
    }
  }
  function drum(t, low = true, vol = 0.12) { // frame drum: dum / tak
    const o = osc('sine', low ? 95 : 260), e = g(0); o.connect(e); e.connect(N.fx);
    o.frequency.setValueAtTime(low ? 120 : 330, t); o.frequency.exponentialRampToValueAtTime(low ? 60 : 200, t + (low ? 0.25 : 0.08));
    e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(vol * (low ? 1 : 0.45), t + 0.005); e.gain.exponentialRampToValueAtTime(0.0001, t + (low ? 0.5 : 0.15));
    o.start(t); o.stop(t + 0.55);
  }
  function beep(t) { const o = osc('sine', pick([1760, 2093, 1568])), e = g(0); o.connect(e); e.connect(N.fx);
    e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(0.012, t + 0.005); e.gain.setValueAtTime(0.012, t + 0.07); e.gain.linearRampToValueAtTime(0, t + 0.09); o.start(t); o.stop(t + 0.1); }
  function thump(t) { const o = osc('sine', 48), e = g(0); o.connect(e); e.connect(N.master);
    o.frequency.setValueAtTime(70, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.3);
    e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(0.1, t + 0.02); e.gain.exponentialRampToValueAtTime(0.0001, t + 0.6); o.start(t); o.stop(t + 0.65); }
  function whale(t) { const o = osc('sine', 230), o2 = osc('sine', 345), e = g(0); o.connect(e); o2.connect(e); e.connect(N.bus); e.connect(N.verb);
    o.frequency.setValueAtTime(230, t); o.frequency.linearRampToValueAtTime(320, t + 1.6); o.frequency.exponentialRampToValueAtTime(150, t + 4);
    o2.frequency.setValueAtTime(345, t); o2.frequency.linearRampToValueAtTime(480, t + 1.6); o2.frequency.exponentialRampToValueAtTime(225, t + 4);
    e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(0.02, t + 1); e.gain.linearRampToValueAtTime(0, t + 4.2); o.start(t); o2.start(t); o.stop(t + 4.3); o2.stop(t + 4.3); }

  // ---------------- scheduler ----------------
  let timer = null, tChord = 0, tNote = 0, tFx = 0, tFx2 = 0, ci = 0, beat = 0;
  function tick() {
    if (!ctx || ctx.state !== 'running' || !on) return;
    const t = ctx.currentTime, th = T[theme];
    if (t > tChord - 0.5) { const len = th.chordLen || 11, s = Math.max(t, tChord); chord(s, th.chords[ci++ % th.chords.length], len); tChord = s + len - 1; }
    if (t > tNote) {
      const v = th.voice === 'oud' ? oud : th.voice === 'epiano' ? epiano : bell;
      if (th.phrase) { // short hijaz phrase, step-wise
        let k = (Math.random() * th.scale.length) | 0; const n = 3 + (Math.random() * 4 | 0);
        for (let j = 0; j < n; j++) { v(t + 0.05 + j * 0.26, th.scale[k]); k = Math.max(0, Math.min(th.scale.length - 1, k + pick([-1, -1, 1, 2, -2]))); }
        tNote = t + n * 0.26 + 1.2 + Math.random() * 2.5;
      } else {
        v(t + 0.05, pick(th.scale)); if (Math.random() < 0.4) v(t + 0.45, pick(th.scale), 0.045);
        tNote = t + th.every[0] + Math.random() * (th.every[1] - th.every[0]);
      }
    }
    if (t > tFx) {
      switch (th.fx) {
        case 'campus': if (nightV > 0.4) { cricket(t); tFx = t + 0.5 + Math.random() * 1.5; } else { if (Math.random() < 0.5) gull(t + Math.random()); tFx = t + 6 + Math.random() * 10; } break;
        case 'drum': { const pat = [1, 0, 2, 0, 1, 1, 2, 0]; const p = pat[beat++ % 8]; if (p) drum(t + 0.02, p === 1); tFx = t + 0.42; break; }
        case 'bubbles': for (let k = 0; k < 2 + Math.random() * 4; k++) bubble(t + Math.random() * 0.7, 0.035); tFx = t + 0.5 + Math.random() * 1.5; break;
        case 'lab': for (let k = 0; k < 4 + Math.random() * 6; k++) bubble(t + Math.random() * 0.9, 0.03); tFx = t + 0.3 + Math.random() * 0.8; break;
        case 'pump': thump(t + 0.02); tFx = t + 1.25; break;
        case 'under': for (let k = 0; k < 2 + Math.random() * 5; k++) bubble(t + Math.random() * 0.8); tFx = t + 0.6 + Math.random() * 2; break;
        default: tFx = t + 5;
      }
    }
    if (t > tFx2) {
      if (th.fx === 'lab') beep(t + 0.1);
      if (th.fx === 'under' && Math.random() < 0.5) whale(t + 0.1);
      tFx2 = t + (th.fx === 'under' ? 9 : 5) + Math.random() * 6;
    }
  }

  function apply(t = 1.5) {
    if (!ctx) return;
    const th = T[theme], ov = on ? 1 : 0, nightish = theme === 'campus' ? nightV : 0;
    ramp(N.master.gain, 0.8 * ov * duckV, on ? t : 0.4);
    ramp(N.natLP.frequency, th.lp, t); ramp(N.nat.gain, th.nat, t);
    ramp(N.seaBase.gain, th.sea * (1 - nightish * 0.25), t); ramp(N.windG.gain, th.wind * (1 - nightish * 0.4), t);
    ramp(N.humG.gain, th.hum, t); ramp(N.airG.gain, th.air, t); ramp(N.trG.gain, th.trickle, t); ramp(N.machG.gain, th.mach, t);
    ramp(N.verbOut.gain, th.verb, t);
    if (N.busLP) ramp(N.busLP.frequency, th.padLP - nightish * 500, t);
  }
  const notify = () => listeners.forEach(f => f());
  function start() {
    if (!on) return;
    if (!ctx) build();
    if (ctx.state !== 'running') ctx.resume().then(notify, () => {});
    if (!started) { started = true; tChord = ctx.currentTime + 0.3; apply(3); }
    setTimeout(notify, 150);
  }
  const gesture = (e) => { if (e && e.target && e.target.closest && e.target.closest('[data-act="sound"]')) return; if (on && !(ctx && ctx.state === 'running')) start(); };
  const evs = ['pointerdown', 'keydown', 'touchend'];
  evs.forEach(ev => window.addEventListener(ev, gesture, { passive: true }));
  // embedded in a same-origin page: a click anywhere on the host page also unlocks the sound
  try { if (window.parent !== window && window.parent.document) evs.forEach(ev => window.parent.addEventListener(ev, gesture, { passive: true })); } catch (e) {}
  // default ON: start immediately whenever the browser already allows it
  const allowed = () => {
    try { if (navigator.getAutoplayPolicy && navigator.getAutoplayPolicy('audiocontext') === 'allowed') return true; } catch (e) {}
    if (navigator.userActivation && navigator.userActivation.hasBeenActive) return true;
    try { const pn = window.parent.navigator; if (window.parent !== window && pn.userActivation && pn.userActivation.hasBeenActive) return true; } catch (e) {}
    return false;
  };
  if (on && allowed()) start();

  return {
    get enabled() { return on; },
    get playing() { return on && !!ctx && ctx.state === 'running'; },
    start,
    onChange(f) { listeners.add(f); },
    setEnabled(v) { on = !!v; try { localStorage.setItem('aqua-sound-v2', on ? '1' : '0'); } catch (e) {} if (on) start(); apply(1); notify(); },
    setEnv(id) {
      const nt = !id ? 'campus' : (THEME_OF[id] || 'tanks'); if (nt === theme) return; theme = nt; tNote = tFx = tFx2 = 0; beat = 0;
      if (ctx) { tChord = ctx.currentTime + 0.4; newVoiceBus(); apply(2); }
    },
    setNight(n) { if (Math.abs(n - nightV) > 0.02) { nightV = n; apply(2); } },
    duck(d) { duckV = d ? 0.15 : 1; apply(0.8); },
  };
}
