const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
  it('should have calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({});

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');

    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrow();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrow();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrow();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter('1', '2')).toThrow();
      expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrow();
      expect(() => figureCalculator.calculateRectanglePerimeter(null, false)).toThrow();
    });

    it('should return the correct value based on the perimeter of a square formula', () => {
      // Arrange
      const length = 10;
      const width = 20;
      const lengthPlusWidth = MathBasic.add(length, width);
      const expectedAnswer = MathBasic.multiply(2, lengthPlusWidth);
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateRectanglePerimeter(length, width);

      // Assert
      expect(result).toEqual(expectedAnswer);
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, lengthPlusWidth);
    });
  });

  describe('A calculateRectangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea()).toThrow();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrow();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrow();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea('1', '2')).toThrow();
      expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrow();
      expect(() => figureCalculator.calculateRectangleArea(null, false)).toThrow();
    });

    it('should return the correct value based on the perimeter of a square formula', () => {
      // Arrange
      const length = 10;
      const width = 20;
      const expectedAnswer = MathBasic.multiply(length, width);
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateRectangleArea(length, width);

      // Assert
      expect(result).toEqual(expectedAnswer);
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
    });
  });

  describe('A calculateTrianglePerimeter function', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrow();
      expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrow();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrow();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter('1', '2')).toThrow();
      expect(() => figureCalculator.calculateTrianglePerimeter(true, {})).toThrow();
      expect(() => figureCalculator.calculateTrianglePerimeter(null, false)).toThrow();
    });

    it('should return the correct value based on the perimeter of a square formula', () => {
      // Arrange
      const sideA = 10;
      const sideB = 20;
      const base = 20;
      const sideAPlusSideB = MathBasic.add(sideA, sideB);
      const expectedAnswer = MathBasic.add(sideAPlusSideB, base);
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);

      // Assert
      expect(result).toEqual(expectedAnswer);
      expect(spyAdd).toHaveBeenCalledWith(sideA, sideB);
      expect(spyAdd).toHaveBeenCalledWith(sideAPlusSideB, base);
    });
  });

  describe('A calculateTriangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea()).toThrow();
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrow();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrow();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea('1', '2')).toThrow();
      expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrow();
      expect(() => figureCalculator.calculateTriangleArea(null, false)).toThrow();
    });

    it('should return the correct value based on the perimeter of a square formula', () => {
      // Arrange
      const height = 10;
      const base = 20;
      const heightTimesBase = MathBasic.multiply(height, base);
      const expectedAnswer = MathBasic.devide(heightTimesBase, 2);
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyDevide = jest.spyOn(MathBasic, 'devide');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateTriangleArea(height, base);

      // Assert
      expect(result).toEqual(expectedAnswer);
      expect(spyMultiply).toHaveBeenCalledWith(height, base);
      expect(spyDevide).toHaveBeenCalledWith(heightTimesBase, 2);
    });
  });
});
