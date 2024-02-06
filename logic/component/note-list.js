import * as NoteService from "../service/note.js"

NoteService.on(NoteService.EVENT_NOTE_CREATED, noteCreatedHandler)

export function createNote() {
  const newNote = document.createElement("div")
  newNote.classList.add("note-wrapper")
  newNote.innerHTML = `<button class="button-icon button-select-note">
      <span class="material-symbols-outlined icon">
        check_circle
      </span>
    </button>
    <div class="note">
      <header class="l-flex-row note-header">
        <span class="note-header-title" id="note-title">${newNoteTitle.vlaue}</span>
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
      </div>
    </div>`
}

function addNote(note) {
  console.log(note)
}

export function noteCreatedHandler(event) {
  // addNote(event.payload.note)
}
