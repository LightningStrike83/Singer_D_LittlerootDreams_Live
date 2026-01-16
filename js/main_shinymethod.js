const baseURL = "https://littlerootdreams.com/lumen/public/"
const rankSelect = document.querySelector("#rank-select")
const rankerLoad = document.querySelector("#ranker-loading")
let spinner = `<div id="spinner-con" class="col-span-full"><img id="spinner" src="../images/spinner.gif" alt="Loading spinner"> <p id="spinner-text">Populating Shiny Methods...</p></div>`

function populateList() {
    fetch(`${baseURL}gen/all-no-alt/dex`)
    .then(response => response.json())
    .then(function(response) {
        response.forEach(pokemon => {
            const option = document.createElement("option")

            option.value = pokemon.number
            option.innerText = pokemon.name
            option.setAttribute("data-key", `${pokemon.id}`)

            rankSelect.appendChild(option)
        })
    })
    .then(fetchRegionals)
    .catch(error => {
    });
}

function fetchRegionals() {
    fetch(`${baseURL}custom/regional`)
    .then(response => response.json())
    .then(function(response) {
        const blank = document.createElement("option")
        const regionalTitle = document.createElement("option")

        blank.disabled = true
        regionalTitle.disabled = true
        regionalTitle.innerText = "--Regional Forms--"

        rankSelect.appendChild(blank)
        rankSelect.appendChild(regionalTitle)

        response.forEach(pokemon => {
            const option = document.createElement("option")

            option.value = pokemon.number
            option.innerText = pokemon.name
            option.setAttribute("data-key", `${pokemon.id}`)
            option.style.order = "1"


            rankSelect.appendChild(option)
        })
    })
    .then(finishOthers)
    .catch(error => {
    });
}

function finishOthers() {
    const blank = document.createElement("option")
    const otherTitle = document.createElement("option")
    const rockruff = document.createElement("option")
    const pikachu = document.createElement("option")
    const basculin = rankSelect.querySelector('option[value="550h"]');
    const gimmighoul = document.createElement("option")
    const lycanrocDusk = document.createElement("option")

    blank.disabled = true
    otherTitle.disabled = true
    otherTitle.innerText = "--Other Shiny Targets--"

    rockruff.value = "744ot"
    rockruff.setAttribute("data-key", "1328")
    rockruff.innerText = "Rockruff (Own Tempo)"

    pikachu.value = "025pc"
    pikachu.setAttribute("data-key", "1368")
    pikachu.innerText = "Pikachu (Partner Cap)"

    gimmighoul.value = "999r"
    gimmighoul.setAttribute("data-key", "1329")
    gimmighoul.innerText = "Gimmighoul (Roaming)"

    lycanrocDusk.value = "745d"
    lycanrocDusk.setAttribute("data-key", "1218")
    lycanrocDusk.innerText = "Lycanroc (Dusk)"

    rankSelect.appendChild(blank)
    rankSelect.appendChild(otherTitle)
    rankSelect.appendChild(basculin)
    rankSelect.appendChild(gimmighoul)
    rankSelect.appendChild(lycanrocDusk)
    rankSelect.appendChild(pikachu)
    rankSelect.appendChild(rockruff)

    convertList()

    rankerLoad.style.display = "none"
}

function convertList() {
  const $select = $(rankSelect);

    if (!$select.hasClass("select2-hidden-accessible")) {
      $select.select2();
    }

    $select.off("select2:select");

    $select.on("select2:select", displayShinyMethods);

  applySelect2iOSTouchFix();
}

function applySelect2iOSTouchFix() {
  $(".select2-container")
    .off("touchstart")
    .on("touchstart", function (e) {
      e.stopPropagation();
    })
    .siblings("select")
    .off("select2:open")
    .on("select2:open", function () {
      $(".select2-results__options")
        .off("touchstart")
        .on("touchstart", "li", function (e) {
          e.stopPropagation();
        });
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
    const filterGame = document.createElement("select")
    const initialOption = document.createElement("option")
    const allOption = document.createElement("option")

    if (previousImage) {
        previousImage.remove()
    }

    rankerCon.innerHTML = ""

    rankerCon.innerHTML = spinner

    initialOption.disabled = true
    initialOption.selected = true
    initialOption.innerText = "--Filter The Games--"

    allOption.innerText = "All Games"
    allOption.value = "all"

    filterGame.appendChild(initialOption)
    filterGame.appendChild(allOption)
    filterGame.setAttribute("id", "rank-game-filter")

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
                const gameOption = document.createElement("option")
                const methodTitleDiv = document.createElement("div")
                const methodImage = document.createElement("img")

                console.log(method)

                div.setAttribute("class", "method-con")
                div.setAttribute("data-game", `${method.game}`)
                div.setAttribute("data-pk", `${method.key_id}`)
                masterDiv.setAttribute("class", "ranker-master-div")

                methodTitleDiv.setAttribute("class", "ranker-div-title")
                methodTitle.textContent = `${method.shiny_method_name}`

                methodImage.src = `../images/${method.method_type}.png`
                methodImage.setAttribute("class", "method-icon")

                methodTitleDiv.appendChild(methodImage)
                methodTitleDiv.appendChild(methodTitle)

                textTitle.textContent = "Information"
                textTitle.setAttribute("class", "ranker-info-title")
                infoDiv.setAttribute("class", "ranker-information ranker-size-class")
                description.innerHTML = `${method.description}`
                description.setAttribute("class", "method-desc")
                instructions.innerHTML = `${method.instructions}`
                instructions.setAttribute("class", "ranker-instructions-text")
                instructionsButton.textContent = "▼ View Method Instructions and Notes ▼"
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
                    charmText.innerHTML = "--The shiny charm is not applicable to this Pokemon, game, and method--"
                    charmText.setAttribute("class", "ranker-na-charm")
                } else {
                    charmText.innerHTML = `${method.odds_charm}`
                }

                oddsDiv.setAttribute("class", "ranker-size-class ranker-odds-div")
                charmDiv.setAttribute("class", "ranker-size-class ranker-odds-charm-div")

                votesTitle.setAttribute("class", "ranker-info-title")
                votesTitle.textContent = "Votes"
                arrow.textContent = "▲"
                arrow.setAttribute("class", "ranker-upvote")
                vote.textContent = `${method.votes}`
                vote.setAttribute("class", "ranker-vote-text")
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
                div.appendChild(methodTitleDiv)
                div.appendChild(masterDiv)

                gameOption.innerText = method.title
                gameOption.value = method.game

                notesDiv.appendChild(instructionsButton)
                notesDiv.appendChild(instructions)

                if (method.species_notes !== "" || method.game_notes !== "") {  
                    if (method.species_notes !== "" && method.game_notes !== "") {
                        notesText.innerHTML = `<br><span class="note-bold">Notes:</span><br>${method.species_notes} <br> ${method.game_notes}`
                    } else if (method.species_notes !== "") {
                        notesText.innerHTML = `<br><span class="note-bold">Notes:</span><br>${method.species_notes}`
                    } else if (method.game_notes !== "") {
                        notesText.innerHTML = `<br><span class="note-bold">Notes:</span><br>${method.game_notes}`
                    }
                    notesText.setAttribute("class", "ranker-notes-text")

                    notesDiv.appendChild(notesText)
                } else {
                    
                }

                notesDiv.setAttribute("class", "ranker-notes-div")
                div.appendChild(notesDiv)

                filterGame.appendChild(gameOption)
                rankerCon.appendChild(div)
            })
        }

        infoCount.textContent = `Number of Shiny Methods: ${length}`

        bigDiv.appendChild(infoCount)
        bigDiv.appendChild(filterGame)
    })
    .then(organizeFilter)
    .catch(error => {
    });
}

function organizeFilter() {
  const filter = document.querySelector("#rank-game-filter");
  const options = Array.from(filter.options);
  const spinnerCon = document.querySelector("#spinner-con")

  const map = new Map();

  options.forEach(option => {
    if (!map.has(option.value)) {
      map.set(option.value, option);
    }
  });

  const sorted = Array.from(map.values()).sort((a, b) =>
    a.textContent.localeCompare(b.textContent, undefined, {
      sensitivity: "base"
    })
  );

  filter.innerHTML = "";
  sorted.forEach(option => filter.appendChild(option));

  spinnerCon.remove()
  
  filter.addEventListener("change", filterGames)
}

function filterGames() {
    const key = `${this.options[this.selectedIndex].value}`
    const methods = document.querySelectorAll(".method-con")

    methods.forEach(con => {
        const conKey = con.dataset.game

        if (key === "all") {
            con.style.display = "flex"
        } else if (conKey !== key) {
            con.style.display = "none"
        } else {
            con.style.display = "flex"
        }
    })
}


function openInstructions() {
    const parentNode = this.parentNode
    const text = parentNode.querySelector(".ranker-instructions-text")
    const notes = parentNode.querySelector(".ranker-notes-text")

    if (text.style.display === "block") {
        text.style.display = "none"
        notes.style.display = "none"
        this.textContent = "▼ View Method Instructions and Notes ▼"
    } else {
        text.style.display = "block"
        notes.style.display = "block"
        this.textContent = "▲ Hide Method Instructions and Notes ▲"
    }
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