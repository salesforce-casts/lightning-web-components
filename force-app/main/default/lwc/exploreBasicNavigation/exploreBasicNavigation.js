import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation'

export default class ExploreBasicNavigation extends NavigationMixin(LightningElement) {
    handleClick(){
        const pageRef = {
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Case",
                actionName: "home"
            }
        };

        this[NavigationMixin.Navigate](pageRef);
    }
}