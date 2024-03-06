const sum = require('../client/sum');

describe('sum function', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toEqual(3);
  })
})