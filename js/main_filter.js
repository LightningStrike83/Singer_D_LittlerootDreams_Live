const filter = document.querySelector("#cd-filter-select")

function showSelection() {
    const sprites = document.querySelectorAll(".sprite_item")
    const regionalText = document.querySelectorAll(".filter_text")
    const filterSelection = filter.value

    regionalText.forEach(text => {
      text.classList.add("hidden")
    })

    sprites.forEach(sprite => {
      sprite.classList.remove("hidden")

      if (!sprite.classList.contains(filterSelection)) {
        sprite.classList.add("hidden")
      }

      if (filterSelection === "all") {
        sprite.classList.remove("hidden")
      }

      if (filterSelection === "all" || filterSelection === "regionals") {
        regionalText.forEach(text => {
          text.classList.remove("hidden")
        })
      }
    })
}

filter.addEventListener("change", showSelection)

// let all = document.querySelector("#all");
// let kanto = document.querySelector("#kanto");
// let johto = document.querySelector("#johto");
// let hoenn = document.querySelector("#hoenn");
// let sinnoh = document.querySelector("#sinnoh");
// let unova = document.querySelector("#unova");
// let kalos = document.querySelector("#kalos");
// let alola = document.querySelector("#alola");
// let galar = document.querySelector("#galar");
// let hisui = document.querySelector("#hisui");
// let paldea = document.querySelector("#paldea");
// let regionalForms = document.querySelector("#regionals");

// function showAll() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "block";
//     });
//   }
  
//   function showKanto() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
//   }
  
//   function showJohto() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
//   }
  
//   function showHoenn() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
//   }
  
//   function showSinnoh() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
//   }
  
//   function showUnova() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
//   }
  
//   function showKalos() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
//   }
  
//   function showAlola() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
//   }
  
//   function showGalar() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
//   }
  
//   function showHisui() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
//   }
  
//   function showPaldea() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
//   }
  
//   function showRegionals() {
//     var kantoPokemon = document.querySelectorAll(".kanto");
//     var johtoPokemon = document.querySelectorAll(".johto");
//     var hoennPokemon = document.querySelectorAll(".hoenn");
//     var sinnohPokemon = document.querySelectorAll(".sinnoh");
//     var unovaPokemon = document.querySelectorAll(".unova");
//     var kalosPokemon = document.querySelectorAll(".kalos");
//     var alolaPokemon = document.querySelectorAll(".alola");
//     var galarPokemon = document.querySelectorAll(".galar");
//     var hisuiPokemon = document.querySelectorAll(".hisui");
//     var paldeaPokemon = document.querySelectorAll(".paldea");
//     var regionalPokemon = document.querySelectorAll(".regionals");
//     var filterText = document.querySelectorAll(".filter_text");
  
//     kantoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     johtoPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hoennPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     sinnohPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     unovaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     kalosPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     alolaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     galarPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     hisuiPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     paldeaPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "none";
//     });
  
//     regionalPokemon.forEach(function(pokemon) {
//       pokemon.style.display = "flex";
//     });
  
//     filterText.forEach(function(pokemon) {
//       pokemon.style.display = "block";
//     });
//   }

// all.addEventListener("click", showAll);
// kanto.addEventListener("click", showKanto);
// johto.addEventListener("click", showJohto);
// hoenn.addEventListener("click", showHoenn);
// sinnoh.addEventListener("click", showSinnoh);
// unova.addEventListener("click", showUnova);
// kalos.addEventListener("click", showKalos);
// alola.addEventListener("click", showAlola);
// galar.addEventListener("click", showGalar);
// hisui.addEventListener("click", showHisui);
// paldea.addEventListener("click", showPaldea);
// regionalForms.addEventListener("click", showRegionals);