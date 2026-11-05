# Gulf Aquaculture — An Interactive Journey from Egg to Harvest

**Concept demo** by Kriswa International.

A real-time 3D web experience (Three.js + WebGL) that follows the journey at the Sheikh Khalifa Marine Research Centre, Umm Al Quwain: campus → broodstock hall → hatchery (Tank L3T6 digital record) → sea cages → underwater fish card (EN / العربية).

**Live:** https://crisdisclafani.github.io/gulf-aquaculture-experience/

**Website concept (multi-page, static HTML):** https://crisdisclafani.github.io/gulf-aquaculture-experience/website/ — source in [`website/`](website/)

**SKMRC campus — interactive 3D tour:** https://crisdisclafani.github.io/gulf-aquaculture-experience/campus/ (built from the two architectural renders; `?q=low` for lighter rendering)

**Website built from the Company Profile (v3):** https://crisdisclafani.github.io/gulf-aquaculture-experience/profile-site/ — source in [`profile-site/`](profile-site/)

## How to use
- Open the page and navigate freely: click hotspots, drag to orbit, scroll to zoom, use the top menu and the EN/عربي toggle.
- `?demo=1` plays the scripted guided tour (about 80 s).
- `?q=low|med|high` forces a rendering quality tier (otherwise it adapts automatically).

Runs in any modern desktop browser with WebGL; no build step and no external requests (all libraries and fonts are bundled).

## Important
This is a **concept demo**, not an official site of any organisation. Facts shown come from the source video (16 labs, 26 RAS systems, 95% water saving, the five controlled variables, the lifecycle, the Tank L3T6 figures, and the species Hamour, Shaari, Hamrah, Umm Drais, Seabream). Everything else — live sensor values, fish card fields shown in [brackets], traceability dates, cage names, the AR button — is **illustrative or a placeholder**. Arabic copy is a first draft pending native review.

## Credits & licences
- [three.js](https://threejs.org) r160 — MIT
- [GSAP](https://gsap.com) 3.12.5 — GreenSock Standard License (free, no-charge use)
- Fonts: Cormorant, Inter, Noto Naskh Arabic, Noto Sans Arabic — SIL Open Font License 1.1 (see `fonts/OFL.txt`)
