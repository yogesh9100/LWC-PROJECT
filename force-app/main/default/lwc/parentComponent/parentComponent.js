import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    greeting = "welcome to lwc bootcamp";
    userdetails = {
        firstname: "sai",
        lastname: "teja",
        channel: "tech journey with ankit"
    };
}