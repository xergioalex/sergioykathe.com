import{o as J,i as K}from"./index-client.C1THjZ6J.js";import{p as W,S as b,a as g,b as Z,h as C,g as e,s as o,d as l,m as c,e as s,r as i,T as $,t as aa,n as ea,U as ta,V as ra}from"./template.DVlVoHZ-.js";import{i as G,b as oa}from"./this.D6TLyT_x.js";import{r as Q}from"./attributes.DwzAJNNv.js";import{b as M}from"./input.BUXY2MnG.js";import"./attributes.Jce5emvo.js";var sa=ra('<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Enviando...',1),ia=C('<form class="space-y-4"><div><label for="songName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre de la Canción</label> <input type="text" id="songName" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white" placeholder="Ej: Amor Eterno"></div> <div><label for="songArtist" class="block text-sm font-medium text-gray-700 dark:text-gray-300">songArtista</label> <input type="text" id="songArtist" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white" placeholder="Ej: Juan Gabriel"></div> <div><label for="songNotes" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Notas adicionales o link</label> <textarea id="songNotes" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white resize-none" rows="3" placeholder="Ej: Link de YouTube o algún comentario sobre la canción">\n            </textarea></div> <div class="flex justify-center"><button type="submit" class="btn btn-primary"><!></button></div></form>'),la=C('<div class="text-center space-y-6"><div class="space-y-2"><span class="text-5xl">🎵</span> <h4 class="text-xl font-semibold text-primary">¡Gracias por tu sugerencia!</h4> <p class="text-gray-600 dark:text-gray-400">Tu canción ha sido agregada a nuestra lista de reproducción.</p></div> <div class="flex gap-4 justify-center"><button type="button" class="btn btn-secondary">Agregar otra canción</button> <button type="button" class="btn btn-primary">Cerrar</button></div></div>'),na=C('<dialog class="hidden bg-transparent p-0 backdrop:bg-black backdrop:bg-opacity-50 [&amp;[open]]:flex items-center justify-center w-full h-full fixed inset-0 svelte-k3kgo8"><div role="dialog" aria-labelledby="modal-title" aria-modal="true" class="bg-white rounded-lg w-full max-w-[600px] mx-0 sm:mx-4 max-h-[90vh] overflow-hidden dark:bg-slate-900"><div class="p-4 border-b flex justify-between items-center"><h3 id="modal-title" class="text-lg font-semibold flex items-center gap-2"><span class="text-primary">🎵</span> Sugerir canciones</h3> <button type="button" class="text-gray-500 hover:text-gray-700" aria-label="Cerrar diálogo">✕</button></div> <div class="p-6"><!></div></div></dialog>');function va(a,t){W(t,!1);let r=c(),n=c(""),d=c(""),m=c(""),p=c(!1),u=c(!1);const f="entry.242037522",y="entry.287920603",v="entry.1265334069";function x(){o(p,!1),h(),e(r)?.close()}function h(){o(p,!1),o(n,""),o(d,""),o(m,"")}async function k(a){a.preventDefault(),o(u,!0);try{const a=new FormData;a.append(f,e(n)),a.append(y,e(d)),a.append(v,e(m)),await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfBNmQYetQjkbnGOfwhD6QB8CxhRkXTGr7oa9Y8XgRRdBGe8Q/formResponse",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(a)}),o(p,!0)}catch(a){console.error("Error al enviar el formulario:",a)}finally{o(u,!1)}}J((()=>(document.addEventListener("openSongModal",(()=>{h(),e(r)?.showModal()})),()=>{document.removeEventListener("openSongModal",(()=>{e(r)?.showModal()}))}))),K();var w=na(),j=s(w),C=s(j),E=l(s(C),2);i(C);var N=l(C,2),T=s(N),A=a=>{var t=ia(),r=s(t),c=l(s(r),2);Q(c),i(r);var p=l(r,2),f=l(s(p),2);Q(f),i(p);var y=l(p,2),v=l(s(y),2);$(v),i(y);var x=l(y,2),h=s(x),w=s(h),j=a=>{var e=sa();ea(),g(a,e)},C=a=>{var e=ta("Enviar Sugerencia");g(a,e)};G(w,(a=>{e(u)?a(j):a(C,!1)})),i(h),i(x),i(t),aa((()=>h.disabled=e(u))),M(c,(()=>e(n)),(a=>o(n,a))),M(f,(()=>e(d)),(a=>o(d,a))),M(v,(()=>e(m)),(a=>o(m,a))),b("submit",t,k),g(a,t)},S=a=>{var e=la(),t=l(s(e),2),r=s(t),o=l(r,2);i(t),i(e),b("click",r,h),b("click",o,x),g(a,e)};G(T,(a=>{e(p)?a(S,!1):a(A)})),i(N),i(j),i(w),oa(w,(a=>o(r,a)),(()=>e(r))),b("click",E,x),b("click",w,(function(a){a.target===e(r)&&x()})),g(a,w),Z()}export{va as default};