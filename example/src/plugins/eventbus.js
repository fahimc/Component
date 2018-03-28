const EventBus = {
    init() {
        ComponentManager.plugins.push(EventBus.inject);
    },
    inject(instance) {
        instance.getEventBus = function() {
            return EventBus;
        }
    },
    dispatchEvent(eventName, data, scope) {
        ComponentManager.instanceCollection.forEach((instance) => {
            if (instance && instance.onEvent && instance !== scope) instance.onEvent(eventName, data);
        });
    }
};
window.EventBus = EventBus;
EventBus.init();