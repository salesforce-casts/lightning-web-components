import { LightningElement, api } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class ExploreLightningRecordForm extends LightningElement {
    @api recordId
    fields = [NAME_FIELD, INDUSTRY_FIELD, RATING_FIELD];
}