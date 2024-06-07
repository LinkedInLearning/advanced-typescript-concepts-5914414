interface Circle {
    kind: "circle";
    radius: number;
}
 
interface Square {
    kind: "square";
    sideLength: number;
}
 
type Shape = Circle | Square;
 
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}
 
// Usage
const circle: Circle = { kind: "circle", radius: 10 };
const square: Square = { kind: "square", sideLength: 10 };
 
console.log(getArea(circle)); // Outputs: 314.1592653589793
console.log(getArea(square)); // Outputs: 100
