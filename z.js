/*!
 * Z.js v0.1.0
 * @snandy 2013-12-12 15:05:08
 *
 */
~function(t,e){function n(t,e){return new n.prototype.init(t,e)}function r(t,e,n){if(null!=t)if(M&&t.forEach===M)t.forEach(e,n);else if(t.length===+t.length){for(var r=0;t.length>r;r++)if(e.call(n||t[r],t[r],r,t)===!0)return}else for(var i in t)if(e.call(n||t[i],t[i],i,t)===!0)return}function i(t,e,n){var i=[];return null==t?i:X&&t.map===X?t.map(e,n):(r(t,function(t,r,o){i[r]=e.call(n,t,r,o)}),i)}function o(t,e){return B.call(t,e||0)}function s(t){return document.getElementById(t)}function a(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=W).appendChild(t),r=$(e,i),o&&W.removeChild(t),!!r.length}function u(t){return n.isWindow(t)?t:9===t.nodeType?t.defaultView||t.parentWindow:!1}function c(t,e,r,i){try{i=t.getBoundingClientRect()}catch(o){}if(!i||!n.contains(r,t))return i?{top:i.top,left:i.left}:{top:0,left:0};var s=e.body,a=u(e),c=r.clientTop||s.clientTop||0,l=r.clientLeft||s.clientLeft||0,f=a.pageYOffset||r.scrollTop||s.scrollTop,p=a.pageXOffset||r.scrollLeft||s.scrollLeft,h=i.top+f-c,d=i.left+p-l;return{top:h,left:d}}function l(t,e){var r=n(t),i=r.css("position");"static"===i&&(t.style.position="relative");var o,s,a=r.offset(),u=r.css("top"),c=r.css("left"),l=("absolute"===i||"fixed"===i)&&[u,c].join(",").indexOf("auto")>-1,f={},p={};l?(p=r.pos(),o=p.top,s=p.left):(o=parseFloat(u)||0,s=parseFloat(c)||0),null!=e.top&&(f.top=e.top-a.top+o),null!=e.left&&(f.left=e.left-a.left+s),r.css(f)}function f(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function p(t,e){for(var n=0;t.length>n;n++)if(e(t[n],n)===!0)return}function h(){return!1}function d(){return!0}function m(){return(new Date).getTime()}function y(t,e,n){if(t&&e)for(var r,e=T(e,t),i=e.type,o=t[Q],s=te[o],a=s.events,u=a[i],c=0;r=u[c++];)n&&(r.args=r.args.concat(n)),e.namespace?e.namespace===r.namespace&&v(t,i,e,r):v(t,i,e,r)}function v(t,e,n,r){var i=r.args,o=r.stop,s=r.data,a=r.handler,u=r.prevent,c=r.context||t,l=r.stopBubble;i[0]&&i[0].type===n.type?(i.shift(),i.unshift(n)):i.unshift(n),o&&(n.preventDefault(),n.stopPropagation()),u&&n.preventDefault(),s&&(n.data=s),l&&n.stopPropagation(),a.apply(c,i)}function g(t){this.handler=t.handler,this.one=t.one,this.delay=t.delay,this.debounce=t.debounce,this.immediate=t.immediate,this.throttle=t.throttle,this.context=t.context,this.stop=t.stop,this.prevent=t.prevent,this.stopBubble=t.stopBubble,this.data=t.data,this.args=t.args?t.args.length?t.args:[t.args]:[]}function b(t,e,r){var i=te[r],o=i.handle,s=i.events;delete s[e],delete i.elem,delete i.handle,ue(t,e,o),n.isEmptyObject(s)&&(delete i.events,delete te[r])}function x(t){var e;t.type?(this.originalEvent=t,this.type=t.type):t.indexOf(".")>-1?(e=t.split("."),this.type=e[0],this.namespace=e[1]):(this.type=t,this.namespace=""),this.timeStamp=m()}function T(t,n){var r,i,o=[],s=t;for(o=o.concat("altKey bubbles button cancelable charCode clientX clientY ctrlKey currentTarget".split(" ")),o=o.concat("data detail eventPhase fromElement handler keyCode layerX layerY metaKey".split(" ")),o=o.concat("newValue offsetX offsetY originalTarget pageX pageY prevValue relatedTarget".split(" ")),o=o.concat("screenX screenY shiftKey target toElement view wheelDelta which".split(" ")),t=new x(s),r=o.length;r;)i=o[--r],t[i]=s[i];if(t.target||(t.target=s.srcElement||n),3===t.target.nodeType&&(t.target=t.target.parentNode),!t.relatedTarget&&t.fromElement&&(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),null==t.pageX&&null!=t.clientX){var a=document.documentElement,u=document.body;t.pageX=t.clientX+(a&&a.scrollLeft||u&&u.scrollLeft||0)-(a&&a.clientLeft||u&&u.clientLeft||0),t.pageY=t.clientY+(a&&a.scrollTop||u&&u.scrollTop||0)-(a&&a.clientTop||u&&u.clientTop||0)}return!t.which&&(t.charCode||0===t.charCode?t.charCode:t.keyCode)&&(t.which=t.charCode||t.keyCode),!t.metaKey&&t.ctrlKey&&(t.metaKey=t.ctrlKey),t.which||t.button===e||(t.which=1&t.button?1:2&t.button?3:4&t.button?2:0),t}function E(t,e,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&e){var i,o,s,a,u=t[Q]=t[Q]||J++,c=te[u]=te[u]||{},l=c.events,f=c.handle,p=0;if(n.isObject(e))for(o in e)E(t,o,e[o]);else{if(s=e.split(" "),n.isFunction(r))i=new g({handler:r});else{if(!n.isFunction(r.handler))return;i=new g(r)}for(r=i.handler,i.one&&(i.special=r,i.handler=re(r)),i.delay&&(i.special=r,i.handler=ie(r,i.delay)),i.debounce&&(i.special=r,i.handler=oe(r,i.debounce)),i.immediate&&(i.special=r,i.handler=oe(r,i.immediate,!0)),i.throttle&&(i.special=r,i.handler=se(r,i.throttle)),l||(c.events=l={}),f||(c.handle=f=function(t){y(c.elem,t)}),c.elem=t;o=s[p++];)o.indexOf(".")>-1?(a=e.split("."),o=a[0],i.namespace=a[1]):i.namespace="",handlers=l[o],handlers||(handlers=l[o]=[],ae(t,o,f)),handlers.push(i);t=null}}}function w(t,n,r){if(t&&3!==t.nodeType&&8!==t.nodeType){var i=t[Q],o=i&&te[i],s=o&&o.events,a=s&&s[n],u=arguments.length;switch(u){case 1:for(var n in s)b(t,n,i);break;case 2:b(t,n,i);break;case 3:p(a,function(t,n){return t.handler===r||t.special===r?(a.splice(n,1),!0):e}),0===a.length&&b(t,n,i)}}}function O(t,e){if(t&&3!==t.nodeType&&8!==t.nodeType){var n=t[Q],r=n&&te[n],i=r&&r.events;i&&i[e];var s=o(arguments,2),a=arguments.length;if(1===a&&1===t.nodeType)for(var e in i)y(t,e,s);else y(t,e,s)}}function S(t){try{return JSON.parse(t)}catch(e){try{return Function("return "+t)()}catch(e){}}}function N(){}function j(t,r){n.isObject(t)&&(r=t,t=r.url),n.isFunction(r)&&(r={success:r});var i,o,s,r=r||{},a=r.async!==!1,u=r.method||"GET",c=r.type||"json",l=r.encode||"UTF-8",f=r.timeout||0,p=r.credential,h=r.data,d=r.scope,m=r.success||N,y=r.failure||N;return u=u.toUpperCase(),n.isObject(h)&&(h=n.Object.toQueryString(h)),"GET"===u&&h&&(t+=(-1===t.indexOf("?")?"?":"&")+h),(i=ce())?(o=!1,a&&f>0&&(s=setTimeout(function(){o=!0,i.abort()},f)),i.onreadystatechange=function(){4===i.readyState&&(o?y(i,"request timeout"):(C(i,c,m,y,d),clearTimeout(s)))},i.open(u,t,a),p&&(i.withCredentials=!0),"POST"==u&&i.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset="+l),i.send(h),i):e}function C(t,n,r,i,o){var s,a=t.status;if(a>=200&&300>a){switch(n){case"text":s=t.responseText;break;case"json":s=S(t.responseText);break;case"xml":s=t.responseXML}s!==e&&r.call(o,s)}else i(t,t.status);t=null}function L(){var t="",e=[],n=0,r="0123456789ABCDEF";for(n=0;32>n;n++)e[n]=r.substr(Math.floor(16*Math.random()),1);return e[12]="4",e[16]=r.substr(8|3&e[16],1),t="jsonp_"+e.join("")}function k(r,i){function o(n){n?de=!0:f.call(p),y.onload=y.onerror=y.onreadystatechange=null,he&&y.parentNode&&(he.removeChild(y),y=null,t[m]=e)}function s(){setTimeout(function(){de||o()},a)}n.isObject(r)&&(i=r,r=i.url);var i=i||{},a=3e3,r=r+"?",u=i.data,c=i.charset,l=i.success||N,f=i.failure||N,p=i.scope||t,h=i.timestamp,d=i.jsonpName||"callback",m=i.jsonpCallback||L();n.isObject(u)&&(u=serialize(u));var y=Y.createElement("script");fe?y.onreadystatechange=function(){var t=this.readyState;de||"loaded"!=t&&"complete"!=t||o(!0)}:(y.onload=function(){o(!0)},y.onerror=function(){o()},pe&&s()),r+=d+"="+m,c&&(y.charset=c),u&&(r+="&"+u),h&&(r+="&ts=",r+=(new Date).getTime()),t[m]=function(t){l.call(p,t)},y.src=r,he.insertBefore(y,he.firstChild)}var P=Object.prototype,F=Function.prototype,_=["Array","Function","Object","String","Number","Boolean"],A=P.toString,B=_.slice,D=_.push;_.concat;var M=_.forEach,X=_.map,q=_.every,I=_.some,R=_.indexOf,V=_.filter,K=F.bind,Y=t.document;n.identity=function(t){return t};var U=function(){var t=Y.createElement("div");t.className="a",t.innerHTML='<p style="color:red;"><a href="#" style="opacity:.4;float:left;">a</a></p>',t.setAttribute("class","t");var n=t.getElementsByTagName("p")[0],r=n.getElementsByTagName("a")[0],i="t"===t.className,o=/;/.test(n.style.cssText),s=/^0.4$/.test(r.style.opacity),a=!(!Y.defaultView||!Y.defaultView.getComputedStyle),u=!0;try{Y!==e&&B.call(Y.getElementsByTagName("body"))}catch(c){u=!1}return{setAttr:i,cssText:o,opacity:s,classList:!!t.classList,cssFloat:!!r.style.cssFloat,getComputedStyle:a,sliceOnNodeList:u}}(),H=U.sliceOnNodeList?function(t){return o(t)}:function(t){for(var e=[],n=0,r=t.length;r>n;n++)e[n]=t[n];return e},Z=function(t){var e={sogou:/se/.test(t),opera:/opera/.test(t),chrome:/chrome/.test(t),firefox:/firefox/.test(t),maxthon:/maxthon/.test(t),tt:/TencentTraveler/.test(t),ie:/msie/.test(t)&&!/opera/.test(t),safari:/webkit/.test(t)&&!/chrome/.test(t)},n="";for(var r in e)if(e[r]){n="safari"==r?"version":r;break}var i=RegExp("(?:"+n+")[\\/: ]([\\d.]+)");e.version=n&&i.test(t)?RegExp.$1:"0";for(var o=parseInt(e.version,10),r=6;11>r;r++)e["ie"+r]=o===r;return e}(navigator.userAgent.toLowerCase());n.Object=function(){var t=Object.keys||function(t){t=Object(t);var e=[],n=0;for(var r in t)e[n++]=r;return e},e=function(t){var e=[],n=0;for(var r in t)e[n++]=t[r];return e},i=function(t){t=Object(t);var e={};for(var n in t)e[t[n]]=n;return e},s=function(t){var e=[],n=0;for(var r in t)e[n]=[r,t[r]];return e},a=function(t){var e={},n=o(arguments,1);return r(n,function(n){n in t&&(e[n]=t[n])}),e},u=function(t){var e=[];return r(t,function(t,i){n.isArray(t)?r(t,function(t){e.push(i+"="+encodeURIComponent(t))}):e.push(i+"="+encodeURIComponent(t))}),e.join("&")};return{keys:t,values:e,pairs:s,invert:i,pick:a,toQueryString:u}}(),n.Function=function(){function t(t,e){var r,i;if(t.bind===K&&K)return K.apply(t,o(arguments,1));if(!n.isFunction(t))throw new TypeError;return r=o(arguments,2),i=function(){if(!(this instanceof i))return t.apply(e,r.concat(o(arguments)));N.prototype=t.prototype;var n=new N;N.prototype=null;var s=t.apply(n,r.concat(o(arguments)));return Object(s)===s?s:n}}function e(t){var e,n;return function(){return e?n:(e=!0,n=t.apply(this,arguments))}}function r(t,e){return function(){var n=this,r=arguments;setTimeout(function(){t.apply(n,r)},e)}}function i(t,e,n){var r;return function(){var i=this,o=arguments;later=function(){r=null,n||t.apply(i,o)};var s=n&&!r;clearTimeout(r),r=setTimeout(later,e),s&&t.apply(i,o)}}function s(t,e){var n,r,o,s,a,u,c=i(function(){a=s=!1},e);return function(){n=this,r=arguments;var i=function(){o=null,a&&t.apply(n,r),c()};return o||(o=setTimeout(i,e)),s?a=!0:u=t.apply(n,r),c(),s=!0,u}}function a(t,e){var n=!0;return e=e||1e3,function(){n&&(t.apply(this,arguments),n=!1),setTimeout(function(){n=!0},e)}}return{bind:t,once:e,uniq:a,delay:r,debounce:i,throttle:s}}(),n.Array=function(){function t(t,i,o){i||(i=n.identity);var s=!0;return null==t?s:q&&t.every===q?t.every(i,o):(r(t,function(t,n,r){return(s=s&&i.call(o,t,n,r))?e:!0}),!!s)}function o(t,i,o){i||(i=n.identity);var s=!1;return null==t?s:I&&t.some===I?t.some(i,o):(r(t,function(t,n,r){return s||(s=i.call(o,t,n,r))?!0:e}),!!s)}function s(t,e){return null==t?!1:R&&t.indexOf===R?-1!=t.indexOf(e):o(t,function(t){return t===e})}function a(t,e,n){var i=[];return null==t?i:V&&t.filter===V?t.filter(e,n):(r(t,function(t,r,o){e.call(n,t,r,o)&&(i[r]=t)}),i)}function u(t){var e=[];return r(t,function(t){s(e,t)||e.push(t)}),e}return{forEach:r,map:i,every:t,some:o,contains:s,filter:a,unique:u}}(),n.String=function(){function t(t){return"string"!=typeof t?"":t.replace(u.escape,function(t){return a.escape[t]})}function e(t){return"string"!=typeof t?"":t.replace(u.unescape,function(t){return a.unescape[t]})}var r=n.Object,i=/\{(\d+)\}/g,s=/^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g,a={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};a.unescape=r.invert(a.escape);var u={escape:RegExp("["+r.keys(a.escape).join("")+"]","g"),unescape:RegExp("("+r.keys(a.unescape).join("|")+")","g")};return{htmlEscape:t,htmlUnescape:e,urlAppend:function(t,e){return n.isString(e)&&e.length?t+(-1===t.indexOf("?")?"?":"&")+e:t},trim:function(t){return t.replace(s,"")},ellipsis:function(t,e,n){if(t&&t.length>e){if(n){var r=t.substr(0,e-2),i=Math.max(r.lastIndexOf(" "),r.lastIndexOf("."),r.lastIndexOf("!"),r.lastIndexOf("?"));if(-1!==i&&i>=e-15)return r.substr(0,i)+"..."}return t.substr(0,e-3)+"..."}return t},format:function(t){var e=o(arguments,1);return t.replace(i,function(t,n){return e[n]})}}}(),n.Class=function(){function r(e,n){this.type=e,this.scope=n||t,this.listeners=[]}function i(r,i){if(!n.isString(r))throw Error("classPath must be a string");i=n.isObject(i)?i:t;for(var o=r.split("."),s=i,a=o.pop();o.length;){var u=o.shift(),c=s[u];c||(s[u]=c={}),s=c}var l=s[a];if(n.isFunction(l))throw Error(a+" is already defined");return s[a]=e,{namespace:s,className:a}}function s(t,e,r){function o(){n.isFunction(this.init)&&this.init.apply(this,arguments)}if(!r){if(!e)throw Error("class create failed, verify definitions");r=e,e=Object}o.toString=function(){return t};var c=e.prototype,l=o.prototype=u(c);if(l.constructor=r,r.call(l,c),n.extend(l,a),s.amd)return o;var f=i(t,s.globalNamespace);f.namespace[f.className]=o}r.prototype={subscribe:function(t,e,n){var r=this.listeners;if(!t||-1!==this._find(t,e))return!1;var i={fn:t,scope:e||this.scope,opt:n};return this.firing&&(r=this.listeners=r.slice(0)),r.push(i),!0},unsubscribe:function(t,e){if(!t)return this.clear();var n=this._find(t,e);return-1!==n?(this._delete(n),!0):!1},publish:function(){var t,e,n=this.listeners,r=n.length,i=0;if(r>0)for(this.firing=!0;e=n[i++];)if(t=o(arguments),e.opt&&t.push(e.opt),e&&e.fn.apply(e.scope,t)===!1)return this.firing=!1;return this.firing=!1,!0},clear:function(){for(var t=this.listeners.length,e=t;e--;)this._delete(e);return this.listeners=[],t},_find:function(t,e){for(var n,r=this.listeners,i=r.length;i--;)if((n=r[i])&&n.fn===t&&(!e||n.scope===e))return i;return-1},_delete:function(t){var e=this.listeners,n=e[t];n&&(delete n.fn,delete n.scope,delete n.opt),e.splice(t,1)}};var a={on:function(t,e,n,i){var o,s;if("object"==typeof t){i=t;for(t in i)i.hasOwnProperty(t)&&(o=i[t],this.on(t,o.fn||o,o.scope||i.scope,o.fn?o:i))}else this._events=this._events||{},s=this._events[t]||!1,s||(s=this._events[t]=new r(t,this)),s.subscribe(e,n,i)},off:function(t,e,n){var r,i,o;if("object"==typeof t){o=t;for(t in o)o.hasOwnProperty(t)&&(r=o[t],this.un(t,r.fn||r,r.scope||o.scope))}else i=this._events[t],i&&i.unsubscribe(e,n)},clearEvent:function(t){var e=this._events&&this._events[t];e&&e.clear()},fire:function(t){var e;return this._events&&(e=this._events[t])?e.publish.apply(e,o(arguments,1)):!0}},u=Object.create?function(t){return Object.create(t)}:function(){function t(){}return function(e){return t.prototype=e,new t}}();return s.statics=function(t,e){n.extend(t,e)},s.methods=function(t,e,r){var i=t.prototype;for(var o in e){if(!n.isFunction(e[o]))throw Error(o+" is not a function");r?i[o]=e[o]:i[o]||(i[o]=e[o])}},s}();var $=function(){function t(t,e,n){var r=RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)"),i="className"===t?n.className:n.getAttribute(t);if(i){if(!e)return!0;if(r.test(i))return!0}return!1}function n(e,n,r){for(var i,o=[],s=0,a=0;i=e[s++];)t(n,r,i)&&(o[a++]=i);return o}function r(t,c){var l=t,f=[],c=c===e?Y:"string"==typeof c?r(c)[0]:c;if(!t)return f;if(i.test(l))return f[0]=s(l.substr(1,l.length)),f;if(c.querySelectorAll){if(1===c.nodeType){var p=c.id,h=c.id="__Z__";try{return c.querySelectorAll("#"+h+" "+l)}catch(d){throw Error("querySelectorAll: "+d)}finally{p?c.id=p:c.removeAttribute("id")}}return H(c.querySelectorAll(l))}if(a.test(l)){var m=l.split("."),y=m[0],v=m[1];if(c.getElementsByClassName){var g=c.getElementsByClassName(v);if(y){for(var b=0,x=g.length;x>b;b++){var T=g[b];T.tagName.toLowerCase()===y&&f.push(T)}return f}return H(g)}var E=c.getElementsByTagName(y||"*");return n(E,"className",v)}if(o.test(l))return H(c.getElementsByTagName(l));if(u.test(l)){var w=u.exec(l),E=c.getElementsByTagName(w[1]||"*");return n(E,w[2],w[4])}}var i=/^#[\w\-]+/,o=/^([\w\*]+)$/,a=/^([\w\-]+)?\.([\w\-]+)/,u=/^([\w]+)?\[([\w]+-?[\w]+?)(=(\w+))?\]/;return r}(),W=document.createElement("div");n.matches=a,n.prototype={constructor:n,init:function(r,i){if(r){if("function"==typeof r)return n.ready(r);if(n.isZ(r))return r;if(n.isArrayLike(r)&&!n.isString(r))return this.pushStack(r);if(r.nodeType||r===t)return this[0]=r,this.length=1,e;var o=$(r,i);this.pushStack(o)}},length:0,find:function(t,r){var i=r===e?this[0]:this[r];return new n.prototype.init(t,i)},toArray:function(){return o(this)},pushStack:function(t){D.apply(this,H(t))},slice:function(){var t=n(),e=B.apply(this,arguments);return D.apply(t,e),t},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},get:function(t){return null==t?this.toArray():0>t?this.slice(t)[0]:this[t]},each:function(t){return r(this,t),this},map:function(t){return n(i(this,function(e,n){return t.call(e,e,n)}))},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},closest:function(t,e){for(var r=this[0];r&&!a(r,t);)r=r!==e&&!n.isDocument(r)&&r.parentNode;return n(r)},push:D,sort:_.sort,splice:_.splice},n.fn=n.prototype.init.prototype=n.prototype,n.extend=n.fn.extend=function(t){var e,n;return 1===arguments.length?(e=this,n=0):(e=t,n=1),r(o(arguments,n),function(t){if(t)for(var n in t)e[n]=t[n]}),e},n.each=r,n.map=i,n.extend(Z),r(_,function(t){n["is"+t]=function(e){return A.call(e)==="[object "+t+"]"}}),n.isPrimitive=function(t){var n=typeof t;return!(t!==e&&null!==t&&"boolean"!==n&&"number"!==n&&"string"!==n)},n.isEmptyObject=function(t){for(var e in t)return!1;return!0},n.isEmpty=function(t){if(null==t)return!0;if(n.isArray(t)||n.isString(t))return 0===t.length;for(var e in t)return!1;return!0},n.isPlainObject=function(e){return e&&e!==t&&e!==Y&&e!==Y.body?"isPrototypeOf"in e&&n.isObject(e):!1},n.isArrayLike=function(t){return t.length===+t.length&&!n.isString(t)},n.isWindow=function(t){return null!=t&&t===t.window},n.isDocument=function(t){return null!=t&&t.nodeType===t.DOCUMENT_NODE},n.isElement=function(t){return t?1===t.nodeType:!1},n.isTextNode=function(t){return t?"#text"===t.nodeName:!1},n.isZ=function(t){return t.constructor===n};var z=/^(?:body|html)$/i,G=function(){function t(t,e){return 1===t.nodeType&&n.isString(e)?!0:!1}var e,r,i,o,s,a=U.classList;return a?(e=function(e,n){return t(e,n)?e.classList.contains(n):!1},r=function(e,n){var r,i=0;if(t(e,n))for(n=n.split(" ");r=n[i++];)e.classList.add(r)},i=function(e,n){var r,i=0;if(t(e,n))for(n=n.split(" ");r=n[i++];)e.classList.remove(r)},o=function(e,n){t(e,n)&&e.classList.toggle(n)}):(e=function(e,n){return t(e,n)?-1!=(" "+e.className+" ").indexOf(" "+n+" "):!1},r=function(n,r){t(n,r)&&!e(n,r)&&(n.className+=(n.className?" ":"")+r)},i=function(e,n){t(e,n)&&(e.className=e.className.replace(RegExp("\\b"+n+"\\b","g"),""))},o=function(t,n){e(t,n)?i(t,n):r(t,n)}),s=function(t,e,n){i(t,e),r(t,n)},{has:e,add:r,remove:i,toggle:o,replace:s}}();n.support=U,n.contains=function(t,e){try{return t.contains?t!=e&&t.contains(e):!!(16&t.compareDocumentPosition(e))}catch(n){}},n.ready=function(r){function i(e){("readystatechange"!=e.type||"complete"==Y.readyState)&&(("load"==e.type?t:Y)[l](f+e.type,i,!1),!s&&(s=!0)&&r(n))}function o(){try{u.doScroll("left")}catch(t){return setTimeout(o,50),e}i("poll")}var s=!1,a=!0,u=Y.documentElement,c=Y.addEventListener?"addEventListener":"attachEvent",l=Y.addEventListener?"removeEventListener":"detachEvent",f=Y.addEventListener?"":"on";if("complete"==Y.readyState)r(n);else{if(Y.createEventObject&&u.doScroll){try{a=!t.frameElement}catch(p){}a&&o()}Y[c](f+"DOMContentLoaded",i,!1),Y[c](f+"readystatechange",i,!1),t[c](f+"load",i,!1)}},n.fn.extend({hasClass:function(t){return G.has(this[0],t)},addClass:function(t){return this.each(function(e){G.add(e,t)})},removeClass:function(t){return this.each(function(e){G.remove(e,t)})},toggleClass:function(t){return this.each(function(e){G.toggle(e,t)})},replaceClass:function(t,e){return this.each(function(n){G.replace(n,t,e)})},attr:function(t,n){if(n!==e)return this.each(function(e){switch(t){case"class":e.className=n;break;case"style":e.style.cssText=n;break;default:e.setAttribute(t,n)}}),this;var r=this[0];switch(t){case"class":return r.className;case"style":return r.style.cssText;default:return r.getAttribute(t)}},prop:function(t,n){return n===e?this[0][t]:(this.each(function(e){e[t]=n}),this)},css:function(r,i){if(!n.isObject(r)){if(i===e){var o,s=this[0];if("opacity"==r){var a,u,c=/opacity=/i;return U.opacity?(o=t.getComputedStyle(s,null),a=o.opacity,a.length>1&&(a=a.substr(0,3)),parseFloat(a)):(o=s.currentStyle,u=o.filter,c.test(u)?parseFloat(u.match(/opacity=([^)]*)/i)[1])/100:1)}if(t.getComputedStyle)return t.getComputedStyle(s,null).getPropertyValue(f(r));if(Y.defaultView&&Y.defaultView.getComputedStyle){var l=Y.defaultView.getComputedStyle(s,null);if(l)return l.getPropertyValue(f(r))}return s.currentStyle?s.currentStyle[r]:s.style[r]}return this.each(function(t){"opacity"==r?U.opacity?t.style.opacity=1==i?"":""+i:(t.style.filter="alpha(opacity="+100*i+");",t.style.zoom=1):(n.isNumber(i)&&(i+="px"),t.style[r]=i)}),this}for(var p in r)this.css(p,r[p])},offsetParent:function(){for(var t=this[0].offsetParent||Y.body;t&&!z.test(t.nodeName)&&"static"===n(t).css("position");)t=t.offsetParent;return n(t)},offset:function(t){if(arguments.length)return t===e?this:this.each(function(){l(this,t)});var n=this[0],r=n&&n.ownerDocument;return r?c(n,r,r.documentElement):null},position:function(){if(this[0]){var t=this.offsetParent(),e=this.offset(),n=z.test(t[0].nodeName)?{top:0,left:0}:t.offset();return e.top-=parseFloat(this.css("marginTop"))||0,e.left-=parseFloat(this.css("marginLeft"))||0,n.top+=parseFloat(t.css("borderTopWidth"))||0,n.left+=parseFloat(t.css("borderLeftWidth"))||0,{top:e.top-n.top,left:e.left-n.left}}},text:function(t){return this.prop(this[0].innerText===e?"textContent":"innerText",t)},html:function(t){return this.prop("innerHTML",t)},val:function(t){if(t===e){var n=this[0];return"INPUT"==n.tagName&&/checkbox|radio/.test(n.type)?n.checked:n.value}return this.prop("value",t)},show:function(){this.each(function(t){t.style.display=""})}});var J=1,Q="__guid__",te={},ee=!!t.addEventListener,ne=n.Function,re=ne.once,ie=ne.delay,oe=ne.debounce,se=ne.throttle,ae=function(){return ee?function(t,e,n){t.addEventListener(e,n,!1)}:function(t,e,n){t.attachEvent("on"+e,n)}}(),ue=function(){return ee?function(t,e,n){t.removeEventListener(e,n,!1)}:function(t,e,n){t.detachEvent("on"+e,n)}}();x.prototype={preventDefault:function(){this.isDefaultPrevented=d;var t=this.originalEvent;t.preventDefault&&t.preventDefault(),t.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=d;var t=this.originalEvent;t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=d,this.stopPropagation()},isDefaultPrevented:h,isPropagationStopped:h,isImmediatePropagationStopped:h},r({on:E,off:w},function(t,e){n.fn[e]=function(e,n){return this.each(function(r){t(r,e,n)})}}),r(["one","delay","throttle","debounce","immediate"],function(t){n.fn[t]=function(e,n,r){return this.each(function(i){var o={handler:n};o[t]="one"===t?!0:r,E(i,e,o)})}}),n.fn.fire=function(t){return this.each(function(e){O(e,t)})},r("click,dblclick,mouseover,mouseout,mouseenter,mouseleave,mousedown,mouseup,keydown,keyup,keypress,focus,blur".split(","),function(t){n.fn[t]=function(e){return 0===arguments.length?this.fire(t):this.on(t,e),this}}),n.fn.delegate=function(t,e,r){return 2===arguments.length&&n.isFunction(e)&&(fn=e,e="click"),this.each(function(i){n(i).on(e,function(e){var i=e.tar;n(t,this).each(function(t){(i==t||n.contains(t,i))&&r.call(t,e)})})})},n.fn.undelegate=function(t,e){return this.each(function(r){n(r).off(t,e)})},n.parseJSON=S;var ce=t.XMLHttpRequest?function(){try{return new XMLHttpRequest}catch(t){}}:function(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}},le={method:["get","post"],type:["text","json","xml"],async:["sync","async"]};n.ajax=j,r(le,function(t,e){r(t,function(t){n[t]=function(t,e){return function(r,i,o){return n.isObject(r)&&(i=r),n.isFunction(i)&&(i={success:i}),n.isFunction(o)&&(i={data:i},i.success=o),"async"===t&&(e="async"===e?!0:!1),i=i||{},i[t]=e,j(r,i)}}(e,t)})});var fe=!-[1],pe=t.opera,he=Y.head||Y.getElementsByTagName("head")[0],de=!1;n.jsonp=function(t,e,r){return n.isObject(t)&&(e=t),n.isFunction(e)&&(e={success:e}),n.isFunction(r)&&(e={data:e},e.success=r),k(t,e)},"function"==typeof define&&define.amd?define("Z",[],function(){return n}):t.Z=n}(this);