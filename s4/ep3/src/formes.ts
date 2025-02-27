export abstract class Form {
  abstract CalculateSurface(): number;
}

export class Rectangle extends Form {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  CalculateSurface(): number {
    const result = this.width * this.height;
    return result;
  }
}

export class Circle extends Form {
  rayon: number;
  constructor(rayon: number) {
    super();
    this.rayon = rayon;
  }
  CalculateSurface(): number {
    const result = Math.PI * this.rayon * this.rayon;
    return result;
  }
}
