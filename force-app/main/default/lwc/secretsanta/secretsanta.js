import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CenteredButton extends NavigationMixin(LightningElement) {
    backgroundStyle = "background-image: url('/resource/santha');"; // Replace '/resource/backgroundImage' with the actual Salesforce resource path to your image

    redirectToHome() {
        // Navigate to the home page
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://resourceful-fox-h8e1we-dev-ed.lightning.force.com/lightning/page/home' // Replace '/lightning/r/homePage' with the actual Salesforce Lightning page reference or URL
            }
        });
    }
}