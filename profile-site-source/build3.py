"""Gulf Aquaculture — website built from the Company Profile (v3). Usage: python3 build3.py OUT"""
import os, sys, shutil, html
OUT=sys.argv[1]; HERE=os.path.dirname(os.path.abspath(__file__))
for d in ("assets/css","assets/js","assets/img"): os.makedirs(f"{OUT}/{d}",exist_ok=True)
shutil.copy(f"{HERE}/site.css",f"{OUT}/assets/css/site.css"); shutil.copy(f"{HERE}/site.js",f"{OUT}/assets/js/site.js")
for f in os.listdir(f"{HERE}/img"): shutil.copy(f"{HERE}/img/{f}",f"{OUT}/assets/img/{f}")
os.makedirs(f"{OUT}/assets/video",exist_ok=True)
for f in os.listdir(f"{HERE}/video"): shutil.copy(f"{HERE}/video/{f}",f"{OUT}/assets/video/{f}")

PAGES=[("about.html","About","01"),("operations.html","Operations","02"),("assets.html","Assets","03"),("species.html","Species","04"),
       ("growth.html","Growth","05"),("people.html","People","06"),("contact.html","Contact","07")]
LOGO='<svg viewBox="0 0 42 42" fill="none" aria-hidden="true"><circle cx="16" cy="21" r="10" stroke="#C8742A" stroke-width="2.4"/><circle cx="26" cy="21" r="10" stroke="#4A2E16" stroke-width="2.4"/><path d="M11 21c2.7-3.2 6-3.2 8.6 0s6 3.2 8.6 0" stroke="#3A9C9A" stroke-width="1.8"/></svg>'
BRAND='<a href="index.html" class="brand" aria-label="Gulf Aquaculture — home"><img src="assets/img/logo.png" alt="Gulf Aquaculture" width="640" height="150"></a>'
BRAND_W='<a href="index.html" class="brand" aria-label="Gulf Aquaculture — home"><img src="assets/img/logo-white.png" alt="Gulf Aquaculture" width="640" height="150"></a>'
FONTS='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins:wght@300;400;500;600&family=Caveat:wght@500;600&display=swap" rel="stylesheet">'
FG_BAND='''<section class="fg" aria-labelledby="fgT">
  <div class="fg-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="fg-head">
      <img class="fg-thumb" src="assets/img/gulf-aquaculture-grouper-juveniles.webp" width="800" height="800" alt="Juvenile grouper in a nursery tub">
      <div><h2 id="fgT">Future Growth</h2>
        <p class="fg-lead">Our vision has always been clear:<br>validate first, then grow with integrity.</p>
        <p class="fg-sub">With Phase II now approved, we’re preparing for the next chapter - one that remains grounded in our core principles.</p></div>
    </div>
    <div class="fg-grid"><div class="fg-col"><h4>Vertical<br>Expansion</h4><div class="fg-rule" aria-hidden="true"><i class="s"></i><i class="b"></i><i class="s"></i></div><p>We’re building more of the value chain - including transport, genetics, and off-take partnerships - to increase resilience and deliver long-term value.</p></div><div class="fg-col"><h4>New<br>Sites</h4><div class="fg-rule" aria-hidden="true"><i class="s"></i><i class="b"></i><i class="s"></i></div><p>Future facilities will be located nationally and regionally, selected based on environmental suitability and alignment with our low-impact model.</p></div><div class="fg-col"><h4>Broodstock<br>Development</h4><div class="fg-rule" aria-hidden="true"><i class="s"></i><i class="b"></i><i class="s"></i></div><p>We’re advancing broodstock lines to improve climate resilience and enable year-round spawning, supporting stable, scalable supply.</p></div><div class="fg-col"><h4>Strategic<br>Partnerships</h4><div class="fg-rule" aria-hidden="true"><i class="s"></i><i class="b"></i><i class="s"></i></div><p>Through public-private collaboration, we aim to contribute to national food security, biodiversity, and the long-term future of Gulf aquaculture.</p></div></div>
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
MAP_BAND='''<section class="mapband" aria-label="Regional footprint">
  <div class="mapband-img"><img src="assets/img/map.jpg" width="1600" height="1686" loading="lazy" alt="Map of Gulf Aquaculture's regional footprint: Abu Dhabi HQ, Balghailam Island and SKMRC in the UAE, juvenile supply in the UAE, Oman, Malaysia and Indonesia"></div>
  <div class="wrap"><p class="mapband-note"><span>Committed to proving that aquaculture</span><br><span>can work - for our waters, for our communities,</span><br><span>and for future generations.</span></p></div>
</section>'''

def page(fn,title,desc,body):
    menu=f'<li><a href="index.html"{" aria-current=\"page\"" if fn=="index.html" else ""}>Home</a></li>'+"".join(f'<li><a href="{h}"{" aria-current=\"page\"" if (h==fn or (h=="species.html" and fn.startswith("species-")) or (h=="assets.html" and fn.startswith("asset-"))) else ""}>{t}</a></li>' for h,t,_ in PAGES if h!="contact.html")
    mnav="".join(f'<a href="{h}"><span>{n}</span>{t}</a>' for h,t,n in PAGES)
    foot_nav="".join(f'<a href="{h}">{t}</a>' for h,t,_ in PAGES)
    out=f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>{title}</title><meta name="description" content="{html.escape(desc)}">
{FONTS}
<link rel="stylesheet" href="assets/css/site.css?v=20261108l">
</head>
<body>
<header class="hdr"><div class="wrap">{BRAND}
  <ul class="menu" aria-label="Main">{menu}</ul>
  <a href="contact.html" class="btn btn-or"{" aria-current=\"page\"" if fn=="contact.html" else ""}>Let's talk</a>
  <button class="burger" type="button" aria-label="Open menu"><span></span></button>
</div></header>
<nav class="mnav" aria-label="Menu"><button class="x" type="button" aria-label="Close menu">×</button><a href="index.html"><span>00</span>Home</a>{mnav}</nav>
<main>
{body}
</main>
{FG_BAND if fn=="growth.html" else ""}{WC_BAND if fn=="growth.html" else ""}{MAP_BAND if fn=="growth.html" else ""}
<footer class="ftr"><div class="ftr-rule" aria-hidden="true"><i class="d s"></i><i class="d b"></i><i class="d s"></i></div><div class="wrap">
  <div class="top">
    <div class="ftr-main">
      <p class="ftr-claim">Let’s build something lasting, together.</p>
      <p class="ftr-links"><a href="https://gulfaquaculture.com">gulfaquaculture.com</a><br><a href="mailto:info@gulfaquaculture.com">info@gulfaquaculture.com</a></p>
      <p class="ftr-addr">7th Floor, East Tower, Abu Dhabi Mall<br>P.O. Box 55345, Abu Dhabi, UAE</p>
    </div>
    <nav class="ftr-nav" aria-label="Footer"><h5>The company</h5>{foot_nav}</nav>
    <div class="ftr-logo">{BRAND}</div>
  </div>
  <div class="bot"><span>© 2026 Gulf Aquaculture</span><span>Concept website built from the GA Company Profile · demo by Kriswa International — not the official site</span></div>
</div></footer>
<script src="assets/js/site.js?v=20261108l"></script>
</body>
</html>'''
    open(f"{OUT}/{fn}","w",encoding="utf-8").write(out)

def opener(no,label,title,lead,img,note,extra=""):
    return f'''<section class="opener paper"><span class="arc"></span><div class="wrap">
  <div class="rv in"><span class="folio"><i></i>{label}</span><h1>{title}</h1><p class="lead">{lead}</p>{extra}</div>
  <div class="media rv in"><div class="img" style="background-image:url(assets/img/{img})" role="img" aria-label="Company Profile photo"></div>{f'<p class="note"><span>{note}</span></p>' if note else ""}</div>
</div></section>'''
def dia(items): return '<ul class="diamonds">'+"".join(f"<li>{i}</li>" for i in items)+"</ul>"

# ========================================================= HOME
home=f'''<section class="xp3d" aria-label="Interactive 3D experience" style="position:relative;height:calc(100svh - 76px);min-height:520px;background:#0b1a24 url(3d/assets/poster.webp) center/cover no-repeat"><iframe style="position:absolute;inset:0;width:100%;height:100%;border:0;display:block" src="3d/" title="Gulf Aquaculture — interactive 3D experience" allow="fullscreen; autoplay; xr-spatial-tracking" allowfullscreen loading="eager"></iframe></section>
<section class="cover">
  <div class="cover-text">
    <span class="folio"><i></i>Company profile · Abu Dhabi, UAE</span>
    <h1><span class="w">Transforming</span><br><span class="w">Aquaculture</span></h1>
    <p class="sub">in the Middle East</p>
    <p class="lead">We exist to make aquaculture work — for our ecosystems, for food security, and for future generations.</p>
    <div class="actions"><a href="#approach" class="btn btn-or">Our approach</a><a href="operations.html" class="btn btn-line" style="color:var(--ink)">How we operate</a></div>
  </div>
  <div class="cover-media"><div class="img" role="img" aria-label="Sea cage at dawn"></div>
    <svg viewBox="0 0 400 400" aria-hidden="true"><circle cx="200" cy="200" r="190"/><circle class="o" cx="200" cy="200" r="160"/></svg>
    <p class="note"><span>This isn't just a job. It's a responsibility to the Gulf.</span></p></div>
</section>

<section class="navy"><div class="wrap nums">
  <div class="num"><b><span data-count="8">0</span><small>%</small></b><span>Annual growth</span><p>Seafood demand in the UAE.</p></div>
  <div class="num"><b><span data-count="900000">0</span><small>t</small></b><span>By 2030</span><p>Expected seafood demand.</p></div>
  <div class="num"><b><span data-count="95">0</span><small>%</small></b><span>Water recycled</span><p>In our hatchery system.</p></div>
  <div class="num"><b><span data-count="20">0</span><small>M+</small></b><span>Fry</span><p>On track to ship to regional clients.</p></div>
</div></section>

<section class="sec"><div class="wrap cols">
  <div class="rv"><span class="label">A region hungry for change</span><h2 style="margin-top:14px">In a region where seafood demand is growing and marine ecosystems are under strain, we believe in a better way.</h2></div>
  <div class="rv"><p class="lead">Simpler, smarter, and grounded in nature.</p><p style="margin-top:18px">Demand for seafood in the UAE is growing at 8% annually, expected to reach 900,000 tonnes by 2030. Yet our local fisheries are in decline, and most aquaculture projects face challenges tied to over-engineered systems and species not suited to Gulf waters.</p>
  <p>Despite significant investment, aquaculture in the UAE has yet to reach its potential. At Gulf Aquaculture, we saw this not as a failure — but an opportunity to rethink, simplify, and rebuild from first principles.</p></div>
</div></section>

<section class="yt-band" aria-label="Gulf Aquaculture video">
  <div class="wrap yt-inner"><div class="rv"><span class="label">An introduction to Gulf Aquaculture</span><h2>Aquaculture, grown in the Gulf.</h2><p>Our sea cages, hatchery, laboratories and the people behind them — in a 7-minute film.</p></div>
  <button type="button" class="yt-open rv" data-yt="QwZ2BvfbzRg" data-start="13" aria-haspopup="dialog"><span class="yt-btn" aria-hidden="true"><span></span></span><span class="yt-txt">Watch the video</span></button></div>
</section>
<div class="yt-modal" id="ytm" role="dialog" aria-modal="true" aria-label="Gulf Aquaculture video"><div class="yt-frame"></div><button type="button" class="yt-x" aria-label="Close video">×</button></div>
<section class="sec paper" id="approach"><span class="arc" style="width:700px;height:700px;left:-380px;bottom:-420px"></span><div class="wrap cols">
  <div class="rv"><span class="label">We're doing things differently</span><h2 style="margin:14px 0 22px">We believe success starts small.</h2><p>Our method is rooted in four pillars.</p>
    <p class="note" style="margin-top:30px;color:var(--ink);font-size:1.35rem">We call this: <span style="color:#fff">Local Species in Local Waters.</span></p></div>
  <ol class="pillars rv">
    <li><span><b>Prioritise native species</b>Like grouper and red snapper.</span></li>
    <li><span><b>Keep upland infrastructure minimal</b>Just hatchery and nursery.</span></li>
    <li><span><b>Move juveniles to sea cages early</b>Reducing energy use.</span></li>
    <li><span><b>Grow gradually</b>Through proof of concept, validation and iteration.</span></li>
  </ol>
</div></section>

<section class="sec"><div class="wrap" style="max-width:980px;text-align:center">
  <span class="label rv">Our vision</span>
  <p class="quote rv" style="margin-top:20px">To nurture a sustainable future by cultivating what thrives naturally, with humility, care, and scientific rigour.</p>
</div></section>

<section class="sec paper" style="padding-top:0;background:none"><div class="wrap">
  <div class="chapters rv">
    <a class="chap" href="about.html"><span class="n">01</span><h3>From vision to operation</h3><p>Our story, mission, principles, legal structure and a conversation with our General Manager.</p><span class="more">Our story</span></a>
    <a class="chap" href="operations.html"><span class="n">02</span><h3>Where innovation meets simplicity</h3><p>Five phases, continuous lab oversight and full traceability.</p><span class="more">Operations</span></a>
    <a class="chap" href="assets.html"><span class="n">03</span><h3>Assets under management</h3><p>Balghailam Island and the Sheikh Khalifa Marine Research Centre.</p><span class="more">Assets</span></a>
    <a class="chap" href="species.html"><span class="n">04</span><h3>Local species, local knowledge</h3><p>Hamour, Hamra, Shiqra, Shaari, Seabream and Umm Drais — native, resilient, well-adapted.</p><span class="more">Species</span></a>
    <a class="chap" href="growth.html"><span class="n">05</span><h3>Built for tomorrow</h3><p>Sustainability in practice, Phase II and our regional footprint.</p><span class="more">Growth</span></a>
    <a class="chap" href="people.html"><span class="n">06</span><h3>The people behind the progress</h3><p>A better future is grown, not guessed.</p><span class="more">People</span></a>
  </div>
</div></section>

<section class="sec navy" style="background:linear-gradient(135deg,rgba(94,58,27,.92),rgba(44,27,12,.96)),url(assets/img/sunset-strip.jpg) center/cover"><div class="wrap cols" style="align-items:center">
  <blockquote class="quote rv">“We're not building a fish farm. We're building trust — in the idea that the UAE can feed itself, responsibly.”<cite>Mohamed Razali · General Manager</cite></blockquote>
  <div class="rv"><p>Every phase is tested before it's scaled. That's how we build trust — with nature and with investors.</p><a href="about.html#interview" class="more" style="margin-top:26px;color:var(--amber)">Read the conversation</a></div>
</div></section>

<section class="sec"><div class="wrap cols" style="align-items:center">
  <div class="rv"><h2>We welcome conversations that move aquaculture forward.</h2></div>
  <div class="rv"><p>Whether you're an investor who shares our long-term vision, a researcher exploring native species, or a policymaker shaping the future of food — we believe progress happens through partnership.</p><a href="contact.html" class="btn btn-or" style="margin-top:26px">Let's talk</a></div>
</div></section>'''
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
about=opener("01","Our story","From Vision<br>to Operation","Gulf Aquaculture began with a simple idea: what if aquaculture were designed for this region, not imported from elsewhere?","vessel.jpg","This isn't just a job. It's a responsibility to the Gulf.")
about+=f'''<section class="sec"><div class="wrap"><span class="label rv">Milestones</span><h2 class="rv" style="margin-top:12px">Validated step by step.</h2>{tl}</div></section>
<section class="sec paper"><div class="wrap cols">
  <div class="rv"><span class="label">Our mission</span><p class="quote" style="margin:16px 0 40px">To advance sustainable aquaculture by proving it can work in harmony with the Gulf's ecosystems and communities.</p>
    <span class="label">Our vision</span><p class="lead" style="margin-top:12px">To nurture a sustainable future by cultivating what thrives naturally, with humility, care, and scientific rigour.</p></div>
  <div class="rv"><span class="label">What we stand for · Our principles</span><ol class="principles" style="margin-top:16px">
    <li>Grow responsibly, not rapidly</li><li>Invest only what we need to learn</li><li>Focus on animal welfare and ecosystem integrity</li><li>Build trust through transparency</li><li>Share knowledge and invite collaboration</li></ol></div>
</div></section>
<section class="sec navy"><div class="wrap cols" style="align-items:center">
  <h2 class="rv">Our role is to serve the sea and the people who depend on it.</h2>
  <div class="rv nums" style="grid-template-columns:1fr 1fr;border:0">
    <div class="num"><b><span data-count="50">0</span><small>% less</small></b><span>Wild Gulf fish stocks since 1990</span><p>We supply seedstock from land-based hatcheries, easing pressure on wild populations.</p></div>
    <div class="num"><b><span data-count="95">0</span><small>%</small></b><span>Of water recycled in our hatchery</span><p>Lower environmental footprint and energy use, aligned with national sustainability goals.</p></div>
  </div></div></section>
<section class="iv" id="interview">
 <div class="iv-left"><span class="arc iv-arc" aria-hidden="true"></span>
  <h2 class="iv-title rv">A Thoughtful<br>Approach to<br>Growth</h2>
  <p class="iv-kicker rv">A conversation with Mohamed Razali, General Manager</p>
  <figure class="iv-photo rv"><img src="assets/img/gulf-aquaculture-razali-portrait.webp" width="640" height="640" alt="Mohamed Razali, General Manager of Gulf Aquaculture" loading="lazy"></figure>
  {"".join(f'<div class="iv-qa rv"><p class="iv-q">Q: {q}</p><p><b class="iv-a">A:</b> {a_}</p></div>' for q,a_ in QA[:3])}
  <p class="note iv-note rv"><span>“Every phase is tested</span><br><span>before it’s scaled. That’s</span><br><span>how we build trust —</span><br><span>with nature and with investors.”</span></p>
  <figure class="iv-site rv"><img src="assets/img/gulf-aquaculture-facility-aerial.webp" width="1000" height="408" alt="Aerial view of the Gulf Aquaculture hatchery on Balghailam Island" loading="lazy"></figure>
 </div>
 <div class="iv-right">
  <blockquote class="iv-quote rv">“We’re not building a fish farm. We’re building trust — in the idea that the UAE can feed itself, responsibly.”<cite>Mohamed Razali</cite></blockquote>
  <div class="iv-rule rv" aria-hidden="true"><i></i><b></b><i></i></div>
  <div class="iv-cols">{"".join(f'<div class="iv-qa rv"><p class="iv-q">Q: {q}</p><p><b class="iv-a">A:</b> {a_}</p></div>' for q,a_ in QA[3:])}</div>
 </div>
</section>'''
page("about.html","Our Story — Gulf Aquaculture","Gulf Aquaculture: story, mission, vision, principles, legal structure and interview.",about)

# ========================================================= OPERATIONS
FEAT=[("Hatchery &amp; Nursery","Controlled environments for larvae and fry.",'<circle cx="8" cy="15" r="3"/><circle cx="14" cy="15" r="3"/><circle cx="20" cy="15" r="2.6"/><circle cx="11" cy="10" r="3"/><circle cx="17" cy="10" r="3"/><circle cx="14" cy="5.5" r="2.6"/>'),
      ("Live Feed Systems","Rotifers, copepods, algae production.",'<path d="M9 12c3-4 8-5 12-1-4 4-9 3-12 1z"/><path d="M21 11l2-3v7z"/><circle cx="4" cy="10" r="1.3"/><circle cx="6" cy="14" r="1"/><circle cx="3" cy="16" r=".8"/>'),
      ("Biosecurity","Closed-loop systems, advanced filtration, and strict protocols.",'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>'),
      ("Laboratories","Water quality and microbiology testing.",'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/>'),
      ("Traceability","SFS Trace system ensures full lifecycle transparency.",'<path d="M4 12h4l2-5 4 10 2-5h4"/>')]
ops=f'''<section class="opx paper"><span class="arc opx-arc" aria-hidden="true"></span><div class="wrap opx-grid">
 <div class="opx-left">
  <h1 class="rv in">Where<br>Innovation<br>Meets Simplicity</h1>
  <p class="opx-kicker rv in">Our operations</p>
  <p class="lead rv in">We designed our facilities to do one thing well: raise healthy fish in sustainable, replicable systems.</p>
  <figure class="opx-photo rv"><img src="assets/img/gulf-aquaculture-lab-technician.webp" width="1008" height="676" alt="Laboratory technician testing water samples" loading="lazy">
   <p class="note opx-note"><span>Good water quality</span><br><span>isn’t an output. It’s a</span><br><span>daily practice.</span></p></figure>
 </div>
 <ol class="opx-feat">{"".join(f'<li class="rv"><svg viewBox="0 0 24 24" aria-hidden="true">{i}</svg><h3>{t}:</h3><p>{d}</p></li>' for t,d,i in FEAT)}</ol>
</div></section>
<section class="opb" id="cycle"><div class="wrap">
 <div class="opb-text">
  <div class="rv"><p>Each stage of our operation reflects a clear purpose and a shared responsibility to the Gulf. In the hatchery, our teams begin early — checking water parameters, preparing live feed cultures, and monitoring larval development. This work is methodical and essential, creating the foundation for healthy fish and healthy ecosystems.</p>
   <p>As fry grow, they are transitioned to nursery tanks and eventually to sea cages, where they continue to mature in conditions that mimic their natural habitat. This low-impact approach is not only efficient — it respects the Gulf’s unique marine environment by working in harmony with it, rather than forcing artificial outcomes.</p></div>
  <div class="rv"><p>Behind the scenes, our laboratory teams track microbial health, monitor water quality, and ensure every fish can be traced from broodstock to harvest. Our systems reduce energy usage, recycle water, and eliminate the need for unnecessary antibiotics. Every step is intentional, designed to reduce stress on fish — and on the environment.</p>
   <p class="note opb-note"><span>Our systems are modular and</span><br><span>repeatable — ready to be replicated</span><br><span>across future sites.</span></p></div>
 </div>
 <div class="opb-cycle"><p class="opb-hint rv">Select a phase around the cage — from broodstock to distribution, under continuous lab oversight.</p>
  <div class="ops"><div class="ring rv" id="ring"></div>
   <div class="ph-card rv"><div id="phCard" aria-live="polite"></div><div class="ph-nav"><button type="button" id="phPrev" aria-label="Previous phase">←</button><button type="button" id="phNext" aria-label="Next phase">→</button></div></div></div></div>
</div></section>'''
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
  <div class="photo" style="background-image:url(assets/img/skmrc.jpg);margin-top:26px;min-height:260px" role="img" aria-label="SKMRC — rendering from the Company Profile"></div></div>
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
gr=opener("05","Sustainability in practice","Built for<br>Tomorrow","At Gulf Aquaculture, sustainability isn’t an add-on — it’s built into the way we think, work, and grow. From the design of our hatcheries to the resilience of our broodstock, every decision is made with tomorrow in mind.","sunset-tall.jpg","",'<p class="statement">We don’t just raise fish. We raise the bar for what aquaculture can be — for people, planet, and prosperity.</p>')
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
 ("team-finnbogi.jpg","Finnbogi Baldvinsson","Industry Advisor","Finnbogi Baldvinsson is a senior seafood industry leader with over 30 years of global executive and board-level experience in wild capture fisheries, processing and aquaculture. He has built, restructured and led major seafood businesses across Europe, the Americas, Asia and MENA."),
 ("team-andrew.jpg","Andrew Leingang","Aquaculture Consultant","Andrew is a veteran advisor with 50 years of experience. Formerly GM at GFB Fisheries in Australia, he supports Gulf Aquaculture with technical oversight and operational planning.")]
people=opener("06","Our team","The People Behind<br>the Progress","Our team is a diverse group of scientists, technicians, strategists, and aquaculture practitioners — each united by a shared belief: that a better future is grown, not guessed.","aerial.jpg","A better future is grown, not guessed.")
people+='<section class="sec"><div class="wrap"><div class="people">'+"".join(f'<button type="button" class="person rv" aria-haspopup="dialog" data-img="assets/img/{k}" data-name="{html.escape(n)}" data-role="{html.escape(r)}" data-bio="{html.escape(b)}"><span class="ph" aria-hidden="true"><img src="assets/img/{k}" width="227" height="246" alt="" loading="lazy"><span class="ph-plus">+</span></span><span class="p-name">{n}</span><span class="p-role">{r}</span><span class="p-ex">{html.escape(b)}</span><span class="p-more">Read profile <span aria-hidden="true">→</span></span></button>' for k,n,r,b in TEAM)+'</div></div></section>'
people+='<div class="bio" id="bio" role="dialog" aria-modal="true" aria-labelledby="bioN"><div class="bio-card"><button class="x" type="button" aria-label="Close">×</button><div class="bio-head"><span class="ph bio-ph" aria-hidden="true"><img id="bioI" src="" alt=""></span><div><h3 id="bioN"></h3><span class="bio-role" id="bioK"></span></div></div><p id="bioT"></p></div></div>'
page("people.html","People — Gulf Aquaculture","The team behind Gulf Aquaculture.",people)

# ========================================================= CONTACT
contact=f'''<section class="sec paper"><span class="arc" style="width:760px;height:760px;right:-320px;top:-360px"></span><div class="wrap contact-grid">
  <div class="rv"><span class="folio"><i></i>Contact</span><h1 style="margin:14px 0 18px">We welcome conversations that move aquaculture forward.</h1>
    <p>Whether you're an investor who shares our long-term vision, a researcher exploring native species, or a policymaker shaping the future of food — we believe progress happens through partnership.</p>
    <p>We're building more than a business. We're building trust, resilience, and a model that others can build on. If that resonates with you, we'd love to hear from you.</p>
    <dl class="dl"><dt>Email</dt><dd>info@gulfaquaculture.com</dd><dt>Website</dt><dd>gulfaquaculture.com</dd><dt>Head office</dt><dd>7th Floor, East Tower, Abu Dhabi Mall<br>P.O. Box 55345, Abu Dhabi, UAE</dd><dt>AUM</dt><dd>1. Balghailam Island<br>2. Sheikh Khalifa Marine Research Centre</dd></dl></div>
  <form class="form rv" id="form" novalidate><h3 style="font-size:1.5rem">Let's build something lasting, together.</h3>
    <p class="legend" style="margin-top:22px">I am… (tick all that apply)</p>
    <div class="who">
      <label><input type="checkbox" value="investor">An investor</label><label><input type="checkbox" value="research">A researcher</label>
      <label><input type="checkbox" value="policy">A policymaker</label><label><input type="checkbox" value="partner">A partner or client</label></div>
    <div class="row2"><div class="fld"><label for="n">Name *</label><input id="n" autocomplete="name"></div><div class="fld"><label for="o">Organisation</label><input id="o" autocomplete="organization"></div></div>
    <div class="row2"><div class="fld"><label for="e">Email *</label><input id="e" type="email" autocomplete="email"></div><div class="fld"><label for="p">Phone</label><input id="p" type="tel" autocomplete="tel"></div></div>
    <div class="fld"><label for="m">Message</label><textarea id="m"></textarea></div>
    <label class="consent"><input type="checkbox" id="c">I agree that Gulf Aquaculture may use my details to reply to this message. *</label>
    <button class="btn btn-or" type="submit">Send message</button><div class="msg" id="msg" role="status"></div></form>
</div></section>'''
page("contact.html","Contact — Gulf Aquaculture","Contact Gulf Aquaculture — head office in Abu Dhabi.",contact)
open(f"{OUT}/README.md","w").write("# Gulf Aquaculture — website built from the Company Profile (v3)\n\nStatic HTML, 8 pages following the brochure's chapters. Open index.html. All texts, figures and photos come from the GA Company Profile; portraits and missing species photos to be supplied. Demo by Kriswa International.\n")
print("built",sorted(f for f in os.listdir(OUT) if f.endswith(".html")))
