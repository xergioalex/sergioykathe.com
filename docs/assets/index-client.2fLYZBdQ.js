import{aq as g,ar as w,as as u,at as c,al as _,au as y,av as p,o as m,aw as b,ad as h,a8 as k,K as x}from"./template.BFAwqS66.js";const E="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(E);g();function d(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function S(e=!1){const n=c,t=n.l.u;if(!t)return;let s=()=>b(n.s);if(e){let o=0,a={};const l=h(()=>{let r=!1;const i=n.s;for(const f in i)i[f]!==a[f]&&(a[f]=i[f],r=!0);return r&&o++,o});s=()=>m(l)}t.b.length&&w(()=>{v(n,s),p(t.b)}),u(()=>{const o=_(()=>t.m.map(y));return()=>{for(const a of o)typeof a=="function"&&a()}}),t.a.length&&u(()=>{v(n,s),p(t.a)})}function v(e,n){if(e.l.s)for(const t of e.l.s)m(t);n()}function C(e){c===null&&d(),k&&c.l!==null?I(c).m.push(e):u(()=>{const n=_(e);if(typeof n=="function")return n})}function $(e){c===null&&d(),C(()=>()=>_(e))}function D(e,n,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:s})}function q(){const e=c;return e===null&&d(),(n,t,s)=>{const o=e.s.$$events?.[n];if(o){const a=x(o)?o.slice():[o],l=D(n,t,s);for(const r of a)r.call(e.x,l);return!l.defaultPrevented}return!0}}function I(e){var n=e.l;return n.u??={a:[],b:[],m:[]}}export{$ as a,q as c,S as i,C as o};
