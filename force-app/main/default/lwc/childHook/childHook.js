import { LightningElement } from 'lwc';

export default class ChildHook extends LightningElement {
    constructor() {
        super();
        console.log("constructor from child");
    }
    connectedCallback() {
        
        console.log("connectedCallback from child");
        throw new Error("error while loading component");
    }
    renderedCallback(){
        
        console.log("renderedCallback from child");
    }
    errorCallback(error,stack) {
        
        console.log("errorCallback from child");
    }
    disconnectedCallback(){
        
        console.log("disconnectedCallback from child");
    }
}