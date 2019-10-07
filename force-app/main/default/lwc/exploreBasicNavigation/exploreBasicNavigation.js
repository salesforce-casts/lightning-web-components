import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation'

export default class ExploreBasicNavigation extends NavigationMixin(LightningElement) {
    handleClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'filePreview'
            },
            state : {
                recordIds: '0692v000009gn79AAA,0692v000009gn74AAA',
                selectedRecordId:'0692v000009gn79AAA'
            }
          })
    }
}