!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://songriffer.com/app/",n(n.s=0)}([function(e,t){const n=(e,t,n)=>{let o=[];for(let u=0;u<t;u++)o=[...o,r(e.slice(u*n,u*n+n))];return o},r=e=>e.reduce((e,t)=>({max:t>e.max?t:e.max,min:t<e.min?t:e.min}),{max:-1,min:1});self.addEventListener("message",e=>{const t=((e,t,r)=>{const o=t/r,u=Math.ceil(e.length/o);return n(e,o,u)})(e.data.channelData,e.data.width,e.data.pointWidth);self.postMessage(t)})}]);