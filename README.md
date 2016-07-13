[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1ccc1a36744248d183de8290e1032f31)](https://www.codacy.com/app/esther-kahindi/string-extension?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=andela-ekahindi/string-extension&amp;utm_campaign=Badge_Grade)
[![Coverage Status](https://coveralls.io/repos/github/andela-ekahindi/string-extension/badge.svg?branch=develop)](https://coveralls.io/github/andela-ekahindi/string-extension?branch=develop)

# string-extension
Extending String Class - Checkpoint 2
##Introduction
This is to extend the Inbuilt String Class in Javascript to to neat tricks.

These include:

1. Checks if the string has vowels.
2. Gives you an UpperCase representation of a string.
3. Gives you a LowerCase representation of a string.
4. Gives you a string with the first character in UpperCase.
5. Checks if the string is a question.(ends with a question mark).
6. Gives you a list of the words in the string as an array.
7. Gives you the number of words in the string.
8. Gives you the currency representation of the string passed.
9. Gives a number after passing the string representation.


##Usage
1. Ensure you are in the [master branch](https://github.com/andela-ekahindi/inverted-index/tree/master).
2. Download the ZIP or Clone the [repository](https://github.com/andela-ekahindi/inverted-index.git).
3. Copy the string-extension.js.
4. Include the file in your .html file as a script or require it as a module.
5. Use them as a string class methods meaning you can use as you use other string methods.

##Methods
These methods donot take in any arguements.The methods for the extended string Class are:


#####1. hasVowels( )
It returns true if the string contains vowels and false if doesnot.

######Example
> 'hi this is a string'.hasVowels()      return true

#####2. toUpper( )
It returns the String in question but with all characters in upper cases as applicable.

######Example
> 'hi this is a string'.toUpper()      return 'HI THIS IS A STRING'

#####3. toLower( )
It returns the String in question but with all characters in lower cases as applicable.

######Example
> 'Hi this Is A STring'.toLower()      return 'hi this is a string'

#####4. ucFirst( )
It returns the String in question but changes the First Character to an Upper case.

######Example
> 'HI THIS is a string'.ucFirst()      return 'Hi this is a string'

#####5. isQuestion( )
It returns true if the string is a question (ending with a question mark).

######Example
> 'hi this is a question?'.isQuestion()      return true

#####6. words( )
It returns a list of the words in the string, as an Array. 

######Example
> 'hi this is a string'.words()      return ['hi','this','is','a','string']

#####7. wordCount( )
It returns the number of words in the string. 

######Example
> 'hi this is a string'.wordCount()     return 5

#####8. toCurrency( )
It returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.

######Example
> '1000000'.toCurrency()      return '1,000,000'

#####9. fromCurrency( )
It returns a number representation of the Currency String e.g 11,111.11 should return 11111.11

######Example
> '1,000,000'.toCurrency()      return 1000000


##Testing
The browser environment was picked to run the test. 

#####Running Tests
1. Install node.js.[How to](https://nodejs.org/en/).
2. Install [http-server](https://github.com/indexzero/http-server).The reason is that a browser cannot load local files thus a need too establish a simple server to provide the files.
3. Go to the jasmine directory in your terminal.
4. Start the server using the command below.
    > http-server [path] [options]
5. Copy one of the links provided by running the command.
6. Paste it on your browser
7. Open the SpecRunner.html file
8. Watch tests pass ;-)
