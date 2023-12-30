const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

describe('A HTTP Server', () => {
  describe('When GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const expectedAnswer = MathBasic.add(a, b);
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(expectedAnswer);
      expect(spyAdd).toHaveBeenCalledWith(a, b);
    });
  });

  describe('When GET /substract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12;
      const b = 5;
      const expectedAnswer = MathBasic.substract(a, b);
      const spySubstract = jest.spyOn(MathBasic, 'substract');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/substract/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(expectedAnswer);
      expect(spySubstract).toHaveBeenCalledWith(a, b);
    });
  });

  describe('When GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 5;
      const expectedAnswer = MathBasic.multiply(a, b);
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(expectedAnswer);
      expect(spyMultiply).toHaveBeenCalledWith(a, b);
    });
  });

  describe('When GET /devide', () => {
    it('should respond with a status code of 200 and the payload value is division result of a and b correctly', async () => {
      // Arrange
      const a = 100;
      const b = 5;
      const expectedAnswer = MathBasic.devide(a, b);
      const spyDevide = jest.spyOn(MathBasic, 'devide');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/devide/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(expectedAnswer);
      expect(spyDevide).toHaveBeenCalledWith(a, b);
    });
  });

  describe('When GET /rectangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value of the calculation result of the perimeter of a rectangle formula', async () => {
      // Arrange
      const figureCalculator = new FigureCalculator(MathBasic);
      const length = 10;
      const width = 30;
      const expectedAnswer = figureCalculator.calculateRectanglePerimeter(length, width);
      const spyRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(expectedAnswer);
      expect(spyRectanglePerimeter).toHaveBeenCalledWith(length, width);
    });
  });

  describe('When GET /rectangle/area', () => {
    it('should respond with a status code of 200 and the payload value of the calculation result of the area of a rectangle formula', async () => {
      // Arrange
      const figureCalculator = new FigureCalculator(MathBasic);
      const length = 10;
      const width = 30;
      const expectedAnswer = figureCalculator.calculateRectangleArea(length, width);
      const spyRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(expectedAnswer);
      expect(spyRectangleArea).toHaveBeenCalledWith(length, width);
    });
  });
});
