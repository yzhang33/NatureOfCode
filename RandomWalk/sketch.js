var col, row;
var w =150;
var grid=[];
var path;
var pre = [];
var hamiltonianPath;

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

}


function draw(){
    for(var cell of grid){
        cell.show();
    }
    drawPath();
    noLoop();
}
function drawPath(){
    hamiltonianPath.generateHamiltonianPath(4,1);
    path = hamiltonianPath.path;
    for(var i=0;i<path.length;i++){
                var x = path[i][0]*w+75;
                var y = path[i][1]*w+75;
                strokeWeight(10);
                stroke(0);
                if(pre[0] && pre[1]){
                    line(pre[0],pre[1],x,y);
                }
                //line(pre[0],pre[1],x,y);
                pre = [x,y];
                //point(x,y);
    }
    //draw start(purple) and finish(yellow) point
    var i = path[0][0]*w+75;
    var j = path[0][1]*w+75;
    stroke(255,0,255);
    point(i,j);
    i=path[path.length-1][0]*w+75;
    j=path[path.length-1][1]*w+75;
    stroke(255,255,0);
    point(i,j);
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