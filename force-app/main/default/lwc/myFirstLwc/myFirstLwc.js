import { LightningElement, api, track } from 'lwc';

export default class MyFirstLwc extends LightningElement 
{
    fullname = "yogesh"
    title = "salesforce"
    changeHandler(event){
        this.title = event.target.value
    }
}