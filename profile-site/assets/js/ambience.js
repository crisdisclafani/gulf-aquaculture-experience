/* Gulf Aquaculture — immersive site ambience (Web Audio, no files).
   Sea swell + soft pad + a voice per section (same family as the 3D experience).
   On/off remembered per visitor (localStorage "ga-sound"); main-menu clicks play a chime and cross-fade to the next section. */
(function(){
  var KEY='ga-sound', ctx=null, N={}, timer=null, playing=false, duck=1;
  var pref=function(){try{return localStorage.getItem(KEY)==='1'}catch(e){return false}};
  var setPref=function(v){try{localStorage.setItem(KEY,v?'1':'0')}catch(e){}};
  var mtof=function(m){return 440*Math.pow(2,(m-69)/12)};
  var page=(location.pathname.split('/').pop()||'index.html');
  var THEMES={
    gulf:{chords:[[50,57,62,66],[47,54,59,62],[43,50,55,59],[45,52,57,61]],len:12,scale:[62,64,66,69,71,74,76,78,81],voice:'bell',every:[2.5,6.5],lp:1400},
    hijaz:{chords:[[38,45,50,57]],len:16,scale:[62,63,66,67,69,70,72,74,75,78],voice:'oud',every:[.45,1.3],lp:1300,phrase:true},
    lab:{chords:[[41,48,53,57],[43,50,55,59],[38,45,50,53]],len:11,scale:[65,67,69,71,72,76,77,79],voice:'epiano',every:[1.4,3.6],lp:1200},
    tanks:{chords:[[45,52,57,60],[41,48,53,57]],len:13,scale:[69,71,72,74,76,78,81],voice:'bell',every:[3,7.5],lp:1000},
    reef:{chords:[[52,59,64,68],[49,56,61,64]],len:12,scale:[76,78,80,83,85,88],voice:'bell',every:[2.2,5.5],lp:1800},
    horizon:{chords:[[48,55,60,64],[53,60,65,69],[50,57,62,65],[55,62,67,71]],len:10,scale:[67,69,72,74,76,79,81],voice:'epiano',every:[1.8,4.5],lp:1500}
  };
  function themeFor(p){
    if(/^(about|people)/.test(p))return 'hijaz';
    if(/^operations/.test(p))return 'lab';
    if(/^asset/.test(p))return 'tanks';
    if(/^species/.test(p))return 'reef';
    if(/^growth/.test(p))return 'horizon';
    return 'gulf';
  }
  var T=THEMES[themeFor(page)];
  function g(v){var n=ctx.createGain();n.gain.value=v;return n}
  function filt(t,f,q){var n=ctx.createBiquadFilter();n.type=t;n.frequency.value=f;n.Q.value=q||.7;return n}
  function osc(t,f){var o=ctx.createOscillator();o.type=t;o.frequency.value=f;return o}
  function noise(sec){var len=ctx.sampleRate*sec,b=ctx.createBuffer(2,len,ctx.sampleRate);
    for(var c=0;c<2;c++){var d=b.getChannelData(c),b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
      for(var i=0;i<len;i++){var w=Math.random()*2-1;b0=.99886*b0+w*.0555179;b1=.99332*b1+w*.0750759;b2=.969*b2+w*.153852;b3=.8665*b3+w*.3104856;b4=.55*b4+w*.5329522;b5=-.7616*b5-w*.016898;d[i]=(b0+b1+b2+b3+b4+b5+b6+w*.5362)*.11;b6=w*.115926}}
    return b}
  function impulse(sec,decay){var len=ctx.sampleRate*sec,b=ctx.createBuffer(2,len,ctx.sampleRate);
    for(var c=0;c<2;c++){var d=b.getChannelData(c);for(var i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,decay)}return b}
  function build(){
    ctx=new(window.AudioContext||window.webkitAudioContext)();
    N.master=g(0);var comp=ctx.createDynamicsCompressor();N.master.connect(comp);comp.connect(ctx.destination);
    N.verb=ctx.createConvolver();N.verb.buffer=impulse(4.5,2.6);var vo=g(.5);N.verb.connect(vo);vo.connect(N.master);
    var pink=noise(6);
    var sea=ctx.createBufferSource();sea.buffer=pink;sea.loop=true;var lp=filt('lowpass',520),sg=g(.28);
    sea.connect(lp);lp.connect(sg);sg.connect(N.master);
    var l1=osc('sine',.085),l1g=g(.2);l1.connect(l1g);l1g.connect(sg.gain);
    var l2=osc('sine',.033),l2g=g(220);l2.connect(l2g);l2g.connect(lp.frequency);
    N.bus=g(.9);N.busLP=filt('lowpass',T.lp,.4);N.busLP.connect(N.bus);N.bus.connect(N.master);N.bus.connect(N.verb);
    [sea,l1,l2].forEach(function(s){s.start()});
  }
  function chord(t,notes,len){notes.forEach(function(m,i){[0,1].forEach(function(k){
    var o=osc(k?'triangle':'sine',mtof(m)*(k?1.003:.998)),e=g(0);o.connect(e);e.connect(N.busLP);var a=(i===0?.05:.028)*(k?.5:1);
    e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(a,t+4);e.gain.setValueAtTime(a,t+len-3);e.gain.linearRampToValueAtTime(0,t+len+2.5);o.start(t);o.stop(t+len+3)})})}
  function bell(t,m,v){v=v||.07;var o=osc('sine',mtof(m)),o2=osc('sine',mtof(m)*4.02),e=g(0),e2=g(0);o.connect(e);o2.connect(e2);e.connect(N.busLP);e2.connect(N.busLP);
    e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(v,t+.01);e.gain.exponentialRampToValueAtTime(.0001,t+3.2);
    e2.gain.setValueAtTime(0,t);e2.gain.linearRampToValueAtTime(v*.18,t+.005);e2.gain.exponentialRampToValueAtTime(.0001,t+.6);o.start(t);o2.start(t);o.stop(t+3.4);o2.stop(t+3.4)}
  function oud(t,m,v){v=v||.06;var f=mtof(m),o=osc('sawtooth',f),lp=filt('lowpass',f*8,3),e=g(0);o.connect(lp);lp.connect(e);e.connect(N.busLP);
    lp.frequency.setValueAtTime(f*9,t);lp.frequency.exponentialRampToValueAtTime(f*1.4,t+.5);e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(v,t+.004);e.gain.exponentialRampToValueAtTime(.0001,t+1.4);o.start(t);o.stop(t+1.5)}
  function epiano(t,m,v){v=v||.05;var f=mtof(m),c=osc('sine',f),md=osc('sine',f*14),mg=g(f*1.6),e=g(0);md.connect(mg);mg.connect(c.frequency);c.connect(e);e.connect(N.busLP);
    mg.gain.setValueAtTime(f*1.6,t);mg.gain.exponentialRampToValueAtTime(f*.05,t+.8);e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(v,t+.006);e.gain.exponentialRampToValueAtTime(.0001,t+2.4);c.start(t);md.start(t);c.stop(t+2.5);md.stop(t+2.5)}
  var VO={bell:bell,oud:oud,epiano:epiano},nextChord=0,ci=0,nextNote=0,ph=[];
  function tick(){if(!ctx||!playing)return;var now=ctx.currentTime;
    if(now>=nextChord-.1){chord(Math.max(now,nextChord),T.chords[ci%T.chords.length],T.len);ci++;nextChord=Math.max(now,nextChord)+T.len}
    if(now>=nextNote){var s=T.scale,m;if(T.phrase){if(!ph.length){var st=Math.floor(Math.random()*(s.length-3));for(var k=0;k<3+Math.floor(Math.random()*4);k++)ph.push(s[Math.min(s.length-1,st+k)])}m=ph.shift()}else m=s[Math.floor(Math.random()*s.length)];
      VO[T.voice](now+.02,m);nextNote=now+T.every[0]+Math.random()*(T.every[1]-T.every[0])+(T.phrase&&!ph.length?2.5:0)}}
  function level(v,t){if(!ctx)return;var now=ctx.currentTime;N.master.gain.cancelScheduledValues(now);N.master.gain.setTargetAtTime(v,now,Math.max(.05,(t||1.5)/3))}
  function start(){if(!ctx)build();ctx.resume();playing=true;nextChord=nextNote=ctx.currentTime+.3;if(!timer)timer=setInterval(tick,200);level(.9*duck,2.5);ui()}
  function stop(){playing=false;level(0,.8);ui()}
  function chime(){if(!ctx||!playing)return;var t=ctx.currentTime;bell(t,81,.06);bell(t+.12,86,.045)}
  function ui(){document.querySelectorAll('.snd-btn').forEach(function(b){var on=pref();b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);
    b.title=on?(playing?'Sound on — click to mute':'Tap anywhere to start the sound'):'Immersive sound — click to turn on';
    var l=b.querySelector('.snd-l');if(l)l.textContent=on?'Sound on':'Sound'})}
  // toggle buttons
  document.addEventListener('click',function(e){var b=e.target.closest('.snd-btn');if(!b)return;e.preventDefault();
    if(pref()&&playing){setPref(false);stop()}else{setPref(true);start()}});
  // remembered preference: start as soon as the browser allows (first interaction on this page)
  if(pref()){ui();try{start()}catch(err){}
    var kick=function(){if(pref()&&ctx&&ctx.state!=='running'){ctx.resume().then(function(){ui()})}else if(pref()&&!playing)start();ui()};
    ['pointerdown','keydown','touchstart'].forEach(function(ev){document.addEventListener(ev,kick,{once:true,passive:true})})}
  else ui();
  // main menu: chime + short fade before moving to another section
  document.addEventListener('click',function(e){var a=e.target.closest('.menu>li>a,.mega a,.mnav a');if(!a||!playing||e.metaKey||e.ctrlKey||e.shiftKey||a.target==='_blank')return;
    var href=a.getAttribute('href');if(!href||href.charAt(0)==='#'||/^(mailto|tel|https?):/.test(href))return;
    e.preventDefault();chime();level(0,.6);setTimeout(function(){location.href=href},420)},true);
  // home: duck the site ambience while the 3D experience plays its own soundscape
  var fr=document.querySelector('.xp3d iframe');
  if(fr)setInterval(function(){try{var sb=fr.contentDocument&&fr.contentDocument.querySelector('[data-act="sound"]');var on3d=sb&&/Sound on/.test(sb.title||'');
    var d=on3d?0:1;if(d!==duck){duck=d;if(playing)level(.9*duck,1.2)}}catch(err){}},1000);
  document.addEventListener('visibilitychange',function(){if(!ctx)return;if(document.hidden)ctx.suspend();else if(playing)ctx.resume()});
})();
