import{s as d,a as v,t as h,b as p,c as x}from"../chunks/disclose-version.q0ClU3GR.js";import{t as $,o as u,m as k,u as y,k as l,v as _,w,x as z,y as A,z as B,A as C,B as D,C as E,D as g,F as b,G as F}from"../chunks/utils.fcuOrcEU.js";import{s as G}from"../chunks/entry.DQAYkXGr.js";function S(s=!1){const e=k,t=e.l.u;if(!t)return;let n=()=>z(e.s);if(s){let a=0,r={};const f=A(()=>{let c=!1;const i=e.s;for(const o in i)i[o]!==r[o]&&(r[o]=i[o],c=!0);return c&&a++,a});n=()=>_(f)}t.b.length&&$(()=>{m(e,n),l(t.b)}),u(()=>{const a=y(()=>t.m.map(w));return()=>{for(const r of a)typeof r=="function"&&r()}}),t.a.length&&u(()=>{m(e,n),l(t.a)})}function m(s,e){if(s.l.s)for(const t of s.l.s)_(t);e()}const j=()=>{const s=G;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},q={subscribe(s){return j().page.subscribe(s)}};var H=h("<h1> </h1> <p> </p>",1);function L(s,e){B(e,!1);const t=d(),n=()=>x(q,"$page",t);S();var a=H(),r=C(a),f=g(r,!0);b(r);var c=F(r,2),i=g(c,!0);b(c),D(()=>{var o;p(f,n().status),p(i,(o=n().error)==null?void 0:o.message)}),v(s,a),E()}export{L as component};
