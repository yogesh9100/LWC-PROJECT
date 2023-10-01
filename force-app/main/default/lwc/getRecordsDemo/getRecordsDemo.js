import { LightningElement, wire } from 'lwc';
import { getRecords } from "lightning/uiRecordApi";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import CONTACT_NAME_FIELD from "@salesforce/schema/Contact.Name";
export default class GetRecordsDemo extends LightningElement {
    outputs;
    error;
    @wire(getRecords, {
        records: [
            {
                recordIds: ["001Iw000001oAFPIA2","001Iw000001o9gBIAQ"],
                fields: [ACCOUNT_NAME_FIELD]
            },
            {
                recordId: ["003Iw000002EVfLIAW"],
                fields: [CONTACT_NAME_FIELD]
            }
        ]  
    })
    outputFunction({data, error}){
        if(data){
            console.log("data", data);
            this.outputs = data;
            this.error = null;
        } else if(error){
            console.log("error", error);
            this.error = error;
            this.outputs - null;
        }
    }
}
    
        

    
