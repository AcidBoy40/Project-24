class ground
{
    constructor(x,y,height,width)
    {
        var options={
            isStatic:true,
        }

        this.x = x,
        this.y = y;
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(this.x, this.y, this.height, this.width, options);
        World.add(world, this.body);
    }

    display()
    {
        var groundpos = this.body.position;

        push();
        rectMode(CENTER);
        fill("black");
        pop();

    }
}