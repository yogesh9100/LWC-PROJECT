import { LightningElement } from 'lwc';

export default class ParentHook extends LightningElement {
    displayChild=false;
    constructor() {
        super();
        console.log("constructor from parent");
    }
    connectedCallback() {
        
        console.log("connectedCallback from parent");
    }
    renderedCallback(){
        
        console.log("renderedCallback from parent");
    }
    errorCallback(error,stack) {
        
        console.log("errorCallback from parent");
        console.log("error", error);
        console.log("stack", stack);
    }
    disconnectedCallback(){
        
        console.log("disconnectedCallback from parent");
    }
    changeHandler(event){
        this.displayChild = event.target.checked;
    }
}
