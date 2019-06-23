import { LightningElement, track } from 'lwc';

export default class ExploreSettersGetters extends LightningElement {

    welcomeMessage = 'Hey!! Salesforce Casts';
    @track finalMessage;
    get message(){
        return this.welcomeMessage;
    }

    set message(value){
        this.finalMessage = value.toUpperCase();
    }

    handleChange(event){
        this.message = event.target.value;
    }
}