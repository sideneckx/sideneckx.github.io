import{b as d,t as v}from"../chunks/disclose-version.IsvOYe_u.js";import{I as h,C as p,B as $,D as x,J as u,K as _,L as k,M as y,N as A,y as B,G as C,O as D,A as E,P as l,Q as g,R as G}from"../chunks/runtime.BnIMfSuT.js";import{s as b}from"../chunks/render.CBLjhEyu.js";import{s as I,b as J}from"../chunks/store.D6DsPBJ2.js";import{s as K}from"../chunks/entry.C6Vz2iaX.js";function L(s=!1){const e=$,t=e.l.u;if(!t)return;let n=()=>y(e.s);if(s){let a=0,r={};const f=A(()=>{let i=!1;const c=e.s;for(const o in c)c[o]!==r[o]&&(r[o]=c[o],i=!0);return i&&a++,a});n=()=>_(f)}t.b.length&&h(()=>{m(e,n),u(t.b)}),p(()=>{const a=x(()=>t.m.map(k));return()=>{for(const r of a)typeof r=="function"&&r()}}),t.a.length&&p(()=>{m(e,n),u(t.a)})}function m(s,e){if(s.l.s)for(const t of s.l.s)_(t);e()}const M=()=>{const s=K;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},N={subscribe(s){return M().page.subscribe(s)}};var O=v("<h1> </h1> <p> </p>",1);function q(s,e){B(e,!1);const t=I(),n=()=>J(N,"$page",t);L();var a=O(),r=C(a),f=l(r,!0);g(r);var i=G(r,2),c=l(i,!0);g(i),D(()=>{var o;b(f,n().status),b(c,(o=n().error)==null?void 0:o.message)}),d(s,a),E()}export{q as component};
