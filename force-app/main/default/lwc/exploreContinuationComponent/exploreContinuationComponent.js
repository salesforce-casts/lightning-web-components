import { LightningElement, track } from "lwc";

import startRequest from "@salesforce/apexContinuation/ExlporeContinuationController.startRequest";

export default class ExploreContinuationComponent extends LightningElement {
  @track continuationResult = {};

  handleClick() {
    startRequest()
      .then(result => {
        // eslint-disable-next-line no-console
        console.log(result);

        this.continuationResult = result;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }
}
