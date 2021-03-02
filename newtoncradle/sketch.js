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

var cradle1;
var engine;
var world;
var posX,posY;
function setup(){
    var canvas = createCanvas(720,400);
    // create engine
    engine = Engine.create();
    world = engine.world;
    cradle1 = new Pendulum(200, 15, 5, 26, 250);
    ground = Bodies.rectangle(200,height,width,40,{isStatic: true});
    World.add(world,ground);

    //mouse constraint
    var mcanvas = Mouse.create(canvas.elt);
    mcanvas.pixelRatio = pixelDensity();
    mConstraint = MouseConstraint.create(engine,{mouse:mcanvas});
    World.add(world,mConstraint);

    Engine.run(engine);

}


function draw(){
    background(250);
    fill(143,200,132);
    rect(0,0,720,15);
    cradle1.show();
}

