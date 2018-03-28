


# Component. 
This is a very small (1.3kb) ES6 component framework to enable you to build apps in a similar fashion as vuejs.

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
 
![diagram](https://docs.google.com/drawings/d/e/2PACX-1vQ-h3elcZZlrNHIKSwvs5CfogOvFNowyfvcREyFihwhikzT2sjUR5q6aClZO7T4AtlSpBX0eG9J79cA/pub?w=1120&h=2002)  

# how to use

1. First you need to include the script on to your page.

```html
  <script type="text/javascript" src="component.min.js"></script>
```
There is many version of this framework for you to use:  
 - **ES6** (dist/component[min].js): This is for use with evergreen browsers and doesn't work on IE11. **size** - 1.3kb.
 - **ES5** (dist/es5 support/component.es5[.min].js): This has polyfills and support for IE11.  **size** - 6kb
 - **AMD**   (dist/module/component.module[.min].js): for use as a module and allows import of **Component** class. **size** -  1.3kb

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
 ___________
     |
     |
 _________
| mounted |
 _________       _________
     |--------- | updated |
     |           _________
     |
  _________
| unmounted |
  _________     
```

## Adding Templates
There are many ways you can add templates and not have to replicate the HTML.

### Specify a temlplate element  
You can set one of your components to be the template and place the tags within it. The rest do not need anything within it as the framework will take the HTML from the template and create it for each instance of the component. 

To do this all you need to do is add a `data-template` attribute to a component element.

```html
<div data-component="hero" data-template>
        <h1></h1>
        <p>this is sub text</p>
</div>

<div data-component="hero">
</div>

<div data-component="hero">
</div>
```

### Template from a String 
You can specify the template as a string upon creating the component and then you don't need to have a tag on the dom. If you supply the second argument with a string with html then this will be used for the element innerHTML.

Whenever an element is added to the dom with that component name, then it will generate the html for it.

```js
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

//create a component and add it to the dom
 let section = document.createElement('section');
 section.setAttribute('data-component', 'dyno');
 document.body.appendChild(section);
```
## Binding data  
You can bind data to an element by using the data{} object and adding variable to it. You can then use the updated() method to update the element when the data variables are modified.  

```js
export default new Component({
  name: 'main-carousel',
  data: {
    message: 'I am a main-carousel component'
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
```    
As you can see we are changing the textContent of a H1 tag withing the instance. You can access the element by calling `this.element`.

## Access the element  
Every instance of a component gets passed an element and you can access it by calling `this.element`.

## Build project
To build your project, run the following command:
```cmd
npm run dist
```

## Creating Plugins
If you want to create plugins or add extra functionality to a component instance then you can do this by doing the following

There is a `ComponentManager` global object that you can access and this has an array called `plugins`. 
If you push a `function` into this array then when a new instance of a component is created it will pass the instance into the function so you can either add functionality to the instance, create a mixin or do something else. 

### Example
Lets create a function to change the background which will be applied to all the components.

1. Create you function
```js
function updateBackground(instance){
  instance.backgroundUpdate = function(){
    this.element.style.backgroundColor = '#000';
  }
}
```
2. Add the function to the plugins array  
```js
ComponentManager.plugins.push(updateBackground);
```
3. Let's try it!  
Execute the new mthod within a component.
```js
new Component({
  name: 'background',
  data: {
    title: 'Hello World'
  },
  methods: {
    getMessage() {
      return this.message;
    },
    mounted(){
        
    },
    updated(){
   this.element.querySelector('h1').textContent = this.title;
     this.backgroundUpdate();
    }
  }
});
```

## Plugins
[StateManager](https://gist.github.com/fahimc/e8cf37f2e4aa0021c7516353b313c88b)  
[EventBus](https://gist.github.com/fahimc/e1b155f89ad338e2e0fd4f680e4d1769)
