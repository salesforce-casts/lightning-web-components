import { LightningElement, api } from 'lwc';

export default class ExploreDecorators extends LightningElement {
    @api greeting = 'Hello World';

    handleChange(event){
        this.greeting = event.target.value;
        // eslint-disable-next-line no-console
        console.log(this.greeting);
    }
}