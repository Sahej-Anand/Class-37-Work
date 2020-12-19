class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name =null;
    }
    getCount(){
        var pcref = database.ref('playerCount');
        pcref.on("value",function(data){
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        });
    }
    update(){
        var pindex = "player" + this.index; //player1 player2 player3 player4
        database.ref(pindex).set({
            name : this.name,
            distance : this.distance,
        }) ;  

    }
    static getPlayerinfo(){
        var pi = database.ref('players');
        pi.on("value", (data) =>{
            allPlayers = data.val();
        })
    }
}