function i(){const t=new URLSearchParams(window.location.search).get("invite");if(t)return localStorage.setItem("inviteId",t),t;return localStorage.getItem("inviteId")||null}function a(){const t=new URLSearchParams(window.location.search);if(t.has("invite")){t.delete("invite");const n=window.location.pathname+(t.toString()?`?${t.toString()}`:"")+window.location.hash;window.history.replaceState({},"",n)}}export{a as c,i as g};