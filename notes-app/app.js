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
  handler(argv) {
    notes.addNote(argv.title, argv.body)
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
  handler(argv) {
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
  handler() {
    notes.listNotes()
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
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNotes(argv.title)
  }
})

yargs.parse()

// print(yargs.argv)




// if (command === 'add') {
//   print('adding note!')
// } else if (command === 'remove') {
//   print('Removing note!')
// }
