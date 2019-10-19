import { LightningElement, track } from 'lwc';

import getAccounts from '@salesforce/apex/explorePaginationController.getAccounts';
import getAccountsCount from '@salesforce/apex/explorePaginationController.getAccountsCount';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Rating', fieldName: 'Rating' },
    { label: 'Industry', fieldName: 'Industry' }
];

export default class ExplorePagination extends LightningElement {
    @track contacts = [];
    @track columns = columns;

    @track paginationRange = [];

    @track offsetNumber;
    @track totalRecords;

    constructor() {
        super();
        getAccountsCount().then(count => {
            if (count) {
                this.totalRecords = count;

                getAccounts().then(data => {
                    let i = 1;

                    this.contacts = data;

                    const paginationNumbers = Math.ceil(this.totalRecords / 3);

                    while (
                        this.paginationRange.push(i++) < paginationNumbers
                        // eslint-disable-next-line no-empty
                    ) {}
                });
            }
        });
    }

    handlePaginationClick(event) {
        let offsetNumber = event.target.dataset.targetNumber;

        getAccounts({ offsetRange: 3 * (offsetNumber - 1) })
            .then(data => {
                this.contacts = data;
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    }
}
