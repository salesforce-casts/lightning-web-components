import { LightningElement, wire } from 'lwc';

import { fireEvent } from 'c/pubsub'
import { CurrentPageReference } from 'lightning/navigation'

export default class ExploreBroadcasterComponent extends LightningElement {

    message = 'HEY!! Salesforce Casts';

    @wire(CurrentPageReference) CurrentPageReference;

    handleClick(){
        fireEvent(this.CurrentPageReference, "sendData", this.person)
    }
    
}