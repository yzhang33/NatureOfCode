var col, row;
var w =150;
var grid=[];
var path;
var pathVectors = [];
var hamiltonianPath;
var count = 1;

function setup(){
    createCanvas(600,600);
    background(51);
    row = floor(width/w);
    col = floor(height/w);

    for(var i=0;i<row;i++){
        for(var j=0;j<col;j++){
            grid.push(new Cell(i,j));
        }
    }
    hamiltonianPath = new HamiltonPath();
    drawPath();
}


function draw(){
    for(var cell of grid){
        cell.show();
    }
    if(frameCount % 38 == 0){
        if(count < pathVectors.length){
            console.log(pathVectors.length);
            if(count == 1){
                noStroke();
                fill(255,255,0);
                circle(pathVectors[0].x,pathVectors[0].y,30);
                stroke(200,0,32);
                strokeWeight(5);
                line(pathVectors[0].x,pathVectors[0].y,pathVectors[count].x,pathVectors[count].y);
            }else{
                if(count == pathVectors.length-1){
                    noStroke();
                    fill(255,0,255);
                    circle(pathVectors[count].x,pathVectors[count].y,30);
                }
                stroke(200,0,32);
                line(pathVectors[count].x,pathVectors[count].y,pathVectors[count-1].x,pathVectors[count-1].y);
            }
            count++;
        }
    }
    //noLoop();
}
function drawPath(){
    hamiltonianPath.generateHamiltonianPath(4,1);
    path = hamiltonianPath.path;
    for(var i=0;i<path.length;i++){
        var x = path[i][0]*w+75;
        var y = path[i][1]*w+75;
        pathVectors.push(createVector(x,y));
        // strokeWeight(10);
        // stroke(0);
        // if(pre[0] && pre[1]){
        //     line(pre[0],pre[1],x,y);
        // }
        //line(pre[0],pre[1],x,y);
        //pre = [x,y];
        //point(x,y);
    }
    //draw start(purple) and finish(yellow) point
    // var i = path[0][0]*w+75;
    // var j = path[0][1]*w+75;
    // stroke(255,0,255);
    // point(i,j);
    // i=path[path.length-1][0]*w+75;
    // j=path[path.length-1][1]*w+75;
    // stroke(255,255,0);
    // point(i,j);
}

function Cell(i,j){
    this.i = i;
    this.j = j;

    this.show = function(){
        noFill();
        stroke(255);
        rect(this.i*w,this.j*w,w,w);
    }
}