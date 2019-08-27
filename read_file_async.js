const fs = require('fs');

console.log('Reading picture 1...');
fs.readFile('./pictures/cat1.jpg', (err, image) => {
  if (err) {
    throw err;
  }

  console.log('Finished reading picture 1...');
  // console.log(image);
});

console.log('-------------------------');

console.log('Reading picture 2...');
fs.readFile('./pictures/cat2.jpg', (err, image) => console.log('Finished reading picture 2...'));

console.log('-------------------------');

console.log('Reading picture 3...');
fs.readFile('./pictures/cat3.jpg', (err, image) => console.log('Finished reading picture 3...'));
