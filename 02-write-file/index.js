const fs = require('fs');
const path = require('path');
const readline = require('readline');
const filePath = path.join(__dirname, 'output.txt');
const fileStream = fs.createWriteStream(filePath, { flags: 'a' });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('hello! type some text(type exit to go out');

rl.on('line', (input) => {
  if (input.trim().toLowerCase() === 'exit') {
    console.log('Goodbye!');
    rl.close();
    fileStream.end();
  } else {
    fileStream.write(input + '\n', (err) => {
      if (err) console.error('Error writing to file:', err);
    });
  }
});

rl.on('close', () => {
  console.log('Your input has been saved to "output.txt".');
});
