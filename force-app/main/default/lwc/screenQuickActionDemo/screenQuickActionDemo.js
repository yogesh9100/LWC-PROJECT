import { LightningElement, api } from 'lwc';
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";
import {showToastEvent} from "lightning/platformShowToastEvent";
import { CloseActionScreenEvent } from "lightning/actions";
export default class ScreenQuickActionDemo extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = {
        accountName: ACCOUNT_NAME,
        accountIndustry: ACCOUNT_INDUSTRY
    };
    closemodal(){
        this.dispatchEvent(new CloseActionScreenEvent()); 
    }
    successHandler(){
        this.dispatchEvent(new CloseActionScreenEvent());
        const event = new showToastEvent({
            title: "success",
            message: "record saved successfully",
            variant: "success"
        });
        this.dispatchEvent(event);
        

    }
}