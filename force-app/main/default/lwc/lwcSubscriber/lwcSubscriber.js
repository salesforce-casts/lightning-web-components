import { LightningElement, wire } from "lwc";

import {
  subscribe,
  unsubscribe,
  MessageContext
} from "lightning/messageService";
import GENERAL_INFO_CHANNEL from "@salesforce/messageChannel/GeneralInfoMessageChannel__c";

export default class LwcSubscriber extends LightningElement {
  @wire(MessageContext)
  messageContext;

  receivedGeneralInfo;
  subscriptionGeneralInfo = null;
  connectedCallback() {
    if (!this.subscriptionGeneralInfo)
      this.subscriptionGeneralInfo = subscribe(
        this.messageContext,
        GENERAL_INFO_CHANNEL,
        (message) => {
          this.handleGeneralInfo(message);
        }
      );
  }

  handleGeneralInfo(message) {
    this.receivedGeneralInfo = JSON.stringify(message, null, "\t");
  }

  disconnectedCallback() {
    unsubscribe(this.subscriptionGeneralInfo);
    this.subscriptionGeneralInfo = null;
  }
}