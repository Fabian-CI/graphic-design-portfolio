(()=>{"use strict";var n={365:(n,t,e)=>{e.d(t,{A:()=>s});var o=e(601),r=e.n(o),i=e(314),a=e.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),a.push([n.id,":root {\n    --header-color: #191919;\n    --main-color: #212121;\n\n    --font-color: #FFFFFF;\n    --secondary-font-color: #b3b3b3;\n    --description-color: #E4E4E4;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    \n    font-size: 1rem;\n    color: var(--font-color);\n    font-family: Roboto, Arial, Helvetica, sans-serif;\n\n    width: 100%;\n    height: 100%;\n\n    background: var(--main-color);\n\n    display: grid;\n    grid-template-columns: .2fr 1fr .2fr; /*creates margins on the sides*/\n}\n\nheader {\n    grid-column: 2/3;\n    background: var(--header-color);\n\n    width: 100%;\n    height: 70px;\n\n    padding: 0px 3%;\n\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    position: fixed;\n}\n\nnav {\n    display: flex;\n    gap: 20px;\n}\n\nnav a {\n    color:  var(--secondary-font-color);\n    text-decoration: none;\n\n    font-size: 1.1rem;\n    font-weight: bold;\n    transition: all .1s ease-out;\n\n}\n\nnav a:hover {\n    color: var(--font-color);\n    transition: all .1s ease-in;\n}\n\n.logo-wrap {\n    justify-self: center;\n}\n\nspan {\n    font-size: 1.5rem;\n    font-weight: bold;\n\n    cursor: pointer;\n}\n\n.slide-menu {\n    display: flex;\n    align-items: center;\n\n    width: 100%;\n    height: 100%;\n}\n\n.menu-icon {\n    width: 100%;\n    min-width: 40%;\n    height: 100%;\n\n    display: flex;\n    justify-content: right;\n}\n\n.menu-icon img {\n    width: 100%;\n    height: auto;\n}\n\n/* TO FINISH SLIDE MENU */\n\n.content {\n    grid-column: 2/3;\n    /* padding: 0px 5%; */\n    padding-top: calc(75px + 5%);\n\n    width: 100%;\n    height: 100%;\n}\n\nhr {\n    margin-top: -80px;\n    margin-bottom: 80px;\n}\n\n.kittis-project {\n    text-align: center;\n}\n\n.kittis-project h2 {\n    font-weight: bold;\n    font-size: 1.7rem;\n\n    margin-bottom: 100px;\n}\n\n.kittis-project h1 {\n    font-size: 3rem;\n    margin-bottom: 50px;\n}\n\n.logo-description {\n    margin-bottom: 50px;\n}\n\n.description {\n    font-size: 1.25rem;\n    color: var(--description-color);\n    line-height: 130%;\n}\n\n.description a {\n    color: var(--description-color);\n    transition: all .1s ease-out;\n}\n\n.description a:hover {\n    color: var(--secondary-font-color);\n    transition: all .1s ease-in;\n}\n\n.page-images {\n    display: grid;\n    height: 100%;\n    margin: 0 auto;\n    max-width: 100%;\n\n    margin-bottom: 50px;\n}\n\nimg {\n    max-width: 100%;\n    max-height: 120vh;\n    margin: auto;\n}\n\n.grid-items {\n    display: grid;\n    grid-template-columns: 1.3fr 1fr;\n    align-items: center;\n    justify-content: center;\n\n    width: 100%;\n    height: 100%;\n\n    gap: 25px;\n}\n\n.comparison-wraper {\n    grid-template-columns: 1fr 1.5fr;\n    margin-top: 30px;\n}\n\n.kittis-product-wrapper img {\n    max-width: 100%;\n    height: auto;\n}\n\n.text-container {\n    max-width: 100%;\n    height: auto;\n}\n\np {\n    padding: 3px;\n}\n\nu {\n    font-size: 1.4rem;\n}\n\n\n.product-description {\n    text-align: left;\n    line-height: 1.3;\n\n}\n\n.comparison-text {\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n\n.banner-display {\n    margin-top: 50px;\n}\n\nfooter {\n    grid-column: 2/3;\n    align-content: end;\n\n    margin: 5em;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    align-items: center;\n    color: var(--secondary-font-color);\n    font-family: inherit;\n}\n\nfooter a {\n    color: var(--secondary-font-color);\n    transition: all .15s ease-out;\n}\n\nfooter a:hover {\n    color: var(--description-color);\n    transition: all .15s ease-in;\n}\n\n.credits {\n    margin-bottom: 30px;\n}\n\n.disclaimer {\n    text-align: center;\n    font-size: .9rem;\n}\n\n@media (max-width: 768px) {\n    body {\n        display: block;\n    }\n\n    .content {\n        padding: 0px;\n        padding-top: calc(75px + 5%);\n    }\n\n    footer {\n        margin: 0;\n    }\n\n    .grid-items {\n        grid-template-columns: 1fr; /* Switch to single-column layout on smaller screens */\n    }\n}\n\nnav, .slide-menu, nav a {  /*TO BE REMOVED*/\n    opacity: 0;\n    cursor:default;\n}",""]);const s=a},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=r(f,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var d=e(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var o=e(72),r=e.n(o),i=e(825),a=e.n(i),s=e(659),c=e.n(s),l=e(56),d=e.n(l),p=e(540),u=e.n(p),f=e(113),m=e.n(f),g=e(365),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),r()(g.A,h),g.A&&g.A.locals&&g.A.locals})();