'use strict';
String.prototype.hasVowels = function() {
  //Returns true if the string contains vowels.

  return /[aeiou]/i.test(this);
};

String.prototype.toUpper = function() {
  //Returns the String in question but with all characters in upper cases as applicable.

  return this.replace(/[a-z]/g, function(letter) {
    return String.fromCharCode(letter.charCodeAt(0) & ~32);
  });
};

String.prototype.toLower = function() {
  //Returns the String in question but with all characters in their lower cases as applicable.

  return this.replace(/[A-Z]/g, function(letter) {
    return String.fromCharCode(letter.charCodeAt(0) | 32);
  });
};

String.prototype.ucFirst = function() {
  //Returns the String in question but changes the First Character to an Upper case.

  return this[0].toUpper() + this.slice(1).toLower();
};

String.prototype.isQuestion = function() {
  //Return true if the string is a question (ending with a question mark).

  return /\?$/.test(this); 
};

String.prototype.words = function() {
  //Returns a list of the words in the string, as an Array. 

  return this.replace(/\W+/g, ' ').trim().split(' '); 
};

String.prototype.wordCount = function() {
  //Returns the number of words in the string. 

  return this.words().length;
};

String.prototype.toCurrency = function() {
  //Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.

  var number = parseFloat(this).toFixed(2);
  return number.split(/(?=(?:\d{3})+(?:\.|$))/g).join(",");
};

String.prototype.fromCurrency = function() {
  //Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11

  return Number(this.replace(/\,/g, ''));
};
