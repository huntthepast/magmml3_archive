/*! For license information please see silverstar_download.js.LICENSE.txt */
(()=>{"use strict";var e,r={"./src/js/silverstar_download.js":(e,r,o)=>{o.r(r);var t=o("./node_modules/lenis/dist/lenis.mjs");o("./node_modules/sweetalert2/dist/sweetalert2.all.js");gsap.registerPlugin(ScrollTrigger,ScrollToPlugin),document.addEventListener("DOMContentLoaded",(()=>{const e=new t.default({duration:1.5,direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1});requestAnimationFrame((function r(o){e.raf(o),ScrollTrigger.update(),requestAnimationFrame(r)})),e.on("scroll",ScrollTrigger.update),window.lenis=e}))}},o={};function t(e){var n=o[e];if(void 0!==n)return n.exports;var l=o[e]={exports:{}};return r[e].call(l.exports,l,l.exports,t),l.exports}t.m=r,e=[],t.O=(r,o,n,l)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,l]=e[u],a=!0,s=0;s<o.length;s++)(!1&l||i>=l)&&Object.keys(t.O).every((e=>t.O[e](o[s])))?o.splice(s--,1):(a=!1,l<i&&(i=l));if(a){e.splice(u--,1);var d=n();void 0!==d&&(r=d)}}return r}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,n,l]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={silverstar_download:0};t.O.j=r=>0===e[r];var r=(r,o)=>{var n,l,[i,a,s]=o,d=0;if(i.some((r=>0!==e[r]))){for(n in a)t.o(a,n)&&(t.m[n]=a[n]);if(s)var u=s(t)}for(r&&r(o);d<i.length;d++)l=i[d],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(u)},o=self.webpackChunkmagmml3_archive=self.webpackChunkmagmml3_archive||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var n=t.O(void 0,["vendors"],(()=>t("./src/js/silverstar_download.js")));n=t.O(n)})();