class Pendulum{
    constructor(x,y,num,size,length){
        this.cradle =Composites.newtonsCradle(x, y, num, size, length);
        this.color = [random(255),random(255),random(255)];
        World.add(world,this.cradle);
        
        this.show=function(){
            var bodies = this.cradle.bodies;
            for(var i=0;i<bodies.length;i++){
                var pos = bodies[i].position;
                var pos1 = this.cradle.constraints[i].pointA;
                //Body.applyForce(this.cradle.bodies[i], pos,{x:-1, y: -1});
                fill(this.color[0],this.color[1],this.color[2]);
                circle(pos.x, pos.y, 50);
                fill(0);
                line(pos1.x,pos1.y,pos.x,pos.y);
            }
            //console.log(bodies[0].position.x, bodies[0].position.y);
        }
    }

    
}