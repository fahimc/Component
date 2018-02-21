const ComponentManager = {
  componentCollection: {},
  instanceCollection: [],
  init() {
    document.addEventListener('DOMContentLoaded', this.onLoad.bind(this));
  },
  onLoad() {
    this.generateComponents();
    this.observe();
  },
  generateComponents() {
    for (let key in this.componentCollection) {
      let obj = this.componentCollection[key];
      this.createAllInstance(obj);
    };
  },
  observe() {
    var observer = new MutationObserver((mutations) =>{
      mutations.forEach((item) => {
        if (item.removedNodes.length) {
          item.removedNodes.forEach((element) => {
            if (element.component) element.component.unmounted();
          });
        }
        if (item.addedNodes.length) {
          item.addedNodes.forEach((element) => {
            let componentName = element.getAttribute(`${Component.CONST.COMPONENT_ATTRIBUTE}`);
            if (componentName) {
              let obj = this.componentCollection[componentName];
              this.createInstance(element,obj);
            }
          });
        }
      });
    });
    observer.observe(document.body, { childList: true });
  },
  createAllInstance(obj) {
    let elements = document.querySelectorAll(`[${Component.CONST.COMPONENT_ATTRIBUTE}="${obj.name}"]`);
    elements.forEach((element) => {
    	this.createInstance(element,obj)
    });
  },
  createInstance(element,obj) {
    let instance = new ComponentInstance(element, obj.data, obj.methods);
    element.component = instance;
    instance.mounted();
    instance.update();
    //this.instanceCollection.push(instance);
  }
};
ComponentManager.init();
class Component {
  constructor(obj) {
    ComponentManager.componentCollection[obj.name] = obj;
  }

};
Component.CONST = {
  COMPONENT_ATTRIBUTE: 'data-component'
};
class ComponentInstance {
  constructor(element, data, methods) {
    this.element = element;
    for (let key in data) {

      Object.defineProperty(this, key, {
        get() {
          return this[`_${key}`];
        },
        set(new_value) {
          this[`_${key}`] = new_value;
          this.update();
        }
      });
      this[key] = data[key];
    }
    for (let key in methods) {
      this[key] = methods[key];
    }
  }
  mounted() {

  }
  unmounted() {

  }
  update() {

  }
}