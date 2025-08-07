const baseURL = "https://littlerootdreams.com/lumen/public/"
const generateButton = document.querySelector("#gw-generate")
const loadButton = document.querySelector("#gw-submit")
const yourName = document.querySelector("#gw-pokemon-name")
const imageSelection = document.querySelector("#select-image")
const shinyCheck = document.querySelector("#shiny-checkbox")
const shinyCheckCon = document.querySelector("#shiny-checkbox-con")
const shinyText = document.querySelector("#shiny-check")
const bingoButton = document.querySelector("#bingo-button")
const gwBoard = document.querySelector("#gw-board");
let spinner = `<div id="spinner-con"><img id="spinner" src="../images/spinner.gif" alt="Loading spinner"> <p id="spinner-text">Loading...</p></div>`

function generateBoard() {
    const gameSelect = document.querySelector("#gw-select")
    const selectValue = gameSelect.value

    imageSelection.src = ""
    imageSelection.setAttribute("alt", "")

    gwBoard.innerHTML = spinner

    fetch(`${baseURL}${selectValue}`)
    .then(response => response.json())
    .then(function(response){
        let n = Math.min(response.length, 25);
        let usedCharacters = new Set();

        gwBoard.innerHTML = ""

        for (let l = 0; l < n; l++) {
            const div = document.createElement("div");
            div.setAttribute("class", "board-piece");
            div.style.opacity = "1";
            gwBoard.appendChild(div);
        }

        const boardPieces = document.querySelectorAll(".board-piece");

        boardPieces.forEach(piece => {
            piece.innerHTML = ""

            piece.style.opacity = "1"

            let img = document.createElement("img")
            let name = document.createElement("p")
            let key = document.createElement("p")
            let number;

            do {
                number = Math.floor(Math.random() * response.length);
            } while (
                usedCharacters.has(number)
            );

            usedCharacters.add(number);

            img.setAttribute("class", "gw-image")
            img.setAttribute("alt", `Image of ${response[number].name}`)
            name.setAttribute("class", "gw-name")
            key.setAttribute("class", "gw-key")

            if (shinyCheck.checked === true) {
                img.src = `images/pokemon_images/shiny_forms/${response[number].number}.png`
            } else {
                img.src = `images/pokemon_images/${response[number].number}.png`
            }

            name.textContent = response[number].name
            key.textContent = response[number].number

            piece.appendChild(img)
            piece.appendChild(name)
            piece.appendChild(key)

            piece.addEventListener("click", deselectPiece)
        })

        saveGame()
        selectList()
    })
    .catch(error => {
        const gameToken = document.querySelector("#gw-token")

        gameToken.innerHTML = ""

        let errortext = document.createElement("p")
        errortext.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

        gameToken.appendChild(errortext)
    })
}

function selectList() {
    yourName.innerHTML = ""
    const piece = document.querySelectorAll(".board-piece")
    const defaultVar = document.createElement("option")

    defaultVar.textContent = "Please Select A Pokemon"
    yourName.appendChild(defaultVar)

    piece.forEach(piece => {
        let name = piece.querySelector(".gw-name")
        let number = piece.querySelector(".gw-key")
        let option = document.createElement("option")
        option.textContent = name.textContent
        option.id = number.textContent
        option.value = number.textContent
        yourName.appendChild(option)
    })
}

function imageSelect() {
    const selectImage = document.querySelector("#select-image")
    const selectedValue = yourName.value
    
    if (shinyText.textContent === "y") {
        selectImage.src = `images/pokemon_images/shiny_forms/${selectedValue}.png`
    } else {
        selectImage.src = `images/pokemon_images/${selectedValue}.png`
    }

    selectImage.setAttribute("alt", `Your Selected Pokemon: Pokemon Number ${selectedValue}`)
}

function saveGame() {
    const number = document.querySelectorAll(".gw-key")

    const gameData = {
        shiny: shinyText.textContent,
        pokemon1: number[0].innerHTML,
        pokemon2: number[1].innerHTML,
        pokemon3: number[2].innerHTML,
        pokemon4: number[3].innerHTML,
        pokemon5: number[4].innerHTML,
        pokemon6: number[5].innerHTML,
        pokemon7: number[6].innerHTML,
        pokemon8: number[7].innerHTML,
        pokemon9: number[8].innerHTML,
        pokemon10: number[9].innerHTML,
        pokemon11: number[10].innerHTML,
        pokemon12: number[11].innerHTML,
        pokemon13: number[12].innerHTML,
        pokemon14: number[13].innerHTML,
        pokemon15: number[14].innerHTML,
        pokemon16: number[15].innerHTML,
        pokemon17: number[16].innerHTML,
        pokemon18: number[17].innerHTML,
        pokemon19: number[18].innerHTML,
        pokemon20: number[19].innerHTML,
        pokemon21: number[20].innerHTML,
        pokemon22: number[21].innerHTML,
        pokemon23: number[22].innerHTML,
        pokemon24: number[23].innerHTML,
        pokemon25: number[24].innerHTML,
    }

    fetch (`${baseURL}guess-who/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(gameData) 
    })

    .then(response => response.json())
    .then(function(response) {
        const gameToken = document.querySelector("#gw-token")
        const p = document.createElement("p")

        gameToken.innerHTML = ""

        p.textContent = `Your Game ID is ${response.id}`

        gameToken.appendChild(p)
    })
    .catch(error => {
        const gameToken = document.querySelector("#gw-token")

        gameToken.innerHTML = ""

        let errortext = document.createElement("p")
        errortext.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

        gameToken.appendChild(errortext)
    })
}

function deselectPiece() {
    if (this.style.opacity === "1") {
        this.style.opacity = "0.3"
    } else {
        this.style.opacity = "1"
    }
}

function loadGame() {
    const game = document.querySelector("#gw-input");
    const gameNumber = game.value;

    gwBoard.innerHTML = spinner
    imageSelection.src = ""

    fetch(`${baseURL}guess-who/${gameNumber}`)
    .then(response => response.json())
    .then(function(response) {
        const gwBoard = document.querySelector("#gw-board");
        const gameToken = document.querySelector("#gw-token");
        const p = document.createElement("p");

        gwBoard.innerHTML = "";
        gameToken.innerHTML = "";

        p.textContent = `Your game id is ${gameNumber}`;
        gameToken.appendChild(p);

        for (let l = 1; l <= 25; l++) {
            const div = document.createElement("div");
            div.setAttribute("class", "board-piece");
            div.style.opacity = "1";
            gwBoard.appendChild(div);
        }

        const boardPieces = document.querySelectorAll(".board-piece");

        if (response.shiny === "y") {
            shinyCheck.checked = true
        } else {
            shinyCheck.checked = false
        }
        shinyText.textContent = response.shiny

        boardPieces.forEach((piece, index) => {
            const pokemonKey = `pokemon${index + 1}`;
            const pokemonData = response[pokemonKey];

            if (pokemonData) {
                piece.innerHTML = "";
                piece.style.opacity = "1";

                const img = document.createElement("img");
                const name = document.createElement("p");
                const key = document.createElement("p");

                img.setAttribute("class", "gw-image");
                img.setAttribute("alt", `Image of ${pokemonData.name}`)
                name.setAttribute("class", "gw-name");
                key.setAttribute("class", "gw-key");

                if (response.shiny === "y") {
                    img.src = `images/pokemon_images/shiny_forms/${pokemonData.number}.png`;
                } else {
                    img.src = `images/pokemon_images/${pokemonData.number}.png`;
                }

                name.textContent = pokemonData.name;
                key.textContent = pokemonData.number;

                piece.appendChild(img);
                piece.appendChild(name);
                piece.appendChild(key);

                piece.addEventListener("click", deselectPiece);
            }
        });

        selectList();
    })
    .catch(error => {
        const gameToken = document.querySelector("#gw-token");

        gameToken.innerHTML = "";

        const errortext = document.createElement("p");
        errortext.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`;

        gameToken.appendChild(errortext);
    });
}


function shinyData() {
    if (shinyCheck.checked === true) {
        shinyText.textContent = "y"
    } else {
        shinyText.textContent = "n"
    }
}

function bingoMode() {
    const pokemonCon = document.querySelector("#pokemon-con")
    const boardCon = document.querySelector("#board-con")

    if (bingoButton.innerText === "Activate Bingo Mode") {
        bingoButton.innerText = "Deactivate Bingo Mode"
        pokemonCon.style.display = "none"
        boardCon.classList.remove("m-col-span-8")
    } else {
        bingoButton.innerText = "Activate Bingo Mode"
        pokemonCon.style.display = "flex"
        boardCon.classList.add("m-col-span-8")
    }
}

generateButton.addEventListener("click", generateBoard)
loadButton.addEventListener("click", loadGame)
yourName.addEventListener("change", imageSelect)
shinyCheckCon.addEventListener("click", shinyData)
bingoButton.addEventListener("click", bingoMode)