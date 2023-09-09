import { LightningElement, track } from "lwc";
export default class TemplateFalseDemo extends LightningElement {
  //if:false demo logic
  @track hideText = false;
  hideHandler() {
    this.hideText = true;
  }
}