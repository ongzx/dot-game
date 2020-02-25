!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=3)}([function(e,t,n){var o=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=(o(i,r),i.locals?i.locals:{});e.exports=a},function(e,t,r){"use strict";var n,o,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=(o={},function(e){if(void 0===o[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}o[e]=t}return o[e]}),d=[];function f(e){for(var t=-1,n=0;n<d.length;n++)if(d[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],a=t.base?r[0]+t.base:r[0],s=n[a]||0,l="".concat(a," ").concat(s);n[a]=s+1;var u=f(l),c={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(d[u].references++,d[u].updater(c)):d.push({identifier:l,updater:v(c,t),references:1}),o.push(l)}return o}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])}),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,c=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=c(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}var p=null,m=0;function v(t,e){var n,o,i;if(e.singleton){var r=m++;n=p=p||s(e),o=h.bind(null,n,r,!1),i=h.bind(null,n,r,!0)}else n=s(e),o=function(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,n,e),i=function(){var e;null!==(e=n).parentNode&&e.parentNode.removeChild(e)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=i());var s=l(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<s.length;t++){var n=f(s[t]);d[n].references--}for(var o=l(e,a),i=0;i<s.length;i++){var r=f(s[i]);0===d[r].references&&(d[r].updater(),d.splice(r,1))}s=o}}}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function l(e){e.classList.add("destroyed"),setTimeout(function(){e.parentNode.removeChild(e)},500)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.userScore=0,this.isPlaying=!1,this.dotPopulationInterval=null,this.dotAnimationId=null,this.dotFrequency=1e3,this.dotColors=["#d1cc99","#784ecd","#C7F464","#FF6B6B","#C44D58"],this.scoreLabel=document.getElementById("score"),this.gameBtn=document.getElementById("game-btn"),this.speedController=document.getElementById("speed"),this.speedLabel=document.getElementById("speed-value")}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=this;this.setScore(this.userScore),this.setSpeed(),this.gameBtn.addEventListener("click",function(){return e.toggleGame()}),this.speedController.addEventListener("change",function(){return e.setSpeed()})}},{key:"getSpeed",value:function(){return parseInt(this.speedController.value,10)}},{key:"setSpeed",value:function(){var e=this.getSpeed();this.speedLabel.innerHTML="".concat(100===e?"Max":e)}},{key:"setScore",value:function(e){var t=this;this.userScore+=e,this.scoreLabel.innerHTML=this.userScore,this.scoreLabel.classList.add("bounce"),setTimeout(function(){t.scoreLabel.classList.remove("bounce")},200)}},{key:"animateDots",value:function(){for(var e=this,t=document.querySelectorAll(".dot"),n=document.getElementById("playground").offsetHeight,o=this.getSpeed(),i=Math.ceil(o/60),r=0;r<t.length;r++){var a=parseInt(t[r].style.top,10),s=a+=i;n<a&&l(t[r]),t[r].style.top=s+"px"}this.dotAnimationId=u(function(){return e.animateDots()})}},{key:"populateDots",value:function(){var e,t,n,o,i=this,r=document.getElementById("playground"),a=(t=100,(e=10)*Math.round((Math.random()*(t-e)+e)/10)),s=11-.1*a,l=document.getElementById("playground").offsetWidth,u=(n=0,o=l-100,Math.floor(Math.random()*(o-n))+n),c=0-a-this.getSpeed(),d=this.dotColors[Math.floor(Math.random()*this.dotColors.length)],f=document.createElement("span");f.setAttribute("class","dot"),f.setAttribute("data-size",a),f.setAttribute("data-value",s),f.style.width=a+"px",f.style.height=a+"px",f.style.top=c+"px",f.style.left=u+"px",f.style.backgroundColor=d,f.addEventListener("click",function(e){return i.handleDotClicked(e)}),r.appendChild(f)}},{key:"handleDotClicked",value:function(e){var t=this,n=e.currentTarget,o=parseInt(n.getAttribute("data-value"),10);this.isPlaying&&setTimeout(function(){t.setScore(o),l(n)},10)}},{key:"stop",value:function(){this.isPlaying=!1,this.gameBtn.classList.add("play"),this.gameBtn.classList.remove("pause"),clearInterval(this.dotPopulationInterval),cancelAnimationFrame(this.dotAnimationId)}},{key:"start",value:function(){var e=this;this.isPlaying=!0,this.gameBtn.classList.add("pause"),this.gameBtn.classList.remove("play"),this.dotPopulationInterval=setInterval(function(){return e.populateDots()},this.dotFrequency),this.dotAnimationId=u(function(){return e.animateDots()})}},{key:"toggleGame",value:function(){this.isPlaying?this.stop():this.start()}}])&&i(t.prototype,n),o&&i(t,o),e}();window.onload=function(){var e=new o;e.init(),document.addEventListener("visibilitychange",function(){document.hidden&&e.stop()},!1)}}]);
//# sourceMappingURL=main.js.map