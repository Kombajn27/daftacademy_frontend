!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t,o){var n=o(1),r=o(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(n(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function s(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],c=o[l]||0,u="".concat(l," ").concat(c);o[l]=c+1;var p=s(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(d)):a.push({identifier:u,updater:g(d,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,m=0;function g(e,t){var o,n,r;if(t.singleton){var i=m++;o=h||(h=c(t)),n=d.bind(null,o,i,!1),r=d.bind(null,o,i,!0)}else o=c(t),n=f.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=s(o[n]);a[r].references--}for(var i=l(e,t),c=0;c<o.length;c++){var u=s(o[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}o=i}}}},function(e,t,o){var n=o(3),r=o(4),i=o(5);t=n(!1);var a=r(i);t.push([e.i,'@font-face{font-family:"Red Hat Display";src:url('+a+')}*{box-sizing:border-box;margin:0;margin-bottom:0;padding:0;border:0;text-decoration:none}body{max-width:1920px;margin:0 auto;font-family:"Red Hat Display", Arial}.header{background-color:#d7d7d7;height:550px;width:100%}.nav-container{max-width:1300px;height:90px;margin:0 auto;display:flex}.nav-container__links{color:#151515}.nav-container__icons img{margin:0 5px}.nav-container__icons p{width:16px;height:16px;text-align:center;font-size:16px;line-height:16px;margin-bottom:0;color:#fff;background-color:#151515;border-radius:50%}.carousel-wrapper{position:relative;width:100%;height:auto;background-color:#263a49}.carousel{overflow:auto;scroll-behavior:smooth;scrollbar-width:none;width:75%;margin:0 auto}.carousel::-webkit-scrollbar{display:none}@media screen and (max-width: 800px){.carousel::-webkit-scrollbar{height:4px;display:block}.carousel::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,0.2);width:100px;border-radius:2px}}.carousel__content{display:grid;grid-gap:30px;grid-auto-flow:column;margin:50px 0}.carousel__item{width:268px;height:338px;position:relative}.carousel__img{opacity:0.7}.carousel__img:hover{opacity:1}.carousel__img:hover ~ .carousel__info-cnt{color:#fff}.carousel__info-cnt{position:absolute;bottom:10px;left:20px}.carousel__info{font-size:13px;font-weight:500;margin-bottom:10px}.carousel__info:last-child{font-weight:700}.carousel__button{display:flex;justify-content:center;align-content:center;width:48px;height:48px;border:1px solid #fff;background-color:#263a49;cursor:pointer;position:absolute;color:#fff;font-size:20px;font-weight:700}@media screen and (max-width: 800px){.carousel__button{display:none}}.carousel__button:focus{outline:none}.carousel__button:hover{border:3px solid orangered;font-size:26px}.carousel__button--next{top:50%;right:2%;transform:translate(-50%, -50%)}.carousel__button--next:active{padding-left:4px}.carousel__button--prev{top:50%;left:2%;transform:translate(50%, -50%);display:none}.carousel__button--prev:active{padding-right:4px}.arrivals{max-width:1300px;margin:0 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:100px}.arrivals__headline{font-size:48px;height:256px;line-height:256px}.arrivals__content{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between}.arrivals__item{height:500px;margin-bottom:30px;padding:0}.arrivals__info-cnt{margin-top:18px}.arrivals__info{font-size:13px;font-weight:500;margin-bottom:10px}.arrivals__info--distinction{font-size:10px;font-weight:900}.arrivals__button{width:136px;height:48px;margin-top:15px;border:2px solid #151515;text-align:center;line-height:48px;font-size:13px;font-family:500;cursor:pointer}.themes{width:100%}.themes__cnt{max-width:1300px;height:auto;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fill, 5%);grid-template-rows:repeat(10, 65px);grid-auto-flow:dense}.themes__element{margin:5px;position:relative;overflow:hidden}.themes__element--big{grid-column:span 8;grid-row:span 10}.themes__element--long{grid-column:span 12;grid-row:span 5}.themes__element--normal{grid-column:span 6;grid-row:span 5}.themes__info{position:absolute;width:50%;top:35px;left:35px;background-color:rgba(255,255,255,0.8);padding:5px;border-radius:5px}.themes__title{font-size:24px;font-weight:500;color:#151515}.themes__link{font-size:13px;line-height:17px;font-weight:500;color:#151515;text-decoration:none}.themes__link:hover{border-bottom:2px solid #151515;text-decoration:none;color:#151515}.newsletter{width:100%}.newsletter__cnt{width:1300px;margin:0 auto;display:flex;flex-direction:column;align-items:center;padding:100px 0}.newsletter__headline{font-size:30px;font-weight:500;margin-bottom:35px}.newsletter__info{font-size:16px;font-weight:500}.newsletter__subscribe-cnt{margin-top:45px;min-width:35%}.newsletter__subscribe-form{width:100%;height:30px;padding:5px;border-bottom:2px solid #151515;display:flex;justify-content:space-between}.newsletter__subscribe-input{width:70%}.newsletter__subscribe-input::placeholder{font-size:13px;font-weight:500}.newsletter__subscribe-submit{font-size:13px;font-weight:500;width:15%;background-color:#fff}.newsletter__subscribe-submit:hover{box-shadow:0 0 2px #151515;border-radius:3px}.newsletter__subscribe-submit:focus{outline:none;background-color:#151515;color:#fff}.newsletter__subscribe-asterix{font-size:13px;font-weight:500;margin-top:24px}.footer{width:100%}.footer__cnt{max-width:1300px;margin:0 auto;display:flex;flex-direction:column}.footer__main-section{width:100%;display:flex;align-items:center;padding:30px 0}.footer__media{flex:1}.footer__media-icon{margin-right:30px}.footer__policy{display:flex;justify-content:center;flex:1}.footer__policy-item{margin:0 22px;font-size:13px;font-weight:700;color:#151515}.footer__policy-item:hover{text-decoration:none;color:#151515;border-bottom:1px solid #151515}.footer__nationality{flex:1;margin-bottom:0;text-align:right}.footer__nationality-label{font-size:13px;font-weight:500;margin-bottom:0}.footer__nationality-select{font-size:13px;font-weight:700}.footer__bottom-section{display:flex;justify-content:space-between;padding:10px 0}.footer__rights{margin:0}\n',""]),e.exports=t},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(a=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(i).concat([r]).join("\n")}var a,s,l;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&r[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),t.push(l))}},t}},function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/e7897cb24d4f6bf9ea08dc6f26883b9d.ttf"},function(e,t){const o=document.querySelector(".carousel"),n=document.querySelector(".carousel__content"),r=document.querySelector(".carousel__item"),i=document.querySelector(".carousel__button--next"),a=document.querySelector(".carousel__button--prev");let s=o.offsetWidth,l=r.offsetWidth,c=Math.floor(s/(l+30))*(l+30);i.addEventListener("click",e=>{o.scrollBy(c,0),0!==o.scrollWidth&&(a.style.display="flex"),n.scrollWidth-c-30<=o.scrollLeft+c&&(i.style.display="none")}),a.addEventListener("click",e=>{o.scrollBy(-c,0),o.scrollLeft-c-30<=0&&(a.style.display="none"),!n.scrollWidth-c-30<=o.scrollLeft+c&&(i.style.display="flex")}),window.addEventListener("resize",e=>c=o.offsetWidth)},function(e,t,o){"use strict";o.r(t);o(0),o(6),o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p,o.p}]);