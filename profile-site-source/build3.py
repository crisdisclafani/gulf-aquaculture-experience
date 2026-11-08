"""Gulf Aquaculture — website built from the Company Profile (v3). Usage: python3 build3.py OUT"""
import os, sys, shutil, html
OUT=sys.argv[1]; HERE=os.path.dirname(os.path.abspath(__file__))
for d in ("assets/css","assets/js","assets/img"): os.makedirs(f"{OUT}/{d}",exist_ok=True)
shutil.copy(f"{HERE}/site.css",f"{OUT}/assets/css/site.css"); shutil.copy(f"{HERE}/site.js",f"{OUT}/assets/js/site.js"); shutil.copy(f"{HERE}/ambience.js",f"{OUT}/assets/js/ambience.js"); shutil.copy(f"{HERE}/tour.js",f"{OUT}/assets/js/tour.js")
for f in os.listdir(f"{HERE}/img"): shutil.copy(f"{HERE}/img/{f}",f"{OUT}/assets/img/{f}")
os.makedirs(f"{OUT}/assets/video",exist_ok=True)
for f in os.listdir(f"{HERE}/video"): shutil.copy(f"{HERE}/video/{f}",f"{OUT}/assets/video/{f}")

PAGES=[("about.html","About","01"),("operations.html","Operations","02"),("assets.html","Assets","03"),("species.html","Species","04"),
       ("growth.html","Growth","05"),("people.html","People","06"),("contact.html","Contact","07")]
LOGO='<svg viewBox="0 0 42 42" fill="none" aria-hidden="true"><circle cx="16" cy="21" r="10" stroke="#C8742A" stroke-width="2.4"/><circle cx="26" cy="21" r="10" stroke="#4A2E16" stroke-width="2.4"/><path d="M11 21c2.7-3.2 6-3.2 8.6 0s6 3.2 8.6 0" stroke="#3A9C9A" stroke-width="1.8"/></svg>'
BRAND='<a href="index.html" class="brand" aria-label="Gulf Aquaculture — home"><img src="assets/img/gulf-aquaculture-logo.png" alt="Gulf Aquaculture logo" width="640" height="150"></a>'
BRAND_W='<a href="index.html" class="brand" aria-label="Gulf Aquaculture — home"><img src="assets/img/gulf-aquaculture-logo-white.png" alt="Gulf Aquaculture logo" width="640" height="150"></a>'
FONTS='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins:wght@300;400;500;600&family=Caveat:wght@500;600&display=swap" rel="stylesheet">'
FG_BAND='''<section class="fg" id="future-growth" aria-labelledby="fgT">
  <div class="fg-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="fg-head">
      <img class="fg-thumb" src="assets/img/gulf-aquaculture-grouper-juveniles.webp" width="800" height="800" alt="Juvenile grouper in a nursery tub">
      <div><h2 id="fgT">Future Growth</h2>
        <p class="fg-lead">Our vision has always been clear:<br>validate first, then grow with integrity.</p>
        <p class="fg-sub">With Phase II now approved, we’re preparing for the next chapter - one that remains grounded in our core principles.</p></div>
    </div>
    <div class="fg-grid"><div class="fg-col"><h3>Vertical<br>Expansion</h3><div class="fg-rule" aria-hidden="true"><i class="s"></i><i class="b"></i><i class="s"></i></div><p>We’re building more of the value chain - including transport, genetics, and off-take partnerships - to increase resilience and deliver long-term value.</p></div><div class="fg-col"><h3>New<br>Sites</h3><div class="fg-rule" aria-hidden="true"><i class="s"></i><i class="b"></i><i class="s"></i></div><p>Future facilities will be located nationally and regionally, selected based on environmental suitability and alignment with our low-impact model.</p></div><div class="fg-col"><h3>Broodstock<br>Development</h3><div class="fg-rule" aria-hidden="true"><i class="s"></i><i class="b"></i><i class="s"></i></div><p>We’re advancing broodstock lines to improve climate resilience and enable year-round spawning, supporting stable, scalable supply.</p></div><div class="fg-col"><h3>Strategic<br>Partnerships</h3><div class="fg-rule" aria-hidden="true"><i class="s"></i><i class="b"></i><i class="s"></i></div><p>Through public-private collaboration, we aim to contribute to national food security, biodiversity, and the long-term future of Gulf aquaculture.</p></div></div>
  </div>
</section>
'''
WC_BAND='''<section class="welcome" aria-labelledby="wcT">
  <svg class="fg-art" viewBox="0 0 640 470" fill="none" aria-hidden="true"><g stroke="#E2A13C" stroke-width="2" stroke-linejoin="round"><path d="M30 320 C110 150 330 120 470 255 C330 400 110 470 30 320 Z"/><path d="M470 255 C495 190 545 150 600 140 C575 210 575 300 605 360 C545 352 495 320 470 255 Z"/><path d="M110 185 C190 40 390 20 515 130 C395 255 190 300 110 185 Z" opacity=".55"/><path d="M515 130 C540 72 585 40 632 32 C612 92 614 168 636 214 C588 206 540 186 515 130 Z" opacity=".55"/></g></svg>
  <div class="wrap welcome-grid">
    <div class="wc-text">
      <h2 id="wcT">We welcome conversations that move aquaculture forward.</h2>
      <p class="wc-lead">Whether you're an investor who shares our long-term vision, a researcher exploring native species, or a policymaker shaping the future of food — we believe progress happens through partnership.</p>
      <p class="wc-small">We’re building more than a business. We’re building trust, resilience, and a model that others can build on. If that resonates with you, we’d love to hear from you.</p>
    </div>
    <div class="wc-side">
      <div class="wc-box">
        <p class="wc-k">Assets under management</p>
        <ol class="wc-aum"><li>Balghailam Island</li><li>Sheikh Khalifa Marine Research Centre</li></ol>
        <a class="btn btn-or wc-cta" href="contact.html">Let’s talk <span aria-hidden="true">→</span></a>
      </div>
      <figure class="wc-person"><img src="assets/img/gulf-aquaculture-grouper-farmer.webp" width="792" height="1020" loading="lazy" alt="Gulf Aquaculture team member holding a grouper">
        <figcaption class="wc-note"><span>Our numbers are not just data</span><br><span>points - they reflect deliberate</span><br><span>steps toward a scalable, resilient</span><br><span>business built for impact.</span></figcaption></figure>
    </div>
  </div>
</section>
'''
MAP_BAND='''<section class="mapband" id="footprint" aria-label="Regional footprint"><h2 class="sr-only">Our regional footprint: UAE, Oman, Malaysia and Indonesia</h2>
  <div class="mapband-img hsplan maplan"><img src="assets/img/gulf-aquaculture-regional-footprint-map-uae-oman-malaysia-indonesia.jpg" width="1600" height="1686" loading="lazy" alt="Map of Gulf Aquaculture's regional footprint: Abu Dhabi HQ, Balghailam Island and SKMRC in the UAE, juvenile supply in the UAE, Oman, Malaysia and Indonesia"><svg class="map-svg" viewBox="0 0 1600 1686" preserveAspectRatio="xMidYMid meet"><a class="hs hs-map" href="#" role="button" data-yt="QwZ2BvfbzRg" data-start="13" data-title="Oman — Seabream &amp; Red Snapper" aria-label="Oman — Seabream &amp; Red Snapper — watch video"><circle class="hs-hit" cx="994" cy="504" r="34"/><circle class="hs-ping" cx="994" cy="504" r="16"/><circle class="hs-ring" cx="994" cy="504" r="22"/><title>Oman — Seabream &amp; Red Snapper</title></a><a class="hs hs-map" href="#" role="button" data-yt="QwZ2BvfbzRg" data-start="13" data-title="Sheikh Khalifa Marine Research Centre (SKMRC)" aria-label="Sheikh Khalifa Marine Research Centre (SKMRC) — watch video"><circle class="hs-hit" cx="744" cy="772" r="34"/><circle class="hs-ping" cx="744" cy="772" r="16"/><circle class="hs-ring" cx="744" cy="772" r="22"/><title>Sheikh Khalifa Marine Research Centre (SKMRC)</title></a><a class="hs hs-map" href="#" role="button" data-yt="QwZ2BvfbzRg" data-start="13" data-title="Juvenile Supply (UAE)" aria-label="Juvenile Supply (UAE) — watch video"><circle class="hs-hit" cx="1010" cy="824" r="34"/><circle class="hs-ping" cx="1010" cy="824" r="16"/><circle class="hs-ring" cx="1010" cy="824" r="22"/><title>Juvenile Supply (UAE)</title></a><a class="hs hs-map" href="#" role="button" data-yt="QwZ2BvfbzRg" data-start="13" data-title="Abu Dhabi HQ" aria-label="Abu Dhabi HQ — watch video"><circle class="hs-hit" cx="516" cy="976" r="34"/><circle class="hs-ping" cx="516" cy="976" r="16"/><circle class="hs-ring" cx="516" cy="976" r="22"/><title>Abu Dhabi HQ</title></a><a class="hs hs-map" href="#" role="button" data-yt="QwZ2BvfbzRg" data-start="13" data-title="Balghailam Island" aria-label="Balghailam Island — watch video"><circle class="hs-hit" cx="568" cy="962" r="34"/><circle class="hs-ping" cx="568" cy="962" r="16"/><circle class="hs-ring" cx="568" cy="962" r="22"/><title>Balghailam Island</title></a><a class="hs hs-map" href="#" role="button" data-yt="QwZ2BvfbzRg" data-start="13" data-title="Malaysia — Red Snapper hatchery" aria-label="Malaysia — Red Snapper hatchery — watch video"><circle class="hs-hit" cx="1018" cy="1322" r="34"/><circle class="hs-ping" cx="1018" cy="1322" r="16"/><circle class="hs-ring" cx="1018" cy="1322" r="22"/><title>Malaysia — Red Snapper hatchery</title></a><a class="hs hs-map" href="#" role="button" data-yt="QwZ2BvfbzRg" data-start="13" data-title="Indonesia — Grouper hatchery" aria-label="Indonesia — Grouper hatchery — watch video"><circle class="hs-hit" cx="1220" cy="1502" r="34"/><circle class="hs-ping" cx="1220" cy="1502" r="16"/><circle class="hs-ring" cx="1220" cy="1502" r="22"/><title>Indonesia — Grouper hatchery</title></a></svg>
   <p class="hs-hint map-hint"><span class="hs-hint-ico" aria-hidden="true">▶</span> Click a location to watch it in action</p></div>
  <div class="yt-modal" id="hsm" role="dialog" aria-modal="true" aria-labelledby="hsmT"><div class="hsm-box"><p class="hsm-t" id="hsmT"></p><div class="yt-frame"></div></div><button type="button" class="yt-x" aria-label="Close video">×</button></div>
  <div class="wrap"><p class="mapband-note"><span>Committed to proving that aquaculture</span><br><span>can work - for our waters, for our communities,</span><br><span>and for future generations.</span></p></div>
</section>'''

from seo import head as seo_head, faq_html, write_extras, META as SEO_META
from nav_data import mega_menu, mobile_nav, access_bar, aud_ribbon
WA_NUMBER="971501518905"  # Kriswa (demo) — sostituire col numero WhatsApp Business di Gulf Aquaculture al lancio
WA_TEXT="Hello Gulf Aquaculture, I would like some information."
import urllib.parse as _up
WA_URL=f"https://wa.me/{WA_NUMBER}?text={_up.quote(WA_TEXT)}"
WA_ICO='<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.4.7 4.7 1.9 6.7L3 29l6.9-2.1c1.9 1 4 1.6 6.1 1.6 7 0 12.7-5.6 12.7-12.6S23 3 16 3Zm0 23.1c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.2 1.2-4-.3-.4a10.4 10.4 0 0 1-1.6-5.6C5.4 9.8 10.1 5.1 16 5.1s10.6 4.7 10.6 10.5S21.9 26.1 16 26.1Zm5.8-7.8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.7c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.7 5 2.1.9 3 1 4 .8.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3Z"/></svg>'

# ---------- Social channels + languages ----------
# TODO cliente: URL ufficiali dei profili social (gulfaquaculture.com non ne pubblica nessuno)
SOCIAL=[("LinkedIn","#",'<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4z"/>'),
        ("Instagram","#",'<path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 4.6c2.4 0 2.7 0 3.6.05 2.4.1 3.6 1.3 3.7 3.7.05 1 .05 1.2.05 3.6s0 2.7-.05 3.6c-.1 2.4-1.3 3.6-3.7 3.7-1 .05-1.2.05-3.6.05s-2.7 0-3.6-.05c-2.4-.1-3.6-1.3-3.7-3.7C4.6 14.7 4.6 14.4 4.6 12s0-2.7.05-3.6c.1-2.4 1.3-3.6 3.7-3.7.9-.05 1.2-.05 3.6-.05ZM12 3c-2.4 0-2.8 0-3.7.05-3.3.15-5.1 2-5.25 5.25C3 9.2 3 9.6 3 12s0 2.8.05 3.7c.15 3.3 2 5.1 5.25 5.25.9.05 1.3.05 3.7.05s2.8 0 3.7-.05c3.3-.15 5.1-2 5.25-5.25.05-.9.05-1.3.05-3.7s0-2.8-.05-3.7c-.15-3.3-2-5.1-5.25-5.25C14.8 3 14.4 3 12 3Z"/>'),
        ("X","#",'<path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8Zm-1.1 16.2h1.7L7.3 4.7H5.5Z"/>'),
        ("YouTube","#",'<path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3Z"/>'),
        ("Facebook","#",'<path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.25-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21Z"/>')]
def social_icons(cls=""):
    return f'<ul class="soc {cls}" aria-label="Gulf Aquaculture on social media">'+"".join(f'<li><a href="{u}" aria-label="{n}" title="{n}"{"" if u=="#" else " target=\"_blank\" rel=\"noopener\""}><svg viewBox="0 0 24 24" aria-hidden="true">{d}</svg></a></li>' for n,u,d in SOCIAL)+'</ul>'
FLAG_GB='<svg viewBox="0 0 60 30" aria-hidden="true"><clipPath id="fgb"><path d="M0 0v30h60V0z"/></clipPath><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6" clip-path="url(#fgb)"/><path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" stroke-width="4" clip-path="url(#fgb)"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></svg>'
FLAG_AE='<svg viewBox="0 0 12 6" aria-hidden="true"><path fill="#00732F" d="M0 0h12v2H0z"/><path fill="#fff" d="M0 2h12v2H0z"/><path fill="#000" d="M0 4h12v2H0z"/><path fill="#FF0000" d="M0 0h3v6H0z"/></svg>'
# Languages: add more here later (code, label, flag svg, href). English is the default.
LANGS=[("en","English",FLAG_GB,None),("ar","العربية",FLAG_AE,"soon")]
def lang_switch():
    out='<ul class="lang" aria-label="Language">'
    for c,l,f,h in LANGS:
        if c=="en": out+=f'<li><a class="on" href="#" lang="en" aria-current="true" title="{l}">{f}<span>EN</span></a></li>'
        else: out+=f'<li><button type="button" class="lang-soon" lang="{c}" title="{l} — coming soon" data-soon="النسخة العربية قريباً · Arabic version coming soon">{f}<span>{c.upper()}</span></button></li>'
    return out+'</ul>'
SND_BTN='<button type="button" class="snd-btn" aria-pressed="false" title="Immersive sound — click to turn on"><span class="snd-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="snd-l">Sound</span></button>'
TOPBAR=f'<div class="topbar"><div class="wrap"><div class="tb-r">{SND_BTN}<span class="tb-sep" aria-hidden="true"></span>{social_icons("soc-top")}<span class="tb-sep" aria-hidden="true"></span>{lang_switch()}</div></div></div>'
def news_band(fn):
    if fn in ("index.html","news.html") or fn.startswith("news-") or fn in ("privacy.html","cookies.html","site-map.html"): return ""
    items=NEWS[:3]
    cards="".join(f'<a class="nb-card" href="{n.get("href") or "news-"+n["slug"]+".html"}"><span class="nb-img"><img src="assets/img/{n["img"]}" alt="" loading="lazy" width="160" height="110"></span><div class="nb-t"><small>{n["cat"].replace("&","&amp;")} · {_ndate(n["date"])}</small><h3 class="nb-h">{n["title"]}</h3></div></a>' for n in items)
    return f'<section class="nband"><div class="wrap"><div class="nb-head"><h2 class="hx label">Latest news &amp; interviews</h2><a class="more" href="news.html#articles">All news</a></div><div class="nb-row">{cards}</div></div></section>'
def page(fn,title,desc,body):
    SECTION=("about" if fn.startswith(("about","people")) else "operations" if fn.startswith("operations") else "assets" if fn.startswith("asset") else "species" if fn.startswith("species") else "growth" if fn.startswith("growth") else "home" if fn=="index.html" else "other")
    from species_data import SPECIES as _SP
    _sp=next((d for d in _SP if f"species-{d['k']}.html"==fn),None)
    SEO_HEAD=seo_head(fn,_sp)
    _fq=faq_html(fn,_sp)
    if _fq:
        body=body.replace('<section class="sp-cta">',_fq+'<section class="sp-cta">',1) if '<section class="sp-cta">' in body else body+_fq
    menu=mega_menu(fn)
    mnav=mobile_nav(fn)
    foot_nav="".join(f'<a href="{h}">{t}</a>' for h,t,_ in PAGES[:-1])+'<a href="news.html">News</a><a href="contact.html">Contact</a><a class="ftr-sm" href="site-map.html">Site map</a>'
    out=f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
{SEO_HEAD}
{FONTS}
<link rel="stylesheet" href="assets/css/site.css?v=20261110m">
</head>
<body data-sec="{SECTION}">
{TOPBAR if fn!="index.html" else TOPBAR.replace(SND_BTN+'<span class="tb-sep" aria-hidden="true"></span>',"")}
<header class="hdr"><div class="wrap">{BRAND}<div class="tb-in">{SND_BTN+'<span class="tb-sep" aria-hidden="true"></span>' if fn!="index.html" else ""}{social_icons("soc-top")}<span class="tb-sep" aria-hidden="true"></span>{lang_switch()}</div>
  <ul class="menu" aria-label="Main">{menu}</ul>
  <a href="contact.html" class="btn btn-or"{" aria-current=\"page\"" if fn=="contact.html" else ""}>Let's talk</a>
  <button class="burger" type="button" aria-label="Open menu"><span></span></button>
</div>{aud_ribbon()}</header>
{access_bar()}
<nav class="mnav" aria-label="Menu"><button class="x" type="button" aria-label="Close menu">×</button>{mnav}<div class="mn-extra">{lang_switch()}{social_icons("soc-mn")}</div></nav>
<main>
{body}
</main>
{news_band(fn)}{FG_BAND if fn=="growth.html" else ""}{WC_BAND if fn=="growth.html" else ""}{MAP_BAND if fn=="growth.html" else ""}
<footer class="ftr"><div class="ftr-rule" aria-hidden="true"><i class="d s"></i><i class="d b"></i><i class="d s"></i></div><div class="wrap">
  <div class="top">
    <div class="ftr-main">
      <h2 class="hx ftr-claim">Let’s build something lasting, together.</h2>
      <p class="ftr-links"><a href="https://gulfaquaculture.com">gulfaquaculture.com</a><br><a href="mailto:info@gulfaquaculture.com">info@gulfaquaculture.com</a><br><a class="wa-link" href="{WA_URL}" target="_blank" rel="noopener">{WA_ICO}WhatsApp</a></p>
      <p class="ftr-addr">7th Floor, East Tower, Abu Dhabi Mall<br>P.O. Box 55345, Abu Dhabi, UAE</p>
      {social_icons("soc-ftr")}
    </div>
    <nav class="ftr-nav" aria-label="Footer"><h2 class="hx ftr-h">The company</h2>{foot_nav}</nav>
    <div class="ftr-logo">{BRAND}</div>
  </div>
  <div class="bot"><span>© 2026 Gulf Aquaculture · <a href="privacy.html">Privacy policy</a> · <a href="cookies.html">Cookie policy</a> · <a href="site-map.html">Site map</a></span><span>Concept website built from the GA Company Profile · demo by Kriswa International — not the official site</span></div>
</div></footer>
<div class="hub" id="hub">
  <div class="hub-menu" id="hubMenu" role="menu" aria-label="Contact options" hidden>
    <button type="button" class="hub-it hub-ai" role="menuitem" data-hub="ai"><span class="hub-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 4.6L18.5 9l-4.7 1.5L12 15l-1.8-4.5L5.5 9l4.7-1.4z"/><path d="M18.5 15l.8 2 2 .7-2 .8-.8 2-.7-2-2-.8 2-.7z"/></svg></span><span class="hub-tx"><b>Ask our assistant</b><small>Instant answers about species, fry and our sites</small></span></button>
    <a class="hub-it hub-wa" role="menuitem" href="{WA_URL}" target="_blank" rel="noopener"><span class="hub-ic">{WA_ICO}</span><span class="hub-tx"><b>WhatsApp</b><small>Chat with our team</small></span></a>
    <a class="hub-it hub-mail" role="menuitem" href="contact.html#form"><span class="hub-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></span><span class="hub-tx"><b>Write to us</b><small>Send an enquiry to the right team</small></span></a>
  </div>
  <section class="hub-chat" id="hubChat" role="dialog" aria-label="Gulf Aquaculture assistant" hidden>
    <header class="hc-top"><span class="hc-av"><img src="assets/img/gulf-aquaculture-logo-white.png" alt=""></span><span class="hc-who"><b>Gulf Aquaculture Assistant</b><small><i></i>Demo preview</small></span><button type="button" class="hc-x" aria-label="Close assistant">×</button></header>
    <div class="hc-body" id="hcBody" aria-live="polite">
      <div class="hc-msg bot">Hello! 👋 I’m the Gulf Aquaculture assistant. How can I help you today?</div>
      <div class="hc-chips"><button type="button" data-q="fry">Fry availability</button><button type="button" data-q="species">Our species</button><button type="button" data-q="visit">Visit a facility</button><button type="button" data-q="invest">Partnerships</button></div>
    </div>
    <form class="hc-in" onsubmit="return false"><input type="text" placeholder="Type your question…" aria-label="Your question" disabled><button type="submit" disabled aria-label="Send"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12l16-8-6 16-2.5-6.5z"/></svg></button></form>
    <p class="hc-note">Preview — the live assistant will be connected soon.</p>
  </section>
  <button type="button" class="hub-fab" id="hubFab" aria-expanded="false" aria-controls="hubMenu" aria-label="Contact us"><span class="hub-o"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/><circle cx="9" cy="10.5" r="1"/><circle cx="12" cy="10.5" r="1"/><circle cx="15" cy="10.5" r="1"/></svg></span><span class="hub-c" aria-hidden="true">×</span><span class="hub-l">Talk to us</span></button>
</div>
<script src="assets/js/site.js?v=20261110m"></script>
<script src="assets/js/tour.js?v=20261110m" defer></script>
{"" if fn=="index.html" else '<script src="assets/js/ambience.js?v=20261110m" defer></script>'}
</body>
</html>'''
    open(f"{OUT}/{fn}","w",encoding="utf-8").write(out)

IMG_ALT={"gulf-aquaculture-aerial-view-abu-dhabi.jpg":"Aerial view of Gulf Aquaculture's sea cages off Abu Dhabi",
 "gulf-aquaculture-sea-cages-sunset-vertical.jpg":"Sea cages at sunset in the Arabian Gulf",
 "hamour-orange-spotted-grouper-gulf-aquaculture.jpg":"Hamour (orange-spotted grouper), a native Gulf species raised by Gulf Aquaculture"}
def opener(no,label,title,lead,img,note,extra=""):
    return f'''<section class="opener paper"><span class="arc"></span><div class="wrap">
  <div class="rv in"><span class="folio"><i></i>{label}</span><h1>{title}</h1><p class="lead">{lead}</p>{extra}</div>
  <div class="media rv in"><div class="img" style="background-image:url(assets/img/{img})" role="img" aria-label="{IMG_ALT.get(img,'Gulf Aquaculture')}"></div>{f'<p class="note"><span>{note}</span></p>' if note else ""}</div>
</div></section>'''

import re as _re
FISH_D="M30 290C140 70 470 20 690 230 760 150 860 60 975 30 930 150 915 230 920 290 915 350 930 430 975 550 860 520 760 430 690 350 470 560 140 510 30 290Z"
GA_NEWS_IMG="gulf-aquaculture-technician-checking-fry-nursery-tanks.webp"
def fishwin(html_, img, alt, note):
    rep=(f'<div class="media rv in fishwin"><svg class="fw-svg" viewBox="0 0 1000 560" role="img" aria-label="{alt}"><defs><clipPath id="fwc"><path d="{FISH_D}"/></clipPath>'
         f'<linearGradient id="fwg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#C0451F"/><stop offset=".55" stop-color="#E3A43E"/><stop offset="1" stop-color="#FBE27A"/></linearGradient></defs>'
         f'<g class="fw-swim"><g clip-path="url(#fwc)"><image class="fw-img" href="{img if img.startswith('http') else 'assets/img/'+img}" x="-60" y="-40" width="1120" height="640" preserveAspectRatio="xMidYMid slice"/></g>'
         f'<path class="fw-path" d="{FISH_D}"/></g></svg>'
         + (f'<p class="note fw-note"><span>{note}</span></p>' if note else '') + '</div>')
    return _re.sub(r'<div class="media rv in">.*?</div>(?:<p class="note">.*?</p>)?</div>', lambda m: rep, html_, count=1, flags=_re.S)
import species_data as _sd, facilities_data as _fd
_sd.FISHWIN=fishwin; _fd.FISHWIN=fishwin
def dia(items): return '<ul class="diamonds">'+"".join(f"<li>{i}</li>" for i in items)+"</ul>"

# ========================================================= HOME

# ---------- News & Insights ----------
from news_data import NEWS, CATS, GALLERY, GALBUMS
import datetime as _dt
NEWS=sorted(NEWS,key=lambda n:n["date"],reverse=True)
def _ndate(d): return _dt.date.fromisoformat(d).strftime("%B %Y")
def _cslug(c): return _re.sub(r"[^a-z]+","-",c.lower().replace("&","and")).strip("-")
def ncard(n):
    return (f'<a class="nw-card rv" href="{n.get("href") or "news-"+n["slug"]+".html"}" data-cat="{_cslug(n["cat"])}">'
            f'<span class="nw-img"><img src="assets/img/{n["img"]}" alt="{html.escape(n["title"])}" loading="lazy" width="640" height="400"></span>'
            f'<span class="nw-meta"><b>{n["cat"].replace("&","&amp;")}</b> · <time datetime="{n["date"]}">{_ndate(n["date"])}</time></span>'
            f'<h3>{n["title"]}</h3><p>{n["excerpt"]}</p><span class="more">Read more</span></a>')
home=f'''<section class="xp3d" aria-label="Interactive 3D experience" style="position:relative;height:calc(100svh - var(--hh));min-height:520px;background:#0b1a24 url(3d/assets/poster.webp) center/cover no-repeat"><iframe style="position:absolute;inset:0;width:100%;height:100%;border:0;display:block" src="3d/" title="Gulf Aquaculture — interactive 3D experience" allow="fullscreen; autoplay; xr-spatial-tracking" allowfullscreen loading="eager"></iframe></section>
<section class="cover">
  <div class="cover-text">
    <span class="cv-tag">Local Species in Local Waters</span>
    <h1><span class="w">Transforming</span><br><span class="w">Aquaculture</span></h1>
    <p class="sub">in the Middle East</p>
    <div class="actions"><a href="#approach" class="btn btn-or">Our approach</a><a href="operations.html" class="btn btn-line" style="color:var(--ink)">How we operate</a></div>
  </div>
  <div class="cover-media"><div class="img" role="img" aria-label="Sea cage at dawn"></div>
    <svg class="cv-rings" viewBox="0 0 400 400" aria-hidden="true"><defs><linearGradient id="cvr" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#C0451F"/><stop offset=".6" stop-color="#E3A43E"/><stop offset="1" stop-color="#FBE27A"/></linearGradient></defs>
     <g class="r1"><circle cx="200" cy="200" r="185" stroke-dasharray="6 10"/></g>
     <g class="r2"><circle cx="200" cy="200" r="150" stroke-dasharray="420 520"/><rect x="194" y="44" width="12" height="12" transform="rotate(45 200 50)"/></g>
     <g class="r3"><circle cx="200" cy="200" r="118" stroke-dasharray="2 14"/></g></svg></div>
</section>

<section class="kstats" aria-label="Key figures"><div class="wrap">
 <div class="ks-grid nums">
  <div class="ks rv"><p class="ks-n"><span data-count="20">0</span>M+</p><p class="ks-l">Fry targeted in 2026</p><p class="ks-d">Shipping to regional clients from our hatcheries.</p></div>
  <div class="ks rv"><p class="ks-n">≈<span data-count="18000">0</span><small>m²</small></p><p class="ks-l">Hatchery space at SKMRC</p><p class="ks-d">The largest hatchery &amp; nursery facility in the Gulf, under a 15-year lease.</p></div>
  <div class="ks rv"><p class="ks-n"><span data-count="2">0</span></p><p class="ks-l">Assets, BAP certified</p><p class="ks-d">Balghailam Island and the Sheikh Khalifa Marine Research Centre.</p></div>
  <div class="ks rv"><p class="ks-n">1<sup>st</sup></p><p class="ks-l">Sheikh Mansour Agriculture Award</p><p class="ks-d">First place, February 2025.</p></div>
 </div>
</div></section>

<section class="hi" id="approach">
 <div class="hi-left">
  <div class="hi-photo" role="img" aria-label="Offshore fish cages in the Gulf"></div>
  <div class="hi-box rv"><p>We exist to make aquaculture work — for our ecosystems, for food security, and for future generations. In a region where seafood demand is growing and marine ecosystems are under strain, we believe in a better way: simpler, smarter, and grounded in nature.</p></div>
  <div class="hi-vision rv"><p class="hi-kicker">Our vision</p><p class="hi-script">To nurture a sustainable future by cultivating what thrives naturally, with humility, care, and scientific rigour.</p></div>
 </div>
 <div class="hi-right"><span class="arc hi-arc" aria-hidden="true"></span>
  <div class="hi-cols">
   <div class="hi-region rv"><h2 class="hi-kicker hi-kicker-l">A region hungry<br>for change</h2>
    <p>Demand for seafood in the UAE is growing at 8% annually, expected to reach 900,000 tonnes by 2030. Yet our local fisheries are in decline, and most aquaculture projects face challenges tied to over-engineered systems and species not suited to Gulf waters.</p>
    <p>Despite significant investment, aquaculture in the UAE has yet to reach its potential. At Gulf Aquaculture, we saw this not as a failure — but an opportunity to rethink, simplify, and rebuild from first principles.</p></div>
   <div class="hi-rule" aria-hidden="true"><span class="hi-track"><i></i><b></b><i></i></span></div>
   <div class="hi-diff rv hi-anim"><h2>We’re Doing<br>Things<br>Differently</h2><p class="hi-lead">We believe success starts small.</p>
    <p class="hi-sub">Our method is rooted in four pillars:</p>
    <ol class="ab-pr"><li>Prioritise native species like grouper and red snapper</li><li>Keep upland infrastructure minimal — just hatchery and nursery</li><li>Move juveniles to sea cages early, reducing energy use</li><li>Grow gradually through proof of concept, validation, and iteration</li></ol>
    <p class="hi-call">We call this:<br><a href="species.html">Local Species in Local Waters.</a></p></div>
  </div>
  <div class="hi-person"><span class="hi-circle" aria-hidden="true"></span><img src="assets/img/gulf-aquaculture-research-team-member-abu-dhabi.webp" width="507" height="1021" alt="Gulf Aquaculture team member in Abu Dhabi" loading="lazy">
   <p class="note hi-note rv"><span>This isn’t just a job.</span><br><span>It’s a responsibility</span><br><span>to the Gulf.</span></p></div>
 </div>
</section>
<section class="yt-band" aria-label="Gulf Aquaculture video">
  <div class="wrap yt-inner"><div class="rv"><span class="label">An introduction to Gulf Aquaculture</span><h2>Aquaculture, grown in the Gulf.</h2><p>Our sea cages, hatchery, laboratories and the people behind them — in a 7-minute film.</p></div>
  <button type="button" class="yt-open rv" data-yt="QwZ2BvfbzRg" data-start="13" aria-haspopup="dialog"><span class="yt-btn" aria-hidden="true"><span></span></span><span class="yt-txt">Watch the video</span></button></div>
</section>
<div class="yt-modal" id="ytm" role="dialog" aria-modal="true" aria-label="Gulf Aquaculture video"><div class="yt-frame"></div><button type="button" class="yt-x" aria-label="Close video">×</button></div>
<section class="sec paper home-chapters"><div class="wrap">
  <div class="chapters rv">
    <a class="chap" href="about.html"><span class="n">01</span><h3>From vision to operation</h3><p>Our story, mission, principles and a conversation with our General Manager.</p><span class="more">Our story</span></a>
    <a class="chap" href="operations.html"><span class="n">02</span><h3>Where innovation meets simplicity</h3><p>Five phases, continuous lab oversight and full traceability.</p><span class="more">Operations</span></a>
    <a class="chap" href="assets.html"><span class="n">03</span><h3>Assets under management</h3><p>Balghailam Island and the Sheikh Khalifa Marine Research Centre.</p><span class="more">Assets</span></a>
    <a class="chap" href="species.html"><span class="n">04</span><h3>Local species, local knowledge</h3><p>Hamour, Hamra, Shiqra, Shaari, Seabream and Umm Drais — native, resilient, well-adapted.</p><span class="more">Species</span></a>
    <a class="chap" href="growth.html"><span class="n">05</span><h3>Built for tomorrow</h3><p>Sustainability in practice, legal structure, Phase II and our regional footprint.</p><span class="more">Growth</span></a>
    <a class="chap" href="people.html"><span class="n">06</span><h3>The people behind the progress</h3><p>A better future is grown, not guessed.</p><span class="more">People</span></a>
  </div>
</div></section>

<section class="sec navy hq"><div class="wrap cols" style="align-items:center">
  <blockquote class="quote rv">“We're not building a fish farm. We're building trust — in the idea that the UAE can feed itself, responsibly.”<cite>Mohamed Razali · General Manager</cite></blockquote>
  <div class="rv"><p>Every phase is tested before it's scaled. That's how we build trust — with nature and with investors.</p><a href="about.html#interview" class="more" style="margin-top:26px;color:var(--amber)">Read the conversation</a></div>
</div></section>

<section class="sec"><div class="wrap cols" style="align-items:center">
  <div class="rv"><h2>We welcome conversations that move aquaculture forward.</h2></div>
  <div class="rv"><p>Whether you're an investor who shares our long-term vision, a researcher exploring native species, or a policymaker shaping the future of food — we believe progress happens through partnership.</p><a href="contact.html" class="btn btn-or" style="margin-top:26px">Let's talk</a></div>
</div></section>'''
home=home.replace('<section class="sec"><div class="wrap cols" style="align-items:center">\n  <div class="rv"><h2>We welcome conversations','<section class="sec paper nw-latest"><div class="wrap"><div class="nw-head rv"><div><span class="label">News &amp; insights</span><h2 style="margin-top:12px">Latest news and developments</h2></div><a class="more" href="news.html">All news</a></div>\n  <div class="nw-grid">'+''.join(ncard(n) for n in NEWS[:3])+'</div></div></section>\n'+'<section class="sec"><div class="wrap cols" style="align-items:center">\n  <div class="rv"><h2>We welcome conversations',1)
page("index.html","Gulf Aquaculture — Transforming Aquaculture in the Middle East","Gulf Aquaculture: local species in local waters — hatcheries, research and sea-cage farming in the UAE.",home)

# ========================================================= ABOUT
TL=[("2023","Founded","Formed as a joint venture between Emirates Consortium and Hibiscus Capital Investment — with a simple idea: aquaculture designed for this region."),
    ("2024","First sale","First sale of Hamour fry to the local market. Proof of concept through our Balghailam Island hatchery."),
    ("Feb 2025","Award","Awarded 1st place at the Sheikh Mansour Agriculture Award."),
    ("Mar 2026","Certified","GA received BAP certification for its two assets."),
    ("2026","Scale","Exclusive management of the largest hatchery and nursery facility in the UAE and the wider Gulf, under a 15-year lease — on track to ship 20+ million fry.")]
tl='<div class="tline"><span class="bar"></span>'+"".join(f'<div class="tl"><b>{y}</b><i></i><h4>{h}</h4><p>{p}</p></div>' for y,h,p in TL)+"</div>"
def node(n,role,parent=""): return f'<div class="node"><b>{n}</b><small>{role}</small>{f"<span class=\"edge\" style=\"color:#fff;margin-top:10px\">{parent}</span>" if parent else ""}</div>'
org=f'''<div class="org rv">
  {node("M. Razali (founder)","Aquaculture Network")}<div></div>{node("HH. Sh. Mohammed Bin Suroor Al Nahyan","Abu Dhabi Royal Family")}
  {node("Hibiscus Capital Investments LLC","Investment holding","100% · M. Razali — BDF / BNF: TBC%")}
  {node("Gulf Aquaculture LLC","Aquaculture Op Co.","35% Hibiscus · 65% Emirates Consortium")}
  {node("Emirates Consortium LLC","Investment holding","100% · HH. Sh. Mohammed Bin Suroor Al Nahyan")}
  {node("ODS Seafood Trading LLC","Gulf Seafood Imports","40% · Hibiscus Capital Investments")}
  {node("Gulf Aquaculture Alliance","Government Concession (SPV)","100% · Gulf Aquaculture LLC")}
  {node("Jalboot LLC","Marine Op Co.","100% · Emirates Consortium")}
  {node("Asian Hatcheries","Fry Exports","90% · Hibiscus Capital Investments")}
</div><p class="org-legend">Ownership shares as shown in the Company Profile. BDF / BNF holding: to be confirmed.</p>'''
QA=[("What inspired you to launch Gulf Aquaculture?","I've always believed that food security starts in our own waters. But the models we saw here weren't working — they were imported, high-cost, and environmentally mismatched. We saw a gap for a simpler, region-specific approach. That's how Gulf Aquaculture began."),
    ("What makes your approach different?","We don't chase complexity. We focus on native species, grow them naturally, and keep our systems lean. The difference is — we're not trying to replicate European aquaculture. We're building something Gulf-born and Gulf-suited."),
    ("What's your vision for the next 5 years?","Scale. But responsibly. We want to prove this model can work nationally, and then regionally. And we want to be a partner to government and research institutions — not just a supplier, but a strategic contributor to the UAE's food systems."),
    ("What does success look like for Gulf Aquaculture?","For us, success isn't measured by how fast we grow, but by how well we grow. If we can reliably produce fry of local species to support the region's aquaculture industry, raise healthy fish, protect the marine environment, and earn the trust of partners and regulators — that's a strong foundation. Over time, we hope our model can inspire others to approach aquaculture in a more local and sustainable way."),
    ("How do you approach uncertainty in a developing sector like this?","Carefully. We know this industry is still taking shape in the region, so staying grounded is key. We start small, validate every step, and let production data and environmental conditions guide our decisions. It's about being proactive without being reckless — and keeping long-term resilience at the center of what we do.")]
qa='<div class="qa rv">'+"".join(f'<details{" open" if i==0 else ""}><summary>{q}</summary><p>{a}</p></details>' for i,(q,a) in enumerate(QA))+"</div>"
TLX=[("2023","t","Formed in 2023 as a joint venture between Emirates Consortium and Hibiscus Capital Investment, Gulf Aquaculture [GA] began with a simple idea: what if aquaculture were designed for this region, not imported from elsewhere?"),
     ("2024","o","By 2024, we achieved our first sale of Hamour fry to the local market.<br><br>Proof of our concept was achieved through operation of our Balghailam Island hatchery."),
     ("2026","a","In 2026 GA secured exclusive management of the largest hatchery and nursery facility in the UAE and the wider Gulf region, under a 15-year lease.<br><br>At the time of printing the company is on track to ship 20+ million fry to regional clients.")]
AW='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="M9.5 9l1.7 1.7L14.8 7.2"/><path d="M8.5 14l-2 7 3-1.5L12 22l2.5-2.5 3 1.5-2-7"/></svg>'
about=f'''<nav class="ab-sub" aria-label="About sections"><div class="wrap"><a href="#story">Our story</a><a href="#mission">Mission &amp; vision</a><a href="#principles">Principles</a><a href="#role">Our regional role</a><a href="#achievements">Achievements</a><a href="#interview">Leadership interview</a><a href="people.html">Our team →</a></div></nav>
<section class="ab-top" id="story"><span class="arc ab-arc" aria-hidden="true"></span><div class="wrap ab-grid">
 <div class="ab-story" id="story-head">
  <p class="ab-kicker rv in">Our story</p>
  <h1 class="rv in">From Vision<br>to Operation</h1>
  <ol class="ab-tl">{"".join(f'<li class="rv ab-{c}"><span class="ab-year">{y}</span><span class="ab-dia" aria-hidden="true"><i></i><b></b><i></i></span><p>{t}</p></li>' for y,c,t in TLX)}</ol>
 </div>
 <div class="ab-mission" id="mission">
  <h2 class="hx ab-kicker ab-kicker-a rv">Our mission</h2>
  <p class="ab-script rv">To advance sustainable aquaculture by proving it can work in harmony with the Gulf’s ecosystems and communities.</p>
  <img class="ab-razali rv" src="assets/img/mohamed-razali-gulf-aquaculture-founder-with-fish.webp?v=2" width="663" height="1400" alt="Mohamed Razali, founder and General Manager of Gulf Aquaculture, holding a fish" loading="lazy">
 </div>
 <div class="ab-card rv" id="principles">
  <h2>What We<br>Stand For</h2>
  <h3 class="hx ab-kicker">Our principles</h3>
  <ol class="ab-pr"><li>Grow responsibly, not rapidly</li><li>Invest only what we need to learn</li><li>Focus on animal welfare and ecosystem integrity</li><li>Build trust through transparency</li><li>Share knowledge and invite collaboration</li></ol>
  <h3 class="hx ab-kicker" style="margin-top:28px">Our vision</h3>
  <p class="ab-vision">To nurture a sustainable future by cultivating what thrives naturally, with humility, care, and scientific rigour.</p>
 </div>
</div></section>
<section class="ab-band" id="role"><div class="wrap">
 <div class="ab-awards" id="achievements"><h2 class="sr-only">Achievements and awards</h2>
  <div class="rv">{AW}<p><b>Feb 2025</b>Awarded 1st place at the Sheikh Mansour Agriculture Award</p></div>
  <div class="rv">{AW}<p><b>Mar 2026</b>GA received BAP certification for its two assets.</p></div>
 </div>
 <div class="ab-band-grid">
  <h2 class="ab-role rv">Our role is to serve the sea and the people who depend on it.</h2>
  <div class="ab-stats">
   <div class="rv"><p class="ab-big"><span data-count="50">0</span>% less</p><h3>Wild Gulf fish stocks since 1990</h3><p>We supply seedstock from land-based hatcheries, easing pressure on wild populations.</p></div>
   <div class="rv"><p class="ab-big"><span data-count="95">0</span>%</p><h3>Of water recycled in our hatchery system</h3><p>Lower environmental footprint and energy use, aligned with national sustainability goals.</p></div>
  </div>
 </div>
</div></section>
'''
about+=f'''<section class="iv" id="interview">
 <div class="iv-left"><span class="arc iv-arc" aria-hidden="true"></span>
  <h2 class="iv-title rv">A Thoughtful<br>Approach to<br>Growth</h2>
  <p class="iv-kicker rv">A conversation with Mohamed Razali, General Manager</p>
  <figure class="iv-photo rv"><img src="assets/img/mohamed-razali-general-manager-gulf-aquaculture-portrait.webp" width="640" height="640" alt="Mohamed Razali, General Manager of Gulf Aquaculture" loading="lazy"></figure>
  {"".join(f'<div class="iv-qa rv"><h3 class="hx iv-q">Q: {q}</h3><p><b class="iv-a">A:</b> {a_}</p></div>' for q,a_ in QA[:3])}
  <p class="note iv-note rv"><span>“Every phase is tested</span><br><span>before it’s scaled. That’s</span><br><span>how we build trust —</span><br><span>with nature and with investors.”</span></p>
  <figure class="iv-site rv"><img src="assets/img/balghailam-island-hatchery-aerial-gulf-aquaculture.webp" width="1000" height="408" alt="Aerial view of the Gulf Aquaculture hatchery on Balghailam Island" loading="lazy"></figure>
 </div>
 <div class="iv-right">
  <blockquote class="iv-quote rv">“We’re not building a fish farm. We’re building trust — in the idea that the UAE can feed itself, responsibly.”<cite>Mohamed Razali</cite></blockquote>
  <div class="iv-rule rv" aria-hidden="true"><i></i><b></b><i></i></div>
  <div class="iv-cols">{"".join(f'<div class="iv-qa rv"><h3 class="hx iv-q">Q: {q}</h3><p><b class="iv-a">A:</b> {a_}</p></div>' for q,a_ in QA[3:])}</div>
 </div>
</section>'''
page("about.html","Our Story — Gulf Aquaculture","Gulf Aquaculture: story, mission, vision, principles, legal structure and interview.",about)

# ========================================================= OPERATIONS
FEAT=[("Hatchery &amp; Nursery","Controlled environments for larvae and fry.",'<circle cx="8" cy="15" r="3"/><circle cx="14" cy="15" r="3"/><circle cx="20" cy="15" r="2.6"/><circle cx="11" cy="10" r="3"/><circle cx="17" cy="10" r="3"/><circle cx="14" cy="5.5" r="2.6"/>'),
      ("Live Feed Systems","Rotifers, copepods, algae production.",'<path d="M9 12c3-4 8-5 12-1-4 4-9 3-12 1z"/><path d="M21 11l2-3v7z"/><circle cx="4" cy="10" r="1.3"/><circle cx="6" cy="14" r="1"/><circle cx="3" cy="16" r=".8"/>'),
      ("Biosecurity","Closed-loop systems, advanced filtration, and strict protocols.",'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>'),
      ("Laboratories","Water quality and microbiology testing.",'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/>'),
      ("Traceability","SFS Trace system ensures full lifecycle transparency.",'<path d="M4 12h4l2-5 4 10 2-5h4"/>')]

INFRA=[("Recirculating Aquaculture Systems (RAS)","Integrated RAS and flow-through systems keep temperature, salinity and oxygen stable for every life stage, while recirculating and treating water to cut water and energy use.","Balghailam · SKMRC",'<path d="M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6"/><path d="M18 3v4h-4M6 21v-4h4"/>'),
 ("Water intake &amp; filtration","Seawater is drawn in, mechanically filtered and treated through biofilters and UV sterilisation before it reaches broodstock, larvae or nursery tanks.","Balghailam · SKMRC",'<path d="M3 5h18l-7 8v6l-4 2v-8z"/>'),
 ("Water-quality monitoring","On-site laboratories track key parameters — such as temperature, dissolved oxygen, pH, salinity and nitrogen compounds — so every tank is checked, logged and adjusted daily.","14 labs at SKMRC",'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/><path d="M9 15a3 3 0 0 0 3 3"/>'),
 ("Biosecurity &amp; fish health","Separated production zones, controlled access and early pathogen screening by our microbiology lab protect stock without unnecessary antibiotics.","All sites",'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'),
 ("Live-feed production","Dedicated algae and live-feed culture — grown alongside the larval rearing halls — provides the right nutrition at the right size for each larval stage.","Balghailam · SKMRC",'<path d="M7 17c-2-2-2-6 1-8s7-1 8 2-1 7-4 7-3 1-5-1Z"/><circle cx="17" cy="6" r="2"/><circle cx="5" cy="6" r="1.4"/>'),
 ("Environmental management","Native species, low-impact sea cages with natural water exchange, treated discharge and energy-conscious systems keep our footprint on the Gulf as light as possible.","Hatcheries · sea cages",'<path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15"/><path d="M5 19l8-8"/>')]
ops=f'''<section class="opx paper" id="overview"><span class="arc opx-arc" aria-hidden="true"></span><div class="wrap opx-grid">
 <div class="opx-left">
  <h1 class="rv in">Where<br>Innovation<br>Meets Simplicity</h1>
  <h2 class="hx opx-kicker rv in">Our operations</h2>
  <p class="lead rv in">We designed our facilities to do one thing well: raise healthy fish in sustainable, replicable systems.</p>
  <figure class="opx-photo rv"><img src="assets/img/gulf-aquaculture-lab-technician.webp" width="1008" height="676" alt="Laboratory technician testing water samples" loading="lazy">
   <p class="note opx-note"><span>Good water quality</span><br><span>isn’t an output. It’s a</span><br><span>daily practice.</span></p></figure>
 </div>
 <ol class="opx-feat">{"".join(f'<li class="rv"><svg viewBox="0 0 24 24" aria-hidden="true">{i}</svg><h3>{t}:</h3><p>{d}</p></li>' for t,d,i in FEAT)}</ol>
</div></section>
<section class="opb" id="cycle"><div class="wrap"><h2 class="sr-only">The production cycle: from broodstock to distribution</h2>
 <div class="opb-text">
  <div class="rv"><p>Each stage of our operation reflects a clear purpose and a shared responsibility to the Gulf. In the hatchery, our teams begin early — checking water parameters, preparing live feed cultures, and monitoring larval development. This work is methodical and essential, creating the foundation for healthy fish and healthy ecosystems.</p>
   <p>As fry grow, they are transitioned to nursery tanks and eventually to sea cages, where they continue to mature in conditions that mimic their natural habitat. This low-impact approach is not only efficient — it respects the Gulf’s unique marine environment by working in harmony with it, rather than forcing artificial outcomes.</p></div>
  <div class="rv"><p>Behind the scenes, our laboratory teams track microbial health, monitor water quality, and ensure every fish can be traced from broodstock to harvest. Our systems reduce energy usage, recycle water, and eliminate the need for unnecessary antibiotics. Every step is intentional, designed to reduce stress on fish — and on the environment.</p>
   <p class="note opb-note"><span>Our systems are modular and</span><br><span>repeatable — ready to be replicated</span><br><span>across future sites.</span></p></div>
 </div>
 <div class="opb-cycle"><p class="opb-hint rv">Select a phase around the cage — from broodstock to distribution, under continuous lab oversight.</p>
  <div class="ops"><div class="ring rv" id="ring"></div>
   <div class="ph-card rv"><div id="phCard" aria-live="polite"></div><div class="ph-nav"><button type="button" id="phPrev" aria-label="Previous phase">←</button><button type="button" id="phNext" aria-label="Next phase">→</button></div></div></div></div>
</div></section>
<section class="sec infra" id="infrastructure"><div class="wrap">
 <div class="infra-head rv"><span class="label">Infrastructure &amp; technology</span><h2 style="margin-top:12px">The systems behind healthy fish</h2><p>Compact, biosecure and replicable: the same technical backbone runs across our hatcheries and is designed to be repeated at future sites.</p></div>
 <div class="infra-grid">{"".join(f'<article class="infra-card rv"><svg viewBox="0 0 24 24" aria-hidden="true">{i}</svg><h3>{t}</h3><p>{d}</p><span class="infra-where">{w}</span></article>' for t,d,w,i in INFRA)}</div>
</div></section>
<section class="opx-slogan"><div class="wrap"><p class="note rv"><span>From broodstock to the sea —</span><br><span>every step designed in harmony with the Gulf.</span></p></div></section>'''
page("operations.html","Operations — Gulf Aquaculture","Where innovation meets simplicity: hatchery, nursery, live feed, biosecurity, laboratories and traceability.",ops)

# ========================================================= ASSETS
def spec(items): return '<div class="spec-grid">'+"".join(f'<div class="spec"><h4>{h}</h4>{p}</div>' for h,p in items)+"</div>"
bal=f'''<div class="cols" style="margin-bottom:50px"><div><span class="label">Balghailam Island</span><h2 style="margin:12px 0 20px">A model for sustainable marine hatcheries in the region.</h2>
  <p>Instead of scaling vertically or chasing complexity, we've built a system aligned with nature — focused on fish health, biosecurity, and operational reliability. Compact, efficient, and replicable.</p></div>
  <div class="keystats"><h3>Key stats</h3><ul><li>6,000 m² of hatchery space</li><li>Dedicated rooms for live feed and algae production</li><li>Integrated RAS &amp; flow-through systems</li><li>Automated filtration, UV sterilisation, and real-time water quality sensors</li><li>Biosecure broodstock housing and spawning zones</li><li>Modular nursery capacity for phased growth</li><li>Fully equipped lab for water quality and microbiology</li></ul></div></div>
<p class="sub-h">Hatchery infrastructure</p>
{spec([("Broodstock Management","<p>Four 20 m³ tanks hold genetically diverse broodstock, conditioned for Gulf waters. Climate-controlled rooms support consistent spawning, including off-season cycles.</p>"),
       ("Larval Rearing Systems","<p>Eight 10 m³ tanks provide stable environments for early-stage development — ensuring strong survival, growth, and low-stress rearing.</p>"),
       ("Nursery Operations","<p>Twenty-four 10 m³ tanks prepare juveniles for sea cages, with minimal handling and high health standards maintained throughout.</p>"),
       ("Sustainable Feed Systems","<p>Three 2 m³ tanks produce rotifers and copepods. Eight outdoor tanks grow <em>Nannochloropsis</em> sp., forming the foundation of our live feed system.</p>"),
       ("Water Quality &amp; Microbiology Labs","<p>Our on-site lab monitors water quality and fish health. Two functional areas track key parameters and identify pathogens early.</p>"+dia(["CFU counts","Microbial cultivation","Wet mounts","Antibiograms for treatment guidance"])),
       ("Systems That Support People","<p><strong>Dry Lab &amp; Traceability Systems</strong> — supports planning and analytics, integrated with SFS Trace to track fish from broodstock to harvest.</p><p><strong>Staff Facilities</strong> — dedicated spaces for welfare, training, and teamwork.</p>")])}'''
sk=f'''<div class="cols" style="margin-bottom:50px"><div><span class="label">Sheikh Khalifa Marine Research Centre</span><h2 style="margin:12px 0 20px">The pinnacle of Middle Eastern hatchery technology and design.</h2>
  <p>GA has been operating the Sheikh Khalifa Marine Research Centre [SKMRC] since November 2025.</p>
  <div class="photo" style="background-image:url(assets/img/sheikh-khalifa-marine-research-centre-skmrc-gulf-aquaculture.jpg);margin-top:26px;min-height:260px" role="img" aria-label="SKMRC — rendering from the Company Profile"></div></div>
  <div class="keystats"><h3>Innovation at its heart</h3><ul><li>Fourteen dedicated laboratories provisioned for compliance with ISO/IEC 17025</li><li>1,200 m² of office space</li><li>Fully furnished staff canteen and academic spaces</li><li>The Marine Innovation Park — 14 laboratories and a science discovery division for research and younger audiences</li></ul></div></div>
<p class="sub-h">Hatchery infrastructure · ≈18,000 m² in two production streams</p>
{spec([("Broodstock Management","<p>The team manages and breeds Seabream, Hamour, Shaari, Mangrove Snapper, Mullet, Cobia, and Naisrah.</p>"),
       ("Larval Rearing Systems",dia(["Production of 3 species throughout the year","Annual production capacity of 20+ million larvae"])),
       ("Nursery Operations",dia(["Currently focusing on Hamour, Red Snapper and Shari","Target production of 20 million fry in 2026"])),
       ("Sustainable Feed Systems",dia(["Live feed: rotifers, Artemia, copepods","7 species of live algae, year-round"])),
       ("Laboratories &amp; Diagnostics","<p>Microbial testing capabilities include:</p>"+dia(["Viruses","Bacteria","Parasites","Water quality parameters"])),
       ("Phase 01 · Phase 02","<p>Each production stream combines broodstock, hatchery, nursery and weaning areas with office, plant and generator rooms.</p>")])}'''
from facilities_data import facilities_index, facility_pages
assets=facilities_index(opener,dia)
page("assets.html","Assets — Gulf Aquaculture","Balghailam Island hatchery and the Sheikh Khalifa Marine Research Centre.",assets)
facility_pages(page,dia)

# ========================================================= SPECIES
FISH='<svg class="fish" viewBox="0 0 200 90" fill="none" aria-hidden="true"><path d="M14 45C44 10 110 6 152 45 110 84 44 80 14 45Z" stroke="#E2A13C" stroke-width="1.2"/><path d="M152 45l40-28v56l-40-28Z" stroke="#E2A13C" stroke-width="1.2"/><circle cx="42" cy="40" r="3" fill="#E2A13C"/></svg>'
from species_data import SPECIES, species_index, species_pages

# ---------- Interactive regional distribution map (species) ----------
import json as _json
_RM=_json.load(open(os.path.join(HERE,"rangemap.json")))
_RKEY={"hamour":"iwp","shiqra":"iwp","shaari":"iwp","hamra":"iwpE","seabream":"gulfAS","umm-drais":"gulf"}
_RTXT={"hamour":"Indo-West Pacific: from East Africa and the Red Sea, through the Arabian Gulf, to the western Pacific.",
       "shiqra":"Indo-West Pacific: East Africa and the Red Sea to Samoa, southern Japan and Australia; juveniles in mangrove estuaries.",
       "shaari":"From East Africa and the Red Sea, through the Arabian Gulf, to southern Japan and around Australia.",
       "hamra":"Indo-West Pacific: from the Arabian Gulf and the Arabian Sea to South-East Asia, northern Australia and the western Pacific.",
       "seabream":"Sobaity (Sparidentex hasta) is native to the Arabian Gulf and the northern Arabian Sea.",
       "umm-drais":"Regional red snapper of the Arabian Gulf and Gulf of Oman — under evaluation in our broodstock programme."}
def range_map():
    from species_data import SPECIES as _S
    chips="".join(f'<button type="button" data-k="{d["k"]}" data-href="species-{d["k"]}.html" data-r="{_RKEY[d["k"]]}" data-t="{html.escape(_RTXT[d["k"]])}" data-sci="{html.escape(d["sci"] or "")}" data-en="{html.escape(d["en"])}"{" class=on" if i==0 else ""}>{d["local"]}</button>' for i,d in enumerate(_S))
    ranges="".join(f'<path class="rm-range" data-r="{k}" d="{v}"/>' for k,v in _RM["ranges"].items())
    S=_RM["sites"]; uae=S[0]
    marks=(f'<g class="rm-site" tabindex="0"><circle cx="{uae["x"]}" cy="{uae["y"]}" r="7"/><circle class="rm-pulse" cx="{uae["x"]}" cy="{uae["y"]}" r="7"/><text x="{uae["x"]-10}" y="{uae["y"]-16}" text-anchor="middle" data-short="UAE">UAE · HQ, Balghailam, SKMRC</text></g>'
           +"".join(f'<g class="rm-site" tabindex="0"><circle cx="{t["x"]}" cy="{t["y"]}" r="6"/><circle class="rm-pulse" cx="{t["x"]}" cy="{t["y"]}" r="6"/><text x="{t["x"]+12}" y="{t["y"]+(18 if t["c"]=="Oman" else 4)}" data-short="{t["c"]}">{t["c"]} · {t["n"]}</text></g>' for t in S[3:]))
    d0=_S[0]
    return f'''<section class="sec rmap" id="distribution"><div class="wrap">
  <div class="rm-head rv"><span class="label">Interactive map</span><h2 style="margin-top:12px">Where our species live</h2><p>Select a species to see its natural range across the region, alongside the sites where Gulf Aquaculture and its partners operate.</p></div>
  <div class="rm-grid">
    <div class="rm-side rv"><div class="rm-chips" role="tablist" aria-label="Species">{chips}</div>
      <div class="rm-info" aria-live="polite"><p class="rm-en">{d0["en"]}</p><p class="rm-sci"><i>{d0["sci"] or ""}</i></p><p class="rm-txt">{_RTXT[d0["k"]]}</p>
      <a class="more" id="rmLink" href="species-{d0["k"]}.html">Species profile</a></div>
      <ul class="rm-legend"><li><i class="lg-r"></i>Natural range (indicative)</li><li><i class="lg-s"></i>Gulf Aquaculture &amp; partner sites</li></ul></div>
    <div class="rm-map rv"><svg viewBox="0 0 {_RM["W"]} {_RM["H"]}" role="img" aria-label="Map of the Indo-West Pacific showing the natural range of the selected species"><rect x="-500" y="-500" width="2000" height="2000" class="rm-sea"/>{ranges}<path class="rm-land" d="{_RM["land"]}"/>{marks}</svg></div>
  </div></div></section>'''
sp=species_index(opener,dia)
sp+=f'''<section class="spk"><div class="spk-media rv" role="img" aria-label="Aerial view of sea cages and a work vessel">
  <p class="spk-belief">At Gulf Aquaculture, we believe meaningful sustainability starts with knowing what thrives here — not just what sells. Our approach is rooted in science, shaped by local conditions, and designed to benefit both ecosystems and economies.</p>
  <p class="spk-claim">We don’t adapt species to our systems. We build systems around our species.</p></div>
 <div class="spk-text"><span class="arc" aria-hidden="true"></span>
  <div class="spk-block rv"><h2 class="spk-h">Deep knowledge.<br>Local advantage.</h2>
   <p>Our work begins with a profound understanding of native Gulf species — their biology, behaviour, and breeding cycles. Species like Hamour and Red Snapper are not only valuable to the market — they’re naturally suited to our environment.</p>
   <p>This knowledge allows us to:</p>{dia(["Optimise feed for local conditions","Breed fish with greater resilience to heat and salinity","Support wild population recovery through responsible sourcing","Avoid overengineering, reducing costs and environmental stress"])}</div>
  <div class="spk-block rv"><h2 class="spk-h">Sustainability<br>through specificity</h2>
   <p>Rather than replicate global models, we’ve designed our hatchery and nursery systems to reflect what’s needed — and nothing more. This minimalist approach results in:</p>{dia(["Lower energy use","Higher survival rates","No antibiotic use","Meaningful reductions in environmental impact"])}
   <a class="btn btn-or" href="contact.html#partner" style="margin-top:30px">Fry orders &amp; availability <span aria-hidden="true">→</span></a></div>
 </div></section>'''
sp+=range_map()
page("species.html","Species — Gulf Aquaculture","Native Gulf species: Hamour, Hamra, Shiqra, Shaari, Seabream and Umm Drais.",sp)
species_pages(page)

# ========================================================= GROWTH
GR=[("Vertical Expansion","We're building more of the value chain — including transport, genetics, and off-take partnerships — to increase resilience and deliver long-term value."),
    ("New Sites","Future facilities will be located nationally and regionally, selected based on environmental suitability and alignment with our low-impact model."),
    ("Broodstock Development","We're advancing broodstock lines to improve climate resilience and enable year-round spawning, supporting stable, scalable supply."),
    ("Strategic Partnerships","Through public-private collaboration, we aim to contribute to national food security, biodiversity, and the long-term future of Gulf aquaculture.")]
FP=[("UAE","Abu Dhabi HQ","Head office for Gulf Aquaculture. Oversight of Grouper and Red Snapper programs."),("UAE","Balghailam Island","Grouper and Red Snapper hatchery and nursery site. Co-invested with Hibiscus Capital Investment and operated by GA."),
    ("UAE","SKMRC","Government-owned hatchery operated by GA on a 15-year concession."),("UAE","Juvenile supply","Supplying Grouper and Red Snapper juveniles to a local company since 2024. Projected at 7 million/year by 2026."),
    ("Oman","Seabream & Red Snapper","50 tonnes/month of Seabream. Red Snapper and Seabream fry supply agreement from Dec 2025."),
    ("Malaysia","Red Snapper hatchery","Co-invested with Aquagrow International. Producing 1 million fry/month since 2023."),
    ("Indonesia","Grouper hatchery","With Aquagrow International. Producing 300,000 fry/month. Launching 2026.")]
ICO={
 "person":'<svg viewBox="0 0 48 48"><circle cx="24" cy="10" r="6"/><path d="M14 46V26c0-6 4-9 10-9s10 3 10 9v20M19 46V32M29 46V32"/></svg>',
 "royal":'<svg viewBox="0 0 48 48"><path d="M17 15c0-6 3-9 7-9s7 3 7 9M15 15h18M17 15l-4 31h22l-4-31"/><circle cx="24" cy="15" r="4"/></svg>',
 "building":'<svg viewBox="0 0 48 48"><path d="M6 42h36M10 42V18h28v24M16 18v-6h16v6M15 24h4M22 24h4M29 24h4M15 31h4M22 31h4M29 31h4M21 42v-5h6v5"/></svg>',
 "fish":'<svg viewBox="0 0 48 48"><path d="M6 24c6-8 16-10 24-6l10-6v24l-10-6c-8 4-18 2-24-6z"/><circle cx="14" cy="22" r="1.5"/><path d="M38 9a18 18 0 0 0-26 0M10 39a18 18 0 0 0 26 0"/></svg>',
 "op":'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19"/><path d="M12 25c4-5 10-6 15-3l6-4v13l-6-4c-5 3-11 2-15-2z"/><path d="M11 34c4 2 8 2 13 0s9-2 13 0"/></svg>',
 "boat":'<svg viewBox="0 0 48 48"><path d="M5 28h38l-6 10H12z"/><path d="M14 28v-6h14l6 6M18 22v-5h6"/><path d="M4 42c5 2 10 2 14 0s9-2 14 0 9 2 12 0"/></svg>',
 "eggs":'<svg viewBox="0 0 48 48"><circle cx="24" cy="10" r="5"/><circle cx="18" cy="20" r="5"/><circle cx="30" cy="20" r="5"/><circle cx="12" cy="31" r="5"/><circle cx="24" cy="31" r="5"/><circle cx="36" cy="31" r="5"/></svg>',
 "spv":'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19"/><text x="24" y="30" text-anchor="middle" font-size="15" font-weight="700" fill="#fff" stroke="none" font-family="Poppins,Arial,sans-serif">SPV</text></svg>',
 "": ""}
# id, name, tag, icon, grid col/row, own-line (mobile), description, link
ORG=[
 ("bdf","BDF / BNF","Shareholder","",1,1,"Shareholder of Hibiscus Capital Investments — TBC%","Holds a stake in Hibiscus Capital Investments LLC. The percentage is still to be confirmed (TBC%) in the Company Profile.",None),
 ("razali","M. Razali (founder)","Aquaculture Network","person",2,1,"Founder · owns 100% of Hibiscus","Founder and General Manager of Gulf Aquaculture, with over 25 years of aquaculture experience across Asia, the Middle East and Africa. He founded Aquagrow International and owns 100% of Hibiscus Capital Investments LLC.",("people.html","Meet the team")),
 ("hh","HH. Sh. Mohammed Bin Suroor Al Nahyan","Abu Dhabi Royal Family","royal",4,1,"Royal patron · owns 100% of Emirates Consortium","Royal patron of Gulf Aquaculture, from the Abu Dhabi Royal Family. Owns 100% of Emirates Consortium LLC.",None),
 ("hib","Hibiscus Capital Investments LLC","Investment holding","building",2,2,"Owned 100% by M. Razali · BDF / BNF TBC%","Investment holding owned by M. Razali (100%), with a BDF / BNF stake to be confirmed. It holds 35% of Gulf Aquaculture LLC, 40% of ODS Seafood Trading LLC and 90% of Asian Hatcheries.",None),
 ("emi","Emirates Consortium LLC","Investment holding","building",4,2,"Owned 100% by HH. Sh. Mohammed Bin Suroor","Investment holding owned 100% by HH. Sh. Mohammed Bin Suroor Al Nahyan. It holds 65% of Gulf Aquaculture LLC and 100% of Jalboot LLC.",None),
 ("ods","ODS Seafood Trading LLC","Gulf Seafood Imports","fish",1,3,"40% Hibiscus Capital Investments","Seafood trading company focused on Gulf seafood imports. 40% held by Hibiscus Capital Investments LLC.",None),
 ("ga","Gulf Aquaculture LLC","Aquaculture Op Co.","op",3,3,"35% Hibiscus · 65% Emirates Consortium","The aquaculture operating company — formed in 2023 as a joint venture between Emirates Consortium (65%) and Hibiscus Capital Investments (35%). It owns 100% of the Gulf Aquaculture Alliance.",("about.html","Read our story")),
 ("jal","Jalboot LLC","Marine Op Co.","boat",4,3,"100% Emirates Consortium","Marine operating company, owned 100% by Emirates Consortium LLC.",("operations.html","See our operations")),
 ("asi","Asian Hatcheries","Fry Exports","eggs",1,4,"90% Hibiscus Capital Investments","Hatchery business focused on fry exports. 90% held by Hibiscus Capital Investments LLC.",("species.html","Our core species")),
 ("gaa","Gulf Aquaculture Alliance","Government Concession","spv",3,4,"SPV · 100% Gulf Aquaculture LLC","Special purpose vehicle holding the government concession, owned 100% by Gulf Aquaculture LLC.",("assets.html","Assets under management")),
]
# parent, child, label, route
EDGES=[("bdf","hib","TBC%","downside"),("razali","hib","100%","down"),("hh","emi","100%","down"),
       ("hib","ga","35%","sidedown"),("emi","ga","65%","sidedown"),("emi","jal","100%","down"),
       ("hib","ods","40%","downside"),("hib","asi","90%","downside"),("ga","gaa","100%","down")]
import json
def onode(i,n,t,ic,c,r,own,d,lk):
    la=f' data-href="{lk[0]}" data-link="{lk[1]}"' if lk else ''
    return (f'<button type="button" class="lg-node" id="lg-{i}" data-id="{i}" style="grid-column:{c};grid-row:{r}" data-name="{html.escape(n)}" data-tag="{html.escape(t)}" data-desc="{html.escape(d)}"{la} aria-haspopup="dialog">'
            f'<span class="lg-box"><span class="lg-name">{n}</span>{"<span class=lg-ico aria-hidden=true>"+ICO[ic]+"</span>" if ic else ""}<span class="lg-plus" aria-hidden="true">+</span></span>'
            f'<span class="lg-tag">{t}</span><span class="lg-own">{own}</span></button>')
legal=('<section class="sec legal" id="legal-structure"><div class="wrap"><div class="legal-head">'
 '<div class="rv"><span class="label">Ownership &amp; governance</span><h2 style="margin-top:12px">Legal Structure</h2></div>'
 '<div class="rv"><p class="lead">Backed by the best and the brightest in the field, GA boasts the support of royal patrons in the UAE and a host of international subject matter experts.</p>'
 '<p class="legal-hint"><span aria-hidden="true">◆</span> Hover an entity to trace its ownership — tap it for details.</p></div></div>'
 '<div class="lg-org rv"><svg class="lg-wires" aria-hidden="true"></svg>'+"".join(onode(*o) for o in ORG)+'</div>'
 '<script type="application/json" id="lg-edges">'+json.dumps(EDGES)+'</script>'
 '<div class="legal-foot rv"><p class="org-legend">Ownership shares as shown in the Company Profile. BDF / BNF holding: to be confirmed.</p>'
 '<a class="btn btn-line" href="contact.html#investor">Investment &amp; strategic partnerships <span aria-hidden="true">→</span></a></div>'
 '</div></section>'
 '<div class="bio" id="lgd" role="dialog" aria-modal="true" aria-labelledby="lgdN"><div class="bio-card"><button class="x" type="button" aria-label="Close">×</button>'
 '<span class="label" id="lgdK"></span><h3 id="lgdN" style="margin-top:8px"></h3><p id="lgdT" style="margin-top:14px"></p><a class="btn btn-or" id="lgdA" href="#" style="margin-top:22px;display:none"></a></div></div>')
gr=opener("05","Sustainability in practice","Built for<br>Tomorrow","At Gulf Aquaculture, sustainability isn’t an add-on — it’s built into the way we think, work, and grow. From the design of our hatcheries to the resilience of our broodstock, every decision is made with tomorrow in mind.","gulf-aquaculture-sea-cages-sunset-vertical.jpg","",'<p class="statement">We don’t just raise fish. We raise the bar for what aquaculture can be — for people, planet, and prosperity.</p>')
gr=fishwin(gr,"gulf-aquaculture-sea-cages-sunset-arabian-gulf.webp","Sea cages at sunset in the Arabian Gulf","")
gr+=legal
gr+='<section class="boatq" role="img" aria-label="Work vessel among the sea cages"><div class="wrap"><p class="note"><span>We grow value the same way</span><br><span>we grow fish — with patience,</span><br><span>precision, and full visibility.</span></p></div></section>'
page("growth.html","Built for Tomorrow — Gulf Aquaculture","Sustainability in practice, Phase II future growth and regional footprint.",gr)

# ========================================================= PEOPLE
TEAM=[("gulf-aquaculture-team-razali.webp","Mohamed Razali Mohamed","General Manager","Razali has over 25 years of aquaculture experience across Asia, the Middle East, and Africa. He founded Aquagrow International and specialises in efficient hatchery systems, with a leadership style rooted in trust, technical rigour, and long-term sustainability."),
 ("gulf-aquaculture-team-fazli.webp","Mohd Fazli Ahmad Tamizi","Director of Engineering","Mohd Fazli is an aquaculture engineer with 18 years of experience across the Gulf and Asia. He specialises in RAS, hatchery systems, and operational design, ensuring technical performance across complex infrastructure."),
 ("gulf-aquaculture-team-safa.webp","Safa Matmati","Office Manager","Safa is a Higher Technician in International Trade with experience across the insurance, petroleum trading, and marine aquaculture sectors in Tunisia and the UAE. She specialises in office administration, business support, with strong organisational skills and fluency in three languages."),
 ("gulf-aquaculture-team-pham.webp","Pham Duc Phuong","Senior Growout Manager","Pham has 20 years of marine aquaculture experience. Formerly with Aquagrow Malaysia, he now leads offshore cage operations, focusing on native species, environmental fit, and fish welfare."),
 ("gulf-aquaculture-team-afiq.webp","Mohammad Afiq Bin Mohammad Azmi","Senior Hatchery Manager","Mohammad Afiq has 16 years of hatchery experience, specialising in Grouper. He previously led operations at Qatar Government Hatchery and now supports Gulf Aquaculture’s early-stage production and larval health."),
 ("gulf-aquaculture-team-milton.webp","Dr. James Milton","Hatchery Manager","James is a hatchery expert with 15+ years experience in fin fish operations. He has supported leading institutions in the UAE, Saudi Arabia, India, and China, specialising in larval production, grow-out management, and hatchery R&D."),
 ("gulf-aquaculture-team-hosna.webp","Hosna Irani","Commercial Manager","Hosna is a Commercial Manager with over a decade of experience in international trade, export strategy, and aquaculture business management. Served as Commercial Manager for the largest fish farming operation in the Eastern Middle East."),
 ("gulf-aquaculture-team-migone.webp","Migonè Bi Frank Ulrich","Aquaculture Engineer","Migonè previously managed the Ivory Coast Government’s PSTACI Programme in West Africa with Aquagrow Group. Brings 14 years of industry experience spanning aquaculture and aquaculture civil engineering, with extensive project and operational expertise across West Africa and the UAE."),
 ("gulf-aquaculture-team-jp.webp","J.P. Rebollini","Investor Relations, Branding & Corporate Communications","JP is a veteran of hospitality and marine industries with over a decade of stakeholder engagement and relationship management under his belt. JP handles branding and corporate communications for the organisation."),
 ("gulf-aquaculture-team-loh.webp","Dr. James Loh","Advisor","Dr Loh is an Aquaculture Specialist and Associate Professor with over 15 years of experience in fish nutrition, research, and commercial farming. His career spans academia, industry, and farm operations across Asia, including leadership roles in research, education, commercial aquaculture, and industry advisory."),
 ("gulf-aquaculture-team-finnbogi.jpg","Finnbogi Baldvinsson","Industry Advisor","Finnbogi Baldvinsson is a senior seafood industry leader with over 30 years of global executive and board-level experience in wild capture fisheries, processing and aquaculture. He has built, restructured and led major seafood businesses across Europe, the Americas, Asia and MENA."),
 ("gulf-aquaculture-team-andrew.jpg","Andrew Leingang","Aquaculture Consultant","Andrew is a veteran advisor with 50 years of experience. Formerly GM at GFB Fisheries in Australia, he supports Gulf Aquaculture with technical oversight and operational planning.")]
people=opener("06","Our team","The People Behind<br>the Progress","Our team is a diverse group of scientists, technicians, strategists, and aquaculture practitioners — each united by a shared belief: that a better future is grown, not guessed.","gulf-aquaculture-aerial-view-abu-dhabi.jpg","A better future is grown, not guessed.")
people=fishwin(people,"gulf-aquaculture-offshore-sea-cages-uae.webp","Gulf Aquaculture sea cages offshore in the UAE","A better future is grown, not guessed.")
people+='<section class="sec" id="team"><div class="wrap"><h2 class="sr-only">Our team</h2><div class="people">'+"".join(f'<button type="button" class="person rv" aria-haspopup="dialog" data-img="assets/img/{k}" data-name="{html.escape(n)}" data-role="{html.escape(r)}" data-bio="{html.escape(b)}"><span class="ph" aria-hidden="true"><img src="assets/img/{k}" width="227" height="246" alt="{html.escape(n)}, {html.escape(r)} at Gulf Aquaculture" loading="lazy"><span class="ph-plus">+</span></span><span class="p-name">{n}</span><span class="p-role">{r}</span><span class="p-ex">{html.escape(b)}</span><span class="p-more">Read profile <span aria-hidden="true">→</span></span></button>' for k,n,r,b in TEAM)+'</div></div></section>'
people+='<div class="bio" id="bio" role="dialog" aria-modal="true" aria-labelledby="bioN"><div class="bio-card"><button class="x" type="button" aria-label="Close">×</button><div class="bio-head"><span class="ph bio-ph" aria-hidden="true"><img id="bioI" src="" alt=""></span><div><h3 id="bioN"></h3><span class="bio-role" id="bioK"></span></div></div><p id="bioT"></p></div></div>'
_IV=[n for n in NEWS if n["cat"]=="People & Interviews"]
people+=('<section class="sec paper ivrow" id="interviews"><div class="wrap"><div class="nw-head rv"><div><span class="label">Interviews</span><h2 style="margin-top:12px">Conversations with our team</h2></div><a class="more" href="news.html#cat=people-and-interviews">All interviews</a></div>'
  '<div class="nw-grid">'+"".join(ncard(n) for n in _IV)+'<div class="nw-card nw-soon rv"><span class="nw-meta"><b>Coming soon</b></span><h3>Meet the people in our hatcheries and labs</h3><p>Short interviews with our scientists, technicians and hatchery team — their work, their species, their Gulf.</p></div></div></div></section>')
page("people.html","People — Gulf Aquaculture","The team behind Gulf Aquaculture.",people)

# ========================================================= CONTACT
contact=f'''<section class="sec paper"><span class="arc" style="width:760px;height:760px;right:-320px;top:-360px"></span><div class="wrap contact-grid">
  <div class="rv"><span class="folio"><i></i>Contact</span><h1 style="margin:14px 0 18px">We welcome conversations that move aquaculture forward.</h1>
    <p>Whether you're an investor who shares our long-term vision, a researcher exploring native species, or a policymaker shaping the future of food — we believe progress happens through partnership.</p>
    <p>We're building more than a business. We're building trust, resilience, and a model that others can build on. If that resonates with you, we'd love to hear from you.</p>
    <a class="wa-btn" href="{WA_URL}" target="_blank" rel="noopener">{WA_ICO}Chat with us on WhatsApp</a>
    <dl class="dl"><dt>Email</dt><dd>info@gulfaquaculture.com</dd><dt>Website</dt><dd>gulfaquaculture.com</dd><dt>Head office</dt><dd>7th Floor, East Tower, Abu Dhabi Mall<br>P.O. Box 55345, Abu Dhabi, UAE</dd><dt>AUM</dt><dd>1. Balghailam Island<br>2. Sheikh Khalifa Marine Research Centre</dd></dl></div>
  <form class="form rv" id="form" novalidate><h2 style="font-size:1.5rem;line-height:1.06">Let's build something lasting, together.</h2>
    <p class="legend" style="margin-top:22px">What is your enquiry about?</p>
    <div class="who">
      <label><input type="radio" name="type" value="fry">Fry orders &amp; availability</label><label><input type="radio" name="type" value="partner">Commercial aquaculture enquiry</label>
      <label><input type="radio" name="type" value="policy">Government &amp; institutional partnership</label><label><input type="radio" name="type" value="research">Research &amp; academic collaboration</label>
      <label><input type="radio" name="type" value="investor">Investment &amp; strategic partnership</label><label><input type="radio" name="type" value="general">General enquiry</label></div>
    <fieldset class="fry-fields" id="fryF" hidden><legend class="legend">Fry request</legend>
      <div class="row2"><div class="fld"><label for="fs">Species</label><select id="fs"><option>Hamour (orange-spotted grouper)</option><option>Hamra (Malabar red snapper)</option><option>Shiqra (mangrove red snapper)</option><option>Shaari (spangled emperor)</option><option>Sobaity seabream</option><option>Umm Drais (under evaluation)</option><option>Other / not sure</option></select></div><div class="fld"><label for="fq">Quantity (pcs)</label><input id="fq" inputmode="numeric" placeholder="e.g. 50,000"></div></div>
      <div class="row2"><div class="fld"><label for="fz">Preferred size</label><input id="fz" placeholder="e.g. 3–5 cm"></div><div class="fld"><label for="fd">Delivery date</label><input id="fd" type="month"></div></div>
      <div class="fld"><label for="fl">Farm location</label><input id="fl" placeholder="City, country"></div></fieldset>
    <div class="row2"><div class="fld"><label for="n">Name *</label><input id="n" autocomplete="name"></div><div class="fld"><label for="o">Organisation</label><input id="o" autocomplete="organization"></div></div>
    <div class="row2"><div class="fld"><label for="e">Email *</label><input id="e" type="email" autocomplete="email"></div><div class="fld"><label for="p">Phone</label><input id="p" type="tel" autocomplete="tel"></div></div>
    <div class="fld"><label for="m">Message</label><textarea id="m"></textarea></div>
    <label class="consent"><input type="checkbox" id="c">I agree that Gulf Aquaculture may use my details to reply to this message. *</label>
    <button class="btn btn-or" type="submit">Send message</button><div class="msg" id="msg" role="status"></div></form>
</div></section>'''
page("contact.html","Contact — Gulf Aquaculture","Contact Gulf Aquaculture — head office in Abu Dhabi.",contact)
open(f"{OUT}/README.md","w").write("# Gulf Aquaculture — website built from the Company Profile (v3)\n\nStatic HTML, 8 pages following the brochure's chapters. Open index.html. All texts, figures and photos come from the GA Company Profile; portraits and missing species photos to be supplied. Demo by Kriswa International.\n")
print("built",sorted(f for f in os.listdir(OUT) if f.endswith(".html")))

# ========================================================= LEGAL
def legal_page(fn,title,lead,sections):
    body=f'<section class="sec paper legal-pg"><div class="wrap" style="max-width:860px"><span class="folio rv in"><i></i>Legal</span><h1 class="rv in" style="margin:14px 0 18px">{title}</h1><p class="lead rv in">{lead}</p><p class="tbs-wrap"><span class="tbs">Draft for the concept website — to be reviewed by Gulf Aquaculture’s legal advisor</span></p>'
    body+="".join(f'<h2 class="lg-h">{h}</h2>'+"".join(f"<p>{p}</p>" for p in ps) for h,ps in sections)
    body+='<p style="margin-top:40px">Last updated: November 2026.</p></div></section>'
    page(fn,f"{title} — Gulf Aquaculture",title,body)
legal_page("privacy.html","Privacy Policy","How Gulf Aquaculture LLC collects, uses and protects personal data shared through this website.",[
 ("Who we are",["Gulf Aquaculture LLC, 7th Floor, East Tower, Abu Dhabi Mall, P.O. Box 55345, Abu Dhabi, United Arab Emirates (“Gulf Aquaculture”, “we”). For any privacy request, contact <a href=\"mailto:info@gulfaquaculture.com\">info@gulfaquaculture.com</a>."]),
 ("Data we collect",["Information you give us through the enquiry form: name, organisation, email, phone, the profile you select and your message.","Technical data needed to deliver the website (such as IP address and browser type) processed by our hosting provider."]),
 ("How we use it",["To answer your enquiry and route it to the right team (commercial, government &amp; investment, research).","To keep a record of business correspondence, and to meet legal obligations. We do not sell personal data or use it for automated decision-making."]),
 ("Legal basis",["We process personal data in line with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data and, where applicable, the EU GDPR — on the basis of your consent, our legitimate interest in responding to business enquiries, or legal obligations."]),
 ("Sharing and transfers",["Data may be shared with service providers who host the website or manage email on our behalf, under appropriate safeguards. Where data is transferred outside the UAE we ensure an adequate level of protection."]),
 ("Retention",["Enquiries are kept for as long as needed to handle the request and for our legitimate business records, then deleted or anonymised."]),
 ("Your rights",["You can ask to access, correct, delete or restrict the processing of your data, object to processing, or withdraw consent at any time by writing to <a href=\"mailto:info@gulfaquaculture.com\">info@gulfaquaculture.com</a>."]),
])
legal_page("cookies.html","Cookie Policy","How this website uses cookies and similar technologies.",[
 ("What we use",["This website does not use advertising or analytics cookies.","It stores two small preferences in your browser’s local storage, only on your device: the visitor profile you choose under “Access by profile” (to highlight relevant pages) and nothing else that identifies you. You can clear it at any time with “Clear ×” or by clicking Home."]),
 ("Embedded videos",["Videos are embedded from YouTube in privacy-enhanced mode (youtube-nocookie.com) and are only loaded when you press play. Once you play a video, YouTube (Google) may set cookies under its own policy."]),
 ("Fonts",["Fonts are loaded from Google Fonts, which may receive your IP address to deliver them."]),
 ("Managing preferences",["You can block or delete cookies and local storage from your browser settings. If analytics are added in the future (as foreseen in the website brief), this policy and a consent banner will be updated first."]),
])

# News index + article pages
_chips='<button class="on" data-f="all">All</button>'+"".join(f'<button data-f="{_cslug(c)}">{c.replace("&","&amp;")}</button>' for c in CATS)
_gsrc=lambda i: i if i.startswith("http") else "assets/img/"+i
_gal="".join(f'<figure class="gl-item rv" data-al="{_cslug(al)}"><a href="{_gsrc(i)}" data-lb="gal" data-cap="{html.escape(c)}"><img src="{_gsrc(i)}" alt="{html.escape(c)}" loading="lazy" width="600" height="450"><span class="gl-zoom" aria-hidden="true">+</span></a><figcaption>{html.escape(c)}</figcaption></figure>' for al,i,c in GALLERY)
_galchips='<button class="on" data-f="all">All photos</button>'+"".join(f'<button data-f="{_cslug(a)}">{a.replace("&","&amp;")}</button>' for a in GALBUMS)
news=opener(None,"News &amp; insights","News &amp; insights","Company news, projects and partnerships, research, events and media from Gulf Aquaculture.","gulf-aquaculture-aerial-view-abu-dhabi.jpg",None)
news+=f'''<section class="sec nw-list" id="articles"><div class="wrap">
  <div class="nw-chips rv" role="toolbar" aria-label="Filter news by category">{_chips}</div>
  <h2 class="sr-only">Latest articles</h2><div class="nw-grid" id="nwGrid">{"".join(ncard(n) for n in NEWS)}</div>
  <p class="nw-empty" id="nwEmpty" hidden>No posts in this category yet — new articles will appear here as they are published.</p>
</div></section>'''
news=fishwin(news,GA_NEWS_IMG,"Gulf Aquaculture technician checking fry in hatchery tanks","")
page("news.html","News — Gulf Aquaculture","",news)
# Media gallery page
gallery=opener(None,"Media gallery","Media gallery","Photos from our hatcheries, sea cages, laboratories and team across the UAE.","gulf-aquaculture-aerial-view-abu-dhabi.jpg",None)
gallery=fishwin(gallery,"gulf-aquaculture-sea-cages-sunset-arabian-gulf.webp","Sea cages at sunset in the Arabian Gulf","")
gallery+=f'''<section class="sec gl" id="photos"><div class="wrap">
  <div class="gl-chips rv" role="toolbar" aria-label="Filter photos by album">{_galchips}</div>
  <h2 class="sr-only">Photo gallery</h2><div class="gl-grid">{_gal}</div>
  <p class="gl-note rv">Click any photo to open it full screen; use the arrows, your keyboard or swipe to browse.</p>
</div></section>'''
page("gallery.html","Media gallery — Gulf Aquaculture","",gallery)

def _fishfig(img,alt):
    m=_re.search(r'<div class="media rv in fishwin">.*?</svg>',fishwin('<div class="media rv in"><div></div></div>',img,alt,""),_re.S).group(0)
    return '<div class="nw-fish">'+m.replace('<div class="media rv in fishwin">','<div class="fishwin">')+'</div></div>'
for i,n in enumerate([x for x in NEWS if not x.get('href')]):
    rel=[m for m in NEWS if m is not n][:3]
    body=f'''<article class="sec paper nw-art"><div class="wrap" style="max-width:860px">
  <a class="nw-back rv in" href="news.html">← All news</a>
  <span class="nw-meta rv in"><b>{n["cat"].replace("&","&amp;")}</b> · <time datetime="{n["date"]}">{_ndate(n["date"])}</time></span>
  <h1 class="rv in">{n["title"]}</h1><p class="lead rv in">{n["excerpt"]}</p>
  {_fishfig(n["img"],html.escape(n["title"]))}
  <div class="nw-body">{"".join(f"<p>{x}</p>" for x in n["body"])}</div>
</div></article>
<section class="sec nw-latest"><div class="wrap"><div class="nw-head rv"><div><h2 class="hx label">More news</h2></div><a class="more" href="news.html">All news</a></div>
  <div class="nw-grid">{"".join(ncard(m) for m in rel)}</div></div></section>'''
    page(f"news-{n['slug']}.html",n["title"],n["excerpt"],body)

import sitemap_page as _smp
page("site-map.html","Site map — Gulf Aquaculture","",_smp.body(opener))

write_extras(OUT,[f for f in sorted(os.listdir(OUT)) if f.endswith(".html")])
import slugs as _slugs
_slugs.apply(OUT)
