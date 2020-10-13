import { LightningElement } from "lwc";

export default class ExploreDynamicHelloWorld extends LightningElement {
  greeting;

  handleClick() {
    this.greeting = "Hello World!!";
  }
}
