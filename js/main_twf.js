const baseURL = "https://littlerootdreams.com/lumen/public/"
const generateButton = document.querySelector("#generate-fight-button")
const challengeButton = document.querySelector("#generate-challenge-button")
const openListButton = document.querySelector("#open-list")
const promptSubmit = document.querySelector("#prompt-submit")
const lbForm = document.querySelector("#lb-form")
const battlePrompts = document.querySelector("#battle-prompts")
const challengePrompts = document.querySelector("#challenge-prompts")
const battleHome = document.querySelector("#battle-title")
const challengeHome = document.querySelector("#challenge-title")
const promptClose = document.querySelector("#prompt-close")
const tipsArea = document.querySelector("#tips_area")
let spinner = `<div id="spinner-con"><img id="spinner" src="../images/spinner.gif" alt="Loading spinner"> <p id="spinner-text">Loading...</p></div><p id="submit-confirm"></p>`

function displayLength() {
    const promptCount = document.querySelector("#prompt-count");

    Promise.all([
        fetch(`${baseURL}battle/all`).then(response => response.json()),
        fetch(`${baseURL}challenge/all`).then(response => response.json())
    ])
    .then(function(responses) {
        promptCount.textContent = `There is currently ${responses[0].length} battle prompts and ${responses[1].length} challenge prompts in the database.`;
    })
    .catch(error => {
        promptCount.textContent = `Sorry, something went wrong. Please refresh and try again. ${error}`;
    });
}


displayLength()

function generatePrompt() {
    let target = this.dataset.button

    fetch(`${baseURL}/${target}/all`)
    .then(response => response.json())
    .then(function(response){
        const promptGenerate = document.querySelector("#prompt-generate")
        const randomPrompt = Math.floor(Math.random() * response.length)
        const h3 = document.createElement("h3")
        const div = document.createElement("div")
        const p = document.createElement("p")

        promptGenerate.innerHTML = ""

        h3.textContent = response[randomPrompt].prompt
        div.innerHTML = response[randomPrompt].description
        p.textContent = `Credit: ${response[randomPrompt].credit}`

        h3.setAttribute("class", "prompt-title")
        p.setAttribute("class", "prompt-credit")

        promptGenerate.appendChild(h3)
        promptGenerate.appendChild(div)
        promptGenerate.appendChild(p)

        if (response[randomPrompt].random === "y") {
            const rDiv = document.createElement("div")

            rDiv.innerHTML = '<p id="redirect">Need a way to randomize your choices? Use the randomizer from <a target="_blank" class="outsource" href="https://randompokemon.com/">Random Pokemon!</a></p>'

            promptGenerate.appendChild(rDiv)
        }
    })
    .catch(error => {
        const promptGenerate = document.querySelector("#prompt-generate")
        const p = document.createElement("p")

        p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

        promptGenerate.appendChild(p)
    })
}

function openAllPrompts() {
    battlePrompts.innerHTML = spinner
    challengePrompts.innerHTML = spinner

    Promise.all([
        fetch(`${baseURL}battle/all`).then(response => response.json()),
        fetch(`${baseURL}challenge/all`).then(response => response.json())
    ])
    .then(function(responses){
        const list = document.querySelector("#full-list-home")
        const listHome = document.querySelector("#full-list-popup-con")

        listHome.style.display = "grid"
        listHome.style.visibility = "visible"
        listHome.style.opacity = "1"
        scrollTo(0,0)

        battlePrompts.innerHTML = ""
        challengePrompts.innerHTML = ""

        responses[0].forEach(prompt => {
            const div = document.createElement("div")
            const title = document.createElement("h3")
            const desc = document.createElement("p")
            const credit = document.createElement("p")
            const hideDiv = document.createElement("div")
            
            title.textContent = `${prompt.id}. ${prompt.prompt} ▼`
            desc.innerHTML = prompt.description
            credit.textContent = `Credit: ${prompt.credit}`

            div.setAttribute("class", "lb-prompt-home")
            hideDiv.setAttribute("class", "extra-prompt-detail")
            hideDiv.style.display = "none"
            credit.setAttribute("class", "lb-credit")
            title.setAttribute("class", "lb-prompt")

            div.appendChild(title)
            hideDiv.appendChild(desc)
            hideDiv.appendChild(credit)
            div.appendChild(hideDiv)

            div.addEventListener("click", openFullDetails)

            battlePrompts.appendChild(div)
        })

        responses[1].forEach(prompt => {
            const div = document.createElement("div")
            const title = document.createElement("h3")
            const desc = document.createElement("p")
            const credit = document.createElement("p")
            const hideDiv = document.createElement("div")
            
            title.textContent = `${prompt.id}. ${prompt.prompt} ▼`
            desc.innerHTML = prompt.description
            credit.textContent = `Credit: ${prompt.credit}`

            div.setAttribute("class", "lb-prompt-home")
            hideDiv.setAttribute("class", "extra-prompt-detail")
            hideDiv.style.display = "none"
            credit.setAttribute("class", "lb-credit")
            title.setAttribute("class", "lb-prompt")

            div.appendChild(title)
            hideDiv.appendChild(desc)
            hideDiv.appendChild(credit)
            div.appendChild(hideDiv)

            div.addEventListener("click", openFullDetails)

            challengePrompts.appendChild(div)
        })
    })
    .catch(error => {
        const list = document.querySelector("#full-list-home")
        const p = document.createElement("p")

        p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

        list.appendChild(p)
    })
}

function openFullDetails() {
    const extraDetail = this.querySelector(".extra-prompt-detail")
    const prompt = this.querySelector(".lb-prompt")
    
    if (extraDetail.style.display === "none") {
        extraDetail.style.display = "block"
        prompt.style.marginBottom = "10px"
    } else {
        extraDetail.style.display = "none"
        prompt.style.marginBottom = "0"
    }
}

function openSubmissionBox() {
    const lbSubmit = document.querySelector("#prompt-submission")
    lbSubmit.style.display = "grid"
    lbSubmit.style.visibility = "visible"
    lbSubmit.style.opacity = "1"
    scrollTo(0,0)
}

function sendSubmission(event) {
    const submitCon = document.querySelector("#submit-con")
    event.preventDefault();

    submitCon.innerHTML = spinner

    const formData = {
        prompt: this.elements.prompt.value,
        description: this.elements.description.value,
        submitter: this.elements.submitter.value
    };

    fetch(`${baseURL}prompts/submit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(function(response) {
        const spinnerCon = document.querySelector("#spinner-con")
        const lbField = document.querySelectorAll(".lb-prompt-field")
        const submitConfirm = document.querySelector("#submit-confirm")

        submitConfirm.textContent = "Thank you the suggestion! It has been submitted successfully!"

        lbField.forEach(field => {
            field.value = ""
        })

        spinnerCon.remove()
    })
    .catch(function(error) {
        const spinnerCon = document.querySelector("#spinner-con")
        const submitConfirm = document.querySelector("#submit-confirm")

        spinnerCon.remove()
        submitConfirm.textContent = `Sorry, something went wrong. Please refresh and try again. ${error}`
    });
}

function openBattlePrompts() {
    if (battlePrompts.style.visibility === "visible") {
        battlePrompts.style.visibility = "hidden"
        battlePrompts.style.opacity = "0"
        battlePrompts.style.display = "none"
    } else {
        battlePrompts.style.visibility = "visible"
        battlePrompts.style.opacity = "1"
        battlePrompts.style.display = "flex"
    }
}

function openChallengePrompts() {
    if (challengePrompts.style.visibility === "visible") {
        challengePrompts.style.visibility = "hidden"
        challengePrompts.style.opacity = "0"
        challengePrompts.style.display = "none"
    } else {
        challengePrompts.style.visibility = "visible"
        challengePrompts.style.opacity = "1"
        challengePrompts.style.display = "flex"
    }
}

function closePrompts() {
    if (battlePrompts.style.display === "flex") {
        battlePrompts.style.display = "none"
    } else if (challengePrompts.style.display === "flex") {
        challengePrompts.style.display = "none"
    }
}

function openChallengeTips() {
    const difference = document.querySelector("#difference-con")

    if (difference.style.visibility === "visible") {
        difference.style.visibility = "hidden"
        difference.style.opacity = "0"
    } else {
        difference.style.visibility = "visible"
        difference.style.opacity = "1"
    }
}

generateButton.addEventListener("click", generatePrompt)
challengeButton.addEventListener("click", generatePrompt)
openListButton.addEventListener("click", openAllPrompts)
promptSubmit.addEventListener("click", openSubmissionBox)
lbForm.addEventListener("submit", sendSubmission)
battleHome.addEventListener("click", openBattlePrompts)
challengeHome.addEventListener("click", openChallengePrompts)
promptClose.addEventListener("click", closePrompts)
tipsArea.addEventListener("click", openChallengeTips)