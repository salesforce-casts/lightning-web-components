import { LightningElement, api, wire } from 'lwc';

import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Account.Name',
    'Account.Industry',
    'Account.Rating'
]

export default class ExploreWireService extends LightningElement {

    @api recordId

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS }) 
    account;

    get name(){
        return this.account.data.fields.Name.value;
    }
    
    get industry(){
        return this.account.data.fields.Industry.value;
    }
    
    get rating(){
        return this.account.data.fields.Rating.value;
    }
    
    

}