import { LightningElement, track, wire } from 'lwc';

import getContacts from '@salesforce/apex/exploreAdvancedDataTable.getContacts';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'LeadSource', fieldName: 'LeadSource' },
    { label: 'Phone', fieldName: 'Phone' },
    { label: 'Account Name', fieldName: 'Account.Name' },
    { label: 'Account Industry', fieldName: 'Account.Industry' }
];

export default class ExploreAdvancedDataTable extends LightningElement {
    @track allContacts = [];
    @track columns = columns;

    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            let contactsArray = [];

            for (let row of data) {
                const flattenedRow = {};

                let rowKeys = Object.keys(row);

                rowKeys.forEach(rowKey => {
                    const singleNodeValue = row[rowKey];

                    if (singleNodeValue.constructor === Object) {
                        //flatten it
                        this._flatten(singleNodeValue, flattenedRow, rowKey);
                    } else {
                        flattenedRow[rowKey] = singleNodeValue;
                    }
                });

                contactsArray.push(flattenedRow);
            }
            this.allContacts = contactsArray;
        } else if (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    }

    _flatten = (nodeValue, flattenedRow, nodeName) => {
        let rowKeys = Object.keys(nodeValue);

        rowKeys.forEach(key => {
            let finalKey = nodeName + '.' + key;
            flattenedRow[finalKey] = nodeValue[key];
        });
    };
}
