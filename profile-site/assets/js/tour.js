/* Guided tour per access profile: "takes you by the hand" through the right pages in the right order.
   State persists across pages (localStorage "ga-tour"); can be started/stopped at any time. */
(function(){
  var KEY='ga-tour', NAMES={o:'Commercial Operators',g:'Government & Investors',r:'Universities & R&D'};
  var TOURS={
   o:[
    {u:'native-gulf-fish-species-fry-supply.html',t:'.spx',h:'Native species, ready for your farm',d:'Start with our core species: native to the Gulf and adapted to its heat and salinity.'},
    {u:'hamour-orange-spotted-grouper-fry.html',t:'text:Fry availability',h:'Fry availability & specifications',d:'Every species page lists status, sizes and how to request fry. Hamour is our flagship species.'},
    {u:'native-gulf-fish-species-fry-supply.html',t:'#distribution',h:'Where each species thrives',d:'Select a species to see its natural range and the sites where we and our partners operate.'},
    {u:'hatchery-operations-production-cycle.html',t:'#cycle',h:'From broodstock to fry',d:'Five production phases under continuous laboratory oversight, with full traceability.'},
    {u:'hatchery-operations-production-cycle.html',t:'#infrastructure',h:'Biosecure, replicable systems',d:'RAS, filtration, water-quality monitoring and biosecurity behind every batch we ship.'},
    {u:'sheikh-khalifa-marine-research-centre-skmrc.html',t:'text:Hatchery infrastructure',h:'Production capacity',d:'The Sheikh Khalifa Marine Research Centre: ≈18,000 m² of hatchery space and a 20-million-fry target for 2026.'},
    {u:'contact-gulf-aquaculture-fry-orders.html?type=fry#fry',t:'#form',h:'Request fry',d:'Tell us species, quantity, size and delivery date — our commercial team will reply with availability.'}],
   g:[
    {u:'about-gulf-aquaculture-abu-dhabi.html',t:'#story',h:'Who we are',d:'A UAE joint venture founded in 2023 to build aquaculture designed for this region.'},
    {u:'about-gulf-aquaculture-abu-dhabi.html',t:'#mission',h:'Mission & vision',d:'Proving that aquaculture can work in harmony with the Gulf’s ecosystems and communities.'},
    {u:'about-gulf-aquaculture-abu-dhabi.html',t:'#role',h:'Our regional role',d:'Easing pressure on wild stocks and reducing the environmental footprint of seafood supply.'},
    {u:'about-gulf-aquaculture-abu-dhabi.html',t:'#achievements',h:'Recognition',d:'Sheikh Mansour Agriculture Award (2025) and BAP certification for both assets (2026).'},
    {u:'sustainable-aquaculture-growth-strategy.html',t:'#legal-structure',h:'Governance & ownership',d:'The legal structure behind Gulf Aquaculture and its partners.'},
    {u:'sustainable-aquaculture-growth-strategy.html',t:'#future-growth',h:'The plan for growth',d:'Phase II approved: vertical expansion, new sites, broodstock development and strategic partnerships.'},
    {u:'sustainable-aquaculture-growth-strategy.html',t:'#footprint',h:'Regional footprint',d:'Operations and partners across the UAE, Oman, Malaysia and Indonesia.'},
    {u:'sheikh-khalifa-marine-research-centre-skmrc.html',t:'text:Phase 01',h:'A national asset',d:'The largest hatchery and nursery facility in the Gulf, operated under a 15-year government concession.'},
    {u:'aquaculture-news-uae-gulf.html#cat=projects-and-partnerships',t:'#articles',h:'Latest projects & partnerships',d:'Concessions, supply agreements and partnerships, as they happen.'},
    {u:'contact-gulf-aquaculture-fry-orders.html?type=investor#investor',t:'#form',h:'Start a conversation',d:'Investment, government and institutional partnerships — the form routes you to the right team.'}],
   r:[
    {u:'sheikh-khalifa-marine-research-centre-skmrc.html',t:'text:Laboratories and diagnostics',h:'14 laboratories',d:'Provisioned for ISO/IEC 17025: water quality, microbiology and diagnostics at the Sheikh Khalifa Marine Research Centre.'},
    {u:'hatchery-operations-production-cycle.html',t:'#infrastructure',h:'Systems & monitoring',d:'RAS, intake and filtration, water-quality monitoring, biosecurity and live-feed production.'},
    {u:'hatchery-operations-production-cycle.html',t:'#cycle',h:'The production cycle',d:'Broodstock, spawning, larval rearing, nursery and grow-out — each phase tested before it is scaled.'},
    {u:'native-gulf-fish-species-fry-supply.html',t:'#distribution',h:'Species & natural ranges',d:'Native Indo-West Pacific species and where they live.'},
    {u:'native-gulf-fish-species-fry-supply.html',t:'text:Other species',h:'Broodstock development',d:'Programmes for climate resilience and year-round spawning, and species under evaluation.'},
    {u:'aquaculture-news-uae-gulf.html#cat=research-and-publications',t:'#articles',h:'Research & publications',d:'Scientific work and research news from our sites.'},
    {u:'gulf-aquaculture-team-aquaculture-experts.html',t:'#team',h:'Our scientists & specialists',d:'The people behind the research — click a portrait to read their profile.'},
    {u:'contact-gulf-aquaculture-fry-orders.html?type=research#research',t:'#form',h:'Collaborate with us',d:'Laboratory access, broodstock programmes and academic partnerships.'}]
  };
  var page=location.pathname.split('/').pop()||'index.html';
  function get(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){return null}}
  function set(v){try{v?localStorage.setItem(KEY,JSON.stringify(v)):localStorage.removeItem(KEY)}catch(e){}}
  function pathOf(u){return u.split(/[?#]/)[0]}
  function find(t){
    if(t.indexOf('text:')===0){var q=t.slice(5).toLowerCase();var hs=[].slice.call(document.querySelectorAll('main h2,main h3'));
      for(var i=0;i<hs.length;i++){if(hs[i].textContent.toLowerCase().indexOf(q)>-1){return hs[i].closest('.spec,.fx-card,.sp-prog,section')||hs[i]}}return null}
    return document.querySelector(t)}
  var box=null,hl=null;
  function ui(st){
    if(!box){box=document.createElement('aside');box.className='tour';box.setAttribute('aria-live','polite');box.setAttribute('aria-label','Guided tour');document.body.appendChild(box)}
    document.documentElement.classList.add('tour-on');
    var steps=TOURS[st.p],s=steps[st.i],here=pathOf(s.u)===page,last=st.i===steps.length-1;
    var dots=steps.map(function(_,k){return '<i class="'+(k<st.i?'done':k===st.i?'cur':'')+'"></i>'}).join('');
    box.innerHTML='<div class="tour-top"><span class="tour-hand" aria-hidden="true">☝</span><span class="tour-p">Guided tour · '+NAMES[st.p]+'</span><button type="button" class="tour-x" aria-label="End tour" title="End tour">×</button></div>'+
      '<div class="tour-dots" aria-hidden="true">'+dots+'</div><p class="tour-n">Step '+(st.i+1)+' of '+steps.length+'</p><h2 class="tour-h">'+s.h+'</h2><p class="tour-d">'+s.d+'</p>'+
      '<div class="tour-nav"><button type="button" class="tour-b"'+(st.i===0?' disabled':'')+'>← Back</button>'+
      (here?'<button type="button" class="tour-f">'+(last?'Finish tour ✓':'Next →')+'</button>':'<button type="button" class="tour-g">Take me there →</button>')+'</div>';
    box.querySelector('.tour-x').onclick=stop;
    box.querySelector('.tour-b').onclick=function(){go(st.p,st.i-1)};
    var f=box.querySelector('.tour-f');if(f)f.onclick=function(){last?stop(true):go(st.p,st.i+1)};
    var g=box.querySelector('.tour-g');if(g)g.onclick=function(){go(st.p,st.i)};
    if(here)focusTarget(s.t);
    syncBtns();
  }
  function focusTarget(t){var el=find(t);if(hl)hl.classList.remove('tour-hl');if(!el)return;hl=el;
    setTimeout(function(){el.scrollIntoView({behavior:'smooth',block:el.offsetHeight>innerHeight*.7?'start':'center'});el.classList.add('tour-hl')},350)}
  function go(p,i){var steps=TOURS[p];if(i<0||i>=steps.length)return;set({p:p,i:i});var s=steps[i];
    if(pathOf(s.u)===page){ui({p:p,i:i});if(s.u.indexOf('#')>-1&&s.u.indexOf('cat=')>-1){location.hash=s.u.split('#')[1]}}
    else location.href=s.u}
  function stop(done){set(null);if(hl)hl.classList.remove('tour-hl');document.documentElement.classList.remove('tour-on');
    if(box){if(done===true){box.innerHTML='<div class="tour-top"><span class="tour-hand" aria-hidden="true">✓</span><span class="tour-p">Tour complete</span><button type="button" class="tour-x" aria-label="Close">×</button></div><p class="tour-d">Thank you — you can restart it any time from “Access by profile”.</p>';
      box.querySelector('.tour-x').onclick=function(){box.remove();box=null};setTimeout(function(){if(box){box.remove();box=null}},5000)}else{box.remove();box=null}}
    syncBtns()}
  function start(p){if(!TOURS[p])return;go(p,0)}
  function syncBtns(){var st=get();document.querySelectorAll('[data-tour]').forEach(function(b){var on=st&&st.p===(b.dataset.tour||currentAud());
    b.classList.toggle('on',!!on);var l=b.querySelector('.tl');if(l)l.textContent=on?'End guided tour':'Start guided tour'})}
  function currentAud(){return document.body.dataset.aud||''}
  document.addEventListener('click',function(e){var b=e.target.closest('[data-tour]');if(!b)return;e.preventDefault();
    var p=b.dataset.tour||currentAud();if(!p)return;var st=get();if(st&&st.p===p)stop();else start(p)});
  var st=get();if(st&&TOURS[st.p]&&TOURS[st.p][st.i])ui(st);else syncBtns();
  window.addEventListener('keydown',function(e){if(e.key==='Escape'&&get())stop()});
  window.gaTour={start:start,stop:stop};
})();
