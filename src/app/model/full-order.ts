import { Item } from "./item";
import { User } from "./user";

export class FullOrder {

    user!:User;
    item!:Item;
    // pickupAddress!:String;
    // dropAddress!:String;
    arrivingStatus:String="false";
    dispatchStatus:String="false";
    pickupStatus:String="false";
    deliveryStatus:String="false";
}
