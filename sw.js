if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const c=e=>i(e,r),t={module:{uri:r},exports:d,require:c};s[r]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(o(...e),d)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.28d71e7c.css",revision:null},{url:"assets/index.65a9ee76.js",revision:null},{url:"assets/vendor.5d251a7b.js",revision:null},{url:"index.html",revision:"4534c2d42dcfcc803b19d90a965c788a"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"sounds/pomodoro_tick.mp3",revision:"e381cc2c54a9ab31b598bb5c538af7f5"},{url:"sounds/pomodoro_end.mp3",revision:"2c8f04cd1d0dd1aa481d09d734963a19"},{url:"images/icon-144.png",revision:"b2500c7fc806b1f231af78fc3c527acb"},{url:"manifest.webmanifest",revision:"1b149a9886360d32c90ff86ef0de325f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
