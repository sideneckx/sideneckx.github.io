import{a as d,t as v}from"../chunks/disclose-version.BJ4qn41d.js";import{q as h,u as p,i as x,j as $,t as u,v as _,w as k,x as y,y as j,l as q,m as w,z,o as A,A as l,B as g,C as B}from"../chunks/runtime.C56CSpWS.js";import{s as C,a as b,b as E}from"../chunks/store.D2Ugq14Q.js";import{s as S}from"../chunks/entry.ClXxvDdu.js";function D(s=!1){const e=x,t=e.l.u;if(!t)return;let n=()=>y(e.s);if(s){let a=0,r={};const f=j(()=>{let i=!1;const c=e.s;for(const o in c)c[o]!==r[o]&&(r[o]=c[o],i=!0);return i&&a++,a});n=()=>_(f)}t.b.length&&h(()=>{m(e,n),u(t.b)}),p(()=>{const a=$(()=>t.m.map(k));return()=>{for(const r of a)typeof r=="function"&&r()}}),t.a.length&&p(()=>{m(e,n),u(t.a)})}function m(s,e){if(s.l.s)for(const t of s.l.s)_(t);e()}const F=()=>{const s=S;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},G={subscribe(s){return F().page.subscribe(s)}};var H=v("<h1> </h1> <p> </p>",1);function M(s,e){q(e,!1);const t=C(),n=()=>E(G,"$page",t);D();var a=H(),r=w(a),f=l(r,!0);g(r);var i=B(r,2),c=l(i,!0);g(i),z(()=>{var o;b(f,n().status),b(c,(o=n().error)==null?void 0:o.message)}),d(s,a),A()}export{M as component};