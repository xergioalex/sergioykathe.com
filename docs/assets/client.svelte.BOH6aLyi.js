import{Y as $,ar as A,as as D,v as y,at as S,G as g,P as O,ah as o,K as w,e as k,au as E,av as K,i as L,aw as M,ax as T,ay as Y,w as p,h as q,q as B,m as C}from"./template.CkI5ZOLy.js";import{u as F,h as G,m as U}from"./render.CkcerqDA.js";function b(s,v=null,_){if(typeof s!="object"||s===null||$ in s)return s;const c=K(s);if(c!==A&&c!==D)return s;var r=new Map,l=L(s),u=y(0);l&&r.set("length",y(s.length));var f;return new Proxy(s,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&S();var a=r.get(e);return a===void 0?(a=y(t.value),r.set(e,a)):g(a,b(t.value,f)),!0},deleteProperty(n,e){var t=r.get(e);if(t===void 0)e in n&&r.set(e,y(o));else{if(l&&typeof e=="string"){var a=r.get("length"),i=Number(e);Number.isInteger(i)&&i<a.v&&g(a,i)}g(t,o),j(u)}return!0},get(n,e,t){if(e===$)return s;var a=r.get(e),i=e in n;if(a===void 0&&(!i||O(n,e)?.writable)&&(a=y(b(i?n[e]:o,f)),r.set(e,a)),a!==void 0){var d=w(a);return d===o?void 0:d}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var a=r.get(e);a&&(t.value=w(a))}else if(t===void 0){var i=r.get(e),d=i?.v;if(i!==void 0&&d!==o)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return t},has(n,e){if(e===$)return!0;var t=r.get(e),a=t!==void 0&&t.v!==o||Reflect.has(n,e);if(t!==void 0||k!==null&&(!a||O(n,e)?.writable)){t===void 0&&(t=y(a?b(n[e],f):o),r.set(e,t));var i=w(t);if(i===o)return!1}return a},set(n,e,t,a){var i=r.get(e),d=e in n;if(l&&e==="length")for(var m=t;m<i.v;m+=1){var h=r.get(m+"");h!==void 0?g(h,o):m in n&&(h=y(o),r.set(m+"",h))}i===void 0?(!d||O(n,e)?.writable)&&(i=y(void 0),g(i,b(t,f)),r.set(e,i)):(d=i.v!==o,g(i,b(t,f)));var N=Reflect.getOwnPropertyDescriptor(n,e);if(N?.set&&N.set.call(a,t),!d){if(l&&typeof e=="string"){var R=r.get("length"),P=Number(e);Number.isInteger(P)&&P>=R.v&&g(R,P+1)}j(u)}return!0},ownKeys(n){w(u);var e=Reflect.ownKeys(n).filter(i=>{var d=r.get(i);return d===void 0||d.v!==o});for(var[t,a]of r)a.v!==o&&!(t in n)&&e.push(t);return e},setPrototypeOf(){E()}})}function j(s,v=1){g(s,s.v+v)}function x(s){return(v,..._)=>{var c=s(..._),r;if(q)r=B,C();else{var l=c.render().trim(),u=M(l);r=p(u),v.before(r)}const f=c.setup?.(r);T(r,r),typeof f=="function"&&Y(f)}}const I=new WeakMap,H=s=>async(v,_,c,{client:r})=>{if(!s.hasAttribute("ssr"))return;let l,u,f={};for(const[e,t]of Object.entries(c))u??={},e==="default"?(u.default=!0,l=x(()=>({render:()=>`<astro-slot>${t}</astro-slot>`}))):u[e]=x(()=>({render:()=>`<astro-slot name="${e}">${t}</astro-slot>`})),e==="default"?f.children=x(()=>({render:()=>`<astro-slot>${t}</astro-slot>`})):f[e]=x(()=>({render:()=>`<astro-slot name="${e}">${t}</astro-slot>`}));const n={..._,children:l,$$slots:u,...f};if(I.has(s))I.get(s).setProps(n);else{const e=W(v,s,n,r!=="only");I.set(s,e),s.addEventListener("astro:unmount",()=>e.destroy(),{once:!0})}};function W(s,v,_,c){let r=b(_);const u=(c?G:U)(s,{target:v,props:r});return{setProps(f){Object.assign(r,f);for(const n in r)n in f||delete r[n]},destroy(){F(u)}}}export{H as default};
