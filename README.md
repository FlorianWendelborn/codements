# codements

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Code Climate](https://codeclimate.com/github/dodekeract/codements/badges/gpa.svg)](https://codeclimate.com/github/dodekeract/codements)
[![NPM Downloads](https://img.shields.io/npm/dm/codements.svg)](https://npmjs.com/package/codements)
[![NPM Dependencies](https://david-dm.org/dodekeract/codements.png)](https://npmjs.com/package/codements)
[![Code Documentation](https://inch-ci.org/github/dodekeract/codements.svg)](https://inch-ci.org/github/dodekeract/codements)

[Node.js](https://nodejs.org)/JavaScript library to align code & comments.

## Installation
**Basic**: ````npm install codements````

**As Dependency**: ````npm install codements --save````

**Require in Node**: ````var codements = require('codements');````

## codements.SplitView
Creates this type of codement:
````javascript
var lineOfCode = true;           // boolean variable
function test () {return 'nope'} // I know you don't actually like writing unit-tests
[a,b] = [b,a];                   // swapping pointless variables in ES6
````

### Example
````javascript
var codements = require('codements');

var parser = new codements.SplitView();
parser.addLine('var lineOfCode = true;', 'boolean variable');
parser.addLine('function test () {return \'nope\'}', 'I know you don\'t actually like writing unit-tests');
parser.addLine('[a,b] = [b,a];', 'swapping pointless variables in ES6');

console.log(parser.render());
````
