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

  describe('A substract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.substract()).toThrow();
      expect(() => MathBasic.substract(1)).toThrow();
      expect(() => MathBasic.substract(1, 2, 3)).toThrow();
      expect(() => MathBasic.substract(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.substract('1', '2')).toThrow();
      expect(() => MathBasic.substract(true, {})).toThrow();
      expect(() => MathBasic.substract(null, false)).toThrow();
    });

    it('should return a - b when given two number parameters', () => {
      expect(MathBasic.substract(1, 2)).toEqual(-1);
      expect(MathBasic.substract(5, 4)).toEqual(1);
      expect(MathBasic.substract(10, 7)).toEqual(3);
    });
  });

  describe('A multiply function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrow();
      expect(() => MathBasic.multiply(1)).toThrow();
      expect(() => MathBasic.multiply(1, 2, 3)).toThrow();
      expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.multiply('1', '2')).toThrow();
      expect(() => MathBasic.multiply(true, {})).toThrow();
      expect(() => MathBasic.multiply(null, false)).toThrow();
    });

    it('should return a - b when given two number parameters', () => {
      expect(MathBasic.multiply(1, 2)).toEqual(2);
      expect(MathBasic.multiply(5, 4)).toEqual(20);
      expect(MathBasic.multiply(10, 7)).toEqual(70);
    });
  });

  describe('A devide function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.devide()).toThrow();
      expect(() => MathBasic.devide(1)).toThrow();
      expect(() => MathBasic.devide(1, 2, 3)).toThrow();
      expect(() => MathBasic.devide(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.devide('1', '2')).toThrow();
      expect(() => MathBasic.devide(true, {})).toThrow();
      expect(() => MathBasic.devide(null, false)).toThrow();
    });

    it('should return a - b when given two number parameters', () => {
      expect(MathBasic.devide(6, 2)).toEqual(3);
      expect(MathBasic.devide(20, 4)).toEqual(5);
      expect(MathBasic.devide(100, 5)).toEqual(20);
    });
  });
});
