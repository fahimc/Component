'use strict';

var Main = {
  init: function init() {
    document.addEventListener('DOMContentLoaded', this.onLoad.bind(this));
  },
  onLoad: function onLoad() {
    console.log(ComponentManager);
    var section = document.createElement('section');
    section.setAttribute('data-component', 'hero');
    document.body.appendChild(section);

    setTimeout(function () {
      var section = document.createElement('section');
      section.setAttribute('data-component', 'dyno');
      document.body.appendChild(section);
    }, 5000);
  }
};
Main.init();
var component = new Component({
  name: 'container',
  data: {
    message: 'I am a container component'
  },
  methods: {
    getMessage: function getMessage() {
      return this.message;
    },
    mounted: function mounted() {},
    updated: function updated() {
      this.element.querySelector('h1').textContent = this.message;
    }
  }
});
var componentWithTemplate = new Component({
  name: 'hero',
  data: {
    message: 'I am a hero component'
  },
  methods: {
    getMessage: function getMessage() {
      return this.message;
    },
    mounted: function mounted() {},
    updated: function updated() {
      this.element.querySelector('h1').textContent = this.message;
    }
  }
});

var componentStringTemplate = new Component({
  name: 'dyno',
  data: {
    message: 'I am a dyno component'
  },
  methods: {
    getMessage: function getMessage() {
      return this.message;
    },
    mounted: function mounted() {},
    updated: function updated() {
      this.element.querySelector('h1').textContent = this.message;
    }
  }
}, '<h1></h1><p>this is dynamically added</p>\n<button>click here</button>');