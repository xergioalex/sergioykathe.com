import{c as Da,o as ha,i as fa}from"./index-client.C1THjZ6J.js";import{j as Ha,x as Sa,D as Aa,q as La,G as qa,R as Pa,aj as Qa,ai as Ga,ap as ja,C as Ja,aH as Va,N as Wa,B as Ba,a6 as Ka,aF as Ra,p as ua,m as D,g as a,s as _,aJ as Ya,aK as Xa,e as s,d as n,r,S as H,a as p,b as ya,h as u,t as q,aR as Ca,T as Za,V as at,n as tt,f as ma,c as Ma,U as et}from"./template.DVlVoHZ-.js";import{s as S}from"./render.BuQqxbec.js";import{i as I,b as Ea}from"./this.D6TLyT_x.js";import{p as R}from"./props.BxJD76RI.js";import{e as za,i as Na}from"./each.E1tY0HBJ.js";import{b as rt}from"./input.BUXY2MnG.js";import{i as st}from"./proxy.DTUdp9B4.js";import{a as nt}from"./analytics.DfSQxh5K.js";import{g as it}from"./invite.C41q0KXj.js";function ot(a,t,e,s,r){var n,i=a,o="";Ha((()=>{o!==(o=t()??"")?(void 0!==n&&(Ba(n),n=void 0),""!==o&&(n=La((()=>{if(Sa){qa.data;for(var a=Aa(),t=a;null!==a&&(8!==a.nodeType||""!==a.data);)t=a,a=Pa(a);if(null===a)throw Qa(),Ga;return ja(qa,t),void(i=Ja(a))}var e=Va(o+"");ja(Wa(e),e.lastChild),i.before(e)})))):Sa&&Aa()}))}function Fa(a,t,e){if(a.multiple)return ct(a,t);for(var s of a.options){var r=ca(s);if(st(r,t))return void(s.selected=!0)}(!e||void 0!==t)&&(a.selectedIndex=-1)}function lt(a,t){Ra((()=>{var t=new MutationObserver((()=>{var t=a.__value;Fa(a,t)}));return t.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}}))}function Oa(a,t,e=t){var s=!0;Ka(a,"change",(t=>{var s,r=t?"[selected]":":checked";if(a.multiple)s=[].map.call(a.querySelectorAll(r),ca);else{var n=a.querySelector(r)??a.querySelector("option:not([disabled])");s=n&&ca(n)}e(s)})),Ra((()=>{var r=t();if(Fa(a,r,s),s&&void 0===r){var n=a.querySelector(":checked");null!==n&&(r=ca(n),e(r))}a.__value=r,s=!1})),lt(a)}function ct(a,t){for(var e of a.options)e.selected=~t.indexOf(ca(e))}function ca(a){return"__value"in a?a.__value:a.value}var dt=u('<span class="block mt-2">Además, tienes la opción de alojarte en la finca</span>'),vt=u("<option> </option>"),pt=u("<option> </option>"),mt=u('<div class="space-y-2 mt-6"><label for="stayAttendance" class="block text-center text-base text-gray-700 dark:text-gray-300">¿Cuántas personas se alojarán en la finca? <span class="block text-sm text-gray-500 dark:text-gray-400 mt-1"> </span></label> <select id="stayAttendance" required class="mt-4 mx-auto block w-48 text-center rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white text-base py-2"></select></div>'),ft=at('<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'),ut=u('<div class="space-y-4"><div class="text-center"><h4 class="text-2xl font-semibold mb-3"> </h4> <p class="text-gray-600 dark:text-gray-400 mt-1 text-lg">Nos encantaría que nos acompañes en este día tan especial <!></p></div> <form class="space-y-6"><div class="space-y-2"><label for="partyAttendance" class="block text-center text-base text-gray-700 dark:text-gray-300">¿Cuántas personas confirmas que asistirán? <span class="block text-sm text-gray-500 dark:text-gray-400 mt-1"> </span></label> <select id="partyAttendance" required class="mt-4 mx-auto block w-48 text-center rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white text-base py-2"></select></div> <!> <div class="space-y-2 mt-6"><label for="message" class="block text-center text-base text-gray-700 dark:text-gray-300">¿Quieres dejarles un mensaje a los novios? (opcional)</label> <textarea id="message" placeholder="Escribe tu mensaje aquí..." class="mt-2 w-full px-4 py-2 rounded-md border-2 border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-gray-700 dark:text-white text-base resize-none hover:border-primary transition-colors duration-200" rows="3"></textarea></div> <div class="flex justify-center mt-6"><button type="submit" class="btn btn-primary"><!> </button></div></form></div>'),yt=u('<p class="text-gray-600 dark:text-gray-400"> </p>'),bt=u('<div class="text-center space-y-4"><div class="flex justify-center items-center gap-2"><span class="text-5xl">✨</span> <span class="text-5xl">💝</span> <span class="text-5xl">✨</span></div> <h4 class="text-2xl font-script text-primary">¡Gracias por confirmar!</h4> <p class="text-gray-600 dark:text-gray-400"> </p> <!> <div class="w-full h-px bg-gray-200 dark:bg-slate-800 my-4"></div> <p class="text-sm text-gray-500 dark:text-gray-400">Si necesitas modificar tu confirmación más adelante, podrás hacerlo en cualquier momento</p> <button class="btn btn-primary mt-6"><span class="flex items-center justify-center gap-2">Aceptar</span></button></div>'),gt=u('<dialog class="hidden bg-transparent p-0 backdrop:bg-black backdrop:bg-opacity-50 [&amp;[open]]:flex items-center justify-center w-full h-full fixed inset-0 svelte-k3kgo8"><div class="bg-white rounded-lg w-full max-w-[600px] mx-0 sm:mx-4 dark:bg-slate-900"><div class="p-4 border-b flex justify-between items-center"><h3 class="text-base font-semibold flex items-center gap-2"><span class="text-primary">💌</span> Confirmar asistencia</h3> <button class="text-gray-500">✕</button></div> <div class="p-4"><!></div></div></dialog>');function xt(t,e){ua(e,!1);let i=R(e,"invite",8);const o=Da();let c=D(),l=D(!1),d=D(!1),m=D(i().partyInvitations),u=D(i().stayInvitations),v=D("");const y="entry.23826224",f="entry.1899043457",x="entry.427068344",b="entry.446464576",g="entry.424554911",h="entry.38093445",k="entry.802664838";function w(){_(l,!1),a(c)?.close(),o("close")}async function j(t){t.preventDefault(),_(d,!0);try{const t=new FormData;t.append(y,i().code),t.append(f,i().name),t.append(x,i().partyInvitations.toString()),t.append(b,a(m).toString()),t.append(g,i().stayInvitations.toString()),t.append(h,a(u).toString()),t.append(k,a(v).trim()),nt.capture("confirmation_submitted",{inviteCode:i().code,partyAttendance:a(m),stayAttendance:a(u),hasMessage:a(v).trim().length>0}),await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfPN3oQllE8Sc50IbpbxW4WkFsODtgeznrpPQ6xyGg1SftYdA/formResponse",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(t)}),_(l,!0),localStorage.setItem(`confirmation-${i().code}`,JSON.stringify({partyAttendance:a(m),stayInvitations:a(u),message:a(v),lastUpdate:(new Date).toISOString()})),o("confirmationUpdate",{partyAttendance:a(m),stayInvitations:a(u),message:a(v),lastUpdate:(new Date).toISOString()})}catch(a){console.error("Error al enviar el formulario:",a)}finally{_(d,!1)}}ha((()=>{a(c)?.showModal(),_(v,"");const t=localStorage.getItem(`confirmation-${i().code}`);if(t){const a=JSON.parse(t);_(m,a.partyAttendance),_(u,a.stayInvitations)}})),Ya((()=>a(m)),(()=>{0===a(m)&&_(u,0)})),Xa(),fa();var $=gt(),A=s($),C=s(A),z=n(s(C),2);r(C);var N=n(C,2),M=s(N),O=t=>{var e=ut(),o=s(e),c=s(o),l=s(c);r(c);var y=n(c,2),f=n(s(y)),x=a=>{var t=dt();p(a,t)};I(f,(a=>{i().stayInvitations>0&&a(x)})),r(y),r(o);var b=n(o,2),g=s(b),h=s(g),k=n(s(h)),w=s(k);r(k),r(h);var $=n(h,2);q((()=>{a(m),Ca((()=>{i()}))})),za($,5,(()=>[...Array(i().partyInvitations+1).keys()]),Na,((t,e)=>{var n=vt(),i={},o=s(n);r(n),q((()=>{i!==(i=a(e))&&(n.value=null==(n.__value=a(e))?"":a(e)),S(o,`${a(e)??""} ${(1===a(e)?"persona":"personas")??""}`)})),p(t,n)})),r($),r(g);var D=n(g,2),A=t=>{var e=mt(),o=s(e),c=n(s(o)),l=s(c);r(c),r(o);var d=n(o,2);q((()=>{a(u),Ca((()=>{a(m),i()}))})),za(d,5,(()=>[...Array(Math.min(a(m),i().stayInvitations)+1).keys()]),Na,((t,e)=>{var n=pt(),i={},o=s(n);r(n),q((()=>{i!==(i=a(e))&&(n.value=null==(n.__value=a(e))?"":a(e)),S(o,`${a(e)??""} ${(1===a(e)?"persona":"personas")??""}`)})),p(t,n)})),r(d),r(e),q((()=>S(l,`(Dispones de ${i().stayInvitations??""}\n                    ${(1===i().stayInvitations?"plaza":"plazas")??""} para alojamiento)`))),Oa(d,(()=>a(u)),(a=>_(u,a))),p(t,e)};I(D,(t=>{i()&&i().stayInvitations>0&&a(m)>0&&t(A)}));var C=n(D,2),R=n(s(C),2);Za(R),r(C);var z=n(C,2),N=s(z),M=s(N),O=a=>{var t=ft();p(a,t)};I(M,(t=>{a(d)&&t(O)}));var E=n(M);r(N),r(z),r(b),r(e),q((()=>{S(l,`¡Hola, ${i().name??""}!`),S(w,`(De las ${i().partyInvitations??""}\n                  ${(1===i().partyInvitations?"plaza reservada":"plazas reservadas")??""})`),N.disabled=a(d),S(E,` ${(a(d)?"Enviando...":"Confirmar asistencia")??""}`)})),Oa($,(()=>a(m)),(a=>_(m,a))),rt(R,(()=>a(v)),(a=>_(v,a))),H("submit",b,j),p(t,e)},E=t=>{var e=bt(),o=n(s(e),4),c=s(o,!0);r(o);var l=n(o,2),d=t=>{var e=yt(),n=s(e);r(e),q((()=>S(n,`Además, ${(1===a(u)?"disfrutarás del alojamiento":`${a(u)} personas disfrutarán del alojamiento`)??""} en la finca 🏡`))),p(t,e)};I(l,(t=>{i()&&i().stayInvitations>0&&a(u)>0&&t(d)}));var v=n(l,6);r(e),q((()=>S(c,0===a(m)?"Lamentamos que no puedas acompañarnos en este día tan especial":1===a(m)?"Nos alegra mucho saber que nos acompañarás en este día tan especial":`Nos alegra mucho saber que nos acompañarán ${a(m)} personas en este día tan especial`))),H("click",v,w),p(t,e)};I(M,(t=>{a(l)?t(E,!1):t(O)})),r(N),r(A),r($),Ea($,(a=>_(c,a)),(()=>a(c))),H("click",z,w),H("click",$,(({target:t})=>t===a(c)&&w())),p(t,$),ya()}var _t=u('<dialog class="hidden bg-transparent p-0 backdrop:bg-black backdrop:bg-opacity-50 [&amp;[open]]:flex items-center justify-center w-full h-full fixed inset-0 svelte-13t4ywx"><div class="bg-white rounded-lg w-full max-w-[600px] mx-4 dark:bg-slate-900"><div class="p-4 border-b flex justify-between items-center"><h3 class="text-lg font-semibold flex items-center gap-2"><span class="text-primary">ℹ️</span> Información</h3> <button class="text-gray-500">✕</button></div> <div class="p-6"><div class="text-center space-y-4"><h4 class="text-xl font-semibold">Invitación no encontrada</h4> <p class="text-gray-600 dark:text-gray-400">Para confirmar tu asistencia, debes usar el enlace de invitación que se te ha proporcionado.</p> <p class="text-gray-600 dark:text-gray-400">Si aún no cuentas con uno, por favor comunícate con Sergio o Katherine para solicitar una invitación.</p> <button class="btn btn-primary mt-4">Entendido</button></div></div></div></dialog>');function ht(t,e){ua(e,!1);const i=Da();let o=D();function c(){a(o)?.close(),i("close")}ha((()=>{a(o)?.showModal()})),fa();var l=_t(),d=s(l),m=s(d),u=n(s(m),2);r(m);var v=n(m,2),y=s(v),f=n(s(y),6);r(y),r(v),r(d),r(l),Ea(l,(a=>_(o,a)),(()=>a(o))),H("click",u,c),H("click",f,c),H("click",l,(({target:t})=>t===a(o)&&c())),p(t,l),ya()}var kt=u('<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter mb-4"> </p>'),wt=u("<br><b>Cupos de alojamiento:</b> ",1),It=u('<a href="#rsvp" class="btn btn-primary w-full sm:w-auto">Confirmar asistencia <span class="ml-2">→</span></a>'),St=u('<div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto"><!> <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"> </h1> <div class="max-w-3xl mx-auto lg:max-w-none"><p class="text-xl text-muted mb-6 dark:text-slate-300 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"> </p> <p class="text-xl text-secondary mb-6 dark:text-slate-300 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"><!> <!></p> <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"><!> <a href="#evento" class="btn w-full sm:w-auto">Más información</a></div></div></div>');function At(a,t){ua(t,!1);let e=R(t,"invite",8),i=R(t,"title",8),o=R(t,"subtitle",8),c=R(t,"content",8),l=R(t,"tagline",8);fa();var d=St(),m=s(d),u=a=>{var t=kt(),e=s(t,!0);r(t),q((()=>S(e,l()))),p(a,t)};I(m,(a=>{l()&&a(u)}));var v=n(m,2),y=s(v,!0);r(v);var f=n(v,2),x=s(f),b=s(x,!0);r(x);var g=n(x,2),h=s(g);ot(h,(()=>e()?0===e().partyInvitations?"<b>Fecha:</b> 22 de marzo de 2025":`<b>Fecha:</b> 22 de marzo de 2025<br><b>Número de invitados:</b> ${e().partyInvitations}`:c()));var k=n(h,2),w=a=>{var t=wt(),s=n(ma(t),2);q((()=>S(s,` ${e().stayInvitations??""}`))),p(a,t)};I(k,(a=>{e()&&e().stayInvitations>0&&a(w)})),r(g);var j=n(g,2),_=s(j),$=a=>{var t=It();p(a,t)};I(_,(a=>{(!e()||e().partyInvitations>0)&&a($)})),tt(2),r(j),r(f),r(d),q((()=>{S(y,e()?`${e().name}`:i()),S(b,e()?0===e().partyInvitations?"Queremos compartir contigo la alegría de nuestro matrimonio y hacerte partícipe de este momento tan especial aunque no puedas acompañarnos físicamente.":e().isGroup?`Nos llena de alegría ${"female"===e().genre?"invitarlas":"invitarlos"} a ser parte de este momento tan especial en el que unimos nuestras vidas por siempre.`:"Nos llena de alegría invitarte a ser parte de este momento tan especial en el que unimos nuestras vidas por siempre.":o())})),p(a,d),ya()}var qt=u('<div class="flex justify-center items-center min-h-[200px]"><div class="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div></div>'),jt=u('<div class="space-y-4"><p class="text-lg">Queremos compartir contigo la alegría de nuestro matrimonio y hacerte partícipe de este momento tan\n              especial.</p> <p class="text-lg text-muted">Sabemos que no podrás acompañarnos físicamente, pero tu cariño y buenos deseos estarán con nosotros en\n              este día tan especial.</p></div>'),Ct=u('<p class="text-lg"> </p>'),Mt=u('<p class="text-lg text-primary opacity-100"> </p>'),zt=u('<div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg"><p class="text-green-700 dark:text-green-300"> <!></p> <p class="text-sm text-green-600 dark:text-green-400 mt-1"> </p></div>'),Nt=u('<button type="button" class="btn btn-primary w-full sm:w-auto"> </button>'),Ot=u('<div class="space-y-4 opacity-100"><h3 class="text-2xl font-semibold text-primary"> </h3> <!> <!> <!> <!></div>'),Dt=u('<div class="space-y-4"><h3 class="text-2xl font-semibold text-primary">¿Tienes una invitación? 💌</h3> <p class="text-lg">Para confirmar tu asistencia, necesitas usar el enlace de invitación que te proporcionamos.</p> <p class="text-muted">Si aún no tienes uno, contacta con nosotros para solicitar tu invitación.</p> <button type="button" class="btn btn-primary w-full sm:w-auto">Verificar invitación</button></div>'),Rt=u('<div class="space-y-6 opacity-100"><!></div>'),Et=u('<button type="button" class="btn btn-primary w-full sm:w-auto"><span class="flex items-center justify-center">Confirmar asistencia <span class="ml-2">→</span></span></button>'),Ft=u("<!> <!> <!>",1);function Bt(t,e){ua(e,!1);let i=R(e,"showFullInfo",8,!1),o=R(e,"title",8,""),c=R(e,"subtitle",8,""),l=R(e,"content",8,""),d=R(e,"tagline",8,""),m=R(e,"heroMode",8,!1),u=D(),v=D(!1),y=D(!1),f=D(!0),x=D(null);async function b(){try{const t=await async function(){try{return(await(await fetch("/data/invites.json")).json()).invites}catch(a){return console.error("Error loading invites:",a),[]}}(),e=it();if(_(u,t.find((a=>a.code===e))),a(u)){const t=localStorage.getItem(`confirmation-${a(u).code}`);t&&_(x,JSON.parse(t))}}catch(a){console.error("Error initializing:",a)}finally{_(f,!1)}}function g(){a(u)?_(v,!0):_(y,!0)}function h(a){_(x,a.detail)}ha((()=>{b()})),fa();var k=Ft(),w=ma(k),j=a=>{var t=qt();p(a,t)},$=t=>{var e=Ma(),v=ma(e),y=t=>{At(t,{get invite(){return a(u)},get title(){return o()},get subtitle(){return c()},get content(){return l()},get tagline(){return d()}})},f=t=>{var e=Ma(),o=ma(e),c=t=>{var e=Rt(),i=s(e),o=t=>{var e=Ot(),i=s(e),o=s(i);r(i);var c=n(i,2),l=a=>{var t=jt();p(a,t)},d=t=>{var e=Ct(),n=s(e);r(e),q((()=>S(n,`Tienes ${a(u).partyInvitations??""}\n            ${(1===a(u).partyInvitations?"invitación":"invitaciones")??""} para nuestro evento`))),p(t,e)};I(c,(t=>{0===a(u).partyInvitations?t(l):t(d,!1)}));var m=n(c,2),v=t=>{var e=Mt(),n=s(e);r(e),q((()=>S(n,`¡Además ${(a(u).isGroup?"female"===a(u).genre?"están invitadas":"están invitados":"female"===a(u).genre?"estás invitada":"estás invitado")??""}\n            a quedarte en la finca! Tienes ${a(u).stayInvitations??""}\n            ${(1===a(u).stayInvitations?"plaza disponible":"plazas disponibles")??""} para alojamiento.`))),p(t,e)};I(m,(t=>{a(u).stayInvitations>0&&t(v)}));var y=n(m,2),f=t=>{var e=zt(),i=s(e),o=s(i),c=n(o),l=t=>{var e=et();q((()=>S(e,`y ${a(x).stayInvitations??""} para alojamiento`))),p(t,e)};I(c,(t=>{a(x).stayInvitations>0&&t(l)})),r(i);var d=n(i,2),m=s(d);q((()=>S(m,`Última actualización: ${new Date(a(x).lastUpdate).toLocaleString()??""}`))),r(d),r(e),q((()=>S(o,`Has confirmado ${a(x).partyAttendance??""}\n              ${(1===a(x).partyAttendance?"asistente":"asistentes")??""} `))),p(t,e)};I(y,(t=>{a(x)&&t(f)}));var b=n(y,2),h=t=>{var e=Nt(),n=s(e,!0);r(e),q((()=>S(n,a(x)?"Actualizar Confirmación":"Confirmar mi Asistencia"))),H("click",e,g),p(t,e)};I(b,(t=>{a(u).partyInvitations>0&&t(h)})),r(e),q((()=>S(o,`¡Hola, ${a(u).name??""}! 👋`))),p(t,e)},c=a=>{var t=Dt(),e=n(s(t),6);r(t),H("click",e,g),p(a,t)};I(i,(t=>{a(u)?t(o):t(c,!1)})),r(e),p(t,e)},l=a=>{var t=Et();H("click",t,g),p(a,t)};I(o,(a=>{i()?a(c):a(l,!1)}),!0),p(t,e)};I(v,(a=>{m()?a(y):a(f,!1)}),!0),p(t,e)};I(w,(t=>{a(f)?t(j):t($,!1)}));var A=n(w,2),C=t=>{xt(t,{get invite(){return a(u)},$$events:{close:()=>_(v,!1),confirmationUpdate:h}})};I(A,(t=>{a(v)&&a(u)&&t(C)}));var z=n(A,2),N=a=>{ht(a,{$$events:{close:()=>_(y,!1)}})};I(z,(t=>{a(y)&&t(N)})),p(t,k),ya()}export{Bt as default};