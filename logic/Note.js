const newNoteTitle = document.getElementById("new-note-title");
const newNoteBody = document.getElementById("new-note-body");
const newNotePinButton = document.getElementById("new-note-pin-button");
const noteListPinned = document.getElementById("note-list-pinned");
const noteListOthers = document.getElementById("note-list-others");

let notes = [];

function Note(title, body, date, isPinned, isArchived, isTrashed) {
  this.title = title;
  this.body = body;
  this.date = date;
  this.isPinned = isPinned;
  this.isArchived = isArchived;
  this.isTrashed = isTrashed;
}

function clearNewNoteInputs() {
  newNoteTitle.value = "";
  newNoteBody.value = "";
}

// FIXME: it doensn't show local storage notes, just shows new note
function showNote() {
  const newNote = document.createElement("div");
  newNote.classList.add("note-wrapper");
  newNote.innerHTML = `<button class="button-icon button-select-note">
    <span class="material-symbols-outlined icon">
      check_circle
    </span>
  </button>
  <div class="note">
    <header class="l-flex-row note-header">
      <span class="note-header-title" id="note-title">${newNoteTitle.value}</span>
      <button class="button-icon button-icon-small">
        <span class="material-symbols-outlined icon icon-pin">
          push_pin
        </span>
      </button>
    </header>
    <div class="note-body" id="note-body">
      ${newNoteBody.value}
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
  </div>`;
  noteListOthers.insertBefore(newNote, noteListOthers.firstChild);
}

function saveNotes() {
  localStorage.notes = JSON.stringify(notes);
  console.log(localStorage.notes);
}

// FIXME: it will cuase problem. check what is the real type of not having notes in localSt
function getNotes() {
  if (localStorage.getItem("notes") !== null) {
    notes = JSON.parse(localStorage.notes);
  }
}

function initializeNote() {
  if (newNoteTitle.value.trim() !== "" || newNoteBody.value.trim() !== "") {
    return new Note(
      newNoteTitle.value,
      newNoteBody.value,
      Date.now(),
      false,
      false,
      false
    );
  }
}

// function pinNote(){
//     newNotePinButton.addEventListener()
// }

export function createNote() {
  let note = initializeNote();
  getNotes();
  notes.push(note);
  showNote();
  saveNotes();
  clearNewNoteInputs();
}
