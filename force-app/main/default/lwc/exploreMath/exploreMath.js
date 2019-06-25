import { LightningElement, api, track } from 'lwc';

export default class ExploreMath extends LightningElement {

    @track totalTaxableAmount;

    @api calculate(totalAmount, taxPercentage){
        this.totalTaxableAmount = (totalAmount * taxPercentage)/100;
        return this.totalTaxableAmount;
    }
}