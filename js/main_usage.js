const baseURL = "https://littlerootdreams.com/lumen/public/"
const usageSelect = document.querySelector("#usage-select")
const mobileSelect = document.querySelector("#mobile-select")
const topText = document.querySelector(".top-text")
const modeInfo = document.querySelector("#mode-info")
const usageDirection = document.querySelector("#usage-direction")
const modeExplanation = document.querySelector("#usage_legend")
const usageSearch = document.querySelector("#usage-search")
let request = usageSelect.value
let savedVariable = ""
let savedText = ""
let spinner = `<img id="spinner" src="../images/spinner.gif" alt="Loading spinner"><br> <p id="spinner-text">Loading...</p>`
let externalIcon = `<svg class="usage-external-icon" id="Layer_1" fill="white" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.01 23.01">
  <path d="M21.98,0s-.07,0-.11,0h-5.87c-.55,0-1.01.43-1.01.99,0,.55.43,1.01.99,1.01,0,0,.02,0,.03,0h3.59l-10.29,10.29c-.4.38-.41,1.02-.03,1.41s1.02.41,1.41.03c0,0,.02-.02.03-.03L21,3.42v3.59c0,.55.43,1.01.99,1.01.55,0,1.01-.43,1.01-.99,0,0,0-.02,0-.03V1.14c.08-.55-.31-1.05-.85-1.13-.05,0-.11-.01-.17,0ZM2,4.01c-1.09,0-2,.91-2,2v15c0,1.09.91,2,2,2h15c1.09,0,2-.91,2-2v-12.58l-2,2v10.58H2V6.01h10.58l2-2H2Z"/>
</svg>`

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

            li.innerHTML = `• <span class="line-identifier">${line.species}</span>`
            li.setAttribute("data-line", `${line.id}`)
            li.setAttribute("class", "pokemon-line")
            li.addEventListener("click", displayTrainers)
            lineSelect.appendChild(li)
            mobileSelect.appendChild(option)
        })
    })
    .then(convertList)
    .catch(error => {
        const lineSelect = document.querySelector("#line-selection")
        const p = document.createElement("p")

        p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

        lineSelect.appendChild(p)
    })
}

function convertList() {
  const $select = $(mobileSelect);

    if (!$select.hasClass("select2-hidden-accessible")) {
      $select.select2();
    }

    $select.off("select2:select");

    $select.on("select2:select", displayTrainers);

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

function displayTrainers(e) {
    var mobileTarget = mobileSelect.value
    const lineNumber = e?.currentTarget?.dataset?.line || mobileTarget || savedVariable;
    var x = window.matchMedia("(min-width: 728px)")
    const usageIcon = document.querySelector("#usage-icon")

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

                if (trainer.link !== "") {
                    const a = document.createElement("a");

                    li.innerHTML = `• ${trainer.name} ${externalIcon}`;
                    a.href = trainer.link
                    a.target = "_blank"

                    a.setAttribute("class", "usage-trainer-link")
                    a.appendChild(li)
                    ul.appendChild(a);
                } else {
                    li.innerHTML = `• ${trainer.name}`;
                    li.setAttribute("class", "no-link-trainer")
                    
                    ul.appendChild(li)
                }
            });

            usageIcon.style.display = "block"
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

function searchLines() {
    const lineSelect = document.querySelector("#line-selection")
    const names = lineSelect.querySelectorAll(".pokemon-line")
    const text = usageSearch.value
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, "")
        .trim()

    names.forEach(name => {
        const nameText = name.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, "")

        if (!nameText.includes(text)) {
            name.style.display = "none"
        } else {
            name.style.display = "block"
        }
    })
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
usageSearch.addEventListener("input", searchLines)