var database;
var canvas;
var allPlayers;
var form, game, player;
var playerCount;
var gameState=0;


function setup(){
  database = firebase.database();
  
  canvas=createCanvas(400,400);
  game= new Game();
  game.getState();
  game.start();
}

function draw(){
  
  
   
  
  
}


