const createServer = require('./createServer');
const MathBasic = require('./MathBasic');

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
});
