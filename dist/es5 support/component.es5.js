"use strict";var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Array.prototype.forEach||(Array.prototype.forEach=function(e,t){if("function"!=typeof e)throw new TypeError(e+" is not a function");var n=this;t=t||this;for(var o=0,r=n.length;o!==r;++o)e.call(t,n[o],o,n)}),NodeList.prototype.forEach=Array.prototype.forEach,window.MutationObserver=window.MutationObserver||function(e){function t(e){this.i=[],this.m=e}function n(t){var n,o={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(n in t)o[n]!==e&&t[n]!==e&&(o[n]=t[n]);return o}function o(t,o){var u=a(t,o);return function(l){var s,d=l.length;o.a&&3===t.nodeType&&t.nodeValue!==u.a&&l.push(new n({type:"characterData",target:t,oldValue:u.a})),o.b&&u.b&&r(l,t,u.b,o.f),(o.c||o.g)&&(s=function(t,o,a,u){function l(e,o,a,i,c){var l,d,f,h=e.length-1;for(c=-~((h-c)/2);f=e.pop();)l=a[f.j],d=i[f.l],u.c&&c&&Math.abs(f.j-f.l)>=h&&(t.push(n({type:"childList",target:o,addedNodes:[l],removedNodes:[l],nextSibling:l.nextSibling,previousSibling:l.previousSibling})),c--),u.b&&d.b&&r(t,l,d.b,u.f),u.a&&3===l.nodeType&&l.nodeValue!==d.a&&t.push(n({type:"characterData",target:l,oldValue:d.a})),u.g&&s(l,d)}function s(o,a){for(var f,h,p,m,v,b=o.childNodes,g=a.c,T=b.length,y=g?g.length:0,C=0,N=0,E=0;N<T||E<y;)m=b[N],v=(p=g[E])&&p.node,m===v?(u.b&&p.b&&r(t,m,p.b,u.f),u.a&&p.a!==e&&m.nodeValue!==p.a&&t.push(n({type:"characterData",target:m,oldValue:p.a})),h&&l(h,o,b,g,C),u.g&&(m.childNodes.length||p.c&&p.c.length)&&s(m,p),N++,E++):(d=!0,f||(f={},h=[]),m&&(f[p=i(m)]||(f[p]=!0,-1===(p=c(g,m,E,"node"))?u.c&&(t.push(n({type:"childList",target:o,addedNodes:[m],nextSibling:m.nextSibling,previousSibling:m.previousSibling})),C++):h.push({j:N,l:p})),N++),v&&v!==b[N]&&(f[p=i(v)]||(f[p]=!0,-1===(p=c(b,v,N))?u.c&&(t.push(n({type:"childList",target:a.node,removedNodes:[v],nextSibling:g[E+1],previousSibling:g[E-1]})),C--):h.push({j:p,l:E})),E++));h&&l(h,o,b,g,C)}var d;return s(o,a),d}(l,t,u,o)),(s||l.length!==d)&&(u=a(t,o))}}function r(t,o,r,a){for(var i,u,c={},l=o.attributes,d=l.length;d--;)u=(i=l[d]).name,a&&a[u]===e||(s(o,i)!==r[u]&&t.push(n({type:"attributes",target:o,attributeName:u,oldValue:r[u],attributeNamespace:i.namespaceURI})),c[u]=!0);for(u in r)c[u]||t.push(n({target:o,type:"attributes",attributeName:u,oldValue:r[u]}))}function a(e,t){var n=!0;return function e(o){var r={node:o};return!t.a||3!==o.nodeType&&8!==o.nodeType?(t.b&&n&&1===o.nodeType&&(r.b=u(o.attributes,function(e,n){return t.f&&!t.f[n.name]||(e[n.name]=s(o,n)),e})),n&&(t.c||t.a||t.b&&t.g)&&(r.c=function(e,t){for(var n=[],o=0;o<e.length;o++)n[o]=t(e[o],o,e);return n}(o.childNodes,e)),n=t.g):r.a=o.nodeValue,r}(e)}function i(e){try{return e.id||(e.mo_id=e.mo_id||d++)}catch(t){try{return e.nodeValue}catch(e){return d++}}}function u(e,t){for(var n={},o=0;o<e.length;o++)n=t(n,e[o],o,e);return n}function c(e,t,n,o){for(;n<e.length;n++)if((o?e[n][o]:e[n])===t)return n;return-1}t._period=30,t.prototype={observe:function(e,n){for(var r={b:!!(n.attributes||n.attributeFilter||n.attributeOldValue),c:!!n.childList,g:!!n.subtree,a:!(!n.characterData&&!n.characterDataOldValue)},a=this.i,i=0;i<a.length;i++)a[i].s===e&&a.splice(i,1);var c;n.attributeFilter&&(r.f=u(n.attributeFilter,function(e,t){return e[t]=!0,e})),a.push({s:e,o:o(e,r)}),this.h||(c=this,function e(){var n=c.takeRecords();n.length&&c.m(n,c),c.h=setTimeout(e,t._period)}())},takeRecords:function(){for(var e=[],t=this.i,n=0;n<t.length;n++)t[n].o(e);return e},disconnect:function(){this.i=[],clearTimeout(this.h),this.h=null}};var l=document.createElement("i");l.style.top=0;var s=(l="null"!=l.attributes.style.value)?function(e,t){return t.value}:function(e,t){return"style"!==t.name?t.value:e.style.cssText},d=1;return t}(void 0);var ComponentManager={componentCollection:{},instanceCollection:[],init:function(){document.addEventListener("DOMContentLoaded",this.onLoad.bind(this))},onLoad:function(){this.generateComponents(),this.observe()},generateComponents:function(){for(var e in this.componentCollection){var t=this.componentCollection[e].obj,n=this.componentCollection[e].template;this.createAllInstance(t,n)}},observe:function(){var e=this;new MutationObserver(function(t){t.forEach(function(t){t.removedNodes.length&&t.removedNodes.forEach(function(e){e.component&&e.component.unmounted()}),t.addedNodes.length&&t.addedNodes.forEach(function(t){var n=t.getAttribute(""+Component.CONST.COMPONENT_ATTRIBUTE);if(n){var o=e.componentCollection[n].obj,r=e.componentCollection[n].template;e.createInstance(t,o,r)}})})}).observe(document.body,{childList:!0})},createAllInstance:function(e,t){var n=this;document.querySelectorAll("["+Component.CONST.COMPONENT_ATTRIBUTE+'="'+e.name+'"]').forEach(function(o){n.createInstance(o,e,t)})},createInstance:function(e,t,n){var o=document.querySelector("["+Component.CONST.COMPONENT_ATTRIBUTE+'="'+t.name+'"]['+Component.CONST.TEMPLATE_ATTRIBUTE+"]"),r=o||n,a=new ComponentInstance(e,t.data,t.methods);e.component=a,r&&(e.innerHTML="string"==typeof r?r:r.innerHTML),a.mounted(),a.updated()}},Component=function e(t,n){_classCallCheck(this,e),ComponentManager.componentCollection[t.name]={obj:t,template:n}};Component.CONST={COMPONENT_ATTRIBUTE:"data-component",TEMPLATE_ATTRIBUTE:"data-template"};var ComponentInstance=function(){function e(t,n,o){var r=this;if(_classCallCheck(this,e),this.element=t,n){var a=function(e){Object.defineProperty(r,e,{get:function(){return this["_"+e]},set:function(t){this["_"+e]=t,this.updated()}}),r[e]=n[e]};for(var i in n)a(i)}if(o)for(var i in o)this[i]=o[i]}return _createClass(e,[{key:"mounted",value:function(){}},{key:"unmounted",value:function(){}},{key:"updated",value:function(){}}]),e}();ComponentManager.init();