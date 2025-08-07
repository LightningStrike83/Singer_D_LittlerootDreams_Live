const topText = document.querySelector(".top-text")

function toTop() {
    var x = window.matchMedia("(min-width: 728px)")
  
    if (x.matches) {
      gsap.to(window, { duration: 1, scrollTo: (0)})
    } else {
      gsap.to(window, { duration: 2.5, scrollTo: (0)})
    }
}


topText.addEventListener("click", toTop)

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollToPlugin)});
