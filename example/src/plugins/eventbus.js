const EventBus = {
    init() {
    	ComponentManager.plugins.push(EventBus.inject);
    },
    inject(instance){
    	instance.getEventBus = function (){
    		return EventBus;
    	}	
    }
};
window.EventBus = EventBus;
EventBus.init();