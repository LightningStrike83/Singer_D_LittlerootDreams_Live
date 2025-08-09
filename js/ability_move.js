const baseURL = "https://littlerootdreams.com/lumen/public/"
const moveLists = document.querySelectorAll(".move-select")
const svButton = document.querySelector("#sv-moves")
const abilityList = document.querySelector("#ability-select")
const calculateButton = document.querySelector("#am-calculate")
const PokeAPI = "https://pokeapi.co/api/v2/move/"

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

function calculatePokemon() {
    const ability = document.querySelector("#ability-select")
    const abilityValue = ability.options[ability.selectedIndex].dataset.abilitykey
    const move1 = document.querySelector("#am-move1")
    const move1Value = move1.options[move1.selectedIndex].dataset.movekey
    const move2 = document.querySelector("#am-move2")
    const move2Value = move2.options[move2.selectedIndex].dataset.movekey
    const move3 = document.querySelector("#am-move3")
    const move3Value = move3.options[move3.selectedIndex].dataset.movekey
    const move4 = document.querySelector("#am-move4")
    const move4Value = move4.options[move4.selectedIndex].dataset.movekey

    let fetchPromises = [];

    let data = {
        ability: "",
        move1: "",
        move2: "",
        move3: "",
        move4: ""
    };

    let results = {
        abilityResults: [],
        move1Results: [],
        move2Results: [],
        move3Results: [],
        move4Results: [],
    }

    if (abilityValue !== undefined) {
        data.ability = abilityValue
    }
    
    if (move1Value !== undefined) {
        data.move1 = move1Value
    }
    
    if (move2Value !== undefined) {
        data.move2 = move2Value
    }
    
    if (move3Value !== undefined) {
        data.move3 = move3Value
    }
    
    if (move4Value !== undefined) {
        data.move4 = move4Value
    }

    if (data.move1 !== "" && (data.move1 === data.move2 || data.move1 === data.move3 || data.move1 === data.move4)) {
        console.log("1 is the same!")
    } else if (data.move2 !== "" && (data.move2 === data.move1 || data.move2 === data.move3 || data.move2 === data.move4)) {
        console.log("2 is the same!")
    } else if (data.move3 !== "" && (data.move3 === data.move1 || data.move3 === data.move2 || data.move3 === data.move4)) {
        console.log("3 is the same!")
    } else if (data.move4 !== "" && (data.move4 === data.move1 || data.move4 === data.move2 || data.move4 === data.move3)) {
        console.log("4 is the same!")
    } else {
        if (data.ability !== "") {
        const p = fetch(`${baseURL}pokemon-ability/${data.ability}`)
        .then(response => response.json())
        .then(function(response){
            response.forEach(ability => {
                results.abilityResults.push(ability.id);
            });
        });

        fetchPromises.push(p);
    }

        if (data.move1 !== "") {
           const p = fetch(`${PokeAPI}${data.move1}`)
            .then(response => response.json())
            .then(function(response){
                const pokemonList = response.learned_by_pokemon;

                let innerPromises = [];
                
                if (pokemonList.length === 0) {
                    const resultsCon = document.querySelector("#results");
                    const img = document.createElement("img")
                    const p = document.createElement("p")
                    const div = document.createElement("div")
                    const button = document.querySelector("#show-sv-button")

                    if (button) {
                        button.remove()
                    }

                    resultsCon.innerHTML = ""

                    img.src = "../images/pokemon_images/201qm.png"
                    p.textContent = "Sorry, there are no Pokemon that match those results"
                    div.setAttribute("id", "no-results-con")

                    div.appendChild(img)
                    div.appendChild(p)
                    resultsCon.appendChild(div)

                    return Promise.reject(new Error("No Pokémon found for move"));
                }

                pokemonList.forEach(pokemon => {
                    const url = pokemon.url;
                    const match = url.match(/(?:^|\/)(\d+)(?:\/|$)/);

                    if (match) {
                        const number = match[1];

                        const innerP = fetch(`${baseURL}api-search/${number}`)
                        .then(response => response.json())
                        .then(function(response){

                        if (response.length > 0 && response[0].id !== undefined) {
                            results.move1Results.push(response[0].id);
                        } else {
                            console.warn("Unexpected or empty response for number:", number, response);
                        }
                    });

                        innerPromises.push(innerP);
                    }
                });

                return Promise.all(innerPromises);

                });

                fetchPromises.push(p);
        }

        if (data.move2 !== "") {
            const p = fetch(`${PokeAPI}${data.move2}`)
            .then(response => response.json())
            .then(function(response){
                const pokemonList = response.learned_by_pokemon;
                let innerPromises = [];

                if (pokemonList.length === 0) {
                    const resultsCon = document.querySelector("#results");
                    const img = document.createElement("img")
                    const p = document.createElement("p")
                    const div = document.createElement("div")
                    const button = document.querySelector("#show-sv-button")

                    if (button) {
                        button.remove()
                    }

                    resultsCon.innerHTML = ""

                    img.src = "../images/pokemon_images/201qm.png"
                    p.textContent = "Sorry, there are no Pokemon that match those results"
                    div.setAttribute("id", "no-results-con")

                    div.appendChild(img)
                    div.appendChild(p)
                    resultsCon.appendChild(div)

                    return Promise.reject(new Error("No Pokémon found for move"));
                }

                pokemonList.forEach(pokemon => {
                    const url = pokemon.url;
                    const match = url.match(/(?:^|\/)(\d+)(?:\/|$)/);
                    if (match) {
                        const number = match[1];
                        const innerP = fetch(`${baseURL}api-search/${number}`)
                        .then(response => response.json())
                        .then(function(response){
                            if (response.length > 0 && response[0].id !== undefined) {
                                results.move2Results.push(response[0].id);
                            } else {
                                console.warn("Unexpected or empty response for number:", number, response);
                            }
                        });

                        innerPromises.push(innerP);
                    }
                });

                return Promise.all(innerPromises);
            });

            fetchPromises.push(p);
        }


        if (data.move3 !== "") {
            const p = fetch(`${PokeAPI}${data.move3}`)
            .then(response => response.json())
            .then(function(response){
                const pokemonList = response.learned_by_pokemon;
                let innerPromises = [];

                if (pokemonList.length === 0) {
                    const resultsCon = document.querySelector("#results");
                    const img = document.createElement("img")
                    const p = document.createElement("p")
                    const div = document.createElement("div")
                    const button = document.querySelector("#show-sv-button")

                    if (button) {
                        button.remove()
                    }

                    resultsCon.innerHTML = ""

                    img.src = "../images/pokemon_images/201qm.png"
                    p.textContent = "Sorry, there are no Pokemon that match those results"
                    div.setAttribute("id", "no-results-con")

                    div.appendChild(img)
                    div.appendChild(p)
                    resultsCon.appendChild(div)

                    return Promise.reject(new Error("No Pokémon found for move"));
                }

                pokemonList.forEach(pokemon => {
                    const url = pokemon.url;
                    const match = url.match(/(?:^|\/)(\d+)(?:\/|$)/);
                    if (match) {
                        const number = match[1];
                        const innerP = fetch(`${baseURL}api-search/${number}`)
                        .then(response => response.json())
                        .then(function(response){
                            if (response.length > 0 && response[0].id !== undefined) {
                                results.move3Results.push(response[0].id);
                            } else {
                                console.warn("Unexpected or empty response for number:", number, response);
                            }
                        });

                        innerPromises.push(innerP);
                    }
                });

                return Promise.all(innerPromises);
            });

            fetchPromises.push(p);
        }

        if (data.move4 !== "") {
            const p = fetch(`${PokeAPI}${data.move4}`)
            .then(response => response.json())
            .then(function(response){
                const pokemonList = response.learned_by_pokemon;
                let innerPromises = [];

                if (pokemonList.length === 0) {
                    const resultsCon = document.querySelector("#results");
                    const img = document.createElement("img")
                    const p = document.createElement("p")
                    const div = document.createElement("div")
                    const button = document.querySelector("#show-sv-button")

                    if (button) {
                        button.remove()
                    }

                    resultsCon.innerHTML = ""

                    img.src = "../images/pokemon_images/201qm.png"
                    p.textContent = "Sorry, there are no Pokemon that match those results"
                    div.setAttribute("id", "no-results-con")

                    div.appendChild(img)
                    div.appendChild(p)
                    resultsCon.appendChild(div)

                    return Promise.reject(new Error("No Pokémon found for move"));
                }

                pokemonList.forEach(pokemon => {
                    const url = pokemon.url;
                    const match = url.match(/(?:^|\/)(\d+)(?:\/|$)/);
                    if (match) {
                        const number = match[1];
                        const innerP = fetch(`${baseURL}api-search/${number}`)
                        .then(response => response.json())
                        .then(function(response){
                            if (response.length > 0 && response[0].id !== undefined) {
                                results.move4Results.push(response[0].id);
                            } else {
                                console.warn("Unexpected or empty response for number:", number, response);
                            }
                        });

                        innerPromises.push(innerP);
                    }
                });

                return Promise.all(innerPromises);
            });

            fetchPromises.push(p);
        }

    Promise.all(fetchPromises).then(() => {
        console.log("All fetches done, results:", results);

        let finalresults = [];

        const allArrays = [results.abilityResults, results.move1Results, results.move2Results, results.move3Results, results.move4Results]

        const activeArrays = allArrays.filter(a => Array.isArray(a) && a.length > 0)

        if (activeArrays.length > 1) {
            const commonNumbers = activeArrays.reduce((acc, current) => acc.filter(item => current.includes(item)))
            console.log("Common to all:", commonNumbers)
            finalresults.push(...commonNumbers)


            populateResults(finalresults)

        } else if (activeArrays.length === 1) {
            const numbers = activeArrays[0]

            finalresults.push(...numbers)

            console.log(finalresults)

            populateResults(finalresults)

        }
    }).catch(error => {
        console.error("Error during fetches:", error);
    });
        
    }
}

function populateResults(finalresults, i = 0) {
    const resultsCon = document.querySelector("#results");

    console.log("finalResults length:", finalresults.length)

    if (finalresults.length === 0) {
        const resultsCon = document.querySelector("#results");
        const img = document.createElement("img")
        const p = document.createElement("p")
        const div = document.createElement("div")

        resultsCon.innerHTML = ""

        img.src = "../images/pokemon_images/201qm.png"
        p.textContent = "Sorry, there are no Pokemon that match those results"
        div.setAttribute("id", "no-results-con")

        div.appendChild(img)
        div.appendChild(p)
        resultsCon.appendChild(div)

        return;
    }

    if (i >= finalresults.length) {
        const button = document.createElement("button")

        button.innerText = "Show Scarlet and Violet Pokemon only?"
        button.setAttribute("id", "show-sv-button")
        button.addEventListener("click", deleteNonSV)

        resultsCon.appendChild(button)

        return;
    }

    if (i === 0) {
        resultsCon.innerHTML = ""
    }

    fetch(`${baseURL}search/${finalresults[i]}`)
        .then(response => response.json())
        .then(function(response){
            console.log(response);

            const img = document.createElement("img");
            const p = document.createElement("p");
            const div = document.createElement("div");
            

            img.src = `../images/pokemon_images/${response[0].number}.png`;
            p.textContent = `${response[0].name}`;
            div.setAttribute("data-ScarVio", `${response[0].in_ScarVio}`);
            div.setAttribute("class", "am-result")
            

            div.appendChild(img);
            div.appendChild(p);
            resultsCon.appendChild(div);
            

            populateResults(finalresults, i + 1);
        })
        .catch(err => {
            console.error("Fetch error:", err);

            populateResults(finalresults, i + 1);
        });

        
}

function deleteNonSV() {
    const pokeDivs = document.querySelectorAll(".am-result")
    const button = document.querySelector("#show-sv-button")

    pokeDivs.forEach(div => {
        if (div.dataset.ScarVio !== "y") {
            if (div.style.display === "none") {
                div.style.display = "flex"

                button.innerText = "Show Scarlet and Violet Pokemon only?"
            } else {
                div.style.display = "none"

                button.innerText = "Show All Pokemon?"
            }
        }
    })
}

svButton.addEventListener("click", svMoves)
calculateButton.addEventListener("click", calculatePokemon)