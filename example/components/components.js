let component = new Component({
  name: 'container',
  data: {
    message: {
       data: 'hello world'
    }
  },
  methods: {
    getMessage() {
      return this.message;
    },
    mounted(){
        
    },
    update(){
      this.element.querySelector('h1').textContent = this.message.data;
    }
  }
});