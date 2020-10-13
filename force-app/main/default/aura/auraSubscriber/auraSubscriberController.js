({
	handleGeneralInfoMessage : function(component, event, helper) {
        if(event !== null && event.getParams() !== null){
            let receivedInfo = event.getParams();
            
            component.set( 'v.gInfo', JSON.stringify(receivedInfo, null, "\t"));
        }
	}
})