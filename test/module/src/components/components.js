import Component from '../../../../dist/module/component.module.js';

let component = new Component({
  name: 'container',
  data: {
    message: 'I am a container component'
  },
  methods: {
    getMessage() {
      return this.message;
    },
    mounted(){
        
    },
    updated(){
      this.element.querySelector('h1').textContent = this.message;
    }
  }
});
let componentWithTemplate = new Component({
  name: 'hero',
  data: {
    message: 'I am a hero component'
  },
  methods: {
    getMessage() {
      return this.message;
    },
    mounted(){
        
    },
    updated(){
      this.element.querySelector('h1').textContent = this.message;
    }
  }
});

let componentStringTemplate = new Component({
  name: 'dyno',
  data: {
    message: 'I am a dyno component'
  },
  methods: {
    getMessage() {
      return this.message;
    },
    mounted(){
        
    },
    updated(){
      this.element.querySelector('h1').textContent = this.message;
    }
  }
},`<h1></h1><p>this is dynamically added</p>
<button>click here</button>`);