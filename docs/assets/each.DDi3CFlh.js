import{J,b as K,K as P,L as O,M as b,N as V,c as Y,O as Q,P as H,Q as W,h as A,R as Z,S as $,T as q,k as z,s as w,a as F,U as G,V as D,W as C,d as N,X as j,Y as ee,Z as S,_ as ae,j as re,$ as ne,a0 as le,a1 as fe,g as ie}from"./template.BFAwqS66.js";function ce(e,n){return n}function te(e,n,t,a){for(var l=[],r=n.length,s=0;s<r;s++)Z(n[s].e,l,!0);var f=r>0&&0===l.length&&null!==t;if(f){var i=t.parentNode;$(i),i.append(t),a.clear(),x(e,n[0].prev,n[r-1].next)}q(l,(()=>{for(var t=0;t<r;t++){var l=n[t];f||(a.delete(l.k),x(e,l.prev,l.next)),z(l.e,!f)}}))}function de(e,n,t,a,l,r=null){var s=e,f={flags:n,items:new Map,first:null},i=e;s=A?w(re(i)):i.appendChild(J()),A&&F();var u=null,v=!1;K((()=>{var e=t(),i=P(e)?e:null==e?[]:O(e),o=i.length;if(v&&0===o)return;v=0===o;let x=!1;A&&(s.data===G!==(0===o)&&(s=D(),w(s),C(!1),x=!0));if(A){for(var p,d=null,h=0;h<o;h++){if(8===N.nodeType&&N.data===ne){s=N,x=!0,C(!1);break}var c=i[h],g=a(c,h);p=U(N,f,d,null,c,g,h,l,n),f.items.set(g,p),d=p}o>0&&w(D())}A||se(i,f,s,l,n,!!(j.f&b),a);null!==r&&(0===o?u?V(u):u=Y((()=>r(s))):null!==u&&Q(u,(()=>{u=null}))),x&&C(!0),t()})),A&&(s=N)}function se(e,n,t,a,l,r,s,f){var i,u,v,o,p,d=e.length,h=n.items,c=n.first,g=null,A=[],N=[];for(p=0;p<d;p+=1)if(v=s(u=e[p],p),void 0!==(o=h.get(v))){if(ue(o,u,p),o.e.f&b&&V(o.e),o!==c){if(void 0!==i&&i.has(o)){if(A.length<N.length){var w,m=N[0];g=m.prev;var S=A[0],k=A[A.length-1];for(w=0;w<A.length;w+=1)L(A[w],m,t);for(w=0;w<N.length;w+=1)i.delete(N[w]);x(n,S.prev,k.next),x(n,g,S),x(n,k,m),c=m,g=k,p-=1,A=[],N=[]}else i.delete(o),L(o,c,t),x(n,o.prev,o.next),x(n,o,null===g?n.first:g.next),x(n,g,o),g=o;continue}for(A=[],N=[];null!==c&&c.k!==v;)(r||!(c.e.f&b))&&(i??=new Set).add(c),N.push(c),c=c.next;if(null===c)continue;o=c}A.push(o),g=o,c=o.next}else{g=U(c?c.e.nodes_start:t,n,g,null===g?n.first:g.next,u,v,p,a,l),h.set(v,g),A=[],N=[],c=g.next}if(null!==c||void 0!==i){for(var C=void 0===i?[]:O(i);null!==c;)(r||!(c.e.f&b))&&C.push(c),c=c.next;if(C.length>0)te(n,C,0===d?t:null,h)}H.first=n.first&&n.first.e,H.last=g&&g.e}function ue(e,n,t,a){W(e.v,n),e.i=t}function U(e,n,t,a,l,r,s,f,i,u){var v=!!(i&le)?!(i&fe)?ee(l):S(l):l,o=i&ae?S(s):s,x={i:o,v:v,k:r,a:null,e:null,prev:t,next:a};try{return x.e=Y((()=>f(e,v,o)),A),x.e.prev=t&&t.e,x.e.next=a&&a.e,null===t?n.first=x:(t.next=x,t.e.next=x.e),null!==a&&(a.prev=x,a.e.prev=x.e),x}finally{}}function L(e,n,t){for(var a=e.next?e.next.e.nodes_start:t,l=n?n.e.nodes_start:t,r=e.e.nodes_start;r!==a;){var s=ie(r);l.before(r),r=s}}function x(e,n,t){null===n?e.first=t:(n.next=t,n.e.next=t&&t.e),null!==t&&(t.prev=n,t.e.prev=n&&n.e)}export{de as e,ce as i};