//matter.js world
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Constraint = Matter.Constraint,
    Bodies = Matter.Bodies,
    Body = Matter.Body;

var blocks=[];
var engine;
var world;
var ball;
var posX,posY;
let music;
var score=0;
function preload(){
    music = loadSound("./shot/boss.mp3");
}

function setup(){
    var canvas = createCanvas(720,600);
    // create engine
    engine = Engine.create();
    world = engine.world;
    ground = Bodies.rectangle(400,height,720,20,{isStatic: true});
    roof = Bodies.rectangle(300,0,720,4,{isStatic: true});
    World.add(world,[ground,roof]);
 
    //mouse constraint
    var mcanvas = Mouse.create(canvas.elt);
    mcanvas.pixelRatio = pixelDensity();
    mConstraint = MouseConstraint.create(engine,{mouse:mcanvas,stiffness: 0.2,});
    World.add(world,mConstraint);
    ball = new Ball();
    //add blocks
    addBlocks();
    Engine.run(engine);
    music.play();
}

function draw(){
    background(200);
    fill(255, 0, 0);
    textSize(20);
    text("Fell:" + score, 20, 20);
    for(b of blocks){
        b.show();
        if(!b.fall&&b.calDist()){
            score++;
        }
    }
    ball.show();
    if(score > 15){
        fill(255, 0, 0);
        textSize(32);
        fill(255, 0, 120);
        textSize(32);
        text("You win!\n",120, 200);
        //text("Game Ended!\n");
        music.pause();
        noLoop();
    }
}
function keyPressed(){
    if(ball.fired==true){
        ball.loadBall();
    }
}
function mouseReleased(){
    setTimeout(() => {
        ball.fire();
        ball.fired=true;
      }, 10);
}
function addBlocks(){
    for(var x= 450;x<680;x+=50){
        if(x < 550 || x > 600){
            for(var y = 100;y<500;y+=80){
                blocks.push(new Polygon(x,y,[random(x/4,y),random(200,100),random(200,100)]));
            }
        }
        
    } 
}