import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class ExploreLDSHandlers extends LightningElement {
    @api recordId

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