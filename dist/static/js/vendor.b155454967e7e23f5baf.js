webpackJsonp([1],{"/ocq":function(t,e,r){"use strict";
/*!
  * vue-router v3.3.4
  * (c) 2020 Evan You
  * @license MIT
  */function n(t,e){0}function o(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function i(t,e){return o(t)&&t._isRouter&&(null==e||t.type===e)}function a(t,e){for(var r in e)t[r]=e[r];return t}var u={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var u=o.$createElement,c=r.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;o&&o._routerRoot!==o;){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(l=!0),o=o.$parent}if(i.routerViewDepth=h,l){var v=f[c],y=v&&v.component;return y?(v.configProps&&s(y,i,v.route,v.configProps),u(y,i,n)):u()}var m=p.matched[h],g=m&&m.components[c];if(!m||!g)return f[c]=null,u();f[c]={component:g},i.registerRouteInstance=function(t,e){var r=m.instances[c];(e&&r!==t||!e&&r===t)&&(m.instances[c]=e)},(i.hook||(i.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},i.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance)};var w=m.props&&m.props[c];return w&&(a(f[c],{route:p,configProps:w}),s(g,i,p,w)),u(g,i,n)}};function s(t,e,r,n){var o=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(r,n);if(o){o=e.props=a({},o);var i=e.attrs=e.attrs||{};for(var u in o)t.props&&u in t.props||(i[u]=o[u],delete o[u])}}var c=/[!'()*]/g,p=function(t){return"%"+t.charCodeAt(0).toString(16)},f=/%2C/g,h=function(t){return encodeURIComponent(t).replace(c,p).replace(f,",")},l=decodeURIComponent;function d(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=l(r.shift()),o=r.length>0?l(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function v(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return h(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(h(e)):n.push(h(e)+"="+h(t)))}),n.join("&")}return h(e)+"="+h(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}var y=/\/?$/;function m(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=g(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:b(e,o),matched:t?function(t){var e=[];for(;t;)e.unshift(t),t=t.parent;return e}(t):[]};return r&&(a.redirectedFrom=b(r,o)),Object.freeze(a)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=g(t[r]);return e}return t}var w=m(null,{path:"/"});function b(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||v)(n)+o}function x(t,e){return e===w?t===e:!!e&&(t.path&&e.path?t.path.replace(y,"")===e.path.replace(y,"")&&t.hash===e.hash&&R(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&R(t.query,e.query)&&R(t.params,e.params)))}function R(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every(function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?R(n,o):String(n)===String(o)})}function k(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function E(t){return t.replace(/\/\//g,"/")}var O=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},A=B,C=$,_=function(t,e){return T($(t,e),e)},j=T,S=V,L=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function $(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=L.exec(t));){var s=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+s.length,c)a+=c[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||u,R=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:R?U(R):m?".*":"[^"+q(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function P(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function T(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",M(e)));return function(e,n){for(var o="",i=e||{},a=(n||{}).pretty?P:encodeURIComponent,u=0;u<t.length;u++){var s=t[u];if("string"!=typeof s){var c,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(O(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!r[u].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?s.prefix:s.delimiter)+c}}else{if(c=s.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):a(p),!r[u].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');o+=s.prefix+c}}else o+=s}return o}}function q(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function I(t,e){return t.keys=e,t}function M(t){return t&&t.sensitive?"":"i"}function V(t,e,r){O(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=q(u);else{var s=q(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),i+=c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")"}}var p=q(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",I(new RegExp("^"+i,M(r)),e)}function B(t,e,r){return O(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return I(t,e)}(t,e):O(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(B(t[o],e,r).source);return I(new RegExp("(?:"+n.join("|")+")",M(r)),e)}(t,e,r):function(t,e,r){return V($(t,r),e,r)}(t,e,r)}A.parse=C,A.compile=_,A.tokensToFunction=j,A.tokensToRegExp=S;var H=Object.create(null);function z(t,e,r){e=e||{};try{var n=H[t]||(H[t]=A.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function F(t,e,r,n){var o="string"==typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){var i=(o=a({},t)).params;return i&&"object"==typeof i&&(o.params=a({},i)),o}if(!o.path&&o.params&&e){(o=a({},o))._normalized=!0;var u=a(a({},e.params),o.params);if(e.name)o.name=e.name,o.params=u;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;o.path=z(s,u,e.path)}else 0;return o}var c=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(o.path||""),p=e&&e.path||"/",f=c.path?k(c.path,p,r||o.append):p,h=function(t,e,r){void 0===e&&(e={});var n,o=r||d;try{n=o(t||"")}catch(t){n={}}for(var i in e)n[i]=e[i];return n}(c.query,o.query,n&&n.options.parseQuery),l=o.hash||c.hash;return l&&"#"!==l.charAt(0)&&(l="#"+l),{_normalized:!0,path:f,query:h,hash:l}}var D,N=[String,Object],J=[String,Array],K=function(){},Q={name:"RouterLink",props:{to:{type:N,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:J,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),i=o.location,u=o.route,s=o.href,c={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,v=null==this.exactActiveClass?l:this.exactActiveClass,g=u.redirectedFrom?m(null,F(u.redirectedFrom),null,r):u;c[v]=x(n,g),c[d]=this.exact?c[v]:function(t,e){return 0===t.path.replace(y,"/").indexOf(e.path.replace(y,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(n,g);var w=c[v]?this.ariaCurrentValue:null,b=function(t){X(t)&&(e.replace?r.replace(i,K):r.push(i,K))},R={click:X};Array.isArray(this.event)?this.event.forEach(function(t){R[t]=b}):R[this.event]=b;var k={class:c},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:s,route:u,navigate:b,isActive:c[d],isExactActive:c[v]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)k.on=R,k.attrs={href:s,"aria-current":w};else{var O=function t(e){if(e)for(var r,n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(O){O.isStatic=!1;var A=O.data=a({},O.data);for(var C in A.on=A.on||{},A.on){var _=A.on[C];C in R&&(A.on[C]=Array.isArray(_)?_:[_])}for(var j in R)j in A.on?A.on[j].push(R[j]):A.on[j]=b;var S=O.data.attrs=a({},O.data.attrs);S.href=s,S["aria-current"]=w}else k.on=R}return t(this.tag,k,this.$slots.default)}};function X(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Y(t){if(!Y.installed||D!==t){Y.installed=!0,D=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",u),t.component("RouterLink",Q);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var W="undefined"!=typeof window;function G(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach(function(t){!function t(e,r,n,o,i,a){var u=o.path;var s=o.name;0;var c=o.pathToRegexpOptions||{};var p=function(t,e,r){r||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return E(e.path+"/"+t)}(u,i,c.strict);"boolean"==typeof o.caseSensitive&&(c.sensitive=o.caseSensitive);var f={path:p,regex:function(t,e){var r=A(t,[],e);return r}(p,c),components:o.components||{default:o.component},instances:{},name:s,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach(function(o){var i=a?E(a+"/"+o.path):void 0;t(e,r,n,o,f,i)});r[f.path]||(e.push(f.path),r[f.path]=f);if(void 0!==o.alias)for(var h=Array.isArray(o.alias)?o.alias:[o.alias],l=0;l<h.length;++l){var d=h[l];0;var v={path:d,children:o.children};t(e,r,n,v,i,f.path||"/")}s&&(n[s]||(n[s]=f))}(o,i,a,t)});for(var u=0,s=o.length;u<s;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),s--,u--);return{pathList:o,pathMap:i,nameMap:a}}function Z(t,e){var r=G(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var u=F(t,r,!1,e),c=u.name;if(c){var p=i[c];if(!p)return s(null,u);var f=p.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof u.params&&(u.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in u.params)&&f.indexOf(h)>-1&&(u.params[h]=r.params[h]);return u.path=z(p.path,u.params),s(p,u,a)}if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(tt(v.regex,u.path,u.params))return s(v,u,a)}}return s(null,u)}function u(t,r){var n=t.redirect,o="function"==typeof n?n(m(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return s(null,r);var u=o,c=u.name,p=u.path,f=r.query,h=r.hash,l=r.params;if(f=u.hasOwnProperty("query")?u.query:f,h=u.hasOwnProperty("hash")?u.hash:h,l=u.hasOwnProperty("params")?u.params:l,c){i[c];return a({_normalized:!0,name:c,query:f,hash:h,params:l},void 0,r)}if(p){var d=function(t,e){return k(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:z(d,l),query:f,hash:h},void 0,r)}return s(null,r)}function s(t,r,n){return t&&t.redirect?u(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:z(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,s(i,e)}return s(null,e)}(0,r,t.matchAs):m(t,r,n,e)}return{match:a,addRoutes:function(t){G(t,n,o,i)}}}function tt(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=u)}return!0}var et=W&&window.performance&&window.performance.now?window.performance:Date;function rt(){return et.now().toFixed(3)}var nt=rt();function ot(){return nt}function it(t){return nt=t}var at=Object.create(null);function ut(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=a({},window.history.state);return r.key=ot(),window.history.replaceState(r,"",e),window.addEventListener("popstate",pt),function(){window.removeEventListener("popstate",pt)}}function st(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var i=function(){var t=ot();if(t)return at[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then(function(t){vt(t,i)}).catch(function(t){0}):vt(a,i))})}}function ct(){var t=ot();t&&(at[t]={x:window.pageXOffset,y:window.pageYOffset})}function pt(t){ct(),t.state&&t.state.key&&it(t.state.key)}function ft(t){return lt(t.x)||lt(t.y)}function ht(t){return{x:lt(t.x)?t.x:window.pageXOffset,y:lt(t.y)?t.y:window.pageYOffset}}function lt(t){return"number"==typeof t}var dt=/^#\d/;function vt(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=dt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:lt((r=i).x)?r.x:0,y:lt(r.y)?r.y:0})}else ft(t)&&(e=ht(t))}else n&&ft(t)&&(e=ht(t));e&&window.scrollTo(e.x,e.y)}var yt,mt=W&&((-1===(yt=window.navigator.userAgent).indexOf("Android 2.")&&-1===yt.indexOf("Android 4.0")||-1===yt.indexOf("Mobile Safari")||-1!==yt.indexOf("Chrome")||-1!==yt.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function gt(t,e){ct();var r=window.history;try{if(e){var n=a({},r.state);n.key=ot(),r.replaceState(n,"",t)}else r.pushState({key:it(rt())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function wt(t){gt(t,!0)}function bt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}function xt(t){return function(e,r,n){var i=!1,a=0,u=null;Rt(t,function(t,e,r,s){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var c,p=Ot(function(e){var o;((o=e).__esModule||Et&&"Module"===o[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:D.extend(e),r.components[s]=e,--a<=0&&n()}),f=Ot(function(t){var e="Failed to resolve async component "+s+": "+t;u||(u=o(t)?t:new Error(e),n(u))});try{c=t(p,f)}catch(t){f(t)}if(c)if("function"==typeof c.then)c.then(p,f);else{var h=c.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),i||n()}}function Rt(t,e){return kt(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function kt(t){return Array.prototype.concat.apply([],t)}var Et="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Ot(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var At={redirected:1,aborted:2,cancelled:3,duplicated:4};function Ct(t,e){return jt(t,e,At.redirected,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return St.forEach(function(r){r in t&&(e[r]=t[r])}),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function _t(t,e){return jt(t,e,At.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function jt(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var St=["params","query","hash"];var Lt=function(t,e){this.router=t,this.base=function(t){if(!t)if(W){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=w,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function $t(t,e,r,n){var o=Rt(t,function(t,n,o,i){var a=function(t,e){"function"!=typeof t&&(t=D.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return kt(n?o.reverse():o)}function Pt(t,e){if(e)return function(){return t.apply(e,arguments)}}Lt.prototype.listen=function(t){this.cb=t},Lt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Lt.prototype.onError=function(t){this.errorCbs.push(t)},Lt.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){var t=n.current;n.updateRoute(o),e&&e(o),n.ensureURL(),n.router.afterHooks.forEach(function(e){e&&e(o,t)}),n.ready||(n.ready=!0,n.readyCbs.forEach(function(t){t(o)}))},function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,i(t,At.redirected)?n.readyCbs.forEach(function(t){t(o)}):n.readyErrorCbs.forEach(function(e){e(t)}))})},Lt.prototype.confirmTransition=function(t,e,r){var a,u=this,s=this.current,c=function(t){!i(t)&&o(t)&&(u.errorCbs.length?u.errorCbs.forEach(function(e){e(t)}):(n(),console.error(t))),r&&r(t)},p=t.matched.length-1,f=s.matched.length-1;if(x(t,s)&&p===f&&t.matched[p]===s.matched[f])return this.ensureURL(),c(jt(a=s,t,At.duplicated,'Avoided redundant navigation to current location: "'+a.fullPath+'".'));var h=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),l=h.updated,d=h.deactivated,v=h.activated,y=[].concat(function(t){return $t(t,"beforeRouteLeave",Pt,!0)}(d),this.router.beforeHooks,function(t){return $t(t,"beforeRouteUpdate",Pt)}(l),v.map(function(t){return t.beforeEnter}),xt(v));this.pending=t;var m=function(e,r){if(u.pending!==t)return c(_t(s,t));try{e(t,s,function(e){!1===e?(u.ensureURL(!0),c(function(t,e){return jt(t,e,At.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(s,t))):o(e)?(u.ensureURL(!0),c(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(c(Ct(s,t)),"object"==typeof e&&e.replace?u.replace(e):u.push(e)):r(e)})}catch(t){c(t)}};bt(y,m,function(){var r=[];bt(function(t,e,r){return $t(t,"beforeRouteEnter",function(t,n,o,i){return function(t,e,r,n,o){return function(i,a,u){return t(i,a,function(t){"function"==typeof t&&n.push(function(){!function t(e,r,n,o){r[n]&&!r[n]._isBeingDestroyed?e(r[n]):o()&&setTimeout(function(){t(e,r,n,o)},16)}(t,e.instances,r,o)}),u(t)})}}(t,o,i,e,r)})}(v,r,function(){return u.current===t}).concat(u.router.resolveHooks),m,function(){if(u.pending!==t)return c(_t(s,t));u.pending=null,e(t),u.router.app&&u.router.app.$nextTick(function(){r.forEach(function(t){t()})})})})},Lt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Lt.prototype.setupListeners=function(){},Lt.prototype.teardownListeners=function(){this.listeners.forEach(function(t){t()}),this.listeners=[]};var Tt=function(t){function e(e,r){t.call(this,e,r),this._startLocation=qt(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=mt&&r;n&&this.listeners.push(ut());var o=function(){var r=t.current,o=qt(t.base);t.current===w&&o===t._startLocation||t.transitionTo(o,function(t){n&&st(e,t,r,!0)})};window.addEventListener("popstate",o),this.listeners.push(function(){window.removeEventListener("popstate",o)})}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){gt(E(n.base+t.fullPath)),st(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){wt(E(n.base+t.fullPath)),st(n.router,t,o,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if(qt(this.base)!==this.current.fullPath){var e=E(this.base+this.current.fullPath);t?gt(e):wt(e)}},e.prototype.getCurrentLocation=function(){return qt(this.base)},e}(Lt);function qt(t){var e=decodeURI(window.location.pathname);return t&&0===e.toLowerCase().indexOf(t.toLowerCase())&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Ut=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=qt(t);if(!/^\/#/.test(e))return window.location.replace(E(t+"/#"+e)),!0}(this.base)||It()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,r=mt&&e;r&&this.listeners.push(ut());var n=function(){var e=t.current;It()&&t.transitionTo(Mt(),function(n){r&&st(t.router,n,e,!0),mt||Ht(n.fullPath)})},o=mt?"popstate":"hashchange";window.addEventListener(o,n),this.listeners.push(function(){window.removeEventListener(o,n)})}},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){Bt(t.fullPath),st(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){Ht(t.fullPath),st(n.router,t,o,!1),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Mt()!==e&&(t?Bt(e):Ht(e))},e.prototype.getCurrentLocation=function(){return Mt()},e}(Lt);function It(){var t=Mt();return"/"===t.charAt(0)||(Ht("/"+t),!1)}function Mt(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function Vt(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Bt(t){mt?gt(Vt(t)):window.location.hash=t}function Ht(t){mt?wt(Vt(t)):window.location.replace(Vt(t))}var zt=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,function(){e.index=r,e.updateRoute(n)},function(t){i(t,At.duplicated)&&(e.index=r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Lt),Ft=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Z(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!mt&&!1!==t.fallback,this.fallback&&(e="hash"),W||(e="abstract"),this.mode=e,e){case"history":this.history=new Tt(this,t.base);break;case"hash":this.history=new Ut(this,t.base,this.fallback);break;case"abstract":this.history=new zt(this,t.base);break;default:0}},Dt={currentRoute:{configurable:!0}};function Nt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}Ft.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Dt.currentRoute.get=function(){return this.history&&this.history.current},Ft.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardownListeners()}),!this.app){this.app=t;var r=this.history;if(r instanceof Tt||r instanceof Ut){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},Ft.prototype.beforeEach=function(t){return Nt(this.beforeHooks,t)},Ft.prototype.beforeResolve=function(t){return Nt(this.resolveHooks,t)},Ft.prototype.afterEach=function(t){return Nt(this.afterHooks,t)},Ft.prototype.onReady=function(t,e){this.history.onReady(t,e)},Ft.prototype.onError=function(t){this.history.onError(t)},Ft.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise(function(e,r){n.history.push(t,e,r)});this.history.push(t,e,r)},Ft.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise(function(e,r){n.history.replace(t,e,r)});this.history.replace(t,e,r)},Ft.prototype.go=function(t){this.history.go(t)},Ft.prototype.back=function(){this.go(-1)},Ft.prototype.forward=function(){this.go(1)},Ft.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Ft.prototype.resolve=function(t,e,r){var n=F(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?E(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Ft.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==w&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Ft.prototype,Dt),Ft.install=Y,Ft.version="3.3.4",W&&window.Vue&&window.Vue.use(Ft),e.a=Ft},DuR2:function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r}});
//# sourceMappingURL=vendor.b155454967e7e23f5baf.js.map