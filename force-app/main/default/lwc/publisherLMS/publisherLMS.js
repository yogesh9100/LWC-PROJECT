import { LightningElement,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendMessage__c';


export default class Publish extends LightningElement {

    @wire(MessageContext)
    messageContext;

    publishmessage(){
        const payload = { lmsData: 'Welcome Sapphire India' };

        publish(this.messageContext, recordSelected, payload);
    

    }
}
