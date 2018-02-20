const Main = {
  init(){
  	document.addEventListener('DOMContentLoaded',this.onLoad.bind(this));
  },
  onLoad(){
  	console.log(ComponentManager);
  	let section = document.createElement('section');
  	section.setAttribute('data-component','container');
  	section.innerHTML = `<h1></h1>`;
  	document.body.appendChild(section);
  }
};
Main.init();