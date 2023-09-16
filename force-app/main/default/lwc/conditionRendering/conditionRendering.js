import { LightningElement } from 'lwc';

export default class ConditionRendering extends LightningElement {
    displayMessage = false;

    changeHandler(event){
        //event .target.value

        //toogle handling in js
        this.displayMessage = !this.displayMessage;
    }
}