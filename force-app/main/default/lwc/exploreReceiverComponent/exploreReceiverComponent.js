import { LightningElement, wire } from 'lwc';

import { CurrentPageReference } from 'lightning/navigation'

import { registerListener,unregisterAllListeners } from 'c/pubsub'


export default class ExploreReceiverComponent extends LightningElement {


    @wire(CurrentPageReference) pageRef

    connectedCallback(){
        registerListener("sendData", this.handleCallback, this);        
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }

    handleCallback(data){

        // eslint-disable-next-line no-console
        console.log(data.name);
        // eslint-disable-next-line no-console
        console.log(data.age);
        // eslint-disable-next-line no-console
        console.log(data.gender);
    }

}