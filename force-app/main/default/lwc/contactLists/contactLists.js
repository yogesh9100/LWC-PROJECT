import { LightningElement , wire} from 'lwc';
import getContactsList from '@salesforce/apex/contactControllers.getContactsList';
export default class ContactLists extends LightningElement {
    @wire(getContactsList) contacts;
    selectedContact;
    selectionHandler(event) {
        let selectedContactId = event.detail;
        this.selectedContact = this.contacts.data.find(
            (curritem) => curritem.Id === selectedContactId
        );
    }
}