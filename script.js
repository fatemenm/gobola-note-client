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


function toggleNavbar() {
    if (navbar.classList.contains("is-close")) {
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

let media750px = window.matchMedia("(max-width: 750px)")
media750px.addEventListener("change", () => {
    let headerRightToolbarMenu = header.querySelector(".l-header-right-part").firstElementChild;
    let outButtonSearch

    function createSearchButton() {
        outButtonSearch = document.createElement("button")
        outButtonSearch.className = "button button-circle button-large button-search"
        outButtonSearch.id = "out-button-search"
        let span = document.createElement("span")
        span.className = "material-symbols-outlined icon"
        span.innerHTML = "search"
        outButtonSearch.appendChild(span)
        let headerRightToolbarMenuItem = document.createElement("li")
        headerRightToolbarMenuItem.appendChild(outButtonSearch)
        return headerRightToolbarMenuItem
    }

    function addSearchbutton() {
        headerRightToolbarMenu.prepend(createSearchButton(), headerRightToolbarMenu.firstElementChild)
    }

    if (media750px.matches) {
        if (headerRightToolbarMenu.querySelector("#out-button-search") === null)
            addSearchbutton()
        if (headerRightToolbarMenu.querySelector("#out-button-search") !== null)
            outButtonSearch.addEventListener("click", () => {
            })
    } else {
        headerRightToolbarMenu.querySelector("li:has(> .button-search)").remove()
        headerRightToolbarMenu.querySelector("div").remove()
    }
})



