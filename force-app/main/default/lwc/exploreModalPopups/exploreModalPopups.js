import { LightningElement } from 'lwc';

export default class ExploreModalPopups extends LightningElement {
    handlePopup() {
        this.template.querySelector('section').classList.remove('slds-hide');
        this.template
            .querySelector('div.slds-backdrop')
            .classList.remove('slds-hide');
    }

    handleCancel() {
        this.template.querySelector('section').classList.add('slds-hide');
        this.template
            .querySelector('div.slds-backdrop')
            .classList.add('slds-hide');
    }
}
