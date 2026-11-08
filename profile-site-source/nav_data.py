# Main navigation: mega-menu panels, mobile accordion and "Access by profile" bar.
# Audience codes: o = Commercial operators, g = Government & investors, r = Universities & R&D
import html

AUD = {
    "o": dict(name="Commercial Operators", sub="Aquaculture farms · fry stock",
              ico='<path d="M2 12c3-4.5 9-5.5 14-2 1 .7 2 1.3 3 2-1 .7-2 1.3-3 2-5 3.5-11 2.5-14-2Z"/><path d="M19 12l3-3v6z"/>',
              intro="Species, fry availability, production capacity and the facilities behind them."),
    "g": dict(name="Government & Investors", sub="Food security · strategic partnerships",
              ico='<path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M2 10l10-6 10 6"/>',
              intro="Our mission, governance, regional role and the plan for growth."),
    "r": dict(name="Universities & R&D", sub="Research · 14 labs at SKMRC",
              ico='<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M7.5 15h9"/>',
              intro="Laboratories, broodstock programmes, the operations cycle and our team."),
}

# (href, label, short description, audiences)
NAV = [
    ("about.html", "About", "From vision to operation",
     "A Gulf-born company built to make aquaculture work — for our ecosystems, food security and future generations.", [
         ("about.html#story", "Our story", "2023 → 2026 milestones", "g"),
         ("about.html#mission", "Mission &amp; vision", "Why we exist", "gr"),
         ("about.html#principles", "Principles", "What we stand for", "g"),
         ("about.html#role", "Our regional role", "Serving the sea and its people", "g"),
         ("about.html#achievements", "Achievements", "Awards &amp; BAP certification", "og"),
         ("about.html#interview", "Leadership interview", "A conversation with our GM", "gr"),
     ]),
    ("operations.html", "Operations", "Where innovation meets simplicity",
     "Healthy fish in sustainable, replicable systems — from broodstock to distribution.", [
         ("operations.html#overview", "How we operate", "Hatchery, live feed, biosecurity, labs, traceability", "or"),
         ("operations.html#cycle", "The production cycle", "Five phases under continuous lab oversight", "or"),
     ]),
    ("assets.html", "Assets", "Assets under management",
     "Two facilities, one model: compact, biosecure and replicable.", [
         ("asset-balghailam.html", "Balghailam Island", "6,000 m² hatchery · proof of concept", "og"),
         ("asset-skmrc.html", "Sheikh Khalifa Marine Research Centre", "≈18,000 m² · 14 laboratories", "ogr"),
     ]),
    ("species.html", "Species", "Local species, local knowledge",
     "Native Gulf species — resilient, well-adapted and ecologically appropriate.", [
         ("species-hamour.html", "Hamour", "Orange-spotted Grouper", "or"),
         ("species-hamra.html", "Hamra", "Malabar Red Snapper", "or"),
         ("species-shiqra.html", "Shiqra", "Mangrove Red Snapper", "or"),
         ("species-shaari.html", "Shaari", "Spangled Emperor", "or"),
         ("species-seabream.html", "Seabream", "Sobaity Seabream", "or"),
         ("species-umm-drais.html", "Umm Drais", "Under evaluation", "r"),
     ]),
    ("growth.html", "Growth", "Built for tomorrow",
     "Sustainability in practice, ownership and the next chapter of growth.", [
         ("growth.html#legal-structure", "Legal structure", "Ownership &amp; governance", "g"),
         ("growth.html#future-growth", "Future growth", "Phase II and new sites", "og"),
         ("growth.html#footprint", "Regional footprint", "UAE, Oman, Malaysia, Indonesia", "og"),
     ]),
    ("people.html", "People", "The people behind the progress",
     "Scientists, technicians, strategists and aquaculture practitioners.", [
         ("people.html", "Our team", "Leadership, hatchery &amp; advisors", "gr"),
         ("about.html#interview", "Leadership interview", "A conversation with our GM", "gr"),
     ]),
    ("news.html", "News", "News &amp; insights",
     "Company news, partnerships, research, events and media.", [
         ("news.html#articles", "All news", "Latest articles and announcements", "ogr"),
         ("news.html#cat=projects-and-partnerships", "Projects &amp; partnerships", "Concessions, supply agreements", "og"),
         ("news.html#cat=research-and-publications", "Research &amp; publications", "Scientific work and papers", "r"),
         ("news.html#cat=events-and-conferences", "Events &amp; awards", "Conferences and recognition", "g"),
         ("news.html#media-gallery", "Media gallery", "Photos from our sites", "ogr"),
     ]),
    ("contact.html", "Contact", "We welcome conversations",
     "Tell us who you are — we route every enquiry to the right team.", [
         ("contact.html?type=partner#partner", "Fry orders &amp; availability", "Hamour, Hamra, Shiqra, Shaari, Seabream", "o"),
         ("contact.html?type=partner#partner", "Commercial aquaculture enquiries", "Farms, operators, distributors", "o"),
         ("contact.html?type=policy#policy", "Government &amp; institutional partnerships", "Food security, concessions", "g"),
         ("contact.html?type=investor#investor", "Investment &amp; strategic partnerships", "Phase II and regional growth", "g"),
         ("contact.html?type=research#research", "Research &amp; academic collaboration", "SKMRC laboratories, visiting researchers", "r"),
     ]),
]


def _active(fn, href):
    base = href.split("#")[0]
    return base == fn or (base == "species.html" and fn.startswith("species-")) or (base == "assets.html" and fn.startswith("asset-"))


def _dots(aud):
    return "".join(f'<i class="ad ad-{a}" title="{AUD[a]["name"]}"></i>' for a in aud)


def mega_menu(fn):
    items = [f'<li><a href="index.html"{" aria-current=\"page\"" if fn=="index.html" else ""}>Home</a></li>']
    for i, (href, label, title, intro, subs) in enumerate(NAV):
        cur = ' aria-current="page"' if _active(fn, href) else ""
        links = "".join(
            f'<li data-aud="{a}"><a href="{h}"><b>{t}</b><small>{d}</small><span class="ads">{_dots(a)}</span></a></li>'
            for h, t, d, a in subs)
        items.append(
            f'<li class="has-mega"><a href="{href}"{cur} aria-haspopup="true" aria-expanded="false" aria-controls="mega{i}">{label}</a>'
            f'<div class="mega" id="mega{i}"><div class="wrap mega-in">'
            f'<div class="mega-intro"><span class="mega-k">{label}</span><p class="mega-t">{title}</p><p class="mega-p">{intro}</p>'
            f'<a class="more" href="{href}">Overview <span aria-hidden="true">→</span></a><p class="mega-aud"></p></div>'
            f'<ul class="mega-links">{links}</ul></div></div></li>')
    return "".join(items)


def mobile_nav(fn):
    out = ['<a class="mn-top" href="index.html">Home</a>']
    for i, (href, label, title, intro, subs) in enumerate(NAV):
        links = "".join(f'<li data-aud="{a}"><a href="{h}">{t}<span class="ads">{_dots(a)}</span></a></li>' for h, t, d, a in subs)
        op = " open" if _active(fn, href) else ""
        out.append(f'<details class="mn-g"{op}><summary>{label}</summary><a class="mn-ov" href="{href}">{title} — overview →</a><ul>{links}</ul></details>')
    return "".join(out)


def access_bar():
    btns = "".join(
        f'<button type="button" class="acc-btn {k}" data-aud="{k}" aria-pressed="false" aria-expanded="false" aria-controls="accPanel">'
        f'<span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">{v["ico"]}</svg></span>'
        f'<span class="acc-t"><b>{v["name"]}</b><small>{v["sub"]}</small></span><span class="chev" aria-hidden="true">›</span></button>'
        for k, v in AUD.items())
    panels = ""
    for k, v in AUD.items():
        picks = []
        for href, label, title, intro, subs in NAV:
            for h, t, d, a in subs:
                if k in a:
                    picks.append(f'<li><a href="{h}"><span class="acc-sec">{label}</span><b>{t}</b><small>{d}</small></a></li>')
        panels += (f'<div class="acc-pane" data-for="{k}" hidden><div class="acc-pane-head"><p><b>{v["name"]}</b> — {v["intro"]}</p>'
                   f'<button type="button" class="acc-clear">Clear profile ×</button></div><ul class="acc-list">{"".join(picks)}</ul></div>')
    return (f'<nav class="access" aria-label="Access by profile"><div class="wrap"><span class="access-lbl">Access by profile</span>{btns}</div></nav>'
            f'<div class="acc-panel" id="accPanel" hidden><div class="wrap">{panels}</div></div>')


def aud_ribbon():
    return '<div class="aud-ribbon" aria-live="polite"><div class="wrap"><span class="ar-dot"></span><span class="ar-txt"></span><button type="button" class="acc-clear">Clear ×</button></div></div>'

