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
    record

    get name(){
        return this.record.data.fields.Name.value;
    }
    
    get industry(){
        return this.record.data.fields.Industry.value;
    }
    
    get rating(){
        return this.record.data.fields.Rating.value;
    }
    
    

}