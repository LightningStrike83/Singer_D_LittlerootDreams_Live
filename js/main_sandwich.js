const selectSandwich = document.querySelector("#active-sandwich")
const azPokemon = document.querySelectorAll(".az_pokemon")
const sandwichLegend = document.querySelector("#legend_click")
const locationButton = document.querySelectorAll(".location-button")
const topText = document.querySelector(".top-text")

let areaInfo = [
    {
        location: "Upper Field Prarie",
        desc: "The upper portion of Area Zero, starting from the entrance to just before Station 2",
        teleporter: "The fastest way to access is to jump down from the Great Crater or the Research lab",
    },

    {
        location: "Upper Field Riverside",
        desc: "The watery areas of the upper portion of Area Zero, sometimes containing waterfalls",
        teleporter: "The closest teleporter to this area is Research Station 1",
    },

    {
        location: "Upper Field Rocky Area",
        desc: "The rocky portions of the upper portion of Area Zero, usually depicted as large slopes",
        teleporter: "The closest teleporter to this area is Research Station 1",
    },

    {
        location: "Lower Field Prarie",
        desc: "The lower portion of Area Zero, starting from just before Station 2 to the giant cave entrance outside Station 3",
        teleporter: "The closest teleporter to this area is Research Station 2",
    },

    {
        location: "Lower Field Riverside",
        desc: "The watery areas of the lower portion of Area Zero, sometimes containing waterfalls",
        teleporter: "The closest teleporter to this area is Research Station 2",
    },

    {
        location: "Lower Field Rocky Area",
        desc: "The rocky portions of the lower portion of Area Zero, usually depicted as large slopes",
        teleporter: "The closest teleporter to this area is Research Station 2",
    },

    {
        location: "Small Cave",
        desc: "After using the Station 2 teleporter, go left and travel along the grassy hill. When you see an area with overhanging land, it will be on your left.",
        teleporter: "The closest teleporter to this area is Research Station 2",
    },

    {
        location: "Station 3 Cave",
        desc: "After using the Station 3 teleporter, turn right and loop around the station. The cave will be within sight as you go around.",
        teleporter: "The closest teleporter to this area is Research Station 3",
    },

    {
        location: "Waterfall Cave",
        desc: "After using the Station 3 teleporter, turn right and travel across the wall until you see a slope. From the slope, go left until you hit the water. Look to the right for an opening with a waterfall. Go behind the waterfall and look up and to the right while riding. Climb or fly up.",
        teleporter: "The closest teleporter to this area is Station 3",
    },

    {
        location: "Hidden Grassy Cave",
        desc: "After using the Station 3 teleporter, travel along the level path until you reach the tree Turn left and look for the gap between the rocks.",
        teleporter: "The closest teleporter to this area is Research Station 3",
    },

    {
        location: "Area Zero Depths",
        desc: "The depths of Area Zero; can be accessed from the giant cave entrance outside Station 3 or directly from Station 4.",
        teleporter: "The closest teleporter to this area is Research Station 4",
    },
]

function displayAZMons() {
    let type = this.value

    azPokemon.forEach(pokemon => {
        if (pokemon.classList.contains(`${type}`)) {
            pokemon.style.display = "flex"
        } else {
            pokemon.style.display = "none"
        }
    })
}

function toggleSandwichDisplay() {
    const legendInfo = document.querySelector("#legend_info")

    if (legendInfo.style.display === 'grid') {
        legendInfo.style.display = "none"
    } else {
        legendInfo.style.display = "grid"
    }
}

function openLocationDetails() {
    const azLightbox = document.querySelector("#area-info-lightbox")
    const azTitle = document.querySelector("#az-title")
    const azPic = document.querySelector("#az-pic")
    const azDesc = document.querySelector("#az-desc")
    const azTeleporter = document.querySelector("#az-teleporter")
    let n = this.dataset.button

    if (azLightbox.style.visibility === "visible") {
        azLightbox.style.visibility = "hidden"
        azLightbox.style.opacity = "0"
    } else {
        azLightbox.style.visibility = "visible"
        azLightbox.style.opacity = "1"
    }

    azTitle.textContent = areaInfo[n].location
    azPic.src = `images/sandwich/${n}.jpg`
    azPic.setAttribute("alt", `${areaInfo[n].location}`)
    azDesc.textContent = areaInfo[n].desc
    azTeleporter.textContent = areaInfo[n].teleporter
}

function toTop() {
    var x = window.matchMedia("(min-width: 728px)")
  
    if (x.matches) {
      gsap.to(window, { duration: 1.5, scrollTo: (0)})
    } else {
      gsap.to(window, { duration: 2.5, scrollTo: (0)})
    }
  }

selectSandwich.addEventListener("change", displayAZMons)
sandwichLegend.addEventListener("click", toggleSandwichDisplay)
locationButton.forEach(button => button.addEventListener("click", openLocationDetails))
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollToPlugin)});
  topText.addEventListener("click", toTop)