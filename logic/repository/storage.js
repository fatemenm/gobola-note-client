import * as StateManager from "../state.js"

StateManager.on("noteAdded", noteAddedHandler)

export function saveNotes(notes) {
  localStorage.notes = JSON.stringify(notes)
}

export function getNotes() {
  let notes  = []
  if (localStorage.getItem("notes") !== null) {
    notes = JSON.parse(localStorage.notes)
  }
  return notes
}

export function saveNote(note) {
  const notes = getNotes()
  notes.push(note)
  saveNotes(notes)
}

function noteAddedHandler(event) {
  const note = event.payload.note
  saveNote(note)
}
