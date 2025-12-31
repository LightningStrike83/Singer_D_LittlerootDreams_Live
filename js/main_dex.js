import { megaList, gmaxList, otherList, variantList, pokestarList, betaList } from "./additional_dex.js";
import { showSelection, checkRemaining } from "./main_filter.js";

const tips = document.querySelector("#tips_click");
const pokemonSprites = document.querySelector("#pokemon_sprites");
const spriteArea = document.querySelector("#sprite_area")
const dragImages = document.querySelectorAll(".sprite_item img");
const submitbutton = document.querySelector("#pd-submit-button")
const downloadButton = document.querySelector("#pd-download")
const baseURL = "https://littlerootdreams.com/lumen/public/"
const errorHandle = document.querySelector("#error-handle")
const dexName = document.querySelector("#custom-dex-form")
const nameForm = document.querySelector("#download-dex-con")
const typeCon = document.querySelector("#types_count")
const countCon = document.querySelector("#count_con")
const modeButton = document.querySelectorAll(".mode_select_button")
const saveButton = document.querySelector("#pd-save")
const clearButton = document.querySelector("#pd-clear")
const emptyButton = document.querySelector("#pd-empty")
const saveText = document.querySelector("#saved_text")
const dateIndicator = document.querySelector("#date_indicator")

let finalName = ""
let mode = "drag"
let defaultState = ""
let count = 0
let savedDate = ""

function openTips() {
  const tipsBox = document.querySelector("#tips_box")

  if (tipsBox.style.visibility === "visible") {
    tipsBox.style.opacity = "0",
    tipsBox.style.visibility = "hidden"
  } else (
      tipsBox.style.opacity = "1",
      tipsBox.style.visibility = "visible"
  )
}

function populateBoxArea() {
  const pokedexBoxArea = document.querySelector("#pokedex_display")
  const input = document.querySelector("#pd-input")
  let inputValue = parseInt(input.value)

  if (inputValue < count) {
    const boxesToRemove = count - inputValue;
    
    for (let i = 0; i < boxesToRemove; i++) {
      const lastBox = pokedexBoxArea.lastChild;
      if (lastBox) {
        if(lastBox.hasChildNodes()) {
          if (lastBox.childNodes.length > 1) {
            lastBox.childNodes[1].classList.add("dragging")

            const draggedPokemon = document.querySelector(".dragging");
            const originalPositionKey = draggedPokemon.dataset.key;
            const originalPosition = document.querySelector(`.sprite_item[data-key="${originalPositionKey}"]`);
          
            if (draggedPokemon && originalPosition) {
              const currentDropArea = draggedPokemon.parentNode;
              currentDropArea.removeChild(draggedPokemon);
              originalPosition.appendChild(draggedPokemon);
              draggedPokemon.classList.remove("dragging");
            }
          }
        }
        pokedexBoxArea.removeChild(lastBox); 
      }
    }
    count = inputValue; 
    countTypes()
    return;
  }
  
  for (let n = count + 1; n <= inputValue; n++) {
    const div = document.createElement("div")
    const p = document.createElement("p")

    div.setAttribute("class", "pokedex_box")
    p.setAttribute("class", "pokedex_number")
    p.textContent = n

    div.appendChild(p)
    pokedexBoxArea.appendChild(div)

    div.addEventListener("dragover", dragOver);
    div.addEventListener("dragenter", dragEnter);
    div.addEventListener("dragleave", dragLeave);
    div.addEventListener("drop", drop);

    checkMode()
  }

  count = inputValue;
  mobileList()
}

async function mobileList() {
  var x = window.matchMedia("(min-width: 1024px)")

  if (x.matches) {

  } else {
    const pokedexBox = document.querySelectorAll(".pokedex_box");

    pokedexBox.forEach(box => {
      const spinner = document.createElement("div")
      const mobileList = box.querySelector(".mobile_select")
      const select2 = box.querySelector(".select2-container")

      if (mobileList) {
        mobileList.remove()
      }

      if (select2) {
        select2.remove()
      }

      spinner.setAttribute("id", "spinner")
      spinner.setAttribute("alt", "Loading spinner")
      box.appendChild(spinner)
    })

    for (const box of pokedexBox) {
      const mobileList = document.createElement("select");
      const blankOption = document.createElement("option");
      const allOption = document.createElement("option");
      const regionalOption = document.createElement("option");
      const megaOption = document.createElement("option") 
      const gmaxOption = document.createElement("option")
      const formOption = document.createElement("option")
      const variantOption = document.createElement("option")
      const pokestarOption = document.createElement("option")
      const betaOption = document.createElement("option")
      const blankOption2 = document.createElement("option");
      const blankOption3 = document.createElement("option");
      const blankOption4 = document.createElement("option");
      const blankOption5 = document.createElement("option");
      const blankOption6 = document.createElement("option");
      const blankOption7 = document.createElement("option");

      allOption.disabled = true;
      regionalOption.disabled = true;
      allOption.selected = true;
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

      allOption.innerHTML = "--Select A Pokemon--";
      regionalOption.innerHTML = "--Regional Forms--";
      megaOption.innerHTML = "--Mega Evolutions--"
      gmaxOption.innerHTML = "--GMax Forms--"
      formOption.innerHTML = "--Other Form Models--"
      variantOption.innerHTML = "--Variants & Other--"
      pokestarOption.innerHTML = "--Pokestar Studios--"
      betaOption.innerHTML = "--Beta + Demo--"

      mobileList.setAttribute("class", "mobile_select");

      async function fetchWithRetry() {
        while (true) {
          try {
            const [allData, regionalData] = await Promise.all([
              fetch(`${baseURL}gen/all-no-alt/dex`).then(response => response.json()),
              fetch(`${baseURL}custom/regional`).then(response => response.json())
            ]);

            errorHandle.textContent = "";
            mobileList.appendChild(allOption);

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

              mobileList.appendChild(mobileBaseOption);
            });

            mobileList.appendChild(blankOption);
            mobileList.appendChild(regionalOption);

            regionalData.forEach(pokemon => {
              const mobileRegionalOption = document.createElement("option");
              mobileRegionalOption.textContent = pokemon.name;
              mobileRegionalOption.value = pokemon.number;
              mobileRegionalOption.setAttribute("data-type1", `${pokemon.type1}`)
              mobileRegionalOption.setAttribute("data-type2", `${pokemon.type2}`)

              mobileList.appendChild(mobileRegionalOption);
            });

            mobileList.appendChild(blankOption2);
            mobileList.appendChild(megaOption);

            megaList.forEach(mega => {
              const mobileMegaOption = document.createElement("option");
              mobileMegaOption.textContent = mega.name;
              mobileMegaOption.value = mega.number;
              mobileMegaOption.setAttribute("data-type1", `${mega.type1}`)
              mobileMegaOption.setAttribute("data-type2", `${mega.type2}`)
              mobileList.appendChild(mobileMegaOption);
            })

            mobileList.appendChild(blankOption3);
            mobileList.appendChild(gmaxOption);

            gmaxList.forEach(gmax => {
              const mobileGmaxOption = document.createElement("option");
              mobileGmaxOption.textContent = gmax.name;
              mobileGmaxOption.value = gmax.number;
              mobileGmaxOption.setAttribute("data-type1", `${gmax.type1}`)
              mobileGmaxOption.setAttribute("data-type2", `${gmax.type2}`)
              mobileList.appendChild(mobileGmaxOption);
            })

            mobileList.appendChild(blankOption4);
            mobileList.appendChild(formOption);

            otherList.forEach(form => {
              const mobileformOption = document.createElement("option");
              mobileformOption.textContent = form.name;
              mobileformOption.value = form.number;
              mobileformOption.setAttribute("data-type1", `${form.type1}`)
              mobileformOption.setAttribute("data-type2", `${form.type2}`)
              mobileList.appendChild(mobileformOption);
            })

            mobileList.appendChild(blankOption5);
            mobileList.appendChild(variantOption);

            variantList.forEach(variant => {
              const mobilevariantOption = document.createElement("option");
              mobilevariantOption.textContent = variant.name;
              mobilevariantOption.value = variant.number;
              mobilevariantOption.setAttribute("data-type1", `${variant.type1}`)
              mobilevariantOption.setAttribute("data-type2", `${variant.type2}`)
              mobileList.appendChild(mobilevariantOption);
            })

            mobileList.appendChild(blankOption6);
            mobileList.appendChild(pokestarOption);

            pokestarList.forEach(pokestar => {
              const mobilepokestarOption = document.createElement("option");
              mobilepokestarOption.textContent = pokestar.name;
              mobilepokestarOption.value = pokestar.number;
              mobilepokestarOption.setAttribute("data-type1", `${pokestar.type1}`)
              mobilepokestarOption.setAttribute("data-type2", `${pokestar.type2}`)
              mobileList.appendChild(mobilepokestarOption);
            })

            mobileList.appendChild(blankOption7);
            mobileList.appendChild(betaOption);

            betaList.forEach(beta => {
              const mobilebetaOption = document.createElement("option");
              mobilebetaOption.textContent = beta.name;
              mobilebetaOption.value = beta.number;
              mobilebetaOption.setAttribute("data-type1", `${beta.type1}`)
              mobilebetaOption.setAttribute("data-type2", `${beta.type2}`)
              mobileList.appendChild(mobilebetaOption);
            })

            box.appendChild(mobileList);

            let spinnerFind = box.querySelector("#spinner")
            spinnerFind.remove()

            mobileList.addEventListener("change", addPokemonImage);

            convertList()
            return; // Exit the loop if successful
          } catch (error) {
            const p = document.createElement("p")

            p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

            errorHandle.appendChild(p)
          }
        }
      }

      await fetchWithRetry();
    }
  }
}

function addPokemonImage(){
  const box = this.parentNode
  const img = document.createElement("img")
  const source = this.value
  const name = this.options[this.selectedIndex].text
  const type1 = this.options[this.selectedIndex].dataset.type1
  const type2 = this.options[this.selectedIndex].dataset.type2
  const pokedexBoxes = document.querySelectorAll(".pokedex_box")
  let imgCheck = box.querySelector("img")

  if (imgCheck) {
    imgCheck.src = `images/pokemon_images/${source}.png`
    imgCheck.alt = `${name}`
    imgCheck.dataset.type1 = `${type1}`
    imgCheck.dataset.type2 = `${type2}`
    countTypes()
  } else {
    img.src = `images/pokemon_images/${source}.png`
    box.appendChild(img)
    img.setAttribute("class", "mobile_image")
    img.setAttribute("alt", `Image of ${name}`)
    img.setAttribute("data-type1", `${type1}`)
    img.setAttribute("data-type2", `${type2}`)
    countTypes()
  }

  pokedexBoxes.forEach(pdBox => {
    pdBox.style.height = "auto";
  });
  
  // resetBoxHeight()
}

// function resetBoxHeight() {
//   const pokedexBoxes = document.querySelectorAll(".pokedex_box")
//   const boxesWithImages = Array.from(pokedexBoxes).filter(box => box.querySelector("img"));
//   const dynamicHeight = boxesWithImages[0].offsetHeight;

//   pokedexBoxes.forEach(pdBox => {
//     if (!pdBox.querySelector("img")) {
//       pdBox.style.height = `${dynamicHeight}px`;
//     }
//   });
// }


function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.src);
    event.target.classList.add("dragging");
    const div = event.target.closest(".sprite_item");
    const dataKey = Date.now();
    div.dataset.key = dataKey;
    event.target.dataset.key = dataKey;
  }

function dragEnd(event) {
  event.target.classList.remove("dragging");
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.target.classList.add("drag-enter");
}

function dragLeave(event) {
  event.target.classList.remove("drag-enter");
}

function drop(event) {
  event.preventDefault();
  const targetDropArea = event.target.closest(".pokedex_box");
  const draggedPokemon = document.querySelector(".dragging");
  const type1 = draggedPokemon.parentNode.dataset.type1
  const type2 = draggedPokemon.parentNode.dataset.type2

  if (!targetDropArea || !draggedPokemon) {
    return;
  }

  const currentDropArea = draggedPokemon.parentNode;

  if (currentDropArea.classList.contains("pokedex_box") && targetDropArea.classList.contains("pokedex_box")) {
    const currentImage = currentDropArea.querySelector("img");
    const targetImage = targetDropArea.querySelector("img");

    if (!targetImage) {
      targetDropArea.appendChild(currentImage)
    }

    if (currentImage && targetImage) {
      currentDropArea.appendChild(targetImage);
      targetDropArea.appendChild(currentImage);
    }
  } else {
    let existingImage = targetDropArea.querySelector("img");

    if (existingImage) {
      let nextDropArea = targetDropArea.nextElementSibling;

      while (nextDropArea) {
        if (nextDropArea.classList.contains("pokedex_box")) {
          let tempImage = nextDropArea.querySelector("img");

          nextDropArea.appendChild(existingImage);

          if (!tempImage) break;

          existingImage = tempImage;
        }
        nextDropArea = nextDropArea.nextElementSibling;
      }

      if (!nextDropArea) {
        const targetImageBox = document.querySelector(".pokedex_box:last-child");
        const targetImage = targetImageBox.querySelector("img");
        const targetText = targetImageBox.querySelector("p");
        let inputValue = parseInt(targetText.textContent);
        const pdInput = document.querySelector("#pd-input")
        const home = document.querySelector("#pokedex_display");
        const newBox = document.createElement("div");
        const number = document.createElement("p");

        newBox.setAttribute("class", "pokedex_box");

        number.textContent = inputValue + 1;
        number.setAttribute("class", "pokedex_number");

        count = inputValue + 1;

        pdInput.value = count

        newBox.addEventListener("dragover", dragOver);
        newBox.addEventListener("dragenter", dragEnter);
        newBox.addEventListener("dragleave", dragLeave);
        newBox.addEventListener("drop", drop);

        newBox.appendChild(number);
        newBox.appendChild(targetImage);
        home.appendChild(newBox);

        checkMode()
      }
    }

    draggedPokemon.setAttribute("data-type1", `${type1}`)
    draggedPokemon.setAttribute("data-type2",`${type2}`)

    currentDropArea.removeChild(draggedPokemon);
    targetDropArea.appendChild(draggedPokemon);
  }

  draggedPokemon.classList.remove("dragging");
  event.target.classList.remove("drag-enter");

  countTypes()
}

function returnToOriginalPosition(event) {
    event.preventDefault();
    const draggedPokemon = document.querySelector(".dragging");
    const originalPositionKey = draggedPokemon.dataset.key;
    const originalPosition = document.querySelector(`.sprite_item[data-key="${originalPositionKey}"]`);
  
    if (draggedPokemon && originalPosition) {
      const currentDropArea = draggedPokemon.parentNode;
      currentDropArea.removeChild(draggedPokemon);
      originalPosition.appendChild(draggedPokemon);
      draggedPokemon.classList.remove("dragging");

      countTypes()
    }
  }

  dragImages.forEach(function (image) {
  image.addEventListener("dragstart", dragStart);
  image.addEventListener("dragend", dragEnd);

  checkMode()
});

async function exportDivToImage(event) {
  event.preventDefault();

  const divExport = document.querySelector("#pokedex_display");
  const cloneExport = divExport.cloneNode(true)
  const form = document.querySelector("#custom-dex");
  const hiddendex = document.querySelector("#dex_append")
  const exportCon = document.querySelector("#export_con")
  const title = document.querySelector("#my-pokedex-title")
  const creationCon = document.querySelector("#creation_con")
  const spriteArea = document.querySelector("#sprite_area")
  const spriteClone = spriteArea.cloneNode(true)
  const pokedexArea = document.querySelector("#pokedex-area")

  spriteArea.remove()

  exportCon.style.display = "grid"

  let formName = form.value;
  finalName = formName;

  const smallX = window.matchMedia("(min-width: 768px)");

  title.textContent = finalName;

  cloneExport.querySelectorAll(".mobile_select, .select2-container, .direction_con, .subtract_button").forEach(el => el.remove());

  hiddendex.appendChild(cloneExport)

  creationCon.style.visibility = "visible"
  creationCon.style.opacity = "1"

  try {
    const canvas = await html2canvas(exportCon);

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "my-pokedex.png";
    link.click();

  } finally {
    const dexRemove = hiddendex.querySelector("#pokedex_display")

    creationCon.style.visibility = "hidden"
    creationCon.style.opacity = "0"

    form.value = "";

    dexRemove.remove()

    exportCon.style.display = "none"

    openConfirmation();

    pokedexArea.appendChild(spriteClone)
    reattachListeners()
  }
}

// function readdButtons() {
//   if (mode === "click") {
//     let pokedexBox = document.querySelectorAll(".pokedex_box")
    
//     pokedexBox.forEach(div => {
//       const divMinus = document.createElement("div")
//       const moveDiv = document.createElement("div")
//       const p = document.createElement("p")
//       const forward = document.createElement("p")
//       const backward = document.createElement("p")
      
//       divMinus.setAttribute("class", "subtract_button")
//       moveDiv.setAttribute("class", "direction_con")
      
//       p.textContent = "-"
//       forward.textContent = "►"
//       backward.textContent = "◄"

//       divMinus.addEventListener("click", clickMinus)
//       forward.addEventListener("click", moveImage)
//       backward.addEventListener("click", moveImage)

//       divMinus.appendChild(p)
//       moveDiv.appendChild(backward)
//       moveDiv.appendChild(forward)
//       div.appendChild(divMinus)
//       div.appendChild(moveDiv)
//     })
//   }
// }

// function clearText() {
//   const pokedexCredit = document.querySelector("#pokedex-credit")
//   const pokedexTitle = document.querySelector("#my-pokedex-title")

//   pokedexCredit.remove()
//   pokedexTitle.remove()
// }

function openNameForm() {
  nameForm.style.visibility = "visible"
  nameForm.style.opacity = "1"
}

function openConfirmation() {
  const confirmationForm = document.querySelector("#confirmation_message_con")

  nameForm.style.visibility = "hidden"
  nameForm.style.opacity = "0"

  confirmationForm.style.visibility = "visible"
  confirmationForm.style.opacity = "1"

  setTimeout(() => {
    confirmationForm.style.visibility = "hidden"
    confirmationForm.style.opacity = "0"
  }, "5000");

}

function openTypeCount() {
  const typeTitle = document.querySelector("#type_title")
  const typeArrows = document.querySelectorAll(".type_arrow")

  if (countCon.style.display === "flex") {
    countCon.style.display = "none"
    typeTitle.style.borderBottomLeftRadius = "20px"
    typeTitle.style.borderBottomRightRadius = "20px"

    typeArrows.forEach(arrow => arrow.textContent = "▼")
  } else {
    countCon.style.display = "flex"
    typeTitle.style.borderBottomLeftRadius = "0px"
    typeTitle.style.borderBottomRightRadius = "0px"

    typeArrows.forEach(arrow => arrow.textContent = "▲")
  }
}

function countTypes() {
  const pokedexBoxes = document.querySelectorAll(".pokedex_box")

  const typeCounts = document.querySelectorAll(".type_count")

  typeCounts.forEach(type => type.textContent = "0")

  pokedexBoxes.forEach(box => {
    const image = box.querySelector("img")
    
    if (image !== null) {
      const type1 = image.dataset.type1
      const type2 = image.dataset.type2
      
      if (type1 !== "") {
        const typeCount1 = document.querySelector(`#${type1}_count`)

        var num1 = Number(typeCount1.textContent)

        typeCount1.textContent = num1 + 1
      }

      if (type2 !== "") {
        const typeCount2 = document.querySelector(`#${type2}_count`)

        var num2 = Number(typeCount2.textContent)

        typeCount2.textContent = num2 + 1
      }
    }
  })
}

function changeMode() {
  if (this.textContent === "Drag and Drop") {
    mode = "drag"
    modeButton.forEach(button => button.classList.remove("active"))
    this.classList.add("active")
    checkMode()
  } else if (this.textContent === "Click") {
    mode = "click"
    modeButton.forEach(button => button.classList.remove("active"))
    this.classList.add("active")
    checkMode()
  }
}

function checkMode() {
  let pokedexBox = document.querySelectorAll(".pokedex_box")
  let addButton = document.querySelectorAll(".add_button")

  if (mode === "drag") {
    let moveDiv = document.querySelectorAll(".direction_con")
    let subtractButton = document.querySelectorAll(".subtract_button")

    spriteArea.addEventListener("dragover", dragOver);
    spriteArea.addEventListener("dragenter", dragEnter);
    spriteArea.addEventListener("dragleave", dragLeave);
    spriteArea.addEventListener("drop", returnToOriginalPosition);

    pokedexBox.forEach(div => {
      const image = div.querySelector("img")

      if (image) {
        image.addEventListener("dragstart", dragStart);
        image.addEventListener("dragend", dragEnd);
      }

      div.addEventListener("dragover", dragOver);
      div.addEventListener("dragenter", dragEnter);
      div.addEventListener("dragleave", dragLeave);
      div.addEventListener("drop", drop);
    })

    dragImages.forEach(image => {
      image.addEventListener("dragstart", dragStart);
      image.addEventListener("dragend", dragEnd);
    })

    addButton.forEach(button => button.remove())
    subtractButton.forEach(button => button.remove())
    moveDiv.forEach(div => div.remove())
  } else if (mode === "click") {
    const spriteItem = document.querySelectorAll(".sprite_item")

    spriteArea.removeEventListener("dragover", dragOver);
    spriteArea.removeEventListener("dragenter", dragEnter);
    spriteArea.removeEventListener("dragleave", dragLeave);
    spriteArea.removeEventListener("drop", returnToOriginalPosition);

    pokedexBox.forEach(div => {
      const image = div.querySelector("img")

      if (image) {
        image.removeEventListener("dragstart", dragStart);
        image.removeEventListener("dragend", dragEnd);
      }

      div.removeEventListener("dragover", dragOver);
      div.removeEventListener("dragenter", dragEnter);
      div.removeEventListener("dragleave", dragLeave);
      div.removeEventListener("drop", drop);

      const divMinus = document.createElement("div")
      const moveDiv = document.createElement("div")
      const p = document.createElement("p")
      const forward = document.createElement("p")
      const backward = document.createElement("p")
      
      divMinus.setAttribute("class", "subtract_button")
      moveDiv.setAttribute("class", "direction_con")
      
      p.textContent = "-"
      forward.textContent = "►"
      backward.textContent = "◄"

      divMinus.addEventListener("click", clickMinus)
      forward.addEventListener("click", moveImage)
      backward.addEventListener("click", moveImage)

      divMinus.appendChild(p)
      moveDiv.appendChild(backward)
      moveDiv.appendChild(forward)
      div.appendChild(divMinus)
      div.appendChild(moveDiv)
    })

    dragImages.forEach(image => {
      image.removeEventListener("dragstart", dragStart);
      image.removeEventListener("dragend", dragEnd);
    })

    spriteItem.forEach(sprite => {
      const divAdd = document.createElement("div")
      const p = document.createElement("p")
      
      divAdd.setAttribute("class", "add_button")
      
      p.textContent = "+"

      divAdd.addEventListener("click", clickAdd)

      divAdd.appendChild(p)
      sprite.appendChild(divAdd)
    })
  }
}

function clickAdd() {
  const parentNode = this.parentNode
  const image = parentNode.querySelector("img")
  const boxes = document.querySelectorAll(".pokedex_box")
  const dataKey = Date.now();
  const type1 = parentNode.dataset.type1
  const type2 = parentNode.dataset.type2

  for (const box of boxes) {
    const boxImage = box.querySelector("img");

    if (!boxImage) {
      parentNode.setAttribute("data-key", `${dataKey}`)
      image.setAttribute("data-key", `${dataKey}`)
      image.setAttribute("data-type1", `${type1}`)
      image.setAttribute("data-type2", `${type2}`)
      box.appendChild(image)
      break;
    }
  }

  countTypes()
}

function clickMinus() {
  const parentNode = this.parentNode
  const image = parentNode.querySelector("img")
  const data = image.dataset.key
  const spriteHome = document.querySelector("#pokemon_sprites")
  const originalHome = spriteHome.querySelector(`[data-key="${data}"]`)

  originalHome.appendChild(image)

  countTypes()
}

function moveImage() {
  const parentNode = this.parentNode.parentNode;
  let imageToMove = parentNode.querySelector("img");
  let currentBox = parentNode.nextElementSibling;
  let priorBox = parentNode.previousElementSibling;

  if (this.textContent === "►") {
    let checkBox = currentBox;
    let hasEmpty = false;

    while (checkBox && checkBox.classList.contains("pokedex_box")) {
      if (!checkBox.querySelector("img")) {
        hasEmpty = true;
        break;
      }
      checkBox = checkBox.nextElementSibling;
    }

    if (!hasEmpty) {
      alert("No empty boxes to push Pokemon to. Please remove a Pokemon, add more boxes, or move Pokemon backward.")
      return;
    }

    while (currentBox && currentBox.classList.contains("pokedex_box") && imageToMove) {
      const existingImage = currentBox.querySelector("img");
      currentBox.appendChild(imageToMove);
      imageToMove = existingImage;
      currentBox = currentBox.nextElementSibling;
    }
  } else if (this.textContent === "◄") {
    let checkBox = priorBox;
    let hasEmpty = false;

    while (checkBox && checkBox.classList.contains("pokedex_box")) {
      if (!checkBox.querySelector("img")) {
        hasEmpty = true;
        break;
      }
      checkBox = checkBox.previousElementSibling;
    }

    if (!hasEmpty) {
      alert("No empty boxes to push Pokemon to. Please remove a Pokemon, add more boxes, or move Pokemon forward.")
      return;
    }

    while (priorBox && priorBox.classList.contains("pokedex_box") && imageToMove) {
      const existingImage = priorBox.querySelector("img");
      priorBox.appendChild(imageToMove);
      imageToMove = existingImage;
      priorBox = priorBox.previousElementSibling;
    }
  }
}

function convertList() {
    $(document).ready(function () {
        $("select").select2();

        $("select").off("change", addPokemonImage);

        $("select").on("change", addPokemonImageSelect2);
        $("select").on("select2:select", addPokemonImageSelect2);
    });

    checkInitialState()
}

function addPokemonImageSelect2(e) {
    let option, source, name, type1, type2, box;
    
    if (e.params && e.params.data) {
        option = e.params.data.element;
        box = e.target.parentNode;
        source = e.params.data.id;
        name = e.params.data.text;
        type1 = $(option).data('type1');
        type2 = $(option).data('type2');
    } else {
        box = this.parentNode;
        option = this.options[this.selectedIndex];
        source = this.value;
        name = option.text;
        type1 = option.dataset.type1;
        type2 = option.dataset.type2;
    }

    const img = box.querySelector("img") || document.createElement("img");

    img.src = `images/pokemon_images/${source}.png`;
    img.alt = `Image of ${name}`;
    img.dataset.type1 = type1;
    img.dataset.type2 = type2;

    if (!box.querySelector("img")) {
        img.classList.add("mobile_image");
        box.appendChild(img);
    }

    countTypes();

    document.querySelectorAll(".pokedex_box").forEach(pdBox => {
        pdBox.style.height = "auto";
    });
}

function saveDex() {
    const pokedexArea = document.querySelector("#pokedex-area")
    const compressedDex = LZString.compress(pokedexArea.innerHTML)
    const now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth() + 1; // months are 0-based
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    const d = new Date(year, month - 1, day, hours, minutes);
    
    

    savedDate = d.toLocaleString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });

    localStorage.setItem('dex', compressedDex)
    localStorage.setItem('count', count)
    localStorage.setItem('date', savedDate)

    saveText.textContent = "Yes"
    dateIndicator.textContent = savedDate
}

function loadDex() {
    const compressedDex = localStorage.getItem('dex')
    const pokedexArea = document.querySelector("#pokedex-area")

    if (compressedDex) {
        const decompressedDex = LZString.decompress(compressedDex)
        const retrievedCount = localStorage.getItem('count')
        const retrievedDate = localStorage.getItem('date')

        console.log(retrievedDate)

        count = retrievedCount
        savedDate = retrievedDate

        pokedexArea.innerHTML = decompressedDex

        const addButtons = document.querySelectorAll(".add_button")
        const subtractButtons = document.querySelectorAll(".subtract_button")
        const directionCon = document.querySelectorAll(".direction_con")

        addButtons.forEach(button => button.remove())
        subtractButtons.forEach(button => button.remove())
        directionCon.forEach(con => con.remove())

        requestAnimationFrame(() => {
            reattachListeners();
        });

        saveText.textContent = "Yes"
        dateIndicator.textContent = savedDate
    }
}

function reattachListeners() {
  const pokedexBox = document.querySelectorAll(".pokedex_box")
  const spriteArea = document.querySelector("#sprite_area")
  const submitbutton = document.querySelector("#pd-submit-button")
  const filter = document.querySelector("#cd-filter-select")
  const typeFilter = document.querySelector("#cd-type-select")
  const dexSearch = document.querySelector("#pokemon_search")
  const dragImages = document.querySelectorAll(".sprite_item img");

  var x = window.matchMedia("(min-width: 1024px)")

  if (x.matches) {
    pokedexBox.forEach(box => {
      const image = box.querySelector("img")

      box.addEventListener("dragover", dragOver);
      box.addEventListener("dragenter", dragEnter);
      box.addEventListener("dragleave", dragLeave);
      box.addEventListener("drop", drop);

      if (image) {
        image.addEventListener("dragstart", dragStart);
        image.addEventListener("dragend", dragEnd);
      }

      countTypes()
    })

    dragImages.forEach(function (image) {
      image.addEventListener("dragstart", dragStart);
      image.addEventListener("dragend", dragEnd);
      })

    spriteArea.addEventListener("dragover", dragOver);
    spriteArea.addEventListener("dragenter", dragEnter);
    spriteArea.addEventListener("dragleave", dragLeave);
    spriteArea.addEventListener("drop", returnToOriginalPosition);
    submitbutton.addEventListener("click", populateBoxArea)

    filter.addEventListener("change", showSelection)
    typeFilter.addEventListener("change", showSelection)
    dexSearch.addEventListener("input", showSelection)
  } else {
    const select2Elements = document.querySelectorAll(".select2")
    const mobileSelect = document.querySelectorAll(".mobile_select")

    mobileSelect.forEach(select => select.remove())
    select2Elements.forEach(element => element.remove())

    submitbutton.addEventListener("click", populateBoxArea)

    mobileList()
    countTypes()
  }
}

function checkInitialState() {
  const initialState = localStorage.getItem("initial")

  if (initialState) {
    const decompressedState = LZString.decompress(initialState)

    defaultState = decompressedState
  } else {
    const pokedexArea = document.querySelector("#pokedex-area")
    const initialDex = LZString.compress(pokedexArea.innerHTML)

    localStorage.setItem('initial', initialDex)
  }
}

function checkSize() {
  var x = window.matchMedia("(min-width: 1024px)")

  if (x.matches) {
    window.addEventListener("DOMContentLoaded", checkInitialState)
  }
}

function clearDex() {
  const pokedexArea = document.querySelector("#pokedex-area")

  pokedexArea.innerHTML = ""

  count = 0

  if (defaultState !== "") {
    pokedexArea.innerHTML = defaultState

    reattachListeners()
  } else {
    const initialState = localStorage.getItem("initial")

    const decompressedState = LZString.decompress(initialState)

    pokedexArea.innerHTML = decompressedState

    requestAnimationFrame(() => {
            reattachListeners();
        });
  }
}

function emptyStoredDex() {
  const savedDex = localStorage.getItem('dex')

  if (savedDex) {
    localStorage.removeItem('dex')
    localStorage.removeItem('date')
    localStorage.removeItem('count')
  }

  saveText.textContent = "No"
  dateIndicator.textContent = "N/A"
}

checkSize()

spriteArea.addEventListener("dragover", dragOver);
spriteArea.addEventListener("dragenter", dragEnter);
spriteArea.addEventListener("dragleave", dragLeave);
spriteArea.addEventListener("drop", returnToOriginalPosition);
submitbutton.addEventListener("click", populateBoxArea)
downloadButton.addEventListener("click", openNameForm)
dexName.addEventListener("submit", exportDivToImage)
tips.addEventListener("click", openTips)
typeCon.addEventListener("click", openTypeCount)
modeButton.forEach(button => button.addEventListener("click", changeMode))
saveButton.addEventListener("click", saveDex)
document.addEventListener("DOMContentLoaded", loadDex)
downloadButton.addEventListener("click", openNameForm)
dexName.addEventListener("submit", exportDivToImage)
saveButton.addEventListener("click", saveDex)
clearButton.addEventListener("click", clearDex)
emptyButton.addEventListener("click", emptyStoredDex)