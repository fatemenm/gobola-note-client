export function saveNotes(notes) {
  localStorage.notes = JSON.stringify(notes);
  console.log(localStorage.notes);
}

// FIXME: null condition
export function getNotes() {
  if (localStorage.getItem("notes") !== undefined) {
    return JSON.parse(localStorage.notes);
  }
}

export function saveNote(note) {
  const notes = getNotes()
  notes.push(note)
  saveNotes(notes)
}
