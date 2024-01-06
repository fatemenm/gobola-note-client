let hamburgerMenu = document.getElementById("hamburger-menu")
let navbar = document.getElementById("navbar")

function toggleNavbar(){

    if (navbar.classList.contains("is-close")){
        navbar.classList.remove("is-close")
      

    } else {
        navbar.classList.add("is-close")
    }
}