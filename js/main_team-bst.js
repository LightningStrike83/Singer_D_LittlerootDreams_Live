const explainButton = document.querySelector("#bst-mode-explain")
const explainClose = document.querySelector("#mode-explain-close")
const explainBox = document.querySelector("#mode-explain-con")
const startGameButtons = document.querySelectorAll(".bst-start-game-button")
const loadingCon = document.querySelector("#bst-loading-con")
const baseURL = "https://littlerootdreams.com/lumen/public/"

let mode = ""

let preloadResults = [

]

function openModeExplanations() {
    explainBox.style.display = "flex"
}

function closeModeExplanations() {
    explainBox.style.display = "none"
}

function startGame() {
    mode = this.dataset.mode

    let inquiry = ""

    loadingCon.style.display = "flex"

    if (mode === "classic") {

    } else if (mode === "vgc") {
        inquiry = "fully-evolved"
    } else if (mode === "chaos") {

    }

    fetch(`${baseURL}${inquiry}`)
    .then(response => response.json())
    .then(function(response){
        const activeGame = document.querySelector("#bst-active-game")

        preloadResults = response

        loadingCon.style.display = "none"

        populateBoxes()

        activeGame.style.display = "flex"
    })
}

function populateBoxes() {
    const populateGame = document.querySelectorAll(".populate-game")

    populateGame.forEach(box => {
        let randomizedPokemon = []
        let max = ""
        const p = document.createElement("p")
        const div = document.createElement("div")

        div.setAttribute("class", "game-content")

        if (mode === "vgc") {
            max = 4
        } else {
            max = 6
        }

        for (let l = 0; l < max; l++) {
            let pokemonCheck
            let attempts = 0

            while (true) {
                attempts++
                if (attempts > 1000) break

                let pokemonID = Math.floor(Math.random() * preloadResults.length)
                pokemonCheck = preloadResults[pokemonID]

                if (mode === "classic" || mode === "vgc") {
                    if (
                        !randomizedPokemon.some(c => c.id === pokemonCheck.id)
                    ) {
                        break
                    }
                }
            }

            if (pokemonCheck) randomizedPokemon.push(pokemonCheck)
        }

        randomizedPokemon.forEach(pokemon => {
            const name = document.createElement("p")
            const img = document.createElement("img")
            const innerdiv = document.createElement("div")

            img.src = `../images/pokemon_images/${pokemon.number}.png`
            img.setAttribute("alt", `Image of ${pokemon.name}`)
            img.setAttribute("class", "bst-pokemon-image")
            name.textContent = pokemon.name

            innerdiv.setAttribute("class", "bst-pokemon-con")

            if (mode === "vgc") {
                innerdiv.classList.add("vgc-mode")
            }

            innerdiv.appendChild(img)
            innerdiv.appendChild(name)
            
            div.appendChild(innerdiv)
        })

        p.innerHTML = "Team BST: <span>???</span>"
        p.setAttribute("class", "team-bst-text")

        div.appendChild(p)
        box.appendChild(div)
    })
}

explainButton.addEventListener("click", openModeExplanations)
explainClose.addEventListener("click", closeModeExplanations)
startGameButtons.forEach(button => button.addEventListener("click", startGame))