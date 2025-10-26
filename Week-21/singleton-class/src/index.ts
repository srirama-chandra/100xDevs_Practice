import { GameManager } from "./store"

setInterval(()=>{
    const id = Math.random().toString()
    GameManager.getInstance().addGame(id);
    GameManager.getInstance().addMove(id,"e1 e2")
},3000)