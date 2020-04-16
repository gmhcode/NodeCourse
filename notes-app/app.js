const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Greg')
fs.appendFileSync('notes.txt', '\n I appended to this file')