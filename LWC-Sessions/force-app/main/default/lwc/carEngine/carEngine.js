import { api, LightningElement } from 'lwc';

export default class CarEngine extends LightningElement {

engineModel = 'V8';
@api modelYear;

}