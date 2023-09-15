import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavToRecordPages extends NavigationMixin(LightningElement) {

    navigateToContact(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'003Iw000002EVfLIAW',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    navigateToContactEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '003Iw000002EVfLIAW',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        })
    }

    navigateToCustomRecordPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: 'a01Iw000000ZsGeIAK',
                objectApiName: 'System_Event__c',
                actionName: 'view'
            }
        })
    }

}
