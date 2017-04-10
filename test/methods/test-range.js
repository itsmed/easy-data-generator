const { expect } = require('chai');

const { range } = require('../../methods');

describe('Method: range', () => {
  describe('passing no arguments', () => {
     it('calling range with no arguments results in an array containing the integers 0 through 10 inclusively by default', () => {
        expect(range().reduce((a, b) => a + b)).to.equal(55);
     });
   });
  describe('passing a single argument', () => {
    it('calling range with a single argument "X" returns an array of length X containing integers between 0 and 10 inclusively up to X', () => {
      expect(range(2)).to.deep.equal([0, 1, 2]);
    });
    it('calling range with a single argument "X" returns an array of length X containing integers between 0 and 10 inclusively up to X', () => {
      let arr = [];
      let i = 0;
      let val = 0;
      while (i <= 100) {
        arr.push(val);
        i++;
        val++;
        if (val > 10) {
          val = 0;
        }
      }
      expect(range(100)).to.deep.equal(arr);
    });
    it('calling range with a single argument "X" returns an array of length X containing integers between 0 and 10 inclusively up to X', () => {
      let arr = [];
      let i = 0;
      let val = 0;
      while (i <= 99) {
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
  describe('passing two arguments "X" and "Y" returns an array containing the integers X through Y inclusively', () => {
    
  });
  describe('passing three arguments "X", "Y" and "Z" returns an array containing the integers X through Y stepped through by Z', () => {
    
  });
});
