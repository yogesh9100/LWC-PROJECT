import { LightningElement,api} from 'lwc';

export default class ContactDetails extends LightningElement {
    @api firstName;
    @api lastName;
}
