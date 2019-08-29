import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation'

export default class ExploreFileNavigation extends NavigationMixin(LightningElement) {
    
    handleClick(){
        const pageRef = {
            type: "standard__namedPage",
            attributes: {
                pageName: "filePreview"
            },
            state: {
                recordIds: '0692v000009gn74AAA,0692v000009gn79AAA',
                selectedRecordId: '0692v000009gn74AAA'
            }
        }


        this[NavigationMixin.Navigate](pageRef);
    }
    

}