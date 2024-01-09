let body = document.getElementsByTagName("body")
let header = document.getElementById("header")
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

// body.addEventListener("scroll", () => {
//     if(body.scrolltop === 0){
//         header.classList.add("has-shadow")
//     } else{
//         header.classList.remove("has-shadow")
//     }
// })

let media700px = window.matchMedia("(max-width: 750px)")
media700px.addEventListener("change", () => {
    if(media700px.matches){
        if(header.querySelector(".l-header-right-part").firstElementChild.children.length != 4){
            let menu = header.querySelector(".l-header-right-part").firstElementChild;
            let searchButton = document.createElement("button")
            searchButton.className = "button button-medium button-search" 
            let span = document.createElement("span")
            span.className = "material-symbols-outlined icon"
            span.innerHTML = "search"
            searchButton.appendChild(span)
            menu.insertBefore(document.createElement("li").appendChild(searchButton), menu.firstElementChild)
        }
    }
})



