const { expect } = require('chai');
const sinon = require('sinon');

const { randFloat, errorMessage } = require('../../methods');

describe('Method: randFloat', () => {

  describe('errors', () => {
    let spy;
    beforeEach(() => spy = sinon.spy(console, 'log'));
    afterEach(() => console.log.restore());

    it('returns an error message when called with a first argument greater than 20', () => {
      randFloat(21);
      expect(spy.called).to.equal(true);  
    });
  });

  describe('No arguments:', () => {
    let float;
    beforeEach(() => {
      float = randFloat();
    });
    it('returns a random float with two decimal places when invoked with no arguments', () => {
      expect(float > 0).to.equal(true);
      expect(float < 1000).to.equal(true);
      expect(float.toString().slice(float.indexOf('.')).length).to.equal(3);
    });
    it('returns a random float with two decimal places when invoked with no arguments', () => {
      expect(float > 0).to.equal(true);
      expect(float < 1000).to.equal(true);
      expect(float.toString().slice(float.indexOf('.')).length).to.equal(3);
    });
    it('returns a random float with two decimal places when invoked with no arguments', () => {
      expect(float > 0).to.equal(true);
      expect(float < 1000).to.equal(true);
      expect(float.toString().slice(float.indexOf('.')).length).to.equal(3);
    });
    it('returns a random float with two decimal places when invoked with no arguments', () => {
      expect(float > 0).to.equal(true);
      expect(float < 1000).to.equal(true);
      expect(float.toString().slice(float.indexOf('.')).length).to.equal(3);
    });
    it('returns a random float with two decimal places when invoked with no arguments', () => {
      expect(float > 0).to.equal(true);
      expect(float < 1000).to.equal(true);
      expect(float.toString().slice(float.indexOf('.')).length).to.equal(3);
    });
  });

  describe('one argument', () => {
    it('returns an integer when passed a value below 0', () => {
      expect(randFloat(-1).toString().indexOf('.') === -1).to.equal(true);
      expect(isNaN(randFloat(-1))).to.equal(false);
    });
    it('returns an integer when passed a value below 0', () => {
      expect(randFloat(-10).toString().indexOf('.') === -1).to.equal(true);
      expect(isNaN(randFloat(-10))).to.equal(false);
    });
    it('returns an integer when passed a value below 0', () => {
      expect(randFloat(-235).toString().indexOf('.') === -1).to.equal(true);
      expect(isNaN(randFloat(-235))).to.equal(false);
    });
    it('randFloat(1) return a float rounded to one decimal place', () => {
      expect(randFloat(1).toString().indexOf('.') === -1).to.equal(false);
      expect(isNaN(randFloat(1))).to.equal(false);
    });
    it('randFloat(13) return a float rounded to one decimal place', () => {
      expect(randFloat(1).toString().indexOf('.') === -1).to.equal(false);
      expect(isNaN(randFloat(1))).to.equal(false);
    });
    it('randFloat(7) return a float rounded to one decimal place', () => {
      expect(randFloat(1).toString().indexOf('.') === -1).to.equal(false);
      expect(isNaN(randFloat(1))).to.equal(false);
    });
    it('randFloat(10) return a float rounded to one decimal place', () => {
      expect(randFloat(1).toString().indexOf('.') === -1).to.equal(false);
      expect(isNaN(randFloat(1))).to.equal(false);
    });
    it('randFloat(20) return a float rounded to one decimal place', () => {
      expect(randFloat(1).toString().indexOf('.') === -1).to.equal(false);
      expect(isNaN(randFloat(1))).to.equal(false);
    });
    it('randFloat(19) return a float rounded to one decimal place', () => {
      expect(randFloat(1).toString().indexOf('.') === -1).to.equal(false);
      expect(isNaN(randFloat(1))).to.equal(false);
    });
    it('randFloat(16) return a float rounded to one decimal place', () => {
      expect(randFloat(1).toString().indexOf('.') === -1).to.equal(false);
      expect(isNaN(randFloat(1))).to.equal(false);
    });
  });

});