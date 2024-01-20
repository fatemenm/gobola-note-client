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

// toggle navbar
function toggleNavbar() {
    if (navbar.classList.contains("is-close")) {
        navbar.classList.remove("is-close")
    } else {
        navbar.classList.add("is-close")
    }
}

// searchbar
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

// new note shortcut
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


let media800px = window.matchMedia("(max-width: 800px)")
media800px.addEventListener("change", () => {
    let headerRightToolbarMenu = header.querySelector(".l-header-right-part").firstElementChild;

    if (media800px.matches) {
        let searchBarFirstSpan = searchBar.querySelector("span:nth-child(1)")
        let headerLeftPart = document.querySelector(".l-header-left-part")
        let buttonSearchOutLi = headerRightToolbarMenu.querySelector("li:nth-child(1)")
        let buttonSearchOut = buttonSearchOutLi.querySelector("button")

        function closeSearchBar() {
            headerLeftPart.querySelector("menu").classList.remove("is-hidden")
            searchBar.classList.remove("is-focused")
            searchBar.classList.add("is-hidden")
            searchBarFirstSpan.innerHTML = "search"
            buttonSearchOutLi.classList.remove("is-hidden")
        }
        function openSearchBar() {
            buttonSearchOutLi.classList.add("is-hidden")
            headerLeftPart.querySelector("menu").classList.add("is-hidden")
            searchBarFirstSpan.innerHTML = "arrow_back"
            searchBar.classList.remove("is-hidden")
            searchBar.classList.add("is-focused")
            searchInput.focus()
        }

        buttonSearchOutLi.classList.remove("is-hidden")

        // open search-bar handler
        buttonSearchOut.addEventListener("click", openSearchBar)

        // close search-bar handler
        searchInput.addEventListener("focusout", closeSearchBar);
        if (searchBarFirstSpan.innerHTML === "arrow_back") {
            searchBar.querySelector("button:nth-child(1)").addEventListener("click", closeSearchBar)
        }
        buttonCloseSearchbar.addEventListener("click", closeSearchBar)

        //minimize and maximize the navbar
        if (!(navbar.classList.contains("is-close"))) {
            navbar.classList.add("is-close")
        }
        if (!(searchBar.classList.contains("is-hidden"))) {
            searchBar.classList.add("is-hidden")
        }

    } else {
        // headerRightToolbarMenu.querySelector("li:has(> .button-search)").remove()
        if (navbar.classList.contains("is-close")) {
            navbar.classList.remove("is-close")
        }
        if ((searchBar.classList.contains("is-hidden"))) {
            searchBar.classList.remove("is-hidden")
        }
    }
})



