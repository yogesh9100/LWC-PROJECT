import { LightningElement } from 'lwc';

export default class ParentComposition extends LightningElement {
    firechildHandler(){
        console.log("event handled in parent component - at child component");
    }
    firechildDivHandler(){
        console.log("event handled in parent component - at div component");
    }
}