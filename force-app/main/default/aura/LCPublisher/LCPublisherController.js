({
	handleSendData : function(component, event, helper) {
        
        let rId = component.get(' v.recordId ');
        
        //step2: Get reference to the messageChannel tag and publish the message
        let payLoad = {
            recordId : rId,
            name : 'Test Teja'
        }
        
		component.find('accountMesasgeChannel').publish(payLoad);
	}
})