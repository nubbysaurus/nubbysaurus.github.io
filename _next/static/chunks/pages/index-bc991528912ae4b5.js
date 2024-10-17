(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2627)}])},9582:function(e,t,n){"use strict";var r=n(5893),i=n(5675),o=n.n(i),s=n(1664),c=n.n(s),a=n(3717),l=n(9078),u=n(8519),f=n(2757),d=n(5028);function Banner(){return(0,r.jsx)("header",{children:(0,r.jsxs)(a.k,{alignItems:"center",justifyContent:"center",minWidth:"max-content",p:"5",children:[(0,r.jsxs)(l.r,{templateAreas:'"icon title"',gridTemplateColumns:"50px 200px",children:[(0,r.jsx)(u.P,{area:"icon",children:(0,r.jsx)(o(),{alt:"Welcome!",src:"raven_icon.png",height:50,width:50})}),(0,r.jsx)(u.P,{area:"title",children:(0,r.jsx)(c(),{passHref:!0,href:"/",children:(0,r.jsx)(f.X,{cursor:"pointer",size:"2xl",children:"Welcome!"})})})]}),(0,r.jsx)(d.L,{})]})})}t.Z=Banner},4838:function(e,t,n){"use strict";function nubbysImgLoader(e){let{src:t,width:n,quality:r}=e;return"./".concat(t,"?w=").concat(n,"&q=").concat(r||75)}n.r(t),n.d(t,{default:function(){return nubbysImgLoader}})},597:function(e,t,n){var r=n(3454);n(1479);var i=n(7294),o=i&&"object"==typeof i&&"default"in i?i:{default:i};function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var s=void 0!==r&&r.env&&!0,isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function StyleSheet(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,o=void 0===i?s:i;invariant$1(isString(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",invariant$1("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var c=document.querySelector('meta[property="csp-nonce"]');this._nonce=c?c.getAttribute("content"):null}var e=StyleSheet.prototype;return e.setOptimizeForSpeed=function(e){invariant$1("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),invariant$1(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},e.isOptimizeForSpeed=function(){return this._optimizeForSpeed},e.inject=function(){var e=this;if(invariant$1(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},e.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},e.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},e.insertRule=function(e,t){if(invariant$1(isString(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},e.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];invariant$1(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},e.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];invariant$1(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},e.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},e.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},e.makeStyleTag=function(e,t,n){t&&invariant$1(isString(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},_createClass(StyleSheet,[{key:"length",get:function(){return this._rulesCount}}]),StyleSheet}();function invariant$1(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var stringHash=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},a={};function computeId(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return a[r]||(a[r]="jsx-"+stringHash(e+"-"+n)),a[r]}function computeSelector(e,t){var n=e+t;return a[n]||(a[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),a[n]}function mapRulesToStyle(e,t){return void 0===t&&(t={}),e.map(function(e){var n=e[0],r=e[1];return o.default.createElement("style",{id:"__"+n,key:"__"+n,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})}var l=function(){function StyleSheetRegistry(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i;this._sheet=r||new c({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var e=StyleSheetRegistry.prototype;return e.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=o,this._instancesCounts[r]=1},e.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(invariant(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},e.update=function(e,t){this.add(t),this.remove(e)},e.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},e.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},e.styles=function(e){return mapRulesToStyle(this.cssRules(),e)},e.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=computeId(r,n);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return computeSelector(i,e)}):[computeSelector(i,t)]}}return{styleId:computeId(r),rules:Array.isArray(t)?t:[t]}},e.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},StyleSheetRegistry}();function invariant(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}var u=i.createContext(null);function useStyleRegistry(){return i.useContext(u)}u.displayName="StyleSheetContext";var f=o.default.useInsertionEffect||o.default.useLayoutEffect,d=new l;function JSXStyle(e){var t=d||useStyleRegistry();return t&&f(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}JSXStyle.dynamic=function(e){return e.map(function(e){return computeId(e[0],e[1])}).join(" ")},t.style=JSXStyle},5379:function(e,t,n){"use strict";e.exports=n(597).style},2627:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var r=n(5893),i=n(5379),o=n.n(i),s=n(1664),c=n.n(s),a=n(6612),l=n.n(a),u=n(9582);function Home(){return(0,r.jsxs)("div",{className:"jsx-e23c2f6fc798f3bf",children:[(0,r.jsx)(u.Z,{}),(0,r.jsxs)("main",{className:"jsx-e23c2f6fc798f3bf",children:[(0,r.jsx)("h1",{className:"jsx-e23c2f6fc798f3bf "+(l().title||""),children:"Jake Lee"}),(0,r.jsx)("p",{className:"jsx-e23c2f6fc798f3bf "+(l().subtitle||""),children:"Jake is a Robotics, Controls, and Cyber-Physical Systems M.S. student and researcher at the University of California, Santa Cruz. He is interested in using low-cost drones and sensor arrays to promote sustainable farming practices."}),(0,r.jsx)(c(),{href:"/cv",className:l().card,children:(0,r.jsx)("h2",{className:"jsx-e23c2f6fc798f3bf",children:"Resume"})}),(0,r.jsx)("p",{className:"jsx-e23c2f6fc798f3bf "+(l().description||""),children:'Selected works by Jake Lee/"nubby".'}),(0,r.jsx)("div",{className:"jsx-e23c2f6fc798f3bf "+(l().grid||""),children:(0,r.jsxs)(c(),{href:"/sandbox",className:l().card,children:[(0,r.jsx)("h3",{className:"jsx-e23c2f6fc798f3bf",children:"Sandbox →"}),(0,r.jsx)("p",{className:"jsx-e23c2f6fc798f3bf",children:"Jake's code testing playground."})]})})]}),(0,r.jsx)("footer",{className:"jsx-e23c2f6fc798f3bf",children:")  0 o ."}),(0,r.jsx)(o(),{id:"9b9caeeda8f9b8d9",children:"main.jsx-e23c2f6fc798f3bf{padding:5rem 0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-e23c2f6fc798f3bf{width:100%;height:100px;border-top:1px solid#eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-e23c2f6fc798f3bf img.jsx-e23c2f6fc798f3bf{margin-left:.5rem}footer.jsx-e23c2f6fc798f3bf a.jsx-e23c2f6fc798f3bf{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;color:inherit}code.jsx-e23c2f6fc798f3bf{background:#fafafa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}"}),(0,r.jsx)(o(),{id:"f45533f31dc7e751",children:"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}"})]})}},1479:function(){},6612:function(e){e.exports={container:"Home_container__d256j",title:"Home_title__hYX6j",description:"Home_description__uXNdx",grid:"Home_grid__AVljO",card:"Home_card__E5spL",logo:"Home_logo__IOQAX",__next:"Home___next__ltUsg"}},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var o=[],s=!1,c=-1;function cleanUpNextTick(){s&&r&&(s=!1,r.length?o=r.concat(o):c=-1,o.length&&drainQueue())}function drainQueue(){if(!s){var e=runTimeout(cleanUpNextTick);s=!0;for(var t=o.length;t;){for(r=o,o=[];++c<t;)r&&r[c].run();c=-1,t=o.length}r=null,s=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.push(new Item(e,t)),1!==o.length||s||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=noop,i.addListener=noop,i.once=noop,i.off=noop,i.removeListener=noop,i.removeAllListeners=noop,i.emit=noop,i.prependListener=noop,i.prependOnceListener=noop,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}},o=!0;try{t[e](i,i.exports,__nccwpck_require__),o=!1}finally{o&&delete n[e]}return i.exports}__nccwpck_require__.ab="//";var r=__nccwpck_require__(229);e.exports=r}()}},function(e){e.O(0,[718,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);