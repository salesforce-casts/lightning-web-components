import { LightningElement, wire } from "lwc";

//1. Importing the named imports

import { publish, MessageContext } from "lightning/messageService";
import ACCOUNT_CHANNEL from "@salesforce/messageChannel/AccountDataMessageChannel__c";

export default class PublisherComponent extends LightningElement {
  //2. Wiring the MessageContext to a property
  @wire(MessageContext)
  messageContext;

  //3. Handling the user input, which in our case is going to be a button click
  handleClick() {
    const messaage = {
      recordId: "001xx000003NGSFAA4",
      name: "Burlington Textiles of America"
    };

    //4. Publishing the message
    publish(this.messageContext, ACCOUNT_CHANNEL, messaage);
  }
}
