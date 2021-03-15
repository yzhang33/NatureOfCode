class Polygon{
    constructor(x,y,clr){
        var optons = {
            friction:0.7
        };
        var sides = Math.round(Matter.Common.random(2,8));
        this.body = Bodies.polygon(x,y,sides,Matter.Common.random(20,30),optons);
        this.color=clr
        this.shelf = Bodies.rectangle(x-10,y+5,50,3,{isStatic: true});
        this.fall = false;
        //console.log(world);
        World.add(world, this.body);
        World.add(world, this.shelf);

        this.show = function(){
            var vertices = this.body.vertices;
            var pos1 = this.shelf.position;
            fill(clr[0],clr[1],clr[2]);
            Body.setVelocity(this.body, {x:0, y: 1});
            beginShape();
            for(var v of vertices){
                vertex(v.x,v.y);
            }
            endShape(CLOSE);
            //set body velocity
            // Body.setVelocity(this.body, {x:0, y: 1});
            // fill(clr[0],clr[1],clr[2]);
            // rect(pos.x, pos.y, this.w, this.h);
            fill(0);
            rect(pos1.x-20, pos1.y, 50, 3);
        }
        this.calDist=function(){
            var pos1 = this.shelf.position;
            var vertices = this.body.vertices[0];
            if(dist(pos1.x,pos1.y,vertices.x,vertices.y) > 100){
                this.fall = true;
                return true;
            }
            return false;
        }
    }
}