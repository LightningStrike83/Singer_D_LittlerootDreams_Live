const filter = document.querySelector("#cd-filter-select")
const typeFilter = document.querySelector("#cd-type-select")
const dexSearch = document.querySelector("#pokemon_search")

export function showSelection() {
    const filter = document.querySelector("#cd-filter-select")
    const typeFilter = document.querySelector("#cd-type-select")
    const dexSearch = document.querySelector("#pokemon_search")

    const sprites = document.querySelectorAll(".sprite_item")
    const filterSelection = filter.value
    const typeFilterSelection = typeFilter.value
    const text = dexSearch.value
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, "")
        .trim()

    console.log(typeFilterSelection)

    sprites.forEach(sprite => {
        let matchesRegion = true
        let matchesType = true
        let matchesText = true

        const textSearch = sprite.querySelector(".pokemon_name")
        if (!textSearch) return

        const nameText = textSearch.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, "")

        if (filterSelection !== "" && filterSelection !== "all") {
            matchesRegion = sprite.classList.contains(filterSelection)
        }

        if (typeFilterSelection !== "" && typeFilterSelection !== "all") {
            matchesType =
                sprite.dataset.type1 === typeFilterSelection ||
                sprite.dataset.type2 === typeFilterSelection
        }

        if (!nameText.includes(text)) {
            matchesText = false
        }

        if (matchesRegion && matchesType && matchesText) {
            sprite.style.display = "flex"
        } else {
            sprite.style.display = "none"
        }
    })

    checkRemaining()
}

export function checkRemaining() {
  const regionals = document.querySelectorAll(".regionals")
  const megagmaxTitle =  document.querySelector("#mega_gmax")
  const otherMainTitle = document.querySelector("#other")

  const alolanSprites = document.querySelectorAll(".regionals.alola")
  const galarSprites = document.querySelectorAll(".regionals.galar")
  const hisuiSprites = document.querySelectorAll(".regionals.hisui")
  const paldeaSprites = document.querySelectorAll(".regionals.paldea")
  const megaSprites = document.querySelectorAll(".megas")
  const gmaxSprites = document.querySelectorAll(".gmaxes")
  const otherSprites = document.querySelectorAll(".other_sprite")
  const variantSprites = document.querySelectorAll(".cs_variants")
  const pokestarSprites = document.querySelectorAll(".pokestars")
  const betaSprites = document.querySelectorAll(".beta")

  const regionalTitle = document.querySelector("#regional")
  const alolaTitle = document.querySelector("#alola_title")
  const galarTitle = document.querySelector("#galar_title")
  const hisuiTitle = document.querySelector("#hisui_title")
  const paldeaTitle = document.querySelector("#paldea_title")
  const megaTitle = document.querySelector("#mega_title")
  const gmaxTitle = document.querySelector("#gmax_title")
  const otherTitle = document.querySelector("#other_models")
  const variantTitle = document.querySelector("#variant_title")
  const pokestarTitle = document.querySelector("#ps_title")
  const betaTitle = document.querySelector("#beta_title")

  let r = 0
  let a = 0
  let g = 0
  let h = 0
  let p = 0
  let m = 0
  let gx = 0
  let o = 0
  let v = 0
  let ps = 0
  let b = 0

  regionals.forEach(sprite => {
    if (sprite.style.display === "flex") {
      r++
    }
  })

  alolanSprites.forEach(sprite => {
    if (sprite.style.display === "flex") {
      a++
    }
  })

  galarSprites.forEach(sprite => {
    if (sprite.style.display === "flex") {
      g++
    }
  })

  hisuiSprites.forEach(sprite => {
    if (sprite.style.display === "flex") {
      h++
    }
  })

  paldeaSprites.forEach(sprite => {
    if (sprite.style.display === "flex") {
      p++
    }
  })

  megaSprites.forEach(sprite => {
    if (sprite.style.display === "flex") {
      m++
    }
  })

  gmaxSprites.forEach(sprite => {
    if (sprite.style.display === "flex") {
      gx++
    }
  })

  otherSprites.forEach(sprite => {
    if (sprite.style.display === "flex") {
      o++
    }
  })

  variantSprites.forEach(sprite => {
    if (sprite.style.display === "flex") {
      v++
    }
  })

  pokestarSprites.forEach(sprite => {
    if (sprite.style.display === "flex") {
      ps++
    }
  })

  betaSprites.forEach(sprite => {
    if (sprite.style.display === "flex") {
      b++
    }
  })

  if (r !== 0) {
    regionalTitle.style.display = "block"
    r = 0
  } else {
    regionalTitle.style.display = "none"
    r = 0
  }

  if (a !== 0) {
    alolaTitle.style.display = "block"
    a = 0
  } else {
    alolaTitle.style.display = "none"
    a = 0
  }

  if (g !== 0) {
    galarTitle.style.display = "block"
    g = 0
  } else {
    galarTitle.style.display = "none"
    g = 0
  }

  if (h !== 0) {
    hisuiTitle.style.display = "block"
    h = 0
  } else {
    hisuiTitle.style.display = "none"
    h = 0
  }

  if (p !== 0) {
    paldeaTitle.style.display = "block"
    p = 0
  } else {
    paldeaTitle.style.display = "none"
    p = 0
  }

  if (m !== 0) {
    megaTitle.style.display = "block"
    m = 0
  } else {
    megaTitle.style.display = "none"
    m = 0
  }

  if (gx !== 0) {
    gmaxTitle.style.display = "block"
    gx = 0
  } else {
    gmaxTitle.style.display = "none"
    gx = 0
  }

  if (o !== 0) {
    otherTitle.style.display = "block"
    galarTitle.style.display = "none"
    megaTitle.style.display = "none"
    megagmaxTitle.style.display = "none"
    regionalTitle.style.display = "none"
    o = 0
  } else {
    otherTitle.style.display = "none"
    o = 0
  }

  if (v !== 0) {
    variantTitle.style.display = "block"
    v = 0
  } else {
    variantTitle.style.display = "none"
    v = 0
  }

  if (ps !== 0) {
    pokestarTitle.style.display = "block"
    ps = 0
  } else {
    pokestarTitle.style.display = "none"
    ps = 0
  }

  if (b !== 0) {
    betaTitle.style.display = "block"
    b = 0
  } else {
    betaTitle.style.display = "none"
    b = 0
  }

  if (megaTitle.style.display === "none" && gmaxTitle.style.display === "none") {
    megagmaxTitle.style.display = "none"
  } else {
    megagmaxTitle.style.display = "block"
  }

  if (otherTitle.style.display === "none" && variantTitle.style.display === "none" && pokestarTitle.style.display === "none" && betaTitle.style.display === "none") {
    otherMainTitle.style.display = "none"
  } else {
    otherMainTitle.style.display = "block"
  }
}

filter.addEventListener("change", showSelection)
typeFilter.addEventListener("change", showSelection)
dexSearch.addEventListener("input", showSelection)

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