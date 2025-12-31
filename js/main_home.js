const baseURL = "https://littlerootdreams.com/lumen/public/"
const siteUpdate = document.querySelector("#main-site-updates")

function updatePopulation() {
    fetch(`${baseURL}/updates`)
    .then(response => response.json())
    .then(function(response){
        siteUpdate.innerHTML = ""

        response.forEach(update => {
            const li = document.createElement("li")
            const heading = document.createElement("h3")
            const text = document.createElement("p")
            const date = document.createElement("p")
            const infoDiv = document.createElement("div")

            heading.textContent = update.title
            text.innerHTML = update.text
            date.textContent = update.date

            heading.setAttribute("class", "update-title")
            text.setAttribute("class", "update-text")
            date.setAttribute("class", "update-date")
            infoDiv.setAttribute("class", "update-con")

            infoDiv.appendChild(heading)
            infoDiv.appendChild(date)
            li.appendChild(infoDiv)
            li.appendChild(text)
            siteUpdate.appendChild(li)
        })
    })
    .catch(error => {
        const p = document.createElement("p")

        p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

        siteUpdate.appendChild(p)
    })
}

updatePopulation()