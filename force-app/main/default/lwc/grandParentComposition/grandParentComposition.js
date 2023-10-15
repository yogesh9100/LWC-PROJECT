import { LightningElement } from 'lwc';

export default class GrandParentComposition extends LightningElement {
    firechildHandler(){
        console.log("event handled in grand parent component - at child component");
    }
}