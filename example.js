var codements = require('./');

var parser = new codements.SplitView();
parser.addLine('var lineOfCode = true;', 'boolean variable');
parser.addLine('function test () {return \'nope\'}', 'I know you don\'t actually like writing unit-tests');
parser.addLine('[a,b] = [b,a];', 'swapping pointless variables in ES6');

console.log(parser.render());
