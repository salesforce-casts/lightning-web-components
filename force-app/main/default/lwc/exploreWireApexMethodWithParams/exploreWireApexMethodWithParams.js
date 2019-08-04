import { LightningElement, wire, api } from 'lwc';

import fetchContact from '@salesforce/apex/CustomContactController.fetchContact'

export default class ExploreWireApexMethodWithParams extends LightningElement {

    @api recordId;

    @wire(fetchContact, {accountId : '$recordId'}) contacts

}