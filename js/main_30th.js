import { megaList, gmaxList, otherList, variantList, pokestarList, betaList } from "./additional_dex.js";

const currentSelection = document.querySelector("#current-selection")
const selectList = document.querySelectorAll(".pick-select")
let spinner = `<div id="spinner-con" class="col-span-full"><img id="spinner" src="../images/spinner.gif" alt="Loading spinner"> <p id="spinner-text">Populating Pokemon Lists...</p></div>`
const errorHandle = document.querySelector("#error-handle")
const baseURL = "https://littlerootdreams.com/lumen/public/"

function openList() {
    const tracking = document.querySelector("#tracking-list")
    const title = document.querySelector("#current-selection p")

    if (tracking.style.display === "flex") {
        tracking.style.display = "none"
        title.style.borderRadius = "20px"
        title.textContent = "▼ Open Current List ▼"

        currentSelection.style.overflowY = "visible"
    } else {
        tracking.style.display = "flex"
        currentSelection.style.maxHeight = "400px"
        title.style.borderRadius = "0px"
        title.style.borderTopLeftRadius = "20px"
        title.textContent = "▲ Close Current List ▲"

        currentSelection.style.overflowY = "scroll"
    }
}

async function populateLists() {
    const spinnerLoad = document.querySelector("#spinner-load");
    spinnerLoad.innerHTML = spinner;
    spinnerLoad.style.marginBottom = "20px"

    for (const list of selectList) {
        const regionalOption = document.createElement("option");
        const megaOption = document.createElement("option") 
        const gmaxOption = document.createElement("option")
        const formOption = document.createElement("option")
        const variantOption = document.createElement("option")
        const pokestarOption = document.createElement("option")
        const betaOption = document.createElement("option")
        const blankOption = document.createElement("option");
        const blankOption2 = document.createElement("option");
        const blankOption3 = document.createElement("option");
        const blankOption4 = document.createElement("option");
        const blankOption5 = document.createElement("option");
        const blankOption6 = document.createElement("option");
        const blankOption7 = document.createElement("option");

        regionalOption.disabled = true;
        megaOption.disabled = true;
        gmaxOption.disabled = true;
        formOption.disabled = true;
        variantOption.disabled = true;
        pokestarOption.disabled = true;
        betaOption.disabled = true;
        blankOption.disabled = true
        blankOption2.disabled = true
        blankOption3.disabled = true
        blankOption4.disabled = true
        blankOption5.disabled = true
        blankOption6.disabled = true
        blankOption7.disabled = true

        regionalOption.innerHTML = "--Regional Forms--";
        megaOption.innerHTML = "--Mega Evolutions--"
        gmaxOption.innerHTML = "--GMax Forms--"
        formOption.innerHTML = "--Other Form Models--"
        variantOption.innerHTML = "--Variants & Other--"
        pokestarOption.innerHTML = "--Pokestar Studios--"
        betaOption.innerHTML = "--Beta + Demo--"

        async function fetchWithRetry() {
            let attempts = 0;
            const MAX_ATTEMPTS = 3;
            const RETRY_DELAY_MS = 1000;

            while (attempts < MAX_ATTEMPTS) {
                try {
                    const [allData, regionalData] = await Promise.all([
                        fetch(`${baseURL}gen/all-no-alt/dex`).then(r => r.json()),
                        fetch(`${baseURL}custom/regional`).then(r => r.json())
                    ]);

                    errorHandle.textContent = "";

                    allData.forEach(pokemon => {
                        const mobileBaseOption = document.createElement("option");
                        mobileBaseOption.textContent = pokemon.name;
                        mobileBaseOption.value = pokemon.number;
                        mobileBaseOption.setAttribute("data-type1", `${pokemon.type1}`)
                        
                        if (pokemon.type2 === null) {
                            mobileBaseOption.setAttribute("data-type2", "")
                        } else {
                            mobileBaseOption.setAttribute("data-type2", `${pokemon.type2}`)
                        }

                        list.appendChild(mobileBaseOption);
                    });

                    list.appendChild(blankOption);
                    list.appendChild(regionalOption);

                    regionalData.forEach(pokemon => {
                        const mobileRegionalOption = document.createElement("option");
                        mobileRegionalOption.textContent = pokemon.name;
                        mobileRegionalOption.value = pokemon.number;
                        mobileRegionalOption.setAttribute("data-type1", `${pokemon.type1}`)
                        mobileRegionalOption.setAttribute("data-type2", `${pokemon.type2}`)
                        list.appendChild(mobileRegionalOption);
                    });

                    list.appendChild(blankOption2);
                    list.appendChild(megaOption);
                    megaList.forEach(mega => {
                        const mobileMegaOption = document.createElement("option");
                        mobileMegaOption.textContent = mega.name;
                        mobileMegaOption.value = mega.number;
                        mobileMegaOption.setAttribute("data-type1", `${mega.type1}`)
                        mobileMegaOption.setAttribute("data-type2", `${mega.type2}`)
                        list.appendChild(mobileMegaOption);
                    })

                    list.appendChild(blankOption3);
                    list.appendChild(gmaxOption);
                    gmaxList.forEach(gmax => {
                        const mobileGmaxOption = document.createElement("option");
                        mobileGmaxOption.textContent = gmax.name;
                        mobileGmaxOption.value = gmax.number;
                        mobileGmaxOption.setAttribute("data-type1", `${gmax.type1}`)
                        mobileGmaxOption.setAttribute("data-type2", `${gmax.type2}`)
                        list.appendChild(mobileGmaxOption);
                    })

                    list.appendChild(blankOption4);
                    list.appendChild(formOption);
                    otherList.forEach(form => {
                        const mobileformOption = document.createElement("option");
                        mobileformOption.textContent = form.name;
                        mobileformOption.value = form.number;
                        mobileformOption.setAttribute("data-type1", `${form.type1}`)
                        mobileformOption.setAttribute("data-type2", `${form.type2}`)
                        list.appendChild(mobileformOption);
                    })

                    list.appendChild(blankOption5);
                    list.appendChild(variantOption);
                    variantList.forEach(variant => {
                        const mobilevariantOption = document.createElement("option");
                        mobilevariantOption.textContent = variant.name;
                        mobilevariantOption.value = variant.number;
                        mobilevariantOption.setAttribute("data-type1", `${variant.type1}`)
                        mobilevariantOption.setAttribute("data-type2", `${variant.type2}`)
                        list.appendChild(mobilevariantOption);
                    })

                    list.appendChild(blankOption6);
                    list.appendChild(pokestarOption);
                    pokestarList.forEach(pokestar => {
                        const mobilepokestarOption = document.createElement("option");
                        mobilepokestarOption.textContent = pokestar.name;
                        mobilepokestarOption.value = pokestar.number;
                        mobilepokestarOption.setAttribute("data-type1", `${pokestar.type1}`)
                        mobilepokestarOption.setAttribute("data-type2", `${pokestar.type2}`)
                        list.appendChild(mobilepokestarOption);
                    })

                    list.appendChild(blankOption7);
                    list.appendChild(betaOption);
                    betaList.forEach(beta => {
                        const mobilebetaOption = document.createElement("option");
                        mobilebetaOption.textContent = beta.name;
                        mobilebetaOption.value = beta.number;
                        mobilebetaOption.setAttribute("data-type1", `${beta.type1}`)
                        mobilebetaOption.setAttribute("data-type2", `${beta.type2}`)
                        list.appendChild(mobilebetaOption);
                    })

                    return;
                } catch (error) {
                    attempts++;
                    if (attempts >= MAX_ATTEMPTS) {
                        const p = document.createElement("p")
                        p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`
                        errorHandle.appendChild(p)
                        throw error;
                    }

                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
            }
        }

        await fetchWithRetry();
    }
}

function updateFinalImage() {

}

currentSelection.addEventListener("click", openList)
selectList.forEach(select => select.addEventListener("change", updateFinalImage))
window.addEventListener("DOMContentLoaded", populateLists)