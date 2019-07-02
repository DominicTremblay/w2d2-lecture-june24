const fs = require('fs');

console.log('Reading picture 1...');
fs.readFileSync('./pictures/cat1.jpg');
console.log('Finished reading picture 1...');

console.log('-------------------------');

console.log('Reading picture 2...');
fs.readFileSync('./pictures/cat2.jpg');
console.log('Finished reading picture 2...');

console.log('-------------------------');

console.log('Reading picture 3...');
fs.readFileSync('./pictures/cat3.jpg');
console.log('Finished reading picture 3...');
