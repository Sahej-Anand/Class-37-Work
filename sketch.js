var database;
var position;
var player, game, form;
var allPlayers;
var playerCount,gameState = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");

  
  
}