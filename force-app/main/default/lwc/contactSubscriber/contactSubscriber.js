import { LightningElement,wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendContact__c';
export default class ContactSubscriber extends LightningElement {
    subscription = null;
    selectedContact;
    @wire(MessageContext)
    messageContext;
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                recordSelected,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }
    handleMessage(message) {
        this.selectedContact = message.lmsData;
        console.log("Message Data",this.selectedContact);
    }
    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }
    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    
}
