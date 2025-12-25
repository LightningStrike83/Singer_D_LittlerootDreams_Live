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

let finalName = ""
let count = 0
let mode = "drag"

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

      spinner.setAttribute("id", "spinner")
      spinner.setAttribute("alt", "Loading spinner")
      box.appendChild(spinner)
    })

    for (const box of pokedexBox) {
      const mobileList = document.createElement("select");
      const blankOption = document.createElement("option");
      const allOption = document.createElement("option");
      const regionalOption = document.createElement("option");

      allOption.disabled = true;
      regionalOption.disabled = true;
      allOption.selected = true;

      allOption.innerHTML = "--Select A Pokemon--";
      regionalOption.innerHTML = "--Regional Forms--";

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

              mobileList.appendChild(mobileBaseOption);
            });

            mobileList.appendChild(blankOption);
            mobileList.appendChild(regionalOption);

            regionalData.forEach(pokemon => {
              const mobileRegionalOption = document.createElement("option");
              mobileRegionalOption.textContent = pokemon.name;
              mobileRegionalOption.value = pokemon.number;
              mobileList.appendChild(mobileRegionalOption);
            });

            box.appendChild(mobileList);

            let spinnerFind = box.querySelector("#spinner")
            spinnerFind.remove()

            mobileList.addEventListener("change", addPokemonImage);
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
  const pokedexBoxes = document.querySelectorAll(".pokedex_box")
  let imgCheck = box.querySelector("img")

  if (imgCheck) {
    imgCheck.src = `images/pokemon_images/${source}.png`
    img.setAttribute("alt", `Image of Pokemon ${source}`)
  } else {
    img.src = `images/pokemon_images/${source}.png`
    box.appendChild(img)
    img.setAttribute("class", "mobile_image")
    img.setAttribute("alt", `Image of Pokemon ${source}`)
  }

  pokedexBoxes.forEach(pdBox => {
    pdBox.style.minHeight = "min-content";
  });
  
  resetBoxHeight()
}

function resetBoxHeight() {
  const pokedexBoxes = document.querySelectorAll(".pokedex_box")
  const boxesWithImages = Array.from(pokedexBoxes).filter(box => box.querySelector("img"));
  const dynamicHeight = boxesWithImages[0].offsetHeight;

  pokedexBoxes.forEach(pdBox => {
    if (!pdBox.querySelector("img")) {
      pdBox.style.height = `${dynamicHeight}px`;
    }
  });
}


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

function exportDivToImage(event) {
  const divExport = document.querySelector("#pokedex_display")
  const mobileSelect = document.querySelectorAll(".mobile_select")
  const pokedexBox = document.querySelectorAll(".pokedex_box")
  const mobileImage = document.querySelectorAll(".mobile_image")
  const pokedexArea = document.querySelector("#pokedex_area")
  const p = document.createElement("p")
  const title = document.createElement("h3")
  const form = document.querySelector("#custom-dex")
  let formName = form.value

  var x = window.matchMedia("(min-width: 1024px)")

  event.preventDefault()
  finalName = formName

  pokedexArea.classList.remove("m-col-start-7")
  pokedexArea.classList.remove("m-col-end-13")

  mobileSelect.forEach(list => list.remove())
  mobileImage.forEach(image => image.style.marginBottom = "0")

  pokedexBox.forEach(box => {
    if (x.matches) {
      box.style.width = "10%"
      box.style.minHeight = "min-content"
    }
  })

  p.textContent = "Create your own at littlerootdreams.com"
  p.setAttribute("id", "pokedex-credit")

  title.textContent = `${finalName}`
  title.setAttribute("id", "my-pokedex-title")

  divExport.appendChild(title)
  divExport.appendChild(p)

  divExport.style.backgroundImage = "linear-gradient(#319dff, #70afe2)"

  if (mode === "click") {
    let moveDiv = document.querySelectorAll(".direction_con")
    let subtractButton = document.querySelectorAll(".subtract_button")

    subtractButton.forEach(button => button.remove())
    moveDiv.forEach(div => div.remove())
  }
  
  html2canvas(divExport).then((canvas) => {
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "my-pokedex.png"; 
    link.click();
  });

  mobileList()

  pokedexArea.classList.add("m-col-start-7")
  pokedexArea.classList.add("m-col-end-13")

  pokedexBox.forEach(box => {
    box.style.width = "20%"
  })

  mobileImage.forEach(image => image.style.marginBottom = "20px")

  form.value = ""
  nameForm.style.visibility = "hidden"
  nameForm.style.opacity = "0"

  divExport.style.backgroundImage = "none"

  clearText()
  readdButtons()
  openConfirmation()
}

function readdButtons() {
  if (mode === "click") {
    let pokedexBox = document.querySelectorAll(".pokedex_box")
    
    pokedexBox.forEach(div => {
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
  }
}

function clearText() {
  const pokedexCredit = document.querySelector("#pokedex-credit")
  const pokedexTitle = document.querySelector("#my-pokedex-title")

  pokedexCredit.remove()
  pokedexTitle.remove()
}

function openNameForm() {
  nameForm.style.visibility = "visible"
  nameForm.style.opacity = "1"
}

function openConfirmation() {
  const confirmationForm = document.querySelector("#confirmation_message_con")

  confirmationForm.style.visibility = "visible"
  confirmationForm.style.opacity = "1"

  console.log("OPENED")

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
    spriteItem = document.querySelectorAll(".sprite_item")

    spriteArea.removeEventListener("dragover", dragOver);
    spriteArea.removeEventListener("dragenter", dragEnter);
    spriteArea.removeEventListener("dragleave", dragLeave);
    spriteArea.removeEventListener("drop", returnToOriginalPosition);

    pokedexBox.forEach(div => {
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