const baseURL = "https://littlerootdreams.com/lumen/public/"
const rankSelect = document.querySelector("#rank-select")
const rankerLoad = document.querySelector("#ranker-loading")
let spinner = `<div id="spinner-con" class="col-span-full"><img id="spinner" src="../images/spinner.gif" alt="Loading spinner"> <p id="spinner-text">Populating Shiny Methods...</p></div>`

let votes = []

let generation = 0

function populateList() {
    fetch(`${baseURL}gen/all-no-alt/dex`)
    .then(response => response.json())
    .then(function(response) {
        response.forEach(pokemon => {
            const option = document.createElement("option")

            option.value = pokemon.number
            option.innerText = pokemon.name
            option.setAttribute("data-key", `${pokemon.id}`)
            option.setAttribute("data-generation", `${pokemon.generation}`)

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
            option.setAttribute("data-generation", `${pokemon.generation}`)


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
    rockruff.setAttribute("data-generation", "0")
    rockruff.innerText = "Rockruff (Own Tempo)"

    pikachu.value = "025pc"
    pikachu.setAttribute("data-key", "1368")
    pikachu.setAttribute("data-generation", "0")
    pikachu.innerText = "Pikachu (Partner Cap)"

    gimmighoul.value = "999r"
    gimmighoul.setAttribute("data-key", "1329")
    gimmighoul.setAttribute("data-generation", "0")
    gimmighoul.innerText = "Gimmighoul (Roaming)"

    lycanrocDusk.value = "745d"
    lycanrocDusk.setAttribute("data-key", "1218")
    lycanrocDusk.setAttribute("data-generation", "0")
    lycanrocDusk.innerText = "Lycanroc (Dusk)"

    rankSelect.appendChild(blank)
    rankSelect.appendChild(otherTitle)
    rankSelect.appendChild(basculin)
    rankSelect.appendChild(gimmighoul)
    rankSelect.appendChild(lycanrocDusk)
    rankSelect.appendChild(pikachu)
    rankSelect.appendChild(rockruff)

    const darmanitanZen = rankSelect.querySelector('option[value="555gz"]')

    darmanitanZen.remove();

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
    const generationKey = `${this.options[this.selectedIndex].dataset.generation}`
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

    generation = Number(generationKey)

    rankerCon.innerHTML = ""
    rankerCon.classList.remove("m-col-span-full")
    rankerCon.classList.add("m-col-span-10")

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
    bigDiv.setAttribute("class", "col-span-full m-col-start-1 m-col-span-2")
    bigDiv.setAttribute("id", "ranker-big")
    
    bigImage.src = `images/pokemon_images/shiny_forms/${this.value}.png`
    bigImage.setAttribute("alt", `Picture of Shiny ${this.options[this.selectedIndex].innerText}`)
    bigImage.style.filter = "drop-shadow(3px 3px black)"

    thumbnail.src = `images/pokemon_images/shiny_forms/${this.value}.png`
    thumbnail.setAttribute("alt", `Thumbnail of Shiny ${this.options[this.selectedIndex].innerText}`)
    thumbnail.style.filter = "drop-shadow(3px 3px black)"
    thumbnail.style.display = "block"

    bigDiv.appendChild(bigImage)
    rankerInfoCon.appendChild(bigDiv)
    name.textContent = `${this.options[this.selectedIndex].innerText}`
    name.style.padding = "0"

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
            const standardDiv = document.createElement("div")
            const standardTitle = document.createElement("p")
            const standardInformationDiv = document.createElement("div")
            const standardText = document.createElement("p")
            const ratesInformation = document.createElement("p")

            standardDiv.setAttribute("id", "standard-div")
            standardInformationDiv.setAttribute("id", "standard-hide")

            standardTitle.setAttribute("id", "standard-open")
            standardTitle.textContent = "▼ Open Standard Rates ▼"
            standardTitle.addEventListener("click", openStandardInformation)

            standardText.innerHTML = 'The following information are the standard rates if the Pokemon can appear in the games listed and can be shiny hunted. Please refer to <a id="serebii-ranker-redirect" target="_blank" href="https://www.serebii.net/games/shiny.shtml">Serebii</a> for shiny locked Pokemon information.'
            standardText.setAttribute("id", "ranker-text-desc")

            if (generation >= 5 || generation === 0) {
                ratesInformation.innerHTML = '<span class="rate-information-info">Pokemon Black 2 and White 2: <span class="rate-text">1 / 8192</span></span><br><span class="rate-information-info">Black 2 and White 2 (Shiny Charm): <span class="rate-text">1 / 2371</span></span><br><span class="rate-information-info">Generations 6 - 9: <span class="rate-text">1 / 4096 </span></span><br><span class="rate-information-info">Generations 6 - 9 (Shiny Charm): <span class="rate-text">1 / 1365</span></span><br><span class="rate-information-info">Pokemon Legends ZA (Shiny Charm): <span class="rate-text">1 / 1024</span></span><br><span class="rate-information-info">Pokemon Go: <span class="rate-text">1 / 512</span></span><br><span class="rate-information-info">Pokemon Go (Go Rocket Grunts): <span class="rate-text">1 / 256</span></span><br><span class="rate-information-info">Pokemon Go (Go Rocket Leader): <span class="rate-text">1 / 64</span></span><br><span class="rate-information-info">Pokemon Go (In Person Go Fest) <span class="rate-text">1 / 64</span></span><br><span class="rate-information-info">Pokemon Go (Global Go Fest): <span class="rate-text">1 / 128</span></span>'
            } else {
                ratesInformation.innerHTML = '<span class="rate-information-info">Generations 2 - 5: <span class="rate-text">1 / 8192</span></span><br><span class="rate-information-info">Black 2 and White 2 (Shiny Charm): <span class="rate-text">1 / 2371</span></span><br><span class="rate-information-info">Generations 6 - 9: <span class="rate-text">1 / 4096 </span></span><br><span class="rate-information-info">Generations 6 - 9 (Shiny Charm): <span class="rate-text">1 / 1365</span></span><br><span class="rate-information-info">Pokemon Legends ZA (Shiny Charm): <span class="rate-text">1 / 1024</span></span><br><span class="rate-information-info">Pokemon Go: <span class="rate-text">1 / 512</span></span><br><span class="rate-information-info">Pokemon Go (Go Rocket Grunts): <span class="rate-text">1 / 256</span></span><br><span class="rate-information-info">Pokemon Go (Go Rocket Leader): <span class="rate-text">1 / 64</span></span><br><span class="rate-information-info">Pokemon Go (In Person Go Fest) <span class="rate-text">1 / 64</span></span><br><span class="rate-information-info">Pokemon Go (Global Go Fest): <span class="rate-text">1 / 128</span></span>'
            }

            standardInformationDiv.appendChild(standardText)
            standardInformationDiv.appendChild(ratesInformation)
            standardDiv.appendChild(standardTitle)
            standardDiv.appendChild(standardInformationDiv)
            rankerCon.appendChild(standardDiv)

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

                div.setAttribute("class", "method-con")
                div.setAttribute("data-game", `${method.game}`)
                div.setAttribute("data-pk", `${method.key_id}`)
                masterDiv.setAttribute("class", "ranker-master-div")

                methodTitleDiv.setAttribute("class", "ranker-div-title")
                methodTitle.textContent = `${method.shiny_method_name}`

                methodImage.src = `../images/method_icons/${method.method_type}.png`
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
                instructionsButton.textContent = "▼ View Method Instructions & Notes ▼"
                instructionsButton.setAttribute("class", "ranker-instructions-link-button")
                instructionsButton.addEventListener("click", openInstructions)

                gameTitle.textContent = "Game"
                gameTitle.setAttribute("class", "ranker-info-title")
                gameDiv.setAttribute("class", "ranker-game-div ranker-size-class")
                cover.src = `../images/game_combos/${method.game}.png`
                cover.setAttribute("class", "method-cover")
                gameName.textContent = `${method.title}`
                gameName.setAttribute("class", "ranker-game-title")

                oddsTitle.textContent = "Odds (No Charm)"
                oddsTitle.setAttribute("class", "ranker-info-title odds-title")
                charmTitle.textContent = "Odds (Shiny Charm)"
                charmTitle.setAttribute("class", "ranker-info-title odds-title")
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
                arrow.addEventListener("click", upvoteMethod)
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
    .then(applyVote)
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
        
        if(notes) {
            notes.style.display = "none"
        }

        this.textContent = "▼ View Method Instructions and Notes ▼"
    } else {
        text.style.display = "block"
        
        if(notes) {
            notes.style.display = "block"
        }

        this.textContent = "▲ Hide Method Instructions and Notes ▲"
    }
}

function upvoteMethod() {
    const greatGrandParentCon = this.parentNode.parentNode.parentNode
    const key = greatGrandParentCon.dataset.pk
    const rankerVoteText = greatGrandParentCon.querySelector(".ranker-vote-text")
    var button = this.getBoundingClientRect();

    if (votes.includes(key)) {
        const alreadyVoted = document.querySelector("#already-voted-con")
        
        
        alreadyVoted.style.display = "block"

        let boxDimensions = alreadyVoted.getBoundingClientRect()
        let halfWidth = boxDimensions.width / 2

        alreadyVoted.style.left = `${button.left + window.scrollX - halfWidth}px`; 
        alreadyVoted.style.top = `${button.top + window.scrollY + 30}px`;

        setTimeout(() => {
            alreadyVoted.style.display = "none"
        }, 2500);

        return;
    }

    votes.push(key);

    localStorage.setItem("vote-list", JSON.stringify(votes));

    fetch(`${baseURL}methods-votes/${key}`)
    .then(response => response.json())
    .then(response => {
        let currentVotes = Number(response[0].votes);
        currentVotes++;

        return fetch(`${baseURL}votes/submit/${key}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ currentVotes })
        });
    })
    .then(response => response.json())
    .then(response => {
        fetch(`${baseURL}methods-votes/${key}`)
        .then(response => response.json())
        .then(response => {
            const votedMessage = document.querySelector("#vote-con")

            rankerVoteText.textContent = response[0].votes
            this.classList.add("ranker-voted");

            votedMessage.style.display = "block"

            let boxDimensions = votedMessage.getBoundingClientRect()
            let halfWidth = boxDimensions.width / 2

            votedMessage.style.left = `${button.left + window.scrollX - halfWidth + 10}px`; 
            votedMessage.style.top = `${button.top + window.scrollY + 20}px`;

            setTimeout(() => {
                votedMessage.style.display = "none"
            }, 2500);
        })
    });
}

function loadVotes() {
    let voteList = JSON.parse(localStorage.getItem("vote-list")) || [];

    if (voteList) {
        votes = voteList
    }
}

function applyVote() {
    const methodCon = document.querySelectorAll(".method-con");

    methodCon.forEach(method => {
        if (votes.includes(method.dataset.pk)) {
            const arrow = method.querySelector(".ranker-upvote");
            arrow.classList.add("ranker-voted");
        }
    });
}

function openStandardInformation() {
    const standardHide = document.querySelector("#standard-hide")
    const standardOpen = document.querySelector("#standard-open")

    if (standardHide.style.display === "block") {
        standardHide.style.display = "none"
        standardOpen.textContent = "▼ Open Standard Rates ▼"
    } else {
        standardHide.style.display = "block"
        standardOpen.textContent = "▲ Close Standard Rates ▲"
    }
}

rankSelect.addEventListener("change", displayShinyMethods)
window.addEventListener("load", loadVotes)