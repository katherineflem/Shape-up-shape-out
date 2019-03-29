const MAX = 600; //max of the shape container so shapes stay within it
let recHeight = $("#recHeight")
let recWidth = $("#recWidth")
let insertRec = $("#insertRec")
let cirRadius = $("#cirRadius")
let insertCir = $("#insertCi")
let sqside = $("#sqsideLength");
let insertSq = $("#insertSq");
let insertTri = $("#insertTri")
let triHeight = $("#triheight")
//create generic shape parent class
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.div = $("<div></div>");
        //DBLCLICK FUNCTION TO REMOVE DIV
        this.div.dblclick(() => {
            this.div.remove();
        })
    }
    createShape(shape) { //when object is created, the following will happen:
        //a div will be created 
        // this.div.addClass("shape");
        this.div.addClass(shape);// the div will take on the class of whatever shape is within it(class will be circle if a circle object is created)
        $("#shape-container").append(this.div);// this shape will be appended to the container
        this.x = randVal(this.height, MAX); //
        this.y = randVal(this.width, MAX);
        this.div.css("left", `${this.x}px`)
        this.div.css("top", `${this.y}px`)
        this.div.css("width", `${this.width}px`);
        this.div.css("height", `${this.height}px`);
        this.div.click(() => {
            this.describe();
        })

    }
    describe() {
        let shapeName = this.div.attr('class')
        let area = this.width * this.height;
        let perimeter = this.width * 2 + this.height * 2;
        $("#shapename").text(shapeName);
        $("#shapewidth").text(this.width);
        $("#shapeheight").text(this.height);
        $("#shape-radius").text(this.radius);
        $("#shape-area").text(area);
        $("#shape-peri").text(perimeter);

    }

}

//Shapw is the superclass of the circle 
class Circle extends Shape {
    constructor(radius) {
        super(2 * radius, 2 * radius);//will get us the correct width and height
        this.radius = radius;
        // this.createShape();
    }

}
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);


    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.sideLength = sideLength;

    }
}
class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        $(".triangle").css({
            "height": "0",
            "width": "0",
            "border-bottom": "100px,solid, yellow",
            "border-right": "100px, solid, transparent",
            "position": "absolute"
        })

    }
}
// BUTTONS
insertCir.click(() => {
    let circle = new Circle(cirRadius.val());
    circle.createShape("circle");
})

insertRec.click(() => {
    let rectangle = new Rectangle(recWidth.val(), recHeight.val())
    rectangle.createShape("rectangle");
})

insertSq.click(() => {
    let square = new Square(sqside.val());
    square.createShape("square");
})

insertTri.click(() => {
    let triangle = new Triangle(triHeight.val());
    triangle.createShape("triangle");
})
let randVal = (min, max) => {
    return Math.floor(Math.random() * (max - min))
}

