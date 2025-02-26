export class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getCalculateSurfaceAreaRectangle = (width: number, height: number) => {
    return width * height;
  };
}

export class Circle {
  rayon: number;
  constructor(rayon: number) {
    this.rayon = rayon;
  }
  getCalculateSurfaceAreaCercle = (rayon: number) => {
    return Math.PI * rayon * rayon;
  };
}

export const ViewSurfaceArea = (forme: Rectangle | Circle) => {
  if (forme instanceof Rectangle) {
    const result = forme.getCalculateSurfaceAreaRectangle(forme.width, forme.height);
    console.log(`Ceci est un rectangle de surface ${result}.`);
  } else if (forme instanceof Circle) {
    const result = forme.getCalculateSurfaceAreaCercle(forme.rayon);
    console.log(`Ceci est un cercle de surface ${result}.`);
  }
};
