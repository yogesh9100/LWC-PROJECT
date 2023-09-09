import { LightningElement, track } from 'lwc';

export default class WelcomeTech extends LightningElement {
    greeting = "hello";
    @track welcome = "tech journey with ankit";

    clickHandler(event){
        this.greeting = "namasthe";
        this.welcome = "today is day 19 of lwc bootcamp";
    }

}