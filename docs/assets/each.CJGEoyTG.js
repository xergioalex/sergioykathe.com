import{F,b as G,G as J,I as O,J as b,K as V,c as Y,L as K,M as H,N as P,h as I,O as Q,P as W,Q as Z,k as q,s as w,a as z,R as $,S as D,T as C,d as N,U as j,V as ee,W as S,X as ae,j as re,Y as ne,Z as le,_ as fe,g as ie}from"./template.BSgtRvOR.js";function ce(e,n){return n}function te(e,n,t,l){for(var a=[],r=n.length,s=0;s<r;s++)Q(n[s].e,a,!0);var f=r>0&&0===a.length&&null!==t;if(f){var i=t.parentNode;W(i),i.append(t),l.clear(),x(e,n[0].prev,n[r-1].next)}Z(a,(()=>{for(var t=0;t<r;t++){var a=n[t];f||(l.delete(a.k),x(e,a.prev,a.next)),q(a.e,!f)}}))}function de(e,n,t,l,a,r=null){var s=e,f={flags:n,items:new Map,first:null},i=e;s=I?w(re(i)):i.appendChild(F()),I&&z();var u=null,v=!1;G((()=>{var e=t(),i=J(e)?e:null==e?[]:O(e),o=i.length;if(v&&0===o)return;v=0===o;let x=!1;I&&(s.data===$!==(0===o)&&(s=D(),w(s),C(!1),x=!0));if(I){for(var p,d=null,h=0;h<o;h++){if(8===N.nodeType&&N.data===ne){s=N,x=!0,C(!1);break}var c=i[h],g=l(c,h);p=U(N,f,d,null,c,g,h,a,n),f.items.set(g,p),d=p}o>0&&w(D())}I||se(i,f,s,a,n,!!(j.f&b),l);null!==r&&(0===o?u?V(u):u=Y((()=>r(s))):null!==u&&K(u,(()=>{u=null}))),x&&C(!0),t()})),I&&(s=N)}function se(e,n,t,l,a,r,s,f){var i,u,v,o,p,d=e.length,h=n.items,c=n.first,g=null,I=[],N=[];for(p=0;p<d;p+=1)if(v=s(u=e[p],p),void 0!==(o=h.get(v))){if(ue(o,u,p),o.e.f&b&&V(o.e),o!==c){if(void 0!==i&&i.has(o)){if(I.length<N.length){var m,w=N[0];g=w.prev;var S=I[0],k=I[I.length-1];for(m=0;m<I.length;m+=1)L(I[m],w,t);for(m=0;m<N.length;m+=1)i.delete(N[m]);x(n,S.prev,k.next),x(n,g,S),x(n,k,w),c=w,g=k,p-=1,I=[],N=[]}else i.delete(o),L(o,c,t),x(n,o.prev,o.next),x(n,o,null===g?n.first:g.next),x(n,g,o),g=o;continue}for(I=[],N=[];null!==c&&c.k!==v;)(r||!(c.e.f&b))&&(i??=new Set).add(c),N.push(c),c=c.next;if(null===c)continue;o=c}I.push(o),g=o,c=o.next}else{g=U(c?c.e.nodes_start:t,n,g,null===g?n.first:g.next,u,v,p,l,a),h.set(v,g),I=[],N=[],c=g.next}if(null!==c||void 0!==i){for(var C=void 0===i?[]:O(i);null!==c;)(r||!(c.e.f&b))&&C.push(c),c=c.next;if(C.length>0)te(n,C,0===d?t:null,h)}H.first=n.first&&n.first.e,H.last=g&&g.e}function ue(e,n,t,l){P(e.v,n),e.i=t}function U(e,n,t,l,a,r,s,f,i,u){var v=!!(i&le)?!(i&fe)?ee(a):S(a):a,o=i&ae?S(s):s,x={i:o,v:v,k:r,a:null,e:null,prev:t,next:l};try{return x.e=Y((()=>f(e,v,o)),I),x.e.prev=t&&t.e,x.e.next=l&&l.e,null===t?n.first=x:(t.next=x,t.e.next=x.e),null!==l&&(l.prev=x,l.e.prev=x.e),x}finally{}}function L(e,n,t){for(var l=e.next?e.next.e.nodes_start:t,a=n?n.e.nodes_start:t,r=e.e.nodes_start;r!==l;){var s=ie(r);a.before(r),r=s}}function x(e,n,t){null===n?e.first=t:(n.next=t,n.e.next=t&&t.e),null!==t&&(t.prev=n,t.e.prev=n&&n.e)}export{de as e,ce as i};