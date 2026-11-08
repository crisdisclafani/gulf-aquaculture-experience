import fs from 'fs';
import {feature} from 'topojson-client';
import {presimplify,simplify,quantile} from 'topojson-simplify';
import {geoMercator, geoPath} from 'd3-geo';
const topo=JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json'));
let t2=presimplify(topo);t2=simplify(t2,quantile(t2,0.12));const land=feature(t2,t2.objects.land);
const W=1000;
const k=W/((160-22)*Math.PI/180);
const proj=geoMercator().scale(k).translate([0,0]);
const [x0,y0]=proj([22,40]); proj.translate([-x0,-y0]);
const H=Math.round(proj([22,-36])[1]);
proj.clipExtent([[0,0],[W,H]]);const path=geoPath(proj).digits(1);
const clip=(c)=>({type:'Feature',geometry:{type:'Polygon',coordinates:[c.concat([c[0]]).map(p=>p)]}});
const R={
 iwp:[[32,-34],[60,-38],[115,-36],[150,-40],[166,-30],[166,8],[150,30],[142,38],[128,36],[121,30],[110,22],[95,20],[78,22],[68,26],[57,30],[49,31],[36,30],[32,28]],
 iwpE:[[46,31],[57,30],[68,26],[78,22],[95,20],[110,22],[121,30],[130,35],[140,36],[150,20],[166,8],[166,-22],[150,-26],[125,-22],[112,-24],[95,-10],[75,-5],[60,8],[50,12]],
 gulfAS:[[47.5,30.5],[51,29.8],[57,27.8],[59,25.5],[62,25.3],[66.5,25.5],[71,22],[73.5,18],[69,15],[60,16],[56,17],[52.5,16],[55.5,22],[52,24],[50,26]],
 gulf:[[47.5,30.5],[51,29.8],[56.5,27.2],[57.5,25.8],[60,24.5],[59.8,22.4],[57,22.5],[56.4,24.8],[54,24.2],[51.5,24.4],[50,26.2],[48.5,28]],
};
const out={W,H,land:path(land),ranges:{},sites:[]};
for(const [k,v] of Object.entries(R)){ out.ranges[k]='M'+v.map(p=>proj(p).map(n=>n.toFixed(1)).join(',')).join('L')+'Z'; }
const S=[["Abu Dhabi HQ","UAE",54.37,24.47],["Balghailam Island","UAE",54.7,24.62],["SKMRC · Umm Al Quwain","UAE",55.6,25.55],["Fry supply · Oman","Oman",58.4,23.6],["Red Snapper hatchery","Malaysia",101.5,3.0],["Grouper hatchery","Indonesia",112.7,-7.3]];
for(const [n,c,lo,la] of S){const [x,y]=proj([lo,la]);out.sites.push({n,c,x:+x.toFixed(1),y:+y.toFixed(1)})}
fs.writeFileSync('/home/claude/ga3/rangemap.json',JSON.stringify(out));
console.log(Object.fromEntries(Object.entries(out.ranges).map(([k,v])=>[k,v.length])), out.land.length, out.sites);
