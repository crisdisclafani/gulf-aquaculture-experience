# Video per species: add "video": ("file.mp4","poster.webp") to a species to override the default.
DEFAULT_VIDEO=("gulf-aquaculture-video-hamour.mp4","hamour-grouper-coral-reef-video-poster.webp")
TBS='<span class="tbs">To be supplied by Gulf Aquaculture</span>'
SPECIES=[
 dict(k="hamour",local="Hamour",en="Orange-spotted Grouper",sci="Epinephelus coioides",status="In production",img="gulf-aquaculture-fish-hamour.webp",hands=None,
  blurb="A high-value, slow-growing species prized in regional cuisine.",
  bio="A high-value species with firm texture, strong market pricing and cultural importance across the GCC and Asia.",
  hab="Native to regional waters. Found across the Indo-West Pacific, including the Arabian Gulf, around coastal reefs, estuaries and mangrove areas.",
  tol="As a regional native it tolerates local salinity and temperature ranges well, reducing biological risk for downstream farms.",
  farm="Commonly stocked in marine cage systems. A slow-growing species with premium market value.",
  prod="Fry are produced through controlled broodstock, larval and nursery phases — supporting consistent size grading, stable early feeding and smooth transfer into nursery tanks or sea cages.",
  fry=["Pilot facility (2024): annual capacity of 2 million larvae and fry","First sale of Hamour fry to the local market in 2024","Grouper juveniles supplied to a local company since 2024 — projected 7 million/year by 2026 (with Red Snapper)","Indonesia hatchery with Aquagrow International: 300,000 fry/month, launching 2026"]),
 dict(k="hamra",local="Hamra",en="Malabar Red Snapper",sci="Lutjanus malabaricus",status="In production",img="gulf-aquaculture-fish-hamra.webp",hands=None,
  blurb="A hardy and fast-growing species ideal for sea cage culture.",
  bio="A hardy warm-water species with favourable growth characteristics and attractive culinary traits.",
  hab="Found across the Indo-West Pacific, including the Arabian Gulf, on coastal and offshore reef grounds.",
  tol=None,
  farm="Suited to low-density cage systems and well-managed land-based systems, with efficient feed conversion and predictable harvest values. Strong commercial acceptance in Middle Eastern markets.",
  prod="Fry are reared with live feed systems and microbiology monitoring during the larval phase, supporting stable development through the most sensitive early growth stages.",
  fry=["Grouper and Red Snapper hatchery and nursery at Balghailam Island","Red Snapper juveniles supplied to a local company since 2024 — projected 7 million/year by 2026 (with Grouper)","Malaysia hatchery with Aquagrow International: 1 million fry/month since 2023","Oman: Red Snapper and Seabream fry supply agreement from Dec 2025"]),
 dict(k="shiqra",local="Shiqra",en="Mangrove Red Snapper",sci="Lutjanus argentimaculatus",status="In production",img="gulf-aquaculture-fish-shiqra.webp",hands=None,
  blurb="A hardy warm-water snapper with strong commercial acceptance in Middle Eastern markets.",
  bio="A hardy warm-water species with favourable growth characteristics and attractive culinary traits.",
  hab="Juveniles live in mangrove estuaries and river mouths; adults move to coastal and offshore reefs across the Indo-West Pacific.",
  tol=None,
  farm="Suited to low-density cage systems and well-managed land-based systems, with efficient feed conversion and predictable harvest values.",
  prod="Fry are reared with live feed systems and microbiology monitoring during the larval phase, supporting stable development through the most sensitive early growth stages.",
  fry=None),
 dict(k="shaari",local="Shaari",en="Spangled Emperor",sci="Lethrinus nebulosus",status="Core species",img="gulf-aquaculture-fish-shaari.webp",hands=None,
  blurb="A premium reef fish valued for its delicate flavour, strong market demand, and adaptability to warm-water aquaculture.",
  bio="A premium reef fish valued for its delicate flavour and strong market demand.",
  hab="Distributed from East Africa to southern Japan, around Australia, the Red Sea and the Arabian Gulf, over coral reefs, rocky reefs and sandy habitats.",
  tol="Adaptable to warm-water aquaculture.",
  farm=None,prod=None,fry=None),
 dict(k="seabream",local="Seabream",en="Sobaity Seabream",sci="Sparidentex hasta · Sparus aurata and regional warm-water variants",status="In production",img="gulf-aquaculture-fish-seabream.webp",hands=None,
  blurb="One of the most commonly farmed marine species in the region, with well-understood farming protocols.",
  bio="An established species with strong culinary acceptance across the GCC, the Mediterranean and parts of Asia.",
  hab="Established across the GCC, the Mediterranean and parts of Asia.",
  tol="Prefers slightly cooler temperatures than Grouper and Snapper.",
  farm="One of the most commonly farmed marine species in the region, with well-understood farming protocols. Fry support mixed-species farms, retail supply chains and hospitality customers.",
  prod=None,
  fry=["Oman: 50 tonnes/month of Seabream","Oman: Red Snapper and Seabream fry supply agreement from Dec 2025"]),
 dict(k="umm-drais",local="Umm Drais",en="Red snapper",sci=None,status="Under evaluation",img="gulf-aquaculture-fish-umm-drais.webp",hands=None,
  blurb="A Gulf red snapper presented alongside our core species.",
  bio=None,hab=None,tol=None,farm=None,prod=None,fry=None),
]
OUTLINE='<svg class="sp-outline" viewBox="0 0 200 90" fill="none" aria-hidden="true"><path d="M14 45C44 10 110 6 152 45 110 84 44 80 14 45Z"/><path d="M152 45l40-28v56l-40-28Z"/><circle cx="42" cy="40" r="3"/></svg>'

def fishimg(d, cls="sp-fish"):
    if d["img"]:
        return f'<img class="{cls}" src="assets/img/{d["img"]}" alt="{d["local"]} ({d["en"]})" loading="lazy">'
    return OUTLINE + '<span class="sp-nophoto">Photo to be supplied</span>'

FISHWIN=None
def species_index(opener, dia):
    sp = opener("04","Native Gulf species","Local Species.<br>Local Knowledge.","We focus exclusively on native Gulf species — resilient, well-adapted, and ecologically appropriate.","hamour-orange-spotted-grouper-gulf-aquaculture.jpg","")
    sp = FISHWIN(sp, "hamour-grouper-coral-reef-video-poster.webp", "Grouper swimming over a Gulf coral reef", "We don’t adapt species to our systems. We build systems around our species.")
    cards = "".join(
        f'<a class="sp-card rv" href="species-{d["k"]}.html"><span class="sp-stage">{fishimg(d)}<span class="sp-wave" aria-hidden="true"></span></span>'
        f'<span class="sp-status">{d["status"]}</span><h3 class="sp-local">{d["local"]}</h3><span class="sp-en">{d["en"]}</span>'
        f'<span class="sp-sci">{d["sci"] or "Scientific name TBC"}</span><span class="sp-blurb">{d["blurb"]}</span>'
        f'<span class="sp-go">Explore species <span aria-hidden="true">→</span></span></a>' for d in SPECIES)
    sp += ('<section class="sec spx"><div class="wrap"><h2 class="hx spx-kicker rv">Our core species:</h2>'
           '<p class="spx-hint rv">Select a species to explore its biology, farming characteristics and fry availability.</p>'
           f'<div class="sp-grid">{cards}</div>'
           '<div class="sp-prog rv"><div><h2 class="hx label">Other species &amp; development programmes</h2><h3>Broodstock development</h3>'
           '<p>We’re advancing broodstock lines to improve climate resilience and enable year-round spawning, supporting stable, scalable supply.</p></div>'
           '<div>' + dia(["Broodstock management and spawning","Larval development and live-feed systems","Nursery and fry conditioning"]) +
           f'<p class="tbs-wrap">Further development species: {TBS}</p></div></div></div></section>')
    return sp

def spec(title, val):
    if isinstance(val, list):
        body = '<ul class="diamonds">' + "".join(f"<li>{x}</li>" for x in val) + "</ul>"
    else:
        body = f"<p>{val}</p>" if val else f"<p>{TBS}</p>"
    return f'<div class="spec rv"><h3>{title}</h3>{body}</div>'

def species_pages(page):
    for n, d in enumerate(SPECIES):
        prv = SPECIES[n-1]; nxt = SPECIES[(n+1) % len(SPECIES)]
        q = d["local"].replace(" ", "+")
        names = [f'<b>{d["local"]}</b> — local name', f'{d["en"]} — common name',
                 (f'<i>{d["sci"]}</i> — scientific name' if d["sci"] else f'Scientific name: {TBS}')]
        hands = (f'<figure class="spec rv sp-hands"><img src="assets/img/{d["hands"]}" alt="{d["local"]} held in two hands" loading="lazy"><figcaption>From our hatchery</figcaption></figure>' if d["hands"] else "")
        vid, vposter = d.get("video", DEFAULT_VIDEO)
        vcap = "" if "video" in d else "Placeholder video — species-specific footage to follow."
        sci = f'<i>{d["sci"]}</i>' if d["sci"] else "Scientific name to be confirmed"
        body = f'''<section class="sph paper"><span class="arc" style="width:820px;height:820px;right:-300px;top:-420px"></span><div class="wrap sph-grid">
 <div class="rv in"><a class="sph-back" href="species.html"><span aria-hidden="true">←</span> All species</a>
  <span class="folio"><i></i>Species · {n+1:02d} / {len(SPECIES):02d}</span>
  <h1><span class="sph-local">{d["local"]}</span> <span class="sph-en">{d["en"]}</span></h1><p class="sph-sci">{sci}</p>
  <span class="sp-status">{d["status"]}</span><p class="lead" style="margin-top:22px">{d["blurb"]}</p>
  <a class="btn btn-or" href="contact.html?species={q}#partner" style="margin-top:26px">Enquire about {d["local"]} fry <span aria-hidden="true">→</span></a></div>
 <div class="sph-media rv in"><span class="sph-band" aria-hidden="true"></span>{fishimg(d, "sph-fish")}</div>
</div></section>
<section class="sp-video"><div class="wrap"><div class="sp-video-head rv"><span class="label">Species in motion</span><h2>{d["local"]}, from hatchery to sea</h2></div>
<figure class="sp-player rv"><video class="sp-vid" src="assets/video/{vid}" poster="assets/img/{vposter}" muted loop playsinline preload="none" aria-label="Video: {d["local"]} ({d["en"]})"></video>
<button type="button" class="sp-play" aria-label="Play video with sound"><span aria-hidden="true"></span></button>
<figcaption>{vcap}</figcaption></figure></div></section>
<section class="sec"><div class="wrap"><div class="spec-grid">
 {spec("Scientific &amp; common names", names)}
 {spec("Biological characteristics", d["bio"])}
 {spec("Natural habitat &amp; distribution", (d["hab"] or "") + f' <a class="more" href="species.html?sp={d["k"]}#distribution">See it on the distribution map</a>')}
 {spec("Environmental tolerances", d["tol"])}
 {spec("Commercial farming characteristics", d["farm"])}
 {spec("Production methodology", d["prod"])}
 {spec("Fry availability &amp; specifications", d["fry"])}
 {hands}
</div></div></section>
<section class="sp-cta"><div class="wrap"><div><span class="label">Fry orders &amp; availability</span><h2>Interested in {d["local"]} fry?</h2><p>Tell us about your farm, volumes and timing — our team will reply with availability and specifications.</p></div>
 <a class="btn btn-or" href="contact.html?species={q}#partner">Send an enquiry <span aria-hidden="true">→</span></a></div></section>
<nav class="sp-pn wrap" aria-label="Other species"><a href="species-{prv["k"]}.html"><span>← Previous</span><b>{prv["local"]}</b></a><a href="species.html" class="sp-all">All species</a><a href="species-{nxt["k"]}.html" class="sp-next"><span>Next →</span><b>{nxt["local"]}</b></a></nav>'''
        page(f'species-{d["k"]}.html', f'{d["local"]} ({d["en"]}) — Gulf Aquaculture',
             f'{d["en"]}: biology, farming characteristics and fry availability at Gulf Aquaculture.', body)
