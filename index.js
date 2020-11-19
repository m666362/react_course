const fs = require('fs');
fs.writeFileSync('note.txt', "Hello there");
try {
    fs.appendFileSync('note.txt', fs.readFileSync('note.txt'));
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    /* Handle the error */
  }