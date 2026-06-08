const visualizerCon = document.querySelector("#visualizer-con")
const baseURL = "https://littlerootdreams.com/lumen/public/"

console.log(visualizerCon)

function populateVisualizer() {
    fetch(`${baseURL}gen/all`)
    .then(response => response.json())
    .then(function(response){
        console.log(response)
        
        response.forEach(pokemon => {
            const img = document.createElement("img")
            const shinyIMG = document.createElement("img")
            const imgDiv = document.createElement("div")
            const div = document.createElement("div")
            const name = document.createElement("p")
            const bst = document.createElement("p")
            const type1 = document.createElement("p")
            const type2 = document.createElement("p")
            const generation = document.createElement("p")

            img.src = `../images/pokemon_images/${pokemon.number}.png`
            shinyIMG.src = `../images/pokemon_images/shiny_forms/${pokemon.number}.png`

            name.textContent = pokemon.name
            bst.textContent = `BST: ${pokemon.bst}`
            type1.textContent = pokemon.type1
            type2.textContent = pokemon.type2
            generation.textContent = `Generation: ${pokemon.generation}`

            name.setAttribute("class", "visualizer-name")
            bst.setAttribute("class", "visualizer-bst")
            div.setAttribute("class", "visualizer-div")
            imgDiv.setAttribute("class", "visualizer-image-div")
            type1.setAttribute("class", `visualizer-type visualizer-${pokemon.type1}`)
            type2.setAttribute("class", `visualizer-type visualizer-${pokemon.type2}`)
            generation.setAttribute("class", 'visualizer-generation')

            if (pokemon.type2 === null) {
                type2.textContent = "-No second type-"
            }

            imgDiv.appendChild(img)
            imgDiv.appendChild(shinyIMG)
            div.appendChild(imgDiv)
            div.appendChild(name)
            div.appendChild(bst)
            div.appendChild(type1)
            div.appendChild(type2)
            div.appendChild(generation)

            visualizerCon.appendChild(div)
        })
    })
}

populateVisualizer()