import { LightningElement } from 'lwc';

export default class ExploreDataBinding extends LightningElement {

    message = 'HEY!! Salesforce Casts'

    handleUpdate(event){
        this.message = event.target.value
        // eslint-disable-next-line no-console
        console.log(this.message)
    }
}