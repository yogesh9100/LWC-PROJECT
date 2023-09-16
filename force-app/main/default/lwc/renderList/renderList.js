import { LightningElement } from 'lwc';

export default class RenderList extends LightningElement {
    superstars = ["spiderman","superman","batman","heroman"];
    contactList = [
        {
            id: 1,
            firstname: "sai",
            lastname: "teja"

        },
        {
            id: 2,
            firstname: "sai",
            lastname: "rani"

        },
        {
            id: 3,
            firstname: "sai",
            lastname: "vamshi"

        },
        {
            id: 4,
            firstname: "sai",
            lastname: "raj"

        }
    ];
}