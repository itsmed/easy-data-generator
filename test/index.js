const { expect } = require('chai');
const sinon = require('sinon');

const dg = require('../index');

describe('Easy Data Generator', () => {
  dg('helloWorld.ruby')
  it('Should do something', () => {
    expect(3 * 3).to.equal(9);
  });
});