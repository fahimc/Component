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