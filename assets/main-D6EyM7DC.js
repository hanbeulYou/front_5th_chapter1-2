import{c as d,B as a,r as u,a as t,u as r,p as h,H as b,U as w,b as i,P as f,F as P,L as S}from"./render-BAq42cD0.js";const m=e=>{const{subscribe:c,notify:o}=d(),s=()=>window.location.pathname.replace(a,"")||"/",g=()=>e[s()],l=n=>{const p=a+n;window.history.pushState(null,"",p),o()};return window.addEventListener("popstate",()=>o()),{get path(){return s()},push:l,subscribe:c,getTarget:g}};u.set(m({"/":b,"/login":()=>{const{loggedIn:e}=r.getState();if(e)throw new P;return i(S,null)},"/profile":()=>{const{loggedIn:e}=r.getState();if(!e)throw new w;return i(f,null)}}));function E(){u.get()?.subscribe(t),r.subscribe(t),h.subscribe(t),t()}E();
