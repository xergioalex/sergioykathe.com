import{o as D,a as S,i as k}from"./index-client.2fLYZBdQ.js";import{p as I,y as p,z as T,A as w,r as C,B as H,o as u,n as j,u as s,w as o,v as q}from"./template.BFAwqS66.js";import{s as g}from"./render.Cq7Lp3vb.js";import{e as z,i as A}from"./each.DDi3CFlh.js";var B=w('<div class="w-1/4 px-2 mb-4 text-center md:border-r md:last:border-none dark:md:border-slate-500 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter"><div class="font-heading text-primary text-2xl sm:text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl"> </div> <div class="text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-100 lg:text-base"> </div></div>'),E=w('<div class="countdown-container"><div class="flex flex-wrap justify-center -mx-2 text-center"></div></div>');function L(t,e){I(e,!1);let a=j([{title:"Días",amount:"0"},{title:"Horas",amount:"0"},{title:"Minutos",amount:"0"},{title:"Segundos",amount:"0"}]);const r=new Date("2025-03-22T16:30:00-05:00");let i,n=!1;function l(){const t=new Date,e=r.getTime()-t.getTime(),o=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),i=Math.floor(e%36e5/6e4),l=Math.floor(e%6e4/1e3);n&&C(a,[{title:"Días",amount:o.toString()},{title:"Horas",amount:s.toString()},{title:"Minutos",amount:i.toString()},{title:"Segundos",amount:l.toString()}])}D((()=>{n=!0,l(),i=setInterval(l,1e3)})),S((()=>{n=!1,i&&clearInterval(i)})),k();var m=E(),d=s(m);z(d,5,(()=>u(a)),A,((t,e)=>{var a=B(),r=s(a),i=s(r,!0);o(r);var n=q(r,2),l=s(n,!0);o(n),o(a),H((()=>{g(i,u(e).amount||"0"),g(l,u(e).title)})),p(t,a)})),o(d),o(m),p(t,m),T()}export{L as default};