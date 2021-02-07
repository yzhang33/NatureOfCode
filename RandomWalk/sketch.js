var col, row;
var w =150;
var grid=[];
path = new Array(4*4);
pre = [];

function setup(){
    createCanvas(600,600);
    background(51);
    row = floor(width/w);
    col = floor(height/w);
    //draw grids
    for(var i=0;i<row;i++){
        for(var j=0;j<col;j++){
            grid.push(new Cell(i,j));
        }
    }

}


function draw(){
    for(var cell of grid){
        cell.show();
    }
    //generate hamiltonian path and draw it
    drawPath();
    noLoop();
}

function drawPath(){
    generatePath(4);
    //console.log(path);
    for(var i=0;i<path.length;i++){
        var x = path[i][0]*w+75;
        var y = path[i][1]*w+75;
        strokeWeight(10);
        stroke(0);
        line(pre[0],pre[1],x,y);
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


function generatePath(n){
    var i,j;
    //path start from 0,0 extend to the end.traverse from top to 
    //bottom for even number of grids and bottom to top for odd grids
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i%2 == 0){
                for(j=0;j<n;j++){
                    path[i*n+j]=[i,j];
                }
            }else{
                for(j=0;j<n;j++){
                    path[i*n+j]=[i,n-j-1];
                } 
            }

        }
    }
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