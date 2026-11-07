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
    <image href="assets/img/cage-ring.jpg" x="${C[0]-175}" y="${C[1]-175}" width="350" height="350" clip-path="url(#cc)"/>
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
if(f){ const sq=new URLSearchParams(location.search).get("species"); if(sq&&$("#m")) $("#m").value=`Fry enquiry: ${sq}. `; const h=location.hash.slice(1); const pre=$(`.who input[value="${h}"]`); if(pre){ pre.checked=true; }
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
