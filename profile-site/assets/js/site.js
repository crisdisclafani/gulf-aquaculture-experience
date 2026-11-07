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
if(f){ const h=location.hash.slice(1); const pre=$(`.who input[value="${h}"]`); if(pre){ pre.checked=true; }
  f.addEventListener("submit",e=>{ e.preventDefault(); const m=$("#msg");
    const errs=[]; if(!$$(".who input:checked").length) errs.push("tell us who you are"); if(!$("#n").value.trim()) errs.push("add your name"); if(!$("#e").value.includes("@")) errs.push("add a valid email"); if(!$("#c").checked) errs.push("accept the privacy note");
    m.style.display="block"; m.innerHTML = errs.length ? `Please ${errs.join(", ")}.` : "<b>Thank you.</b> This is a demo — the form is not connected yet. In the live site your message reaches info@gulfaquaculture.com."; }); }
})();
