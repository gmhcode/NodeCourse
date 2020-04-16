const chalk = require('chalk')
const yargs = require('yargs')
// const getNotes = require('./notes.js')
const print = console.log


const command = process.argv[2]
/*
....###....########..########.
...##.##...##.....##.##.....##
..##...##..##.....##.##.....##
.##.....##.##.....##.##.....##
.#########.##.....##.##.....##
.##.....##.##.....##.##.....##
.##.....##.########..########.
*/
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body description',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    print('Title: ' + argv.title + '\nBody: ' + argv.body)
    // print('adding a new note',argv)
  }
})
/*
.########..########.##.....##..#######..##.....##.########
.##.....##.##.......###...###.##.....##.##.....##.##......
.##.....##.##.......####.####.##.....##.##.....##.##......
.########..######...##.###.##.##.....##.##.....##.######..
.##...##...##.......##.....##.##.....##..##...##..##......
.##....##..##.......##.....##.##.....##...##.##...##......
.##.....##.########.##.....##..#######.....###....########
*/
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    print('Removing the note')
  }
})

/*
.##.......####..######..########
.##........##..##....##....##...
.##........##..##..........##...
.##........##...######.....##...
.##........##........##....##...
.##........##..##....##....##...
.########.####..######.....##...
*/
yargs.command({
  command: 'list',
  describe: 'List out your notes.',
  handler: function (){
    print('Listing out all notes')
  }
})
/*
.########..########....###....########.
.##.....##.##.........##.##...##.....##
.##.....##.##........##...##..##.....##
.########..######...##.....##.##.....##
.##...##...##.......#########.##.....##
.##....##..##.......##.....##.##.....##
.##.....##.########.##.....##.########.
*/
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function (){
    print('Reading a note')
  }
})

yargs.parse()

// print(yargs.argv)




// if (command === 'add') {
//   print('adding note!')
// } else if (command === 'remove') {
//   print('Removing note!')
// }