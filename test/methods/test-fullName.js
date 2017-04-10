const sinon = require('sinon');
const { expect } = require('chai');

const { firstNames, lastNames } = require('../../helpers/names');

const {
  fullName
} = require('../../methods');

describe('Methods: fullName', () => {
  describe('a single full name', () => {
    let randomName;

    beforeEach(() => {
      randomName = fullName().split(' ')
    });

    it('should return a random name when invoked with no arguments', () => {
      expect(firstNames.indexOf(randomName[0]) > -1).to.equal(true);
      expect(lastNames.indexOf(randomName[1]) > -1).to.equal(true);
    });
    it('should return a random name when invoked with no arguments', () => {
      expect(firstNames.indexOf(randomName[0]) > -1).to.equal(true);
      expect(lastNames.indexOf(randomName[1]) > -1).to.equal(true);
    });
    it('should return a random name when invoked with no arguments', () => {
      expect(firstNames.indexOf(randomName[0]) > -1).to.equal(true);
      expect(lastNames.indexOf(randomName[1]) > -1).to.equal(true);
    });

  });

  describe('an array of full names', () => {
    it('should return an array of full names the length of the argument passed in', () => {
      expect(fullName(14).length).to.equal(14);
      expect(Array.isArray(fullName(14))).to.equal(true);
      expect(fullName(14).every(name => firstNames.includes(name.split(' ')[0]))).to.equal(true);
    });
    it('should return an array of full names the length of the argument passed in', () => {
      expect(fullName(24).length).to.equal(24);
      expect(Array.isArray(fullName(24))).to.equal(true);
      expect(fullName(24).every(name => lastNames.includes(name.split(' ')[1]))).to.equal(true);
    });
    it('should return an array of full names the length of the argument passed in', () => {
      expect(fullName(64).length).to.equal(64);
      expect(Array.isArray(fullName(64))).to.equal(true);
      expect(fullName(64).every(name => firstNames.includes(name.split(' ')[0]))).to.equal(true);

    });

    it('should return the firstNames array when passed a number greater than firstNames.length', () => {
      expect(fullName(364).length).to.equal(100);
      expect(Array.isArray(fullName(364))).to.equal(true);
    });
  });

});
