import { LightningElement } from 'lwc';

export default class ExploreHelloWorld extends LightningElement {
    firstName = 'Krishna'
    get nameInUpperCase(){
        return this.firstName.toUpperCase();
    }
}