import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToRecordRelationshipPage extends NavigationMixin(LightningElement) {

    navigateToRelatedList(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes:{
                recordId:'001Iw000001oAFPIA2',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
        
    }
}
