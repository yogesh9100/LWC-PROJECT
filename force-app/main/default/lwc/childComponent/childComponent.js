import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api display;//small case
    @api displayGreeting;//camel case
   // @api user;
   displayuser;
    @api isUserAvailable;//boolean

    set user(value) {
        let cloneuser = {...value};
        this.displayuser = cloneuser.channel.toUpperCase();
    } 

    @api 
    get user() {
        return this.displayuser;
    }


}
