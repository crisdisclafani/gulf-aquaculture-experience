# SEO / GEO layer: titles, meta descriptions, canonical, Open Graph, JSON-LD, sitemap, robots, llms.txt
import json, html

# Demo host. At launch switch BASE to "https://gulfaquaculture.com/" and remove the noindex meta.
BASE = "https://crisdisclafani.github.io/gulf-aquaculture-experience/profile-site/"
ORG = "Gulf Aquaculture"
DEFAULT_IMG = "gulf-aquaculture-offshore-sea-cage-dawn-black-white.webp"

# fn: (title, meta description, og image, breadcrumb label)
META = {
 "index.html": ("Gulf Aquaculture | Native Fish Hatchery & Fry Supplier in Abu Dhabi, UAE",
   "Gulf Aquaculture raises native Gulf species — Hamour, red snappers, Shaari and Seabream — from broodstock to fry in Abu Dhabi. Local species in local waters.", DEFAULT_IMG, None),
 "about.html": ("About Gulf Aquaculture | Our Story, Mission & Principles — Abu Dhabi",
   "Founded in 2023 as a joint venture in Abu Dhabi, Gulf Aquaculture manages the largest hatchery in the Gulf and is on track to ship 20M+ fry. Story, mission and leadership.", "mohamed-razali-gulf-aquaculture-founder-with-fish.webp", "About"),
 "operations.html": ("Aquaculture Operations | Hatchery, Live Feed, Biosecurity & Traceability",
   "How Gulf Aquaculture raises healthy fish: hatchery & nursery, live feed, biosecurity, water-quality labs and SFS Trace traceability — five phases from broodstock to distribution.", "gulf-aquaculture-lab-technician.webp", "Operations"),
 "assets.html": ("Aquaculture Facilities in the UAE | Balghailam Island & SKMRC Hatcheries",
   "Gulf Aquaculture's assets under management: the Balghailam Island hatchery and the Sheikh Khalifa Marine Research Centre (SKMRC) — compact, biosecure and replicable.", "sheikh-khalifa-marine-research-centre-rendering-gulf-aquaculture.webp", "Assets"),
 "asset-balghailam.html": ("Balghailam Island Hatchery, Abu Dhabi | Gulf Aquaculture",
   "6,000 m² marine finfish hatchery on Balghailam Island: broodstock, larval rearing and nursery tanks, live feed, algae and microbiology labs. Explore the interactive site plan.", "gulf-aquaculture-team-balghailam-island-hatchery.webp", "Balghailam Island"),
 "asset-skmrc.html": ("Sheikh Khalifa Marine Research Centre (SKMRC) | Gulf Aquaculture",
   "SKMRC, operated by Gulf Aquaculture since 2025: ≈18,000 m² of hatchery in two phases, 14 ISO/IEC 17025 laboratories and the Marine Innovation Park. Target 20M fry in 2026.", "sheikh-khalifa-marine-research-centre-phase01-02.webp", "Sheikh Khalifa Marine Research Centre"),
 "species.html": ("Native Gulf Fish Species | Hamour, Snapper, Shaari & Seabream Fry",
   "Native, resilient species for Gulf aquaculture: Hamour (orange-spotted grouper), Hamra and Shiqra snappers, Shaari, Sobaity seabream and Umm Drais. Fry availability on request.", "gulf-aquaculture-fish-hamour.webp", "Species"),
 "species-hamour.html": ("Hamour Fry Supplier UAE | Orange-spotted Grouper (Epinephelus coioides)",
   "Hamour (Epinephelus coioides) hatchery fry from Gulf Aquaculture, Abu Dhabi: biology, farming in sea cages, production methodology and fry availability for UAE and GCC farms.", "gulf-aquaculture-fish-hamour.webp", "Hamour"),
 "species-hamra.html": ("Hamra Fry | Malabar Red Snapper (Lutjanus malabaricus) — Gulf Aquaculture",
   "Malabar red snapper (Hamra) fry: a hardy, fast-growing species for sea cage culture. Biology, farming characteristics and fry supply from Gulf Aquaculture in the UAE.", "gulf-aquaculture-fish-hamra.webp", "Hamra"),
 "species-shiqra.html": ("Shiqra Fry | Mangrove Red Snapper (Lutjanus argentimaculatus)",
   "Mangrove red snapper (Shiqra): a hardy warm-water species for low-density cages and land-based systems. Biology, production and fry enquiries — Gulf Aquaculture, UAE.", "gulf-aquaculture-fish-shiqra.webp", "Shiqra"),
 "species-shaari.html": ("Shaari | Spangled Emperor (Lethrinus nebulosus) — Gulf Aquaculture",
   "Shaari (spangled emperor), a premium Gulf reef fish with strong market demand and adaptability to warm-water aquaculture. Species profile by Gulf Aquaculture.", "gulf-aquaculture-fish-shaari.webp", "Shaari"),
 "species-seabream.html": ("Sobaity Seabream Fry UAE | Gulf Aquaculture",
   "Sobaity seabream: one of the most commonly farmed marine species in the Gulf. Farming protocols, fry supply for mixed-species farms and the Oman supply agreement.", "gulf-aquaculture-fish-seabream.webp", "Seabream"),
 "species-umm-drais.html": ("Umm Drais | Gulf Red Snapper — Gulf Aquaculture",
   "Umm Drais, a Gulf red snapper under evaluation by Gulf Aquaculture's broodstock development programme in Abu Dhabi.", "gulf-aquaculture-fish-umm-drais.webp", "Umm Drais"),
 "growth.html": ("Sustainability, Legal Structure & Growth | Gulf Aquaculture",
   "Built for tomorrow: Gulf Aquaculture's sustainability approach, ownership structure, Phase II expansion and regional footprint across the UAE, Oman, Malaysia and Indonesia.", "gulf-aquaculture-sea-cages-sunset-arabian-gulf.webp", "Growth"),
 "people.html": ("Our Team | Aquaculture Experts Behind Gulf Aquaculture, Abu Dhabi",
   "Meet the scientists, hatchery managers, engineers and advisors of Gulf Aquaculture — over 200 years of combined aquaculture experience across the Gulf, Asia and Africa.", "gulf-aquaculture-team-balghailam-island-hatchery.webp", "People"),
 "contact.html": ("Contact Gulf Aquaculture | Fry Orders, Partnerships & Research — Abu Dhabi",
   "Contact Gulf Aquaculture in Abu Dhabi for fry orders, commercial aquaculture, government and investment partnerships, or research collaboration at SKMRC.", DEFAULT_IMG, "Contact"),
 "privacy.html": ("Privacy Policy | Gulf Aquaculture",
   "How Gulf Aquaculture LLC collects, uses and protects personal data submitted through this website, in line with UAE PDPL and GDPR.", DEFAULT_IMG, "Privacy policy"),
 "cookies.html": ("Cookie Policy | Gulf Aquaculture",
   "Which cookies and local storage this website uses, how YouTube videos are embedded, and how to manage your preferences.", DEFAULT_IMG, "Cookie policy"),
}

ADDRESS = {"@type": "PostalAddress", "streetAddress": "7th Floor, East Tower, Abu Dhabi Mall", "postOfficeBoxNumber": "55345",
           "addressLocality": "Abu Dhabi", "addressCountry": "AE"}
ORG_LD = {"@type": "Organization", "@id": BASE + "#org", "name": ORG, "legalName": "Gulf Aquaculture LLC", "url": BASE,
          "logo": BASE + "assets/img/gulf-aquaculture-logo.png", "email": "info@gulfaquaculture.com", "foundingDate": "2023",
          "foundingLocation": "Abu Dhabi, United Arab Emirates", "address": ADDRESS,
          "description": "Aquaculture company producing hatchery-raised fry of native Gulf species from broodstock to juvenile, operating the Balghailam Island hatchery and the Sheikh Khalifa Marine Research Centre.",
          "areaServed": ["United Arab Emirates", "Oman", "GCC"],
          "knowsAbout": ["Aquaculture", "Marine hatchery", "Broodstock management", "Orange-spotted grouper", "Red snapper", "Live feed", "Biosecurity"],
          "award": "1st place, Sheikh Mansour Agriculture Award (2025)",
          "hasCredential": "BAP (Best Aquaculture Practices) certification for two assets (2026)",
          "founder": {"@type": "Person", "name": "Mohamed Razali Mohamed", "jobTitle": "General Manager"},
          "sameAs": ["https://gulfaquaculture.com/", "https://www.youtube.com/watch?v=QwZ2BvfbzRg"]}
PLACES = {
 "asset-balghailam.html": {"@type": "Place", "name": "Balghailam Island Hatchery", "description": "6,000 m² marine finfish hatchery operated by Gulf Aquaculture.",
                           "address": {"@type": "PostalAddress", "addressLocality": "Balghailam Island, Abu Dhabi", "addressCountry": "AE"}},
 "asset-skmrc.html": {"@type": "Place", "name": "Sheikh Khalifa Marine Research Centre (SKMRC)", "alternateName": "SKMRC",
                      "description": "Government-owned hatchery and Marine Innovation Park (≈18,000 m², 14 laboratories) operated by Gulf Aquaculture under a 15-year concession.",
                      "address": {"@type": "PostalAddress", "addressLocality": "Umm Al Quwain", "addressCountry": "AE"}},
}


def faq_ld(pairs):
    return {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in pairs]}


from news_data import NEWS as _NEWS
META["news.html"] = ("News & Insights | Gulf Aquaculture — Aquaculture in the UAE and the Gulf",
    "Company news, projects and partnerships, research, events and media from Gulf Aquaculture, native-species hatchery operator in Abu Dhabi.",
    "gulf-aquaculture-aerial-sea-cages-work-vessel.webp", "News")
for _n in _NEWS:
    META[f"news-{_n['slug']}.html"] = (f"{_n['title']} | Gulf Aquaculture News", _n["excerpt"], _n["img"], _n["title"])
def head(fn, species=None):
    t, d, img, crumb = META.get(fn, (ORG, ORG, DEFAULT_IMG, None))
    url = BASE + ("" if fn == "index.html" else fn)
    graph = [ORG_LD, {"@type": "WebSite", "@id": BASE + "#site", "name": ORG, "url": BASE, "publisher": {"@id": BASE + "#org"}, "inLanguage": "en"},
             {"@type": "WebPage", "@id": url + "#page", "url": url, "name": t, "description": d, "isPartOf": {"@id": BASE + "#site"},
              "about": {"@id": BASE + "#org"}, "primaryImageOfPage": BASE + "assets/img/" + img, "inLanguage": "en"}]
    if crumb:
        items = [{"@type": "ListItem", "position": 1, "name": "Home", "item": BASE}]
        if fn.startswith("species-"):
            items.append({"@type": "ListItem", "position": 2, "name": "Species", "item": BASE + "species.html"})
        if fn.startswith("news-"):
            items.append({"@type": "ListItem", "position": 2, "name": "News", "item": BASE + "news.html"})
        if fn.startswith("asset-"):
            items.append({"@type": "ListItem", "position": 2, "name": "Assets", "item": BASE + "assets.html"})
        items.append({"@type": "ListItem", "position": len(items) + 1, "name": crumb, "item": url})
        graph.append({"@type": "BreadcrumbList", "itemListElement": items})
    if fn in PLACES:
        p = dict(PLACES[fn]); p["url"] = url; p["image"] = BASE + "assets/img/" + img; p["containedInPlace"] = {"@type": "Country", "name": "United Arab Emirates"}
        graph.append(p)
    _art = next((n for n in _NEWS if f"news-{n['slug']}.html" == fn), None)
    if _art:
        graph.append({"@type": "NewsArticle", "headline": _art["title"], "description": _art["excerpt"], "datePublished": _art["date"],
                      "image": BASE + "assets/img/" + _art["img"], "articleSection": _art["cat"], "url": url, "inLanguage": "en",
                      "author": {"@id": BASE + "#org"}, "publisher": {"@id": BASE + "#org"}, "mainEntityOfPage": url})
    if fn == "contact.html":
        graph.append({"@type": "ContactPage", "url": url, "mainEntity": {"@id": BASE + "#org"}})
    if species:
        sp = species
        graph.append({"@type": "Taxon", "name": sp["sci"] or sp["en"], "alternateName": [sp["local"], sp["en"]],
                      "taxonRank": "species", "url": url, "image": BASE + "assets/img/" + img, "description": sp["blurb"]})
    qa = faqs(fn, species)
    if qa:
        graph.append(faq_ld([(q, _strip(a)) for q, a in qa]))
    ld = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False)
    ogtype = 'article' if _art else 'website'
    ogimg = BASE + "assets/img/" + img
    return (f'<title>{t}</title><meta name="description" content="{html.escape(d)}">\n'
            f'<link rel="canonical" href="{url}">\n'
            f'<meta property="og:type" content="{ogtype}"><meta property="og:site_name" content="{ORG}"><meta property="og:title" content="{html.escape(t)}">'
            f'<meta property="og:description" content="{html.escape(d)}"><meta property="og:url" content="{url}"><meta property="og:image" content="{ogimg}"><meta property="og:locale" content="en_AE">\n'
            f'<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{html.escape(t)}"><meta name="twitter:description" content="{html.escape(d)}"><meta name="twitter:image" content="{ogimg}">\n'
            f'<meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="Abu Dhabi">\n'
            f'<script type="application/ld+json">{ld}</script>')


def write_extras(out, pages):
    urls = "".join(f"<url><loc>{BASE + ('' if p == 'index.html' else p)}</loc><changefreq>monthly</changefreq><priority>{'1.0' if p=='index.html' else ('0.8' if not p.startswith(('privacy','cookies')) else '0.2')}</priority></url>" for p in pages)
    open(f"{out}/sitemap.xml", "w").write(f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">{urls}</urlset>\n')
    open(f"{out}/robots.txt", "w").write(
        "# Ready for launch. While the concept site is online, pages also carry <meta name=robots content=noindex>.\n"
        "User-agent: *\nAllow: /\n\n# AI assistants and answer engines (GEO) are welcome to read and cite the site\n"
        "User-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\n\n"
        f"Sitemap: {BASE}sitemap.xml\n")
    open(f"{out}/llms.txt", "w").write(f"""# Gulf Aquaculture

> Abu Dhabi aquaculture company (founded 2023, joint venture of Emirates Consortium and Hibiscus Capital Investment) that raises native Gulf fish species from broodstock to juvenile and supplies hatchery-raised fry to farms in the UAE and the region. Approach: "Local Species in Local Waters".

Key facts:
- Operates the Balghailam Island hatchery (6,000 m²) and the Sheikh Khalifa Marine Research Centre in Umm Al Quwain, SKMRC (≈18,000 m², 14 ISO/IEC 17025 laboratories) under a 15-year lease — the largest hatchery and nursery facility in the UAE and the wider Gulf.
- On track to ship 20+ million fry to regional clients; target 20 million fry at SKMRC in 2026.
- Species: Hamour (orange-spotted grouper, Epinephelus coioides), Hamra (Malabar red snapper, Lutjanus malabaricus), Shiqra (mangrove red snapper, Lutjanus argentimaculatus), Shaari (spangled emperor, Lethrinus nebulosus), Sobaity seabream; Umm Drais under evaluation.
- 1st place, Sheikh Mansour Agriculture Award (Feb 2025); BAP certification for two assets (Mar 2026).
- Regional footprint: UAE, Oman (seabream & red snapper fry supply), Malaysia and Indonesia hatcheries with Aquagrow International.
- Contact: info@gulfaquaculture.com · 7th Floor, East Tower, Abu Dhabi Mall, P.O. Box 55345, Abu Dhabi, UAE.

## Pages
- [About]({BASE}about.html): story, mission, principles, leadership interview
- [Operations]({BASE}operations.html): hatchery, live feed, biosecurity, labs, traceability, production cycle
- [Assets]({BASE}assets.html): [Balghailam Island]({BASE}asset-balghailam.html), [SKMRC]({BASE}asset-skmrc.html)
- [Species]({BASE}species.html): [Hamour]({BASE}species-hamour.html), [Hamra]({BASE}species-hamra.html), [Shiqra]({BASE}species-shiqra.html), [Shaari]({BASE}species-shaari.html), [Seabream]({BASE}species-seabream.html), [Umm Drais]({BASE}species-umm-drais.html)
- [Growth]({BASE}growth.html): sustainability, legal structure, Phase II, regional footprint
- [People]({BASE}people.html): team
- [Contact]({BASE}contact.html): fry orders, partnerships, research collaboration
- [News & insights]({BASE}news.html): company news, projects & partnerships, events, media gallery

## News
""" + "".join(f"- [{n['title']}]({BASE}news-{n['slug']}.html) ({n['date'][:7]}): {n['excerpt']}\n" for n in sorted(_NEWS, key=lambda n: n['date'], reverse=True)))


import re as _re
def _strip(t): return _re.sub(r"<[^>]+>", "", t).replace("&amp;", "&")

FAQS = {
 "asset-balghailam.html": [
  ("What is the Balghailam Island hatchery?", "A 6,000 m² marine finfish hatchery operated by Gulf Aquaculture in Abu Dhabi. It was our proof of concept: in 2024 it delivered our first sale of Hamour fry to the local market."),
  ("Which species are produced at Balghailam Island?", "Balghailam Island is a Grouper (Hamour) and Red Snapper hatchery and nursery site, co-invested with Hibiscus Capital Investment and operated by Gulf Aquaculture."),
  ("What systems does the hatchery use?", "Four 20 m³ broodstock tanks, eight 10 m³ larval rearing tanks, twenty-four 10 m³ nursery tanks, live feed and algae production, integrated RAS and flow-through systems, UV sterilisation and an on-site water-quality and microbiology lab."),
  ("Can I visit the facility?", "Government, research and commercial partners can request a visit through our <a href=\"contact.html?type=partner#partner\">contact page</a>."),
 ],
 "asset-skmrc.html": [
  ("What is the Sheikh Khalifa Marine Research Centre (SKMRC)?", "A government-owned hatchery and research centre in the UAE, operated by Gulf Aquaculture since November 2025 under a 15-year concession — the largest hatchery and nursery facility in the UAE and the wider Gulf."),
  ("How large is SKMRC?", "Approximately 18,000 m² of hatchery space in two production streams (Phase 01 and Phase 02), plus 14 laboratories provisioned for ISO/IEC 17025, 1,200 m² of offices and the Marine Innovation Park."),
  ("Which broodstocks are managed at SKMRC?", "Seabream, Hamour, Shaari, Mangrove Snapper, Mullet, Cobia and Naisrah. Nursery operations currently focus on Hamour, Red Snapper and Shaari, with a target of 20 million fry in 2026."),
  ("Can universities and researchers collaborate at SKMRC?", "Yes. The Marine Innovation Park and laboratories are open to research partnerships — <a href=\"contact.html?type=research#research\">get in touch</a> to discuss collaboration."),
 ],
 "contact.html": [
  ("How do I order fry from Gulf Aquaculture?", "Use the form on this page and select “A partner or client”. Tell us the species, quantity, preferred size and delivery timing, and the location of your farm — our commercial team will reply with availability and specifications."),
  ("Which species can I enquire about?", "Hamour (orange-spotted grouper), Hamra (Malabar red snapper), Shiqra (mangrove red snapper), Shaari (spangled emperor) and Sobaity seabream. See each <a href=\"species.html\">species page</a> for details."),
  ("Who should investors and government bodies contact?", "Select “An investor” or “A policymaker” in the form: your enquiry is routed to the team handling strategic partnerships, Phase II growth and food-security programmes."),
  ("How can researchers collaborate with us?", "Select “A researcher” in the form to discuss laboratory access, broodstock programmes or academic partnerships at the Sheikh Khalifa Marine Research Centre."),
  ("Where is Gulf Aquaculture based?", "Our head office is on the 7th Floor, East Tower, Abu Dhabi Mall, P.O. Box 55345, Abu Dhabi, United Arab Emirates. Email: <a href=\"mailto:info@gulfaquaculture.com\">info@gulfaquaculture.com</a>."),
 ],
}

def faqs(fn, species=None):
    if fn in FAQS: return FAQS[fn]
    if species:
        sp = species; L = sp["local"]
        out = [(f"What is {L}?", f"{L} is the local name for {sp['en']}" + (f" (<i>{sp['sci']}</i>)." if sp['sci'] else ".") + " " + sp["blurb"])]
        if sp["status"] == "Under evaluation":
            out.append((f"Does Gulf Aquaculture produce {L} fry?", f"{L} is currently under evaluation within our broodstock development programme. <a href=\"contact.html?species={L.replace(' ','+')}#partner\">Contact us</a> to register your interest."))
        else:
            out.append((f"Does Gulf Aquaculture supply {L} fry?", f"Yes — {L} is part of our native species programme in Abu Dhabi. <a href=\"contact.html?species={L.replace(' ','+')}#partner\">Send an enquiry</a> with quantity, size and timing for availability and specifications."))
        if sp.get("farm"): out.append((f"How is {L} farmed?", sp["farm"]))
        if sp.get("tol"): out.append((f"Is {L} suited to Gulf conditions?", sp["tol"]))
        out.append(("Can you deliver fry outside the UAE?", "We supply regional clients across the GCC and beyond (for example our fry supply agreement in Oman). Tell us your location in the enquiry and we will confirm logistics."))
        return out
    return []

def faq_html(fn, species=None):
    qa = faqs(fn, species)
    if not qa: return ""
    items = "".join(f'<details{" open" if i==0 else ""}><summary>{q}</summary><p>{a}</p></details>' for i,(q,a) in enumerate(qa))
    return (f'<section class="sec faq-sec"><div class="wrap faq-grid"><div class="rv"><span class="label">FAQ</span><h2 style="margin-top:12px">Frequently asked questions</h2></div>'
            f'<div class="qa rv">{items}</div></div></section>')
