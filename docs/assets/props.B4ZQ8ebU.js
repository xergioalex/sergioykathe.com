import{a1 as O,a2 as g,a3 as A,a4 as I,a5 as T,a6 as o,a7 as m,a8 as B,a9 as C,aa as L,ab as F,ac as M,ad as h,o as p,M as E,ae as D}from"./template.BSgtRvOR.js";let _=!1;function N(a){var r=_;try{return _=!1,[a(),_]}finally{_=r}}function Y(a){for(var r=E,s=E;null!==r&&!(r.f&(I|T));)r=r.parent;try{return o(r),a()}finally{o(s)}}function y(a,r,s,n){var o,t=!!(s&D),i=!m||!!(s&B),v=!!(s&C),e=!1;[o,e]=N((()=>a[r]));var f,l=L in a||F in a,u=O(a,r)?.set??(l&&v&&r in a?s=>a[r]=s:void 0),d=n,y=!0,_=()=>(y&&(y=!1,d=n),d);if(void 0===o&&void 0!==n&&(u&&i&&g(),o=_(),u&&u(o)),i)f=()=>{var s=a[r];return void 0===s?_():(y=!0,s)};else{var c=Y((()=>(t?M:h)((()=>a[r]))));c.f|=A,f=()=>{var a=p(c);return void 0!==a&&(d=void 0),void 0===a?d:a}}return f}export{y as p};