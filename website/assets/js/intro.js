/* =========================================================================
   GULF AQUACULTURE — cinematic homepage intro
   Real-time canvas visualisation (no video files): a brand opening, then five
   stages of the production cycle, each in its own environment, linked by an
   "iris" transition drawn as the orange ring used across the site.
   Stage data: CINE (assets/js/data.js). Respects prefers-reduced-motion.
   ========================================================================= */
(function(){
const root=document.getElementById("cine"); if(!root) return;
const cv=document.getElementById("cineCanvas"), ctx=cv.getContext("2d");
const $=(s,c=root)=>c.querySelector(s), $$=(s,c=root)=>[...c.querySelectorAll(s)];
const TAU=Math.PI*2, R=(a,b)=>a+Math.random()*(b-a), clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const ease=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;
const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
const STAGE_MS=7600, TRANS_MS=1500, INTRO_MS=2900;
let W=0,H=0,DPR=1,S=1, bufA, bufB, ca, cb;

function makeBuf(){ const b=document.createElement("canvas"); b.width=cv.width; b.height=cv.height; const c=b.getContext("2d"); c.setTransform(DPR,0,0,DPR,0,0); return [b,c]; }
function resize(){
  DPR=Math.min(devicePixelRatio||1,1.5); W=cv.clientWidth; H=cv.clientHeight;
  cv.width=Math.round(W*DPR); cv.height=Math.round(H*DPR); ctx.setTransform(DPR,0,0,DPR,0,0);
  [bufA,ca]=makeBuf(); [bufB,cb]=makeBuf();
  S=clamp(Math.min(W/1440,H/820),.55,1.25);
  SCENES.forEach(s=>s.init&&s.init());
}
const focus=()=>({x: W>900? W*.62 : W*.5, y: W>900? H*.46 : H*.36});

/* ---------- shared drawing helpers ---------- */
function vgrad(c,stops){ const g=c.createLinearGradient(0,0,0,H); stops.forEach(([o,col])=>g.addColorStop(o,col)); c.fillStyle=g; c.fillRect(0,0,W,H); }
function rgrad(c,x,y,r,stops){ const g=c.createRadialGradient(x,y,0,x,y,r); stops.forEach(([o,col])=>g.addColorStop(o,col)); return g; }
function rays(c,t,{n=7,col="190,235,245",a=.07,x0=W*.5,spread=W}={}){
  c.save(); c.globalCompositeOperation="lighter";
  for(let i=0;i<n;i++){
    const u=i/(n-1)-.5, sx=x0+u*spread*.5+Math.sin(t*.25+i*1.3)*W*.02, w=W*(.025+.02*(1+Math.sin(i*2.1)));
    const ex=x0+u*spread*.95+W*.06*Math.sin(t*.15+i);
    const g=c.createLinearGradient(0,0,0,H); const k=a*(.6+.4*Math.sin(t*.6+i*1.9));
    g.addColorStop(0,`rgba(${col},${k})`); g.addColorStop(.85,`rgba(${col},0)`);
    c.fillStyle=g; c.beginPath(); c.moveTo(sx-w*.3,0); c.lineTo(sx+w*.3,0); c.lineTo(ex+w*2.2,H); c.lineTo(ex-w*2.2,H); c.closePath(); c.fill();
  }
  c.restore();
}
function vignette(c,k=.62){ c.fillStyle=rgrad(c,W*.55,H*.45,Math.hypot(W,H)*.62,[[.45,"rgba(2,10,18,0)"],[1,`rgba(2,10,18,${k})`]]); c.fillRect(0,0,W,H); }
// stateless particles: position is a pure function of time → static frames are possible
function rising(c,t,list,col){ c.save(); c.globalCompositeOperation="lighter";
  for(const b of list){ const span=b.h+20, y=b.y1-((t*b.v+b.o)%span); const x=b.x+Math.sin(t*b.f+b.o)*b.a;
    c.beginPath(); c.arc(x,y,b.r,0,TAU); c.strokeStyle=`rgba(${col},${b.al})`; c.lineWidth=1; c.stroke();
    c.beginPath(); c.arc(x-b.r*.35,y-b.r*.35,b.r*.25,0,TAU); c.fillStyle=`rgba(${col},${b.al*1.4})`; c.fill(); }
  c.restore(); }
function mkBubbles(n,x0,x1,y1,h,rr=[1.5,5]){ return Array.from({length:n},()=>({x:R(x0,x1),y1,h,r:R(...rr)*S,v:R(25,70)*S,o:R(0,2000),f:R(.8,2),a:R(2,8)*S,al:R(.25,.6)})); }
const SPOTS=Array.from({length:14},()=>[R(-.28,.32),R(-.55,.55),R(.6,1.4)]);
function fish(c,x,y,len,dir,phase,fill,alpha,{tilt=0,spots=null,fin=true,rim=null}={}){
  c.save(); c.translate(x,y); c.rotate(tilt); c.scale(dir,1); c.globalAlpha*=alpha; c.fillStyle=fill;
  const h=len*.3, tw=Math.sin(phase)*len*.07;
  c.beginPath(); c.moveTo(len*.5,len*.02);
  c.bezierCurveTo(len*.38,-h*1.05,-len*.12,-h*.98,-len*.32,-h*.16+tw*.4);
  c.lineTo(-len*.53,-h*.78+tw); c.quadraticCurveTo(-len*.45,tw*.6,-len*.53,h*.78+tw);
  c.lineTo(-len*.32,h*.16+tw*.4); c.bezierCurveTo(-len*.12,h*.98,len*.38,h*1.02,len*.5,len*.02); c.fill(); if(rim){ c.strokeStyle=rim; c.lineWidth=1.2; c.stroke(); }
  if(fin){ c.beginPath(); c.moveTo(len*.18,-h*.8); c.quadraticCurveTo(-len*.05,-h*1.45,-len*.25,-h*.55); c.lineTo(len*.05,-h*.75); c.fill(); }
  if(spots){ c.fillStyle=spots; for(const [u,v,s] of SPOTS){ c.beginPath(); c.arc(u*len,v*h*.8,len*.018*s,0,TAU); c.fill(); } }
  c.restore();
}

/* ---------- SCENES ---------- */
const SCENES=[
/* 0 · BROODSTOCK — inside a broodstock tank: groupers, light shafts, aerators */
{ init(){ this.f=Array.from({length:10},(_,i)=>({y:R(.2,.78),z:R(.4,1.3),v:R(12,24),o:R(0,3000),d:i%3===0?-1:1,p:R(0,TAU)})).sort((a,b)=>a.z-b.z);
          this.b=[...mkBubbles(26,W*.08,W*.12,H+10,H),...mkBubbles(26,W*.88,W*.93,H+10,H)];
          this.m=Array.from({length:90},()=>({x:R(0,W),y:R(0,H),r:R(.4,1.4)*S,v:R(2,8),o:R(0,TAU)})); },
  draw(c,t){ vgrad(c,[[0,"#0F5566"],[.55,"#0A3446"],[1,"#04161F"]]);
    c.fillStyle=rgrad(c,W*.5,H*1.05,H*.7,[[0,"rgba(228,162,59,.16)"],[1,"rgba(228,162,59,0)"]]); c.fillRect(0,0,W,H);
    rays(c,t,{n:8,a:.08});
    for(const m of this.m){ c.fillStyle="rgba(200,235,240,.25)"; c.beginPath(); c.arc((m.x+Math.sin(t*.2+m.o)*20)%W,(m.y+t*m.v)%H,m.r,0,TAU); c.fill(); }
    for(const f of this.f){ const len=210*f.z*S, span=W+len*2+300, x=((f.o+t*f.v*f.z*S*f.d)%span+span)%span-len-150;
      const y=f.y*H+Math.sin(t*.4+f.p)*14*S, far=1-(f.z-.45)/.8;
      fish(c,x,y,len,f.d,t*3.2*f.z+f.p, far>.5?"#3E7584":"#7A8C84", .5+.5*(1-far), {tilt:Math.sin(t*.5+f.p)*.05, spots: far<.6?"rgba(240,190,110,.55)":null, rim: far<.6?"rgba(255,235,200,.25)":null}); }
    rising(c,t,this.b,"210,240,250");
    c.fillStyle="rgba(2,12,18,.35)"; c.fillRect(0,0,W*.05,H); c.fillRect(W*.95,0,W*.05,H);
    vignette(c); } },

/* 1 · SPAWNING & LARVAL — darkfield microscope in the SKMRC laboratory */
{ init(){ this.e=Array.from({length:24},(_,i)=>({x:R(-.75,.75),y:R(-.75,.75),r:R(.055,.095),o:R(0,TAU),l:i%4===0}));
          this.k=Array.from({length:14},()=>({x:R(0,W),y:R(0,H),r:R(30,120)*S,c:Math.random()<.6?"58,156,154":"228,162,59",o:R(0,TAU)})); },
  draw(c,t){ c.fillStyle="#03111B"; c.fillRect(0,0,W,H);
    for(const k of this.k){ c.fillStyle=rgrad(c,k.x+Math.sin(t*.1+k.o)*30,k.y,k.r,[[0,`rgba(${k.c},.14)`],[1,`rgba(${k.c},0)`]]); c.fillRect(0,0,W,H); }
    c.strokeStyle="rgba(120,180,200,.05)"; c.lineWidth=1; for(let x=0;x<W;x+=48*S){c.beginPath();c.moveTo(x,0);c.lineTo(x,H);c.stroke();} for(let y=0;y<H;y+=48*S){c.beginPath();c.moveTo(0,y);c.lineTo(W,y);c.stroke();}
    const {x:cx,y:cy}=focus(), L=Math.min(W,H)*.37;
    c.save(); c.beginPath(); c.arc(cx,cy,L,0,TAU); c.clip();
    c.fillStyle=rgrad(c,cx,cy,L,[[0,"#11455A"],[.7,"#0A2C3C"],[1,"#04141E"]]); c.fillRect(cx-L,cy-L,L*2,L*2);
    for(let i=0;i<60;i++){ const a=i*2.4+t*.05, d=L*((i*.618)%1); c.fillStyle="rgba(190,230,240,.15)"; c.beginPath(); c.arc(cx+Math.cos(a)*d,cy+Math.sin(a)*d,1.1,0,TAU); c.fill(); }
    for(const e of this.e){ const x=cx+(e.x+Math.sin(t*.22+e.o)*.05)*L, y=cy+(e.y+Math.cos(t*.18+e.o)*.05)*L, r=e.r*L;
      if(!e.l){ c.beginPath(); c.arc(x,y,r,0,TAU); c.fillStyle="rgba(170,225,240,.07)"; c.fill(); c.strokeStyle="rgba(200,240,250,.55)"; c.lineWidth=1.2; c.stroke();
        c.beginPath(); c.arc(x-r*.12,y+r*.08,r*.55,0,TAU); c.fillStyle=rgrad(c,x-r*.25,y-r*.05,r*.6,[[0,"rgba(244,200,120,.95)"],[1,"rgba(200,116,42,.75)"]]); c.fill();
        c.beginPath(); c.arc(x+r*.15,y-r*.2,r*.13,0,TAU); c.fillStyle="rgba(255,240,200,.9)"; c.fill();
        c.beginPath(); c.arc(x-r*.12,y+r*.08,r*.72,-1.9+Math.sin(t+e.o)*.1,1.2); c.strokeStyle="rgba(255,235,205,.45)"; c.lineWidth=r*.12; c.stroke(); }
      else { const ang=e.o+t*.3, wig=Math.sin(t*7+e.o)*.5; c.save(); c.translate(x,y); c.rotate(ang);
        c.beginPath(); c.moveTo(r*.9,0); for(let s=0;s<=10;s++){ const u=s/10; c.lineTo(r*.9-u*r*3.2, Math.sin(u*3+t*7+e.o)*r*.35*u+wig*u*u*r*.3); }
        c.strokeStyle="rgba(225,245,250,.75)"; c.lineWidth=r*.28; c.lineCap="round"; c.stroke();
        c.beginPath(); c.ellipse(r*.35,r*.18,r*.45,r*.32,0,0,TAU); c.fillStyle="rgba(228,162,59,.8)"; c.fill();
        c.beginPath(); c.arc(r*.85,-r*.05,r*.12,0,TAU); c.fillStyle="#08202C"; c.fill(); c.restore(); } }
    c.restore();
    c.strokeStyle="rgba(220,240,250,.35)"; c.lineWidth=2; c.beginPath(); c.arc(cx,cy,L,0,TAU); c.stroke();
    c.save(); c.translate(cx,cy); c.rotate(t*.08);
    for(let i=0;i<120;i++){ const a=i/120*TAU, k=i%10===0?14:6; c.strokeStyle=`rgba(220,240,250,${i%10===0?.45:.2})`; c.beginPath(); c.moveTo(Math.cos(a)*(L+10),Math.sin(a)*(L+10)); c.lineTo(Math.cos(a)*(L+10+k*S),Math.sin(a)*(L+10+k*S)); c.stroke(); }
    c.strokeStyle="#E4A23B"; c.lineWidth=3; c.beginPath(); c.arc(0,0,L+34*S,-.4,.6); c.stroke(); c.restore();
    c.strokeStyle="rgba(228,162,59,.5)"; c.lineWidth=1; [[0,-1],[0,1],[-1,0],[1,0]].forEach(([dx,dy])=>{ c.beginPath(); c.moveTo(cx+dx*L*.88,cy+dy*L*.88); c.lineTo(cx+dx*L*1.02,cy+dy*L*1.02); c.stroke(); });
    vignette(c,.5); } },

/* 2 · LIVE FEED & HATCHERY — algae photobioreactors, microalgae, rotifers */
{ init(){ this.col=Array.from({length:8},(_,i)=>({x:(i+.5)/8, h:R(.6,.75), w:R(38,54)}));
          this.b=this.col.flatMap(k=>mkBubbles(8,k.x*W-6,k.x*W+6,H*.86,H*.62,[1,3]));
          this.p=Array.from({length:320},()=>({x:R(0,W),y:R(0,H),r:R(.6,2.6)*S,v:R(4,16),o:R(0,TAU),g:Math.random()}));
          this.rot=Array.from({length:11},()=>({x:R(.1,.9),y:R(.2,.85),o:R(0,TAU),s:R(.8,1.4)})); },
  draw(c,t){ vgrad(c,[[0,"#0D3E33"],[.6,"#082A25"],[1,"#04130F"]]);
    c.fillStyle=rgrad(c,W*.85,-H*.1,H*1.1,[[0,"rgba(228,162,59,.28)"],[1,"rgba(228,162,59,0)"]]); c.fillRect(0,0,W,H);
    for(const k of this.col){ const w=k.w*S, x=k.x*W-w/2, y=H*.86-H*k.h, h=H*k.h;
      const g=c.createLinearGradient(x,0,x+w,0); g.addColorStop(0,"rgba(110,170,60,.10)"); g.addColorStop(.5,"rgba(160,210,80,.28)"); g.addColorStop(1,"rgba(110,170,60,.10)");
      c.fillStyle=g; c.beginPath(); c.roundRect?c.roundRect(x,y,w,h,w/2):c.rect(x,y,w,h); c.fill(); c.strokeStyle="rgba(210,240,180,.18)"; c.lineWidth=1; c.stroke();
      c.fillStyle="rgba(255,255,230,.12)"; c.fillRect(x+w*.22,y+w*.4,2,h-w*.8); }
    rising(c,t,this.b,"230,250,210");
    c.save(); c.globalCompositeOperation="lighter";
    for(const p of this.p){ const x=((p.x+t*p.v+Math.sin(t*.5+p.o)*18)%W+W)%W, y=(p.y+Math.sin(t*.4+p.o)*14+H)%H;
      c.fillStyle=p.g>.8?"rgba(240,200,110,.55)":"rgba(160,220,90,.45)"; c.beginPath(); c.arc(x,y,p.r,0,TAU); c.fill(); }
    c.restore();
    for(const r of this.rot){ const x=r.x*W+Math.sin(t*.35+r.o)*80*S, y=r.y*H+Math.sin(t*.5+r.o*2)*40*S, a=Math.cos(t*.35+r.o)*.6, s=r.s*S;
      c.save(); c.translate(x,y); c.rotate(a); c.fillStyle="rgba(230,240,215,.4)"; c.strokeStyle="rgba(240,250,230,.6)"; c.lineWidth=1;
      c.beginPath(); c.ellipse(0,0,16*s,9*s,0,0,TAU); c.fill(); c.stroke();
      c.beginPath(); c.moveTo(-16*s,0); c.quadraticCurveTo(-26*s,Math.sin(t*5+r.o)*5*s,-30*s,0); c.stroke();
      for(const sy of [-5,5]){ c.save(); c.translate(17*s,sy*s); c.rotate(t*9+r.o); for(let i=0;i<8;i++){ const a2=i/8*TAU; c.beginPath(); c.moveTo(Math.cos(a2)*3*s,Math.sin(a2)*3*s); c.lineTo(Math.cos(a2)*6.5*s,Math.sin(a2)*6.5*s); c.stroke(); } c.restore(); }
      c.restore(); }
    vignette(c,.55); } },

/* 3 · NURSERY & FRY — circular nursery tank seen from above, fry schooling */
{ init(){ this.fry=Array.from({length:190},()=>({u:Math.sqrt(R(.06,1)),a:R(0,TAU),o:R(0,TAU),l:R(9,16)}));
          this.cs=Array.from({length:16},()=>({x:R(-1,1),y:R(-1,1),r:R(.2,.5),o:R(0,TAU)})); },
  draw(c,t){ c.fillStyle="#08151D"; c.fillRect(0,0,W,H);
    c.fillStyle=rgrad(c,W*.6,H*.45,Math.max(W,H)*.7,[[0,"#123040"],[1,"#060F15"]]); c.fillRect(0,0,W,H);
    const {x:cx,y:cy}=focus(), Rt=Math.min(W*.4,H*.4);
    for(const [dx,dy,rr] of [[-1.55,-.55,.42],[1.5,.7,.36]]){ const x=cx+dx*Rt, y=cy+dy*Rt; c.beginPath(); c.arc(x,y,Rt*rr,0,TAU); c.fillStyle="rgba(30,100,115,.35)"; c.fill(); c.strokeStyle="rgba(200,215,220,.25)"; c.lineWidth=Rt*.03; c.stroke(); }
    c.beginPath(); c.arc(cx,cy+Rt*.04,Rt*1.07,0,TAU); c.fillStyle="rgba(0,0,0,.45)"; c.fill();
    c.save(); c.beginPath(); c.arc(cx,cy,Rt,0,TAU); c.clip();
    c.fillStyle=rgrad(c,cx-Rt*.2,cy-Rt*.25,Rt*1.2,[[0,"#2A9AA4"],[.55,"#16626F"],[1,"#0A3240"]]); c.fillRect(cx-Rt,cy-Rt,Rt*2,Rt*2);
    c.save(); c.globalCompositeOperation="lighter";
    for(const k of this.cs){ c.strokeStyle="rgba(170,240,240,.08)"; c.lineWidth=2*S; c.beginPath(); c.ellipse(cx+(k.x+Math.sin(t*.3+k.o)*.15)*Rt,cy+(k.y+Math.cos(t*.25+k.o)*.15)*Rt,k.r*Rt,k.r*Rt*.6,t*.1+k.o,0,TAU); c.stroke(); }
    c.restore();
    for(const f of this.fry){ const rr=f.u*Rt*.88, w=.35+.25/(f.u+.3), a=f.a+t*w+Math.sin(t*.7+f.o)*.08;
      const x=cx+Math.cos(a)*rr, y=cy+Math.sin(a)*rr; const len=f.l*S*1.25;
      fish(c,x,y,len,1,t*14+f.o,"rgba(4,24,32,.85)",.9,{tilt:a+Math.PI/2,fin:false}); }
    c.beginPath(); c.arc(cx,cy,Rt*.07,0,TAU); c.fillStyle="#06222C"; c.fill(); c.strokeStyle="rgba(200,230,235,.4)"; c.lineWidth=2; c.stroke();
    c.fillStyle=rgrad(c,cx-Rt*.45,cy-Rt*.5,Rt*.6,[[0,"rgba(255,255,255,.10)"],[1,"rgba(255,255,255,0)"]]); c.fillRect(cx-Rt,cy-Rt,Rt*2,Rt*2);
    c.restore();
    c.beginPath(); c.arc(cx,cy,Rt,0,TAU); c.strokeStyle="#C9D6DC"; c.lineWidth=Rt*.045; c.stroke();
    c.beginPath(); c.arc(cx,cy,Rt*1.035,0,TAU); c.strokeStyle="rgba(228,162,59,.6)"; c.lineWidth=1.5; c.stroke();
    const ia=-.75, ix=cx+Math.cos(ia)*Rt*.92, iy=cy+Math.sin(ia)*Rt*.92;
    c.save(); c.globalCompositeOperation="lighter"; for(let i=0;i<26;i++){ const d=((t*60+i*13)%160)*S, a2=ia+Math.PI/2+.05+Math.sin(i)*.04; c.fillStyle=`rgba(230,250,255,${.5*(1-d/(160*S))})`; c.beginPath(); c.arc(ix+Math.cos(a2)*d,iy+Math.sin(a2)*d,1.6*S,0,TAU); c.fill(); } c.restore();
    vignette(c,.55); } },

/* 4 · MARINE FARMING — underwater sea cage at golden hour, research telemetry */
{ init(){ this.f=Array.from({length:120},()=>({a:R(0,TAU),u:R(.35,.95),h:R(.12,.9),o:R(0,TAU),l:R(28,44),w:R(.12,.2)}));
          this.snow=Array.from({length:120},()=>({x:R(0,W),y:R(0,H),r:R(.5,1.6)*S,v:R(6,16),o:R(0,TAU)})); this.tags=[3,27,61]; },
  draw(c,t){ vgrad(c,[[0,"#2C93A6"],[.18,"#17708A"],[.5,"#0B4560"],[1,"#041A2A"]]);
    c.fillStyle=rgrad(c,W*.55,-H*.15,H*.9,[[0,"rgba(240,170,80,.45)"],[1,"rgba(240,170,80,0)"]]); c.fillRect(0,0,W,H);
    c.save(); c.globalCompositeOperation="lighter"; for(let i=0;i<5;i++){ c.strokeStyle=`rgba(255,230,190,${.12-i*.02})`; c.lineWidth=2; c.beginPath();
      for(let x=0;x<=W;x+=12){ const y=H*(.03+i*.018)+Math.sin(x*.012+t*1.4+i)*4*S+Math.sin(x*.031-t*.9)*2*S; x?c.lineTo(x,y):c.moveTo(x,y);} c.stroke(); } c.restore();
    rays(c,t,{n:9,a:.1,col:"255,225,180",x0:W*.55});
    const {x:fx}=focus(), cx=fx, yt=H*.2, yb=H*.9, rx=Math.min(W*.33,H*.62), ry=rx*.17, rx2=rx*.9;
    const sway=y=>Math.sin(t*.6+y*.008)*6*S;
    const ringPt=(th,lvl)=>{ const y=yt+(yb-yt)*lvl, r=rx+(rx2-rx)*lvl; return [cx+Math.cos(th)*r+sway(y), y+Math.sin(th)*ry*(1-.1*lvl)]; };
    const net=(front)=>{ c.strokeStyle=front?"rgba(210,235,240,.22)":"rgba(170,210,220,.09)"; c.lineWidth=1;
      for(let k=0;k<56;k++){ const th=k/56*TAU; if((Math.sin(th)>0)!==front) continue; c.beginPath(); for(let s=0;s<=8;s++){ const [x,y]=ringPt(th,s/8); s?c.lineTo(x,y):c.moveTo(x,y);} c.stroke(); }
      for(let l=1;l<=6;l++){ const lv=l/6; c.beginPath(); for(let s=0;s<=40;s++){ const th=(front?0:Math.PI)+s/40*Math.PI; const [x,y]=ringPt(th,lv); s?c.lineTo(x,y):c.moveTo(x,y);} c.stroke(); } };
    const collar=(front)=>{ c.strokeStyle="rgba(10,34,48,.7)"; c.lineWidth=6*S; c.beginPath(); for(let s=0;s<=40;s++){ const th=(front?0:Math.PI)+s/40*Math.PI; const [x,y]=ringPt(th,0); s?c.lineTo(x,y):c.moveTo(x,y);} c.stroke(); };
    collar(false); net(false);
    const pos=this.f.map((f,i)=>{ const a=f.a+t*f.w, r=f.u*rx*.9, y=yt+(yb-yt)*f.h+Math.sin(t*.8+f.o)*6*S; return {i,f,a,x:cx+Math.cos(a)*r+sway(y),y:y+Math.sin(a)*ry*.8,z:Math.sin(a)}; }).sort((p,q)=>p.z-q.z);
    for(const p of pos){ const sc=.75+.25*(p.z+1)/2, len=p.f.l*S*sc, dir=-Math.sin(p.a)>0?1:-1;
      fish(c,p.x,p.y,len,dir,t*6+p.f.o, p.z>0?"#B9D2DA":"#6F98A8", p.z>0?.85:.45, {tilt:Math.cos(p.a)*.12*dir}); }
    net(true); collar(true);
    for(const id of this.tags){ const p=pos.find(q=>q.i===id); if(!p||p.z<0) continue; const s=14*S;
      c.strokeStyle="#E4A23B"; c.lineWidth=1.5; c.beginPath();
      [[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([dx,dy])=>{ c.moveTo(p.x+dx*s*1.6,p.y+dy*s); c.lineTo(p.x+dx*s*1.6,p.y+dy*s*.4); c.moveTo(p.x+dx*s*1.6,p.y+dy*s); c.lineTo(p.x+dx*s*1.1,p.y+dy*s); }); c.stroke();
      c.beginPath(); c.moveTo(p.x+s*1.6,p.y-s); c.lineTo(p.x+s*3.2,p.y-s*2.6); c.lineTo(p.x+s*5.5,p.y-s*2.6); c.stroke(); c.fillStyle="#E4A23B"; c.beginPath(); c.arc(p.x+s*5.5,p.y-s*2.6,2.5,0,TAU); c.fill(); }
    for(const m of this.snow){ c.fillStyle="rgba(220,240,245,.35)"; c.beginPath(); c.arc((m.x+Math.sin(t*.3+m.o)*15+W)%W,(m.y+t*m.v)%H,m.r,0,TAU); c.fill(); }
    vignette(c,.6); } }
];
/* brand opening: the orange ring draws itself, then opens like an iris onto stage 1 */
function drawIntro(c,t,p){ c.fillStyle=rgrad(c,W*.5,H*.5,Math.hypot(W,H)*.6,[[0,"#0F3352"],[1,"#04121D"]]); c.fillRect(0,0,W,H);
  rays(c,t,{n:6,a:.035});
  const {x:cx,y:cy}=focus(), r=Math.min(W,H)*.16, k=clamp(p*1.3,0,1);
  c.strokeStyle="rgba(228,162,59,.25)"; c.lineWidth=1; c.beginPath(); c.arc(cx,cy,r*1.35,0,TAU); c.stroke();
  c.strokeStyle="#E4A23B"; c.lineWidth=3; c.lineCap="round"; c.beginPath(); c.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+TAU*ease(k)); c.stroke();
  for(let i=0;i<5;i++){ const a=-Math.PI/2+i/5*TAU, on=k>i/5; c.beginPath(); c.arc(cx+Math.cos(a)*r,cy+Math.sin(a)*r,on?6:3,0,TAU); c.fillStyle=on?"#E4A23B":"rgba(228,162,59,.4)"; c.fill(); }
  vignette(c,.5); }

/* ---------- state & UI ---------- */
const kEl=$("#cineK"), tEl=$("#cineT"), dEl=$("#cineD"), rail=$$(".cine-rail button"), panel=$("#cinePanel"), playBtn=$("#cinePlay");
let cur=-1, prev=null, tStart=0, trStart=null, playing=!reduced, panelOpen=false, visible=true, raf=0, t0=performance.now(), pausedAt=0;
function setText(i){ const s=CINE[i]; root.style.setProperty("--sc",s.color);
  const box=$(".cine-stage"); box.classList.remove("in"); void box.offsetWidth; box.classList.add("in");
  kEl.textContent=`Stage ${String(i+1).padStart(2,"0")} / 05 · ${s.where}`; tEl.textContent=s.t; dEl.textContent=s.d;
  rail.forEach((b,j)=>{ b.classList.toggle("on",j===i); b.classList.toggle("done",j<i); b.setAttribute("aria-current",j===i?"step":"false"); b.style.setProperty("--p",j<i?1:0); }); }
function go(i,now=performance.now()){ i=(i+5)%5; if(i===cur && trStart===null) return; prev=cur; cur=i; trStart=reduced?null:now; tStart=now; setText(i); if(reduced) frame(now); }
function openPanel(i){ const s=CINE[i]; panelOpen=true;
  panel.innerHTML=`<button class="cp-close" type="button" aria-label="Close">×</button>
    <span class="cp-k">Stage ${String(i+1).padStart(2,"0")} · ${s.where}</span><h3>${s.t}</h3><p>${s.d}</p>
    <div class="cp-cols">${[["Processes",s.proc],["Technologies",s.tech],["Facilities",s.fac]].map(([h,l])=>`<div><h4>${h}</h4><ul>${l.map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("")}</div>
    <div class="cp-links"><a class="btn btn-orange" href="${s.href}">Explore in depth <span class="arrow">→</span></a><button class="btn btn-ghost" type="button" data-xp="${s.xp}">See it in 3D</button><a class="cp-enq" href="${s.enq[0]}">${s.enq[1]} →</a></div>`;
  panel.hidden=false; requestAnimationFrame(()=>panel.classList.add("open"));
  $(".cp-close",panel).addEventListener("click",closePanel); $(".cp-close",panel).focus(); }
function closePanel(){ panelOpen=false; panel.classList.remove("open"); setTimeout(()=>{ if(!panelOpen) panel.hidden=true; },400); tStart=performance.now()-(rail[cur]?.style.getPropertyValue("--p")||0)*STAGE_MS; }
rail.forEach((b,i)=>b.addEventListener("click",()=>{ go(i); openPanel(i); }));
$("#cineExplore").addEventListener("click",()=>openPanel(Math.max(cur,0)));
playBtn.addEventListener("click",()=>{ playing=!playing; playBtn.setAttribute("aria-pressed",!playing); playBtn.textContent=playing?"❚❚":"▶"; playBtn.setAttribute("aria-label",playing?"Pause animation":"Play animation"); if(playing){ tStart=performance.now()-(parseFloat(rail[cur]?.style.getPropertyValue("--p"))||0)*STAGE_MS; loop(); } });
root.addEventListener("keydown",e=>{ if(e.key==="Escape"&&panelOpen) closePanel(); if(e.key==="ArrowRight"&&!panelOpen) go(cur+1); if(e.key==="ArrowLeft"&&!panelOpen) go(cur-1); });

function frame(now){
  const t=(now-t0)/1000;
  if(cur<0){ const p=(now-t0)/INTRO_MS; drawIntro(ctx,t,p); if(p>=1||reduced) { root.classList.add("started"); go(0,now); } return; }
  if(trStart!==null){
    const p=clamp((now-trStart)/TRANS_MS,0,1), e=ease(p), {x:cx,y:cy}=focus(), rmax=Math.hypot(Math.max(cx,W-cx),Math.max(cy,H-cy))+20;
    if(prev<0) drawIntro(ca,t,1); else SCENES[prev].draw(ca,t);
    SCENES[cur].draw(cb,t);
    ctx.drawImage(bufA,0,0,W,H);
    const r=Math.max(1,(prev<0?Math.min(W,H)*.16:0)+e*rmax);
    ctx.save(); ctx.beginPath(); ctx.arc(cx,cy,r,0,TAU); ctx.clip(); ctx.drawImage(bufB,0,0,W,H); ctx.restore();
    ctx.strokeStyle=`rgba(228,162,59,${1-p*.8})`; ctx.lineWidth=3+6*(1-p); ctx.beginPath(); ctx.arc(cx,cy,r,0,TAU); ctx.stroke();
    ctx.strokeStyle=`rgba(255,255,255,${.25*(1-p)})`; ctx.lineWidth=1; ctx.beginPath(); ctx.arc(cx,cy,r*1.04,0,TAU); ctx.stroke();
    if(p>=1) trStart=null;
  } else SCENES[cur].draw(ctx,t);
  if(playing && !panelOpen){ const q=clamp((now-tStart)/STAGE_MS,0,1); rail[cur].style.setProperty("--p",q); if(q>=1) go(cur+1,now); }
}
function loop(){ cancelAnimationFrame(raf); const step=now=>{ if(!visible||document.hidden){ raf=0; return; } frame(now); if(!reduced) raf=requestAnimationFrame(step); }; raf=requestAnimationFrame(step); }

resize();
addEventListener("resize",()=>{ resize(); if(reduced) frame(performance.now()); });
if("IntersectionObserver" in window) new IntersectionObserver(es=>{ visible=es[0].isIntersecting; if(visible) loop(); },{threshold:.05}).observe(root);
document.addEventListener("visibilitychange",()=>{ if(!document.hidden) loop(); });
if(reduced){ root.classList.add("started"); cur=0; setText(0); playBtn.hidden=true; frame(performance.now()); } else loop();
})();
