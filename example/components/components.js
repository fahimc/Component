let component = new Component({
  name: 'container',
  data: {
    message: 'hello world'
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