const currentSelection = document.querySelector("#current-selection")
const selectList = document.querySelectorAll(".pick-select")
const topText = document.querySelector(".top-text")
const createButton = document.querySelector("#anni-create")
const submitButton = document.querySelector("#anni-submit")
const continueButton = document.querySelector("#anni-continue")

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

function toTop() {
    var x = window.matchMedia("(min-width: 728px)")
  
    if (x.matches) {
      gsap.to(window, { duration: 1, scrollTo: (0)})
    } else {
      gsap.to(window, { duration: 2.5, scrollTo: (0)})
    }
}

function openNameForm() {
    const nameCon = document.querySelector("#anni-name-con")

    nameCon.style.visibility = "visible"
    nameCon.style.opacity = "1"
}

function checkFinal() {
    const nameCon = document.querySelector("#anni-name-con")
    const nameInput = document.querySelector("#anni-name-input")
    const nameValue = nameInput.value

    let p = 0

    nameCon.style.visibility = "hidden"
    nameCon.style.opacity = "0"

    selectList.forEach(select => {
        if (select.value === "") {
            p++
        }
    })

    if (nameValue !== "") {
        if (p === 0) {
            create30thImage()
        } else {
            openWarning()
        }
    } else {
        alert("Please enter a name")
    }
}

function openWarning() {
    const warningCon = document.querySelector("#anni-warning-con")

    warningCon.style.visibility = "visible"
    warningCon.style.opacity = "1"
}

function create30thImage() {
    const nameInput = document.querySelector("#anni-name-input");
    const nameValue = nameInput.value;
    const downloadCon = document.querySelector("#anni-downloading-con");

    prepareCanvas(nameValue).then(() => {
        // At this point, the DOM updates are applied and painted
        domtoimage.toPng(document.querySelector("#anni-canvas-con"), {
            bgcolor: null,
            quality: 1,
            style: { transform: 'scale(1)' }
        })
        .then(dataUrl => {
            const link = document.createElement('a');
            link.download = '30for30th.png';
            link.href = dataUrl;
            link.click();

            // Hide canvas and show download confirmation
            const anniCanvas = document.querySelector("#anni-canvas-con");
            anniCanvas.style.display = "none";

            downloadCon.style.visibility = "visible";
            downloadCon.style.opacity = "1";

            setTimeout(() => {
                downloadCon.style.visibility = "hidden";
                downloadCon.style.opacity = "0";
            }, 4000);
        })
        .catch(error => {
            console.error('Error exporting div:', error);
        });
    });
}


function prepareCanvas(nameValue) {
    const warningCon = document.querySelector("#anni-warning-con");
    const anniCanvas = document.querySelector("#anni-canvas-con");
    const name = document.querySelector("#anni-name");

    return new Promise(resolve => {
        // Apply DOM changes
        warningCon.style.visibility = "hidden";
        warningCon.style.opacity = "0";

        anniCanvas.style.display = "grid";
        name.textContent = nameValue;

        // Wait for the browser to paint these changes
        requestAnimationFrame(() => {
            resolve();
        });
    });
}

currentSelection.addEventListener("click", openList)
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollToPlugin)});
topText.addEventListener("click", toTop)
createButton.addEventListener("click", openNameForm)
submitButton.addEventListener("click", checkFinal)
continueButton.addEventListener("click", create30thImage)