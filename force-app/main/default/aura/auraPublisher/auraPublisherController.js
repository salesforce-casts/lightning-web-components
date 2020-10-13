({
	handleSendGeneralInfo : function(component, event, helper) {
        
        let fName = component.get(' v.firstName ');
                let lName = component.get(' v.lastName ');
                let prof = component.get(' v.profession ');
        
        let data = {
            firstName: fName,
            lastName: lName,
            profession: prof
            
        }
        
		component.find('generalInfoPublisher').publish(data);
	}
})