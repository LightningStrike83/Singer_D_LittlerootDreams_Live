const submitButton = document.querySelectorAll(".bt-button-submit")
const changeName = document.querySelectorAll(".name-change")
const baseURL = "https://littlerootdreams.com/lumen/public/"
const expandUsable = document.querySelectorAll(".expand-div-usable")
const expandUnusable = document.querySelectorAll(".expand-div-unusable")
const boxRemove = document.querySelectorAll(".box-remove-con")
const createNew = document.querySelector("#create-new")
const minimizeButton = document.querySelectorAll(".minimize-con")
const topText = document.querySelector(".top-text")
let spinner = `<div id="spinner-con" class="spinner-con"><img id="spinner" src="../images/spinner.gif" alt="Loading spinner"> <p id="spinner-text">Loading...</p></div>`

let order = 1

function changeBoxName() {
    const nameParent = this.parentNode.parentNode
    const input = nameParent.querySelector("input")
    const name = nameParent.querySelector(".storage-name")
    const contentDiv = nameParent.querySelector(".change-con")
    const nicknameDrop = nameParent.querySelector(".nickname-drop")
    const nameChange = nameParent.querySelector(".name-change")

    name.innerHTML = input.value

    contentDiv.style.display = "none"
    if (nicknameDrop) {
        nicknameDrop.textContent = "▼"
    } else if (nameChange) {
        nameChange.textContent = "▼"
    }

    saveState()
}

function displayNameChange() {
    const nameParent = this.parentNode.parentNode
    const contentDiv = nameParent.querySelector(".change-con")
    const arrow = this

    if (contentDiv.style.display !== "flex") {
        contentDiv.style.display = "flex"
        arrow.textContent = "▲"
    } else {
        contentDiv.style.display = "none"
        arrow.textContent = "▼"
    }
}

async function pokemonPopulation() {
    const boxOptions = document.querySelectorAll(".bt-pokemon-home")
    const allDataResponse = fetch(`${baseURL}gen/all-no-alt/dex`);
    const regionalDataResponse = fetch(`${baseURL}custom/regional`);

    boxOptions.forEach(box => box.innerHTML = spinner)

    const [allData, regionalData] = await Promise.all([
        allDataResponse.then(response => response.json()),
        regionalDataResponse.then(response => response.json())
    ]);

    const appendPokemonData = (data, container) => {
        data.forEach(pokemon => {
            const div = document.createElement("div");
            const image = document.createElement("img");
            const name = document.createElement("p");
            const addButton = document.createElement("button")

            image.src = `../images/pokemon_images/${pokemon.number}.png`;
            name.textContent = pokemon.name;
            addButton.innerText = "Add To Boxes"

            div.setAttribute("class", "bt-pokemon-box")
            addButton.setAttribute("class", "add-button")

            addButton.addEventListener("click", addToBox)

            div.appendChild(image);
            div.appendChild(name);
            div.appendChild(addButton)
            container.appendChild(div);
        });
    };

    boxOptions.forEach(option => {
        const spinnerCon = document.querySelectorAll(".spinner-con")

        appendPokemonData(allData, option);
        appendPokemonData(regionalData, option);

        spinnerCon.forEach(spinner => spinner.remove())
    });
}

function checkBoxOptions() {
    const boxOptions = document.querySelectorAll(".bt-pokemon-home");
    
    boxOptions.forEach(box => {
        if (box.hasChildNodes()) {
        
        } else {
            pokemonPopulation()
        }
    })
}

checkBoxOptions()

function addToBox() {
    const currentHome = this.parentNode.parentNode.parentNode.parentNode
    const currentStorage = currentHome.querySelector(".usable-home")
    const currentInfo = this.parentNode
    const name = currentInfo.querySelector("p")
    const img = currentInfo.querySelector("img")
    const cloneDiv = document.createElement("div")
    const clonedName = document.createElement("p")
    const clonedPokemon = document.createElement("img")
    const nickname = document.createElement("p")
    const changeDiv = document.createElement("div")
    const input = document.createElement("input")
    const button = document.createElement("button")
    const moveDiv = document.createElement("div")
    const moveLeft = document.createElement("button")
    const moveRight = document.createElement("button")
    const releaseButton = document.createElement("button")
    const unusableButton = document.createElement("button")

    nickname.innerHTML = '<span class="storage-name">Nickname</span><span class="nickname-drop">▼</span>'
    input.setAttribute("type", "text")
    button.setAttribute("class", "bt-button-submit")
    button.innerText = "Change"
    changeDiv.setAttribute("class", "change-con")

    moveLeft.innerText = "◄"
    moveRight.innerText = "►"
    moveLeft.setAttribute("class", "move-left")
    moveRight.setAttribute("class", "move-right")
    moveDiv.setAttribute("class", "move-div")
    moveLeft.addEventListener("click", movePokeLeft)
    moveRight.addEventListener("click", movePokeRight)

    releaseButton.innerText = "Release"
    releaseButton.setAttribute("class", "release-button")
    unusableButton.innerText = "Unusable"
    unusableButton.setAttribute("class", "unusable-button")
    releaseButton.addEventListener("click", releasePokemon)
    unusableButton.addEventListener("click", addToUnusable)

    clonedPokemon.src = img.src
    clonedName.textContent = name.textContent
    clonedName.setAttribute("class", "cloned-name")
    cloneDiv.setAttribute("class", "bt-pokemon-box")
    cloneDiv.style.order = `${order}`
    cloneDiv.style.marginBottom = "10px"

    changeDiv.appendChild(input)
    changeDiv.appendChild(button)
    moveDiv.appendChild(moveLeft)
    moveDiv.appendChild(moveRight)

    cloneDiv.appendChild(nickname)
    cloneDiv.appendChild(changeDiv)
    cloneDiv.appendChild(clonedPokemon)
    cloneDiv.appendChild(clonedName)
    cloneDiv.appendChild(releaseButton)
    cloneDiv.appendChild(unusableButton)
    cloneDiv.appendChild(moveDiv)
    currentStorage.appendChild(cloneDiv)

    attachNicknameEvents()

    if (this.classList.contains("usable-button")) {
        this.parentNode.remove()
    }

    order++

    gsap.to(window, { duration: 1, scrollTo: (currentStorage)})

    saveState()
}

function attachNicknameEvents() {
    const nicknameArrow = document.querySelectorAll(".nickname-drop")
    const nicknameSubmit = document.querySelectorAll(".bt-button-submit")

    nicknameArrow.forEach(arrow => arrow.addEventListener("click", displayNameChange))
    nicknameSubmit.forEach(button => button.addEventListener("click", changeBoxName))
}

function movePokeLeft() {
    const orderDiv = this.parentNode.parentNode;
    const orderValue = parseFloat(orderDiv.style.order) || 0;
    const allDivsSelector = this.parentNode.parentNode.parentNode;
    const allDivs = Array.from(allDivsSelector.querySelectorAll(".bt-pokemon-box"));

    const closestLeftDiv = allDivs
        .filter(div => parseFloat(div.style.order) < orderValue)
        .sort((a, b) => parseFloat(b.style.order) - parseFloat(a.style.order))[0];

    if (closestLeftDiv) {
        const closestLeftOrder = parseFloat(closestLeftDiv.style.order);
        closestLeftDiv.style.order = orderValue;
        orderDiv.style.order = closestLeftOrder;

        saveState()
    }
}

function movePokeRight() {
    const orderDiv = this.parentNode.parentNode;
    const orderValue = parseFloat(orderDiv.style.order) || 0;
    const allDivsSelector = this.parentNode.parentNode.parentNode;
    const allDivs = Array.from(allDivsSelector.querySelectorAll(".bt-pokemon-box"));

    const closestRightDiv = allDivs
        .filter(div => parseFloat(div.style.order) > orderValue)
        .sort((a, b) => parseFloat(a.style.order) - parseFloat(b.style.order))[0];

    if (closestRightDiv) {
        const closestRightOrder = parseFloat(closestRightDiv.style.order);
        closestRightDiv.style.order = orderValue;
        orderDiv.style.order = closestRightOrder;

        saveState()
    }
}


function expandUsableDiv() {
    const home = this.parentNode
    const usableFind = home.querySelector(".usable-pokemon")
    const usableArrow = home.querySelector(".expand-usable-arrow")

    if (usableFind.classList.contains("expand")) {
        usableFind.classList.remove("expand")
        usableArrow.textContent = "▼"
    } else {
        usableFind.classList.add("expand")
        usableArrow.textContent = "▲"
    }
}

function expandUnusableDiv() {
    const home = this.parentNode
    const unusableFind = home.querySelector(".unusable-pokemon")
    const unusableArrow = home.querySelector(".expand-unusable-arrow")

    if (unusableFind.classList.contains("expand")) {
        unusableFind.classList.remove("expand")
        unusableArrow.textContent = "▼"

    } else {
        unusableFind.classList.add("expand")
        unusableArrow.textContent = "▲"
    }
}

function releasePokemon() {
    const div = this.parentNode

    div.remove()

    saveState()
}

function addToUnusable() {
    const home = this.parentNode.parentNode.parentNode.parentNode
    const unusableFind = home.querySelector(".unusable-home")
    const currentInfo = this.parentNode
    const name = currentInfo.querySelector(".cloned-name")
    const img = currentInfo.querySelector("img")
    const clonedNickname = currentInfo.querySelector(".storage-name")
    const cloneDiv = document.createElement("div")
    const nickname = document.createElement("p")
    const clonedName = document.createElement("p")
    const clonedPokemon = document.createElement("img")
    const changeDiv = document.createElement("div")
    const input = document.createElement("input")
    const button = document.createElement("button")
    const moveDiv = document.createElement("div")
    const moveLeft = document.createElement("button")
    const moveRight = document.createElement("button")
    const releaseButton = document.createElement("button")
    const usableButton = document.createElement("button")
    const thisOrder = currentInfo.style.order

    nickname.innerHTML = `<span class="storage-name">${clonedNickname.textContent}</span><span class="nickname-drop">▼</span>`

    input.setAttribute("type", "text")
    button.setAttribute("class", "bt-button-submit")
    button.innerText = "Change"
    changeDiv.setAttribute("class", "change-con")

    moveLeft.innerText = "◄"
    moveRight.innerText = "►"
    moveLeft.setAttribute("class", "move-left")
    moveRight.setAttribute("class", "move-right")
    moveDiv.setAttribute("class", "move-div")
    moveLeft.addEventListener("click", movePokeLeft)
    moveRight.addEventListener("click", movePokeRight)

    releaseButton.innerText = "Release"
    releaseButton.setAttribute("class", "release-button")
    usableButton.innerText = "Usable"
    usableButton.setAttribute("class", "usable-button")
    releaseButton.addEventListener("click", releasePokemon)
    usableButton.addEventListener("click", addToUsable)

    clonedPokemon.src = img.src
    clonedName.textContent = name.textContent
    clonedName.setAttribute("class", "cloned-name")
    cloneDiv.setAttribute("class", "bt-pokemon-box")
    cloneDiv.style.order = `${thisOrder}`
    cloneDiv.style.marginBottom = "10px"

    changeDiv.appendChild(input)
    changeDiv.appendChild(button)
    moveDiv.appendChild(moveLeft)
    moveDiv.appendChild(moveRight)

    cloneDiv.appendChild(nickname)
    cloneDiv.appendChild(changeDiv)
    cloneDiv.appendChild(clonedPokemon)
    cloneDiv.appendChild(clonedName)
    cloneDiv.appendChild(releaseButton)
    cloneDiv.appendChild(usableButton)
    cloneDiv.appendChild(moveDiv)
    unusableFind.appendChild(cloneDiv)

    attachNicknameEvents()

    currentInfo.remove()

    gsap.to(window, { duration: 1, scrollTo: (unusableFind)})

    saveState()
}

function addToUsable() {
    const home = this.parentNode.parentNode.parentNode.parentNode
    const usableFind = home.querySelector(".usable-home")
    const currentInfo = this.parentNode
    const name = currentInfo.querySelector(".cloned-name")
    const img = currentInfo.querySelector("img")
    const clonedNickname = currentInfo.querySelector(".storage-name")
    const cloneDiv = document.createElement("div")
    const nickname = document.createElement("p")
    const clonedName = document.createElement("p")
    const clonedPokemon = document.createElement("img")
    const changeDiv = document.createElement("div")
    const input = document.createElement("input")
    const button = document.createElement("button")
    const moveDiv = document.createElement("div")
    const moveLeft = document.createElement("button")
    const moveRight = document.createElement("button")
    const releaseButton = document.createElement("button")
    const unusableButton = document.createElement("button")
    const thisOrder = currentInfo.style.order

    nickname.innerHTML = `<span class="storage-name">${clonedNickname.textContent}</span><span class="nickname-drop">▼</span>`

    input.setAttribute("type", "text")
    button.setAttribute("class", "bt-button-submit")
    button.innerText = "Change"
    changeDiv.setAttribute("class", "change-con")

    moveLeft.innerText = "◄"
    moveRight.innerText = "►"
    moveLeft.setAttribute("class", "move-left")
    moveRight.setAttribute("class", "move-right")
    moveDiv.setAttribute("class", "move-div")
    moveLeft.addEventListener("click", movePokeLeft)
    moveRight.addEventListener("click", movePokeRight)

    releaseButton.innerText = "Release"
    releaseButton.setAttribute("class", "release-button")
    unusableButton.innerText = "Unusable"
    unusableButton.setAttribute("class", "unusable-button")
    releaseButton.addEventListener("click", releasePokemon)
    unusableButton.addEventListener("click", addToUnusable)

    clonedPokemon.src = img.src
    clonedName.textContent = name.textContent
    clonedName.setAttribute("class", "cloned-name")
    cloneDiv.setAttribute("class", "bt-pokemon-box")
    cloneDiv.style.order = `${thisOrder}`
    cloneDiv.style.marginBottom = "10px"

    changeDiv.appendChild(input)
    changeDiv.appendChild(button)
    moveDiv.appendChild(moveLeft)
    moveDiv.appendChild(moveRight)

    cloneDiv.appendChild(nickname)
    cloneDiv.appendChild(changeDiv)
    cloneDiv.appendChild(clonedPokemon)
    cloneDiv.appendChild(clonedName)
    cloneDiv.appendChild(releaseButton)
    cloneDiv.appendChild(unusableButton)
    cloneDiv.appendChild(moveDiv)
    usableFind.appendChild(cloneDiv)

    attachNicknameEvents()

    currentInfo.remove()

    gsap.to(window, { duration: 1, scrollTo: (usableFind)})

    saveState()
}

function removeStorage() {
    const storage = this.parentNode
    
    storage.remove()

    saveState()
}

function createNewStorage() {
    const boxCon = document.querySelector("#bt-box-con")
    const storageTemplate = document.querySelector("#storage-template")
    const storageClone = storageTemplate.content.cloneNode(true);

    boxCon.appendChild(storageClone)

    reapplyListeners()

    saveState()
}

function reapplyListeners() {
    const submitButtons = document.querySelectorAll(".bt-button-submit");
    const changeNames = document.querySelectorAll(".name-change");
    const boxOptions = document.querySelectorAll(".bt-pokemon-home");
    const expandUsables = document.querySelectorAll(".expand-div-usable");
    const expandUnusables = document.querySelectorAll(".expand-div-unusable");
    const boxRemoves = document.querySelectorAll(".box-remove-con");
    const minimizeButton = document.querySelectorAll(".minimize-con")
    const releaseButton = document.querySelectorAll(".release-button")
    const unusableButton = document.querySelectorAll(".unusable-button")
    const usableButton = document.querySelectorAll(".usable-button")
    const moveLeft = document.querySelectorAll(".move-left")
    const moveRight = document.querySelectorAll(".move-right")

    const addUniqueListener = (elements, event, handler) => {
        elements.forEach(element => {
            element.removeEventListener(event, handler);
            element.addEventListener(event, handler);
        });
    };

    releaseButton.forEach(release => release.addEventListener("click", releasePokemon))
    unusableButton.forEach(button => button.addEventListener("click", addToUnusable))
    usableButton.forEach(button => button.addEventListener("click", addToUsable))
    moveLeft.forEach(button => button.addEventListener("click", movePokeLeft))
    moveRight.forEach(button => button.addEventListener("click", movePokeRight))

    addUniqueListener(submitButtons, "click", changeBoxName);
    addUniqueListener(changeNames, "click", displayNameChange);
    addUniqueListener(expandUsables, "click", expandUsableDiv);
    addUniqueListener(expandUnusables, "click", expandUnusableDiv);
    addUniqueListener(boxRemoves, "click", removeStorage);
    minimizeButton.forEach(button => button.addEventListener("click", minimizeStorage))

    boxOptions.forEach(options => options.innerHTML = "");
    pokemonPopulation();
    darkModeCheck()
}

function darkModeCheck() {
    if (document.body.classList.contains("dark-mode")) {
        let darkModeElements = document.querySelectorAll(".dm")

        darkModeElements.forEach(element => {
            if (element.classList.contains("dm") && !element.classList.contains("dark-mode")) {
                element.classList.add("dark-mode")
            }
        })
    }
}

function minimizeStorage() {
    const parent = this.parentNode
    const storage = parent.querySelector(".bt-content-con")
    const close = parent.querySelector(".box-remove-con")
    const thisText = this.querySelector("p")

    if (storage.style.display === "none") {
        storage.style.display = "flex"
        thisText.textContent = "Minimize -"
        thisText.style.paddingTop = "0px"
        thisText.style.paddingBottom = "0px"
        this.style.marginBottom = "20px"
        close.style.marginTop = "20px"
    } else {
        console.log(thisText)

        storage.style.display = "none"
        thisText.textContent = "Maximize +"
        thisText.style.paddingTop = "15px"
        thisText.style.paddingBottom = "15px"
        this.style.marginBottom = "0"
        close.style.marginTop = "0"
    }
}

function toTop() {
    var x = window.matchMedia("(min-width: 728px)")
  
    if (x.matches) {
      gsap.to(window, { duration: 1, scrollTo: (0)})
    } else {
      gsap.to(window, { duration: 2.5, scrollTo: (0)})
    }
}

function saveState() {
    const storageInfo = document.querySelector("#bt-box-con")
    const storageString = storageInfo.innerHTML

    const storageCompressed = LZString.compress(storageString);

    localStorage.setItem('storage', storageCompressed)
}

function loadState() {
    const storageInfo = document.querySelector("#bt-box-con")
    const storageString = localStorage.getItem('storage')

    if (storageString) {
        const decompressedStorage = LZString.decompress(storageString)

        storageInfo.innerHTML = decompressedStorage
        reapplyListeners()
    }
}

submitButton.forEach(button => button.addEventListener("click", changeBoxName))
changeName.forEach(change => change.addEventListener("click", displayNameChange))
expandUsable.forEach(button => button.addEventListener("click", expandUsableDiv))
expandUnusable.forEach(button => button.addEventListener("click", expandUnusableDiv))
boxRemove.forEach(remove => remove.addEventListener("click", removeStorage))
createNew.addEventListener("click", createNewStorage)
minimizeButton.forEach(button => button.addEventListener("click", minimizeStorage))
topText.addEventListener("click", toTop)
window.addEventListener("load", loadState)

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollToPlugin)});

// localStorage.clear()