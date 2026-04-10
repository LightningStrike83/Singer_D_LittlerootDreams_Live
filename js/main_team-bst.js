const explainButton = document.querySelector("#bst-mode-explain")
const explainClose = document.querySelector("#mode-explain-close")
const explainBox = document.querySelector("#mode-explain-con")
const startGameButtons = document.querySelectorAll(".bst-start-game-button")
const loadingCon = document.querySelector("#bst-loading-con")
const baseURL = "https://littlerootdreams.com/lumen/public/"
const currentScore = document.querySelector("#current-score")
const classicHighScore = localStorage.getItem("classic-hs")
const vgcHighScore = localStorage.getItem("vgc-hs")
const chaosHighScore = localStorage.getItem("chaos-hs")
const highScoreText = document.querySelector("#high-score")

let mode = ""

let preloadResults = []

function openModeExplanations() {
    explainBox.style.display = "flex"
}

function closeModeExplanations() {
    explainBox.style.display = "none"
}

function startGame() {
    const finalModeText = document.querySelector("#final-mode-text")
    mode = this.dataset.mode

    let inquiry = ""

    loadingCon.style.display = "flex"

    if (mode === "classic") {
        inquiry = "gen/all-no-alt"
        finalModeText.textContent = "Classic Mode"
        highScoreText.textContent = classicHighScore

        if (!classicHighScore) {
            highScoreText.textContent = "0"
        }
    } else if (mode === "vgc") {
        inquiry = "fully-evolved"
        finalModeText.textContent = "VGC Mode"
        highScoreText.textContent = vgcHighScore

        if (!vgcHighScore) {
            highScoreText.textContent = "0"
        }
    } else if (mode === "chaos") {
        inquiry = "gen/all"
        finalModeText.textContent = "Chaos Mode"
        highScoreText.textContent = chaosHighScore

        if (!chaosHighScore) {
            highScoreText.textContent = "0"
        }
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
    const statBox = document.querySelectorAll(".stat-box")

    let s = 0

    populateGame.forEach(box => {
        if (box.hasChildNodes()) {
            s++
            return
        }

        box.setAttribute("data-count", "0")

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

        let statTotal = randomizedPokemon.reduce((sum, pokemon) => {return sum + Number(pokemon.bst);}, 0)
        let bstText = document.createElement("p")

        box.setAttribute("data-key", statTotal)

        p.innerHTML = `Team BST: <span id='team-${s}'>???</span>`
        p.setAttribute("class", "team-bst-text")

        bstText.innerHTML = `Team BST Total:<br><span id='total-text'>${statTotal}</span>`

        statBox[s].appendChild(bstText)

        s++

        if (s === 2) {
            s = 0
        }

        div.appendChild(p)
        box.appendChild(div)

        box.addEventListener("click", higherLower)
    })
}

function higherLower() {
    const statCon = document.querySelector("#bst-score-con")
    const leftScoreCon = document.querySelector("#bst-left-score")
    const rightScoreCon = document.querySelector("#bst-right-score")
    const leftScore = leftScoreCon.querySelector("#total-text")
    const rightScore = rightScoreCon.querySelector("#total-text")
    const bstLeftCon = document.querySelector("#bst-left-con")
    const bstRightCon = document.querySelector("#bst-right-con")
    const statBox = document.querySelectorAll(".populate-game")
    const team0 = document.querySelector("#team-0")
    const team1 = document.querySelector("#team-1")

    this.classList.add("selected")

    statCon.style.display = "flex"

    setTimeout(() => {
        if (Number(leftScore.textContent) > Number(rightScore.textContent)) {
            if (bstRightCon.classList.contains("selected")) {
                gameOverBST()
            } else {
                let add = Number(currentScore.textContent)
                add++
                currentScore.textContent = add

                let count = Number(this.dataset.count)
                count++
                this.dataset.count = count
                
                if (Number(this.dataset.count) >= 2) {
                    leftScoreCon.innerHTML = ""
                    bstLeftCon.innerHTML = ""

                    team1.textContent = bstRightCon.dataset.key
                } else {
                    rightScoreCon.innerHTML = ""
                    bstRightCon.innerHTML = ""

                    team0.textContent = bstLeftCon.dataset.key
                }
                
                statBox.forEach(box => {
                    box.classList.remove("selected")
                    statCon.style.display = "none"
                    populateBoxes()
                })
            }
        } else if (Number(leftScore.textContent) < Number(rightScore.textContent)) {
            if (bstLeftCon.classList.contains("selected")) {
                gameOverBST()
            } else {
                let add = Number(currentScore.textContent)
                add++
                currentScore.textContent = add

                let count = Number(this.dataset.count)
                count++
                this.dataset.count = count

                if (Number(this.dataset.count) >= 2) {
                    rightScoreCon.innerHTML = ""
                    bstRightCon.innerHTML = ""

                    team0.textContent = bstLeftCon.dataset.key
                } else {
                    leftScoreCon.innerHTML = ""
                    bstLeftCon.innerHTML = ""

                    team1.textContent = bstRightCon.dataset.key
                }

                statBox.forEach(box => {
                    box.classList.remove("selected")
                    statCon.style.display = "none"
                    populateBoxes()
                })
            }
        } else if (Number(leftScore.textContent) === Number(rightScore.textContent)) {
            statBox.forEach(box => {
                let add = Number(currentScore.textContent)
                add++
                currentScore.textContent = add

                box.classList.remove("selected")
                statCon.style.display = "none"
                populateBoxes()
            })
        }
    }, 2500);
}

function gameOverBST() {
    const finalScore = document.querySelector("#final-score")
    const currentScore = document.querySelector("#current-score")
    const activeGame = document.querySelector("#bst-active-game")
    const scoreCon = document.querySelector("#bst-score-con")
    const resultsCon = document.querySelector("#results-con")
    const highScoreMessage = document.querySelector("#high-score-congrats")
    const highScore = document.querySelector("#high-score")

    scoreCon.style.display = "none"
    activeGame.style.display = "none"
    resultsCon.style.display = "flex"

    finalScore.textContent = currentScore.textContent

    if (Number(finalScore.textContent) > Number(highScore.textContent)) {
        highScoreMessage.style.display = "block"
    } else {
        highScoreMessage.style.display = "none"
    }

    if (Number(finalScore.textContent) > Number(highScoreText.textContent)) {
        if (mode === "classic") {    
            localStorage.setItem("classic-hs", finalScore.textContent)
        } else if (mode === "vgc") {
            localStorage.setItem("vgc-hs", finalScore.textContent)
        } else if (mode === "chaos") {
            localStorage.setItem("chaos-hs", finalScore.textContent)
        }
    }
}

explainButton.addEventListener("click", openModeExplanations)
explainClose.addEventListener("click", closeModeExplanations)
startGameButtons.forEach(button => button.addEventListener("click", startGame))