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

export function move(
  point: [number, number],
  direction: Direction
): [number, number] {
  const [dx, dy] = vectorDirection(direction);
  return [point[0] + dx, point[1] + dy];
}
