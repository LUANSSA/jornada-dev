var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split(' ');


console.log(lines[0]);
console.log(lines[1]);
console.log(`${lines[0] + lines[0]} casas brancas e ${1} casas pretas`);
console.log(26 * 22294);