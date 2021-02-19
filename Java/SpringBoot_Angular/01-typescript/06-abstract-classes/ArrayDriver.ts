import {Shape} from './Shape';
import {Circle} from "./Circle"
import { Rectangle } from './Rectangle';

//let myShape = new Shape(10,15);
//console.log(myShape.getInfo());

let myCircle = new Circle(5,10,20);
let myRectangle = new Rectangle(0,0,3,7);

console.log(myCircle.getInfo());
console.log(myRectangle.getInfo());

// First Array
let shapes:Shape[] = new Array();
shapes.push(myCircle);
shapes.push(myRectangle);

for(let shape of shapes){
    console.log(shape.getInfo());
}

// Second Array
let theShapes: Shape[] = [];

// add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
