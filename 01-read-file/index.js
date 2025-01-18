const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(filePath, { encoding: 'utf8' });

stream.on('data', (chunk) => {
  process.stdout.write(chunk);
});

stream.on('error', (error) => {
  console.error('Error reading the file:', error.message);
});

stream.on('end', () => {
  console.log('\nFile reading completed.');
});
