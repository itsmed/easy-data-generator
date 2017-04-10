const sinon = require('sinon');
const { expect } = require('chai');

const { lastNames } = require('../../helpers/names');

const {
  lastName
} = require('../../methods');

describe('Methods: lastName', () => {
  it('should return a random name when invoked with no arguments', () => {
    expect(lastNames.indexOf(lastName()) > -1).to.equal(true)
  });
  it('should return a random name when invoked with no arguments', () => {
    expect(lastNames.indexOf(lastName()) > -1).to.equal(true)
  });
  it('should return a random name when invoked with no arguments', () => {
    expect(lastNames.indexOf(lastName()) > -1).to.equal(true)
  });

  it('should return an array of first names the length of the argument passed in', () => {
    expect(lastName(14).length).to.equal(14);
    expect(Array.isArray(lastName(14))).to.equal(true);
    expect(lastName(14).every(name => lastNames.includes(name))).to.equal(true);
  });
  it('should return an array of first names the length of the argument passed in', () => {
    expect(lastName(24).length).to.equal(24);
    expect(Array.isArray(lastName(24))).to.equal(true);
    expect(lastName(24).every(name => lastNames.includes(name))).to.equal(true);
  });
  it('should return an array of first names the length of the argument passed in', () => {
    expect(lastName(64).length).to.equal(64);
    expect(Array.isArray(lastName(64))).to.equal(true);
    expect(lastName(64).every(name => lastNames.includes(name))).to.equal(true);

  });

  it('should return the lastNames array when passed a number greater than lastNames.length', () => {
    expect(lastName(364).length).to.equal(100);
    expect(Array.isArray(lastName(364))).to.equal(true);
  });
});
