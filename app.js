const yargs = require('yargs');
const { addNote } = require('./notes');
const { deleteNote } = require('./notes');
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'title of a note',
      demandOption: true
    },
    body: {
      describe: 'message of a note'
    }
  },
  handler: function (args) {
    addNote(args.title , args.body);
  }
})
yargs.command({
  command: 'delete',
  describe: 'Delete a note',
  builder: {
    title: {
      describe: 'title of a note',
      demandOption: true
    },
    body: {
      describe: 'message of a note'
    }
  },
  handler: function (args) {
    deleteNote(args.title);
  }
  
})

yargs.parse();
