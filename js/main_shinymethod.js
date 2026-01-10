const baseURL = "https://littlerootdreams.com/lumen/public/"
const rankSelect = document.querySelector("#rank-select")

function populateList() {
    fetch(`${baseURL}gen/all-no-alt/dex`)
    .then(response => response.json())
    .then(function(response) {
        console.log(response)
        response.forEach(pokemon => {
            const option = document.createElement("option")

            option.value = pokemon.number
            option.innerText = pokemon.name
            option.setAttribute("data-key", `${pokemon.id}`)

            rankSelect.appendChild(option)
        })
    })
    .catch(error => {
    });
}

populateList()

function displayShinyMethods() {
    const thumbnail = document.querySelector("#ranker-thumbnail")
    const key = `${this.options[this.selectedIndex].dataset.key}`
    const bigImage = document.createElement("img")
    const rankerCon = document.querySelector("#ranker-con")
    const rankerInfoCon = document.querySelector("#ranker-info-con")
    const previousImage = document.querySelector("#ranker-big")

    if (previousImage) {
        previousImage.remove()
    }

    rankerCon.innerHTML = ""
    
    bigImage.src = `images/pokemon_images/shiny_forms/${this.value}.png`
    bigImage.setAttribute("alt", `Picture of Shiny ${this.options[this.selectedIndex].innerText}`)
    bigImage.style.filter = "drop-shadow(3px 3px black)"
    bigImage.setAttribute("id", "ranker-big")
    bigImage.setAttribute("class", "m-col-span-2")

    thumbnail.src = `images/pokemon_images/shiny_forms/${this.value}.png`
    thumbnail.setAttribute("alt", `Thumbnail of Shiny ${this.options[this.selectedIndex].innerText}`)
    thumbnail.style.filter = "drop-shadow(3px 3px black)"

    rankerInfoCon.appendChild(bigImage)

    fetch(`${baseURL}methods/${key}`)
    .then(response => response.json())
    .then(function(response) {
        response.forEach(method => {
            const div = document.createElement("div")
            const cover = document.createElement("img")
            const infoDiv = document.createElement("div")
            const oddsDiv = document.createElement("div")
            const noCharmText = document.createElement("p")
            const charmText = document.createElement("p")
            const vote = document.createElement("p")

            div.setAttribute("class", "method-con")
            infoDiv.setAttribute("class", "information")

            cover.src = `../images/game_combos/${method.game}.png`
            cover.setAttribute("class", "method-cover")

            noCharmText.innerHTML = `${method.odds_nocharm}`
            charmText.innerHTML = `${method.odds_charm}`

            oddsDiv.appendChild(noCharmText)
            oddsDiv.appendChild(charmText)

            vote.textContent = `${method.votes}`

            div.appendChild(cover)
            div.appendChild(infoDiv)
            div.appendChild(oddsDiv)
            div.appendChild(vote)
            rankerCon.appendChild(div)
        })
    })
    .catch(error => {
    });
}

rankSelect.addEventListener("change", displayShinyMethods)