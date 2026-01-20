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
    const node = document.querySelector("#anni-canvas-con");

    prepareCanvas(nameValue).then(() => {
        const scale = 3; // increase for more quality (2–4 is good)
        const rect = node.getBoundingClientRect();

        domtoimage.toPng(node, {
            bgcolor: null,
            quality: 1,
            width: rect.width * scale,
            height: rect.height * scale,
            style: {
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                width: `${rect.width}px`,
                height: `${rect.height}px`
            }
        })
        .then(dataUrl => {
            const link = document.createElement('a');
            link.download = '30for30th.png';
            link.href = dataUrl;
            link.click();

            node.style.display = "none";

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
        warningCon.style.visibility = "hidden";
        warningCon.style.opacity = "0";

        anniCanvas.style.display = "grid";
        name.textContent = nameValue;

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