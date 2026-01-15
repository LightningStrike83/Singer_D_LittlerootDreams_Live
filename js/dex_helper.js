const popCon = document.querySelector("#pop-con")
const baseURL = "https://littlerootdreams.com/lumen/public/"
const neededCon = document.querySelector("#needed-con")
const countCon = document.querySelector("#count-con")
const helperSearch = document.querySelector("#helper-search")

function populateList() {
    fetch(`${baseURL}gen/all-no-alt/dex`)
    .then(response => response.json())
    .then(function(response) {
        console.log(response)
        response.forEach(pokemon => {
            const p = document.createElement("p")

            p.innerHTML = `${pokemon.id}. <span class="name-search">${pokemon.name}</span>`
            p.setAttribute("data-key", `${pokemon.id}`)
            p.addEventListener("click", addNumber)
            p.setAttribute("class", "init-mon")

            popCon.appendChild(p)
        })
    })
    .then(fetchRegionals)
    .catch(error => {
    });
}

function fetchRegionals() {
    console.log("success")

    fetch(`${baseURL}custom/regional`)
    .then(response => response.json())
    .then(function(response) {
        console.log(response)
        response.forEach(pokemon => {
            const p = document.createElement("p")

            p.innerHTML = `${pokemon.id}. <span class="name-search">${pokemon.name}</span>`
            p.setAttribute("data-key", `${pokemon.id}`)
            p.addEventListener("click", addNumber)
            p.setAttribute("class", "init-mon")

            popCon.appendChild(p)
        })
    })
    .catch(error => {
    });
}

populateList()

function addNumber() {
    const number = this.dataset.key
    const p = document.createElement("p")

    p.textContent = number
    p.setAttribute("class", "helper-count")

    this.removeEventListener("click", addNumber)
    this.setAttribute("class", "selected-name")

    neededCon.appendChild(this)
    countCon.appendChild(p)
}

function searchPokemon() {
    const names = popCon.querySelectorAll(".name-search")
    const text = helperSearch.value
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, "")
        .trim()

    names.forEach(name => {
        const nameText = name.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, "")

        if (!nameText.includes(text)) {
            const parent = name.parentNode

            parent.style.display = "none"
        } else {
            const parent = name.parentNode
            
            parent.style.display = "block"
        }
    })
}

helperSearch.addEventListener("input", searchPokemon)