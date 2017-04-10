const sinon = require('sinon');
const { expect } = require('chai');

const { firstNames } = require('../../helpers/names');

const {
  firstName
} = require('../../methods');

describe('Methods: firstName', () => {
  it('should return a random name when invoked with no arguments', () => {
    expect(firstNames.indexOf(firstName()) > -1).to.equal(true)
  });
  it('should return a random name when invoked with no arguments', () => {
    expect(firstNames.indexOf(firstName()) > -1).to.equal(true)
  });
  it('should return a random name when invoked with no arguments', () => {
    expect(firstNames.indexOf(firstName()) > -1).to.equal(true)
  });

  it('should return an array of first names the length of the argument passed in', () => {
    expect(firstName(14).length).to.equal(14);
    expect(Array.isArray(firstName(14))).to.equal(true);
    expect(firstName(14).every(name => firstNames.includes(name))).to.equal(true);
  });
  it('should return an array of first names the length of the argument passed in', () => {
    expect(firstName(24).length).to.equal(24);
    expect(Array.isArray(firstName(24))).to.equal(true);
    expect(firstName(24).every(name => firstNames.includes(name))).to.equal(true);
  });
  it('should return an array of first names the length of the argument passed in', () => {
    expect(firstName(64).length).to.equal(64);
    expect(Array.isArray(firstName(64))).to.equal(true);
    expect(firstName(64).every(name => firstNames.includes(name))).to.equal(true);

  });

  it('should return the firstNames array when passed a number greater than firstNames.length', () => {
    expect(firstName(364).length).to.equal(100);
    expect(Array.isArray(firstName(364))).to.equal(true);
  });
});
