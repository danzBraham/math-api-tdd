const Hapi = require('@hapi/hapi');

const createServer = ({ mathBasic, figureCalculator }) => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000,
  });

  server.route([
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.add(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/substract/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.substract(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/multiply/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.multiply(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/devide/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.devide(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/rectangle/perimeter/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = figureCalculator.calculateRectanglePerimeter(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: 'GET',
      path: '/rectangle/area/{a}/{b}',
      handler: (request) => {
        const { a, b } = request.params;
        const value = figureCalculator.calculateRectangleArea(Number(a), Number(b));
        return { value };
      },
    },
  ]);

  return server;
};

module.exports = createServer;
