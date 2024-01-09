let hamburgerMenu = document.getElementById("hamburger-menu")
let navbar = document.getElementById("navbar")
let searchInput = document.getElementById("search-input")
let searchBar = document.getElementById("search-bar")
let buttonSearch = document.getElementById("button-search")
let buttonCloseSearchbar = document.getElementById("button-close-searchbar")
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



