let hamburgerMenu = document.getElementById("hamburger-menu")
let navbar = document.getElementById("navbar")
let searchInput = document.getElementById("search-input")
let searchBar = document.getElementById("search-bar")
let buttonSearch = document.getElementById("button-search")
let buttonCloseSearchbar = document.getElementById("button-close-searchbar")
let newNoteWrapper = document.getElementById("new-note-wrapper")
let newNoteShortcut = document.getElementById("new-note-shortcut")

function toggleNavbar(){
    if (navbar.classList.contains("is-close")){
        navbar.classList.remove("is-close")

    } else {
        navbar.classList.add("is-close")
    }
}

searchInput.addEventListener("focus", () => {
    searchBar.classList.add("is-focused")
})

searchInput.addEventListener("focusout", () => {
    searchBar.classList.remove("is-focused")
})

buttonSearch.addEventListener("click", () => {
    searchBar.classList.add("is-focused")
})

buttonCloseSearchbar.addEventListener("click", () => {
    searchBar.classList.remove("is-focused")
})

newNoteWrapper.querySelector("#new-note-shortcut").querySelector("input").addEventListener("focus", () => {
    newNoteWrapper.classList.remove("is-view")
    newNoteWrapper.classList.add("is-edit")
    newNoteWrapper.querySelector("#new-note-shortcut-expanded").querySelector("#new-note-body").focus()
})


newNoteWrapper.querySelector("#new-note-shortcut-expanded").querySelector("#new-note-body").addEventListener("focusout", () => {
    newNoteWrapper.querySelector("#new-note-shortcut").querySelector("input").focus()
    newNoteWrapper.classList.remove("is-edit")
    newNoteWrapper.classList.add("is-view") 
})

newNoteWrapper.querySelector("#new-note-shortcut-expanded").querySelector("#button-close").addEventListener("click", () => {
    newNoteWrapper.querySelector("#new-note-shortcut").querySelector("input").focus()
    newNoteWrapper.classList.remove("is-edit")
    newNoteWrapper.classList.add("is-view") 
})



