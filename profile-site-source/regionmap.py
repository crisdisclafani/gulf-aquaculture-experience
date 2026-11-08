# Regional footprint map as inline SVG (replaces the 230 KB JPG): real coastlines + live, indexable text.
import json, os, html as _h
HERE = os.path.dirname(os.path.abspath(__file__))
D = json.load(open(f"{HERE}/regionmap.json"))
M = D["m"]
YT = 'data-yt="QwZ2BvfbzRg" data-start="13"'

# (key, title, suffix, text lines, anchor, x, title_y, dot side, colour scheme)
LABELS = [
 ("oman", "Oman", "", ["50 tonnes/month of", "Seabream. Red Snapper", "and Seabream fry supply", "agreement from Dec 2025."], "end", 865, 430, "Oman — Seabream &amp; Red Snapper"),
 ("balghailam", "Balghailam Island", "(UAE)", ["Grouper and Red Snapper hatchery and", "nursery site. Co-invested with Hibiscus", "Capital Investment and operated by GA."], "end", 447, 533, "Balghailam Island"),
 ("abudhabi", "Abu Dhabi HQ", "(UAE)", ["Head office for Gulf", "Aquaculture. Oversight of", "Grouper and Red Snapper", "programs."], "end", 340, 791, "Abu Dhabi HQ"),
 ("skmrc", "SKMRC", "(UAE)", ["Government-owned hatchery operated", "by GA on a 15-year concession."], "end", 447, 1163, "Sheikh Khalifa Marine Research Centre (SKMRC)"),
 ("juvenile", "Juvenile Supply", "(UAE)", ["Supplying Grouper and Red", "Snapper juveniles to a local", "company since 2024. Projected", "at 7 million/year by 2026."], "start", 1080, 681, "Juvenile Supply (UAE)"),
 ("malaysia", "Malaysia", "", ["Red Snapper hatchery co-invested", "with Aquagrow International. Producing", "1 million fry/month since 2023."], "start", 1145, 891, "Malaysia — Red Snapper hatchery"),
 ("indonesia", "Indonesia", "", ["Grouper hatchery with Aquagrow", "International. Producing 300,000", "fry/month. Launching 2026."], "end", 846, 1460, "Indonesia — Grouper hatchery"),
]

def label(k, t, suf, lines, anc, x, y, dark):
    tc = "#0B2A3F" if dark else "#fff"
    tt = "#D9902F" if dark else "#fff"
    s = f'<text class="rm-t" x="{x}" y="{y}" text-anchor="{anc}" fill="{tt}"><tspan font-weight="600" font-size="29">{t}</tspan>'
    if suf: s += f'<tspan font-size="21" dx="8">{suf}</tspan>'
    s += '</text><text class="rm-p" text-anchor="{a}" fill="{c}" font-size="19.5">'.format(a=anc, c=tc)
    s += "".join(f'<tspan x="{x}" y="{y + 44 + i * 26}">{_h.escape(l)}</tspan>' for i, l in enumerate(lines))
    s += "</text>"
    yb = y + 44 + (len(lines) - 1) * 26 + 16
    x0, x1 = (x - 378, x) if anc == "end" else (x, x + 276 if k != "malaysia" else x + 358)
    s += f'<path d="M{x0} {yb}H{x1}" stroke="url(#rmUl)" stroke-width="1.6"/>'
    return s

def leader(k, x, y, anc):
    mx, my = M[k]
    dy = y - 4
    dx = x + 30 if anc == "end" else x - 24
    if k == "juvenile":
        return f'<circle cx="{dx}" cy="{dy+8}" r="4" fill="#E9B13C"/><path d="M{dx} {dy+8}V{my}H{mx}" fill="none" stroke-width="2" stroke="#E9B13C"/>'
    if k == "malaysia":
        return f'<circle cx="{dx-5}" cy="{dy+4}" r="4.5" fill="#C9622A"/><path d="M{dx-5} {dy+4}H{mx}V{my}" fill="none" stroke-width="2" stroke="#C9622A"/>'
    if k == "indonesia":
        return f'<circle cx="{dx-6}" cy="{my}" r="4.5" fill="#C9622A"/><path d="M{dx-6} {my}H{mx}" fill="none" stroke-width="2" stroke="#C9622A"/>'
    col = "#C9622A" if k in ("skmrc", "oman") else "#E9B13C"
    return f'<circle cx="{dx}" cy="{dy}" r="4.5" fill="{col}"/><path d="M{dx} {dy}H{mx}V{my}" fill="none" stroke-width="2" stroke="{col}"/>'

def diamond(k, title):
    x, y = M[k]
    return (f'<a class="hs hs-map rm-mk" href="#" role="button" {YT} data-title="{title}" aria-label="{title} — watch video">'
            f'<circle class="hs-hit" cx="{x}" cy="{y}" r="34"/><circle class="hs-ping" cx="{x}" cy="{y}" r="16"/>'
            f'<path class="rm-d" d="M{x} {y-19}L{x+19} {y}L{x} {y+19}L{x-19} {y}Z" fill="#4FA7A2" stroke="#fff" stroke-width="4" stroke-linejoin="round" filter="url(#rmSh)"/>'
            f'<title>{title}</title></a>')

def svg():
    p = []
    p.append('<svg class="map-svg rmap" viewBox="0 0 1600 1686" role="img" aria-labelledby="rmTitle rmDesc" xmlns="http://www.w3.org/2000/svg">')
    p.append('<title id="rmTitle">Gulf Aquaculture regional footprint</title><desc id="rmDesc">Map of Gulf Aquaculture sites: Abu Dhabi HQ, Balghailam Island, SKMRC and juvenile supply in the UAE; fry supply in Oman; partner hatcheries in Malaysia and Indonesia.</desc>')
    p.append('''<defs>
<linearGradient id="rmSea" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0A5E78"/><stop offset=".45" stop-color="#0B7F98"/><stop offset="1" stop-color="#095C77"/></linearGradient>
<radialGradient id="rmGlow" cx=".35" cy=".62" r=".45"><stop offset="0" stop-color="#18A2B8" stop-opacity=".55"/><stop offset="1" stop-color="#18A2B8" stop-opacity="0"/></radialGradient>
<linearGradient id="rmLand" x1="0" y1="0" x2="0" y2="1"><stop offset=".25" stop-color="#F0B83C"/><stop offset="1" stop-color="#DFA35C"/></linearGradient>
<linearGradient id="rmRing" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EDB53E"/><stop offset="1" stop-color="#DCA15E"/></linearGradient>
<linearGradient id="rmMy" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#C8682C"/><stop offset="1" stop-color="#DE9A4E"/></linearGradient>
<linearGradient id="rmUl" x1="0" x2="1"><stop offset="0" stop-color="#C9622A"/><stop offset="1" stop-color="#E9B13C"/></linearGradient>
<pattern id="rmPaper" width="700" height="467" patternUnits="userSpaceOnUse"><image href="assets/img/texture-paper.jpg" width="700" height="467" preserveAspectRatio="xMidYMid slice"/></pattern>
<clipPath id="rmPanel"><rect x="12" y="15" width="1548" height="1325"/></clipPath>
<clipPath id="rmCircle"><circle cx="1222" cy="1365" r="318"/></clipPath>
<filter id="rmSh" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#0B2A3F" flood-opacity=".35"/></filter>
<filter id="rmCs" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="18" flood-color="#0B2A3F" flood-opacity=".28"/></filter>
</defs>''')
    # main panel
    p.append('<g clip-path="url(#rmPanel)"><rect x="12" y="15" width="1548" height="1325" fill="url(#rmSea)"/><rect x="12" y="15" width="1548" height="1325" fill="url(#rmGlow)"/>')
    p.append(f'<path d="{D["iran"]}" fill="#CFCECB"/><path d="{D["iran"]}" fill="url(#rmPaper)" opacity=".55"/>')
    p.append(f'<path d="{D["arabia"]}" fill="url(#rmLand)"/>')
    p.append(f'<path d="{D["border"]}" fill="none" stroke="#fff" stroke-width="1.6" opacity=".85"/></g>')
    p.append('<g font-family="Poppins, system-ui, sans-serif" font-weight="500" letter-spacing="2">'
             '<text x="592" y="255" text-anchor="middle" font-size="40" fill="#fff" opacity=".9">IRAN</text>'
             '<text x="726" y="1188" text-anchor="middle" font-size="40" fill="#fff" opacity=".35">UAE</text>'
             '<text x="886" y="1188" text-anchor="middle" font-size="40" fill="#fff" opacity=".35">OMAN</text></g>')
    # inset circle
    p.append('<circle cx="1222" cy="1393" r="346" fill="url(#rmRing)"/>')
    p.append('<g filter="url(#rmCs)"><circle cx="1222" cy="1365" r="318" fill="#F4F3F1"/></g>')
    p.append(f'<g clip-path="url(#rmCircle)"><rect x="900" y="1040" width="650" height="650" fill="url(#rmPaper)" opacity=".7"/>'
             f'<path d="{D["sea_land"]}" fill="#D0D0D0"/><path d="{D["my"]}" fill="url(#rmMy)"/><path d="{D["id"]}" fill="url(#rmMy)" opacity=".9"/></g>')
    # labels, leaders, markers
    p.append('<g font-family="Poppins, system-ui, sans-serif" class="rm-txt">')
    for k, t, suf, lines, anc, x, y, title in LABELS:
        p.append(leader(k, x, y, anc))
    for k, t, suf, lines, anc, x, y, title in LABELS:
        p.append(label(k, t, suf, lines, anc, x, y, k == "indonesia"))
    p.append('</g>')
    for k, t, suf, lines, anc, x, y, title in LABELS:
        p.append(diamond(k, title))
    p.append('</svg>')
    return "".join(p)

def html_list():
    return '<ul class="rm-list">' + "".join(
        f'<li><b>{t}{f" <span>{suf}</span>" if suf else ""}</b>{_h.escape(" ".join(lines))}</li>'
        for k, t, suf, lines, anc, x, y, title in LABELS) + '</ul>'
