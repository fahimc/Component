
# Component. 
This is a very small (2kb) ES6 component framework to enable you to build apps in a similar fashion as vuejs.

The aim is to give you the bare minimum required for a component framework to reduce file size so it's perfect for project which have a size limit.

If you are familiar with Vuejs or any other web components framework then it will be an easy transition to the framework.

The best thing about this framework is that it can work with everything and doesn't conflict with any other framework or library so you can use it along side others. 

## Features
- Create components from rendered html. html that has already been placed on the page.
- Components are specified by data attributes  in the html to keep this framework flexible and to play nice with others.
- Have multiple instances of your component.
- Component structure similar to vuejs with **data** and **methods** used to add properties to the component. **mount** and **unmount** are called when to render and destroy the component.
- **One-way** binding for data properties. **updated()** will get called every time the data property changes.
- If a new element is added to the Dom and is a component it will automatically instantiate a new component for that element.
- if an element is removed from the Dom.
 **unmount()** is called on the component.

# how to use

1. First you need to include the script on to your page.

```html
	<script type="text/javascript" src="component.min.js"></script>
```
2. setup you html page. A an element and give it a **data-component** attribute and inside that attribute give your component a name. In this example I will be calling my component 'container'. this element will be your template so add your template syntax within side the element. I've added a **h1** tag. you will need to copy the whole element to create another instance. I know it's not really a template of you have to duplicate the structure for every instance so there is a solution for this which I will show you later. If you don't use that approach you have to copy and paste your component template to everywhere you use it.

```html
<div data-component="container">
	<h1></h1>
</div>
```

3.  Now we will create the component functionality. In a new is file (ensure it loads after the component library) we will add the following.

```js
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
    unmounted(){
    },
    updated(){
     this.element.querySelector('h1').textContent = this.message;
    }
  }
});
```
This code creates a new component called 'container' and you can set the name in the **name** property. so when you create a HTML element with a `data-component="container"` then this component will bind to it.

**Component** has two object which you can, **data** and **methods**. 

**data**: this is where you can set variables and in the example above I have created a variable called 'message'. This will be added to you component and you can access it by calling `this.message`. This will also have one-way binding so when the value changes the **updated()** method gets called on your component. 

**methods**: this is where you can add methods for your component. There are methods which are used by this framework such as **mounted()**, **unmounted()** and **updated()**. You can execute a method by calling it like this `this.getMessage()`  


# Component Lifecycle
```
 ___________
| Component |
 -----------
     |
     |
 _________
| mounted |
 ---------       ---------
     |--------- | updated |
     |           --------- 
     |
  _________
| unmounted |
  ---------     
```