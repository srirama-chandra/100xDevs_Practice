import { createClient, RedisClientType } from "redis";

export class PubSubManager{

    private static instance: PubSubManager;
    private subscriptions : Map<string,string[]>;
    private redisClient : RedisClientType;

    private constructor()
    {
        this.redisClient = createClient();
        this.redisClient.connect();
        this.subscriptions = new Map<string,string[]>();
    }

    static getInstance(): PubSubManager{

        if(!PubSubManager.instance)
        {
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance;
    }

    addUserSubscription(userId:string,stockTicker:string){

        if(!this.subscriptions.has(stockTicker)){
            this.subscriptions.set(stockTicker,[]);
        }
        this.subscriptions.get(stockTicker)?.push(userId);

        if(this.subscriptions.get(stockTicker)?.length==1){
            this.redisClient.subscribe(stockTicker,(message)=>{
                this.handleMessage(stockTicker,message);
            })
        }
            
    }

    removeUserSubscription(userId:string,stockTicker:string){

        this.subscriptions.set(stockTicker, this.subscriptions.get(stockTicker)?.filter(user => user!==userId) || [])
        console.log(`${userId} Unsubscribed To ${stockTicker} At ${new Date()}`);

        if(this.subscriptions.get(stockTicker)?.length==0){
            this.redisClient.unsubscribe(stockTicker)
            console.log(`Unsubscribed To ${stockTicker} Permanently`);
        }

    }

    private handleMessage(stockTicker:string,message:string)
    {
        console.log(`${stockTicker} - ${message}`)
    }

}