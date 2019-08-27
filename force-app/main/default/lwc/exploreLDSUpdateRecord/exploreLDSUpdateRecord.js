import { LightningElement, wire } from 'lwc';

import getRandomContact from '@salesforce/apex/exploreContactController.getRandomContact'

import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import { updateRecord } from 'lightning/uiRecordApi'

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName'
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'
import ID_FIELD from '@salesforce/schema/Contact.Id'


export default class ExploreLDSUpdateRecord extends LightningElement {

    @wire(getRandomContact) contact

    handleClick(){

        const fields = {}

        fields[ID_FIELD.fieldApiName] = this.contact.data.Id;
        fields[FIRSTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='FirstName']").value;
        fields[LASTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='LastName']").value;


        const recordInput = { fields }

        updateRecord(recordInput)
                    .then(() => {
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: 'Success',
                                message: 'Record Updated',
                                variant: 'success'
                            })
                        );
                    })
                    .catch(error => {
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: 'Error',
                                message: error.body.message,
                                variant: 'error'
                            })
                        )
                    })

    }
    
}