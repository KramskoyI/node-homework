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

function deleteNote(title) {
  const notes = getNotes();
  const titles = notes.map((note) => note.title);
  const index = titles.indexOf(title);
  
  if(index >= 0){
    notes.splice(index, 1);
  } else { console.log('Do not have Note')};

  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

module.exports = {
  addNote, deleteNote
  
};

