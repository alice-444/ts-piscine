import { Direction, move } from "./enums";

const point: [number, number] = [5, 5];

console.log(move(point, Direction.North));
console.log(move(point, Direction.East));
console.log(move(point, Direction.South));
console.log(move(point, Direction.West));
