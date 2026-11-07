(()=>{var bs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lf=0,mu=1,Df=2;var js=1,Nf=2,ea=3,ws=0,$t=1,Zt=2,Ji=0,ta=1,Pi=2,gu=3,_u=4,Uf=5;var Qs=100,Ff=101,Of=102,Bf=103,Hf=104,zf=200,kf=201,Gf=202,Vf=203,xu=204,vu=205,Wf=206,Xf=207,qf=208,Yf=209,$f=210,Zf=211,Kf=212,Jf=213,jf=214,Al=0,Rl=1,Cl=2,Ur=3,Pl=4,Il=5,Ll=6,Dl=7,oc=0,Qf=1,ep=2,Ii=0,co=1,ho=2,uo=3,er=4,fo=5,po=6,mo=7;var yu=300,tr=301,na=302,lc=303,cc=304,Ti=1e3,Ei=1001,Nl=1002,gn=1003,tp=1004;var go=1005;var Un=1006,hc=1007;var ji=1008;var Bn=1009,Mu=1010,Su=1011,ia=1012,uc=1013,di=1014,Qn=1015,on=1016,dc=1017,fc=1018,nr=1020,Eu=35902,bu=35899,Tu=1021,wu=1022,fi=1023,Wi=1026,Qi=1027,pc=1028,mc=1029,As=1030,gc=1031;var _c=1033,_o=33776,xo=33777,vo=33778,yo=33779,xc=35840,vc=35841,yc=35842,Mc=35843,Sc=36196,Ec=37492,bc=37496,Tc=37488,wc=37489,Mo=37490,Ac=37491,Rc=37808,Cc=37809,Pc=37810,Ic=37811,Lc=37812,Dc=37813,Nc=37814,Uc=37815,Fc=37816,Oc=37817,Bc=37818,Hc=37819,zc=37820,kc=37821,Gc=36492,Vc=36494,Wc=36495,Xc=36283,qc=36284,So=36285,Yc=36286;var Ia=2300,Ul=2301,bl=2302,nu=2303,iu=2400,su=2401,ru=2402;var np=3200;var Eo=0,ip=1,es="",pn="srgb",La="srgb-linear",Da="linear",Tt="srgb";var Tl=7680;var sp=519,rp=512,ap=513,op=514,Au=515,lp=516,cp=517,Ru=518,Cu=519,hp=35044;var Pu="300 es",Kn=2e3,Fr=2001;function p0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function m0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function up(){let n=Or("canvas");return n.style.display="block",n}var Wd={},Br=null;function Iu(...n){let e="THREE."+n.shift();Br?Br("log",e,...n):console.log(e,...n)}function dp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=dp(n);let e="THREE."+n.shift();if(Br)Br("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=dp(n);let e="THREE."+n.shift();if(Br)Br("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function qs(...n){let e=n.join(" ");e in Wd||(Wd[e]=!0,qe(...n))}function fp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var pp={[Al]:Al,[Cl]:Ll,[Pl]:Pl,[Ur]:Il,[Rl]:Rl,[Ll]:Cl,[Dl]:Dl,[Il]:Ur},ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xd=1234567,Aa=Math.PI/180,Hr=180/Math.PI;function ir(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function Lu(n,e){return(n%e+e)%e}function g0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _0(n,e,t){return n!==e?(t-n)/(e-n):0}function Ra(n,e,t){return(1-t)*n+t*e}function x0(n,e,t,i){return Ra(n,e,1-Math.exp(-t*i))}function v0(n,e=1){return e-Math.abs(Lu(n,e*2)-e)}function y0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function M0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function S0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function E0(n,e){return n+Math.random()*(e-n)}function b0(n){return n*(.5-Math.random())}function T0(n){n!==void 0&&(Xd=n);let e=Xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function w0(n){return n*Aa}function A0(n){return n*Hr}function R0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function C0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Du(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function P0(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*p,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*p,o*c);break;case"ZYZ":n.set(l*p,l*d,o*h,o*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function mp(n,e){if(e.constructor===Float32Array)return n;let t=Nu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function gp(n,e){if(e.constructor===Float32Array)return n;let t=Nu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var ft={DEG2RAD:Aa,RAD2DEG:Hr,generateUUID:ir,clamp:at,euclideanModulo:Lu,mapLinear:g0,inverseLerp:_0,lerp:Ra,damp:x0,pingpong:v0,smoothstep:y0,smootherstep:M0,randInt:S0,randFloat:E0,randFloatSpread:b0,seededRandom:T0,degToRad:w0,radToDeg:A0,isPowerOfTwo:R0,ceilPowerOfTwo:C0,floorPowerOfTwo:Du,setQuaternionFromProperEuler:P0,normalize:gp,denormalize:mp},zu=class zu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zu.prototype.isVector2=!0;var Z=zu,Bt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);g=Math.sin(g*v)/S,o=Math.sin(o*v)/S,l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+_*o}else{l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-o*d,e[t+2]=c*p+h*d+o*f-l*u,e[t+3]=h*p-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ku=class ku{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lh.copy(this).projectOnVector(e),this.sub(Lh)}reflect(e){return this.sub(Lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ku.prototype.isVector3=!0;var T=ku,Lh=new T,qd=new Bt,Gu=class Gu{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],_=s[0],m=s[3],g=s[6],v=s[1],S=s[4],y=s[7],A=s[2],w=s[5],x=s[8];return r[0]=a*_+o*v+l*A,r[3]=a*m+o*S+l*w,r[6]=a*g+o*y+l*x,r[1]=c*_+h*v+u*A,r[4]=c*m+h*S+u*w,r[7]=c*g+h*y+u*x,r[2]=f*_+d*v+p*A,r[5]=f*m+d*S+p*w,r[8]=f*g+d*y+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gu.prototype.isMatrix3=!0;var Je=Gu,Dh=new Je,Yd=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I0(){let n={enabled:!0,workingColorSpace:La,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Tt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(s.r=Nr(s.r),s.g=Nr(s.g),s.b=Nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?Da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[La]:{primaries:e,whitePoint:i,transfer:Da,toXYZ:Yd,fromXYZ:$d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Yd,fromXYZ:$d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}var ut=I0();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var vr,Fl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vr===void 0&&(vr=Or("canvas")),vr.width=e.width,vr.height=e.height;let s=vr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=vr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},L0=0,zr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nh(s[a].image)):r.push(Nh(s[a]))}else r=Nh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Nh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var D0=0,Uh=new T,Rn=class n extends ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ei,s=Ei,r=Un,a=ji,o=fi,l=Bn,c=n.DEFAULT_ANISOTROPY,h=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=ir(),this.name="",this.source=new zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=yu;Rn.DEFAULT_ANISOTROPY=1;var Vu=class Vu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(d+1)/2,A=(g+1)/2,w=(h+f)/4,x=(u+_)/4,E=(p+m)/4;return S>y&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=x/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=E/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=E/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vu.prototype.isVector4=!0;var Ht=Vu,Ol=class extends ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Rn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new zr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends Ol{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Na=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bl=class extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ac=class ac{constructor(e,t,i,s,r,a,o,l,c,h,u,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,d,p,_,m)}set(e,t,i,s,r,a,o,l,c,h,u,f,d,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ac().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/yr.setFromMatrixColumn(e,0).length(),r=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N0,e,U0)}lookAt(e,t,i){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),cs.crossVectors(i,zn),cs.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),cs.crossVectors(i,zn)),cs.normalize(),Jo.crossVectors(zn,cs),s[0]=cs.x,s[4]=Jo.x,s[8]=zn.x,s[1]=cs.y,s[5]=Jo.y,s[9]=zn.y,s[2]=cs.z,s[6]=Jo.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],_=i[6],m=i[10],g=i[14],v=i[3],S=i[7],y=i[11],A=i[15],w=s[0],x=s[4],E=s[8],L=s[12],C=s[1],D=s[5],z=s[9],I=s[13],P=s[2],O=s[6],B=s[10],H=s[14],ne=s[3],G=s[7],$=s[11],Q=s[15];return r[0]=a*w+o*C+l*P+c*ne,r[4]=a*x+o*D+l*O+c*G,r[8]=a*E+o*z+l*B+c*$,r[12]=a*L+o*I+l*H+c*Q,r[1]=h*w+u*C+f*P+d*ne,r[5]=h*x+u*D+f*O+d*G,r[9]=h*E+u*z+f*B+d*$,r[13]=h*L+u*I+f*H+d*Q,r[2]=p*w+_*C+m*P+g*ne,r[6]=p*x+_*D+m*O+g*G,r[10]=p*E+_*z+m*B+g*$,r[14]=p*L+_*I+m*H+g*Q,r[3]=v*w+S*C+y*P+A*ne,r[7]=v*x+S*D+y*O+A*G,r[11]=v*E+S*z+y*B+A*$,r[15]=v*L+S*I+y*H+A*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],v=l*d-c*f,S=o*d-c*u,y=o*f-l*u,A=a*d-c*h,w=a*f-l*h,x=a*u-o*h;return t*(_*v-m*S+g*y)-i*(p*v-m*A+g*w)+s*(p*S-_*A+g*x)-r*(p*y-_*w+m*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=t*o-i*a,S=t*l-s*a,y=t*c-r*a,A=i*l-s*o,w=i*c-r*o,x=s*c-r*l,E=h*_-u*p,L=h*m-f*p,C=h*g-d*p,D=u*m-f*_,z=u*g-d*_,I=f*g-d*m,P=v*I-S*z+y*D+A*C-w*L+x*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return e[0]=(o*I-l*z+c*D)*O,e[1]=(s*z-i*I-r*D)*O,e[2]=(_*x-m*w+g*A)*O,e[3]=(f*w-u*x-d*A)*O,e[4]=(l*C-a*I-c*L)*O,e[5]=(t*I-s*C+r*L)*O,e[6]=(m*y-p*x-g*S)*O,e[7]=(h*x-f*y+d*S)*O,e[8]=(a*z-o*C+c*E)*O,e[9]=(i*C-t*z-r*E)*O,e[10]=(p*w-_*y+g*v)*O,e[11]=(u*y-h*w-d*v)*O,e[12]=(o*L-a*D-l*E)*O,e[13]=(t*D-i*L+s*E)*O,e[14]=(_*S-p*A-m*v)*O,e[15]=(h*A-u*S+f*v)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,_=a*h,m=a*u,g=o*u,v=l*c,S=l*h,y=l*u,A=i.x,w=i.y,x=i.z;return s[0]=(1-(_+g))*A,s[1]=(d+y)*A,s[2]=(p-S)*A,s[3]=0,s[4]=(d-y)*w,s[5]=(1-(f+g))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(p+S)*x,s[9]=(m-v)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=yr.set(s[0],s[1],s[2]).length(),o=yr.set(s[4],s[5],s[6]).length(),l=yr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ai.copy(this);let c=1/a,h=1/o,u=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,t.setFromRotationMatrix(ai),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Kn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Kn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Fr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Kn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Kn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Fr)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ac.prototype.isMatrix4=!0;var Ye=ac,yr=new T,ai=new Ye,N0=new T(0,0,0),U0=new T(1,1,1),cs=new T,Jo=new T,zn=new T,Zd=new Ye,Kd=new Bt,_n=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},F0=0,Jd=new T,Mr=new Bt,Bi=new Ye,jo=new T,va=new T,O0=new T,B0=new Bt,jd=new T(1,0,0),Qd=new T(0,1,0),ef=new T(0,0,1),tf={type:"added"},H0={type:"removed"},Sr={type:"childadded",child:null},Fh={type:"childremoved",child:null},qt=class n extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new T,t=new _n,i=new Bt,s=new T(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Je}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(jd,e)}rotateY(e){return this.rotateOnAxis(Qd,e)}rotateZ(e){return this.rotateOnAxis(ef,e)}translateOnAxis(e,t){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jd,e)}translateY(e){return this.translateOnAxis(Qd,e)}translateZ(e){return this.translateOnAxis(ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jo.copy(e):jo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(va,jo,this.up):Bi.lookAt(jo,va,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),Mr.setFromRotationMatrix(Bi),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tf),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H0),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tf),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,O0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,B0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new T(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},z0={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},_p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Oh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=Lu(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Oh(a,r,e+1/3),this.g=Oh(a,r,e),this.b=Oh(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=pn){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){let i=_p[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return ut.workingToColorSpace(wn.copy(this),e),Math.round(at(wn.r*255,0,255))*65536+Math.round(at(wn.g*255,0,255))*256+Math.round(at(wn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(wn.copy(this),t);let i=wn.r,s=wn.g,r=wn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=pn){ut.workingToColorSpace(wn.copy(this),e);let t=wn.r,i=wn.g,s=wn.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Qo);let i=Ra(hs.h,Qo.h,t),s=Ra(hs.s,Qo.s,t),r=Ra(hs.l,Qo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Re;Re.NAMES=_p;var Ua=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Fa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wi=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},oi=new T,Hi=new T,Bh=new T,zi=new T,Er=new T,br=new T,nf=new T,Hh=new T,zh=new T,kh=new T,Gh=new Ht,Vh=new Ht,Wh=new Ht,ps=class n{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){oi.subVectors(s,t),Hi.subVectors(i,t),Bh.subVectors(e,t);let a=oi.dot(oi),o=oi.dot(Hi),l=oi.dot(Bh),c=Hi.dot(Hi),h=Hi.dot(Bh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Gh.setScalar(0),Vh.setScalar(0),Wh.setScalar(0),Gh.fromBufferAttribute(e,t),Vh.fromBufferAttribute(e,i),Wh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Gh,r.x),a.addScaledVector(Vh,r.y),a.addScaledVector(Wh,r.z),a}static isFrontFacing(e,t,i,s){return oi.subVectors(i,t),Hi.subVectors(e,t),oi.cross(Hi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),oi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Er.subVectors(s,i),br.subVectors(r,i),Hh.subVectors(e,i);let l=Er.dot(Hh),c=br.dot(Hh);if(l<=0&&c<=0)return t.copy(i);zh.subVectors(e,s);let h=Er.dot(zh),u=br.dot(zh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Er,a);kh.subVectors(e,r);let d=Er.dot(kh),p=br.dot(kh);if(p>=0&&d<=p)return t.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(br,o);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return nf.subVectors(r,s),o=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(nf,o);let g=1/(m+_+f);return a=_*g,o=f*g,t.copy(i).addScaledVector(Er,a).addScaledVector(br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},an=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(r,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),tl.subVectors(this.max,ya),Tr.subVectors(e.a,ya),wr.subVectors(e.b,ya),Ar.subVectors(e.c,ya),us.subVectors(wr,Tr),ds.subVectors(Ar,wr),Gs.subVectors(Tr,Ar);let t=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Gs.z,Gs.y,us.z,0,-us.x,ds.z,0,-ds.x,Gs.z,0,-Gs.x,-us.y,us.x,0,-ds.y,ds.x,0,-Gs.y,Gs.x,0];return!Xh(t,Tr,wr,Ar,tl)||(t=[1,0,0,0,1,0,0,0,1],!Xh(t,Tr,wr,Ar,tl))?!1:(nl.crossVectors(us,ds),t=[nl.x,nl.y,nl.z],Xh(t,Tr,wr,Ar,tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new T,new T,new T,new T,new T,new T,new T,new T],li=new T,el=new an,Tr=new T,wr=new T,Ar=new T,us=new T,ds=new T,Gs=new T,ya=new T,tl=new T,nl=new T,Vs=new T;function Xh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Vs.fromArray(n,r);let o=s.x*Math.abs(Vs.x)+s.y*Math.abs(Vs.y)+s.z*Math.abs(Vs.z),l=e.dot(Vs),c=t.dot(Vs),h=i.dot(Vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nn=new T,il=new Z,k0=0,rn=class extends ci{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hp,this.updateRanges=[],this.gpuType=Qn,this.version=0,this._normalizationScale=e!==void 0?Nu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)il.fromBufferAttribute(this,t),il.applyMatrix3(e),this.setXY(t,il.x,il.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gp(e,this.array)}};var Oa=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ba=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var $e=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},G0=new an,Ma=new T,qh=new T,Jn=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):G0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);let t=Ma.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ma,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(qh)),this.expandByPoint(Ma.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},V0=0,Zn=new Ye,Yh=new qt,Rr=new T,kn=new an,Sa=new an,fn=new T,yt=class n extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?Ba:Oa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Sa.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(kn.min,Sa.min),kn.expandByPoint(fn),fn.addVectors(kn.max,Sa.max),kn.expandByPoint(fn)):(kn.expandByPoint(Sa.min),kn.expandByPoint(Sa.max))}kn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(fn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)fn.fromBufferAttribute(o,c),l&&(Rr.fromBufferAttribute(e,c),fn.add(Rr)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new rn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new T,l[L]=new T;let h=new T,u=new T,f=new T,d=new Z,p=new Z,_=new Z,m=new T,g=new T;function v(L,C,D){c[L]=c[C]=c[D]=1,h.fromBufferAttribute(i,L),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,D),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,D),u.sub(h),f.sub(h),p.sub(d),_.sub(d);let z=1/(p.x*_.y-_.x*p.y);isFinite(z)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(z),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(z),o[L].add(m),o[C].add(m),o[D].add(m),l[L].add(g),l[C].add(g),l[D].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,C=S.length;L<C;++L){let D=S[L],z=D.start,I=D.count;for(let P=z,O=z+I;P<O;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new T,A=new T,w=new T,x=new T;function E(L){w.fromBufferAttribute(s,L),x.copy(w);let C=o[L];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),A.crossVectors(x,C);let z=A.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,z)}for(let L=0,C=i.count;L<C;++L)c[L]&&E(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new rn(f,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $h=new T,W0=new T,X0=new Je,Gn=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=$h.subVectors(i,t).cross(W0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta($h),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||X0.getNormalMatrix(e),s=this.coplanarPoint($h).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},q0=0,hi=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=ta,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=vu,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tl,this.stencilZFail=Tl,this.stencilZPass=Tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Gn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Z().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gi=new T,Zh=new T,sl=new T,rl=new T,Xi=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zh.copy(e).add(t).multiplyScalar(.5),sl.copy(t).sub(e).normalize(),rl.copy(this.origin).sub(Zh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(sl),o=rl.dot(this.direction),l=-rl.dot(sl),c=rl.lengthSq(),h=Math.abs(1-a*a),u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zh).addScaledVector(sl,f),d}intersectSphere(e,t){if(e.radius<0)return null;Gi.subVectors(e.center,this.origin);let i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,p=t.x-a.x,_=t.y-a.y,m=t.z-a.z,g=i.x-a.x,v=i.y-a.y,S=i.z-a.z,y=Math.abs(l),A=Math.abs(c),w=Math.abs(h),x,E,L,C,D,z,I,P,O,B,H,ne;if(y>=A&&y>=w?(L=l,z=u,O=p,ne=g,l>=0?(x=c,E=h,C=f,D=d,I=_,P=m,B=v,H=S):(x=h,E=c,C=d,D=f,I=m,P=_,B=S,H=v)):A>=w?(L=c,z=f,O=_,ne=v,c>=0?(x=h,E=l,C=d,D=u,I=m,P=p,B=S,H=g):(x=l,E=h,C=u,D=d,I=p,P=m,B=g,H=S)):(L=h,z=d,O=m,ne=S,h>=0?(x=l,E=c,C=u,D=f,I=p,P=_,B=g,H=v):(x=c,E=l,C=f,D=u,I=_,P=p,B=v,H=g)),L===0)return null;let G=x/L,$=E/L,Q=1/L,Ee=C-G*z,Ue=D-$*z,q=I-G*O,ue=P-$*O,Me=B-G*ne,Ae=H-$*ne,xe=Me*ue-Ae*q,ze=Ee*Ae-Ue*Me,Ct=q*Ue-ue*Ee;if(s){if(xe<0||ze<0||Ct<0)return null}else if((xe<0||ze<0||Ct<0)&&(xe>0||ze>0||Ct>0))return null;let ke=xe+ze+Ct;if(ke===0)return null;let it=Q*(xe*z+ze*O+Ct*ne);return(ke>0?it<0:it>0)?null:this.at(it/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sf=new Ye,Ws=new Xi,al=new Jn,rf=new T,ol=new T,ll=new T,cl=new T,Kh=new T,hl=new T,af=new T,ul=new T,be=class extends qt{constructor(e=new yt,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){hl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Kh.fromBufferAttribute(u,e),a?hl.addScaledVector(Kh,h):hl.addScaledVector(Kh.sub(t),h))}t.add(hl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),Ws.copy(e.ray).recast(e.near),!(al.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(al,rf)===null||Ws.origin.distanceToSquared(rf)>(e.far-e.near)**2))&&(sf.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(sf),!(i.boundingBox!==null&&Ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ws)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=a[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,A=S;y<A;y+=3){let w=o.getX(y),x=o.getX(y+1),E=o.getX(y+2);s=dl(this,g,e,i,c,h,u,w,x,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let v=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);s=dl(this,a,e,i,c,h,u,v,S,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=a[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,A=S;y<A;y+=3){let w=y,x=y+1,E=y+2;s=dl(this,g,e,i,c,h,u,w,x,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let v=m,S=m+1,y=m+2;s=dl(this,a,e,i,c,h,u,v,S,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Y0(n,e,t,i,s,r,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ws,o),l===null)return null;ul.copy(o),ul.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ul);return c<t.near||c>t.far?null:{distance:c,point:ul.clone(),object:n}}function dl(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ol),n.getVertexPosition(l,ll),n.getVertexPosition(c,cl);let h=Y0(n,e,t,i,ol,ll,cl,af);if(h){let u=new T;ps.getBarycoord(af,ol,ll,cl,u),s&&(h.uv=ps.getInterpolatedAttribute(s,o,l,c,u,new Z)),r&&(h.uv1=ps.getInterpolatedAttribute(r,o,l,c,u,new Z)),a&&(h.normal=ps.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new T,materialIndex:0};ps.getNormal(ol,ll,cl,f.normal),h.face=f,h.barycoord=u}return h}var Ha=class extends Rn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=gn,h=gn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class extends rn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cr=new Ye,of=new Ye,fl=[],lf=new an,$0=new Ye,Ea=new be,ba=new Jn,Yt=class extends be{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,$0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cr),lf.copy(e.boundingBox).applyMatrix4(Cr),this.boundingBox.union(lf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cr),ba.copy(e.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(i),e.ray.intersectsSphere(ba)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cr),of.multiplyMatrices(i,Cr),Ea.matrixWorld=of,Ea.raycast(e,fl);for(let a=0,o=fl.length;a<o;a++){let l=fl[a];l.instanceId=r,l.object=this,t.push(l)}fl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ha(new Float32Array(s*this.count),s,this.count,pc,Qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xs=new Jn,Z0=new Z(.5,.5),pl=new T,ms=class{constructor(e=new Gn,t=new Gn,i=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],v=r[12],S=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,g-p,A-v).normalize(),s[1].setComponents(c+a,d+h,g+p,A+v).normalize(),s[2].setComponents(c+o,d+u,g+_,A+S).normalize(),s[3].setComponents(c-o,d-u,g-_,A-S).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,d-f,g-m,A-y).normalize();else if(s[4].setComponents(c-l,d-f,g-m,A-y).normalize(),t===Kn)s[5].setComponents(c+l,d+f,g+m,A+y).normalize();else if(t===Fr)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);let t=Z0.distanceTo(e.center);return Xs.radius=.7071067811865476+t,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(pl.x=s.normal.x>0?e.max.x:e.min.x,pl.y=s.normal.y>0?e.max.y:e.min.y,pl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},cf=new Ye,Hl=class n{constructor(){this.coordinateSystem=Kn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];cf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ms),i[s].setFromProjectionMatrix(cf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ms),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var gs=class extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zl=new T,kl=new T,hf=new Ye,Ta=new Xi,ml=new Jn,Jh=new T,uf=new T,Wr=class extends qt{constructor(e=new yt,t=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)zl.fromBufferAttribute(t,s-1),kl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=zl.distanceTo(kl);e.setAttribute("lineDistance",new $e(i,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(s),ml.radius+=r,e.ray.intersectsSphere(ml)===!1)return;hf.copy(s).invert(),Ta.copy(e.ray).applyMatrix4(hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){let g=h.getX(_),v=h.getX(_+1),S=gl(this,e,Ta,l,g,v,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(p-1),m=h.getX(d),g=gl(this,e,Ta,l,_,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){let g=gl(this,e,Ta,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=gl(this,e,Ta,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gl(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(zl.fromBufferAttribute(o,s),kl.fromBufferAttribute(o,r),t.distanceSqToSegment(zl,kl,Jh,uf)>i)return;Jh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Jh);if(!(c<e.near||c>e.far))return{distance:c,point:uf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var df=new T,ff=new T,Xr=class extends Wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)df.fromBufferAttribute(t,s),ff.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+df.distanceTo(ff);e.setAttribute("lineDistance",new $e(i,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qi=class extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pf=new Ye,au=new Xi,_l=new Jn,xl=new T,_s=class extends qt{constructor(e=new yt,t=new qi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(s),_l.radius+=r,e.ray.intersectsSphere(_l)===!1)return;pf.copy(s).invert(),au.copy(e.ray).applyMatrix4(pf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,_=d;p<_;p++){let m=c.getX(p);xl.fromBufferAttribute(u,m),mf(xl,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,_=d;p<_;p++)xl.fromBufferAttribute(u,p),mf(xl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mf(n,e,t,i,s,r,a){let o=au.distanceSqToPoint(n);if(o<t){let l=new T;au.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var za=class extends Rn{constructor(e=[],t=tr,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ys=class extends Rn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends Rn{constructor(e,t,i=di,s,r,a,o=gn,l=gn,c,h=Wi,u=1){if(h!==Wi&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ka=class extends Yi{constructor(e,t=di,i=tr,s,r,a=gn,o=gn,l,c=Wi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ga=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zt=class n extends yt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function p(_,m,g,v,S,y,A,w,x,E,L){let C=y/x,D=A/E,z=y/2,I=A/2,P=w/2,O=x+1,B=E+1,H=0,ne=0,G=new T;for(let $=0;$<B;$++){let Q=$*D-I;for(let Ee=0;Ee<O;Ee++){let Ue=Ee*C-z;G[_]=Ue*v,G[m]=Q*S,G[g]=P,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[g]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(Ee/x),u.push(1-$/E),H+=1}}for(let $=0;$<E;$++)for(let Q=0;Q<x;Q++){let Ee=f+Q+O*$,Ue=f+Q+O*($+1),q=f+(Q+1)+O*($+1),ue=f+(Q+1)+O*$;l.push(Ee,Ue,ue),l.push(Ue,q,ue),ne+=6}o.addGroup(d,ne,L),d+=ne,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ai=class n extends yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new T,h=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},kt=class n extends yt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,_=[],m=i/2,g=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function v(){let y=new T,A=new T,w=0,x=(t-e)/i;for(let E=0;E<=r;E++){let L=[],C=E/r,D=C*(t-e)+e;for(let z=0;z<=s;z++){let I=z/s,P=I*l+o,O=Math.sin(P),B=Math.cos(P);A.x=D*O,A.y=-C*i+m,A.z=D*B,u.push(A.x,A.y,A.z),y.set(O,x,B).normalize(),f.push(y.x,y.y,y.z),d.push(I,1-C),L.push(p++)}_.push(L)}for(let E=0;E<s;E++)for(let L=0;L<r;L++){let C=_[L][E],D=_[L+1][E],z=_[L+1][E+1],I=_[L][E+1];(e>0||L!==0)&&(h.push(C,D,I),w+=3),(t>0||L!==r-1)&&(h.push(D,z,I),w+=3)}c.addGroup(g,w,0),g+=w}function S(y){let A=p,w=new Z,x=new T,E=0,L=y===!0?e:t,C=y===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*C,0),f.push(0,C,0),d.push(.5,.5),p++;let D=p;for(let z=0;z<=s;z++){let P=z/s*l+o,O=Math.cos(P),B=Math.sin(P);x.x=L*B,x.y=m*C,x.z=L*O,u.push(x.x,x.y,x.z),f.push(0,C,0),w.x=O*.5+.5,w.y=B*.5*C+.5,d.push(w.x,w.y),p++}for(let z=0;z<s;z++){let I=A+z,P=D+z;y===!0?h.push(P,P+1,I):h.push(P+1,P,I),E+=3}c.addGroup(g,E,y===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xs=class n extends kt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Va=class n extends yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let S=new T,y=new T,A=new T;for(let w=0;w<t.length;w+=3)d(t[w+0],S),d(t[w+1],y),d(t[w+2],A),l(S,y,A,v)}function l(v,S,y,A){let w=A+1,x=[];for(let E=0;E<=w;E++){x[E]=[];let L=v.clone().lerp(y,E/w),C=S.clone().lerp(y,E/w),D=w-E;for(let z=0;z<=D;z++)z===0&&E===w?x[E][z]=L:x[E][z]=L.clone().lerp(C,z/D)}for(let E=0;E<w;E++)for(let L=0;L<2*(w-E)-1;L++){let C=Math.floor(L/2);L%2===0?(f(x[E][C+1]),f(x[E+1][C]),f(x[E][C])):(f(x[E][C+1]),f(x[E+1][C+1]),f(x[E+1][C]))}}function c(v){let S=new T;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(v),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let v=new T;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let y=m(v)/2/Math.PI+.5,A=g(v)/Math.PI+.5;a.push(y,1-A)}p(),u()}function u(){for(let v=0;v<a.length;v+=6){let S=a[v+0],y=a[v+2],A=a[v+4],w=Math.max(S,y,A),x=Math.min(S,y,A);w>.9&&x<.1&&(S<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,S){let y=v*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function p(){let v=new T,S=new T,y=new T,A=new T,w=new Z,x=new Z,E=new Z;for(let L=0,C=0;L<r.length;L+=9,C+=6){v.set(r[L+0],r[L+1],r[L+2]),S.set(r[L+3],r[L+4],r[L+5]),y.set(r[L+6],r[L+7],r[L+8]),w.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),E.set(a[C+4],a[C+5]),A.copy(v).add(S).add(y).divideScalar(3);let D=m(A);_(w,C+0,v,D),_(x,C+2,S,D),_(E,C+4,y,D)}}function _(v,S,y,A){A<0&&v.x===1&&(a[S]=v.x-1),y.x===0&&y.z===0&&(a[S]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Wa=class n extends Va{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Z:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new T,s=[],r=[],a=[],o=new T,l=new Ye;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(at(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(at(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},qr=class extends Vn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Z){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gl=class extends qr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Uu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var gf=new T,_f=new T,jh=new Uu,Qh=new Uu,eu=new Uu,ui=class extends Vn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new T){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(_f.subVectors(s[0],s[1]).add(s[0]),c=_f);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(gf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),jh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,m),Qh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,m),eu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Qh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),eu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(jh.calc(l),Qh.calc(l),eu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xf(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function K0(n,e){let t=1-n;return t*t*e}function J0(n,e){return 2*(1-n)*n*e}function j0(n,e){return n*n*e}function Ca(n,e,t,i){return K0(n,e)+J0(n,t)+j0(n,i)}function Q0(n,e){let t=1-n;return t*t*t*e}function eg(n,e){let t=1-n;return 3*t*t*n*e}function tg(n,e){return 3*(1-n)*n*n*e}function ng(n,e){return n*n*n*e}function Pa(n,e,t,i,s){return Q0(n,e)+eg(n,t)+tg(n,i)+ng(n,s)}var Xa=class extends Vn{constructor(e=new Z,t=new Z,i=new Z,s=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Z){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Pa(e,s.x,r.x,a.x,o.x),Pa(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vl=class extends Vn{constructor(e=new T,t=new T,i=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new T){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Pa(e,s.x,r.x,a.x,o.x),Pa(e,s.y,r.y,a.y,o.y),Pa(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends Vn{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wl=class extends Vn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends Vn{constructor(e=new Z,t=new Z,i=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Z){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ca(e,s.x,r.x,a.x),Ca(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends Vn{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ca(e,s.x,r.x,a.x),Ca(e,s.y,r.y,a.y),Ca(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$s=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(xf(o,l.x,c.x,h.x,u.x),xf(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Z().fromArray(s))}return this}},Xl=Object.freeze({__proto__:null,ArcCurve:Gl,CatmullRomCurve3:ui,CubicBezierCurve:Xa,CubicBezierCurve3:Vl,EllipseCurve:qr,LineCurve:qa,LineCurve3:Wl,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:$a,SplineCurve:$s}),ql=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Xl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Za=class extends ql{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new qa(this.currentPoint.clone(),new Z(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ya(this.currentPoint.clone(),new Z(e,t),new Z(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Xa(this.currentPoint.clone(),new Z(e,t),new Z(i,s),new Z(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new $s(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new qr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ri=class extends Za{constructor(e){super(e),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Za().fromJSON(s))}return this}};function ig(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=xp(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=lg(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ka(r,a,t,o,l,c,0),a}function xp(n,e,t,i,s){let r;if(s===vg(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=vf(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=vf(a/i|0,n[a],n[a+1],r);return r&&Yr(r,r.next)&&(ja(r),r=r.next),r}function Zs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Yr(t,t.next)||Vt(t.prev,t,t.next)===0)){if(ja(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ka(n,e,t,i,s,r,a){if(!n)return;!a&&r&&fg(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?rg(n,i,s,r):sg(n)){e.push(l.i,n.i,c.i),ja(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=ag(Zs(n),e),Ka(n,e,t,i,s,r,2)):a===2&&og(n,e,t,i,s,r):Ka(Zs(n),e,t,i,s,r,1);break}}}function sg(n){let e=n.prev,t=n,i=n.next;if(Vt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&wa(s,o,r,l,a,c,p.x,p.y)&&Vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function rg(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Vt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),p=Math.min(h,u,f),_=Math.max(o,l,c),m=Math.max(h,u,f),g=ou(d,p,e,t,i),v=ou(_,m,e,t,i),S=n.prevZ,y=n.nextZ;for(;S&&S.z>=g&&y&&y.z<=v;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==a&&wa(o,h,l,u,c,f,S.x,S.y)&&Vt(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&wa(o,h,l,u,c,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==a&&wa(o,h,l,u,c,f,S.x,S.y)&&Vt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&wa(o,h,l,u,c,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ag(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Yr(i,s)&&yp(i,t,t.next,s)&&Ja(i,s)&&Ja(s,i)&&(e.push(i.i,t.i,s.i),ja(t),ja(t.next),t=n=s),t=t.next}while(t!==n);return Zs(t)}function og(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&gg(a,o)){let l=Mp(a,o);a=Zs(a,a.next),l=Zs(l,l.next),Ka(a,e,t,i,s,r,0),Ka(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function lg(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=xp(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(mg(c))}s.sort(cg);for(let r=0;r<s.length;r++)t=hg(s[r],t);return t}function cg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function hg(n,e){let t=ug(n,e);if(!t)return e;let i=Mp(t,n);return Zs(i,i.next),Zs(t,t.next)}function ug(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Yr(n,t))return t;do{if(Yr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&vp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Ja(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&dg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function dg(n,e){return Vt(n.prev,n,e.prev)<0&&Vt(e.next,n,n.next)<0}function fg(n,e,t,i){let s=n;do s.z===0&&(s.z=ou(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,pg(s)}function pg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function ou(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function mg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function vp(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function wa(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&vp(n,e,t,i,s,r,a,o)}function gg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!_g(n,e)&&(Ja(n,e)&&Ja(e,n)&&xg(n,e)&&(Vt(n.prev,n,e.prev)||Vt(n,e.prev,e))||Yr(n,e)&&Vt(n.prev,n,n.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Yr(n,e){return n.x===e.x&&n.y===e.y}function yp(n,e,t,i){let s=yl(Vt(n,e,t)),r=yl(Vt(n,e,i)),a=yl(Vt(t,i,n)),o=yl(Vt(t,i,e));return!!(s!==r&&a!==o||s===0&&vl(n,t,e)||r===0&&vl(n,i,e)||a===0&&vl(t,n,i)||o===0&&vl(t,e,i))}function vl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function yl(n){return n>0?1:n<0?-1:0}function _g(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&yp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ja(n,e){return Vt(n.prev,n,n.next)<0?Vt(n,e,n.next)>=0&&Vt(n,n.prev,e)>=0:Vt(n,e,n.prev)<0||Vt(n,n.next,e)<0}function xg(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Mp(n,e){let t=lu(n.i,n.x,n.y),i=lu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function vf(n,e,t,i){let s=lu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ja(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function lu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var cu=class{static triangulate(e,t,i=2){return ig(e,t,i)}},bi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];yf(e),Mf(i,e);let a=e.length;t.forEach(yf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Mf(i,t[l]);let o=cu.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function yf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Mf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Qa=class n extends yt{constructor(e=new Ri([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:yg,S,y=!1,A,w,x,E;if(g){S=g.getSpacedPoints(h),y=!0,f=!1;let ee=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,ee),w=new T,x=new T,E=new T}f||(m=0,d=0,p=0,_=0);let L=o.extractPoints(c),C=L.shape,D=L.holes;if(!bi.isClockWise(C)){C=C.reverse();for(let ee=0,oe=D.length;ee<oe;ee++){let le=D[ee];bi.isClockWise(le)&&(D[ee]=le.reverse())}}function I(ee){let le=10000000000000001e-36,we=ee[0];for(let ve=1;ve<=ee.length;ve++){let nt=ve%ee.length,Oe=ee[nt],dt=Oe.x-we.x,mt=Oe.y-we.y,bt=dt*dt+mt*mt,F=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(we.x),Math.abs(we.y)),en=le*F*F;if(bt<=en){ee.splice(nt,1),ve--;continue}we=Oe}}I(C),D.forEach(I);let P=D.length,O=C;for(let ee=0;ee<P;ee++){let oe=D[ee];C=C.concat(oe)}function B(ee,oe,le){return oe||Ze("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(oe,le)}let H=C.length;function ne(ee,oe,le){let we,ve,nt,Oe=ee.x-oe.x,dt=ee.y-oe.y,mt=le.x-ee.x,bt=le.y-ee.y,F=Oe*Oe+dt*dt,en=Oe*bt-dt*mt;if(Math.abs(en)>Number.EPSILON){let ht=Math.sqrt(F),Lt=Math.sqrt(mt*mt+bt*bt),me=oe.x-dt/ht,Xt=oe.y+Oe/ht,Xe=le.x-bt/Lt,Ke=le.y+mt/Lt,R=((Xe-me)*bt-(Ke-Xt)*mt)/(Oe*bt-dt*mt);we=me+Oe*R-ee.x,ve=Xt+dt*R-ee.y;let M=we*we+ve*ve;if(M<=2)return new Z(we,ve);nt=Math.sqrt(M/2)}else{let ht=!1;Oe>Number.EPSILON?mt>Number.EPSILON&&(ht=!0):Oe<-Number.EPSILON?mt<-Number.EPSILON&&(ht=!0):Math.sign(dt)===Math.sign(bt)&&(ht=!0),ht?(we=-dt,ve=Oe,nt=Math.sqrt(F)):(we=Oe,ve=dt,nt=Math.sqrt(F/2))}return new Z(we/nt,ve/nt)}let G=[];for(let ee=0,oe=O.length,le=oe-1,we=ee+1;ee<oe;ee++,le++,we++)le===oe&&(le=0),we===oe&&(we=0),G[ee]=ne(O[ee],O[le],O[we]);let $=[],Q,Ee=G.concat();for(let ee=0,oe=P;ee<oe;ee++){let le=D[ee];Q=[];for(let we=0,ve=le.length,nt=ve-1,Oe=we+1;we<ve;we++,nt++,Oe++)nt===ve&&(nt=0),Oe===ve&&(Oe=0),Q[we]=ne(le[we],le[nt],le[Oe]);$.push(Q),Ee=Ee.concat(Q)}let Ue;if(m===0)Ue=bi.triangulateShape(O,D);else{let ee=[],oe=[];for(let le=0;le<m;le++){let we=le/m,ve=d*Math.cos(we*Math.PI/2),nt=p*Math.sin(we*Math.PI/2)+_;for(let Oe=0,dt=O.length;Oe<dt;Oe++){let mt=B(O[Oe],G[Oe],nt);ze(mt.x,mt.y,-ve),we===0&&ee.push(mt)}for(let Oe=0,dt=P;Oe<dt;Oe++){let mt=D[Oe];Q=$[Oe];let bt=[];for(let F=0,en=mt.length;F<en;F++){let ht=B(mt[F],Q[F],nt);ze(ht.x,ht.y,-ve),we===0&&bt.push(ht)}we===0&&oe.push(bt)}}Ue=bi.triangulateShape(ee,oe)}let q=Ue.length,ue=p+_;for(let ee=0;ee<H;ee++){let oe=f?B(C[ee],Ee[ee],ue):C[ee];y?(x.copy(A.normals[0]).multiplyScalar(oe.x),w.copy(A.binormals[0]).multiplyScalar(oe.y),E.copy(S[0]).add(x).add(w),ze(E.x,E.y,E.z)):ze(oe.x,oe.y,0)}for(let ee=1;ee<=h;ee++)for(let oe=0;oe<H;oe++){let le=f?B(C[oe],Ee[oe],ue):C[oe];y?(x.copy(A.normals[ee]).multiplyScalar(le.x),w.copy(A.binormals[ee]).multiplyScalar(le.y),E.copy(S[ee]).add(x).add(w),ze(E.x,E.y,E.z)):ze(le.x,le.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){let oe=ee/m,le=d*Math.cos(oe*Math.PI/2),we=p*Math.sin(oe*Math.PI/2)+_;for(let ve=0,nt=O.length;ve<nt;ve++){let Oe=B(O[ve],G[ve],we);ze(Oe.x,Oe.y,u+le)}for(let ve=0,nt=D.length;ve<nt;ve++){let Oe=D[ve];Q=$[ve];for(let dt=0,mt=Oe.length;dt<mt;dt++){let bt=B(Oe[dt],Q[dt],we);y?ze(bt.x,bt.y+S[h-1].y,S[h-1].x+le):ze(bt.x,bt.y,u+le)}}}Me(),Ae();function Me(){let ee=s.length/3;if(f){let oe=0,le=H*oe;for(let we=0;we<q;we++){let ve=Ue[we];Ct(ve[2]+le,ve[1]+le,ve[0]+le)}oe=h+m*2,le=H*oe;for(let we=0;we<q;we++){let ve=Ue[we];Ct(ve[0]+le,ve[1]+le,ve[2]+le)}}else{for(let oe=0;oe<q;oe++){let le=Ue[oe];Ct(le[2],le[1],le[0])}for(let oe=0;oe<q;oe++){let le=Ue[oe];Ct(le[0]+H*h,le[1]+H*h,le[2]+H*h)}}i.addGroup(ee,s.length/3-ee,0)}function Ae(){let ee=s.length/3,oe=0;xe(O,oe),oe+=O.length;for(let le=0,we=D.length;le<we;le++){let ve=D[le];xe(ve,oe),oe+=ve.length}i.addGroup(ee,s.length/3-ee,1)}function xe(ee,oe){let le=ee.length;for(;--le>=0;){let we=le,ve=le-1;ve<0&&(ve=ee.length-1);for(let nt=0,Oe=h+m*2;nt<Oe;nt++){let dt=H*nt,mt=H*(nt+1),bt=oe+we+dt,F=oe+ve+dt,en=oe+ve+mt,ht=oe+we+mt;ke(bt,F,en,ht)}}}function ze(ee,oe,le){l.push(ee),l.push(oe),l.push(le)}function Ct(ee,oe,le){it(ee),it(oe),it(le);let we=s.length/3,ve=v.generateTopUV(i,s,we-3,we-2,we-1);st(ve[0]),st(ve[1]),st(ve[2])}function ke(ee,oe,le,we){it(ee),it(oe),it(we),it(oe),it(le),it(we);let ve=s.length/3,nt=v.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);st(nt[0]),st(nt[1]),st(nt[3]),st(nt[1]),st(nt[2]),st(nt[3])}function it(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function st(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Mg(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xl[s.type]().fromJSON(s)),new n(i,e.options)}},yg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Z(r,a),new Z(o,l),new Z(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Z(a,1-l),new Z(c,1-u),new Z(f,1-p),new Z(_,1-g)]:[new Z(o,1-l),new Z(h,1-u),new Z(d,1-p),new Z(m,1-g)]}};function Mg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ci=class n extends Va{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var sn=class n extends yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*f-a;for(let S=0;S<c;S++){let y=S*u-r;p.push(y,-v,0),_.push(0,0,1),m.push(S/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let S=v+c*g,y=v+c*(g+1),A=v+1+c*(g+1),w=v+1+c*g;d.push(S,y,w),d.push(y,A,w)}this.setIndex(d),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},eo=class n extends yt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new T,p=new Z;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let g=r+m/i*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<s;_++){let m=_*(i+1);for(let g=0;g<i;g++){let v=g+m,S=v,y=v+i+1,A=v+i+2,w=v+1;o.push(S,y,w),o.push(y,A,w)}}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},to=class n extends yt{constructor(e=new Ri([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(r,3)),this.setAttribute("uv",new $e(a,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;bi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];bi.isClockWise(v)===!0&&(p[m]=v.reverse())}let _=bi.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];d=d.concat(v)}for(let m=0,g=d.length;m<g;m++){let v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=_.length;m<g;m++){let v=_[m],S=v[0]+u,y=v[1]+u,A=v[2]+u;i.push(S,y,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Sg(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function Sg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var $i=class n extends yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,f=new T,d=[],p=[],_=[],m=[];for(let g=0;g<=i;g++){let v=[],S=g/i,y=a+S*o,A=e*Math.cos(y),w=Math.sqrt(e*e-A*A),x=0;g===0&&a===0?x=.5/t:g===i&&l===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){let L=E/t,C=s+L*r;u.x=-w*Math.cos(C),u.y=A,u.z=w*Math.sin(C),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(L+x,1-S),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let S=h[g][v+1],y=h[g][v],A=h[g+1][v],w=h[g+1][v+1];(g!==0||a>0)&&d.push(S,y,w),(g!==i-1||l<Math.PI)&&d.push(y,A,w)}this.setIndex(d),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jn=class n extends yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new T,d=new T,p=new T;for(let _=0;_<=i;_++){let m=a+_/i*o;for(let g=0;g<=s;g++){let v=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,S=(s+1)*(_-1)+m,y=(s+1)*_+m;l.push(g,v,y),l.push(v,S,y)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var vs=class n extends yt{constructor(e=new $a(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new Z,h=new T,u=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function _(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),v(),g()}function m(S){h=e.getPointAt(S/t,h);let y=a.normals[S],A=a.binormals[S];for(let w=0;w<=s;w++){let x=w/s*Math.PI*2,E=Math.sin(x),L=-Math.cos(x);l.x=L*y.x+E*A.x,l.y=L*y.y+E*A.y,l.z=L*y.z+E*A.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let S=1;S<=t;S++)for(let y=1;y<=s;y++){let A=(s+1)*(S-1)+(y-1),w=(s+1)*S+(y-1),x=(s+1)*S+y,E=(s+1)*(S-1)+y;p.push(A,w,E),p.push(w,x,E)}}function v(){for(let S=0;S<=t;S++)for(let y=0;y<=s;y++)c.x=S/t,c.y=y/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Xl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function sr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Sf(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Sf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=sr(n[t]);for(let s in i)e[s]=i[s]}return e}function Sf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Eg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Xn={clone:sr,merge:Cn},bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bg,this.fragmentShader=Tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=Eg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Re().setHex(s.value);break;case"v2":this.uniforms[i].value=new Z().fromArray(s.value);break;case"v3":this.uniforms[i].value=new T().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$r=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},je=class extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yn=class extends je{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return qs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){qs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var no=class extends hi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=oc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yl=class extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$l=class extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ml(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ys=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zl=class extends ys{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iu,endingEnd:iu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case su:r=e,o=2*t-i;break;case ru:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case su:a=e,l=2*i-t;break;case ru:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,S=(-1-d)*m+(1.5+d)*_+.5*p,y=d*m-d*_;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+v*a[c+A]+S*a[l+A]+y*a[u+A];return r}},Kl=class extends ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Jl=class extends ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jl=class extends ys{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),_=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*p;return r}let f=o*2,d=e-1;for(let p=0;p!==o;++p){let _=a[c+p],m=a[l+p],g=d*f+p*2,v=u[g],S=u[g+1],y=e*f+p*2,A=h[y],w=h[y+1],x=Ag(i,t,v,A,s);r[p]=Sp(x,_,S,w,m)}return r}};function Sp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function wg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Ag(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Sp(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=wg(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Ml(e.settings)&&(i.settings={inTangents:Pr(e.settings.inTangents,Array),outTangents:Pr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ia:t=this.InterpolantFactoryMethodDiscrete;break;case Ul:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth;break;case nu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return bl;case this.InterpolantFactoryMethodBezier:return nu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Ml(this.settings)&&(Ef(this.settings.inTangents,e),Ef(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Ml(this.settings)&&(bf(this.settings.inTangents,e),bf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&m0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===bl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ml(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ef(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function bf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Ul;var Ms=class extends Wn{constructor(e,t,i){super(e,t,i)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Ia;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};Ql.prototype.ValueTypeName="color";var ec=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};ec.prototype.ValueTypeName="number";var tc=class extends ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Bt.slerpFlat(r,0,a,c-o,a,c,l);return r}},io=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}};io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends Wn{constructor(e,t,i){super(e,t,i)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Ia;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};nc.prototype.ValueTypeName="vector";var wl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Tf(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Tf(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Tf(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ic=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ep=new ic,Zr=class{constructor(e){this.manager=e!==void 0?e:Ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=new WeakMap,sc=class extends Zr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=wl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ir.get(a);u===void 0&&(u=[],Ir.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Or("img");function l(){h(),t&&t(this);let u=Ir.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Ir.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),wl.remove(`image:${e}`);let f=Ir.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Ir.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wl.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var so=class extends Zr{constructor(e){super(e)}load(e,t,i,s){let r=new Rn,a=new sc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Kr=class extends qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Zi=class extends Kr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},tu=new Ye,wf=new T,Af=new T,ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(wf),Af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Af),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){tu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(tu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Fr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Sl=new T,El=new Bt,Si=new T,ao=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sl,El,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,El,Si.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Sl,El,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,El,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new T,Rf=new Z,Cf=new Z,An=class extends ao{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Cf),t.subVectors(Cf,Rf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Aa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var hu=class extends ro{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}},Ki=class extends Kr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ks=class extends ao{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uu=class extends ro{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends Kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new uu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Lr=-90,Dr=1,Jr=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new An(Lr,Dr,e,t);s.layers=this.layers,this.add(s);let r=new An(Lr,Dr,e,t);r.layers=this.layers,this.add(r);let a=new An(Lr,Dr,e,t);a.layers=this.layers,this.add(a);let o=new An(Lr,Dr,e,t);o.layers=this.layers,this.add(o);let l=new An(Lr,Dr,e,t);l.layers=this.layers,this.add(l);let c=new An(Lr,Dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},rc=class extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Js=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Rg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Rg(){this._document.hidden===!1&&this.reset()}var Ou="\\[\\]\\.:\\/",Cg=new RegExp("["+Ou+"]","g"),Bu="[^"+Ou+"]",Pg="[^"+Ou.replace("\\.","")+"]",Ig=/((?:WC+[\/:])*)/.source.replace("WC",Bu),Lg=/(WCOD+)?/.source.replace("WCOD",Pg),Dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bu),Ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bu),Ug=new RegExp("^"+Ig+Lg+Dg+Ng+"$"),Fg=["material","materials","bones","map"],du=class{constructor(e,t,i){let s=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cg,"")}static parseTrackName(e){let t=Ug.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Fg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=du;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TS=new Float32Array(1);var Pf=new Ye,oo=class{constructor(e,t,i=0,s=1/0){this.ray=new Xi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pf),this}intersectObject(e,t=!0,i=[]){return fu(e,this,i,t),i.sort(If),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)fu(e[s],this,i,t);return i.sort(If),i}};function If(n,e){return n.distance-e.distance}function fu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)fu(r[a],e,t,!0)}}var jr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Wu=class Wu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Wu.prototype.isMatrix2=!0;var pu=Wu;var Qr=class extends Xr{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new yt;r.setIndex(new rn(i,1)),r.setAttribute("position",new $e(s,3)),super(r,new gs({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var lo=class extends ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Hu(n,e,t,i){let s=Og(i);switch(t){case Tu:return n*e;case pc:return n*e/s.components*s.byteLength;case mc:return n*e/s.components*s.byteLength;case As:return n*e*2/s.components*s.byteLength;case gc:return n*e*2/s.components*s.byteLength;case wu:return n*e*3/s.components*s.byteLength;case fi:return n*e*4/s.components*s.byteLength;case _c:return n*e*4/s.components*s.byteLength;case _o:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vo:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vc:case Mc:return Math.max(n,16)*Math.max(e,8)/4;case xc:case yc:return Math.max(n,8)*Math.max(e,8)/2;case Sc:case Ec:case Tc:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bc:case Mo:case Ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gc:case Vc:case Wc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xc:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case So:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Og(n){switch(n){case Bn:case Mu:return{byteLength:1,components:1};case ia:case Su:case on:return{byteLength:2,components:1};case dc:case fc:return{byteLength:2,components:4};case di:case uc:case Qn:return{byteLength:4,components:1};case Eu:case bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Xp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Wg(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,e_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,u_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,f_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,p_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,m_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",M_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,L_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,F_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,O_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ex=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_v=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:Xg,alphahash_pars_fragment:qg,alphamap_fragment:Yg,alphamap_pars_fragment:$g,alphatest_fragment:Zg,alphatest_pars_fragment:Kg,aomap_fragment:Jg,aomap_pars_fragment:jg,batching_pars_vertex:Qg,batching_vertex:e_,begin_vertex:t_,beginnormal_vertex:n_,bsdfs:i_,iridescence_fragment:s_,bumpmap_pars_fragment:r_,clipping_planes_fragment:a_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:l_,clipping_planes_vertex:c_,color_fragment:h_,color_pars_fragment:u_,color_pars_vertex:d_,color_vertex:f_,common:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:__,emissivemap_fragment:x_,emissivemap_pars_fragment:v_,colorspace_fragment:y_,colorspace_pars_fragment:M_,envmap_fragment:S_,envmap_common_pars_fragment:E_,envmap_pars_fragment:b_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:F_,envmap_vertex:w_,fog_vertex:A_,fog_pars_vertex:R_,fog_fragment:C_,fog_pars_fragment:P_,gradientmap_pars_fragment:I_,lightmap_pars_fragment:L_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:N_,lights_pars_begin:U_,lights_toon_fragment:O_,lights_toon_pars_fragment:B_,lights_phong_fragment:H_,lights_phong_pars_fragment:z_,lights_physical_fragment:k_,lights_physical_pars_fragment:G_,lights_fragment_begin:V_,lights_fragment_maps:W_,lights_fragment_end:X_,lightprobes_pars_fragment:q_,logdepthbuf_fragment:Y_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:Z_,logdepthbuf_vertex:K_,map_fragment:J_,map_pars_fragment:j_,map_particle_fragment:Q_,map_particle_pars_fragment:ex,metalnessmap_fragment:tx,metalnessmap_pars_fragment:nx,morphinstance_vertex:ix,morphcolor_vertex:sx,morphnormal_vertex:rx,morphtarget_pars_vertex:ax,morphtarget_vertex:ox,normal_fragment_begin:lx,normal_fragment_maps:cx,normal_pars_fragment:hx,normal_pars_vertex:ux,normal_vertex:dx,normalmap_pars_fragment:fx,clearcoat_normal_fragment_begin:px,clearcoat_normal_fragment_maps:mx,clearcoat_pars_fragment:gx,iridescence_pars_fragment:_x,opaque_fragment:xx,packing:vx,premultiplied_alpha_fragment:yx,project_vertex:Mx,dithering_fragment:Sx,dithering_pars_fragment:Ex,roughnessmap_fragment:bx,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:wx,shadowmap_pars_vertex:Ax,shadowmap_vertex:Rx,shadowmask_pars_fragment:Cx,skinbase_vertex:Px,skinning_pars_vertex:Ix,skinning_vertex:Lx,skinnormal_vertex:Dx,specularmap_fragment:Nx,specularmap_pars_fragment:Ux,tonemapping_fragment:Fx,tonemapping_pars_fragment:Ox,transmission_fragment:Bx,transmission_pars_fragment:Hx,uv_pars_fragment:zx,uv_pars_vertex:kx,uv_vertex:Gx,worldpos_vertex:Vx,background_vert:Wx,background_frag:Xx,backgroundCube_vert:qx,backgroundCube_frag:Yx,cube_vert:$x,cube_frag:Zx,depth_vert:Kx,depth_frag:Jx,distance_vert:jx,distance_frag:Qx,equirect_vert:ev,equirect_frag:tv,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:sv,meshbasic_frag:rv,meshlambert_vert:av,meshlambert_frag:ov,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:hv,meshnormal_frag:uv,meshphong_vert:dv,meshphong_frag:fv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:_v,points_vert:xv,points_frag:vv,shadow_vert:yv,shadow_frag:Mv,sprite_vert:Sv,sprite_frag:Ev},ye={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Di={basic:{uniforms:Cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Cn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Cn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Re(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Cn([ye.points,ye.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Cn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Cn([ye.common,ye.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Cn([ye.sprite,ye.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Cn([ye.common,ye.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Cn([ye.lights,ye.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Di.physical={uniforms:Cn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var $c={r:0,b:0,g:0},bv=new Ye,qp=new Je;qp.set(-1,0,0,0,1,0,0,0,1);function Tv(n,e,t,i,s,r){let a=new Re(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function p(v){let S=!1,y=d(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),S=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,S){let y=d(S);y&&y.isCubeTexture?(c===void 0&&(c=new be(new zt(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:sr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bv.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qp),c.material.toneMapped=ut.getTransfer(y.colorSpace)!==Tt,(h!==y||u!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new be(new sn(2,2),new Wt({name:"BackgroundMaterial",uniforms:sr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ut.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB($c,Fu(n)),t.buffers.color.setClear($c.r,$c.g,$c.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:_,dispose:g}}function wv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(D,z,I,P,O){let B=!1,H=u(D,P,I,z);r!==H&&(r=H,c(r.object)),B=d(D,P,I,O),B&&p(D,P,I,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(D,z,I,P),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function u(D,z,I,P){let O=P.wireframe===!0,B=i[z.id];B===void 0&&(B={},i[z.id]=B);let H=D.isInstancedMesh===!0?D.id:0,ne=B[H];ne===void 0&&(ne={},B[H]=ne);let G=ne[I.id];G===void 0&&(G={},ne[I.id]=G);let $=G[O];return $===void 0&&($=f(l()),G[O]=$),$}function f(D){let z=[],I=[],P=[];for(let O=0;O<t;O++)z[O]=0,I[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:I,attributeDivisors:P,object:D,attributes:{},index:null}}function d(D,z,I,P){let O=r.attributes,B=z.attributes,H=0,ne=I.getAttributes();for(let G in ne)if(ne[G].location>=0){let Q=O[G],Ee=B[G];if(Ee===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(Ee=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(Ee=D.instanceColor)),Q===void 0||Q.attribute!==Ee||Ee&&Q.data!==Ee.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function p(D,z,I,P){let O={},B=z.attributes,H=0,ne=I.getAttributes();for(let G in ne)if(ne[G].location>=0){let Q=B[G];Q===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let Ee={};Ee.attribute=Q,Q&&Q.data&&(Ee.data=Q.data),O[G]=Ee,H++}r.attributes=O,r.attributesNum=H,r.index=P}function _(){let D=r.newAttributes;for(let z=0,I=D.length;z<I;z++)D[z]=0}function m(D){g(D,0)}function g(D,z){let I=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;I[D]=1,P[D]===0&&(n.enableVertexAttribArray(D),P[D]=1),O[D]!==z&&(n.vertexAttribDivisor(D,z),O[D]=z)}function v(){let D=r.newAttributes,z=r.enabledAttributes;for(let I=0,P=z.length;I<P;I++)z[I]!==D[I]&&(n.disableVertexAttribArray(I),z[I]=0)}function S(D,z,I,P,O,B,H){H===!0?n.vertexAttribIPointer(D,z,I,O,B):n.vertexAttribPointer(D,z,I,P,O,B)}function y(D,z,I,P){_();let O=P.attributes,B=I.getAttributes(),H=z.defaultAttributeValues;for(let ne in B){let G=B[ne];if(G.location>=0){let $=O[ne];if($===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){let Q=$.normalized,Ee=$.itemSize,Ue=e.get($);if(Ue===void 0)continue;let q=Ue.buffer,ue=Ue.type,Me=Ue.bytesPerElement,Ae=ue===n.INT||ue===n.UNSIGNED_INT||$.gpuType===uc;if($.isInterleavedBufferAttribute){let xe=$.data,ze=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,Ct=$.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let ke=0;ke<G.locationSize;ke++)g(G.location+ke,xe.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ke=0;ke<G.locationSize;ke++)m(G.location+ke);n.bindBuffer(n.ARRAY_BUFFER,q);for(let ke=0;ke<G.locationSize;ke++)S(G.location+ke,Ee/G.locationSize,ue,Q,ze*Me,(Ct+Ee/G.locationSize*ke)*Me,Ae)}else{if($.isInstancedBufferAttribute){for(let xe=0;xe<G.locationSize;xe++)g(G.location+xe,$.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let xe=0;xe<G.locationSize;xe++)m(G.location+xe);n.bindBuffer(n.ARRAY_BUFFER,q);for(let xe=0;xe<G.locationSize;xe++)S(G.location+xe,Ee/G.locationSize,ue,Q,Ee*Me,Ee/G.locationSize*xe*Me,Ae)}}else if(H!==void 0){let Q=H[ne];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(G.location,Q);break;case 3:n.vertexAttrib3fv(G.location,Q);break;case 4:n.vertexAttrib4fv(G.location,Q);break;default:n.vertexAttrib1fv(G.location,Q)}}}}v()}function A(){L();for(let D in i){let z=i[D];for(let I in z){let P=z[I];for(let O in P){let B=P[O];for(let H in B)h(B[H].object),delete B[H];delete P[O]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let z=i[D.id];for(let I in z){let P=z[I];for(let O in P){let B=P[O];for(let H in B)h(B[H].object),delete B[H];delete P[O]}}delete i[D.id]}function x(D){for(let z in i){let I=i[z];for(let P in I){let O=I[P];if(O[D.id]===void 0)continue;let B=O[D.id];for(let H in B)h(B[H].object),delete B[H];delete O[D.id]}}}function E(D){for(let z in i){let I=i[z],P=D.isInstancedMesh===!0?D.id:0,O=I[P];if(O!==void 0){for(let B in O){let H=O[B];for(let ne in H)h(H[ne].object),delete H[ne];delete O[B]}delete I[P],Object.keys(I).length===0&&delete i[z]}}}function L(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Av(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Rv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==fi&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let E=x===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Bn&&x!==Qn&&!E&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:A,samples:w}}function Cv(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Gn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,S=v*4,y=g.clippingState||null;l.value=y,y=h(p,f,S,d);for(let A=0;A!==S;++A)y[A]=t[A];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,y=d;S!==_;++S,y+=4)a.copy(u[S]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var wo=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new za(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zt(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Ji});r.uniforms.tEquirect.value=t;let a=new be(s,r),o=t.minFilter;return t.minFilter===ji&&(t.minFilter=Un),new Jr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},bp=256,Pv=3,Iv=20,Yp=256,$p=16,Lv=3,Dv=new T,Nv=new Re,Rs=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Jr(1,10,null),this._boxMesh=new be(new zt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Dv}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Nv));let m=new Jr(i,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bp,Du(e))}_fromTexture(e,t){e.mapping===tr||e.mapping===na?this._setSize(e.image.length===0?bp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Tp(e,!1,!1),i=Math.log2(e)-Pv;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Tp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===tr||e.mapping===na?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Uv(),this._integrationMaterial=Fv());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/$p);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Lv)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Yp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ov());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Tp(n,e,t){return new wo(n,{minFilter:ji,generateMipmaps:e,type:on,colorSpace:La,depthBuffer:t})}function Ao(n,e,t){return new Wt({name:n,uniforms:e,vertexShader:lt.cube_vert,fragmentShader:t,side:$t,blending:Ji,depthTest:!1,depthWrite:!1})}function Uv(){return Ao("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fv(){return Ao("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$p}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ov(){return Ao("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Iv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function wp(){return Ao("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ap(){return Ao("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===lc||d===cc)if(e.has(f)){let p=e.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new wo(p.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===lc||d===cc,_=d===tr||d===na;if(p||_){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new Rs(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new Rs(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===lc?f.mapping=tr:d===cc&&(f.mapping=na),f}function l(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Hv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&qs("WebGLRenderer: "+i+" extension not supported."),s}}}function zv(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)e.update(_[m],n.ARRAY_BUFFER)}function u(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=_!==null?_.array.length:m.array.length/3-1,S=m.count>=65535?Ba:Oa,y=new S(Math.ceil(v/3)*6,1),A=y.array;if(_!==null){let x=_.array;g=_.version;for(let E=0,L=0;E<v;E+=3){let C=x[E+0],D=x[E+1],z=x[E+2];A[L++]=C,A[L++]=D,A[L++]=D,A[L++]=z,A[L++]=z,A[L++]=C}}else{g=m.version;for(let x=0,E=0;x<v;x+=3){let L=x+0,C=x+1,D=x+2;A[E++]=L,A[E++]=C,A[E++]=C,A[E++]=D,A[E++]=D,A[E++]=L}}y.version=g;let w=r.get(p);w&&e.remove(w),r.set(p,y)}function f(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function kv(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*a,d),t.update(f,i,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Gv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vv(n,e,t){let i=new WeakMap,s=new Ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let L=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;d===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let y=o.attributes.position.count*S,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*A*4*u),x=new Na(w,y,A,u);x.type=Qn,x.needsUpdate=!0;let E=S*4;for(let C=0;C<u;C++){let D=m[C],z=g[C],I=v[C],P=y*A*4*C;for(let O=0;O<D.count;O++){let B=O*E;d===!0&&(s.fromBufferAttribute(D,O),w[P+B+0]=s.x,w[P+B+1]=s.y,w[P+B+2]=s.z,w[P+B+3]=0),p===!0&&(s.fromBufferAttribute(z,O),w[P+B+4]=s.x,w[P+B+5]=s.y,w[P+B+6]=s.z,w[P+B+7]=0),_===!0&&(s.fromBufferAttribute(I,O),w[P+B+8]=s.x,w[P+B+9]=s.y,w[P+B+10]=s.z,w[P+B+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new Z(y,A)},i.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Wv(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Xv={[co]:"LINEAR_TONE_MAPPING",[ho]:"REINHARD_TONE_MAPPING",[uo]:"CINEON_TONE_MAPPING",[er]:"ACES_FILMIC_TONE_MAPPING",[po]:"AGX_TONE_MAPPING",[mo]:"NEUTRAL_TONE_MAPPING",[fo]:"CUSTOM_TONE_MAPPING"};function qv(n,e,t,i,s,r){let a=new jt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new yt;h.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $e([0,2,0,0,2,0],2));let u=new $r({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new be(h,u),d=new Ks(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,v=null,S=[],y=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let x=0;x<S.length;x++){let E=S[x];E.setSize&&E.setSize(A,w)}},this.setEffects=function(A){S=A,y=S.length>0&&S[0].isRenderPass===!0;let w=a.width,x=a.height;S.length>0&&o===null&&(o=new jt(w,x,{type:on,depthBuffer:!1,stencilBuffer:!1}),l=new jt(w,x,{type:on,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&S.some(L=>L.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Yi(w,x),r===!0&&(c.format=Qi,c.type=nr)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let L=0;L<S.length;L++){let C=S[L];C.setSize&&C.setSize(w,x),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,w){if(m||A.toneMapping===Ii&&S.length===0)return!1;if(v=w,w!==null){let x=w.width,E=w.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return y===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=Ii,!0},this.hasRenderPass=function(){return y},this.end=function(A,w){A.toneMapping=g,m=!0;let x=a,E=o;for(let L=0;L<S.length;L++){let C=S[L];C.enabled!==!1&&(C.render(A,E,x,w),C.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(p!==A.outputColorSpace||_!==A.toneMapping){p=A.outputColorSpace,_=A.toneMapping,u.defines={},ut.getTransfer(p)===Tt&&(u.defines.SRGB_TRANSFER="");let L=Xv[_];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(v),A.render(f,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Zp=new Rn,Kp=new Yi(1,1),Jp=new ka(1),jp=new Na,Qp=new Bl,em=new za,Rp=[],Cp=[],Pp=new Float32Array(16),Ip=new Float32Array(9),Lp=new Float32Array(4);function ra(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Rp[s];if(r===void 0&&(r=new Float32Array(s),Rp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jc(n,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Yv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function Zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function Kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function Jv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Lp.set(i),n.uniformMatrix2fv(this.addr,!1,Lp),cn(t,i)}}function jv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Ip.set(i),n.uniformMatrix3fv(this.addr,!1,Ip),cn(t,i)}}function Qv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Pp.set(i),n.uniformMatrix4fv(this.addr,!1,Pp),cn(t,i)}}function ey(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function sy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function oy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function jc(n){return n.version===0&&(n.compareFunction=Cu,n.needsUpdate=!0),n}function ly(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=jc(Kp):r=Zp,t.setTexture2D(e||r,s)}function cy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Qp,s)}function hy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=jc(Jp):r=em,t.setTextureCube(e||r,s)}function uy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||jp,s)}function dy(n){switch(n){case 5126:return Yv;case 35664:return $v;case 35665:return Zv;case 35666:return Kv;case 35674:return Jv;case 35675:return jv;case 35676:return Qv;case 5124:case 35670:return ey;case 35667:case 35671:return ty;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return sy;case 36294:return ry;case 36295:return ay;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return uy}}function fy(n,e){n.uniform1fv(this.addr,e)}function py(n,e){let t=ra(e,this.size,2);n.uniform2fv(this.addr,t)}function my(n,e){let t=ra(e,this.size,3);n.uniform3fv(this.addr,t)}function gy(n,e){let t=ra(e,this.size,4);n.uniform4fv(this.addr,t)}function _y(n,e){let t=ra(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xy(n,e){let t=ra(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vy(n,e){let t=ra(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yy(n,e){n.uniform1iv(this.addr,e)}function My(n,e){n.uniform2iv(this.addr,e)}function Sy(n,e){n.uniform3iv(this.addr,e)}function Ey(n,e){n.uniform4iv(this.addr,e)}function by(n,e){n.uniform1uiv(this.addr,e)}function Ty(n,e){n.uniform2uiv(this.addr,e)}function wy(n,e){n.uniform3uiv(this.addr,e)}function Ay(n,e){n.uniform4uiv(this.addr,e)}function Ry(n,e,t){let i=this.cache,s=e.length,r=Jc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=jc(Kp):a=Zp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Cy(n,e,t){let i=this.cache,s=e.length,r=Jc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qp,r[a])}function Py(n,e,t){let i=this.cache,s=e.length,r=Jc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=jc(Jp):a=em;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Iy(n,e,t){let i=this.cache,s=e.length,r=Jc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||jp,r[a])}function Ly(n){switch(n){case 5126:return fy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return _y;case 35675:return xy;case 35676:return vy;case 5124:case 35670:return yy;case 35667:case 35671:return My;case 35668:case 35672:return Sy;case 35669:case 35673:return Ey;case 5125:return by;case 36294:return Ty;case 36295:return wy;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Iy}}var Yu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dy(t.type)}},$u=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ly(t.type)}},Zu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Xu=/(\w+)(\])?(\[|\.)?/g;function Dp(n,e){n.seq.push(e),n.map[e.id]=e}function Dy(n,e,t){let i=n.name,s=i.length;for(Xu.lastIndex=0;;){let r=Xu.exec(i),a=Xu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dp(t,c===void 0?new Yu(o,n,e):new $u(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Zu(o),Dp(t,u)),t=u}}}var sa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Dy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Np(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ny=37297,Uy=0;function Fy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Up=new Je;function Oy(n){ut._getMatrix(Up,ut.workingColorSpace,n);let e=`mat3( ${Up.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Da:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Fy(n.getShaderSource(e),o)}else return r}function By(n,e){let t=Oy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Hy={[co]:"Linear",[ho]:"Reinhard",[uo]:"Cineon",[er]:"ACESFilmic",[po]:"AgX",[mo]:"Neutral",[fo]:"Custom"};function zy(n,e){let t=Hy[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zc=new T;function ky(){ut.getLuminanceCoefficients(Zc);let n=Zc.x.toFixed(4),e=Zc.y.toFixed(4),t=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function Vy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Wy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function To(n){return n!==""}function Op(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Bp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(n){return n.replace(Xy,qy)}function qy(n,e){let t=lt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ku(t)}var Yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(n){return n.replace(Yy,$y)}function $y(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Zy={[js]:"SHADOWMAP_TYPE_PCF",[ea]:"SHADOWMAP_TYPE_VSM"};function Ky(n){return Zy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jy={[na]:"ENVMAP_MODE_REFRACTION"};function jy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Jy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qy={[oc]:"ENVMAP_BLENDING_MULTIPLY",[Qf]:"ENVMAP_BLENDING_MIX",[ep]:"ENVMAP_BLENDING_ADD"};function eM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Qy[n.combine]||"ENVMAP_BLENDING_NONE"}function tM(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ky(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=jy(t),u=eM(t),f=Gy(t),d=Vy(r),p=s.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(To).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(To).join(`
`),m.length>0&&(m+=`
`)):(_=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),m=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,By("linearToOutputTexel",t.outputColorSpace),ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),a=Ku(a),a=Op(a,t),a=Bp(a,t),o=Ku(o),o=Op(o,t),o=Bp(o,t),a=Hp(a),o=Hp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+_+a,S=g+m+o,y=Np(s,s.VERTEX_SHADER,v),A=Np(s,s.FRAGMENT_SHADER,S);s.attachShader(p,y),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(C){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(y)||"",I=s.getShaderInfoLog(A)||"",P=D.trim(),O=z.trim(),B=I.trim(),H=!0,ne=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,y,A);else{let G=Fp(s,y,"vertex"),$=Fp(s,A,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+G+`
`+$)}else P!==""?qe("WebGLProgram: Program Info Log:",P):(O===""||B==="")&&(ne=!1);ne&&(C.diagnostics={runnable:H,programLog:P,vertexShader:{log:O,prefix:_},fragmentShader:{log:B,prefix:m}})}s.deleteShader(y),s.deleteShader(A),x=new sa(s,p),E=Wy(s,p)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,Ny)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=A,this}var nM=0,Ju=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ju(e),t.set(e,i)),i}},ju=class{constructor(e){this.id=nM++,this.code=e,this.usedTimes=0}};function iM(n){return n===As||n===Mo||n===So}function sM(n,e,t,i,s,r){let a=new kr,o=new Ju,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,E,L,C,D,z){let I=C.fog,P=D.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||O,B),ne=f[x.type],G=i.precision;x.precision!==null&&(G=i.getMaxPrecision(x.precision),G!==x.precision&&qe("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));let $=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Q=$!==void 0?$.length:0,Ee=0;P.morphAttributes.position!==void 0&&(Ee=1),P.morphAttributes.normal!==void 0&&(Ee=2),P.morphAttributes.color!==void 0&&(Ee=3);let Ue,q,ue,Me;if(ne){let Se=Di[ne];Ue=Se.vertexShader,q=Se.fragmentShader}else{Ue=x.vertexShader,q=x.fragmentShader;let Se=o.getVertexShaderStage(x),It=o.getFragmentShaderStage(x);o.update(x,Se,It),ue=Se.id,Me=It.id}let Ae=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,Ct=D.isBatchedMesh===!0,ke=!!x.map,it=!!x.matcap,st=!!H,ee=st&&H.isPMREMTexture===!0,oe=!!x.aoMap,le=!!x.lightMap,we=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,nt=!!x.displacementMap,Oe=!!x.emissiveMap,dt=!!x.metalnessMap,mt=!!x.roughnessMap,bt=x.anisotropy>0,F=x.clearcoat>0,en=x.diffuseRoughness>0,ht=x.dispersion>0,Lt=x.retroreflectivity>0,me=x.iridescence>0,Xt=x.sheen>0,Xe=x.transmission>0,Ke=bt&&!!x.anisotropyMap,R=F&&!!x.clearcoatMap,M=F&&!!x.clearcoatNormalMap,V=F&&!!x.clearcoatRoughnessMap,se=en&&!!x.diffuseRoughnessMap,te=me&&!!x.iridescenceMap,ce=me&&!!x.iridescenceThicknessMap,ge=Xt&&!!x.sheenColorMap,K=Xt&&!!x.sheenRoughnessMap,J=!!x.specularMap,de=!!x.specularColorMap,N=!!x.specularIntensityMap,j=Xe&&!!x.transmissionMap,Y=Xe&&!!x.thicknessMap,fe=!!x.gradientMap,ae=!!x.alphaMap,he=x.alphaTest>0,Be=!!x.alphaHash,ot=!!x.extensions,re=Ii;x.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(re=n.toneMapping);let Ve=ee?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,rt={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:q,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:Ct,batchingColor:Ct&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ke,matcap:it,envMap:st,envMapMode:st&&H.mapping,envMapPMREM:ee,envMapMaxLod:ee?Ve.length-1:null,envMapSize:ee?Ve[0].width:null,aoMap:oe,lightMap:le,bumpMap:we,normalMap:ve,displacementMap:nt,emissiveMap:Oe,normalMapObjectSpace:ve&&x.normalMapType===ip,normalMapTangentSpace:ve&&x.normalMapType===Eo,packedNormalMap:ve&&x.normalMapType===Eo&&iM(x.normalMap.format),metalnessMap:dt,roughnessMap:mt,anisotropy:bt,anisotropyMap:Ke,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:M,clearcoatRoughnessMap:V,diffuseRoughness:en,diffuseRoughnessMap:se,dispersion:ht,retroreflection:Lt,iridescence:me,iridescenceMap:te,iridescenceThicknessMap:ce,sheen:Xt,sheenColorMap:ge,sheenRoughnessMap:K,specularMap:J,specularColorMap:de,specularIntensityMap:N,transmission:Xe,transmissionMap:j,thicknessMap:Y,gradientMap:fe,opaque:x.transparent===!1&&x.blending===ta&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:he,alphaHash:Be,combine:x.combine,mapUv:ke&&d(x.map.channel),aoMapUv:oe&&d(x.aoMap.channel),lightMapUv:le&&d(x.lightMap.channel),bumpMapUv:we&&d(x.bumpMap.channel),normalMapUv:ve&&d(x.normalMap.channel),displacementMapUv:nt&&d(x.displacementMap.channel),emissiveMapUv:Oe&&d(x.emissiveMap.channel),metalnessMapUv:dt&&d(x.metalnessMap.channel),roughnessMapUv:mt&&d(x.roughnessMap.channel),anisotropyMapUv:Ke&&d(x.anisotropyMap.channel),clearcoatMapUv:R&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:te&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&d(x.sheenRoughnessMap.channel),specularMapUv:J&&d(x.specularMap.channel),specularColorMapUv:de&&d(x.specularColorMap.channel),specularIntensityMapUv:N&&d(x.specularIntensityMap.channel),transmissionMapUv:j&&d(x.transmissionMap.channel),thicknessMapUv:Y&&d(x.thicknessMap.channel),alphaMapUv:ae&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ve||bt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(ke||ae),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ee,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.filter(Se=>Se.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:ke&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===Tt,decodeVideoTextureEmissive:Oe&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===Tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Zt,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ot&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&x.extensions.multiDraw===!0||Ct)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function _(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)E.push(L),E.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(E,x),g(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function g(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let E=f[x.type],L;if(E){let C=Di[E];L=Xn.clone(C.uniforms)}else L=x.uniforms;return L}function S(x,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new tM(n,E,x,s),c.push(L),h.set(E,L)),L}function y(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:w}}function rM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function aM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function kp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,_,m,g){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},n[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function l(f,d,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);let S=o(f,d,p,_,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(f,d,p,_,m,g){let v=o(f,d,p,_,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(f,d){t.length>1&&t.sort(f||aM),i.length>1&&i.sort(d||kp),s.length>1&&s.sort(d||kp)}function u(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function oM(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Gp,n.set(i,[a])):s>=r.length?(a=new Gp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function lM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new Re};break;case"SpotLight":t={position:new T,direction:new T,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=t,t}}}function cM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var hM=0;function uM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dM(n){let e=new lM,t=cM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);let s=new T,r=new Ye,a=new Ye;function o(c){let h=0,u=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,v=0,S=0,y=0,A=0,w=0,x=0,E=0,L=0,C=0;c.sort(uM);for(let z=0,I=c.length;z<I;z++){let P=c[z],O=P.color,B=P.intensity,H=P.distance,ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===As?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*B,u+=O.g*B,f+=O.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],B);C++}else if(P.isSunLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,Q=t.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[p]=Q,i.sunShadowMap[p]=ne;let Ee=$.getViewportCount();for(let Ue=0;Ue<Ee;Ue++)i.sunShadowMatrix[_+Ue]=$.getMatrix(Ue),i.sunShadowCascade[_+Ue]=$._cascadeData[Ue];_+=Ee,p++}i.sun[d]=G,d++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,Q=t.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=P.shadow.matrix,A++}i.directional[m]=G,m++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[v]=G;let $=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,$.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[v]=$.matrix,P.castShadow){let Q=t.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=ne,x++}v++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=G,S++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let $=P.shadow,Q=t.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=P.shadow.matrix,w++}i.point[g]=G,g++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[y]=G,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let D=i.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==A||D.numPointShadows!==w||D.numSpotShadows!==x||D.numSpotMaps!==E||D.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=m,i.spot.length=v,i.rectArea.length=S,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+E-L,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,D.sunLength=d,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=A,D.numPointShadows=w,D.numSpotShadows=x,D.numSpotMaps=E,D.numLightProbes=C,i.version=hM++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let y=c[v];if(y.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),f++}else if(y.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let A=i.rectArea[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Vp(n){let e=new dM(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function fM(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Vp(n),e.set(s,[o])):r>=a.length?(o=new Vp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var pM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gM=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],_M=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],Wp=new Ye,bo=new T,qu=new T;function xM(n,e,t){let i=new ms,s=new Z,r=new Z,a=new Ht,o=new Yl,l=new $l,c={},h=t.maxTextureSize,u={[ws]:$t,[$t]:ws,[Zt]:Zt},f=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:pM,fragmentShader:mM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new yt;p.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new be(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let g=this.type;this.render=function(w,x,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Nf&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);let L=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ji),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let I=g!==this.type;I&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=w.length;P<O;P++){let B=w[P],H=B.shadow;if(H===void 0){qe("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ne=H.getFrameExtents();s.multiply(ne),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,H.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=G,H.map===null||I===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ea){if(B.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new jt(s.x,s.y,{format:As,type:on,minFilter:Un,magFilter:Un,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Yi(s.x,s.y,Qn),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Wi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=gn,H.map.depthTexture.magFilter=gn}else B.isPointLight?(H.map=new wo(s.x),H.map.depthTexture=new ka(s.x,di)):(H.map=new jt(s.x,s.y),H.map.depthTexture=new Yi(s.x,s.y,di)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Wi,this.type===js?(H.map.depthTexture.compareFunction=G?Ru:Au,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=gn,H.map.depthTexture.magFilter=gn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let $=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();B.isPointLight!==!0&&H.updateMatrices(B,E);let Q=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:E.layers;for(let Ee=0;Ee<$;Ee++){let Ue=H.getCamera(Ee);if(B.isPointLight){let q=H.camera,ue=H.matrix,Me=B.distance||q.far;Me!==q.far&&(q.far=Me,q.updateProjectionMatrix()),bo.setFromMatrixPosition(B.matrixWorld),q.position.copy(bo),qu.copy(q.position),qu.add(gM[Ee]),q.up.copy(_M[Ee]),q.lookAt(qu),q.updateMatrixWorld(),ue.makeTranslation(-bo.x,-bo.y,-bo.z),Wp.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Wp,q.coordinateSystem,q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,Ee),n.clear();else{Ee===0&&(n.setRenderTarget(H.map),n.clear());let q=H.getViewport(Ee);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),z.viewport(a)}i=H.getFrustum(Ee),y(x,E,Ue,B,Q,this.type)}H.isPointLightShadow!==!0&&this.type===ea&&v(H,E),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(L,C,D)};function v(w,x){let E=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new jt(s.x,s.y,{format:As,type:on}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,E,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,E,d,_,null)}function S(w,x,E,L){let C=null,D=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=E.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=C.uuid,I=x.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let O=P[I];O===void 0&&(O=C.clone(),P[I]=O,x.addEventListener("dispose",A)),C=O}if(C.visible=x.visible,C.wireframe=x.wireframe,L===ea?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=n.properties.get(C);z.light=E}return C}function y(w,x,E,L,C,D){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===ea)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let P=e.update(w),O=w.material;if(Array.isArray(O)){let B=P.groups;for(let H=0,ne=B.length;H<ne;H++){let G=B[H],$=O[G.materialIndex];if($&&$.visible){let Q=S(w,$,L,D);w.onBeforeShadow(n,w,x,E,P,Q,G),n.renderBufferDirect(E,null,P,Q,w,G),w.onAfterShadow(n,w,x,E,P,Q,G)}}}else if(O.visible){let B=S(w,O,L,D);w.onBeforeShadow(n,w,x,E,P,B,null),n.renderBufferDirect(E,null,P,B,w,null),w.onAfterShadow(n,w,x,E,P,B,null)}}let I=w.children;for(let P=0,O=I.length;P<O;P++)y(I[P],x,E,L,C,D)}function A(w){w.target.removeEventListener("dispose",A);for(let E in c){let L=c[E],C=w.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function vM(n,e){function t(){let N=!1,j=new Ht,Y=null,fe=new Ht(0,0,0,0);return{setMask:function(ae){Y!==ae&&!N&&(n.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){N=ae},setClear:function(ae,he,Be,ot,re){re===!0&&(ae*=ot,he*=ot,Be*=ot),j.set(ae,he,Be,ot),fe.equals(j)===!1&&(n.clearColor(ae,he,Be,ot),fe.copy(j))},reset:function(){N=!1,Y=null,fe.set(-1,0,0,0)}}}function i(){let N=!1,j=!1,Y=null,fe=null,ae=null;return{setReversed:function(he){if(j!==he){let Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),j=he;let ot=ae;ae=null,this.setClear(ot)}},getReversed:function(){return j},setTest:function(he){he?xe(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(he){Y!==he&&!N&&(n.depthMask(he),Y=he)},setFunc:function(he){if(j&&(he=pp[he]),fe!==he){switch(he){case Al:n.depthFunc(n.NEVER);break;case Rl:n.depthFunc(n.ALWAYS);break;case Cl:n.depthFunc(n.LESS);break;case Ur:n.depthFunc(n.LEQUAL);break;case Pl:n.depthFunc(n.EQUAL);break;case Il:n.depthFunc(n.GEQUAL);break;case Ll:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=he}},setLocked:function(he){N=he},setClear:function(he){ae!==he&&(ae=he,j&&(he=1-he),n.clearDepth(he))},reset:function(){N=!1,Y=null,fe=null,ae=null,j=!1}}}function s(){let N=!1,j=null,Y=null,fe=null,ae=null,he=null,Be=null,ot=null,re=null;return{setTest:function(Ve){N||(Ve?xe(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(Ve){j!==Ve&&!N&&(n.stencilMask(Ve),j=Ve)},setFunc:function(Ve,rt,Se){(Y!==Ve||fe!==rt||ae!==Se)&&(n.stencilFunc(Ve,rt,Se),Y=Ve,fe=rt,ae=Se)},setOp:function(Ve,rt,Se){(he!==Ve||Be!==rt||ot!==Se)&&(n.stencilOp(Ve,rt,Se),he=Ve,Be=rt,ot=Se)},setLocked:function(Ve){N=Ve},setClear:function(Ve){re!==Ve&&(n.clearStencil(Ve),re=Ve)},reset:function(){N=!1,j=null,Y=null,fe=null,ae=null,he=null,Be=null,ot=null,re=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,v=null,S=null,y=null,A=null,w=null,x=null,E=new Re(0,0,0),L=0,C=!1,D=null,z=null,I=null,P=null,O=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ne=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=ne>=2);let $=null,Q={},Ee=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),q=new Ht().fromArray(Ee),ue=new Ht().fromArray(Ue);function Me(N,j,Y,fe){let ae=new Uint8Array(4),he=n.createTexture();n.bindTexture(N,he),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<Y;Be++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(j+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return he}let Ae={};Ae[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(n.DEPTH_TEST),a.setFunc(Ur),we(!1),ve(mu),xe(n.CULL_FACE),oe(Ji);function xe(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function ze(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Ct(N,j){return f[N]!==j?(n.bindFramebuffer(N,j),f[N]=j,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=j),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=j),!0):!1}function ke(N,j){let Y=p,fe=!1;if(N){Y=d.get(j),Y===void 0&&(Y=[],d.set(j,Y));let ae=N.textures;if(Y.length!==ae.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Be=ae.length;he<Be;he++)Y[he]=n.COLOR_ATTACHMENT0+he;Y.length=ae.length,fe=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,fe=!0);fe&&n.drawBuffers(Y)}function it(N){return _!==N?(n.useProgram(N),_=N,!0):!1}let st={[Qs]:n.FUNC_ADD,[Ff]:n.FUNC_SUBTRACT,[Of]:n.FUNC_REVERSE_SUBTRACT};st[Bf]=n.MIN,st[Hf]=n.MAX;let ee={[zf]:n.ZERO,[kf]:n.ONE,[Gf]:n.SRC_COLOR,[xu]:n.SRC_ALPHA,[$f]:n.SRC_ALPHA_SATURATE,[qf]:n.DST_COLOR,[Wf]:n.DST_ALPHA,[Vf]:n.ONE_MINUS_SRC_COLOR,[vu]:n.ONE_MINUS_SRC_ALPHA,[Yf]:n.ONE_MINUS_DST_COLOR,[Xf]:n.ONE_MINUS_DST_ALPHA,[Zf]:n.CONSTANT_COLOR,[Kf]:n.ONE_MINUS_CONSTANT_COLOR,[Jf]:n.CONSTANT_ALPHA,[jf]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(N,j,Y,fe,ae,he,Be,ot,re,Ve){if(N===Ji){m===!0&&(ze(n.BLEND),m=!1);return}if(m===!1&&(xe(n.BLEND),m=!0),N!==Uf){if(N!==g||Ve!==C){if((v!==Qs||A!==Qs)&&(n.blendEquation(n.FUNC_ADD),v=Qs,A=Qs),Ve)switch(N){case ta:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pi:n.blendFunc(n.ONE,n.ONE);break;case gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _u:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",N);break}else switch(N){case ta:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _u:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",N);break}S=null,y=null,w=null,x=null,E.set(0,0,0),L=0,g=N,C=Ve}return}ae=ae||j,he=he||Y,Be=Be||fe,(j!==v||ae!==A)&&(n.blendEquationSeparate(st[j],st[ae]),v=j,A=ae),(Y!==S||fe!==y||he!==w||Be!==x)&&(n.blendFuncSeparate(ee[Y],ee[fe],ee[he],ee[Be]),S=Y,y=fe,w=he,x=Be),(ot.equals(E)===!1||re!==L)&&(n.blendColor(ot.r,ot.g,ot.b,re),E.copy(ot),L=re),g=N,C=!1}function le(N,j){N.side===Zt?ze(n.CULL_FACE):xe(n.CULL_FACE);let Y=N.side===$t;j&&(Y=!Y),we(Y),N.blending===ta&&N.transparent===!1?oe(Ji):oe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let fe=N.stencilWrite;o.setTest(fe),fe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(N){D!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),D=N)}function ve(N){N!==Lf?(xe(n.CULL_FACE),N!==z&&(N===mu?n.cullFace(n.BACK):N===Df?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),z=N}function nt(N){N!==I&&(H&&n.lineWidth(N),I=N)}function Oe(N,j,Y){N?(xe(n.POLYGON_OFFSET_FILL),(P!==j||O!==Y)&&(P=j,O=Y,a.getReversed()&&(j=-j,Y=-Y),n.polygonOffset(j,Y))):ze(n.POLYGON_OFFSET_FILL)}function dt(N){N?xe(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function mt(N){N===void 0&&(N=n.TEXTURE0+B-1),$!==N&&(n.activeTexture(N),$=N)}function bt(N,j,Y){Y===void 0&&($===null?Y=n.TEXTURE0+B-1:Y=$);let fe=Q[Y];fe===void 0&&(fe={type:void 0,texture:void 0},Q[Y]=fe),(fe.type!==N||fe.texture!==j)&&($!==Y&&(n.activeTexture(Y),$=Y),n.bindTexture(N,j||Ae[N]),fe.type=N,fe.texture=j)}function F(){let N=Q[$];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function en(){try{n.compressedTexImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function ht(){try{n.compressedTexImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Lt(){try{n.texSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function me(){try{n.texSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Xt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Xe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Ke(){try{n.texStorage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function R(){try{n.texStorage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function M(){try{n.texImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function V(){try{n.texImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function se(N){return u[N]!==void 0?u[N]:n.getParameter(N)}function te(N,j){u[N]!==j&&(n.pixelStorei(N,j),u[N]=j)}function ce(N){q.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),q.copy(N))}function ge(N){ue.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ue.copy(N))}function K(N,j){let Y=c.get(j);Y===void 0&&(Y=new WeakMap,c.set(j,Y));let fe=Y.get(N);fe===void 0&&(fe=n.getUniformBlockIndex(j,N.name),n.uniformBlockBinding(j,fe,fe),Y.set(N,fe))}function J(N,j,Y){let ae=c.get(j).get(N);l[ae]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,ae,Y),l[ae]=Y)}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},$=null,Q={},f={},l={},d=new WeakMap,p=[],_=null,m=!1,g=null,v=null,S=null,y=null,A=null,w=null,x=null,E=new Re(0,0,0),L=0,C=!1,D=null,z=null,I=null,P=null,O=null,q.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:ze,bindFramebuffer:Ct,drawBuffers:ke,useProgram:it,setBlending:oe,setMaterial:le,setFlipSided:we,setCullFace:ve,setLineWidth:nt,setPolygonOffset:Oe,setScissorTest:dt,activeTexture:mt,bindTexture:bt,unbindTexture:F,compressedTexImage2D:en,compressedTexImage3D:ht,texImage2D:M,texImage3D:V,pixelStorei:te,getParameter:se,updateUBOMapping:K,uniformBlockBinding:J,texStorage2D:Ke,texStorage3D:R,texSubImage2D:Lt,texSubImage3D:me,compressedTexSubImage2D:Xt,compressedTexSubImage3D:Xe,scissor:ce,viewport:ge,reset:de}}function yM(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,_=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return m?new OffscreenCanvas(R,M):Or("canvas")}function v(R,M,V){let se=1,te=Ke(R);if((te.width>V||te.height>V)&&(se=V/Math.max(te.width,te.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ce=Math.floor(se*te.width),ge=Math.floor(se*te.height);f===void 0&&(f=g(ce,ge));let K=M?g(ce,ge):f;return K.width=ce,K.height=ge,K.getContext("2d").drawImage(R,0,0,ce,ge),qe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ce+"x"+ge+")."),K}else return"data"in R&&qe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function S(R){return R.generateMipmaps}function y(R){n.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,M,V,se,te,ce=!1){if(R!==null){if(n[R]!==void 0)return n[R];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge;se&&(ge=e.get("EXT_texture_norm16"),ge||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===n.RED&&(V===n.FLOAT&&(K=n.R32F),V===n.HALF_FLOAT&&(K=n.R16F),V===n.UNSIGNED_BYTE&&(K=n.R8),V===n.UNSIGNED_SHORT&&ge&&(K=ge.R16_EXT),V===n.SHORT&&ge&&(K=ge.R16_SNORM_EXT)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.R8UI),V===n.UNSIGNED_SHORT&&(K=n.R16UI),V===n.UNSIGNED_INT&&(K=n.R32UI),V===n.BYTE&&(K=n.R8I),V===n.SHORT&&(K=n.R16I),V===n.INT&&(K=n.R32I)),M===n.RG&&(V===n.FLOAT&&(K=n.RG32F),V===n.HALF_FLOAT&&(K=n.RG16F),V===n.UNSIGNED_BYTE&&(K=n.RG8),V===n.UNSIGNED_SHORT&&ge&&(K=ge.RG16_EXT),V===n.SHORT&&ge&&(K=ge.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RG8UI),V===n.UNSIGNED_SHORT&&(K=n.RG16UI),V===n.UNSIGNED_INT&&(K=n.RG32UI),V===n.BYTE&&(K=n.RG8I),V===n.SHORT&&(K=n.RG16I),V===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGB8UI),V===n.UNSIGNED_SHORT&&(K=n.RGB16UI),V===n.UNSIGNED_INT&&(K=n.RGB32UI),V===n.BYTE&&(K=n.RGB8I),V===n.SHORT&&(K=n.RGB16I),V===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),V===n.UNSIGNED_INT&&(K=n.RGBA32UI),V===n.BYTE&&(K=n.RGBA8I),V===n.SHORT&&(K=n.RGBA16I),V===n.INT&&(K=n.RGBA32I)),M===n.RGB&&(V===n.UNSIGNED_SHORT&&ge&&(K=ge.RGB16_EXT),V===n.SHORT&&ge&&(K=ge.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),M===n.RGBA){let J=ce?Da:ut.getTransfer(te);V===n.FLOAT&&(K=n.RGBA32F),V===n.HALF_FLOAT&&(K=n.RGBA16F),V===n.UNSIGNED_BYTE&&(K=J===Tt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&ge&&(K=ge.RGBA16_EXT),V===n.SHORT&&ge&&(K=ge.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(R,M){let V;return R?M===null||M===di||M===nr?V=n.DEPTH24_STENCIL8:M===Qn?V=n.DEPTH32F_STENCIL8:M===ia&&(V=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===di||M===nr?V=n.DEPTH_COMPONENT24:M===Qn?V=n.DEPTH_COMPONENT32F:M===ia&&(V=n.DEPTH_COMPONENT16),V}function E(R,M){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==Un?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function L(R){let M=new WeakRef(R);i.get(R).__ref=M,p.add(M),_.register(R,M,M)}function C(R){let M=i.get(R).__ref;M!==void 0&&(p.delete(M),_.unregister(M))}function D(R){I(R.target)}function z(R){P(R.target)}function I(R){R.removeEventListener("dispose",D),C(R),B(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function P(R){R.removeEventListener("dispose",z),C(R),ne(R)}function O(){for(let R of p){let M=R.deref();M!==void 0&&(M.isRenderTarget===!0?P(M):I(M))}p.clear(),u.clear()}function B(R){let M=i.get(R);if(M.__webglInit===void 0)return;let V=R.source,se=d.get(V);if(se){let te=se[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&H(R),Object.keys(se).length===0&&d.delete(V)}i.remove(R)}function H(R){let M=i.get(R);n.deleteTexture(M.__webglTexture);let V=R.source,se=d.get(V);delete se[M.__cacheKey],a.memory.textures--}function ne(R){let M=i.get(R);M.__depthDisposeCallback&&M.__depthDisposeCallback();let V=R.depthTexture;if(V&&V.renderTarget===R&&I(V),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ce=0;ce<M.__webglFramebuffer[te].length;ce++)n.deleteFramebuffer(M.__webglFramebuffer[te][ce]);else n.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)n.deleteFramebuffer(M.__webglFramebuffer[te]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let se=R.textures;for(let te=0,ce=se.length;te<ce;te++){let ge=i.get(se[te]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(se[te])}i.remove(R)}let G=0;function $(){G=0}function Q(){return G}function Ee(R){G=R}function Ue(){let R=G;return R>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,R}function q(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.mipmapsAutoUpdate),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ue(R,M){let V=i.get(R);if(R.isVideoTexture&&Xt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let se=R.image;if(se===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{le(V,R,M);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function Me(R,M){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){le(V,R,M);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function Ae(R,M){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){le(V,R,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function xe(R,M){let V=i.get(R);if(R.version>0&&V.__version!==R.version){we(V,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}let ze={[Ti]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[Nl]:n.MIRRORED_REPEAT},Ct={[gn]:n.NEAREST,[tp]:n.NEAREST_MIPMAP_NEAREST,[go]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[hc]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},ke={[rp]:n.NEVER,[Cu]:n.ALWAYS,[ap]:n.LESS,[Au]:n.LEQUAL,[op]:n.EQUAL,[Ru]:n.GEQUAL,[lp]:n.GREATER,[cp]:n.NOTEQUAL};function it(R,M){if(M.type===Qn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Un||M.magFilter===hc||M.magFilter===go||M.magFilter===ji||M.minFilter===Un||M.minFilter===hc||M.minFilter===go||M.minFilter===ji)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ze[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ze[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ze[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ct[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ct[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ke[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gn||M.minFilter!==go&&M.minFilter!==ji||M.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function st(R,M){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",D),L(M));let se=M.source,te=d.get(se);te===void 0&&(te={},d.set(se,te));let ce=q(M);if(ce!==R.__cacheKey){te[ce]===void 0&&(te[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[ce].usedTimes++;let ge=te[R.__cacheKey];ge!==void 0&&(te[R.__cacheKey].usedTimes--,ge.usedTimes===0&&H(M)),R.__cacheKey=ce,R.__webglTexture=te[ce].texture}return V}function ee(R,M,V){return Math.floor(Math.floor(R/V)/M)}function oe(R,M,V,se){let ce=R.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,V,se,M.data);else{ce.sort((N,j)=>N.start-j.start);let ge=0;for(let N=1;N<ce.length;N++){let j=ce[ge],Y=ce[N],fe=j.start+j.count,ae=ee(Y.start,M.width,4),he=ee(j.start,M.width,4);Y.start<=fe+1&&ae===he&&ee(Y.start+Y.count-1,M.width,4)===ae?j.count=Math.max(j.count,Y.start+Y.count-j.start):(++ge,ce[ge]=Y)}ce.length=ge+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let N=0,j=ce.length;N<j;N++){let Y=ce[N],fe=Math.floor(Y.start/4),ae=Math.ceil(Y.count/4),he=fe%M.width,Be=Math.floor(fe/M.width),ot=ae,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(n.TEXTURE_2D,0,he,Be,ot,re,V,se,M.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function le(R,M,V){let se=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=n.TEXTURE_3D);let te=st(R,M),ce=M.source;t.bindTexture(se,R.__webglTexture,n.TEXTURE0+V);let ge=i.get(ce);if(ce.version!==ge.__version||te===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let re=ut.getPrimaries(ut.workingColorSpace),Ve=M.colorSpace===es?null:ut.getPrimaries(M.colorSpace),rt=M.colorSpace===es||re===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let J=v(M.image,!1,s.maxTextureSize);J=Xe(M,J);let de=r.convert(M.format,M.colorSpace),N=r.convert(M.type),j=w(M.internalFormat,de,N,M.normalized,M.colorSpace,M.isVideoTexture);it(se,M);let Y,fe=M.mipmaps,ae=M.isVideoTexture!==!0,he=ge.__version===void 0||te===!0,Be=ce.dataReady,ot=E(M,J);if(M.isDepthTexture)j=x(M.format===Qi,M.type),he&&(ae?t.texStorage2D(n.TEXTURE_2D,1,j,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,j,J.width,J.height,0,de,N,null));else if(M.isDataTexture)if(fe.length>0){ae&&he&&t.texStorage2D(n.TEXTURE_2D,ot,j,fe[0].width,fe[0].height);for(let re=0,Ve=fe.length;re<Ve;re++)Y=fe[re],ae?Be&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Y.width,Y.height,de,N,Y.data):t.texImage2D(n.TEXTURE_2D,re,j,Y.width,Y.height,0,de,N,Y.data);M.generateMipmaps=!1}else ae?(he&&t.texStorage2D(n.TEXTURE_2D,ot,j,J.width,J.height),Be&&oe(M,J,de,N)):t.texImage2D(n.TEXTURE_2D,0,j,J.width,J.height,0,de,N,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ae&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,j,fe[0].width,fe[0].height,J.depth);for(let re=0,Ve=fe.length;re<Ve;re++)if(Y=fe[re],M.format!==fi)if(de!==null)if(ae){if(Be)if(M.layerUpdates.size>0){let rt=Hu(Y.width,Y.height,M.format,M.type);for(let Se of M.layerUpdates){let It=Y.data.subarray(Se*rt/Y.data.BYTES_PER_ELEMENT,(Se+1)*rt/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Se,Y.width,Y.height,1,de,It)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,J.depth,de,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,j,Y.width,Y.height,J.depth,0,Y.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,J.depth,de,N,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,j,Y.width,Y.height,J.depth,0,de,N,Y.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ae&&he&&t.texStorage2D(n.TEXTURE_2D,ot,j,fe[0].width,fe[0].height);for(let re=0,Ve=fe.length;re<Ve;re++)Y=fe[re],M.format!==fi?de!==null?ae?Be&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Y.width,Y.height,de,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,re,j,Y.width,Y.height,0,Y.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Be&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Y.width,Y.height,de,N,Y.data):t.texImage2D(n.TEXTURE_2D,re,j,Y.width,Y.height,0,de,N,Y.data)}else if(M.isDataArrayTexture)if(ae){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,j,J.width,J.height,J.depth),Be)if(M.layerUpdates.size>0){let re=Hu(J.width,J.height,M.format,M.type);for(let Ve of M.layerUpdates){let rt=J.data.subarray(Ve*re/J.data.BYTES_PER_ELEMENT,(Ve+1)*re/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ve,J.width,J.height,1,de,N,rt)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,N,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,de,N,J.data);else if(M.isData3DTexture)ae?(he&&t.texStorage3D(n.TEXTURE_3D,ot,j,J.width,J.height,J.depth),Be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,N,J.data)):t.texImage3D(n.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,de,N,J.data);else if(M.isFramebufferTexture){if(he)if(ae)t.texStorage2D(n.TEXTURE_2D,ot,j,J.width,J.height);else{let re=J.width,Ve=J.height;for(let rt=0;rt<ot;rt++)t.texImage2D(n.TEXTURE_2D,rt,j,re,Ve,0,de,N,null),re>>=1,Ve>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),J.parentNode!==re){re.appendChild(J),u.add(M),re.onpaint=Ve=>{let rt=Ve.changedElements;for(let Se of u)rt.includes(Se.image)&&(Se.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let rt=n.RGBA,Se=n.RGBA,It=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,rt,Se,It,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(fe.length>0){if(ae&&he){let re=Ke(fe[0]);t.texStorage2D(n.TEXTURE_2D,ot,j,re.width,re.height)}for(let re=0,Ve=fe.length;re<Ve;re++)Y=fe[re],ae?Be&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,de,N,Y):t.texImage2D(n.TEXTURE_2D,re,j,de,N,Y);M.generateMipmaps=!1}else if(ae){if(he){let re=Ke(J);t.texStorage2D(n.TEXTURE_2D,ot,j,re.width,re.height)}Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,N,J)}else t.texImage2D(n.TEXTURE_2D,0,j,de,N,J);S(M)&&M.mipmapsAutoUpdate===!0&&y(se),ge.__version=ce.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function we(R,M,V){if(M.image.length!==6)return;let se=st(R,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);let ce=i.get(te);if(te.version!==ce.__version||se===!0){t.activeTexture(n.TEXTURE0+V);let ge=ut.getPrimaries(ut.workingColorSpace),K=M.colorSpace===es?null:ut.getPrimaries(M.colorSpace),J=M.colorSpace===es||ge===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let de=M.isCompressedTexture||M.image[0].isCompressedTexture,N=M.image[0]&&M.image[0].isDataTexture,j=[];for(let Se=0;Se<6;Se++)!de&&!N?j[Se]=v(M.image[Se],!0,s.maxCubemapSize):j[Se]=N?M.image[Se].image:M.image[Se],j[Se]=Xe(M,j[Se]);let Y=j[0],fe=r.convert(M.format,M.colorSpace),ae=r.convert(M.type),he=w(M.internalFormat,fe,ae,M.normalized,M.colorSpace),Be=M.isVideoTexture!==!0,ot=ce.__version===void 0||se===!0,re=te.dataReady,Ve=E(M,Y);it(n.TEXTURE_CUBE_MAP,M);let rt;if(M.isDepthTexture){if(he=x(M.format===Qi,M.type),ot)if(Be)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,he,Y.width,Y.height);else for(let Se=0;Se<6;Se++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,he,Y.width,Y.height,0,fe,ae,null)}else if(de){Be&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,he,Y.width,Y.height);for(let Se=0;Se<6;Se++){rt=j[Se].mipmaps;for(let It=0;It<rt.length;It++){let un=rt[It];M.format!==fi?fe!==null?Be?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,It,0,0,un.width,un.height,fe,un.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,It,he,un.width,un.height,0,un.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,It,0,0,un.width,un.height,fe,ae,un.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,It,he,un.width,un.height,0,fe,ae,un.data)}}}else{if(rt=M.mipmaps,Be&&ot){rt.length>0&&Ve++;let Se=Ke(j[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,he,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(N){Be?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,j[Se].width,j[Se].height,fe,ae,j[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,he,j[Se].width,j[Se].height,0,fe,ae,j[Se].data);for(let It=0;It<rt.length;It++){let os=rt[It].image[Se].image;Be?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,It+1,0,0,os.width,os.height,fe,ae,os.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,It+1,he,os.width,os.height,0,fe,ae,os.data)}}else{Be?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,fe,ae,j[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,he,fe,ae,j[Se]);for(let It=0;It<rt.length;It++){let un=rt[It];Be?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,It+1,0,0,fe,ae,un.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,It+1,he,fe,ae,un.image[Se])}}}S(M)&&M.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ce.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ve(R,M,V,se,te,ce){let ge=r.convert(V.format,V.colorSpace),K=r.convert(V.type),J=w(V.internalFormat,ge,K,V.normalized,V.colorSpace),de=i.get(M),N=i.get(V);if(N.__renderTarget=M,!de.__hasExternalTextures){let j=Math.max(1,M.width>>ce),Y=Math.max(1,M.height>>ce);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ce,J,j,Y,M.depth,0,ge,K,null):t.texImage2D(te,ce,J,j,Y,0,ge,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),me(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,te,N.__webglTexture,0,Lt(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,te,N.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(R,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){let se=M.depthTexture,te=se&&se.isDepthTexture?se.type:null,ce=x(M.stencilBuffer,te),ge=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(M),ce,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(M),ce,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ce,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,R)}else{let se=M.textures;for(let te=0;te<se.length;te++){let ce=se[te],ge=r.convert(ce.format,ce.colorSpace),K=r.convert(ce.type),J=w(ce.internalFormat,ge,K,ce.normalized,ce.colorSpace);me(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(M),J,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(M),J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(R,M,V){let se=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(M.depthTexture);te.__renderTarget=M;let ce=se?M.depthTexture.image[0]:M.depthTexture.image;(!te.__webglTexture||ce.width!==M.width||ce.height!==M.height)&&(ce.width=M.width,ce.height=M.height,M.depthTexture.needsUpdate=!0),se?xe(M.depthTexture,0):ue(M.depthTexture,0);let ge=te.__webglTexture,K=Lt(M),J=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,de=M.depthTexture.format===Qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Wi)me(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,J,ge,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,de,J,ge,0);else if(M.depthTexture.format===Qi)me(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,J,ge,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,de,J,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(R){let M=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let se=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",te)};se.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=se}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let se=0;se<6;se++)Oe(M.__webglFramebuffer[se],R,se);else R.texture.mipmaps.length>0?Oe(M.__webglFramebuffer[0],R,0):Oe(M.__webglFramebuffer,R,0);else if(V){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=n.createRenderbuffer(),nt(M.__webglDepthbuffer[se],R,!1);else{let te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ce)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),nt(M.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(R,M,V){let se=i.get(R);M!==void 0&&ve(se.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&dt(R)}function bt(R){let M=R.texture,V=i.get(R),se=i.get(M);R.addEventListener("dispose",z),L(R);let te=R.textures,ce=R.isWebGLCubeRenderTarget===!0,ge=te.length>1;if(ge||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=M.version,a.memory.textures++),ce){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let J=0;J<M.mipmaps.length;J++)V.__webglFramebuffer[K][J]=n.createFramebuffer()}else V.__webglFramebuffer[K]=n.createFramebuffer()}else{if(M.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)V.__webglFramebuffer[K]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ge)for(let K=0,J=te.length;K<J;K++){let de=i.get(te[K]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<te.length;K++){let J=te[K];V.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[K]);let de=r.convert(J.format,J.colorSpace),N=r.convert(J.type),j=w(J.internalFormat,de,N,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),Y=Lt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,j,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,V.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),nt(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),it(n.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)ve(V.__webglFramebuffer[K][J],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else ve(V.__webglFramebuffer[K],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);S(M)?y(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let K=0,J=te.length;K<J;K++){let de=te[K],N=i.get(de),j=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,N.__webglTexture),it(j,de),ve(V.__webglFramebuffer,R,de,n.COLOR_ATTACHMENT0+K,j,0),S(de)&&y(j)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,se.__webglTexture),it(K,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)ve(V.__webglFramebuffer[J],R,M,n.COLOR_ATTACHMENT0,K,J);else ve(V.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,K,0);S(M)?y(K):M.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&dt(R)}function F(R){let M=R.textures;for(let V=0,se=M.length;V<se;V++){let te=M[V];if(S(te)&&te.mipmapsAutoUpdate===!0){let ce=A(R),ge=i.get(te).__webglTexture;t.bindTexture(ce,ge),y(ce),t.unbindTexture()}}}let en=[];function ht(R){if(R.samples>0){if(me(R)===!1){let M=R.textures,V=R.width,se=R.height,te=n.COLOR_BUFFER_BIT,ce=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(R),K=M.length>1;if(K)for(let de=0;de<M.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<M.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);let N=i.get(M[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,V,se,0,0,V,se,te,n.NEAREST),l===!0&&(en.length=0,en.push(n.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&en.push(ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,en))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let de=0;de<M.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);let N=i.get(M[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Lt(R){return Math.min(s.maxSamples,R.samples)}function me(R){let M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Xt(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Xe(R,M){let V=R.colorSpace,se=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==La&&V!==es&&(ut.getTransfer(V)===Tt?(se!==fi||te!==Bn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",V)),M}function Ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=$,this.getTextureUnits=Q,this.setTextureUnits=Ee,this.setTexture2D=ue,this.setTexture2DArray=Me,this.setTexture3D=Ae,this.setTextureCube=xe,this.rebindTextures=mt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=me,this.dispose=O}function MM(n,e){function t(i,s=es){let r,a=ut.getTransfer(s);if(i===Bn)return n.UNSIGNED_BYTE;if(i===dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mu)return n.BYTE;if(i===Su)return n.SHORT;if(i===ia)return n.UNSIGNED_SHORT;if(i===uc)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===on)return n.HALF_FLOAT;if(i===Tu)return n.ALPHA;if(i===wu)return n.RGB;if(i===fi)return n.RGBA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===pc)return n.RED;if(i===mc)return n.RED_INTEGER;if(i===As)return n.RG;if(i===gc)return n.RG_INTEGER;if(i===_c)return n.RGBA_INTEGER;if(i===_o||i===xo||i===vo||i===yo)if(a===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xc||i===vc||i===yc||i===Mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sc||i===Ec||i===bc||i===Tc||i===wc||i===Mo||i===Ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sc||i===Ec)return a===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tc)return r.COMPRESSED_R11_EAC;if(i===wc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Mo)return r.COMPRESSED_RG11_EAC;if(i===Ac)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===Hc||i===zc||i===kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ic)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gc||i===Vc||i===Wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Gc)return a===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xc||i===qc||i===So||i===Yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var SM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Wt({vertexShader:SM,fragmentShader:EM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new sn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ed=class extends ci{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new Qu,g={},v=t.getContextAttributes(),S=null,y=null,A=[],w=[],x=new Z,E=null,L=null,C=new An;C.viewport=new Ht;let D=new An;D.viewport=new Ht;let z=[C,D],I=new rc,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ue=A[q];return ue===void 0&&(ue=new Gr,A[q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(q){let ue=A[q];return ue===void 0&&(ue=new Gr,A[q]=ue),ue.getGripSpace()},this.getHand=function(q){let ue=A[q];return ue===void 0&&(ue=new Gr,A[q]=ue),ue.getHandSpace()};function B(q){let ue=w.indexOf(q.inputSource);if(ue===-1)return;let Me=A[ue];Me!==void 0&&(Me.update(q.inputSource,q.frame,c||a),Me.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ne);for(let q=0;q<A.length;q++){let ue=w[q];ue!==null&&(w[q]=null,A[q].disconnect(ue))}P=null,O=null,m.reset();for(let q in g)delete g[q];if(e.setRenderTarget(S),d=null,f=null,u=null,s=null,y=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(x.width,x.height,!1),L!==null){let q=L.camera;q.fov=L.fov,q.zoom=L.zoom,q.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ae=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?Qi:Wi,Ae=v.stencil?nr:di);let ze={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new jt(f.textureWidth,f.textureHeight,{format:fi,type:Bn,depthTexture:new Yi(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new jt(d.framebufferWidth,d.framebufferHeight,{format:fi,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(q){for(let ue=0;ue<q.removed.length;ue++){let Me=q.removed[ue],Ae=w.indexOf(Me);Ae>=0&&(w[Ae]=null,A[Ae].disconnect(Me))}for(let ue=0;ue<q.added.length;ue++){let Me=q.added[ue],Ae=w.indexOf(Me);if(Ae===-1){for(let ze=0;ze<A.length;ze++)if(ze>=w.length){w.push(Me),Ae=ze;break}else if(w[ze]===null){w[ze]=Me,Ae=ze;break}if(Ae===-1)break}let xe=A[Ae];xe&&xe.connect(Me)}}function G(q,ue){ue===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ue.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ue=q.near,Me=q.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),I.near=D.near=C.near=ue,I.far=D.far=C.far=Me,(P!==I.near||O!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,O=I.far),I.layers.mask=q.layers.mask|6,C.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;let Ae=q.parent,xe=I.cameras;G(I,Ae);for(let ze=0;ze<xe.length;ze++)G(xe[ze],Ae);I.projectionMatrix.copy(C.projectionMatrix),I.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&q.isPerspectiveCamera&&(L={camera:q,fov:q.fov,zoom:q.zoom}),$(q,I,Ae)};function $(q,ue,Me){Me===null?q.matrix.copy(ue.matrixWorld):(q.matrix.copy(Me.matrixWorld),q.matrix.invert(),q.matrix.multiply(ue.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ue.projectionMatrix),q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(q){return g[q]};let Q=null;function Ee(q,ue){if(h=ue.getViewerPose(c||a),p=ue,h!==null){let Me=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ae=!1;Me.length!==I.cameras.length&&(I.cameras.length=0,Ae=!0);for(let ke=0;ke<Me.length;ke++){let it=Me[ke],st=null;if(d!==null)st=d.getViewport(it);else{let oe=u.getViewSubImage(f,it);st=oe.viewport,ke===0&&(e.setRenderTargetTextures(y,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(y))}let ee=z[ke];ee===void 0&&(ee=new An,ee.layers.enable(ke),ee.viewport=new Ht,z[ke]=ee),ee.matrix.fromArray(it.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(it.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(st.x,st.y,st.width,st.height),ke===0&&(I.matrix.copy(ee.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ae===!0&&I.cameras.push(ee)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let ke=u.getDepthInformation(Me[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,s.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let ke=0;ke<Me.length;ke++){let it=Me[ke].camera;if(it){let st=g[it];st||(st=new Ga,g[it]=st);let ee=u.getCameraImage(it);st.sourceTexture=ee}}}}for(let Me=0;Me<A.length;Me++){let Ae=w[Me],xe=A[Me];Ae!==null&&xe!==void 0&&xe.update(Ae,ue,c||a)}Q&&Q(q,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),p=null}let Ue=new Xp;Ue.setAnimationLoop(Ee),this.setAnimationLoop=function(q){Q=q},this.dispose=function(){}}},bM=new Ye,tm=new Je;tm.set(-1,0,0,0,1,0,0,0,1);function TM(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Fu(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,S,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,v,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$t&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$t&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),S=v.envMap,y=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(bM.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$t&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wM(n,e,t,i){let s={},r={};function a(v,S){let y=S.program;i.uniformBlockBinding(v,y,s[v.id])}function o(v,S){let y=s[v.id];y===void 0&&(p(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",m));let A=S.program;i.updateUBOMapping(v,A);let w=e.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let S=n.createBuffer(),y=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,y,A),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(v){let S=s[v.id],y=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,x=y.length;w<x;w++){let E=y[w];if(Array.isArray(E))for(let L=0,C=E.length;L<C;L++)h(E[L],w,L,A);else h(E,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,S,y,A){if(f(v,S,y,A)===!0){let w=v.__offset,x=v.value;if(Array.isArray(x)){let E=0;for(let L=0;L<x.length;L++){let C=x[L],D=_(C,!0);u(C,v.__data,E),E+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,v.__data)}}function u(v,S,y){typeof v=="number"||typeof v=="boolean"?S[y]=v:v.isMatrix3?(S[y]=v.elements[0],S[y+1]=v.elements[1],S[y+2]=v.elements[2],S[y+3]=0,S[y+4]=v.elements[3],S[y+5]=v.elements[4],S[y+6]=v.elements[5],S[y+7]=0,S[y+8]=v.elements[6],S[y+9]=v.elements[7],S[y+10]=v.elements[8],S[y+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-y),y):v.toArray(S,y)}function f(v,S,y,A){let w=v.value,x=S+"_"+y;if(Array.isArray(w)){A[x]===void 0&&(A[x]=[]);let E=A[x],L=!1;for(let C=0;C<w.length;C++)d(w[C],E,C)===!0&&(L=!0);return L}return d(w,A,x)}function d(v,S,y){if(S[y]===void 0)return typeof v=="number"||typeof v=="boolean"?S[y]=v:ArrayBuffer.isView(v)?S[y]=v.slice():S[y]=v.clone(),!0;{let A=S[y];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return S[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(v){let S=v.uniforms,y=0,A=16;for(let x=0,E=S.length;x<E;x++){let L=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,D=L.length;C<D;C++){let z=L[C],I=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(S[x])||Array.isArray(z.value),O=y;for(let H=0,ne=I.length;H<ne;H++){let G=I[H],$=_(G,P),Q=y%A,Ee=Q%$.boundary,Ue=Q+Ee;y+=Ee,Ue!==0&&A-Ue<$.storage&&(y+=A-Ue),H===0&&(O=y),y+=$.storage}let B=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new B((y-O)/Float32Array.BYTES_PER_ELEMENT),z.__offset=O}}let w=y%A;return w>0&&(y+=A-w),v.__size=y,v.__cache={},this}function _(v,S){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let S=v.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:g}}var AM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null;function RM(){return Li===null&&(Li=new Ha(AM,16,16,As,on),Li.name="DFG_LUT",Li.minFilter=Un,Li.magFilter=Un,Li.wrapS=Ei,Li.wrapT=Ei,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}var Kc=class{constructor(e={}){let{canvas:t=up(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Bn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let _=d,m=new Set([_c,gc,mc]),g=new Set([Bn,di,ia,nr,dc,fc]),v=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},A=null,w=null,x=[],E=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,z=null,I=null,P=null,O=null;this._outputColorSpace=pn;let B=0,H=0,ne=null,G=-1,$=null,Q=new Ht,Ee=new Ht,Ue=null,q=new Re(0),ue=0,Me=t.width,Ae=t.height,xe=1,ze=null,Ct=null,ke=new Ht(0,0,Me,Ae),it=new Ht(0,0,Me,Ae),st=!1,ee=new ms,oe=new Hl,le=!1,we=!1,ve=new Ye,nt=new T,Oe=new Ht,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function bt(){return ne===null?xe:1}let F=i;function en(b,U){return t.getContext(b,U)}let ht,Lt,me,Xt,Xe,Ke,R,M,V,se,te,ce,ge,K,J,de,N,j,Y,fe,ae,he,Be;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Se,!1),F===null){let U="webgl2";if(F=en(U,b),F===null)throw en(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(b){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ze("WebGLRenderer: "+b.message),b}function ot(){ht=new Hv(F),ht.init(),ae=new MM(F,ht),Lt=new Rv(F,ht,e,ae),me=new vM(F,ht),Lt.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),I=F.createFramebuffer(),P=F.createFramebuffer(),O=F.createFramebuffer(),Xt=new Gv(F),Xe=new rM,Ke=new yM(F,ht,me,Xe,Lt,ae,Xt),R=new Bv(C),M=new Wg(F),he=new wv(F,M),V=new zv(F,M,Xt,he),se=new Wv(F,V,M,he,Xt),j=new Vv(F,Lt,Ke),J=new Cv(Xe),te=new sM(C,R,ht,Lt,he,J),ce=new TM(C,Xe),ge=new oM,K=new fM(ht),N=new Tv(C,R,me,se,p,l),de=new xM(C,se,Lt),Be=new wM(F,Xt,Lt,me),Y=new Av(F,ht,Xt),fe=new kv(F,ht,Xt),Xt.programs=te.programs,C.capabilities=Lt,C.extensions=ht,C.properties=Xe,C.renderLists=ge,C.shadowMap=de,C.state=me,C.info=Xt}_!==Bn&&(L=new qv(_,t.width,t.height,o,s,r));let re=new ed(C,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(b){b!==void 0&&(xe=b,this.setSize(Me,Ae,!1))},this.getSize=function(b){return b.set(Me,Ae)},this.setSize=function(b,U,X=!0){if(re.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=b,Ae=U,t.width=Math.floor(b*xe),t.height=Math.floor(U*xe),X===!0&&(t.style.width=b+"px",t.style.height=U+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Me*xe,Ae*xe).floor()},this.setDrawingBufferSize=function(b,U,X){Me=b,Ae=U,xe=X,t.width=Math.floor(b*X),t.height=Math.floor(U*X),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===Bn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(ke)},this.setViewport=function(b,U,X,k){b.isVector4?ke.set(b.x,b.y,b.z,b.w):ke.set(b,U,X,k),me.viewport(Q.copy(ke).multiplyScalar(bt()).round())},this.getScissor=function(b){return b.copy(it)},this.setScissor=function(b,U,X,k){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,U,X,k),me.scissor(Ee.copy(it).multiplyScalar(bt()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(b){me.setScissorTest(st=b)},this.setOpaqueSort=function(b){ze=b},this.setTransparentSort=function(b){Ct=b},this.getClearColor=function(b){return b.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,X=!0){let k=0;if(b){let W=!1;if(ne!==null){let _e=ne.texture.format;W=m.has(_e)}if(W){let _e=ne.texture.type,Ce=g.has(_e),pe=N.getClearColor(),Te=N.getClearAlpha(),Ne=pe.r,et=pe.g,gt=pe.b;Ce?(v[0]=Ne,v[1]=et,v[2]=gt,v[3]=Te,F.clearBufferuiv(F.COLOR,0,v)):(S[0]=Ne,S[1]=et,S[2]=gt,S[3]=Te,F.clearBufferiv(F.COLOR,0,S))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),N.dispose(),ge.dispose(),K.dispose(),Ke.dispose(),Xe.dispose(),R.dispose(),se.dispose(),V.dispose(),he.dispose(),Be.dispose(),te.dispose(),re.dispose(),re.removeEventListener("sessionstart",Nd),re.removeEventListener("sessionend",Ud),Hs.stop()};function Ve(b){b.preventDefault(),Iu("WebGLRenderer: Context Lost."),D=!0}function rt(){Iu("WebGLRenderer: Context Restored."),D=!1;let b=Xt.autoReset,U=de.enabled,X=de.autoUpdate,k=de.needsUpdate,W=de.type;ot(),Xt.autoReset=b,de.enabled=U,de.autoUpdate=X,de.needsUpdate=k,de.type=W}function Se(b){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){let U=b.target;U.removeEventListener("dispose",It),un(U)}function un(b){os(b),Xe.remove(b)}function os(b){let U=Xe.get(b).programs;U!==void 0&&(U.forEach(function(X){te.releaseProgram(X)}),b.isShaderMaterial&&te.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,X,k,W,_e){U===null&&(U=dt);let Ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,pe=u0(b,U,X,k,W);me.setMaterial(k,Ce);let Te=X.index,Ne=1;if(k.wireframe===!0){if(Te=V.getWireframeAttribute(X),Te===void 0)return;Ne=2}let et=X.drawRange,gt=X.attributes.position,Ie=et.start*Ne,_t=(et.start+et.count)*Ne;_e!==null&&(Ie=Math.max(Ie,_e.start*Ne),_t=Math.min(_t,(_e.start+_e.count)*Ne)),Te!==null?(Ie=Math.max(Ie,0),_t=Math.min(_t,Te.count)):gt!=null&&(Ie=Math.max(Ie,0),_t=Math.min(_t,gt.count));let tn=_t-Ie;if(tn<0||tn===1/0)return;he.setup(W,k,pe,X,Te);let Nt,Dt=Y;if(Te!==null&&(Nt=M.get(Te),Dt=fe,Dt.setIndex(Nt)),W.isMesh)k.wireframe===!0?(me.setLineWidth(k.wireframeLinewidth*bt()),Dt.setMode(F.LINES)):Dt.setMode(F.TRIANGLES);else if(W.isLine){let En=k.linewidth;En===void 0&&(En=1),me.setLineWidth(En*bt()),W.isLineSegments?Dt.setMode(F.LINES):W.isLineLoop?Dt.setMode(F.LINE_LOOP):Dt.setMode(F.LINE_STRIP)}else W.isPoints?Dt.setMode(F.POINTS):W.isSprite&&Dt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let En=W._multiDrawStarts,Le=W._multiDrawCounts,Nn=W._multiDrawCount,At=Te?M.get(Te).bytesPerElement:1,zs=Xe.get(k).currentProgram.getUniforms();for(let bn=0;bn<Nn;bn++)zs.setValue(F,"_gl_DrawID",bn),Dt.render(En[bn]/At,Le[bn])}else if(W.isInstancedMesh)Dt.renderInstances(Ie,tn,W.count);else if(X.isInstancedBufferGeometry){let En=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Le=Math.min(X.instanceCount,En);Dt.renderInstances(Ie,tn,Le)}else Dt.render(Ie,tn)};function Dd(b,U,X,k){z!==null&&b.isNodeMaterial&&z.setObject(k,b),le===!0&&J.setState(b,X,!1),b.transparent===!0&&b.side===Zt&&b.forceSinglePass===!1?(b.side=$t,b.needsUpdate=!0,xa(b,U,k),b.side=ws,b.needsUpdate=!0,xa(b,U,k),b.side=Zt):xa(b,U,k)}this.compile=function(b,U,X=null){X===null&&(X=b),z!==null&&z.renderStart(b,U,X),w=K.get(X),w.init(U),E.push(w),X.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),b!==X&&b.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),we=this.localClippingEnabled,le=J.init(this.clippingPlanes,we),le===!0&&J.setGlobalState(this.clippingPlanes,U),z!==null&&de.render(w.state.shadowsArray,X,U);let k=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let _e=W.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){let pe=_e[Ce];Dd(pe,X,U,W),k.add(pe)}else Dd(_e,X,U,W),k.add(_e)}),w=E.pop(),z!==null&&z.renderEnd(),k},this.compileAsync=function(b,U,X=null){let k=this.compile(b,U,X);return new Promise(W=>{function _e(){if(k.forEach(function(Ce){let Te=Xe.get(Ce).currentProgram;(Te===void 0||Te.isReady())&&k.delete(Ce)}),k.size===0){W(b);return}setTimeout(_e,10)}ht.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ph=null;function c0(b){Ph&&Ph(b)}function Nd(){Hs.stop()}function Ud(){Hs.start()}let Hs=new Xp;Hs.setAnimationLoop(c0),typeof self<"u"&&Hs.setContext(self),this.setAnimationLoop=function(b){Ph=b,re.setAnimationLoop(b),b===null?Hs.stop():Hs.start()},re.addEventListener("sessionstart",Nd),re.addEventListener("sessionend",Ud),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(b,U);let X=re.enabled===!0&&re.isPresenting===!0,k=L!==null&&(ne===null||X)&&L.begin(C,ne);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,U,ne),w=K.get(b,E.length),w.init(U),w.state.textureUnits=Ke.getTextureUnits(),E.push(w),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?oe.setFromArrayCamera(U):ee.setFromProjectionMatrix(ve,Kn,U.reversedDepth),we=this.localClippingEnabled,le=J.init(this.clippingPlanes,we),A=ge.get(b,x.length),A.init(),x.push(A),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&Ih(Ce,U,-1/0,C.sortObjects)}Ih(b,U,0,C.sortObjects),A.finish(),z!==null&&z.updateLights(w.state.lightsArray),C.sortObjects===!0&&A.sort(ze,Ct),mt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,mt&&N.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),le===!0&&J.beginShadows();let W=w.state.shadowsArray;if(de.render(W,b,U),le===!0&&J.endShadows(),(k&&L.hasRenderPass())===!1){let Ce=A.opaque,pe=A.transmissive;if(w.setupLights(),U.isArrayCamera){let Te=U.cameras;if(pe.length>0)for(let Ne=0,et=Te.length;Ne<et;Ne++){let gt=Te[Ne];Od(Ce,pe,b,gt)}mt&&N.render(b);for(let Ne=0,et=Te.length;Ne<et;Ne++){let gt=Te[Ne];Fd(A,b,gt,gt.viewport)}}else pe.length>0&&Od(Ce,pe,b,U),mt&&N.render(b),Fd(A,b,U)}ne!==null&&H===0&&(Ke.updateMultisampleRenderTarget(ne),Ke.updateRenderTargetMipmap(ne)),k&&L.end(C),b.isScene===!0&&b.onAfterRender(C,b,U),he.resetDefaultState(),G=-1,$=null,E.pop(),E.length>0?(w=E[E.length-1],Ke.setTextureUnits(w.state.textureUnits),le===!0&&J.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,z!==null&&z.renderEnd()};function Ih(b,U,X,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Ce=U.isArrayCamera?oe:ee;if(!b.frustumCulled||b.intersectsFrustum(Ce)){k&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ve);let pe=se.update(b),Te=b.material;Te.visible&&A.push(b,pe,Te,X,Oe.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Ce=U.isArrayCamera?oe:ee;if(!b.frustumCulled||b.intersectsFrustum(Ce)){let pe=se.update(b),Te=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Oe.copy(pe.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(ve)),Array.isArray(Te)){let Ne=pe.groups;for(let et=0,gt=Ne.length;et<gt;et++){let Ie=Ne[et],_t=Te[Ie.materialIndex];_t&&_t.visible&&A.push(b,pe,_t,X,Oe.z,Ie,U)}}else Te.visible&&A.push(b,pe,Te,X,Oe.z,null,U)}}}let _e=b.children;for(let Ce=0,pe=_e.length;Ce<pe;Ce++)Ih(_e[Ce],U,X,k)}function Fd(b,U,X,k){let{opaque:W,transmissive:_e,transparent:Ce}=b;w.setupLightsView(X),le===!0&&J.setGlobalState(C.clippingPlanes,X),k&&me.viewport(Q.copy(k)),W.length>0&&Zo(W,U,X),_e.length>0&&Zo(_e,U,X),Ce.length>0&&Zo(Ce,U,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Od(b,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Ie=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new jt(1,1,{generateMipmaps:!0,type:Ie?on:Bn,minFilter:ji,samples:Math.max(4,Lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let _e=w.state.transmissionRenderTarget[k.id],Ce=k.viewport||Q;_e.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let pe=C.getRenderTarget(),Te=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(_e),C.getClearColor(q),ue=C.getClearAlpha(),ue<1&&C.setClearColor(16777215,.5),C.clear(),mt&&N.render(X);let et=C.toneMapping;C.toneMapping=Ii;let gt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),le===!0&&J.setGlobalState(C.clippingPlanes,k),Zo(b,X,k),Ke.updateMultisampleRenderTarget(_e),Ke.updateRenderTargetMipmap(_e),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let _t=0,tn=U.length;_t<tn;_t++){let Nt=U[_t],{object:Dt,geometry:En,material:Le,group:Nn}=Nt;if(Le.side===Zt&&Dt.layers.test(k.layers)){let At=Le.side;Le.side=$t,Le.needsUpdate=!0,Bd(Dt,X,k,En,Le,Nn),Le.side=At,Le.needsUpdate=!0,Ie=!0}}Ie===!0&&(Ke.updateMultisampleRenderTarget(_e),Ke.updateRenderTargetMipmap(_e))}C.setRenderTarget(pe,Te,Ne),C.setClearColor(q,ue),gt!==void 0&&(k.viewport=gt),C.toneMapping=et}function Zo(b,U,X){let k=U.isScene===!0?U.overrideMaterial:null;for(let W=0,_e=b.length;W<_e;W++){let Ce=b[W],{object:pe,geometry:Te,group:Ne}=Ce,et=Ce.material;et.allowOverride===!0&&k!==null&&(et=k),pe.layers.test(X.layers)&&Bd(pe,U,X,Te,et,Ne)}}function Bd(b,U,X,k,W,_e){z!==null&&W.isNodeMaterial&&z.setObject(b,W),b.onBeforeRender(C,U,X,k,W,_e),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(C,U,X,k,b,_e),W.transparent===!0&&W.side===Zt&&W.forceSinglePass===!1?(W.side=$t,W.needsUpdate=!0,C.renderBufferDirect(X,U,k,W,b,_e),W.side=ws,W.needsUpdate=!0,C.renderBufferDirect(X,U,k,W,b,_e),W.side=Zt):C.renderBufferDirect(X,U,k,W,b,_e),b.onAfterRender(C,U,X,k,W,_e)}function Hd(b){let U=0;for(let X of b)X.texture!==null&&U++;return U}function xa(b,U,X){U.isScene!==!0&&(U=dt);let k=Xe.get(b),W=w.state.lights,_e=w.state.shadowsArray,Ce=W.state.version,pe=te.getParameters(b,W.state,_e,U,X,w.state.lightProbeGridArray),Te=te.getProgramCacheKey(pe),Ne=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let et=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=R.get(b.envMap||k.environment,et),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",It),Ne=new Map,k.programs=Ne,k.programVariants=new Map);let gt=Ne.get(Te);if(gt!==void 0){if(k.currentProgram===gt&&k.lightsStateVersion===Ce)return kd(b,pe),gt}else pe.uniforms=te.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,X,pe),b.onBeforeCompile(pe,C),gt=te.acquireProgram(pe,Te),Ne.set(Te,gt),k.uniforms=pe.uniforms;let Ie=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=J.uniform),kd(b,pe),k.needsLights=f0(b),k.lightsStateVersion=Ce,k.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.sunLights.value=W.state.sun,Ie.sunLightShadows.value=W.state.sunShadow,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.sunShadowMatrix.value=W.state.sunShadowMatrix,Ie.sunShadowCascade.value=W.state.sunShadowCascade,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),k.numLightProbeGrids=Hd(w.state.lightProbeGridArray),k.currentProgram=gt,k.uniformsList=null,gt}function h0(b,U,X,k,W){let _e=Xe.get(b),Ce=_e.currentProgram.id+","+k+","+W,pe=_e.programVariants.get(Ce);return pe===void 0?(pe=xa(b,U,X),_e.programVariants.set(Ce,pe)):(_e.currentProgram=pe,_e.uniformsList=null,_e.outputColorSpace=k,_e.toneMapping=W),pe}function zd(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=sa.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function kd(b,U){let X=Xe.get(b);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function u0(b,U,X,k,W){U.isScene!==!0&&(U=dt),Ke.resetTextureUnits();let _e=U.fog,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,pe=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ut.workingColorSpace,Te=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ne=R.get(k.envMap||Ce,Te),et=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,gt=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ie=!!X.morphAttributes.position,_t=!!X.morphAttributes.normal,tn=!!X.morphAttributes.color,Nt=Ii;k.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Nt=C.toneMapping);let Dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,En=Dt!==void 0?Dt.length:0,Le=Xe.get(k),Nn=w.state.lights;if(le===!0&&(we===!0||b!==$)){let Gt=b===$&&k.id===G;J.setState(k,b,Gt)}let At=!1,zs=!1;k.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==Nn.state.version||W.isBatchedMesh&&Le.batching===!1||!W.isBatchedMesh&&Le.batching===!0||W.isBatchedMesh&&Le.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Le.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||W.isInstancedMesh&&Le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Le.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Le.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Le.instancingMorph===!1&&W.morphTexture!==null||Le.envMap!==Ne||k.fog===!0&&Le.fog!==_e||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==J.numPlanes||Le.numIntersection!==J.numIntersection)||Le.vertexAlphas!==et||Le.vertexTangents!==gt||Le.morphTargets!==Ie||Le.morphNormals!==_t||Le.morphColors!==tn||Le.morphTargetsCount!==En||Le.numLightProbeGrids!==Hd(w.state.lightProbeGridArray)?At=!0:(Le.outputColorSpace!==pe||Le.toneMapping!==Nt)&&(zs=!0):(At=!0,Le.__version=k.version);let bn=Le.currentProgram;(At===!0||zs===!0)&&(bn=zs===!0?h0(k,U,W,pe,Nt):xa(k,U,W),z&&k.isNodeMaterial&&z.onUpdateProgram(k,bn,Le));let Ko=!1,ls=!1,ks=!1,Et=bn.getUniforms(),xn=Le.uniforms;if(me.useProgram(bn.program)&&(Ko=!0,ls=!0,ks=!0),k.id!==G&&(G=k.id,ls=!0),Ko||$!==b){me.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Et.setValue(F,"projectionMatrix",b.projectionMatrix),Et.setValue(F,"viewMatrix",b.matrixWorldInverse);let dn=Et.map.cameraPosition;dn!==void 0&&dn.setValue(F,nt.setFromMatrixPosition(b.matrixWorld)),Lt.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,ls=!0,ks=!0)}if(Le.needsLights&&(Nn.state.sunShadowMap.length>0&&Et.setValue(F,"sunShadowMap",Nn.state.sunShadowMap,Ke),Nn.state.directionalShadowMap.length>0&&Et.setValue(F,"directionalShadowMap",Nn.state.directionalShadowMap,Ke),Nn.state.spotShadowMap.length>0&&Et.setValue(F,"spotShadowMap",Nn.state.spotShadowMap,Ke),Nn.state.pointShadowMap.length>0&&Et.setValue(F,"pointShadowMap",Nn.state.pointShadowMap,Ke)),W.isSkinnedMesh){Et.setOptional(F,W,"bindMatrix"),Et.setOptional(F,W,"bindMatrixInverse");let Gt=W.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Et.setValue(F,"boneTexture",Gt.boneTexture,Ke))}W.isBatchedMesh&&(Et.setOptional(F,W,"batchingTexture"),Et.setValue(F,"batchingTexture",W._matricesTexture,Ke),Et.setOptional(F,W,"batchingIdTexture"),Et.setValue(F,"batchingIdTexture",W._indirectTexture,Ke),Et.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Et.setValue(F,"batchingColorTexture",W._colorsTexture,Ke));let ri=X.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&j.update(W,X,bn),(ls||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,Et.setValue(F,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(xn.envMapIntensity.value=U.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=RM()),ls){if(Et.setValue(F,"toneMappingExposure",C.toneMappingExposure),Le.needsLights&&d0(xn,ks),_e&&k.fog===!0&&ce.refreshFogUniforms(xn,_e),ce.refreshMaterialUniforms(xn,k,xe,Ae,w.state.transmissionRenderTarget[b.id]),Le.needsLights&&Le.numLightProbeGrids>0){let Gt=y,dn=0;for(let Oi of w.state.lightProbeGridArray)Oi.texture!==null&&(Gt.textures[dn]=Oi.texture,Gt.min[dn]=Oi.boundingBox.min,Gt.max[dn]=Oi.boundingBox.max,Gt.resolution[dn]=Oi.resolution,dn++);for(let Oi in Gt)Gt[Oi].length=dn;xn.probesSH.value=Gt.textures,xn.probesMin.value=Gt.min,xn.probesMax.value=Gt.max,xn.probesResolution.value=Gt.resolution}sa.upload(F,zd(Le),xn,Ke)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(sa.upload(F,zd(Le),xn,Ke),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(F,"center",W.center),Et.setValue(F,"modelViewMatrix",W.modelViewMatrix),Et.setValue(F,"normalMatrix",W.normalMatrix),Et.setValue(F,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){let Gt=k.uniformsGroups;for(let dn=0,Oi=Gt.length;dn<Oi;dn++){let Vd=Gt[dn];Be.update(Vd,bn),Be.bind(Vd,bn)}}return bn}function d0(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function f0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(b,U,X){let k=Xe.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Xe.get(b.texture).__webglTexture=U,Xe.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let X=Xe.get(b);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,X=0){ne=b,B=U,H=X;let k=null,W=!1,_e=!1;if(b){let pe=Xe.get(b);if(pe.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(F.FRAMEBUFFER,pe.__webglFramebuffer),Q.copy(b.viewport),Ee.copy(b.scissor),Ue=b.scissorTest,me.viewport(Q),me.scissor(Ee),me.setScissorTest(Ue),G=-1;return}else if(pe.__webglFramebuffer===void 0)Ke.setupRenderTarget(b);else if(pe.__hasExternalTextures)Ke.rebindTextures(b,Xe.get(b.texture).__webglTexture,Xe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let et=b.depthTexture;if(pe.__boundDepthTexture!==et){if(et!==null&&Xe.has(et)&&(b.width!==et.image.width||b.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(b)}}let Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);let Ne=Xe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?k=Ne[U][X]:k=Ne[U],W=!0):b.samples>0&&Ke.useMultisampledRTT(b)===!1?k=Xe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[X]:k=Ne,Q.copy(b.viewport),Ee.copy(b.scissor),Ue=b.scissorTest}else Q.copy(ke).multiplyScalar(xe).floor(),Ee.copy(it).multiplyScalar(xe).floor(),Ue=st;if(X!==0&&(k=I),me.bindFramebuffer(F.FRAMEBUFFER,k)&&me.drawBuffers(b,k),me.viewport(Q),me.scissor(Ee),me.setScissorTest(Ue),W){let pe=Xe.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,X)}else if(_e){let pe=U;for(let Te=0;Te<b.textures.length;Te++){let Ne=Xe.get(b.textures[Te]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Te,Ne.__webglTexture,X,pe)}}else if(b!==null&&X!==0){let pe=Xe.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,X)}G=-1};function Gd(b){let U=Xe.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=Lt.textureFormatReadable(b.format),U.__typeReadable=Lt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,X,k,W,_e,Ce,pe=0){if(!(b&&b.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te){me.bindFramebuffer(F.FRAMEBUFFER,Te);try{let Ne=b.textures[pe],et=Ne.format,gt=Ne.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);let Ie=Gd(Ne);if(Ie.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&X>=0&&X<=b.height-W&&F.readPixels(U,X,k,W,ae.convert(et),ae.convert(gt),_e)}finally{let Ne=ne!==null?Xe.get(ne).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(b,U,X,k,W,_e,Ce,pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te)if(U>=0&&U<=b.width-k&&X>=0&&X<=b.height-W){me.bindFramebuffer(F.FRAMEBUFFER,Te);let Ne=b.textures[pe],et=Ne.format,gt=Ne.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);let Ie=Gd(Ne);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,_t),F.bufferData(F.PIXEL_PACK_BUFFER,_e.byteLength,F.STREAM_READ),F.readPixels(U,X,k,W,ae.convert(et),ae.convert(gt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let tn=ne!==null?Xe.get(ne).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,tn);let Nt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await fp(F,Nt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,_t),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_e),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(_t),F.deleteSync(Nt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,X=0){let k=Math.pow(2,-X),W=Math.floor(b.image.width*k),_e=Math.floor(b.image.height*k),Ce=U!==null?U.x:0,pe=U!==null?U.y:0;Ke.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Ce,pe,W,_e),me.unbindTexture()},this.copyTextureToTexture=function(b,U,X=null,k=null,W=0,_e=0){let Ce,pe,Te,Ne,et,gt,Ie,_t,tn,Nt=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(X!==null)Ce=X.max.x-X.min.x,pe=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,et=X.min.y,gt=X.isBox3?X.min.z:0;else{let Et=Math.pow(2,-W);Ce=Math.floor(Nt.width*Et),pe=Math.floor(Nt.height*Et),b.isDataArrayTexture?Te=Nt.depth:b.isData3DTexture?Te=Math.floor(Nt.depth*Et):Te=1,Ne=0,et=0,gt=0}k!==null?(Ie=k.x,_t=k.y,tn=k.z):(Ie=0,_t=0,tn=0);let Dt=ae.convert(U.format),En=ae.convert(U.type),Le;U.isData3DTexture?(Ke.setTexture3D(U,0),Le=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ke.setTexture2DArray(U,0),Le=F.TEXTURE_2D_ARRAY):(Ke.setTexture2D(U,0),Le=F.TEXTURE_2D),me.activeTexture(F.TEXTURE0),me.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),me.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),me.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Nn=me.getParameter(F.UNPACK_ROW_LENGTH),At=me.getParameter(F.UNPACK_IMAGE_HEIGHT),zs=me.getParameter(F.UNPACK_SKIP_PIXELS),bn=me.getParameter(F.UNPACK_SKIP_ROWS),Ko=me.getParameter(F.UNPACK_SKIP_IMAGES);me.pixelStorei(F.UNPACK_ROW_LENGTH,Nt.width),me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nt.height),me.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),me.pixelStorei(F.UNPACK_SKIP_ROWS,et),me.pixelStorei(F.UNPACK_SKIP_IMAGES,gt);let ls=b.isDataArrayTexture||b.isData3DTexture,ks=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let Et=Xe.get(b),xn=Xe.get(U),ri=Xe.get(Et.__renderTarget),Gt=Xe.get(xn.__renderTarget);me.bindFramebuffer(F.READ_FRAMEBUFFER,ri.__webglFramebuffer),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let dn=0;dn<Te;dn++)ls&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.get(b).__webglTexture,W,gt+dn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.get(U).__webglTexture,_e,tn+dn)),F.blitFramebuffer(Ne,et,Ne+Ce,et+pe,Ie,_t,Ie+Ce,_t+pe,F.DEPTH_BUFFER_BIT,F.NEAREST);me.bindFramebuffer(F.READ_FRAMEBUFFER,null),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Xe.has(b)){let Et=Xe.get(b),xn=Xe.get(U);me.bindFramebuffer(F.READ_FRAMEBUFFER,P),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let ri=0;ri<Te;ri++)ls?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.__webglTexture,W,gt+ri):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Et.__webglTexture,W),ks?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xn.__webglTexture,_e,tn+ri):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xn.__webglTexture,_e),W!==0?F.blitFramebuffer(Ne,et,Ne+Ce,et+pe,Ie,_t,Ie+Ce,_t+pe,F.COLOR_BUFFER_BIT,F.NEAREST):ks?F.copyTexSubImage3D(Le,_e,Ie,_t,tn+ri,Ne,et,Ce,pe):F.copyTexSubImage2D(Le,_e,Ie,_t,Ne,et,Ce,pe);me.bindFramebuffer(F.READ_FRAMEBUFFER,null),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ks?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Le,_e,Ie,_t,tn,Ce,pe,Te,Dt,En,Nt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Le,_e,Ie,_t,tn,Ce,pe,Te,Dt,Nt.data):F.texSubImage3D(Le,_e,Ie,_t,tn,Ce,pe,Te,Dt,En,Nt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_e,Ie,_t,Ce,pe,Dt,En,Nt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_e,Ie,_t,Nt.width,Nt.height,Dt,Nt.data):F.texSubImage2D(F.TEXTURE_2D,_e,Ie,_t,Ce,pe,Dt,En,Nt);me.pixelStorei(F.UNPACK_ROW_LENGTH,Nn),me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At),me.pixelStorei(F.UNPACK_SKIP_PIXELS,zs),me.pixelStorei(F.UNPACK_SKIP_ROWS,bn),me.pixelStorei(F.UNPACK_SKIP_IMAGES,Ko),_e===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Le),me.unbindTexture()},this.initRenderTarget=function(b){Xe.get(b).__webglFramebuffer===void 0&&Ke.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ke.setTextureCube(b,0):b.isData3DTexture?Ke.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ke.setTexture2DArray(b,0):Ke.setTexture2D(b,0),me.unbindTexture()},this.resetState=function(){B=0,H=0,ne=null,me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var im={type:"change"},nd={type:"start"},rm={type:"end"},Qc=new Xi,sm=new Gn,CM=Math.cos(70*ft.DEG2RAD),hn=new T,Hn=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},td=1e-6,eh=class extends lo{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bs.ROTATE,MIDDLE:bs.DOLLY,RIGHT:bs.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Bt,this._lastTargetPosition=new T,this._quat=new Bt().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jr,this._sphericalDelta=new jr,this._scale=1,this._panOffset=new T,this._rotateStart=new Z,this._rotateEnd=new Z,this._rotateDelta=new Z,this._panStart=new Z,this._panEnd=new Z,this._panDelta=new Z,this._dollyStart=new Z,this._dollyEnd=new Z,this._dollyDelta=new Z,this._dollyDirection=new T,this._mouse=new Z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=IM.bind(this),this._onPointerDown=PM.bind(this),this._onPointerUp=LM.bind(this),this._onContextMenu=HM.bind(this),this._onMouseWheel=UM.bind(this),this._onKeyDown=FM.bind(this),this._onTouchStart=OM.bind(this),this._onTouchMove=BM.bind(this),this._onMouseDown=DM.bind(this),this._onMouseMove=NM.bind(this),this._interceptControlDown=zM.bind(this),this._interceptControlUp=kM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(im),this.update(),this.state=Rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Hn:i>Math.PI&&(i-=Hn),s<-Math.PI?s+=Hn:s>Math.PI&&(s-=Hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=hn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qc.origin.copy(this.object.position),Qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qc.direction))<CM?this.object.lookAt(this.target):(sm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qc.intersectPlane(sm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>td||8*(1-this._lastQuaternion.dot(this.object.quaternion))>td||this._lastTargetPosition.distanceToSquared(this.target)>td?(this.dispatchEvent(im),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Hn/60*this.autoRotateSpeed*e:Hn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;hn.copy(s).sub(this.target);let r=hn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Z,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function PM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function IM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function LM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rm),this.state=Rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function DM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Rt.DOLLY;break;case bs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}break;case bs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(nd)}function NM(n){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function UM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(n.preventDefault(),this.dispatchEvent(nd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(rm))}function FM(n){this.enabled!==!1&&this._handleKeyDown(n)}function OM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1){this.state=Rt.NONE;break}this._handleTouchStartRotate(n),this.state=Rt.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1){this.state=Rt.NONE;break}this._handleTouchStartPan(n),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Rt.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(nd)}function BM(n){switch(this._trackPointer(n),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Rt.NONE}}function HM(n){this.enabled!==!1&&n.preventDefault()}function zM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var rr=class extends qt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Z(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},aa=new T,am=new Ye,om=new Ye,lm=new T,cm=new T,th=class{constructor(e={}){let t=this,i,s,r,a,o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),am.copy(_.matrixWorldInverse),om.multiplyMatrices(_.projectionMatrix,am),h(p,p,_),this.sortObjects&&d(p)},this.setSize=function(p,_){i=p,s=_,r=i/2,a=s/2,l.style.width=p+"px",l.style.height=_+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let _=0,m=p.children.length;_<m;_++)c(p.children[_])}function h(p,_,m){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){aa.setFromMatrixPosition(p.matrixWorld),aa.applyMatrix4(om);let g=aa.z>=-1&&aa.z<=1&&p.layers.test(m.layers)===!0,v=p.element;if(v.style.display=g===!0?"":"none",g===!0){p.onBeforeRender(t,_,m);let y=100*p.center.x,A=100*p.center.y;v.style.transformOrigin=`${y}% ${A}%`;let w=-p.rotation2D,x=aa.x*r+r,E=-aa.y*a+a;v.style.transform=`translate(${-y}%, ${-A}%) translate(${x}px, ${E}px) rotate(${w}rad)`,v.parentNode!==l&&l.appendChild(v),p.onAfterRender(t,_,m)}let S={distanceToCameraSquared:u(m,p)};o.objects.set(p,S)}for(let g=0,v=p.children.length;g<v;g++)h(p.children[g],_,m)}function u(p,_){return lm.setFromMatrixPosition(p.matrixWorld),cm.setFromMatrixPosition(_.matrixWorld),lm.distanceToSquared(cm)}function f(p){let _=[];return p.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function d(p){let _=f(p).sort(function(g,v){if(g.renderOrder!==v.renderOrder)return v.renderOrder-g.renderOrder;let S=o.objects.get(g).distanceToCameraSquared,y=o.objects.get(v).distanceToCameraSquared;return S-y}),m=_.length;for(let g=0,v=_.length;g<v;g++)_[g].element.style.zIndex=m-g}}};var Ro=class n extends be{constructor(){let e=n.SkyShader,t=new Wt({name:e.name,uniforms:Xn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:$t,depthWrite:!1});super(new zt(1,1,1),t),this.isSky=!0}};Ro.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new T},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var oa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},GM=new Ks(-1,1,1,-1,0,1),id=class extends yt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},VM=new id,Cs=class{constructor(e){this._mesh=new be(VM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,GM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var nh=class extends qn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xn.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Cs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Co=class extends qn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ih=class extends qn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var sh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Z);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nh(oa),this.copyPass.material.blending=Ji,this.timer=new Js}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Co!==void 0&&(a instanceof Co?i=!0:a instanceof ih&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var rh=class extends qn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Re}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var hm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var la=class n extends qn{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Z(e.x,e.y):new Z(256,256),this.clearColor=new Re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,a,{type:on,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new jt(r,a,{type:on,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new jt(r,a,{type:on,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=hm;this.highPassUniforms=Xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Z(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xn.clone(oa.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,premultipliedAlpha:!0,blending:Pi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Re,this._oldClearAlpha=1,this._basic=new vn,this._fsQuad=new Cs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Wt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};la.BlurDirectionX=new Z(1,0);la.BlurDirectionY=new Z(0,1);var Po={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ah=class extends qn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Xn.clone(Po.uniforms),this.material=new $r({name:Po.name,uniforms:this.uniforms,vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader}),this._fsQuad=new Cs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===co?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===er?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===po?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Io(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new yt;l.morphTargetsRelative=o;let c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0,d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=um(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);let p=um(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function um(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new rn(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let _=h.getComponent(f,p);o.setComponent(f+u,p,_)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var oh=class extends wi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new zt;e.deleteAttribute("uv");let t=new je({side:$t}),i=new je,s=new Ki(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new be(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Yt(e,i,6),o=new qt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new be(e,ca(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new be(e,ca(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new be(e,ca(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new be(e,ca(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new be(e,ca(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new be(e,ca(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ca(n){return new no({color:0,emissive:16777215,emissiveIntensity:n})}var ar=(()=>{let n=777;return()=>(n=n*16807%2147483647)/2147483647})(),sd=n=>n[Math.floor(ar()*n.length)],ha=n=>n.toLocaleString("en-US"),WM=n=>{let e=new Date(2026,9,6-n);return`${String(e.getDate()).padStart(2,"0")}/${String(e.getMonth()+1).padStart(2,"0")}/${e.getFullYear()}`},Lo=(n=26)=>[["Temperature",n,.3,"\xB0C",1],["Dissolved O\u2082",7.8,.25,"mg/L",1],["Salinity",36,.2,"ppt",1]],dm={broodstock:()=>{let n=[["Hamour","Epinephelus coioides"],["Seabream","Sparus aurata"],["Cobia","Rachycentron canadum"],["Mangrove Snapper","Lutjanus argentimaculatus"]],e=[[-15,-7],[15,-7],[-15,8],[15,8]].map(([t,i],s)=>({key:"tank"+s,code:"B-0"+(s+1),box:[t-6.6,0,i-6.6,t+6.6,4.6,i+6.6],name:`Broodstock tank B-0${s+1}`,kind:`${n[s][0]} \xB7 ${n[s][1]}`,desc:`Parent fish of ${n[s][0].toLowerCase()} kept under a controlled photoperiod and temperature cycle to trigger natural spawning. Eggs float to the surface collector overnight.`,stats:[["60 m\xB3","Volume"],[`${18+s*4}`,"Breeders"],[`${(4.2+s*.9).toFixed(1)} kg`,"Avg. weight"]],live:[...Lo(25.6+s*.3),["Photoperiod",13,0,"h light",0]]}));return e.push({key:"walk",code:"CW",box:[-1.3,2.3,-16,1.3,2.9,16],name:"Service catwalk",kind:"Access & husbandry",desc:"Raised walkway giving staff safe access to every tank for feeding, health checks and gentle handling of the breeders.",stats:[["2.2 m","Width"],["Anti-slip","GRP grating"],["Daily","Health checks"]]}),e.push({key:"eggs",code:"EC",box:[-4,3,-16,4,6,-12],name:"Egg collectors",kind:"Spawn harvesting",desc:"Overflow collectors capture the floating eggs every morning; batches are counted, disinfected and transferred to the hatchery incubators.",stats:[["Daily","Harvest"],["~750k","Eggs / batch"],["< 1 h","To incubators"]],live:[["Eggs collected today",612e3,9e3,"",0]]}),e.push({key:"supply",code:"SW",box:[-30,4,-17,30,9.5,-5],name:"Sea water supply",kind:"From the intake room",desc:"Filtered Gulf water from the sea water intake room, sterilised by UV and ozone before reaching the broodstock tanks.",stats:[["UV + O\u2083","Treatment"],["RAS","Recirculation"],["95%","Water reused"]],live:[["Flow",118,4,"m\xB3/h",0]]}),e},hatchery:()=>{let n=[];for(let e=0;e<3;e++)for(let t=0;t<6;t++){let i=-20+t*8,s=-10+e*8,r=2+Math.floor(ar()*22),a=6e5+Math.round(ar()*30)*5e3,o=Math.round(a*(.15+ar()*.12)/1e3)*1e3,l=sd(["Seabream","Hamour","Red Snapper"]);n.push({key:`L${e+1}T${t+1}`,code:`L${e+1}T${t+1}`,box:[i-2.3,0,s-2.3,i+2.3,4.2,s+2.3],name:`Larval tank L${e+1}T${t+1}`,kind:`${l} \xB7 day ${r} post-hatch`,desc:"Conical larval rearing tank on a recirculating system. Green-water and live feed are dosed several times a day while larvae develop their swim bladder and first organs.",board:[["TANK NO",`L${e+1}T${t+1}`],["SPECIES",l.toUpperCase()],["STOCKING DATE",WM(r)],["STOCKED EGGS",ha(a)],["UNHATCHED EGGS",ha(o)],["HATCHED EGGS",ha(a-o)]],stats:[["8 m\xB3","Volume"],[`${r} DPH`,"Age"],[`${(60+ar()*25).toFixed(0)}%`,"Survival est."]],live:Lo(25.8+ar()*.6)})}return n.push({key:"wq",code:"WQ",box:[-24,0,12,-12,5,16],name:"Water-quality station",kind:"RAS control",desc:"Central console for the 26 recirculating systems: every tank is monitored for temperature, salinity, photoperiod and oxygen, with alarms to the team.",stats:[["26","RAS systems"],["24/7","Monitoring"],["SMS","Alarms"]],live:[["Systems online",26,0,"/ 26",0],["Alarms",0,0,"",0],...Lo(26.1)]}),n},livefeed:()=>{let e=[["Nannochloropsis","Green-water for larval tanks"],["Isochrysis","Rich in DHA"],["Tetraselmis","Rotifer feed"],["Chaetoceros","Diatom culture"],["Pavlova","Copepod & Artemia enrichment"]].map(([t,i],s)=>({key:"pbr"+s,code:"PBR-"+(s+1),box:[-24,0,-13+s*5.5-1,22,7,-13+s*5.5+1],name:`Photobioreactors \xB7 ${t}`,kind:i,desc:`One of the 7 live algae species grown year-round: a row of 16 photobioreactors culturing ${t} under a 24-hour LED spectrum. Cultures are harvested daily and dosed into the larval tanks.`,stats:[["16","Columns"],["250 L","Each"],["Daily","Harvest"]],live:[["Cell density",28+s*4,1.5,"M cells/mL",1],["Culture temp.",24,.3,"\xB0C",1],["pH",8.1,.05,"",2]]}));for(let t=0;t<4;t++)e.push({key:"rot"+t,code:"R-"+(t+1),box:[22.4,0,-10+t*6-1.6,25.6,4,-10+t*6+1.6],name:`Rotifer cone R-${t+1}`,kind:"Zooplankton \xB7 Brachionus",desc:"Conical culture vessel for rotifers, the first live prey offered to larvae. They are enriched with microalgae before feeding.",stats:[["1,000 L","Volume"],["Batch","Culture"],["Enriched","With algae"]],live:[["Density",820+t*60,25,"rotifers/mL",0]]});return e},nursery:()=>[-10.5,-3.5,3.5,10.5].flatMap((n,e)=>[{key:"rw"+e,code:"N-0"+(e+1),box:[-24,0,n-2.6,24,2.2,n+2.6],name:`Nursery raceway N-0${e+1}`,kind:`${sd(["Hamour","Red Snapper","Sheri"])} juveniles`,desc:"Long flow-through raceway where juveniles complete weaning onto formulated feed and grow to fingerling size before delivery to farms or the sea cages.",stats:[[`${ha(38e3+e*6500)}`,"Fish"],["45 m","Length"],[`Day ${30+e*6}`,"Age"]],live:[["Avg. weight",1.6+e*.6,.02,"g",2],["Feed today",3.2+e*.4,.05,"kg",1],...Lo(26.4).slice(0,2)]},{key:"fd"+e,code:"F-0"+(e+1),box:[-24,2.3,n-.7,24,3.5,n+.7],name:`Automatic feeder F-0${e+1}`,kind:"Precision feeding on rails",desc:"Rail-mounted feeder that travels along the raceway dispensing small, frequent rations calculated from biomass and water temperature.",stats:[["12\xD7","Meals / day"],["\xB12 g","Accuracy"],["Auto","Biomass-based"]],live:[["Next meal in",14,.5,"min",0]]}]),research:()=>{let n=[["Virology lab","Viral pathogen testing"],["Bacteriology lab","Bacterial screening & culture"],["Parasitology lab","Parasite diagnostics"],["Microscopy","Larval development"],["Water-quality lab","Water-quality parameters"],["Genomics bench","Broodstock genetics"]],e=[];for(let t=0;t<3;t++)for(let i=0;i<2;i++){let s=-14+i*20,r=-8+t*8,[a,o]=n[t*2+i];e.push({key:"b"+t+i,code:"LAB-"+(t*2+i+1),box:[s-6.3,0,r-1.5,s+6.3,3.2,r+1.5],name:a,kind:o,desc:`One of the 14 SKMRC laboratories, provisioned for ISO/IEC 17025. Here the team works on ${o.toLowerCase()} to improve fish health, genetics and productivity across generations.`,stats:[["ISO","17025 ready"],[`${3+t}`,"Researchers"],["Open","To partners"]],live:[["Samples today",40+t*18+i*7,2,"",0]]})}return e.push({key:"fh",code:"FH",box:[-30,0,-15,-26.5,4,10],name:"Fume hood bank",kind:"Chemistry & sample preparation",desc:"Five ducted fume hoods for safe handling of reagents and fixatives during sample preparation.",stats:[["5","Hoods"],["0.5 m/s","Face velocity"],["HEPA","Filtered"]]}),e},plantroom:()=>[...[0,1,2].map(n=>({key:"g"+n,code:"G"+(n+1),box:[-18+n*11-4.6,0,-13,-18+n*11+6,4,-9],name:`Standby generator G${n+1}`,kind:"Diesel \xB7 automatic start",desc:"Starts automatically within seconds of a grid failure so that pumps and oxygen never stop.",stats:[["1 MVA","Rating"],["< 10 s","Start"],["N+1","Redundancy"]],live:[["Status",0,0,n===0?"Running test":"Standby",0],["Fuel",92-n*4,.1,"%",0]]})),{key:"uv",code:"UV",box:[9,0,-6,15,3.6,0],name:"UV sterilisers",kind:"Pathogen control",desc:"High-output ultraviolet reactors disinfect recirculating water before it returns to the tanks.",stats:[["4","Reactors"],["99.9%","Pathogen kill"],["RAS","Loop"]],live:[["UV dose",46,1,"mJ/cm\xB2",0]]},{key:"bf",code:"BF",box:[20,0,-14.5,24,4.5,-1],name:"Biofilters",kind:"Nitrification",desc:"Moving-bed biofilters where bacteria convert ammonia from fish waste into harmless nitrate.",stats:[["3","Units"],["MBBR","Technology"],["95%","Water saved"]],live:[["Ammonia",.08,.01,"mg/L",2]]},{key:"scada",code:"SC",box:[-19.5,0,11,-12.5,3.2,13],name:"Life-support SCADA",kind:"Control panel",desc:"Supervisory control of pumps, filters, oxygen and temperature for the whole hatchery.",stats:[["1,200","Signals"],["24/7","Logging"],["Remote","Access"]],live:[["Pumps running",14,0,"/ 16",0]]}],genroom:()=>[...[0,1,2].map(n=>({key:"g"+n,code:"GEN-"+(n+1),box:[-12+n*12-4.6,0,-8.5,-12+n*12+6,4,-3.5],name:`Generator GEN-${n+1}`,kind:"Back-up power",desc:"Diesel generator set sized to carry the life-support load of the centre during a power cut.",stats:[["800 kVA","Rating"],["24 h","Autonomy"],["Weekly","Test run"]],live:[["Coolant",72,.5,"\xB0C",0]]})),{key:"sw",code:"SWG",box:[-16,0,8,-4,3.5,10.2],name:"Switchgear",kind:"Electrical distribution",desc:"Low-voltage panels distributing power to the hatchery, broodstock building and plant room.",stats:[["ATS","Auto transfer"],["6","Panels"],["IP54","Protection"]]},{key:"tr",code:"TX",box:[11.5,0,7,16.5,3.6,11],name:"Transformer",kind:"Grid connection",desc:"Step-down transformer feeding the site from the utility network.",stats:[["11 kV","Input"],["400 V","Output"],["Oil","Cooled"]],live:[["Load",61,1.5,"%",0]]}],phase1:()=>{let n=[];for(let e=0;e<3;e++)for(let t=0;t<5;t++){let i=-20+t*10,s=-10+e*9;n.push({key:`I${e}${t}`,code:`P1-${e+1}${t+1}`,box:[i-3.7,0,s-2.8,i+3.7,1.6,s+2.8],name:`Phase 1 tank P1-${e+1}${t+1}`,kind:`${sd(["Nursery","Incubation","Larval"])} unit`,desc:"Rectangular tank of the original Phase 1 hatchery, still used for incubation and nursery batches.",stats:[["12 m\xB3","Volume"],[`${ha(12e3+Math.round(ar()*20)*1e3)}`,"Fish"],["Phase 1","Existing"]],live:Lo(26)})}return n},seacages:()=>[{key:"fish-hamour",direct:!0,noFocus:!0,code:"HAMOUR",media:{img:"hamour",video:!0},facts:[["Scientific name","Epinephelus coioides"],["Arabic","\u0647\u0627\u0645\u0648\u0631"],["Family","Groupers \xB7 Serranidae"],["Max. size","about 1.2 m"],["Habitat","Coastal reefs, mangroves, estuaries"],["Diet","Fish and crustaceans"],["Biology","Born female, can turn male later in life"],["At SKMRC","Broodstock, nursery focus & restocking"]],name:"Hamour",kind:"Orange-spotted grouper \xB7 Epinephelus coioides",desc:"The most prized fish on Emirati tables. A slow-growing reef predator whose wild stocks in the Gulf are under heavy pressure: hatchery-raised Hamour is at the heart of SKMRC restocking and of UAE food security.",stats:[["Priority","Restocking species"],["Reef","Habitat"],["20 M","Fry target 2026"]],live:[["Avg. weight in cage",640,3,"g",0],["Feeding response",92,2,"%",0]]},{key:"fish-shaari",direct:!0,noFocus:!0,code:"SHAARI",media:{img:"shaari"},facts:[["Scientific name","Lethrinus nebulosus"],["Arabic","\u0634\u0639\u0631\u064A"],["Family","Emperors \xB7 Lethrinidae"],["Max. size","about 85 cm"],["Habitat","Seagrass beds and sand near reefs"],["Diet","Crabs, molluscs, sea urchins"],["At SKMRC","Broodstock species"]],name:"Shaari",kind:"Spangled emperor \xB7 Lethrinus nebulosus",desc:"A silvery-olive emperor of seagrass beds and coral reefs, one of the best-loved fish in UAE markets and part of the SKMRC broodstock programme.",stats:[["Seagrass","& reefs"],["Broodstock","At SKMRC"],["Popular","Local market"]],live:[["Avg. weight in cage",410,3,"g",0]]},{key:"fish-hamrah",direct:!0,noFocus:!0,code:"HAMRAH",media:{img:"hamrah"},facts:[["Common name","Red snapper"],["Arabic","\u062D\u0645\u0631\u0629"],["Family","Snappers \xB7 Lutjanidae"],["Habitat","Rocky and coral reefs"],["Diet","Fish and crustaceans"],["At SKMRC","Red snapper: current nursery focus"]],name:"Hamrah",kind:"Red snapper",desc:"A bright red snapper of Gulf reefs, valued for its firm white flesh. Red snapper is one of the current nursery focus species at SKMRC.",stats:[["Red snapper","Family"],["Nursery","Focus species"],["Reef","Habitat"]],live:[["Avg. weight in cage",380,3,"g",0]]},{key:"fish-ummdrais",direct:!0,noFocus:!0,code:"UMM DRAIS",media:{img:"ummdrais"},facts:[["Common name","Reef snapper"],["Family","Snappers \xB7 Lutjanidae"],["Habitat","Gulf reefs"],["Market","Valued in local fish markets"],["At SKMRC","Grow-out candidate"]],name:"Umm Drais",kind:"Gulf reef snapper",desc:"A deep-bodied red reef fish of the Gulf, appreciated in local fish markets and a candidate species for diversification of the grow-out programme.",stats:[["Reef","Habitat"],["Local","Market"],["Grow-out","Candidate"]],live:[["Avg. weight in cage",450,3,"g",0]]},{key:"stock",code:"SC-07",box:[-15,-9,-15,15,11,15],name:"Sea cage SC-07",kind:"Phase 4 \xB7 open-sea grow-out",desc:"Fingerlings from the hatchery grow here to market size in natural Gulf water, fed from the work boat and monitored by underwater cameras.",stats:[["25 m","Diameter"],["12 m","Net depth"],[`${ha(42e3)}`,"Fish"]],live:[["Current",.18,.02,"m/s",2],["Water temp.",27.4,.2,"\xB0C",1]]}],visitor:()=>{let n=["Restocking the Gulf","Hammour","From egg to fingerling","Food security","Cobia","Live feed"],e=[{key:"aq",code:"AQ",box:[-6.6,0,-6.6,6.6,11,6.6],name:"Living aquarium",kind:"360\xB0 cylinder \xB7 native species",desc:"A 10-metre cylindrical aquarium at the heart of the visitor centre, showing native Gulf species raised in the hatchery.",stats:[["180 m\xB3","Volume"],["12","Species"],["360\xB0","View"]],live:[["Water temp.",26.5,.2,"\xB0C",1],["Visitors today",148,2,"",0]]}];return n.forEach((t,i)=>{let s=-.6+i*.42+Math.PI,r=Math.cos(s)*18,a=Math.sin(s)*18;e.push({key:"ex"+i,code:"EX-"+(i+1),box:[r-2.2,0,a-2.2,r+2.2,5.4,a+2.2],name:t,kind:"Exhibition panel",desc:`Interactive panel of the exhibition "The Gulf": ${t.toLowerCase()} explained for schools and visitors, with video and touch content.`,stats:[["Touch","Screen"],["EN \xB7 AR","Languages"],["3 min","Story"]]})}),e.push({key:"desk",code:"RX",box:[10.5,0,1.5,19.5,2.4,10.5],name:"Welcome desk",kind:"Tours & bookings",desc:"Starting point for guided tours, school visits and partner meetings.",stats:[["Daily","Tours"],["Schools","Programmes"],["Free","Entry"]]}),e}};function fm(n){return dm[n]?dm[n]():[]}var lh={hamour:"assets/fish-hamour.webp",shaari:"assets/fish-shaari.webp",hamrah:"assets/fish-hamrah.webp",ummdrais:"assets/fish-ummdrais.webp"},pm="assets/hamour-poster.jpg",Do="assets/hamour.mp4";var rd=null,Ut=(()=>{let n=4242;return()=>(n=n*16807%2147483647)/2147483647})(),Mt=n=>new je(n),ie={concrete:Mt({color:"#b8bcbf",roughness:.32}),epoxy:Mt({color:"#5d7482",roughness:.22}),vinyl:Mt({color:"#d9dee1",roughness:.4}),oak:Mt({color:"#b98f62",roughness:.45}),stoneFloor:Mt({color:"#d8d2c6",roughness:.25}),wall:Mt({color:"#eef0f1",roughness:.85}),ceil:Mt({color:"#2a2f35",roughness:.9}),led:Mt({color:"#ffffff",emissive:"#ffffff",emissiveIntensity:3}),steel:Mt({color:"#c9ced3",roughness:.28,metalness:.85}),dark:Mt({color:"#1e242a",roughness:.5,metalness:.3}),white:Mt({color:"#f3f4f5",roughness:.45}),blackTop:Mt({color:"#15181b",roughness:.3}),fiber:Mt({color:"#2f6ea6",roughness:.35,side:Zt}),fiberW:Mt({color:"#eef2f4",roughness:.3,side:Zt}),water:new yn({color:"#2cc4e0",roughness:.05,transparent:!0,opacity:.38,emissive:"#0a6e8c",emissiveIntensity:.6,depthWrite:!1}),waterTop:new yn({color:"#1aa9c9",roughness:.02,metalness:.1,transparent:!0,opacity:.7,emissive:"#0b5f78",emissiveIntensity:.5}),glass:new yn({color:"#cfeefa",roughness:.05,transparent:!0,opacity:.16,depthWrite:!1}),plant:Mt({color:"#4f8a3c",roughness:.9,flatShading:!0}),pot:Mt({color:"#e6e1d8",roughness:.6}),chair:Mt({color:"#2b3138",roughness:.6}),yellow:Mt({color:"#e3a923",roughness:.5,metalness:.3}),pipeBlue:Mt({color:"#2a78c2",roughness:.35,metalness:.4}),pipeGreen:Mt({color:"#2f9a6a",roughness:.35,metalness:.4}),pipeGrey:Mt({color:"#9aa3ab",roughness:.35,metalness:.6}),accent:Mt({color:"#2ee6d6",emissive:"#2ee6d6",emissiveIntensity:1.6})};function Uo(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Ys(i);return s.colorSpace=pn,s.anisotropy=4,s}function pi(n,e="#2ee6d6"){return Uo(768,432,(t,i,s)=>{let r=t.createLinearGradient(0,0,i,s);r.addColorStop(0,"#071722"),r.addColorStop(1,"#0d2a3a"),t.fillStyle=r,t.fillRect(0,0,i,s),t.fillStyle=e,t.font="600 26px sans-serif",t.fillText(n.toUpperCase(),28,46),t.fillStyle="rgba(255,255,255,.5)",t.font="16px sans-serif",t.fillText("SKMRC \xB7 LIVE MONITORING",28,72),t.strokeStyle=e,t.lineWidth=3,t.beginPath();for(let a=0;a<=40;a++){let o=28+a*11,l=230-Math.sin(a*.35)*40-Ut()*30;a?t.lineTo(o,l):t.moveTo(o,l)}t.stroke(),t.strokeStyle="rgba(255,255,255,.12)",t.lineWidth=1;for(let a=0;a<5;a++)t.beginPath(),t.moveTo(28,120+a*40),t.lineTo(470,120+a*40),t.stroke();for(let a=0;a<8;a++){let o=40+Ut()*140;t.fillStyle=a%3?"rgba(46,230,214,.75)":"#ffcf6b",t.fillRect(510+a*30,300-o,20,o)}[["26.1\xB0C","TEMP"],["7.9 mg/L","O\u2082"],["36 ppt","SAL"]].forEach(([a,o],l)=>{t.fillStyle="rgba(255,255,255,.06)",t.fillRect(28+l*245,330,225,80),t.fillStyle="#fff",t.font="700 30px sans-serif",t.fillText(a,44+l*245,372),t.fillStyle="rgba(255,255,255,.55)",t.font="14px sans-serif",t.fillText(o,44+l*245,396)})})}function mm(n,e,t,i){return Uo(512,768,(s,r,a)=>{let o=s.createLinearGradient(0,0,0,a);o.addColorStop(0,t),o.addColorStop(1,i),s.fillStyle=o,s.fillRect(0,0,r,a),s.strokeStyle="rgba(255,255,255,.18)",s.lineWidth=2;for(let l=0;l<9;l++)s.beginPath(),s.arc(r*.75,a*.35,40+l*28,0,Math.PI*2),s.stroke();s.fillStyle="#fff",s.font="300 54px sans-serif",n.split(`
`).forEach((l,c)=>s.fillText(l,40,a-200+c*62)),s.font="600 20px sans-serif",s.fillStyle="rgba(255,255,255,.75)",s.fillText(e.toUpperCase(),40,a-60)})}var _m=()=>Uo(512,256,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t*.62);i.addColorStop(0,"#9cc9e6"),i.addColorStop(1,"#f7dcb4"),n.fillStyle=i,n.fillRect(0,0,e,t*.62);let s=n.createLinearGradient(0,t*.62,0,t);s.addColorStop(0,"#2aa3b6"),s.addColorStop(1,"#0d5f78"),n.fillStyle=s,n.fillRect(0,t*.62,e,t),n.fillStyle="rgba(255,255,255,.5)";for(let r=0;r<40;r++)n.fillRect(Ut()*e,t*.64+Ut()*t*.34,10+Ut()*30,1.5)});function Qt(n,e,t,i,s,r,a=0){let o=new be(e,t);return o.position.set(i,s,r),o.rotation.y=a,n.add(o),o}var De=(n,e,t,i,s,r,a,o,l)=>Qt(n,new zt(e,t,i),s,r,a,o,l),Mn=(n,e,t,i,s,r,a,o=32,l=!1)=>Qt(n,new kt(e,e,t,o,1,l),i,s,r,a);function ei(n,e,t,i){let s=new ui(e.map(r=>new T(...r)),!1,"catmullrom",.05);return Qt(n,new vs(s,Math.max(20,e.length*12),t,12),i,0,0,0)}function xt(n,e,t,i,s,r){let a=document.createElement("div");a.className="aq-tag",a.innerHTML=`<i></i><div><b>${s}</b><small>${r}</small></div>`;let o=new rr(a);return o.position.set(e,t,i),o.center.set(0,.5),n.add(o),o}var No=null;function XM(){if(No)return No;let n=new $i(1,18,12);n.scale(1,.38,.26);let e=new xs(.42,.7,4);return e.rotateZ(Math.PI/2),e.translate(-1.15,0,0),e.scale(1,1,.3),e.deleteAttribute("uv"),n.deleteAttribute("uv"),No=Io([n,e]),No.computeVertexNormals(),No}var ch=null,xm={value:0};function qM(){if(ch)return ch;let n=e=>{let t=new sn(2,1,28,8),i=t.attributes.position;for(let s=0;s<i.count;s++){let r=i.getX(s),a=i.getY(s),o=Math.sqrt(Math.max(0,1-(2*a)**2))*(.35+.65*Math.max(0,1-Math.abs(r-.25)/1.3));i.setZ(s,e*.13*o)}if(e<0){t.rotateY(Math.PI),t.scale(-1,1,1);let s=t.index.array;for(let r=0;r<s.length;r+=3){let a=s[r+1];s[r+1]=s[r+2],s[r+2]=a}}return t.computeVertexNormals(),t};return ch=Io([n(1),n(-1)]),ch}var YM=new so;function $M(n){let e=YM.load(lh[n]);e.colorSpace=pn,e.anisotropy=4;let t=new je({map:e,alphaTest:.45,side:Zt,roughness:.45,metalness:.1,emissive:"#ff9a3c",emissiveIntensity:0});return t.onBeforeCompile=i=>{i.uniforms.uTime=xm,i.vertexShader=`uniform float uTime;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float ph = float(gl_InstanceID) * 1.37;
      float tw = clamp((0.55 - position.x) / 1.55, 0.0, 1.0);
      transformed.z += sin(position.x * 2.4 - uTime * 6.5 + ph) * 0.2 * tw * tw;
      transformed.x += sin(uTime * 6.5 + ph) * 0.015;`)},t}function ts(n,{cx:e,cz:t,r0:i,r1:s,y0:r,y1:a,n:o,size:l,color:c,speed:h=.4,line:u=null,photo:f=null,item:d=null}){let p=new Yt(f?qM():XM(),f?$M(f):Mt({color:c,roughness:.4,metalness:.3}),o);d&&(p.userData.item=d,p.userData.fish=!0);let _=Array.from({length:o},(E,L)=>({a:Ut()*6.28,r:i+Ut()*(s-i),y:r+Ut()*(a-r),sp:h*(.7+Ut()*.6),ph:Ut()*6.28,sc:l*(L===0?1.25:.75+Ut()*.5)}));f&&(_[0].r=Math.min(Math.max(_[0].r,6.5),9),_[0].sp=h*.6),n.add(p);let m=new Ye,g=new Bt,v=new _n,S=new T,y=new T,A=new T,w=new Float32Array(o*3),x=E=>{_.forEach((L,C)=>{if(u){let D=Math.sin(E*L.sp*.25+L.ph),z=Math.cos(E*L.sp*.25+L.ph)>0?0:Math.PI;S.set(e+D*u,L.y+Math.sin(E*2+L.ph)*.05,t+(L.r-(i+s)/2)),v.set(0,z,Math.sin(E*6+L.ph)*.05)}else{let D=L.a+E*L.sp/Math.max(L.r,.5);S.set(e+Math.cos(D)*L.r,L.y+Math.sin(E*1.3+L.ph)*.08,t+Math.sin(D)*L.r),v.set(0,-D-Math.PI/2,Math.sin(E*7+L.ph)*.06)}g.setFromEuler(v),y.setScalar(L.sc),m.compose(S,g,y),p.setMatrixAt(C,m),C===0&&A.copy(S),w[C*3]=S.x,w[C*3+1]=S.y,w[C*3+2]=S.z}),p.instanceMatrix.needsUpdate=!0,f&&(xm.value=E,(!p.boundingSphere||p.boundingSphere.radius<15)&&(p.boundingSphere=new Jn(new T(e,(r+a)/2,t),Math.max(s,4)+3)))};return x.lead=A,x.size=l,x.first=_[0],x.pos=w,x.n=o,x.sc=_.map(E=>E.sc),x.item=d,x}function Ni(n,{w:e,d:t,h:i,floor:s=ie.concrete,view:r=!0}){let a=new be(new sn(e,t).rotateX(-Math.PI/2),s);if(n.add(a),De(n,e,.3,t,ie.ceil,0,i+.15,0),De(n,e,i,.3,ie.wall,0,i/2,t/2),De(n,.3,i,t,ie.wall,-e/2,i/2,0),De(n,.3,i,t,ie.wall,e/2,i/2,0),r){De(n,e,1.2,.3,ie.wall,0,.6,-t/2),De(n,e,i-7,.3,ie.wall,0,7+(i-7)/2,-t/2);let l=new be(new sn(e,5.8),new vn({map:_m(),toneMapped:!1}));l.position.set(0,4.1,-t/2-.2),n.add(l);for(let c=-e/2;c<=e/2;c+=4)De(n,.15,5.8,.2,ie.dark,c,4.1,-t/2+.05)}else De(n,e,i,.3,ie.wall,0,i/2,-t/2);for(let l=-e/2+4;l<e/2;l+=6)De(n,.25,.08,t*.86,ie.led,l,i-.05,0);n.add(new Zi("#ffffff","#6d747c",.45));let o=new Es("#fff4e6",.7);return o.position.set(-10,20,-15),n.add(o),{min:new T(-e/2+1,.8,-t/2+1),max:new T(e/2-1,i-.6,t/2-.8)}}var Ps=60,mi=36,Is=10,Ui=(n={})=>({entry:{pos:new T(0,2.2,mi/2-1.2),target:new T(0,2.2,mi/2-12)},view:{pos:new T(14,7.5,12),target:new T(0,1.5,-4)},...n}),gm={broodstock(n){let e=Ni(n,{w:Ps,d:mi,h:Is,floor:ie.epoxy}),t=[];return[[-15,-7],[15,-7],[-15,8],[15,8]].forEach(([i,s],r)=>{Mn(n,6,2.4,ie.fiber,i,1.2,s,48,!0),Qt(n,new eo(5.95,6.25,48).rotateX(-Math.PI/2),ie.steel,i,2.42,s),Mn(n,5.95,2.2,ie.water,i,1.1,s,48),Qt(n,new Ai(5.95,48).rotateX(-Math.PI/2),ie.waterTop,i,2.21,s),t.push(ts(n,{cx:i,cz:s,r0:1.5,r1:5.2,y0:.5,y1:1.8,n:16,size:.75,color:r%2?"#8b6a47":"#9aa6ad",speed:1.1}));let a=new Ki("#5fdcff",6,14);a.position.set(i,4,s),n.add(a)}),De(n,2.2,.15,mi-4,ie.steel,0,2.6,0),ei(n,[[-28,8.6,-15],[28,8.6,-15]],.35,ie.pipeBlue),ei(n,[[-28,8.2,-14],[28,8.2,-14]],.25,ie.pipeGreen),[-15,15].forEach(i=>ei(n,[[i,8.6,-15],[i,8.6,-7],[i,4.5,-7]],.15,ie.pipeGrey)),xt(n,-15,4.2,-7,"Broodstock tank","Hammour \xB7 60 m\xB3"),xt(n,15,4.2,8,"Photoperiod control","Light & temperature cycles"),xt(n,0,4.5,-14,"Egg collectors","Spawn harvested daily"),{bounds:e,update:i=>t.forEach(s=>s(i)),...Ui()}},hatchery(n){let e=Ni(n,{w:Ps,d:mi,h:Is,floor:ie.epoxy}),t=[];for(let s=0;s<3;s++)for(let r=0;r<6;r++){let a=-20+r*8,o=-10+s*8;Mn(n,1.7,2,ie.fiberW,a,2.2,o,32,!0),Qt(n,new xs(1.7,1.2,32,1,!0).rotateX(Math.PI),ie.fiberW,a,.6+0,o),Mn(n,1.65,1.8,new yn({color:"#45d4ee",transparent:!0,opacity:.5,emissive:"#1fb0d8",emissiveIntensity:1.1,depthWrite:!1}),a,2.15,o),[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([d,p])=>Mn(n,.07,1.2,ie.steel,a+d*1.2,.6,o+p*1.2,6));let l=60,c=new Float32Array(l*3);for(let d=0;d<l;d++){let p=Ut()*6.28,_=Ut()*1.5;c.set([Math.cos(p)*_,1.4+Ut()*1.6,Math.sin(p)*_],d*3)}let h=new yt;h.setAttribute("position",new rn(c,3));let u=new _s(h,new qi({color:"#e9fbff",size:.06}));u.position.set(a,0,o),n.add(u);let f=r%2?1:-1;t.push(d=>{u.rotation.y=d*.15*f})}ei(n,[[-28,8.5,-14],[28,8.5,-14]],.3,ie.pipeBlue);for(let s=0;s<6;s++)ei(n,[[-20+s*8,8.5,-14],[-20+s*8,8.5,6],[-20+s*8,3.6,6]],.08,ie.pipeGrey);De(n,10,2.2,1.2,ie.white,-18,1.1,14);let i=De(n,3,1.7,.1,Mt({map:pi("Hatchery"),emissiveMap:pi("Hatchery"),emissive:"#fff",emissiveIntensity:1}),-18,3.4,14.4);return i.rotation.y=Math.PI,xt(n,-20,3.8,-10,"Larval rearing tanks","Day 1\u201325 \xB7 26 \xB0C"),xt(n,12,3.8,6,"Green-water culture","Live feed dosing"),xt(n,-18,4.6,14,"Water-quality station","O\u2082 \xB7 pH \xB7 salinity"),{bounds:e,update:s=>t.forEach(r=>r(s)),...Ui()}},livefeed(n){let e=Ni(n,{w:Ps,d:mi,h:Is,floor:ie.vinyl,view:!1}),t=new kt(.32,.32,5.6,16),i=[new yn({color:"#55d36d",transparent:!0,opacity:.85,emissive:"#5dff7a",emissiveIntensity:1.4,roughness:.1}),new yn({color:"#c8b13e",transparent:!0,opacity:.85,emissive:"#ffd34d",emissiveIntensity:1.3,roughness:.1}),new yn({color:"#3fbf9a",transparent:!0,opacity:.85,emissive:"#47ffc8",emissiveIntensity:1.3,roughness:.1})];for(let a=0;a<5;a++){let o=new Yt(t,i[a%3],16);for(let l=0;l<16;l++)o.setMatrixAt(l,new Ye().makeTranslation(-22+l*2.9,3.2,-13+a*5.5));n.add(o),De(n,48,.2,.8,ie.steel,-.25,.3,-13+a*5.5),De(n,48,.12,.6,ie.steel,-.25,6.1,-13+a*5.5)}for(let a=0;a<4;a++)Qt(n,new xs(1.1,2.2,24,1,!0).rotateX(Math.PI),ie.fiberW,24,2.2,-10+a*6),Mn(n,1.05,.3,i[1],24,3.1,-10+a*6,24);n.children.filter(a=>a.isLight).forEach(a=>a.intensity*=.15);let s=new Ki("#7dff9a",30,40);return s.position.set(-6,5,-2),n.add(s),xt(n,-22,6.6,-13,"Phytoplankton photobioreactors","Nannochloropsis \xB7 Isochrysis"),xt(n,24,4,-10,"Rotifer culture cones","Zooplankton for first feeding"),xt(n,-4,6.6,9,"LED growth spectrum","24 h controlled light"),{bounds:e,update:a=>i.forEach((o,l)=>{o.emissiveIntensity=1.2+Math.sin(a*1.5+l*2)*.25}),exposure:.42,...Ui({view:{pos:new T(12,5,14),target:new T(-4,3,-4)}})}},nursery(n){let e=Ni(n,{w:Ps,d:mi,h:Is,floor:ie.epoxy}),t=[];return[-10.5,-3.5,3.5,10.5].forEach((i,s)=>{De(n,46,1.4,.3,ie.fiberW,0,.7,i-2.2),De(n,46,1.4,.3,ie.fiberW,0,.7,i+2.2),De(n,.3,1.4,4.4,ie.fiberW,-23,.7,i),De(n,.3,1.4,4.4,ie.fiberW,23,.7,i),De(n,45.6,1.2,4.1,ie.water,0,.6,i),De(n,45.6,.02,4.1,ie.waterTop,0,1.21,i),t.push(ts(n,{cx:0,cz:i,r0:-1.6,r1:1.6,y0:.35,y1:1,n:40,size:.35,color:"#a9b4ba",speed:2.2,line:20})),De(n,46,.15,.15,ie.steel,0,3.2,i);let r=De(n,1,.8,1,ie.yellow,0,2.8,i);t.push(a=>{r.position.x=Math.sin(a*.18+s)*21})}),xt(n,-16,2.6,-10.5,"Weaning raceways","Live \u2192 formulated feed"),xt(n,10,3.8,3.5,"Automatic feeders","Precision feeding on rails"),xt(n,16,2.6,10.5,"Nursery stock","Fingerlings 2\u20134 g"),{bounds:e,update:i=>t.forEach(s=>s(i)),...Ui()}},research(n){let e=Ni(n,{w:Ps,d:mi,h:Is,floor:ie.vinyl}),t=pi("Genomics"),i=pi("Water quality","#ffcf6b");for(let s=0;s<3;s++)for(let r=0;r<2;r++){let a=-14+r*20,o=-8+s*8;De(n,12,.9,2.2,ie.white,a,.45,o),De(n,12.2,.06,2.4,ie.blackTop,a,.93,o),De(n,12,1.6,.3,ie.white,a,1.75,o);for(let l=0;l<3;l++){let c=De(n,1.4,.85,.06,Mt({map:l%2?t:i,emissiveMap:l%2?t:i,emissive:"#fff",emissiveIntensity:.9}),a-4+l*4,1.5,o+.9);c.rotation.x=-.08,De(n,.3,.6,.3,ie.dark,a-2.5+l*4,1.25,o-.5),Mn(n,.12,.5,ie.dark,a-2.5+l*4,1.6,o-.35,12)}for(let l=0;l<6;l++)Mn(n,.12,.3,new yn({color:["#2ee6d6","#ffcf6b","#ff7aa2"][l%3],transparent:!0,opacity:.8,emissive:["#2ee6d6","#ffcf6b","#ff7aa2"][l%3],emissiveIntensity:.8}),a-5+l*.4,2.7,o,10)}for(let s=0;s<5;s++)De(n,.2,3.2,3.2,ie.white,-29.2,1.6,-12+s*5),De(n,1.8,3.4,3.2,ie.white,-28.3,1.7,-12+s*5).scale.set(1,1,1),De(n,.05,1.6,2.8,ie.glass,-27.35,1.9,-12+s*5),De(n,1.6,.05,2.8,Mt({color:"#fff",emissive:"#e8f6ff",emissiveIntensity:1.5}),-28.3,3,-12+s*5);return De(n,.08,3.5,20,ie.glass,20,1.75,4),xt(n,-14,3,-8,"Genomics & fish-health lab","14 labs \xB7 ISO/IEC 17025"),xt(n,-28,4,3,"Fume hoods","Chemistry & sample prep"),xt(n,6,3,8,"Water-quality analytics","Red-tide & plankton monitoring"),{bounds:e,update:s=>{t.offset.x=s*.02%1},...Ui()}},offices(n){let e=Ni(n,{w:Ps,d:mi,h:Is,floor:ie.oak}),t=pi("Operations"),i=De(n,16,6,.2,Mt({map:pi("Fingerling deliveries"),emissiveMap:pi("Fingerling deliveries"),emissive:"#fff",emissiveIntensity:1.1}),-12,4.2,-17.6);for(let s=0;s<4;s++){let r=-18+s%2*16,a=-6+Math.floor(s/2)*10;De(n,7,.08,3.4,ie.white,r,.76,a),[[-2.5,-1],[2.5,-1],[-2.5,1],[2.5,1]].forEach(([o,l])=>{De(n,.08,.76,3.4,ie.dark,r+o*1.35,.38,a);let c=De(n,1.1,.65,.05,Mt({map:t,emissiveMap:t,emissive:"#fff",emissiveIntensity:.9}),r+o*.55,1.2,a+l*.3);c.rotation.y=l>0?Math.PI:0,De(n,.6,.9,.6,ie.chair,r+o*.55,.45,a+l*1.2)}),De(n,7,.9,.05,ie.glass,r,1.2,a)}[[8,0,12,.08],[8,0,.08,10]].forEach(()=>{}),De(n,12,3.4,.08,ie.glass,20,1.7,2),De(n,.08,3.4,10,ie.glass,14,1.7,-3),De(n,7,.1,2.6,ie.oak,20,.78,-3);for(let s=0;s<6;s++)De(n,.6,.9,.6,ie.chair,17.5+s%3*2.5,.45,-3+(s<3?-2:2));for(let s=0;s<9;s++){let r=-26+s*6.4,a=14;Mn(n,.6,1,ie.pot,r,.5,a,16),Qt(n,new Ci(1.1,1),ie.plant,r,1.9,a)}return xt(n,-12,7.7,-17,"Operations video wall","Production & logistics live"),xt(n,20,3.6,-3,"Partner meeting room","Research & industry partners"),xt(n,-18,2.4,-6,"Open-plan offices","Gulf Aquaculture team"),{bounds:e,update:s=>{t.offset.x=s*.03%1},...Ui()}},plantroom(n){let e=Ni(n,{w:Ps,d:mi,h:Is,floor:ie.concrete,view:!1}),t=[];for(let s=0;s<3;s++){let r=-18+s*11;De(n,8,3.2,3.6,ie.yellow,r,1.6,-11),De(n,1.2,3.4,3.8,ie.dark,r+4.4,1.7,-11);let a=Qt(n,new kt(1.3,1.3,.1,6),ie.steel,r+5.1,1.7,-11);a.rotation.z=Math.PI/2,t.push(a),ei(n,[[r-2,3.2,-11],[r-2,8,-11],[r-2,8,-16]],.3,ie.dark)}for(let s=0;s<4;s++){let r=Mn(n,.6,5,ie.steel,0,1.4,0,24);r.rotation.z=Math.PI/2,r.position.set(12,1.2+s%2*1.6,-4+Math.floor(s/2)*3)}for(let s=0;s<3;s++)Mn(n,1.5,4,ie.fiber,22,2,-12+s*4.5);[[ie.pipeBlue,8.4],[ie.pipeGreen,7.6],[ie.pipeGrey,6.8]].forEach(([s,r],a)=>ei(n,[[-29,r,-6+a*2],[29,r,-6+a*2]],.35,s)),[-10,0,10,20].forEach(s=>ei(n,[[s,8.4,-6],[s,8.4,4],[s,2,4]],.18,ie.pipeBlue));let i=De(n,6,2.4,.6,ie.dark,-16,1.6,12);return De(n,5,1.4,.05,Mt({map:pi("Life support","#ffcf6b"),emissiveMap:pi("Life support","#ffcf6b"),emissive:"#fff",emissiveIntensity:1}),-16,1.9,11.65).rotation.y=Math.PI,xt(n,-18,4.2,-11,"Backup generators","N+1 redundancy"),xt(n,12,3.6,-1,"UV sterilisation","Pathogen control"),xt(n,22,4.6,-7.5,"Biofilters","Nitrification"),{bounds:e,update:s=>t.forEach((r,a)=>{r.rotation.x=s*12+a}),...Ui()}},pumpstation(n){let e=Ni(n,{w:44,d:30,h:10,floor:ie.concrete,view:!1}),t=[];De(n,20,.1,8,ie.dark,0,-.02,-9);let i=Uo(256,256,(s,r,a)=>{s.fillStyle="#0d5f78",s.fillRect(0,0,r,a),s.strokeStyle="rgba(160,240,255,.35)";for(let o=0;o<30;o++)s.beginPath(),s.arc(Ut()*r,Ut()*a,10+Ut()*40,0,3),s.stroke()});i.wrapS=i.wrapT=Ti,i.repeat.set(3,1.2),Qt(n,new sn(19,7).rotateX(-Math.PI/2),Mt({map:i,emissive:"#0b5f78",emissiveIntensity:.5,roughness:.05}),0,.05,-9);for(let s=-9;s<=9;s+=.8)De(n,.08,.1,8,ie.steel,s,.12,-9);for(let s=0;s<4;s++){let r=-12+s*8;Mn(n,1.1,2.4,ie.pipeBlue,r,1.2,3),Mn(n,.8,1.6,ie.steel,r,3.2,3,24),ei(n,[[r,1,3],[r,1,-5],[r,-1,-8]],.45,ie.pipeGreen),ei(n,[[r,1.2,3.8],[r,1.2,9],[r,7.5,9],[r,7.5,14.5]],.4,ie.pipeBlue)}for(let s=0;s<3;s++)Mn(n,1.6,4.2,ie.fiberW,-16+s*4,2.1,11,24);return xt(n,0,1.6,-9,"Seawater intake","Screened Gulf water"),xt(n,4,4.8,3,"Pump array","4 \xD7 duty / standby"),xt(n,-12,4.8,11,"Sand filters","Pre-filtration"),{bounds:e,update:s=>{i.offset.y=s*.05%1,i.offset.x=Math.sin(s*.3)*.05},...Ui({entry:{pos:new T(0,2.2,13.8),target:new T(0,2.2,3)},view:{pos:new T(12,7,10),target:new T(0,1,-3)}})}},visitor(n){let e=[];n.background=new Re("#dfe9ee"),Qt(n,new Ai(26,64).rotateX(-Math.PI/2),ie.stoneFloor,0,0,0);let t=new $i(1,72,24,0,Math.PI*2,0,Math.PI/2),i=t.attributes.position;for(let h=0;h<i.count;h++){let u=i.getX(h),f=i.getZ(h),d=i.getY(h),p=Math.atan2(f,u),_=1+.05*Math.abs(Math.cos(p*9))*(1-d);i.setXYZ(h,u*_,d,f*_)}t.computeVertexNormals();let s=Mt({color:"#f7f6f2",roughness:.6,side:$t,emissive:"#fff8ee",emissiveIntensity:.15});Qt(n,t,s,0,4.5,0).scale.set(26,13,26),Qt(n,new Ai(3,32).rotateX(Math.PI/2),Mt({color:"#fff",emissive:"#fff",emissiveIntensity:3}),0,17.4,0);let a=Qt(n,new kt(26,26,4.5,72,1,!0),new vn({map:(()=>{let h=_m();return h.wrapS=Ti,h.repeat.set(4,1),h})(),side:$t,toneMapped:!1}),0,2.25,0);for(let h=0;h<48;h++){let u=h/48*Math.PI*2;De(n,.15,4.5,.15,ie.dark,Math.cos(u)*25.8,2.25,Math.sin(u)*25.8)}Mn(n,6,10,ie.water,0,5.4,0,64),Mn(n,6.3,.4,ie.steel,0,.2,0,64),Mn(n,6.3,.5,ie.steel,0,10.5,0,64);let o=new Ki("#4fd8ff",40,30);o.position.set(0,6,0),n.add(o),e.push(ts(n,{cx:0,cz:0,r0:1.5,r1:5.4,y0:1.2,y1:9.5,n:70,size:.42,color:"#d9c27a",speed:1.6})),e.push(ts(n,{cx:0,cz:0,r0:2,r1:5.2,y0:1.5,y1:9,n:12,size:.9,color:"#7f8f9a",speed:.9})),[[`Restocking
the Gulf`,"Native species","#0c8fa6","#06344c"],["Hammour","Epinephelus coioides","#b5602e","#3a1a10"],[`From egg to
fingerling`,"45 days","#2b9a6a","#0e3326"],["Food security","UAE 2051","#4a5bd1","#111a4d"],["Cobia","Rachycentron canadum","#5c6e7a","#1c252b"],["Live feed","Plankton cultures","#7cae2b","#24360b"]].forEach(([h,u,f,d],p)=>{let _=-.6+p*.42+Math.PI;De(n,3.2,4.8,.12,Mt({map:mm(h,u,f,d),emissiveMap:mm(h,u,f,d),emissive:"#fff",emissiveIntensity:.6}),Math.cos(_)*18,2.6,Math.sin(_)*18).lookAt(0,2.6,0)});let c=Qt(n,new jn(4,.6,8,32,Math.PI*.7),ie.white,15,.9,6);c.rotation.x=Math.PI/2,c.rotation.z=-.4;for(let h=0;h<6;h++){let u=h/6*Math.PI*2+.3;De(n,3.2,.5,.9,ie.oak,Math.cos(u)*9.5,.25,Math.sin(u)*9.5).lookAt(0,.25,0)}return n.add(new Zi("#ffffff","#c9c2b5",.6)),xt(n,0,11.5,0,"Living aquarium","360\xB0 cylinder \xB7 native species"),xt(n,-17,5.6,2,"Exhibition: the Gulf","Science for the public"),xt(n,15,2.2,6,"Welcome desk","Schools & visitor tours"),{bounds:{min:new T(-22,.8,-22),max:new T(22,15,22)},update:h=>e.forEach(u=>u(h)),entry:{pos:new T(23,2.2,3),target:new T(10,2.6,1)},view:{pos:new T(17,6,13),target:new T(0,4,0)}}},genroom(n){let e=Ni(n,{w:44,d:30,h:10,floor:ie.concrete,view:!1}),t=[];for(let i=0;i<3;i++){let s=-12+i*12;De(n,8,3.4,3.8,ie.yellow,s,1.7,-6),De(n,1.3,3.6,4,ie.dark,s+4.6,1.8,-6);let r=Qt(n,new kt(1.4,1.4,.1,6),ie.steel,s+5.3,1.8,-6);r.rotation.z=Math.PI/2,t.push(r),ei(n,[[s-2.5,3.4,-6],[s-2.5,8.5,-6],[s-2.5,8.5,-14.5]],.35,ie.dark),De(n,8.6,.25,4.4,ie.steel,s,.12,-6)}for(let i=0;i<6;i++)De(n,1.6,2.6,1,ie.pipeGrey,-15+i*2,1.3,9);return De(n,4,3.2,3,ie.dark,14,1.6,9),De(n,3.4,1.6,.05,Mt({map:pi("Power","#ffcf6b"),emissiveMap:pi("Power","#ffcf6b"),emissive:"#fff",emissiveIntensity:1}),-8,3.4,9.52).rotation.y=Math.PI,xt(n,-12,4.6,-6,"Backup generators","N+1 \xB7 automatic start"),xt(n,-10,3.2,9,"Switchgear","Electrical distribution"),xt(n,14,3.8,9,"Transformer","Grid connection"),{bounds:e,update:i=>t.forEach((s,r)=>{s.rotation.x=i*14+r}),...Ui({entry:{pos:new T(0,2.2,13.8),target:new T(0,2.2,3)},view:{pos:new T(12,6.5,10),target:new T(-2,1.5,-4)}})}},phase1(n){let e=Ni(n,{w:Ps,d:mi,h:Is,floor:ie.epoxy}),t=[];for(let i=0;i<3;i++)for(let s=0;s<5;s++){let r=-20+s*10,a=-10+i*9;De(n,7,1.3,.25,ie.fiberW,r,.65,a-2.6),De(n,7,1.3,.25,ie.fiberW,r,.65,a+2.6),De(n,.25,1.3,5.4,ie.fiberW,r-3.5,.65,a),De(n,.25,1.3,5.4,ie.fiberW,r+3.5,.65,a),De(n,6.8,1.1,5,ie.water,r,.55,a),De(n,6.8,.02,5,ie.waterTop,r,1.11,a),t.push(ts(n,{cx:r,cz:a,r0:.6,r1:2,y0:.35,y1:.95,n:10,size:.28,color:"#b9c3c8",speed:1.2}))}return ei(n,[[-28,8.4,-15],[28,8.4,-15]],.3,ie.pipeBlue),xt(n,-20,2.4,-10,"Incubation & larval units","Phase 1 hatchery"),xt(n,10,2.4,8,"Nursery tanks","Fingerlings for UAE farms"),xt(n,20,2.4,-1,"Seabream batch","Stocked from Phase 2 eggs"),{bounds:e,update:i=>t.forEach(s=>s(i)),...Ui()}},seacages(n){n.background=new Re("#0b4a62"),n.fog=new Ua("#0d5a74",.045),n.environmentIntensity=.15;let e=[];n.add(new Zi("#bff4ff","#06303f",1.4));let t=new Es("#dffaff",1.5);t.position.set(4,20,2),n.add(t);let i=Uo(256,256,(_,m,g)=>{_.fillStyle="#5fd6ee",_.fillRect(0,0,m,g),_.strokeStyle="rgba(255,255,255,.55)",_.lineWidth=3;for(let v=0;v<26;v++){_.beginPath();let S=Ut()*m,y=Ut()*g;_.moveTo(S,y),_.bezierCurveTo(S+30,y-20,S+60,y+25,S+90,y),_.stroke()}});i.wrapS=i.wrapT=Ti,i.repeat.set(6,6);let s=Qt(n,new sn(120,120).rotateX(Math.PI/2),new vn({map:i,side:Zt,transparent:!0,opacity:.9,fog:!1}),0,10,0),r=Qt(n,new kt(14,13,18,56,14,!0),new vn({color:"#9fe3ef",wireframe:!0,transparent:!0,opacity:.28}),0,1,0);Qt(n,new jn(14,.35,8,72).rotateX(Math.PI/2),ie.dark,0,9.8,0),Qt(n,new Ai(13,48).rotateX(-Math.PI/2),new vn({color:"#0e3b4a",wireframe:!0,transparent:!0,opacity:.3}),0,-8,0);let a=new vn({color:"#c8f6ff",transparent:!0,opacity:.07,blending:Pi,depthWrite:!1,side:Zt,fog:!1}),o=[];for(let _=0;_<9;_++){let m=Qt(n,new xs(2.2+Ut()*2,26,16,1,!0),a,-10+Ut()*20,-2,-10+Ut()*20);m.rotation.z=.15-Ut()*.3,o.push(m)}e.push(ts(n,{cx:0,cz:0,r0:3,r1:10,y0:-5,y1:1,n:26,size:1.25,speed:1.1,photo:"hamour",item:"fish-hamour"})),e.push(ts(n,{cx:0,cz:0,r0:5,r1:12,y0:0,y1:6,n:40,size:.8,speed:2,photo:"shaari",item:"fish-shaari"})),e.push(ts(n,{cx:0,cz:0,r0:4,r1:11,y0:-2,y1:4,n:34,size:.75,speed:1.7,photo:"hamrah",item:"fish-hamrah"})),e.push(ts(n,{cx:0,cz:0,r0:2,r1:9,y0:2,y1:7.5,n:22,size:.95,speed:1.4,photo:"ummdrais",item:"fish-ummdrais"}));let l=[["fish-hamour","Hamour","Orange-spotted grouper"],["fish-shaari","Shaari","Spangled emperor"],["fish-hamrah","Hamrah","Red snapper"],["fish-ummdrais","Umm Drais","Reef snapper"]],c=e.slice(0,4),h=l.map(([_,m,g],v)=>{let S=xt(n,0,0,0,m,g);return S.userData.item=_,S.element.classList.add("aq-fishspot"),{o:S,sch:e[v]}});e.push(()=>h.forEach(({o:_,sch:m})=>_.position.copy(m.lead).add(new T(0,m.size*.75+.4,0))));let u=600,f=new Float32Array(u*3);for(let _=0;_<u;_++)f.set([(Ut()-.5)*30,-8+Ut()*18,(Ut()-.5)*30],_*3);let d=new yt;d.setAttribute("position",new rn(f,3));let p=new _s(d,new qi({color:"#e8fdff",size:.06,transparent:!0,opacity:.7}));return n.add(p),xt(n,0,8.6,-13,"Open-sea cage","Phase 4 \xB7 sea cage grow-out"),xt(n,-12,-2,2,"Net enclosure","Natural Gulf water exchange"),[s,...o,p].forEach(_=>{_.userData.noPick=!0,_.raycast=()=>{}}),{fish:c,bounds:{min:new T(-11,-6,-11),max:new T(11,8.8,11)},exposure:.8,update:_=>{e.forEach(m=>m(_)),i.offset.set(_*.01,_*.013),p.position.y=Math.sin(_*.2)*.4,p.rotation.y=_*.01,o.forEach((m,g)=>{m.material.opacity=.06+Math.sin(_*.7+g)*.02})},entry:{pos:new T(2,8.5,9),target:new T(0,2,0)},view:{pos:new T(2,1,3),target:new T(-4,3,-6)}}}},hh={};function vm(n,e,t){if(hh[n])return hh[n];rd||(rd=new Rs(e).fromScene(new oh,.04).texture);let i=new wi;i.environment=rd,i.environmentIntensity=.35,i.background||(i.background=new Re("#0d1217"));let s=(gm[n]||gm.offices)(i),r=s.bounds;s.update(.01);let a=ZM(i,fm(n),t);return hh[n]={scene:i,...s,items:a,bounds:new an(r.min.clone?r.min.clone():r.min,r.max.clone?r.max.clone():r.max)},hh[n]}function ZM(n,e,t){let i={},s=[];e.forEach(c=>{c.box||(c.box=[0,0,0,0,0,0]),c.box3=new an(new T(c.box[0],c.box[1],c.box[2]),new T(c.box[3],c.box[4],c.box[5])),c.vol=(c.box[3]-c.box[0])*(c.box[4]-c.box[1])*(c.box[5]-c.box[2]),c.hit=new an,i[c.key]=c,s.push(c.key)}),n.updateMatrixWorld(!0);let r=new an,a=new T,o=new T,l=c=>{let h=null;return e.forEach(u=>{!u.direct&&u.box3.containsPoint(c)&&(!h||u.vol<h.vol)&&(h=u)}),h};return n.traverse(c=>{if(c.isCSS2DObject){let u=c.userData.item&&i[c.userData.item]||l(c.position)||l(c.position.clone().setY(Math.min(c.position.y,3)));u&&(c.element.dataset.item=u.key,c.element.classList.add("aq-tag-link"),c.element.addEventListener("pointerdown",f=>f.stopPropagation()),c.element.addEventListener("click",f=>{f.stopPropagation(),t&&t(u.key)}));return}if(!(c.isMesh||c.isPoints))return;if(c.userData.item){let u=i[c.userData.item];u&&u.hit.setFromCenterAndSize(new T(0,1,0),new T(24,14,24));return}if(c.isInstancedMesh?(c.computeBoundingBox(),r.copy(c.boundingBox).applyMatrix4(c.matrixWorld)):(c.geometry.boundingBox||c.geometry.computeBoundingBox(),r.copy(c.geometry.boundingBox).applyMatrix4(c.matrixWorld)),r.getCenter(a),r.getSize(o),!c.isInstancedMesh&&Math.max(o.x,o.y,o.z)>50)return;let h=l(a);h&&(c.userData.item=h.key,h.hit.union(r))}),s.forEach(c=>{let h=i[c];h.hit.isEmpty()&&h.hit.copy(h.box3)}),i._order=s,i}function ym(){let n=null,e=!0,t=!1,i="campus",s=0,r=1;try{localStorage.getItem("aqua-sound")==="0"&&(e=!1)}catch{}let a={};function o(I,P=!0){let O=n.sampleRate*I,B=n.createBuffer(2,O,n.sampleRate);for(let H=0;H<2;H++){let ne=B.getChannelData(H),G=0,$=0,Q=0,Ee=0,Ue=0,q=0,ue=0;for(let Me=0;Me<O;Me++){let Ae=Math.random()*2-1;if(!P){ne[Me]=Ae*.5;continue}G=.99886*G+Ae*.0555179,$=.99332*$+Ae*.0750759,Q=.969*Q+Ae*.153852,Ee=.8665*Ee+Ae*.3104856,Ue=.55*Ue+Ae*.5329522,q=-.7616*q-Ae*.016898,ne[Me]=(G+$+Q+Ee+Ue+q+ue+Ae*.5362)*.11,ue=Ae*.115926}}return B}function l(I,P){let O=n.sampleRate*I,B=n.createBuffer(2,O,n.sampleRate);for(let H=0;H<2;H++){let ne=B.getChannelData(H);for(let G=0;G<O;G++)ne[G]=(Math.random()*2-1)*Math.pow(1-G/O,P)}return B}let c=(I=1)=>{let P=n.createGain();return P.gain.value=I,P},h=(I,P,O=.7)=>{let B=n.createBiquadFilter();return B.type=I,B.frequency.value=P,B.Q.value=O,B},u=(I,P,O=1.5)=>{let B=n.currentTime;I.cancelScheduledValues(B),I.setTargetAtTime(P,B,O/3)};function f(){n=new(window.AudioContext||window.webkitAudioContext),a.master=c(0),a.comp=n.createDynamicsCompressor(),a.master.connect(a.comp),a.comp.connect(n.destination),a.verb=n.createConvolver(),a.verb.buffer=l(4.5,2.6),a.verbOut=c(.55),a.verb.connect(a.verbOut),a.verbOut.connect(a.master),a.natLP=h("lowpass",18e3),a.nat=c(1),a.natLP.connect(a.nat),a.nat.connect(a.master);let I=o(6),P=o(3,!1),O=n.createBufferSource();O.buffer=I,O.loop=!0;let B=h("lowpass",520);a.seaG=c(0),O.connect(B),B.connect(a.seaG),a.seaG.connect(a.natLP),a.seaBase=c(.42),a.seaBase.connect(a.seaG.gain);let H=n.createOscillator();H.frequency.value=.085;let ne=c(.3);H.connect(ne),ne.connect(a.seaG.gain);let G=n.createOscillator();G.frequency.value=.033;let $=c(220);G.connect($),$.connect(B.frequency);let Q=n.createConstantSource?n.createConstantSource():null;Q&&(Q.connect(a.seaBase),Q.start());let Ee=n.createBufferSource();Ee.buffer=P,Ee.loop=!0;let Ue=h("bandpass",3200,.5),q=c(0);Ee.connect(Ue),Ue.connect(q),q.connect(a.natLP);let ue=c(.035);H.connect(ue),ue.connect(q.gain);let Me=n.createBufferSource();Me.buffer=I,Me.loop=!0,Me.playbackRate.value=.7;let Ae=h("bandpass",420,.9);a.windG=c(.12),Me.connect(Ae),Ae.connect(a.windG),a.windG.connect(a.natLP);let xe=n.createOscillator();xe.frequency.value=.05;let ze=c(180);xe.connect(ze),ze.connect(Ae.frequency),[O,Ee,Me,H,G,xe].forEach(oe=>oe.start()),a.padLP=h("lowpass",1400,.4),a.pad=c(0),a.padLP.connect(a.pad),a.pad.connect(a.master),a.pad.connect(a.verb),a.pad.gain.value=0;let Ct=n.createOscillator();Ct.type="sine",Ct.frequency.value=55;let ke=n.createOscillator();ke.frequency.value=110.4,a.humG=c(0),Ct.connect(a.humG);let it=c(.35);ke.connect(it),it.connect(a.humG),a.humG.connect(a.master),Ct.start(),ke.start();let st=n.createBufferSource();st.buffer=I,st.loop=!0;let ee=h("lowpass",260);a.airG=c(0),st.connect(ee),ee.connect(a.airG),a.airG.connect(a.master),st.start(),a.fx=c(1),a.fx.connect(a.master),a.fx.connect(a.verb),L()}let d=[[50,57,62,66,69,73],[47,54,59,62,66,69],[43,50,55,59,62,66],[45,52,57,61,64,69]],p=[62,64,66,69,71,74,76,78,81],_=I=>440*Math.pow(2,(I-69)/12),m=0,g=0,v=0,S=0;function y(I){let P=d[m++%d.length],O=11;P.forEach((B,H)=>{[0,1].forEach(ne=>{let G=n.createOscillator();G.type=ne?"triangle":"sine",G.frequency.value=_(B)*(ne?1.003:.998);let $=c(0);G.connect($),$.connect(a.padLP);let Q=(H===0?.05:.028)*(ne?.5:1);$.gain.setValueAtTime(0,I),$.gain.linearRampToValueAtTime(Q,I+4),$.gain.setValueAtTime(Q,I+O-3),$.gain.linearRampToValueAtTime(0,I+O+2.5),G.start(I),G.stop(I+O+3)})})}function A(I,P,O=.07){let B=n.createOscillator(),H=n.createOscillator();B.frequency.value=_(P),H.frequency.value=_(P)*4.02;let ne=c(0),G=c(0);B.connect(ne),H.connect(G),ne.connect(a.padLP),G.connect(a.padLP),ne.gain.setValueAtTime(0,I),ne.gain.linearRampToValueAtTime(O,I+.01),ne.gain.exponentialRampToValueAtTime(1e-4,I+3.2),G.gain.setValueAtTime(0,I),G.gain.linearRampToValueAtTime(O*.18,I+.005),G.gain.exponentialRampToValueAtTime(1e-4,I+.6),B.start(I),H.start(I),B.stop(I+3.4),H.stop(I+3.4)}function w(I){let P=n.createOscillator(),O=300+Math.random()*500;P.frequency.setValueAtTime(O,I),P.frequency.exponentialRampToValueAtTime(O*2.6,I+.06);let B=c(0);P.connect(B),B.connect(a.fx),B.gain.setValueAtTime(0,I),B.gain.linearRampToValueAtTime(.05,I+.008),B.gain.exponentialRampToValueAtTime(1e-4,I+.09),P.start(I),P.stop(I+.12)}function x(I){let P=n.createOscillator();P.frequency.value=4300+Math.random()*400;let O=c(0);P.connect(O),O.connect(a.nat);for(let B=0;B<3;B++){let H=I+B*.07;O.gain.setValueAtTime(0,H),O.gain.linearRampToValueAtTime(.012*s,H+.01),O.gain.linearRampToValueAtTime(0,H+.045)}P.start(I),P.stop(I+.3)}let E=null;function L(){clearInterval(E),E=setInterval(()=>{if(!n||n.state!=="running")return;let I=n.currentTime;if(I>g-.5&&(y(Math.max(I,g)),g=Math.max(I,g)+10),I>v){let P=p[Math.random()*p.length|0];A(I+.05,P),Math.random()<.4&&A(I+.45,p[Math.random()*p.length|0],.045),v=I+2.5+Math.random()*4.5}if(I>S)if(i==="under"){for(let P=0;P<2+Math.random()*5;P++)w(I+Math.random()*.8);S=I+.6+Math.random()*2}else if(i==="indoor"){if(Math.random()<.6)for(let P=0;P<3;P++)w(I+Math.random()*.5);S=I+2+Math.random()*4}else s>.4&&x(I),S=I+(s>.4?.5+Math.random()*1.5:2)},200)}function C(I=1.5){if(!n)return;let P=e?1:0;u(a.master.gain,.8*P*r,e?I:.4);let O=i==="under",B=i==="indoor";u(a.natLP.frequency,O?320:B?700:18e3,I),u(a.nat.gain,O?.9:B?.35:1,I),u(a.seaBase.gain,(O?.6:.42)*(1-s*.25),I),u(a.windG.gain,O?0:.12*(1-s*.4),I),u(a.pad.gain,O?.7:B?.85:1,I),u(a.padLP.frequency,O?650:1400-s*500,I),u(a.humG.gain,B?.035:O?.05:0,I),u(a.airG.gain,B?.1:O?.25:0,I)}function D(){e&&(n||f(),n.state!=="running"&&n.resume(),t||(t=!0,g=n.currentTime+.3,C(3)))}let z=I=>{I&&I.target&&I.target.closest&&I.target.closest('[data-act="sound"]')||e&&D()};return["pointerdown","keydown","touchend"].forEach(I=>window.addEventListener(I,z,{passive:!0})),{get enabled(){return e},get playing(){return e&&t},start:D,setEnabled(I){e=!!I;try{localStorage.setItem("aqua-sound",e?"1":"0")}catch{}e&&D(),C(1)},setEnv(I){i=I,C(2)},setNight(I){Math.abs(I-s)>.02&&(s=I,C(2))},duck(I){r=I?.15:1,C(.8)}}}var Sn=ym(),Fo=null;function KM(){if(!Fo&&!Do.startsWith("data:")&&Do.length<300&&(Fo=Do),!Fo){let n=atob(Do),e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);Fo=URL.createObjectURL(new Blob([e],{type:"video/mp4"}))}return Fo}var fa={title:"Sheikh Khalifa Marine Research Center",brand:"Marine Research Center",intro:!1,kicker:"Operated by Gulf Aquaculture since November 2025",subtitle:"Umm Al Quwain \xB7 UAE \u2014 Interactive Masterplan"},Ln=[{id:"visitor",name:"Education & Visitor Center",tag:"Public \xB7 Education",desc:"The Marine Innovation Park: alongside the hatchery and nursery, SKMRC hosts a science discovery division for research and younger audiences.",stats:[["Innovation","Park"],["Science","Discovery division"],["Schools","& young audiences"]],script:"Innovation at its heart.",bullets:["Marine Innovation Park","Science discovery division","Academic spaces & staff canteen"]},{id:"research",name:"Research & Administration Wing",tag:"R&D \xB7 Offices",desc:"Fourteen dedicated laboratories for diagnostics, microbiology and water quality, with the offices of the Gulf Aquaculture team.",stats:[["14","Labs \xB7 ISO/IEC 17025"],["1,200 m\xB2","Office space"],["Canteen","& academic spaces"]],script:"Science behind every fish.",bullets:["Microbial testing: viruses, bacteria, parasites","Water-quality parameters","Provisioned for ISO/IEC 17025"]},{id:"nursery",name:"Weaning & Nursery",tag:"Hatchery Building \xB7 West",desc:"Nursery and weaning halls where juveniles move from live feed to formulated diets and grow into healthy fry.",stats:[["20 M","Fry target 2026"],["Hamour","Red Snapper \xB7 Sheri"],["Weaning","Live \u2192 dry feed"]],script:"Grown with patience.",bullets:["Currently focusing on Hamour, Red Snapper and Sheri","Target production of 20 million fry in 2026"]},{id:"hatchery",name:"Larval Rearing Hall",tag:"Hatchery Building \xB7 Phase 2",desc:"Biosecure larval rearing systems in the Phase 2 hatchery, with offices, producing three species throughout the year.",stats:[["20 M+","Larvae / year"],["3","Species / year"],["26","RAS systems"]],script:"Where life begins.",bullets:["Production of 3 species throughout the year","Annual capacity of 20+ million larvae","~18,000 m\xB2 of hatchery space in two phases"]},{id:"livefeed",name:"Live Feed & Labs",tag:"Hatchery Building \xB7 East",desc:"Sustainable feed systems: live feed and algae rooms producing the microscopic food larvae need in their first days.",stats:[["7","Live algae species"],["3","Live feeds"],["Year-round","Production"]],script:"Tiny food, big future.",bullets:["Rotifers, Artemia and Copepods","7 species of live algae, year-round"]},{id:"broodstock",name:"Broodstock Building",tag:"Production \xB7 Sea water intake",desc:"In SKMRC the team manages and breeds the broodstocks of native and commercial Gulf species, fed by the sea water intake room.",stats:[["7","Broodstock species"],["Year-round","Spawning"],["Intake","Sea water room"]],script:"Strong parents, strong stock.",bullets:["Seabream, Hamour, Shaari, Mangrove Snapper","Mullet, Cobia and Naisrah"]},{id:"plantroom",name:"Plant Room",tag:"Infrastructure",desc:"Water treatment and life-support systems that keep every tank of the hatchery running around the clock.",stats:[["24/7","Life support"],["Water","Treatment"],["RAS","Filtration"]],script:"Quietly keeping it all alive.",bullets:["Water treatment & filtration","Life support for every tank"]},{id:"genroom",name:"Generator Room",tag:"Infrastructure",desc:"Back-up generators, switchgear and the transformer that guarantee power to the life-support systems.",stats:[["Backup","Power"],["Transformer","Grid link"],["Fire","Water tank"]],script:"Never a moment off.",bullets:["Back-up generators","Transformer & switchgear"]},{id:"phase1",name:"Phase 1 Hatchery",tag:"Existing buildings",desc:"Production stream one of SKMRC: nursery, weaning and offices, hatchery and broodstock halls with their own plant room, header tanks and generator room.",stats:[["Phase 1","Production stream"],["Header","Tanks"],["18,000 m\xB2","Hatchery \xB7 2 phases"]],script:"Where it all started.",bullets:["Nursery, weaning & office","Hatchery and broodstock halls","Plant room, header tanks & generator room"]},{id:"seacages",name:"Sea Cage Grow-Out",tag:"Phase 4 \xB7 Open sea",desc:"Circular open-sea cages where fingerlings from the hatchery grow to market size in the natural Gulf environment, linked to shore by floating walkways.",stats:[["Phase 4","Grow-out"],["Open sea","Cages"],["Local","Species"]],script:"Back to the Gulf.",bullets:["Phase 4 \xB7 sea cage grow-out","Fish raised in their natural environment"]}];Ln.forEach((n,e)=>n.n=String(e+1).padStart(2,"0"));var Pe=document.getElementById("aqua-app"),Eh=Pe.querySelector(".aq-stage"),Dn=new Kc({antialias:!0,powerPreference:"high-performance"}),pa=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<820,hd=Math.min(window.devicePixelRatio,pa?1.5:2),ns=hd;Dn.setPixelRatio(ns);Dn.toneMapping=er;Dn.toneMappingExposure=.55;Dn.shadowMap.enabled=!0;Dn.shadowMap.type=js;Eh.appendChild(Dn.domElement);var ni=new th;ni.domElement.className="aq-labels";Eh.appendChild(ni.domElement);var We=new wi,wm=new Re("#e3d7c4"),JM=new Re("#141c33");We.fog=new Fa(wm.clone(),420,2300);var Ge=new An(38,1,1,9e3),pr={pos:new T(-320,185,105),target:new T(0,0,-40)};Ge.position.set(-900,620,900);var ct=new eh(Ge,ni.domElement);ct.enableDamping=!0;ct.dampingFactor=.06;ct.maxPolarAngle=1.38;ct.minDistance=30;ct.maxDistance=750;ct.target.copy(pr.target);ct.autoRotateSpeed=.35;ct.enabled=!1;var Am=new Zi("#cfe6ff","#c9b48e",.9);We.add(Am);var On=new Es("#ffe2b8",3.2);On.castShadow=!0;On.shadow.mapSize.set(pa?2048:4096,pa?2048:4096);On.shadow.camera.left=-250;On.shadow.camera.right=250;On.shadow.camera.top=220;On.shadow.camera.bottom=-220;On.shadow.camera.near=10;On.shadow.camera.far=900;On.shadow.bias=-4e-4;On.shadow.normalBias=.6;We.add(On,On.target);var cr=new Ro;cr.scale.setScalar(6e3);var Yo=cr.material.uniforms;Yo.turbidity.value=7;Yo.rayleigh.value=1.8;Yo.mieCoefficient.value=.006;Yo.mieDirectionalG.value=.82;We.add(cr);var Ho=new T,jM=ft.degToRad(300);function bd(n){let e=ft.degToRad(90-n);Ho.setFromSphericalCoords(1,e,jM),Yo.sunPosition.value.copy(Ho);let t=Ho.clone();t.y<.25&&(t.y=.25+(.25-t.y)),On.position.copy(t.normalize().multiplyScalar(450))}var QM=new Rs(Dn);function Rm(n){bd(n);let e=new wi;We.remove(cr),e.add(cr);let t=QM.fromScene(e,0,1,1e4);return e.remove(cr),We.add(cr),t.texture}var Td=16,Cm=-4.5,Mm=null,Pm=()=>Mm||(Mm=Rm(Cm)),Im=Rm(Td);setTimeout(()=>(window.requestIdleCallback||(n=>n()))(()=>Pm()),6e3);We.environment=Im;We.environmentIntensity=.6;var wt=(n,e)=>new Z(n,e);function Lm(n,e,t,i,s){let r=new Ri;return r.moveTo(n+s,e),r.lineTo(t-s,e),r.quadraticCurveTo(t,e,t,e+s),r.lineTo(t,i-s),r.quadraticCurveTo(t,i,t-s,i),r.lineTo(n+s,i),r.quadraticCurveTo(n,i,n,i-s),r.lineTo(n,e+s),r.quadraticCurveTo(n,e,n+s,e),r}function bh(n,e,t,i=12){let s=new to(n,i);s.rotateX(Math.PI/2);let r=s.index.array;for(let l=0;l<r.length;l+=3){let c=r[l+1];r[l+1]=r[l+2],r[l+2]=c}let a=s.attributes.normal;for(let l=0;l<a.count;l++)a.setXYZ(l,0,1,0);let o=new be(s,t);return o.position.y=e,o.receiveShadow=!0,o}function si(n,e,t=!1,i=8){let s=[],r=n.length;for(let a=0;a<r;a++){let o=n[a],l=t||a>0,c=t||a<r-1;if(!l||!c){s.push(o.clone());continue}let h=n[(a-1+r)%r],u=n[(a+1)%r],f=h.clone().sub(o),d=u.clone().sub(o),p=f.length(),_=d.length(),m=Math.min(e,p/2,_/2);if(f.normalize(),d.normalize(),Math.abs(f.dot(d))>.995){s.push(o.clone());continue}let g=o.clone().addScaledVector(f,m),v=o.clone().addScaledVector(d,m);for(let S=0;S<=i;S++){let y=S/i,A=1-y;s.push(new Z(A*A*g.x+2*A*y*o.x+y*y*v.x,A*A*g.y+2*A*y*o.y+y*y*v.y))}}return s}function Fs(n,e,t=!1){let i=t?[...n,n[0]]:n,s=[i[0].clone()],r=0;for(let a=0;a<i.length-1;a++){let o=i[a],l=i[a+1],c=o.distanceTo(l),h=e-r;for(;h<=c;)s.push(o.clone().lerp(l,h/c)),h+=e;r=c-(h-e)}return t&&s.length>1&&s[s.length-1].distanceTo(s[0])<e*.5&&s.pop(),s}function wd(n,e){let t=n.length;return n.map((i,s)=>{let r=n[e?(s-1+t)%t:Math.max(s-1,0)];return n[e?(s+1)%t:Math.min(s+1,t-1)].clone().sub(r).normalize()})}function mh(n,e,t){let i=wd(n,t);return n.map((s,r)=>new Z(s.x-i[r].y*e,s.y+i[r].x*e))}function ud(n,e,t=!1){let i=wd(n,t),s=[],r=[],a=[],o=0;n.forEach((f,d)=>{d>0&&(o+=f.distanceTo(n[d-1]));let p=-i[d].y*e/2,_=i[d].x*e/2;s.push(f.x+p,0,f.y+_,f.x-p,0,f.y-_),r.push(0,o/e,1,o/e)});let l=n.length,c=t?l:l-1;for(let f=0;f<c;f++){let d=f*2,p=(f+1)%l*2;a.push(d,p,d+1,d+1,p,p+1)}let h=new yt;h.setAttribute("position",new $e(s,3)),h.setAttribute("uv",new $e(r,2)),h.setIndex(a),h.computeVertexNormals();let u=h.attributes.normal;for(let f=0;f<u.count;f++)u.setXYZ(f,0,1,0);return h}var pt=(()=>{let n=1337;return()=>(n=n*16807%2147483647)/2147483647})(),He={sand:new je({color:"#d2c9b4",roughness:1}),concrete:new je({color:"#b3b1aa",roughness:.95}),grass:new je({color:"#6f9a4c",roughness:1}),asphalt:new je({color:"#2a2c30",roughness:.85}),brick:new je({color:"#9a4b3a",roughness:.9}),stone:new je({color:"#e4e0d6",roughness:.8}),paint:new je({color:"#f4f4f0",roughness:.6,emissive:"#ffffff",emissiveIntensity:.05}),white:new je({color:"#f6f5f1",roughness:.55}),roof:new je({color:"#dcdcd7",roughness:.8}),dark:new je({color:"#2b3036",roughness:.5,metalness:.4}),metal:new je({color:"#b9c0c6",roughness:.35,metalness:.8}),solar:new je({color:"#1b2c4d",roughness:.25,metalness:.6}),palmLeaf:new je({color:"#4f7d33",roughness:.9,side:Zt}),trunk:new je({color:"#8a6a48",roughness:1}),tree:new je({color:"#5f8d3e",roughness:.95,flatShading:!0}),redTree:new je({color:"#c0392b",roughness:.9,flatShading:!0}),window:new je({color:"#28414f",roughness:.15,metalness:.6,emissive:"#ffcf8a",emissiveIntensity:0}),bulb:new je({color:"#fff4dc",emissive:"#ffd7a0",emissiveIntensity:.2}),glass:new yn({color:"#9fd6f0",roughness:.05,metalness:.2,transparent:!0,opacity:.45,emissive:"#ffcc88",emissiveIntensity:0,envMapIntensity:1.5}),hdpe:new je({color:"#1d2125",roughness:.6}),net:new je({color:"#0e2a33",roughness:1,transparent:!0,opacity:.55,side:Zt,depthWrite:!1})};function eS(){let n=document.createElement("canvas");n.width=256,n.height=128;let e=n.getContext("2d");e.fillStyle="#f3f2ee",e.fillRect(0,0,256,128);for(let i=0;i<256;i+=8)e.fillStyle="rgba(0,0,0,0.07)",e.fillRect(i,0,2,128),e.fillStyle="rgba(255,255,255,0.6)",e.fillRect(i+2,0,1,128);e.fillStyle="rgba(0,0,0,0.10)",e.fillRect(0,124,256,4);let t=new Ys(n);return t.wrapS=t.wrapT=Ti,t.colorSpace=pn,t.anisotropy=8,t}var tS=eS(),Jt=(n,e)=>new Z((n-700)*.25,(e-600)*.25),dd=112,zo=185,Fn={p:new Z(-51,-162),d:new Z(.802,.597),n:new Z(.597,-.802)},nS=Xn.merge([ye.fog,{uTime:{value:0},uNight:{value:0},uSunDir:{value:new T}}]),Dm=new be(new sn(9e3,9e3,pa?110:220,pa?110:220).rotateX(-Math.PI/2),new Wt({uniforms:nS,fog:!0,vertexShader:`
      uniform float uTime; varying vec3 vW;
      #include <fog_pars_vertex>
      void main(){
        vec4 wp = modelMatrix * vec4(position,1.0);
        wp.y += sin(wp.x*0.035+uTime*0.7)*0.35 + sin(wp.z*0.05-uTime*0.9)*0.25;
        vW = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uTime; uniform float uNight; uniform vec3 uSunDir; varying vec3 vW;
      #include <common>
      #include <fog_pars_fragment>
      float sdRB(vec2 p, vec2 b, float r){ vec2 q=abs(p)-b+r; return length(max(q,0.))+min(max(q.x,q.y),0.)-r; }
      float sdB(vec2 p, vec2 b){ vec2 q=abs(p)-b; return length(max(q,0.))+min(max(q.x,q.y),0.); }
      float h21(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float a=.5, s=0.; for(int i=0;i<4;i++){ s+=a*vn(p); p*=2.03; a*=.5; } return s; }
      void main(){
        vec2 p = vW.xz;
        float a1 = p.y - ${(dd+5).toFixed(1)}, a2 = p.x - ${(zo+5).toFixed(1)};
        float a3 = dot(p - vec2(${Fn.p.x.toFixed(2)}, ${Fn.p.y.toFixed(2)}), vec2(${Fn.n.x.toFixed(3)}, ${Fn.n.y.toFixed(3)})) - 5.0;
        float k = 12.0; float d = k * log(exp(a1 / k) + exp(a2 / k) + exp(a3 / k)); // smooth max \u2192 rounded tip
        // normal from layered waves
        float t = uTime;
        vec2 g = vec2(0.);
        g += vec2(0.035,0.0)*cos(p.x*0.035+t*0.7)*0.35*3.;
        g += vec2(0.0,0.05)*cos(p.y*0.05-t*0.9)*0.25*3.;
        float n1 = fbm(p*0.08+vec2(t*0.12,t*0.07));
        float n2 = fbm(p*0.08+vec2(0.37,0.11)+vec2(t*0.12,t*0.07));
        float n3 = fbm(p*0.08+vec2(0.11,0.37)+vec2(t*0.12,t*0.07));
        g += vec2(n2-n1, n3-n1)*2.2;
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        vec3 V = normalize(cameraPosition - vW);
        // colours
        vec3 shallow = vec3(0.36,0.86,0.80);
        vec3 mid = vec3(0.07,0.58,0.66);
        vec3 deep = vec3(0.03,0.27,0.42);
        float s1 = smoothstep(0., 22., d), s2 = smoothstep(18., 160., d);
        vec3 col = mix(shallow, mid, s1);
        col = mix(col, deep, s2);
        // caustic shimmer in shallows
        float caus = pow(fbm(p*0.25+vec2(t*0.3,-t*0.2)),3.)*1.6*(1.-s1);
        col += caus*vec3(0.5,0.9,0.85);
        // sky reflection + fresnel
        float fr = pow(1.-max(dot(N,V),0.),4.);
        vec3 skyC = mix(vec3(0.62,0.80,0.93), vec3(0.08,0.12,0.26), uNight);
        col = mix(col, skyC, fr*0.65);
        // sun / moon glint
        vec3 L = normalize(vec3(uSunDir.x, max(uSunDir.y,0.18), uSunDir.z));
        vec3 H = normalize(L+V);
        float spec = pow(max(dot(N,H),0.), 420.);
        col += spec * mix(vec3(1.0,0.86,0.62)*5., vec3(0.7,0.8,1.0)*2., uNight);
        // shore foam + breaking rings
        float fn = fbm(p*0.35+vec2(t*0.4,t*0.25));
        float band = 1.-smoothstep(0.,3.2+fn*2.,d);
        float rings = smoothstep(0.82,1.,sin(d*0.55 - t*1.6)*0.5+0.5)*(1.-smoothstep(3.,22.,d))*smoothstep(0.35,0.7,fn);
        float foam = clamp(band + rings*0.7,0.,1.);
        col = mix(col, vec3(0.97), foam*0.9);
        // night
        col *= mix(1.0, 0.16, uNight);
        col += foam*uNight*0.03;
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}));We.add(Dm);var ad=Dm.material.uniforms;{let e=Fn.p.y+(zo-Fn.p.x)/Fn.d.x*Fn.d.y,t=Fn.p.clone().addScaledVector(Fn.d,-3e3),i=si([wt(-3e3,dd),wt(zo,dd),wt(zo,e),t,wt(-3e3,t.y)],24,!0,10),s=new Ri(i),r=new Qa(s,{depth:6,bevelEnabled:!0,bevelThickness:2.5,bevelSize:5,bevelSegments:4,curveSegments:24});r.rotateX(Math.PI/2);let a=new be(r,He.sand);a.position.y=.6,a.receiveShadow=!0,We.add(a)}var tt=3.15,Ad=(n,e=0)=>-150+(n+60)*.744+e;We.add(bh(new Ri(si([wt(-178,104),wt(170,104),wt(170,Ad(170)),wt(-93.6,-175),wt(-178,-175)],10,!0)),tt+.02,He.concrete));[[-158,-112,-121,-55,10],[-113,-78,-90,-58,3],[-152.5,-42.5,-122.5,16.25,4],[-175,26,-164,98,2],[104,27,128,98,3]].forEach(([n,e,t,i,s])=>We.add(bh(Lm(n,e,t,i,s),tt+.03,He.grass)));{let n=new Wa(1,0),e=new Yt(n,new je({color:"#8d8679",roughness:1,flatShading:!0}),900),t=0;for(let i=-320;i<zo-8;i+=1.4)for(let s=0;s<3&&!(t>=900);s++){let r=.9+pt()*1.1;e.setMatrixAt(t++,new Ye().compose(new T(i+pt(),tt-.6-s*.9,106+s*2.4+pt()),new Bt().setFromEuler(new _n(pt()*3,pt()*3,0)),new T(r*1.4,r,r*1.2)))}e.count=t,e.receiveShadow=e.castShadow=!0,We.add(e)}var ur=tt+.08,fd=new mn;We.add(fd);var pd=[],dh=[];function as(n,{width:e=7,closed:t=!1,walk:i=2.2,dash:s=!0,lamps:r=0}={}){let a=Fs(n,1.5,t);if(i>0){let c=new be(ud(a,e+i*2,t),He.brick);c.position.y=ur-.03,c.receiveShadow=!0,fd.add(c)}let o=new be(ud(a,e,t),He.asphalt);o.position.y=ur,o.receiveShadow=!0,fd.add(o);let l=wd(a,t);if(s&&a.forEach((c,h)=>{h%4===0&&pd.push(new Ye().compose(new T(c.x,ur+.03,c.y),new Bt().setFromEuler(new _n(0,Math.atan2(-l[h].y,l[h].x),0)),new T(1,1,1)))}),r){let c=Math.round(r/1.5);a.forEach((h,u)=>{if(u%c!==0)return;let f=u/c%2?1:-1,d=e/2+i*.6;dh.push(new T(h.x-l[u].y*d*f,tt,h.y+l[u].x*d*f))})}return a}var vt={x:-160,z:-50,r:11},dr={x:130,z:91.25,r:10};as([wt(-900,vt.z),wt(vt.x-vt.r,vt.z)],{lamps:20});as([wt(vt.x,vt.z+vt.r),wt(vt.x,100.75)],{lamps:18});var Nm=[Jt(105,405),Jt(590,410),Jt(650,385),Jt(720,316)];as(si(Nm,10),{lamps:16});var Rd=[Jt(720,316),Jt(1150,620),Jt(1200,680),Jt(1218,740),Jt(1218,925)];as(si(Rd,14),{lamps:16});as(si([wt(vt.x,21.25),Jt(1080,685),Jt(1105,710),Jt(1105,1003)],10),{lamps:18});as(si([wt(vt.x-20,100.75),Jt(1190,1003),wt(dr.x-2,dr.z+dr.r-.5)],8),{lamps:18});as([Jt(225,418),Jt(225,680)],{width:6,lamps:14});as(new $s([wt(vt.x,vt.z-vt.r),wt(-163,-68),wt(-150,-76),wt(-142,-70),wt(-133,-82),wt(-126,-92)]).getPoints(40),{width:6,dash:!1,lamps:12});function Um(n,e){let t=[];for(let r=0;r<64;r++){let a=r/64*Math.PI*2;t.push(wt(n.x+Math.cos(a)*n.r,n.z+Math.sin(a)*n.r))}as(t,{closed:!0,width:e,walk:1.6,dash:!1});let i=new be(new kt(n.r-e/2,n.r-e/2,.5,48),He.grass);i.position.set(n.x,ur+.1,n.z),i.receiveShadow=!0,We.add(i);let s=new be(new jn(n.r-e/2,.35,8,64),He.brick);s.rotation.x=Math.PI/2,s.position.set(n.x,ur+.25,n.z),We.add(s)}Um(vt,7);Um(dr,7);{We.add(bh(new Ri(si([Jt(375,300),Jt(470,255),Jt(560,385),Jt(380,395)],3,!0)),ur-.01,He.asphalt.clone()));for(let n=0;n<12;n++){let e=Jt(395+n*13,330+n*2.5),t=new be(new sn(.25,5.5).rotateX(-Math.PI/2),He.paint);t.position.set(e.x,ur+.02,e.y),t.rotation.y=-.5,We.add(t)}}{let n=new je({color:"#d0302a",emissive:"#ff2a1f",emissiveIntensity:.25}),e=new be(ud(Fs([wt(-93.6,-175),wt(170,Ad(170))],1),.8),n);e.position.y=tt+.06,We.add(e)}{let n=new sn(2.6,.35).rotateX(-Math.PI/2),e=new Yt(n,He.paint,pd.length);pd.forEach((t,i)=>e.setMatrixAt(i,t)),We.add(e)}var Wo=[],$n={},md=[];function Th(n,e,t,i,s){let r=[];e.traverse(a=>{a.isMesh&&(a.userData.bid=n,Wo.push(a),a.material&&a.material.userData&&a.material.userData.highlight&&r.push(a.material))}),$n[n]={group:e,mats:r,center:t,size:i,pinY:s},e.scale.y=.001}function Fm(n){let e=tS.clone();e.needsUpdate=!0,e.repeat.set(Math.max(1,Math.round(n/6)),1);let t=new je({map:e,color:"#ffffff",roughness:.6,emissive:"#2ee6d6",emissiveIntensity:0});return t.userData.highlight=!0,t}function Om(){let n=He.roof.clone();return n.emissive=new Re("#2ee6d6"),n.emissiveIntensity=0,n.userData.highlight=!0,n}function gi(n,e,t,i){let s=new be(new zt(n,e,t),i);return s.castShadow=s.receiveShadow=!0,s}function _r(n,e,t={}){let i=e.flatMap(_=>[_.x0,_.x1]),s=e.flatMap(_=>[_.z0,_.z1]),r=Math.min(...i),a=Math.max(...i),o=Math.min(...s),l=Math.max(...s),c=(r+a)/2,h=(o+l)/2,u=new mn;u.position.set(c,tt,h);let f=Math.max(...e.map(_=>_.h)),d=Fm(Math.max(a-r,l-o)),p=Om();return e.forEach(_=>{let m=_.x1-_.x0,g=_.z1-_.z0,v=(_.x0+_.x1)/2-c,S=(_.z0+_.z1)/2-h,y=gi(m,_.h,g,[d,d,p,p,d,d]);y.position.set(v,_.h/2,S),u.add(y);let A=gi(m+.4,.8,g+.4,[d,d,p,p,d,d]);A.scale.set(1,1,1),A.position.set(v,_.h+.2,S);let w=gi(m-1.2,.9,g-1.2,p);w.position.set(v,_.h+.25,S),u.add(A,w);let x=1.3,E=_.h*.62;if(m>=g){[-1,1].forEach(C=>{let D=gi(m*.86,x,.3,He.window);D.position.set(v,E,S+C*(g/2+.05)),u.add(D),md.push(D)});for(let C=0;C<Math.floor(m/9);C++){let D=gi(3.2,4,.25,He.dark);D.position.set(v-m/2+5+C*9,2,S+(g/2+.06)),u.add(D)}}else[-1,1].forEach(C=>{let D=gi(.3,x,g*.86,He.window);D.position.set(v+C*(m/2+.05),E,S),u.add(D),md.push(D)});let L=Math.floor(m*g/260);for(let C=0;C<L;C++){let D=gi(2+pt()*2,1.2+pt(),2+pt()*1.5,He.metal);D.position.set(v+(pt()-.5)*(m-8),_.h+.9,S+(pt()-.5)*(g-8)),u.add(D)}if(t.solar){let C=Math.floor((g-6)/3.2),D=Math.floor((m-8)/2.4),z=new zt(2.1,.12,2.6),I=new Yt(z,He.solar,C*D);I.castShadow=!0;let P=0,O=new Bt().setFromEuler(new _n(-.32,0,0));for(let B=0;B<C;B++)for(let H=0;H<D;H++)I.setMatrixAt(P++,new Ye().compose(new T(v-m/2+5+H*2.4,_.h+1,S-g/2+4.5+B*3.2),O,new T(1,1,1)));u.add(I)}}),We.add(u),Th(n,u,new T(c,tt,h),Math.max(a-r,l-o),f+9),u}_r("nursery",[{x0:-113.75,x1:-57.5,z0:-34.5,z1:.5,h:10}]);_r("hatchery",[{x0:-57.5,x1:-15,z0:-34.5,z1:.5,h:10},{x0:-38.75,x1:-15,z0:.5,z1:15,h:7}]);_r("livefeed",[{x0:-15,x1:1.25,z0:-34.5,z1:.5,h:10},{x0:-15,x1:1.25,z0:.5,z1:15,h:7}]);_r("broodstock",[{x0:3.75,x1:50,z0:-32.5,z1:13.75,h:12},{x0:25,x1:32.5,z0:-41.25,z1:-32.5,h:7}]);_r("plantroom",[{x0:50,x1:71.25,z0:-16.25,z1:10,h:9}]);_r("genroom",[{x0:80,x1:91.25,z0:1.25,z1:12.5,h:5.5}]);_r("phase1",[{x0:-140,x1:-57.5,z0:36.25,z1:75,h:11},{x0:-57.5,x1:-25,z0:32.5,z1:90,h:11},{x0:-16.25,x1:32.5,z0:31.25,z1:62.5,h:10},{x0:-12.5,x1:38.75,z0:66.25,z1:90,h:9},{x0:46.25,x1:93.75,z0:31.25,z1:53.75,h:10},{x0:51.25,x1:93.75,z0:70,z1:85,h:8}]);$n.phase1.pinY=20;{let n=$n.livefeed;He.algae=new yn({color:"#57c46a",roughness:.15,transparent:!0,opacity:.75,emissive:"#5dff7a",emissiveIntensity:.05}),He.algaeB=new yn({color:"#c9a640",roughness:.15,transparent:!0,opacity:.75,emissive:"#ffcf4d",emissiveIntensity:.05});let e=new kt(.8,.8,6,16);for(let t=0;t<5;t++){let i=new be(e,t%2?He.algae:He.algaeB);i.castShadow=!0,i.position.set(-6+t*3,3,-26.5),i.userData.bid="livefeed",n.group.add(i),Wo.push(i)}}[[108.75,33.75,116.25,42.5,4],[111,47.5,125,58.75,5],[-7.5,-61,5,-48.75,6],[92,4,98,10,3.5]].forEach(([n,e,t,i,s])=>{let r=new be(new zt(t-n,s,i-e),He.white);r.castShadow=r.receiveShadow=!0,r.position.set((n+t)/2,tt+s/2,(e+i)/2),We.add(r)});{let n=new be(new zt(16,3,13),He.concrete);n.position.set(149,tt+1.5,72),n.castShadow=!0,We.add(n),[[145,72],[153,72]].forEach(([e,t])=>{let i=new be(new kt(3,3,4.5,24),He.white);i.position.set(e,tt+3+2.25,t),i.castShadow=!0,We.add(i)})}{let n=new Z(-55,-95),e=Math.atan2(.714,1),t=new Z(Math.cos(e),Math.sin(e)),i=new Z(t.y,-t.x),s=new mn;s.position.set(n.x,tt,n.y),s.rotation.y=-e;let r=Fm(80),a=Om();[[0,7,88,11,9],[-8,-11.5,64,9,9]].forEach(([c,h,u,f,d])=>{let p=gi(u,d,f,[r,r,a,a,r,r]);p.position.set(c,d/2,-h),s.add(p),[-1,1].forEach(m=>{let g=gi(u*.88,1.6,.3,He.window);g.position.set(c,d*.55,-h+m*(f/2+.05)),s.add(g),md.push(g)});let _=gi(u+.4,.8,f+.4,[r,r,a,a,r,r]);_.position.set(c,d+.2,-h),s.add(_)});let o=bh(Lm(-40,-3.5,36,3,1),.04,He.grass);o.position.y=.04,s.add(o);let l=new Yt(new Ci(2.2,1),He.redTree,11);l.castShadow=!0;for(let c=0;c<11;c++)l.setMatrixAt(c,new Ye().compose(new T(-34+c*6.5,3.6,-.3+(c%2?1:-1)),new Bt,new T(.9,1,.9)));s.add(l),We.add(s),Th("research",s,new T(n.x,tt,n.y),70,18),$n.research.dir=t,$n.research.nrm=i}var St={x:-107.5,z:-108.75,rx:16,rz:16,h:13,base:4.5};{let n=new mn;n.position.set(St.x,tt,St.z);let e=new be(new kt(23.5,23.5,.3,72),He.stone);e.position.y=.1,e.receiveShadow=!0,n.add(e);let t=new be(new jn(23.5,.4,8,96),He.brick);t.rotation.x=Math.PI/2,t.position.y=.25,n.add(t);let i=new be(new kt(1,1,St.base,72,1,!0),He.glass);i.scale.set(St.rx*.93,1,St.rz*.93),i.position.y=St.base/2+.25,n.add(i);let s=new be(new kt(1,1,St.base-.2,48),new je({color:"#d8cbb3",emissive:"#ffb86b",emissiveIntensity:0}));s.scale.set(St.rx*.7,1,St.rz*.7),s.position.y=St.base/2+.25,n.add(s),He.domeCore=s.material;let r=new zt(.25,St.base,.25),a=new Yt(r,He.metal,64);for(let m=0;m<64;m++){let g=m/64*Math.PI*2;a.setMatrixAt(m,new Ye().makeTranslation(Math.cos(g)*St.rx*.935,St.base/2+.25,Math.sin(g)*St.rz*.935))}n.add(a);let o=160,l=40,c=[],h=[];for(let m=0;m<=l;m++){let g=m/l,v=g*Math.PI/2;for(let S=0;S<=o;S++){let y=S/o*Math.PI*2,A=1+.07*Math.pow(Math.abs(Math.cos(y*9)),.5)*Math.pow(Math.cos(v),.7)-.035,w=1+.06*(1-g)*(.5+.5*Math.cos(y)),x=Math.cos(v)*A*w,E=St.rx*Math.cos(y)*x-Math.sin(v)*4.5,L=St.rz*Math.sin(y)*x,C=St.base+.2+St.h*Math.sin(v)*(1+.08*Math.cos(y));c.push(E,C,L)}}for(let m=0;m<l;m++)for(let g=0;g<o;g++){let v=m*(o+1)+g,S=v+o+1;h.push(v,S,v+1,v+1,S,S+1)}let u=new yt;u.setAttribute("position",new $e(c,3)),u.setIndex(h),u.computeVertexNormals();let f=new yn({color:"#fbfaf6",roughness:.45,sheen:.6,sheenColor:new Re("#fff2dd"),clearcoat:.3,side:Zt,emissive:"#2ee6d6",emissiveIntensity:0});f.userData.highlight=!0;let d=new be(u,f);d.castShadow=!0,d.receiveShadow=!0,n.add(d);let p=new be(new jn(1,.012,8,120),He.white);p.scale.set(St.rx*1.02,St.rz*1.02,30),p.rotation.x=Math.PI/2,p.position.y=St.base+.2,n.add(p);let _=gi(4,.5,9,He.white);_.position.set(-St.rx*.7,St.base+.2,St.rz*.78),_.rotation.y=.84,n.add(_),We.add(n),Th("visitor",n,new T(St.x,tt,St.z),36,St.h+St.base+10),Wo.splice(Wo.indexOf(e),1)}{let n=new sn(9,9,12,12).rotateX(-Math.PI/2),e=n.attributes.position;for(let i=0;i<e.count;i++){let s=e.getX(i),r=e.getZ(i);e.setY(i,s*r/20*.9+.8*Math.cos(s/9*Math.PI))}n.computeVertexNormals();let t=new je({color:"#ffffff",roughness:.5,side:Zt,emissive:"#fff",emissiveIntensity:.05});for(let i=0;i<6;i++){let s=new be(n,t);s.castShadow=!0;let r=Jt(400+i*24,338+i*4);s.position.set(r.x,tt+5,r.y),s.rotation.y=-.5+(i%2?.08:-.08),We.add(s);let a=new be(new kt(.18,.18,6,6),He.metal);a.position.set(r.x+2,tt+3,r.y+3.5),We.add(a)}}{let n=new ui([new T(-130,tt,-58.5),new T(-131,tt+10,-53.5),new T(-132.5,tt+13,-47.5),new T(-132,tt+9,-43.5),new T(-130.5,tt,-39.5)]),e=new be(new vs(n,80,.45,12),He.metal);e.castShadow=!0,We.add(e);let t=new ui(n.points.map(s=>s.clone().add(new T(1.6,-.6*(s.y-tt)/13,0)))),i=new be(new vs(t,80,.22,10),He.white);We.add(i)}var da=[];{let s=function(u,f,d,p){let _=new mn;_.position.set(u,.4,f);let m=new be(new jn(d,.45,10,72),t);m.rotation.x=Math.PI/2;let g=m.clone();g.scale.setScalar(1+1.2/d);let v=new be(new jn(d+.6,.12,6,72),He.metal);v.rotation.x=Math.PI/2,v.position.y=1.3;let S=new be(new kt(d-.2,d-1.5,7,48,1,!0),He.net);S.position.y=-3;let y=new be(new Ai(d-.3,48).rotateX(-Math.PI/2),new je({color:"#0a3d4d",roughness:.3,metalness:.2}));y.position.y=-.1;let A=Math.round(d*1.6),w=new Yt(new kt(.07,.07,1.3,4),He.metal,A);for(let x=0;x<A;x++){let E=x/A*Math.PI*2;w.setMatrixAt(x,new Ye().makeTranslation(Math.cos(E)*(d+.6),.65,Math.sin(E)*(d+.6)))}if(_.add(m,g,v,S,y,w),p){let x=new be(new kt(.12,.12,5,6),He.metal);x.position.y=2.5,_.add(x);let E=[];for(let L=0;L<12;L++){let C=L/12*Math.PI*2;E.push(new T(0,5,0),new T(Math.cos(C)*(d+.6),1.3,Math.sin(C)*(d+.6)))}_.add(new Xr(new yt().setFromPoints(E),new gs({color:"#dfe6ea",transparent:!0,opacity:.6})))}return _.userData.phase=pt()*6,i.add(_),da.push(_),_},n=(u,f)=>Fn.p.clone().addScaledVector(Fn.d,u).addScaledVector(Fn.n,f),e=Math.atan2(Fn.d.y,Fn.d.x),t=He.hdpe.clone();t.emissive=new Re("#2ee6d6"),t.emissiveIntensity=0,t.userData.highlight=!0;let i=new mn;We.add(i);for(let u=0;u<4;u++)for(let f of[-1,1]){let d=n(90+u*20,44+f*11);s(d.x,d.y,8.5,!0)}let r=[];for(let u=0;u<3;u++)for(let f=0;f<4;f++){let d=n(70+f*38,120+u*38);s(d.x,d.y,13,!1);let p=new be(new $i(.8,10,8),new je({color:"#ff8a1f",roughness:.5}));p.position.set(d.x+19,.4,d.y+19),We.add(p),r.push(p)}let a=new mn,o=new be(new zt(9,1.6,3.4),He.white);o.position.y=.6;let l=new be(new zt(3,2,2.6),He.dark);l.position.set(-1,2.2,0);let c=new be(new sn(16,4).rotateX(-Math.PI/2),new vn({color:"#ffffff",transparent:!0,opacity:.35,depthWrite:!1}));c.position.set(-12,.15,0),a.add(o,l,c),We.add(a);let h=n(127,158);da.boat={boat:a,c:h,buoys:r},Th("seacages",i,new T(n(120,90).x,0,n(120,90).y),120,14),i.scale.y=1,i.position.y=-12,$n.seacages.near=n(120,44)}var Sm=[[-158,-112,-121,-55],[-113,-78,-90,-58],[-152.5,-42.5,-122.5,16.25],[-175,26,-164,98],[104,27,128,98]],iS=(n,e)=>Math.hypot(n-St.x,e-St.z)<26||Math.hypot(n-vt.x,e-vt.z)<15;{let n=[];for(let d=0;d<8;d++){let p=new sn(1.1,5.2,1,4),_=p.attributes.position;for(let m=0;m<_.count;m++){let g=_.getY(m)+2.6;_.setY(m,g),_.setZ(m,-.06*g*g),_.setX(m,_.getX(m)*(1-g/6.5))}p.rotateX(-Math.PI/2+.35),p.rotateY(d/8*Math.PI*2),n.push(p)}let e=Io(n),t=new kt(.22,.35,1,6).translate(0,.5,0),i=[];Fs(si(Rd.slice(0,2),14),11).forEach((d,p,_)=>{if(p===0||p===_.length-1)return;let m=_[p+1].clone().sub(_[p-1]).normalize();i.push([d.x+m.y*7,d.y-m.x*7])});for(let d=-34;d<=90;d+=12)i.push([vt.x-7,d]);for(let d=-300;d<=-176;d+=12)i.push([d,vt.z-7],[d,vt.z+7]);for(let d=-140;d<=95;d+=13)i.push([d,27.8]);for(let d=0;d<7;d++){let p=Math.PI*.55+d/6*Math.PI*.9;i.push([St.x+Math.cos(p)*26,St.z+Math.sin(p)*26])}let s=i.filter(([d,p])=>!(Math.hypot(d-vt.x,p-vt.z)<14)),r=new Yt(t,He.trunk,s.length),a=new Yt(e,He.palmLeaf,s.length);r.castShadow=a.castShadow=!0,s.forEach(([d,p],_)=>{let m=7+pt()*3;r.setMatrixAt(_,new Ye().compose(new T(d,tt,p),new Bt,new T(1,m,1))),a.setMatrixAt(_,new Ye().compose(new T(d,tt+m,p),new Bt().setFromEuler(new _n(0,pt()*6,0)),new T(1,1,1)))}),We.add(r,a);{let d=new Ci(1,0),p=new Yt(d,new je({color:"#6f7a45",roughness:1,flatShading:!0}),320),_=0;for(let m=0;m<2e3&&_<320;m++){let g=-800+pt()*640,v=-700+pt()*800;if(Math.abs(g-vt.x)<14||v>100||Math.abs(v-vt.z)<14||v<Ad(g,8)||g>-180)continue;let S=.4+pt()*.9;p.setMatrixAt(_++,new Ye().compose(new T(g,tt+S*.3,v),new Bt,new T(S*1.4,S*.7,S*1.4)))}p.count=_,We.add(p)}let o=new Ci(2.6,1),l=[];for(let d=0;d<600&&l.length<40;d++){let p=Sm[Math.floor(pt()*Sm.length)],_=p[0]+3+pt()*(p[2]-p[0]-6),m=p[1]+3+pt()*(p[3]-p[1]-6);iS(_,m)||l.push([_,m])}let c=new Yt(o,He.tree,l.length);c.castShadow=!0;let h=new Yt(t,He.trunk,l.length);l.forEach(([d,p],_)=>{let m=.7+pt()*.7;c.setMatrixAt(_,new Ye().compose(new T(d,tt+3.5*m+1.2,p),new Bt().setFromEuler(new _n(pt(),pt(),0)),new T(m,m*1.1,m))),h.setMatrixAt(_,new Ye().compose(new T(d,tt,p),new Bt,new T(1,2.5*m,1)))}),We.add(c,h);let u=new be(new Ci(4.2,1),new je({color:"#a3742f",flatShading:!0,roughness:1}));u.position.set(vt.x,tt+7,vt.z),u.castShadow=!0,We.add(u);let f=new be(t,He.trunk);f.scale.set(1.5,5,1.5),f.position.set(vt.x,tt,vt.z),We.add(f)}{let n=new kt(.12,.16,7,6).translate(0,3.5,0),e=new $i(.45,10,8),t=new Yt(n,He.metal,dh.length),i=new Yt(e,He.bulb,dh.length);dh.forEach((s,r)=>{t.setMatrixAt(r,new Ye().makeTranslation(s.x,s.y,s.z)),i.setMatrixAt(r,new Ye().makeTranslation(s.x,s.y+7.1,s.z))}),We.add(t,i)}var Xo=class{constructor(e,t=!0){this.p=Fs(e,1,t),t&&this.p.push(this.p[0].clone()),this.L=[0];for(let i=1;i<this.p.length;i++)this.L.push(this.L[i-1]+this.p[i].distanceTo(this.p[i-1]));this.total=this.L[this.L.length-1]}at(e){e=(e%this.total+this.total)%this.total;let t=0,i=this.L.length-1;for(;i-t>1;){let o=t+i>>1;this.L[o]<e?t=o:i=o}let s=(e-this.L[t])/(this.L[i]-this.L[t]||1),r=this.p[t],a=this.p[i];return{x:r.x+(a.x-r.x)*s,z:r.y+(a.y-r.y)*s,ang:Math.atan2(-(a.y-r.y),a.x-r.x)}}};function Bm(n,e,t,i,s,r=16){let a=[];for(let o=0;o<=r;o++){let l=i+(s-i)*o/r;a.push(wt(n+Math.cos(l)*t,e+Math.sin(l)*t))}return a}var Hm=[wt(vt.x,21.25),wt(101.25,21.25),wt(101.25,100.75),wt(vt.x,100.75)],sS=new Xo(mh(Fs(si(Hm,10,!0),1,!0),1.7,!0)),rS=new Xo(mh(Fs(si([...Hm].reverse(),10,!0),1,!0),1.7,!0));function aS(n){let e=mh(Fs(si(n,8),1),-1.7,!1),t=mh(Fs(si([...n].reverse(),8),1),-1.7,!1);return new Xo([...e,...Bm(dr.x,dr.z,dr.r,-Math.PI*.5,Math.PI*1.5,24),...t],!0)}var Em=aS([wt(-900,vt.z),wt(vt.x-vt.r-1,vt.z),...Bm(vt.x,vt.z,vt.r,Math.PI,Math.PI*2,12).slice(1),...Nm,...Rd.slice(1)]),gh=["#f5f5f5","#1c1f24","#b8bec5","#2c5d9e","#f5f5f5","#8e1e22","#d9d9d9"],zm=[],km=new zt(4.2,1.2,2),Gm=new zt(2.3,.9,1.8),Vm=new je({color:"#fff",emissive:"#fff6e0",emissiveIntensity:.3}),Wm=new je({color:"#600",emissive:"#ff2020",emissiveIntensity:.3});function Cd(n,e,t){let i=new mn,s=gh[Math.floor(pt()*gh.length)],r=new be(km,new je({color:s,roughness:.3,metalness:.6}));r.position.y=.9,r.castShadow=!0;let a=new be(Gm,new je({color:"#1a2630",roughness:.1,metalness:.8}));a.position.set(-.3,1.9,0);let o=new be(new zt(.15,.3,1.6),Vm);o.position.set(2.12,1,0);let l=new be(new zt(.15,.3,1.6),Wm);l.position.set(-2.12,1,0),i.add(r,a,o,l),We.add(i),zm.push({g:i,track:n,d:e,speed:t})}for(let n=0;n<6;n++)Cd(sS,n*70+pt()*20,9+pt()*4);for(let n=0;n<4;n++)Cd(rS,n*100+pt()*20,8+pt()*4);for(let n=0;n<16;n++)Cd(Em,n*(Em.total/16),13+pt()*6);for(let n=0;n<16;n++){if(pt()<.3)continue;let e=new mn,t=new be(km,new je({color:gh[n%gh.length],roughness:.3,metalness:.6}));t.position.y=.9,t.castShadow=!0;let i=new be(Gm,new je({color:"#1a2630",roughness:.1,metalness:.8}));i.position.set(-.3,1.9,0),e.add(t,i),e.rotation.y=Math.PI/2;let s=Jt(398+n%11*13,345+n%11*2.5+(n>10?28:0));e.rotation.y=Math.PI/2-.5,e.position.set(s.x,tt,s.y),We.add(e)}var Xm=[];{let n=new yt;n.setAttribute("position",new $e([0,0,0,-.4,0,1.6,.6,0,.3],3)),n.computeVertexNormals();let e=new vn({color:"#2a2a2a",side:Zt,fog:!0});for(let t=0;t<18;t++){let i=new mn,s=new be(n,e),r=new be(n,e);r.scale.z=-1,i.add(s,r),i.scale.setScalar(1.4),i.userData={l:s,r,rad:60+pt()*50,h:45+pt()*25,sp:.1+pt()*.05,ph:pt()*6.28,cx:20+pt()*60,cz:-170+pt()*40},We.add(i),Xm.push(i)}}var oS=(()=>{let e=new Float32Array(5400);for(let s=0;s<1800;s++){let r=new T().setFromSphericalCoords(4e3,Math.acos(pt()*.95),pt()*6.283);e.set([r.x,r.y,r.z],s*3)}let t=new yt;t.setAttribute("position",new rn(e,3));let i=new _s(t,new qi({color:"#fff",size:1.8,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));return We.add(i),i})(),ko=null,mr={},qm=[];Ln.forEach(n=>{let e=$n[n.id];if(!e)return;let t=document.createElement("div");t.className="aq-pin",t.innerHTML=`<button class="aq-pin-dot" aria-label="${n.name}"><span>${n.n}</span><i></i><i></i></button><div class="aq-pin-label"><small>${n.tag}</small>${n.name}</div>`,t.addEventListener("pointerdown",f=>{f.stopPropagation(),ko=null}),t.querySelector("button").addEventListener("click",f=>{f.stopPropagation(),Us&&Bs(n.id)}),t.addEventListener("pointerenter",()=>qo(n.id)),t.addEventListener("pointerleave",()=>qo(null));let i=new rr(t),s=e.id==="pens"?0:tt,r=n.id==="seacages"?e.near:e.center;i.position.set(r.x,(n.id==="seacages"?0:tt)+e.pinY,r.y!==void 0&&r.z===void 0?r.y:r.z),i.center.set(.5,1),We.add(i),mr[n.id]={el:t,obj:i,baseY:i.position.y};let a=new yt().setFromPoints([new T(0,0,0),new T(0,1,0)]),o=new gs({color:"#7ff5ea",transparent:!0,opacity:0,depthWrite:!1}),l=new Wr(a,o),c=n.id==="seacages"?0:tt,h=c+e.pinY-1.5,u=c+e.pinY-9;l.position.set(i.position.x,u,i.position.z),l.scale.y=Math.max(h-u,.1),We.add(l),qm.push(l)});var Go=(()=>{let n=new Wt({transparent:!0,depthWrite:!1,blending:Pi,uniforms:{uTime:{value:0},uOp:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uTime; uniform float uOp; varying vec2 vUv;
      void main(){ vec2 c=vUv-.5; float d=length(c)*2.;
        float ring=smoothstep(0.02,0.,abs(fract(d-uTime*0.6)-0.5)-0.46);
        float edge=smoothstep(1.,0.92,d)*smoothstep(0.85,0.98,d);
        float a=(ring*0.5+edge)*smoothstep(1.,0.9,d)*uOp;
        gl_FragColor=vec4(vec3(0.18,0.95,0.88)*a*0.9, a); }`}),e=new be(new sn(1,1).rotateX(-Math.PI/2),n);return e.renderOrder=5,We.add(e),e})(),ma=new sh(Dn,new jt(1,1,{type:on,samples:pa?0:4})),Ym=new rh(We,Ge);ma.addPass(Ym);var _h=We,Pt=null,Os=null,ua=new la(new Z(1,1),.25,.6,.92);ma.addPass(ua);ma.addPass(new ah);var Kt={panel:Pe.querySelector(".aq-panel"),chips:Pe.querySelector(".aq-chips"),intro:Pe.querySelector(".aq-intro"),loader:Pe.querySelector(".aq-loader"),hint:Pe.querySelector(".aq-hint")};Pe.querySelector(".aq-intro h1").textContent=fa.title;Pe.querySelector(".aq-intro p").textContent=fa.subtitle;Pe.querySelector(".aq-brand b").textContent=fa.brand||fa.title;Pe.querySelector(".aq-brand span").textContent=fa.kicker;Ln.forEach(n=>{let e=document.createElement("button");e.className="aq-chip",e.dataset.id=n.id,e.innerHTML=`<span>${n.n}</span>${n.name}`,e.addEventListener("click",()=>Bs(n.id)),e.addEventListener("pointerenter",()=>qo(n.id)),e.addEventListener("pointerleave",()=>qo(null)),Kt.chips.appendChild(e)});var $m=n=>{let e=String(n).length;return e>9?"xl":e>6?"l":""};function Zm(n){let e=Ln.indexOf(n);Kt.panel.innerHTML=`
    <div class="aq-grab" aria-label="Expand or collapse"></div>
    <button class="aq-close" aria-label="Close">\xD7</button>
    <div class="aq-p-hero"><div class="aq-p-head">SKMRC <i>\u25C6</i> ${n.n}</div><span class="aq-p-num">${n.n}</span>${n.script?`<div class="aq-p-script">${n.script}</div>`:""}<div class="aq-p-wave"></div></div>
    <div class="aq-p-body">
      <div class="aq-p-tag">${n.tag}</div>
      <h2>${n.name}</h2>
      <p>${n.desc}</p>
      ${n.bullets?`<ul class="aq-p-list">${n.bullets.map(t=>`<li>${t}</li>`).join("")}</ul>`:""}
      <div class="aq-p-stats">${n.stats.map(([t,i])=>`<div><b class="${$m(t)}">${t}</b><small>${i}</small></div>`).join("")}</div>
      <button class="aq-cta" data-id="${n.id}">Discover more \u2192</button>
    </div>
    <div class="aq-p-nav"><button data-go="-1">\u2039 Prev</button><span>${e+1} / ${Ln.length}</span><button data-go="1">Next \u203A</button></div>`,Kt.panel.querySelector(".aq-close").onclick=()=>ga(),Kt.panel.querySelectorAll("[data-go]").forEach(t=>t.onclick=()=>{let i=(e+Number(t.dataset.go)+Ln.length)%Ln.length;Bs(Ln[i].id)}),Kt.panel.querySelector(".aq-cta").onclick=()=>rs("aqua:cta",{id:n.id,building:n})}Pe.querySelector('[data-act="night"]').addEventListener("click",n=>{Ld(!hr.target),n.currentTarget.classList.toggle("on",hr.target===1)});Pe.querySelector('[data-act="tour"]').addEventListener("click",n=>{lS()});{let n=Pe.querySelector('[data-act="sound"]'),e=()=>{n.classList.toggle("snd-on",Sn.playing),n.classList.toggle("muted",!Sn.enabled),n.title=Sn.enabled?"Sound on \u2014 click to mute":"Sound off \u2014 click to enable"};n.addEventListener("click",t=>{t.stopPropagation(),Sn.enabled&&!Sn.playing?Sn.start():Sn.setEnabled(!Sn.enabled),e()}),e(),Pe.addEventListener("pointerdown",()=>setTimeout(e,50))}Pe.querySelector('[data-act="home"]').addEventListener("click",()=>{xr(),Qe==="interior"?Ah(()=>ga()):ga()});var Vo=new oo,xh=new Z,gd=null,_a=null,gr=performance.now();function Km(n){let e=Dn.domElement.getBoundingClientRect();xh.set((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),Vo.setFromCamera(xh,Ge);let t=Vo.intersectObjects(Wo,!1)[0];return t?t.object.userData.bid:null}ni.domElement.addEventListener("pointerdown",n=>{ko=[n.clientX,n.clientY],gr=performance.now(),xr(!0)});ni.domElement.addEventListener("pointermove",n=>{if(!Us||n.buttons)return;if(Qe==="interior"){let t=r0(n);_S(t),ni.domElement.style.cursor=t?"pointer":"grab";return}if(Qe!=="orbit"&&Qe!=="drone")return;let e=Km(n);qo(e),ni.domElement.style.cursor=e?"pointer":Qe==="drone"?"crosshair":"grab"});ni.domElement.addEventListener("pointerup",n=>{if(!Us||!ko||Math.hypot(n.clientX-ko[0],n.clientY-ko[1])>5)return;if(Qe==="interior"){let t=r0(n);t&&Ch(t,Sd);return}if(Qe!=="orbit"&&Qe!=="drone")return;let e=Km(n);e?Bs(e):_a&&ga()});ni.domElement.addEventListener("wheel",()=>{gr=performance.now()},{passive:!0});function qo(n){gd!==n&&(gd=n,Object.entries(mr).forEach(([e,t])=>t.el.classList.toggle("hover",e===n)),Kt.chips.querySelectorAll(".aq-chip").forEach(e=>e.classList.toggle("hover",e.dataset.id===n)))}function Bs(n,e=!1){let t=Ln.find(h=>h.id===n),i=$n[n];if(!t||!i)return;e||xr(!0),_a=n,gr=performance.now(),Object.entries(mr).forEach(([h,u])=>u.el.classList.toggle("active",h===n)),Kt.chips.querySelectorAll(".aq-chip").forEach(h=>h.classList.toggle("active",h.dataset.id===n)),Zm(t),Pe.classList.add("panel-open");let s=i.center.clone();s.y=n==="pens"?0:tt+4;let r=Ge.position.clone().sub(ct.target).setY(0).normalize();r.lengthSq()<.01&&r.set(-.7,0,.7);let a=Math.pow(Math.max(1,1.1/Ge.aspect),.85),o=(i.size*1.25+62)*a,l=s.clone().addScaledVector(r,o).add(new T(0,(i.size*.7+42)*a,0));e?Qe==="orbit"&&$o(l,s,1.8):gS(n),Go.position.set(i.center.x,n==="pens"?1.2:tt+.25,i.center.z);let c=i.size*(n==="pens"?1:1.45);Go.scale.set(c,1,c),Ns.target=1,rs("aqua:select",{id:n,building:t})}function ga(){if(Qe==="interior"||Qe==="transit"){Pd();return}_a=null,Pe.classList.remove("panel-open"),Object.values(mr).forEach(n=>n.el.classList.remove("active")),Kt.chips.querySelectorAll(".aq-chip").forEach(n=>n.classList.remove("active")),Ns.target=0,Qe==="orbit"&&$o(pr.pos,pr.target,1.8),rs("aqua:deselect",{})}function rs(n,e){Pe.dispatchEvent(new CustomEvent(n,{detail:e,bubbles:!0})),window.parent!==window&&window.parent.postMessage({type:n,id:e.id||null},"*")}window.addEventListener("message",n=>{let e=n.data||{};e.type==="aqua:focus"&&e.id&&Bs(e.id),e.type==="aqua:home"&&ga(),e.type==="aqua:night"&&Ld(!!e.value),e.type==="aqua:mode"&&e.mode&&ii(e.mode)});var Pn=null,wh=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function $o(n,e,t){Pn={p0:Ge.position.clone(),t0:ct.target.clone(),p1:n.clone(),t1:e.clone(),start:performance.now(),dur:t*1e3},ct.enabled=!1,ct.autoRotate=!1}var _i=null;function lS(){_i?xr():Jm()}function Jm(){_i={i:-1,next:0},Pe.querySelector('[data-act="tour"]').classList.add("on")}function xr(n){_i&&(_i=null,Pe.querySelector('[data-act="tour"]').classList.remove("on"))}var Qe="orbit",_d=.8,Yn={el:Pe.querySelector(".aq-hud"),alt:Pe.querySelector('[data-hud="alt"]'),spd:Pe.querySelector('[data-hud="spd"]'),hdg:Pe.querySelector('[data-hud="hdg"]'),tape:Pe.querySelector(".aq-hud-tape"),rec:Pe.querySelector('[data-hud="rec"]'),cap:Pe.querySelector(".aq-caption"),capT:Pe.querySelector(".aq-caption b"),capS:Pe.querySelector(".aq-caption small")},Fe={pos:new T,vel:new T,yaw:0,pitch:-.3,roll:0,speed:26,keys:{},look:null,sticks:{},boxes:[],recStart:0},yi={v:38,target:38};function ii(n){if(n===Qe)return;let e=Qe;if(Qe=n,Pe.classList.toggle("mode-drone",n==="drone"),Pe.classList.toggle("mode-cine",n==="cine"),Pe.querySelector('[data-act="drone"]').classList.toggle("on",n==="drone"),Pe.querySelector('[data-act="cine"]').classList.toggle("on",n==="cine"),xr(!0),Pn=null,n==="orbit"){let t=new T;Ge.getWorldDirection(t);let i=Ge.position.clone().addScaledVector(t,Math.min(120,Math.max(30,(Ge.position.y-tt)/Math.max(.2,-t.y))));i.y=Math.max(tt,Math.min(i.y,20)),ct.target.copy(i),Ge.up.set(0,1,0),ct.enabled=!0,yi.target=38,dS(),e==="cine"&&$o(pr.pos,pr.target,2.2)}else ct.enabled=!1,ct.autoRotate=!1,_a&&n==="cine"&&Pd();if(n==="drone"){Fe.pos.copy(Ge.position);let t=new T;Ge.getWorldDirection(t),Fe.yaw=Math.atan2(-t.x,-t.z),Fe.pitch=Math.asin(ft.clamp(t.y,-.99,.99)),Fe.vel.set(0,0,0),Fe.roll=0,yi.target=62,Fe.recStart=performance.now(),Fe.boxes=Object.entries($n).map(([i,s])=>new an().setFromObject(s.group).expandByScalar(2.5)),Pe.focus({preventScroll:!0})}n==="cine"&&hS(),rs("aqua:mode",{mode:n})}function Pd(){_a=null,Pe.classList.remove("panel-open"),Ns.target=0,Object.values(mr).forEach(n=>n.el.classList.remove("active")),Kt.chips.querySelectorAll(".aq-chip").forEach(n=>n.classList.remove("active"))}var jm={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r",KeyE:"u",Space:"u",KeyQ:"d",KeyC:"d",ShiftLeft:"boost",ShiftRight:"boost"};window.addEventListener("keydown",n=>{if(n.code==="Escape"&&Qe==="interior"){Ah();return}if(n.code==="Escape"&&(Qe==="drone"||Qe==="cine")){ii("orbit");return}if(Qe!=="drone")return;let e=jm[n.code];e&&(Fe.keys[e]=!0,n.preventDefault())});window.addEventListener("keyup",n=>{let e=jm[n.code];e&&(Fe.keys[e]=!1)});window.addEventListener("blur",()=>{Fe.keys={}});var fr=ni.domElement;fr.addEventListener("pointerdown",n=>{if(Qe!=="drone")return;let e=fr.getBoundingClientRect();n.pointerType==="touch"&&n.clientX-e.left<e.width/2?Fe.sticks[n.pointerId]={kind:"move",x0:n.clientX,y0:n.clientY,x:n.clientX,y:n.clientY}:Fe.sticks[n.pointerId]={kind:"look",x:n.clientX,y:n.clientY},fr.setPointerCapture(n.pointerId)});fr.addEventListener("pointermove",n=>{let e=Fe.sticks[n.pointerId];if(!(Qe!=="drone"||!e)){if(e.kind==="look"){let t=n.pointerType==="touch"?.006:.0035;Fe.yaw-=(n.clientX-e.x)*t,Fe.pitch=ft.clamp(Fe.pitch-(n.clientY-e.y)*t,-1.45,.7)}e.x=n.clientX,e.y=n.clientY}});var Qm=n=>{delete Fe.sticks[n.pointerId]};fr.addEventListener("pointerup",Qm);fr.addEventListener("pointercancel",Qm);fr.addEventListener("wheel",n=>{Qe==="drone"&&(Fe.speed=ft.clamp(Fe.speed*(1-n.deltaY*.001),6,120))},{passive:!0});Pe.querySelectorAll("[data-alt]").forEach(n=>{let e=n.dataset.alt;n.addEventListener("pointerdown",t=>{t.stopPropagation(),Fe.keys[e]=!0}),["pointerup","pointerleave","pointercancel"].forEach(t=>n.addEventListener(t,()=>{Fe.keys[e]=!1}))});var od=new T,ld=new T,cd=new T;function cS(n,e){let t=Fe.keys,i=(t.f?1:0)-(t.b?1:0),s=(t.r?1:0)-(t.l?1:0),r=(t.u?1:0)-(t.d?1:0);Object.values(Fe.sticks).forEach(u=>{u.kind==="move"&&(i+=ft.clamp(-(u.y-u.y0)/60,-1,1),s+=ft.clamp((u.x-u.x0)/60,-1,1))}),i=ft.clamp(i,-1,1),s=ft.clamp(s,-1,1);let a=t.boost?2.6:1;od.set(-Math.sin(Fe.yaw),0,-Math.cos(Fe.yaw)),ld.set(Math.cos(Fe.yaw),0,-Math.sin(Fe.yaw)),cd.copy(od).multiplyScalar(i).addScaledVector(ld,s).multiplyScalar(Fe.speed*a),cd.y=r*Fe.speed*.7,Fe.vel.lerp(cd,Math.min(1,n*2.2)),Fe.pos.addScaledVector(Fe.vel,n),Fe.pos.y=ft.clamp(Fe.pos.y,tt+2.5,420),Fe.pos.x=ft.clamp(Fe.pos.x,-900,900),Fe.pos.z=ft.clamp(Fe.pos.z,-800,900),Fe.boxes.forEach(u=>{if(!u.containsPoint(Fe.pos))return;let f=Fe.pos,d=[[f.x-u.min.x,"x",u.min.x],[u.max.x-f.x,"x",u.max.x],[f.y-u.min.y,"y",u.min.y],[u.max.y-f.y,"y",u.max.y],[f.z-u.min.z,"z",u.min.z],[u.max.z-f.z,"z",u.max.z]];d.sort((m,g)=>m[0]-g[0]);let[,p,_]=d[0];f[p]=_,Fe.vel[p]=0});let o=Fe.vel.dot(ld)/Math.max(Fe.speed,1),l=Fe.vel.dot(od)/Math.max(Fe.speed,1);Fe.roll+=(-o*.18-Fe.roll)*Math.min(1,n*3),Ge.position.copy(Fe.pos),Ge.position.y+=Math.sin(e*1.7)*.06,Ge.rotation.order="YXZ",Ge.rotation.set(Fe.pitch-l*.035+Math.sin(e*1.3)*.004,Fe.yaw,Fe.roll+Math.sin(e*.9)*.004);let c=Fe.vel.length()*_d*3.6;Yn.alt.textContent=Math.round((Fe.pos.y-tt)*_d)+" m",Yn.spd.textContent=Math.round(c)+" km/h",e0(Fe.yaw);let h=Math.floor((performance.now()-Fe.recStart)/1e3);Yn.rec.textContent=`REC ${String(Math.floor(h/60)).padStart(2,"0")}:${String(h%60).padStart(2,"0")}`,t0(Fe.pos,70)}function e0(n){let e=(-ft.radToDeg(n)%360+360)%360;e=(e+180)%360;let t=["N","NE","E","SE","S","SW","W","NW"];Yn.hdg.textContent=`${t[Math.round(e/45)%8]} ${String(Math.round(e)).padStart(3,"0")}\xB0`,Yn.tape.style.backgroundPositionX=`${-e*4}px`}var Ft=(n,e,t)=>new T(n,e,t),lr={pos:new ui([Ft(40,90,-330),Ft(70,22,-175),Ft(-40,30,-175),Ft(-125,24,-150),Ft(-150,16,-95),Ft(-150,12,-60),Ft(-128,9,-48.75),Ft(-60,11,-46),Ft(18,16,-48),Ft(85,34,-30),Ft(175,80,50),Ft(80,140,200),Ft(-300,150,75)],!1,"centripetal"),tgt:new ui([Ft(80,0,-150),Ft(80,2,-120),Ft(-70,6,-100),Ft(-107,8,-109),Ft(-107,6,-109),Ft(-160,4,-50),Ft(-90,6,-48),Ft(-10,6,-36),Ft(30,6,-18),Ft(60,5,0),Ft(40,0,40),Ft(-10,0,20),Ft(-5,0,-35)],!1,"centripetal"),dur:56,start:0};function hS(){lr.start=performance.now(),yi.target=46,Fe.recStart=performance.now(),Ge.up.set(0,1,0)}var Oo=new T,uh=new T,bm=new T;function uS(n){let e=(performance.now()-lr.start)/1e3/lr.dur;if(e>=1){ii("orbit");return}let t=e<.06?e*e/.12:e>.94?1-(1-e)*(1-e)/.12:e-.03,i=ft.clamp(t/.94*.94+0,0,1);lr.pos.getPoint(i,Oo),lr.tgt.getPoint(i,uh),Ge.position.copy(Oo),Ge.position.y+=Math.sin(n*1.1)*.12,Ge.lookAt(uh),lr.pos.getPoint(Math.min(1,i+.01),bm);let s=new T().subVectors(bm,Oo).normalize().cross(new T().subVectors(uh,Oo).normalize()).y;Ge.rotateZ(ft.clamp(s*.25,-.08,.08)),Yn.alt.textContent=Math.round((Oo.y-tt)*_d)+" m";let r=new T;Ge.getWorldDirection(r),e0(Math.atan2(-r.x,-r.z)),Yn.spd.textContent="AUTO";let a=Math.floor((performance.now()-lr.start)/1e3);Yn.rec.textContent=`REC 00:${String(a).padStart(2,"0")}`,t0(uh,55)}var fh=null;function t0(n,e){let t=null,i=e;if(Object.entries($n).forEach(([r,a])=>{let o=Math.hypot(a.center.x-n.x,a.center.z-n.z)-a.size*.35;o<i&&(i=o,t=r)}),t===fh||(fh=t,Yn.cap.classList.remove("show"),!t))return;let s=Ln.find(r=>r.id===t);setTimeout(()=>{fh===t&&(Yn.capT.textContent=s.name,Yn.capS.textContent=`${s.n} \xB7 ${s.tag}`,Yn.cap.classList.add("show"))},250)}function dS(){fh=null,Yn.cap.classList.remove("show")}Pe.querySelector('[data-act="drone"]').addEventListener("click",()=>ii(Qe==="drone"?"orbit":"drone"));Pe.querySelector('[data-act="cine"]').addEventListener("click",()=>ii(Qe==="cine"?"orbit":"cine"));Pe.querySelector(".aq-hud-exit").addEventListener("click",()=>ii("orbit"));var In=null,vh=Pe.querySelector(".aq-portal");function xd(n){In={steps:n,i:0,t0:performance.now()},n[0].start&&n[0].start()}function fS(n){let e=In.steps[In.i],t=Math.min((n-In.t0)/(e.dur*1e3),1);e.update&&e.update(t),t>=1&&(e.end&&e.end(),In.i++,In.t0=n,In.i>=In.steps.length?In=null:In.steps[In.i].start&&In.steps[In.i].start())}function Bo(n){Ge.fov=n,yi.v=yi.target=n,Ge.updateProjectionMatrix()}var pS=n=>n*n*n,n0=n=>1-Math.pow(1-n,3);function i0(n){let e=$n[n],t=tt,i={visitor:[St.x-11.5,St.z+13,-.67,.75],nursery:[-85,.5,0,1],hatchery:[-27,15,0,1],livefeed:[-7,15,0,1],broodstock:[14,-32.5,0,-1],plantroom:[60,10,0,1],genroom:[86,12.5,0,1],phase1:[8,31.25,0,-1]}[n];if(n==="research"){let s=e.nrm.clone().negate(),r=new Z(e.center.x,e.center.z).addScaledVector(s,16.5);return{p:new T(r.x,t,r.y),n:new T(s.x,0,s.y),o:e}}if(n==="seacages"){let s=da[0].position;return{p:new T(s.x,-2.5,s.z),n:new T(.25,1,.25).normalize(),o:e}}return{p:new T(i[0],t,i[1]),n:new T(i[2],0,i[3]).normalize(),o:e}}function mS(n){n.traverse(e=>{e.isCSS2DObject&&(e.element.style.display="none")})}function s0(n){ct.minDistance=n?2:30,ct.maxDistance=n?34:750,ct.maxPolarAngle=n?1.62:1.38}function vd(n,e,t){Id(),ti=null,Mi.parent&&Mi.parent.remove(Mi),Fi.parent&&Fi.parent.remove(Fi),mS(_h),_h=n,Ym.scene=n,Pt=e,Os=t,Sn.setEnv(t?t==="seacages"?"under":"indoor":"campus"),Pe.classList.toggle("mode-interior",!!e)}function yd(n,e,t,i,s,r){let a=n.pos.clone(),o=n.target.clone(),l=e.pos.clone(),c=e.target.clone(),h=new T;return{dur:s,update:u=>{let f=wh(u);Ge.position.lerpVectors(a,l,f),h.lerpVectors(o,c,f),Ge.up.set(0,1,0),Ge.lookAt(h),Bo(ft.lerp(t,i,n0(u))),vh.style.opacity=String(Math.max(0,1-u*2.4))},end:()=>{ct.target.copy(c),r&&r()}}}function gS(n){if(In)return;(Qe==="drone"||Qe==="cine")&&(ii("orbit"),Pn=null);let e=vm(n,Dn,p=>Ch(p));xr(!0),Pn=null,ct.enabled=!1,ct.autoRotate=!1;let t=()=>{Qe="interior",s0(!0),ct.enabled=!0,gr=performance.now(),rs("aqua:enter",{id:n})};if(Qe==="interior"){if(Os===n)return;Qe="transit",xd([{dur:.45,update:p=>{vh.style.opacity=String(p),Bo(ft.lerp(Ge.fov,85,p*.2))}},{dur:2.4,start:()=>{vd(e.scene,e,n),Ge.position.copy(e.entry.pos),Bo(80)},...yd(e.entry,e.view,80,50,2.4,t)}]);return}Qe="transit";let i=i0(n),s=new T(0,1,0),r=i.p.clone().addScaledVector(i.n,42).addScaledVector(s,16),a=i.p.clone().addScaledVector(s,3),o=i.p.clone().addScaledVector(i.n,.6).addScaledVector(s,3),l=i.p.clone().addScaledVector(i.n,-25).addScaledVector(s,3),c=new be(new sn(7,5.5),new vn({color:"#7ff5ea",transparent:!0,opacity:0,blending:Pi,depthWrite:!1,toneMapped:!1}));c.position.copy(i.p).addScaledVector(i.n,.4).addScaledVector(s,2.75),c.lookAt(c.position.clone().add(i.n)),We.add(c);let h=Ge.position.clone(),u=ct.target.clone(),f=new T,d=h.distanceTo(r)*.1;xd([{dur:2.4,update:p=>{let _=wh(p);Ge.position.lerpVectors(h,r,_),Ge.position.y+=Math.sin(_*Math.PI)*d,f.lerpVectors(u,a,_),Ge.up.set(0,1,0),Ge.lookAt(f),Bo(ft.lerp(yi.v,42,.05)),c.material.opacity=_*.25}},{dur:1.15,update:p=>{let _=pS(p);Ge.position.lerpVectors(r,o,_),f.lerpVectors(a,l,n0(p)),Ge.lookAt(f),Bo(ft.lerp(42,82,_)),c.material.opacity=.25+_*.75,vh.style.opacity=String(Math.max(0,(p-.55)/.45))},end:()=>{We.remove(c),c.geometry.dispose()}},{dur:2.6,start:()=>{vd(e.scene,e,n),Ge.position.copy(e.entry.pos)},...yd(e.entry,e.view,82,50,2.6,t)}])}function Ah(n){if(Qe!=="interior"||In)return;let e=Os,t=i0(e),i=new T(0,1,0);Qe="transit",ct.enabled=!1,ct.autoRotate=!1;let s={pos:t.p.clone().addScaledVector(t.n,3).addScaledVector(i,3),target:t.p.clone().addScaledVector(t.n,40).addScaledVector(i,3)},r={pos:t.p.clone().addScaledVector(t.n,t.o.size*1.1+55).addScaledVector(i,t.o.size*.5+34),target:t.o.center.clone().setY(tt+4)};xd([{dur:.45,update:a=>{vh.style.opacity=String(a)}},{dur:2.6,start:()=>{vd(We,null,null),s0(!1),Ge.position.copy(s.pos)},...yd(s,r,75,38,2.6,()=>{Qe="orbit",ct.enabled=!0,rs("aqua:exit",{id:e}),n&&n()})}])}Pe.querySelector(".aq-exitbld").addEventListener("click",()=>Ah());var Md=null,Rh=null,ti=null,yh=null,Sd=null,xi=null,ss=(()=>{let n=document.createElement("div");n.className="aq-fishsel",n.innerHTML="<i></i><b></b>";let e=new rr(n);return e.visible=!1,e})(),Mi=new Qr(new an,new Re("#ffffff")),Fi=new Qr(new an,new Re("#f0a43c"));[Mi,Fi].forEach(n=>{n.material.toneMapped=!1,n.material.transparent=!0,n.visible=!1});Mi.material.opacity=.45;function r0(n){if(!Pt)return null;let e=Dn.domElement.getBoundingClientRect();if(xh.set((n.clientX-e.left)/e.width*2-1,-((n.clientY-e.top)/e.height)*2+1),Vo.setFromCamera(xh,Ge),Sd=null,Pt.fish){let i=Vo.ray,s=new T,r=n.pointerType==="touch"?1.6:1,a=null;if(Pt.fish.forEach(o=>{for(let l=0;l<o.n;l++){s.fromArray(o.pos,l*3);let c=s.clone().sub(i.origin).dot(i.direction);if(c<.5)continue;let h=i.distanceToPoint(s),u=o.sc[l]*r+c*.012;h<u&&(!a||c<a.along)&&(a={sch:o,i:l,along:c})}}),a)return Sd=a,a.sch.item}let t=Vo.intersectObjects(Pt.scene.children,!0);for(let i of t){let s=i.object;for(;s&&!s.userData.item;)s=s.parent;if(s)return s.userData.item;if(!i.object.material||!i.object.material.transparent)break}return null}function a0(){Pt&&Pt.scene.add(Mi,Fi)}function _S(n){if(n!==Md){if(Md=n,Pe.querySelectorAll(".aq-tag-link").forEach(e=>e.classList.toggle("hover",e.dataset.item===n)),!n||n===Rh||Pt.items[n].noFocus){Mi.visible=!1;return}a0(),Mi.box.copy(Pt.items[n].hit).expandByScalar(.15),Mi.visible=!0}}function Ch(n,e){if(Qe!=="interior"||!Pt)return;let t=Pt.items[n];if(!t)return;if(Rh=n,a0(),Mi.visible=!1,t.noFocus){Fi.visible=!1;let l=Pt.fish&&Pt.fish.find(c=>c.item===n);xi=l?{sch:l,i:e&&e.sch===l?e.i:0}:null,xi&&(Pt.scene.add(ss),ss.visible=!0,ss.element.querySelector("b").textContent=Mh(n,xi.i)),Pt.scene.traverse(c=>{if(c.isInstancedMesh&&c.userData.item){let h=c.userData.item===n;c.material.emissiveIntensity=h?.55:0}}),setTimeout(()=>Pt&&Pt.scene.traverse(c=>{c.isInstancedMesh&&c.userData.fish&&(c.material.emissiveIntensity=0)}),1400),Tm(t,xi?xi.i:null),Pe.classList.add("panel-open"),gr=performance.now(),rs("aqua:item",{id:Os,item:n,fish:xi?Mh(n,xi.i):null});return}Fi.box.copy(t.hit).expandByScalar(.25),Fi.visible=!0,Pe.querySelectorAll(".aq-tag-link").forEach(l=>l.classList.toggle("active",l.dataset.item===n));let i=new T,s=new T;t.hit.getCenter(i),t.hit.getSize(s);let r=Ge.position.clone().sub(i);r.y=Math.max(r.y,r.length()*.35),r.normalize();let a=ft.clamp(Math.max(s.x,s.z)*.9+s.y+4,5,24),o=i.clone().addScaledVector(r,a);o.clamp(Pt.bounds.min,Pt.bounds.max),ti={p0:Ge.position.clone(),t0:ct.target.clone(),p1:o,t1:i,start:performance.now(),dur:1100},ct.enabled=!1,Tm(t),Pe.classList.add("panel-open"),gr=performance.now(),rs("aqua:item",{id:Os,item:n})}function Id(){xi=null,ss.visible=!1,ss.parent&&(ss.element.style.display="none",ss.parent.remove(ss)),Rh=null,Fi.visible=!1,Mi.visible=!1,Md=null,Pe.querySelectorAll(".aq-tag-link").forEach(n=>n.classList.remove("active","hover")),clearInterval(yh),yh=null}var o0={"fish-hamour":["HAM",640,.22],"fish-shaari":["SHA",410,.2],"fish-hamrah":["HMR",380,.2],"fish-ummdrais":["UMD",450,.2]};function Mh(n,e){let t=o0[n];return t?`${t[0]}-${String(410+e*7).padStart(4,"0")}`:""}function xS(n,e){let t=o0[n];if(!t)return null;let i=l=>{let c=Math.sin((e+1)*12.9898+l*78.233)*43758.5453;return c-Math.floor(c)},s=Math.round(t[1]*(.75+i(1)*.55)),r=Math.round(Math.cbrt(s/.0125)),a=7+Math.floor(i(2)*6),o=1+Math.floor(i(3)*9);return{id:Mh(n,e),w:s,len:r,rows:[["Tag ID",Mh(n,e)],["Weight",`${s} g`],["Length",`${r} cm`],["Age",`${a} months`],["Batch",`SC-07 \xB7 B${12+e%5}`],["Origin","SKMRC hatchery"],["Health",`Healthy \xB7 checked ${o} day${o>1?"s":""} ago`]]}}function Tm(n,e=null){let t=e!=null?xS(n.key,e):null,i=Ln.find(h=>h.id===Os),s=Pt.items._order,r=s.indexOf(n.key),a=n.board?`<div class="aq-board">${n.board.map(([h,u])=>`<div><span>${h}:</span> <b>${u}</b></div>`).join("")}</div>`:"",o=(n.live||[]).map(([h,u,f,d,p],_)=>`<div class="aq-live-row"><span>${h}</span><b data-live="${_}">${u===0&&!f&&d&&isNaN(Number(d))?d:Number(u).toFixed(p)+(d?" "+d:"")}</b></div>`).join("");Kt.panel.innerHTML=`
    <div class="aq-grab" aria-label="Expand or collapse"></div>
    <button class="aq-close" aria-label="Close">\xD7</button>
    <div class="aq-p-hero aq-p-hero-item${n.media?" aq-p-hero-fish":""}"><div class="aq-p-head">${i.name} <i>\u25C6</i> ${i.n}</div>${n.media?`<img class="aq-p-fish" src="${lh[n.media.img]}" alt="${n.name}">`:`<span class="aq-p-code">${n.code}</span>`}<span class="aq-p-in">${n.media?t?t.id+" \xB7 "+n.name:"Species \xB7 Sea Cage Grow-Out":"Inside \xB7 "+i.name}</span><div class="aq-p-wave"></div></div>
    <div class="aq-p-body">
      <button class="aq-back">\u2190 ${i.name}</button>
      <div class="aq-p-tag">${n.kind}</div>
      <h2>${n.name}</h2>
      ${n.media&&n.media.video?`<div class="aq-p-media"><video class="aq-p-video" poster="${pm}" autoplay muted loop playsinline controls></video><span>Hamour in the wild</span></div>`:""}
      <p>${n.desc}</p>
      ${t?`<div class="aq-indiv"><div class="aq-indiv-h"><i></i>This fish \xB7 ${t.id}</div><dl>${t.rows.map(([h,u])=>`<div><dt>${h}</dt><dd>${u}</dd></div>`).join("")}</dl></div>`:""}
      ${n.facts?`<div class="aq-facts-h">Species profile</div><dl class="aq-facts">${n.facts.map(([h,u])=>`<div><dt>${h}</dt><dd>${u}</dd></div>`).join("")}</dl>`:""}
      ${a}
      <div class="aq-p-stats">${n.stats.map(([h,u])=>`<div><b class="${$m(h)}">${h}</b><small>${u}</small></div>`).join("")}</div>
      ${o?`<div class="aq-live"><div class="aq-live-h"><i></i>LIVE DATA</div>${o}</div>`:""}
      <button class="aq-cta">More details \u2192</button>
    </div>
    <div class="aq-p-nav"><button data-go="-1">\u2039 Prev</button><span>${r+1} / ${s.length}</span><button data-go="1">Next \u203A</button></div>`,Kt.panel.querySelector(".aq-close").onclick=()=>{Id(),Pd()},Kt.panel.querySelector(".aq-back").onclick=()=>vS();let l=Kt.panel.querySelector(".aq-p-video");if(l){l.src=KM(),l.play().catch(()=>{});let h=()=>Sn.duck(!l.paused&&!l.muted&&l.volume>0&&l.isConnected);["play","pause","volumechange","ended"].forEach(f=>l.addEventListener(f,h));let u=new MutationObserver(()=>{l.isConnected||(Sn.duck(!1),u.disconnect())});u.observe(Kt.panel,{childList:!0,subtree:!0})}Kt.panel.querySelector(".aq-cta").onclick=()=>rs("aqua:cta",{id:Os,item:n.key}),Kt.panel.querySelectorAll("[data-go]").forEach(h=>h.onclick=()=>Ch(s[(r+Number(h.dataset.go)+s.length)%s.length])),clearInterval(yh),t&&n.live&&(n={...n,live:[["Weight (this fish)",t.w,1.5,"g",0],...n.live.slice(1)]});let c=(n.live||[]).map(([,h])=>h);yh=setInterval(()=>{(n.live||[]).forEach(([h,u,f,d,p],_)=>{if(!f)return;c[_]=ft.clamp(c[_]+(Math.random()-.5)*f*.6+(u-c[_])*.08,u-f*2,u+f*2);let m=Kt.panel.querySelector(`[data-live="${_}"]`);m&&(m.textContent=Number(c[_]).toLocaleString("en-US",{minimumFractionDigits:p,maximumFractionDigits:p})+(d?" "+d:""),m.classList.remove("tick"),m.offsetWidth,m.classList.add("tick"))})},1200)}function vS(){Id();let n=Ln.find(e=>e.id===Os);Zm(n),ti={p0:Ge.position.clone(),t0:ct.target.clone(),p1:Pt.view.pos.clone(),t1:Pt.view.target.clone(),start:performance.now(),dur:1200},ct.enabled=!1}function yS(n){if(!ti)return;let e=Math.min((n-ti.start)/ti.dur,1),t=wh(e);Ge.position.lerpVectors(ti.p0,ti.p1,t),ct.target.lerpVectors(ti.t0,ti.t1,t),e>=1&&(ti=null,Qe==="interior"&&(ct.enabled=!0))}var Ls={frames:0,t0:performance.now(),good:0};function MS(n){Ls.frames++;let e=n-Ls.t0;if(e<2e3)return;let t=Ls.frames*1e3/e;Ls.frames=0,Ls.t0=n,!document.hidden&&(t<28&&ns>.75?(ns=Math.max(.75,ns-.25),Sh(),Ls.good=0):t>55&&ns<hd&&++Ls.good>=3&&(ns=Math.min(hd,ns+.25),Sh(),Ls.good=0))}{let n=a=>{Pe.classList.toggle("sheet-peek",a==="peek"),Pe.classList.toggle("sheet-full",a==="full")},e=()=>Pe.classList.contains("sheet-peek")?"peek":Pe.classList.contains("sheet-full")?"full":"half",t={peek:"half",half:"full",full:"full"},i={full:"half",half:"peek",peek:"peek"};Kt.panel.addEventListener("click",a=>{a.target.closest(".aq-grab")&&n(e()==="peek"?"half":e()==="half"?"full":"half")});let s=null,r=!1;Kt.panel.addEventListener("touchstart",a=>{let o=a.target.closest(".aq-grab, .aq-p-hero"),l=a.target.closest(".aq-p-body");r=!!l&&l.scrollTop<=0,s=o||r?a.touches[0].clientY:null},{passive:!0}),Kt.panel.addEventListener("touchmove",a=>{if(s===null)return;let o=a.touches[0].clientY-s;o>45?(n(i[e()]),s=null):o<-45&&!r?(n(t[e()]),s=null):o<-45&&r&&e()!=="full"&&(n("full"),s=null)},{passive:!0}),new MutationObserver(()=>{!Pe.classList.contains("panel-open")&&(Pe.classList.contains("sheet-peek")||Pe.classList.contains("sheet-full"))&&n("half")}).observe(Pe,{attributes:!0,attributeFilter:["class"]})}var Ds=document.createElement("div");Ds.className="aq-stick";Ds.innerHTML="<i></i>";Pe.appendChild(Ds);function SS(){let n=Object.values(Fe.sticks).find(s=>s.kind==="move");if(!n||Qe!=="drone"){Ds.classList.remove("on");return}let e=Pe.getBoundingClientRect();Ds.classList.add("on"),Ds.style.left=n.x0-e.left+"px",Ds.style.top=n.y0-e.top+"px";let t=ft.clamp(n.x-n.x0,-46,46),i=ft.clamp(n.y-n.y0,-46,46);Ds.firstChild.style.transform=`translate(${t}px, ${i}px)`}var hr={v:0,target:0},Ns={v:0,target:0};function Ld(n){hr.target=n?1:0,Pe.classList.toggle("is-night",n),Sn.setNight(n?1:0)}var vi=1,is=1,or={v:0};function Sh(){let n=Eh.getBoundingClientRect();vi=Math.max(1,n.width),is=Math.max(1,n.height),Dn.setPixelRatio(ns),ma.setPixelRatio(ns),Dn.setSize(vi,is),ni.setSize(vi,is),ma.setSize(vi,is),ua.setSize(vi,is),Ge.aspect=vi/is,Ge.updateProjectionMatrix()}new ResizeObserver(Sh).observe(Eh);Sh();var ph=new Js;ph.connect(document);var Us=!1,Ed=0,ES=new Re,bS=["visitor","research","nursery","hatchery","livefeed","broodstock","plantroom","genroom","phase1","seacages"];function l0(n){ph.update(n);let e=Math.min(ph.getDelta(),.5),t=Math.min(e,.05),i=ph.getElapsed(),s=performance.now();if(Ed){let c=(s-Ed)/1e3;if(bS.forEach((h,u)=>{let f=$n[h],d=ft.clamp((c-1-u*.22)/1.1,0,1),p=1-Math.pow(1-d,3),_=d<1?p*(1+.08*Math.sin(d*Math.PI)):1;h==="seacages"?f.group.position.y=-12+12*p:f.group.scale.y=Math.max(.001,_)}),Ln.forEach((h,u)=>{let f=mr[h.id];f&&c>3.6+u*.09&&f.el.classList.add("in")}),qm.forEach((h,u)=>{h.material.opacity=ft.clamp((c-3.6-u*.09)*2,0,.55)}),(c>3.4||!fa.intro)&&Kt.intro.classList.add("out"),c>5.6&&!Us){Us=!0,ct.enabled=!0,Pe.classList.add("ready");let h=new URLSearchParams(location.search).get("mode");h==="cinematic"&&ii("cine"),h==="drone"&&ii("drone")}}if(Pn){let c=Math.min((s-Pn.start)/Pn.dur,1),h=wh(c);Ge.position.lerpVectors(Pn.p0,Pn.p1,h),Ge.position.y+=Math.sin(h*Math.PI)*Pn.p0.distanceTo(Pn.p1)*.12,ct.target.lerpVectors(Pn.t0,Pn.t1,h),c>=1&&(Pn=null,Us&&(ct.enabled=!0))}_i&&Us&&s>_i.next&&!Pn&&Qe==="orbit"&&(_i.i=(_i.i+1)%Ln.length,Bs(Ln[_i.i].id,!0),_i.next=s+6500),ct.autoRotate=Us&&(Qe==="orbit"||Qe==="interior"&&!Rh&&!ti)&&!Pn&&!_i&&s-gr>12e3,ct.autoRotateSpeed=Qe==="interior"?.25:.35;let r=Pe.classList.contains("panel-open"),a=r&&vi>760?Math.min(400,vi*.32)/2:0,o=r&&vi<=760?is*(Pe.classList.contains("sheet-peek")?.08:Pe.classList.contains("sheet-full")?.3:.22):0;or.v+=(a-or.v)*Math.min(1,e*4),or.y=(or.y||0)+(o-(or.y||0))*Math.min(1,e*4),Ge.setViewOffset(vi,is,or.v,or.y,vi,is),Object.entries($n).forEach(([c,h])=>{let u=c===_a?.16:c===gd?.12:0;h.mats.forEach(f=>{f.emissiveIntensity+=(u-f.emissiveIntensity)*Math.min(1,e*8)})}),Ns.v+=(Ns.target-Ns.v)*Math.min(1,e*4),Go.material.uniforms.uOp.value=Ns.v,Go.material.uniforms.uTime.value=i,Go.visible=Ns.v>.01,hr.v+=(hr.target-hr.v)*Math.min(1,e*1.6);let l=hr.v;if(bd(ft.lerp(Td,Cm,l)),We.environment=l>.5?Pm():Im,We.environmentIntensity=ft.lerp(.45,.35,l),On.intensity=ft.lerp(3.2,.35,l),On.color.lerpColors(ES.set("#ffe2b8"),new Re("#8fb0ff"),l),Am.intensity=ft.lerp(.65,.12,l),We.fog.color.lerpColors(wm,JM,l),Dn.toneMappingExposure=ft.lerp(.4,.5,l),He.window.emissiveIntensity=l*3.2,He.bulb.emissiveIntensity=.2+l*9,He.glass.emissiveIntensity=l*1.4,He.domeCore&&(He.domeCore.emissiveIntensity=l*2.2),He.algae.emissiveIntensity=.05+l*2.5,He.algaeB.emissiveIntensity=.05+l*2,Vm.emissiveIntensity=.3+l*8,Wm.emissiveIntensity=.3+l*5,oS.material.opacity=Math.max(0,l-.4)*1.4,ua.strength=ft.lerp(.15,.75,l),ua.threshold=ft.lerp(1.6,1.05,l),ad.uNight.value=l,ad.uSunDir.value.copy(Ho).multiplyScalar(l>.5?-1:1).setY(Math.abs(Ho.y)+.05),ad.uTime.value=i,zm.forEach(c=>{c.d+=c.speed*t;let h=c.track.at(c.d);c.g.position.set(h.x,tt+.05,h.z),c.g.rotation.y=h.ang,c.g.visible=h.z<700}),da.forEach(c=>{c.position.y=.4+Math.sin(i*.9+c.userData.phase)*.18,c.rotation.z=Math.sin(i*.7+c.userData.phase)*.01}),da.boat){let c=da.boat,h=i*.05;c.boat.position.set(c.c.x+Math.cos(h)*92,.3+Math.sin(i*1.3)*.15,c.c.y+Math.sin(h)*92),c.boat.rotation.set(Math.sin(i*1.1)*.03,-h-Math.PI/2,Math.sin(i*.9)*.04),c.buoys.forEach((u,f)=>{u.position.y=.4+Math.sin(i*1.5+f)*.2})}if(Xm.forEach(c=>{let h=c.userData,u=i*h.sp+h.ph;c.position.set(h.cx+Math.cos(u)*h.rad,h.h+Math.sin(u*2.3)*4,h.cz+Math.sin(u)*h.rad*.6),c.rotation.y=-u-Math.PI/2;let f=Math.sin(i*9+h.ph*3)*.6;h.l.rotation.x=f,h.r.rotation.x=-f}),Object.values(mr).forEach((c,h)=>{c.obj.position.y=c.baseY+Math.sin(i*1.4+h)*.6}),MS(s),SS(),In&&fS(s),Pt&&_h===Pt.scene&&(Pt.update(i),Dn.toneMappingExposure=Pt.exposure||.55,ua.strength=.4,ua.threshold=1.3),Qe==="drone")cS(t,i);else if(Qe==="cine")uS(i);else if((Qe==="orbit"||Qe==="interior")&&(Qe==="interior"&&(yS(s),Fi.material.opacity=.6+Math.sin(i*4)*.35,xi&&ss.position.fromArray(xi.sch.pos,xi.i*3)),ct.update(),Qe==="interior")){let c=Pt.bounds;Ge.position.clamp(c.min,c.max),ct.target.clamp(c.min,c.max)}yi.v+=(yi.target-yi.v)*Math.min(1,e*2.5),Math.abs(Ge.fov-yi.v)>.01&&(Ge.fov=yi.v,Ge.updateProjectionMatrix()),ma.render(),ni.render(_h,Ge),requestAnimationFrame(l0)}bd(Td);requestAnimationFrame(()=>{Kt.loader.classList.add("out"),Ed=performance.now(),$o(pr.pos,pr.target,5.2),l0()});window.GulfAquaScene={buildings:Ln,focus:Bs,home:ga,setNight:Ld,startTour:Jm,stopTour:xr,drone:()=>ii("drone"),flythrough:()=>ii("cine"),orbit:()=>ii("orbit"),enter:n=>Bs(n),exit:()=>Ah(),inspect:n=>Ch(n),view:(n,e,t,i,s,r,a=2)=>$o(new T(n,e,t),new T(i,s,r),a),fishScreen:(n=0,e=3)=>{if(!Pt||!Pt.fish)return null;let t=Pt.fish[n],i=new T().fromArray(t.pos,e*3).project(Ge),s=Dn.domElement.getBoundingClientRect();return[s.left+(i.x+1)/2*s.width,s.top+(1-i.y)/2*s.height,i.z]},on:(n,e)=>Pe.addEventListener(n,t=>e(t.detail)),sound:n=>{Sn.setEnabled(n===void 0?!Sn.enabled:n);let e=Pe.querySelector('[data-act="sound"]');return e&&e.classList.toggle("snd-on",Sn.playing),e&&e.classList.toggle("muted",!Sn.enabled),Sn.enabled}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
