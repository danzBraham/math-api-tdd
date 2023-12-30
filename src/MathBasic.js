const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('function only accepts two parameters');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('function only accepts the number parameter');
    }

    return a + b;
  },
  substract: (...args) => {
    if (args.length !== 2) {
      throw new Error('function only accepts two parameters');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('function only accepts the number parameter');
    }

    return a - b;
  },
  multiply: (...args) => {
    if (args.length !== 2) {
      throw new Error('function only accepts two parameters');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('function only accepts the number parameter');
    }

    return a * b;
  },
  devide: (...args) => {
    if (args.length !== 2) {
      throw new Error('function only accepts two parameters');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('function only accepts the number parameter');
    }

    return a / b;
  },
};

module.exports = MathBasic;
