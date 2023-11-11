import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountRecordForm extends LightningElement {
    @track accountName = '';
    @track accountEmail = '';
    @track accountPassword = '';
    christmasImage = 'christmas_image.jpg'; // Replace with your image URL

    handleNameChange(event) {
        this.accountName = event.target.value;
    }

    handleEmailChange(event) {
        this.accountEmail = event.target.value;
    }

    handlePasswordChange(event) {
        this.accountPassword = event.target.value;
    }

    saveRecord() {
        // Implement the logic to save the account record to Salesforce here
        // You can use Salesforce Apex or Lightning Data Service for this purpose
        // After saving, show a success toast message

        // Replace this with your actual save logic
        // For example, simulating a successful save:
        this.showSuccessToast('Account Record Saved', 'The account record has been saved successfully.');
    }

    showSuccessToast(title, message) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: 'success',
        });
        this.dispatchEvent(event);
    }
}
