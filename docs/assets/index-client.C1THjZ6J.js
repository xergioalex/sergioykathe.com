import{aL as g,aM as y,aN as u,ar as c,a7 as _,aO as b,aP as d,g as m,aQ as w,aB as h,ax as k,k as x}from"./template.DVlVoHZ-.js";const E="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(E);g();function p(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function I(e=!1){const n=c,t=n.l.u;if(!t)return;let s=()=>w(n.s);if(e){let o=0,a={};const r=h(()=>{let f=!1;const i=n.s;for(const l in i)i[l]!==a[l]&&(a[l]=i[l],f=!0);return f&&o++,o});s=()=>m(r)}t.b.length&&y(()=>{v(n,s),d(t.b)}),u(()=>{const o=_(()=>t.m.map(b));return()=>{for(const a of o)typeof a=="function"&&a()}}),t.a.length&&u(()=>{v(n,s),d(t.a)})}function v(e,n){if(e.l.s)for(const t of e.l.s)m(t);n()}function P(e){c===null&&p(),k&&c.l!==null?C(c).m.push(e):u(()=>{const n=_(e);if(typeof n=="function")return n})}function L(e){c===null&&p(),P(()=>()=>_(e))}function B(e,n,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:s})}function M(){const e=c;return e===null&&p(),(n,t,s)=>{const o=e.s.$$events?.[n];if(o){const a=x(o)?o.slice():[o],r=B(n,t,s);for(const f of a)f.call(e.x,r);return!r.defaultPrevented}return!0}}function C(e){var n=e.l;return n.u??={a:[],b:[],m:[]}}export{L as a,M as c,I as i,P as o};