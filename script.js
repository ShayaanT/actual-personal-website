const hamburger = document.getElementsByClassName("hamburger")[0]
const navmenu = document.getElementsByClassName("nav-menu")[0]

hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("active")
})
