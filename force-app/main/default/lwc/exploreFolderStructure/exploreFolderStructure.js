import { LightningElement } from 'lwc';

export default class ExploreFolderStructure extends LightningElement {
    greeting = 'world';
    handleChange(event) {
        this.greeting = event.target.value;
        // eslint-disable-next-line no-console
        console.log(this.greeting);
    }
}

export function foobar(){

    
}