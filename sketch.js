var startbg,startbgimg;
var playbutton,playbuttonimg;
var playbg,playbgimg;
var gamestate="start";
var card1,card2,card3,card4,card5,card6,card6;
var cardimg;
var level=3;
var levelimg;
var score=0;
var temp1=0;
var temp2=0;
var temp3=0;
var temp4=0;
var temp5=0;
var temp6=0;
var gameover,gameoverimg;
var win,winimg;
var about,aboutimg;
var help,helpimg;

function preload(){
   startbgimg=loadImage("start.jpg");
   playbgimg=loadImage("bg.png");
   playbuttonimg=loadImage("playbutton.png");
   cardimg=loadImage("card.png");
   levelimg=loadImage("waterlevel.png");
   gameoverimg=loadImage("gameover.png");
   winimg=loadImage("youwin.png");
   aboutimg=loadImage("about.png");
   helpimg=loadImage("help.png");

}

function setup() {
  createCanvas(1000,600);

  startbg=createSprite(500,300,1000,600);
  startbg.addImage("start",startbgimg);
  startbg.scale=1.2;

  playbg=createSprite(500,300,1000,600);
  playbg.addImage("play",playbgimg);
  playbg.scale=1.2;

  playbutton=createSprite(100,300,100,50);
  playbutton.scale=0.4;
  playbutton.addImage("button",playbuttonimg);

 

  card1=createSprite(500,200);
  card1.addImage("1",cardimg);
  card1.scale=0.5;
  card1.setCollider("rectangle",0,0,250,400);

  card2=createSprite(700,200);
  card2.addImage("2",cardimg);
  card2.scale=0.5;
  card2.setCollider("rectangle",0,0,250,400);


  card3=createSprite(900,200);
  card3.addImage("3",cardimg);
  card3.scale=0.5;
  card3.setCollider("rectangle",0,0,250,400);




  card4=createSprite(500,450);
  card4.addImage("4",cardimg);
  card4.scale=0.5;
  card4.setCollider("rectangle",0,0,250,400);


  card5=createSprite(700,450);
  card5.addImage("5",cardimg);
  card5.scale=0.5;
  card5.setCollider("rectangle",0,0,250,400);


  card6=createSprite(900,450);
  card6.addImage("6",cardimg);
  card6.scale=0.5;
  card6.setCollider("rectangle",0,0,250,400);

  gameover=createSprite(500,300,1000,600);
  gameover.addImage("gameover",gameoverimg);

  win=createSprite(500,300,1000,600);
  win.addImage("win",winimg);

  about=createSprite(100,370,1000,600);
  about.addImage("about",aboutimg);
  about.scale=0.3;

  help=createSprite(100,430,1000,600);
  help.scale=0.3;
  help.addImage("help",helpimg);

 /* card1.debug=true;
  card2.debug=true;
  card3.debug=true;
  card4.debug=true;
  card5.debug=true;
  card6.debug=true;
*/
}


function draw() {
  background(0); 
  drawSprites();
  
  if(gamestate === "start"){
    startbg.visible=true;
    playbutton.visible=true;
    help.visible=true;
    about.visible=true;
    playbg.visible=false;

    card1.visible=false;
    card2.visible=false;
    card3.visible=false;
    card4.visible=false;
    card5.visible=false;
    card6.visible=false;
    gameover.visible=false;
    win.visible=false;

    
    if(mousePressedOver(playbutton)){
      gamestate="play";
    }
  }
  if(gamestate === "play"){
    startbg.visible=false;
    playbutton.visible=false;
    gameover.visible=false;
    playbg.visible=true;
    win.visible=false;
    help.visible=false;
    about.visible=false;

    card1.visible=true;
    card2.visible=true;
    card3.visible=true;
    card4.visible=true;
    card5.visible=true;
    card6.visible=true;

    

    fill(0);
    textSize(30);  
    text("LEVEL : 1",100,50)

    if(mousePressedOver(card1)){
      card1.destroy();
      decreaselevel();
      temp1=1;
    }
    
    if(mousePressedOver(card2)){
      temp2=1;
      score=score+1;
      card2.destroy();
      decreaselevel();
    }
    if(mousePressedOver(card3)){
      temp3=1;
      card3.destroy();
      decreaselevel();
    } 
    if(mousePressedOver(card4)){
      temp4=1;
      score=score+1;
      card4.destroy();
      decreaselevel();
   }
    if(mousePressedOver(card5)){
      temp5=1;
      card5.destroy();
      decreaselevel();
    }
    if(mousePressedOver(card6)){
      temp6=1;
      card6.destroy();
      decreaselevel();
    }

    if(temp1===1){
      fill("red");
      textSize(20);  
      text("Take Bath",460,200);
    }
    else{
      fill(0);
      textSize(20);  
      text("Take Bath",460,200);
    }

    if(temp2===1){
      fill("green");
      textSize(20);  
      text("Drinking ",670,200);
      text(" Water",675,230);

    }
    else{
      fill(0);
      textSize(20);  
      text("Drinking ",670,200);
      text(" Water",675,230);
    }

    if(temp3===1){
      fill("red");
      textSize(20);  
      text("Washing ",870,200);
      text("Dishes ",880,230);
    }
    else{
      fill(0);
      textSize(20);  
      text("Washing ",870,200);
      text("Dishes ",880,230);
    }

    if(temp4===1){
        fill("green");
        textSize(20);  
        text("Watering ",460,450);
        text("Plants ",470,480);
        }
    else{
      fill(0);
      textSize(20);  
      text("Watering ",460,450);
      text("Plants ",470,480);

    }

    if(temp5===1){
      fill("red");
      textSize(20);  
      text("Washing ",670,450);
      text("Cars ",680,480);
    }
    else{
      fill(0);
      textSize(20);  
      text("Washing ",670,450);
      text("Cars ",680,480);
    }

    if(temp6===1){
      fill("red");
      textSize(20);  
      text("Cleaning ",870,450);

    }
    else{
      fill(0);
      textSize(20);  
      text("Cleaning ",870,450);

    }

    if(score === 2){
      gamestate="win";                                                                                                                                           
   }
    if(level === 0){
      if(score === 2){
        gamestate="win";                                                                                                                                           
      }
      else{
        gamestate="end";
      }
    }


  if(level === 3){
    image(levelimg,150,400,150,50);
    image(levelimg,150,350,150,50);
    image(levelimg,150,300,150,50);

  }
  if(level === 2){
    image(levelimg,150,400,150,50);
    image(levelimg,150,350,150,50);

  }
  if(level === 1){
    image(levelimg,150,400,150,50);

  }
 }
 if(gamestate === "win"){
  
  gameover.visible=false;
  win.visible=true;
  help.visible=false;
  about.visible=false;


 }
 if(gamestate === "end"){
  gameover.visible=true;
  win.visible=false;
  help.visible=false;
 about.visible=false;

 }
}
function decreaselevel(){
    level=level-1;
  }
