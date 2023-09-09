import { LightningElement, track } from 'lwc';

export default class NestedObjectPrivateProperties extends LightningElement {
    @track myDetails = {fname: "ankit", lname: "jain"};

    clickHandler(event){
        this.myDetails.fname = "amit";
    }

    addTaskHandler(event){
        this.myTask.push("self study");
    }

    refreshHandler(){
        this.myDetails = { fname: "amit", lname: "jain"};
        this.myTask = [...this.myTask, "self study"];
    }
}