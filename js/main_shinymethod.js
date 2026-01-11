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
    const bigDiv = document.createElement("div")
    const bigImage = document.createElement("img")
    const rankerCon = document.querySelector("#ranker-con")
    const rankerInfoCon = document.querySelector("#ranker-info-con")
    const previousImage = document.querySelector("#ranker-big")
    const name = document.querySelector("#ranker-box-title")

    if (previousImage) {
        previousImage.remove()
    }

    rankerCon.innerHTML = ""

    bigDiv.setAttribute("id", "ranker-support-con")
    bigDiv.setAttribute("class", "m-col-span-2")
    bigDiv.setAttribute("id", "ranker-big")
    
    bigImage.src = `images/pokemon_images/shiny_forms/${this.value}.png`
    bigImage.setAttribute("alt", `Picture of Shiny ${this.options[this.selectedIndex].innerText}`)
    bigImage.style.filter = "drop-shadow(3px 3px black)"

    thumbnail.src = `images/pokemon_images/shiny_forms/${this.value}.png`
    thumbnail.setAttribute("alt", `Thumbnail of Shiny ${this.options[this.selectedIndex].innerText}`)
    thumbnail.style.filter = "drop-shadow(3px 3px black)"

    bigDiv.appendChild(bigImage)
    rankerInfoCon.appendChild(bigDiv)
    name.textContent = `${this.options[this.selectedIndex].innerText}`

    rankerCon.style.display = "block"

    fetch(`${baseURL}methods/${key}`)
    .then(response => response.json())
    .then(function(response) {
        const length = response.length
        const infoCount = document.createElement("p")

        if (length === 0) {
            const div = document.createElement("div")
            const p = document.createElement("p")

            rankerCon.style.display = "flex"
            rankerCon.style.justifyContent = "center"
            rankerCon.style.alignItems = "center"

            p.textContent = "Sorry, this Pokemon has no permanent or rotating shiny methods available."
            div.setAttribute("id", "ranker-sorry-con")

            div.appendChild(p)
            rankerCon.appendChild(div)
        } else {
            response.forEach(method => {
                const div = document.createElement("div")
                const gameDiv = document.createElement("div")
                const methodTitle = document.createElement("p")
                const cover = document.createElement("img")
                const infoDiv = document.createElement("div")
                const oddsDiv = document.createElement("div")
                const noCharmText = document.createElement("p")
                const charmText = document.createElement("p")
                const vote = document.createElement("p")
                const voteDiv = document.createElement("div")
                const arrow = document.createElement("p")
                const gameName = document.createElement("p")
                const description = document.createElement("p")
                const instructions = document.createElement("p")
                const gameTitle = document.createElement("p")
                const textTitle = document.createElement("p")
                const oddsTitle = document.createElement("p")
                const charmTitle = document.createElement("p")
                const votesTitle = document.createElement("p")
                const charmDiv = document.createElement("div")
                const masterDiv = document.createElement("div")
                const instructionsButton = document.createElement("p")
                const notesDiv = document.createElement("div")
                const notesTitle = document.createElement("p")
                const notesText = document.createElement("p")

                console.log(method)

                div.setAttribute("class", "method-con")
                div.setAttribute("data-game", `${method.game}`)
                masterDiv.setAttribute("class", "ranker-master-div")

                methodTitle.setAttribute("class", "ranker-div-title")
                methodTitle.textContent = `${method.shiny_method_name}`

                textTitle.textContent = "Information"
                textTitle.setAttribute("class", "ranker-info-title")
                infoDiv.setAttribute("class", "ranker-information ranker-size-class")
                description.innerHTML = `${method.description}`
                instructions.textContent = `${method.instructions}`
                instructionsButton.textContent = "▼ View Method Instructions ▼"
                instructionsButton.setAttribute("class", "ranker-instructions-link")
                instructionsButton.addEventListener("click", openInstructions)

                gameTitle.textContent = "Game"
                gameTitle.setAttribute("class", "ranker-info-title")
                gameDiv.setAttribute("class", "ranker-game-div ranker-size-class")
                cover.src = `../images/game_combos/${method.game}.png`
                cover.setAttribute("class", "method-cover")
                gameName.textContent = `${method.title}`
                gameName.setAttribute("class", "ranker-game-title")

                oddsTitle.textContent = "Odds (No Charm)"
                oddsTitle.setAttribute("class", "ranker-info-title")
                charmTitle.textContent = "Odds (Shiny Charm)"
                charmTitle.setAttribute("class", "ranker-info-title")
                noCharmText.innerHTML = `${method.odds_nocharm}`
                charmText.setAttribute("class", "rates-text")
                noCharmText.setAttribute("class", "rates-text")
                
                if (method.game === "14" && method.shiny_method_name === "Masuda Method (Gen 5)") {
                    charmText.innerHTML = "1/1024"
                } else if (method.odds_charm === "") {
                    charmText.innerHTML = "--The shiny charm is not applicable to this game and method--"
                } else {
                    charmText.innerHTML = `${method.odds_charm}`
                }

                oddsDiv.setAttribute("class", "ranker-size-class")
                charmDiv.setAttribute("class", "ranker-size-class")

                votesTitle.setAttribute("class", "ranker-info-title")
                votesTitle.textContent = "Votes"
                arrow.textContent = "▲"
                arrow.setAttribute("class", "ranker-upvote")
                vote.textContent = `${method.votes}`
                voteDiv.setAttribute("class", "ranker-vote ranker-size-class")

                voteDiv.appendChild(votesTitle)
                voteDiv.appendChild(arrow)
                voteDiv.appendChild(vote)

                gameDiv.appendChild(gameTitle)
                gameDiv.appendChild(cover)
                gameDiv.appendChild(gameName)

                oddsDiv.appendChild(oddsTitle)
                oddsDiv.appendChild(noCharmText)
                charmDiv.appendChild(charmTitle)
                charmDiv.appendChild(charmText)

                infoDiv.appendChild(textTitle)
                infoDiv.appendChild(description)
                infoDiv.appendChild(instructionsButton)
                infoDiv.appendChild(instructions)

                masterDiv.appendChild(gameDiv)
                masterDiv.appendChild(infoDiv)
                masterDiv.appendChild(oddsDiv)
                masterDiv.appendChild(charmDiv)
                masterDiv.appendChild(voteDiv)
                div.appendChild(methodTitle)
                div.appendChild(masterDiv)

                if (method.species_notes !== "" || method.game_notes !== "") {
                    notesTitle.textContent = "▼ See Notes ▼"
                    notesTitle.setAttribute("class", "ranker-notes-title")
                    notesTitle.addEventListener("click", openNotes)
                    
                    if (method.species_notes !== "" && method.game_notes !== "") {
                        notesText.innerHTML = `${method.species_notes} <br> ${method.game_notes}`
                    } else if (method.species_notes !== "") {
                        notesText.innerHTML = `${method.species_notes}`
                    } else if (method.game_notes !== "") {
                        notesText.innerHTML = `${method.game_notes}`
                    }

                    notesDiv.setAttribute("class", "ranker-notes-div")
                    notesText.setAttribute("class", "ranker-notes-text")

                    notesDiv.appendChild(notesTitle)
                    notesDiv.appendChild(notesText)

                    div.appendChild(notesDiv)
                } else {
                    
                }

                rankerCon.appendChild(div)
            })
        }

        infoCount.textContent = `Number of Shiny Methods: ${length}`

        bigDiv.appendChild(infoCount)
    })
    .catch(error => {
    });
}

function openInstructions() {

}

function openNotes() {
    const parentNode = this.parentNode
    const text = parentNode.querySelector(".ranker-notes-text")

    if (text.style.display === "block") {
        text.style.display = "none"
        this.textContent = "▼ See Notes ▼"
    } else {
        text.style.display = "block"
        this.textContent = "▲ Close Notes ▲"
    }
}

rankSelect.addEventListener("change", displayShinyMethods)