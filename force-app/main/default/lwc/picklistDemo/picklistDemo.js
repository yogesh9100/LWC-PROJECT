import { LightningElement, wire } from 'lwc'; 
import ACCOUNT_OBJECT from "@salesforce/schema/Account"; 
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry"; 
import { getObjectInfo, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi'; 
 
export default class PicklistDemo extends LightningElement { 
    value; 
    @wire (getObjectInfo,{ 
        objectApiName : ACCOUNT_OBJECT 
    }) accountinfo; 
 
    @wire (getPicklistValues,{ 
        recordTypeId : "$accountinfo.data.defaultRecordTypeId", 
        fieldApiName : ACCOUNT_INDUSTRY 
    }) industrypicklist;
    
    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_OBJECT,
        recordTypeId: "$accountinfo.data.defaultRecordTypeId"
    }) accountInfoPicklist;
    /*accountInfoFunction({data, error}){
        if(data){
            console.log("Account Picklist", data);
        } else if(error){
            console.log("Account Error", error);
        }
    }*/
 
    handleChange(event){ 
        this.value = event.target.value; 
    } 
}
