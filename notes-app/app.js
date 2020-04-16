const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')
const print = console.log
const notes = getNotes()

print(notes)

print(validator.isEmail('greghughes988@gmail.com'))
print(chalk.green('Error'))
// const add = require('./utils.js')


// const sum = add(4,-2)

// print(sum)
