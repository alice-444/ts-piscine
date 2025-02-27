import { Rectangle, Circle } from "./formes";

const rectangle = new Rectangle(10, 20);
const circle = new Circle(45);

console.log(`Surface du rectangle: ${rectangle.CalculateSurface()}`);
console.log(`Surface du cercle: ${circle.CalculateSurface()}`);
