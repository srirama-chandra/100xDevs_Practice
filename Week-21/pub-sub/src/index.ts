import { PubSubManager } from "./PubSubManager";

PubSubManager.getInstance().addUserSubscription("1","APPL");
PubSubManager.getInstance().addUserSubscription("2","APPL");

PubSubManager.getInstance().addUserSubscription("3","META");
PubSubManager.getInstance().addUserSubscription("4","META");

setTimeout(()=>{
    PubSubManager.getInstance().removeUserSubscription("1","APPL");
    PubSubManager.getInstance().removeUserSubscription("2","APPL");
},10000)