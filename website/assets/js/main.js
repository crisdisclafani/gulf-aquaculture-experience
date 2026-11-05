/* =========================================================================
   GULF AQUACULTURE — shared front-end script (all pages) · v2
   Data in data.js (in the CMS: menus, taxonomies, content entries).
   Each renderer checks its container exists, so one file serves every page.
   ========================================================================= */
(function(){
const $  = (s,c=document)=>c.querySelector(s);
const $$ = (s,c=document)=>[...c.querySelectorAll(s)];
const dots = a => a ? `<span class="dots">${[...new Set(a)].map(x=>`<i class="dot ${x}"></i>`).join("")}</span>` : "";
const has  = a => [...new Set(a||"")].map(x=>"has-"+x).join(" ");
const ORDER = "ogr";
const audOf = sec => [...new Set(sec.items.map(i=>i[1]).join(""))].sort((a,b)=>ORDER.indexOf(a)-ORDER.indexOf(b));
const store = { get(k){try{return localStorage.getItem(k)}catch(e){return null}}, set(k,v){try{v==null?localStorage.removeItem(k):localStorage.setItem(k,v)}catch(e){}} };
const SECTION = document.body.dataset.section || "home";
const FILE = (location.pathname.split("/").pop() || "index.html");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
let lang = store.get("ga-lang")==="ar" ? "ar" : "en";
let currentAud = store.get("ga-aud"); if(!AUDIENCES[currentAud]) currentAud = null;

function toast(msg){ const t=$("#toast"); if(!t) return; t.innerHTML=msg; t.classList.add("show"); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove("show"),3800); }

/* ---------------- sticky header height ---------------- */
const top_ = $(".site-top");
function measure(){ if(top_) document.documentElement.style.setProperty("--top-h", top_.offsetHeight+"px"); }
if(top_ && "ResizeObserver" in window) new ResizeObserver(measure).observe(top_);
function onScroll(){ if(top_) top_.classList.toggle("compact", scrollY>90); }
addEventListener("scroll",onScroll,{passive:true});

/* ---------------- NAVIGATION ---------------- */
function renderNav(){
  const nav=$("#nav"); if(!nav) return;
  nav.innerHTML = NAV.map(s=>{
    const a = audOf(s);
    return `<li data-sec="${s.id}" class="${has(a.join(""))} ${s.id===SECTION?"active":""}">
      <a class="nav-top" href="${s.page}" ${s.id===SECTION?'aria-current="page"':""}>
        <span>${lang==="ar"?s.ar:s.label}</span>
        <span class="strip" aria-hidden="true">${a.map(x=>`<i class="${x}"></i>`).join("")}</span>
      </a>
      <div class="mega"><div class="wrap mega-in">
        <div class="mega-intro">
          <span class="eyebrow">Template ${s.tpl}</span>
          <h3>${s.label}</h3>
          <p>${s.intro}</p>
          <a href="${s.page}" class="btn btn-ink" style="padding:11px 20px;font-size:.7rem">Section overview <span class="arrow">→</span></a>
          <div class="for">${a.map(x=>`<span class="tag ${x}"><i class="dot ${x}"></i>${AUDIENCES[x].name}</span>`).join("")}</div>
        </div>
        <div class="mega-links">
          ${s.items.map(i=>`<a href="${i[2]}" class="${has(i[1])}"><span>${i[0]}</span>${dots(i[1])}</a>`).join("")}
          <div class="legend-mini">${ORDER.split("").map(k=>`<span><i class="dot ${k}"></i>${AUDIENCES[k].name}</span>`).join("")}</div>
        </div>
      </div></div>
    </li>`;}).join("");

  $("#drawerNav").innerHTML = NAV.map(s=>{
    const a = audOf(s);
    return `<div class="acc ${s.id===SECTION?"open":""}">
      <button type="button" aria-expanded="${s.id===SECTION}"><span>${lang==="ar"?s.ar:s.label}</span><span class="strip">${a.map(x=>`<i class="${x}"></i>`).join("")}</span></button>
      <div class="acc-body"><a href="${s.page}" data-close><span>Overview</span></a>${s.items.map(i=>`<a href="${i[2]}" class="${has(i[1])}" data-close><span>${i[0]}</span>${dots(i[1])}</a>`).join("")}</div>
    </div>`;}).join("");

  const fm=$("#ftrMap");
  if(fm) fm.innerHTML = NAV.map(s=>`<div><h5><a href="${s.page}">${s.label}</a></h5>${s.items.map(i=>`<a href="${i[2]}">${dots(i[1])}<span>${i[0]}</span></a>`).join("")}</div>`).join("");

  $$("#drawerNav .acc>button").forEach(b=>b.addEventListener("click",()=>{
    const acc=b.parentElement, open=!acc.classList.contains("open");
    acc.classList.toggle("open",open); b.setAttribute("aria-expanded",open);
  }));
  $$("#nav>li>.nav-top").forEach(a=>a.addEventListener("click",e=>{
    const li=a.parentElement;
    if(matchMedia("(hover:none)").matches && !li.classList.contains("open")){ e.preventDefault(); $$("#nav>li").forEach(x=>x.classList.remove("open")); li.classList.add("open"); }
  }));
}
function renderSubnav(){
  const sn=$("#subnav .wrap"); if(!sn) return;
  const sec=NAV.find(s=>s.id===SECTION); if(!sec) return;
  sn.innerHTML = `<span class="sn-lbl">${sec.label}</span>` + sec.items.map(i=>
    `<a href="${i[2]}" class="${has(i[1])} ${i[2]===FILE?"current":""}">${dots(i[1])}<span>${i[0]}</span></a>`).join("");
}

/* ---------------- AUDIENCE (access buttons) ---------------- */
function applyAudience(k){
  currentAud = k;
  if(k) document.body.dataset.aud = k; else delete document.body.dataset.aud;
  store.set("ga-aud",k);
  $$("[data-aud]").forEach(b=>{ if(b.matches(".acc-btn, .sel")) b.setAttribute("aria-pressed",b.dataset.aud===k); });
  $$(".channel").forEach(c=>c.classList.toggle("path", true));
  $$(".channel").forEach(c=>c.classList.toggle("on", c.classList.contains(k)));
  $$("#nav>li").forEach(li=>li.classList.toggle("dim", !!k && !li.classList.contains("has-"+k)));
  const r = $("#ribbon .wrap");
  if(r){
    if(k){
      const A=AUDIENCES[k];
      r.innerHTML = `<strong>Your pathway · ${A.name}</strong>` + A.links.map(l=>`<a href="${l[1]}">${l[0]}</a>`).join("") +
        `<button type="button" class="x" id="clearAud">Show everything</button>`;
      $("#clearAud").addEventListener("click",()=>applyAudience(null));
    } else r.innerHTML="";
  }
}
document.addEventListener("click",e=>{
  const b = e.target.closest(".acc-btn[data-aud], .sel[data-aud]");
  if(b){
    e.preventDefault();
    const k=b.dataset.aud;
    applyAudience(currentAud===k ? null : k);
    if(currentAud) toast(`<b>${AUDIENCES[k].name}</b> — your pages are highlighted in the menu and on every page.`);
    return;
  }
  if(e.target.closest("[data-close]")) closeDrawer();
  if(!e.target.closest("#nav")) $$("#nav>li").forEach(x=>x.classList.remove("open"));
});

/* ---------------- PHASES CIRCLE ---------------- */
const ICONS = {
  fish:'<path d="M2 12c3-4.5 9-5.5 14-2 1 .7 2 1.3 3 2-1 .7-2 1.3-3 2-5 3.5-11 2.5-14-2Z"/><path d="M19 12l3-3v6z"/><circle cx="7" cy="11.2" r=".6"/>',
  eggs:'<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><circle cx="12" cy="16" r="3"/>',
  tank:'<path d="M3 6h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M3 11c2-1.4 4-1.4 6 0s4 1.4 6 0 4-1.4 6 0"/>',
  cage:'<ellipse cx="12" cy="10" rx="9" ry="3.5"/><path d="M3 10v5c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-5"/><path d="M8 13.2v5M12 13.5v5M16 13.2v5"/>',
  box:'<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5Z"/><path d="m3 7.5 9 4.5 9-4.5M12 12v9"/>'
};
function renderRing(){
  const host=$("#ring"); if(!host) return;
  const C=300, R=232, n=PHASES.length, ang=i=>(-90+i*360/n)*Math.PI/180;
  const pt=(a,r)=>[C+r*Math.cos(a), C+r*Math.sin(a)];
  const arc=(a0,a1,r)=>{ const [x0,y0]=pt(a0,r),[x1,y1]=pt(a1,r); return `M${x0.toFixed(1)} ${y0.toFixed(1)} A${r} ${r} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`; };
  const step=2*Math.PI/n, gap=.2;
  let segs="";
  PHASES.forEach((p,i)=>{
    const a=ang(i), [x,y]=pt(a,R), [lx,ly]=pt(a,R+60), cos=Math.cos(a);
    const anchor = cos>.35?"start":cos<-.35?"end":"middle";
    const dy = Math.sin(a)<-.8 ? -18 : Math.sin(a)>.8 ? 22 : 0;
    segs += `<g class="seg" data-i="${i}" tabindex="0" role="button" aria-label="Phase ${i+1}: ${p.t}">
      <path class="hit" d="${arc(a-step/2+.05,a+step/2-.05,R)}"/>
      <path class="arc" d="${arc(a+gap,a+step-gap,R)}"/>
      <g class="node"><circle class="bg" cx="${x}" cy="${y}" r="34"/>
        <g class="ic" transform="translate(${x-14.4} ${y-14.4}) scale(1.2)">${ICONS[p.icon]}</g></g>
      <text class="lbl" x="${lx}" y="${ly+dy}" text-anchor="${anchor}">${p.t}</text>
      <text class="sublbl" x="${lx}" y="${ly+dy+24}" text-anchor="${anchor}">${p.short}</text>
    </g>`;
  });
  host.innerHTML = `<svg viewBox="-150 -40 900 680" role="group" aria-label="Five-phase production cycle">
    <defs>
      <linearGradient id="gOrange" x1="0" x2="1"><stop offset="0" stop-color="#C4662A"/><stop offset="1" stop-color="#E2A13C"/></linearGradient>
      <clipPath id="cageClip"><circle cx="${C}" cy="${C}" r="150"/></clipPath>
      <path id="innerPath" d="M ${C} ${C} m -186 0 a 186 186 0 1 1 372 0 a 186 186 0 1 1 -372 0"/>
    </defs>
    <circle cx="${C}" cy="${C}" r="${R}" fill="none" stroke="rgba(15,51,82,.08)" stroke-width="1"/>
    <image href="assets/img/cage-circle.jpg" x="${C-170}" y="${C-170}" width="340" height="340" clip-path="url(#cageClip)" preserveAspectRatio="xMidYMid slice"/>
    <circle class="core-ring" cx="${C}" cy="${C}" r="162"/>
    <g class="spin"><text class="inner-txt"><textPath href="#innerPath">Continuous lab oversight ◆ Microbial monitoring ◆ Real-time data &amp; traceability ◆ Continuous lab oversight ◆ </textPath></text></g>
    ${segs}
  </svg>`;
  let cur=0, timer=null, playing=!reduced;
  const show=i=>{
    cur=(i+n)%n; const p=PHASES[cur];
    $$("#ring .seg").forEach(s=>s.classList.toggle("on",+s.dataset.i===cur));
    $("#phaseCard").innerHTML = `<div class="fade">
      <span class="count">Phase ${String(cur+1).padStart(2,"0")} / ${String(n).padStart(2,"0")}</span>
      <h3>${p.t}</h3><div class="where">${p.where}</div>
      <p>${p.d}</p>
      <ul class="bullets">${p.items.map(x=>`<li>${x}</li>`).join("")}</ul>
      <div class="for-row" style="margin:0 0 22px">${[...p.aud].map(x=>`<span class="tag ${x}"><i class="dot ${x}"></i>${AUDIENCES[x].name}</span>`).join("")}</div>
      <div class="hero-actions"><a class="btn btn-ink" href="${p.href}">Learn more <span class="arrow">→</span></a>
      <button class="btn btn-ghost" type="button" data-xp="${p.xp}">See it in 3D</button></div></div>`;
  };
  const next=()=>show(cur+1);
  const play=on=>{ playing=on; clearInterval(timer); if(on) timer=setInterval(next,6000); const pb=$("#phPlay"); if(pb) pb.textContent= on?"❚❚ Pause tour":"▶ Auto tour"; };
  $$("#ring .seg").forEach(s=>{
    s.addEventListener("click",()=>{ play(false); show(+s.dataset.i); });
    s.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); play(false); show(+s.dataset.i); } });
  });
  $("#phPrev").addEventListener("click",()=>{ play(false); show(cur-1); });
  $("#phNext").addEventListener("click",()=>{ play(false); show(cur+1); });
  $("#phPlay").addEventListener("click",()=>play(!playing));
  host.addEventListener("keydown",e=>{ if(e.key==="ArrowRight"){play(false);show(cur+1);} if(e.key==="ArrowLeft"){play(false);show(cur-1);} });
  show(0);
  // start auto tour only when visible
  if("IntersectionObserver" in window){ const io=new IntersectionObserver(es=>{ if(es[0].isIntersecting){ play(playing); io.disconnect(); } },{threshold:.4}); io.observe(host); }
}

/* ---------------- INTERACTIVE EXPERIENCE (3D embed) ---------------- */
const XP_URL = /github\.io$/.test(location.hostname) && location.pathname.includes("/gulf-aquaculture-experience/") ? "../index.html" : "https://crisdisclafani.github.io/gulf-aquaculture-experience/";
function loadXP(scene){
  const fr=$("#xpFrame"); if(!fr) { location.href = XP_URL + (scene?`?scene=${scene}`:""); return; }
  let ifr=$("iframe",fr);
  if(!ifr){
    ifr=document.createElement("iframe");
    ifr.title="Gulf Aquaculture — interactive 3D journey from egg to harvest";
    ifr.allow="fullscreen; autoplay"; ifr.loading="eager";
    ifr.src = XP_URL + (scene?`?scene=${scene}`:"");
    fr.appendChild(ifr);
    $(".xp-poster",fr).style.opacity=0; setTimeout(()=>$(".xp-poster",fr).remove(),500);
  } else if(scene){ ifr.contentWindow.postMessage({ga:"scene",id:scene},"*"); }
  $$(".xp-st").forEach(b=>b.classList.toggle("on",b.dataset.scene===scene));
}
function renderXP(){
  const st=$("#xpStations"); if(st) st.innerHTML = STATIONS.map((s,i)=>`<button type="button" class="xp-st" data-scene="${s[0]}"><span>0${i+1}</span><b>${s[1]}</b><small>${s[2]}</small></button>`).join("");
  document.addEventListener("click",e=>{
    const s=e.target.closest(".xp-st, [data-xp], #xpStart"); if(!s) return;
    const scene=s.dataset.scene||s.dataset.xp||null;
    if(s.dataset.xp && $("#experience")) $("#experience").scrollIntoView({behavior:reduced?"auto":"smooth"});
    loadXP(scene);
  });
  $$("[data-xp-full]").forEach(a=>a.href=XP_URL);
  $$("[data-xp-tour]").forEach(a=>a.href=XP_URL+"?demo=1");
}

/* ---------------- HOME LISTS ---------------- */
function renderHome(){
  const sec = id => NAV.find(s=>s.id===id);
  const fl=$("#facList");
  if(fl){
    fl.innerHTML = FACILITIES.map((f,i)=>`<a href="${f[4]}" class="fac ${has(f[3])}" data-fac="${i}"><span class="code">${f[0]}</span><div><h3>${f[1]}</h3><p>${f[2]}</p></div>${dots(f[3])}</a>`).join("");
    $$(".fac").forEach(f=>{ const on=()=>{ $$(".fac").forEach(x=>x.classList.toggle("on",x===f)); $$(".pin").forEach(p=>p.classList.toggle("on",p.dataset.pin===f.dataset.fac)); }; f.addEventListener("mouseenter",on); f.addEventListener("focus",on); });
  }
  const sp=$("#spGrid"); if(sp) sp.innerHTML = SPECIES.map(speciesCard).join("");
  const si=$("#spIndex"); if(si) si.innerHTML = SPECIES.map(speciesCard).join("");
  const sg=$("#sciGrid");
  if(sg) sg.innerHTML = sec("science").items.map((s,i)=>`<a href="${s[2]}" class="sci ${has(s[1])}"><span class="num">0${i+1}</span><h3>${s[0]}</h3><p>${SCIENCE_DESC[i]}</p>${dots(s[1])}</a>`).join("");
  const nc=$("#newsCats"); if(nc) nc.innerHTML = sec("news").items.map(i=>`<a href="${i[2]}">${i[0]}</a>`).join("");
}
function speciesCard(s,i){
  const fish = h=>`<svg viewBox="0 0 200 90" fill="none" aria-hidden="true"><path d="M14 45C44 10 110 6 152 45 110 84 44 80 14 45Z" fill="hsl(${h} 50% 70% / .18)" stroke="#E4A23B" stroke-width="1.2"/><path d="M152 45l40-28v56l-40-28Z" fill="hsl(${h} 50% 70% / .14)" stroke="#E4A23B" stroke-width="1.2"/><circle cx="42" cy="40" r="3.2" fill="#E4A23B"/></svg>`;
  const img = s.img ? `<div class="sp-img photo duo" style="background-image:url(assets/img/${s.img})"><span class="phs">Client photo</span></div>`
                    : `<div class="sp-img">${fish([20,0,350,200][i%4])}<span class="phs">Photo placeholder</span></div>`;
  return `<a href="${s.href}" class="sp">${img}
      <div class="sp-body">${s.ar?`<span class="ar" lang="ar">${s.ar}</span>`:""}
        <h3>${s.name}</h3><span class="sci">${s.sci}</span>
        <div class="sp-meta"><span class="tag o"><i class="dot o"></i>${s.local!=="—"?s.local:"Fry"}</span><span class="more">Species page <span class="arrow">→</span></span></div>
      </div></a>`;
}

/* ---------------- NEWS ---------------- */
function renderNews(){
  const grid=$("#newsGrid"); if(!grid) return;
  const cats = NAV.find(s=>s.id==="news").items.map(i=>[i[2].split("#")[1],i[0]]);
  $("#newsFilter").innerHTML = `<a href="#all" data-cat="all">All</a>` + cats.map(c=>`<a href="#${c[0]}" data-cat="${c[0]}">${c[1]}</a>`).join("");
  const draw=()=>{
    const cur=(location.hash||"#all").slice(1), key=cats.some(c=>c[0]===cur)?cur:"all";
    $$("#newsFilter a").forEach(a=>a.classList.toggle("on",a.dataset.cat===key));
    grid.innerHTML = POSTS.filter(p=>key==="all"||p.cat===key).map(p=>`<a class="post ${has(p.aud)}" href="news-article.html">
        <div class="img ${p.cat==="media"?"is-media":""}"></div>
        <div class="meta"><span class="tag ${p.aud[0]||""}">${cats.find(c=>c[0]===p.cat)[1]}</span><span>${p.date}</span></div>
        <h3>${p.t}</h3></a>`).join("") || "<p>No posts in this category yet.</p>";
  };
  addEventListener("hashchange",draw); draw();
}

/* ---------------- ENQUIRY FORM (checkboxes) ---------------- */
function renderForm(){
  const box=$("#checks"); if(!box) return;
  const tick='<svg viewBox="0 0 24 24"><path d="m5 12 5 5 9-10"/></svg>';
  box.innerHTML = CHECKS.map(c=>`<label class="check ${c[3]}"><input type="checkbox" name="topic" value="${c[0]}"><span class="box">${tick}</span><span><b>${c[1]}</b><small>${c[2]}</small></span></label>`).join("");
  $$(".consent .box").forEach(b=>b.innerHTML=tick);
  const form=$("#form");
  const update=()=>{
    const sel=$$('input[name="topic"]:checked').map(i=>i.value);
    const auds=[...new Set(sel.map(v=>CHECKS.find(c=>c[0]===v)[3]))];
    $$(".dyn").forEach(d=>d.classList.toggle("show", d.dataset.for.split(" ").some(k=>sel.includes(k))));
    const first=auds.find(a=>a!=="n");
    form.style.setProperty("--fc", first?`var(--${{o:"op",g:"gov",r:"res"}[first]})`:"var(--navy)");
    const r=$("#route");
    r.classList.toggle("show",auds.length>0);
    r.innerHTML = "Routed to: " + auds.map(a=>`<span class="tag ${a==="n"?"":a}">${a==="n"?"General office":TEAMS[a]}</span>`).join("");
    $("#formMsg").style.display="none";
  };
  box.addEventListener("change",update);
  const fromHash=()=>{ const h=location.hash.slice(1); const inp=$(`input[name="topic"][value="${h}"]`); if(inp){ inp.checked=true; update(); $("#enquiry").scrollIntoView({behavior:reduced?"auto":"smooth"}); } };
  fromHash(); addEventListener("hashchange",fromHash);
  if(!location.hash && currentAud){ const pre={o:"fry",g:"gov",r:"research"}[currentAud]; const inp=$(`input[name="topic"][value="${pre}"]`); if(inp){ inp.checked=true; update(); } }
  form.addEventListener("submit",e=>{
    e.preventDefault(); const m=$("#formMsg");
    const errs=[];
    if(!$$('input[name="topic"]:checked').length) errs.push("choose at least one topic");
    if(!$("#f-name").value.trim()) errs.push("add your name");
    if(!$("#f-mail").value.includes("@")) errs.push("add a valid email");
    if(!$("#f-consent").checked) errs.push("accept the privacy policy");
    if(errs.length){ m.innerHTML=`<span class="err">Please ${errs.join(", ")}.</span>`; m.style.display="block"; return; }
    m.innerHTML="<b>Demo only —</b> the form isn't connected yet. In the live site each topic is routed to its team, saved in the CMS and confirmed by email within 24 hours.";
    m.style.display="block";
  });
  const wa=$("#waBtn"); if(wa) wa.addEventListener("click",e=>{ e.preventDefault(); toast("WhatsApp Business integration — number to be supplied by Gulf Aquaculture."); });
}

/* ---------------- CHROME ---------------- */
function closeDrawer(){ $("#drawer").classList.remove("open"); $("#burger").setAttribute("aria-expanded","false"); document.body.style.overflow=""; }
$("#burger").addEventListener("click",()=>{ $("#drawer").classList.add("open"); $("#burger").setAttribute("aria-expanded","true"); document.body.style.overflow="hidden"; });
$("#drawerClose").addEventListener("click",closeDrawer);
$("#notesBtn").addEventListener("click",()=>$("#notes").classList.add("open"));
$("#notesClose").addEventListener("click",()=>$("#notes").classList.remove("open"));
$("#notes").addEventListener("click",e=>{ if(e.target.id==="notes") $("#notes").classList.remove("open"); });
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ $("#notes").classList.remove("open"); closeDrawer(); $$("#nav>li").forEach(x=>x.classList.remove("open")); }});
function setLang(l, announce){
  lang=l; store.set("ga-lang",l);
  document.documentElement.lang=l; document.documentElement.dir = l==="ar"?"rtl":"ltr";
  $$("[data-lang]").forEach(x=>x.setAttribute("aria-pressed",x.dataset.lang===l));
  $$("[data-i18n]").forEach(el=>{ const v=I18N[l][el.dataset.i18n]; if(v) el.innerHTML=v; });
  renderNav(); applyAudience(currentAud);
  if(announce && l==="ar") toast("RTL preview — Arabic labels are a draft for native review.");
}
$$("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang,true)));
function reveal(){
  if(!("IntersectionObserver" in window)){ $$(".rv").forEach(el=>el.classList.add("in")); return; }
  const io=new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target);} }),{threshold:.1});
  $$(".rv").forEach(el=>io.observe(el));
}

/* init */
measure(); renderHome(); renderNews(); renderSubnav(); renderRing(); renderXP(); renderForm();
setLang(lang,false); onScroll(); reveal();
})();
