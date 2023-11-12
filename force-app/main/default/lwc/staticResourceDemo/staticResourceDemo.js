import { LightningElement, wire } from 'lwc';
import Logo from "@salesforce/resourceUrl/MyLogo";
import  ASSETLOGO  from '@salesforce/contentAssetUrl/My_Assert_Logo';
import  GREETING from '@salesforce/label/c.greeting';
import SALESFORCE_PLATFORM from '@salesforce/label/c.salesforcePlatform';
import USER_ID from "@salesforce/user/Id";
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from "@salesforce/schema/User.Name";
import DISPLAY_TEXT from "@salesforce/customPermission/displayText";
export default class StaticResourceDemo extends LightningElement {
    myLogoImg = Logo;
    myAssetLogo= ASSETLOGO;

    label={
        platorm:SALESFORCE_PLATFORM,
        greeting:GREETING
    };
    name = "";

    @wire(getRecord,{
        recordId : USER_ID,
        fields : [NAME_FIELD]
    }) 
    wired_user_output({ data, Error }){
        if(data){
            console.log("logged in user details", data);
            this.name = getFieldValue(data, NAME_FIELD);
        }else if (Error){
            console.log("logged in user details", Error);
        }
    }

    get checkPermission(){
        return DISPLAY_TEXT;
    }
}