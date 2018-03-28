const StateManager = {
	_state:{},
	set(dotNotationKey,value){
		this.dotNotation(dotNotationKey,value);
		this.dispatchToAll();
	},
	get(dotNotationKey){
		return dotNotationKey.split('.').reduce((o,i)=>o[i], this._state);
	},
    init() {
    	ComponentManager.plugins.push(StateManager.inject);
    },
    inject(instance){
    	instance.getStateManager = function (){
    		return StateManager;
    	}	
    },
    dotNotation(str,value){
    	var arr = str.split('.');
    	var last = arr.pop();
    	var obj = this._state;
    	arr.forEach((key)=>{
    		if(!obj[key]){
    			obj[key] = {};
    		}
    		obj = obj[key];
    	});
    	obj[last] = value;
    	return obj[last];
    },
    dispatchToAll(){
    	ComponentManager.instanceCollection.forEach((instance)=>{
    		if(instance && instance.onStateChange)instance.onStateChange(StateManager);
    	});
    }


};
window.StateManager = StateManager;
StateManager.init();