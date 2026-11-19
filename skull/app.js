/* MIRAI Skull Mirror（透視ミラー） db4d9fa775 — bundles three.js (MIT), MediaPipe Tasks Vision (Apache-2.0; modified: usage logging removed, see skull/pipeline/web/build.mjs) and the meshoptimizer decoder (MIT). Licences: skull/LICENSES.txt. Source: skull/src/ */
var A0=0,Qd=1,T0=2;var pc=1,R0=2,ja=3,Qi=0,Un=1,qn=2,Br=0,Ka=1,ef=2,tf=3,nf=4,rh=5;var Ds=100,C0=101,I0=102,P0=103,L0=104,D0=200,zr=201,F0=202,N0=203,sf=204,rf=205,U0=206,O0=207,k0=208,B0=209,z0=210,G0=211,H0=212,V0=213,W0=214,Fl=0,Nl=1,Ul=2,sr=3,Ol=4,kl=5,Bl=6,zl=7,ah=0,q0=1,X0=2,es=0,af=1,of=2,cf=3,lf=4,hf=5,uf=6,df=7,Gd="attached",j0="detached",ff=300,Gr=301,Ya=302,oh=303,ch=304,rr=1e3,vi=1001,Ia=1002,qt=1003,lh=1004;var Hr=1005;var Dt=1006,$a=1007;var Mi=1008;var xn=1009,pf=1010,mf=1011,Ja=1012,hh=1013,ki=1014,ai=1015,Xn=1016,uh=1017,dh=1018,Vr=1020,gf=35902,_f=35899,bf=1021,xf=1022,wi=1023,ws=1026,Fs=1027,fh=1028,ph=1029,lr=1030,mh=1031;var gh=1033,mc=33776,gc=33777,_c=33778,bc=33779,_h=35840,bh=35841,xh=35842,vh=35843,yh=36196,Sh=37492,Mh=37496,wh=37488,Eh=37489,xc=37490,Ah=37491,Th=37808,Rh=37809,Ch=37810,Ih=37811,Ph=37812,Lh=37813,Dh=37814,Fh=37815,Nh=37816,Uh=37817,Oh=37818,kh=37819,Bh=37820,zh=37821,Gh=36492,Hh=36494,Vh=36495,Wh=36283,qh=36284,vc=36285,Xh=36286;var Pr=2300,Lr=2301,Ll=2302,Hd=2303,Vd=2400,Wd=2401,qd=2402,K0=2500;var vf=0,yc=1,Za=2,Y0=3200;var Sc=0,$0=1,Bi="",nn="srgb",Ln="srgb-linear",Vo="linear",xt="srgb";var Dl=7680;var J0=519,Z0=512,Q0=513,e_=514,yf=515,t_=516,n_=517,Sf=518,Mf=519,wf=35044;var Ef="300 es",yi=2e3,Pa=2001;function ry(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ay(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function i_(){let n=La("canvas");return n.style.display="block",n}var zg={},Da=null;function Wo(...n){let e="THREE."+n.shift();Da?Da("log",e,...n):console.log(e,...n)}function s_(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=s_(n);let e="THREE."+n.shift();if(Da)Da("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=s_(n);let e="THREE."+n.shift();if(Da)Da("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ir(...n){let e=n.join(" ");e in zg||(zg[e]=!0,Le(...n))}function r_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var a_={[Fl]:Fl,[Ul]:Bl,[Ol]:Ol,[sr]:kl,[Nl]:Nl,[Bl]:Ul,[zl]:zl,[kl]:sr},Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gg=1234567,Go=Math.PI/180,Dr=180/Math.PI;function ts(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Af(n,e){return(n%e+e)%e}function oy(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function cy(n,e,t){return n!==e?(t-n)/(e-n):0}function Ho(n,e,t){return(1-t)*n+t*e}function ly(n,e,t,i){return Ho(n,e,1-Math.exp(-t*i))}function hy(n,e=1){return e-Math.abs(Af(n,e*2)-e)}function uy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function dy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function fy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function py(n,e){return n+Math.random()*(e-n)}function my(n){return n*(.5-Math.random())}function gy(n){n!==void 0&&(Gg=n);let e=Gg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _y(n){return n*Go}function by(n){return n*Dr}function xy(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function vy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Tf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yy(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Rf(n,e){if(e.constructor===Float32Array)return n;let t=jh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Cf(n,e){if(e.constructor===Float32Array)return n;let t=jh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Kh={DEG2RAD:Go,RAD2DEG:Dr,generateUUID:ts,clamp:it,euclideanModulo:Af,mapLinear:oy,inverseLerp:cy,lerp:Ho,damp:ly,pingpong:hy,smoothstep:uy,smootherstep:dy,randInt:fy,randFloat:py,randFloatSpread:my,seededRandom:gy,degToRad:_y,radToDeg:by,isPowerOfTwo:xy,ceilPowerOfTwo:vy,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:yy,normalize:Cf,denormalize:Rf},Ff=class Ff{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ff.prototype.isVector2=!0;var Ze=Ff,si=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(u!==b||c!==d||l!==f||h!==g){let p=c*d+l*f+h*g+u*b;p<0&&(d=-d,f=-f,g=-g,b=-b,p=-p);let m=1-o;if(p<.9995){let x=Math.acos(p),w=Math.sin(x);m=Math.sin(m*x)/w,o=Math.sin(o*x)/w,c=c*m+d*o,l=l*m+f*o,h=h*m+g*o,u=u*m+b*o}else{c=c*m+d*o,l=l*m+f*o,h=h*m+g*o,u=u*m+b*o;let x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nf=class Nf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nf.prototype.isVector3=!0;var O=Nf,_d=new O,Hg=new si,Uf=class Uf{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],b=s[0],p=s[3],m=s[6],x=s[1],w=s[4],y=s[7],E=s[2],A=s[5],_=s[8];return r[0]=a*b+o*x+c*E,r[3]=a*p+o*w+c*A,r[6]=a*m+o*y+c*_,r[1]=l*b+h*x+u*E,r[4]=l*p+h*w+u*A,r[7]=l*m+h*y+u*_,r[2]=d*b+f*x+g*E,r[5]=d*p+f*w+g*A,r[8]=d*m+f*y+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(s*l-h*i)*b,e[2]=(o*i-s*a)*b,e[3]=d*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(i*c-l*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bd.makeScale(e,t)),this}rotate(e){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uf.prototype.isMatrix3=!0;var We=Uf,bd=new We,Vg=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wg=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sy(){let n={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Ca(s.r),s.g=Ca(s.g),s.b=Ca(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?Vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ln]:{primaries:e,whitePoint:i,transfer:Vo,toXYZ:Vg,fromXYZ:Wg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Vg,fromXYZ:Wg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}var et=Sy();function Ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ca(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ma,Gl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ma===void 0&&(ma=La("canvas")),ma.width=e.width,ma.height=e.height;let s=ma.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ma}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=La("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ms(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ms(t[i]/255)*255):t[i]=Ms(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},My=0,Fa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xd(s[a].image)):r.push(xd(s[a]))}else r=xd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function xd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var wy=0,vd=new O,rn=class n extends Yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=vi,s=vi,r=Dt,a=Mi,o=wi,c=xn,l=n.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=ts(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vd).x}get height(){return this.source.getSize(vd).y}get depth(){return this.source.getSize(vd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=ff;rn.DEFAULT_ANISOTROPY=1;var Of=class Of{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(f+1)/2,E=(m+1)/2,A=(h+d)/4,_=(u+b)/4,M=(g+p)/4;return w>y&&w>E?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=A/i,r=_/i):y>E?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=M/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=_/r,s=M/r),this.set(i,s,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Of.prototype.isVector4=!0;var _t=Of,Hl=class extends Yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new rn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Hl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},qo=class extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vl=class extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var sh=class sh{constructor(e,t,i,s,r,a,o,c,l,h,u,d,f,g,b,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,b,p)}set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,b,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=b,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sh().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ga.setFromMatrixColumn(e,0).length(),r=1/ga.setFromMatrixColumn(e,1).length(),a=1/ga.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ey,e,Ay)}lookAt(e,t,i){let s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Js.crossVectors(i,ni),Js.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Js.crossVectors(i,ni)),Js.normalize(),ol.crossVectors(ni,Js),s[0]=Js.x,s[4]=ol.x,s[8]=ni.x,s[1]=Js.y,s[5]=ol.y,s[9]=ni.y,s[2]=Js.z,s[6]=ol.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],b=i[6],p=i[10],m=i[14],x=i[3],w=i[7],y=i[11],E=i[15],A=s[0],_=s[4],M=s[8],F=s[12],C=s[1],D=s[5],H=s[9],V=s[13],I=s[2],P=s[6],q=s[10],k=s[14],Q=s[3],W=s[7],j=s[11],te=s[15];return r[0]=a*A+o*C+c*I+l*Q,r[4]=a*_+o*D+c*P+l*W,r[8]=a*M+o*H+c*q+l*j,r[12]=a*F+o*V+c*k+l*te,r[1]=h*A+u*C+d*I+f*Q,r[5]=h*_+u*D+d*P+f*W,r[9]=h*M+u*H+d*q+f*j,r[13]=h*F+u*V+d*k+f*te,r[2]=g*A+b*C+p*I+m*Q,r[6]=g*_+b*D+p*P+m*W,r[10]=g*M+b*H+p*q+m*j,r[14]=g*F+b*V+p*k+m*te,r[3]=x*A+w*C+y*I+E*Q,r[7]=x*_+w*D+y*P+E*W,r[11]=x*M+w*H+y*q+E*j,r[15]=x*F+w*V+y*k+E*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],p=e[11],m=e[15],x=c*f-l*d,w=o*f-l*u,y=o*d-c*u,E=a*f-l*h,A=a*d-c*h,_=a*u-o*h;return t*(b*x-p*w+m*y)-i*(g*x-p*E+m*A)+s*(g*w-b*E+m*_)-r*(g*y-b*A+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],p=e[14],m=e[15],x=t*o-i*a,w=t*c-s*a,y=t*l-r*a,E=i*c-s*o,A=i*l-r*o,_=s*l-r*c,M=h*b-u*g,F=h*p-d*g,C=h*m-f*g,D=u*p-d*b,H=u*m-f*b,V=d*m-f*p,I=x*V-w*H+y*D+E*C-A*F+_*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/I;return e[0]=(o*V-c*H+l*D)*P,e[1]=(s*H-i*V-r*D)*P,e[2]=(b*_-p*A+m*E)*P,e[3]=(d*A-u*_-f*E)*P,e[4]=(c*C-a*V-l*F)*P,e[5]=(t*V-s*C+r*F)*P,e[6]=(p*y-g*_-m*w)*P,e[7]=(h*_-d*y+f*w)*P,e[8]=(a*H-o*C+l*M)*P,e[9]=(i*C-t*H-r*M)*P,e[10]=(g*A-b*y+m*x)*P,e[11]=(u*y-h*A-f*x)*P,e[12]=(o*F-a*D-c*M)*P,e[13]=(t*D-i*F+s*M)*P,e[14]=(b*w-g*E-p*x)*P,e[15]=(h*E-u*w+d*x)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,b=a*h,p=a*u,m=o*u,x=c*l,w=c*h,y=c*u,E=i.x,A=i.y,_=i.z;return s[0]=(1-(b+m))*E,s[1]=(f+y)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+m))*A,s[6]=(p+x)*A,s[7]=0,s[8]=(g+w)*_,s[9]=(p-x)*_,s[10]=(1-(d+b))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ga.set(s[0],s[1],s[2]).length(),o=ga.set(s[4],s[5],s[6]).length(),c=ga.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fi.copy(this);let l=1/a,h=1/o,u=1/c;return Fi.elements[0]*=l,Fi.elements[1]*=l,Fi.elements[2]*=l,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,t.setFromRotationMatrix(Fi),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=yi,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,b;if(c)g=r/(a-r),b=a*r/(a-r);else if(o===yi)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Pa)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=yi,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,b;if(c)g=1/(a-r),b=a/(a-r);else if(o===yi)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===Pa)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};sh.prototype.isMatrix4=!0;var He=sh,ga=new O,Fi=new He,Ey=new O(0,0,0),Ay=new O(1,1,1),Js=new O,ol=new O,ni=new O,qg=new He,Xg=new si,$i=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xg.setFromEuler(this),this.setFromQuaternion(Xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var Xo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ty=0,jg=new O,_a=new si,_s=new He,cl=new O,Lo=new O,Ry=new O,Cy=new si,Kg=new O(1,0,0),Yg=new O(0,1,0),$g=new O(0,0,1),Jg={type:"added"},Iy={type:"removed"},ba={type:"childadded",child:null},yd={type:"childremoved",child:null},Ft=class n extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new $i,i=new si,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new We}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.multiply(_a),this}rotateOnWorldAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.premultiply(_a),this}rotateX(e){return this.rotateOnAxis(Kg,e)}rotateY(e){return this.rotateOnAxis(Yg,e)}rotateZ(e){return this.rotateOnAxis($g,e)}translateOnAxis(e,t){return jg.copy(e).applyQuaternion(this.quaternion),this.position.add(jg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kg,e)}translateY(e){return this.translateOnAxis(Yg,e)}translateZ(e){return this.translateOnAxis($g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_s.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cl.copy(e):cl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_s.lookAt(Lo,cl,this.up):_s.lookAt(cl,Lo,this.up),this.quaternion.setFromRotationMatrix(_s),s&&(_s.extractRotation(s.matrixWorld),_a.setFromRotationMatrix(_s),this.quaternion.premultiply(_a.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jg),ba.child=e,this.dispatchEvent(ba),ba.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iy),yd.child=e,this.dispatchEvent(yd),yd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_s.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_s.multiply(e.parent.matrixWorld)),e.applyMatrix4(_s),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jg),ba.child=e,this.dispatchEvent(ba),ba.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,Ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new O(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Py={type:"move"},Na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let p=t.getJointPose(b,i),m=this._getHandJoint(l,b);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Py)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new In;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},o_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zs={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Sd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=Af(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Sd(a,r,e+1/3),this.g=Sd(a,r,e),this.b=Sd(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){let i=o_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return et.workingToColorSpace(An.copy(this),e),Math.round(it(An.r*255,0,255))*65536+Math.round(it(An.g*255,0,255))*256+Math.round(it(An.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(An.copy(this),t);let i=An.r,s=An.g,r=An.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=nn){et.workingToColorSpace(An.copy(this),e);let t=An.r,i=An.g,s=An.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Zs),this.setHSL(Zs.h+e,Zs.s+t,Zs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zs),e.getHSL(ll);let i=Ho(Zs.h,ll.h,t),s=Ho(Zs.s,ll.s,t),r=Ho(Zs.l,ll.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Ue;Ue.NAMES=o_;var Ua=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ni=new O,bs=new O,Md=new O,xs=new O,xa=new O,va=new O,Zg=new O,wd=new O,Ed=new O,Ad=new O,Td=new _t,Rd=new _t,Cd=new _t,ir=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ni.subVectors(e,t),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ni.subVectors(s,t),bs.subVectors(i,t),Md.subVectors(e,t);let a=Ni.dot(Ni),o=Ni.dot(bs),c=Ni.dot(Md),l=bs.dot(bs),h=bs.dot(Md),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,xs)===null?!1:xs.x>=0&&xs.y>=0&&xs.x+xs.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,xs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xs.x),c.addScaledVector(a,xs.y),c.addScaledVector(o,xs.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Td.setScalar(0),Rd.setScalar(0),Cd.setScalar(0),Td.fromBufferAttribute(e,t),Rd.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Td,r.x),a.addScaledVector(Rd,r.y),a.addScaledVector(Cd,r.z),a}static isFrontFacing(e,t,i,s){return Ni.subVectors(i,t),bs.subVectors(e,t),Ni.cross(bs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Ni.cross(bs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;xa.subVectors(s,i),va.subVectors(r,i),wd.subVectors(e,i);let c=xa.dot(wd),l=va.dot(wd);if(c<=0&&l<=0)return t.copy(i);Ed.subVectors(e,s);let h=xa.dot(Ed),u=va.dot(Ed);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(i).addScaledVector(xa,a);Ad.subVectors(e,r);let f=xa.dot(Ad),g=va.dot(Ad);if(g>=0&&f<=g)return t.copy(r);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(va,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Zg.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Zg,o);let m=1/(p+b+d);return a=b*m,o=d*m,t.copy(i).addScaledVector(xa,a).addScaledVector(va,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ri=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ui):Ui.fromBufferAttribute(r,a),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hl.copy(i.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),ul.subVectors(this.max,Do),ya.subVectors(e.a,Do),Sa.subVectors(e.b,Do),Ma.subVectors(e.c,Do),Qs.subVectors(Sa,ya),er.subVectors(Ma,Sa),Ar.subVectors(ya,Ma);let t=[0,-Qs.z,Qs.y,0,-er.z,er.y,0,-Ar.z,Ar.y,Qs.z,0,-Qs.x,er.z,0,-er.x,Ar.z,0,-Ar.x,-Qs.y,Qs.x,0,-er.y,er.x,0,-Ar.y,Ar.x,0];return!Id(t,ya,Sa,Ma,ul)||(t=[1,0,0,0,1,0,0,0,1],!Id(t,ya,Sa,Ma,ul))?!1:(dl.crossVectors(Qs,er),t=[dl.x,dl.y,dl.z],Id(t,ya,Sa,Ma,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vs=[new O,new O,new O,new O,new O,new O,new O,new O],Ui=new O,hl=new ri,ya=new O,Sa=new O,Ma=new O,Qs=new O,er=new O,Ar=new O,Do=new O,ul=new O,dl=new O,Tr=new O;function Id(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Tr.fromArray(n,r);let o=s.x*Math.abs(Tr.x)+s.y*Math.abs(Tr.y)+s.z*Math.abs(Tr.z),c=e.dot(Tr),l=t.dot(Tr),h=i.dot(Tr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Yt=new O,fl=new Ze,Ly=0,zt=class extends Yi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ly++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wf,this.updateRanges=[],this.gpuType=ai,this.version=0,this._normalizationScale=e!==void 0?jh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Rf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Cf(e,this.array)}};var jo=class extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ko=class extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Pn=class extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Dy=new ri,Fo=new O,Pd=new O,Hn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Dy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);let t=Fo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Pd)),this.expandByPoint(Fo.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fy=0,xi=new He,Ld=new Ft,wa=new O,ii=new ri,No=new ri,mn=new O,gn=class n extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ry(e)?Ko:jo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,i){return xi.makeTranslation(e,t,i),this.applyMatrix4(xi),this}scale(e,t,i){return xi.makeScale(e,t,i),this.applyMatrix4(xi),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wa).negate(),this.translate(wa.x,wa.y,wa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pn(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];No.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(ii.min,No.min),ii.expandByPoint(mn),mn.addVectors(ii.max,No.max),ii.expandByPoint(mn)):(ii.expandByPoint(No.min),ii.expandByPoint(No.max))}ii.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)mn.fromBufferAttribute(o,l),c&&(wa.fromBufferAttribute(e,l),mn.add(wa)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new zt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let F=0;F<i.count;F++)o[F]=new O,c[F]=new O;let h=new O,u=new O,d=new O,f=new Ze,g=new Ze,b=new Ze,p=new O,m=new O;function x(F,C,D){l[F]=l[C]=l[D]=1,h.fromBufferAttribute(i,F),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,D),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,C),b.fromBufferAttribute(r,D),u.sub(h),d.sub(h),g.sub(f),b.sub(f);let H=1/(g.x*b.y-b.x*g.y);isFinite(H)&&(p.copy(u).multiplyScalar(b.y).addScaledVector(d,-g.y).multiplyScalar(H),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-b.x).multiplyScalar(H),o[F].add(p),o[C].add(p),o[D].add(p),c[F].add(m),c[C].add(m),c[D].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,C=w.length;F<C;++F){let D=w[F],H=D.start,V=D.count;for(let I=H,P=H+V;I<P;I+=3)x(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new O,E=new O,A=new O,_=new O;function M(F){A.fromBufferAttribute(s,F),_.copy(A);let C=o[F];y.copy(C),y.sub(A.multiplyScalar(A.dot(C))).normalize(),E.crossVectors(_,C);let H=E.dot(c[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,H)}for(let F=0,C=i.count;F<C;++F)l[F]&&M(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let b=0,p=c.length;b<p;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new zt(d,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wf,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Qg(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ts()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Cn=new O,ka=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?jh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Wo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Wo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Rf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Cf(e,this.data.array)}},Dd=new O,Ny=new O,Uy=new We,Oi=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Dd.subVectors(i,t).cross(Ny.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Dd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Uy.getNormalMatrix(e),s=this.coplanarPoint(Dd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Oy=0,Fn=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Ka,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=rf,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dl,this.stencilZFail=Dl,this.stencilZPass=Dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ys=new O,Fd=new O,pl=new O,ml=new O,Fr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ys)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ys.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ys.copy(this.origin).addScaledVector(this.direction,t),ys.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fd.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),ml.copy(this.origin).sub(Fd);let r=e.distanceTo(t)*.5,a=-this.direction.dot(pl),o=ml.dot(this.direction),c=-ml.dot(pl),l=ml.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fd).addScaledVector(pl,d),f}intersectSphere(e,t){if(e.radius<0)return null;ys.subVectors(e.center,this.origin);let i=ys.dot(this.direction),s=ys.dot(ys)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ys)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,b=t.y-a.y,p=t.z-a.z,m=i.x-a.x,x=i.y-a.y,w=i.z-a.z,y=Math.abs(c),E=Math.abs(l),A=Math.abs(h),_,M,F,C,D,H,V,I,P,q,k,Q;if(y>=E&&y>=A?(F=c,H=u,P=g,Q=m,c>=0?(_=l,M=h,C=d,D=f,V=b,I=p,q=x,k=w):(_=h,M=l,C=f,D=d,V=p,I=b,q=w,k=x)):E>=A?(F=l,H=d,P=b,Q=x,l>=0?(_=h,M=c,C=f,D=u,V=p,I=g,q=w,k=m):(_=c,M=h,C=u,D=f,V=g,I=p,q=m,k=w)):(F=h,H=f,P=p,Q=w,h>=0?(_=c,M=l,C=u,D=d,V=g,I=b,q=m,k=x):(_=l,M=c,C=d,D=u,V=b,I=g,q=x,k=m)),F===0)return null;let W=_/F,j=M/F,te=1/F,ye=C-W*H,Ve=D-j*H,Y=V-W*P,pe=I-j*P,Se=q-W*Q,Be=k-j*Q,ge=Se*pe-Be*Y,Xe=ye*Be-Ve*Se,Ot=Y*Ve-pe*ye;if(s){if(ge<0||Xe<0||Ot<0)return null}else if((ge<0||Xe<0||Ot<0)&&(ge>0||Xe>0||Ot>0))return null;let Pe=ge+Xe+Ot;if(Pe===0)return null;let ct=te*(ge*H+Xe*P+Ot*Q);return(Pe>0?ct<0:ct>0)?null:this.at(ct/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Si=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},e0=new He,Rr=new Fr,gl=new Hn,t0=new O,_l=new O,bl=new O,xl=new O,Nd=new O,vl=new O,n0=new O,yl=new O,$t=class extends Ft{constructor(e=new gn,t=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){vl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Nd.fromBufferAttribute(u,e),a?vl.addScaledVector(Nd,h):vl.addScaledVector(Nd.sub(t),h))}t.add(vl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),Rr.copy(e.ray).recast(e.near),!(gl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(gl,t0)===null||Rr.origin.distanceToSquared(t0)>(e.far-e.near)**2))&&(e0.copy(r).invert(),Rr.copy(e.ray).applyMatrix4(e0),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let p=d[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),w=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,E=w;y<E;y+=3){let A=o.getX(y),_=o.getX(y+1),M=o.getX(y+2);s=Sl(this,m,e,i,l,h,u,A,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let p=g,m=b;p<m;p+=3){let x=o.getX(p),w=o.getX(p+1),y=o.getX(p+2);s=Sl(this,a,e,i,l,h,u,x,w,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let p=d[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,E=w;y<E;y+=3){let A=y,_=y+1,M=y+2;s=Sl(this,m,e,i,l,h,u,A,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let p=g,m=b;p<m;p+=3){let x=p,w=p+1,y=p+2;s=Sl(this,a,e,i,l,h,u,x,w,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ky(n,e,t,i,s,r,a,o){let c;if(e.side===Un?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Qi,o),c===null)return null;yl.copy(o),yl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(yl);return l<t.near||l>t.far?null:{distance:l,point:yl.clone(),object:n}}function Sl(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,_l),n.getVertexPosition(c,bl),n.getVertexPosition(l,xl);let h=ky(n,e,t,i,_l,bl,xl,n0);if(h){let u=new O;ir.getBarycoord(n0,_l,bl,xl,u),s&&(h.uv=ir.getInterpolatedAttribute(s,o,c,l,u,new Ze)),r&&(h.uv1=ir.getInterpolatedAttribute(r,o,c,l,u,new Ze)),a&&(h.normal=ir.getInterpolatedAttribute(a,o,c,l,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new O,materialIndex:0};ir.getNormal(_l,bl,xl,d.normal),h.face=d,h.barycoord=u}return h}var Uo=new _t,i0=new _t,s0=new _t,By=new _t,r0=new He,Ml=new O,Ud=new Hn,a0=new He,Od=new Fr,Yo=class extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gd,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ri),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ml),this.boundingBox.expandByPoint(Ml)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ml),this.boundingSphere.expandByPoint(Ml)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ud.copy(this.boundingSphere),Ud.applyMatrix4(s),e.ray.intersectsSphere(Ud)!==!1&&(a0.copy(s).invert(),Od.copy(e.ray).applyMatrix4(a0),!(this.boundingBox!==null&&Od.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Od)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===j0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;i0.fromBufferAttribute(s.attributes.skinIndex,e),s0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Uo.copy(t),t.set(0,0,0,0)):(Uo.set(t.x,t.y,t.z,1),t.set(0,0,0)),Uo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=s0.getComponent(r);if(a!==0){let o=i0.getComponent(r);r0.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(By.copy(Uo).applyMatrix4(r0),a)}}return t.isVector4&&(t.w=Uo.w),t.applyMatrix4(this.bindMatrixInverse)}},Ba=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},za=class extends rn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=qt,h=qt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},o0=new He,zy=new He,$o=class n{constructor(e=[],t=[]){this.uuid=ts(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:zy;o0.multiplyMatrices(o,t[r]),o0.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new za(t,e,e,wi,ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(Le("Skeleton: No bone found with UUID:",r),a=new Ba),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},Es=class extends zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ea=new He,c0=new He,wl=[],l0=new ri,Gy=new He,Oo=new $t,ko=new Hn,Jo=class extends $t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Es(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Gy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ea),l0.copy(e.boundingBox).applyMatrix4(Ea),this.boundingBox.union(l0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ea),ko.copy(e.boundingSphere).applyMatrix4(Ea),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(i),e.ray.intersectsSphere(ko)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ea),c0.multiplyMatrices(i,Ea),Oo.matrixWorld=c0,Oo.raycast(e,wl);for(let a=0,o=wl.length;a<o;a++){let c=wl[a];c.instanceId=r,c.object=this,t.push(c)}wl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new za(new Float32Array(s*this.count),s,this.count,fh,ai));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cr=new Hn,Hy=new Ze(.5,.5),El=new O,ar=class{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],b=r[9],p=r[10],m=r[11],x=r[12],w=r[13],y=r[14],E=r[15];if(s[0].setComponents(l-a,f-h,m-g,E-x).normalize(),s[1].setComponents(l+a,f+h,m+g,E+x).normalize(),s[2].setComponents(l+o,f+u,m+b,E+w).normalize(),s[3].setComponents(l-o,f-u,m-b,E-w).normalize(),i)s[4].setComponents(c,d,p,y).normalize(),s[5].setComponents(l-c,f-d,m-p,E-y).normalize();else if(s[4].setComponents(l-c,f-d,m-p,E-y).normalize(),t===yi)s[5].setComponents(l+c,f+d,m+p,E+y).normalize();else if(t===Pa)s[5].setComponents(c,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);let t=Hy.distanceTo(e.center);return Cr.radius=.7071067811865476+t,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(El.x=s.normal.x>0?e.max.x:e.min.x,El.y=s.normal.y>0?e.max.y:e.min.y,El.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},h0=new He,Wl=class n{constructor(){this.coordinateSystem=yi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];h0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ar),i[s].setFromProjectionMatrix(h0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ar),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ga=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ql=new O,Xl=new O,u0=new He,Bo=new Fr,Al=new Hn,kd=new O,d0=new O,Nr=class extends Ft{constructor(e=new gn,t=new Ga){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ql.fromBufferAttribute(t,s-1),Xl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ql.distanceTo(Xl);e.setAttribute("lineDistance",new Pn(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),Al.radius+=r,e.ray.intersectsSphere(Al)===!1)return;u0.copy(s).invert(),Bo.copy(e.ray).applyMatrix4(u0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,p=g-1;b<p;b+=l){let m=h.getX(b),x=h.getX(b+1),w=Tl(this,e,Bo,c,m,x,b);w&&t.push(w)}if(this.isLineLoop){let b=h.getX(g-1),p=h.getX(f),m=Tl(this,e,Bo,c,b,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,p=g-1;b<p;b+=l){let m=Tl(this,e,Bo,c,b,b+1,b);m&&t.push(m)}if(this.isLineLoop){let b=Tl(this,e,Bo,c,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Tl(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(ql.fromBufferAttribute(o,s),Xl.fromBufferAttribute(o,r),t.distanceSqToSegment(ql,Xl,kd,d0)>i)return;kd.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(kd);if(!(l<e.near||l>e.far))return{distance:l,point:d0.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var f0=new O,p0=new O,Zo=class extends Nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)f0.fromBufferAttribute(t,s),p0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+f0.distanceTo(p0);e.setAttribute("lineDistance",new Pn(i,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qo=class extends Nr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ha=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},m0=new He,Xd=new Fr,Rl=new Hn,Cl=new O,ec=class extends Ft{constructor(e=new gn,t=new Ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(s),Rl.radius+=r,e.ray.intersectsSphere(Rl)===!1)return;m0.copy(s).invert(),Xd.copy(e.ray).applyMatrix4(m0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let p=l.getX(g);Cl.fromBufferAttribute(u,p),g0(Cl,p,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)Cl.fromBufferAttribute(u,g),g0(Cl,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function g0(n,e,t,i,s,r,a){let o=Xd.distanceSqToPoint(n);if(o<t){let c=new O;Xd.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var tc=class extends rn{constructor(e=[],t=Gr,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nc=class extends rn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var As=class extends rn{constructor(e,t,i=ki,s,r,a,o=qt,c=qt,l,h=ws,u=1){if(h!==ws&&h!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ic=class extends As{constructor(e,t=ki,i=Gr,s,r,a=qt,o=qt,c,l=ws){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sc=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Va=class n extends gn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Pn(l,3)),this.setAttribute("normal",new Pn(h,3)),this.setAttribute("uv",new Pn(u,2));function g(b,p,m,x,w,y,E,A,_,M,F){let C=y/_,D=E/M,H=y/2,V=E/2,I=A/2,P=_+1,q=M+1,k=0,Q=0,W=new O;for(let j=0;j<q;j++){let te=j*D-V;for(let ye=0;ye<P;ye++){let Ve=ye*C-H;W[b]=Ve*x,W[p]=te*w,W[m]=I,l.push(W.x,W.y,W.z),W[b]=0,W[p]=0,W[m]=A>0?1:-1,h.push(W.x,W.y,W.z),u.push(ye/_),u.push(1-j/M),k+=1}}for(let j=0;j<M;j++)for(let te=0;te<_;te++){let ye=d+te+P*j,Ve=d+te+P*(j+1),Y=d+(te+1)+P*(j+1),pe=d+(te+1)+P*j;c.push(ye,Ve,pe),c.push(Ve,Y,pe),Q+=6}o.addGroup(f,Q,F),f+=Q,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var rc=class n extends gn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],p=[];for(let m=0;m<h;m++){let x=m*d-a;for(let w=0;w<l;w++){let y=w*u-r;g.push(y,-x,0),b.push(0,0,1),p.push(w/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){let w=x+l*m,y=x+l*(m+1),E=x+1+l*(m+1),A=x+1+l*m;f.push(w,y,A),f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new Pn(g,3)),this.setAttribute("normal",new Pn(b,3)),this.setAttribute("uv",new Pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Wr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(_0(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(_0(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Tn(n){let e={};for(let t=0;t<n.length;t++){let i=Wr(n[t]);for(let s in i)e[s]=i[s]}return e}function _0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Vy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function If(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var c_={clone:Wr,merge:Tn},Wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Vy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[i].value=new We().fromArray(s.value);break;case"m4":this.uniforms[i].value=new He().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jl=class extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ur=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nn=class extends Ur{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Or=class extends Fn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=ah,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Kl=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yl=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function nr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function zo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Xy(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function b0(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=n[o+c]}return s}function jy(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var Ji=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$l=class extends Ji{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vd,endingEnd:Vd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wd:r=e,o=2*t-i;break;case qd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Wd:a=e,c=2*i-t;break;case qd:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),b=g*g,p=b*g,m=-d*p+2*d*b-d*g,x=(1+d)*p+(-1.5-2*d)*b+(-.5+d)*g+1,w=(-1-f)*p+(1.5+f)*b+.5*g,y=f*p-f*b;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+x*a[l+E]+w*a[c+E]+y*a[u+E];return r}},Jl=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Zl=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ql=class extends Ji{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(s-t),b=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*b+a[c+p]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let b=a[l+g],p=a[c+g],m=f*d+g*2,x=u[m],w=u[m+1],y=e*d+g*2,E=h[y],A=h[y+1],_=Yy(i,t,x,E,s);r[g]=l_(_,b,w,A,p)}return r}};function l_(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Ky(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Yy(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=l_(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=Ky(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nr(t,this.TimeBufferType),this.values=nr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:nr(e.times,Array),values:nr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),zo(e.settings)&&(i.settings={inTangents:nr(e.settings.inTangents,Array),outTangents:nr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ql(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Lr:t=this.InterpolantFactoryMethodLinear;break;case Ll:t=this.InterpolantFactoryMethodSmooth;break;case Hd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return Ll;case this.InterpolantFactoryMethodBezier:return Hd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;zo(this.settings)&&(x0(this.settings.inTangents,e),x0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;zo(this.settings)&&(v0(this.settings.inTangents,e),v0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){qe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){qe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ay(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){qe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ll,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,zo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function x0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function v0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Lr;var Ts=class extends Wn{constructor(e,t,i){super(e,t,i)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Pr;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};ac.prototype.ValueTypeName="color";var Rs=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};Rs.prototype.ValueTypeName="number";var eh=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)si.slerpFlat(r,0,a,l-o,a,l,c);return r}},Cs=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new eh(this.times,this.values,this.getValueSize(),e)}};Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Wn{constructor(e,t,i){super(e,t,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Pr;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}};or.prototype.ValueTypeName="vector";var oc=class{constructor(e="",t=-1,i=[],s=K0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ts(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Jy(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Wn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Xy(c);c=b0(c,1,h),l=b0(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Rs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function $y(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return or;case"color":return ac;case"quaternion":return Cs;case"bool":case"boolean":return Ts;case"string":return Is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Jy(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=$y(n.type);if(n.times===void 0){let i=[],s=[];jy(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),zo(n.settings)&&(t.settings={inTangents:nr(n.settings.inTangents,Float32Array),outTangents:nr(n.settings.outTangents,Float32Array)}),t}var Ki={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(y0(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!y0(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function y0(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var th=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},h_=new th,Zi=class{constructor(e){this.manager=e!==void 0?e:h_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ss={},jd=class extends Error{constructor(e,t){super(e),this.response=t}},Wa=class extends Zi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ki.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ss[e]!==void 0){Ss[e].push({onLoad:t,onProgress:i,onError:s});return}Ss[e]=[],Ss[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ss[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,b=0,p=new ReadableStream({start(m){x();function x(){u.read().then(({done:w,value:y})=>{if(w)m.close();else{b+=y.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let A=0,_=h.length;A<_;A++){let M=h[A];M.onProgress&&M.onProgress(E)}m.enqueue(y),x()}},w=>{m.error(w)})}}});return new Response(p)}else throw new jd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ki.add(`file:${e}`,l);let h=Ss[e];delete Ss[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ss[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ss[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Aa=new WeakMap,nh=class extends Zi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ki.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Aa.get(a);u===void 0&&(u=[],Aa.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=La("img");function c(){h(),t&&t(this);let u=Aa.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Aa.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ki.remove(`image:${e}`);let d=Aa.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Aa.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ki.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var cc=class extends Zi{constructor(e){super(e)}load(e,t,i,s){let r=new rn,a=new nh(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},kr=class extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lc=class extends kr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bd=new He,S0=new O,M0=new O,qa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;S0.setFromMatrixPosition(e.matrixWorld),t.position.copy(S0),M0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(M0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Bd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Bd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Pa||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Il=new O,Pl=new si,ji=new O,hc=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Pl,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Pl,ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Il,Pl,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Pl,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new O,w0=new Ze,E0=new Ze,sn=class extends hc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,w0,E0),t.subVectors(E0,w0)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Kd=class extends qa{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Dr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},uc=class extends kr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Kd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yd=class extends qa{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},dc=class extends kr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Yd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ps=class extends hc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$d=class extends qa{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new $d}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ls=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zd=new WeakMap,fc=class extends Zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ki.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{zd.has(a)===!0?(s&&s(zd.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ki.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),zd.set(c,l),Ki.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ta=-90,Ra=1,Xa=class extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Ta,Ra,e,t);s.layers=this.layers,this.add(s);let r=new sn(Ta,Ra,e,t);r.layers=this.layers,this.add(r);let a=new sn(Ta,Ra,e,t);a.layers=this.layers,this.add(a);let o=new sn(Ta,Ra,e,t);o.layers=this.layers,this.add(o);let c=new sn(Ta,Ra,e,t);c.layers=this.layers,this.add(c);let l=new sn(Ta,Ra,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=b,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ih=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Pf="\\[\\]\\.:\\/",Zy=new RegExp("["+Pf+"]","g"),Lf="[^"+Pf+"]",Qy="[^"+Pf.replace("\\.","")+"]",eS=/((?:WC+[\/:])*)/.source.replace("WC",Lf),tS=/(WCOD+)?/.source.replace("WCOD",Qy),nS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lf),iS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lf),sS=new RegExp("^"+eS+tS+nS+iS+"$"),rS=["material","materials","bones","map"],Jd=class{constructor(e,t,i){let s=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zy,"")}static parseTrackName(e){let t=sS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);rS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Jd;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NT=new Float32Array(1);var kf=class kf{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};kf.prototype.isMatrix2=!0;var Zd=kf;function Df(n,e,t,i){let s=aS(i);switch(t){case bf:return n*e;case fh:return n*e/s.components*s.byteLength;case ph:return n*e/s.components*s.byteLength;case lr:return n*e*2/s.components*s.byteLength;case mh:return n*e*2/s.components*s.byteLength;case xf:return n*e*3/s.components*s.byteLength;case wi:return n*e*4/s.components*s.byteLength;case gh:return n*e*4/s.components*s.byteLength;case mc:case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _c:case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bh:case vh:return Math.max(n,16)*Math.max(e,8)/4;case _h:case xh:return Math.max(n,8)*Math.max(e,8)/2;case yh:case Sh:case wh:case Eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mh:case xc:case Ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gh:case Hh:case Vh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Wh:case qh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vc:case Xh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aS(n){switch(n){case xn:case pf:return{byteLength:1,components:1};case Ja:case mf:case Xn:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case ki:case hh:case ai:return{byteLength:4,components:1};case gf:case _f:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function L_(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function cS(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let b=u[f];n.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var lS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
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
#endif`,uS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
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
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_S=`#ifdef USE_BATCHING
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
#endif`,bS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SS=`#ifdef USE_IRIDESCENCE
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
#endif`,MS=`#ifdef USE_BUMPMAP
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
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,LS=`#define PI 3.141592653589793
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
} // validated`,DS=`vec3 transformedNormal = objectNormal;
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
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,US=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kS="gl_FragColor = linearToOutputTexel( gl_FragColor );",BS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zS=`#ifdef USE_ENVMAP
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
#endif`,GS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
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
#endif`,VS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YS=`#ifdef USE_GRADIENTMAP
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
}`,$S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,e2=`#ifdef USE_ENVMAP
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
#endif`,t2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r2=`PhysicalMaterial material;
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
#endif`,a2=`uniform sampler2D dfgLUT;
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
}`,o2=`
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
#endif`,c2=`#if defined( RE_IndirectDiffuse )
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
#endif`,l2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h2=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,u2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b2=`#if defined( USE_POINTS_UV )
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
#endif`,x2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S2=`#if defined( USE_MORPHCOLORS )
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
#endif`,M2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w2=`#ifdef USE_MORPHTARGETS
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
#endif`,E2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,P2=`#ifdef USE_NORMALMAP
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
#endif`,L2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j2=`float getShadowMask() {
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
}`,K2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y2=`#ifdef USE_SKINNING
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
#endif`,$2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J2=`#ifdef USE_SKINNING
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
#endif`,Z2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nM=`#ifdef USE_TRANSMISSION
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
#endif`,iM=`#ifdef USE_TRANSMISSION
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lM=`uniform sampler2D t2D;
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uM=`uniform float backgroundBlurriness;
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
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`#include <common>
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
}`,mM=`#if DEPTH_PACKING == 3200
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
}`,gM=`#define DISTANCE
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
}`,_M=`#define DISTANCE
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
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
}`,yM=`uniform vec3 diffuse;
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
}`,SM=`#include <common>
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
}`,MM=`uniform vec3 diffuse;
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
}`,wM=`#define LAMBERT
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
}`,EM=`#define LAMBERT
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
}`,AM=`#define MATCAP
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
}`,TM=`#define MATCAP
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
}`,RM=`#define NORMAL
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
}`,CM=`#define NORMAL
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
}`,IM=`#define PHONG
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
}`,PM=`#define PHONG
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
}`,LM=`#define STANDARD
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
}`,DM=`#define STANDARD
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
}`,FM=`#define TOON
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
}`,NM=`#define TOON
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
}`,UM=`uniform float size;
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
}`,OM=`uniform vec3 diffuse;
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
}`,kM=`#include <common>
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
}`,BM=`uniform vec3 color;
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
}`,zM=`uniform float rotation;
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
}`,GM=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:lS,alphahash_pars_fragment:hS,alphamap_fragment:uS,alphamap_pars_fragment:dS,alphatest_fragment:fS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,batching_pars_vertex:_S,batching_vertex:bS,begin_vertex:xS,beginnormal_vertex:vS,bsdfs:yS,iridescence_fragment:SS,bumpmap_pars_fragment:MS,clipping_planes_fragment:wS,clipping_planes_pars_fragment:ES,clipping_planes_pars_vertex:AS,clipping_planes_vertex:TS,color_fragment:RS,color_pars_fragment:CS,color_pars_vertex:IS,color_vertex:PS,common:LS,defaultnormal_vertex:DS,displacementmap_pars_vertex:FS,displacementmap_vertex:NS,emissivemap_fragment:US,emissivemap_pars_fragment:OS,colorspace_fragment:kS,colorspace_pars_fragment:BS,envmap_fragment:zS,envmap_common_pars_fragment:GS,envmap_pars_fragment:HS,envmap_pars_vertex:VS,envmap_physical_pars_fragment:e2,envmap_vertex:WS,fog_vertex:qS,fog_pars_vertex:XS,fog_fragment:jS,fog_pars_fragment:KS,gradientmap_pars_fragment:YS,lightmap_pars_fragment:$S,lights_lambert_fragment:JS,lights_lambert_pars_fragment:ZS,lights_pars_begin:QS,lights_toon_fragment:t2,lights_toon_pars_fragment:n2,lights_phong_fragment:i2,lights_phong_pars_fragment:s2,lights_physical_fragment:r2,lights_physical_pars_fragment:a2,lights_fragment_begin:o2,lights_fragment_maps:c2,lights_fragment_end:l2,lightprobes_pars_fragment:h2,logdepthbuf_fragment:u2,logdepthbuf_pars_fragment:d2,logdepthbuf_pars_vertex:f2,logdepthbuf_vertex:p2,map_fragment:m2,map_pars_fragment:g2,map_particle_fragment:_2,map_particle_pars_fragment:b2,metalnessmap_fragment:x2,metalnessmap_pars_fragment:v2,morphinstance_vertex:y2,morphcolor_vertex:S2,morphnormal_vertex:M2,morphtarget_pars_vertex:w2,morphtarget_vertex:E2,normal_fragment_begin:A2,normal_fragment_maps:T2,normal_pars_fragment:R2,normal_pars_vertex:C2,normal_vertex:I2,normalmap_pars_fragment:P2,clearcoat_normal_fragment_begin:L2,clearcoat_normal_fragment_maps:D2,clearcoat_pars_fragment:F2,iridescence_pars_fragment:N2,opaque_fragment:U2,packing:O2,premultiplied_alpha_fragment:k2,project_vertex:B2,dithering_fragment:z2,dithering_pars_fragment:G2,roughnessmap_fragment:H2,roughnessmap_pars_fragment:V2,shadowmap_pars_fragment:W2,shadowmap_pars_vertex:q2,shadowmap_vertex:X2,shadowmask_pars_fragment:j2,skinbase_vertex:K2,skinning_pars_vertex:Y2,skinning_vertex:$2,skinnormal_vertex:J2,specularmap_fragment:Z2,specularmap_pars_fragment:Q2,tonemapping_fragment:eM,tonemapping_pars_fragment:tM,transmission_fragment:nM,transmission_pars_fragment:iM,uv_pars_fragment:sM,uv_pars_vertex:rM,uv_vertex:aM,worldpos_vertex:oM,background_vert:cM,background_frag:lM,backgroundCube_vert:hM,backgroundCube_frag:uM,cube_vert:dM,cube_frag:fM,depth_vert:pM,depth_frag:mM,distance_vert:gM,distance_frag:_M,equirect_vert:bM,equirect_frag:xM,linedashed_vert:vM,linedashed_frag:yM,meshbasic_vert:SM,meshbasic_frag:MM,meshlambert_vert:wM,meshlambert_frag:EM,meshmatcap_vert:AM,meshmatcap_frag:TM,meshnormal_vert:RM,meshnormal_frag:CM,meshphong_vert:IM,meshphong_frag:PM,meshphysical_vert:LM,meshphysical_frag:DM,meshtoon_vert:FM,meshtoon_frag:NM,points_vert:UM,points_frag:OM,shadow_vert:kM,shadow_frag:BM,sprite_vert:zM,sprite_frag:GM},be={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},is={basic:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Tn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Tn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Tn([be.points,be.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Tn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Tn([be.common,be.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Tn([be.sprite,be.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Tn([be.common,be.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Tn([be.lights,be.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};is.physical={uniforms:Tn([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Yh={r:0,b:0,g:0},HM=new He,D_=new We;D_.set(-1,0,0,0,1,0,0,0,1);function VM(n,e,t,i,s,r){let a=new Ue(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(x){let w=x.isScene===!0?x.background:null;if(w&&w.isTexture){let y=x.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(x){let w=!1,y=f(x);y===null?p(a,o):y&&y.isColor&&(p(y,1),w=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(x,w){let y=f(w);y&&y.isCubeTexture?(l===void 0&&(l=new $t(new Va(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Wr(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(HM.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(D_),l.material.toneMapped=et.getTransfer(y.colorSpace)!==xt,(h!==y||u!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $t(new rc(2,2),new Vn({name:"BackgroundMaterial",uniforms:Wr(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,w){x.getRGB(Yh,If(n)),t.buffers.color.setClear(Yh.r,Yh.g,Yh.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:g,addToRenderList:b,dispose:m}}function WM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(D,H,V,I,P){let q=!1,k=u(D,I,V,H);r!==k&&(r=k,l(r.object)),q=f(D,I,V,P),q&&g(D,I,V,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(D,H,V,I),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function u(D,H,V,I){let P=I.wireframe===!0,q=i[H.id];q===void 0&&(q={},i[H.id]=q);let k=D.isInstancedMesh===!0?D.id:0,Q=q[k];Q===void 0&&(Q={},q[k]=Q);let W=Q[V.id];W===void 0&&(W={},Q[V.id]=W);let j=W[P];return j===void 0&&(j=d(c()),W[P]=j),j}function d(D){let H=[],V=[],I=[];for(let P=0;P<t;P++)H[P]=0,V[P]=0,I[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,H,V,I){let P=r.attributes,q=H.attributes,k=0,Q=V.getAttributes();for(let W in Q)if(Q[W].location>=0){let te=P[W],ye=q[W];if(ye===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor)),te===void 0||te.attribute!==ye||ye&&te.data!==ye.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function g(D,H,V,I){let P={},q=H.attributes,k=0,Q=V.getAttributes();for(let W in Q)if(Q[W].location>=0){let te=q[W];te===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let ye={};ye.attribute=te,te&&te.data&&(ye.data=te.data),P[W]=ye,k++}r.attributes=P,r.attributesNum=k,r.index=I}function b(){let D=r.newAttributes;for(let H=0,V=D.length;H<V;H++)D[H]=0}function p(D){m(D,0)}function m(D,H){let V=r.newAttributes,I=r.enabledAttributes,P=r.attributeDivisors;V[D]=1,I[D]===0&&(n.enableVertexAttribArray(D),I[D]=1),P[D]!==H&&(n.vertexAttribDivisor(D,H),P[D]=H)}function x(){let D=r.newAttributes,H=r.enabledAttributes;for(let V=0,I=H.length;V<I;V++)H[V]!==D[V]&&(n.disableVertexAttribArray(V),H[V]=0)}function w(D,H,V,I,P,q,k){k===!0?n.vertexAttribIPointer(D,H,V,P,q):n.vertexAttribPointer(D,H,V,I,P,q)}function y(D,H,V,I){b();let P=I.attributes,q=V.getAttributes(),k=H.defaultAttributeValues;for(let Q in q){let W=q[Q];if(W.location>=0){let j=P[Q];if(j===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let te=j.normalized,ye=j.itemSize,Ve=e.get(j);if(Ve===void 0)continue;let Y=Ve.buffer,pe=Ve.type,Se=Ve.bytesPerElement,Be=pe===n.INT||pe===n.UNSIGNED_INT||j.gpuType===hh;if(j.isInterleavedBufferAttribute){let ge=j.data,Xe=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,Ot=j.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Pe=0;Pe<W.locationSize;Pe++)m(W.location+Pe,ge.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Pe=0;Pe<W.locationSize;Pe++)p(W.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let Pe=0;Pe<W.locationSize;Pe++)w(W.location+Pe,ye/W.locationSize,pe,te,Xe*Se,(Ot+ye/W.locationSize*Pe)*Se,Be)}else{if(j.isInstancedBufferAttribute){for(let ge=0;ge<W.locationSize;ge++)m(W.location+ge,j.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<W.locationSize;ge++)p(W.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let ge=0;ge<W.locationSize;ge++)w(W.location+ge,ye/W.locationSize,pe,te,ye*Se,ye/W.locationSize*ge*Se,Be)}}else if(k!==void 0){let te=k[Q];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(W.location,te);break;case 3:n.vertexAttrib3fv(W.location,te);break;case 4:n.vertexAttrib4fv(W.location,te);break;default:n.vertexAttrib1fv(W.location,te)}}}}x()}function E(){F();for(let D in i){let H=i[D];for(let V in H){let I=H[V];for(let P in I){let q=I[P];for(let k in q)h(q[k].object),delete q[k];delete I[P]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;let H=i[D.id];for(let V in H){let I=H[V];for(let P in I){let q=I[P];for(let k in q)h(q[k].object),delete q[k];delete I[P]}}delete i[D.id]}function _(D){for(let H in i){let V=i[H];for(let I in V){let P=V[I];if(P[D.id]===void 0)continue;let q=P[D.id];for(let k in q)h(q[k].object),delete q[k];delete P[D.id]}}}function M(D){for(let H in i){let V=i[H],I=D.isInstancedMesh===!0?D.id:0,P=V[I];if(P!==void 0){for(let q in P){let k=P[q];for(let Q in k)h(k[Q].object),delete k[Q];delete P[q]}delete V[I],Object.keys(V).length===0&&delete i[H]}}}function F(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:b,enableAttribute:p,disableUnusedAttributes:x}}function qM(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function XM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==wi&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==xn&&_!==ai&&!M&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Le("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:y,maxSamples:E,samples:A}}function jM(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Oi,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let x=r?0:i,w=x*4,y=m.clippingState||null;c.value=y,y=h(g,d,w,f);for(let E=0;E!==w;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,p=null;if(b!==0){if(p=c.value,g!==!0||p===null){let m=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,y=f;w!==b;++w,y+=4)a.copy(u[w]).applyMatrix4(x,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}var Ec=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new tc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Va(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:Br});r.uniforms.tEquirect.value=t;let a=new $t(s,r),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Dt),new Xa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},u_=256,KM=3,YM=20,F_=256,N_=16,$M=3,JM=new O,ZM=new Ue,Jh=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xa(1,10,null),this._boxMesh=new $t(new Va(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=JM}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,b=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(e.background=c.getClearColor(ZM));let p=new Xa(i,s,h);return p.position.copy(o),p.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=g,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(u_,Tf(e))}_fromTexture(e,t){e.mapping===Gr||e.mapping===Ya?this._setSize(e.image.length===0?u_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=d_(e,!1,!1),i=Math.log2(e)-KM;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=d_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Gr||e.mapping===Ya?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=f_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=QM(),this._integrationMaterial=e3());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/N_);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-$M)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(F_*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=t3());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function d_(n,e,t){return new Ec(n,{minFilter:Mi,generateMipmaps:e,type:Xn,colorSpace:Ln,depthBuffer:t})}function Ac(n,e,t){return new Vn({name:n,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:t,side:Un,blending:Br,depthTest:!1,depthWrite:!1})}function QM(){return Ac("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${F_}u

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
	`)}function e3(){return Ac("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:N_}},`

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
	`)}function t3(){return Ac("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${YM}
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
	`)}function f_(){return Ac("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function p_(){return Ac("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function n3(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===oh||f===ch)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new Ec(g.height);return b.fromEquirectangularTexture(n,d),e.set(d,b),d.addEventListener("dispose",l),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===oh||f===ch,b=f===Gr||f===Ya;if(g||b){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Jh(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let x=d.image;return g&&x&&x.height>0||b&&x&&c(x)?(i===null&&(i=new Jh(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===oh?d.mapping=Gr:f===ch&&(d.mapping=Ya),d}function c(d){let f=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function i3(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ir("WebGLRenderer: "+i+" extension not supported."),s}}}function s3(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let b=r.get(g);b&&(e.remove(b),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}function h(g){let b=g.attributes;for(let p in b)e.update(b[p],n.ARRAY_BUFFER)}function u(g){let b=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let x=b!==null?b.array.length:p.array.length/3-1,w=p.count>=65535?Ko:jo,y=new w(Math.ceil(x/3)*6,1),E=y.array;if(b!==null){let _=b.array;m=b.version;for(let M=0,F=0;M<x;M+=3){let C=_[M+0],D=_[M+1],H=_[M+2];E[F++]=C,E[F++]=D,E[F++]=D,E[F++]=H,E[F++]=H,E[F++]=C}}else{m=p.version;for(let _=0,M=0;_<x;_+=3){let F=_+0,C=_+1,D=_+2;E[M++]=F,E[M++]=C,E[M++]=C,E[M++]=D,E[M++]=D,E[M++]=F}}y.version=m;let A=r.get(g);A&&e.remove(A),r.set(g,y)}function d(g){let b=r.get(g);if(b){let p=g.index;p!==null&&b.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let b=s[g].deref();b!==void 0&&c(b)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function r3(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function l(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let b=0;for(let p=0;p<f;p++)b+=d[p];t.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function a3(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function o3(n,e,t){let i=new WeakMap,s=new _t;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let F=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),b===!0&&(w=3);let y=o.attributes.position.count*w,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*E*4*u),_=new qo(A,y,E,u);_.type=ai,_.needsUpdate=!0;let M=w*4;for(let C=0;C<u;C++){let D=p[C],H=m[C],V=x[C],I=y*E*4*C;for(let P=0;P<D.count;P++){let q=P*M;f===!0&&(s.fromBufferAttribute(D,P),A[I+q+0]=s.x,A[I+q+1]=s.y,A[I+q+2]=s.z,A[I+q+3]=0),g===!0&&(s.fromBufferAttribute(H,P),A[I+q+4]=s.x,A[I+q+5]=s.y,A[I+q+6]=s.z,A[I+q+7]=0),b===!0&&(s.fromBufferAttribute(V,P),A[I+q+8]=s.x,A[I+q+9]=s.y,A[I+q+10]=s.z,A[I+q+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new Ze(y,E)},i.set(o,d),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function c3(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var l3={[af]:"LINEAR_TONE_MAPPING",[of]:"REINHARD_TONE_MAPPING",[cf]:"CINEON_TONE_MAPPING",[lf]:"ACES_FILMIC_TONE_MAPPING",[uf]:"AGX_TONE_MAPPING",[df]:"NEUTRAL_TONE_MAPPING",[hf]:"CUSTOM_TONE_MAPPING"};function h3(n,e,t,i,s,r){let a=new Dn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new gn;h.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pn([0,2,0,0,2,0],2));let u=new jl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new $t(h,u),f=new Ps(-1,1,1,-1,0,1),g=null,b=null,p=!1,m,x=null,w=[],y=!1;this.setSize=function(E,A){a.setSize(E,A),o!==null&&o.setSize(E,A),c!==null&&c.setSize(E,A);for(let _=0;_<w.length;_++){let M=w[_];M.setSize&&M.setSize(E,A)}},this.setEffects=function(E){w=E,y=w.length>0&&w[0].isRenderPass===!0;let A=a.width,_=a.height;w.length>0&&o===null&&(o=new Dn(A,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),c=new Dn(A,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&w.some(F=>F.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new As(A,_),r===!0&&(l.format=Fs,l.type=Vr)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let F=0;F<w.length;F++){let C=w[F];C.setSize&&C.setSize(A,_),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(E,A){if(p||E.toneMapping===es&&w.length===0)return!1;if(x=A,A!==null){let _=A.width,M=A.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return y===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=es,!0},this.hasRenderPass=function(){return y},this.end=function(E,A){E.toneMapping=m,p=!0;let _=a,M=o;for(let F=0;F<w.length;F++){let C=w[F];C.enabled!==!1&&(C.render(E,M,_,A),C.needsSwap!==!1&&(_=M,M=M===o?c:o))}if(g!==E.outputColorSpace||b!==E.toneMapping){g=E.outputColorSpace,b=E.toneMapping,u.defines={},et.getTransfer(g)===xt&&(u.defines.SRGB_TRANSFER="");let F=l3[b];F&&(u.defines[F]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(x),E.render(d,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var U_=new rn,O_=new As(1,1),k_=new ic(1),B_=new qo,z_=new Vl,G_=new tc,m_=[],g_=[],__=new Float32Array(16),b_=new Float32Array(9),x_=new Float32Array(4);function eo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=m_[s];if(r===void 0&&(r=new Float32Array(s),m_[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qh(n,e){let t=g_[e];t===void 0&&(t=new Int32Array(e),g_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function u3(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function d3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function f3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function p3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function m3(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;x_.set(i),n.uniformMatrix2fv(this.addr,!1,x_),on(t,i)}}function g3(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;b_.set(i),n.uniformMatrix3fv(this.addr,!1,b_),on(t,i)}}function _3(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;__.set(i),n.uniformMatrix4fv(this.addr,!1,__),on(t,i)}}function b3(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function x3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function v3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function y3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function S3(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function M3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function w3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function E3(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function eu(n){return n.version===0&&(n.compareFunction=Mf,n.needsUpdate=!0),n}function A3(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=eu(O_):r=U_,t.setTexture2D(e||r,s)}function T3(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||z_,s)}function R3(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=eu(k_):r=G_,t.setTextureCube(e||r,s)}function C3(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||B_,s)}function I3(n){switch(n){case 5126:return u3;case 35664:return d3;case 35665:return f3;case 35666:return p3;case 35674:return m3;case 35675:return g3;case 35676:return _3;case 5124:case 35670:return b3;case 35667:case 35671:return x3;case 35668:case 35672:return v3;case 35669:case 35673:return y3;case 5125:return S3;case 36294:return M3;case 36295:return w3;case 36296:return E3;case 35678:case 36198:case 36298:case 36306:case 35682:return A3;case 35679:case 36299:case 36307:return T3;case 35680:case 36300:case 36308:case 36293:return R3;case 36289:case 36303:case 36311:case 36292:return C3}}function P3(n,e){n.uniform1fv(this.addr,e)}function L3(n,e){let t=eo(e,this.size,2);n.uniform2fv(this.addr,t)}function D3(n,e){let t=eo(e,this.size,3);n.uniform3fv(this.addr,t)}function F3(n,e){let t=eo(e,this.size,4);n.uniform4fv(this.addr,t)}function N3(n,e){let t=eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function U3(n,e){let t=eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function O3(n,e){let t=eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function k3(n,e){n.uniform1iv(this.addr,e)}function B3(n,e){n.uniform2iv(this.addr,e)}function z3(n,e){n.uniform3iv(this.addr,e)}function G3(n,e){n.uniform4iv(this.addr,e)}function H3(n,e){n.uniform1uiv(this.addr,e)}function V3(n,e){n.uniform2uiv(this.addr,e)}function W3(n,e){n.uniform3uiv(this.addr,e)}function q3(n,e){n.uniform4uiv(this.addr,e)}function X3(n,e,t){let i=this.cache,s=e.length,r=Qh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=eu(O_):a=U_;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function j3(n,e,t){let i=this.cache,s=e.length,r=Qh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||z_,r[a])}function K3(n,e,t){let i=this.cache,s=e.length,r=Qh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=eu(k_):a=G_;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Y3(n,e,t){let i=this.cache,s=e.length,r=Qh(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||B_,r[a])}function $3(n){switch(n){case 5126:return P3;case 35664:return L3;case 35665:return D3;case 35666:return F3;case 35674:return N3;case 35675:return U3;case 35676:return O3;case 5124:case 35670:return k3;case 35667:case 35671:return B3;case 35668:case 35672:return z3;case 35669:case 35673:return G3;case 5125:return H3;case 36294:return V3;case 36295:return W3;case 36296:return q3;case 35678:case 36198:case 36298:case 36306:case 35682:return X3;case 35679:case 36299:case 36307:return j3;case 35680:case 36300:case 36308:case 36293:return K3;case 36289:case 36303:case 36311:case 36292:return Y3}}var Gf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=I3(t.type)}},Hf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$3(t.type)}},Vf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Bf=/(\w+)(\])?(\[|\.)?/g;function v_(n,e){n.seq.push(e),n.map[e.id]=e}function J3(n,e,t){let i=n.name,s=i.length;for(Bf.lastIndex=0;;){let r=Bf.exec(i),a=Bf.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){v_(t,l===void 0?new Gf(o,n,e):new Hf(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Vf(o),v_(t,u)),t=u}}}var Qa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);J3(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function y_(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Z3=37297,Q3=0;function ew(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var S_=new We;function tw(n){et._getMatrix(S_,et.workingColorSpace,n);let e=`mat3( ${S_.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Vo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function M_(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ew(n.getShaderSource(e),o)}else return r}function nw(n,e){let t=tw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var iw={[af]:"Linear",[of]:"Reinhard",[cf]:"Cineon",[lf]:"ACESFilmic",[uf]:"AgX",[df]:"Neutral",[hf]:"Custom"};function sw(n,e){let t=iw[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $h=new O;function rw(){et.getLuminanceCoefficients($h);let n=$h.x.toFixed(4),e=$h.y.toFixed(4),t=$h.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wc).join(`
`)}function ow(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cw(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function wc(n){return n!==""}function w_(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function E_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(n){return n.replace(lw,hw)}function hw(n,e){let t=Qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wf(t)}var uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(n){return n.replace(uw,dw)}function dw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function T_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var fw={[pc]:"SHADOWMAP_TYPE_PCF",[ja]:"SHADOWMAP_TYPE_VSM"};function pw(n){return fw[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mw={[Ya]:"ENVMAP_MODE_REFRACTION"};function gw(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mw[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _w={[ah]:"ENVMAP_BLENDING_MULTIPLY",[q0]:"ENVMAP_BLENDING_MIX",[X0]:"ENVMAP_BLENDING_ADD"};function bw(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_w[n.combine]||"ENVMAP_BLENDING_NONE"}function xw(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=pw(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=gw(t),u=bw(t),d=aw(t),f=ow(r),g=s.createProgram(),b,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wc).join(`
`),b.length>0&&(b+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wc).join(`
`),p.length>0&&(p+=`
`)):(b=[T_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wc).join(`
`),p=[T_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?Qe.tonemapping_pars_fragment:"",t.toneMapping!==es?sw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,nw("linearToOutputTexel",t.outputColorSpace),rw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wc).join(`
`)),a=Wf(a),a=w_(a,t),a=E_(a,t),o=Wf(o),o=w_(o,t),o=E_(o,t),a=A_(a),o=A_(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,p=["#define varying in",t.glslVersion===Ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=m+b+a,w=m+p+o,y=y_(s,s.VERTEX_SHADER,x),E=y_(s,s.FRAGMENT_SHADER,w);s.attachShader(g,y),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(C){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",H=s.getShaderInfoLog(y)||"",V=s.getShaderInfoLog(E)||"",I=D.trim(),P=H.trim(),q=V.trim(),k=!0,Q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,y,E);else{let W=M_(s,y,"vertex"),j=M_(s,E,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+W+`
`+j)}else I!==""?Le("WebGLProgram: Program Info Log:",I):(P===""||q==="")&&(Q=!1);Q&&(C.diagnostics={runnable:k,programLog:I,vertexShader:{log:P,prefix:b},fragmentShader:{log:q,prefix:p}})}s.deleteShader(y),s.deleteShader(E),_=new Qa(s,g),M=cw(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(g,Z3)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q3++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=E,this}var vw=0,qf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Xf(e),t.set(e,i)),i}},Xf=class{constructor(e){this.id=vw++,this.code=e,this.usedTimes=0}};function yw(n){return n===lr||n===xc||n===vc}function Sw(n,e,t,i,s,r){let a=new Xo,o=new qf,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,M,F,C,D,H){let V=C.fog,I=D.geometry,P=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=e.get(_.envMap||P,q),Q=d[_.type],W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,te=j!==void 0?j.length:0,ye=0;I.morphAttributes.position!==void 0&&(ye=1),I.morphAttributes.normal!==void 0&&(ye=2),I.morphAttributes.color!==void 0&&(ye=3);let Ve,Y,pe,Se;if(Q){let _e=is[Q];Ve=_e.vertexShader,Y=_e.fragmentShader}else{Ve=_.vertexShader,Y=_.fragmentShader;let _e=o.getVertexShaderStage(_),vt=o.getFragmentShaderStage(_);o.update(_,_e,vt),pe=_e.id,Se=vt.id}let Be=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Xe=D.isInstancedMesh===!0,Ot=D.isBatchedMesh===!0,Pe=!!_.map,ct=!!_.matcap,St=!!k,st=St&&k.isPMREMTexture===!0,_n=!!_.aoMap,en=!!_.lightMap,Gn=!!_.bumpMap&&_.wireframe===!1,kt=!!_.normalMap,Xi=!!_.displacementMap,dn=!!_.emissiveMap,mi=!!_.metalnessMap,gi=!!_.roughnessMap,_i=_.anisotropy>0,N=_.clearcoat>0,bi=_.diffuseRoughness>0,Pt=_.dispersion>0,Lt=_.retroreflectivity>0,me=_.iridescence>0,tn=_.sheen>0,ze=_.transmission>0,je=_i&&!!_.anisotropyMap,T=N&&!!_.clearcoatMap,v=N&&!!_.clearcoatNormalMap,z=N&&!!_.clearcoatRoughnessMap,ne=bi&&!!_.diffuseRoughnessMap,ee=me&&!!_.iridescenceMap,oe=me&&!!_.iridescenceThicknessMap,de=tn&&!!_.sheenColorMap,$=tn&&!!_.sheenRoughnessMap,J=!!_.specularMap,le=!!_.specularColorMap,R=!!_.specularIntensityMap,Z=ze&&!!_.transmissionMap,K=ze&&!!_.thicknessMap,he=!!_.gradientMap,se=!!_.alphaMap,ce=_.alphaTest>0,De=!!_.alphaHash,Je=!!_.extensions,ie=es;_.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ie=n.toneMapping);let ke=st?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,$e={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Ve,fragmentShader:Y,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Ot,batchingColor:Ot&&D._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&D.instanceColor!==null,instancingMorph:Xe&&D.morphTexture!==null,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:ct,envMap:St,envMapMode:St&&k.mapping,envMapPMREM:st,envMapMaxLod:st?ke.length-1:null,envMapSize:st?ke[0].width:null,aoMap:_n,lightMap:en,bumpMap:Gn,normalMap:kt,displacementMap:Xi,emissiveMap:dn,normalMapObjectSpace:kt&&_.normalMapType===$0,normalMapTangentSpace:kt&&_.normalMapType===Sc,packedNormalMap:kt&&_.normalMapType===Sc&&yw(_.normalMap.format),metalnessMap:mi,roughnessMap:gi,anisotropy:_i,anisotropyMap:je,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:v,clearcoatRoughnessMap:z,diffuseRoughness:bi,diffuseRoughnessMap:ne,dispersion:Pt,retroreflection:Lt,iridescence:me,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:tn,sheenColorMap:de,sheenRoughnessMap:$,specularMap:J,specularColorMap:le,specularIntensityMap:R,transmission:ze,transmissionMap:Z,thicknessMap:K,gradientMap:he,opaque:_.transparent===!1&&_.blending===Ka&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:ce,alphaHash:De,combine:_.combine,mapUv:Pe&&f(_.map.channel),aoMapUv:_n&&f(_.aoMap.channel),lightMapUv:en&&f(_.lightMap.channel),bumpMapUv:Gn&&f(_.bumpMap.channel),normalMapUv:kt&&f(_.normalMap.channel),displacementMapUv:Xi&&f(_.displacementMap.channel),emissiveMapUv:dn&&f(_.emissiveMap.channel),metalnessMapUv:mi&&f(_.metalnessMap.channel),roughnessMapUv:gi&&f(_.roughnessMap.channel),anisotropyMapUv:je&&f(_.anisotropyMap.channel),clearcoatMapUv:T&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:J&&f(_.specularMap.channel),specularColorMapUv:le&&f(_.specularColorMap.channel),specularIntensityMapUv:R&&f(_.specularIntensityMap.channel),transmissionMapUv:Z&&f(_.transmissionMap.channel),thicknessMapUv:K&&f(_.thicknessMap.channel),alphaMapUv:se&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(kt||_i),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Pe||se),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&kt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ye,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:H.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:dn&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qn,flipSided:_.side===Un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Je&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&_.extensions.multiDraw===!0||Ot)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function b(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)M.push(F),M.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(p(M,_),m(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function m(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let M=d[_.type],F;if(M){let C=is[M];F=c_.clone(C.uniforms)}else F=_.uniforms;return F}function w(_,M){let F=h.get(M);return F!==void 0?++F.usedTimes:(F=new xw(n,M,_,s),l.push(F),h.set(M,F)),F}function y(_){if(--_.usedTimes===0){let M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:x,acquireProgram:w,releaseProgram:y,releaseShaderCache:E,programs:l,dispose:A}}function Mw(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ww(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function R_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function C_(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,b,p,m){let x=n[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:p,group:m},n[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=g,x.materialVariant=a(d),x.groupOrder=b,x.renderOrder=d.renderOrder,x.z=p,x.group=m),e++,x}function c(d,f,g,b,p,m,x){x.reversedDepth===!0&&(p=-p);let w=o(d,f,g,b,p,m);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function l(d,f,g,b,p,m){let x=o(d,f,g,b,p,m);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||ww),i.length>1&&i.sort(f||R_),s.length>1&&s.sort(f||R_)}function u(){for(let d=e,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Ew(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new C_,n.set(i,[a])):s>=r.length?(a=new C_,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Aw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Ue};break;case"SpotLight":t={position:new O,direction:new O,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Tw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Rw=0;function Cw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Iw(n){let e=new Aw,t=Tw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let s=new O,r=new He,a=new He;function o(l){let h=0,u=0,d=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let f=0,g=0,b=0,p=0,m=0,x=0,w=0,y=0,E=0,A=0,_=0,M=0,F=0,C=0;l.sort(Cw);for(let H=0,V=l.length;H<V;H++){let I=l[H],P=I.color,q=I.intensity,k=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===lr?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=P.r*q,u+=P.g*q,d+=P.b*q;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],q);C++}else if(I.isSunLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=te,i.sunShadowMap[g]=Q;let ye=j.getViewportCount();for(let Ve=0;Ve<ye;Ve++)i.sunShadowMatrix[b+Ve]=j.getMatrix(Ve),i.sunShadowCascade[b+Ve]=j._cascadeData[Ve];b+=ye,g++}i.sun[f]=W,f++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.directionalShadow[p]=te,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=I.shadow.matrix,E++}i.directional[p]=W,p++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(P).multiplyScalar(q),W.distance=k,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[x]=W;let j=I.shadow;if(I.map&&(i.spotLightMap[M]=I.map,M++,j.updateMatrices(I),I.castShadow&&F++),i.spotLightMatrix[x]=j.matrix,I.castShadow){let te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.spotShadow[x]=te,i.spotShadowMap[x]=Q,_++}x++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(P).multiplyScalar(q),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=W,w++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let j=I.shadow,te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=I.shadow.matrix,A++}i.point[m]=W,m++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(q),W.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[y]=W,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let D=i.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==w||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==E||D.numPointShadows!==A||D.numSpotShadows!==_||D.numSpotMaps!==M||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=p,i.spot.length=x,i.rectArea.length=w,i.point.length=m,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-F,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=C,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=x,D.rectAreaLength=w,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=E,D.numPointShadows=A,D.numSpotShadows=_,D.numSpotMaps=M,D.numLightProbes=C,i.version=Rw++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0,p=0,m=h.matrixWorldInverse;for(let x=0,w=l.length;x<w;x++){let y=l[x];if(y.isSunLight){let E=i.sun[u];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(y.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let E=i.rectArea[b];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),b++}else if(y.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let E=i.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function I_(n){let e=new Iw(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Pw(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new I_(n),e.set(s,[o])):r>=a.length?(o=new I_(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dw=`uniform sampler2D shadow_pass;
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
}`,Fw=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Nw=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],P_=new He,Mc=new O,zf=new O;function Uw(n,e,t){let i=new ar,s=new Ze,r=new Ze,a=new _t,o=new Kl,c=new Yl,l={},h=t.maxTextureSize,u={[Qi]:Un,[Un]:Qi,[qn]:qn},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Lw,fragmentShader:Dw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new gn;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new $t(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let m=this.type;this.render=function(A,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===R0&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pc);let F=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Br),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let V=m!==this.type;V&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(P=>P.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,P=A.length;I<P;I++){let q=A[I],k=q.shadow;if(k===void 0){Le("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Q=k.getFrameExtents();s.multiply(Q),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,k.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ja){if(q.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Dn(s.x,s.y,{format:lr,type:Xn,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new As(s.x,s.y,ai),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=ws,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qt,k.map.depthTexture.magFilter=qt}else q.isPointLight?(k.map=new Ec(s.x),k.map.depthTexture=new ic(s.x,ki)):(k.map=new Dn(s.x,s.y),k.map.depthTexture=new As(s.x,s.y,ki)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=ws,this.type===pc?(k.map.depthTexture.compareFunction=W?Sf:yf,k.map.depthTexture.minFilter=Dt,k.map.depthTexture.magFilter=Dt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qt,k.map.depthTexture.magFilter=qt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();q.isPointLight!==!0&&k.updateMatrices(q,M);let te=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:M.layers;for(let ye=0;ye<j;ye++){let Ve=k.getCamera(ye);if(q.isPointLight){let Y=k.camera,pe=k.matrix,Se=q.distance||Y.far;Se!==Y.far&&(Y.far=Se,Y.updateProjectionMatrix()),Mc.setFromMatrixPosition(q.matrixWorld),Y.position.copy(Mc),zf.copy(Y.position),zf.add(Fw[ye]),Y.up.copy(Nw[ye]),Y.lookAt(zf),Y.updateMatrixWorld(),pe.makeTranslation(-Mc.x,-Mc.y,-Mc.z),P_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),k._frustum.setFromProjectionMatrix(P_,Y.coordinateSystem,Y.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(k.map),n.clear());let Y=k.getViewport(ye);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),H.viewport(a)}i=k.getFrustum(ye),y(_,M,Ve,q,te,this.type)}k.isPointLightShadow!==!0&&this.type===ja&&x(k,M),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(F,C,D)};function x(A,_){let M=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Dn(s.x,s.y,{format:lr,type:Xn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(_,null,M,d,b,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(_,null,M,f,b,null)}function w(A,_,M,F){let C=null,D=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)C=D;else if(C=M.isPointLight===!0?c:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let H=C.uuid,V=_.uuid,I=l[H];I===void 0&&(I={},l[H]=I);let P=I[V];P===void 0&&(P=C.clone(),I[V]=P,_.addEventListener("dispose",E)),C=P}if(C.visible=_.visible,C.wireframe=_.wireframe,F===ja?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let H=n.properties.get(C);H.light=M}return C}function y(A,_,M,F,C,D){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===ja)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let I=e.update(A),P=A.material;if(Array.isArray(P)){let q=I.groups;for(let k=0,Q=q.length;k<Q;k++){let W=q[k],j=P[W.materialIndex];if(j&&j.visible){let te=w(A,j,F,D);A.onBeforeShadow(n,A,_,M,I,te,W),n.renderBufferDirect(M,null,I,te,A,W),A.onAfterShadow(n,A,_,M,I,te,W)}}}else if(P.visible){let q=w(A,P,F,D);A.onBeforeShadow(n,A,_,M,I,q,null),n.renderBufferDirect(M,null,I,q,A,null),A.onAfterShadow(n,A,_,M,I,q,null)}}let V=A.children;for(let I=0,P=V.length;I<P;I++)y(V[I],_,M,F,C,D)}function E(A){A.target.removeEventListener("dispose",E);for(let M in l){let F=l[M],C=A.target.uuid;C in F&&(F[C].dispose(),delete F[C])}}}function Ow(n,e){function t(){let R=!1,Z=new _t,K=null,he=new _t(0,0,0,0);return{setMask:function(se){K!==se&&!R&&(n.colorMask(se,se,se,se),K=se)},setLocked:function(se){R=se},setClear:function(se,ce,De,Je,ie){ie===!0&&(se*=Je,ce*=Je,De*=Je),Z.set(se,ce,De,Je),he.equals(Z)===!1&&(n.clearColor(se,ce,De,Je),he.copy(Z))},reset:function(){R=!1,K=null,he.set(-1,0,0,0)}}}function i(){let R=!1,Z=!1,K=null,he=null,se=null;return{setReversed:function(ce){if(Z!==ce){let De=e.get("EXT_clip_control");ce?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Z=ce;let Je=se;se=null,this.setClear(Je)}},getReversed:function(){return Z},setTest:function(ce){ce?ge(n.DEPTH_TEST):Xe(n.DEPTH_TEST)},setMask:function(ce){K!==ce&&!R&&(n.depthMask(ce),K=ce)},setFunc:function(ce){if(Z&&(ce=a_[ce]),he!==ce){switch(ce){case Fl:n.depthFunc(n.NEVER);break;case Nl:n.depthFunc(n.ALWAYS);break;case Ul:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case Ol:n.depthFunc(n.EQUAL);break;case kl:n.depthFunc(n.GEQUAL);break;case Bl:n.depthFunc(n.GREATER);break;case zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=ce}},setLocked:function(ce){R=ce},setClear:function(ce){se!==ce&&(se=ce,Z&&(ce=1-ce),n.clearDepth(ce))},reset:function(){R=!1,K=null,he=null,se=null,Z=!1}}}function s(){let R=!1,Z=null,K=null,he=null,se=null,ce=null,De=null,Je=null,ie=null;return{setTest:function(ke){R||(ke?ge(n.STENCIL_TEST):Xe(n.STENCIL_TEST))},setMask:function(ke){Z!==ke&&!R&&(n.stencilMask(ke),Z=ke)},setFunc:function(ke,$e,_e){(K!==ke||he!==$e||se!==_e)&&(n.stencilFunc(ke,$e,_e),K=ke,he=$e,se=_e)},setOp:function(ke,$e,_e){(ce!==ke||De!==$e||Je!==_e)&&(n.stencilOp(ke,$e,_e),ce=ke,De=$e,Je=_e)},setLocked:function(ke){R=ke},setClear:function(ke){ie!==ke&&(n.clearStencil(ke),ie=ke)},reset:function(){R=!1,Z=null,K=null,he=null,se=null,ce=null,De=null,Je=null,ie=null}}}let r=new t,a=new i,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],b=null,p=!1,m=null,x=null,w=null,y=null,E=null,A=null,_=null,M=new Ue(0,0,0),F=0,C=!1,D=null,H=null,V=null,I=null,P=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Q=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=Q>=2);let j=null,te={},ye=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),Y=new _t().fromArray(ye),pe=new _t().fromArray(Ve);function Se(R,Z,K,he){let se=new Uint8Array(4),ce=n.createTexture();n.bindTexture(R,ce),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<K;De++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(Z+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return ce}let Be={};Be[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),a.setFunc(sr),Gn(!1),kt(Qd),ge(n.CULL_FACE),_n(Br);function ge(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function Xe(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function Ot(R,Z){return d[R]!==Z?(n.bindFramebuffer(R,Z),d[R]=Z,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Z),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Z),!0):!1}function Pe(R,Z){let K=g,he=!1;if(R){K=f.get(Z),K===void 0&&(K=[],f.set(Z,K));let se=R.textures;if(K.length!==se.length||K[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,De=se.length;ce<De;ce++)K[ce]=n.COLOR_ATTACHMENT0+ce;K.length=se.length,he=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,he=!0);he&&n.drawBuffers(K)}function ct(R){return b!==R?(n.useProgram(R),b=R,!0):!1}let St={[Ds]:n.FUNC_ADD,[C0]:n.FUNC_SUBTRACT,[I0]:n.FUNC_REVERSE_SUBTRACT};St[P0]=n.MIN,St[L0]=n.MAX;let st={[D0]:n.ZERO,[zr]:n.ONE,[F0]:n.SRC_COLOR,[sf]:n.SRC_ALPHA,[z0]:n.SRC_ALPHA_SATURATE,[k0]:n.DST_COLOR,[U0]:n.DST_ALPHA,[N0]:n.ONE_MINUS_SRC_COLOR,[rf]:n.ONE_MINUS_SRC_ALPHA,[B0]:n.ONE_MINUS_DST_COLOR,[O0]:n.ONE_MINUS_DST_ALPHA,[G0]:n.CONSTANT_COLOR,[H0]:n.ONE_MINUS_CONSTANT_COLOR,[V0]:n.CONSTANT_ALPHA,[W0]:n.ONE_MINUS_CONSTANT_ALPHA};function _n(R,Z,K,he,se,ce,De,Je,ie,ke){if(R===Br){p===!0&&(Xe(n.BLEND),p=!1);return}if(p===!1&&(ge(n.BLEND),p=!0),R!==rh){if(R!==m||ke!==C){if((x!==Ds||E!==Ds)&&(n.blendEquation(n.FUNC_ADD),x=Ds,E=Ds),ke)switch(R){case Ka:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ef:n.blendFunc(n.ONE,n.ONE);break;case tf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",R);break}else switch(R){case Ka:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ef:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tf:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nf:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",R);break}w=null,y=null,A=null,_=null,M.set(0,0,0),F=0,m=R,C=ke}return}se=se||Z,ce=ce||K,De=De||he,(Z!==x||se!==E)&&(n.blendEquationSeparate(St[Z],St[se]),x=Z,E=se),(K!==w||he!==y||ce!==A||De!==_)&&(n.blendFuncSeparate(st[K],st[he],st[ce],st[De]),w=K,y=he,A=ce,_=De),(Je.equals(M)===!1||ie!==F)&&(n.blendColor(Je.r,Je.g,Je.b,ie),M.copy(Je),F=ie),m=R,C=!1}function en(R,Z){R.side===qn?Xe(n.CULL_FACE):ge(n.CULL_FACE);let K=R.side===Un;Z&&(K=!K),Gn(K),R.blending===Ka&&R.transparent===!1?_n(Br):_n(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let he=R.stencilWrite;o.setTest(he),he&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),dn(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gn(R){D!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),D=R)}function kt(R){R!==A0?(ge(n.CULL_FACE),R!==H&&(R===Qd?n.cullFace(n.BACK):R===T0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xe(n.CULL_FACE),H=R}function Xi(R){R!==V&&(k&&n.lineWidth(R),V=R)}function dn(R,Z,K){R?(ge(n.POLYGON_OFFSET_FILL),(I!==Z||P!==K)&&(I=Z,P=K,a.getReversed()&&(Z=-Z,K=-K),n.polygonOffset(Z,K))):Xe(n.POLYGON_OFFSET_FILL)}function mi(R){R?ge(n.SCISSOR_TEST):Xe(n.SCISSOR_TEST)}function gi(R){R===void 0&&(R=n.TEXTURE0+q-1),j!==R&&(n.activeTexture(R),j=R)}function _i(R,Z,K){K===void 0&&(j===null?K=n.TEXTURE0+q-1:K=j);let he=te[K];he===void 0&&(he={type:void 0,texture:void 0},te[K]=he),(he.type!==R||he.texture!==Z)&&(j!==K&&(n.activeTexture(K),j=K),n.bindTexture(R,Z||Be[R]),he.type=R,he.texture=Z)}function N(){let R=te[j];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function bi(){try{n.compressedTexImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function Pt(){try{n.compressedTexImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function Lt(){try{n.texSubImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function me(){try{n.texSubImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function tn(){try{n.compressedTexSubImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function ze(){try{n.compressedTexSubImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function je(){try{n.texStorage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function T(){try{n.texStorage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function v(){try{n.texImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function z(){try{n.texImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function ne(R){return u[R]!==void 0?u[R]:n.getParameter(R)}function ee(R,Z){u[R]!==Z&&(n.pixelStorei(R,Z),u[R]=Z)}function oe(R){Y.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Y.copy(R))}function de(R){pe.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),pe.copy(R))}function $(R,Z){let K=l.get(Z);K===void 0&&(K=new WeakMap,l.set(Z,K));let he=K.get(R);he===void 0&&(he=n.getUniformBlockIndex(Z,R.name),n.uniformBlockBinding(Z,he,he),K.set(R,he))}function J(R,Z,K){let se=l.get(Z).get(R);c[se]!==K&&(n.bindBufferBase(n.UNIFORM_BUFFER,se,K),c[se]=K)}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,te={},d={},c={},f=new WeakMap,g=[],b=null,p=!1,m=null,x=null,w=null,y=null,E=null,A=null,_=null,M=new Ue(0,0,0),F=0,C=!1,D=null,H=null,V=null,I=null,P=null,Y.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:Xe,bindFramebuffer:Ot,drawBuffers:Pe,useProgram:ct,setBlending:_n,setMaterial:en,setFlipSided:Gn,setCullFace:kt,setLineWidth:Xi,setPolygonOffset:dn,setScissorTest:mi,activeTexture:gi,bindTexture:_i,unbindTexture:N,compressedTexImage2D:bi,compressedTexImage3D:Pt,texImage2D:v,texImage3D:z,pixelStorei:ee,getParameter:ne,updateUBOMapping:$,uniformBlockBinding:J,texStorage2D:je,texStorage3D:T,texSubImage2D:Lt,texSubImage3D:me,compressedTexSubImage2D:tn,compressedTexSubImage3D:ze,scissor:oe,viewport:de,reset:le}}function kw(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,b=new FinalizationRegistry(T=>g.delete(T)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,v){return p?new OffscreenCanvas(T,v):La("canvas")}function x(T,v,z){let ne=1,ee=je(T);if((ee.width>z||ee.height>z)&&(ne=z/Math.max(ee.width,ee.height)),ne<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let oe=Math.floor(ne*ee.width),de=Math.floor(ne*ee.height);d===void 0&&(d=m(oe,de));let $=v?m(oe,de):d;return $.width=oe,$.height=de,$.getContext("2d").drawImage(T,0,0,oe,de),Le("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+oe+"x"+de+")."),$}else return"data"in T&&Le("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function w(T){return T.generateMipmaps}function y(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(T,v,z,ne,ee,oe=!1){if(T!==null){if(n[T]!==void 0)return n[T];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de;ne&&(de=e.get("EXT_texture_norm16"),de||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===n.RED&&(z===n.FLOAT&&($=n.R32F),z===n.HALF_FLOAT&&($=n.R16F),z===n.UNSIGNED_BYTE&&($=n.R8),z===n.UNSIGNED_SHORT&&de&&($=de.R16_EXT),z===n.SHORT&&de&&($=de.R16_SNORM_EXT)),v===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.R8UI),z===n.UNSIGNED_SHORT&&($=n.R16UI),z===n.UNSIGNED_INT&&($=n.R32UI),z===n.BYTE&&($=n.R8I),z===n.SHORT&&($=n.R16I),z===n.INT&&($=n.R32I)),v===n.RG&&(z===n.FLOAT&&($=n.RG32F),z===n.HALF_FLOAT&&($=n.RG16F),z===n.UNSIGNED_BYTE&&($=n.RG8),z===n.UNSIGNED_SHORT&&de&&($=de.RG16_EXT),z===n.SHORT&&de&&($=de.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RG8UI),z===n.UNSIGNED_SHORT&&($=n.RG16UI),z===n.UNSIGNED_INT&&($=n.RG32UI),z===n.BYTE&&($=n.RG8I),z===n.SHORT&&($=n.RG16I),z===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGB8UI),z===n.UNSIGNED_SHORT&&($=n.RGB16UI),z===n.UNSIGNED_INT&&($=n.RGB32UI),z===n.BYTE&&($=n.RGB8I),z===n.SHORT&&($=n.RGB16I),z===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGBA8UI),z===n.UNSIGNED_SHORT&&($=n.RGBA16UI),z===n.UNSIGNED_INT&&($=n.RGBA32UI),z===n.BYTE&&($=n.RGBA8I),z===n.SHORT&&($=n.RGBA16I),z===n.INT&&($=n.RGBA32I)),v===n.RGB&&(z===n.UNSIGNED_SHORT&&de&&($=de.RGB16_EXT),z===n.SHORT&&de&&($=de.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),v===n.RGBA){let J=oe?Vo:et.getTransfer(ee);z===n.FLOAT&&($=n.RGBA32F),z===n.HALF_FLOAT&&($=n.RGBA16F),z===n.UNSIGNED_BYTE&&($=J===xt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&de&&($=de.RGBA16_EXT),z===n.SHORT&&de&&($=de.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(T,v){let z;return T?v===null||v===ki||v===Vr?z=n.DEPTH24_STENCIL8:v===ai?z=n.DEPTH32F_STENCIL8:v===Ja&&(z=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ki||v===Vr?z=n.DEPTH_COMPONENT24:v===ai?z=n.DEPTH_COMPONENT32F:v===Ja&&(z=n.DEPTH_COMPONENT16),z}function M(T,v){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==qt&&T.minFilter!==Dt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function F(T){let v=new WeakRef(T);i.get(T).__ref=v,g.add(v),b.register(T,v,v)}function C(T){let v=i.get(T).__ref;v!==void 0&&(g.delete(v),b.unregister(v))}function D(T){V(T.target)}function H(T){I(T.target)}function V(T){T.removeEventListener("dispose",D),C(T),q(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function I(T){T.removeEventListener("dispose",H),C(T),Q(T)}function P(){for(let T of g){let v=T.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):V(v))}g.clear(),u.clear()}function q(T){let v=i.get(T);if(v.__webglInit===void 0)return;let z=T.source,ne=f.get(z);if(ne){let ee=ne[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&k(T),Object.keys(ne).length===0&&f.delete(z)}i.remove(T)}function k(T){let v=i.get(T);n.deleteTexture(v.__webglTexture);let z=T.source,ne=f.get(z);delete ne[v.__cacheKey],a.memory.textures--}function Q(T){let v=i.get(T);v.__depthDisposeCallback&&v.__depthDisposeCallback();let z=T.depthTexture;if(z&&z.renderTarget===T&&V(z),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(v.__webglFramebuffer[ee]))for(let oe=0;oe<v.__webglFramebuffer[ee].length;oe++)n.deleteFramebuffer(v.__webglFramebuffer[ee][oe]);else n.deleteFramebuffer(v.__webglFramebuffer[ee]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ee])}else{if(Array.isArray(v.__webglFramebuffer))for(let ee=0;ee<v.__webglFramebuffer.length;ee++)n.deleteFramebuffer(v.__webglFramebuffer[ee]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ee=0;ee<v.__webglColorRenderbuffer.length;ee++)v.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ee]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ne=T.textures;for(let ee=0,oe=ne.length;ee<oe;ee++){let de=i.get(ne[ee]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(ne[ee])}i.remove(T)}let W=0;function j(){W=0}function te(){return W}function ye(T){W=T}function Ve(){let T=W;return T>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,T}function Y(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.mipmapsAutoUpdate),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function pe(T,v){let z=i.get(T);if(T.isVideoTexture&&tn(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let ne=T.image;if(ne===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{en(z,T,v);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+v)}function Se(T,v){let z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){en(z,T,v);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+v)}function Be(T,v){let z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){en(z,T,v);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+v)}function ge(T,v){let z=i.get(T);if(T.version>0&&z.__version!==T.version){Gn(z,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+v)}let Xe={[rr]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[Ia]:n.MIRRORED_REPEAT},Ot={[qt]:n.NEAREST,[lh]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[Dt]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},Pe={[Z0]:n.NEVER,[Mf]:n.ALWAYS,[Q0]:n.LESS,[yf]:n.LEQUAL,[e_]:n.EQUAL,[Sf]:n.GEQUAL,[t_]:n.GREATER,[n_]:n.NOTEQUAL};function ct(T,v){if(v.type===ai&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Dt||v.magFilter===$a||v.magFilter===Hr||v.magFilter===Mi||v.minFilter===Dt||v.minFilter===$a||v.minFilter===Hr||v.minFilter===Mi)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Xe[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Xe[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Xe[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Ot[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Ot[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qt||v.minFilter!==Hr&&v.minFilter!==Mi||v.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function St(T,v){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",D),F(v));let ne=v.source,ee=f.get(ne);ee===void 0&&(ee={},f.set(ne,ee));let oe=Y(v);if(oe!==T.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ee[oe].usedTimes++;let de=ee[T.__cacheKey];de!==void 0&&(ee[T.__cacheKey].usedTimes--,de.usedTimes===0&&k(v)),T.__cacheKey=oe,T.__webglTexture=ee[oe].texture}return z}function st(T,v,z){return Math.floor(Math.floor(T/z)/v)}function _n(T,v,z,ne){let oe=T.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,z,ne,v.data);else{oe.sort((R,Z)=>R.start-Z.start);let de=0;for(let R=1;R<oe.length;R++){let Z=oe[de],K=oe[R],he=Z.start+Z.count,se=st(K.start,v.width,4),ce=st(Z.start,v.width,4);K.start<=he+1&&se===ce&&st(K.start+K.count-1,v.width,4)===se?Z.count=Math.max(Z.count,K.start+K.count-Z.start):(++de,oe[de]=K)}oe.length=de+1;let $=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let R=0,Z=oe.length;R<Z;R++){let K=oe[R],he=Math.floor(K.start/4),se=Math.ceil(K.count/4),ce=he%v.width,De=Math.floor(he/v.width),Je=se,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,De),t.texSubImage2D(n.TEXTURE_2D,0,ce,De,Je,ie,z,ne,v.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function en(T,v,z){let ne=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=n.TEXTURE_3D);let ee=St(T,v),oe=v.source;t.bindTexture(ne,T.__webglTexture,n.TEXTURE0+z);let de=i.get(oe);if(oe.version!==de.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ie=et.getPrimaries(et.workingColorSpace),ke=v.colorSpace===Bi?null:et.getPrimaries(v.colorSpace),$e=v.colorSpace===Bi||ie===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let J=x(v.image,!1,s.maxTextureSize);J=ze(v,J);let le=r.convert(v.format,v.colorSpace),R=r.convert(v.type),Z=A(v.internalFormat,le,R,v.normalized,v.colorSpace,v.isVideoTexture);ct(ne,v);let K,he=v.mipmaps,se=v.isVideoTexture!==!0,ce=de.__version===void 0||ee===!0,De=oe.dataReady,Je=M(v,J);if(v.isDepthTexture)Z=_(v.format===Fs,v.type),ce&&(se?t.texStorage2D(n.TEXTURE_2D,1,Z,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Z,J.width,J.height,0,le,R,null));else if(v.isDataTexture)if(he.length>0){se&&ce&&t.texStorage2D(n.TEXTURE_2D,Je,Z,he[0].width,he[0].height);for(let ie=0,ke=he.length;ie<ke;ie++)K=he[ie],se?De&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,K.width,K.height,le,R,K.data):t.texImage2D(n.TEXTURE_2D,ie,Z,K.width,K.height,0,le,R,K.data);v.generateMipmaps=!1}else se?(ce&&t.texStorage2D(n.TEXTURE_2D,Je,Z,J.width,J.height),De&&_n(v,J,le,R)):t.texImage2D(n.TEXTURE_2D,0,Z,J.width,J.height,0,le,R,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){se&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,Z,he[0].width,he[0].height,J.depth);for(let ie=0,ke=he.length;ie<ke;ie++)if(K=he[ie],v.format!==wi)if(le!==null)if(se){if(De)if(v.layerUpdates.size>0){let $e=Df(K.width,K.height,v.format,v.type);for(let _e of v.layerUpdates){let vt=K.data.subarray(_e*$e/K.data.BYTES_PER_ELEMENT,(_e+1)*$e/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,_e,K.width,K.height,1,le,vt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,K.width,K.height,J.depth,le,K.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Z,K.width,K.height,J.depth,0,K.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?De&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,K.width,K.height,J.depth,le,R,K.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Z,K.width,K.height,J.depth,0,le,R,K.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{se&&ce&&t.texStorage2D(n.TEXTURE_2D,Je,Z,he[0].width,he[0].height);for(let ie=0,ke=he.length;ie<ke;ie++)K=he[ie],v.format!==wi?le!==null?se?De&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,K.width,K.height,le,K.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Z,K.width,K.height,0,K.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?De&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,K.width,K.height,le,R,K.data):t.texImage2D(n.TEXTURE_2D,ie,Z,K.width,K.height,0,le,R,K.data)}else if(v.isDataArrayTexture)if(se){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,Z,J.width,J.height,J.depth),De)if(v.layerUpdates.size>0){let ie=Df(J.width,J.height,v.format,v.type);for(let ke of v.layerUpdates){let $e=J.data.subarray(ke*ie/J.data.BYTES_PER_ELEMENT,(ke+1)*ie/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,J.width,J.height,1,le,R,$e)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,le,R,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Z,J.width,J.height,J.depth,0,le,R,J.data);else if(v.isData3DTexture)se?(ce&&t.texStorage3D(n.TEXTURE_3D,Je,Z,J.width,J.height,J.depth),De&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,le,R,J.data)):t.texImage3D(n.TEXTURE_3D,0,Z,J.width,J.height,J.depth,0,le,R,J.data);else if(v.isFramebufferTexture){if(ce)if(se)t.texStorage2D(n.TEXTURE_2D,Je,Z,J.width,J.height);else{let ie=J.width,ke=J.height;for(let $e=0;$e<Je;$e++)t.texImage2D(n.TEXTURE_2D,$e,Z,ie,ke,0,le,R,null),ie>>=1,ke>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),J.parentNode!==ie){ie.appendChild(J),u.add(v),ie.onpaint=ke=>{let $e=ke.changedElements;for(let _e of u)$e.includes(_e.image)&&(_e.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let $e=n.RGBA,_e=n.RGBA,vt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,$e,_e,vt,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(he.length>0){if(se&&ce){let ie=je(he[0]);t.texStorage2D(n.TEXTURE_2D,Je,Z,ie.width,ie.height)}for(let ie=0,ke=he.length;ie<ke;ie++)K=he[ie],se?De&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,le,R,K):t.texImage2D(n.TEXTURE_2D,ie,Z,le,R,K);v.generateMipmaps=!1}else if(se){if(ce){let ie=je(J);t.texStorage2D(n.TEXTURE_2D,Je,Z,ie.width,ie.height)}De&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,R,J)}else t.texImage2D(n.TEXTURE_2D,0,Z,le,R,J);w(v)&&v.mipmapsAutoUpdate===!0&&y(ne),de.__version=oe.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Gn(T,v,z){if(v.image.length!==6)return;let ne=St(T,v),ee=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);let oe=i.get(ee);if(ee.version!==oe.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);let de=et.getPrimaries(et.workingColorSpace),$=v.colorSpace===Bi?null:et.getPrimaries(v.colorSpace),J=v.colorSpace===Bi||de===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let le=v.isCompressedTexture||v.image[0].isCompressedTexture,R=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let _e=0;_e<6;_e++)!le&&!R?Z[_e]=x(v.image[_e],!0,s.maxCubemapSize):Z[_e]=R?v.image[_e].image:v.image[_e],Z[_e]=ze(v,Z[_e]);let K=Z[0],he=r.convert(v.format,v.colorSpace),se=r.convert(v.type),ce=A(v.internalFormat,he,se,v.normalized,v.colorSpace),De=v.isVideoTexture!==!0,Je=oe.__version===void 0||ne===!0,ie=ee.dataReady,ke=M(v,K);ct(n.TEXTURE_CUBE_MAP,v);let $e;if(v.isDepthTexture){if(ce=_(v.format===Fs,v.type),Je)if(De)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ce,K.width,K.height);else for(let _e=0;_e<6;_e++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ce,K.width,K.height,0,he,se,null)}else if(le){De&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,ce,K.width,K.height);for(let _e=0;_e<6;_e++){$e=Z[_e].mipmaps;for(let vt=0;vt<$e.length;vt++){let fn=$e[vt];v.format!==wi?he!==null?De?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,vt,0,0,fn.width,fn.height,he,fn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,vt,ce,fn.width,fn.height,0,fn.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,vt,0,0,fn.width,fn.height,he,se,fn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,vt,ce,fn.width,fn.height,0,he,se,fn.data)}}}else{if($e=v.mipmaps,De&&Je){$e.length>0&&ke++;let _e=je(Z[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,ce,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(R){De?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Z[_e].width,Z[_e].height,he,se,Z[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ce,Z[_e].width,Z[_e].height,0,he,se,Z[_e].data);for(let vt=0;vt<$e.length;vt++){let Ys=$e[vt].image[_e].image;De?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,vt+1,0,0,Ys.width,Ys.height,he,se,Ys.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,vt+1,ce,Ys.width,Ys.height,0,he,se,Ys.data)}}else{De?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,he,se,Z[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ce,he,se,Z[_e]);for(let vt=0;vt<$e.length;vt++){let fn=$e[vt];De?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,vt+1,0,0,he,se,fn.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,vt+1,ce,he,se,fn.image[_e])}}}w(v)&&v.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),oe.__version=ee.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function kt(T,v,z,ne,ee,oe){let de=r.convert(z.format,z.colorSpace),$=r.convert(z.type),J=A(z.internalFormat,de,$,z.normalized,z.colorSpace),le=i.get(v),R=i.get(z);if(R.__renderTarget=v,!le.__hasExternalTextures){let Z=Math.max(1,v.width>>oe),K=Math.max(1,v.height>>oe);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,oe,J,Z,K,v.depth,0,de,$,null):t.texImage2D(ee,oe,J,Z,K,0,de,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,R.__webglTexture,0,Lt(v)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,R.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xi(T,v,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){let ne=v.depthTexture,ee=ne&&ne.isDepthTexture?ne.type:null,oe=_(v.stencilBuffer,ee),de=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(v),oe,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(v),oe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,oe,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,T)}else{let ne=v.textures;for(let ee=0;ee<ne.length;ee++){let oe=ne[ee],de=r.convert(oe.format,oe.colorSpace),$=r.convert(oe.type),J=A(oe.internalFormat,de,$,oe.normalized,oe.colorSpace);me(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(v),J,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(v),J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dn(T,v,z){let ne=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(v.depthTexture);ee.__renderTarget=v;let oe=ne?v.depthTexture.image[0]:v.depthTexture.image;(!ee.__webglTexture||oe.width!==v.width||oe.height!==v.height)&&(oe.width=v.width,oe.height=v.height,v.depthTexture.needsUpdate=!0),ne?ge(v.depthTexture,0):pe(v.depthTexture,0);let de=ee.__webglTexture,$=Lt(v),J=ne?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,le=v.depthTexture.format===Fs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===ws)me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,J,de,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,le,J,de,0);else if(v.depthTexture.format===Fs)me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,J,de,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,le,J,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mi(T){let v=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let ne=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){let ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",ee)};ne.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=ne}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let ne=0;ne<6;ne++)dn(v.__webglFramebuffer[ne],T,ne);else T.texture.mipmaps.length>0?dn(v.__webglFramebuffer[0],T,0):dn(v.__webglFramebuffer,T,0);else if(z){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=n.createRenderbuffer(),Xi(v.__webglDepthbuffer[ne],T,!1);else{let ee=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,oe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Xi(v.__webglDepthbuffer,T,!1);else{let ee=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function gi(T,v,z){let ne=i.get(T);v!==void 0&&kt(ne.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&mi(T)}function _i(T){let v=T.texture,z=i.get(T),ne=i.get(v);T.addEventListener("dispose",H),F(T);let ee=T.textures,oe=T.isWebGLCubeRenderTarget===!0,de=ee.length>1;if(de||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=v.version,a.memory.textures++),oe){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let J=0;J<v.mipmaps.length;J++)z.__webglFramebuffer[$][J]=n.createFramebuffer()}else z.__webglFramebuffer[$]=n.createFramebuffer()}else{if(v.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)z.__webglFramebuffer[$]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(de)for(let $=0,J=ee.length;$<J;$++){let le=i.get(ee[$]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&me(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<ee.length;$++){let J=ee[$];z.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[$]);let le=r.convert(J.format,J.colorSpace),R=r.convert(J.type),Z=A(J.internalFormat,le,R,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),K=Lt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,Z,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,z.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Xi(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),ct(n.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)kt(z.__webglFramebuffer[$][J],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else kt(z.__webglFramebuffer[$],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);w(v)?y(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(de){for(let $=0,J=ee.length;$<J;$++){let le=ee[$],R=i.get(le),Z=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,R.__webglTexture),ct(Z,le),kt(z.__webglFramebuffer,T,le,n.COLOR_ATTACHMENT0+$,Z,0),w(le)&&y(Z)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,ne.__webglTexture),ct($,v),v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)kt(z.__webglFramebuffer[J],T,v,n.COLOR_ATTACHMENT0,$,J);else kt(z.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,$,0);w(v)?y($):v.mipmaps.length>0&&n.texParameteri($,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&mi(T)}function N(T){let v=T.textures;for(let z=0,ne=v.length;z<ne;z++){let ee=v[z];if(w(ee)&&ee.mipmapsAutoUpdate===!0){let oe=E(T),de=i.get(ee).__webglTexture;t.bindTexture(oe,de),y(oe),t.unbindTexture()}}}let bi=[];function Pt(T){if(T.samples>0){if(me(T)===!1){let v=T.textures,z=T.width,ne=T.height,ee=n.COLOR_BUFFER_BIT,oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(T),$=v.length>1;if($)for(let le=0;le<v.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let le=0;le<v.length;le++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[le]);let R=i.get(v[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,z,ne,0,0,z,ne,ee,n.NEAREST),c===!0&&(bi.length=0,bi.push(n.COLOR_ATTACHMENT0+le),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&bi.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bi))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let le=0;le<v.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,de.__webglColorRenderbuffer[le]);let R=i.get(v[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,R,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Lt(T){return Math.min(s.maxSamples,T.samples)}function me(T){let v=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function tn(T){let v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function ze(T,v){let z=T.colorSpace,ne=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Ln&&z!==Bi&&(et.getTransfer(z)===xt?(ne!==wi||ee!==xn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",z)),v}function je(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Ve,this.resetTextureUnits=j,this.getTextureUnits=te,this.setTextureUnits=ye,this.setTexture2D=pe,this.setTexture2DArray=Se,this.setTexture3D=Be,this.setTextureCube=ge,this.rebindTextures=gi,this.setupRenderTarget=_i,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=mi,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=me,this.dispose=P}function Bw(n,e){function t(i,s=Bi){let r,a=et.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===uh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_f)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pf)return n.BYTE;if(i===mf)return n.SHORT;if(i===Ja)return n.UNSIGNED_SHORT;if(i===hh)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===bf)return n.ALPHA;if(i===xf)return n.RGB;if(i===wi)return n.RGBA;if(i===ws)return n.DEPTH_COMPONENT;if(i===Fs)return n.DEPTH_STENCIL;if(i===fh)return n.RED;if(i===ph)return n.RED_INTEGER;if(i===lr)return n.RG;if(i===mh)return n.RG_INTEGER;if(i===gh)return n.RGBA_INTEGER;if(i===mc||i===gc||i===_c||i===bc)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_c)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_c)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_h||i===bh||i===xh||i===vh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_h)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yh||i===Sh||i===Mh||i===wh||i===Eh||i===xc||i===Ah)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yh||i===Sh)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wh)return r.COMPRESSED_R11_EAC;if(i===Eh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xc)return r.COMPRESSED_RG11_EAC;if(i===Ah)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Th||i===Rh||i===Ch||i===Ih||i===Ph||i===Lh||i===Dh||i===Fh||i===Nh||i===Uh||i===Oh||i===kh||i===Bh||i===zh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Th)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ch)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ih)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ph)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gh||i===Hh||i===Vh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Gh)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wh||i===qh||i===vc||i===Xh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var zw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gw=`
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

}`,jf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new sc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Vn({vertexShader:zw,fragmentShader:Gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kf=class extends Yi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,b=typeof XRWebGLBinding<"u",p=new jf,m={},x=t.getContextAttributes(),w=null,y=null,E=[],A=[],_=new Ze,M=null,F=null,C=new sn;C.viewport=new _t;let D=new sn;D.viewport=new _t;let H=[C,D],V=new ih,I=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pe=E[Y];return pe===void 0&&(pe=new Na,E[Y]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Y){let pe=E[Y];return pe===void 0&&(pe=new Na,E[Y]=pe),pe.getGripSpace()},this.getHand=function(Y){let pe=E[Y];return pe===void 0&&(pe=new Na,E[Y]=pe),pe.getHandSpace()};function q(Y){let pe=A.indexOf(Y.inputSource);if(pe===-1)return;let Se=E[pe];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,l||a),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<E.length;Y++){let pe=A[Y];pe!==null&&(A[Y]=null,E[Y].disconnect(pe))}I=null,P=null,p.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(w),f=null,d=null,u=null,s=null,y=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),F!==null){let Y=F.camera;Y.fov=F.fov,Y.zoom=F.zoom,Y.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Be=null,ge=null;x.depth&&(ge=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?Fs:ws,Be=x.stencil?Vr:ki);let Xe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Dn(d.textureWidth,d.textureHeight,{format:wi,type:xn,depthTexture:new As(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Dn(f.framebufferWidth,f.framebufferHeight,{format:wi,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(Y){for(let pe=0;pe<Y.removed.length;pe++){let Se=Y.removed[pe],Be=A.indexOf(Se);Be>=0&&(A[Be]=null,E[Be].disconnect(Se))}for(let pe=0;pe<Y.added.length;pe++){let Se=Y.added[pe],Be=A.indexOf(Se);if(Be===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=A.length){A.push(Se),Be=Xe;break}else if(A[Xe]===null){A[Xe]=Se,Be=Xe;break}if(Be===-1)break}let ge=E[Be];ge&&ge.connect(Se)}}function W(Y,pe){pe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let pe=Y.near,Se=Y.far;p.texture!==null&&(p.depthNear>0&&(pe=p.depthNear),p.depthFar>0&&(Se=p.depthFar)),V.near=D.near=C.near=pe,V.far=D.far=C.far=Se,(I!==V.near||P!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,P=V.far),V.layers.mask=Y.layers.mask|6,C.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let Be=Y.parent,ge=V.cameras;W(V,Be);for(let Xe=0;Xe<ge.length;Xe++)W(ge[Xe],Be);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),F===null&&Y.isPerspectiveCamera&&(F={camera:Y,fov:Y.fov,zoom:Y.zoom}),j(Y,V,Be)};function j(Y,pe,Se){Se===null?Y.matrix.copy(pe.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pe.projectionMatrix),Y.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Dr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(Y){return m[Y]};let te=null;function ye(Y,pe){if(h=pe.getViewerPose(l||a),g=pe,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Be=!1;Se.length!==V.cameras.length&&(V.cameras.length=0,Be=!0);for(let Pe=0;Pe<Se.length;Pe++){let ct=Se[Pe],St=null;if(f!==null)St=f.getViewport(ct);else{let _n=u.getViewSubImage(d,ct);St=_n.viewport,Pe===0&&(e.setRenderTargetTextures(y,_n.colorTexture,_n.depthStencilTexture),e.setRenderTarget(y))}let st=H[Pe];st===void 0&&(st=new sn,st.layers.enable(Pe),st.viewport=new _t,H[Pe]=st),st.matrix.fromArray(ct.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ct.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(St.x,St.y,St.width,St.height),Pe===0&&(V.matrix.copy(st.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Be===!0&&V.cameras.push(st)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=i.getBinding();let Pe=u.getDepthInformation(Se[0]);Pe&&Pe.isValid&&Pe.texture&&p.init(Pe,s.renderState)}if(ge&&ge.includes("camera-access")&&b){e.state.unbindTexture(),u=i.getBinding();for(let Pe=0;Pe<Se.length;Pe++){let ct=Se[Pe].camera;if(ct){let St=m[ct];St||(St=new sc,m[ct]=St);let st=u.getCameraImage(ct);St.sourceTexture=st}}}}for(let Se=0;Se<E.length;Se++){let Be=A[Se],ge=E[Se];Be!==null&&ge!==void 0&&ge.update(Be,pe,l||a)}te&&te(Y,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}let Ve=new L_;Ve.setAnimationLoop(ye),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}},Hw=new He,H_=new We;H_.set(-1,0,0,0,1,0,0,0,1);function Vw(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,If(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),b(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,x,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=e.get(m),w=x.envMap,y=x.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Hw.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(H_),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function b(p,m){let x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ww(n,e,t,i){let s={},r={};function a(x,w){let y=w.program;i.uniformBlockBinding(x,y,s[x.id])}function o(x,w){let y=s[x.id];y===void 0&&(g(x),y=c(x),s[x.id]=y,x.addEventListener("dispose",p));let E=w.program;i.updateUBOMapping(x,E);let A=e.render.frame;r[x.id]!==A&&(l(x),r[x.id]=A)}function c(x){let w=n.createBuffer(),y=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,y,E),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function l(x){let w=s[x.id],y=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,_=y.length;A<_;A++){let M=y[A];if(Array.isArray(M))for(let F=0,C=M.length;F<C;F++)h(M[F],A,F,E);else h(M,A,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,w,y,E){if(d(x,w,y,E)===!0){let A=x.__offset,_=x.value;if(Array.isArray(_)){let M=0;for(let F=0;F<_.length;F++){let C=_[F],D=b(C,!0);u(C,x.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,x.__data)}}function u(x,w,y){typeof x=="number"||typeof x=="boolean"?w[y]=x:x.isMatrix3?(w[y]=x.elements[0],w[y+1]=x.elements[1],w[y+2]=x.elements[2],w[y+3]=0,w[y+4]=x.elements[3],w[y+5]=x.elements[4],w[y+6]=x.elements[5],w[y+7]=0,w[y+8]=x.elements[6],w[y+9]=x.elements[7],w[y+10]=x.elements[8],w[y+11]=0):ArrayBuffer.isView(x)?w.set(x.subarray(0,w.length-y),y):x.toArray(w,y)}function d(x,w,y,E){let A=x.value,_=w+"_"+y;if(Array.isArray(A)){E[_]===void 0&&(E[_]=[]);let M=E[_],F=!1;for(let C=0;C<A.length;C++)f(A[C],M,C)===!0&&(F=!0);return F}return f(A,E,_)}function f(x,w,y){if(w[y]===void 0)return typeof x=="number"||typeof x=="boolean"?w[y]=x:ArrayBuffer.isView(x)?w[y]=x.slice():w[y]=x.clone(),!0;{let E=w[y];if(typeof x=="number"||typeof x=="boolean"){if(E!==x)return w[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(E.equals(x)===!1)return E.copy(x),!0}}return!1}function g(x){let w=x.uniforms,y=0,E=16;for(let _=0,M=w.length;_<M;_++){let F=Array.isArray(w[_])?w[_]:[w[_]];for(let C=0,D=F.length;C<D;C++){let H=F[C],V=Array.isArray(H.value)?H.value:[H.value],I=Array.isArray(w[_])||Array.isArray(H.value),P=y;for(let k=0,Q=V.length;k<Q;k++){let W=V[k],j=b(W,I),te=y%E,ye=te%j.boundary,Ve=te+ye;y+=ye,Ve!==0&&E-Ve<j.storage&&(y+=E-Ve),k===0&&(P=y),y+=j.storage}let q=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new q((y-P)/Float32Array.BYTES_PER_ELEMENT),H.__offset=P}}let A=y%E;return A>0&&(y+=E-A),x.__size=y,x.__cache={},this}function b(x,w){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",x),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(x){let w=x.target;w.removeEventListener("dispose",p),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let x in s)n.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:m}}var qw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ns=null;function Xw(){return ns===null&&(ns=new za(qw,16,16,lr,Xn),ns.name="DFG_LUT",ns.minFilter=Dt,ns.magFilter=Dt,ns.wrapS=vi,ns.wrapT=vi,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}var Zh=class{constructor(e={}){let{canvas:t=i_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=xn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let b=f,p=new Set([gh,mh,ph]),m=new Set([xn,ki,Ja,Vr,uh,dh]),x=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,A=null,_=[],M=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,H=null,V=null,I=null,P=null;this._outputColorSpace=nn;let q=0,k=0,Q=null,W=-1,j=null,te=new _t,ye=new _t,Ve=null,Y=new Ue(0),pe=0,Se=t.width,Be=t.height,ge=1,Xe=null,Ot=null,Pe=new _t(0,0,Se,Be),ct=new _t(0,0,Se,Be),St=!1,st=new ar,_n=new Wl,en=!1,Gn=!1,kt=new He,Xi=new O,dn=new _t,mi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gi=!1;function _i(){return Q===null?ge:1}let N=i;function bi(S,L){return t.getContext(S,L)}let Pt,Lt,me,tn,ze,je,T,v,z,ne,ee,oe,de,$,J,le,R,Z,K,he,se,ce,De;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",_e,!1),N===null){let L="webgl2";if(N=bi(L,S),N===null)throw bi(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(S){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),qe("WebGLRenderer: "+S.message),S}function Je(){Pt=new i3(N),Pt.init(),se=new Bw(N,Pt),Lt=new XM(N,Pt,e,se),me=new Ow(N,Pt),Lt.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),V=N.createFramebuffer(),I=N.createFramebuffer(),P=N.createFramebuffer(),tn=new a3(N),ze=new Mw,je=new kw(N,Pt,me,ze,Lt,se,tn),T=new n3(C),v=new cS(N),ce=new WM(N,v),z=new s3(N,v,tn,ce),ne=new c3(N,z,v,ce,tn),Z=new o3(N,Lt,je),J=new jM(ze),ee=new Sw(C,T,Pt,Lt,ce,J),oe=new Vw(C,ze),de=new Ew,$=new Pw(Pt),R=new VM(C,T,me,ne,g,c),le=new Uw(C,ne,Lt),De=new Ww(N,tn,Lt,me),K=new qM(N,Pt,tn),he=new r3(N,Pt,tn),tn.programs=ee.programs,C.capabilities=Lt,C.extensions=Pt,C.properties=ze,C.renderLists=de,C.shadowMap=le,C.state=me,C.info=tn}b!==xn&&(F=new h3(b,t.width,t.height,o,s,r));let ie=new Kf(C,N);this.xr=ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=Pt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Pt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(S){S!==void 0&&(ge=S,this.setSize(Se,Be,!1))},this.getSize=function(S){return S.set(Se,Be)},this.setSize=function(S,L,X=!0){if(ie.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=S,Be=L,t.width=Math.floor(S*ge),t.height=Math.floor(L*ge),X===!0&&(t.style.width=S+"px",t.style.height=L+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(Se*ge,Be*ge).floor()},this.setDrawingBufferSize=function(S,L,X){Se=S,Be=L,ge=X,t.width=Math.floor(S*X),t.height=Math.floor(L*X),this.setViewport(0,0,S,L)},this.setEffects=function(S){if(b===xn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let L=0;L<S.length;L++)if(S[L].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(Pe)},this.setViewport=function(S,L,X,B){S.isVector4?Pe.set(S.x,S.y,S.z,S.w):Pe.set(S,L,X,B),me.viewport(te.copy(Pe).multiplyScalar(_i()).round())},this.getScissor=function(S){return S.copy(ct)},this.setScissor=function(S,L,X,B){S.isVector4?ct.set(S.x,S.y,S.z,S.w):ct.set(S,L,X,B),me.scissor(ye.copy(ct).multiplyScalar(_i()).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(S){me.setScissorTest(St=S)},this.setOpaqueSort=function(S){Xe=S},this.setTransparentSort=function(S){Ot=S},this.getClearColor=function(S){return S.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(S=!0,L=!0,X=!0){let B=0;if(S){let G=!1;if(Q!==null){let fe=Q.texture.format;G=p.has(fe)}if(G){let fe=Q.texture.type,Me=m.has(fe),ue=R.getClearColor(),ve=R.getClearAlpha(),Ie=ue.r,Ke=ue.g,rt=ue.b;Me?(x[0]=Ie,x[1]=Ke,x[2]=rt,x[3]=ve,N.clearBufferuiv(N.COLOR,0,x)):(w[0]=Ie,w[1]=Ke,w[2]=rt,w[3]=ve,N.clearBufferiv(N.COLOR,0,w))}else B|=N.COLOR_BUFFER_BIT}L&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),H=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),R.dispose(),de.dispose(),$.dispose(),je.dispose(),ze.dispose(),T.dispose(),ne.dispose(),z.dispose(),ce.dispose(),De.dispose(),ee.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ig),ie.removeEventListener("sessionend",Pg),Mr.stop()};function ke(S){S.preventDefault(),Wo("WebGLRenderer: Context Lost."),D=!0}function $e(){Wo("WebGLRenderer: Context Restored."),D=!1;let S=tn.autoReset,L=le.enabled,X=le.autoUpdate,B=le.needsUpdate,G=le.type;Je(),tn.autoReset=S,le.enabled=L,le.autoUpdate=X,le.needsUpdate=B,le.type=G}function _e(S){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function vt(S){let L=S.target;L.removeEventListener("dispose",vt),fn(L)}function fn(S){Ys(S),ze.remove(S)}function Ys(S){let L=ze.get(S).programs;L!==void 0&&(L.forEach(function(X){ee.releaseProgram(X)}),S.isShaderMaterial&&ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,X,B,G,fe){L===null&&(L=mi);let Me=G.isMesh&&G.matrixWorld.determinantAffine()<0,ue=ny(S,L,X,B,G);me.setMaterial(B,Me);let ve=X.index,Ie=1;if(B.wireframe===!0){if(ve=z.getWireframeAttribute(X),ve===void 0)return;Ie=2}let Ke=X.drawRange,rt=X.attributes.position,Ee=Ke.start*Ie,at=(Ke.start+Ke.count)*Ie;fe!==null&&(Ee=Math.max(Ee,fe.start*Ie),at=Math.min(at,(fe.start+fe.count)*Ie)),ve!==null?(Ee=Math.max(Ee,0),at=Math.min(at,ve.count)):rt!=null&&(Ee=Math.max(Ee,0),at=Math.min(at,rt.count));let Kt=at-Ee;if(Kt<0||Kt===1/0)return;ce.setup(G,B,ue,X,ve);let Et,Mt=K;if(ve!==null&&(Et=v.get(ve),Mt=he,Mt.setIndex(Et)),G.isMesh)B.wireframe===!0?(me.setLineWidth(B.wireframeLinewidth*_i()),Mt.setMode(N.LINES)):Mt.setMode(N.TRIANGLES);else if(G.isLine){let Mn=B.linewidth;Mn===void 0&&(Mn=1),me.setLineWidth(Mn*_i()),G.isLineSegments?Mt.setMode(N.LINES):G.isLineLoop?Mt.setMode(N.LINE_LOOP):Mt.setMode(N.LINE_STRIP)}else G.isPoints?Mt.setMode(N.POINTS):G.isSprite&&Mt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Mn=G._multiDrawStarts,Ae=G._multiDrawCounts,Rn=G._multiDrawCount,gt=ve?v.get(ve).bytesPerElement:1,wr=ze.get(B).currentProgram.getUniforms();for(let wn=0;wn<Rn;wn++)wr.setValue(N,"_gl_DrawID",wn),Mt.render(Mn[wn]/gt,Ae[wn])}else if(G.isInstancedMesh)Mt.renderInstances(Ee,Kt,G.count);else if(X.isInstancedBufferGeometry){let Mn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ae=Math.min(X.instanceCount,Mn);Mt.renderInstances(Ee,Kt,Ae)}else Mt.render(Ee,Kt)};function Cg(S,L,X,B){H!==null&&S.isNodeMaterial&&H.setObject(B,S),en===!0&&J.setState(S,X,!1),S.transparent===!0&&S.side===qn&&S.forceSinglePass===!1?(S.side=Un,S.needsUpdate=!0,Po(S,L,B),S.side=Qi,S.needsUpdate=!0,Po(S,L,B),S.side=qn):Po(S,L,B)}this.compile=function(S,L,X=null){X===null&&(X=S),H!==null&&H.renderStart(S,L,X),A=$.get(X),A.init(L),M.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),S!==X&&S.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),H!==null&&H.updateLights(A.state.lightsArray),Gn=this.localClippingEnabled,en=J.init(this.clippingPlanes,Gn),en===!0&&J.setGlobalState(this.clippingPlanes,L),H!==null&&le.render(A.state.shadowsArray,X,L);let B=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let fe=G.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){let ue=fe[Me];Cg(ue,X,L,G),B.add(ue)}else Cg(fe,X,L,G),B.add(fe)}),A=M.pop(),H!==null&&H.renderEnd(),B},this.compileAsync=function(S,L,X=null){let B=this.compile(S,L,X);return new Promise(G=>{function fe(){if(B.forEach(function(Me){let ve=ze.get(Me).currentProgram;(ve===void 0||ve.isReady())&&B.delete(Me)}),B.size===0){G(S);return}setTimeout(fe,10)}Pt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let md=null;function ey(S){md&&md(S)}function Ig(){Mr.stop()}function Pg(){Mr.start()}let Mr=new L_;Mr.setAnimationLoop(ey),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(S){md=S,ie.setAnimationLoop(S),S===null?Mr.stop():Mr.start()},ie.addEventListener("sessionstart",Ig),ie.addEventListener("sessionend",Pg),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(S,L);let X=ie.enabled===!0&&ie.isPresenting===!0,B=F!==null&&(Q===null||X)&&F.begin(C,Q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(L),L=ie.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,L,Q),A=$.get(S,M.length),A.init(L),A.state.textureUnits=je.getTextureUnits(),M.push(A),kt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?_n.setFromArrayCamera(L):st.setFromProjectionMatrix(kt,yi,L.reversedDepth),Gn=this.localClippingEnabled,en=J.init(this.clippingPlanes,Gn),E=de.get(S,_.length),E.init(),_.push(E),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let Me=C.xr.getDepthSensingMesh();Me!==null&&gd(Me,L,-1/0,C.sortObjects)}gd(S,L,0,C.sortObjects),E.finish(),H!==null&&H.updateLights(A.state.lightsArray),C.sortObjects===!0&&E.sort(Xe,Ot),gi=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,gi&&R.addToRenderList(E,S),this.info.autoReset===!0&&this.info.reset(),en===!0&&J.beginShadows();let G=A.state.shadowsArray;if(le.render(G,S,L),en===!0&&J.endShadows(),(B&&F.hasRenderPass())===!1){let Me=E.opaque,ue=E.transmissive;if(A.setupLights(),L.isArrayCamera){let ve=L.cameras;if(ue.length>0)for(let Ie=0,Ke=ve.length;Ie<Ke;Ie++){let rt=ve[Ie];Dg(Me,ue,S,rt)}gi&&R.render(S);for(let Ie=0,Ke=ve.length;Ie<Ke;Ie++){let rt=ve[Ie];Lg(E,S,rt,rt.viewport)}}else ue.length>0&&Dg(Me,ue,S,L),gi&&R.render(S),Lg(E,S,L)}Q!==null&&k===0&&(je.updateMultisampleRenderTarget(Q),je.updateRenderTargetMipmap(Q)),B&&F.end(C),S.isScene===!0&&S.onAfterRender(C,S,L),ce.resetDefaultState(),W=-1,j=null,M.pop(),M.length>0?(A=M[M.length-1],je.setTextureUnits(A.state.textureUnits),en===!0&&J.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,H!==null&&H.renderEnd()};function gd(S,L,X,B){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){let Me=L.isArrayCamera?_n:st;if(!S.frustumCulled||S.intersectsFrustum(Me)){B&&dn.setFromMatrixPosition(S.matrixWorld).applyMatrix4(kt);let ue=ne.update(S),ve=S.material;ve.visible&&E.push(S,ue,ve,X,dn.z,null,L)}}else if(S.isMesh||S.isLine||S.isPoints){let Me=L.isArrayCamera?_n:st;if(!S.frustumCulled||S.intersectsFrustum(Me)){let ue=ne.update(S),ve=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),dn.copy(S.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),dn.copy(ue.boundingSphere.center)),dn.applyMatrix4(S.matrixWorld).applyMatrix4(kt)),Array.isArray(ve)){let Ie=ue.groups;for(let Ke=0,rt=Ie.length;Ke<rt;Ke++){let Ee=Ie[Ke],at=ve[Ee.materialIndex];at&&at.visible&&E.push(S,ue,at,X,dn.z,Ee,L)}}else ve.visible&&E.push(S,ue,ve,X,dn.z,null,L)}}}let fe=S.children;for(let Me=0,ue=fe.length;Me<ue;Me++)gd(fe[Me],L,X,B)}function Lg(S,L,X,B){let{opaque:G,transmissive:fe,transparent:Me}=S;A.setupLightsView(X),en===!0&&J.setGlobalState(C.clippingPlanes,X),B&&me.viewport(te.copy(B)),G.length>0&&rl(G,L,X),fe.length>0&&rl(fe,L,X),Me.length>0&&rl(Me,L,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Dg(S,L,X,B){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){let Ee=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new Dn(1,1,{generateMipmaps:!0,type:Ee?Xn:xn,minFilter:Mi,samples:Math.max(4,Lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let fe=A.state.transmissionRenderTarget[B.id],Me=B.viewport||te;fe.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);let ue=C.getRenderTarget(),ve=C.getActiveCubeFace(),Ie=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(Y),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),gi&&R.render(X);let Ke=C.toneMapping;C.toneMapping=es;let rt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),en===!0&&J.setGlobalState(C.clippingPlanes,B),rl(S,X,B),je.updateMultisampleRenderTarget(fe),je.updateRenderTargetMipmap(fe),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let at=0,Kt=L.length;at<Kt;at++){let Et=L[at],{object:Mt,geometry:Mn,material:Ae,group:Rn}=Et;if(Ae.side===qn&&Mt.layers.test(B.layers)){let gt=Ae.side;Ae.side=Un,Ae.needsUpdate=!0,Fg(Mt,X,B,Mn,Ae,Rn),Ae.side=gt,Ae.needsUpdate=!0,Ee=!0}}Ee===!0&&(je.updateMultisampleRenderTarget(fe),je.updateRenderTargetMipmap(fe))}C.setRenderTarget(ue,ve,Ie),C.setClearColor(Y,pe),rt!==void 0&&(B.viewport=rt),C.toneMapping=Ke}function rl(S,L,X){let B=L.isScene===!0?L.overrideMaterial:null;for(let G=0,fe=S.length;G<fe;G++){let Me=S[G],{object:ue,geometry:ve,group:Ie}=Me,Ke=Me.material;Ke.allowOverride===!0&&B!==null&&(Ke=B),ue.layers.test(X.layers)&&Fg(ue,L,X,ve,Ke,Ie)}}function Fg(S,L,X,B,G,fe){H!==null&&G.isNodeMaterial&&H.setObject(S,G),S.onBeforeRender(C,L,X,B,G,fe),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(C,L,X,B,S,fe),G.transparent===!0&&G.side===qn&&G.forceSinglePass===!1?(G.side=Un,G.needsUpdate=!0,C.renderBufferDirect(X,L,B,G,S,fe),G.side=Qi,G.needsUpdate=!0,C.renderBufferDirect(X,L,B,G,S,fe),G.side=qn):C.renderBufferDirect(X,L,B,G,S,fe),S.onAfterRender(C,L,X,B,G,fe)}function Ng(S){let L=0;for(let X of S)X.texture!==null&&L++;return L}function Po(S,L,X){L.isScene!==!0&&(L=mi);let B=ze.get(S),G=A.state.lights,fe=A.state.shadowsArray,Me=G.state.version,ue=ee.getParameters(S,G.state,fe,L,X,A.state.lightProbeGridArray),ve=ee.getProgramCacheKey(ue),Ie=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;let Ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=T.get(S.envMap||B.environment,Ke),B.envMapRotation=B.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",vt),Ie=new Map,B.programs=Ie,B.programVariants=new Map);let rt=Ie.get(ve);if(rt!==void 0){if(B.currentProgram===rt&&B.lightsStateVersion===Me)return Og(S,ue),rt}else ue.uniforms=ee.getUniforms(S),H!==null&&S.isNodeMaterial&&H.build(S,X,ue),S.onBeforeCompile(ue,C),rt=ee.acquireProgram(ue,ve),Ie.set(ve,rt),B.uniforms=ue.uniforms;let Ee=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ee.clippingPlanes=J.uniform),Og(S,ue),B.needsLights=sy(S),B.lightsStateVersion=Me,B.needsLights&&(Ee.ambientLightColor.value=G.state.ambient,Ee.lightProbe.value=G.state.probe,Ee.sunLights.value=G.state.sun,Ee.sunLightShadows.value=G.state.sunShadow,Ee.directionalLights.value=G.state.directional,Ee.directionalLightShadows.value=G.state.directionalShadow,Ee.spotLights.value=G.state.spot,Ee.spotLightShadows.value=G.state.spotShadow,Ee.rectAreaLights.value=G.state.rectArea,Ee.ltc_1.value=G.state.rectAreaLTC1,Ee.ltc_2.value=G.state.rectAreaLTC2,Ee.pointLights.value=G.state.point,Ee.pointLightShadows.value=G.state.pointShadow,Ee.hemisphereLights.value=G.state.hemi,Ee.sunShadowMatrix.value=G.state.sunShadowMatrix,Ee.sunShadowCascade.value=G.state.sunShadowCascade,Ee.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ee.spotLightMatrix.value=G.state.spotLightMatrix,Ee.spotLightMap.value=G.state.spotLightMap,Ee.pointShadowMatrix.value=G.state.pointShadowMatrix),B.numLightProbeGrids=Ng(A.state.lightProbeGridArray),B.currentProgram=rt,B.uniformsList=null,rt}function ty(S,L,X,B,G){let fe=ze.get(S),Me=fe.currentProgram.id+","+B+","+G,ue=fe.programVariants.get(Me);return ue===void 0?(ue=Po(S,L,X),fe.programVariants.set(Me,ue)):(fe.currentProgram=ue,fe.uniformsList=null,fe.outputColorSpace=B,fe.toneMapping=G),ue}function Ug(S){if(S.uniformsList===null){let L=S.currentProgram.getUniforms();S.uniformsList=Qa.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function Og(S,L){let X=ze.get(S);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function ny(S,L,X,B,G){L.isScene!==!0&&(L=mi),je.resetTextureUnits();let fe=L.fog,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,ue=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:et.workingColorSpace,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ie=T.get(B.envMap||Me,ve),Ke=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,rt=!!X.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,Kt=!!X.morphAttributes.color,Et=es;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Et=C.toneMapping);let Mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Mn=Mt!==void 0?Mt.length:0,Ae=ze.get(B),Rn=A.state.lights;if(en===!0&&(Gn===!0||S!==j)){let Bt=S===j&&B.id===W;J.setState(B,S,Bt)}let gt=!1,wr=!1;B.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==Rn.state.version||G.isBatchedMesh&&Ae.batching===!1||!G.isBatchedMesh&&Ae.batching===!0||G.isBatchedMesh&&Ae.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ae.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ae.instancing===!1||!G.isInstancedMesh&&Ae.instancing===!0||G.isSkinnedMesh&&Ae.skinning===!1||!G.isSkinnedMesh&&Ae.skinning===!0||G.isInstancedMesh&&Ae.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ae.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ae.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ae.instancingMorph===!1&&G.morphTexture!==null||Ae.envMap!==Ie||B.fog===!0&&Ae.fog!==fe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==J.numPlanes||Ae.numIntersection!==J.numIntersection)||Ae.vertexAlphas!==Ke||Ae.vertexTangents!==rt||Ae.morphTargets!==Ee||Ae.morphNormals!==at||Ae.morphColors!==Kt||Ae.morphTargetsCount!==Mn||Ae.numLightProbeGrids!==Ng(A.state.lightProbeGridArray)?gt=!0:(Ae.outputColorSpace!==ue||Ae.toneMapping!==Et)&&(wr=!0):(gt=!0,Ae.__version=B.version);let wn=Ae.currentProgram;(gt===!0||wr===!0)&&(wn=wr===!0?ty(B,L,G,ue,Et):Po(B,L,G),H&&B.isNodeMaterial&&H.onUpdateProgram(B,wn,Ae));let al=!1,$s=!1,Er=!1,dt=wn.getUniforms(),bn=Ae.uniforms;if(me.useProgram(wn.program)&&(al=!0,$s=!0,Er=!0),B.id!==W&&(W=B.id,$s=!0),al||j!==S){me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(N,"projectionMatrix",S.projectionMatrix),dt.setValue(N,"viewMatrix",S.matrixWorldInverse);let pn=dt.map.cameraPosition;pn!==void 0&&pn.setValue(N,Xi.setFromMatrixPosition(S.matrixWorld)),Lt.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,$s=!0,Er=!0)}if(Ae.needsLights&&(Rn.state.sunShadowMap.length>0&&dt.setValue(N,"sunShadowMap",Rn.state.sunShadowMap,je),Rn.state.directionalShadowMap.length>0&&dt.setValue(N,"directionalShadowMap",Rn.state.directionalShadowMap,je),Rn.state.spotShadowMap.length>0&&dt.setValue(N,"spotShadowMap",Rn.state.spotShadowMap,je),Rn.state.pointShadowMap.length>0&&dt.setValue(N,"pointShadowMap",Rn.state.pointShadowMap,je)),G.isSkinnedMesh){dt.setOptional(N,G,"bindMatrix"),dt.setOptional(N,G,"bindMatrixInverse");let Bt=G.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),dt.setValue(N,"boneTexture",Bt.boneTexture,je))}G.isBatchedMesh&&(dt.setOptional(N,G,"batchingTexture"),dt.setValue(N,"batchingTexture",G._matricesTexture,je),dt.setOptional(N,G,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",G._indirectTexture,je),dt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",G._colorsTexture,je));let Di=X.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&Z.update(G,X,wn),($s||Ae.receiveShadow!==G.receiveShadow)&&(Ae.receiveShadow=G.receiveShadow,dt.setValue(N,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(bn.envMapIntensity.value=L.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=Xw()),$s){if(dt.setValue(N,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&iy(bn,Er),fe&&B.fog===!0&&oe.refreshFogUniforms(bn,fe),oe.refreshMaterialUniforms(bn,B,ge,Be,A.state.transmissionRenderTarget[S.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){let Bt=y,pn=0;for(let gs of A.state.lightProbeGridArray)gs.texture!==null&&(Bt.textures[pn]=gs.texture,Bt.min[pn]=gs.boundingBox.min,Bt.max[pn]=gs.boundingBox.max,Bt.resolution[pn]=gs.resolution,pn++);for(let gs in Bt)Bt[gs].length=pn;bn.probesSH.value=Bt.textures,bn.probesMin.value=Bt.min,bn.probesMax.value=Bt.max,bn.probesResolution.value=Bt.resolution}Qa.upload(N,Ug(Ae),bn,je)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Qa.upload(N,Ug(Ae),bn,je),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(N,"center",G.center),dt.setValue(N,"modelViewMatrix",G.modelViewMatrix),dt.setValue(N,"normalMatrix",G.normalMatrix),dt.setValue(N,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){let Bt=B.uniformsGroups;for(let pn=0,gs=Bt.length;pn<gs;pn++){let Bg=Bt[pn];De.update(Bg,wn),De.bind(Bg,wn)}}return wn}function iy(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.sunLights.needsUpdate=L,S.sunLightShadows.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function sy(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(S,L,X){let B=ze.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ze.get(S.texture).__webglTexture=L,ze.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:X,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,L){let X=ze.get(S);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,X=0){Q=S,q=L,k=X;let B=null,G=!1,fe=!1;if(S){let ue=ze.get(S);if(ue.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(N.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(S.viewport),ye.copy(S.scissor),Ve=S.scissorTest,me.viewport(te),me.scissor(ye),me.setScissorTest(Ve),W=-1;return}else if(ue.__webglFramebuffer===void 0)je.setupRenderTarget(S);else if(ue.__hasExternalTextures)je.rebindTextures(S,ze.get(S.texture).__webglTexture,ze.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ke=S.depthTexture;if(ue.__boundDepthTexture!==Ke){if(Ke!==null&&ze.has(Ke)&&(S.width!==Ke.image.width||S.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(S)}}let ve=S.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let Ie=ze.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[L])?B=Ie[L][X]:B=Ie[L],G=!0):S.samples>0&&je.useMultisampledRTT(S)===!1?B=ze.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?B=Ie[X]:B=Ie,te.copy(S.viewport),ye.copy(S.scissor),Ve=S.scissorTest}else te.copy(Pe).multiplyScalar(ge).floor(),ye.copy(ct).multiplyScalar(ge).floor(),Ve=St;if(X!==0&&(B=V),me.bindFramebuffer(N.FRAMEBUFFER,B)&&me.drawBuffers(S,B),me.viewport(te),me.scissor(ye),me.setScissorTest(Ve),G){let ue=ze.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,ue.__webglTexture,X)}else if(fe){let ue=L;for(let ve=0;ve<S.textures.length;ve++){let Ie=ze.get(S.textures[ve]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ve,Ie.__webglTexture,X,ue)}}else if(S!==null&&X!==0){let ue=ze.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ue.__webglTexture,X)}W=-1};function kg(S){let L=ze.get(S);return(L.__readFormat!==S.format||L.__readType!==S.type)&&(L.__readFormat=S.format,L.__readType=S.type,L.__formatReadable=Lt.textureFormatReadable(S.format),L.__typeReadable=Lt.textureTypeReadable(S.type)),L}this.readRenderTargetPixels=function(S,L,X,B,G,fe,Me,ue=0){if(!(S&&S.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ze.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(ve=ve[Me],Array.isArray(ve)&&(ve=ve[0])),ve){me.bindFramebuffer(N.FRAMEBUFFER,ve);try{let Ie=S.textures[ue],Ke=Ie.format,rt=Ie.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);let Ee=kg(Ie);if(Ee.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-B&&X>=0&&X<=S.height-G&&N.readPixels(L,X,B,G,se.convert(Ke),se.convert(rt),fe)}finally{let Ie=Q!==null?ze.get(Q).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,L,X,B,G,fe,Me,ue=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ze.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(ve=ve[Me],Array.isArray(ve)&&(ve=ve[0])),ve)if(L>=0&&L<=S.width-B&&X>=0&&X<=S.height-G){me.bindFramebuffer(N.FRAMEBUFFER,ve);let Ie=S.textures[ue],Ke=Ie.format,rt=Ie.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);let Ee=kg(Ie);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,at),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),N.readPixels(L,X,B,G,se.convert(Ke),se.convert(rt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Kt=Q!==null?ze.get(Q).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,Kt);let Et=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await r_(N,Et,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,at),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(at),N.deleteSync(Et),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,L=null,X=0){let B=Math.pow(2,-X),G=Math.floor(S.image.width*B),fe=Math.floor(S.image.height*B),Me=L!==null?L.x:0,ue=L!==null?L.y:0;je.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Me,ue,G,fe),me.unbindTexture()},this.copyTextureToTexture=function(S,L,X=null,B=null,G=0,fe=0){let Me,ue,ve,Ie,Ke,rt,Ee,at,Kt,Et=S.isCompressedTexture?S.mipmaps[fe]:S.image;if(X!==null)Me=X.max.x-X.min.x,ue=X.max.y-X.min.y,ve=X.isBox3?X.max.z-X.min.z:1,Ie=X.min.x,Ke=X.min.y,rt=X.isBox3?X.min.z:0;else{let dt=Math.pow(2,-G);Me=Math.floor(Et.width*dt),ue=Math.floor(Et.height*dt),S.isDataArrayTexture?ve=Et.depth:S.isData3DTexture?ve=Math.floor(Et.depth*dt):ve=1,Ie=0,Ke=0,rt=0}B!==null?(Ee=B.x,at=B.y,Kt=B.z):(Ee=0,at=0,Kt=0);let Mt=se.convert(L.format),Mn=se.convert(L.type),Ae;L.isData3DTexture?(je.setTexture3D(L,0),Ae=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(je.setTexture2DArray(L,0),Ae=N.TEXTURE_2D_ARRAY):(je.setTexture2D(L,0),Ae=N.TEXTURE_2D),me.activeTexture(N.TEXTURE0),me.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),me.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),me.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let Rn=me.getParameter(N.UNPACK_ROW_LENGTH),gt=me.getParameter(N.UNPACK_IMAGE_HEIGHT),wr=me.getParameter(N.UNPACK_SKIP_PIXELS),wn=me.getParameter(N.UNPACK_SKIP_ROWS),al=me.getParameter(N.UNPACK_SKIP_IMAGES);me.pixelStorei(N.UNPACK_ROW_LENGTH,Et.width),me.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et.height),me.pixelStorei(N.UNPACK_SKIP_PIXELS,Ie),me.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),me.pixelStorei(N.UNPACK_SKIP_IMAGES,rt);let $s=S.isDataArrayTexture||S.isData3DTexture,Er=L.isDataArrayTexture||L.isData3DTexture;if(S.isDepthTexture){let dt=ze.get(S),bn=ze.get(L),Di=ze.get(dt.__renderTarget),Bt=ze.get(bn.__renderTarget);me.bindFramebuffer(N.READ_FRAMEBUFFER,Di.__webglFramebuffer),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let pn=0;pn<ve;pn++)$s&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.get(S).__webglTexture,G,rt+pn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.get(L).__webglTexture,fe,Kt+pn)),N.blitFramebuffer(Ie,Ke,Ie+Me,Ke+ue,Ee,at,Ee+Me,at+ue,N.DEPTH_BUFFER_BIT,N.NEAREST);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||ze.has(S)){let dt=ze.get(S),bn=ze.get(L);me.bindFramebuffer(N.READ_FRAMEBUFFER,I),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,P);for(let Di=0;Di<ve;Di++)$s?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dt.__webglTexture,G,rt+Di):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dt.__webglTexture,G),Er?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bn.__webglTexture,fe,Kt+Di):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bn.__webglTexture,fe),G!==0?N.blitFramebuffer(Ie,Ke,Ie+Me,Ke+ue,Ee,at,Ee+Me,at+ue,N.COLOR_BUFFER_BIT,N.NEAREST):Er?N.copyTexSubImage3D(Ae,fe,Ee,at,Kt+Di,Ie,Ke,Me,ue):N.copyTexSubImage2D(Ae,fe,Ee,at,Ie,Ke,Me,ue);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Er?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Ae,fe,Ee,at,Kt,Me,ue,ve,Mt,Mn,Et.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Ae,fe,Ee,at,Kt,Me,ue,ve,Mt,Et.data):N.texSubImage3D(Ae,fe,Ee,at,Kt,Me,ue,ve,Mt,Mn,Et):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,fe,Ee,at,Me,ue,Mt,Mn,Et.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,fe,Ee,at,Et.width,Et.height,Mt,Et.data):N.texSubImage2D(N.TEXTURE_2D,fe,Ee,at,Me,ue,Mt,Mn,Et);me.pixelStorei(N.UNPACK_ROW_LENGTH,Rn),me.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt),me.pixelStorei(N.UNPACK_SKIP_PIXELS,wr),me.pixelStorei(N.UNPACK_SKIP_ROWS,wn),me.pixelStorei(N.UNPACK_SKIP_IMAGES,al),fe===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&N.generateMipmap(Ae),me.unbindTexture()},this.initRenderTarget=function(S){ze.get(S).__webglFramebuffer===void 0&&je.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?je.setTextureCube(S,0):S.isData3DTexture?je.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?je.setTexture2DArray(S,0):je.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){q=0,k=0,Q=null,me.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Tc=class{constructor(e){this.video=e,this.stream=null,this.want="user",this.facing="user",this.deviceId="",this.devices=[]}static supported(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}async _open(e){this.stop();let t={width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30,max:30}},i=await navigator.mediaDevices.getUserMedia({audio:!1,video:{...t,...e}});this.stream=i;let s=i.getVideoTracks()[0],r=s.getSettings?s.getSettings():{};this.deviceId=r.deviceId||"";let a=s.label||"";this.facing=r.facingMode||(/back|rear|environment|背面|外側/i.test(a)?"environment":"user");let o=this.video;o.srcObject=i,o.muted=!0,o.playsInline=!0,await o.play().catch(()=>{});try{let c=await navigator.mediaDevices.enumerateDevices();this.devices=c.filter(l=>l.kind==="videoinput")}catch{this.devices=[]}return this}start(e="user"){return this.want=e,this._open({facingMode:{ideal:e}})}async flip(){let e=this.deviceId,t=this.facing,i=t==="environment"?"user":"environment";if(this.devices.length===1)return!1;try{if(await this._open({facingMode:{ideal:i}}),this.deviceId&&this.deviceId!==e)return this.want=i,!0;if(!this.deviceId&&this.facing!==t)return this.want=i,!0}catch{}let s=this.devices.map(r=>r.deviceId).filter(Boolean);if(s.length>1){let r=s[(Math.max(0,s.indexOf(e))+1)%s.length];return await this._open({deviceId:{exact:r}}),this.deviceId!==e}return this.stream||await this._open({facingMode:{ideal:t}}),!1}stop(){if(this.stream){for(let e of this.stream.getTracks())e.stop();this.stream=null}this.video.srcObject&&(this.video.srcObject=null)}get mirrored(){return this.facing!=="environment"}get live(){return!!this.stream&&this.stream.getVideoTracks().some(e=>e.readyState==="live")}};var oo=typeof self<"u"?self:{};function Rt(n,e){n=n.split(".");for(var t,i=oo;n.length&&(t=n.shift());)n.length||e===void 0?i=i[t]&&i[t]!==Object.prototype[t]?i[t]:i[t]={}:i[t]=e}function qr(){throw Error("Invalid UTF8")}function V_(n,e){return e=String.fromCharCode.apply(null,e),n==null?e:n+e}var $f,W_,op,mu,tu=void 0,jw=typeof TextDecoder<"u",Kw=typeof TextEncoder<"u";function px(n){if(Kw)n=(W_||(W_=new TextEncoder)).encode(n);else{let t=0,i=new Uint8Array(3*n.length);for(let s=0;s<n.length;s++){var e=n.charCodeAt(s);if(e<128)i[t++]=e;else{if(e<2048)i[t++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<n.length){let r=n.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[t++]=e>>18|240,i[t++]=e>>12&63|128,i[t++]=e>>6&63|128,i[t++]=63&e|128;continue}s--}e=65533}i[t++]=e>>12|224,i[t++]=e>>6&63|128}i[t++]=63&e|128}}n=t===i.length?i:i.subarray(0,t)}return n}e:{for(Jf=["CLOSURE_FLAGS"],nu=oo,iu=0;iu<Jf.length;iu++)if((nu=nu[Jf[iu]])==null){mu=null;break e}mu=nu}var Jf,nu,iu,q_=mu&&mu[748402147];function X_(){var n=oo.navigator;return n&&(n=n.userAgent)?n:""}function Nu(n){return Nu[" "](n),n}op=q_==null||q_,Nu[" "]=function(){};var mx={},Lc=null;function Yw(n){var e=n.length,t=3*e/4;t%3?t=Math.floor(t):"=.".indexOf(n[e-1])!=-1&&(t="=.".indexOf(n[e-2])!=-1?t-2:t-1);var i=new Uint8Array(t),s=0;return(function(r,a){function o(l){for(;c<r.length;){let h=r.charAt(c++),u=Lc[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}gx();for(var c=0;;){let l=o(-1),h=o(0),u=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|h>>4),u!=64&&(a(h<<4&240|u>>2),d!=64&&a(u<<6&192|d))}})(n,function(r){i[s++]=r}),s!==t?i.subarray(0,s):i}function gx(){if(!Lc){Lc={};var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let t=0;t<5;t++){let i=n.concat(e[t].split(""));mx[t]=i;for(let s=0;s<i.length;s++){let r=i[s];Lc[r]===void 0&&(Lc[r]=s)}}}}var $w=typeof Uint8Array<"u",_x=!(X_().indexOf("Trident")!=-1||X_().indexOf("MSIE")!=-1)&&typeof btoa=="function",j_=/[-_.]/g,Jw={"-":"+",_:"/",".":"="};function Zw(n){return Jw[n]||""}function bx(n){if(!_x)return Yw(n);n=j_.test(n)?n.replace(j_,Zw):n,n=atob(n);var e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}function kp(n){return $w&&n!=null&&n instanceof Uint8Array}var co={};function ta(){return K_||(K_=new os(null,co))}function Bp(n){xx(co);var e=n.h;return(e=e==null||kp(e)?e:typeof e=="string"?bx(e):null)==null?e:n.h=e}var K_,os=class{i(){return new Uint8Array(Bp(this)||0)}constructor(n,e){if(xx(e),this.h=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}};function xx(n){if(n!==co)throw Error("illegal external caller")}function vx(n,e){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=e}var Y_=void 0;function Uc(n){return vx(n=Error(n),"warning"),n}function lo(n,e){if(n!=null){var t=Y_??(Y_={}),i=t[n]||0;i>=e||(t[n]=i+1,vx(n=Error(),"incident"),(function(s){oo.setTimeout(()=>{throw s},0)})(n))}}function ia(){return typeof BigInt=="function"}var vo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Ws(n,e,t=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?t&&Symbol.for&&n?Symbol.for(n):n!=null?Symbol(n):Symbol():e}var mr,Qw=Ws("jas",void 0,!0),$_=Ws(void 0,"0di"),Rc=Ws(void 0,"1oa"),cs=Ws(void 0,Symbol()),eE=Ws(void 0,"0ub"),tE=Ws(void 0,"0ubs"),cp=Ws(void 0,"0ubsb"),nE=Ws(void 0,"0actk"),yx=Ws("m_m","jb",!0),Sx={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},Mx=Object.defineProperties,Re=vo?Qw:"Va",J_=[];function Hc(n,e){vo||Re in n||Mx(n,Sx),n[Re]|=e}function Qt(n,e){vo||Re in n||Mx(n,Sx),n[Re]=e}function yo(n){return Hc(n,34),n}function Oc(n){return Hc(n,8192),n}function zp(n,e){return 2&e&&(n|=2),1|n}Qt(J_,7),mr=Object.freeze(J_);var wx={};function ho(n){return n!=null&&n[yx]===wx}function kn(n,e){return e===void 0?n.i!==na&&!!(2&n.B[Re]):!!(2&e)&&n.i!==na}var na={};function Uu(n,e){if(n!=null){if(typeof n=="string")n=n?new os(n,co):ta();else if(!(n instanceof os))if(kp(n))n=n.length?new os(new Uint8Array(n),co):ta();else{if(!e)throw Error();n=void 0}}return n}var gu=class{constructor(e,t,i){this.h=e,this.i=t,this.l=i}next(){var e=this.h.next();return e.done||(e.value=this.i.call(this.l,e.value)),e}[Symbol.iterator](){return this}};function Ex(n,e,t){var i,s=128&e?0:-1,r=n.length;(i=!!r)&&(i=(i=n[r-1])!=null&&typeof i=="object"&&i.constructor===Object);var a=r+(i?-1:0);for(e=128&e?1:0;e<a;e++)t(e-s,n[e]);if(i){n=n[r-1];for(let o in n)!isNaN(o)&&t(+o,n[o])}}Object.freeze({});var Ax={};function So(n){return 128&n?Ax:void 0}function Ou(n){return n.hb=!0,n}var iE=Ou(n=>typeof n=="number"),Z_=Ou(n=>typeof n=="string"),sE=Ou(n=>typeof n=="boolean"),ku=typeof oo.BigInt=="function"&&typeof oo.BigInt(0)=="bigint";function ln(n){var e=n;if(Z_(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(iE(e)&&!Number.isSafeInteger(e))throw Error(String(e));return ku?BigInt(n):n=sE(n)?n?"1":"0":Z_(n)?n.trim()||"0":String(n)}var lp=Ou(n=>ku?n>=aE&&n<=cE:n[0]==="-"?Q_(n,rE):Q_(n,oE)),rE=Number.MIN_SAFE_INTEGER.toString(),aE=ku?BigInt(Number.MIN_SAFE_INTEGER):void 0,oE=Number.MAX_SAFE_INTEGER.toString(),cE=ku?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Q_(n,e){if(n.length>e.length)return!1;if(n.length<e.length||n===e)return!0;for(let t=0;t<n.length;t++){let i=n[t],s=e[t];if(i>s)return!1;if(i<s)return!0}}var _u,lE=typeof Uint8Array.prototype.slice=="function",ft=0,yt=0;function hp(n){var e=n>>>0;ft=e,yt=(n-e)/4294967296>>>0}function sa(n){if(n<0){hp(-n);let[e,t]=Vp(ft,yt);ft=e>>>0,yt=t>>>0}else hp(n)}function Gp(n){var e=_u||(_u=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+n,!0),yt=0,ft=e.getUint32(0,!0)}function Tx(n,e){var t=4294967296*e+(n>>>0);return Number.isSafeInteger(t)?t:uo(n,e)}function hE(n,e){return ln(ia()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(n>>>0)):uo(n,e))}function Rx(n,e){return ia()?ln(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(n)))):ln(Hp(n,e))}function uo(n,e){if(n>>>=0,(e>>>=0)<=2097151)var t=""+(4294967296*e+n);else ia()?t=""+(BigInt(e)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(t=16777215&(n>>>24|e<<8))+6710656*(e=e>>16&65535),t+=8147497*e,e*=2,n>=1e7&&(t+=n/1e7>>>0,n%=1e7),t>=1e7&&(e+=t/1e7>>>0,t%=1e7),t=e+eb(t)+eb(n));return t}function eb(n){return n=String(n),"0000000".slice(n.length)+n}function Hp(n,e){if(2147483648&e)if(ia())n=""+(BigInt(0|e)<<BigInt(32)|BigInt(n>>>0));else{let[t,i]=Vp(n,e);n="-"+uo(t,i)}else n=uo(n,e);return n}function Vc(n){if(n.length<16)sa(Number(n));else if(ia())n=BigInt(n),ft=Number(n&BigInt(4294967295))>>>0,yt=Number(n>>BigInt(32)&BigInt(4294967295));else{let e=+(n[0]==="-");yt=ft=0;let t=n.length;for(let i=e,s=(t-e)%6+e;s<=t;i=s,s+=6){let r=Number(n.slice(i,s));yt*=1e6,(ft=1e6*ft+r)>=4294967296&&(yt+=Math.trunc(ft/4294967296),yt>>>=0,ft>>>=0)}if(e){let[i,s]=Vp(ft,yt);ft=i,yt=s}}}function Vp(n,e){return e=~e,n?n=1+~n:e+=1,[n,e]}function Gi(n){return Array.prototype.slice.call(n)}var Jr=typeof BigInt=="function"?BigInt.asIntN:void 0,up=typeof BigInt=="function"?BigInt.asUintN:void 0,Hi=Number.isSafeInteger,Wc=Number.isFinite,fr=Math.trunc,uE=ln(0);function Cx(n){if(typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);return n}function ci(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function bu(n){if(typeof n!="boolean"){var e=typeof n;throw Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`)}return n}var dE=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Mo(n){switch(typeof n){case"bigint":return!0;case"number":return Wc(n);case"string":return dE.test(n);default:return!1}}function zs(n){if(n!=null){if(!Wc(n))throw Uc("enum");n|=0}return n}function ra(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return Wc(n)?0|n:void 0}function Ix(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return Wc(n)?n>>>0:void 0}function Px(n,e){if(e??(e=1024),!Mo(n))throw Uc("int64");var t=typeof n;switch(e){case 512:switch(t){case"string":return xu(n);case"bigint":return String(Jr(64,n));default:return dp(n)}case 1024:switch(t){case"string":return Fx(n);case"bigint":return ln(Jr(64,n));default:return ln(Hi(n)?n:dp(n))}case 0:switch(t){case"string":return xu(n);case"bigint":return ln(Jr(64,n));default:return Wp(n)}default:return(function(i,s=`unexpected value ${i}!`){throw Error(s)})(e,"Unknown format requested type for int64")}}function Lx(n){var e=n.length;return(n[0]==="-"?e<20||e===20&&n<="-9223372036854775808":e<19||e===19&&n<="9223372036854775807")?n:(Vc(n),Hp(ft,yt))}function Dx(n){if(n[0]==="-")var e=!1;else e=(e=n.length)<20||e===20&&n<="18446744073709551615";return e?n:(Vc(n),uo(ft,yt))}function Wp(n){if(n=fr(n),!Hi(n)){sa(n);var e=ft,t=yt;(n=2147483648&t)&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),n=typeof(e=Tx(e,t))=="number"?n?-e:e:n?"-"+e:e}return n}function dp(n){return n=fr(n),Hi(n)?n=String(n):(sa(n),n=Hp(ft,yt)),n}function xu(n){var e=fr(Number(n));return Hi(e)?String(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),Lx(n))}function Fx(n){var e=fr(Number(n));return Hi(e)?ln(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),ia()?ln(Jr(64,BigInt(n))):ln(Lx(n)))}function vu(n){var e=typeof n;return n==null?n:e==="bigint"?ln(Jr(64,n)):Mo(n)?e==="string"?Fx(n):ln(Hi(n)?n:dp(n)):void 0}function qp(n){if(n==null)return n;var e=typeof n;if(e==="bigint")return String(Jr(64,n));if(Mo(n)){if(e==="string")return xu(n);if(e==="number")return Wp(n)}}function fE(n){if(n==null)return n;var e=typeof n;if(e==="bigint")return String(up(64,n));if(Mo(n)){if(e==="string")return e=fr(Number(n)),Hi(e)&&e>=0?n=String(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),n=Dx(n)),n;if(e==="number")return(function(t){return(t=fr(t))>=0&&Hi(t)||(sa(t),t=Tx(ft,yt)),t})(n)}}function Nx(n){if(n==null||typeof n=="string"||n instanceof os)return n}function Ux(n){if(typeof n!="string")throw Error();return n}function ks(n){if(n!=null&&typeof n!="string")throw Error();return n}function yn(n){return n==null||typeof n=="string"?n:void 0}function Xp(n,e,t,i){return ho(n)?n:Array.isArray(n)?((i=(t=0|n[Re])|32&i|2&i)!==t&&Qt(n,i),new e(n)):(t?2&i?((n=e[$_])||(yo((n=new e).B),n=e[$_]=n),e=n):e=new e:e=void 0,e)}function pE(n,e,t){return e?Px(n,1024):vu(n)??(t?uE:void 0)}function mE(n){return n}var gE={},_E=(function(){try{return Nu(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),Fc=class{constructor(){this.h=new Map}get(e){return this.h.get(e)}set(e,t){return this.h.set(e,t),this.size=this.h.size,this}delete(e){return e=this.h.delete(e),this.size=this.h.size,e}clear(){this.h.clear(),this.size=this.h.size}has(e){return this.h.has(e)}entries(){return this.h.entries()}keys(){return this.h.keys()}values(){return this.h.values()}forEach(e,t){return this.h.forEach(e,t)}[Symbol.iterator](){return this.entries()}},bE=_E?(Object.setPrototypeOf(Fc.prototype,Map.prototype),Object.defineProperties(Fc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Fc):class extends Map{constructor(){super()}};function tb(n){return n}function Zf(n){if(2&n.N)throw Error("Cannot mutate an immutable Map")}var nb,Hs=class extends bE{constructor(n,e,t=tb,i=tb){super(),this.N=0|n[Re],this.O=e,this.ca=t,this.na=this.O?xE:i;for(let s=0;s<n.length;s++){let r=n[s],a=t(r[0],!1,!0),o=r[1];e?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.N),super.set(a,o)}}fa(n){return Oc(Array.from(super.entries(),n))}clear(){Zf(this),super.clear()}delete(n){return Zf(this),super.delete(this.ca(n,!0,!1))}entries(){if(this.O){var n=super.keys();n=new gu(n,vE,this)}else n=super.entries();return n}values(){if(this.O){var n=super.keys();n=new gu(n,Hs.prototype.get,this)}else n=super.values();return n}forEach(n,e){this.O?super.forEach((t,i,s)=>{n.call(e,s.get(i),i,s)}):super.forEach(n,e)}set(n,e){return Zf(this),(n=this.ca(n,!0,!1))==null?this:e==null?(super.delete(n),this):super.set(n,this.na(e,!0,!0,this.O,!1,this.N))}fb(n){var e=this.ca(n[0],!1,!0);n=n[1],n=this.O?n===void 0?null:n:this.na(n,!1,!0,void 0,!1,this.N),super.set(e,n)}has(n){return super.has(this.ca(n,!1,!1))}get(n){n=this.ca(n,!1,!1);var e=super.get(n);if(e!==void 0){var t=this.O;return t?((t=this.na(e,!1,!0,t,this.Fa,this.N))!==e&&super.set(n,t),t):e}}[Symbol.iterator](){return this.entries()}};function xE(n,e,t,i,s,r){return n=Xp(n,i,t,r),s&&(n=Kp(n)),n}function vE(n){return[n,this.get(n)]}function ib(){return nb||(nb=new Hs(yo([]),void 0,void 0,void 0,gE))}function Bu(n){return cs?n[cs]:void 0}function yu(n,e){for(let t in n)!isNaN(t)&&e(n,+t,n[t])}Hs.prototype.toJSON=void 0;var yE,sb,rb,fp=class{};function SE(n,e){e<100||lo(tE,1)}function zu(n,e,t,i){var s=i!==void 0;i=!!i;var r,a=cs;!s&&vo&&a&&(r=n[a])&&yu(r,SE),a=[];var o=n.length;r=4294967295;var c=!1,l=!!(64&e),h=l?128&e?0:-1:void 0;if(!(1&e)){var u=o&&n[o-1];u!=null&&typeof u=="object"&&u.constructor===Object?r=--o:u=void 0,!l||128&e||s||(c=!0,r=(yE??mE)(r-h,h,n,u,void 0)+h)}e=void 0;for(var d=0;d<o;d++){let f=n[d];if(f!=null&&(f=t(f,i))!=null)if(l&&d>=r){let g=d-h;(e??(e={}))[g]=f}else a[d]=f}if(u)for(let f in u){if((o=u[f])==null||(o=t(o,i))==null)continue;let g;d=+f,l&&!Number.isNaN(d)&&(g=d+h)<r?a[g]=o:(e??(e={}))[f]=o}return e&&(c?a.push(e):a[r]=e),s&&(t=cs)&&(n=Bu(n))&&n instanceof fp&&(a[t]=(function(f){var g=new fp;return yu(f,(b,p,m)=>{g[p]=Gi(m)}),g.h=f.h,g})(n)),a}function ME(n){return n[0]=kc(n[0]),n[1]=kc(n[1]),n}function kc(n){switch(typeof n){case"number":return Number.isFinite(n)?n:""+n;case"bigint":return lp(n)?Number(n):""+n;case"boolean":return n?1:0;case"object":if(Array.isArray(n)){var e=0|n[Re];return n.length===0&&1&e?void 0:zu(n,e,kc)}if(ho(n))return Ox(n);if(n instanceof os){if((e=n.h)==null)n="";else if(typeof e=="string")n=e;else{if(_x){for(var t="",i=0,s=e.length-10240;i<s;)t+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));t+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(t)}else{t===void 0&&(t=0),gx(),t=mx[t],i=Array(Math.floor(e.length/3)),s=t[64]||"";let l=0,h=0;for(;l<e.length-2;l+=3){var r=e[l],a=e[l+1],o=e[l+2],c=t[r>>2];r=t[(3&r)<<4|a>>4],a=t[(15&a)<<2|o>>6],o=t[63&o],i[h++]=c+r+a+o}switch(c=0,o=s,e.length-l){case 2:o=t[(15&(c=e[l+1]))<<2]||s;case 1:e=e[l],i[h]=t[e>>2]+t[(3&e)<<4|c>>4]+o+s}e=i.join("")}n=n.h=e}return n}return n instanceof Hs?n=n.size!==0?n.fa(ME):void 0:void 0}return n}function Ox(n){return zu(n=n.B,0|n[Re],kc)}function Zr(n,e){return kx(n,e[0],e[1])}function kx(n,e,t,i=0){if(n==null){var s=32;t?(n=[t],s|=128):n=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(n))throw Error("narr");if(s=0|n[Re],op&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(op)throw Error("carr");lo(nE,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&Qt(n,s|i),n;if(t&&(s|=128,t!==n[0]))throw Error("mid");e:{s|=64;var r=(t=n).length;if(r){var a=r-1;let c=t[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(r=+o)<a&&(t[r+e]=c[o],delete c[o]);s=-16760833&s|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return Qt(n,64|s|i),n}function wE(n,e){if(typeof n!="object")return n;if(Array.isArray(n)){var t=0|n[Re];return n.length===0&&1&t?void 0:ab(n,t,e)}if(ho(n))return ob(n);if(n instanceof Hs){if(2&(e=n.N))return n;if(!n.size)return;if(t=yo(n.fa()),n.O)for(n=0;n<t.length;n++){let i=t[n],s=i[1];s=s==null||typeof s!="object"?void 0:ho(s)?ob(s):Array.isArray(s)?ab(s,0|s[Re],!!(32&e)):void 0,i[1]=s}return t}return n instanceof os?n:void 0}function ab(n,e,t){return 2&e||(!t||4096&e||16&e?n=wo(n,e,!1,t&&!(16&e)):(Hc(n,34),4&e&&Object.freeze(n))),n}function jp(n,e,t){return n=new n.constructor(e),t&&(n.i=na),n.o=na,n}function ob(n){var e=n.B,t=0|e[Re];return kn(n,t)?n:Yp(n,e,t)?jp(n,e):wo(e,t)}function wo(n,e,t,i){return i??(i=!!(34&e)),n=zu(n,e,wE,i),i=32,t&&(i|=2),Qt(n,e=16769217&e|i),n}function Kp(n){var e=n.B,t=0|e[Re];return kn(n,t)?Yp(n,e,t)?jp(n,e,!0):new n.constructor(wo(e,t,!1)):n}function Eo(n){if(n.i!==na)return!1;var e=n.B;return Hc(e=wo(e,0|e[Re]),2048),n.B=e,n.i=void 0,n.o=void 0,!0}function aa(n){if(!Eo(n)&&kn(n,0|n.B[Re]))throw Error()}function gr(n,e){e===void 0&&(e=0|n[Re]),32&e&&!(4096&e)&&Qt(n,4096|e)}function Yp(n,e,t){return!!(2&t)||!(!(32&t)||4096&t)&&(Qt(e,2|t),n.i=na,!0)}var Bx=ln(0),hr={};function Nt(n,e,t,i){if((e=ls(n.B,e,void 0,i))!==null||t&&n.o!==na)return e}function ls(n,e,t,i){if(e===-1)return null;var s=e+(t?0:-1),r=n.length-1;if(!(r<1+(t?0:-1))){if(s>=r){var a=n[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){t=a[e];var o=!0}else{if(s!==r)return;t=a}}else t=n[s];if(i&&t!=null){if((i=i(t))==null)return i;if(!Object.is(i,t))return o?a[e]=i:n[s]=i,i}return t}}function Ye(n,e,t,i){aa(n);var s=n.B;return Zt(s,0|s[Re],e,t,i),n}function Zt(n,e,t,i,s){var r=t+(s?0:-1),a=n.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=n[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[t]=i,e}return r<=a?(n[r]=i,e):(i!==void 0&&(t>=(a=(e??(e=0|n[Re]))>>14&1023||536870912)?i!=null&&(n[a+(s?0:-1)]={[t]:i}):n[r]=i),e)}function zx(n,e){return ho(n=ls(n.B,e))||Array.isArray(n)}function Gx(n,e,t){return zx(n,e=qx(n,t)===e?e:-1)}function Yr(n,e,t,i,s){var r=n.B,a=0|r[Re];i=i&&i!==4?i!==1&&(n?kn(n,a):2&a)?1:i:4,s=!!s||i===3,i===2&&Eo(n)&&(a=0|(r=n.B)[Re]);var o=(n=$p(r,e))===mr?7:0|n[Re],c=zp(o,a),l=!(4&c);if(l){let h=0,u=0;for(;h<n.length;h++){let d=t(n[h]);d!=null&&(n[u++]=d)}u<h&&(n.length=u),t=-513&c|4,c=t&=-1025,c&=-4097}return c!==o&&(Qt(n,c),2&c&&Object.freeze(n)),Hx(n,c,r,a,e,i,l,s)}function Hx(n,e,t,i,s,r,a,o){var c=e,l=fo(e);return l&&r===2&&(n=Gi(n),c=0,e=Qr(e,i),i=Zt(t,i,s,n),l=!1),l||(r===1||r===4&&(2&e||!(16&e)&&32&i)?((e|=!n.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==c&&Qt(n,e),Object.freeze(n)):(o||(e|=16),e!==c&&Qt(n,e))),2&e||!(4096&e||16&e)||gr(t,i),n}function $p(n,e,t){return n=ls(n,e,t),Array.isArray(n)?n:mr}function fo(n){return!!(2&n)&&!!(4&n)||!!(256&n)}function Vx(n){return Uu(n,!0)}function Wx(n){n=Gi(n);for(let e=0;e<n.length;e++){let t=n[e]=Gi(n[e]);Array.isArray(t[1])&&(t[1]=yo(t[1]))}return Oc(n)}function qc(n,e,t,i){aa(n),Zt(n=n.B,0|n[Re],e,(i==="0"?Number(t)===0:t===i)?void 0:t)}function _r(n,e,t){if(2&e)throw Error();var i=So(e),s=$p(n,t,i),r=s===mr?7:0|s[Re],a=zp(r,e);return(2&a||fo(a)||16&a)&&(a===r||fo(a)||Qt(s,a),s=Gi(s),r=0,a=Qr(a,e),Zt(n,e,t,s,i)),(a&=-13)!==r&&Qt(s,a),s}function qx(n,e){return Zp(Jp(n=n.B),n,void 0,e)}function Jp(n){if(vo)return n[Rc]??(n[Rc]=new Map);if(Rc in n)return n[Rc];var e=new Map;return Object.defineProperty(n,Rc,{value:e}),e}function Xx(n,e,t,i,s){var r=Jp(n),a=Zp(r,n,e,t,s);return a!==i&&(a&&(e=Zt(n,e,a,void 0,s)),r.set(t,i)),e}function Zp(n,e,t,i,s){var r=n.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){let o=i[a];ls(e,o,s)!=null&&(r!==0&&(t=Zt(e,t,r,void 0,s)),r=o)}return n.set(i,r),r}function Qp(n,e,t){var i=0|n[Re],s=So(i),r=ls(n,t,s);if(ho(r)){if(!kn(r))return Eo(r),r.B;var a=r.B}else Array.isArray(r)&&(a=r,2&i&&yo(a));if(a){let o=0|a[Re];2&o&&(a=wo(a,o))}return(a=Zr(a,e))!==r&&Zt(n,i,t,a,s),a}function EE(n,e,t,i,s){var r=!1;if(i=(function(a,o,c,l){return ls(a,o,c,l)})(n,i,s,a=>{var o=Xp(a,t,!1,e);return r=o!==a&&o!=null,o}),i!=null)return r&&!kn(i)&&gr(n,e),i}function mt(n,e,t,i){var s=n.B,r=0|s[Re];if((e=EE(s,r,e,t,i))==null)return e;if(!kn(n,r=0|s[Re])){let a=Kp(e);a!==e&&(Eo(n)&&(r=0|(s=n.B)[Re]),gr(s,r=Zt(s,r,t,e=a,i)))}return e}function jx(n,e,t,i,s,r,a,o){r=r&&r!==4?r!==1&&(n?kn(n,t):2&t)?1:r:4,a=!!a||r===3;var c=!!o&&!(n?kn(n,t):2&t);(r===2||c)&&n&&Eo(n)&&(t=0|(e=n.B)[Re]);var l=(n=$p(e,s))===mr?7:0|n[Re],h=zp(l,t);if(o=!(4&h)){var u=n,d=t;let f=!!(2&h);f&&(d|=2);let g=!f,b=!0,p=0,m=0;for(;p<u.length;p++){let x=Xp(u[p],i,!1,d);if(x instanceof i){if(!f){let w=kn(x);g&&(g=!w),b&&(b=w)}u[m++]=x}}m<p&&(u.length=m),h|=4,h=b?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==l&&(Qt(n,h),2&h&&Object.freeze(n)),c&&!(8&h||!n.length&&(r===1||r===4&&(2&h||!(16&h)&&32&t)))){for(fo(h)&&(n=Gi(n),h=Qr(h,t),t=Zt(e,t,s,n)),i=n,c=h,l=0;l<i.length;l++)(u=i[l])!==(h=Kp(u))&&(i[l]=h);c|=8,Qt(n,h=c=i.length?4096|c:-4097&c)}return Hx(n,h,e,t,s,r,o,a)}function oa(n,e,t){var i=n.B;return jx(n,i,0|i[Re],e,t,void 0,!1,!0)}function Kx(n){return n==null&&(n=void 0),n}function Ne(n,e,t,i,s){return Ye(n,t,i=Kx(i),s),i&&!kn(i)&&gr(n.B),n}function zi(n,e,t,i){e:{var s=i=Kx(i);aa(n);let r=n.B,a=0|r[Re];if(s==null){let o=Jp(r);if(Zp(o,r,a,t)!==e)break e;o.set(t,0)}else a=Xx(r,a,t,e);Zt(r,a,e,s)}return i&&!kn(i)&&gr(n.B),n}function pp(n,e,t){aa(n);var i=n.B,s=0|i[Re];if(t==null)Zt(i,s,e);else{var r=t===mr?7:0|t[Re],a=r,o=fo(r),c=o||Object.isFrozen(t),l=!0,h=!0;for(let d=0;d<t.length;d++){var u=t[d];o||(u=kn(u),l&&(l=!u),h&&(h=u))}o||(r=l?13:5,r=h?-4097&r:4096|r),c&&r===a||(t=Gi(t),a=0,r=Qr(r,s)),r!==a&&Qt(t,r),s=Zt(i,s,e,t),2&r||!(4096&r||16&r)||gr(i,s)}return n}function Qr(n,e){return-273&(2&e?2|n:-3&n)}function Bc(n,e,t,i){aa(n);var s=n.B;n=jx(n,s,0|s[Re],t,e,2,!0),i=i??new t,n.push(i),e=t=n===mr?7:0|n[Re],(i=kn(i))?(t&=-9,n.length===1&&(t&=-4097)):t|=4096,t!==e&&Qt(n,t),i||gr(s)}function Ri(n,e,t){return ra(Nt(n,e,t))}function On(n,e){return Nt(n,e,void 0,ci)??0}function mp(n,e,t,i){return mt(n,e,t=qx(n,i)===t?t:-1,void 0)}function gp(n,e){qc(n,3,e==null?e:bu(e),!1)}function hs(n,e,t){if(t!=null){if(typeof t!="number"||!Wc(t))throw Uc("int32");t|=0}Ye(n,e,t)}function Qf(n,e,t){return Ye(n,e,t==null?t:Px(t))}function ou(n,e,t){return Ye(n,e,t==null?t:(function(i){if(!Mo(i))throw Uc("uint64");switch(typeof i){case"string":var s=fr(Number(i));return Hi(s)&&s>=0?i=ln(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=ia()?ln(up(64,BigInt(i))):ln(Dx(i))),i;case"bigint":return ln(up(64,i));default:return i>=0&&Hi(i)||((i=fr(i))>=0&&Hi(i)?i=String(i):(sa(i),i=uo(ft,yt))),ln(i)}})(t))}function Oe(n,e,t){Ye(n,e,t==null?t:Cx(t))}function io(n,e,t){qc(n,e,t==null?t:Cx(t),0)}function li(n,e,t){qc(n,e,ks(t),"")}function Su(n,e,t){{aa(n);let a=n.B,o=0|a[Re];if(t==null)Zt(a,o,e);else{var i=n=t===mr?7:0|t[Re],s=fo(n),r=s||Object.isFrozen(t);for(s||(n=0),r||(t=Gi(t),i=0,n=Qr(n,o),r=!1),n|=5,n|=(4&n?512&n?512:1024&n?1024:0:void 0)??1024,s=0;s<t.length;s++){let c=t[s],l=Ux(c);Object.is(c,l)||(r&&(t=Gi(t),i=0,n=Qr(n,o),r=!1),t[s]=l)}n!==i&&(r&&(t=Gi(t),n=Qr(n,o)),Qt(t,n)),Zt(a,o,e,t)}}}function Gu(n,e,t){aa(n),Yr(n,e,yn,2,!0).push(Ux(t))}var to=class{constructor(n,e,t){if(this.buffer=n,t&&!e)throw Error();this.h=e}};function Hu(n,e){if(typeof n=="string")return new to(bx(n),e);if(Array.isArray(n))return new to(new Uint8Array(n),e);if(n.constructor===Uint8Array)return new to(n,!1);if(n.constructor===ArrayBuffer)return n=new Uint8Array(n),new to(n,!1);if(n.constructor===os)return e=Bp(n)||new Uint8Array(0),new to(e,!0,n);if(n instanceof Uint8Array)return n=n.constructor===Uint8Array?n:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),new to(n,!1);throw Error()}function em(n,e){var t=0,i=0,s=0,r=n.i,a=n.h;do{var o=r[a++];t|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(i|=(127&o)>>4,s=3;s<32&&128&o;s+=7)i|=(127&(o=r[a++]))<<s;if(ea(n,a),!(128&o))return e(t>>>0,i>>>0);throw Error()}function tm(n){for(var e=0,t=n.h,i=t+10,s=n.i;t<i;){let r=s[t++];if(e|=r,!(128&r))return ea(n,t),!!(127&e)}throw Error()}function Vs(n){var e=n.i,t=n.h,i=e[t++],s=127&i;if(128&i&&(s|=(127&(i=e[t++]))<<7,128&i&&(s|=(127&(i=e[t++]))<<14,128&i&&(s|=(127&(i=e[t++]))<<21,128&i&&(s|=(i=e[t++])<<28,128&i&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++])))))throw Error();return ea(n,t),s}function us(n){return Vs(n)>>>0}function Mu(n){return em(n,Rx)}function _p(n){var e=n.i,t=n.h,i=e[t],s=e[t+1],r=e[t+2];return e=e[t+3],ea(n,n.h+4),(i|s<<8|r<<16|e<<24)>>>0}function wu(n){var e=_p(n);n=2*(e>>31)+1;var t=e>>>23&255;return e&=8388607,t==255?e?NaN:n*(1/0):t==0?1401298464324817e-60*n*e:n*Math.pow(2,t-150)*(e+8388608)}function AE(n){return Vs(n)}function ea(n,e){if(n.h=e,e>n.l)throw Error()}function Yx(n,e){if(e<0)throw Error();var t=n.h;if((e=t+e)>n.l)throw Error();return n.h=e,t}function $x(n,e){if(e==0)return ta();var t=Yx(n,e);return n.ga&&n.u?t=n.i.subarray(t,t+e):(n=n.i,t=t===(e=t+e)?new Uint8Array(0):lE?n.slice(t,e):new Uint8Array(n.subarray(t,e))),t.length==0?ta():new os(t,co)}var TE=class{constructor(n,e,t,i){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.init(n,e,t,i)}init(n,e,t,{ga:i=!1,ma:s=!1}={}){this.ga=i,this.ma=s,n&&(n=Hu(n,this.ma),this.i=n.buffer,this.u=n.h,this.o=e||0,this.l=t!==void 0?this.o+t:this.i.length,this.h=this.o)}clear(){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.ga=!1}},cb=[],po=0;function Jx(n,e,t,i){if(Eu.length){let s=Eu.pop();return s.A(i),s.h.init(n,e,t,i),s}return new RE(n,e,t,i)}function Zx(n){n.h.clear(),n.l=-1,n.i=-1,Eu.length<100&&Eu.push(n)}function Qx(n){var e=n.h;if(e.h==e.l)return!1;n.o=n.h.h;var t=us(n.h);if(e=t>>>3,!((t&=7)>=0&&t<=5)||e<1)throw Error();return n.l=e,n.i=t,!0}function cu(n){try{switch(n.i){case 0:n.i!=0?cu(n):tm(n.h);break;case 1:var e=n.h;ea(e,e.h+8);break;case 2:if(n.i!=2)cu(n);else{var t=us(n.h),i=n.h;ea(i,i.h+t)}break;case 5:var s=n.h;ea(s,s.h+4);break;case 3:e1();let r=n.l;try{for(;;){if(!Qx(n))throw Error();if(n.i==4){if(n.l!=r)throw Error();break}cu(n)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{po>0&&po--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function e1(){if(po>=100)throw new SyntaxError;po++}function Xc(n,e,t){var i=n.h.l,s=us(n.h),r=(s=n.h.h+s)-i;if(r<=0&&(n.h.l=s,t(e,n,void 0,void 0,void 0),r=s-n.h.h),r)throw Error();return n.h.h=s,n.h.l=i,e}function nm(n){var e=us(n.h),t=Yx(n=n.h,e);if(n=n.i,jw){var i,s=n;(i=$f)||(i=$f=new TextDecoder("utf-8",{fatal:!0})),e=t+e,s=t===0&&e===s.length?s:s.subarray(t,e);try{var r=i.decode(s)}catch(o){if(tu===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),tu=!0}catch{tu=!1}}throw!tu&&($f=void 0),o}}else{e=(r=t)+e,t=[];let o,c=null;for(;r<e;){var a=n[r++];a<128?t.push(a):a<224?r>=e?qr():(o=n[r++],a<194||(192&o)!=128?(r--,qr()):t.push((31&a)<<6|63&o)):a<240?r>=e-1?qr():(o=n[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=n[r++]))!=128?(r--,qr()):t.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=e-2?qr():(o=n[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=n[r++]))!=128||(192&(s=n[r++]))!=128?(r--,qr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,t.push(55296+(a>>10&1023),56320+(1023&a)))):qr(),t.length>=8192&&(c=V_(c,t),t.length=0)}r=V_(c,t)}return r}function im(n){var e=us(n.h);return $x(n.h,e)}function jc(n,e,t){var i=us(n.h);for(i=n.h.h+i;n.h.h<i;)t.push(e(n.h))}var RE=class{constructor(n,e,t,i){if(cb.length){let s=cb.pop();s.init(n,e,t,i),n=s}else n=new TE(n,e,t,i);this.h=n,this.o=this.h.h,this.i=this.l=-1,this.A(i)}A({ra:n=!1}={}){this.ra=n}},Eu=[];function CE(n){return new Au(4294967295&n,Math.floor(n/4294967296))}function lb(n){return n?/^\d+$/.test(n)?(Vc(n),new Au(ft,yt)):null:hb||(hb=new Au(0,0))}var hb,Au=class{constructor(n,e){this.i=n>>>0,this.h=e>>>0}};function IE(n){return new Tu(4294967295&n,Math.floor(n/4294967296))}function t1(n){return n?/^-?\d+$/.test(n)?(Vc(n),new Tu(ft,yt)):null:ub||(ub=new Tu(0,0))}var ub,db,fb,pb,ep,mb,Cc,su,Tu=class{constructor(n,e){this.i=n>>>0,this.h=e>>>0}};function n1(n,e,t){return typeof BigInt64Array<"u"?(Cc||(Cc=new BigInt64Array(1),su=new Uint32Array(Cc.buffer),Cc[0]=BigInt(1),mb=su[0]===1),Cc[0]=n,new e(su[n=mb?0:1],su[1-n])):(ep||(db=BigInt(Number.MIN_SAFE_INTEGER),fb=BigInt(Number.MAX_SAFE_INTEGER),pb=BigInt(4294967295),ep=BigInt(32)),n>=db&&n<=fb?t(Number(n)):(n=BigInt.asUintN(64,n),new e(Number(n&pb),Number(n>>ep))))}function Gs(n,e,t){for(;t>0||e>127;)n.h.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;n.h.push(e)}function Ao(n,e){for(;e>127;)n.h.push(127&e|128),e>>>=7;n.h.push(e)}function Kc(n,e){if(e>=0)Ao(n,e);else{for(let t=0;t<9;t++)n.h.push(127&e|128),e>>=7;n.h.push(1)}}function PE(n,e){Vc(e),(function(t){var i=yt>>31;t(ft<<1^i,(yt<<1|ft>>>31)^i)})((t,i)=>{Gs(n,t>>>0,i>>>0)})}function zc(n,e){n.h.push(e>>>0&255),n.h.push(e>>>8&255),n.h.push(e>>>16&255),n.h.push(e>>>24&255)}var LE=class{constructor(){this.h=[]}length(){return this.h.length}end(){var n=this.h;return this.h=[],n}};function mo(n,e){e.length!==0&&(n.l.push(e),n.i+=e.length)}function zn(n,e,t){Ao(n.h,8*e+t)}function sm(n,e){return zn(n,e,2),e=n.h.end(),mo(n,e),e.push(n.i),e}function rm(n,e){var t=e.pop();for(t=n.i+n.h.length()-t;t>127;)e.push(127&t|128),t>>>=7,n.i++;e.push(t),n.i++}function i1(n,e,t){if(t!=null)switch(zn(n,e,0),typeof t){case"number":n=n.h,sa(t),Gs(n,ft,yt);break;case"bigint":t=n1(t,Tu,IE),Gs(n.h,t.i,t.h);break;default:t=t1(t),Gs(n.h,t.i,t.h)}}function Yc(n,e,t){zn(n,e,2),Ao(n.h,t.length),mo(n,n.h.end()),mo(n,t)}function Ru(n,e,t,i){t!=null&&(e=sm(n,e),i(t,n),rm(n,e))}var DE=class{constructor(){this.l=[],this.i=0,this.h=new LE}};function s1(n){typeof n=="string"&&t1(n)}function Ci(){var n=class{constructor(){throw Error()}};return Object.setPrototypeOf(n,n.prototype),n}var am=Ci(),r1=Ci(),om=Ci(),Vu=Ci(),cm=Ci(),Wu=Ci(),FE=Ci(),NE=Ci(),qu=Ci(),UE=Ci(),Xu=Ci(),lm=Ci();function ds(n,e,t){var i=n.B;cs&&cs in i&&(i=i[cs])&&delete i[e.h],e.i?e.u(n,e.i,e.h,t,e.l):e.u(n,e.h,t,e.l)}var xe=class{constructor(n,e){this.B=kx(n,e,void 0,2048)}toJSON(){return Ox(this)}u(){var n=AA,e=this.B,t=n.h,i=cs;return vo&&i&&e[i]?.[t]!=null&&lo(eE,3),n.i?n.o(this,n.i,n.h,n.l):n.o(this,n.h,n.defaultValue,n.l)}clone(){var n=this.B,e=0|n[Re];return Yp(this,n,e)?jp(this,n,!0):new this.constructor(wo(n,e,!1))}};xe.prototype[yx]=wx,xe.prototype.toString=function(){return this.B.toString()};var To=class{constructor(n,e,t){this.h=n,this.i=e,n=am,this.l=!!n&&t===n||!1}};function ju(n,e){return new To(n,e,am)}function a1(n,e,t,i,s){Ru(n,t,c1(e,i),s)}var bp,xp,OE=ju(function(n,e,t,i,s){return n.i===2&&(Xc(n,Qp(e,i,t),s),!0)},a1),kE=ju(function(n,e,t,i,s){return n.i===2&&(Xc(n,Qp(e,i,t),s),!0)},a1),Ku=Symbol(),Yu=Symbol(),vp=Symbol(),gb=Symbol(),_b=Symbol();function ca(n,e,t,i){var s=i[n];if(s)return s;(s={}).Ea=i,s.da=(function(u){switch(typeof u){case"boolean":return sb||(sb=[0,void 0,!0]);case"number":return u>0?void 0:u===0?rb||(rb=[0,void 0]):[-u,void 0];case"string":return[0,u];case"object":return u}})(i[0]);var r=i[1],a=1;r&&r.constructor===Object&&(s.ja=r,typeof(r=i[++a])=="function"&&r.length>0&&(s.wa=!0,bp??(bp=r),xp??(xp=i[a+1]),r=i[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)o[r[c]]=r;r=i[++a]}for(c=1;r!==void 0;){let u;typeof r=="number"&&(c+=r,r=i[++a]);var l=void 0;if(r instanceof To?u=r:(u=OE,a--),u?.l){r=i[++a],l=i;var h=a;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);c<h;c++){let d=o[c];l?t(s,c,u,l,d):e(s,c,u,d)}}return i[n]=s}function o1(n){return Array.isArray(n)?n[0]instanceof To?n:[kE,n]:[n,void 0]}function c1(n,e){return n instanceof xe?n.B:Array.isArray(n)?Zr(n,e):void 0}function hm(n,e,t,i){var s=t.h;n[e]=i?(r,a,o)=>s(r,a,o,i):s}function um(n,e,t,i,s){var r,a,o=t.h;n[e]=(c,l,h)=>o(c,l,h,a||(a=ca(Yu,hm,um,i).da),r||(r=dm(i)),s)}function dm(n){var e=n[vp];if(e!=null)return e;var t=ca(Yu,hm,um,n);return e=t.wa?(i,s)=>bp(i,s,t):(i,s)=>{e:{e1();try{for(;Qx(s)&&s.i!=4;){let d=s.l,f=t[d];if(f==null){let g=t.ja;if(g){let b=g[d];if(b){let p=zE(b);p!=null&&(f=t[d]=p)}}}if(f==null||!f(s,i,d)){var r=s;let g=r.o;if(cu(r),r.ra)var a=void 0;else{let b=r.h.h-g;r.h.h=g,a=$x(r.h,b)}r=void 0;var o=i,c=d,l=a;l&&((r=o[cs]??(o[cs]=new fp))[c]??(r[c]=[])).push(l)}}let u=Bu(i);u&&(u.h=t.Ea[_b]);var h=!0;break e}catch(u){throw u instanceof RangeError?new SyntaxError:u}finally{po>0&&po--}h=void 0}return h},n[vp]=e,n[_b]=BE.bind(n),e}function BE(n,e,t,i){var s=this[Yu],r=this[vp],a=Zr(void 0,s.da),o=Bu(n);if(o){var c=!1,l=s.ja;if(l){if(s=(h,u,d)=>{if(d.length!==0)if(l[u])for(let f of d){h=Jx(f);try{c=!0,r(a,h)}finally{Zx(h)}}else i?.(n,u,d)},e==null)yu(o,s);else if(o!=null){let h=o[e];h&&s(o,e,h)}if(c){let h=0|n[Re];if(2&h&&2048&h&&!t?.lb)throw Error();let u=So(h),d=(f,g)=>{if(ls(n,f,u)!=null){if(t?.kb===1)return;throw Error()}g!=null&&(h=Zt(n,h,f,g,u)),delete o[f]};e==null?Ex(a,0|a[Re],(f,g)=>{d(f,g)}):d(e,ls(a,e,u))}}}}function zE(n){var e=(n=o1(n))[0].h;if(n=n[1]){let t=dm(n),i=ca(Yu,hm,um,n).da;return(s,r,a)=>e(s,r,a,i,t)}return e}function $u(n,e,t){n[e]=t.i}function Ju(n,e,t,i){var s,r,a=t.i;n[e]=(o,c,l)=>a(o,c,l,r||(r=ca(Ku,$u,Ju,i).da),s||(s=l1(i)))}function l1(n){var e=n[gb];if(!e){let t=ca(Ku,$u,Ju,n);e=(i,s)=>h1(i,s,t),n[gb]=e}return e}function h1(n,e,t){Ex(n,0|n[Re],(i,s)=>{if(s!=null){var r=(function(a,o){var c=a[o];if(c)return c;if((c=a.ja)&&(c=c[o])){var l=(c=o1(c))[0].i;if(c=c[1]){let h=l1(c),u=ca(Ku,$u,Ju,c).da;c=a.wa?xp(u,h):(d,f,g)=>l(d,f,g,u,h)}else c=l;return a[o]=c}})(t,i);r?r(e,s,i):i<500||lo(cp,3)}}),(n=Bu(n))&&yu(n,(i,s,r)=>{for(mo(e,e.h.end()),i=0;i<r.length;i++)mo(e,Bp(r[i])||new Uint8Array(0))})}var GE=ln(0);function qs(n,e,t){if(Array.isArray(e)){var i=0|e[Re];if(4&i)return e;for(var s=0,r=0;s<e.length;s++){let a=n(e[s]);a!=null&&(e[r++]=a)}return r<s&&(e.length=r),n=1|i,t&&(n=-1537&n|4),n!==i&&Qt(e,n),t&&2&n&&Object.freeze(e),e}}var u1=(n,e)=>{var t=new DE;h1(n.B,t,ca(Ku,$u,Ju,e)),mo(t,t.h.end()),n=new Uint8Array(t.i);var i=(e=t.l).length,s=0;for(let r=0;r<i;r++){let a=e[r];n.set(a,s),s+=a.length}return t.l=[n],n};function jt(n,e,t){return new To(n,e,t)}function Xs(n,e,t){return new To(n,e,t)}function un(n,e,t){Zt(n,0|n[Re],e,t,So(0|n[Re]))}var HE=ju(function(n,e,t,i,s){if(n.i!==2)return!1;if(n=Gi(n=Xc(n,Zr([void 0,void 0],i),s)),s=So(i=0|e[Re]),2&i)throw Error();var r=ls(e,t,s);if(r instanceof Hs)2&r.N?((r=r.fa()).push(n),Zt(e,i,t,r,s)):r.fb(n);else if(Array.isArray(r)){var a=0|r[Re];8192&a||Qt(r,a|=8192),2&a&&Zt(e,i,t,r=Wx(r),s),r.push(n)}else Zt(e,i,t,Oc([n]),s);return!0},function(n,e,t,i,s){if(e instanceof Hs)e.forEach((r,a)=>{Ru(n,t,Zr([a,r],i),s)});else if(Array.isArray(e)){for(let r=0;r<e.length;r++){let a=e[r];Array.isArray(a)&&Ru(n,t,Zr(a,i),s)}Oc(e)}});function d1(n,e,t){(e=ci(e))!=null&&(zn(n,t,5),n=n.h,Gp(e),zc(n,ft))}function fm(n,e,t){(e=qp(e))!=null&&(s1(e),i1(n,t,e))}function f1(n,e,t){(e=ra(e))!=null&&e!=null&&(zn(n,t,0),Kc(n.h,e))}function p1(n,e,t){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&(zn(n,t,0),n.h.h.push(e?1:0))}function m1(n,e,t){(e=yn(e))!=null&&Yc(n,t,px(e))}function g1(n,e,t,i,s){Ru(n,t,c1(e,i),s)}function pm(n,e,t){(e=Nx(e))!=null&&Yc(n,t,Hu(e,!0).buffer)}function _1(n,e,t){(e=Ix(e))!=null&&e!=null&&(zn(n,t,0),Ao(n.h,e))}function b1(n,e,t){(e=ra(e))!=null&&(e=parseInt(e,10),zn(n,t,0),Kc(n.h,e))}function x1(n,e,t){return(n.i===5||n.i===2)&&(e=_r(e,0|e[Re],t),n.i==2?jc(n,wu,e):e.push(wu(n.h)),!0)}function v1(n,e,t){return n.i===0&&(un(e,t,Mu(n.h)),!0)}function y1(n,e,t){return(n.i===0||n.i===2)&&(e=_r(e,0|e[Re],t),n.i==2?jc(n,Vs,e):e.push(Vs(n.h)),!0)}function S1(n,e,t){return n.i===2&&(un(e,t,(n=im(n))===ta()?void 0:n),!0)}var bb=jt(function(n,e,t){if(n.i!==1)return!1;var i=n.h;n=_p(i);var s=_p(i);i=2*(s>>31)+1;var r=s>>>20&2047;return n=4294967296*(1048575&s)+n,un(e,t,r==2047?n?NaN:i*(1/0):r==0?5e-324*i*n:i*Math.pow(2,r-1075)*(n+4503599627370496)),!0},function(n,e,t){(e=ci(e))!=null&&(zn(n,t,1),n=n.h,(t=_u||(_u=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),ft=t.getUint32(0,!0),yt=t.getUint32(4,!0),zc(n,ft),zc(n,yt))},UE),Wt=jt(function(n,e,t){return n.i===5&&(un(e,t,wu(n.h)),!0)},d1,qu),VE=Xs(x1,function(n,e,t){if((e=qs(ci,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&(zn(i,s,5),i=i.h,Gp(r),zc(i,ft))}},qu),mm=Xs(x1,function(n,e,t){if((e=qs(ci,e,!0))!=null&&e.length){zn(n,t,2),Ao(n.h,4*e.length);for(let i=0;i<e.length;i++)t=n.h,Gp(e[i]),zc(t,ft)}},qu),M1=jt(function(n,e,t){return n.i===5&&(un(e,t,(n=wu(n.h))===0?void 0:n),!0)},d1,qu),Ic=jt(function(n,e,t){return v1(n,e,t)},fm,Wu),Tt=jt(function(n,e,t){return v1(n,e,t)},fm,Wu),WE=Xs(function(n,e,t){return n.i!==0&&n.i!==2?n=!1:(e=_r(e,0|e[Re],t),n.i==2?jc(n,Mu,e):e.push(Mu(n.h)),n=!0),n},function(n,e,t){if((e=qs(qp,e,!1))!=null)for(let i=0;i<e.length;i++)i1(n,t,e[i])},Wu),lu=jt(function(n,e,t){return n.i!==0?e=!1:(un(e,t,(n=Mu(n.h))===GE?void 0:n),e=!0),e},fm,Wu),Cu=jt(function(n,e,t){return n.i!==0?n=!1:(un(e,t,em(n.h,hE)),n=!0),n},function(n,e,t){if((e=fE(e))!=null&&(typeof e=="string"&&lb(e),e!=null))switch(zn(n,t,0),typeof e){case"number":n=n.h,sa(e),Gs(n,ft,yt);break;case"bigint":t=n1(e,Au,CE),Gs(n.h,t.i,t.h);break;default:t=lb(e),Gs(n.h,t.i,t.h)}},FE),tt=jt(function(n,e,t){return n.i===0&&(un(e,t,Vs(n.h)),!0)},f1,Vu),xb=Xs(y1,function(n,e,t){if((e=qs(ra,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&(zn(i,s,0),Kc(i.h,r))}},Vu),Ro=Xs(y1,function(n,e,t){if((e=qs(ra,e,!0))!=null&&e.length){t=sm(n,t);for(let i=0;i<e.length;i++)Kc(n.h,e[i]);rm(n,t)}},Vu),$r=jt(function(n,e,t){return n.i===0&&(un(e,t,(n=Vs(n.h))===0?void 0:n),!0)},f1,Vu),Ge=jt(function(n,e,t){return n.i===0&&(un(e,t,tm(n.h)),!0)},p1,r1),dr=jt(function(n,e,t){return n.i===0&&(un(e,t,(n=tm(n.h))===!1?void 0:n),!0)},p1,r1),cn=Xs(function(n,e,t){return n.i===2&&(n=nm(n),_r(e,0|e[Re],t).push(n),!0)},function(n,e,t){if((e=qs(yn,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&Yc(i,s,px(r))}},om),Us=jt(function(n,e,t){return n.i===2&&(un(e,t,(n=nm(n))===""?void 0:n),!0)},m1,om),ae=jt(function(n,e,t){return n.i===2&&(un(e,t,nm(n)),!0)},m1,om),At=(function(n,e,t=am){return new To(n,e,t)})(function(n,e,t,i,s){return n.i===2&&(i=Zr(void 0,i),_r(e,0|e[Re],t).push(i),Xc(n,i,s),!0)},function(n,e,t,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)g1(n,e[r],t,i,s);1&(n=0|e[Re])||Qt(e,1|n)}}),lt=ju(function(n,e,t,i,s,r){if(n.i!==2)return!1;var a=0|e[Re];return Xx(e,a,r,t,So(a)),Xc(n,e=Qp(e,i,t),s),!0},g1),so=jt(function(n,e,t){return n.i===2&&(un(e,t,im(n)),!0)},pm,Xu),w1=Xs(function(n,e,t){return n.i===2&&(n=im(n),_r(e,0|e[Re],t).push(n),!0)},function(n,e,t){if((e=qs(Nx,e,!1))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&Yc(i,s,Hu(r,!0).buffer)}},Xu),E1=jt(function(n,e,t){return n.i===0&&(un(e,t,us(n.h)),!0)},_1,cm),qE=Xs(function(n,e,t){return(n.i===0||n.i===2)&&(e=_r(e,0|e[Re],t),n.i==2?jc(n,us,e):e.push(us(n.h)),!0)},function(n,e,t){if((e=qs(Ix,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&(zn(i,s,0),Ao(i.h,r))}},cm),XE=jt(function(n,e,t){return n.i===0&&(un(e,t,(n=us(n.h))===0?void 0:n),!0)},_1,cm),Te=jt(function(n,e,t){return n.i===0&&(un(e,t,Vs(n.h)),!0)},b1,lm),hu=jt(function(n,e,t){return n.i===0&&(un(e,t,(n=Vs(n.h))===0?void 0:n),!0)},b1,lm),jE=jt(function(n,e,t){return n.i!==0?n=!1:(un(e,t,(function(i){return em(i,(s,r)=>{var a=-(1&s);return Rx(s=(s>>>1|r<<31)^a,r>>>1^a)})})(n.h)),n=!0),n},function(n,e,t){if((e=qp(e))!=null&&(s1(e),e!=null))switch(zn(n,t,0),typeof e){case"number":n=n.h,e=(t=e)<0,hp(t=2*Math.abs(t)),t=ft;let i=yt;e&&(t==0?i==0?i=t=4294967295:(i--,t=4294967295):t--),Gs(n,ft=t,yt=i);break;case"bigint":n=n.h,e=e<<BigInt(1)^e>>BigInt(63),ft=Number(BigInt.asUintN(32,e)),yt=Number(BigInt.asUintN(32,e>>BigInt(32))),Gs(n,ft,yt);break;default:PE(n.h,e)}},NE),yp=class{constructor(e,t){var i=ui;this.h=e,this.i=t,this.o=mt,this.u=Ne,this.defaultValue=void 0,this.l=i.ib!=null?Ax:void 0}register(){Nu(this)}};function fs(n,e){return new yp(n,e)}function br(n,e){return(t,i)=>{e:{let r={ma:!0};i&&Object.assign(r,i),t=Jx(t,void 0,void 0,r);try{let a=new n,o=a.B;dm(e)(o,t);var s=a;break e}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{Zx(t)}s=void 0}return s}}function gm(n){return e=>u1(e,n)}function $c(n){return function(){return u1(this,n)}}var KE=[0,so,w1,Ge,ae],YE=[0,Us,[0,hu,[0,lu,$r],hu,-1,[0,Te],hu,-1],jt(S1,pm,Xu)],tp,vb=class extends xe{constructor(n){super(n)}},yb=[0,Us,jt(S1,function(n,e,t){if(e!=null){if(e instanceof xe){let i=e.mb;return void(i?(e=i(e),e!=null&&Yc(n,t,Hu(e,!0).buffer)):lo(cp,3))}if(Array.isArray(e))return void lo(cp,3)}pm(n,e,t)},Xu)],$E=[0,1,[0,12,tt,10,Ge],[0,7,[0,tt,-1]]],Sb=globalThis.trustedTypes,JE=class{constructor(n){this.h=n}toString(){return this.h+""}};function Mb(n){var e;return tp===void 0&&(tp=(function(){var t=null;if(!Sb)return t;try{let i=s=>s;t=Sb.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return t})()),n=(e=tp)?e.createScriptURL(n):n,new JE(n)}function Xr(n,...e){if(e.length===0)return Mb(n[0]);var t=n[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+n[i+1];return Mb(t)}var A1=[0,tt,Te,Ge,-1,Ro,Te,-1,Ge,-1],T1=[0,Te,-1,Ge],R1=class extends xe{constructor(n){super(n)}},C1=[0,Ge,ae,Ge,Te,-1,Xs(function(n,e,t){return(n.i===0||n.i===2)&&(e=_r(e,0|e[Re],t),n.i==2?jc(n,AE,e):e.push(Vs(n.h)),!0)},function(n,e,t){if((e=qs(ra,e,!0))!=null&&e.length){t=sm(n,t);for(let i=0;i<e.length;i++)Kc(n.h,e[i]);rm(n,t)}},lm),ae,-1,[0,Ge,-1],Te,Ge,-1,T1],ZE=class extends xe{constructor(n){super(n)}},QE=class extends xe{constructor(n){super(n)}},I1=class extends xe{constructor(n){super(n)}h(){return zx(this,9)}},P1=[0,3,Ge,-1,2,[0,[2],tt,lt,[0,E1]],[0,Te,Ge,Te,Ge,Te,4,[0,Ge,ae,-1,Ge,tt,-1,Ge],Te,Ge,-4,Te,cn,Ge,cn,Ge,-1,tt,Ge,-3,[0,Ge,tt],[0,ae,tt,-1],[0,Ge],[0,Ge,-1],[0,Ge,tt,-1]],[0,[3,4],ae,-1,lt,[0,tt],lt,[0,Te,-2]],[0],ae,Ge],L1=[0,ae,-2],wb=class extends xe{constructor(n){super(n)}},D1=[0],eA=class extends xe{constructor(n){super(n)}},F1=[0,tt,Ge,1,Ge,-4],ui=class extends xe{constructor(n){super(n,2)}},hn={};hn[336783863]=[0,ae,Ge,-1,tt,[0,[1,2,3,4,5,6,7,8,9],lt,D1,lt,C1,lt,L1,lt,F1,lt,A1,lt,[0,ae,-2],lt,[0,ae,Te],lt,P1,lt,T1],[0,ae],Ge,[0,[1,3],[2,4],lt,[0,Ro],-1,lt,[0,cn],-1,At,[0,ae,-1]],ae];var Eb=[0,lu,-1,dr,-3,lu,Ro,Us,$r,lu,-1,dr,$r,dr,-2,Us];function Ut(n,e){Gu(n,3,e)}function ut(n,e){Gu(n,4,e)}var Qn=class extends xe{constructor(n){super(n,500)}A(n){return Ne(this,0,7,n)}},Nc=[-1,{}],Ab=[0,ae,1,Nc],Tb=[0,ae,cn,Nc];function Ii(n,e){Bc(n,1,Qn,e)}function Gt(n,e){Gu(n,10,e)}function bt(n,e){Gu(n,15,e)}var di=class extends xe{constructor(n){super(n,500)}A(n){return Ne(this,0,1001,n)}},N1=[-500,At,[-500,Us,-1,cn,-3,[-2,hn,Ge],At,yb,$r,-1,Ab,Tb,At,[0,Us,dr],Us,Eb,$r,cn,987,cn],4,At,[-500,ae,-1,[-1,{}],998,ae],At,[-500,ae,cn,-1,[-2,{},Ge],997,cn,-1],$r,At,[-500,ae,cn,Nc,998,cn],cn,$r,Ab,Tb,At,[0,Us,-1,Nc],cn,-2,Eb,Us,-1,dr,[0,dr,XE],978,Nc,At,yb];di.prototype.h=$c(N1);var tA=br(di,N1),nA=class extends xe{constructor(n){super(n)}},U1=class extends xe{constructor(n){super(n)}h(){return oa(this,nA,1)}},O1=[0,At,[0,tt,Wt,ae,-1]],Zu=br(U1,O1),iA=class extends xe{constructor(n){super(n)}},sA=class extends xe{constructor(n){super(n)}},np=class extends xe{constructor(n){super(n)}l(){return mt(this,iA,2)}h(){return oa(this,sA,5)}},k1=br(class extends xe{constructor(n){super(n)}},[0,cn,Ro,mm,[0,Te,[0,tt,-3],[0,Wt,-3],[0,tt,-1,[0,At,[0,tt,-2]]],At,[0,Wt,-1,ae,Wt]],ae,-1,Tt,At,[0,tt,Wt],cn,Tt]),rA=class extends xe{constructor(n){super(n)}},ro=br(class extends xe{constructor(n){super(n)}},[0,At,[0,Wt,-4]]),aA=class extends xe{constructor(n){super(n)}},Jc=br(class extends xe{constructor(n){super(n)}},[0,At,[0,Wt,-4]]),oA=class extends xe{constructor(n){super(n)}},cA=[0,tt,-1,mm,Te],B1=class extends xe{constructor(n){super(n)}};B1.prototype.h=$c([0,Wt,-4,Tt]);var lA=class extends xe{constructor(n){super(n)}},hA=br(class extends xe{constructor(n){super(n)}},[0,At,[0,1,tt,ae,O1],Tt]),uA=class extends xe{constructor(n){super(n)}},dA=class extends xe{constructor(n){super(n)}h(){var n=Nt(this,1,void 0,Vx);return n??ta()}},fA=class extends xe{constructor(n){super(n)}},uu=[1,2],pA=br(class extends xe{constructor(n){super(n)}},[0,At,[0,uu,lt,[0,mm],lt,[0,so],tt,ae],Tt]),_m=class extends xe{constructor(n){super(n)}},z1=[0,ae,tt,Wt,cn,-1],Rb=class extends xe{constructor(n){super(n)}},mA=[0,Ge,-1],Iu=class extends xe{constructor(n){super(n)}h(){return Gx(this,2,Bs)}l(){return mp(this,I1,6,Bs)}},Bs=[1,2,3,4,5,6],Pu=class extends xe{constructor(n){super(n)}h(){return Nt(this,1,void 0,Vx)!=null}l(){return yn(Nt(this,2))!=null}},Ht=class extends xe{constructor(n){super(n)}},G1=[0,so,ae,[0,tt,Tt,-1],[0,Cu,Tt]],Xt=[0,G1,Ge,[0,Bs,lt,F1,lt,C1,lt,A1,lt,D1,lt,L1,lt,P1],Te],gA=gm(Xt),Qu=class extends xe{constructor(n){super(n)}},bm=[0,Xt,Wt,-1,tt],_A=fs(502141897,Qu);hn[502141897]=bm;var bA=br(class extends xe{constructor(n){super(n)}},[0,[0,Te,-1,VE,qE],cA]),H1=class extends xe{constructor(n){super(n)}},V1=class extends xe{constructor(n){super(n)}},Sp=[0,Xt,Wt,[0,Xt],Ge],xA=fs(508968150,V1);hn[508968150]=[0,Xt,bm,Sp,Wt,[0,[0,G1]]],hn[508968149]=Sp;var no=class extends xe{constructor(n){super(n)}l(){return mt(this,_m,2)}h(){Ye(this,2)}},W1=[0,Xt,z1];hn[478825465]=W1;var vA=class extends xe{constructor(n){super(n)}},q1=class extends xe{constructor(n){super(n)}},xm=class extends xe{constructor(n){super(n)}},vm=class extends xe{constructor(n){super(n)}},X1=class extends xe{constructor(n){super(n)}},Cb=[0,Xt,[0,Xt],W1,-1],j1=[0,Xt,Wt,tt],ym=[0,Xt,Wt],K1=[0,Xt,j1,ym,Wt],yA=fs(479097054,X1);hn[479097054]=[0,Xt,K1,Cb],hn[463370452]=Cb,hn[464864288]=j1;var SA=fs(462713202,vm);hn[462713202]=K1,hn[474472470]=ym;var MA=class extends xe{constructor(n){super(n)}},Y1=class extends xe{constructor(n){super(n)}},$1=class extends xe{constructor(n){super(n)}},J1=class extends xe{constructor(n){super(n)}},Sm=[0,Xt,Wt,-1,tt],Mp=[0,Xt,Wt,Ge];J1.prototype.h=$c([0,Xt,ym,[0,Xt],bm,Sp,Sm,Mp]);var Z1=class extends xe{constructor(n){super(n)}},wA=fs(456383383,Z1);hn[456383383]=[0,Xt,z1];var Q1=class extends xe{constructor(n){super(n)}},EA=fs(476348187,Q1);hn[476348187]=[0,Xt,mA];var ev=class extends xe{constructor(n){super(n)}},Ib=class extends xe{constructor(n){super(n)}},tv=[0,Te,-1],AA=fs(458105876,class extends xe{constructor(n){super(n)}h(){var n=this.B,e=0|n[Re],t=kn(this,e);return n=(function(i,s,r,a){var o=Ib;!a&&Eo(i)&&(r=0|(s=i.B)[Re]);var c=ls(s,2);if(i=!1,c==null){if(a)return ib();c=[]}else if(c.constructor===Hs){if(!(2&c.N)||a)return c;c=c.fa()}else Array.isArray(c)?i=!!(2&c[Re]):c=[];if(a){if(!c.length)return ib();i||(i=!0,yo(c))}else i&&(i=!1,Oc(c),c=Wx(c));return!i&&32&r&&Hc(c,32),r=Zt(s,r,2,a=new Hs(c,o,pE,void 0)),i||gr(s,r),a})(this,n,e,t),!t&&Ib&&(n.Fa=!0),n}});hn[458105876]=[0,tv,HE,[!0,Tt,[0,ae,-1,cn]],[0,Ro,Ge,Te],Ge];var Mm=class extends xe{constructor(n){super(n)}},nv=fs(458105758,Mm);hn[458105758]=[0,Xt,ae,tv];var TA=class extends xe{constructor(n){super(n)}},RA=class extends xe{constructor(n){super(n)}},CA=class extends xe{constructor(n){super(n)}},IA=gm([0,At,[0,hu,At,[0,M1,-1],dr]]),ip=class extends xe{constructor(n){super(n)}},Pb=[0,M1,-1,dr],PA=class extends xe{constructor(n){super(n)}},iv=class extends xe{constructor(n){super(n)}},wp=[1,2];iv.prototype.h=$c([0,wp,lt,Pb,lt,[0,At,Pb]]);var sv=class extends xe{constructor(n){super(n)}},LA=fs(443442058,sv);hn[443442058]=[0,Xt,ae,tt,Wt,cn,-1,Ge,Wt],hn[514774813]=Sm;var rv=class extends xe{constructor(n){super(n)}},DA=fs(516587230,rv);function Ep(n,e){return e=e?e.clone():new _m,n.displayNamesLocale!==void 0?Ye(e,1,ks(n.displayNamesLocale)):n.displayNamesLocale===void 0&&Ye(e,1),n.maxResults!==void 0?hs(e,2,n.maxResults):"maxResults"in n&&Ye(e,2),n.scoreThreshold!==void 0?Oe(e,3,n.scoreThreshold):"scoreThreshold"in n&&Ye(e,3),n.categoryAllowlist!==void 0?Su(e,4,n.categoryAllowlist):"categoryAllowlist"in n&&Ye(e,4),n.categoryDenylist!==void 0?Su(e,5,n.categoryDenylist):"categoryDenylist"in n&&Ye(e,5),e}function av(n){var e=Number(n);return Number.isSafeInteger(e)?e:String(n)}function wm(n,e=-1,t=""){return{categories:n.map(i=>({index:Ri(i,1)??0??-1,score:On(i,2)??0,categoryName:yn(Nt(i,3))??""??"",displayName:yn(Nt(i,4))??""??""})),headIndex:e,headName:t}}function FA(n){var e={classifications:oa(n,lA,1).map(t=>wm(mt(t,U1,4)?.h()??[],Ri(t,2)??0,yn(Nt(t,3))??""))};return(function(t){return t==null?t:typeof t=="bigint"?(lp(t)?t=Number(t):(t=Jr(64,t),t=lp(t)?Number(t):String(t)),t):Mo(t)?typeof t=="number"?Wp(t):xu(t):void 0})(Nt(n,2,void 0,vu))!=null&&(e.timestampMs=av(Nt(n,2,void 0,vu)??Bx)),e}function ov(n){var e=Yr(n,3,ci),t=Yr(n,2,ra),i=Yr(n,1,yn),s=Yr(n,9,yn),r={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)r.categories.push({score:e[a],index:t[a]??-1,categoryName:i[a]??"",displayName:s[a]??""});if((e=mt(n,np,4)?.l())&&(r.boundingBox={originX:Ri(e,1,hr)??0,originY:Ri(e,2,hr)??0,width:Ri(e,3,hr)??0,height:Ri(e,4,hr)??0,angle:0}),mt(n,np,4)?.h().length)for(let a of mt(n,np,4).h())r.keypoints.push({x:Nt(a,1,hr,ci)??0,y:Nt(a,2,hr,ci)??0,score:Nt(a,4,hr,ci)??0,label:yn(Nt(a,3,hr))??""});return r}function Zc(n){var e=[];for(let t of oa(n,aA,1))n={x:On(t,1)??0,y:On(t,2)??0,z:On(t,3)??0,visibility:On(t,4)??0},Nt(t,5,void 0,ci)!=null&&(n.presence=On(t,5)??0),e.push(n);return e}function ao(n){var e=[];for(let t of oa(n,rA,1))n={x:On(t,1)??0,y:On(t,2)??0,z:On(t,3)??0,visibility:On(t,4)??0},Nt(t,5,void 0,ci)!=null&&(n.presence=On(t,5)??0),e.push(n);return e}function Lb(n){return Array.from(n,e=>e>127?e-256:e)}function Db(n,e){if(n.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${e.length}).`);var t=0,i=0,s=0;for(let r=0;r<n.length;r++)t+=n[r]*e[r],i+=n[r]*n[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return t/Math.sqrt(i*s)}function jr(n,e,t){return t=`wasm${t?"_module":""}_internal`,Promise.resolve({wasmLoaderPath:`${e}/${n}_${t}.js`,wasmBinaryPath:`${e}/${n}_${t}.wasm`})}hn[516587230]=[0,Xt,Sm,Mp,Wt],hn[518928384]=Mp;var Kr=class{};function Fb(n){return Ye(new Ap,1,zs(n))}Kr.forVisionTasks=function(n,e=!1){return jr("vision",n??Xr``,e)},Kr.forLiteRtLmTextTasks=function(n,e=!1){return jr("litertlm_text",n??Xr``,e)},Kr.forTextTasks=function(n,e=!1){return jr("text",n??Xr``,e)},Kr.forRetrievalTasks=function(n,e=!1){return jr("retrieval",n??Xr``,e)},Kr.forGenAiTasks=function(n,e=!1){return jr("genai",n??Xr``,e)},Kr.forDecisionTasks=function(n,e=!1){return jr("decision",n??Xr``,e)},Kr.forAudioTasks=function(n,e=!1){return jr("audio",n??Xr``,e)};var Ap=class extends xe{constructor(n){super(n)}},NA=class extends xe{constructor(n){super(n)}},Nb=[0,Te,2,Cu,-2,Tt,At,[0,Te,Tt]],UA=class extends xe{constructor(n){super(n)}},OA=class extends xe{constructor(n){super(n)}};function Tp(n,e){return Ye(n,1,zs(e))}function Rp(n,e){return Ye(n,2,zs(e))}var Cp=class extends xe{constructor(n){super(n)}},Lu=[3,4,5,6,7],kA=class extends xe{constructor(n){super(n)}},cv=class extends xe{constructor(n){super(n)}};cv.prototype.h=$c([0,[0,Te,ae,-3,Te],[0,Lu,Te,-1,lt,[0,Te,ae,Cu],lt,Nb,lt,[0,1,Nb],lt,[0,Te],lt,[0,Te,ae,Cu]]]);var BA=class{constructor(){this.h=typeof AbortController<"u"}async send(n,e,t){var i=this.h?new AbortController:void 0,s=i&&n.la>0?setTimeout(()=>{i.abort()},n.la):void 0;try{let r=await fetch(n.url,{method:n.bb,headers:{...n.ab},...n.body&&{body:n.body},...n.withCredentials&&{credentials:"include"},signal:n.la&&i?i.signal:null});r.ok?e?.(await r.text()):t?.(r.status)}catch(r){r?.name==="AbortError"?t?.(408):t?.(0)}finally{clearTimeout(s)}}},zA=class extends xe{constructor(n){super(n,37)}},Ub=[-4,{},$E,Te,YE],Ob=[0,ae,Te,1,ae,-1,Te,1,Te,1,Tt],kb=[0,Te,ae,-2],Bb=[0,ae,Te],zb=[0,ae,Te],Gb=[0,Ge,-3],Hb=[0,Te,ae,-1,Tt,tt,-1,ae,-5,At,[0,ae,-4],-1,Ge,[0,Ge,-3],Te],GA=class extends xe{constructor(n){super(n,19)}},HA=gm([-19,{},[0,Te,1,[0,ae,-6,Tt,tt,ae,-1,Tt],1,[0,ae,1,ae,-5],ae,-1,[0,Te,ae,-8],[0,ae,-3],[0,ae,Te,ae,-2],[0,ae,-1,Te,ae,-1,Te,ae,-1,[0,At,[0,ae,-1],Ge,ae,-5],[0,Te,Ge,tt,-2]],Tt,[0,ae,-3,Tt,tt,ae,-1],[0,Te,ae,-1],[0,ae,-9],[0,ae,-6,Te,ae,1,ae,Ge,Te,-1,Ge,ae,-2,Te,ae,Te,ae,tt,-1],1,[0,Te],1,[0,ae,-4],1,Ob,[0,[1,2,3,4,5,6],lt,Ob,lt,Bb,lt,zb,lt,[0,Te],lt,Hb,lt,kb],Bb,zb,Hb,[0,[0,Te,ae,-1,Tt,tt,-1,ae,-4,At,[0,ae,-4],-1,1,Gb],[0,Te,ae,-1,Tt,tt,-1,ae,-4,Gb]],kb,[0,ae,[0,tt,-3,Te],Te,-2,[0,tt,-1],Ge],4,[0,ae,Te,ae,-1,Tt,Te,ae,-1,Te,tt,-1]],Te,At,[-37,{},Ic,ae,At,[0,ae,-1],so,1,so,[0,cn,-1,xb,WE,-1],ae,[0,tt,ae,-1],Ge,tt,Tt,ae,-1,jE,KE,Ic,so,Te,xb,Tt,-1,[0,Te,-1],ae,Ge,ae,Ro,ae,-1,bb,1,bb,Ub,Ge,[0,Te,[0,Wt,tt,-2],[0,Wt]],[0,Te,Tt]],Ic,w1,ae,-1,Ic,Te,-1,[0,Ge,-1,Te,Ge],[0,Tt,-1,ae],[0,Ic,Ge,Tt],Tt,1,E1,1,Ub]),VA=class{constructor(n){this.i=[],this.o=new BA,this.l=n??"",this.error=Error("usage logging is turned off in this build")}close(){this.h!==void 0&&(clearInterval(this.h),this.h=void 0),this.flush()}flush(n,e){if(this.error)e?.("net-send-failed");else if(this.i.length===0)n?.();else{var t=this.i;this.i=[],t=(function(i){var s=new GA;return pp(s=Ye(s,2,zs(1786)),3,i)})(t),t=HA(t),this.o.send({url:"about:blank",bb:"POST",la:1e4,body:t,gb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.l},withCredentials:!1},()=>{n?.()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.i=[],this.h!==void 0&&(clearInterval(this.h),this.h=void 0),e?.("net-send-failed",i)})}}},Du=class{constructor(){this.ba=this.V=this.Y=this.S=this.W=this.U=this.R=0}};function Ip(n,e){var t=new cv;t=Ne(t,0,1,n.C),t=Ne(t,0,2,e),e=Ye(e=new zA,6,Uu(t=t.h(),!1)),(n=n.m).error||n.i.push(e)}function Vb(n,e){var t={R:e.R-n.l.R,U:e.U-n.l.U,W:e.W-n.l.W,S:e.S-n.l.S,Y:e.Y-n.l.Y,V:e.V,ba:e.ba},i=Rp(Tp(new Cp,n.D),1);t=lv(n,t),Ip(n,i=zi(i,4,Lu,t)),n.l=e}function lv(n,e){var t=new NA;return n=ou(n=Qf(n=Ye(t,1,zs(n.F)),7,e.S),5,e.V),n=ou(n,6,e.ba),e.W>0&&ou(n,4,e.Y/e.W),e.R!==0&&(t=Qf(t=Fb(3),2,e.R),Bc(n,8,Ap,t)),e.U!==0&&(e=Qf(t=Fb(4),2,e.U),Bc(n,8,Ap,e)),n}var WA=class{constructor(n,e,t){this.v=performance.now(),this.o=performance.now(),this.i=new Map,this.u=0,this.h=new Du,this.l=new Du,this.m=new VA(t),this.D=(function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;case"UniversalEmbedder":return 28;case"SemanticRetriever":return 29;case"DecisionMaker":return 30;case"TextSummarizer":return 26;case"TextProofreader":return 27;case"AudioTranscriber":return 31;case"TextToSpeech":return 32;default:return 0}})(n),this.F=(function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(e),n=new kA,typeof navigator>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),n=Ye(n,1,zs(e)),n=Ye(n,2,ks("")),n=Ye(n,3,ks("")),n=Ye(n,4,ks("1.2.3")),n=Ye(n,5,ks("")),this.C=Ye(n,6,zs((function(){var i=globalThis.__HOST_ENVIRONMENT__;if(typeof i=="string")switch(i){case"ANDROID":return 1;case"IOS":return 2;case"PYTHON":return 3;case"WEB":break;case"FLUTTER":return 5;case"FLUTTER_WEB":return 6;default:return 0}return 4})()))}ya(){var n=new OA;n=ou(n=Ye(n,1,zs(this.F)),3,performance.now()-this.v),Ip(this,n=zi(Rp(Tp(new Cp,this.D),0),3,Lu,n)),this.o=performance.now()}za(n){var e=this.i.get(n);if(e!==void 0&&(this.i.delete(n),n=performance.now()-e,++this.h.W,this.h.Y+=n,this.h.V=Math.max(this.h.V,n),this.u=Math.max(this.u,n),performance.now()>this.o+3e4)){for(let[t,i]of this.i.entries())n=t,i<e&&(this.h.S++,this.i.delete(n));e={...this.h,ba:performance.now()-this.o},this.h.V=0,this.o=performance.now(),Vb(this,e)}}xa(){var n={...this.h,S:this.h.S+this.i.size,V:this.u,ba:performance.now()-this.v};Vb(this,n);var e=new UA;e=Ne(e,0,2,n=lv(this,n)),Ip(this,e=zi(n=Rp(Tp(new Cp,this.D),2),5,Lu,e))}close(){var n=this.m;typeof n.close=="function"?n.close():n.flush()}};function Em(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&n.length>=1&&Number(n[1])>=17))}async function Wb(n){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=n.toString(),e.crossOrigin="anonymous",new Promise((t,i)=>{e.addEventListener("load",()=>{t()},!1),e.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(e)})}try{importScripts(n.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let t=self.import;t?await t(n.toString()):await import(n.toString())}}}function Am(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function Fe(n,e,t){n.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),t(e=n.j.stringToNewUTF8(e)),n.j._free(e)}function hv(n,e,t){if(!n.j.canvas)throw Error("No OpenGL canvas configured.");if(t?n.j._bindTextureToStream(t):n.j._bindTextureToCanvas(),!(t=n.j.canvas.getContext("webgl2")||n.j.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.j.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n.j.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1);var[i,s]=Am(e);return!n.l||i===n.j.canvas.width&&s===n.j.canvas.height||(n.j.canvas.width=i,n.j.canvas.height=s),[i,s]}function qb(n,e,t){n.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=n.j.stringToNewUTF8(e[s]);e=n.j._malloc(4*i.length),n.j.HEAPU32.set(i,e>>2),t(e);for(let s of i)n.j._free(s);n.j._free(e)}function rs(n,e,t){n.j.simpleListeners=n.j.simpleListeners||{},n.j.simpleListeners[e]=t}function ur(n,e,t){var i=[];n.j.simpleListeners=n.j.simpleListeners||{},n.j.simpleListeners[e]=(s,r,a)=>{r?(t(i,a),i=[]):i.push(s)}}var uv=class{constructor(n,e){this.l=!0,this.j=n,this.h=null,this.i=0,this.o=typeof this.j._addIntToInputStream=="function",e!==void 0?this.j.canvas=e:Em()?this.j.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.j.canvas=document.createElement("canvas"))}async initializeGraph(n){var e=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(e),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,e){var t=n.length,i=this.j._malloc(t);this.j.HEAPU8.set(n,i),e?this.j._changeBinaryGraph(t,i):this.j._changeTextGraph(t,i),this.j._free(i)}configureAudio(n,e,t,i,s){this.j._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Fe(this,i||"input_audio",r=>{Fe(this,s=s||"audio_header",a=>{this.j._configureAudio(r,a,n,e??0,t)})})}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.j._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.j.gpuOriginForWebTexturesIsBottomLeft=n}ka(n){rs(this,"__graph_config__",e=>{n(e)}),Fe(this,"__graph_config__",e=>{this.j._getGraphConfig(e,void 0)}),delete this.j.simpleListeners.__graph_config__}attachErrorListener(n){this.j.errorListener=n}attachEmptyPacketListener(n,e){this.j.emptyPacketListeners=this.j.emptyPacketListeners||{},this.j.emptyPacketListeners[n]=e}addAudioToStream(n,e,t){this.addAudioToStreamWithShape(n,0,0,e,t)}addAudioToStreamWithShape(n,e,t,i,s){var r=4*n.length;this.i!==r&&(this.h&&this.j._free(this.h),this.h=this.j._malloc(r),this.i=r),this.j.HEAPF32.set(n,this.h/4),Fe(this,i,a=>{this.j._addAudioToInputStream(this.h,e,t,a,s)})}addGpuBufferToStream(n,e,t){Fe(this,e,i=>{var[s,r]=hv(this,n,i);this.j._addBoundTextureToStream(i,s,r,t)})}addBoolToStream(n,e,t){Fe(this,e,i=>{this.j._addBoolToInputStream(n,i,t)})}addDoubleToStream(n,e,t){Fe(this,e,i=>{this.j._addDoubleToInputStream(n,i,t)})}addFloatToStream(n,e,t){Fe(this,e,i=>{this.j._addFloatToInputStream(n,i,t)})}addIntToStream(n,e,t){Fe(this,e,i=>{this.j._addIntToInputStream(n,i,t)})}addUintToStream(n,e,t){Fe(this,e,i=>{this.j._addUintToInputStream(n,i,t)})}addStringToStream(n,e,t){Fe(this,e,i=>{Fe(this,n,s=>{this.j._addStringToInputStream(s,i,t)})})}addStringRecordToStream(n,e,t){Fe(this,e,i=>{qb(this,Object.keys(n),s=>{qb(this,Object.values(n),r=>{this.j._addFlatHashMapToInputStream(s,r,Object.keys(n).length,i,t)})})})}addProtoToStream(n,e,t,i){Fe(this,t,s=>{Fe(this,e,r=>{var a=this.j._malloc(n.length);this.j.HEAPU8.set(n,a),this.j._addProtoToInputStream(a,n.length,r,s,i),this.j._free(a)})})}addEmptyPacketToStream(n,e){Fe(this,n,t=>{this.j._addEmptyPacketToInputStream(t,e)})}addBoolVectorToStream(n,e,t){Fe(this,e,i=>{var s=this.j._allocateBoolVector(n.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of n)this.j._addBoolVectorEntry(s,r);this.j._addBoolVectorToInputStream(s,i,t)})}addDoubleVectorToStream(n,e,t){Fe(this,e,i=>{var s=this.j._allocateDoubleVector(n.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of n)this.j._addDoubleVectorEntry(s,r);this.j._addDoubleVectorToInputStream(s,i,t)})}addFloatVectorToStream(n,e,t){Fe(this,e,i=>{var s=this.j._allocateFloatVector(n.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of n)this.j._addFloatVectorEntry(s,r);this.j._addFloatVectorToInputStream(s,i,t)})}addIntVectorToStream(n,e,t){Fe(this,e,i=>{var s=this.j._allocateIntVector(n.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of n)this.j._addIntVectorEntry(s,r);this.j._addIntVectorToInputStream(s,i,t)})}addUintVectorToStream(n,e,t){Fe(this,e,i=>{var s=this.j._allocateUintVector(n.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of n)this.j._addUintVectorEntry(s,r);this.j._addUintVectorToInputStream(s,i,t)})}addStringVectorToStream(n,e,t){Fe(this,e,i=>{var s=this.j._allocateStringVector(n.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of n)Fe(this,r,a=>{this.j._addStringVectorEntry(s,a)});this.j._addStringVectorToInputStream(s,i,t)})}addBoolToInputSidePacket(n,e){Fe(this,e,t=>{this.j._addBoolToInputSidePacket(n,t)})}addDoubleToInputSidePacket(n,e){Fe(this,e,t=>{this.j._addDoubleToInputSidePacket(n,t)})}addFloatToInputSidePacket(n,e){Fe(this,e,t=>{this.j._addFloatToInputSidePacket(n,t)})}addIntToInputSidePacket(n,e){Fe(this,e,t=>{this.j._addIntToInputSidePacket(n,t)})}addUintToInputSidePacket(n,e){Fe(this,e,t=>{this.j._addUintToInputSidePacket(n,t)})}addStringToInputSidePacket(n,e){Fe(this,e,t=>{Fe(this,n,i=>{this.j._addStringToInputSidePacket(i,t)})})}addProtoToInputSidePacket(n,e,t){Fe(this,t,i=>{Fe(this,e,s=>{var r=this.j._malloc(n.length);this.j.HEAPU8.set(n,r),this.j._addProtoToInputSidePacket(r,n.length,s,i),this.j._free(r)})})}addBoolVectorToInputSidePacket(n,e){Fe(this,e,t=>{var i=this.j._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of n)this.j._addBoolVectorEntry(i,s);this.j._addBoolVectorToInputSidePacket(i,t)})}addDoubleVectorToInputSidePacket(n,e){Fe(this,e,t=>{var i=this.j._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of n)this.j._addDoubleVectorEntry(i,s);this.j._addDoubleVectorToInputSidePacket(i,t)})}addFloatVectorToInputSidePacket(n,e){Fe(this,e,t=>{var i=this.j._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of n)this.j._addFloatVectorEntry(i,s);this.j._addFloatVectorToInputSidePacket(i,t)})}addIntVectorToInputSidePacket(n,e){Fe(this,e,t=>{var i=this.j._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of n)this.j._addIntVectorEntry(i,s);this.j._addIntVectorToInputSidePacket(i,t)})}addUintVectorToInputSidePacket(n,e){Fe(this,e,t=>{var i=this.j._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of n)this.j._addUintVectorEntry(i,s);this.j._addUintVectorToInputSidePacket(i,t)})}addStringVectorToInputSidePacket(n,e){Fe(this,e,t=>{var i=this.j._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of n)Fe(this,s,r=>{this.j._addStringVectorEntry(i,r)});this.j._addStringVectorToInputSidePacket(i,t)})}attachBoolListener(n,e){rs(this,n,e),Fe(this,n,t=>{this.j._attachBoolListener(t)})}attachBoolVectorListener(n,e){ur(this,n,e),Fe(this,n,t=>{this.j._attachBoolVectorListener(t)})}attachIntListener(n,e){rs(this,n,e),Fe(this,n,t=>{this.j._attachIntListener(t)})}attachIntVectorListener(n,e){ur(this,n,e),Fe(this,n,t=>{this.j._attachIntVectorListener(t)})}attachUintListener(n,e){rs(this,n,e),Fe(this,n,t=>{this.j._attachUintListener(t)})}attachUintVectorListener(n,e){ur(this,n,e),Fe(this,n,t=>{this.j._attachUintVectorListener(t)})}attachDoubleListener(n,e){rs(this,n,e),Fe(this,n,t=>{this.j._attachDoubleListener(t)})}attachDoubleVectorListener(n,e){ur(this,n,e),Fe(this,n,t=>{this.j._attachDoubleVectorListener(t)})}attachFloatListener(n,e){rs(this,n,e),Fe(this,n,t=>{this.j._attachFloatListener(t)})}attachFloatVectorListener(n,e){ur(this,n,e),Fe(this,n,t=>{this.j._attachFloatVectorListener(t)})}attachStringListener(n,e){rs(this,n,e),Fe(this,n,t=>{this.j._attachStringListener(t)})}attachStringVectorListener(n,e){ur(this,n,e),Fe(this,n,t=>{this.j._attachStringVectorListener(t)})}attachProtoListener(n,e,t){rs(this,n,e),Fe(this,n,i=>{this.j._attachProtoListener(i,t||!1)})}attachProtoVectorListener(n,e,t){ur(this,n,e),Fe(this,n,i=>{this.j._attachProtoVectorListener(i,t||!1)})}attachAudioListener(n,e,t){this.j._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),rs(this,n,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)}),Fe(this,n,i=>{this.j._attachAudioListener(i,t||!1)})}finishProcessing(){this.j._waitUntilIdle()}closeGraph(){this.j._closeGraph(),this.j.simpleListeners=void 0,this.j.emptyPacketListeners=void 0}};function dv(n){return class extends n{get pa(){return this.j}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(e)}}}}function fv(n){return class extends n{Za(){this.j._registerModelResourcesGraphService()}}}var qA=dv(fv(uv)),XA=class extends qA{};async function jA(n,e,t,i){return n=await(async(s,r,a,o,c)=>{if(r&&await Wb(r),!self.ModuleFactory||a&&(await Wb(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,o)})(n,t.wasmLoaderPath,t.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&s.endsWith(".data")?t.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.h.Sa();s.o=new WA(s.D(),r,a)})(n,i),await n.A(i),n}async function du(n,e,t,i){return jA(n,e,t,i)}function sp(n,e,t){try{n.h.j.FS_unlink(`/${t}`)}catch{}n.h.j.FS_createDataFile("/",t,e,!0,!1,!0),Pp(n,`/${t}`)}function Pp(n,e){var t=mt(n.baseOptions,Pu,1)||new Pu;typeof e=="string"?(Ye(t,2,ks(e)),Ye(t,1)):e instanceof Uint8Array&&(Ye(t,1,Uu(e,!1)),Ye(t,2)),Ne(n.baseOptions,0,1,t)}function Xb(n){try{let e=n.L.length;if(e===1)throw Error(n.L[0].message);if(e>1)throw Error("Encountered multiple errors: "+n.L.map(t=>t.message).join(", "))}finally{n.L=[]}}function we(n,e){n.J=Math.max(n.J,e)}function ed(n,e){n.F=new Qn,li(n.F,2,"PassThroughCalculator"),Ut(n.F,"free_memory"),ut(n.F,"free_memory_unused_out"),Gt(e,"free_memory"),Ii(e,n.F)}function go(n,e){Ut(n.F,e),ut(n.F,e+"_unused_out")}function td(n){n.h.addBoolToStream(!0,"free_memory",n.J)}var Fu=class{constructor(n){this.h=n,this.L=[],this.J=0,this.h.setAutoRenderToScreen(!1)}l(n,e=!0,t=!1,i=!1){if(e){let s=n.baseOptions||{};if(n.baseOptions?.modelAssetBuffer&&n.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(mt(this.baseOptions,Pu,1)?.h()||mt(this.baseOptions,Pu,1)?.l()||n.baseOptions?.modelAssetBuffer||n.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");(function(a,o,c=!1){var l=mt(a.baseOptions,Iu,3);if(!l){var h=l=new Iu,u=new wb;zi(h,4,Bs,u)}"delegate"in o&&(o.delegate==="GPU"?(o=l,h=new R1,zi(o,2,Bs,h)):(o=l,h=new wb,zi(o,4,Bs,h))),c&&(c=l.l(),o=l.h()||c?.h()===!0,c=new I1,o?Ne(c,0,9,o=new QE):Ne(c,0,8,o=new ZE),zi(l,6,Bs,c)),Ne(a.baseOptions,0,3,l)})(this,s,i);let r=t?"model.litertlm":"model.dat";if(s.modelAssetPath)return fetch(s.modelAssetPath.toString()).then(a=>{if(a.ok)return a.arrayBuffer();throw Error(`Failed to fetch model: ${s.modelAssetPath} (${a.status})`)}).then(a=>{sp(this,new Uint8Array(a),r),this.u(),this.M()});if(s.modelAssetBuffer instanceof Uint8Array)t?sp(this,s.modelAssetBuffer,r):Pp(this,s.modelAssetBuffer);else if(s.modelAssetBuffer)return(async function(a){for(var o=[],c=0;;){let{done:l,value:h}=await a.read();if(l)break;o.push(h),c+=h.length}if(o.length===0)return new Uint8Array(0);if(o.length===1)return o[0];a=new Uint8Array(c),c=0;for(let l of o)a.set(l,c),c+=l.length;return a})(s.modelAssetBuffer).then(a=>{t?sp(this,a,r):Pp(this,a),this.u(),this.M()})}return this.u(),this.M(),Promise.resolve()}M(){}ka(){var n;if(this.h.ka(e=>{n=tA(e)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,e){this.h.attachErrorListener((t,i)=>{this.L.push(Error(i))}),this.h.Za(),this.h.setGraph(n,e),this.o?.ya(),this.F=void 0,Xb(this)}finishProcessing(n){this.h.finishProcessing(),Xb(this),this.o&&n!==void 0&&this.o.za(n)}close(){this.F=void 0,this.o?.xa(),this.o?.close(),this.h.closeGraph()}};function Bn(n,e){if(!n)throw Error(`Unable to obtain required WebGL resource: ${e}`);return n}Fu.prototype.close=Fu.prototype.close;var Lp=class{constructor(e,t,i,s){this.h=e,this.i=t,this.o=i,this.l=s}bind(){this.h.bindVertexArray(this.i)}close(){this.h.deleteVertexArray(this.i),this.h.deleteBuffer(this.o),this.h.deleteBuffer(this.l)}};function jb(n,e,t){var i=n.h;if(t=Bn(i.createShader(t),"Failed to create WebGL shader"),i.shaderSource(t,e),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(t)}`);return i.attachShader(n.i,t),t}function Kb(n,e){var t=n.h,i=Bn(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(i);var s=Bn(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.G),t.vertexAttribPointer(n.G,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);var r=Bn(t.createBuffer(),"Failed to create buffer");return t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n.L),t.vertexAttribPointer(n.L,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new Lp(t,i,s,r)}function Tm(n,e){if(n.h){if(e!==n.h)throw Error("Cannot change GL context once initialized")}else n.h=e}function Qc(n,e,t,i){return Tm(n,e),n.i||(n.o(),n.J()),t?(n.m||(n.m=Kb(n,!0)),t=n.m):(n.F||(n.F=Kb(n,!1)),t=n.F),e.useProgram(n.i),t.bind(),n.l(),n=i(),t.h.bindVertexArray(null),n}function pr(n,e,t){return Tm(n,e),n=Bn(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),n}function nd(n,e,t){Tm(n,e),n.D||(n.D=Bn(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,n.D),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function Rm(n){n.h?.bindFramebuffer(n.h.FRAMEBUFFER,null)}var la=class{C(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}o(){var n=this.h;if(this.i=Bn(n.createProgram(),"Failed to create WebGL program"),this.ea=jb(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.aa=jb(this,this.C(),n.FRAGMENT_SHADER),n.linkProgram(this.i),!n.getProgramParameter(this.i,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.i)}`);this.G=n.getAttribLocation(this.i,"aVertex"),this.L=n.getAttribLocation(this.i,"aTex")}J(){}l(){}close(){if(this.i){let n=this.h;n.deleteProgram(this.i),n.deleteShader(this.ea),n.deleteShader(this.aa)}this.D&&this.h.deleteFramebuffer(this.D),this.F&&this.F.close(),this.m&&this.m.close()}},KA=class extends la{C(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}J(){var n=this.h;n.activeTexture(n.TEXTURE1),this.v=pr(this,n,n.LINEAR),n.activeTexture(n.TEXTURE2),this.u=pr(this,n,n.NEAREST)}o(){super.o();var n=this.h;this.P=Bn(n.getUniformLocation(this.i,"backgroundTexture"),"Uniform location"),this.Z=Bn(n.getUniformLocation(this.i,"colorMappingTexture"),"Uniform location"),this.M=Bn(n.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var n=this.h;n.uniform1i(this.M,0),n.uniform1i(this.P,1),n.uniform1i(this.Z,2)}close(){this.v&&this.h.deleteTexture(this.v),this.u&&this.h.deleteTexture(this.u),super.close()}},YA=class extends la{C(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}J(){var n=this.h;n.activeTexture(n.TEXTURE1),this.u=pr(this,n),n.activeTexture(n.TEXTURE2),this.v=pr(this,n)}o(){super.o();var n=this.h;this.M=Bn(n.getUniformLocation(this.i,"defaultTexture"),"Uniform location"),this.P=Bn(n.getUniformLocation(this.i,"overlayTexture"),"Uniform location"),this.K=Bn(n.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var n=this.h;n.uniform1i(this.K,0),n.uniform1i(this.M,1),n.uniform1i(this.P,2)}close(){this.u&&this.h.deleteTexture(this.u),this.v&&this.h.deleteTexture(this.v),super.close()}};function Os(n,e){switch(e){case 0:return n.h.find(t=>t instanceof Uint8Array);case 1:return n.h.find(t=>t instanceof Float32Array);case 2:return n.h.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Dp(n){var e=Os(n,1);if(!e){if(e=Os(n,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(n.width*n.height);let i=_o(n);var t=Cm(n);if(nd(t,i,pv(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){t=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,t);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=t[r]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,e)}n.h.push(e)}return e}function pv(n){var e=Os(n,2);if(!e){let t=_o(n);e=gv(n);let i=Dp(n),s=mv(n);t.texImage2D(t.TEXTURE_2D,0,s,n.width,n.height,0,t.RED,t.FLOAT,i),Fp(n)}return e}function _o(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.i||(n.i=Bn(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.i}function mv(n){if(n=_o(n),!ru)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))ru=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");ru=n.R16F}return ru}function Cm(n){return n.l||(n.l=new la),n.l}function gv(n){var e=_o(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);var t=Os(n,2);return t||(t=pr(Cm(n),e,n.o?e.LINEAR:e.NEAREST),n.h.push(t),n.u=!0),e.bindTexture(e.TEXTURE_2D,t),t}function Fp(n){n.i.bindTexture(n.i.TEXTURE_2D,null)}var ru,Jt=class{constructor(n,e,t,i,s,r,a){this.h=n,this.o=e,this.u=t,this.canvas=i,this.l=s,this.width=r,this.height=a,this.u&&--Yb===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!Os(this,0)}ua(){return!!Os(this,1)}X(){return!!Os(this,2)}ta(){return(e=Os(n=this,0))||(e=Dp(n),e=new Uint8Array(e.map(t=>Math.round(255*t))),n.h.push(e)),e;var n,e}sa(){return Dp(this)}T(){return pv(this)}clone(){var n=[];for(let e of this.h){let t;if(e instanceof Uint8Array)t=new Uint8Array(e);else if(e instanceof Float32Array)t=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=_o(this),s=Cm(this);i.activeTexture(i.TEXTURE1),t=pr(s,i,this.o?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,t);let r=mv(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),nd(s,i,t),Qc(s,i,!1,()=>{gv(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Fp(this)}),Rm(s),Fp(this)}}n.push(t)}return new Jt(n,this.o,this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&_o(this).deleteTexture(Os(this,2)),Yb=-1}};Jt.prototype.close=Jt.prototype.close,Jt.prototype.clone=Jt.prototype.clone,Jt.prototype.getAsWebGLTexture=Jt.prototype.T,Jt.prototype.getAsFloat32Array=Jt.prototype.sa,Jt.prototype.getAsUint8Array=Jt.prototype.ta,Jt.prototype.hasWebGLTexture=Jt.prototype.X,Jt.prototype.hasFloat32Array=Jt.prototype.ua,Jt.prototype.hasUint8Array=Jt.prototype.Ua;var Yb=250,$A={color:"white",lineWidth:4,radius:6};function rp(n){return{...$A,fillColor:(n=n||{}).color,...n}}function Ns(n,e){return n instanceof Function?n(e):n}function $b(n,e,t){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),n))}function Pc(n){if(!n.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return n.l}function Gc(n){if(!n.u)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return n.u}function Jb(n,e,t){if(e.X())t(e.T());else{let i=e.ua()?e.sa():e.ta();n.o=n.o??new la;let s=Gc(n);t((n=new Jt([i],e.o,!1,s.canvas,n.o,e.width,e.height)).T()),n.close()}}function Zb(n,e,t,i){var s=(function(o){return o.h||(o.h=new KA),o.h})(n),r=Gc(n),a=Array.isArray(t)?new ImageData(new Uint8ClampedArray(t),1,1):t;Qc(s,r,!0,()=>{(function(c,l,h,u){var d=c.h;if(d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,l),d.activeTexture(d.TEXTURE1),d.bindTexture(d.TEXTURE_2D,c.v),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,h),c.K&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[b,p]of f){f=b;let m=p,x=g.next();if(x.done)return!1;let[w,y]=x.value;if(f!==w||m[0]!==y[0]||m[1]!==y[1]||m[2]!==y[2]||m[3]!==y[3])return!1}return!!g.next().done})(c.K,u))d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.u);else{c.K=u;let f=Array(1024).fill(0);u.forEach((g,b)=>{if(g.length!==4)throw Error(`Color at index ${b} is not a four-channel value.`);f[4*b]=g[0],f[4*b+1]=g[1],f[4*b+2]=g[2],f[4*b+3]=g[3]}),d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.u),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,256,1,0,d.RGBA,d.UNSIGNED_BYTE,new Uint8Array(f))}})(s,e,a,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.h;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function Qb(n,e,t,i){var s=Gc(n),r=(function(c){return c.i||(c.i=new YA),c.i})(n),a=Array.isArray(t)?new ImageData(new Uint8ClampedArray(t),1,1):t,o=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;Qc(r,s,!0,()=>{var c=r.h;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,e),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,r.u),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,r.v),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(c=r.h).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)})}var jn=class{constructor(n,e){typeof CanvasRenderingContext2D<"u"&&n instanceof CanvasRenderingContext2D||n instanceof OffscreenCanvasRenderingContext2D?(this.l=n,this.u=e):this.u=n}Ma(n,e){if(n){var t=Pc(this);e=rp(e),t.save();var i=t.canvas,s=0;for(let r of n)t.fillStyle=Ns(e.fillColor,{index:s,from:r}),t.strokeStyle=Ns(e.color,{index:s,from:r}),t.lineWidth=Ns(e.lineWidth,{index:s,from:r}),(n=new Path2D).arc(r.x*i.width,r.y*i.height,Ns(e.radius,{index:s,from:r}),0,2*Math.PI),t.fill(n),t.stroke(n),++s;t.restore()}}La(n,e,t){if(n&&e){var i=Pc(this);t=rp(t),i.save();var s=i.canvas,r=0;for(let a of e){i.beginPath(),e=n[a.start];let o=n[a.end];e&&o&&(i.strokeStyle=Ns(t.color,{index:r,from:e,to:o}),i.lineWidth=Ns(t.lineWidth,{index:r,from:e,to:o}),i.moveTo(e.x*s.width,e.y*s.height),i.lineTo(o.x*s.width,o.y*s.height)),++r,i.stroke()}i.restore()}}Ia(n,e){var t=Pc(this);e=rp(e),t.save(),t.beginPath(),t.lineWidth=Ns(e.lineWidth,{}),t.strokeStyle=Ns(e.color,{}),t.fillStyle=Ns(e.fillColor,{}),t.moveTo(n.originX,n.originY),t.lineTo(n.originX+n.width,n.originY),t.lineTo(n.originX+n.width,n.originY+n.height),t.lineTo(n.originX,n.originY+n.height),t.lineTo(n.originX,n.originY),t.stroke(),t.fill(),t.restore()}Ja(n,e,t=[0,0,0,255]){this.l?(function(i,s,r,a){var o=Gc(i);Jb(i,s,c=>{Zb(i,c,r,a),(c=Pc(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,n,t,e):Zb(this,n.T(),t,e)}Ka(n,e,t){this.l?(function(i,s,r,a){var o=Gc(i);Jb(i,s,c=>{Qb(i,c,r,a),(c=Pc(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,n,e,t):Qb(this,n.T(),e,t)}close(){this.h?.close(),this.h=void 0,this.i?.close(),this.i=void 0,this.o?.close(),this.o=void 0}};function as(n,e){switch(e){case 0:return n.h.find(t=>t instanceof ImageData);case 1:return n.h.find(t=>typeof ImageBitmap<"u"&&t instanceof ImageBitmap);case 2:return n.h.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function _v(n){var e=as(n,0);if(!e){e=bo(n);let t=id(n),i=new Uint8Array(n.width*n.height*4);nd(t,e,fu(n)),e.readPixels(0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,i),Rm(t),e=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.h.push(e)}return e}function fu(n){var e=as(n,2);if(!e){let t=bo(n);e=pu(n);let i=as(n,1)||_v(n);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),Dc(n)}return e}function bo(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.i||(n.i=Bn(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.i}function id(n){return n.l||(n.l=new la),n.l}function pu(n){var e=bo(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);var t=as(n,2);return t||(t=pr(id(n),e),n.h.push(t),n.o=!0),e.bindTexture(e.TEXTURE_2D,t),t}function Dc(n){n.i.bindTexture(n.i.TEXTURE_2D,null)}function ex(n){var e=bo(n);return Qc(id(n),e,!0,()=>(function(t,i){var s=t.canvas;if(s.width===t.width&&s.height===t.height)return i();var r=s.width,a=s.height;return s.width=t.width,s.height=t.height,t=i(),s.width=r,s.height=a,t})(n,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}jn.prototype.close=jn.prototype.close,jn.prototype.drawConfidenceMask=jn.prototype.Ka,jn.prototype.drawCategoryMask=jn.prototype.Ja,jn.prototype.drawBoundingBox=jn.prototype.Ia,jn.prototype.drawConnectors=jn.prototype.La,jn.prototype.drawLandmarks=jn.prototype.Ma,jn.lerp=function(n,e,t,i,s){return $b(i*(1-(n-e)/(t-e))+s*(1-(t-n)/(t-e)),i,s)},jn.clamp=$b;var vn=class{constructor(n,e,t,i,s,r,a){this.h=n,this.u=e,this.o=t,this.canvas=i,this.l=s,this.width=r,this.height=a,(this.u||this.o)&&--tx===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!as(this,0)}va(){return!!as(this,1)}X(){return!!as(this,2)}Qa(){return _v(this)}Pa(){var n=as(this,1);return n||(fu(this),pu(this),n=ex(this),Dc(this),this.h.push(n),this.u=!0),n}T(){return fu(this)}clone(){var n=[];for(let e of this.h){let t;if(e instanceof ImageData)t=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){let i=bo(this),s=id(this);i.activeTexture(i.TEXTURE1),t=pr(s,i),i.bindTexture(i.TEXTURE_2D,t),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),nd(s,i,t),Qc(s,i,!1,()=>{pu(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Dc(this)}),Rm(s),Dc(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);fu(this),pu(this),t=ex(this),Dc(this)}n.push(t)}return new vn(n,this.va(),this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&as(this,1).close(),this.o&&bo(this).deleteTexture(as(this,2)),tx=-1}};vn.prototype.close=vn.prototype.close,vn.prototype.clone=vn.prototype.clone,vn.prototype.getAsWebGLTexture=vn.prototype.T,vn.prototype.getAsImageBitmap=vn.prototype.Pa,vn.prototype.getAsImageData=vn.prototype.Qa,vn.prototype.hasWebGLTexture=vn.prototype.X,vn.prototype.hasImageBitmap=vn.prototype.va,vn.prototype.hasImageData=vn.prototype.Ta;var tx=250;function Vi(...n){return n.map(([e,t])=>({start:e,end:t}))}var nx,JA=fv((nx=dv(uv),class extends nx{get oa(){return this.j}Da(n,e,t){Fe(this,e,i=>{var[s,r]=hv(this,n,i);this.oa._addBoundTextureAsImageToStream(i,s,r,t)})}ha(n,e){rs(this,n,e),Fe(this,n,t=>{this.oa._attachImageListener(t)})}ia(n,e){ur(this,n,e),Fe(this,n,t=>{this.oa._attachImageVectorListener(t)})}})),Wi=class extends JA{};async function pt(n,e,t){return du(n,t.canvas??(Em()?void 0:document.createElement("canvas")),e,t)}function bv(n,e,t,i){if(n.o&&i!==void 0){var s=mt(n.baseOptions,Iu,3);s?.h()||s?.l()?.h()?(++(s=n.o).h.U,s.i.set(i,performance.now())):(++(s=n.o).h.R,s.i.set(i,performance.now()))}if(n.qa){if(s=new B1,t?.regionOfInterest){if(!n.Ca)throw Error("This task doesn't support region-of-interest.");let r=t.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Oe(s,1,(r.left+r.right)/2),Oe(s,2,(r.top+r.bottom)/2),Oe(s,4,r.right-r.left),Oe(s,3,r.bottom-r.top)}else Oe(s,1,.5),Oe(s,2,.5),Oe(s,4,1),Oe(s,3,1);if(t?.rotationDegrees){if(t?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Oe(s,5,-Math.PI*t.rotationDegrees/180),t?.rotationDegrees%180!=0){let[r,a]=Am(e);t=On(s,4)*r/a,Oe(s,4,On(s,3)*a/r),Oe(s,3,t)}}n.h.addProtoToStream(s.h(),"mediapipe.NormalizedRect",n.qa,i)}n.h.Da(e,n.Ba,i??performance.now()),n.finishProcessing(i)}function qi(n,e,t){if(n.K)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");bv(n,e,t,n.J+1)}function ps(n,e,t,i){if(!n.K)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");bv(n,e,t,i)}function xo(n,e,t,i){var s=e.data,r=e.width,a=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return n=new Jt([s],t,!1,n.h.j.canvas,n.ea,r,e),i?n.clone():n}var hi=class extends Fu{constructor(n,e,t,i){super(n),this.h=n,this.Ba=e,this.qa=t,this.Ca=i,this.ea=new la,this.K=!1}l(n,e=!0,t=!1,i=!1){if("runningMode"in n){var s=this.K=!!n.runningMode&&n.runningMode!=="IMAGE";Ye(this.baseOptions,2,s==null?s:bu(s))}if(n.canvas!==void 0&&this.h.j.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,e,t,i)}close(){this.ea.close(),super.close()}};hi.prototype.close=hi.prototype.close;var Ei=class extends hi{constructor(n,e){super(new Wi(n,e),"image_in","norm_rect_in",!1),this.m={detections:[]},Ne(n=this.i=new Qu,0,1,e=new Ht),Oe(this.i,2,.5),Oe(this.i,3,.3)}D(){return"FaceDetector"}get baseOptions(){return mt(this.i,Ht,1)}set baseOptions(n){Ne(this.i,0,1,n)}A(n){return"minDetectionConfidence"in n&&Oe(this.i,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&Oe(this.i,3,n.minSuppressionThreshold??.3),this.l(n)}H(n,e){return this.m={detections:[]},qi(this,n,e),this.m}I(n,e,t){return this.m={detections:[]},ps(this,n,t,e),this.m}u(){var n=new di;Gt(n,"image_in"),Gt(n,"norm_rect_in"),bt(n,"detections");var e=new ui;ds(e,_A,this.i);var t=new Qn;li(t,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ut(t,"IMAGE:image_in"),Ut(t,"NORM_RECT:norm_rect_in"),ut(t,"DETECTIONS:detections"),t.A(e),Ii(n,t),this.h.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=k1(r),this.m.detections.push(ov(i));we(this,s)}),this.h.attachEmptyPacketListener("detections",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};Ei.prototype.detectForVideo=Ei.prototype.I,Ei.prototype.detect=Ei.prototype.H,Ei.prototype.setOptions=Ei.prototype.A,Ei.createFromModelPath=async function(n,e){return pt(Ei,n,{baseOptions:{modelAssetPath:e}})},Ei.createFromModelBuffer=function(n,e){return pt(Ei,n,{baseOptions:{modelAssetBuffer:e}})},Ei.createFromOptions=function(n,e){return pt(Ei,n,e)};var Im=Vi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Pm=Vi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Lm=Vi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),xv=Vi([474,475],[475,476],[476,477],[477,474]),Dm=Vi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Fm=Vi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),vv=Vi([469,470],[470,471],[471,472],[472,469]),Nm=Vi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),yv=[...Im,...Pm,...Lm,...Dm,...Fm,...Nm],Sv=Vi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function ix(n){n.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var ht=class extends hi{constructor(n,e){super(new Wi(n,e),"image_in","norm_rect",!1),this.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ne(n=this.i=new V1,0,1,e=new Ht),this.C=new H1,Ne(this.i,0,3,this.C),this.v=new Qu,Ne(this.i,0,2,this.v),hs(this.v,4,1),Oe(this.v,2,.5),Oe(this.C,2,.5),Oe(this.i,4,.5)}D(){return"FaceLandmarker"}get baseOptions(){return mt(this.i,Ht,1)}set baseOptions(n){Ne(this.i,0,1,n)}A(n){return"numFaces"in n&&hs(this.v,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&Oe(this.v,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&Oe(this.i,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&Oe(this.C,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}H(n,e){return ix(this),qi(this,n,e),this.m}I(n,e,t){return ix(this),ps(this,n,t,e),this.m}u(){var n=new di;Gt(n,"image_in"),Gt(n,"norm_rect"),bt(n,"face_landmarks");var e=new ui;ds(e,xA,this.i);var t=new Qn;li(t,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ut(t,"IMAGE:image_in"),Ut(t,"NORM_RECT:norm_rect"),ut(t,"NORM_LANDMARKS:face_landmarks"),t.A(e),Ii(n,t),this.h.attachProtoVectorListener("face_landmarks",(i,s)=>{for(let r of i)i=Jc(r),this.m.faceLandmarks.push(Zc(i));we(this,s)}),this.h.attachEmptyPacketListener("face_landmarks",i=>{we(this,i)}),this.outputFaceBlendshapes&&(bt(n,"blendshapes"),ut(t,"BLENDSHAPES:blendshapes"),this.h.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=Zu(r),this.m.faceBlendshapes.push(wm(i.h()??[]));we(this,s)}),this.h.attachEmptyPacketListener("blendshapes",i=>{we(this,i)})),this.outputFacialTransformationMatrixes&&(bt(n,"face_geometry"),ut(t,"FACE_GEOMETRY:face_geometry"),this.h.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=mt(i=bA(r),oA,2))&&this.m.facialTransformationMatrixes.push({rows:Ri(i,1)??0??0,columns:Ri(i,2)??0??0,data:Yr(i,3,ci).slice()??[]});we(this,s)}),this.h.attachEmptyPacketListener("face_geometry",i=>{we(this,i)})),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};ht.prototype.detectForVideo=ht.prototype.I,ht.prototype.detect=ht.prototype.H,ht.prototype.setOptions=ht.prototype.A,ht.createFromModelPath=function(n,e){return pt(ht,n,{baseOptions:{modelAssetPath:e}})},ht.createFromModelBuffer=function(n,e){return pt(ht,n,{baseOptions:{modelAssetBuffer:e}})},ht.createFromOptions=function(n,e){return pt(ht,n,e)},ht.FACE_LANDMARKS_LIPS=Im,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",ht.FACE_LANDMARKS_LIPS),ht.FACE_LANDMARKS_LEFT_EYE=Pm,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",ht.FACE_LANDMARKS_LEFT_EYE),ht.FACE_LANDMARKS_LEFT_EYEBROW=Lm,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ht.FACE_LANDMARKS_LEFT_EYEBROW),ht.FACE_LANDMARKS_LEFT_IRIS=xv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",ht.FACE_LANDMARKS_LEFT_IRIS),ht.FACE_LANDMARKS_RIGHT_EYE=Dm,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",ht.FACE_LANDMARKS_RIGHT_EYE),ht.FACE_LANDMARKS_RIGHT_EYEBROW=Fm,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ht.FACE_LANDMARKS_RIGHT_EYEBROW),ht.FACE_LANDMARKS_RIGHT_IRIS=vv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ht.FACE_LANDMARKS_RIGHT_IRIS),ht.FACE_LANDMARKS_FACE_OVAL=Nm,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",ht.FACE_LANDMARKS_FACE_OVAL),ht.FACE_LANDMARKS_CONTOURS=yv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",ht.FACE_LANDMARKS_CONTOURS),ht.FACE_LANDMARKS_TESSELATION=Sv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",ht.FACE_LANDMARKS_TESSELATION);var Um=Vi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function sx(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function rx(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function ax(n,e=!0){var t=[];for(let s of n){var i=Zu(s);n=[];for(let r of i.h())i=e&&Ri(r,1)!=null?Ri(r,1)??0:-1,n.push({score:On(r,2)??0,index:i,categoryName:yn(Nt(r,3))??""??"",displayName:yn(Nt(r,4))??""??""});t.push(n)}return t}var Kn=class extends hi{constructor(n,e){super(new Wi(n,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ne(n=this.m=new X1,0,1,e=new Ht),this.v=new vm,Ne(this.m,0,2,this.v),this.G=new xm,Ne(this.v,0,3,this.G),this.C=new q1,Ne(this.v,0,2,this.C),this.i=new vA,Ne(this.m,0,3,this.i),Oe(this.C,2,.5),Oe(this.v,4,.5),Oe(this.G,2,.5)}D(){return"GestureRecognizer"}get baseOptions(){return mt(this.m,Ht,1)}set baseOptions(n){Ne(this.m,0,1,n)}A(n){if(hs(this.C,3,n.numHands??1),"minHandDetectionConfidence"in n&&Oe(this.C,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Oe(this.v,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Oe(this.G,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var e=new no,t=e,i=Ep(n.cannedGesturesClassifierOptions,mt(this.i,no,3)?.l());Ne(t,0,2,i),Ne(this.i,0,3,e)}else n.cannedGesturesClassifierOptions===void 0&&mt(this.i,no,3)?.h();return n.customGesturesClassifierOptions?(Ne(t=e=new no,0,2,i=Ep(n.customGesturesClassifierOptions,mt(this.i,no,4)?.l())),Ne(this.i,0,4,e)):n.customGesturesClassifierOptions===void 0&&mt(this.i,no,4)?.h(),this.l(n)}Xa(n,e){return sx(this),qi(this,n,e),rx(this)}Ya(n,e,t){return sx(this),ps(this,n,t,e),rx(this)}u(){var n=new di;Gt(n,"image_in"),Gt(n,"norm_rect"),bt(n,"hand_gestures"),bt(n,"hand_landmarks"),bt(n,"world_hand_landmarks"),bt(n,"handedness");var e=new ui;ds(e,yA,this.m);var t=new Qn;li(t,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ut(t,"IMAGE:image_in"),Ut(t,"NORM_RECT:norm_rect"),ut(t,"HAND_GESTURES:hand_gestures"),ut(t,"LANDMARKS:hand_landmarks"),ut(t,"WORLD_LANDMARKS:world_hand_landmarks"),ut(t,"HANDEDNESS:handedness"),t.A(e),Ii(n,t),this.h.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=Jc(r),this.landmarks.push(Zc(i));we(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",i=>{we(this,i)}),this.h.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=ro(r),this.worldLandmarks.push(ao(i));we(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",i=>{we(this,i)}),this.h.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...ax(i,!1)),we(this,s)}),this.h.attachEmptyPacketListener("hand_gestures",i=>{we(this,i)}),this.h.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...ax(i)),we(this,s)}),this.h.attachEmptyPacketListener("handedness",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};function ox(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}Kn.prototype.recognizeForVideo=Kn.prototype.Ya,Kn.prototype.recognize=Kn.prototype.Xa,Kn.prototype.setOptions=Kn.prototype.A,Kn.createFromModelPath=function(n,e){return pt(Kn,n,{baseOptions:{modelAssetPath:e}})},Kn.createFromModelBuffer=function(n,e){return pt(Kn,n,{baseOptions:{modelAssetBuffer:e}})},Kn.createFromOptions=function(n,e){return pt(Kn,n,e)},Kn.HAND_CONNECTIONS=Um,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",Kn.HAND_CONNECTIONS);var Yn=class extends hi{constructor(n,e){super(new Wi(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ne(n=this.i=new vm,0,1,e=new Ht),this.v=new xm,Ne(this.i,0,3,this.v),this.m=new q1,Ne(this.i,0,2,this.m),hs(this.m,3,1),Oe(this.m,2,.5),Oe(this.v,2,.5),Oe(this.i,4,.5)}D(){return"HandLandmarker"}get baseOptions(){return mt(this.i,Ht,1)}set baseOptions(n){Ne(this.i,0,1,n)}A(n){return"numHands"in n&&hs(this.m,3,n.numHands??1),"minHandDetectionConfidence"in n&&Oe(this.m,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Oe(this.i,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Oe(this.v,2,n.minHandPresenceConfidence??.5),this.l(n)}H(n,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],qi(this,n,e),ox(this)}I(n,e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ps(this,n,t,e),ox(this)}u(){var n=new di;Gt(n,"image_in"),Gt(n,"norm_rect"),bt(n,"hand_landmarks"),bt(n,"world_hand_landmarks"),bt(n,"handedness");var e=new ui;ds(e,SA,this.i);var t=new Qn;li(t,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ut(t,"IMAGE:image_in"),Ut(t,"NORM_RECT:norm_rect"),ut(t,"LANDMARKS:hand_landmarks"),ut(t,"WORLD_LANDMARKS:world_hand_landmarks"),ut(t,"HANDEDNESS:handedness"),t.A(e),Ii(n,t),this.h.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=Jc(r),this.landmarks.push(Zc(i));we(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",i=>{we(this,i)}),this.h.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=ro(r),this.worldLandmarks.push(ao(i));we(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",i=>{we(this,i)}),this.h.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,a=r.push,o=[];for(let c of i){i=Zu(c);let l=[];for(let h of i.h())l.push({score:On(h,2)??0,index:Ri(h,1)??0??-1,categoryName:yn(Nt(h,3))??""??"",displayName:yn(Nt(h,4))??""??""});o.push(l)}a.call(r,...o),we(this,s)}),this.h.attachEmptyPacketListener("handedness",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};Yn.prototype.detectForVideo=Yn.prototype.I,Yn.prototype.detect=Yn.prototype.H,Yn.prototype.setOptions=Yn.prototype.A,Yn.createFromModelPath=function(n,e){return pt(Yn,n,{baseOptions:{modelAssetPath:e}})},Yn.createFromModelBuffer=function(n,e){return pt(Yn,n,{baseOptions:{modelAssetBuffer:e}})},Yn.createFromOptions=function(n,e){return pt(Yn,n,e)},Yn.HAND_CONNECTIONS=Um,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",Yn.HAND_CONNECTIONS);var Mv=Vi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function cx(n){n.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function lx(n){try{if(!n.G)return n.i;n.G(n.i)}finally{td(n)}}function au(n,e){n=Jc(n),e.push(Zc(n))}var ot=class extends hi{constructor(n,e){super(new Wi(n,e),"input_frames_image",null,!1),this.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ne(n=this.m=new J1,0,1,e=new Ht),this.Z=new xm,Ne(this.m,0,2,this.Z),this.Aa=new MA,Ne(this.m,0,3,this.Aa),this.v=new Qu,Ne(this.m,0,4,this.v),this.P=new H1,Ne(this.m,0,5,this.P),this.C=new Y1,Ne(this.m,0,6,this.C),this.aa=new $1,Ne(this.m,0,7,this.aa),Oe(this.v,2,.5),Oe(this.v,3,.3),Oe(this.P,2,.5),Oe(this.C,2,.5),Oe(this.C,3,.3),Oe(this.aa,2,.5),Oe(this.Z,2,.5)}D(){return"HolisticLandmarker"}get baseOptions(){return mt(this.m,Ht,1)}set baseOptions(n){Ne(this.m,0,1,n)}A(n){return"minFaceDetectionConfidence"in n&&Oe(this.v,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&Oe(this.v,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&Oe(this.P,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&Oe(this.C,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&Oe(this.C,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&Oe(this.aa,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&Oe(this.Z,2,n.minHandLandmarksConfidence??.5),this.l(n)}H(n,e,t){var i=typeof e!="function"?e:{};return this.G=typeof e=="function"?e:t,cx(this),qi(this,n,i),lx(this)}I(n,e,t,i){var s=typeof t!="function"?t:{};return this.G=typeof t=="function"?t:i,cx(this),ps(this,n,s,e),lx(this)}u(){var n=new di;Gt(n,"input_frames_image"),bt(n,"pose_landmarks"),bt(n,"pose_world_landmarks"),bt(n,"face_landmarks"),bt(n,"left_hand_landmarks"),bt(n,"left_hand_world_landmarks"),bt(n,"right_hand_landmarks"),bt(n,"right_hand_world_landmarks");var e=new ui,t=new vb;li(t,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))Ye(s,2,zu(r,0,kc));else{if(!(typeof r=="string"||r instanceof os||kp(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");qc(s,2,Uu(r,!1),ta())}})(t,this.m.h());var i=new Qn;li(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Bc(i,8,vb,t),Ut(i,"IMAGE:input_frames_image"),ut(i,"POSE_LANDMARKS:pose_landmarks"),ut(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),ut(i,"FACE_LANDMARKS:face_landmarks"),ut(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),ut(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),ut(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),ut(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.A(e),Ii(n,i),ed(this,n),this.h.attachProtoListener("pose_landmarks",(s,r)=>{au(s,this.i.poseLandmarks),we(this,r)}),this.h.attachEmptyPacketListener("pose_landmarks",s=>{we(this,s)}),this.h.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.i.poseWorldLandmarks;s=ro(s),a.push(ao(s)),we(this,r)}),this.h.attachEmptyPacketListener("pose_world_landmarks",s=>{we(this,s)}),this.outputPoseSegmentationMasks&&(ut(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),go(this,"pose_segmentation_mask"),this.h.ha("pose_segmentation_mask",(s,r)=>{this.i.poseSegmentationMasks=[xo(this,s,!0,!this.G)],we(this,r)}),this.h.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.i.poseSegmentationMasks=[],we(this,s)})),this.h.attachProtoListener("face_landmarks",(s,r)=>{au(s,this.i.faceLandmarks),we(this,r)}),this.h.attachEmptyPacketListener("face_landmarks",s=>{we(this,s)}),this.outputFaceBlendshapes&&(bt(n,"extra_blendshapes"),ut(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.h.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.i.faceBlendshapes;this.outputFaceBlendshapes&&(s=Zu(s),a.push(wm(s.h()??[]))),we(this,r)}),this.h.attachEmptyPacketListener("extra_blendshapes",s=>{we(this,s)})),this.h.attachProtoListener("left_hand_landmarks",(s,r)=>{au(s,this.i.leftHandLandmarks),we(this,r)}),this.h.attachEmptyPacketListener("left_hand_landmarks",s=>{we(this,s)}),this.h.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.i.leftHandWorldLandmarks;s=ro(s),a.push(ao(s)),we(this,r)}),this.h.attachEmptyPacketListener("left_hand_world_landmarks",s=>{we(this,s)}),this.h.attachProtoListener("right_hand_landmarks",(s,r)=>{au(s,this.i.rightHandLandmarks),we(this,r)}),this.h.attachEmptyPacketListener("right_hand_landmarks",s=>{we(this,s)}),this.h.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.i.rightHandWorldLandmarks;s=ro(s),a.push(ao(s)),we(this,r)}),this.h.attachEmptyPacketListener("right_hand_world_landmarks",s=>{we(this,s)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};ot.prototype.detectForVideo=ot.prototype.I,ot.prototype.detect=ot.prototype.H,ot.prototype.setOptions=ot.prototype.A,ot.createFromModelPath=function(n,e){return pt(ot,n,{baseOptions:{modelAssetPath:e}})},ot.createFromModelBuffer=function(n,e){return pt(ot,n,{baseOptions:{modelAssetBuffer:e}})},ot.createFromOptions=function(n,e){return pt(ot,n,e)},ot.HAND_CONNECTIONS=Um,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",ot.HAND_CONNECTIONS),ot.POSE_CONNECTIONS=Mv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",ot.POSE_CONNECTIONS),ot.FACE_LANDMARKS_LIPS=Im,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",ot.FACE_LANDMARKS_LIPS),ot.FACE_LANDMARKS_LEFT_EYE=Pm,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",ot.FACE_LANDMARKS_LEFT_EYE),ot.FACE_LANDMARKS_LEFT_EYEBROW=Lm,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ot.FACE_LANDMARKS_LEFT_EYEBROW),ot.FACE_LANDMARKS_LEFT_IRIS=xv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",ot.FACE_LANDMARKS_LEFT_IRIS),ot.FACE_LANDMARKS_RIGHT_EYE=Dm,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",ot.FACE_LANDMARKS_RIGHT_EYE),ot.FACE_LANDMARKS_RIGHT_EYEBROW=Fm,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ot.FACE_LANDMARKS_RIGHT_EYEBROW),ot.FACE_LANDMARKS_RIGHT_IRIS=vv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ot.FACE_LANDMARKS_RIGHT_IRIS),ot.FACE_LANDMARKS_FACE_OVAL=Nm,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",ot.FACE_LANDMARKS_FACE_OVAL),ot.FACE_LANDMARKS_CONTOURS=yv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",ot.FACE_LANDMARKS_CONTOURS),ot.FACE_LANDMARKS_TESSELATION=Sv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",ot.FACE_LANDMARKS_TESSELATION);var Ai=class extends hi{constructor(n,e){super(new Wi(n,e),"input_image","norm_rect",!0),this.m={classifications:[]},Ne(n=this.i=new Z1,0,1,e=new Ht)}D(){return"ImageClassifier"}get baseOptions(){return mt(this.i,Ht,1)}set baseOptions(n){Ne(this.i,0,1,n)}A(n){return Ne(this.i,0,2,Ep(n,mt(this.i,_m,2))),this.l(n)}Ga(n,e){return this.m={classifications:[]},qi(this,n,e),this.m}Ha(n,e,t){return this.m={classifications:[]},ps(this,n,t,e),this.m}u(){var n=new di;Gt(n,"input_image"),Gt(n,"norm_rect"),bt(n,"classifications");var e=new ui;ds(e,wA,this.i);var t=new Qn;li(t,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ut(t,"IMAGE:input_image"),Ut(t,"NORM_RECT:norm_rect"),ut(t,"CLASSIFICATIONS:classifications"),t.A(e),Ii(n,t),this.h.attachProtoListener("classifications",(i,s)=>{this.m=FA(hA(i)),we(this,s)}),this.h.attachEmptyPacketListener("classifications",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};Ai.prototype.classifyForVideo=Ai.prototype.Ha,Ai.prototype.classify=Ai.prototype.Ga,Ai.prototype.setOptions=Ai.prototype.A,Ai.createFromModelPath=function(n,e){return pt(Ai,n,{baseOptions:{modelAssetPath:e}})},Ai.createFromModelBuffer=function(n,e){return pt(Ai,n,{baseOptions:{modelAssetBuffer:e}})},Ai.createFromOptions=function(n,e){return pt(Ai,n,e)};var oi=class extends hi{constructor(n,e){super(new Wi(n,e),"image_in","norm_rect",!0),this.i=new Q1,this.embeddings={embeddings:[]},Ne(n=this.i,0,1,e=new Ht)}D(){return"ImageEmbedder"}get baseOptions(){return mt(this.i,Ht,1)}set baseOptions(n){Ne(this.i,0,1,n)}A(n){var e=this.i,t=mt(this.i,Rb,2);if(t=t?t.clone():new Rb,n.l2Normalize!==void 0){var i=n.l2Normalize;Ye(t,1,i==null?i:bu(i))}else"l2Normalize"in n&&Ye(t,1);return n.quantize!==void 0?Ye(t,2,(i=n.quantize)==null?i:bu(i)):"quantize"in n&&Ye(t,2),Ne(e,0,2,t),this.l(n)}Na(n,e){return qi(this,n,e),this.embeddings}Oa(n,e,t){return ps(this,n,t,e),this.embeddings}u(){var n=new di;Gt(n,"image_in"),Gt(n,"norm_rect"),bt(n,"embeddings_out");var e=new ui;ds(e,EA,this.i);var t=new Qn;li(t,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ut(t,"IMAGE:image_in"),Ut(t,"NORM_RECT:norm_rect"),ut(t,"EMBEDDINGS:embeddings_out"),t.A(e),Ii(n,t),this.h.attachProtoListener("embeddings_out",(i,s)=>{i=pA(i),this.embeddings=(function(r){return{embeddings:oa(r,fA,1).map(a=>{var o={headIndex:Ri(a,3)??0??-1,headName:yn(Nt(a,4))??""??""};if(Gx(a,1,uu))a=Yr(a=mp(a,uA,1,uu),1,ci),o.floatEmbedding=a.slice();else{let c=new Uint8Array(0);o.quantizedEmbedding=mp(a,dA,2,uu)?.h()?.i()??c}return o}),timestampMs:av(Nt(r,2,void 0,vu)??Bx)}})(i),we(this,s)}),this.h.attachEmptyPacketListener("embeddings_out",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};oi.cosineSimilarity=function(n,e){if(n.floatEmbedding&&e.floatEmbedding)n=Db(n.floatEmbedding,e.floatEmbedding);else{if(!n.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=Db(Lb(n.quantizedEmbedding),Lb(e.quantizedEmbedding))}return n},oi.prototype.embedForVideo=oi.prototype.Oa,oi.prototype.embed=oi.prototype.Na,oi.prototype.setOptions=oi.prototype.A,oi.createFromModelPath=function(n,e){return pt(oi,n,{baseOptions:{modelAssetPath:e}})},oi.createFromModelBuffer=function(n,e){return pt(oi,n,{baseOptions:{modelAssetBuffer:e}})},oi.createFromOptions=function(n,e){return pt(oi,n,e)};var Np=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};function ZA(n){var e=(function(t){return oa(t,Qn,1)})(n.ka()).filter(t=>(yn(Nt(t,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.v=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(mt(e[0],ui,7)?.u()?.h()??new Map).forEach((t,i)=>{n.v[Number(i)]=yn(Nt(t,1))??""})}function hx(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function ux(n){try{let e=new Np(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.m)return e;n.m(e)}finally{td(n)}}Np.prototype.close=Np.prototype.close;var $n=class extends hi{constructor(n,e){super(new Wi(n,e),"image_in","norm_rect",!1),this.v=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Mm,this.C=new ev,Ne(this.i,0,3,this.C),Ne(n=this.i,0,1,e=new Ht)}D(){return"ImageSegmenter"}get baseOptions(){return mt(this.i,Ht,1)}set baseOptions(n){Ne(this.i,0,1,n)}A(n){return n.displayNamesLocale!==void 0?Ye(this.i,2,ks(n.displayNamesLocale)):"displayNamesLocale"in n&&Ye(this.i,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}M(){ZA(this)}segment(n,e,t){var i=typeof e!="function"?e:{};return this.m=typeof e=="function"?e:t,hx(this),qi(this,n,i),ux(this)}cb(n,e,t,i){var s=typeof t!="function"?t:{};return this.m=typeof t=="function"?t:i,hx(this),ps(this,n,s,e),ux(this)}Ra(){return this.v}u(){var n=new di;Gt(n,"image_in"),Gt(n,"norm_rect");var e=new ui;ds(e,nv,this.i);var t=new Qn;li(t,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ut(t,"IMAGE:image_in"),Ut(t,"NORM_RECT:norm_rect"),t.A(e),Ii(n,t),ed(this,n),this.outputConfidenceMasks&&(bt(n,"confidence_masks"),ut(t,"CONFIDENCE_MASKS:confidence_masks"),go(this,"confidence_masks"),this.h.ia("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>xo(this,r,!0,!this.m)),we(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],we(this,i)})),this.outputCategoryMask&&(bt(n,"category_mask"),ut(t,"CATEGORY_MASK:category_mask"),go(this,"category_mask"),this.h.ha("category_mask",(i,s)=>{this.categoryMask=xo(this,i,!1,!this.m),we(this,s)}),this.h.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,we(this,i)})),bt(n,"quality_scores"),ut(t,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,we(this,s)}),this.h.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};$n.prototype.getLabels=$n.prototype.Ra,$n.prototype.segmentForVideo=$n.prototype.cb,$n.prototype.segment=$n.prototype.segment,$n.prototype.setOptions=$n.prototype.A,$n.createFromModelPath=function(n,e){return pt($n,n,{baseOptions:{modelAssetPath:e}})},$n.createFromModelBuffer=function(n,e){return pt($n,n,{baseOptions:{modelAssetBuffer:e}})},$n.createFromOptions=function(n,e){return pt($n,n,e)};var QA={0:0,1:1,2:2,3:3};function ap(){return Em()?void 0:document.createElement("canvas")}var Jn=class extends Fu{constructor(n,e){super(new XA(n,e)),this.v=new la,this.delegate="CPU",this.i=0,this.baseOptions=new Ht,this.C=this.m=0}D(){return"InteractiveSegmenter"}get j(){return this.h.j}A(n){return this.delegate=n.baseOptions?.delegate??"CPU",super.l(n)}eb(n){if(this.i===0)throw Error("Segmenter is not initialized.");var e;if(this.m!==0&&(this.j._free(this.m),this.m=0),!(e=typeof ImageData<"u"&&n instanceof ImageData))if(typeof n!="object"||n===null)e=!1;else{e=n.data;var t=n.width,i=n.height;e=Number.isInteger(t)&&t>0&&Number.isInteger(i)&&i>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=n.width,t=n.height,n=n.data;else{if([e,t]=Am(n),typeof OffscreenCanvas<"u")i=new OffscreenCanvas(e,t);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=e,i.height=t,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(n,0,0),n=i.getImageData(0,0,e,t).data}if(!n)throw Error("Unsupported image source or failed to extract image pixels.");i=(function({Wa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:n.length,width:e,height:t});var s=this.j._malloc(n.length);if(this.j.HEAPU8.set(n,s),this.m=s,!this.j._interactive_segmenter_set_image(this.i,s,e,t,i))throw Error("Failed to set image on native engine.")}segment(n){if(this.i===0)throw Error("Segmenter is not initialized.");var e=(function(l){l=l.map(({isCompleted:u,brushMode:d,point:f})=>{d=QA[d]??0,f=f.map(({x:b,y:p})=>{var m=new TA;return io(m,1,b),io(m,2,p),m});var g=new RA;return gp(g,u),qc(g,1,zs(d),0),pp(g,2,f),g});var h=new CA;return pp(h,1,l),IA(h)})(n);n=this.j._malloc(e.length),this.j.HEAPU8.set(e,n);var t=this.j._malloc(12),i=t+4,s=t+8,r=0,a=this.C++;try{if(this.o)if(this.delegate==="GPU"){var o=this.o;++o.h.U,o.i.set(a,performance.now())}else{var c=this.o;++c.h.R,c.i.set(a,performance.now())}if((r=this.j._interactive_segmenter_segment(this.i,n,e.length,t,i,s))===0)throw Error("Segmentation failed.");this.o?.za(a);let l=this.j.HEAPU32[t/4],h=this.j.HEAPU32[i/4],u=new Float32Array(this.j.HEAPU8.buffer,r,this.j.HEAPU32[s/4]/4),d=new Float32Array(u);if(o=l*h,(d instanceof Uint8Array||d instanceof Float32Array)&&d.length!==o)throw Error("Unsupported channel count: "+d.length/o);return new Jt([d],!0,!1,this.h.j.canvas??void 0,this.v,l,h)}finally{n!==0&&this.j._free(n),t!==0&&this.j._free(t),r!==0&&this.j._free(r)}}u(){this.i!==0&&(this.o?.xa(),this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0);var n=new Iu;if(this.delegate==="GPU"){var e=new R1;zi(n,2,Bs,e)}else hs(e=new eA,1,4),zi(n,1,Bs,e);if(Ne(this.baseOptions,0,3,n),n=gA(this.baseOptions),e=this.j._malloc(n.length),this.j.HEAPU8.set(n,e),this.i=this.j._interactive_segmenter_create(e,n.length),this.j._free(e),this.i===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.o?.ya()}close(){this.i!==0&&(this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0),this.v.close(),super.close()}};Jn.prototype.close=Jn.prototype.close,Jn.prototype.segment=Jn.prototype.segment,Jn.prototype.setImage=Jn.prototype.eb,Jn.prototype.setOptions=Jn.prototype.A,Jn.createFromModelPath=function(n,e){return du(Jn,ap(),n,{baseOptions:{modelAssetPath:e}})},Jn.createFromModelBuffer=function(n,e){return du(Jn,ap(),n,{baseOptions:{modelAssetBuffer:e}})},Jn.createFromOptions=function(n,e){var t=e.canvas??ap();return du(Jn,t,n,e)};var Up=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};Up.prototype.close=Up.prototype.close;var ss=class extends hi{constructor(n,e){super(new Wi(n,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Mm,this.v=new ev,Ne(this.i,0,3,this.v),Ne(n=this.i,0,1,e=new Ht)}D(){return"InteractiveSegmenterLegacy"}get baseOptions(){return mt(this.i,Ht,1)}set baseOptions(n){Ne(this.i,0,1,n)}A(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}segment(n,e,t,i){var s=typeof t!="function"?t:{};if(this.m=typeof t=="function"?t:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,t=this.J+1,i=new iv,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new ip;gp(r,!0),io(r,1,e.keypoint.x),io(r,2,e.keypoint.y),zi(i,1,wp,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new PA;for(r of e.scribble)gp(e=new ip,!0),io(e,1,r.x),io(e,2,r.y),Bc(o,1,ip,e);zi(i,2,wp,o)}}this.h.addProtoToStream(i.h(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",t),qi(this,n,s);e:{try{let o=new Up(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.m){var a=o;break e}this.m(o)}finally{td(this)}a=void 0}return a}u(){var n=new di;Gt(n,"image_in"),Gt(n,"roi_in"),Gt(n,"norm_rect_in");var e=new ui;ds(e,nv,this.i);var t=new Qn;li(t,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterLegacyGraph"),Ut(t,"IMAGE:image_in"),Ut(t,"ROI:roi_in"),Ut(t,"NORM_RECT:norm_rect_in"),t.A(e),Ii(n,t),ed(this,n),this.outputConfidenceMasks&&(bt(n,"confidence_masks"),ut(t,"CONFIDENCE_MASKS:confidence_masks"),go(this,"confidence_masks"),this.h.ia("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>xo(this,r,!0,!this.m)),we(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],we(this,i)})),this.outputCategoryMask&&(bt(n,"category_mask"),ut(t,"CATEGORY_MASK:category_mask"),go(this,"category_mask"),this.h.ha("category_mask",(i,s)=>{this.categoryMask=xo(this,i,!1,!this.m),we(this,s)}),this.h.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,we(this,i)})),bt(n,"quality_scores"),ut(t,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,we(this,s)}),this.h.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};ss.prototype.segment=ss.prototype.segment,ss.prototype.setOptions=ss.prototype.A,ss.createFromModelPath=function(n,e){return pt(ss,n,{baseOptions:{modelAssetPath:e}})},ss.createFromModelBuffer=function(n,e){return pt(ss,n,{baseOptions:{modelAssetBuffer:e}})},ss.createFromOptions=function(n,e){return pt(ss,n,e)};var Ti=class extends hi{constructor(n,e){super(new Wi(n,e),"input_frame_gpu","norm_rect",!1),this.m={detections:[]},Ne(n=this.i=new sv,0,1,e=new Ht)}D(){return"ObjectDetector"}get baseOptions(){return mt(this.i,Ht,1)}set baseOptions(n){Ne(this.i,0,1,n)}A(n){return n.displayNamesLocale!==void 0?Ye(this.i,2,ks(n.displayNamesLocale)):"displayNamesLocale"in n&&Ye(this.i,2),n.maxResults!==void 0?hs(this.i,3,n.maxResults):"maxResults"in n&&Ye(this.i,3),n.scoreThreshold!==void 0?Oe(this.i,4,n.scoreThreshold):"scoreThreshold"in n&&Ye(this.i,4),n.categoryAllowlist!==void 0?Su(this.i,5,n.categoryAllowlist):"categoryAllowlist"in n&&Ye(this.i,5),n.categoryDenylist!==void 0?Su(this.i,6,n.categoryDenylist):"categoryDenylist"in n&&Ye(this.i,6),this.l(n)}H(n,e){return this.m={detections:[]},qi(this,n,e),this.m}I(n,e,t){return this.m={detections:[]},ps(this,n,t,e),this.m}u(){var n=new di;Gt(n,"input_frame_gpu"),Gt(n,"norm_rect"),bt(n,"detections");var e=new ui;ds(e,LA,this.i);var t=new Qn;li(t,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ut(t,"IMAGE:input_frame_gpu"),Ut(t,"NORM_RECT:norm_rect"),ut(t,"DETECTIONS:detections"),t.A(e),Ii(n,t),this.h.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=k1(r),this.m.detections.push(ov(i));we(this,s)}),this.h.attachEmptyPacketListener("detections",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};Ti.prototype.detectForVideo=Ti.prototype.I,Ti.prototype.detect=Ti.prototype.H,Ti.prototype.setOptions=Ti.prototype.A,Ti.createFromModelPath=async function(n,e){return pt(Ti,n,{baseOptions:{modelAssetPath:e}})},Ti.createFromModelBuffer=function(n,e){return pt(Ti,n,{baseOptions:{modelAssetBuffer:e}})},Ti.createFromOptions=function(n,e){return pt(Ti,n,e)};var Op=class{constructor(n,e,t){this.landmarks=n,this.worldLandmarks=e,this.segmentationMasks=t}close(){this.segmentationMasks?.forEach(n=>{n.close()})}};function dx(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function fx(n){try{let e=new Op(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.v)return e;n.v(e)}finally{td(n)}}Op.prototype.close=Op.prototype.close;var Zn=class extends hi{constructor(n,e){super(new Wi(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ne(n=this.i=new rv,0,1,e=new Ht),this.C=new $1,Ne(this.i,0,3,this.C),this.m=new Y1,Ne(this.i,0,2,this.m),hs(this.m,4,1),Oe(this.m,2,.5),Oe(this.C,2,.5),Oe(this.i,4,.5)}D(){return"PoseLandmarker"}get baseOptions(){return mt(this.i,Ht,1)}set baseOptions(n){Ne(this.i,0,1,n)}A(n){return"numPoses"in n&&hs(this.m,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&Oe(this.m,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&Oe(this.i,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&Oe(this.C,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}H(n,e,t){var i=typeof e!="function"?e:{};return this.v=typeof e=="function"?e:t,dx(this),qi(this,n,i),fx(this)}I(n,e,t,i){var s=typeof t!="function"?t:{};return this.v=typeof t=="function"?t:i,dx(this),ps(this,n,s,e),fx(this)}u(){var n=new di;Gt(n,"image_in"),Gt(n,"norm_rect"),bt(n,"normalized_landmarks"),bt(n,"world_landmarks"),bt(n,"segmentation_masks");var e=new ui;ds(e,DA,this.i);var t=new Qn;li(t,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ut(t,"IMAGE:image_in"),Ut(t,"NORM_RECT:norm_rect"),ut(t,"NORM_LANDMARKS:normalized_landmarks"),ut(t,"WORLD_LANDMARKS:world_landmarks"),t.A(e),Ii(n,t),ed(this,n),this.h.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(let r of i)i=Jc(r),this.landmarks.push(Zc(i));we(this,s)}),this.h.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],we(this,i)}),this.h.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(let r of i)i=ro(r),this.worldLandmarks.push(ao(i));we(this,s)}),this.h.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],we(this,i)}),this.outputSegmentationMasks&&(ut(t,"SEGMENTATION_MASK:segmentation_masks"),go(this,"segmentation_masks"),this.h.ia("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>xo(this,r,!0,!this.v)),we(this,s)}),this.h.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],we(this,i)})),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};Zn.prototype.detectForVideo=Zn.prototype.I,Zn.prototype.detect=Zn.prototype.H,Zn.prototype.setOptions=Zn.prototype.A,Zn.createFromModelPath=function(n,e){return pt(Zn,n,{baseOptions:{modelAssetPath:e}})},Zn.createFromModelBuffer=function(n,e){return pt(Zn,n,{baseOptions:{modelAssetBuffer:e}})},Zn.createFromOptions=function(n,e){return pt(Zn,n,e)},Zn.POSE_CONNECTIONS=Mv,Rt("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",Zn.POSE_CONNECTIONS);var sd=class n{static async create(e){let t=new n(e),i=e.delegate?[e.delegate]:["GPU","CPU"],s=null,r=!1;for(let a of i)try{if(await t._make(a),r=!0,!e.testImage||t.selfTest(e.testImage))return t.tested=!!e.testImage,t;s=new Error("face tracker self-test failed ("+a+")")}catch(o){s=o,r=!1}if(r)return t;throw s}async use(e){try{this.fl&&this.fl.close()}catch{}return this.o.delegate=e,await this._make(e),this.tested=this.o.testImage?this.selfTest(this.o.testImage):!1,this.tested}selfTest(e){let t=!1;try{for(let i=0;i<3&&!t;i++){let s=this.fl.detectForVideo(e,++this.lastTs);t=!!(s&&s.faceLandmarks&&s.faceLandmarks.length&&s.facialTransformationMatrixes&&s.facialTransformationMatrixes.length)}if(t){this.blank||(this.blank=document.createElement("canvas"),this.blank.width=e.width,this.blank.height=e.height,this.blank.getContext("2d").fillRect(0,0,e.width,e.height));for(let i=0;i<3;i++){let s=this.fl.detectForVideo(this.blank,++this.lastTs);if(!s||!s.faceLandmarks||!s.faceLandmarks.length)break}}}catch{return!1}return t}constructor(e){this.o=e,this.fl=null,this.delegate="",this.jawIdx=-1,this.lastTs=0,this.failures=0,this.tested=!1,this.blank=null}async _make(e){let t=this.o;this.fl=await ht.createFromOptions({wasmLoaderPath:t.wasmLoaderPath,wasmBinaryPath:t.wasmBinaryPath},{baseOptions:{modelAssetBuffer:t.model,delegate:e},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!0,outputFacialTransformationMatrixes:!0,minFaceDetectionConfidence:.5,minFacePresenceConfidence:.5,minTrackingConfidence:.5}),this.delegate=e}detect(e,t){let i=Math.round(t);i<=this.lastTs&&(i=this.lastTs+1),this.lastTs=i;let s=this.fl.detectForVideo(e,i);if(!s||!s.faceLandmarks||!s.faceLandmarks.length||!s.facialTransformationMatrixes||!s.facialTransformationMatrixes.length)return null;let r=null,a=s.faceBlendshapes&&s.faceBlendshapes[0]&&s.faceBlendshapes[0].categories;return a&&((this.jawIdx<0||!a[this.jawIdx]||a[this.jawIdx].categoryName!=="jawOpen")&&(this.jawIdx=a.findIndex(o=>o.categoryName==="jawOpen")),this.jawIdx>=0&&(r=a[this.jawIdx].score)),{lm:s.faceLandmarks[0],mat:s.facialTransformationMatrixes[0].data,jawOpen:r}}async recover(){if(this.failures++,this.delegate==="GPU"){try{this.fl.close()}catch{}return await this._make("CPU"),!0}return!1}close(){try{this.fl&&this.fl.close()}catch{}this.fl=null}};function Om(n,e){if(e===vf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Za||e===yc){let t=n.getIndex();if(t===null){let r=[],a=n.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Za)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function wv(n){let e=new Map,t=new Map,i=n.clone();return Ev(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Ev(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Ev(n.children[i],e.children[i],t)}var rd=class extends Zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wm(t)}),this.register(function(t){return new qm(t)}),this.register(function(t){return new Xm(t)}),this.register(function(t){return new tg(t)}),this.register(function(t){return new ng(t)}),this.register(function(t){return new ig(t)}),this.register(function(t){return new Km(t)}),this.register(function(t){return new Ym(t)}),this.register(function(t){return new $m(t)}),this.register(function(t){return new Jm(t)}),this.register(function(t){return new Vm(t)}),this.register(function(t){return new Zm(t)}),this.register(function(t){return new jm(t)}),this.register(function(t){return new eg(t)}),this.register(function(t){return new Qm(t)}),this.register(function(t){return new Gm(t)}),this.register(function(t){return new ad(t,nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ad(t,nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new sg(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ls.extractUrlBase(e);a=Ls.resolveURL(l,this.path)}else a=Ls.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Wa(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Iv){try{a[nt.KHR_BINARY_GLTF]=new rg(e)}catch(u){s&&s(u);return}r=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new dg(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:a[u]=new Hm;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[u]=new ag(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[u]=new og;break;case nt.KHR_MESH_QUANTIZATION:a[u]=new cg;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function eT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Vt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Gm=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ln);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new cr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new dc(h),l.distance=u;break;case"spot":l=new uc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ms(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}},Hm=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Si}extendParams(e,t,i){let s=[];e.color=new Ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ln),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,nn))}return Promise.all(s)}},Vm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Wm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(r,r)}return Promise.all(s)}},qm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(s)}},Xm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},jm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},Km=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ln)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,nn)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},Ym=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},$m=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(r[0],r[1],r[2],Ln),Promise.all(s)}},Jm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Zm=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(r[0],r[1],r[2],Ln),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,nn)),Promise.all(s)}},Qm=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},eg=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let i=Vt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},tg=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ng=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},ig=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},ad=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},sg=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==Pi.TRIANGLES&&l.mode!==Pi.TRIANGLE_STRIP&&l.mode!==Pi.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let b=new He,p=new O,m=new si,x=new O(1,1,1),w=new Jo(g.geometry,g.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&x.fromBufferAttribute(c.SCALE,E),w.setMatrixAt(E,b.compose(p,m,x));let y=null;for(let E in c)if(E==="_COLOR_0"){let A=c[E];w.instanceColor=new Es(A.array,A.itemSize,A.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(y===null){let _=w.geometry;y=new gn,y.name=_.name;for(let M in _.attributes)y.setAttribute(M,_.attributes[M]);for(let M in _.morphAttributes)y.morphAttributes[M]=_.morphAttributes[M];_.index!==null&&y.setIndex(_.index),y.morphTargetsRelative=_.morphTargetsRelative;for(let M of _.groups)y.addGroup(M.start,M.count,M.materialIndex);_.boundingBox!==null&&(y.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(y.boundingSphere=_.boundingSphere.clone()),y.drawRange.start=_.drawRange.start,y.drawRange.count=_.drawRange.count,y.userData=Object.assign({},_.userData),w.geometry=y}let A=c[E];y.setAttribute(E,new Es(A.array,A.itemSize,A.normalized))}Ft.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Iv="glTF",el=12,Av={JSON:1313821514,BIN:5130562},rg=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,el),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Iv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-el,r=new DataView(e,el),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Av.JSON){let l=new Uint8Array(e,el+a,o);this.content=i.decode(l)}else if(c===Av.BIN){let l=el+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ag=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=hg[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=hg[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],f=Co[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],p=c[g];p!==void 0&&(b.normalized=p)}u(f)},o,l,Ln,d)})})}},og=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},cg=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},od=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,p=-2*f+3*d,m=f-d,x=1-p,w=m-d+u;for(let y=0;y!==o;y++){let E=a[b+y+o],A=a[b+y+c]*h,_=a[g+y+o],M=a[g+y]*h;r[y]=x*E+w*A+p*_+m*M}return r}},tT=new si,lg=class extends od{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return tT.fromArray(r).normalize().toArray(r),r}},Pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Co={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tv={9728:qt,9729:Dt,9984:lh,9985:$a,9986:Hr,9987:Mi},Rv={33071:vi,33648:Ia,10497:rr},km={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nT={CUBICSPLINE:void 0,LINEAR:Lr,STEP:Pr},Bm={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ur({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),n.DefaultMaterial}function ha(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ms(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sT(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function rT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aT(n){let e,t=n.extensions&&n.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zm(t.attributes):e=n.indices+":"+zm(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+zm(n.targets[i]);return e}function zm(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function ug(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var cT=new He,dg=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new eT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?(this.textureLoader=new cc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new fc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wa(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return ha(r,o,s),ms(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(Ls.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=km[s.type],o=Co[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new zt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=km[s.type],l=Co[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,p;if(f&&f!==u){let m=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,w=t.cache.get(x);w||(b=new l(o,m*f,s.count*f/h),w=new Oa(b,f/h),t.cache.add(x,w)),p=new ka(w,c,d%f/h,g)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),p=new zt(b,c,g);if(s.sparse!==void 0){let m=km.SCALAR,x=Co[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,E=new x(a[1],w,s.sparse.count*m),A=new l(a[2],y,s.sparse.count*c);o!==null&&(p=new zt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,M=E.length;_<M;_++){let F=E[_];if(p.setX(F,A[_*c]),c>=2&&p.setY(F,A[_*c+1]),c>=3&&p.setZ(F,A[_*c+2]),c>=4&&p.setW(F,A[_*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Tv[d.magFilter]||Dt,h.minFilter=Tv[d.minFilter]||Mi,h.wrapS=Rv[d.wrapS]||rr,h.wrapT=Rv[d.wrapT]||rr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==Dt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,g){let b=f;t.isImageBitmapLoader===!0&&(b=function(p){let m=new rn(p);m.needsUpdate=!0,f(m)}),t.load(Ls.resolveURL(d,r.path),b,void 0,g)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),ms(d,a),d.userData.mimeType=a.mimeType||oT(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new Ha,Fn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new Ga,Fn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Ur}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){let u=s[nt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ue(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ln),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,nn)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=qn);let h=r.alphaMode||Bm.OPAQUE;if(h===Bm.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Bm.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Si&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Si&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Si){let u=r.emissiveFactor;o.emissive=new Ue().setRGB(u[0],u[1],u[2],Ln)}return r.emissiveTexture!==void 0&&a!==Si&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,nn)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ms(u,r),t.associations.set(u,{materials:e}),r.extensions&&ha(s,u,r),u})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Cv(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=aT(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Cv(new gn,l,t),l.mode===Pi.TRIANGLE_STRIP?d=d.then(f=>Om(f,yc)):l.mode===Pi.TRIANGLE_FAN&&(d=d.then(f=>Om(f,Za))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?iT(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],p=a[f],m,x=l[f];if(p.mode===Pi.TRIANGLES||p.mode===Pi.TRIANGLE_STRIP||p.mode===Pi.TRIANGLE_FAN||p.mode===void 0){let w=r.isSkinnedMesh===!0,y=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");w&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=w&&y?new Yo(b,x):new $t(b,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===Pi.LINES)m=new Zo(b,x);else if(p.mode===Pi.LINE_STRIP)m=new Nr(b,x);else if(p.mode===Pi.LINE_LOOP)m=new Qo(b,x);else if(p.mode===Pi.POINTS)m=new ec(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&rT(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ms(m,r),p.extensions&&ha(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ha(s,u[0],r),u[0];let d=new In;r.extensions&&ha(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new sn(Kh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ps(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ms(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new He;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new $o(o,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],b=f.target,p=b.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],p=u[4],m=[];for(let w=0,y=d.length;w<y;w++){let E=d[w],A=f[w],_=g[w],M=b[w],F=p[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let C=i._createAnimationTracks(E,A,_,M,F);if(C)for(let D=0;D<C.length;D++)m.push(C[D])}let x=new oc(r,void 0,m);return ms(x,s),x})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,cT)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new O().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Ba:l.length>1?h=new In:l.length===1?h=l[0]:h=new Ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ms(h,r),r.extensions&&ha(i,h,r),r.matrix!==void 0){let u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new In;i.name&&(r.name=s.createUniqueName(i.name)),ms(r,i),i.extensions&&ha(t,r,i);let a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(wv(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Fn||d instanceof rn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}xr[r.path]===xr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(xr[r.path]){case xr.weights:h=Rs;break;case xr.rotation:h=Cs;break;case xr.translation:case xr.scale:h=or;break;default:i.itemSize===1?h=Rs:h=or;break}let u=s.interpolation!==void 0?nT[s.interpolation]:Lr,d=this._getArrayFromAccessor(i);for(let f=0,g=c.length;f<g;f++){let b=new h(c[f]+"."+xr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=ug(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Cs?lg:od;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lT(n,e,t){let i=e.attributes,s=new ri;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),o.normalized){let h=ug(Co[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new O,c=new O;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=ug(Co[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new Hn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function Cv(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){n.setAttribute(o,c)})}for(let a in i){let o=hg[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return et.workingColorSpace!==Ln&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),ms(n,e),lT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?sT(n,e.targets,t):n})}var Pv=(function(){var n="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(n),r,a=WebAssembly.instantiate(s,{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var x=new Uint8Array(m.length),w=0;w<m.length;++w){var y=m.charCodeAt(w);x[w]=y>96?y-97:y>64?y-39:y+4}for(var E=0,w=0;w<m.length;++w)x[E++]=x[w]<60?i[x[w]]:(x[w]-60)*64+x[++w];return x.buffer.slice(0,E)}function c(m,x,w,y,E,A,_){var M=m.exports.sbrk,F=y+3&-4,C=M(F*E),D=M(A.length),H=new Uint8Array(m.exports.memory.buffer);H.set(A,D);var V=x(C,y,E,D,A.length);if(V==0&&_&&_(C,F,E),w.set(H.subarray(C,C+y*E)),M(C-M(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(m){var x={object:new Worker(m),pending:0,requests:{}};return x.object.onmessage=function(w){var y=w.data;x.pending-=y.count,x.requests[y.id][y.action](y.value),delete x.requests[y.id]},x}function g(m){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+p.name+";"+c.toString()+p.toString(),w=new Blob([x],{type:"text/javascript"}),y=URL.createObjectURL(w),E=u.length;E<m;++E)u[E]=f(y);for(var E=m;E<u.length;++E)u[E].object.postMessage({});u.length=m,URL.revokeObjectURL(y)}function b(m,x,w,y,E){for(var A=u[0],_=1;_<u.length;++_)u[_].pending<A.pending&&(A=u[_]);return new Promise(function(M,F){var C=new Uint8Array(w),D=++d;A.pending+=m,A.requests[D]={resolve:M,reject:F},A.object.postMessage({id:D,count:m,size:x,source:C,mode:y,filter:E},[C.buffer])})}function p(m){var x=m.data;self.ready.then(function(w){if(!x.id)return self.close();try{var y=new Uint8Array(x.count*x.size);c(w,w.exports[x.mode],y,x.count,x.size,x.source,w.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:y},[y.buffer])}catch(E){self.postMessage({id:x.id,count:x.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,x,w,y,E){c(r,r.exports.meshopt_decodeVertexBuffer,m,x,w,y,r.exports[l[E]])},decodeIndexBuffer:function(m,x,w,y){c(r,r.exports.meshopt_decodeIndexBuffer,m,x,w,y)},decodeIndexSequence:function(m,x,w,y){c(r,r.exports.meshopt_decodeIndexSequence,m,x,w,y)},decodeGltfBuffer:function(m,x,w,y,E,A){c(r,r.exports[h[E]],m,x,w,y,r.exports[l[A]])},decodeGltfBufferAsync:function(m,x,w,y,E){return u.length>0?b(m,x,w,h[y],l[E]):a.then(function(){var A=new Uint8Array(m*x);return c(r,r.exports[h[y]],A,m,x,w,r.exports[l[E]]),A})}}})();var Lv=Math.tan(63*Math.PI/360),gg=Math.PI/180,hT=[{ids:[33,133,362,263,159,145,386,374],wx:1,wy:1.2},{ids:[168,6,197],wx:.3,wy:1},{ids:[2,94,98,327,129,358],wx:.3,wy:.8},{ids:[10,151,9,67,297,109,338,69,299],wx:.2,wy:.7},{ids:[234,454,127,356,93,323,132,361],wx:.6,wy:0}],fg=[152,148,377,175,171,396,176,400,199,200],Dv=[168,6,197,195,5,4,1,2,94,98,327,129,358,33,133,362,263,130,359,243,463,9,151,10,108,337,67,297,69,299,105,334,107,336,117,346,118,347,119,348,50,280,205,425,36,266,203,423,48,278,49,279,64,294,240,460,100,329,101,330],Fv={wx:.2,wy:1.5},pg=[33,133,362,263],ua=["sx","sUp","sLow"],Nv={sx:[.9,1.18],sUp:[.9,1.18],sLow:[.92,1.36],ty:[-1.2,1.2]},ld={sx:1,sUp:1,sLow:1,ty:0},uT=1,ei=(n,e,t)=>n<e?e:n>t?t:n,dT=n=>(n=ei(n,0,1),n*n*(3-2*n));function _g(n){let e=n.landmarks,t=0,i=0;for(let s of pg)t+=e[s][1],i+=e[s][2];return{y0:t/pg.length,z0:i/pg.length,blend:uT}}function vr(n,e,t,i,s,r,a=0){let o=dT((i-(n.y0-n.blend))/(2*n.blend)),c=e.sLow+(e.sUp-e.sLow)*o;return r[a]=e.sx*t,r[a+1]=n.y0+e.ty+(i-n.y0)*c,r[a+2]=n.z0+(s-n.z0)*e.sx,r}function Ov(n,e,t,i){let{y0:s,z0:r,blend:a}=n,{sx:o,sUp:c,sLow:l,ty:h}=e,u=s-a,d=1/(2*a);for(let f=0;f<t.length;f+=3){let g=t[f+1],b=(g-u)*d;b=b<0?0:b>1?1:b,b=b*b*(3-2*b),i[f]=o*t[f],i[f+1]=s+h+(g-s)*(l+(c-l)*b),i[f+2]=r+(t[f+2]-r)*o}return i}function bg(n,e,t){let i=n.jaw,s=[(i.condyleR[0]+i.condyleL[0])/2,(i.condyleR[1]+i.condyleL[1])/2,(i.condyleR[2]+i.condyleL[2])/2],r=vr(e,t,s[0],s[1],s[2],[0,0,0]),a=vr(e,t,s[0]+i.axis[0],s[1]+i.axis[1],s[2]+i.axis[2],[0,0,0]),o=vr(e,t,s[0]+i.slideDir[0],s[1]+i.slideDir[1],s[2]+i.slideDir[2],[0,0,0]),c=[a[0]-r[0],a[1]-r[1],a[2]-r[2]],l=Math.hypot(c[0],c[1],c[2]);return{c:r,a:[c[0]/l,c[1]/l,c[2]/l],slide:[o[0]-r[0],o[1]-r[1],o[2]-r[2]],slideMax:i.slideMax,thetaMax:i.thetaMax,slideExp:i.slideExp}}function fT(n,e){return n.slideMax*Math.pow(ei(e,0,n.thetaMax)/n.thetaMax,n.slideExp)}function xg(n,e,t=new Float64Array(16)){let i=e*gg,s=Math.cos(i),r=Math.sin(i),a=1-s,[o,c,l]=n.a,h=s+o*o*a,u=o*c*a-l*r,d=o*l*a+c*r,f=c*o*a+l*r,g=s+c*c*a,b=c*l*a-o*r,p=l*o*a-c*r,m=l*c*a+o*r,x=s+l*l*a,w=fT(n,e),y=n.c[0],E=n.c[1],A=n.c[2];return t[0]=h,t[1]=f,t[2]=p,t[3]=0,t[4]=u,t[5]=g,t[6]=m,t[7]=0,t[8]=d,t[9]=b,t[10]=x,t[11]=0,t[12]=y+w*n.slide[0]-(h*y+u*E+d*A),t[13]=E+w*n.slide[1]-(f*y+g*E+b*A),t[14]=A+w*n.slide[2]-(p*y+m*E+x*A),t[15]=1,t}function mg(n,e,t,i,s,r=0){return s[r]=n[0]*e+n[4]*t+n[8]*i+n[12],s[r+1]=n[1]*e+n[5]*t+n[9]*i+n[13],s[r+2]=n[2]*e+n[6]*t+n[10]*i+n[14],s}function pT(n,e){let t=n[0]/e,i=n[1]/e,s=n[2]/e,r=n[4]/e,a=n[5]/e,o=n[6]/e,c=n[8]/e,l=n[9]/e,h=n[10]/e,u=t+a+h,d,f,g,b;if(u>0){let p=Math.sqrt(u+1)*2;b=p/4,d=(o-l)/p,f=(c-s)/p,g=(i-r)/p}else if(t>a&&t>h){let p=Math.sqrt(1+t-a-h)*2;b=(o-l)/p,d=p/4,f=(r+i)/p,g=(c+s)/p}else if(a>h){let p=Math.sqrt(1+a-t-h)*2;b=(c-s)/p,d=(r+i)/p,f=p/4,g=(l+o)/p}else{let p=Math.sqrt(1+h-t-a)*2;b=(i-r)/p,d=(c+s)/p,f=(l+o)/p,g=p/4}return[d,f,g,b]}function mT(n,e,t){let i=n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3],s=e[0],r=e[1],a=e[2],o=e[3];if(i<0&&(i=-i,s=-s,r=-r,a=-a,o=-o),i>.9995){let d=[n[0]+t*(s-n[0]),n[1]+t*(r-n[1]),n[2]+t*(a-n[2]),n[3]+t*(o-n[3])],f=Math.hypot(d[0],d[1],d[2],d[3]);return[d[0]/f,d[1]/f,d[2]/f,d[3]/f]}let c=Math.acos(i),l=Math.sin(c),h=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return[n[0]*h+s*u,n[1]*h+r*u,n[2]*h+a*u,n[3]*h+o*u]}function gT(n,e,t,i){let[s,r,a,o]=n,c=s*s,l=r*r,h=a*a,u=s*r,d=s*a,f=r*a,g=o*s,b=o*r,p=o*a;return i[0]=t*(1-2*(l+h)),i[1]=t*(2*(u+p)),i[2]=t*(2*(d-b)),i[3]=0,i[4]=t*(2*(u-p)),i[5]=t*(1-2*(c+h)),i[6]=t*(2*(f+g)),i[7]=0,i[8]=t*(2*(d+b)),i[9]=t*(2*(f-g)),i[10]=t*(1-2*(c+l)),i[11]=0,i[12]=e[0],i[13]=e[1],i[14]=e[2],i[15]=1,i}function Uv(n,e,t){let i=[];for(let r=0;r<t;r++){let a=new Float64Array(t+1);for(let o=0;o<t;o++)a[o]=n[r*t+o];a[t]=e[r],i.push(a)}for(let r=0;r<t;r++){let a=r;for(let c=r+1;c<t;c++)Math.abs(i[c][r])>Math.abs(i[a][r])&&(a=c);if(Math.abs(i[a][r])<1e-14)return null;let o=i[r];i[r]=i[a],i[a]=o;for(let c=0;c<t;c++)if(c!==r){let l=i[c][r]/i[r][r];for(let h=r;h<=t;h++)i[c][h]-=l*i[r][h]}}let s=new Array(t);for(let r=0;r<t;r++)s[r]=i[r][t]/i[r][r];return s}var cd=class{constructor(e,t={}){this.meta=e,this.fr=_g(e);let i=e.landmarks;this.ref=new Float64Array(i.length*3);for(let o=0;o<i.length;o++)this.ref[o*3]=i[o][0],this.ref[o*3+1]=i[o][1],this.ref[o*3+2]=i[o][2];let s=e.alignment,r=[s[0][2],s[1][2],s[2][2]],a=Math.hypot(r[0],r[1],r[2]);this.fwd=[r[0]/a,r[1]/a,r[2]/a],this.defaultFit={...ld,...e.defaultFit||{},...t.defaultFit||{}},this.adapt=t.adapt!==!1,this.refine=t.refine!==!1,this.headC=[0,this.fr.y0,this.fr.z0-8.5],this._mref=new Float64Array(16),this.reset(),this.rows=[];for(let o of hT)for(let c of o.ids)this.rows.push({id:c,wx:o.wx,wy:o.wy,chin:!1});for(let o of fg)this.rows.push({id:o,wx:Fv.wx,wy:Fv.wy,chin:!0});this._w=[0,0,0],this._p=[0,0,0],this._j=new Float64Array(16)}reset(){this.fit={...this.defaultFit},this.fitSamples=0,this.theta=0,this.pose=null,this.minJawOpen=1,this.lastMs=0,this._jf=null,this._jfKey=""}_jaw(e){let t=e.sx.toFixed(4)+"|"+e.sUp.toFixed(4)+"|"+e.sLow.toFixed(4)+"|"+e.ty.toFixed(3);return t!==this._jfKey&&(this._jf=bg(this.meta,this.fr,e),this._jfKey=t),this._jf}_proj(e,t,i,s,r){let a=this.ref,o=this._w,c=this._p;vr(this.fr,t,a[i*3],a[i*3+1],a[i*3+2],o),s&&mg(s,o[0],o[1],o[2],o),mg(e,o[0],o[1],o[2],c);let l=-1/c[2];return r[0]=c[0]*l,r[1]=c[1]*l,r}_jawCost(e,t,i,s){let r=xg(this._jaw(t),s,this._j),a=0,o=[0,0];for(let c of fg){this._proj(e,t,c,r,o);let l=o[0]-i[c*2],h=o[1]-i[c*2+1];a+=l*l+h*h}return a}_solveJaw(e,t,i){let s=this._jaw(t),r=-3,a=s.thetaMax+2,o=0,c=1/0;for(let p=r;p<=a+1e-6;p+=2.5){let m=this._jawCost(e,t,i,p);m<c&&(c=m,o=p)}let l=Math.max(r,o-2.5),h=Math.min(a,o+2.5),u=.6180339887,d=h-u*(h-l),f=l+u*(h-l),g=this._jawCost(e,t,i,d),b=this._jawCost(e,t,i,f);for(let p=0;p<9;p++)g<b?(h=f,f=d,b=g,d=h-u*(h-l),g=this._jawCost(e,t,i,d)):(l=d,d=f,g=b,f=l+u*(h-l),b=this._jawCost(e,t,i,f));return{theta:(l+h)/2,cost:Math.min(g,b)/fg.length}}_residuals(e,t,i,s,r,a){let o=[0,0],c=0;for(let l of this.rows){this._proj(e,t,l.id,null,o);let h=o[0]-i[l.id*2],u=o[1]-i[l.id*2+1];a[c++]=l.wx*(h*s[0]+u*s[1]),a[c++]=l.wy*(h*r[0]+u*r[1])}return a}_solveFit(e,t,i,s=null){let r=[e[0],e[1]],a=[e[4],e[5]],o=Math.hypot(r[0],r[1])||1;r=[r[0]/o,r[1]/o],o=Math.hypot(a[0],a[1])||1,a=[a[0]/o,a[1]/o];let c=this.rows.length*2,l=ua.length,h=new Float64Array(c),u=new Float64Array(c),d=new Float64Array(c),f=ua.map(()=>new Float64Array(c)),g=[.01,.01,.01],b=[.06,.05,.12],p=.004,m=.012,x={...i};for(let w=0;w<3;w++){this._residuals(e,x,t,r,a,h);for(let _=0;_<c;_++){let M=Math.abs(h[_]);d[_]=M<=m?1:m/M}for(let _=0;_<l;_++){let M={...x};M[ua[_]]+=g[_],this._residuals(e,M,t,r,a,u);for(let F=0;F<c;F++)f[_][F]=(u[F]-h[F])/g[_]}let y=new Float64Array(l*l),E=new Float64Array(l);for(let _=0;_<c;_++){let M=d[_];for(let F=0;F<l;F++){E[F]-=M*f[F][_]*h[_];for(let C=0;C<l;C++)y[F*l+C]+=M*f[F][_]*f[C][_]}}for(let _=0;_<l;_++){let M=.02*c*(p/b[_])**2;if(y[_*l+_]+=M,E[_]-=M*(x[ua[_]]-this.defaultFit[ua[_]]),s&&!s[_]){for(let F=0;F<l;F++)y[_*l+F]=0,y[F*l+_]=0;y[_*l+_]=1,E[_]=0}}let A=Uv(y,E,l);if(!A)break;for(let _=0;_<l;_++){let M=ua[_];x[M]=ei(x[M]+A[_],Nv[M][0],Nv[M][1])}}return x}_refinePose(e,t,i){let s=Dv,r=s.length,a=this._B||(this._B=new Float64Array(r*3)),o=this._wt||(this._wt=new Float64Array(r)),c=this._w,l=this.ref;for(let u=0;u<16;u++)i[u]=e[u];let h=this.headC;for(let u=0;u<2;u++){let d=0,f=0,g=0;for(let P=0;P<r;P++){let q=s[P];vr(this.fr,this.fit,l[q*3],l[q*3+1],l[q*3+2],c);let k=c[0]-h[0],Q=c[1]-h[1],W=c[2]-h[2],j=i[0]*k+i[4]*Q+i[8]*W,te=i[1]*k+i[5]*Q+i[9]*W,ye=i[2]*k+i[6]*Q+i[10]*W;mg(i,c[0],c[1],c[2],a,P*3);let Ve=Math.hypot(a[P*3],a[P*3+1],a[P*3+2])||1,Y=Math.hypot(j,te,ye)||1,pe=-(j*a[P*3]+te*a[P*3+1]+ye*a[P*3+2])/(Ve*Y);o[P]=ei((pe-.1)/.5,.06,1),d+=a[P*3],f+=a[P*3+1],g+=a[P*3+2]}d/=r,f/=r,g/=r;let b=this._A5||(this._A5=new Float64Array(25)),p=this._b5||(this._b5=new Float64Array(5)),m=this._Jx||(this._Jx=new Float64Array(5)),x=this._Jy||(this._Jy=new Float64Array(5));b.fill(0),p.fill(0);let w=0;for(let P=0;P<r;P++){let q=s[P],k=a[P*3],Q=a[P*3+1],W=a[P*3+2],j=-W,te=k-d,ye=Q-f,Ve=W-g,Y=k/j-t[q*2],pe=Q/j-t[q*2+1],Se=Math.hypot(Y,pe),Be=Se<=.012?1:.012/Se,ge=o[P]*Be,Xe=k/(j*j),Ot=Q/(j*j);m[0]=Xe*ye,x[0]=-Ve/j+Ot*ye,m[1]=Ve/j-Xe*te,x[1]=-Ot*te,m[2]=-ye/j,x[2]=te/j,m[3]=1/j,x[3]=0,m[4]=0,x[4]=1/j;for(let Pe=0;Pe<5;Pe++){p[Pe]-=ge*(m[Pe]*Y+x[Pe]*pe);for(let ct=0;ct<5;ct++)b[Pe*5+ct]+=ge*(m[Pe]*m[ct]+x[Pe]*x[ct])}w+=ge}let y=.004,E=w*(y/.052)**2,A=w*(y/1.5)**2;if(b[0]+=E,b[6]+=E,b[12]+=E,b[18]+=A,b[24]+=A,u>0){for(let P=0;P<3;P++)p[P]-=E*this._om[P];p[3]-=A*this._tau[0],p[4]-=A*this._tau[1]}else this._om=[0,0,0],this._tau=[0,0];let _=Uv(b,p,5);if(!_)break;let M=ei(_[0],-.12,.12),F=ei(_[1],-.12,.12),C=ei(_[2],-.12,.12),D=ei(_[3],-1.5,1.5),H=ei(_[4],-1.5,1.5);this._om[0]+=M,this._om[1]+=F,this._om[2]+=C,this._tau[0]+=D,this._tau[1]+=H;let V=Math.hypot(M,F,C),I=[1,0,0,0,1,0,0,0,1];if(V>1e-9){let P=M/V,q=F/V,k=C/V,Q=Math.cos(V),W=Math.sin(V),j=1-Q;I=[Q+P*P*j,P*q*j-k*W,P*k*j+q*W,q*P*j+k*W,Q+q*q*j,q*k*j-P*W,k*P*j-q*W,k*q*j+P*W,Q+k*k*j]}for(let P=0;P<4;P++){let q=i[P*4]-(P===3?d:0),k=i[P*4+1]-(P===3?f:0),Q=i[P*4+2]-(P===3?g:0);i[P*4]=I[0]*q+I[1]*k+I[2]*Q+(P===3?d+D:0),i[P*4+1]=I[3]*q+I[4]*k+I[5]*Q+(P===3?f+H:0),i[P*4+2]=I[6]*q+I[7]*k+I[8]*Q+(P===3?g:0)}}return i}residualStats(e,t,i){let s=[e[0],e[1]],r=[e[4],e[5]],a=Math.hypot(s[0],s[1])||1;s=[s[0]/a,s[1]/a],a=Math.hypot(r[0],r[1])||1,r=[r[0]/a,r[1]/a];let o=[0,0],c=0,l=0,h=0,u=0;for(let d of Dv){this._proj(e,this.fit,d,null,o);let f=o[0]-t[d*2],g=o[1]-t[d*2+1],b=(f*s[0]+g*s[1])*i,p=(f*r[0]+g*r[1])*i;c+=b,l+=p,h+=b*b+p*p,u++}return{dx:c/u,dy:l/u,rms:Math.sqrt(h/u)}}update(e,t,i,s,r){let a=this._obs||(this._obs=new Float64Array(956)),o=2*Lv*s,c=2*Lv,l=Math.min(e.length,478);for(let P=0;P<l;P++)a[P*2]=(e[P].x-.5)*o,a[P*2+1]=(.5-e[P].y)*c;let h=this.refine?this._refinePose(t,a,this._mref):t,u=this.fwd,d=[h[0]*u[0]+h[4]*u[1]+h[8]*u[2],h[1]*u[0]+h[5]*u[1]+h[9]*u[2],h[2]*u[0]+h[6]*u[1]+h[10]*u[2]],f=Math.hypot(h[12],h[13],h[14])||1,g=Math.hypot(d[0],d[1],d[2])||1,b=-(d[0]*h[12]+d[1]*h[13]+d[2]*h[14])/(f*g),p=Math.acos(ei(b,-1,1))/gg,m=-h[14],x=Math.hypot(a[336]-a[304],a[337]-a[305])||1e-6,w=Math.hypot(a[26]-a[28],a[27]-a[29])/x,y;i==null?y=w<.03:(this.minJawOpen=Math.min(this.minJawOpen+5e-4,i),y=i<Math.max(.07,this.minJawOpen+.04)&&w<.05);let E=this.adapt&&y&&p<40&&m>12&&m<150;if(E){let P=this._solveFit(h,a,this.fit,p<18?null:[!1,!0,!0]),q=this.fitSamples<12?.3:.06,k={...this.fit};for(let Q of ua)k[Q]=this.fit[Q]+q*(P[Q]-this.fit[Q]);this.fit=k,this.fitSamples++}let A=this._solveJaw(h,this.fit,a),_=Math.max(0,A.theta);y&&_<2.5&&(_=0);let M=_-this.theta;this.theta+=ei(.45+Math.abs(M)/6,.45,1)*M;let F=Math.cbrt(Math.abs(h[0]*(h[5]*h[10]-h[6]*h[9])-h[4]*(h[1]*h[10]-h[2]*h[9])+h[8]*(h[1]*h[6]-h[2]*h[5])))||1,C=pT(h,F),D=[h[12],h[13],h[14]],H=this.lastMs?r-this.lastMs:0;if(this.lastMs=r,!this.pose||H>400||H<0)this.pose={q:C,t:D,s:F};else{let P=this.pose,q=Math.abs(P.q[0]*C[0]+P.q[1]*C[1]+P.q[2]*C[2]+P.q[3]*C[3]),k=2*Math.acos(ei(q,0,1))/gg,Q=Math.hypot(D[0]-P.t[0],D[1]-P.t[1],D[2]-P.t[2])/Math.max(10,m)*100,W=ei(.35+k/2.5,.35,1),j=ei(.4+Q/1.2,.4,1);P.q=mT(P.q,C,W),P.t=[P.t[0]+j*(D[0]-P.t[0]),P.t[1]+j*(D[1]-P.t[1]),P.t[2]+j*(D[2]-P.t[2])],P.s=F}let I={pose:gT(this.pose.q,this.pose.t,this.pose.s,this._out||(this._out=new Float32Array(16))),theta:this.theta,thetaRaw:A.theta,fit:this.fit,closed:y,offAxis:p,depth:m,lipGap:w,jawCost:A.cost,adapting:E};return this.diagnostics&&(I.res=this.residualStats(h,a,m)),I}};var _T=new Set(["bone_frontal","bone_parietal_R","bone_parietal_L","bone_occipital","bone_temporal_R","bone_temporal_L","bone_sphenoid"]),kv={frontal_lobe:9418207,parietal_lobe:15190912,temporal_lobe:9948069,occipital_lobe:14982292,limbic:13481690,cerebellum:14204841,brainstem:12763855},yr={vault:.24,face:.27,teeth:.36,brain:.3},bT=`
varying vec3 vN; varying vec3 vV;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,xT=`
uniform vec3 uColor; uniform float uGain; uniform float uPower; uniform float uBase;
varying vec3 vN; varying vec3 vV;
void main(){
  float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  float i = (pow(f, uPower) + uBase) * uGain;
  gl_FragColor = vec4(uColor * i, i);
}`;function hd(n,e,t,i){return new Vn({uniforms:{uColor:{value:new Ue(n)},uGain:{value:e},uPower:{value:t},uBase:{value:i}},vertexShader:bT,fragmentShader:xT,transparent:!0,depthTest:!1,depthWrite:!1,side:qn,blending:rh,blendEquation:Ds,blendSrc:zr,blendDst:zr,blendSrcAlpha:zr,blendDstAlpha:zr})}var ud=class n{static async load(e,t){let i=new rd;i.setMeshoptDecoder(Pv);let s=await i.parseAsync(t,"");return new n(e,s.scene)}constructor(e,t){this.meta=e,this.fr=_g(e),this.fit={...ld},this.fitApplied=null,this.theta=0,this.style="solid",this.lobeColors=!1,this.root=new In,this.root.name="anatomy",this.root.matrixAutoUpdate=!1,this.cranium=new In,this.jaw=new In,this.jaw.matrixAutoUpdate=!1,this.root.add(this.cranium,this.jaw);let i=a=>new Or({color:15524556,specular:1841686,shininess:14,vertexColors:!0,...a});this.mat={vault:i({}),face:i({}),teeth:new Or({color:16513263,specular:5592405,shininess:70,vertexColors:!0}),brain:new Or({color:14721951,specular:4862e3,shininess:42,vertexColors:!0}),depth:new Si({colorWrite:!1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:2})};for(let a of["vault","face","teeth"])this.mat[a].depthFunc=sr;this.xmat={vault:hd(13625087,yr.vault,1.7,.04),face:hd(13625087,yr.face,1.6,.05),teeth:hd(16777215,yr.teeth,1.3,.12),brain:hd(16763064,yr.brain,1.4,.04)},this.meshes=[],this.brainTint=[];let s=[];t.updateMatrixWorld(!0),t.traverse(a=>{a.isMesh&&s.push(a)});let r=new O;for(let a of s){let o=a.name,c=o.startsWith("brain_")?"brain":o.includes("teeth")?"teeth":_T.has(o)?"vault":"face",l=a.geometry,h=l.getAttribute("position"),u=h.count,d=new Float32Array(u*3);for(let x=0;x<u;x++)r.fromBufferAttribute(h,x).applyMatrix4(a.matrixWorld),d[x*3]=r.x,d[x*3+1]=r.y,d[x*3+2]=r.z;let f=new gn;f.setIndex(l.getIndex()),f.setAttribute("position",new zt(d,3));let g=l.getAttribute("color");if(g){let x=new Float32Array(u*3);for(let w=0;w<u;w++){let y=g.getX(w);x[w*3]=y,x[w*3+1]=y,x[w*3+2]=y}f.setAttribute("color",new zt(x,3))}f.computeVertexNormals();let b=new $t(f,this.mat[c]);b.name=o,b.frustumCulled=!1;let p=null;if(c!=="brain")p=new $t(f,this.mat.depth),p.frustumCulled=!1,p.renderOrder=1,p.visible=!1,b.renderOrder=2;else{b.renderOrder=0;let x=Object.keys(kv).find(w=>o.includes(w));this.brainTint.push({mesh:b,tint:new Ue(kv[x]??14721951)})}let m=o.startsWith("jaw_")?this.jaw:this.cranium;m.add(b),p&&m.add(p),this.meshes.push({mesh:b,pre:p,kind:c,name:o,base:d.slice()})}this.vertexCount=this.meshes.reduce((a,o)=>a+o.base.length/3,0),this.setFit({...ld,...e.defaultFit||{}},!0),this.setJaw(0),this.setLayers({reveal:1,brain:0})}setFit(e,t=!1){let i=this.fitApplied;if(!t&&i&&Math.abs(i.sx-e.sx)<.0015&&Math.abs(i.sUp-e.sUp)<.0015&&Math.abs(i.sLow-e.sLow)<.0015&&Math.abs(i.ty-e.ty)<.008)return!1;this.fit={sx:e.sx,sUp:e.sUp,sLow:e.sLow,ty:e.ty};for(let s of this.meshes){let r=s.mesh.geometry.getAttribute("position");Ov(this.fr,this.fit,s.base,r.array),r.needsUpdate=!0}return this.fitApplied={...this.fit},this.jf=bg(this.meta,this.fr,this.fit),this.setJaw(this.theta),!0}setJaw(e){this.theta=e,this.jaw.matrix.fromArray(xg(this.jf,e)),this.jaw.matrixWorldNeedsUpdate=!0}setPose(e){this.root.matrix.fromArray(e),this.root.matrixWorldNeedsUpdate=!0}setStyle(e){if(e===this.style)return;this.style=e;let t=e==="xray";for(let i of this.meshes)i.mesh.material=t?this.xmat[i.kind]:i.kind==="brain"&&this.lobeColors&&i.mesh.userData.lobeMat||this.mat[i.kind];this.setLayers(this.layers)}setLobeColors(e){this.lobeColors=e;for(let{mesh:t,tint:i}of this.brainTint)t.userData.lobeMat||(t.userData.lobeMat=this.mat.brain.clone(),t.userData.lobeMat.color.copy(i)),this.style!=="xray"&&(t.material=e?t.userData.lobeMat:this.mat.brain)}setLayers(e){this.layers={...e};let t=e.brain,i=t>.004;for(let a of this.meshes)a.kind==="brain"&&(a.mesh.visible=i);if(this.style==="xray"){for(let a of this.meshes)a.pre&&(a.pre.visible=!1);this.xmat.vault.uniforms.uGain.value=yr.vault*(1-.72*t),this.xmat.face.uniforms.uGain.value=yr.face*(1-.45*t),this.xmat.teeth.uniforms.uGain.value=yr.teeth*(1-.3*t),this.xmat.brain.uniforms.uGain.value=yr.brain*t;return}let s={vault:1-.93*t,face:1-.55*t,teeth:1-.25*t};for(let a of["vault","face","teeth"]){let o=this.mat[a],c=s[a]<.995;o.transparent!==c&&(o.transparent=c,o.depthWrite=!c,o.needsUpdate=!0),o.opacity=s[a]}let r=i;for(let a of this.meshes)a.pre&&(a.pre.visible=r)}labelPoints(e){let t=this.meta.labels,i=[0,0,0],s=new O,r=new O,a=this.root.matrix,o=this._jw||(this._jw=new He);o.multiplyMatrices(a,this.jaw.matrix),e.length=0;for(let c of t){let l=c.group==="jaw"?o:a;vr(this.fr,this.fit,c.p[0],c.p[1],c.p[2],i),s.set(i[0],i[1],i[2]).applyMatrix4(l),r.set(c.n[0],c.n[1],c.n[2]).transformDirection(l);let h=s.length()||1,u=-(r.x*s.x+r.y*s.y+r.z*s.z)/h;e.push({label:c,x:s.x,y:s.y,z:s.z,facing:u})}return e}skinPoint(e,t){let i=this.meta.landmarks[e],s=[0,0,0];return vr(this.fr,this.fit,i[0],i[1],i[2],s),t.set(s[0],s[1],s[2]).applyMatrix4(this.root.matrix)}};var vT=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,yT=`
precision highp float;
uniform sampler2D tVideo; uniform sampler2D tAnat;
uniform vec4 uVideoUV;      // xy scale, zw offset: screen uv -> video uv ("cover" crop)
uniform float uReveal;      // 0 skin .. 1 anatomy
uniform float uXray;        // 0 solid style, 1 X-ray style
uniform int uRegion;        // 0 whole face, 1 one side of the facial midline, 2 lens
uniform vec3 uLine;         // midline in screen uv: a*x + b*y + c (signed distance in units of screen height)
uniform vec3 uLens;         // centre xy (screen uv), radius (fraction of screen height)
uniform float uAspect;
varying vec2 vUv;
vec3 toSRGB(vec3 c){ c = clamp(c, 0.0, 1.0); return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c)); }
void main(){
  vec3 vid = texture2D(tVideo, vUv * uVideoUV.xy + uVideoUV.zw).rgb;
  vec4 an = texture2D(tAnat, vUv);
  float mask = 1.0, ring = 0.0;
  if (uRegion == 1) {
    float d = uLine.x * vUv.x * uAspect + uLine.y * vUv.y + uLine.z;
    mask = smoothstep(-0.004, 0.004, d);
  } else if (uRegion == 2) {
    float r = length((vUv - uLens.xy) * vec2(uAspect, 1.0));
    mask = 1.0 - smoothstep(uLens.z - 0.012, uLens.z, r);
    ring = smoothstep(uLens.z - 0.004, uLens.z, r) * (1.0 - smoothstep(uLens.z, uLens.z + 0.006, r));
  }
  float g = uReveal * mask;
  vec3 col;
  if (uXray > 0.5) {
    float lum = dot(vid, vec3(0.299, 0.587, 0.114));
    vec3 film = mix(vid, vec3(lum) * vec3(0.55, 0.68, 0.9), 0.85) * 0.42;      // dim, cool backdrop
    vec3 base = mix(vid, film, g);
    vec3 glow = toSRGB(1.0 - exp(-an.rgb * 1.15));
    col = base + glow * g;
  } else {
    float a = clamp(an.a, 0.0, 1.0);
    vec3 c = toSRGB(an.rgb / max(a, 1e-4));
    col = mix(vid, c, a * g);
  }
  col = mix(col, vec3(1.0), ring * 0.85);
  gl_FragColor = vec4(col, 1.0);
}`,da=[{pixels:2e6,samples:4,video:1280},{pixels:125e4,samples:4,video:960},{pixels:8e5,samples:2,video:720}],dd=class{constructor(e){this.canvas=e;let t=this.renderer=new Zh({canvas:e,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});t.autoClear=!1,t.setClearColor(0,0),this.gl2=t.capabilities.isWebGL2!==!1,this.scene=new Ua,this.camera=new sn(63,4/3,1,600),this.scene.add(new lc(16777215,10129280,1.55));let i=new cr(16774890,2.5);i.position.set(-.45,.9,1),this.scene.add(i);let s=new cr(14543103,.7);s.position.set(.9,-.2,.6),this.scene.add(s),this.quality=0,this.rt=this._makeTarget(),this.frame=document.createElement("canvas"),this.frame.width=16,this.frame.height=16,this.fctx=this.frame.getContext("2d",{alpha:!1}),this.vtex=new nc(this.frame),this.vtex.colorSpace=Bi,this.vtex.generateMipmaps=!1,this.vtex.minFilter=Dt,this.vtex.magFilter=Dt,this.u={tVideo:{value:this.vtex},tAnat:{value:this.rt.texture},uVideoUV:{value:new _t(1,1,0,0)},uReveal:{value:1},uXray:{value:0},uRegion:{value:0},uLine:{value:new O(1,0,-.5)},uLens:{value:new O(.5,.5,.2)},uAspect:{value:1}};let r=new gn;r.setAttribute("position",new zt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),r.setAttribute("uv",new zt(new Float32Array([0,0,2,0,0,2]),2));let a=new $t(r,new Vn({uniforms:this.u,vertexShader:vT,fragmentShader:yT,depthTest:!1,depthWrite:!1}));a.frustumCulled=!1,this.post=new Ua,this.post.add(a),this.postCam=new Ps(-1,1,1,-1,0,1),this.videoW=0,this.videoH=0,this.cssW=0,this.cssH=0,this.faceVisible=!1,this.cover={k:1,ox:0,oy:0}}add(e){this.scene.add(e)}_makeTarget(){let e=this.renderer,t=e.extensions.has("EXT_color_buffer_half_float")||e.extensions.has("EXT_color_buffer_float"),i=da[this.quality].samples,s=[];t&&s.push([Xn,i]),s.push([xn,i],[xn,0]);for(let r=0;r<s.length;r++){let[a,o]=s[r],c=new Dn(8,8,{samples:o,depthBuffer:!0,stencilBuffer:!1,type:a,minFilter:Dt,magFilter:Dt,generateMipmaps:!1});if(r===s.length-1||this._targetWorks(c))return this.targetInfo=(a===Xn?"f16":"u8")+(o?" x"+o:""),c;c.dispose()}return null}_targetWorks(e){let t=this.renderer,i=t.getContext();try{for(let o=0;o<8&&i.getError()!==i.NO_ERROR;o++);t.setRenderTarget(e),t.clear(!0,!0,!1);let s=t.properties.get(e),r=[s.__webglMultisampledFramebuffer,s.__webglFramebuffer].filter(Boolean),a=r.length>0;for(let o of r)t.state.bindFramebuffer(i.FRAMEBUFFER,o),a=a&&i.checkFramebufferStatus(i.FRAMEBUFFER)===i.FRAMEBUFFER_COMPLETE;return a&&i.getError()===i.NO_ERROR}catch{return!1}finally{t.setRenderTarget(null)}}get maxQuality(){return da.length-1}setQuality(e){if(e=Math.max(0,Math.min(da.length-1,e)),e===this.quality)return!1;let t=da[e].samples!==da[this.quality].samples;if(this.quality=e,t){let i=this.rt;this.rt=this._makeTarget(),this.u.tAnat.value=this.rt.texture,i.dispose()}return this.layout(),!0}grab(e){let t=e.videoWidth,i=e.videoHeight;if(!t||!i)return!1;let s=da[this.quality].video,r=Math.min(1,s/Math.max(t,i)),a=Math.round(t*r),o=Math.round(i*r);return(this.frame.width!==a||this.frame.height!==o)&&(this.frame.width=a,this.frame.height=o,this.vtex.dispose()),this.fctx.drawImage(e,0,0,a,o),this.vtex.needsUpdate=!0,(a!==this.videoW||o!==this.videoH)&&(this.videoW=a,this.videoH=o,this.layout()),!0}layout(){let e=this.canvas,t=e.clientWidth||1,i=e.clientHeight||1;this.cssW=t,this.cssH=i;let s=Math.min(window.devicePixelRatio||1,2),r=da[this.quality].pixels;t*i*s*s>r&&(s=Math.sqrt(r/(t*i)));let a=Math.max(2,Math.round(t*s)),o=Math.max(2,Math.round(i*s));if(this.renderer.setPixelRatio(1),this.renderer.setSize(a,o,!1),this.rt.setSize(a,o),this.u.uAspect.value=a/o,!this.videoW)return;let c=this.videoW,l=this.videoH,h=Math.max(a/c,o/l),u=c*h,d=l*h,f=(u-a)/2,g=(d-o)/2;this.camera.aspect=c/l,this.camera.setViewOffset(u,d,f,g,a,o),this.camera.updateProjectionMatrix(),this.u.uVideoUV.value.set(a/u,o/d,f/u,g/d),this.cover={k:h/s,ox:f/s,oy:g/s,pr:s}}toScreen(e,t,i,s){let r=this.videoH/2/Math.tan(63*Math.PI/360),a=this.videoW/2+r*e/-i,o=this.videoH/2-r*t/-i;return s.x=a*this.cover.k-this.cover.ox,s.y=o*this.cover.k-this.cover.oy,s}setReveal(e){this.u.uReveal.value=e}setXray(e){this.u.uXray.value=e?1:0}setRegion(e){this.u.uRegion.value=e}setMidline(e,t,i,s,r){let a=this.cssH||1,o=e/a,c=1-t/a,l=i/a,u=-(1-s/a-c),d=l-o,f=Math.hypot(u,d)||1;u=u/f*r,d=d/f*r,this.u.uLine.value.set(u,d,-(u*o+d*c))}setLens(e,t,i){let s=this.cssH||1;this.u.uLens.value.set(e/(this.cssW||1),1-t/s,i/s)}render(){let e=this.renderer;e.setRenderTarget(this.rt),e.setClearColor(0,0),e.clear(!0,!0,!1),this.faceVisible&&this.u.uReveal.value>.002&&e.render(this.scene,this.camera),e.setRenderTarget(null),e.render(this.post,this.postCam)}};var zv='600 12.5px -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic UI", "Segoe UI", sans-serif',fd=class{constructor(e){this.c=e,this.g=e.getContext("2d"),this.state=new Map,this.pick=new Map,this.widths=new Map,this.w=0,this.h=0,this.dpr=1}resize(){let e=this.c.clientWidth||1,t=this.c.clientHeight||1,i=Math.min(window.devicePixelRatio||1,2);e===this.w&&t===this.h&&i===this.dpr||(this.w=e,this.h=t,this.dpr=i,this.c.width=Math.round(e*i),this.c.height=Math.round(t*i))}_tw(e){let t=this.widths.get(e);return t===void 0&&(this.g.font=zv,t=this.g.measureText(e).width,this.widths.set(e,t)),t}clear(){this.g.setTransform(1,0,0,1,0,0),this.g.clearRect(0,0,this.c.width,this.c.height)}draw(e,t){let i=this.g,s=this.w,r=this.h;this.clear(),i.setTransform(this.dpr,0,0,this.dpr,0,0),i.font=zv,i.textBaseline="middle";let a=new Map;if(t.active){let h=new Map;for(let u of e){let d=u.label;if(!t.layers[d.layer]||!u.front||d.minBrain&&t.brain<d.minBrain||u.sx<4||u.sy<4||u.sx>s-4||u.sy>r-4||t.mask&&!t.mask(u.sx,u.sy))continue;let f=d.pair||d.id,g=this.pick.get(f)===d.id?.12:0;if(u.facing+g<(d.minFacing||.24))continue;let b=h.get(f);(!b||u.facing+g>b.score)&&h.set(f,{it:u,score:u.facing+g})}for(let[u,d]of h)this.pick.set(u,d.it.label.id),a.set(d.it.label.id,d.it)}let o=[],c=[...a.values()].sort((h,u)=>h.sy-u.sy),l=h=>o.some(u=>h.x<u.x+u.w+4&&h.x+h.w+4>u.x&&h.y<u.y+u.h+3&&h.y+h.h+3>u.y);for(let h of c){let u=h.label,d=t.lang==="en"?u.en:u.ja,f=t.mirrored?s-h.sx:h.sx,g=h.sy,b=t.mirrored?s-t.cx:t.cx,p=f-b,m=g-t.cy,x=Math.hypot(p,m)||1;p/=x,m/=x;let w=this._tw(d)+16,y=22,E=this.state.get(u.id),A=E&&E.a>.3?E.side:p>=0?1:-1,_=null;for(let M of[30,46,64]){for(let F of[0,-1,1,-2,2,-3,3,-4,4]){let C=f+p*M*.9+A*8,D=g+m*M*.7+F*13,V={x:Math.min(Math.max(A>0?C:C-w,6),Math.max(6,s-6-w)),y:D-y/2,w,h:y};if(!(V.y<6||V.y+V.h>r-6)&&!(f>V.x-7&&f<V.x+V.w+7&&g>V.y-7&&g<V.y+V.h+7)&&!l(V)){_=V;break}}if(_)break}if(!_){a.delete(u.id);continue}o.push(_),h.box=_,h.ax=f,h.ay=g,h.text=d,h.side=A}for(let[h,u]of a){let d=this.state.get(h);d||(d={x:u.box.x,y:u.box.y,ax:u.ax,ay:u.ay,a:0,side:u.side,w:u.box.w,h:u.box.h,text:u.text},this.state.set(h,d));let f=d.a<.05?1:.35;d.x+=(u.box.x-d.x)*f,d.y+=(u.box.y-d.y)*f,d.ax=u.ax,d.ay=u.ay,d.side=u.side,d.w=u.box.w,d.h=u.box.h,d.text=u.text,d.a=Math.min(1,d.a+.16)}for(let[h,u]of this.state){if(!a.has(h)&&(u.a-=.2,u.a<=0)){this.state.delete(h);continue}let d=u.a,f,g;u.ax<u.x?(f=u.x,g=u.y+u.h/2):u.ax>u.x+u.w?(f=u.x+u.w,g=u.y+u.h/2):(f=Math.min(Math.max(u.ax,u.x+11),u.x+u.w-11),g=u.ay<u.y?u.y:u.y+u.h),i.globalAlpha=d,i.lineWidth=3,i.strokeStyle="rgba(8,12,18,0.55)",i.beginPath(),i.moveTo(u.ax,u.ay),i.lineTo(f,g),i.stroke(),i.lineWidth=1.25,i.strokeStyle="rgba(255,255,255,0.95)",i.beginPath(),i.moveTo(u.ax,u.ay),i.lineTo(f,g),i.stroke(),i.fillStyle="rgba(8,12,18,0.6)",i.beginPath(),i.arc(u.ax,u.ay,4.2,0,6.2832),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(u.ax,u.ay,2.6,0,6.2832),i.fill(),i.fillStyle="rgba(14,19,27,0.78)";let b=u.h/2;i.beginPath(),i.moveTo(u.x+b,u.y),i.lineTo(u.x+u.w-b,u.y),i.arc(u.x+u.w-b,u.y+b,b,-1.5708,1.5708),i.lineTo(u.x+b,u.y+u.h),i.arc(u.x+b,u.y+b,b,1.5708,4.7124),i.closePath(),i.fill(),i.fillStyle="#fff",i.textAlign="left",i.fillText(u.text,u.x+8,u.y+u.h/2+.5)}i.globalAlpha=1}};async function Gv(n,e,t){let i=await fetch(n);if(!i.ok)throw new Error(`${n} \u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F (HTTP ${i.status})`);let s=e||Number(i.headers.get("content-length"))||0;if(!i.body||!i.body.getReader){let h=new Uint8Array(await i.arrayBuffer());return t&&t(h.length,h.length),h}let r=i.body.getReader(),a=[],o=0;for(;;){let{done:h,value:u}=await r.read();if(h)break;a.push(u),o+=u.length,t&&t(o,Math.max(s,o))}let c=new Uint8Array(o),l=0;for(let h of a)c.set(h,l),l+=h.length;return c}var Io={version:"db4d9fa775",sizes:{wasm:14665716,model:3758596,glb:1123104,json:18309}};var Ct=n=>document.getElementById(n),pa=new URLSearchParams(location.search),Hv=n=>(n=Math.min(1,Math.max(0,n)),n*n*(3-2*n)),wg=Number(pa.get("debug")||0),Sg=!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches),re={stage:Ct("stage"),gl:Ct("gl"),labels:Ct("labels"),video:Ct("cam"),start:Ct("start"),btnStart:Ct("btnStart"),bar:Ct("bar"),startNote:Ct("startNote"),startErr:Ct("startErr"),depth:Ct("depth"),btnFlip:Ct("btnFlip"),btnInfo:Ct("btnInfo"),btnLabel:Ct("btnLabel"),btnShot:Ct("btnShot"),info:Ct("info"),btnInfoClose:Ct("btnInfoClose"),toast:Ct("toast"),debug:Ct("debug"),version:Ct("version"),side:Ct("side"),dock:Ct("dock"),card:Ct("card"),engine:Ct("engine"),btnEngine:Ct("btnEngine"),engineRow:Ct("engineRow")},U={phase:"idle",depth:0,depthTarget:.5,intro:!0,region:"whole",halfSide:1,style:"solid",lang:"off",lens:null,present:!1,lastSeen:0,fade:0,lostToastAt:0,clean:!1,mirrored:!0,fps:0,frames:0,fpsT:0,last:null,pending:!1,vfc:0,frameAt:0,runSince:0,poll:!1,stallTime:-1,q:{n:0,sum:0,trial:!1,before:0,done:!1}},Ce,Sn,ti,It,Li,js,tl=null,Vv="",vg=[],fa=new O,fi={x:0,y:0},nl={x:0,y:0},il={x:0,y:0},Wv=0;function Ks(n,e=2600){re.toast.textContent=n,re.toast.classList.add("on"),clearTimeout(Wv),Wv=setTimeout(()=>re.toast.classList.remove("on"),e)}function Eg(n){let e=n&&n.name;return window.isSecureContext?e==="NotAllowedError"||e==="SecurityError"?"\u30AB\u30E1\u30E9\u306E\u4F7F\u7528\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u30D6\u30E9\u30A6\u30B6\u306E\u8A2D\u5B9A\u3067\u3053\u306E\u30DA\u30FC\u30B8\u306E\u30AB\u30E1\u30E9\u3092\u300C\u8A31\u53EF\u300D\u306B\u3057\u3066\u3001\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002LINE \u306A\u3069\u306E\u30A2\u30D7\u30EA\u5185\u30D6\u30E9\u30A6\u30B6\u3067\u306F\u30AB\u30E1\u30E9\u3092\u4F7F\u3048\u306A\u3044\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u5834\u5408\u306F Safari \u304B Chrome \u3067\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002":e==="NotFoundError"||e==="OverconstrainedError"||e==="NotSupportedError"?"\u30AB\u30E1\u30E9\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u30AB\u30E1\u30E9\u4ED8\u304D\u306E\u7AEF\u672B\u3067\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002":e==="NotReadableError"||e==="AbortError"?"\u30AB\u30E1\u30E9\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u307B\u304B\u306E\u30A2\u30D7\u30EA\u304C\u30AB\u30E1\u30E9\u3092\u4F7F\u3063\u3066\u3044\u306A\u3044\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u30AB\u30E1\u30E9\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F\u3002\uFF08"+(n&&n.message?n.message:e||"\u4E0D\u660E\u306A\u30A8\u30E9\u30FC")+"\uFF09":"\u3053\u306E\u30DA\u30FC\u30B8\u306F https \u3067\u958B\u3044\u305F\u3068\u304D\u3060\u3051\u30AB\u30E1\u30E9\u3092\u4F7F\u3048\u307E\u3059\u3002"}function ST(){try{return typeof WebAssembly=="object"&&WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]))}catch{return!1}}function Ag(){if(tl)return tl;let n="?v="+Io.version,e="skull/",t=Io.sizes,i=t.wasm+t.model+t.glb+t.json,s={wasm:0,model:0,glb:0,json:0},r=l=>h=>{s[l]=h,re.bar.style.transform=`scaleX(${Math.min(1,.03+.97*(s.wasm+s.model+s.glb+s.json)/i).toFixed(3)})`},a=(l,h)=>Gv(e+h+n,t[l],r(l)),o=Promise.all([a("json","anatomy.json"),a("glb","anatomy.glb")]).then(([l,h])=>({meta:JSON.parse(new TextDecoder().decode(l)),glb:h})),c=Promise.all([o,a("wasm","mp/vision_wasm_internal.wasm"),a("model","mp/face_landmarker.task")]).then(([l,h,u])=>({...l,wasm:h,model:u}));return tl={core:o,all:c},c.catch(()=>{tl=null}),o.catch(()=>{}),tl}async function MT(){try{let n=new Image;n.src="skull/selftest.jpg?v="+Io.version,await n.decode();let e=document.createElement("canvas");return e.width=n.naturalWidth,e.height=n.naturalHeight,e.getContext("2d").drawImage(n,0,0),e}catch{return null}}function Xv(){ti&&(re.engine.textContent=ti.delegate==="GPU"?"GPU\uFF08\u901F\u3044\uFF09":"CPU\uFF08\u78BA\u5B9F\uFF09",re.btnEngine.textContent=ti.delegate==="GPU"?"CPU \u306B\u5207\u308A\u66FF\u3048\u308B":"GPU \u306B\u5207\u308A\u66FF\u3048\u308B",re.engineRow.hidden=!1)}async function wT(){if(!ti||U.switching)return;U.switching=!0,re.btnEngine.disabled=!0;let n=U.phase;n==="running"&&(U.phase="paused");let e=ti.delegate==="GPU"?"CPU":"GPU";try{await ti.use(e),Ks("\u9854\u306E\u8AAD\u307F\u53D6\u308A\u3092 "+e+" \u306B\u5207\u308A\u66FF\u3048\u307E\u3057\u305F")}catch(t){console.warn(t);try{await ti.use(e==="GPU"?"CPU":"GPU")}catch{}Ks(e+" \u306F\u3001\u3053\u306E\u7AEF\u672B\u3067\u306F\u4F7F\u3048\u307E\u305B\u3093\u3067\u3057\u305F")}Xv(),Li&&Li.reset(),U.switching=!1,re.btnEngine.disabled=!1,n==="running"&&(U.phase="running",U.runSince=U.frameAt=performance.now(),Sr())}async function jv(){if(It)return;let n=await Ag().core;It||(Ce||(Ce=new dd(re.gl),js=new fd(re.labels)),It=await ud.load(n.meta,n.glb.buffer.slice(n.glb.byteOffset,n.glb.byteOffset+n.glb.byteLength)),Li=new cd(n.meta,{adapt:pa.get("adapt")!=="0",refine:pa.get("refine")!=="0"}),Li.diagnostics=wg>=1,Ce.add(It.root))}var pi={on:!1,m:new He,up:new He,r:new He,c:new He,t0:0};function Kv(n){if(!pi.on||U.phase==="running"){pi.on=!1;return}let e=(n-pi.t0)/1e3,t=Ce.cssW,i=Ce.cssH,s=t>=860,r=It.meta.bounds,a=(r.min[0]+r.max[0])/2,o=(r.min[1]+r.max[1])/2,c=(r.min[2]+r.max[2])/2,l,h,u;if(s)l=t*.69,h=i*.5,u=Math.min(i*.64,t*.38);else{let x=Math.max(0,re.card.getBoundingClientRect().top-56);l=t/2,h=56+x/2,u=Math.min(x*.94,t*.66)}let d=Math.tan(63*Math.PI/360),f=Math.max(t,i),g=(r.max[1]-r.min[1])*1.12,b=u>90?g*f/(2*d*u):0,p=(Sg?.45:.45+.5*Math.sin(e*.45))*(s?-1:1);pi.r.makeRotationY(p),pi.m.makeTranslation((l-t/2)/(f/2)*d*b,-(h-i/2)/(f/2)*d*b,-b).multiply(pi.r).multiply(pi.up).multiply(pi.c.makeTranslation(-a,-o,-c)),It.setPose(pi.m.elements),It.setJaw(Sg?0:5+5*Math.sin(e*.9-1)),It.setLayers({reveal:1,brain:0}),Ce.faceVisible=b>0,Ce.setReveal(Math.min(1,e/1.2)),Ce.setRegion(0),Ce.render(),requestAnimationFrame(Kv)}async function ET(){try{if(await jv(),U.phase!=="idle"&&U.phase!=="error")return;let n=Ce.frame;n.width=64,n.height=64;let e=Ce.fctx.createRadialGradient(32,26,2,32,30,44);e.addColorStop(0,"#1b2a3b"),e.addColorStop(1,"#0a1018"),Ce.fctx.fillStyle=e,Ce.fctx.fillRect(0,0,64,64),Ce.vtex.dispose(),Ce.vtex.needsUpdate=!0,Ce.videoW=64,Ce.videoH=64,Ce.layout();let t=It.meta.alignment,i=Math.cbrt(new We().set(t[0][0],t[0][1],t[0][2],t[1][0],t[1][1],t[1][2],t[2][0],t[2][1],t[2][2]).determinant());pi.up.set(t[0][0]/i,t[1][0]/i,t[2][0]/i,0,t[0][1]/i,t[1][1]/i,t[2][1]/i,0,t[0][2]/i,t[1][2]/i,t[2][2]/i,0,0,0,0,1),re.gl.classList.remove("mirror"),pi.on=!0,pi.t0=performance.now(),requestAnimationFrame(Kv)}catch(n){console.warn("preview",n)}}async function Yv(){if(!(U.phase==="loading"||U.phase==="running")){U.phase="loading",re.startErr.hidden=!0,re.start.classList.add("busy"),re.btnStart.disabled=!0,re.startNote.textContent="\u6E96\u5099\u3057\u3066\u3044\u307E\u3059\u2026";try{if(!ST())throw Object.assign(new Error("WebAssembly SIMD is unavailable"),{old:!0});let n=pa.get("src"),e;if(n)Sn=null,re.video.src=n,re.video.loop=!0,re.video.muted=!0,re.video.playsInline=!0,e=re.video.play().catch(()=>{}),U.mirrored=pa.get("mirror")==="1";else{if(!Tc.supported())throw Object.assign(new Error("getUserMedia is unavailable"),{name:window.isSecureContext?"NotFoundError":"SecurityError",camera:!0});Sn&&Sn.stop(),Sn=new Tc(re.video),e=Sn.start("user"),e.catch(()=>{})}await jv();let t=await Ag().all;if(!ti){Vv=URL.createObjectURL(new Blob([t.wasm],{type:"application/wasm"}));let i=(pa.get("delegate")||"").toUpperCase();ti=await sd.create({wasmLoaderPath:"skull/mp/vision_wasm_internal.js?v="+Io.version,wasmBinaryPath:Vv,model:t.model,delegate:i==="CPU"||i==="GPU"?i:void 0,testImage:await MT()}),Xv()}re.bar.style.transform="scaleX(1)",re.startNote.textContent="\u30AB\u30E1\u30E9\u306E\u8A31\u53EF\u3092\u5F85\u3063\u3066\u3044\u307E\u3059\u2026";try{await e}catch(i){throw i.camera=!0,i}Sn&&(U.mirrored=Sn.mirrored),Tg(),pi.on=!1,Li.reset(),U.phase="running",document.body.classList.add("running"),re.start.classList.remove("busy"),re.start.hidden=!0,U.depth=0,U.depthTarget=.5,U.intro=!0,U.present=!1,U.fade=0,U.runSince=U.frameAt=performance.now(),pd(),Sr(),$v()}catch(n){console.error(n),U.phase="error",re.start.classList.remove("busy"),re.btnStart.disabled=!1,re.startNote.textContent="",re.startErr.textContent=n&&n.camera?Eg(n):n&&n.old?"\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093\u3002iPhone\u30FBiPad \u306F iOS 16.4 \u4EE5\u964D\u3001\u30D1\u30BD\u30B3\u30F3\u3068 Android \u306F\u6700\u65B0\u306E Chrome\u30FBEdge\u30FBSafari\u30FBFirefox \u3067\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":/webgl/i.test(String(n&&n.message))?"\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u3067\u306F3D\u8868\u793A\uFF08WebGL\uFF09\u3092\u4F7F\u3048\u306A\u3044\u305F\u3081\u3001\u8868\u793A\u3067\u304D\u307E\u305B\u3093\u3002\u5225\u306E\u30D6\u30E9\u30A6\u30B6\u304B\u7AEF\u672B\u3067\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u6E96\u5099\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u901A\u4FE1\u74B0\u5883\u3092\u78BA\u8A8D\u3057\u3066\u3001\u30DA\u30FC\u30B8\u3092\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002\uFF08"+(n&&n.message?n.message:n)+"\uFF09",re.startErr.hidden=!1,re.btnStart.textContent="\u3082\u3046\u4E00\u5EA6\u8A66\u3059"}}}var sl=null;async function $v(){if(!(sl||!navigator.wakeLock||document.hidden||U.phase!=="running"))try{sl=await navigator.wakeLock.request("screen"),sl.addEventListener("release",()=>{sl=null})}catch{sl=null}}function AT(){let n=document,e=n.documentElement;try{if(n.fullscreenElement||n.webkitFullscreenElement)(n.exitFullscreen||n.webkitExitFullscreen).call(n);else{let t=e.requestFullscreen||e.webkitRequestFullscreen;if(t){let i=t.call(e);i&&i.catch&&i.catch(()=>{})}}}catch{}}function Sr(){if(U.phase!=="running"||U.manual||U.pending)return;U.pending=!0;let n=re.video;n.requestVideoFrameCallback&&!U.poll?U.vfc=n.requestVideoFrameCallback(()=>{U.pending=!1,U.vfc=0,Mg()}):requestAnimationFrame(()=>{U.pending=!1,n.currentTime!==U.lastTime?(U.lastTime=n.currentTime,Mg()):Sr()})}function TT(){if(U.phase!=="running"||U.manual||document.hidden||performance.now()-U.frameAt<1500)return;let n=re.video;if(U.vfc&&n.cancelVideoFrameCallback)try{n.cancelVideoFrameCallback(U.vfc)}catch{}U.pending=!1,U.vfc=0,n.paused&&(n.srcObject||n.src)?n.play().catch(()=>{}):n.requestVideoFrameCallback&&!U.poll&&n.currentTime!==U.stallTime&&U.stallTime>=0&&(U.poll=!0),U.stallTime=n.currentTime,Sr()}function RT(n){let e=U.q;if(e.done||U.manual||!U.present||n-U.runSince<4e3){e.n=0,e.sum=0;return}if(e.sum+=U.fps,e.n++,e.n<3)return;let t=e.sum/e.n;if(e.n=0,e.sum=0,e.trial&&(e.trial=!1,t<e.before*1.15)){Ce.setQuality(Ce.quality-1),e.done=!0;return}t<17&&Ce.quality<Ce.maxQuality&&(e.before=t,e.trial=!0,Ce.setQuality(Ce.quality+1))}function CT(n){return{reveal:Hv(n/.42),brain:Hv((n-.56)/.4)}}function Mg(){if(U.phase!=="running")return;let n=performance.now();U.frameAt=n,U.stallTime=-1;let e=null;if(Ce.grab(re.video))try{e=ti.detect(Ce.frame,n)}catch(r){console.warn("tracker",r),U.phase="recovering",ti.recover().then(a=>{a?(U.phase="running",Sr()):qv("\u9854\u306E\u8FFD\u8DE1\u3092\u7D9A\u3051\u3089\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002")},()=>qv("\u9854\u306E\u8FFD\u8DE1\u3092\u7D9A\u3051\u3089\u308C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u958B\u304D\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002"));return}if(e){let r=Li.update(e.lm,e.mat,e.jawOpen,Ce.videoW/Ce.videoH,n);It.setFit(r.fit),It.setJaw(r.theta),It.setPose(r.pose),U.present=!0,U.lastSeen=n,U.last=r,U.lastDet=e}else n-U.lastSeen>220&&(U.present&&(Li.pose=null),U.present=!1);!U.present&&n-U.lastSeen>2500&&n-U.lostToastAt>9e3&&(U.lostToastAt=n,Ks("\u9854\u304C\u6620\u308B\u3068\u8868\u793A\u3055\u308C\u307E\u3059")),U.present&&U.intro?U.depth+=(U.depthTarget-U.depth)*(Sg?1:.07):U.intro||(U.depth+=(U.depthTarget-U.depth)*.35),U.intro&&Math.abs(U.depth-U.depthTarget)<.004&&(U.intro=!1),U.fade+=((U.present?1:0)-U.fade)*.3;let t=CT(U.depth);It.setLayers(t),Ce.faceVisible=U.fade>.01,Ce.setReveal(t.reveal*U.fade);let i=null;if(Ce.faceVisible){if(Ce.toScreen(...yg(It.skinPoint(1,fa)),il),U.region==="half"){Ce.toScreen(...yg(It.skinPoint(9,fa)),fi),Ce.toScreen(...yg(It.skinPoint(2,fa)),nl),Ce.setMidline(fi.x,fi.y,nl.x,nl.y,U.halfSide);let r=fi.x,a=fi.y,o=nl.x-fi.x,c=nl.y-fi.y,l=U.halfSide;i=(h,u)=>l*(c*(h-r)-o*(u-a))>0}else if(U.region==="lens"){U.lens||(U.lens={x:il.x,y:il.y,r:Math.min(Ce.cssW,Ce.cssH)*.21});let r=U.lens.x,a=U.lens.y,o=U.lens.r*.96;Ce.setLens(r,a,U.lens.r),i=(c,l)=>Math.hypot(c-r,l-a)<o}}Ce.setRegion(U.region==="half"?1:U.region==="lens"?2:0),Ce.render(),js.resize();let s=U.lang!=="off"&&Ce.faceVisible&&U.fade>.6;if(s){It.labelPoints(vg);for(let r of vg)Ce.toScreen(r.x,r.y,r.z,fi),r.sx=fi.x,r.sy=fi.y,r.front=r.z<-1}js.draw(s?vg:[],{active:s,lang:U.lang,mirrored:U.mirrored,cx:il.x,cy:il.y,mask:i,brain:t.brain,layers:{bone:t.reveal>.6&&t.brain<.5,teeth:t.reveal>.6&&t.brain<.5,brain:t.brain>=.5}}),wg>=2&&U.present&&U.lastDet&&IT(),U.frames++,n-U.fpsT>1e3&&(U.fps=U.frames*1e3/(n-U.fpsT),U.frames=0,U.fpsT=n,re.debug.hidden||PT(),RT(n)),Sr()}function yg(n){return[n.x,n.y,n.z]}function IT(){let n=js.g,e=js.w,t=U.lastDet.lm;n.setTransform(js.dpr,0,0,js.dpr,0,0);let i=s=>U.mirrored?e-s:s;n.fillStyle="rgba(60,255,120,0.9)";for(let s=0;s<468;s+=1){let r=t[s].x*Ce.videoW*Ce.cover.k-Ce.cover.ox,a=t[s].y*Ce.videoH*Ce.cover.k-Ce.cover.oy;n.fillRect(i(r)-1,a-1,2,2)}n.fillStyle="rgba(255,70,220,0.9)";for(let s=0;s<468;s+=1)It.skinPoint(s,fa),Ce.toScreen(fa.x,fa.y,fa.z,fi),n.fillRect(i(fi.x)-1,fi.y-1,2,2)}function qv(n){U.phase="error",document.body.classList.remove("running"),re.start.hidden=!1,re.startErr.textContent=n,re.startErr.hidden=!1,re.btnStart.disabled=!1,re.btnStart.textContent="\u3082\u3046\u4E00\u5EA6\u8A66\u3059"}function PT(){let n=U.last;re.debug.textContent=[`fps ${U.fps.toFixed(1)}  tracker ${ti.delegate}${ti.tested?"+":""}  video ${Ce.videoW}x${Ce.videoH}  buffer ${re.gl.width}x${re.gl.height} ${Ce.targetInfo} q${Ce.quality}`,n?`jaw ${n.theta.toFixed(1)}\xB0 (raw ${n.thetaRaw.toFixed(1)})  closed ${n.closed?1:0}  offAxis ${n.offAxis.toFixed(0)}\xB0  depth ${n.depth.toFixed(0)}cm`:"no face",n?`fit sx ${n.fit.sx.toFixed(3)} sUp ${n.fit.sUp.toFixed(3)} sLow ${n.fit.sLow.toFixed(3)}  samples ${Li.fitSamples}${n.adapting?" *":""}${n.res?`  res ${n.res.dx.toFixed(2)},${n.res.dy.toFixed(2)} rms ${n.res.rms.toFixed(2)}cm`:""}`:""].join(`
`)}function Tg(){re.gl.classList.toggle("mirror",U.mirrored),re.side.classList.toggle("at-right",U.mirrored),re.side.classList.toggle("at-left",!U.mirrored)}function pd(){Ce&&(Ce.layout(),U.lens=null),js&&js.resize(),re.dock.offsetHeight&&document.documentElement.style.setProperty("--dock-h",re.dock.offsetHeight+"px")}function Rg(n){re.depth.style.setProperty("--fill",(n*100).toFixed(1)+"%")}function Jv(n){n==="half"&&U.region==="half"&&(U.halfSide=-U.halfSide),U.region=n,U.lens=null;for(let e of document.querySelectorAll("[data-region]"))e.setAttribute("aria-pressed",String(e.dataset.region===n));n==="lens"&&Ks("\u6307\u3067\u306A\u305E\u308B\u3068\u3001\u306E\u305E\u304D\u7A93\u304C\u52D5\u304D\u307E\u3059")}function Zv(n){U.style=n,It&&It.setStyle(n),Ce&&Ce.setXray(n==="xray");for(let e of document.querySelectorAll("[data-style]"))e.setAttribute("aria-pressed",String(e.dataset.style===n))}function Qv(){U.lang=U.lang==="off"?"ja":U.lang==="ja"?"en":"off",re.btnLabel.setAttribute("aria-pressed",String(U.lang!=="off")),re.btnLabel.querySelector(".v").textContent=U.lang==="off"?"\u306A\u3057":U.lang==="ja"?"\u65E5\u672C\u8A9E":"English",It&&It.setLobeColors(U.lang!=="off")}async function LT(){if(!(!Sn||U.flipping)){U.flipping=!0,re.btnFlip.disabled=!0;try{await Sn.flip()||Ks("\u5207\u308A\u66FF\u3048\u3089\u308C\u308B\u30AB\u30E1\u30E9\u304C\u3042\u308A\u307E\u305B\u3093"),U.mirrored=Sn.mirrored,Tg(),Li.reset(),U.present=!1,U.lens=null}catch(n){Ks(Eg(n),5e3)}U.flipping=!1,re.btnFlip.disabled=!1,Sr()}}async function DT(){if(U.phase!=="running")return;Ce.render();let n=document.createElement("canvas");n.width=re.gl.width,n.height=re.gl.height;let e=n.getContext("2d");e.save(),U.mirrored&&(e.translate(n.width,0),e.scale(-1,1)),e.drawImage(re.gl,0,0),e.restore(),e.drawImage(re.labels,0,0,n.width,n.height);let t=await new Promise(o=>n.toBlob(o,"image/png"));if(!t)return Ks("\u753B\u50CF\u3092\u4F5C\u308C\u307E\u305B\u3093\u3067\u3057\u305F");let i=new Date,s=o=>String(o).padStart(2,"0"),r=`mirai-skull-mirror-${i.getFullYear()}${s(i.getMonth()+1)}${s(i.getDate())}-${s(i.getHours())}${s(i.getMinutes())}${s(i.getSeconds())}.png`,a=new File([t],r,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[a]}))try{await navigator.share({files:[a]})}catch{}else{let o=document.createElement("a");o.href=URL.createObjectURL(t),o.download=r,document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(o.href),4e3),Ks("\u753B\u50CF\u3092\u3053\u306E\u7AEF\u672B\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F")}}function FT(){re.btnStart.addEventListener("click",Yv),re.depth.addEventListener("input",()=>{U.depthTarget=re.depth.value/100,U.intro=!1,Rg(U.depthTarget)});for(let i of document.querySelectorAll("[data-region]"))i.addEventListener("click",()=>Jv(i.dataset.region));for(let i of document.querySelectorAll("[data-style]"))i.addEventListener("click",()=>Zv(i.dataset.style));re.btnLabel.addEventListener("click",Qv),re.btnFlip.addEventListener("click",LT),re.btnShot.addEventListener("click",DT),re.btnEngine.addEventListener("click",wT),re.btnInfo.addEventListener("click",()=>{re.info.hidden=!1}),re.btnInfoClose.addEventListener("click",()=>{re.info.hidden=!0}),re.info.addEventListener("click",i=>{i.target===re.info&&(re.info.hidden=!0)}),document.addEventListener("keydown",i=>{i.key==="Escape"?re.info.hidden=!0:(i.key==="f"||i.key==="F")&&!i.ctrlKey&&!i.metaKey&&!i.altKey&&U.phase==="running"&&AT()});for(let i of document.querySelectorAll("[data-open-info]"))i.addEventListener("click",()=>{re.info.hidden=!1});let n=null,e=i=>{let s=re.gl.getBoundingClientRect(),r=i.clientX-s.left;return{x:U.mirrored?s.width-r:r,y:i.clientY-s.top}};re.gl.addEventListener("pointerdown",i=>{n={...e(i),t:performance.now(),moved:!1},re.gl.setPointerCapture(i.pointerId),U.region==="lens"&&U.lens&&(U.lens.x=n.x,U.lens.y=n.y)}),re.gl.addEventListener("pointermove",i=>{if(!n)return;let s=e(i);Math.hypot(s.x-n.x,s.y-n.y)>8&&(n.moved=!0),U.region==="lens"&&U.lens&&(U.lens.x=s.x,U.lens.y=s.y)});let t=()=>{n&&!n.moved&&performance.now()-n.t<400&&U.region!=="lens"&&U.phase==="running"&&(U.clean=!U.clean,document.body.classList.toggle("clean",U.clean)),n=null};re.gl.addEventListener("pointerup",t),re.gl.addEventListener("pointercancel",()=>{n=null}),window.addEventListener("resize",pd),window.addEventListener("orientationchange",()=>setTimeout(pd,250)),window.ResizeObserver&&new ResizeObserver(pd).observe(re.stage),document.addEventListener("visibilitychange",async()=>{if(!(document.hidden||U.phase!=="running")){if(Sn&&!Sn.live)try{await Sn.start(Sn.want),U.mirrored=Sn.mirrored,Tg()}catch(i){Ks(Eg(i),5e3)}Li&&(Li.pose=null),Sr(),$v()}}),window.addEventListener("pagehide",()=>{Sn&&Sn.stop()})}re.version.textContent=Io.version;wg>=1&&(re.debug.hidden=!1);FT();Rg(.5);setInterval(TT,1e3);pa.get("autostart")==="1"?Yv():(Ag(),ET());window.__skull={S:U,get solver(){return Li},get anatomy(){return It},get view(){return Ce},get tracker(){return ti},setDepth(n){U.depthTarget=n,U.depth=n,U.intro=!1,re.depth.value=Math.round(n*100),Rg(n)},setRegion:Jv,setStyle:Zv,cycleLabels:Qv,async step(n){U.manual=!0;let e=re.video;e.pause(),await new Promise(i=>{let s=()=>{e.removeEventListener("seeked",s),i()};e.addEventListener("seeked",s),e.currentTime=n}),await new Promise(i=>requestAnimationFrame(i)),Mg();let t=U.last;return{present:U.present,pose:U.present&&t?Array.from(t.pose):null,theta:t?t.theta:null,thetaRaw:t?t.thetaRaw:null,fit:t?{...t.fit}:null,closed:t?t.closed:null,offAxis:t?t.offAxis:null,res:t?t.res:null,raw:U.lastDet?Array.from(U.lastDet.mat):null,jaw:It?Array.from(It.jaw.matrix.elements):null,video:[Ce.videoW,Ce.videoH]}}};
