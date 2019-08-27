import { LightningElement, api, wire, track } from 'lwc';

import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Account.Name',
    'Account.Industry',
    'Account.Rating'
]

export default class ExploreWireService extends LightningElement {

    @api recordId;
    @track contacts;
    @track error;

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS }) 
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }

    /** 
     
     get name(){
         return this.record.data.fields.Name.value;
        }
        
        get industry(){
        return this.record.data.fields.Industry.value;
    }
    
    get rating(){
        return this.record.data.fields.Rating.value;
    }
    
    */
    

}