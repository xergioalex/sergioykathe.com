import{o as H,i as Q}from"./index-client.DJdR678A.js";import{h as O,a9 as U,aa as W,ab as X,ac as Z,ad as T,ae as $,af as ee,ag as V,B as ae,K as re,a8 as E,C as te,D as oe,F as le,L as i,N as d,J as n,G as _,M as g,O as v,ah as ne,ai as ie}from"./template.Br768ZXS.js";import{i as se}from"./proxy.b-gko91b.js";import{b as ue}from"./this.B1rkjMYl.js";function F(e){if(O){var a=!1,t=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var t=e.value;J(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var r=e.checked;J(e,"checked",null),e.checked=r}}};e.__on_r=t,U(t),W()}}function J(e,a,t,r){var l=e.__attributes??={};O&&(l[a]=e.getAttribute(a),"src"===a||"srcset"===a||"href"===a&&"LINK"===e.nodeName)||l[a]!==(l[a]=t)&&("style"===a&&"__styles"in e&&(e.__styles={}),"loading"===a&&(e[X]=t),e.removeAttribute(a))}function K(e,a,t=a){var r=Z();T(e,"input",(l=>{var o=l?e.defaultValue:e.value;if(o=L(e)?j(o):o,t(o),r&&o!==(o=a())){var n=e.selectionStart,i=e.selectionEnd;e.value=o??"",null!==i&&(e.selectionStart=n,e.selectionEnd=Math.min(i,e.value.length))}})),(O&&e.defaultValue!==e.value||null==$(a)&&e.value)&&t(L(e)?j(e.value):e.value),ee((()=>{var t=a();L(e)&&t===j(e.value)||"date"===e.type&&!t&&!e.value||t!==e.value&&(e.value=t??"")}))}function L(e){var a=e.type;return"number"===a||"range"===a}function j(e){return""===e?null:+e}function P(e,a,t){if(e.multiple)return ce(e,a);for(var r of e.options){var l=m(r);if(se(l,a))return void(r.selected=!0)}(!t||void 0!==a)&&(e.selectedIndex=-1)}function de(e,a){V((()=>{var a=new MutationObserver((()=>{var a=e.__value;P(e,a)}));return a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{a.disconnect()}}))}function ve(e,a,t=a){var r=!0;T(e,"change",(a=>{var r,l=a?"[selected]":":checked";if(e.multiple)r=[].map.call(e.querySelectorAll(l),m);else{var o=e.querySelector(l)??e.querySelector("option:not([disabled])");r=o&&m(o)}t(r)})),V((()=>{var l=a();if(P(e,l,r),r&&void 0===l){var o=e.querySelector(":checked");null!==o&&(l=m(o),t(l))}e.__value=l,r=!1})),de(e)}function ce(e,a){for(var t of e.options)t.selected=~a.indexOf(m(t))}function m(e){return"__value"in e?e.__value:e.value}var fe=le('<dialog class="hidden bg-transparent p-0 backdrop:bg-black backdrop:bg-opacity-50 [&amp;[open]]:flex items-center justify-center w-full h-full fixed inset-0 svelte-k3kgo8"><div role="dialog" aria-labelledby="modal-title" aria-modal="true" class="bg-white rounded-lg w-full max-w-[600px] mx-0 sm:mx-4 max-h-[90vh] overflow-hidden dark:bg-slate-900"><div class="p-4 border-b flex justify-between items-center"><h3 id="modal-title" class="text-lg font-semibold flex items-center gap-2"><span class="text-primary">🎵</span> Sugerir Canciones</h3> <button type="button" class="text-gray-500 hover:text-gray-700" aria-label="Cerrar diálogo">✕</button></div> <div class="p-6"><form class="space-y-4"><div><label for="songName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre de la Canción</label> <input type="text" id="songName" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white" placeholder="Ej: Amor Eterno"></div> <div><label for="artist" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Artista</label> <input type="text" id="artist" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white" placeholder="Ej: Juan Gabriel"></div> <div><label for="genre" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Género</label> <select id="genre" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white"><option>Selecciona un género</option><option>Pop</option><option>Rock</option><option>Salsa</option><option>Merengue</option><option>Bachata</option><option>Reggaeton</option><option>Otro</option></select></div> <div class="flex justify-end"><button type="submit" class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Enviar Sugerencia</button></div></form></div></div></dialog>');function ye(e,a){ae(a,!1);let t=g(),r=g(""),l=g(""),o=g("");function s(){i(t)?.close()}H((()=>(document.addEventListener("openSongModal",(()=>{i(t)?.showModal()})),()=>{document.removeEventListener("openSongModal",(()=>{i(t)?.showModal()}))}))),Q();var u=fe(),c=d(u),m=d(c),f=n(d(m),2);v(m);var p=n(m,2),b=d(p),y=d(b),h=n(d(y),2);F(h),v(y);var k=n(y,2),x=n(d(k),2);F(x),v(k);var w=n(k,2),j=n(d(w),2);re((()=>{i(o),ne((()=>{}))}));var S=d(j);S.value=(S.__value="","");var L=n(S);L.value=null==(L.__value="pop")?"":"pop";var M=n(L);M.value=null==(M.__value="rock")?"":"rock";var A=n(M);A.value=null==(A.__value="salsa")?"":"salsa";var O=n(A);O.value=null==(O.__value="merengue")?"":"merengue";var q=n(O);q.value=null==(q.__value="bachata")?"":"bachata";var N=n(q);N.value=null==(N.__value="reggaeton")?"":"reggaeton";var J=n(N);J.value=null==(J.__value="otro")?"":"otro",v(j),v(w),ie(2),v(b),v(p),v(c),v(u),ue(u,(e=>_(t,e)),(()=>i(t))),E("click",f,s),K(h,(()=>i(r)),(e=>_(r,e))),K(x,(()=>i(l)),(e=>_(l,e))),ve(j,(()=>i(o)),(e=>_(o,e))),E("submit",b,(function(e){e.preventDefault(),console.log({songName:i(r),artist:i(l),genre:i(o)}),s()})),E("click",u,(function(e){e.target===i(t)&&s()})),te(e,u),oe()}export{ye as default};