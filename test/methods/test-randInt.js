const { expect } = require('chai');

const { randInt } = require('../../methods');

describe('Method: randInt', () => {
  describe('default behavior', () => {
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
    it('returns a random integer between 0 and 100 by default', () => {
      let i = randInt();
      expect(i >= 0).to.equal(true);
      expect(i <= 100).to.equal(true);
    });
  });
  describe('passing arguments', () => {
    it('returns a random integer between the passed in max and min', () => {
      let i = randInt(10, 19);
      expect(i >= 10).to.equal(true);
      expect(i <= 19).to.equal(true);
    });
    it('returns a random integer between the passed in max and min', () => {
      let i = randInt(25, 162);
      expect(i >= 25).to.equal(true);
      expect(i <= 162).to.equal(true);
    });
    it('returns a random integer between the passed in max and min', () => {
      let i = randInt(-10, 2);
      expect(i >= -10).to.equal(true);
      expect(i <= 2).to.equal(true);
    });
    it('returns a random integer between the passed in max and min', () => {
      let i = randInt(101, 191);
      expect(i >= 101).to.equal(true);
      expect(i <= 191).to.equal(true);
    });
    it('returns a random integer between the passed in max and min', () => {
      let i = randInt(1, 10);
      expect(i >= 1).to.equal(true);
      expect(i <= 10).to.equal(true);
    });
    it('returns a random integer between the passed in max and min', () => {
      let i = randInt(2, 5);
      expect(i >= 2).to.equal(true);
      expect(i <= 5).to.equal(true);
    });
    it('returns a random integer between the passed in max and min', () => {
      let i = randInt(10110, 190000);
      expect(i >= 10110).to.equal(true);
      expect(i <= 190000).to.equal(true);
    });
    it('returns a random integer between the passed in max and min', () => {
      let i = randInt(-10, 19);
      expect(i >= -10).to.equal(true);
      expect(i <= 19).to.equal(true);
    });
  });
});