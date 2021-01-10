class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10,
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        stroke("red");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    fly(){
        this.chain.bodyA=null;
    }
}