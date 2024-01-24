let body = document.getElementsByTagName("body");
let header = document.getElementById("header");
let hamburgerMenu = document.getElementById("hamburger-menu");
let navbar = document.getElementById("navbar");
let searchInput = document.getElementById("search-input");
let searchBar = document.getElementById("search-bar");
let buttonSearch = document.getElementById("button-search");
let buttonCloseSearchbar = document.getElementById("button-close-searchbar");
let newNoteWrapper = document.getElementById("new-note-wrapper");
let newNoteShortcut = document.getElementById("new-note-shortcut");
let newNote = document.getElementById("new-note")

// toggle navbar
function toggleNavbar() {
  if (navbar.classList.contains("is-close")) {
    navbar.classList.remove("is-close");
  } else {
    navbar.classList.add("is-close");
  }
}

// searchbar
searchInput.addEventListener("focus", () => {
  searchBar.classList.add("is-focused");
});
searchInput.addEventListener("focusout", () => {
  searchBar.classList.remove("is-focused");
});
buttonSearch.addEventListener("click", () => {
  searchBar.classList.add("is-focused");
});
buttonCloseSearchbar.addEventListener("click", () => {
  searchBar.classList.remove("is-focused");
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
  newNote.querySelector(".new-note-body-text").focus()
}
newNoteShortcut.querySelector("input").addEventListener("focus", expandNewNoteInput)
newNote.querySelector("#button-close-new-note").addEventListener("click", shrinkNewNoteInput)
newNote.querySelector(".new-note-body-text").addEventListener("focusout",shrinkNewNoteInput)


let media860px = window.matchMedia("(max-width: 860px)");
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

    // FIXME: change class name is-close to is-minimized
    //minimize and maximize the navbar
    if (!navbar.classList.contains("is-close")) {
      navbar.classList.add("is-close");
    }
    if (!searchBar.classList.contains("is-hidden")) {
      searchBar.classList.add("is-hidden");
    }
  } else {
    // headerRightToolbarMenu.querySelector("li:has(> .button-search)").remove()
    if (navbar.classList.contains("is-close")) {
      navbar.classList.remove("is-close");
    }
    if (searchBar.classList.contains("is-hidden")) {
      searchBar.classList.remove("is-hidden");
    }
  }
});

let media425px = window.matchMedia("(max-width: 425px)");
media425px.addEventListener("change", () => {
  // header.querySelectorAll("button").classList.remove("button-large")
  // header.querySelectorAll("button").classList.add("button-small")
  // console.log(header.querySelectorAll("button"))
  // let headerButtons = header.querySelectorAll("button")
  // headerButtons.forEach(button => {
  //     button.classList.remove("button-large")
  //     button.classList.remove("button-medium")
  //     button.classList.add("button-small")
  // });
});
