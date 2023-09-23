import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    pColor = "choclate-color";

    addcssHandler(event){
        let element = this.template.querySelector("p");
        element.classList.add("green-border");
    }
    removecssHandler(event){
        let element = this.template.querySelector("p");
        element.classList.remove("green-border");
    }
    togglecssHandler(event){
        let element = this.template.querySelector("p");
        element.classList.toggle("green-border");
    }
}