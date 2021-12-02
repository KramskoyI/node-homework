const fs = require('fs');

function getNotes() {
  try {
    const notesBuffer = fs.readFileSync('notes.json');
    return JSON.parse(notesBuffer.toString());
  } catch (err) {
    return [];
  }
}

function addNote(title, body) {
  const notes = getNotes();
  const titles = notes.map((note) => note.title);

  if (titles.includes(title)) {
    return;
  }

  notes.push({ title, body });

  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

module.exports = {
  addNote
};

