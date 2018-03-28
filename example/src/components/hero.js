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
        this.getStateManager().set('video.title','Hero component: State has changed');
    },
    updated(){
      this.element.querySelector('h1').textContent = this.message;
    },
    onStateChange(stateManager){
      this.element.querySelector('h1').textContent = stateManager.get('video.title');
    }
  }
});