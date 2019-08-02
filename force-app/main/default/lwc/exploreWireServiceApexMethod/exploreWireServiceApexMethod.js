import { LightningElement, wire, track } from 'lwc';

import getAccountsList from '@salesforce/apex/AccountController.getAccountsList';

export default class ExploreWireServiceApexMethod extends LightningElement {

    @track accounts;
    @track error;

    @wire(getAccountsList)
    wiredAccounts({error, data}){
        if(data){
            this.accounts = data;
            this.error = error;
        } else if(error){
            this.error = error;
            this.accounts = undefined;
        }
    }

}