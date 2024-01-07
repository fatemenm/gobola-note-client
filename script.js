let hamburgerMenu = document.getElementById("hamburger-menu")
let navbar = document.getElementById("navbar")
let searchInput = document.getElementById("search-input")
let searchBar = document.getElementById("search-bar")

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

