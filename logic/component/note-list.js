import * as StateManager from "../state.js"
import { Note } from "../entity/note.js"

StateManager.on("noteAdded", noteAddedHandler)
StateManager.on("appStarted", appStartedHandler)

/**
 *
 * @param {Note} note
 */
function addNote(note) {
  let noteList
  if (note.isPinned === true) {
    noteList = document.getElementById("note-list-pinned")
  } else {
    noteList = document.getElementById("note-list-others")
  }
  noteList.insertBefore(createNote(note), noteList.firstChild)
}


function createNote({title, body}){
  const noteElement = document.createElement("div")
  noteElement.classList.add("note-wrapper")
  noteElement.innerHTML = `<button class="button-icon button-select-note">
  <span class="material-symbols-outlined icon">
    check_circle
  </span>
</button>
<div class="note">
  <header class="l-flex-row note-header">
    <span class="note-header-title" id="note-title">${title}</span>
    <button class="button-icon button-icon-small" id="note-pin-button">
      <span class="material-symbols-outlined icon icon-pin">
        push_pin
      </span>
    </button>
  </header>
  <div class="note-body" id="note-body">
    ${body}
  </div>
  <div class="l-flex-row note-toolbar">
    <button class="button-icon button-icon-small">
      <span class="material-symbols-outlined icon">
        notification_add
      </span>
    </button>
    <button class="button-icon button-icon-small">
      <span class="material-symbols-outlined icon">
        person_add
      </span>
    </button>
    <button class="button-icon button-icon-small">
      <span class="material-symbols-outlined icon">
        palette
      </span>
    </button>
    <button class="button-icon button-icon-small">
      <span class="material-symbols-outlined icon">
        image
      </span>
    </button>
    <button class="button-icon button-icon-small">
      <span class="material-symbols-outlined icon">
        archive
      </span>
    </button>
    <button class="button-icon button-icon-small">
      <span class="material-symbols-outlined icon">
        more_vert
      </span>
    </button>
  </div></div>`
  return noteElement
}

function initList(notes){
  Object.values(notes).forEach(addNote)
}

/**
 *
 * @param {Event} event
 */
export function noteAddedHandler(event) {
  addNote(event.payload.note)
}

export function appStartedHandler(event){
  initList(event.payload.notes)
}
