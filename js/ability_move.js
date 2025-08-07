const baseURL = "https://littlerootdreams.com/lumen/public/"
const moveLists = document.querySelectorAll(".move-select")
const svButton = document.querySelector("#sv-moves")
const abilityList = document.querySelector("#ability-select")

function listPopulation() {

     fetch(`${baseURL}abilities`)
        .then(response => response.json())
        .then(function(response){
            response.forEach(ability => {
                const option = document.createElement("option")

                option.textContent = ability.ability
                option.setAttribute("data-abilitykey", `${ability.id}`)
                option.setAttribute("class", "ability")

                abilityList.appendChild(option)
            })
        })
        .catch(error => {
            
        })

    moveLists.forEach(moveList => {
        fetch(`${baseURL}moves`)
        .then(response => response.json())
        .then(function(response){
            response.forEach(move => {
                const option = document.createElement("option")

                option.textContent = move.move
                option.setAttribute("data-movekey", `${move.id}`)
                option.setAttribute("class", "move")

                moveList.appendChild(option)
            })
        })
        .catch(error => {
            
        })
    })
}

listPopulation()

function svMoves() {
    const moves = document.querySelectorAll(".move")

    moves.forEach(move => move.remove())

    moveLists.forEach(moveList => {
        fetch(`${baseURL}svmoves`)
        .then(response => response.json())
        .then(function(response){
            response.forEach(move => {
                const option = document.createElement("option")

                option.textContent = move.move
                option.setAttribute("data-movekey", `${move.id}`)
                option.setAttribute("class", "move")

                moveList.appendChild(option)
            })
        })
        .catch(error => {
            
        })
    })
}

svButton.addEventListener("click", svMoves)