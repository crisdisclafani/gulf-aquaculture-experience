/* GULF AQUACULTURE — site behaviour (v3, built from the Company Profile) */
(function(){
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;

/* header & mobile nav */
const hdr=$(".hdr"); const onS=()=>hdr&&hdr.classList.toggle("scrolled",scrollY>10); addEventListener("scroll",onS,{passive:true}); onS();
const mnav=$(".mnav");
$(".burger")?.addEventListener("click",()=>{ mnav.classList.add("open"); document.body.style.overflow="hidden"; });
$(".mnav .x")?.addEventListener("click",()=>{ mnav.classList.remove("open"); document.body.style.overflow=""; });

/* reveal, counters, timeline */
const counters=el=>{ const end=parseFloat(el.dataset.count), dec=(el.dataset.count.split(".")[1]||"").length, t0=performance.now(), d=1600;
  const fmt=v=>v.toLocaleString("en-US",{minimumFractionDigits:dec,maximumFractionDigits:dec});
  if(reduced){ el.textContent=fmt(end); return; }
  const step=now=>{ const p=Math.min(1,(now-t0)/d), e=1-Math.pow(1-p,3); el.textContent=fmt(end*e); if(p<1) requestAnimationFrame(step); }; requestAnimationFrame(step); };
if("IntersectionObserver" in window){
  const io=new IntersectionObserver(es=>es.forEach(en=>{ if(!en.isIntersecting) return; const el=en.target; el.classList.add("in");
    $$("[data-count]",el).forEach(counters); if(el.matches("[data-count]")) counters(el); io.unobserve(el); }),{threshold:.15});
  $$(".rv, .tline, .nums").forEach(el=>io.observe(el));
} else $$(".rv, .tline").forEach(el=>el.classList.add("in"));

/* operations ring — after page 7 of the Company Profile */
const ring=$("#ring");
if(ring){
  const P=[
    {t:"Broodstock",s:["Genetic integrity","Climate-controlled tanks"],a:-62,lx:770,ly:52,anchor:"end",ic:"fish",
     d:"Genetically diverse broodstock, conditioned for Gulf waters. Climate-controlled rooms support consistent spawning, including off-season cycles."},
    {t:"Hatchery Phase",s:["Live feed preparation","(rotifers, copepods, algae)","Daily larval checks","Water quality monitoring"],li:["Live feed preparation (rotifers, copepods, algae)","Daily larval checks","Water quality monitoring"],a:-4,lx:790,ly:228,anchor:"end",ic:"eggs",
     d:"In the hatchery, our teams begin early — checking water parameters, preparing live feed cultures, and monitoring larval development. Methodical and essential work."},
    {t:"Nursery Phase",s:["Gentle weaning and scaling","RAS + flow-through hybrid systems"],a:52,lx:790,ly:560,anchor:"end",ic:"tank",
     d:"As fry grow, they are transitioned to nursery tanks — gently weaned and scaled, with minimal handling and high health standards."},
    {t:"Sea Cage Grow-Out",s:["Natural light and flow","Low stocking densities","Minimal environmental footprint"],a:128,lx:10,ly:520,anchor:"start",ic:"cage",
     d:"Eventually they move to sea cages, where they continue to mature in conditions that mimic their natural habitat — working in harmony with the Gulf, rather than forcing artificial outcomes."},
    {t:"Distribution",s:["Grading","Packaging","Other value adds"],a:-128,lx:10,ly:52,anchor:"start",ic:"box",
     d:"Fish are graded and packed for regional clients — and every fish can be traced from broodstock to harvest through the SFS Trace system."}];
  const IC={fish:'<path d="M2 12c3-4.5 9-5.5 14-2 1 .7 2 1.3 3 2-1 .7-2 1.3-3 2-5 3.5-11 2.5-14-2Z"/><path d="M19 12l3-3v6z"/>',
    eggs:'<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><circle cx="12" cy="16" r="3"/>',
    tank:'<path d="M3 6h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M3 11c2-1.4 4-1.4 6 0s4 1.4 6 0 4-1.4 6 0"/>',
    cage:'<ellipse cx="12" cy="10" rx="9" ry="3.5"/><path d="M3 10v5c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-5"/>',
    box:'<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5Z"/><path d="m3 7.5 9 4.5 9-4.5M12 12v9"/>'};
  const C=[400,330], R=196, rad=a=>a*Math.PI/180;
  let g="";
  P.forEach((p,i)=>{ const x=C[0]+R*Math.cos(rad(p.a)), y=C[1]+R*Math.sin(rad(p.a)); const ex=p.anchor==="end"?p.lx-180:p.lx+180;
    const lines=p.s.map((s,k)=>`<text class="s" x="${p.lx}" y="${p.ly+26+k*22}" text-anchor="${p.anchor}">${s}</text><line class="u" x1="${p.anchor==="end"?p.lx-190:p.lx}" x2="${p.anchor==="end"?p.lx:p.lx+190}" y1="${p.ly+32+k*22}" y2="${p.ly+32+k*22}"/>`).join("");
    g+=`<g class="ph" data-i="${i}" tabindex="0" role="button" aria-label="${p.t}">
      <rect class="hit" x="${p.anchor==="end"?p.lx-205:p.lx-5}" y="${p.ly-24}" width="210" height="${40+p.s.length*22}"/><circle class="hit" cx="${x}" cy="${y}" r="30"/>
      <polyline points="${x},${y} ${ex},${p.ly+6} ${p.anchor==="end"?p.lx:p.lx},${p.ly+6}"/>
      <circle class="icobg" cx="${x}" cy="${y}" r="20"/><g class="ico" transform="translate(${x-11} ${y-11}) scale(.92)">${IC[p.ic]}</g>
      <text class="t" x="${p.lx}" y="${p.ly}" text-anchor="${p.anchor}">${p.t}</text>${lines}</g>`; });
  ring.innerHTML=`<svg viewBox="0 0 800 660" role="group" aria-label="Operations cycle">
    <defs><clipPath id="cc"><circle cx="${C[0]}" cy="${C[1]}" r="150"/></clipPath><path id="rp" d="M ${C[0]} ${C[1]} m -172 0 a 172 172 0 1 1 344 0 a 172 172 0 1 1 -344 0"/></defs>
    <image href="assets/img/gulf-aquaculture-sea-cage-top-view.jpg" x="${C[0]-175}" y="${C[1]-175}" width="350" height="350" clip-path="url(#cc)"/>
    <circle cx="${C[0]}" cy="${C[1]}" r="${R}" fill="none" stroke="rgba(255,255,255,.25)" stroke-dasharray="2 5"/>
    <g class="spin"><text class="rt"><textPath href="#rp">Continuous Lab Oversight ◆ Microbial monitoring ◆ Real-time data &amp; traceability ◆ Continuous Lab Oversight ◆</textPath></text></g>
    ${g}</svg>`;
  let cur=0, timer;
  const show=i=>{ cur=(i+P.length)%P.length; const p=P[cur];
    $$(".ph",ring).forEach(el=>el.classList.toggle("on",+el.dataset.i===cur));
    $("#phCard").innerHTML=`<div class="fade"><span class="k">${String(cur+1).padStart(2,"0")} / 05 · Our operations</span><h3>${p.t}</h3><p>${p.d}</p>
      <ul class="diamonds">${(p.li||p.s).map(x=>`<li>${x}</li>`).join("")}</ul></div>`; };
  $$(".ph",ring).forEach(el=>{ const go=()=>{ clearInterval(timer); show(+el.dataset.i); }; el.addEventListener("click",go); el.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); go(); } }); });
  $("#phPrev")?.addEventListener("click",()=>{ clearInterval(timer); show(cur-1); });
  $("#phNext")?.addEventListener("click",()=>{ clearInterval(timer); show(cur+1); });
  show(0); if(!reduced) timer=setInterval(()=>show(cur+1),5500);
}

/* asset tabs */
$$("[role=tablist]").forEach(tl=>{ const tabs=$$("[role=tab]",tl);
  const sel=t=>{ tabs.forEach(x=>{ const on=x===t; x.setAttribute("aria-selected",on); x.tabIndex=on?0:-1; document.getElementById(x.getAttribute("aria-controls")).hidden=!on; }); };
  tabs.forEach((t,i)=>{ t.addEventListener("click",()=>sel(t)); t.addEventListener("keydown",e=>{ if(e.key==="ArrowRight"){ sel(tabs[(i+1)%tabs.length]); tabs[(i+1)%tabs.length].focus(); } if(e.key==="ArrowLeft"){ const j=(i-1+tabs.length)%tabs.length; sel(tabs[j]); tabs[j].focus(); } }); });
  const h=location.hash.slice(1), t=tabs.find(x=>x.dataset.hash===h); if(t) sel(t); });

/* people bios */
const bio=$("#bio");
if(bio){ $$(".person").forEach(p=>p.addEventListener("click",()=>{ $("#bioK").textContent=p.dataset.role; const bi=$("#bioI"); if(bi) bi.src=p.dataset.img||""; $("#bioN").textContent=p.dataset.name; $("#bioT").textContent=p.dataset.bio; bio.classList.add("open"); $(".x",bio).focus(); }));
  const close=()=>bio.classList.remove("open"); $(".x",bio).addEventListener("click",close); bio.addEventListener("click",e=>{ if(e.target===bio) close(); });
  document.addEventListener("keydown",e=>{ if(e.key==="Escape") close(); }); }

/* contact form */
const f=$("#form");
if(f){ const qs=new URLSearchParams(location.search), sq=qs.get("species"), fryF=$("#fryF");
  const MAP={partner:sq?"fry":"partner"}; let h=qs.get("type")||location.hash.slice(1); h=MAP[h]||h; if(sq&&!h) h="fry";
  const sync=()=>{ if(fryF) fryF.hidden=!$('.who input[value="fry"]').checked; };
  const pre=$(`.who input[value="${h}"]`); if(pre){ pre.checked=true; }
  if(sq&&$("#fs")){ const o=[...$("#fs").options].find(o=>o.text.toLowerCase().startsWith(sq.toLowerCase().split(" ")[0])); if(o) o.selected=true; }
  $$(".who input").forEach(i=>i.addEventListener("change",sync)); sync();
  f.addEventListener("submit",e=>{ e.preventDefault(); const m=$("#msg");
    const errs=[]; if(!$$(".who input:checked").length) errs.push("tell us who you are"); if(!$("#n").value.trim()) errs.push("add your name"); if(!$("#e").value.includes("@")) errs.push("add a valid email"); if(!$("#c").checked) errs.push("accept the privacy note");
    m.style.display="block"; m.innerHTML = errs.length ? `Please ${errs.join(", ")}.` : "<b>Thank you.</b> This is a demo — the form is not connected yet. In the live site your message reaches info@gulfaquaculture.com."; }); }
})();
/* legal structure: wires, focus, dialog */
(function(){
  const org=document.querySelector(".lg-org"); if(!org) return;
  const svg=org.querySelector(".lg-wires"), NS="http://www.w3.org/2000/svg";
  const edges=JSON.parse(document.getElementById("lg-edges").textContent);
  const box=id=>document.getElementById("lg-"+id).querySelector(".lg-box");
  function draw(){
    svg.innerHTML=""; if(getComputedStyle(svg).display==="none") return;
    const o=org.getBoundingClientRect();
    edges.forEach(([p,c,lab,route])=>{
      const a=box(p).getBoundingClientRect(), b=box(c).getBoundingClientRect();
      const P={l:a.left-o.left,r:a.right-o.left,t:a.top-o.top,b:a.bottom-o.top,cx:(a.left+a.right)/2-o.left,cy:(a.top+a.bottom)/2-o.top};
      const C={l:b.left-o.left,r:b.right-o.left,t:b.top-o.top,b:b.bottom-o.top,cx:(b.left+b.right)/2-o.left,cy:(b.top+b.bottom)/2-o.top};
      let d,lx,ly,anchor="start";
      if(route==="down"){ const x=Math.abs(P.cx-C.cx)<4?C.cx:C.cx; const sy=P.b+16; d=`M${x} ${sy}V${C.t}`; lx=x+8; ly=(sy+C.t)/2+4; }
      else if(route==="downside"){ const toLeft=C.cx<P.cx; const x=toLeft?(p==="bdf"?P.cx:P.l+28):P.cx; const ex=toLeft?C.r:C.l;
        if(p==="bdf"){ d=`M${x} ${P.b}V${C.cy}H${C.l}`; lx=x+8; ly=P.b+40; }
        else { d=`M${x} ${P.b+16}V${C.cy}H${ex}`; lx=x+8; ly=C.cy-8; } }
      else { const toRight=C.cx>P.cx; const sx=toRight?P.r:P.l; const ex=C.cx+(toRight?-34:34);
        d=`M${sx} ${P.cy}H${ex}V${C.t}`; lx=(sx+ex)/2; ly=P.cy-10; anchor="middle"; }
      const path=document.createElementNS(NS,"path"); path.setAttribute("d",d); path.dataset.p=p; path.dataset.c=c; svg.appendChild(path);
      [true,false].forEach(bg=>{ const t=document.createElementNS(NS,"text"); t.setAttribute("x",lx); t.setAttribute("y",ly); t.setAttribute("text-anchor",anchor); t.textContent=lab; t.dataset.p=p; t.dataset.c=c; if(bg) t.classList.add("bg"); svg.appendChild(t); });
    });
  }
  draw(); addEventListener("resize",()=>requestAnimationFrame(draw)); if(document.fonts) document.fonts.ready.then(draw); setTimeout(draw,800);
  // related nodes = all ancestors + descendants
  const up={},down={}; edges.forEach(([p,c])=>{(up[c]=up[c]||[]).push(p);(down[p]=down[p]||[]).push(c);});
  const walk=(id,g,acc)=>{(g[id]||[]).forEach(n=>{ if(!acc.has(n)){acc.add(n);walk(n,g,acc);} });return acc;};
  const nodes=[...org.querySelectorAll(".lg-node")];
  function focus(id){ const rel=new Set([id,...walk(id,up,new Set()),...walk(id,down,new Set())]);
    org.classList.add("focus"); nodes.forEach(n=>n.classList.toggle("on",rel.has(n.dataset.id)));
    svg.querySelectorAll("[data-p]").forEach(e=>e.classList.toggle("on",rel.has(e.dataset.p)&&rel.has(e.dataset.c)&&(e.dataset.p===id||e.dataset.c===id||walk(id,up,new Set()).has(e.dataset.c)||walk(id,down,new Set()).has(e.dataset.p)))); }
  function clear(){ org.classList.remove("focus"); nodes.forEach(n=>n.classList.remove("on")); svg.querySelectorAll(".on").forEach(e=>e.classList.remove("on")); }
  nodes.forEach(n=>{ n.addEventListener("mouseenter",()=>focus(n.dataset.id)); n.addEventListener("focus",()=>focus(n.dataset.id));
    n.addEventListener("mouseleave",clear); n.addEventListener("blur",clear); });
  const dlg=document.getElementById("lgd");
  nodes.forEach(n=>n.addEventListener("click",()=>{ dlg.querySelector("#lgdK").textContent=n.dataset.tag; dlg.querySelector("#lgdN").textContent=n.dataset.name; dlg.querySelector("#lgdT").textContent=n.dataset.desc;
    const a=dlg.querySelector("#lgdA"); if(n.dataset.href){ a.href=n.dataset.href; a.innerHTML=n.dataset.link+' <span aria-hidden="true">→</span>'; a.style.display="inline-flex"; } else a.style.display="none";
    dlg.classList.add("open"); dlg.querySelector(".x").focus(); }));
  const close=()=>dlg.classList.remove("open");
  dlg.querySelector(".x").addEventListener("click",close); dlg.addEventListener("click",e=>{ if(e.target===dlg) close(); });
  addEventListener("keydown",e=>{ if(e.key==="Escape") close(); });
})();
/* species video: muted preview when visible, click for sound + controls */
(function(){
  document.querySelectorAll(".sp-player").forEach(fig=>{
    const v=fig.querySelector("video"), b=fig.querySelector(".sp-play");
    const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
    if("IntersectionObserver" in window && !reduce){
      new IntersectionObserver(es=>es.forEach(e=>{ if(fig.classList.contains("playing")) return;
        if(e.isIntersecting){ v.preload="auto"; v.play().catch(()=>{}); } else v.pause(); }),{threshold:.4}).observe(fig);
    }
    b.addEventListener("click",()=>{ fig.classList.add("playing"); v.muted=false; v.controls=true; v.currentTime=0; v.play().catch(()=>{}); });
  });
})();
/* YouTube facade: nothing from YouTube loads until the user clicks */
(function(){
  const btn=document.querySelector(".yt-open"), m=document.getElementById("ytm"); if(!btn||!m) return;
  const frame=m.querySelector(".yt-frame"); let warmed=false;
  const warm=()=>{ if(warmed) return; warmed=true; ["https://www.youtube-nocookie.com","https://i.ytimg.com"].forEach(h=>{ const l=document.createElement("link"); l.rel="preconnect"; l.href=h; document.head.appendChild(l); }); };
  btn.addEventListener("pointerenter",warm); btn.addEventListener("focus",warm);
  const close=()=>{ m.classList.remove("open"); frame.innerHTML=""; btn.focus(); };
  btn.addEventListener("click",()=>{
    frame.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${btn.dataset.yt}?autoplay=1&start=${btn.dataset.start||0}&rel=0&playsinline=1" title="Gulf Aquaculture video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    m.classList.add("open"); m.querySelector(".yt-x").focus(); });
  m.querySelector(".yt-x").addEventListener("click",close);
  m.addEventListener("click",e=>{ if(e.target===m) close(); });
  addEventListener("keydown",e=>{ if(e.key==="Escape"&&m.classList.contains("open")) close(); });
})();
/* YouTube cover: fetched only when the band is about to scroll into view (no YouTube scripts) */
(function(){
  const img=document.querySelector(".yt-thumb"); if(!img) return;
  const load=()=>{ img.onload=()=>{ if(img.naturalWidth>200) img.classList.add("ok"); else if(img.dataset.fallback&&img.src!==img.dataset.fallback) img.src=img.dataset.fallback; };
    img.onerror=()=>{ if(img.dataset.fallback&&img.src!==img.dataset.fallback) img.src=img.dataset.fallback; };
    img.src=img.dataset.src; };
  if("IntersectionObserver" in window){ const io=new IntersectionObserver(es=>{ if(es.some(e=>e.isIntersecting)){ io.disconnect(); load(); } },{rootMargin:"300px"}); io.observe(img.parentElement); }
  else load();
})();
/* About sub-nav: highlight the section you land on + scroll-spy */
(function(){
  const nav=document.querySelector(".ab-sub"); if(!nav) return; let lock=0;
  const links=[...nav.querySelectorAll('a[href^="#"]')];
  const target=id=>id==="story"?document.getElementById("story-head"):document.getElementById(id);
  links.forEach(a=>a.addEventListener("click",e=>{
    const id=a.getAttribute("href").slice(1), el=document.getElementById(id); if(!el) return;
    e.preventDefault(); history.replaceState(null,"","#"+id);
    el.scrollIntoView({behavior:"smooth",block:id==="principles"||id==="mission"?"center":"start"});
    const t=target(id)||el; t.classList.remove("tgt-flash"); void t.offsetWidth; setTimeout(()=>t.classList.add("tgt-flash"),350);
    setTimeout(()=>t.classList.remove("tgt-flash"),2200);
    links.forEach(l=>l.classList.toggle("on",l===a)); lock=Date.now()+1400;
  }));
  const secs=links.map(l=>document.getElementById(l.getAttribute("href").slice(1))).filter(Boolean);
  if("IntersectionObserver" in window){
    const io=new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting && Date.now()>lock){ links.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+en.target.id)); } }),{rootMargin:"-45% 0px -50% 0px"});
    secs.forEach(s=>io.observe(s));
  }
})();
/* ===== mega menu + audience profiles ===== */
(function(){
  const AUDN={o:"Commercial Operators",g:"Government & Investors",r:"Universities & R&D"};
  const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{v?localStorage.setItem(k,v):localStorage.removeItem(k)}catch(e){}}};
  /* mega menu: hover on desktop, click/keyboard everywhere */
  const megas=[...document.querySelectorAll(".has-mega")];
  const closeAll=except=>megas.forEach(m=>{ if(m!==except){ m.classList.remove("open"); m.firstElementChild.setAttribute("aria-expanded","false"); } });
  megas.forEach(m=>{
    const a=m.firstElementChild; let t;
    const open=()=>{ clearTimeout(t); closeAll(m); m.classList.add("open"); a.setAttribute("aria-expanded","true"); };
    const close=()=>{ t=setTimeout(()=>{ m.classList.remove("open"); a.setAttribute("aria-expanded","false"); },320); };
    m.addEventListener("mouseenter",open); m.addEventListener("mouseleave",close);
    a.addEventListener("focus",open);
    a.addEventListener("click",e=>{ if(matchMedia("(hover:none)").matches && !m.classList.contains("open")){ e.preventDefault(); open(); } });
    m.addEventListener("focusout",e=>{ if(!m.contains(e.relatedTarget)) close(); });
  });
  addEventListener("keydown",e=>{ if(e.key==="Escape") closeAll(null); });
  /* mobile menu links close the drawer */
  document.querySelectorAll(".mnav a").forEach(l=>l.addEventListener("click",()=>{ document.querySelector(".mnav")?.classList.remove("open"); document.body.style.overflow=""; }));
  /* profiles */
  const panel=document.getElementById("accPanel");
  const btns=[...document.querySelectorAll(".acc-btn")];
  function apply(k){
    if(k) document.body.dataset.aud=k; else delete document.body.dataset.aud;
    store.set("ga-aud",k||"");
    btns.forEach(b=>b.setAttribute("aria-pressed",b.dataset.aud===k));
    document.querySelectorAll("li[data-aud]").forEach(li=>li.classList.toggle("hl",!!k && li.dataset.aud.includes(k)));
    document.querySelectorAll(".menu>li.has-mega").forEach(li=>{
      const on=!!k && li.querySelector("li.hl"); li.classList.toggle("hl-parent",!!on);
      const a=li.firstElementChild; let d=a.querySelector(".hl-dot"); if(!d){ d=document.createElement("span"); d.className="hl-dot"; a.appendChild(d); }
    });
    document.querySelectorAll(".mega-aud").forEach(p=>p.textContent=k?`Highlighted for ${AUDN[k]}`:"");
    const r=document.querySelector(".aud-ribbon .ar-txt"); if(r) r.innerHTML=k?`Browsing as <b>${AUDN[k]}</b><span class="ar-more"> — highlighted pages in the menu are selected for you</span>`:"";
  }
  function showPane(k){
    if(!panel) return;
    panel.querySelectorAll(".acc-pane").forEach(p=>p.hidden=p.dataset.for!==k);
    panel.hidden=!k; btns.forEach(b=>b.setAttribute("aria-expanded",!!k && b.dataset.aud===k));
  }
  btns.forEach(b=>b.addEventListener("click",()=>{
    const k=b.dataset.aud, cur=document.body.dataset.aud, openNow=panel && !panel.hidden;
    if(cur===k && openNow){ showPane(null); return; }
    apply(k); showPane(k);
  }));
  document.querySelectorAll(".acc-clear").forEach(c=>c.addEventListener("click",()=>{ apply(null); showPane(null); }));
  apply(store.get("ga-aud")||null);
})();
/* clickable plan hotspots -> video dialog */
(function(){
  const m=document.getElementById("hsm"); if(!m) return;
  const frame=m.querySelector(".yt-frame"), title=m.querySelector(".hsm-t"); let last=null;
  const tip=document.createElement("div"); tip.className="hs-tip"; document.body.appendChild(tip);
  const open=h=>{ last=h; title.textContent=h.dataset.title.replace("&amp;","&");
    frame.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${h.dataset.yt}?autoplay=1&start=${h.dataset.start||0}&rel=0&playsinline=1" title="${title.textContent} — video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    m.classList.add("open"); m.querySelector(".yt-x").focus(); tip.classList.remove("on"); };
  const close=()=>{ m.classList.remove("open"); frame.innerHTML=""; last?.focus(); };
  document.querySelectorAll(".hs").forEach(h=>{
    h.addEventListener("click",e=>{ e.preventDefault(); open(h); });
    h.addEventListener("keydown",e=>{ if(e.key===" "){ e.preventDefault(); open(h); } });
    h.addEventListener("mousemove",e=>{ tip.innerHTML=`${h.dataset.title}<b>▶ Watch</b>`; tip.style.left=e.clientX+"px"; tip.style.top=e.clientY+"px"; tip.classList.add("on"); });
    h.addEventListener("mouseleave",()=>tip.classList.remove("on"));
  });
  m.querySelector(".yt-x").addEventListener("click",close);
  m.addEventListener("click",e=>{ if(e.target===m) close(); });
  addEventListener("keydown",e=>{ if(e.key==="Escape"&&m.classList.contains("open")) close(); });
})();
/* Home link and logo reset to neutral browsing (clear profile) */
(function(){
  const reset=()=>{ try{localStorage.removeItem("ga-aud")}catch(e){} delete document.body.dataset.aud; };
  document.querySelectorAll('a.brand, .menu>li>a[href="index.html"], .mnav a.mn-top[href="index.html"]').forEach(a=>a.addEventListener("click",reset));
})();

/* News filter */
(function(){if(location.hash==='#media-gallery'){location.replace('gallery.html');return}var ch=document.querySelector('.nw-chips');if(!ch)return;
 var cards=[].slice.call(document.querySelectorAll('#nwGrid .nw-card')),empty=document.getElementById('nwEmpty'),list=document.getElementById('articles'),gal=document.getElementById('media-gallery');
 function closeMenus(){document.querySelectorAll('.has-mega.open').forEach(function(m){m.classList.remove('open')});if(document.activeElement&&document.activeElement.blur)document.activeElement.blur()}
 function f(c,scroll){var ok=[].some.call(ch.children,function(b){return b.dataset.f===c});if(!ok)c='all';
  [].forEach.call(ch.children,function(b){b.classList.toggle('on',b.dataset.f===c)});
  if(c==='media-gallery'){cards.forEach(function(x){x.hidden=false});empty.hidden=true;if(scroll)gal.scrollIntoView({behavior:'smooth'});return}
  var n=0;cards.forEach(function(x){var s=c==='all'||x.dataset.cat===c;x.hidden=!s;if(s)n++});empty.hidden=n>0;
  if(scroll)list.scrollIntoView({behavior:'smooth'})}
 ch.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;f(b.dataset.f,b.dataset.f==='media-gallery');if(b.dataset.f!=='media-gallery')history.replaceState(null,'',b.dataset.f==='all'?'news.html':'#cat='+b.dataset.f)});
 function fromHash(){var h=location.hash,m=h.match(/cat=([a-z-]+)/);
  if(m){closeMenus();setTimeout(function(){f(m[1],true)},60)}
  else if(h==='#media-gallery'||h==='#articles'){closeMenus();setTimeout(function(){(h==='#articles'?list:gal).scrollIntoView({behavior:'smooth'})},60)}}
 fromHash();window.addEventListener('hashchange',fromHash);
 document.addEventListener('click',function(e){var a=e.target.closest('a[href*="news.html#"]');if(a&&location.pathname.match(/news\.html$/)&&a.hash===location.hash){e.preventDefault();fromHash()}});})();

/* 3D experience → site pages: "Discover more" / "More details" open the matching page.
   Same-origin: listen to the 3D app's aqua:cta event on the real iframe document; fallback: postMessage. */
(function(){var fr=document.querySelector('.xp3d iframe');if(!fr)return;
 var ITEM={'fish-hamour':'species-hamour.html','fish-hamrah':'species-hamra.html','fish-shaari':'species-shaari.html','fish-ummdrais':'species-umm-drais.html','stock':'species.html','aq':'species.html'};
 var BLD={broodstock:'operations.html#cycle',hatchery:'operations.html#cycle',nursery:'operations.html#cycle',livefeed:'operations.html#overview',
  research:'asset-skmrc.html',plantroom:'asset-skmrc.html',genroom:'asset-skmrc.html',visitor:'asset-skmrc.html',seacages:'species.html'};
 var hookedDoc=null,lastGo=0;
 function go(id,item){var u=(item&&ITEM[item])||BLD[id];if(!u)return;var now=Date.now();if(now-lastGo<800)return;lastGo=now;window.location.href=u}
 function onCta(e){var x=e.detail||{};go(x.id,x.item)}
 function hook(){try{var d=fr.contentDocument;if(!d||d===hookedDoc||d.URL==='about:blank')return;d.addEventListener('aqua:cta',onCta);hookedDoc=d}catch(err){}}
 fr.addEventListener('load',hook);hook();
 window.addEventListener('message',function(e){if(e.source!==fr.contentWindow)return;var d=e.data||{};if(d.type!=='aqua:cta')return;hook();go(d.id,d.item)});
})();

/* Languages: Arabic placeholder (RTL version to be built) */
document.querySelectorAll('.lang-soon').forEach(function(b){b.addEventListener('click',function(){var t=document.querySelector('.lang-toast');if(t)t.remove();t=document.createElement('div');t.className='lang-toast';t.setAttribute('role','status');t.textContent=b.dataset.soon;document.body.appendChild(t);setTimeout(function(){t.remove()},2600)})});

/* Species distribution map */
(function(){var m=document.getElementById('distribution');if(!m)return;
 var chips=[].slice.call(m.querySelectorAll('.rm-chips button')),rs=[].slice.call(m.querySelectorAll('.rm-range'));
 function set(b){chips.forEach(function(c){c.classList.toggle('on',c===b);c.setAttribute('aria-selected',c===b)});
  rs.forEach(function(r){r.classList.toggle('on',r.dataset.r===b.dataset.r)});
  m.querySelector('.rm-en').textContent=b.dataset.en;m.querySelector('.rm-sci i').textContent=b.dataset.sci;m.querySelector('.rm-txt').textContent=b.dataset.t;
  m.querySelector('#rmLink').href='species-'+b.dataset.k+'.html'}
 chips.forEach(function(b){b.setAttribute('role','tab');b.addEventListener('click',function(){set(b)})});
 var q=new URLSearchParams(location.search).get('sp'),st=chips.filter(function(c){return c.dataset.k===q})[0]||chips[0];set(st);})();
/* distribution map: zoom on Gulf → South-East Asia on small screens so labels stay readable */
(function(){var svg=document.querySelector('#distribution .rm-map svg');if(!svg)return;var full=svg.getAttribute('viewBox');
 var vb=full.split(' ').map(Number),txt=[].slice.call(svg.querySelectorAll('.rm-site text'));txt.forEach(function(t){t.dataset.full=t.textContent});
 function fit(){var s=window.innerWidth<700,w=650,h=Math.round(w*vb[3]/vb[2]);svg.setAttribute('viewBox',s?('150 50 '+w+' '+h):full);svg.classList.toggle('rm-small',s);
  txt.forEach(function(t){t.textContent=s?t.dataset.short:t.dataset.full})}
 fit();window.addEventListener('resize',fit);})();

/* Media gallery: album filter + lightbox (click, arrows, keyboard, swipe) */
(function(){var ch=document.querySelector('.gl-chips');
 if(ch){var items=[].slice.call(document.querySelectorAll('.gl-item'));
  ch.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;[].forEach.call(ch.children,function(x){x.classList.toggle('on',x===b)});
   items.forEach(function(it){it.hidden=!(b.dataset.f==='all'||it.dataset.al===b.dataset.f)})})}
 var links=function(){return [].slice.call(document.querySelectorAll('a[data-lb]')).filter(function(a){return !a.closest('[hidden]')})};
 if(!document.querySelector('a[data-lb]'))return;
 var lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Photo viewer');lb.hidden=true;
 lb.innerHTML='<button class="lb-x" aria-label="Close">×</button><button class="lb-p" aria-label="Previous photo">‹</button><figure><img alt=""><figcaption><span class="lb-c"></span><span class="lb-n"></span></figcaption></figure><button class="lb-n2" aria-label="Next photo">›</button>';
 document.body.appendChild(lb);var img=lb.querySelector('img'),cap=lb.querySelector('.lb-c'),num=lb.querySelector('.lb-n'),cur=0,list=[],last=null;
 function show(i){list=links();if(!list.length)return;cur=(i+list.length)%list.length;var a=list[cur];img.classList.remove('in');img.onload=function(){img.classList.add('in')};img.src=a.getAttribute('href');img.alt=a.dataset.cap||'';cap.textContent=a.dataset.cap||'';num.textContent=(cur+1)+' / '+list.length}
 function open(a){last=a;lb.hidden=false;document.documentElement.classList.add('lb-open');show(links().indexOf(a));lb.querySelector('.lb-x').focus()}
 function close(){lb.hidden=true;document.documentElement.classList.remove('lb-open');img.src='';if(last)last.focus()}
 document.addEventListener('click',function(e){var a=e.target.closest('a[data-lb]');if(a){e.preventDefault();open(a)}});
 lb.querySelector('.lb-x').onclick=close;lb.querySelector('.lb-p').onclick=function(){show(cur-1)};lb.querySelector('.lb-n2').onclick=function(){show(cur+1)};
 lb.addEventListener('click',function(e){if(e.target===lb||e.target.tagName==='FIGURE')close()});
 document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(cur-1);else if(e.key==='ArrowRight')show(cur+1)});
 var x0=null;lb.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
 lb.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)show(cur+(dx<0?1:-1));x0=null});
})();

/* Contact hub: one bubble → assistant (demo) · WhatsApp · enquiry form */
(function(){var hub=document.getElementById('hub');if(!hub)return;
 var fab=document.getElementById('hubFab'),menu=document.getElementById('hubMenu'),chat=document.getElementById('hubChat'),body=document.getElementById('hcBody');
 function close(){hub.classList.remove('open');menu.hidden=true;chat.hidden=true;fab.setAttribute('aria-expanded','false')}
 fab.addEventListener('click',function(){var open=!hub.classList.contains('open');if(!open){close();return}
   hub.classList.add('open');menu.hidden=false;chat.hidden=true;fab.setAttribute('aria-expanded','true');[].forEach.call(menu.children,function(c){c.style.animation='none';c.offsetHeight;c.style.animation=''})});
 hub.querySelector('[data-hub="ai"]').addEventListener('click',function(){menu.hidden=true;chat.hidden=false;var x=chat.querySelector('.hc-x');x&&x.focus()});
 chat.querySelector('.hc-x').addEventListener('click',close);
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&hub.classList.contains('open'))close()});
 document.addEventListener('click',function(e){if(hub.classList.contains('open')&&!hub.contains(e.target))close()});
 var A={fry:['Fry availability','We supply Hamour, Hamra, Shiqra, Shaari and Seabream fry to regional farms. Tell us species, quantity, size and delivery date and our team will confirm availability. <a href="contact.html?type=fry#fry">Request fry →</a>'],
  species:['Our species','We focus on native Gulf species — resilient and adapted to local heat and salinity. <a href="species.html">Explore our species →</a>'],
  visit:['Visit a facility','Government, research and commercial partners can request a visit to Balghailam Island or the Sheikh Khalifa Marine Research Centre. <a href="contact.html?type=general#general">Ask for a visit →</a>'],
  invest:['Partnerships','We work with investors, government bodies and universities on food security, Phase II growth and research. <a href="contact.html?type=investor#investor">Start a conversation →</a>']};
 body.addEventListener('click',function(e){var b=e.target.closest('[data-q]');if(!b)return;var a=A[b.dataset.q];
   var me=document.createElement('div');me.className='hc-msg me';me.textContent=a[0];body.appendChild(me);
   var t=document.createElement('div');t.className='hc-typing';t.innerHTML='<i></i><i></i><i></i>';body.appendChild(t);body.scrollTop=body.scrollHeight;
   setTimeout(function(){t.remove();var r=document.createElement('div');r.className='hc-msg bot';r.innerHTML=a[1];body.appendChild(r);body.scrollTop=body.scrollHeight},900)});
})();
