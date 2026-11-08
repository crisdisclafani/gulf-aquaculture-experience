# Site map page — animated diagram of the whole site (rendered by build3.py)
import html as _h
from nav_data import NAV as _NAV, AUD as _AUD
from news_data import NEWS as _NW

ICO = {
 "about.html": '<circle cx="12" cy="12" r="9"/><path d="M12 8v.5M12 11v5"/>',
 "operations.html": '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
 "assets.html": '<path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"/>',
 "species.html": '<path d="M2 12c3-4.5 9-5.5 14-2 1 .7 2 1.3 3 2-1 .7-2 1.3-3 2-5 3.5-11 2.5-14-2Z"/><path d="M19 12l3-3v6z"/>',
 "growth.html": '<path d="M3 20h18M6 16l4-5 3 3 6-7"/><path d="M15 7h4v4"/>',
 "people.html": '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.6-3.4 3-5.5 6-5.5s5.4 2.1 6 5.5"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.8c2.6-.4 4.8 1.4 5.5 4.2"/>',
 "news.html": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>',
 "contact.html": '<path d="M4 5h16v11H9l-5 4z"/>',
}

def _amp(x): return x.replace("&amp;", "&").replace("&", "&amp;")

def _dots(a):
    return '<span class="sm-dots">' + "".join(f'<i class="{c}" title="{_amp(_AUD[c]["name"])}"></i>' for c in a) + '</span>'

def _li(href, title, desc, aud, j, dots=True):
    return (f'<li data-aud="{aud}" style="--j:{j}"><a href="{href}"><span class="sm-kt"><b>{title}</b>'
            f'<small>{desc}</small></span>{_dots(aud) if dots else ""}</a></li>')

def body(opener):
    cols = []
    for i, (h, t, tag, intro, kids) in enumerate(_NAV):
        aud = "".join(c for c in "ogr" if any(c in k[3] for k in kids))
        lis = "".join(_li(kh, kt, kd, a, j) for j, (kh, kt, kd, a) in enumerate(kids))
        if h == "news.html":
            arts = [x for x in _NW if not x.get("href")]
            lis += f'<li class="sm-grp" data-aud="ogr" style="--j:{len(kids)}"><span>Articles</span></li>'
            lis += "".join(_li(f'news-{n["slug"]}.html', n["title"], _amp(n["cat"]), "ogr", len(kids) + 1 + j, False) for j, n in enumerate(arts))
        cols.append(
            f'<div class="sm-col" style="--i:{i}" data-aud="{aud}"><a class="sm-node" href="{h}">'
            f'<span class="sm-n">{i + 1:02d}</span><span class="sm-ico"><svg viewBox="0 0 24 24" aria-hidden="true">{ICO.get(h, "")}</svg></span>'
            f'<span class="sm-nt"><b>{t}</b><small>{tag}</small></span></a><ul class="sm-kids">{lis}</ul></div>')
    chips = '<button type="button" class="on" data-a="all">Whole site</button>' + "".join(
        f'<button type="button" class="{c}" data-a="{c}"><i></i>{_amp(v["name"])}</button>' for c, v in _AUD.items())
    legend = "".join(f'<span class="{c}"><i></i>{_amp(v["name"])}</span>' for c, v in _AUD.items())
    out = opener(None, "Site map", "Site map",
                 "Every page of the Gulf Aquaculture website at a glance — open any box to go straight there.",
                 "gulf-aquaculture-aerial-view-abu-dhabi.jpg", None)
    out += f'''<section class="sec smap-sec" id="map"><div class="wrap">
  <div class="sm-bar rv"><span class="sm-lbl">Highlight what matters to</span><div class="sm-chips" role="toolbar" aria-label="Highlight pages by visitor profile">{chips}</div></div>
  <div class="smap rv">
    <div class="sm-root"><a class="sm-home" href="index.html"><span class="sm-hico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg></span><span><b>Home</b><small>Interactive 3D hatchery · access by profile · guided tours</small></span></a></div>
    <div class="sm-trunk" aria-hidden="true"></div>
    <div class="sm-rows"><div class="sm-row">{"".join(cols[:4])}</div>
    <div class="sm-row sm-row2">{"".join(cols[4:])}</div></div>
    <div class="sm-foot"><span class="sm-lbl">Also on the site</span><a href="privacy.html">Privacy policy</a><a href="cookies.html">Cookie policy</a><a href="sitemap.xml">XML sitemap</a></div>
  </div>
  <p class="sm-legend rv"><span class="sm-lbl">Colour dots</span>{legend}</p>
</div></section>'''
    return out
