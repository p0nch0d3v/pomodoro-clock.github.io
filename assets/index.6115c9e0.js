import{v as T,j as v,r as m,F as b,f as _,a as j,b as L,c as P,R as E,d as O}from"./vendor.5d251a7b.js";const F=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};F();function M(s={}){const{immediate:a=!1,onNeedRefresh:r,onOfflineReady:i,onRegistered:e,onRegisterError:o}=s;let c;const u=async(l=!0)=>{};return"serviceWorker"in navigator&&(c=new T("/sw.js",{scope:"/",type:"classic"}),c.addEventListener("activated",l=>{l.isUpdate?window.location.reload():i==null||i()}),c.register({immediate:a}).then(l=>{e==null||e(l)}).catch(l=>{o==null||o(l)})),u}const n=v.exports.jsx,h=v.exports.jsxs,W=v.exports.Fragment;function B(){const[s,a]=m.exports.useState(0),[r,i]=m.exports.useState(!1),[e,o]=m.exports.useState(null),c=new Audio("./sounds/pomodoro_tick.mp3");c.preload="auto";const u=new Audio("./sounds/pomodoro_end.mp3");u.preload="auto";const p=1e3*60,g=s/1e3,N=Math.floor(g/60),y=g%60,w=t=>t<10?`0${t}`:t,f=()=>{var t=c;t.loop=!0,o(t)},S=()=>{var t=u;t.loop=!1,t.play(),o(e)},x=()=>{let t=p*25;a(t),f()},k=()=>{let t=p*5;a(t),f()},R=()=>{let t=p*15;a(t),f()},A=()=>{r?(a(0),e&&e.pause()):e&&e.play(),i(t=>!t)},C=()=>{i(!1),a(0),e&&(e.pause(),o(null))};m.exports.useEffect(()=>{let t=null;return r?s>=1e3?t=setInterval(()=>{a(I=>I-1e3)},1e3):(clearInterval(t),i(!1),e.pause(),S()):r||clearInterval(t),()=>clearInterval(t)},[r,s]);const d="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3";return n("div",{className:"pomodoro container-fluid",children:h("div",{className:"pomorodo-wrapper row",children:[s===0&&h(W,{children:[n("span",{className:d+" icon",children:n(b,{className:"w-75",icon:_})}),n("span",{className:d+" mb-1",children:n("button",{className:"timeSet btn btn-danger w-100",disabled:r,onClick:x,children:"25m"})}),n("span",{className:d+" mb-1 mt-1",children:n("button",{disabled:r,className:"timeSet btn btn-primary w-100",onClick:k,children:"05m"})}),n("span",{className:d+" mb-1 mt-1",children:n("button",{disabled:r,className:"timeSet btn btn-success w-100",onClick:R,children:"15m"})})]}),s>0&&h("span",{className:"col-12 time",children:[w(N),":",w(y)]}),s>0&&!r&&n("span",{className:d,children:n("button",{className:"cancel btn btn-danger w-75",onClick:C,children:n(b,{icon:j})})}),s>0&&n("span",{className:d,children:n("button",{disabled:s<=0,className:"w-75 btn "+(r?"stop btn-danger":"start btn-success"),onClick:A,children:n(b,{icon:r?L:P})})})]})})}const D=60*60*1e3,$=M({onRegistered(s){s&&setInterval(()=>{s.update()},D)}});$();E.render(n(O.StrictMode,{children:n(B,{})}),document.getElementById("root"));
