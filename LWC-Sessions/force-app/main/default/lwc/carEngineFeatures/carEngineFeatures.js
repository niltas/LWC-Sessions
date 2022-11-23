import {api, LightningElement } from 'lwc';

export default class CarEngineFeatures extends LightningElement {

    //creating a property 
    //@api is used to make properties PUBLIC
    //if we use one property in a different component
    //then use @api to make property public
    @api
    horsePower = '990 hp';

    @api
    fuelType= 'Electric';

    @api
    maxSpeed ='120 mhp';

}