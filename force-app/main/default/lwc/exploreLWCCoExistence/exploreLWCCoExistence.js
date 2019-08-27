import { LightningElement, api } from 'lwc';

export default class ExploreLWCCoExistence extends LightningElement {
    @api message


    handleChange(event){
        this.message = event.target.value;
    }

    handleClick(){
        const sendmessage = this.message;

        const cEvent = new CustomEvent('senddata', { detail: { sendmessage } });

        this.dispatchEvent(cEvent);
    }
}