class Game{ 
    constructor(){

    }
    getState (){
        var gr = database.ref('gameState');
        gr.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    start(){
        if (gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(35);
        text("Game Start",500,400);
        Player.getPlayerinfo();

        if(allPlayers !== undefined){
            var d = 150;
            d = d+ 20;
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 200,d);
        }

    }
}