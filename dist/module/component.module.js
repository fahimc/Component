const ComponentManager={componentCollection:{},instanceCollection:[],plugins:[],init(){document.addEventListener("DOMContentLoaded",this.onLoad.bind(this))},onLoad(){this.generateComponents(),this.observe()},generateComponents(){for(let e in this.componentCollection){let t=this.componentCollection[e].obj,n=this.componentCollection[e].template;this.createAllInstance(t,n)}},observe(){new MutationObserver(e=>{e.forEach(e=>{e.removedNodes.length&&e.removedNodes.forEach(e=>{if(e.component){e.component.unmounted();for(var t=0;t<this.instanceCollection.length;++t)if(this.instanceCollection[instance]==e.component){this.collection.splice(t,1);break}}}),e.addedNodes.length&&e.addedNodes.forEach(e=>{let t=e.getAttribute(`${Component.CONST.COMPONENT_ATTRIBUTE}`);if(t){let n=this.componentCollection[t].obj,o=this.componentCollection[t].template;this.createInstance(e,n,o)}})})}).observe(document.body,{childList:!0})},createAllInstance(e,t){document.querySelectorAll(`[${Component.CONST.COMPONENT_ATTRIBUTE}="${e.name}"]`).forEach(n=>{this.createInstance(n,e,t)})},createInstance(e,t,n){let o=document.querySelector(`[${Component.CONST.COMPONENT_ATTRIBUTE}="${t.name}"][${Component.CONST.TEMPLATE_ATTRIBUTE}]`),i=o||n,c=new ComponentInstance(e,t.data,t.methods);this.instanceCollection.push(c),e.component=c,i&&(e.innerHTML="string"==typeof i?i:i.innerHTML),c.mounted(),c.updated()}};class Component{constructor(e,t){ComponentManager.componentCollection[e.name]={obj:e,template:t}}}Component.CONST={COMPONENT_ATTRIBUTE:"data-component",TEMPLATE_ATTRIBUTE:"data-template"};class ComponentInstance{constructor(e,t,n){if(this.element=e,t)for(let e in t)Object.defineProperty(this,e,{get(){return this[`_${e}`]},set(t){this[`_${e}`]=t,this.updated()}}),this[e]=t[e];if(n)for(let e in n)this[e]=n[e];ComponentManager.plugins.forEach(e=>{e&&e(this)})}mounted(){}unmounted(){}updated(){}}ComponentManager.init();export default Component;