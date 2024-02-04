let body = document.getElementsByTagName("body");
let header = document.getElementById("header");
let hamburgerMenu = document.getElementById("hamburger-menu");
let navbar = document.getElementById("navbar");
let navbarMenu = document.getElementById("navbar-menu")
let searchInput = document.getElementById("search-input");
let searchBar = document.getElementById("search-bar");
let buttonSearch = document.getElementById("button-search");
let buttonCloseSearchbar = document.getElementById("button-close-searchbar");
let newNoteWrapper = document.getElementById("new-note-wrapper");
let newNoteShortcut = document.getElementById("new-note-shortcut");
let newNote = document.getElementById("new-note");
const newNoteHeaderInput = document.getElementById("new-note-header-input");
const newNoteBodyText = document.getElementById("new-note-body-text")
const buttonCloseNewNote = document.getElementById("button-close-new-note");
let media860px = window.matchMedia("(max-width: 860px)");
let media600px = window.matchMedia("(max-width: 600px)");

let notes = []

function clearNewNoteInputs(){
  newNoteHeaderInput.value = ""
  newNoteBodyText.value = ""
}

function createNote(){
  if(localStorage.getItem("notes") !== null){
    notes = JSON.parse(localStorage.notes)
  }
  notes.push({
    title: newNoteHeaderInput.value,
    body: newNoteBodyText.value,
    date: Date.now(),
    isPinned: false,
    isArchived: false,
    isTrashed: false
  })
  clearNewNoteInputs()
  console.log(notes)
  localStorage.notes = JSON.stringify(notes)
  console.log(localStorage.notes)
}

buttonCloseNewNote.addEventListener("click", createNote)

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
  buttonCloseSearchbar.classList.remove("is-hidden")
});
searchInput.addEventListener("focusout", () => {
  searchBar.classList.remove("is-focused");
});
buttonSearch.addEventListener("click", () => {
  searchBar.classList.add("is-focused");
  buttonCloseSearchbar.classList.remove("is-hidden")
});
buttonCloseSearchbar.addEventListener("click", () => {
  searchBar.classList.remove("is-focused");
  buttonCloseSearchbar.classList.add("is-hidden")
});

// expand and shrink new note input
function shrinkNewNoteInput() {
  newNoteShortcut.querySelector("input").focus()
  newNoteWrapper.classList.add("is-new-note-input-shrunken")
  newNoteWrapper.classList.remove("is-new-note-input-expanded")
}
function expandNewNoteInput() {
  newNoteWrapper.classList.remove("is-new-note-input-shrunken")
  newNoteWrapper.classList.add("is-new-note-input-expanded")
  // newNoteBodyText.focus()
}
newNoteShortcut.querySelector("input").addEventListener("focus", expandNewNoteInput)
buttonCloseNewNote.addEventListener("click", shrinkNewNoteInput)
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
  if(media600px.matches){
    if(!(navbar.classList.contains("is-minimized"))){
      navbar.classList.add("is-minimized")
    }
  }
})
// FIXME: doesn't work after refresh
if (document.documentElement.clientWidth < media600px) {
    if(!(navbar.classList.contains("is-minimized"))){
      navbar.classList.add("is-minimized")
      console.log("here here here")
  }
}

window.onresize = () => {
  if (document.documentElement.clientWidth < 376) {
    document.querySelector("meta[name=viewport]").setAttribute(
          'content', 
          'width=device-width, initial-scale=0.6, maximum-scale=2.0, user-scalable=1');
  }
}
if (document.documentElement.clientWidth < 376) {
  document.querySelector("meta[name=viewport]").setAttribute(
        'content', 
        'width=device-width, initial-scale=0.6, maximum-scale=2.0, user-scalable=1');
}
