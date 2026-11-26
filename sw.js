/* Jim's Bar Darts Scorer — offline support.
   The page is fetched fresh whenever there's a connection (so updates arrive straight away),
   and the last copy is used when there isn't. Fonts and icons are kept once seen. */
const CACHE='jimsbar-v2';
const CORE=['./','./index.html','./apple-touch-icon.png','./icon-512.png','./manifest.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE).catch(()=>{})).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
function fresh(req,ms){return new Promise((ok,no)=>{const t=setTimeout(()=>no(new Error('slow')),ms);
  fetch(req).then(r=>{clearTimeout(t);ok(r)},err=>{clearTimeout(t);no(err)})})}
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);
  // the app page: network first (4 s), else the saved copy
  if(req.mode==='navigate'||(url.origin===location.origin&&/\/(index\.html)?$/.test(url.pathname))){
    e.respondWith(fresh(req,4000).then(r=>{if(r&&r.ok){const c=r.clone();caches.open(CACHE).then(k=>k.put('./index.html',c))}return r})
      .catch(()=>caches.match('./index.html').then(r=>r||caches.match('./'))));return}
  // fonts, icons and anything else from this site: saved copy first, refreshed in the background
  if(url.origin===location.origin||/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(caches.match(req).then(hit=>{const net=fetch(req).then(r=>{if(r&&(r.ok||r.type==='opaque')){const c=r.clone();caches.open(CACHE).then(k=>k.put(req,c))}return r}).catch(()=>hit);return hit||net}))}});
