if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-e64871ad"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_commonjs-dynamic-modules-TDtrdbi3.js",revision:null},{url:"assets/arc-DIVFXcaG.js",revision:null},{url:"assets/array-BKyUJesY.js",revision:null},{url:"assets/blockDiagram-38ab4fdb-La8EZSC7.js",revision:null},{url:"assets/bug-issue-template-BID_ABWq.js",revision:null},{url:"assets/c4Diagram-3d4e48cf-CU_rKoIE.js",revision:null},{url:"assets/channel-CqlNMLiN.js",revision:null},{url:"assets/classDiagram-70f12bd4-BsKT4x2w.js",revision:null},{url:"assets/classDiagram-v2-f2320105-Uwhwka--.js",revision:null},{url:"assets/clone-1TcjPmQD.js",revision:null},{url:"assets/createText-2e5e7dd3-CE_J1_zy.js",revision:null},{url:"assets/directory-open-01563666-DWU9wJ6I.js",revision:null},{url:"assets/directory-open-4ed118d0-BNgAhb94.js",revision:null},{url:"assets/edges-e0da2a9e-DMP-sWsT.js",revision:null},{url:"assets/erDiagram-9861fffd-KAsUHoXv.js",revision:null},{url:"assets/file-open-002ab408-CQ9a1yTP.js",revision:null},{url:"assets/file-open-7c801643-CD3BRLr1.js",revision:null},{url:"assets/file-save-3189631c-x92wctJd.js",revision:null},{url:"assets/file-save-745eba88-D6MGJDcB.js",revision:null},{url:"assets/flowchart-elk-definition-4a651766-CRhGAVOr.js",revision:null},{url:"assets/flowDb-956e92f1-BpmbP4GS.js",revision:null},{url:"assets/flowDiagram-66a62f08-FwEi35x1.js",revision:null},{url:"assets/flowDiagram-v2-96b9c2cf-B84qDYnz.js",revision:null},{url:"assets/ganttDiagram-c361ad54-B8zynRdd.js",revision:null},{url:"assets/gitGraphDiagram-72cf32ee-Bdlr--Jr.js",revision:null},{url:"assets/graph-BcQzECOo.js",revision:null},{url:"assets/image-blob-reduce.esm-xKov1Fz_.js",revision:null},{url:"assets/index-3862675e-D058T-Dy.js",revision:null},{url:"assets/index-BHqQJCmq.js",revision:null},{url:"assets/index-ChGp7972.js",revision:null},{url:"assets/index-DDSADHlU.js",revision:null},{url:"assets/index-Dh_slnC5.css",revision:null},{url:"assets/infoDiagram-f8f76790-DSuNAs_l.js",revision:null},{url:"assets/init-Gi6I4Gst.js",revision:null},{url:"assets/journeyDiagram-49397b02-JHk8iisb.js",revision:null},{url:"assets/katex-rPiVaalG.js",revision:null},{url:"assets/layout-C_yw5Plb.js",revision:null},{url:"assets/line-geZRuRpD.js",revision:null},{url:"assets/linear-L3zkKTnz.js",revision:null},{url:"assets/mindmap-definition-fc14e90a-CZohXqxg.js",revision:null},{url:"assets/ordinal-Cboi1Yqb.js",revision:null},{url:"assets/path-CbwjOpE9.js",revision:null},{url:"assets/pica-Cm97YrSP.js",revision:null},{url:"assets/pieDiagram-8a3498a8-xP5s_iRM.js",revision:null},{url:"assets/quadrantDiagram-120e2f19-sVaDanz2.js",revision:null},{url:"assets/random-username.esm-__vdrxyo.js",revision:null},{url:"assets/requirementDiagram-deff3bca-DxNIn41u.js",revision:null},{url:"assets/roundRect-0PYZxl1G.js",revision:null},{url:"assets/sankeyDiagram-04a897e0-qkFUy-21.js",revision:null},{url:"assets/sequenceDiagram-704730f1-BVZVW22v.js",revision:null},{url:"assets/stateDiagram-587899a1-DRXZ86g2.js",revision:null},{url:"assets/stateDiagram-v2-d93cdb3a-dtqF_lL4.js",revision:null},{url:"assets/styles-6aaf32cf-DM6gb-TW.js",revision:null},{url:"assets/styles-9a916d00-C6zzD6o8.js",revision:null},{url:"assets/styles-c10674c1-C5yJTyxV.js",revision:null},{url:"assets/svgDrawCommon-08f97a94-Bty_aK9H.js",revision:null},{url:"assets/Tableau10-B-NsZVaP.js",revision:null},{url:"assets/timeline-definition-85554ec2-sk81JUlx.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/xychartDiagram-e933f94c-CG5In1kV.js",revision:null},{url:"index.html",revision:"4bf002a1030fe4f9444ffbefd917aab7"},{url:"android-chrome-192x192.png",revision:"3d005c71b9ea629a8d137916a02ce9af"},{url:"apple-touch-icon.png",revision:"a9b855bc4fa588808a72c126fa9ade00"},{url:"favicon-32x32.png",revision:"1bcbbaf7639d13ce6e4abbd4a785f3dd"},{url:"favicon-16x16.png",revision:"6fc51d9533178efaec96f5c3c1f4c357"},{url:"manifest.webmanifest",revision:"9665628e4b8d1fb2e26d7e071c031172"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/.+.woff2/,new s.CacheFirst({cacheName:"fonts",plugins:[new s.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:7776e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/fonts.css/,new s.StaleWhileRevalidate({cacheName:"fonts",plugins:[new s.ExpirationPlugin({maxEntries:50})]}),"GET"),s.registerRoute(/locales\/[^/]+.js/,new s.CacheFirst({cacheName:"locales",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),s.registerRoute(/.chunk-.+.js/,new s.CacheFirst({cacheName:"chunk",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:7776e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
