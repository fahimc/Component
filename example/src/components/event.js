let eventComponent = new Component({
  name: 'event',
  data: {
    message: 'I am an event component'
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