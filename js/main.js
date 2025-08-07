console.log('Welcome to the world of Pokemon!')

const hamClose = document.querySelectorAll(".close-button")
const infoMenu = document.querySelector("#game-info-menu")
const activityMenu = document.querySelector("#activity-menu")
const infoButton = document.querySelector("#game-info-button")
const activityButton = document.querySelector("#activity-button")
const gameinfoMobile = document.querySelector("#gameinfo-mobile-menu")
const activityMobile = document.querySelector("#activity-mobile-menu")
const gameinfoMobileButton = document.querySelector(".gameinfo-mobile-button")
const activityMobileButton = document.querySelector(".activity-mobile-button")
const hamMenu = document.querySelector("#hamburger-menu")
const mainMenu = document.querySelector("#main-mobile-menu")

function hamburgerOpen() {
    mainMenu.style.visibility = "visible"
    mainMenu.style.opacity = "1"
}

function hamBurgerClose() {
    if (this.parentNode.parentNode.style.visibility = "visible") {
        this.parentNode.parentNode.style.opacity = "0",
        this.parentNode.parentNode.style.visibility = "hidden"
    }

    hamClose.forEach(close => close.textContent = "X")
}

function openInfoMenu() {
    if (infoMenu.style.display === "none") {
        infoMenu.style.display = "flex"
    } else (
        infoMenu.style.display = "none"
    )

    if (activityMenu.style.display = "flex") {
        activityMenu.style.display = "none"
    }
}

function openActivityMenu() {
    if (activityMenu.style.display === "none") {
        activityMenu.style.display = "flex"
    } else (
        activityMenu.style.display = "none"
    )

    if (infoMenu.style.display = "flex") {
        infoMenu.style.display = "none"
    }
}

function openGameInfoMobileMenu() {
    gameinfoMobile.style.visibility = "visible"
    gameinfoMobile.style.opacity = "1"

    hamClose.forEach(close => close.textContent = "←")
}

function openActivityMobileMenu() {
    activityMobile.style.visibility = "visible"
    activityMobile.style.opacity = "1"

    hamClose.forEach(close => close.textContent = "←")
}

function setDefault() {
    activityMenu.style.display = "none"
    infoMenu.style.display = "none"
}

setDefault()

infoButton.addEventListener("click", openInfoMenu)
activityButton.addEventListener("click", openActivityMenu)
hamMenu.addEventListener("click", hamburgerOpen)
hamClose.forEach(close => close.addEventListener("click", hamBurgerClose))
gameinfoMobileButton.addEventListener("click", openGameInfoMobileMenu)
activityMobileButton.addEventListener("click", openActivityMobileMenu)