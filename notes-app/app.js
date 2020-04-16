const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
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
    notes.addNote(argv.title,argv.body)
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
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }   
  },
  handler: function (argv) {
    notes.removeNote(argv.title)
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
