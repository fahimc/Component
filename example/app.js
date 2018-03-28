'use strict';

var Main = {
    init: function init() {
        document.addEventListener('DOMContentLoaded', this.onLoad.bind(this));
    },
    onLoad: function onLoad() {
        var section = document.createElement('section');
        section.setAttribute('data-component', 'hero');
        document.body.appendChild(section);

        setTimeout(function () {
            var section = document.createElement('section');
            section.setAttribute('data-component', 'dyno');
            document.body.appendChild(section);
        }, 5000);
    }
};
Main.init();
var component = new Component({
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
var componentStringTemplate = new Component({
    name: 'dyno',
    data: {
        message: 'I am a dyno component'
    },
    methods: {
        getMessage: function getMessage() {
            return this.message;
        },
        mounted: function mounted() {
            var eventBus = this.getEventBus();
            if (eventBus) {
                eventBus.dispatchEvent('HELLO_WORLD', {
                    message: 'An event was dispatched'
                }, this);
            }
        },
        getEventBus: function getEventBus() {},
        updated: function updated() {
            this.element.querySelector('h1').textContent = this.message;
        }
    }
}, '<h1></h1><p>this is dynamically added</p>\n<button>click here</button>');
var eventComponent = new Component({
    name: 'event',
    data: {
        message: 'I am an event component'
    },
    methods: {
        getMessage: function getMessage() {
            return this.message;
        },
        mounted: function mounted() {},
        getEventBus: function getEventBus() {},
        onEvent: function onEvent(eventName, data) {
            switch (eventName) {
                case 'HELLO_WORLD':
                    this.message = data.message;
                    break;
            }
        },
        updated: function updated() {
            this.element.querySelector('h1').textContent = this.message;
        }
    }
});
var componentWithTemplate = new Component({
    name: 'hero',
    data: {
        message: 'I am a hero component'
    },
    methods: {
        getMessage: function getMessage() {
            return this.message;
        },
        mounted: function mounted() {
            this.getStateManager().set('video.title', 'Hero component: State has changed');
        },
        updated: function updated() {
            this.element.querySelector('h1').textContent = this.message;
        },
        onStateChange: function onStateChange(stateManager) {
            this.element.querySelector('h1').textContent = stateManager.get('video.title');
        }
    }
});
var EventBus = {
    init: function init() {
        ComponentManager.plugins.push(EventBus.inject);
    },
    inject: function inject(instance) {
        instance.getEventBus = function () {
            return EventBus;
        };
    },
    dispatchEvent: function dispatchEvent(eventName, data, scope) {
        ComponentManager.instanceCollection.forEach(function (instance) {
            if (instance && instance.onEvent && instance !== scope) instance.onEvent(eventName, data);
        });
    }
};
window.EventBus = EventBus;
EventBus.init();
var StateManager = {
    _state: {},
    set: function set(dotNotationKey, value) {
        this.dotNotation(dotNotationKey, value);
        this.dispatchToAll();
    },
    get: function get(dotNotationKey) {
        return dotNotationKey.split('.').reduce(function (o, i) {
            return o[i];
        }, this._state);
    },
    init: function init() {
        ComponentManager.plugins.push(StateManager.inject);
    },
    inject: function inject(instance) {
        instance.getStateManager = function () {
            return StateManager;
        };
    },
    dotNotation: function dotNotation(str, value) {
        var arr = str.split('.');
        var last = arr.pop();
        var obj = this._state;
        arr.forEach(function (key) {
            if (!obj[key]) {
                obj[key] = {};
            }
            obj = obj[key];
        });
        obj[last] = value;
        return obj[last];
    },
    dispatchToAll: function dispatchToAll() {
        ComponentManager.instanceCollection.forEach(function (instance) {
            if (instance && instance.onStateChange) instance.onStateChange(StateManager);
        });
    }
};
window.StateManager = StateManager;
StateManager.init();