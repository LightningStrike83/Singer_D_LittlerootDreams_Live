const explainButton = document.querySelector("#bst-mode-explain")
const explainClose = document.querySelector("#mode-explain-close")
const explainBox = document.querySelector("#mode-explain-con")
const startGameButtons = document.querySelectorAll(".bst-start-game-button")
const loadingCon = document.querySelector("#bst-loading-con")
const baseURL = "https://littlerootdreams.com/lumen/public/"
const currentScore = document.querySelector("#current-score")
const highScoreText = document.querySelector("#high-score")
const playAgainButton = document.querySelector("#bst-play-again")
const submitScoreButton = document.querySelector("#bst-submit-score")
const leaderboardButton = document.querySelector("#bst-leaderboard-button")
const mainmenuButtons = document.querySelectorAll(".bst-main-menu")
const bstSubmit = document.querySelector("#bst-submit-button")

let classicHighScore = localStorage.getItem("classic-hs")
let vgcHighScore = localStorage.getItem("vgc-hs")
let chaosHighScore = localStorage.getItem("chaos-hs")
let storageCheck = ""
let mode = ""
let preloadResults = []
let scoreSubmit = ""

function openModeExplanations() {
    explainBox.style.display = "flex"
}

function closeModeExplanations() {
    explainBox.style.display = "none"
}

function startGame() {
    const finalModeText = document.querySelector("#final-mode-text")

    scoreSubmit = ""
    
    if (this?.dataset?.mode !== undefined) {
        mode = this.dataset.mode;

        playAgainButton.setAttribute("data-mode", mode)
    } else {
        mode = playAgainButton.dataset.mode;
    }

    let inquiry = ""

    loadingCon.style.display = "flex"

    if (mode === "classic") {
        inquiry = "gen/all-no-alt"
        finalModeText.textContent = "Classic Mode"
        highScoreText.textContent = classicHighScore
        storageCheck = classicHighScore

        if (!classicHighScore) {
            highScoreText.textContent = "0"
        }
    } else if (mode === "vgc") {
        inquiry = "fully-evolved"
        finalModeText.textContent = "VGC Mode"
        highScoreText.textContent = vgcHighScore
        storageCheck = vgcHighScore

        if (!vgcHighScore) {
            highScoreText.textContent = "0"
        }
    } else if (mode === "chaos") {
        inquiry = "gen/all"
        finalModeText.textContent = "Chaos Mode"
        highScoreText.textContent = chaosHighScore
        storageCheck = chaosHighScore

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

     if (Number(leftScore.textContent) > Number(rightScore.textContent)) {
            leftScoreCon.style.border = "7.5px solid #32CD32"
            rightScoreCon.style.border = "7.5px solid #DC143C"
     } else if (Number(leftScore.textContent) < Number(rightScore.textContent)) {
            rightScoreCon.style.border = "7.5px solid #32CD32"
            leftScoreCon.style.border = "7.5px solid #DC143C"
     }

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

                if (Number(currentScore.textContent) > Number(highScoreText.textContent)) {
                    highScoreText.textContent = currentScore.textContent
                }
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

                if (Number(currentScore.textContent) > Number(highScoreText.textContent)) {
                    highScoreText.textContent = currentScore.textContent
                }
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
    const selectedBox = document.querySelectorAll(".selected")

    selectedBox.forEach(box => box.classList.remove("selected"))

    scoreCon.style.display = "none"
    activeGame.style.display = "none"
    resultsCon.style.display = "flex"

    finalScore.textContent = currentScore.textContent

    if (Number(finalScore.textContent) > Number(highScore.textContent)) {
        highScoreMessage.style.display = "block"
    } else {
        highScoreMessage.style.display = "none"
    }

    if (Number(finalScore.textContent) > Number(storageCheck)) {
        if (mode === "classic") {    
            localStorage.setItem("classic-hs", finalScore.textContent)
        } else if (mode === "vgc") {
            localStorage.setItem("vgc-hs", finalScore.textContent)
            console.log(finalScore.textContent)
            console.log("stored")
        } else if (mode === "chaos") {
            localStorage.setItem("chaos-hs", finalScore.textContent)
        }
    }
}

function playAgain() {
    const resultsCon = document.querySelector("#results-con")
    
    classicHighScore = localStorage.getItem("classic-hs")
    vgcHighScore = localStorage.getItem("vgc-hs")
    chaosHighScore = localStorage.getItem("chaos-hs")

    resultsCon.style.display = "none"

    resetGame()
    startGame()
}

function resetGame() {
    const populateGame = document.querySelectorAll(".populate-game")
    const statBox = document.querySelectorAll(".stat-box")

    populateGame.forEach(game => {
        game.innerHTML = ""
    })

    statBox.forEach(box => {
        box.innerHTML = ""
    })

    currentScore.textContent = 0
}

function openSubmitScore() {
    const finalScore = document.querySelector("#final-score")
    const submitCon = document.querySelector("#submit-score-box")
    const resultsCon = document.querySelector("#results-con")

    scoreSubmit = Number(finalScore.textContent)
    console.log(scoreSubmit)

    submitCon.style.display = "flex"
    resultsCon.style.display = "none"
}

function openLeaderBoard() {
    const leaderboardCon = document.querySelector("#bst-leaderboard-con")

    leaderboardCon.style.display = "flex"
}

function returnToMainMenu() {
    const resultsCon = document.querySelector("#results-con")
    const leaderboardCon = document.querySelector("#bst-leaderboard-con")
    const leaderboardSubmitCon = document.querySelector("#bst-submit-leaderboard-con")

    leaderboardCon.style.display = "none"
    resultsCon.style.display = "none"
    leaderboardSubmitCon.style.display = "none"

    resetGame()
}

function submitScore() {
    const bstName = document.querySelector("#bst-name")
    const nameSubmission = bstName.value

    console.log(scoreSubmit)

    let scoreData = {
        name: nameSubmission,
        score: scoreSubmit,
    }

    if (scoreData === "") {
        alert('Please enter a name for submission')
    } else {
        fetch(`${baseURL}bst/submit/${mode}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(scoreData)
        })
            .then(response =>
                response.json().catch(() => {
                    throw new Error("Invalid JSON response");
                })
            )
            .then(response => {
                alert('Submitted')
            })
            .catch(error => {

            });
    }
}

explainButton.addEventListener("click", openModeExplanations)
explainClose.addEventListener("click", closeModeExplanations)
startGameButtons.forEach(button => button.addEventListener("click", startGame))
playAgainButton.addEventListener("click", playAgain)
submitScoreButton.addEventListener("click", openSubmitScore)
leaderboardButton.addEventListener("click", openLeaderBoard)
mainmenuButtons.forEach(button => button.addEventListener("click", returnToMainMenu))
bstSubmit.addEventListener("click", submitScore)