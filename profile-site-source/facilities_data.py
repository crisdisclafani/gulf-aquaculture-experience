FACILITIES = [
 dict(k="balghailam", name="Balghailam Island", title="Assets Under Management —<br>Balghailam Island",
  short="Our proof-of-concept hatchery: compact, biosecure and replicable — 6,000 m² of hatchery space.",
  intro="Instead of scaling vertically or chasing complexity, we’ve built a system aligned with nature — focused on fish health, biosecurity, and operational reliability. Compact, efficient, and replicable — our facility is a model for sustainable marine hatcheries in the region.",
  hero="aerial.jpg", photo="gulf-aquaculture-team-balghailam-island-hatchery.webp", photo_alt="Gulf Aquaculture hatchery team at Balghailam Island, Abu Dhabi",
  stats=["6,000 m² of hatchery space","Dedicated rooms for live feed and algae production","Integrated RAS &amp; flow-through systems",
         "Automated filtration, UV sterilisation, and real-time water quality sensors","Biosecure broodstock housing and spawning zones",
         "Modular nursery capacity for phased growth","Fully equipped lab for water quality and microbiology"],
  card_title="Systems That<br>Support People",
  card=[("Dry Lab &amp; Traceability Systems","Supports planning and analytics, integrated with SFS Trace to track fish from broodstock to harvest."),
        ("Staff Facilities","Dedicated spaces for welfare, training, and teamwork — helping ensure consistent operations and a healthy working environment.")],
  blocks=[
   ("Hatchery infrastructure","The hatchery is equipped with fully integrated systems that support each life stage of marine finfish, ensuring optimal conditions from broodstock to juvenile.",
    [("Broodstock Management","Four 20 m³ tanks hold genetically diverse broodstock, conditioned for Gulf waters. Climate-controlled rooms support consistent spawning, including off-season cycles."),
     ("Larval Rearing Systems","Eight 10 m³ tanks provide stable environments for early-stage development — ensuring strong survival, growth, and low-stress rearing."),
     ("Nursery Operations","Twenty-four 10 m³ tanks prepare juveniles for sea cages, with minimal handling and high health standards maintained throughout.")]),
   ("Sustainable feed systems",None,
    [("Live Feed Production","Three 2 m³ tanks produce rotifers and copepods — essential natural feed that supports high survival and early growth."),
     ("Algae Cultivation","Eight outdoor tanks grow <em>Nannochloropsis</em> sp., forming the foundation of our live feed system and supporting fish health from the start.")]),
   ("Laboratories and diagnostics",None,
    [("Water Quality &amp; Microbiology Labs","Our on-site lab monitors water quality and fish health. Two functional areas track key parameters and identify pathogens early."),
     ("Microbial Testing Capabilities Include:",["CFU counts","Microbial cultivation","Wet mounts","Antibiograms for treatment guidance"])]),
  ],
  plan="gulf-aquaculture-balghailam-plan.webp", plan_title="Site layout", plan_caption="Hatchery &amp; nursery tanks, live feed, broodstock tanks, microbiology labs and support buildings."),
 dict(k="skmrc", name="Sheikh Khalifa Marine Research Centre", title="Sheikh Khalifa<br>Marine Research Centre",
  short="Operated by GA since November 2025 — the pinnacle of Middle Eastern hatchery technology, with ≈18,000 m² in two production streams.",
  intro="GA has been operating the Sheikh Khalifa Marine Research Centre [SKMRC] since November 2025. This asset represents the pinnacle of Middle Eastern hatchery technology and design.",
  hero="skmrc.jpg", photo="sheikh-khalifa-marine-research-centre-rendering-gulf-aquaculture.webp", photo_alt="Aerial rendering of the Sheikh Khalifa Marine Research Centre (SKMRC) and Marine Innovation Park, operated by Gulf Aquaculture in the UAE",
  stats=["Fourteen dedicated laboratories provisioned for compliance with ISO/IEC 17025 international standards for testing and calibration laboratory competence",
         "1,200 m² of office space","Fully furnished staff canteen and academic spaces"],
  card_title="Innovation at<br>its heart.",
  card=[("The Marine Innovation Park","In addition to hatchery and nursery facilities, SKMRC also hosts an innovation park complete with 14 laboratories and a science discovery division suitable for research and younger audiences.")],
  blocks=[
   ("Hatchery infrastructure","Approximately 18,000 m² of aquaculture hatchery space, dedicated in two production streams known as phase one and phase two.",
    [("Broodstock Management","In SKMRC the team manages and breeds the following broodstocks: Seabream, Hamour, Shaari, Mangrove Snapper, Mullet, Cobia, and Naisrah."),
     ("Larval Rearing Systems",["Production of 3 species throughout the year","Annual production capacity of 20+ million larvae"]),
     ("Nursery Operations",["Currently focusing on Hamour, Red Snapper and Shaari","Target production of 20 million fry in 2026"])]),
   ("Sustainable feed systems",None,
    [("Live Feed Production",["Rotifers","Artemia","Copepods"]),
     ("Algae Cultivation",["7 species of live algae production, year-round"])]),
   ("Laboratories and diagnostics",None,
    [("Microbial Testing Capabilities Include:",["Viruses","Bacteria","Parasites","Water quality parameters"])]),
  ],
  plan="gulf-aquaculture-skmrc-plan.webp", plan_title="Phase 01 · Phase 02", plan_caption="Hatchery, broodstock, nursery &amp; weaning buildings with plant rooms, header tanks and generator rooms."),
]


def _items(lst, dia):
    out = ""
    for h, body in lst:
        out += f'<h3 class="fx-h3">{h}</h3>' + (dia(body) if isinstance(body, list) else f"<p>{body}</p>")
    return out


def facilities_index(opener, dia):
    a = opener("03", "Assets under management", "Two assets.<br>One model.",
               "Balghailam Island and the Sheikh Khalifa Marine Research Centre — compact, biosecure and replicable.",
               "aerial.jpg", "Systems that support people.")
    cards = "".join(
        f'<a class="fa-card rv" href="asset-{f["k"]}.html"><span class="fa-img"><img src="assets/img/{f["photo"]}" alt="{f["photo_alt"]}" loading="lazy"></span>'
        f'<span class="fa-body"><span class="fa-n">{i+1:02d}</span><span class="fa-name">{f["name"]}</span><span class="fa-short">{f["short"]}</span>'
        f'<span class="sp-go">Explore the facility <span aria-hidden="true">→</span></span></span></a>'
        for i, f in enumerate(FACILITIES))
    a += (f'<section class="sec"><div class="wrap"><p class="spx-kicker rv">Our facilities:</p>'
          f'<p class="spx-hint rv">Select a facility to see its infrastructure, feed systems, laboratories and site layout.</p>'
          f'<div class="fa-grid">{cards}</div></div></section>')
    return a


def facility_pages(page, dia):
    for n, f in enumerate(FACILITIES):
        other = FACILITIES[(n + 1) % len(FACILITIES)]
        cols = "".join(
            f'<div class="fx-col rv"><h2 class="fx-h2">{t}</h2>{f"<p>{lead}</p>" if lead else ""}{_items(items, dia)}</div>'
            for t, lead, items in f["blocks"])
        card = "".join(f'<h3 class="fx-h3">{h}</h3><p>{p}</p>' for h, p in f["card"])
        body = f'''<section class="sph paper"><span class="arc" style="width:820px;height:820px;right:-300px;top:-420px"></span><div class="wrap">
 <a class="sph-back rv in" href="assets.html"><span aria-hidden="true">←</span> All assets</a>
 <span class="folio rv in"><i></i>Assets under management · {n+1:02d} / {len(FACILITIES):02d}</span>
 <h1 class="fx-title rv in">{f["title"]}</h1><p class="lead fx-intro rv in">{f["intro"]}</p></div></section>
<section class="fx-band"><div class="wrap fx-band-grid">
 <div class="fx-card rv"><p class="fx-script">{f["card_title"]}</p>{card}</div>
 <div class="fx-side rv"><figure class="fx-photo"><img src="assets/img/{f["photo"]}" alt="{f["photo_alt"]}" loading="lazy"></figure>
  <p class="fx-script fx-script-w">Key Stats</p>{dia(f["stats"])}</div>
</div></section>
<section class="sec"><div class="wrap fx-cols">{cols}</div></section>
<section class="sec paper fx-plan-sec"><div class="wrap"><div class="fx-plan-head rv"><span class="label">Site plan</span><h2>{f["plan_title"]}</h2><p>{f["plan_caption"]}</p></div>
 <a class="fx-plan rv" href="assets/img/{f["plan"]}" target="_blank" rel="noopener" aria-label="Open the {f["name"]} site plan full size"><img src="assets/img/{f["plan"]}" alt="{f["name"]} site plan: {f["plan_caption"]}" loading="lazy"><span class="fx-zoom" aria-hidden="true">⤢ View full size</span></a></div></section>
<section class="sp-cta"><div class="wrap"><div><span class="label">Visits &amp; partnerships</span><h2>Interested in {f["name"]}?</h2><p>Government, research and commercial partners are welcome to get in touch about collaboration and site visits.</p></div>
 <a class="btn btn-or" href="contact.html#partner">Get in touch <span aria-hidden="true">→</span></a></div></section>
<nav class="sp-pn wrap" aria-label="Other facilities"><a href="assets.html"><span>← Back</span><b>All assets</b></a><span></span><a href="asset-{other["k"]}.html" class="sp-next"><span>Next facility →</span><b>{other["name"]}</b></a></nav>'''
        page(f'asset-{f["k"]}.html', f'{f["name"]} — Gulf Aquaculture', f'{f["name"]}: hatchery infrastructure, feed systems, laboratories and site plan.', body)
