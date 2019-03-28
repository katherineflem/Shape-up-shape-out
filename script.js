const MAX = 600; //max of the shape container so shapes stay within it
let recHeight = $("#recHeight")
let recWidth = $("#recWidth")
let insertRec = $("#insertRec")
let cirRadius = $("#cirRadius")
let insertCir = $("#insertCi")
//create generic shape parent class
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    createShape(shape) {
        this.div = $("<div></div>");
        this.div.addClass(shape);
        $("#shape-container").append(this.div);
        let x= randVal(0,MAX);
        let y= randVal(0,MAX);
        this.div.css("left",`${x}px`)
        this.div.css("top",`${y}px`)
        this.div.css("width", `${this.width}px`);
        this.div.css("height",`${this.height}px`);
        this.div.click(() => {
            this.describe();
        })
        console.log(this)
        
    }
    describe() {
        let shapeName = this.div.attr('class')
        let area = this.width * this.height;
        let perimeter = this.width * 2 + this.height * 2;
        $("#shapename").text(shapeName);
        $("#shapewidth").text(this.width);
        $("#shapeheight").text(this.height);
        $("#shaperadius").text(this.radius);
        $("#shapearea").text(area); 
        $("#shapeperi").text(perimeter); 
    }
}


//Shapw is the superclass of the circle 
class Circle extends Shape {
    constructor(radius) {
        super(2 * radius, 2 * radius);//will get us the correct width and height
        this.radius=radius;
        this.createShape();
    }

}

class Triangle extends Shape {
    constructor(height) {
        super();

    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();

    }
}
class Square extends Rectangle {
    constructor(sideLength) {
        super();

    }
}

// BUTTONS
insertCir.click(()=>{
    let circle = new Circle(cirRadius.val());
    circle.createShape("circle");
    console.log(circle)
})



let randVal = (min,max) => {
return Math.floor(Math.random()*(600))
}