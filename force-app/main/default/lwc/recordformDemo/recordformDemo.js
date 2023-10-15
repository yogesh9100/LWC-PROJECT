import { LightningElement,api } from 'lwc';
import NAME_FIELD from "@salesforce/schema/Account.Name";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import REVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";
import RATING_FIELD from "@salesforce/schema/Account.Rating";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class RecordformDemo extends NavigationMixin(LightningElement) {
    @api recordId;
  @api objectApiName;
  fieldsList = [ NAME_FIELD, INDUSTRY_FIELD, REVENUE_FIELD, RATING_FIELD];
  showToast() {
    const event = new ShowToastEvent({
      title: "Success",
      message: "Record Update Successfully!",
      variant: "success"
    });
    this.dispatchEvent(event);
  }
  navigatetoRecord(event) {
    /*console.log("Event Detail", event.detail);
    console.log("Event Detail", JSON.stringify(event.detail));*/
    let pageRef = {
      type: "standard__recordPage",
      attributes: {
        recordId: event.detail.id,
        objectApiName: this.objectApiName,
        actionName: "view"
      }
    };
    this[NavigationMixin.Navigate](pageRef);
  }
}