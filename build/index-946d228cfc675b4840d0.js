!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./build/",n(n.s=12)}({12:function(e,t,n){n(13),function(){var e=function(e,t){var n=document.querySelector(e);n&&t(n)};e(".download-link",(function(e){e.addEventListener("click",(function(e){var t=e.target.dataset.platform;trackEvent("download",{event_category:"download",event_label:t})}))})),e(".link",(function(e){e.addEventListener("click",(function(e){var t=e.target.dataset.link;trackEvent("link",{event_category:"click",event_label:t})}))}));var t=document.querySelector("#video-feature-1"),n=document.querySelector("#video-feature-3"),r=0,o=0,u=["assets/feature-1-0.mp4","assets/feature-1-1.mp4","assets/feature-1-2.mp4"],a=["assets/feature-3-0.mp4","assets/feature-3-1.mp4"];t&&n&&(t.addEventListener("ended",(function(){r+1>u.length-1?r=0:r++,t.src=u[r]})),n.addEventListener("ended",(function(){o+1>a.length-1?o=0:o++,n.src=a[o]})))}()},13:function(e,t,n){}});