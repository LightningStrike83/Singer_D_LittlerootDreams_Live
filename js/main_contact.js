const form = document.querySelector("#contact-form");
const errorMessage = document.querySelector("#error-text");
const errorCon = document.querySelector("#other-errors");
const spinner = `<img id="spinner" src="../images/spinner.gif" alt="Loading spinner"><br> <p id="spinner-text">Sending...</p>`;

function submitForm(event) {
    event.preventDefault();

    errorCon.innerHTML = spinner;
    const url = "../includes/contact-form.php";
    const formData = new URLSearchParams(new FormData(event.target)).toString();

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData
    })
        .then(response =>
            response.json().catch(() => {
                throw new Error("Invalid JSON response");
            })
        )
        .then(responseText => {
            errorCon.innerHTML = ""; // Clear spinner

            if (responseText.errors) {
                const errors = Object.values(responseText.errors);

                errors.forEach(error => {
                    const p = document.createElement("p");
                    p.textContent = error;
                    errorCon.appendChild(p);
                });
            } else {
                form.reset();
                errorMessage.textContent = "Thank you for your message! We'll be in contact as soon as possible!";
            }
        })
        .catch(error => {
            errorMessage.textContent = `Sorry, something went wrong! ${error}`;
            errorCon.innerHTML = ""; // Clear spinner
            console.log(error)
        });
}

form.addEventListener("submit", submitForm);
