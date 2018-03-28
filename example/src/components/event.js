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
    getEventBus(){

    },
    onEvent(eventName,data){
      switch(eventName){
        case 'HELLO_WORLD':
        this.message = data.message;
        break;
      }
    },
    updated(){
      this.element.querySelector('h1').textContent = this.message;
    }
  }
});