const trainerSelect = document.querySelectorAll(".trainer-select")
const typeSelect = document.querySelectorAll(".type-select")
const baseURL = "https://littlerootdreams.com/lumen/public/"
const modeButton = document.querySelectorAll(".mode-button")
const createButton = document.querySelector("#select-submit")
const tipsArea = document.querySelector("#tips_area")
const leagueSave = document.querySelector("#league-save")
const downloadNameCon = document.querySelector("#download-name-con")
const leagueForm = document.querySelector("#collection-name-form")
const topText = document.querySelector(".top-text")
let mode = "all"
let spinner = `<div id="spinner-con" class="col-span-full"><img id="spinner" src="../images/spinner.gif" alt="Loading spinner"> <p id="spinner-text">Loading Trainers...</p></div>`

function modeSelect() {
    const modeDisplay = document.querySelector("#mode-display")
    mode = this.dataset.button

    modeDisplay.textContent = this.innerText

    trainerPopulation()
}

function trainerPopulation() {
    const spinnerLoad = document.querySelector("#spinner-load");
    spinnerLoad.innerHTML = spinner;
    spinnerLoad.style.marginBottom = "20px"

    trainerSelect.forEach(trainerBox => trainerBox.innerHTML = "");

    trainerSelect.forEach(trainerBox => {
        const defaultOption = document.createElement("option");
        const noneOption = document.createElement("option");

        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.innerText = "--Select A Trainer--";

        noneOption.innerText = "-None-";
        noneOption.setAttribute("data-trainer", "none");

        trainerBox.appendChild(defaultOption);
        trainerBox.appendChild(noneOption);
    });

    if (mode === "simple") {
        const gymSelect = document.querySelectorAll(".gym-select");
        const e4Select = document.querySelectorAll(".e4-select");
        const championSelect = document.querySelector("#champion");
        const superbossSelect = document.querySelector("#superboss");

        const fetchPromises = [];

        gymSelect.forEach(gym => {
            fetchPromises.push(
                fetch(`${baseURL}league-trainers/gym`)
                    .then(response => response.json())
                    .then(response => {
                        response.forEach(trainer => {
                            const option = document.createElement("option");

                            option.setAttribute("data-trainer", `${trainer.id}`);
                            option.innerText = `${trainer.name}`;

                            gym.appendChild(option);
                        });
                    })
            );
        });

        e4Select.forEach(e4 => {
            fetchPromises.push(
                fetch(`${baseURL}league-trainers/e4`)
                    .then(response => response.json())
                    .then(response => {
                        response.forEach(trainer => {
                            const option = document.createElement("option");

                            option.setAttribute("data-trainer", `${trainer.id}`);
                            option.innerText = `${trainer.name}`;

                            e4.appendChild(option);
                        });
                    })
            );
        });

        fetchPromises.push(
            fetch(`${baseURL}league-trainers/champion`)
                .then(response => response.json())
                .then(response => {
                    response.forEach(trainer => {
                        const option = document.createElement("option");

                        option.setAttribute("data-trainer", `${trainer.id}`);
                        option.innerText = `${trainer.name}`;

                        championSelect.appendChild(option);
                    });
                })
        );

        fetchPromises.push(
            fetch(`${baseURL}league-trainers/superboss`)
                .then(response => response.json())
                .then(response => {
                    response.forEach(trainer => {
                        const option = document.createElement("option");

                        option.setAttribute("data-trainer", `${trainer.id}`);
                        option.innerText = `${trainer.name}`;

                        superbossSelect.appendChild(option);
                    });
                })
        );

        Promise.all(fetchPromises).then(() => {
            spinnerLoad.innerHTML = "";
            spinnerLoad.style.marginBottom = "0px"
        });

    } else if (mode === "all") {
        const fetchPromises = [];
        trainerSelect.forEach(trainerBox => {
            fetchPromises.push(
                fetch(`${baseURL}league-trainers/${mode}`)
                    .then(response => response.json())
                    .then(response => {
                        response.forEach(trainer => {
                            const option = document.createElement("option");

                            option.setAttribute("data-trainer", `${trainer.id}`);
                            option.innerText = `${trainer.name}`;

                            trainerBox.appendChild(option);
                        });
                    })
            );
        });


        Promise.all(fetchPromises).then(() => {
            spinnerLoad.innerHTML = "";
            spinnerLoad.style.marginBottom = "0px"
        });
    }
}


trainerPopulation()

function inputTrainerInfomation() {
    const dataLink = this.dataset.link
    const divSelector = document.querySelector(`#${dataLink}`)
    const trainerImage = divSelector.querySelector("div")
    const trainerName = divSelector.querySelector(".trainer-name")

    if (`${this.options[this.selectedIndex].dataset.trainer}` === 'none') {
        divSelector.style.display = "none"
    } else {
        divSelector.style.display = "block"
        trainerImage.style.backgroundImage = `url('../images/trainer_images/${this.options[this.selectedIndex].dataset.trainer}.png'), linear-gradient(#fff, #ededed)`
        trainerName.textContent = this.options[this.selectedIndex].innerText
    }
}

function inputTypeInformation() {
    const dataLink = this.dataset.link
    const divSelector = document.querySelector(`#${dataLink}`)
    const trainerType = divSelector.querySelector(".trainer-type")
    const trainerName = divSelector.querySelector(".trainer-name")
    const trainerImage = divSelector.querySelector("div")
    divClass = divSelector.className

    trainerType.textContent = `Type: ${this.options[this.selectedIndex].innerText}`
    trainerType.className = `trainer-type ${this.options[this.selectedIndex].value}`
    trainerName.className = `trainer-name ${this.options[this.selectedIndex].value}`
    trainerImage.className = `${this.options[this.selectedIndex].value}-border`
}

function openLeagueBox() {
    const leagueCon = document.querySelector("#league-con")

    leagueCon.style.visibility = "visible"
    leagueCon.style.opacity = "1"
    leagueCon.style.display = "grid"
}

function openModeTips() {
    const difference = document.querySelector("#difference-con")

    if (difference.style.visibility === "visible") {
        difference.style.visibility = "hidden"
        difference.style.opacity = "0"
    } else {
        difference.style.visibility = "visible"
        difference.style.opacity = "1"
    }
}

function openLeagueDownload() {
    downloadNameCon.style.visibility = "visible"
    downloadNameCon.style.opacity = "1"
}

function downloadLeague(event) {
    const divExport = document.querySelector("#league")
    const p = document.createElement("p")
    const title = document.createElement("h3")
    const form = document.querySelector("#league-name")
    let formName = form.value

    event.preventDefault()

    finalName = formName

    p.textContent = "Create your own at littlerootdreams.com"
    p.setAttribute("id", "league-credit")

    title.textContent = `${finalName}`
    title.setAttribute("id", "my-league-title")

    divExport.appendChild(title)
    divExport.appendChild(p)
    divExport.style.display = "flex"
    divExport.style.flexDirection = "column"

    divExport.style.backgroundImage = "linear-gradient(rgba(49, 155, 255, 0.85),rgba(112, 175, 226, 0.85))"
    divExport.style.backgroundColor = "rgb(42, 42, 42)"
    leagueSave.style.display = "none"

    html2canvas(divExport).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
    
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "my-league.png"; 
        link.click();
    });

    divExport.style.backgroundImage = "none"
    divExport.style.display = "block"

    form.value = ""
    downloadNameCon.style.visibility = "hidden"
    downloadNameCon.style.opacity = "0"

    leagueSave.style.display = "block"

    clearText()
}

function clearText() {
    const leagueCredit = document.querySelector("#league-credit")
    const leagueTitle = document.querySelector("#my-league-title")
  
    leagueCredit.remove()
    leagueTitle.remove()
}

function toTop() {
    var x = window.matchMedia("(min-width: 728px)")
  
    if (x.matches) {
      gsap.to(window, { duration: 1, scrollTo: (0)})
    } else {
      gsap.to(window, { duration: 2.5, scrollTo: (0)})
    }
}

modeButton.forEach(button => button.addEventListener("click", modeSelect))
trainerSelect.forEach(select => select.addEventListener("change", inputTrainerInfomation))
typeSelect.forEach(select => select.addEventListener("change", inputTypeInformation))
createButton.addEventListener("click", openLeagueBox)
tipsArea.addEventListener("click", openModeTips)
leagueSave.addEventListener("click", openLeagueDownload)
leagueForm.addEventListener("submit", downloadLeague)
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollToPlugin)});
topText.addEventListener("click", toTop)