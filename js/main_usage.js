const baseURL = "https://littlerootdreams.com/lumen/public/"
const usageSelect = document.querySelector("#usage-select")
const mobileSelect = document.querySelector("#mobile-select")
const topText = document.querySelector(".top-text")
const modeInfo = document.querySelector("#mode-info")
const usageDirection = document.querySelector("#usage-direction")
const modeExplanation = document.querySelector("#usage_legend")
let request = usageSelect.value
let savedVariable = ""
let savedText = ""
let spinner = `<img id="spinner" src="../images/spinner.gif" alt="Loading spinner"><br> <p id="spinner-text">Loading...</p>`

function linePopulation() {
    const lineSelect = document.querySelector("#line-selection")
    lineSelect.innerHTML = spinner

    fetch(`${baseURL}lines`)
    .then(response => response.json())
    .then(function(response){

        lineSelect.innerHTML = ""

        response.forEach(line => {
            const li = document.createElement("li")
            const option = document.createElement("option")

            option.value = line.id
            option.textContent = line.species
            option.setAttribute("data-line", `${line.id}`)

            li.textContent = line.species
            li.setAttribute("data-line", `${line.id}`)
            li.setAttribute("class", "pokemon-line")
            li.addEventListener("click", displayTrainers)
            lineSelect.appendChild(li)
            mobileSelect.appendChild(option)
        })
    })
    .catch(error => {
        const lineSelect = document.querySelector("#line-selection")
        const p = document.createElement("p")

        p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

        lineSelect.appendChild(p)
    })
}

function displayTrainers(e) {
    var mobileTarget = mobileSelect.value
    const lineNumber = e?.currentTarget?.dataset?.line || mobileTarget || savedVariable;
    var x = window.matchMedia("(min-width: 728px)")

    fetch(`${baseURL}trainer-lines/${request}/${lineNumber}`)
        .then(response => response.json())
        .then(function (response) {
            const displayUsage = document.querySelector("#display-usage");
            const ul = document.createElement("ul");
            const usageTitle = document.querySelector("#usage-title");
            const icon = document.querySelector("#usage-icon");
            var x = window.matchMedia("(min-width: 728px)")

            if (x.matches) {
                lineName = e?.target?.textContent || savedText;
              } else {
                lineName = mobileSelect.selectedOptions[0].textContent;
              }

            icon.src = `images/usage/${lineNumber}.png`; 

            displayUsage.innerHTML = "";
            usageTitle.textContent = `The ${lineName} has been used ${response.length} times`;

            response.forEach(trainer => {
                const li = document.createElement("li");
                li.setAttribute("class", "usage-trainer-name");
                li.textContent = trainer.name;
                ul.appendChild(li);
            });

            displayUsage.setAttribute("class", "populated")
            displayUsage.appendChild(ul);
            savedText = lineName
        })
        .catch(error => {
            const usageTitle = document.querySelector("#usage-title");
            usageTitle.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`;
        });

    savedVariable = lineNumber

    if (x.matches) {
    } else {
        gsap.to(window, { duration: 1, scrollTo: ("#display-usage-con")})
    }
}

function newValue() {
    const displayUsage = document.querySelector("#display-usage");
    request = usageSelect.value;

    if (displayUsage.classList.contains("populated")) {
        const eventStub = { currentTarget: { dataset: { line: savedVariable } } };
        displayTrainers(eventStub);
    }

    changeModeText()
}

function toTop() {
    gsap.to(window, { duration: 1, scrollTo: (0)})
}

function changeModeText() {
    modeInfo.textContent = `Current Mode: ${usageSelect.options[usageSelect.selectedIndex].innerText}`
}

function directionText() {
    var x = window.matchMedia("(min-width: 728px)")

    if (x.matches) {
        usageDirection.textContent = "On The Left"
    } else {
        usageDirection.textContent = "Above"
    }
}

function openModeExplanations() {
    const explanationCon = document.querySelector("#mode-explanation-con")

    explanationCon.style.opacity = "1"
    explanationCon.style.visibility = "visible"
}

linePopulation()
changeModeText()
directionText()

usageSelect.addEventListener("change", newValue)
mobileSelect.addEventListener("change", displayTrainers)
modeExplanation.addEventListener("click", openModeExplanations)
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollToPlugin)});
topText.addEventListener("click", toTop)