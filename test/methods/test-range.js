const sinon = require('sinon');
const { expect } = require('chai');

const { buildTestArray } = require('../../helpers');
const { range } = require('../../methods');

describe('Method: range', () => {
  describe('Errors should only occur when passed a negative number for length', () => {
    let spy;
    beforeEach(() => spy = sinon.spy(console, 'log'));
    afterEach(() => console.log.restore());

    it('returns an error message when called with a negative number for length', () => {
      range(-10);
      sinon.assert.called(spy);
    });
    it('returns an error message when called with a negative number for length', () => {
      range(-1);
      sinon.assert.called(spy);
    });
    it('returns an error message when called with a negative number for length', () => {
      range(-900, 139);
      sinon.assert.called(spy);
    });
    it('returns an error message when called with a negative number for length', () => {
      range(-1000);
      sinon.assert.called(spy);
    });
  });
  describe('passing no arguments', () => {
     it('calling range with no arguments results in an array containing the integers 0 through 10 by default', () => {
        expect(range().reduce((a, b) => a + b)).to.equal(45);
     });
   });
  describe('passing a single argument', () => {

    it('calling range with a single argument "X" returns an array of length X containing integers between 0 and 10 up to X', () => {
      expect(range(2)).to.deep.equal([0, 1]);
    });
    it('calling range with a single argument "X" returns an array of length X containing integers between 0 and 10 up to X', () => {
      let arr = [];
      let i = 0;
      let val = 0;
      while (i < 100) {
        arr.push(val);
        i++;
        val++;
        if (val > 10) {
          val = 0;
        }
      }
      expect(range(100)).to.deep.equal(arr);
    });
    it('calling range with a single argument "X" returns an array of length X containing integers between 0 and 10', () => {
      let arr = [];
      let i = 0;
      let val = 0;
      while (i < 99) {
        arr.push(val);
        val++;
        i++;
        if (val > 10) {
          val = 0;
        }
      }
      expect(range(99)).to.deep.equal(arr);
    });
  });
  describe('passing two arguments "X" and "Y" returns an array of length X containing the integers 0 through Y', () => {
    it('calling range with arguments (10, 10) will return an array of 10 length containing integers ranging from 0 to 10', () => {
      expect(range(10, 10)).to.deep.equal(buildTestArray());
    });
    it('calling range with arguments (20, 10) will return an array of 20 length containing integers ranging from 0 to 10', () => {
      expect(range(20, 10)).to.deep.equal(buildTestArray(20, 0, 10));
      expect(range(20, 10).length).to.equal(20);
    });
    it('calling range with arguments (50, 50) will return an array of 50 length containing integers ranging from 0 to 50', () => {
      expect(range(50, 50)).to.deep.equal(buildTestArray(50, 0, 50));
      expect(range(50, 10).length).to.equal(50);
    });
    it('calling range with arguments (50, 20) will return an array of 50 length containing integers ranging from 0 to 20', () => {
      expect(range(50, 20)).to.deep.equal(buildTestArray(50, 0, 20));
      expect(range(50, 10).length).to.equal(50);
    });
  });
  describe('passing three arguments "X", "Y" and "Z" returns an array containing the integers X through Y stepped through by Z', () => {
    
  });
});
