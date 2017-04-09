const { expect } = require('chai');

const { lorem } = require('../../methods');

describe('Methods: lorem', () => {
  it('should return a string of lorem ipsum', () => {
    expect(lorem().toLowerCase().includes('lorem ipsum')).to.equal(true);
  });

  it('should return the default snipet of lorem when no length is provided', () => {
    expect(lorem().length).to.equal(445);
  });

  it('should return a string of lorem of the requested length if the argument provided is less than the default length', () => {
    expect(lorem(10).toLowerCase().includes('lorem')).to.equal(true);
    expect(lorem(10).length).to.equal(10);      
  });
  it('should return a string of lorem of the requested length if the argument provided is less than the default length', () => {
    expect(lorem(100).toLowerCase().includes('ipsum')).to.equal(true);
    expect(lorem(100).length).to.equal(100);      
  });
  it('should return a string of lorem of the requested length if the argument provided is less than the default length', () => {
    expect(lorem(58).toLowerCase().includes('ipsum')).to.equal(true);
    expect(lorem(58).length).to.equal(58);      
  });
  it('should return a string of lorem of the requested length if the argument provided is less than the default length', () => {
    expect(lorem(345).toLowerCase().includes('nulla')).to.equal(true);
    expect(lorem(345).length).to.equal(345);      
  });
  it('should return a string of lorem of the requested length if the argument provided is less than the default length', () => {
    expect(lorem(209).toLowerCase().includes('ullamco')).to.equal(true);
    expect(lorem(209).length).to.equal(209);      
  });
  it('should return a string of lorem of the requested length if the argument provided is less than the default length', () => {
    expect(lorem(409).toLowerCase().includes('cillum')).to.equal(true);
    expect(lorem(409).length).to.equal(409);      
  });

  it('should return the entire default lorem ipsum string if the requested length is greater than the default', () => {
    expect(lorem(10000).toLowerCase().includes('laborum')).to.equal(true);
    expect(lorem(10000).length).to.equal(445);
  });
});