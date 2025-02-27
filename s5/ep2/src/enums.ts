export enum Direction {
  North,
  East,
  South,
  West,
}

export function vectorDirection(direction: Direction): [number, number] {
  if (direction === Direction.North) {
    return [0, 1];
  } else if (direction === Direction.South) {
    return [0, -1];
  } else if (direction === Direction.East) {
    return [1, 0];
  } else if (direction === Direction.West) {
    return [-1, 0];
  } else {
    throw new Error("Invalid direction");
  }
}
