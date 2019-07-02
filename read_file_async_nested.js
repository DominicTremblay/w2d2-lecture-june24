const fs = require('fs');

const readPicture = (filename, cb) => {
  console.log(`Reading picture ${filename}`);
  console.log('-------------------------');
  const path = `./pictures/${filename}`;

  fs.readFile(path, (err, image) => {
    if (err) {
      console.log(err);
    }

    console.log(`Finished reading picture ${filename}...`);

    setTimeout(() => cb(null, filename), 1000);
  });
};

readPicture('cat1.jpg', (err, filename) => {
  if (err) {
    console.log(err);
  }
  console.log(`performing some db operation for ${filename}`);
});

readPicture('cat2.jpg', (err, filename) => {
  if (err) {
    console.log(err);
  }
  console.log(`performing some db operation for ${filename}`);
});

readPicture('cat3.jpg', (err, filename) => {
  if (err) {
    console.log(err);
  }
  console.log(`performing some db operation for ${filename}`);
});
