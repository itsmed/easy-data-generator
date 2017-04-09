const { expect } = require('chai');
const sinon = require('sinon');

const dg = require('../index');

describe('Easy Data Generator', () => {
  it('Should do something', () => {
    let spy = sinon.spy(dg);
    dg('fake.txt');
    sinon.assert.called(spy);
    sinon.asset.calledWith(spy, 'fake.txt');
  });
});