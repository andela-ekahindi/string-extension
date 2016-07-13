'use strict';
describe('String Extension', function() {

  describe('Has Vowels', function() {
    it('should return true if the string contains vowels', function() {
      expect('hi'.hasVowels()).toBeTruthy();
      expect('HI'.hasVowels()).toBeTruthy();
      expect(''.hasVowels()).toBeFalsy();
      expect('?'.hasVowels()).toBeFalsy();
      expect('bcdfg'.hasVowels()).toBeFalsy();
    });
  });

  describe('To Upper', function() {
    it('should return the string passed as all upper cases characters.', function() {
      expect('hi'.toUpper()).toEqual('HI');
      expect('HI'.toUpper()).toEqual('HI');
      expect(''.toUpper()).toEqual('');
      expect('?'.toUpper()).toEqual('?');
    });
  });

  describe('To Lower', function() {
    it('should return the string passed as all lower cases characters.', function() {
      expect('HI'.toLower()).toEqual('hi');
      expect('hi'.toLower()).toEqual('hi');
      expect('hELLo'.toLower()).toEqual('hello');
    });

  });

  describe('Upper Case First Letter', function() {
    it('should return the string passed with the First Character in Upper case.', function() {
      expect('hi'.ucFirst()).toEqual('Hi');
      expect('Hi'.ucFirst()).toEqual('Hi');
      expect('HI'.ucFirst()).toEqual('Hi');
    });
  });

  describe('is Question', function() {
    it('should return true if the string is a question (ending with a question mark).', function() {
      expect('hi?'.isQuestion()).toBeTruthy();
      expect('hi? am good'.isQuestion()).toBeFalsy();
    });
  });

  describe('Words', function() {
    it('should return a list of the words in the string, as an Array. ', function() {
      expect('this is a string.'.words()).toEqual(['this', 'is', 'a', 'string']);
    });
  });

  describe('word Count', function() {
    it('should return the number of words in the string.', function() {
      expect('this is a string'.wordCount()).toEqual(4);
      expect('this . a string '.wordCount()).toEqual(3);
    });
  });

  describe('To Currency', function() {
    it('should return a currency representation of the string passed.', function() {
      expect('11111.11'.toCurrency()).toEqual('11,111.11');
      expect('11111.00'.toCurrency()).toEqual('11,111.00');
      expect('11111.00.00'.toCurrency()).toEqual('11,111.00');
    });
  });

  describe('From Currency', function() {
    it('should return a number representation of the Currency String.', function() {
      expect('11,111.11'.fromCurrency()).toEqual(11111.11);
    });
  });
});
