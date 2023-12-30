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

  describe('An add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrow();
      expect(() => MathBasic.add(1)).toThrow();
      expect(() => MathBasic.add(1, 2, 3)).toThrow();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.add('1', '2')).toThrow();
      expect(() => MathBasic.add(true, {})).toThrow();
      expect(() => MathBasic.add(null, false)).toThrow();
    });

    it('should return a + b when given two number parameters', () => {
      expect(MathBasic.add(1, 2)).toEqual(3);
      expect(MathBasic.add(5, 4)).toEqual(9);
      expect(MathBasic.add(8, 7)).toEqual(15);
    });
  });
});
