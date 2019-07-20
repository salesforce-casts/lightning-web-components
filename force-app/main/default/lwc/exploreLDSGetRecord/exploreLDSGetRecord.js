import { LightningElement, api, wire } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

export default class ExploreLDSGetRecord extends LightningElement {
    @api recordId;

    accountObject = ACCOUNT_OBJECT;

    @wire(getRecord, {recordId: '$recordId', fields: [NAME_FIELD]}) 
    record;

    get customNameRendering(){
        return this.record.data? getFieldValue(this.record.data, NAME_FIELD) : '';
    }
}