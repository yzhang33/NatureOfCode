class Ball{
    constructor(){
        this.ball = Bodies.circle(160,350,20,{ density: 0.004,restitution: 0.5});
        Body.setMass(this.ball, this.ball.mass*6);
        this.sling= Constraint.create({
            pointA:{x:160,y:350},
            bodyB: this.ball,
            stiffness:0.02,
            length:20
        });
        this.fired=false;
        Matter.World.add(engine.world, this.ball);
        Matter.World.add(engine.world, this.sling);

        this.show = function(){
            var pos1 = this.ball.position;
            var pos2 = this.sling.pointA;
            if(this.sling.bodyB){
                var pos3 = this.sling.bodyB.position;
                line(pos2.x,pos2.y,pos3.x,pos3.y);
            }
           
            fill(0,0,170);
            circle(pos1.x,pos1.y,20);
            fill(0);
            
        }

        this.fire = function(){
            if(this.sling.bodyB){
                console.log("fire");
                this.sling.bodyB = null;
            }
        }
        this.loadBall=function(){
            this.ball = Bodies.circle(160,250,20,{density: 0.004,restitution: 0.5});
            Body.setMass(this.ball, this.ball.mass*6);
            this.sling.bodyB=this.ball;
            Matter.World.add(engine.world, this.ball);
        }
    }
}