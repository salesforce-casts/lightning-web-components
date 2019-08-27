({
	handleSendData : function(component, event, helper) {
		var msg = event.getParam('sendmessage');
        
        component.set( 'v.msg', msg);
	}
})