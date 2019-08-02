import { LightningElement, wire, track } from 'lwc';

import getAccountsList from '@salesforce/apex/AccountController.getAccountsList';

export default class ExploreWireServiceApexMethod extends LightningElement {

    @track accounts;
    @track error;
    //1. Wiring an adaptor(getRecord) to a property
    //2. Wiring an Apex method to a property
    //3. Wiring an apex method back to a function
    
    renderedCallback(){
        getAccountsList()
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
    
    
    
    
    // @wire(getAccountsList)
    // wiredAccounts({error, data}){
    //     if(data){
    //         this.accounts = data;
    //         this.error = error;
    //     } else if(error){
    //         this.error = error;
    //         this.accounts = undefined;
    //     }
    // }




}