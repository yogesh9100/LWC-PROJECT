import { LightningElement, api } from 'lwc';

export default class DynamicRecordandobject extends LightningElement {
    @api recordId;
    @api objectApiName;
}