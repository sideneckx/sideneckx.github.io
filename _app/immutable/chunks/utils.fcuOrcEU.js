var Sn=Array.isArray,bn=Array.from,gn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyDescriptors,xn=Object.prototype,On=Array.prototype,Kt=Object.getPrototypeOf;const $t=()=>{};function Cn(t){return t()}function vt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,pt=4,L=8,rt=16,E=32,Z=64,D=128,U=256,p=512,I=1024,Y=2048,x=4096,j=8192,Zt=16384,ht=32768,Nn=65536,zt=1<<18,dt=1<<19,it=Symbol("$state"),qn=Symbol("");function Et(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function yt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("effect_in_teardown")}function Jt(){throw new Error("effect_in_unowned_derived")}function Qt(t){throw new Error("effect_orphan")}function tn(){throw new Error("effect_update_depth_exceeded")}function Pn(){throw new Error("hydration_failed")}function Fn(t){throw new Error("props_invalid_value")}function Mn(){throw new Error("state_descriptors_fixed")}function Ln(){throw new Error("state_prototype_fixed")}function nn(){throw new Error("state_unsafe_local_read")}function rn(){throw new Error("state_unsafe_mutation")}function et(t){return{f:0,v:t,reactions:null,equals:Et,version:0}}function Yn(t){return en(et(t))}function jn(t,n=!1){var e;const r=et(t);return n||(r.equals=yt),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function en(t){return o!==null&&o.f&T&&(d===null?yn([t]):d.push(t)),t}function Hn(t,n){return o!==null&&lt()&&o.f&(T|rt)&&(d===null||!d.includes(t))&&rn(),sn(t,n)}function sn(t,n){return t.equals(n)||(t.v=n,t.version=Yt(),wt(t,I),lt()&&a!==null&&a.f&p&&!(a.f&E)&&(_!==null&&_.includes(t)?(y(a,I),W(a)):k===null?wn([t]):k.push(t))),n}function wt(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,u=0;u<s;u++){var l=r[u],i=l.f;i&I||!e&&l===a||(y(l,n),i&(p|D)&&(i&T?wt(l,Y):W(l)))}}const Bn=1,Un=2,Vn=16,Gn=1,Kn=2,$n=4,Zn=8,zn=16,Wn=1,Xn=2,un="[",ln="[!",an="]",Tt={},Jn=Symbol();function mt(t){console.warn("hydration_mismatch")}let O=!1;function Qn(t){O=t}let m;function P(t){if(t===null)throw mt(),Tt;return m=t}function tr(){return P(C(m))}function nr(t){if(O){if(C(m)!==null)throw mt(),Tt;m=t}}function rr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===un||r===ln)&&(t+=1)}var e=C(n);n.remove(),n=e}}var ft,At,kt;function er(){if(ft===void 0){ft=window;var t=Element.prototype,n=Node.prototype;At=ot(n,"firstChild").get,kt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return At.call(t)}function C(t){return kt.call(t)}function sr(t,n){if(!O)return J(t);var r=J(m);if(r===null)r=m.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),P(e),e}return P(r),r}function ur(t,n){if(!O){var r=J(t);return r instanceof Comment&&r.data===""?C(r):r}return m}function lr(t,n=1,r=!1){let e=O?m:t;for(;n--;)e=C(e);if(!O)return e;var s=e.nodeType;if(r&&s!==3){var u=X();return e==null||e.before(u),P(u),u}return P(e),e}function ar(t){t.textContent=""}function on(t){var n=T|I;a===null?n|=D:a.f|=dt;const r={children:null,ctx:f,deps:null,equals:Et,f:n,fn:t,reactions:null,v:null,version:0,parent:a};if(o!==null&&o.f&T){var e=o;(e.children??(e.children=[])).push(r)}return r}function or(t){const n=on(t);return n.equals=yt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?st(e):q(e)}}}function Rt(t){var n,r=a;$(t.parent);try{It(t),n=jt(t)}finally{$(r)}return n}function Dt(t){var n=Rt(t),r=(S||t.f&D)&&t.deps!==null?Y:p;y(t,r),t.equals(n)||(t.v=n,t.version=Yt())}function st(t){It(t),M(t,0),y(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function St(t){a===null&&o===null&&Qt(),o!==null&&o.f&D&&Jt(),ut&&Xt()}function fn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function N(t,n,r,e=!0){var s=(t&Z)!==0,u=a,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:s?null:u,prev:null,teardown:null,transitions:null,version:0};if(r){var i=b;try{_t(!0),z(l),l.f|=Zt}catch(c){throw q(l),c}finally{_t(i)}}else n!==null&&W(l);var w=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&dt)===0;if(!w&&!s&&e&&(u!==null&&fn(l,u),o!==null&&o.f&T)){var A=o;(A.children??(A.children=[])).push(l)}return l}function ir(t){const n=N(L,null,!1);return y(n,p),n.teardown=t,n}function fr(t){St();var n=a!==null&&(a.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:a,reaction:o})}else{var e=bt(t);return e}}function _r(t){return St(),_n(t)}function cr(t){const n=N(Z,t,!0);return()=>{q(n)}}function bt(t){return N(pt,t,!1)}function _n(t){return N(L,t,!0)}function vr(t){return cn(t)}function cn(t,n=0){return N(L|rt|n,t,!0)}function pr(t,n=!0){return N(L|E,t,!0,n)}function gt(t){var n=t.teardown;if(n!==null){const r=ut,e=o;ct(!0),K(null);try{n.call(null)}finally{ct(r),K(e)}}}function xt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)st(n[r])}}function Ot(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;q(r,n),r=e}}function vn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||q(n),n=r}}function q(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var u=e===s?null:C(e);e.remove(),e=u}r=!0}xt(t),Ot(t,n&&!r),M(t,0),y(t,j);var l=t.transitions;if(l!==null)for(const w of l)w.stop();gt(t);var i=t.parent;i!==null&&i.first!==null&&Ct(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ct(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function hr(t,n){var r=[];Nt(t,r,!0),pn(r,()=>{q(t),n&&n()})}function pn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Nt(t,n,r){if(!(t.f&x)){if(t.f^=x,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,u=(e.f&ht)!==0||(e.f&E)!==0;Nt(e,n,u?r:!1),e=s}}}function dr(t){qt(t,!0)}function qt(t,n){if(t.f&x){t.f^=x,H(t)&&z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ht)!==0||(r.f&E)!==0;qt(r,s?n:!1),r=e}if(t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&u.in()}}const hn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,Q=[],tt=[];function Pt(){V=!1;const t=Q.slice();Q=[],vt(t)}function Ft(){G=!1;const t=tt.slice();tt=[],vt(t)}function Er(t){V||(V=!0,queueMicrotask(Pt)),Q.push(t)}function yr(t){G||(G=!0,hn(Ft)),tt.push(t)}function dn(){V&&Pt(),G&&Ft()}const Mt=0,En=1;let B=Mt,F=!1,b=!1,ut=!1;function _t(t){b=t}function ct(t){ut=t}let R=[],g=0;let o=null;function K(t){o=t}let a=null;function $(t){a=t}let d=null;function yn(t){d=t}let _=null,h=0,k=null;function wn(t){k=t}let Lt=0,S=!1,f=null;function Yt(){return++Lt}function lt(){return f!==null&&f.l===null}function H(t){var l,i;var n=t.f;if(n&I)return!0;if(n&Y){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var u=r[s];if(H(u)&&Dt(u),e&&a!==null&&!S&&!((i=u==null?void 0:u.reactions)!=null&&i.includes(t))&&(u.reactions??(u.reactions=[])).push(t),u.version>t.version)return!0}}e||y(t,p)}return!1}function Tn(t,n,r){throw t}function jt(t){var at;var n=_,r=h,e=k,s=o,u=S,l=d,i=f,w=t.f;_=null,h=0,k=null,o=w&(E|Z)?null:t,S=!b&&(w&D)!==0,d=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(M(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!S)for(v=h;v<c.length;v++)((at=c[v]).reactions??(at.reactions=[])).push(t)}else c!==null&&h<c.length&&(M(t,h),c.length=h);return A}finally{_=n,h=r,k=e,o=s,S=u,d=l,f=i}}function mn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(y(n,Y),n.f&(D|U)||(n.f^=U),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)mn(t,r[e])}function z(t){var n=t.f;if(!(n&j)){y(t,p);var r=a;a=t;try{xt(t),n&rt?vn(t):Ot(t),gt(t);var e=jt(t);t.teardown=typeof e=="function"?e:null,t.version=Lt}catch(s){Tn(s)}finally{a=r}}}function Ht(){g>1e3&&(g=0,tn()),g++}function Bt(t){var n=t.length;if(n!==0){Ht();var r=b;b=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var u=[];Ut(s,u),An(u)}}finally{b=r}}}function An(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|x))&&H(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ct(e):e.fn=null))}}function kn(){if(F=!1,g>1001)return;const t=R;R=[],Bt(t),F||(g=0)}function W(t){B===Mt&&(F||(F=!0,queueMicrotask(kn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function Ut(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,u=(s&E)!==0,l=u&&(s&p)!==0;if(!l&&!(s&x))if(s&L){u?r.f^=p:H(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&pt&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Ut(i,n)}function Vt(t){var n=B,r=R;try{Ht();const s=[];B=En,R=s,F=!1,Bt(r);var e=t==null?void 0:t();return dn(),(R.length>0||s.length>0)&&Vt(),g=0,e}finally{B=n,R=r}}async function wr(){await Promise.resolve(),Vt()}function In(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=Rt(t);return st(t),e}if(o!==null){d!==null&&d.includes(t)&&nn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),k!==null&&a!==null&&a.f&p&&!(a.f&E)&&k.includes(t)&&(y(a,I),W(a))}else if(r&&t.deps===null){var u=t,l=u.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(u))&&(l.deriveds??(l.deriveds=[])).push(u)}return r&&(u=t,H(u)&&Dt(u)),t.v}function Tr(t){return t&&In(t)}function Rn(t){const n=o;try{return o=null,t()}finally{o=n}}const Dn=~(I|Y|p);function y(t,n){t.f=t.f&Dn|n}function mr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:et(!1)})}function Ar(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=a,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var u=l[s];$(u.effect),K(u.reaction),bt(u.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(it in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&it in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Kt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Gt(r);for(let s in e){const u=e[s].get;if(u)try{u.call(t)}catch{}}}}}function Ir(t,n,r){if(t==null)return n(void 0),r&&r(void 0),$t;const e=Rn(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}export{q as $,ur as A,vr as B,Ar as C,sr as D,ht as E,nr as F,lr as G,ln as H,yr as I,Kt as J,Gt as K,qn as L,X as M,Sn as N,bn as O,x as P,a as Q,sn as R,it as S,Bn as T,Vn as U,jn as V,et as W,Un as X,Nt as Y,ar as Z,pn as _,dr as a,J as a0,an as a1,C as a2,Tr as a3,Yn as a4,Hn as a5,ir as a6,gn as a7,K as a8,$ as a9,zn as aA,Vt as aB,wr as aC,lt as aD,o as aa,Wn as ab,Xn as ac,er as ad,un as ae,Tt as af,mt as ag,Pn as ah,cr as ai,xn as aj,On as ak,Mn as al,Jn as am,ot as an,Ln as ao,Fn as ap,Nn as aq,$n as ar,yt as as,E as at,Z as au,Gn as av,Kn as aw,Zn as ax,or as ay,j as az,cn as b,pr as c,tr as d,bt as e,rr as f,Qn as g,O as h,m as i,Ir as j,vt as k,Wt as l,f as m,$t as n,fr as o,hr as p,Er as q,_n as r,P as s,_r as t,Rn as u,In as v,Cn as w,kr as x,on as y,mr as z};
