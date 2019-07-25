import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class ExploreLDSHandlers extends LightningElement {
    @api recordId

    handleSubmit(event){
        //1. Prevent the default behaviour 
        event.preventDefault();
        //2. Get all the fields of the record
        const fields = event.detail.fields;
        //3. Modify a field 
        fields.Name = 'Testing Salesforce Casts';
        //4. Submit the form 
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSuccess(event){
        // eslint-disable-next-line no-console
        console.log(event.detail);

        const toast = new ShowToastEvent({
            title: 'Success!!',
            message: 'Record is udpated!!'
        });

        this.dispatchEvent(toast);
    }

    handleError(){
        // eslint-disable-next-line no-console
        console.log('ERRRO!!!!');
    }
}