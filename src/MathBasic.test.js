const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('should contains add, substract, multiply, and devide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('substract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('devide');

    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.substract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.devide).toBeInstanceOf(Function);
  });
});
