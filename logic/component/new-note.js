import * as StateManager from "../state.js"
import { Note } from "../entity/note.js"

const titleInput = document.getElementById("new-note-title")
const bodyInput = document.getElementById("new-note-body")
const closeBtn = document.getElementById("button-close-new-note")

closeBtn.addEventListener("click", createNote)

function validateForm(form) {
  const errors = []
  if (form.title.trim() === "" && form.body.trim() === "") {
    errors.push(
      new Error("note title and body can not be empty at the same time.")
    )
  }
  return errors
}

function readForm() {
  const title = titleInput.value
  const body = bodyInput.value
  return {
    title,
    body,
  }
}

function resetForm() {
  titleInput.value = ""
  bodyInput.value = ""
}

function createNote() {
  const form = readForm()
  const errors = validateForm(form)
  if (errors.length != 0) {
    console.error(errors)
    return
  }
  const note = new Note(form.title, form.body)
  StateManager.addNote(note)
  resetForm()
}
