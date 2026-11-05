/* =========================================================================
   GULF AQUACULTURE — shared front-end script (all pages)
   Data comes from data.js (in the CMS: menus, taxonomies, content types).
   Every renderer checks that its container exists, so the same file runs
   on every page.
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
let lang = store.get("ga-lang")==="ar" ? "ar" : "en";
let currentAud = store.get("ga-aud"); if(!AUDIENCES[currentAud]) currentAud = null;

function toast(msg){ const t=$("#toast"); if(!t) return; t.innerHTML=msg; t.classList.add("show"); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove("show"),3800); }

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
          <a href="${s.page}" class="btn btn-ink" style="padding:11px 20px;font-size:.72rem">Section overview <span class="arrow">→</span></a>
          <div class="for">${a.map(x=>`<span class="tag ${x}"><i class="dot ${x}"></i>${AUDIENCES[x].name}</span>`).join("")}</div>
        </div>
        <div class="mega-links">
          ${s.items.map(i=>`<a href="${i[2]}" class="${has(i[1])}"><span>${i[0]}</span>${dots(i[1])}</a>`).join("")}
          <div class="legend-mini"><span><i class="dot o"></i>Aquaculture farms &amp; operators</span><span><i class="dot g"></i>Government authorities &amp; investors</span><span><i class="dot r"></i>Universities &amp; research institutions</span></div>
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

/* In-page sub-navigation for inner pages */
function renderSubnav(){
  const sn=$("#subnav .wrap"); if(!sn) return;
  const sec=NAV.find(s=>s.id===SECTION); if(!sec) return;
  sn.innerHTML = `<span class="sn-lbl">${sec.label}</span>` + sec.items.map(i=>{
    const cur = i[2]===FILE || i[2].split("#")[0]===FILE && false;
    return `<a href="${i[2]}" class="${has(i[1])} ${i[2]===FILE?"current":""}">${dots(i[1])}<span>${i[0]}</span></a>`;}).join("");
}

/* ---------------- AUDIENCE ---------------- */
function renderChips(){
  $$("[data-aud-chips]").forEach(box=>{
    box.innerHTML = Object.entries(AUDIENCES).map(([k,v])=>
      `<button type="button" class="chip ${k}" data-aud="${k}" aria-pressed="${currentAud===k}"><i class="dot ${k}"></i><span class="full">${lang==="ar"?v.ar:v.name}</span><span class="short">${lang==="ar"?v.ar:v.short}</span></button>`).join("");
  });
  const p=$("#paths");
  if(p) p.innerHTML = Object.entries(AUDIENCES).map(([k,v])=>
    `<a href="#top" class="path ${k} ${currentAud===k?"on":""}" data-aud="${k}">
       <span class="k">For</span><h3>${lang==="ar"?v.ar:v.name}</h3><p>${v.blurb}</p>
       <span class="go">Show my pathway <span class="arrow">→</span></span></a>`).join("");
}

function applyAudience(k){
  currentAud = k;
  if(k) document.body.dataset.aud = k; else delete document.body.dataset.aud;
  store.set("ga-aud",k);
  $$(".chip").forEach(c=>c.setAttribute("aria-pressed",c.dataset.aud===k));
  $$(".path").forEach(p=>p.classList.toggle("on",p.dataset.aud===k));
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
  onScroll();
}

document.addEventListener("click",e=>{
  const chip = e.target.closest(".chip[data-aud], .path[data-aud]");
  if(chip){
    e.preventDefault();
    const k = chip.dataset.aud, isPath = chip.classList.contains("path");
    applyAudience(currentAud===k && !isPath ? null : k);
    if(currentAud) toast(`<b>${AUDIENCES[k].name}</b> — relevant pages are now highlighted in the menu and on every page.`);
    return;
  }
  if(e.target.closest("[data-close]")) closeDrawer();
  if(!e.target.closest("#nav")) $$("#nav>li").forEach(x=>x.classList.remove("open"));
});

/* ---------------- HOME ---------------- */
function renderHome(){
  const st=$("#stages");
  if(st){
    st.innerHTML = STAGES.map((s,i)=>`<button type="button" class="stage" role="tab" aria-selected="${i===0}" data-i="${i}"><span class="n">${i+1}</span><span class="t">${s.t}</span></button>`).join("");
    $$(".stage").forEach(b=>b.addEventListener("click",()=>showStage(+b.dataset.i)));
    showStage(0);
  }
  const sec = id => NAV.find(s=>s.id===id);
  const al=$("#aboutLinks");
  if(al) al.innerHTML = sec("about").items.map(i=>`<a href="${i[2]}">${dots(i[1])}${i[0]}</a>`).join("");

  const fl=$("#facList");
  if(fl){
    fl.innerHTML = FACILITIES.map((f,i)=>`<a href="${f[4]}" class="fac ${has(f[3])}" data-fac="${i}"><span class="code">${f[0]}</span><div><h3>${f[1]}</h3><p>${f[2]}</p></div>${dots(f[3])}</a>`).join("");
    $$(".fac").forEach(f=>{ const on=()=>{ $$(".fac").forEach(x=>x.classList.toggle("on",x===f)); $$(".pin").forEach(p=>p.classList.toggle("on",p.dataset.pin===f.dataset.fac)); }; f.addEventListener("mouseenter",on); f.addEventListener("focus",on); });
  }
  const sp=$("#spGrid");
  if(sp) sp.innerHTML = SPECIES.map((s,i)=>speciesCard(s,i)).join("");

  const sg=$("#sciGrid");
  if(sg) sg.innerHTML = sec("science").items.map((s,i)=>`<a href="${s[2]}" class="sci ${has(s[1])}"><span class="num">0${i+1}</span><h3>${s[0]}</h3><p>${SCIENCE_DESC[i]}</p>${dots(s[1])}</a>`).join("");

  const rl=$("#resList");
  if(rl) rl.innerHTML = sec("research").items.slice(0,5).map((r,i)=>`<a href="${r[2]}"><span class="i">${["i","ii","iii","iv","v"][i]}.</span><span><strong>${r[0]}</strong><small>${RESEARCH_DESC[i]}</small></span><span class="arrow">→</span></a>`).join("");

  const su=$("#sustGrid");
  if(su) su.innerHTML = SUST_HOME.map(s=>`<a href="${s[3]}" class="${has(s[2])}"><h3>${s[0]}</h3><p>${s[1]}</p>${dots(s[2])}</a>`).join("");

  const nc=$("#newsCats");
  if(nc) nc.innerHTML = sec("news").items.map(i=>`<a href="${i[2]}">${i[0]}</a>`).join("");
}
function speciesCard(s,i){
  const fish = h=>`<svg viewBox="0 0 200 90" fill="none" aria-hidden="true"><path d="M14 45C44 10 110 6 152 45 110 84 44 80 14 45Z" fill="hsl(${h} 45% 70% / .22)" stroke="#D9C7A3" stroke-width="1"/><path d="M152 45l40-28v56l-40-28Z" fill="hsl(${h} 45% 70% / .18)" stroke="#D9C7A3" stroke-width="1"/><circle cx="42" cy="40" r="3.2" fill="#D9C7A3"/><path d="M70 22c8 14 8 32 0 46" stroke="#D9C7A3" stroke-width=".8" opacity=".6"/></svg>`;
  return `<a href="${s.href}" class="sp" data-cms="species.card">
      <div class="sp-img">${fish([20,0,350,200][i%4])}<span class="phs">Photo placeholder</span></div>
      <div class="sp-body">
        ${s.ar?`<span class="ar" lang="ar">${s.ar}</span>`:""}
        <h3>${s.name}</h3><span class="sci">${s.sci}</span>
        <div class="sp-meta"><span class="tag o"><i class="dot o"></i>${s.local!=="—"?s.local:"Fry"}</span><span class="more">Species page <span class="arrow">→</span></span></div>
      </div></a>`;
}
function showStage(i){
  const s=STAGES[i];
  $$(".stage").forEach(b=>b.setAttribute("aria-selected",+b.dataset.i===i));
  $("#stagePanel").innerHTML = `
    <div class="fade">
      <span class="eyebrow">Stage ${i+1} of 5</span><h3>${s.t}</h3><p>${s.d}</p>
      <dl class="kv"><dt>Facilities</dt><dd>${s.fac}</dd><dt>Technology</dt><dd>${s.tech}</dd>
        <dt>Most relevant</dt><dd>${[...s.aud].map(x=>`<span class="tag ${x}" style="margin:0 6px 6px 0">${AUDIENCES[x].name}</span>`).join("")}</dd></dl>
      <a href="${s.href}" class="btn btn-ghost">Explore processes &amp; technologies <span class="arrow">→</span></a>
    </div>
    <div class="ph fade"><div class="ph-label"><b>Animation placeholder · stage ${i+1}</b>${s.ph}</div></div>`;
}

/* ---------------- SPECIES INDEX ---------------- */
function renderSpeciesIndex(){
  const g=$("#spIndex"); if(g) g.innerHTML = SPECIES.map((s,i)=>speciesCard(s,i)).join("");
}

/* ---------------- NEWS ---------------- */
function renderNews(){
  const grid=$("#newsGrid"); if(!grid) return;
  const cats = NAV.find(s=>s.id==="news").items.map(i=>[i[2].split("#")[1],i[0]]);
  const f=$("#newsFilter");
  f.innerHTML = `<a href="#all" data-cat="all">All</a>` + cats.map(c=>`<a href="#${c[0]}" data-cat="${c[0]}">${c[1]}</a>`).join("");
  const draw=()=>{
    const cur = (location.hash||"#all").slice(1);
    const key = cats.some(c=>c[0]===cur) ? cur : "all";
    $$("#newsFilter a").forEach(a=>a.classList.toggle("on",a.dataset.cat===key));
    const list = POSTS.filter(p=>key==="all"||p.cat===key);
    grid.innerHTML = list.map(p=>`<a class="post ${has(p.aud)}" href="news-article.html">
        <div class="img ${p.cat==="media"?"is-media":""}"></div>
        <div class="meta"><span class="tag ${p.aud[0]||""}">${cats.find(c=>c[0]===p.cat)[1]}</span><span>${p.date}</span></div>
        <h3>${p.t}</h3></a>`).join("") || `<p>No posts in this category yet.</p>`;
  };
  addEventListener("hashchange",draw); draw();
}

/* ---------------- CONTACT ---------------- */
function renderContact(){
  const box=$("#cats"); if(!box) return;
  box.innerHTML = ENQUIRIES.map(q=>`<button type="button" class="cat ${q[3]}" data-cat="${q[0]}" aria-pressed="false"><i class="dot ${q[3]}"></i><span><strong>${q[1]}</strong><small>${q[2]}</small></span><span class="arrow">→</span></button>`).join("");
  $$(".cat").forEach(c=>c.addEventListener("click",()=>setEnquiry(c.dataset.cat)));
  const fromHash=()=>{ const h=location.hash.slice(1); if(ENQUIRIES.some(q=>q[0]===h)){ setEnquiry(h); $("#enquiry").scrollIntoView({behavior:"smooth",block:"start"}); return true;} return false; };
  if(!fromHash()) setEnquiry({o:"commercial",g:"gov",r:"research"}[currentAud]||"general");
  addEventListener("hashchange",fromHash);
  $("#form").addEventListener("submit",e=>{
    e.preventDefault(); const m=$("#formMsg");
    if(!$("#f-name").value.trim() || !$("#f-mail").value.includes("@")){ m.textContent="Please add your name and a valid email."; m.style.display="block"; return; }
    m.innerHTML="<b>Demo only —</b> the form isn't connected yet. In the live site the enquiry is saved in the CMS and emailed to the team for this category."; m.style.display="block";
  });
  $("#waBtn").addEventListener("click",e=>{ e.preventDefault(); toast("WhatsApp Business integration — number to be supplied by Gulf Aquaculture."); });
}
function setEnquiry(key){
  const q = ENQUIRIES.find(x=>x[0]===key); if(!q) return;
  $$(".cat").forEach(c=>c.setAttribute("aria-pressed",c.dataset.cat===key));
  const col = {o:["--op","--op-d"],g:["--gov","--gov-d"],r:["--res","--res-d"],n:["--ink","--ink"]}[q[3]];
  const form=$("#form");
  form.style.setProperty("--fc",`var(${col[0]})`); form.style.setProperty("--fc-d",`var(${col[1]})`);
  $("#formTitle").textContent=q[1];
  $("#formSub").textContent = q[3]==="n" ? "Routed to the Gulf Aquaculture team." : `Routed directly to the team for ${AUDIENCES[q[3]].name.toLowerCase()}.`;
  const tag=$("#formTag"); tag.className="tag "+(q[3]==="n"?"":q[3]); tag.innerHTML = q[3]==="n"?"General":`<i class="dot ${q[3]}"></i>${AUDIENCES[q[3]].name}`;
  $$(".dyn").forEach(d=>d.classList.toggle("show", d.dataset.for.split(" ").includes(key)));
  $("#formMsg").style.display="none";
}

/* ---------------- CHROME: header, drawer, notes, language, reveal ---------------- */
const hdr=$("#hdr");
function onScroll(){ if(hdr) hdr.classList.toggle("solid", scrollY>40 || !!currentAud || document.body.classList.contains("light-top")); }
addEventListener("scroll",onScroll,{passive:true});

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
  renderNav(); renderChips(); applyAudience(currentAud);
  if(announce && l==="ar") toast("RTL preview — Arabic labels are a draft for native review.");
}
$$("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang,true)));

function reveal(){
  if(!("IntersectionObserver" in window)){ $$(".rv").forEach(el=>el.classList.add("in")); return; }
  const io=new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target);} }),{threshold:.12});
  $$(".rv").forEach(el=>io.observe(el));
}

/* init */
renderHome(); renderSpeciesIndex(); renderNews(); renderContact(); renderSubnav();
setLang(lang,false);
reveal();
})();
