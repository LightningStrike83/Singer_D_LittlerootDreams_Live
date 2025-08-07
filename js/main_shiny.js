const shinyBank = document.querySelector("#shiny-bank")
const shinyList = document.querySelector("#shiny-collection")
const activeHunt = document.querySelector("#active-hunt")
const baseURL = "https://littlerootdreams.com/lumen/public/"
const huntIndicator = document.querySelector("#hunt-indicator")
const saveButton = document.querySelector("#shiny-save")
const collectionName = document.querySelector("#collection-name-form")
const nameForm = document.querySelector("#download-name-con")
const topText = document.querySelector(".top-text")
let finalName = ""
let spinner = `<div id="spinner-con"><img id="spinner" src="../images/spinner.gif" alt="Loading spinner"> <p id="spinner-text">Loading...</p></div>`

async function shinyPopulation() {
    shinyBank.innerHTML = spinner;

    try {
        const response = await fetch(`${baseURL}shinies/all`);
        const data = await response.json();

        shinyBank.innerHTML = "";

        data.forEach(shiny => {
            const div = document.createElement("div");
            const img = document.createElement("img");
            const p = document.createElement("p");
            const buttonDiv = document.createElement("div");
            const collectionButton = document.createElement("button");
            const huntButton = document.createElement("button");

            div.setAttribute("class", "shiny-div");
            div.setAttribute("data-div", shiny.id);

            img.src = `images/pokemon_images/shiny_forms/${shiny.number}.png`;
            img.setAttribute("class", "shiny-image");
            img.setAttribute("alt", `Image of Shiny ${shiny.name}`);

            p.textContent = `${shiny.name}`;
            p.setAttribute("class", "shiny-name");

            huntButton.innerText = "Add to Hunting";
            huntButton.setAttribute("class", "hunt-button");
            collectionButton.innerText = "Add to Collection";
            collectionButton.setAttribute("class", "collection-button");

            buttonDiv.setAttribute("class", "button-div");

            collectionButton.addEventListener("click", addToCollection);
            huntButton.addEventListener("click", addToHunt);

            div.appendChild(img);
            div.appendChild(p);
            buttonDiv.appendChild(collectionButton);
            buttonDiv.appendChild(huntButton);
            div.appendChild(buttonDiv);
            shinyBank.appendChild(div);

            if (shiny.number >= 1000) {
                div.style.order = "2";
            }

            if ((shiny.number === "1017c") || (shiny.number === "1017w") || (shiny.number === "1017h") || (shiny.number === "1012a") || (shiny.number === "1013a")) {
                div.style.order = "2";
            }
        });
    } catch (error) {
        console.error("Error fetching shiny data:", error);
        shinyBank.innerHTML = `<p>Sorry, something went wrong! ${error}</p>`;
    }
}


function addToCollection() {
    let n = this.parentNode.parentNode.dataset.div
    const bankImage = this.parentNode.parentNode.querySelector("img")
    const bankDiv = this.parentNode.parentNode
    const shinyCollection = document.querySelector("#shiny-collection")
    var x = window.matchMedia("(min-width: 728px)")
  
    if (x.matches) {
    } else {
      gsap.to(window, { duration: 1, scrollTo: (shinyCollection)})
    }

    fetch(`${baseURL}shinies/${n}`)
    .then(response => response.json())
    .then(function(response){
        const div = document.createElement("div")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const removeButton = document.createElement("button")
        const amount = document.createElement("p")
        const minusButton = document.createElement("button")
        const plusButton = document.createElement("button")
        const countButtonDiv = document.createElement("div")

        if (bankImage.style.opacity !== "0.2") {
            bankImage.style.opacity = "20%"
            bankDiv.style.backgroundImage = "none"
            bankDiv.style.backgroundColor = "#4E3524ae"

            div.setAttribute("class", "shiny-div")
            div.setAttribute("data-div", response.id)
            div.setAttribute("data-sort", response.number)

            img.src = `images/pokemon_images/shiny_forms/${response.number}.png`
            img.setAttribute("class", "shiny-image")
            img.setAttribute("alt", `Image of Shiny ${response.name}`)

            p.textContent = `${response.name}`
            p.setAttribute("class", "shiny-name")

            amount.innerHTML = 'Amount: <span class="shiny-count">1</span>'
            amount.setAttribute("class", "shiny-amount")

            removeButton.setAttribute("class", "remove-button")
            removeButton.innerText = "Remove from Collection"

            plusButton.innerText = "+"
            plusButton.setAttribute("class", "plus-button")
            minusButton.innerText = "-"
            minusButton.setAttribute("class", "minus-button")

            countButtonDiv.setAttribute("class", "count-button-con")

            countButtonDiv.appendChild(minusButton)
            countButtonDiv.appendChild(amount)
            countButtonDiv.appendChild(plusButton)

            div.appendChild(countButtonDiv)
            div.appendChild(img)
            div.appendChild(p)
            div.appendChild(removeButton)
            shinyCollection.appendChild(div)

            if (response.number >= 1000) {
                div.style.order = "2"
            }
        
            if ((response.number === "1017c") || (response.number === "1017w") || (response.number === "1017h")) {
                div.style.order = "2"
            }

            plusButton.addEventListener("click", increaseCount)
            minusButton.addEventListener("click", decreaseCount)
            removeButton.addEventListener("click", removePokemon)

            sortNodes()

            saveState()
        }
    })
    .catch(error => {
        shinyList.innerHTML = `<p>Sorry, something went wrong! ${error}</p>`
    })
}

function sortNodes() {
    const shinyCollection = document.querySelector("#shiny-collection")
    const shinyArray = Array.from(shinyCollection.childNodes)

    shinyArray.sort((a, b) => a.dataset.sort.trim().localeCompare(b.dataset.sort.trim()))

    shinyArray.forEach(div => shinyCollection.appendChild(div))

    saveState()
}

function increaseCount() {
    const shinyCollection = document.querySelector("#shiny-collection")
    let plus = this.parentNode.parentNode.querySelector(".shiny-count");
    let n = parseInt(plus.textContent, 10);

    plus.textContent = ++n;

    saveState()
}

function decreaseCount() {
    const shinyCollection = document.querySelector("#shiny-collection")
    let minus = this.parentNode.parentNode.querySelector(".shiny-count");
    let n = parseInt(minus.textContent, 10);

    if (n > 1) {
        minus.textContent = --n;
    }

    saveState()
}

function removePokemon() {
    const shinyCollection = document.querySelector("#shiny-collection")
    const thisDiv = this.parentNode
    const originalDiv = shinyBank.querySelectorAll(".shiny-div")

    originalDiv.forEach(original => {
        if (original.dataset.div === thisDiv.dataset.div) {
            const originalImage = original.querySelector("img")
            originalImage.style.opacity = "100%"
            original.style.backgroundColor = "none"
            original.style.backgroundImage = "linear-gradient(#fff, #ededed)"
        }
    })

    thisDiv.remove()

    saveState()
}

function addToHunt() {
    let n = this.parentNode.parentNode.dataset.div
    const activeHunt = document.querySelector("#active-hunt")
    const indicator = document.querySelector("#hunt-indicator")
    var x = window.matchMedia("(min-width: 728px)")
  
    if (x.matches) {
    } else {
      gsap.to(window, { duration: 1, scrollTo: (activeHunt)})
    }

    fetch(`${baseURL}shinies/${n}`)
    .then(response => response.json())
    .then(function(response){
        const div = document.createElement("div")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const removeButton = document.createElement("button")
        const amount = document.createElement("p")
        const minusButton = document.createElement("button")
        const plusButton = document.createElement("button")
        const countButtonDiv = document.createElement("div")

        div.setAttribute("class", "hunt-div")

        img.src = `images/pokemon_images/shiny_forms/${response.number}.png`
        img.setAttribute("class", "shiny-image")
        img.setAttribute("alt", `Image of Shiny ${response.name}`)

        p.textContent = `${response.name}`
        p.setAttribute("class", "hunt-name")

        amount.innerHTML = 'Tracker: <span class="hunt-count">1</span>'

        removeButton.setAttribute("class", "hunt-remove-button")
        removeButton.innerText = "Remove from Active Hunt"

        plusButton.innerText = "+"
        plusButton.setAttribute("class", "hunt-plus-button")
        minusButton.innerText = "-"
        minusButton.setAttribute("class", "hunt-minus-button")

        countButtonDiv.setAttribute("class", "hunt-count-button-con")

        countButtonDiv.appendChild(minusButton)
        countButtonDiv.appendChild(amount)
        countButtonDiv.appendChild(plusButton)

        div.appendChild(countButtonDiv)
        div.appendChild(img)
        div.appendChild(p)
        div.appendChild(removeButton)
        activeHunt.appendChild(div)

        plusButton.addEventListener("click", increaseHunt)
        minusButton.addEventListener("click", decreaseHunt)
        removeButton.addEventListener("click", removeHunt)

        saveState()
    })

    indicator.textContent = `1 active hunt`

    if (activeHunt.hasChildNodes()) {
        if (activeHunt.childNodes.length >= 1) {
            indicator.textContent = `${activeHunt.childNodes.length +1} active hunts`;
        }
    }
}

function increaseHunt() {
    const activeHunt = document.querySelector("#active-hunt")
    let plus = this.parentNode.parentNode.querySelector(".hunt-count");
    let n = parseInt(plus.textContent, 10);

    plus.textContent = ++n;

    saveState()
}

function decreaseHunt() {
    const activeHunt = document.querySelector("#active-hunt")
    let minus = this.parentNode.parentNode.querySelector(".hunt-count");
    let n = parseInt(minus.textContent, 10);

    if (n > 1) {
        minus.textContent = --n;
    }

    saveState()
}

function removeHunt() {
    const thisDiv = this.parentNode
    const activeHunt = document.querySelector("#active-hunt")
    const indicator = document.querySelector("#hunt-indicator")

    thisDiv.remove()

    if (activeHunt.hasChildNodes()) {
        if (activeHunt.childNodes.length >= 1) {
            indicator.textContent = `${activeHunt.childNodes.length} active hunts`;
        } else {
            indicator.textContent = `1 active hunt`;
        }
    } else if (!activeHunt.hasChildNodes()) {
        indicator.textContent = "-No Active Hunts-";
    }

    saveState()
}

function saveState() {
    const listString = shinyList.innerHTML;
    const huntString = activeHunt.innerHTML;
    const huntText = huntIndicator.textContent;

    const listCompressed = LZString.compress(listString);
    const huntCompressed = LZString.compress(huntString);
    const huntTextCompressed = LZString.compress(huntText)

    localStorage.setItem('list', listCompressed);
    localStorage.setItem('hunt', huntCompressed);
    localStorage.setItem('text', huntTextCompressed)
}


async function loadState() {
    const listString = localStorage.getItem('list');
    const huntString = localStorage.getItem('hunt');
    const textString = localStorage.getItem('text');

    // Wait for shinyPopulation to finish before proceeding
    await shinyPopulation();

    if (listString) {
        const decompressedList = LZString.decompress(listString);
        shinyList.innerHTML = decompressedList;
        reattachListeners();
        reapplySettings();
    }

    if (huntString) {
        const decompressedHunt = LZString.decompress(huntString);
        activeHunt.innerHTML = decompressedHunt;
        reattachListeners();
    }

    if (textString) {
        const decompressedText = LZString.decompress(textString);
        huntIndicator.textContent = decompressedText;
    }
}

function reapplySettings() {
    const listDiv = shinyList.querySelectorAll(".shiny-div");
    
    listDiv.forEach(list => {
        const listData = list.dataset.div;
        const bankDiv = shinyBank.querySelectorAll(".shiny-div");

        bankDiv.forEach(bank => {
            const bankData = bank.dataset.div;

            if (listData === bankData) {
                const bankImage = bank.querySelector("img")

                bankImage.style.opacity = "20%"
                bank.style.backgroundImage = "none"
                bank.style.backgroundColor = "#4E3524ae"
            }
        });
    });
}

function reattachListeners() {
    const removeButton = document.querySelectorAll(".remove-button")
    const huntremoveButton = document.querySelectorAll(".hunt-remove-button")
    const huntButton = document.querySelectorAll(".hunt-button")
    const collectionButton = document.querySelectorAll(".collection-button")
    const huntPlusButton = document.querySelectorAll(".hunt-plus-button")
    const huntMinusButton = document.querySelectorAll(".hunt-minus-button")
    const plusButton = document.querySelectorAll(".plus-button")
    const minusButton = document.querySelectorAll(".minus-button")

    removeButton.forEach(button => {
        button.addEventListener("click", removePokemon)
    })

    huntremoveButton.forEach(button => {
        button.addEventListener("click", removeHunt)
    })

    huntButton.forEach(button => 
        button.addEventListener("click", addToHunt)
    )

    collectionButton.forEach(button => {
        button.addEventListener("click", addToCollection)
    })

    huntPlusButton.forEach(button => {
        button.addEventListener("click", increaseHunt)
    })

    huntMinusButton.forEach(button => {
        button.addEventListener("click", decreaseHunt)
    })

    plusButton.forEach(button => {
        button.addEventListener("click", increaseCount)
    })
    
    minusButton.forEach(button => {
        button.addEventListener("click", decreaseCount)
    })
}

function downloadCollection(event) {
    const removeButton = document.querySelectorAll(".remove-button")
    const collectionList = document.querySelector("#collection-list")
    const plusButton = document.querySelectorAll(".plus-button")
    const minusButton = document.querySelectorAll(".minus-button")
    const shinyDivs = shinyList.querySelectorAll(".shiny-div")
    const p = document.createElement("p")
    const title = document.createElement("h3")
    const form = document.querySelector("#collection-name")
    let formName = form.value

    event.preventDefault()

    finalName = formName

    removeButton.forEach(button => button.remove())
    plusButton.forEach(plus => plus.style.display = "none")
    minusButton.forEach(minus => minus.style.display = "none")

    collectionList.classList.remove("m-col-span-6")

    p.textContent = "Create your own at littlerootdreams.com"
    p.setAttribute("id", "shiny-credit")
    p.style.order = "100"

    title.textContent = `${finalName}`
    title.setAttribute("id", "my-collection-title")

    shinyList.appendChild(title)
    shinyList.appendChild(p)

    shinyList.style.backgroundImage = "linear-gradient(rgba(49, 155, 255, 0.85),rgba(112, 175, 226, 0.85))"
    shinyList.style.backgroundColor = "rgb(42, 42, 42)"

    shinyDivs.forEach(div => {
        div.style.border = "2px solid black"
        div.style.width = "10%"
        div.style.marginBottom = "0"
    })

    html2canvas(shinyList).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "my-collection.png"; 
        link.click();
    });
    
    collectionList.classList.add("m-col-span-6")

    shinyDivs.forEach(div => {
        const newRemove = document.createElement("button")

        div.style.border = "none"
        div.style.width = "20%"
        div.style.marginBottom = "10px"

        newRemove.setAttribute("class", "remove-button")
        newRemove.innerText = "Remove from Collection"
        newRemove.addEventListener("click", removePokemon)

        div.appendChild(newRemove)
    })

    plusButton.forEach(plus => plus.style.display = "block")
    minusButton.forEach(minus => minus.style.display = "block")
    
    form.value = ""
    nameForm.style.visibility = "hidden"
    nameForm.style.opacity = "0"

    shinyList.style.backgroundImage = "none"
    shinyList.style.backgroundColor = "transparent"

    clearText()
}

function clearText() {
    const shinyCredit = document.querySelector("#shiny-credit")
    const collectionTitle = document.querySelector("#my-collection-title")

    shinyCredit.remove()
    collectionTitle.remove()
}

function openNameForm() {
    nameForm.style.visibility = "visible"
    nameForm.style.opacity = "1"
}

function toTop() {
    var x = window.matchMedia("(min-width: 728px)")
  
    if (x.matches) {
      gsap.to(window, { duration: 1, scrollTo: (0)})
    } else {
      gsap.to(window, { duration: 2.5, scrollTo: (0)})
    }
  }

window.addEventListener('load', loadState);
saveButton.addEventListener("click", openNameForm)
collectionName.addEventListener("submit", downloadCollection)
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollToPlugin)});
  topText.addEventListener("click", toTop)

// localStorage.clear()