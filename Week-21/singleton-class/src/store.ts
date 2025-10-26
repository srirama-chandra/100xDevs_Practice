interface Game{
    id : string,
    whitePlayerName : string,
    blackPlayerName : string,
    moves : string[]
}

export class GameManager{

    games: Game[];
    private static instance:GameManager;

    private constructor()
    {
        this.games = [];
    }

    static getInstance()
    {
        if(!GameManager.instance){
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }
    
    addMove(gameId:string, move:string)
    {
        console.log(`Adding Move ${move} to Game ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move)
    }

    addGame(gameId:string)
    {
        const game = {
            id : gameId,
            whitePlayerName : 'Alice',
            blackPlayerName : 'Denzel',
            moves: []
        }
        this.games.push(game);
        console.log(`Added The Game ${gameId}`);
    }
    
}