# SEO/GEO permalinks: build writes pages with internal names, then renames them to these
# keyword-rich filenames and rewrites every reference (HTML, JS, sitemap, llms.txt, JSON-LD).
# Old names get a small redirect page so existing links (and bookmarks) keep working.
SLUGS = {
 "about.html": "about-gulf-aquaculture-abu-dhabi.html",
 "operations.html": "hatchery-operations-production-cycle.html",
 "assets.html": "aquaculture-facilities-hatcheries-uae.html",
 "asset-balghailam.html": "balghailam-island-fish-hatchery-abu-dhabi.html",
 "asset-skmrc.html": "sheikh-khalifa-marine-research-centre-skmrc.html",
 "species.html": "native-gulf-fish-species-fry-supply.html",
 "species-hamour.html": "hamour-orange-spotted-grouper-fry.html",
 "species-hamra.html": "hamra-malabar-red-snapper-fry.html",
 "species-shiqra.html": "shiqra-mangrove-red-snapper-fry.html",
 "species-shaari.html": "shaari-spangled-emperor-fry.html",
 "species-seabream.html": "sobaity-seabream-fry.html",
 "species-umm-drais.html": "umm-drais-gulf-red-snapper.html",
 "growth.html": "sustainable-aquaculture-growth-strategy.html",
 "people.html": "gulf-aquaculture-team-aquaculture-experts.html",
 "news.html": "aquaculture-news-uae-gulf.html",
 "gallery.html": "aquaculture-photo-gallery-uae.html",
 "contact.html": "contact-gulf-aquaculture-fry-orders.html",
 "privacy.html": "privacy-policy.html",
 "site-map.html": "gulf-aquaculture-site-map.html",
    "cookies.html": "cookie-policy.html",
 "news-bap-certification-2026.html": "gulf-aquaculture-bap-certification-2026.html",
 "news-oman-fry-supply-agreement.html": "red-snapper-seabream-fry-supply-agreement-oman.html",
 "news-skmrc-15-year-concession.html": "sheikh-khalifa-marine-research-centre-15-year-concession.html",
 "news-sheikh-mansour-agriculture-award.html": "sheikh-mansour-agriculture-award-2025-gulf-aquaculture.html",
 "news-first-hamour-fry-sale.html": "first-hamour-fry-sale-uae-2024.html",
 "news-gulf-aquaculture-founded.html": "gulf-aquaculture-founded-abu-dhabi-2023.html",
 "news-skmrc-laboratories-broodstock-programmes.html": "skmrc-laboratories-native-broodstock-programmes.html",
}
import os, re
_RX = re.compile(r'(?<![A-Za-z0-9_.-])(' + '|'.join(re.escape(k) for k in sorted(SLUGS, key=len, reverse=True)) + r')(?=[#?"\'\s)<,\]]|$)')
def rewrite(text): return _RX.sub(lambda m: SLUGS[m.group(1)], text)
REDIRECT = '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved</title><meta name="robots" content="noindex"><link rel="canonical" href="{new}"><meta http-equiv="refresh" content="0; url={new}"><script>location.replace("{new}"+location.search+location.hash)</script></head><body><a href="{new}">This page has moved</a></body></html>'
def apply(out):
    # 1) rename files
    for old, new in SLUGS.items():
        if os.path.exists(os.path.join(out, old)): os.replace(os.path.join(out, old), os.path.join(out, new))
    # 2) rewrite references in every text asset
    for root, _, files in os.walk(out):
        if os.sep + "3d" in root: continue
        for f in files:
            if f.endswith((".html", ".js", ".xml", ".txt", ".json", ".css")):
                p = os.path.join(root, f); s = open(p, encoding="utf-8").read(); n = rewrite(s)
                if n != s: open(p, "w", encoding="utf-8").write(n)
    # 3) redirect stubs at the old addresses (noindex, canonical to the new page)
    for old, new in SLUGS.items():
        open(os.path.join(out, old), "w", encoding="utf-8").write(REDIRECT.format(new=new))
