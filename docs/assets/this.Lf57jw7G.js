import{j as y,x as c,D as I,ah as N,H as S,E as R,C as q,F as d,o as T,q as b,u as E,G as x,ai as D,aj as F,ad as L,ac as g,ak as j,a2 as C}from"./template.6NSSC91u.js";function O(r,f,t=!1){c&&I();var i=r,s=null,a=null,l=D,v=t?N:0,n=!1;const A=(u,e=!0)=>{n=!0,h(e,u)},h=(u,e)=>{if(l===(l=u))return;let _=!1;if(c){const k=i.data===S;!!l===k&&(i=R(),q(i),d(!1),_=!0)}l?(s?T(s):e&&(s=b(()=>e(i))),a&&E(a,()=>{a=null})):(a?T(a):e&&(a=b(()=>e(i))),s&&E(s,()=>{s=null})),_&&d(!0)};y(()=>{n=!1,f(A),n||h(null,null)},v),c&&(i=x)}function o(r,f){return r===f||r?.[C]===f}function Y(r={},f,t,i){return F(()=>{var s,a;return L(()=>{s=a,a=[],g(()=>{r!==t(...a)&&(f(r,...a),s&&o(t(...s),r)&&f(null,...s))})}),()=>{j(()=>{a&&o(t(...a),r)&&f(null,...a)})}}),r}export{Y as b,O as i};