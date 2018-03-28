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