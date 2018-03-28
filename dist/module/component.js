const ComponentManager = {
    componentCollection: {},
    instanceCollection: [],
    plugins: [],
    init() {
        document.addEventListener('DOMContentLoaded', this.onLoad.bind(this));
    },
    onLoad() {
        this.generateComponents();
        this.observe();
    },
    generateComponents() {
        for (let key in this.componentCollection) {
            let obj = this.componentCollection[key].obj;
            let template = this.componentCollection[key].template;
            this.createAllInstance(obj,template);
        };
    },
    observe() {
        var observer = new MutationObserver((mutations) => {
            mutations.forEach((item) => {
                if (item.removedNodes.length) {
                    item.removedNodes.forEach((element) => {
                        if (element.component) {
                            element.component.unmounted();
                            for(var a = 0;a<this.instanceCollection.length;++a){
                                    if(this.instanceCollection[instance] == element.component){
                                        this.collection.splice(a,1);    
                                        break;
                                    }
                            }
                        }
                    });
                }
                if (item.addedNodes.length) {
                    item.addedNodes.forEach((element) => {
                        let componentName = element.getAttribute(`${Component.CONST.COMPONENT_ATTRIBUTE}`);
                        if (componentName) {
                            let obj = this.componentCollection[componentName].obj;
                            let template = this.componentCollection[componentName].template;
                            this.createInstance(element, obj,template);
                        }
                    });
                }
            });
        });
        observer.observe(document.body, { childList: true });
    },
    createAllInstance(obj,template) {
        let elements = document.querySelectorAll(`[${Component.CONST.COMPONENT_ATTRIBUTE}="${obj.name}"]`);
        elements.forEach((element) => {
            this.createInstance(element, obj, template)
        });
    },
    createInstance(element, obj,templateString) {
        let templateElement = document.querySelector(`[${Component.CONST.COMPONENT_ATTRIBUTE}="${obj.name}"][${Component.CONST.TEMPLATE_ATTRIBUTE}]`);
        let template = templateElement ? templateElement : templateString;
        let instance = new ComponentInstance(element, obj.data, obj.methods);
        this.instanceCollection.push(instance);
        element.component = instance;
        if(template)element.innerHTML = typeof template == 'string' ? template : template.innerHTML;
        instance.mounted();
        instance.updated();
    }
};

class Component {
    constructor(obj,template) {
        ComponentManager.componentCollection[obj.name] = {obj:obj,template:template};
    }

};
Component.CONST = {
    COMPONENT_ATTRIBUTE: 'data-component',
    TEMPLATE_ATTRIBUTE: 'data-template'
};
class ComponentInstance {
    constructor(element, data, methods) {
        this.element = element;
        if (data) {
            for (let key in data) {

                Object.defineProperty(this, key, {
                    get() {
                        return this[`_${key}`];
                    },
                    set(new_value) {
                        this[`_${key}`] = new_value;
                        this.updated();
                    }
                });
                this[key] = data[key];
            }
        }
        if (methods) {
            for (let key in methods) {
                this[key] = methods[key];
            }
        }

        ComponentManager.plugins.forEach((plugin)=>{
            if(plugin)plugin(this);
        });

    }
    mounted() {

    }
    unmounted() {

    }
    updated() {

    }
}
ComponentManager.init();

export default Component;