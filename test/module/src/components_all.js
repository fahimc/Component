(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentManager = { componentCollection: {}, instanceCollection: [], init: function init() {
    document.addEventListener("DOMContentLoaded", this.onLoad.bind(this));
  },
  onLoad: function onLoad() {
    this.generateComponents(), this.observe();
  },
  generateComponents: function generateComponents() {
    for (var e in this.componentCollection) {
      var t = this.componentCollection[e].obj,
          n = this.componentCollection[e].template;this.createAllInstance(t, n);
    }
  },
  observe: function observe() {
    var _this = this;

    new MutationObserver(function (e) {
      e.forEach(function (e) {
        e.removedNodes.length && e.removedNodes.forEach(function (e) {
          e.component && e.component.unmounted();
        }), e.addedNodes.length && e.addedNodes.forEach(function (e) {
          var t = e.getAttribute("" + Component.CONST.COMPONENT_ATTRIBUTE);if (t) {
            var n = _this.componentCollection[t].obj,
                o = _this.componentCollection[t].template;_this.createInstance(e, n, o);
          }
        });
      });
    }).observe(document.body, { childList: !0 });
  },
  createAllInstance: function createAllInstance(e, t) {
    var _this2 = this;

    document.querySelectorAll("[" + Component.CONST.COMPONENT_ATTRIBUTE + "=\"" + e.name + "\"]").forEach(function (n) {
      _this2.createInstance(n, e, t);
    });
  },
  createInstance: function createInstance(e, t, n) {
    var o = document.querySelector("[" + Component.CONST.COMPONENT_ATTRIBUTE + "=\"" + t.name + "\"][" + Component.CONST.TEMPLATE_ATTRIBUTE + "]"),
        a = o || n,
        c = new ComponentInstance(e, t.data, t.methods);e.component = c, a && (e.innerHTML = "string" == typeof a ? a : a.innerHTML), c.mounted(), c.updated();
  }
};
var Component = function Component(e, t) {
  _classCallCheck(this, Component);

  ComponentManager.componentCollection[e.name] = { obj: e, template: t };
};

Component.CONST = { COMPONENT_ATTRIBUTE: "data-component", TEMPLATE_ATTRIBUTE: "data-template" };
var ComponentInstance = function () {
  function ComponentInstance(e, t, n) {
    _classCallCheck(this, ComponentInstance);

    if (this.element = e, t) {
      var _loop = function (_e) {
        Object.defineProperty(this, _e, { get() {
            return this[`_${_e}`];
          }, set(t) {
            this[`_${_e}`] = t, this.updated();
          } }), this[_e] = t[_e];
      };

      for (let _e in t) {
        _loop(_e);
      }
    }if (n) for (var _e2 in n) {
      this[_e2] = n[_e2];
    }
  }

  _createClass(ComponentInstance, [{
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "unmounted",
    value: function unmounted() {}
  }, {
    key: "updated",
    value: function updated() {}
  }]);

  return ComponentInstance;
}();

ComponentManager.init();exports.default = Component;

},{}],2:[function(require,module,exports){
'use strict';

var _componentModule = require('../../../../dist/module/component.module.js');

var _componentModule2 = _interopRequireDefault(_componentModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = new _componentModule2.default({
  name: 'container',
  data: {
    message: 'I am a container component'
  },
  methods: {
    getMessage: function getMessage() {
      return this.message;
    },
    mounted: function mounted() {},
    updated: function updated() {
      this.element.querySelector('h1').textContent = this.message;
    }
  }
});
var componentWithTemplate = new _componentModule2.default({
  name: 'hero',
  data: {
    message: 'I am a hero component'
  },
  methods: {
    getMessage: function getMessage() {
      return this.message;
    },
    mounted: function mounted() {},
    updated: function updated() {
      this.element.querySelector('h1').textContent = this.message;
    }
  }
});

var componentStringTemplate = new _componentModule2.default({
  name: 'dyno',
  data: {
    message: 'I am a dyno component'
  },
  methods: {
    getMessage: function getMessage() {
      return this.message;
    },
    mounted: function mounted() {},
    updated: function updated() {
      this.element.querySelector('h1').textContent = this.message;
    }
  }
}, '<h1></h1><p>this is dynamically added</p>\n<button>click here</button>');

},{"../../../../dist/module/component.module.js":1}]},{},[2]);
