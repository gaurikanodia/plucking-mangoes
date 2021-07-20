class Launcher{
    constructor(body,anchor)
    {
       var options={
           bodyA:body,
           pointB:anchor,
           stiffness:0.004,
           length:3

            } 
           
            this.bodyA=body
            this.pointB=anchor
            this.launcher1 = Constraint.create(options);
            World.add(world,this.launcher1);

        }

        attach(body){
            this.launcher1.bodyA=body;
        }

        fly(){
            this.launcher1.bodyA=null;
        }

        display(){
          
            if(this.launcher1.bodyA){
                var pointA=this.bodyA.position;
                var pointB=this.pointB

                strokeWeight(2);
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }



        }
    }
