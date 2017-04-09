const sinon = require('sinon');
const { expect } = require('chai');

const { 
  checkFileExtension
} = require('../../helpers');

describe('Helper Function: checkFileExtension', () => {
  describe('passing a txt file', () => {
    it('should return true when pased a file name or path that ends with a .txt extension', () => {
      expect(checkFileExtension('../testTextFiles/test1.txt')).to.equal(true);
      expect(checkFileExtension('../testTextFiles/test2.txt')).to.equal(true);
      expect(checkFileExtension('../testTextFiles/test3.txt')).to.equal(true);
      expect(checkFileExtension('../testTextFiles/test4.txt')).to.equal(true);
    });

    it('should not care if the file does not exist', () => {
      expect(checkFileExtension('fakeFile.txt')).to.equal(true);
    });
  });

  describe('passing a file other than a .txt', () => {
    let spy = sinon.spy(console, 'log');

    it('should call errorMessage when passed a file that does not have a .txt extension and return false', () => {
      expect(checkFileExtension('fake.js')).to.equal(false);
      sinon.assert.called(spy);
    });
    it('should call errorMessage when passed a file that does not have a .txt extension and return false', () => {
      expect(checkFileExtension('fake.json')).to.equal(false);
      sinon.assert.called(spy);
    });
    it('should call errorMessage when passed a file that does not have a .txt extension and return false', () => {
      expect(checkFileExtension('fake.go')).to.equal(false);
      sinon.assert.called(spy);
    });
    it('should call errorMessage when passed a file that does not have a .txt extension and return false', () => {
      expect(checkFileExtension('place/not/real/fake.rb')).to.equal(false);
      sinon.assert.called(spy);
    });
    it('should call errorMessage when passed a file that does not have a .txt extension and return false', () => {
      expect(checkFileExtension('fake/place/and/file.py')).to.equal(false);
      sinon.assert.called(spy);
    });
    it('should call errorMessage when passed a file that does not have a .txt extension and return false', () => {
      expect(checkFileExtension('fake.jpg')).to.equal(false);
      sinon.assert.called(spy);
    });
    it('should call errorMessage when passed a file that does not have a .txt extension and return false', () => {
      expect(checkFileExtension('fake.html')).to.equal(false);
      sinon.assert.called(spy);
    });
    it('should call errorMessage when passed a file that does not have a .txt extension and return false', () => {
      expect(checkFileExtension('fake/place/and/file.hbs')).to.equal(false);
      sinon.assert.called(spy);
    });
    it('should call errorMessage when passed a file that does not have a .txt extension and return false', () => {
      expect(checkFileExtension('fake/place/and/file.ts')).to.equal(false);
      sinon.assert.called(spy);
    });
  });
});