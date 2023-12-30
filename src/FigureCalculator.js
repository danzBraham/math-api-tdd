class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('function only accepts two parameters');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('function only accepts the number parameter');
    }

    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('function only accepts two parameters');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('function only accepts the number parameter');
    }

    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    if (args.length !== 3) {
      throw new Error('function only accepts three parameters');
    }

    const [sideA, sideB, base] = args;

    if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof base !== 'number') {
      throw new Error('function only accepts the number parameter');
    }

    return this._mathBasic.add(this._mathBasic.add(sideA, sideB), base);
  }

  calculateTriangleArea() {}
}

module.exports = FigureCalculator;
