let body = document.getElementsByTagName("body");
let header = document.getElementById("header");
let hamburgerMenu = document.getElementById("hamburger-menu");
let navbar = document.getElementById("navbar");
let navbarMenu = document.getElementById("navbar-menu");
let searchInput = document.getElementById("search-input");
let searchBar = document.getElementById("search-bar");
let buttonSearch = document.getElementById("button-search");
let buttonCloseSearchbar = document.getElementById("button-close-searchbar");
let newNoteWrapper = document.getElementById("new-note-wrapper");
let newNoteShortcut = document.getElementById("new-note-shortcut");
let newNote = document.getElementById("new-note");
const newNoteTitle = document.getElementById("new-note-title");
const newNoteBody = document.getElementById("new-note-body");
const buttonCloseNewNote = document.getElementById("button-close-new-note");
const noteListPinned = document.getElementById("note-list-pinned");
const noteListOthers = document.getElementById("note-list-others");
let media860px = window.matchMedia("(max-width: 860px)");
let media600px = window.matchMedia("(max-width: 600px)");

// TODO: esm 
let notes = [];

function clearNewNoteInputs() {
  newNoteTitle.value = "";
  newNoteBody.value = "";
}

function showNote(title, body) {
  let newNote = document.createElement("div");
  newNote.classList.add("note-wrapper");
  newNote.innerHTML = `<button class="button-icon button-select-note">
    <span class="material-symbols-outlined icon">
      check_circle
    </span>
  </button>
  <div class="note">
    <header class="l-flex-row note-header">
      <span class="note-header-title" id="note-title">${title}</span>
      <button class="button-icon button-icon-small">
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
  </div>`;
  console.log(newNote);
  noteListOthers.insertBefore(newNote, noteListOthers.firstChild);
}

function createNote() {
  // FIXME: it will cuase problem. check what is the real type of not having notes in localSt
  if (localStorage.getItem("notes") !== null) {
    notes = JSON.parse(localStorage.notes);
  }
  if (newNoteTitle.value.trim() !== "" || newNoteBody.value.trim() !== "") {
    notes.push({
      title: newNoteTitle.value,
      body: newNoteBody.value,
      date: Date.now(),
      isPinned: false,
      isArchived: false,
      isTrashed: false,
    });
  }
  showNote(newNoteTitle.value, newNoteBody.value);
  console.log(notes);
  localStorage.notes = JSON.stringify(notes);
  console.log(localStorage.notes);
  clearNewNoteInputs();
}

buttonCloseNewNote.addEventListener("click", createNote);

// toggle navbar
function toggleNavbar() {
  if (navbar.classList.contains("is-minimized")) {
    navbar.classList.remove("is-minimized");
  } else {
    navbar.classList.add("is-minimized");
  }
}

// searchbar
searchInput.addEventListener("focus", () => {
  searchBar.classList.add("is-focused");
  buttonCloseSearchbar.classList.remove("is-hidden");
});
searchInput.addEventListener("focusout", () => {
  searchBar.classList.remove("is-focused");
});
buttonSearch.addEventListener("click", () => {
  searchBar.classList.add("is-focused");
  buttonCloseSearchbar.classList.remove("is-hidden");
});
buttonCloseSearchbar.addEventListener("click", () => {
  searchBar.classList.remove("is-focused");
  buttonCloseSearchbar.classList.add("is-hidden");
});

// expand and shrink new note input
function shrinkNewNoteInput() {
  newNoteShortcut.querySelector("input").focus();
  newNoteWrapper.classList.add("is-new-note-input-shrunken");
  newNoteWrapper.classList.remove("is-new-note-input-expanded");
}
function expandNewNoteInput() {
  newNoteWrapper.classList.remove("is-new-note-input-shrunken");
  newNoteWrapper.classList.add("is-new-note-input-expanded");
  // newNoteBodyText.focus()
}
newNoteShortcut
  .querySelector("input")
  .addEventListener("focus", expandNewNoteInput);
buttonCloseNewNote.addEventListener("click", shrinkNewNoteInput);
// newNoteBodyText.addEventListener("focusout",shrinkNewNoteInput)

// media queries
media860px.addEventListener("change", () => {
  let headerRightToolbarMenu = header.querySelector(
    ".l-header-right-part"
  ).firstElementChild;

  if (media860px.matches) {
    let searchBarFirstSpan = searchBar.querySelector("span:nth-child(1)");
    let headerLeftPart = document.querySelector(".l-header-left-part");
    let buttonSearchOutLi =
      headerRightToolbarMenu.querySelector("li:nth-child(1)");
    let buttonSearchOut = buttonSearchOutLi.querySelector("button");

    function closeSearchBar() {
      headerLeftPart.querySelector("menu").classList.remove("is-hidden");
      searchBar.classList.remove("is-focused");
      searchBar.classList.add("is-hidden");
      searchBarFirstSpan.innerHTML = "search";
      buttonSearchOutLi.classList.remove("is-hidden");
    }
    function openSearchBar() {
      buttonSearchOutLi.classList.add("is-hidden");
      headerLeftPart.querySelector("menu").classList.add("is-hidden");
      searchBarFirstSpan.innerHTML = "arrow_back";
      searchBar.classList.remove("is-hidden");
      searchBar.classList.add("is-focused");
      searchInput.focus();
    }

    buttonSearchOutLi.classList.remove("is-hidden");

    // open search-bar handler
    buttonSearchOut.addEventListener("click", openSearchBar);

    // close search-bar handler
    searchInput.addEventListener("focusout", closeSearchBar);
    if (searchBarFirstSpan.innerHTML === "arrow_back") {
      searchBar
        .querySelector("button:nth-child(1)")
        .addEventListener("click", closeSearchBar);
    }
    buttonCloseSearchbar.addEventListener("click", closeSearchBar);

    //minimize and maximize the navbar
    if (!navbar.classList.contains("is-minimized")) {
      navbar.classList.add("is-minimized");
    }
    if (!searchBar.classList.contains("is-hidden")) {
      searchBar.classList.add("is-hidden");
    }
  } else {
    // headerRightToolbarMenu.querySelector("li:has(> .button-search)").remove()
    if (navbar.classList.contains("is-minimized")) {
      navbar.classList.remove("is-minimized");
    }
    if (searchBar.classList.contains("is-hidden")) {
      searchBar.classList.remove("is-hidden");
    }
  }
});
media600px.addEventListener("change", () => {
  if (media600px.matches) {
    if (!navbar.classList.contains("is-minimized")) {
      navbar.classList.add("is-minimized");
    }
  }
});
// FIXME: doesn't work after refresh
if (document.documentElement.clientWidth < media600px) {
  if (!navbar.classList.contains("is-minimized")) {
    navbar.classList.add("is-minimized");
    console.log("here here here");
  }
}

window.onresize = () => {
  if (document.documentElement.clientWidth < 376) {
    document
      .querySelector("meta[name=viewport]")
      .setAttribute(
        "content",
        "width=device-width, initial-scale=0.6, maximum-scale=2.0, user-scalable=1"
      );
  }
};
if (document.documentElement.clientWidth < 376) {
  document
    .querySelector("meta[name=viewport]")
    .setAttribute(
      "content",
      "width=device-width, initial-scale=0.6, maximum-scale=2.0, user-scalable=1"
    );
}
