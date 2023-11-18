import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class HeadlessQuickActionDemo extends NavigationMixin(
    LightningElement
) {
   @api invoke(){
    // Navigate to the Account home page
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Contact',
            actionName: 'home',
        },
    });

   } 
}