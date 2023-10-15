import { LightningElement,wire } from 'lwc';

// Import message service features required for subscribing and the message channel
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,

} from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendMessage__c';

export default class Subscribe extends LightningElement {
    
    subscription = null;
    @wire(MessageContext)
    messageContext;
    pubMessaage="";

     // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
     connectedCallback() {
        this.subscribeToMessageChannel();
    }

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
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

        // Handler for message received by component
        handleMessage(message) {
            this.pubMessaage = message.lmsData;
        }

        disconnectedCallback() {
            this.unsubscribeToMessageChannel();
        }

        unsubscribeToMessageChannel() {
            unsubscribe(this.subscription);
            this.subscription = null;
        }


}