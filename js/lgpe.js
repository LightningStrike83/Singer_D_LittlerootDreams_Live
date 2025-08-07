let brockLGPE = document.querySelector ("#brock6");
let mistyLGPE = document.querySelector ("#misty6");
let ltsurgeLGPE = document.querySelector ("#ltsurge6");
let erikaLGPE = document.querySelector ("#erika6");
let kogaLGPE = document.querySelector ("#koga6");
let sabrinaLGPE = document.querySelector ("#sabrina6");
let blaineLGPE = document.querySelector ("#blaine6");
let giovanniLGPE = document.querySelector ("#giovanni5");
let loreleiLGPE = document.querySelector ("#lorelei4");
let brunoLGPE = document.querySelector ("#bruno6");
let agathaLGPE = document.querySelector ("#agatha4");
let lanceLGPE = document.querySelector ("#lance6");
let tracePikachu = document.querySelector ("#trace1_p")
let traceEevee = document.querySelector ("#trace1_e")

let lgpe_trainers = [
    {
        namea : "Geodude",
        levela : "LV: 11",
        typea : "Type: Rock/Ground",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 31",
        atka : "Atk: 19",
        defa : "Def: 27",
        spatka : "Sp. Atk: 12",
        spdefa : "Sp. Def: 11",
        spda : "Spd: 9",
        move1a : "-Tackle",
        move2a : "",
        move3a : "",
        move4a : "",

        nameb : "Onix",
        levelb : "LV: 12",
        typeb : "Type: Rock/Ground",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 32",
        atkb : "Atk: 15",
        defb : "Def: 38",
        spatkb : "Sp. Atk: 12",
        spdefb : "Sp. Def: 16",
        spdb : "Spd: 21",
        move1b : "-Headbutt",
        move2b : "-Bind",
        move3b : "-Rock Throw",
        move4b : "",
    },

    {
        namea : "Psyduck",
        levela : "LV: 18",
        typea : "Type: Water",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 52",
        atka : "Atk: 22",
        defa : "Def: 24",
        spatka : "Sp. Atk: 33",
        spdefa : "Sp. Def: 24",
        spda : "Spd: 26",
        move1a : "-Confusion",
        move2a : "-Water Gun",
        move3a : "",
        move4a : "",

        nameb : "Starmie",
        levelb : "LV: 19",
        typeb : "Type: Water/Psychic",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 58",
        atkb : "Atk: 35",
        defb : "Def: 42",
        spatkb : "Sp. Atk: 39",
        spdefb : "Sp. Def: 39",
        spdb : "Spd: 50",
        move1b : "-Scald",
        move2b : "-Swift",
        move3b : "-Psywave",
        move4b : "",
    },

    {
        namea : "Voltorb",
        levela : "LV: 25",
        typea : "Type: Electric",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 63",
        atka : "Atk: 19",
        defa : "Def: 32",
        spatka : "Sp. Atk: 40",
        spdefa : "Sp. Def: 35",
        spda : "Spd: 68",
        move1a : "-Thunderbolt",
        move2a : "-Swift",
        move3a : "-Light Screen",
        move4a : "",

        nameb : "Magnemite",
        levelb : "LV: 25",
        typeb : "Type: Electric/Steel",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 56",
        atkb : "Atk: 25",
        defb : "Def: 47",
        spatkb : "Sp. Atk: 55",
        spdefb : "Sp. Def: 40",
        spdb : "Spd: 30",
        move1b : "-Thunderbolt",
        move2b : "-Sonic Boom",
        move3b : "",
        move4b : "",

        namec : "Raichu",
        levelc : "LV: 26",
        typec : "Type: Electric",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 75",
        atkc : "Atk: 64",
        defc : "Def: 36",
        spatkc : "Sp. Atk: 59",
        spdefc : "Sp. Def: 49",
        spdc : "Spd: 57",
        move1c : "-Thunderbolt",
        move2c : "-Double Kick",
        move3c : "-Quick Attack",
        move4c : "",
    },

    {
        namea : "Tangela",
        levela : "LV: 33",
        typea : "Type: Grass",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 98",
        atka : "Atk: 44",
        defa : "Def: 99",
        spatka : "Sp. Atk: 80",
        spdefa : "Sp. Def: 34",
        spda : "Spd: 42",
        move1a : "-Mega Drain",
        move2a : "-Bind",
        move3a : "-Sleep Powder",
        move4a : "",

        nameb : "Weepinbell",
        levelb : "LV: 33",
        typeb : "Type: Grass/Poison",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 98",
        atkb : "Atk: 74",
        defb : "Def: 41",
        spatkb : "Sp. Atk: 71",
        spdefb : "Sp. Def: 38",
        spdb : "Spd: 44",
        move1b : "-Mega Drain",
        move2b : "-Poison Jab",
        move3b : "",
        move4b : "",

        namec : "Vileplume",
        levelc : "LV: 34",
        typec : "Type: Grass/Poison",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 114",
        atkc : "Atk: 55",
        defc : "Def: 66",
        spatkc : "Sp. Atk: 99",
        spdefc : "Sp. Def: 69",
        spdc : "Spd: 42",
        move1c : "-Mega Drain",
        move2c : "-Moonblast",
        move3c : "",
        move4c : "",
    },

    {
        namea : "Weezing",
        levela : "LV: 43",
        typea : "Type: Poison",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 133",
        atka : "Atk: 86",
        defa : "Def: 121",
        spatka : "Sp. Atk: 82",
        spdefa : "Sp. Def: 85",
        spda : "Spd: 54",
        move1a : "-Explosion",
        move2a : "-Sludge Bomb",
        move3a : "-Protect",
        move4a : "-Toxic",

        nameb : "Muk",
        levelb : "LV: 43",
        typeb : "Type: Poison",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 168",
        atkb : "Atk: 89",
        defb : "Def: 73",
        spatkb : "Sp. Atk: 80",
        spdefb : "Sp. Def: 103",
        spdb : "Spd: 52",
        move1b : "-Protect",
        move2b : "-Sludge Bomb",
        move3b : "-Moonblast",
        move4b : "-Toxic",

        namec : "Golbat",
        levelc : "LV: 43",
        typec : "Type: Poison/Flying",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 133",
        atkc : "Atk: 86",
        defc : "Def: 70",
        spatkc : "Sp. Atk: 65",
        spdefc : "Sp. Def: 73",
        spdc : "Spd: 104",
        move1c : "-Toxic",
        move2c : "-Protect",
        move3c : "-Fly",
        move4c : "-Leech Life",

        named : "Venomoth",
        leveld : "LV: 44",
        typed : "Type: Bug/Poison",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 132",
        atkd : "Atk: 59",
        defd : "Def: 62",
        spatkd : "Sp. Atk: 106",
        spdefd : "Sp. Def: 84",
        spdd : "Spd: 97",
        move1d : "-Sludge Bomb",
        move2d : "-Protect",
        move3d : "-Bug Buzz",
        move4d : "-Psychic",
    },

    {
        namea : "Mr. Mime",
        levela : "LV: 43",
        typea : "Type: Psychic/Fairy",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 112",
        atka : "Atk: 43",
        defa : "Def: 73",
        spatka : "Sp. Atk: 95",
        spdefa : "Sp. Def: 133",
        spda : "Spd: 86",
        move1a : "-Reflect",
        move2a : "-Psychic",
        move3a : "-Light Screen",
        move4a : "-Double Slap",

        nameb : "Slowbro",
        levelb : "LV: 43",
        typeb : "Type: Water/Psychic",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 159",
        atkb : "Atk: 65",
        defb : "Def: 123",
        spatkb : "Sp. Atk: 95",
        spdefb : "Sp. Def: 86",
        spdb : "Spd: 35",
        move1b : "-Psychic",
        move2b : "-Yawn",
        move3b : "-Surf",
        move4b : "-Calm Mind",

        namec : "Jynx",
        levelc : "LV: 43",
        typec : "Type: Ice/Psychic",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 125",
        atkc : "Atk: 46",
        defc : "Def: 39",
        spatkc : "Sp. Atk: 116",
        spdefc : "Sp. Def: 108",
        spdc : "Spd: 99",
        move1c : "-Psychic",
        move2c : "-Lovely Kiss",
        move3c : "-Ice Punch",
        move4c : "",

        named : "Alakazam",
        leveld : "LV: 44",
        typed : "Type: Psychic",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 127",
        atkd : "Atk: 47",
        defd : "Def: 49",
        spatkd : "Sp. Atk: 137",
        spdefd : "Sp. Def: 93",
        spdd : "Spd: 135",
        move1d : "-Psychic",
        move2d : "-Night Shade",
        move3d : "",
        move4d : "",
    },

    {
        namea : "Magmar",
        levela : "LV: 47",
        typea : "Type: Fire",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 140",
        atka : "Atk: 108",
        defa : "Def: 63",
        spatka : "Sp. Atk: 113",
        spdefa : "Sp. Def: 89",
        spda : "Spd: 106",
        move1a : "-Flamethrower",
        move2a : "-Low Kick",
        move3a : "-Confuse Ray",
        move4a : "",

        nameb : "Rapidash",
        levelb : "LV: 47",
        typeb : "Type: Fire",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 140",
        atkb : "Atk: 124",
        defb : "Def: 75",
        spatkb : "Sp. Atk: 75",
        spdefb : "Sp. Def: 94",
        spdb : "Spd: 117",
        move1b : "-Flare Blitz",
        move2b : "-Quick Attack",
        move3b : "-Fury Attack",
        move4b : "",

        namec : "Ninetales",
        levelc : "LV: 47",
        typec : "Type: Fire",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 148",
        atkc : "Atk: 81",
        defc : "Def: 72",
        spatkc : "Sp. Atk: 95",
        spdefc : "Sp. Def: 124",
        spdc : "Spd: 113",
        move1c : "-Fire Blast",
        move2c : "-Quick Attack",
        move3c : "",
        move4c : "",

        named : "Arcanine",
        leveld : "LV: 48",
        typed : "Type: Fire",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 167",
        atkd : "Atk: 137",
        defd : "Def: 96",
        spatkd : "Sp. Atk: 94",
        spdefd : "Sp. Def: 86",
        spdd : "Spd: 110",
        move1d : "-Flare Blitz",
        move2d : "-Outrage",
        move3d : "-Crunch",
        move4d : "",
    },

    {

        namea : "Dugtrio",
        levela : "LV: 49",
        typea : "Type: Ground",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 124",
        atka : "Atk: 117",
        defa : "Def: 63",
        spatka : "Sp. Atk: 56",
        spdefa : "Sp. Def: 88",
        spda : "Spd: 150",
        move1a : "-Slash",
        move2a : "-Sucker Punch",
        move3a : "-Earthquake",
        move4a : "",

        nameb : "Nidoqueen",
        levelb : "LV: 49",
        typeb : "Type: Poison/Ground",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 182",
        atkb : "Atk: 104",
        defb : "Def: 104",
        spatkb : "Sp. Atk: 79",
        spdefb : "Sp. Def: 113",
        spdb : "Spd: 89",
        move1b : "-Super Fang",
        move2b : "-Earthquake",
        move3b : "-Crunch",
        move4b : "",

        namec : "Nidoking",
        levelc : "LV: 49",
        typec : "Type: Poison/Ground",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 169",
        atkc : "Atk: 119",
        defc : "Def: 104",
        spatkc : "Sp. Atk: 88",
        spdefc : "Sp. Def: 93",
        spdc : "Spd: 98",
        move1c : "-Megahorn",
        move2c : "-Earthquake",
        move3c : "-Horn Drill",
        move4c : "-Poison Jab",

        named : "Rhydon",
        leveld : "LV: 50",
        typed : "Type: Ground/Rock",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 196",
        atkd : "Atk: 165",
        defd : "Def: 140",
        spatkd : "Sp. Atk: 54",
        spdefd : "Sp. Def: 65",
        spdd : "Spd: 55",
        move1d : "-Earthquake",
        move2d : "-Rock Slide",
        move3d : "-Megahorn",
        move4d : "",
    },

    {
        namea : "Dewgong",
        levela : "LV: 51",
        typea : "Type: Water Ice",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 192",
        atka : "Atk: 91",
        defa : "Def: 90",
        spatka : "Sp. Atk: 100",
        spdefa : "Sp. Def: 117",
        spda : "Spd: 91",
        move1a : "-Aqua Jet",
        move2a : "-Ice Shard",
        move3a : "-Waterfall",
        move4a : "",

        nameb : "Jynx",
        levelb : "LV: 51",
        typeb : "Type: Ice/Psychic",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 166",
        atkb : "Atk: 63",
        defb : "Def: 56",
        spatkb : "Sp. Atk: 137",
        spdefb : "Sp. Def: 117",
        spdb : "Spd: 128",
        move1b : "-Psychic",
        move2b : "-Blizzard",
        move3b : "-Lovely Kiss",
        move4b : "",

        namec : "Cloyster",
        levelc : "LV: 51",
        typec : "Type: Water/Ice",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 151",
        atkc : "Atk: 105",
        defc : "Def: 223",
        spatkc : "Sp. Atk: 107",
        spdefc : "Sp. Def: 66",
        spdc : "Spd: 91",
        move1c : "-Spike Cannon",
        move2c : "-Hydro Pump",
        move3c : "-Ice Beam",
        move4c : "",

        named : "Slowbro",
        leveld : "LV: 51",
        typed : "Type: Water/Psychic",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 197",
        atkd : "Atk: 86",
        defd : "Def: 132",
        spatkd : "Sp. Atk: 122",
        spdefd : "Sp. Def: 111",
        spdd : "Spd: 50",
        move1d : "-Flamethrower",
        move2d : "-Surf",
        move3d : "-Psychic",
        move4d : "",

        namee : "Lapras",
        levele : "LV: 52",
        typee : "Type: Water/Ice",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 236",
        atke : "Atk: 98",
        defe : "Def: 103",
        spatke : "Sp. Atk: 119",
        spdefe : "Sp. Def: 119",
        spde : "Spd: 83",
        move1e : "-Blizzard",
        move2e : "-Dragon Pulse",
        move3e : "-Hydro Pump",
        move4e : "",
    },

    {
        namea : "Onix",
        levela : "LV: 52",
        typea : "Type: Rock/Ground",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 138",
        atka : "Atk: 67",
        defa : "Def: 205",
        spatka : "Sp. Atk: 45",
        spdefa : "Sp. Def: 67",
        spda : "Spd: 93",
        move1a : "-Earthquake",
        move2a : "-Iron Tail",
        move3a : "-Stealth Rock",
        move4a : "",

        nameb : "Hitmonchan",
        levelb : "LV: 52",
        typeb : "Type: Fightning",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 153",
        atkb : "Atk: 129",
        defb : "Def: 102",
        spatkb : "Sp. Atk: 51",
        spdefb : "Sp. Def: 135",
        spdb : "Spd: 108",
        move1b : "-Thunder Punch",
        move2b : "-Fire Punch",
        move3b : "-Ice Punch",
        move4b : "",

        namec : "Hitmonlee",
        levelc : "LV: 52",
        typec : "Type: Fightning",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 153",
        atkc : "Atk: 159",
        defc : "Def: 75",
        spatkc : "Sp. Atk: 51",
        spdefc : "Sp. Def: 135",
        spdc : "Spd: 111",
        move1c : "-Rock Slide",
        move2c : "-Feint",
        move3c : "-Brick Break",
        move4c : "",

        named : "Poliwrath",
        leveld : "LV: 52",
        typed : "Type: Water/Fighting",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 195",
        atkd : "Atk: 119",
        defd : "Def: 119",
        spatkd : "Sp. Atk: 83",
        spdefd : "Sp. Def: 125",
        spdd : "Spd: 93",
        move1d : "-Waterfall",
        move2d : "-Body Slam",
        move3d : "-Superpower",
        move4d : "",

        namee : "Machamp",
        levele : "LV: 53",
        typee : "Type: Fighting",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 198",
        atke : "Atk: 173",
        defe : "Def: 105",
        spatke : "Sp. Atk: 80",
        spdefe : "Sp. Def: 111",
        spde : "Spd: 79",
        move1e : "-Earthquake",
        move2e : "-Rock Slide",
        move3e : "-Superpower",
        move4e : "",
    },

    {
        namea : "Arbok",
        levela : "LV: 53",
        typea : "Type: Poison",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 166",
        atka : "Atk: 121",
        defa : "Def: 94",
        spatka : "Sp. Atk: 80",
        spdefa : "Sp. Def: 114",
        spda : "Spd: 105",
        move1a : "-Crunch",
        move2a : "-Poison Jab",
        move3a : "-Glare",
        move4a : "",

        nameb : "Gengar",
        levelb : "LV: 53",
        typeb : "Type: Ghost/Poison",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 166",
        atkb : "Atk: 89",
        defb : "Def: 75",
        spatkb : "Sp. Atk: 158",
        spdefb : "Sp. Def: 100",
        spdb : "Spd: 150",
        move1b : "-Will-O-Wisp",
        move2b : "-Shadow Ball",
        move3b : "-Sludge Bomb",
        move4b : "",

        namec : "Golbat",
        levelc : "LV: 53",
        typec : "Type: Poison/Flying",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 182",
        atkc : "Atk: 105",
        defc : "Def: 95",
        spatkc : "Sp. Atk: 80",
        spdefc : "Sp. Def: 100",
        spdc : "Spd: 127",
        move1c : "-Quick Attack",
        move2c : "-Crunch",
        move3c : "-Air Slash",
        move4c : "",

        named : "Weezing",
        leveld : "LV: 53",
        typed : "Type: Poison",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 171",
        atkd : "Atk: 116",
        defd : "Def: 162",
        spatkd : "Sp. Atk: 111",
        spdefd : "Sp. Def: 95",
        spdd : "Spd: 75",
        move1d : "-Sludge Bomb",
        move2d : "-Thunderbolt",
        move3d : "-Shadow Ball",
        move4d : "",

        namee : "Gengar",
        levele : "LV: 54",
        typee : "Type: Ghost/Poison",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 169",
        atke : "Atk: 91",
        defe : "Def: 77",
        spatke : "Sp. Atk: 161",
        spdefe : "Sp. Def: 102",
        spde : "Spd: 154",
        move1e : "-Dazzling Gleam",
        move2e : "-Sludge Bomb",
        move3e : "-Shadow Ball",
        move4e : "",
    },

    {
        namea : "Seadra",
        levela : "LV: 54",
        typea : "Type: Water",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 163",
        atka : "Atk: 81",
        defa : "Def: 135",
        spatka : "Sp. Atk: 123",
        spdefa : "Sp. Def: 69",
        spda : "Spd: 113",
        move1a : "-Hydro Pump",
        move2a : "-Dragon Pulse",
        move3a : "-Hyper Beam",
        move4a : "",

        nameb : "Aerodactyl",
        levelb : "LV: 54",
        typeb : "Type: Rock/Flying",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 190",
        atkb : "Atk: 134",
        defb : "Def: 81",
        spatkb : "Sp. Atk: 86",
        spdefb : "Sp. Def: 102",
        spdb : "Spd: 177",
        move1b : "-Rock Slide",
        move2b : "-Earthquake",
        move3b : "-Hyper Beam",
        move4b : "",

        namec : "Gyarados",
        levelc : "LV: 54",
        typec : "Type: Water/Flying",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 206",
        atkc : "Atk: 156",
        defc : "Def: 106",
        spatkc : "Sp. Atk: 77",
        spdefc : "Sp. Def: 129",
        spdc : "Spd: 118",
        move1c : "-Waterfall",
        move2c : "-Iron Tail",
        move3c : "-Hyper Beam",
        move4c : "",

        named : "Charizard",
        leveld : "LV: 54",
        typed : "Type: Fire/Flying",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 188",
        atkd : "Atk: 111",
        defd : "Def: 94",
        spatkd : "Sp. Atk: 138",
        spdefd : "Sp. Def: 113",
        spdd : "Spd: 141",
        move1d : "-Air Slash",
        move2d : "-Dragon Pulse",
        move3d : "-Hyper Beam",
        move4d : "",

        namee : "Dragonite",
        levele : "LV: 55",
        typee : "Type: Dragon/Flying",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 205",
        atke : "Atk: 168",
        defe : "Def: 126",
        spatke : "Sp. Atk: 117",
        spdefe : "Sp. Def: 144",
        spde : "Spd: 109",
        move1e : "-Fire Punch",
        move2e : "-Outrage",
        move3e : "-Hyper Beam",
        move4e : "",
    },

    {
        namea : "Mega Pidgeot",
        levela : "LV: 56",
        typea : "Type: Normal/Flying",
        abilitya: "",
        itema : "Item: Pidgeotite",
        hpa : "HP: 199",
        atka : "Atk: 99",
        defa : "Def: 105",
        spatka : "Sp. Atk: 100",
        spdefa : "Sp. Def: 100",
        spda : "Spd: 147",
        move1a : "-Quick Attack",
        move2a : "-Air Slash",
        move3a : "-Heat Wave",
        move4a : "",

        nameb : "Vileplume",
        levelb : "LV: 56",
        typeb : "Type: Grass/Poison",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 190",
        atkb : "Atk: 99",
        defb : "Def: 117",
        spatkb : "Sp. Atk: 145",
        spdefb : "Sp. Def: 134",
        spdb : "Spd: 77",
        move1b : "-Solar Beam",
        move2b : "-Reflect",
        move3b : "-Sludge Bomb",
        move4b : "",

        namec : "Marowak",
        levelc : "LV: 56",
        typec : "Type: Ground",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 174",
        atkc : "Atk: 111",
        defc : "Def: 145",
        spatkc : "Sp. Atk: 77",
        spdefc : "Sp. Def: 122",
        spdc : "Spd: 64",
        move1c : "-Fire Punch",
        move2c : "-Bonemerang",
        move3c : "-Brick Break",
        move4c : "",

        named : "Rapidash",
        leveld : "LV: 56",
        typed : "Type: Fire",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 179",
        atkd : "Atk: 133",
        defd : "Def: 100",
        spatkd : "Sp. Atk: 99",
        spdefd : "Sp. Def: 111",
        spdd : "Spd: 152",
        move1d : "-Flare Blitz",
        move2d : "-Quick Attack",
        move3d : "-Poison Jab",
        move4d : "",

        namee : "Slowbro",
        levele : "LV: 56",
        typee : "Type: Water/Psychic",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 213",
        atke : "Atk: 105",
        defe : "Def: 159",
        spatke : "Sp. Atk: 133",
        spdefe : "Sp. Def: 111",
        spde : "Spd: 49",
        move1e : "-Psychic",
        move2e : "-Surf",
        move3e : "-Light Screen",
        move4e : "",

        namef : "Jolteon",
        levelf : "LV: 57",
        typef : "Type: Electric",
        abilityf: "",
        itemf : "Item: None",
        hpf : "HP: 182",
        atkf : "Atk: 96",
        deff : "Def: 81",
        spatkf : "Sp. Atk: 147",
        spdeff : "Sp. Def: 130",
        spdf : "Spd: 187",
        move1f : "-Thunder",
        move2f : "-Quick Attack",
        move3f : "-Pin Missile",
        move4f : "",
    },

    {
        namea : "Mega Pidgeot",
        levela : "LV: 56",
        typea : "Type: Normal/Flying",
        abilitya: "",
        itema : "Item: Pidgeotite",
        hpa : "HP: 199",
        atka : "Atk: 99",
        defa : "Def: 105",
        spatka : "Sp. Atk: 100",
        spdefa : "Sp. Def: 100",
        spda : "Spd: 147",
        move1a : "-Quick Attack",
        move2a : "-Air Slash",
        move3a : "-Heat Wave",
        move4a : "",

        nameb : "Vileplume",
        levelb : "LV: 56",
        typeb : "Type: Grass/Poison",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 190",
        atkb : "Atk: 99",
        defb : "Def: 117",
        spatkb : "Sp. Atk: 145",
        spdefb : "Sp. Def: 134",
        spdb : "Spd: 77",
        move1b : "-Solar Beam",
        move2b : "-Reflect",
        move3b : "-Sludge Bomb",
        move4b : "",

        namec : "Marowak",
        levelc : "LV: 56",
        typec : "Type: Ground",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 174",
        atkc : "Atk: 111",
        defc : "Def: 145",
        spatkc : "Sp. Atk: 77",
        spdefc : "Sp. Def: 122",
        spdc : "Spd: 64",
        move1c : "-Fire Punch",
        move2c : "-Bonemerang",
        move3c : "-Brick Break",
        move4c : "",

        named : "Rapidash",
        leveld : "LV: 56",
        typed : "Type: Fire",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 179",
        atkd : "Atk: 133",
        defd : "Def: 100",
        spatkd : "Sp. Atk: 99",
        spdefd : "Sp. Def: 111",
        spdd : "Spd: 152",
        move1d : "-Flare Blitz",
        move2d : "-Quick Attack",
        move3d : "-Poison Jab",
        move4d : "",

        namee : "Slowbro",
        levele : "LV: 56",
        typee : "Type: Water/Psychic",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 213",
        atke : "Atk: 105",
        defe : "Def: 159",
        spatke : "Sp. Atk: 133",
        spdefe : "Sp. Def: 111",
        spde : "Spd: 49",
        move1e : "-Psychic",
        move2e : "-Surf",
        move3e : "-Light Screen",
        move4e : "",

        namef : "Raichu",
        levelf : "LV: 57",
        typef : "Type: Electric",
        abilityf: "",
        itemf : "Item: None",
        hpf : "HP: 176",
        atkf : "Atk: 124",
        deff : "Def: 75",
        spatkf : "Sp. Atk: 124",
        spdeff : "Sp. Def: 113",
        spdf : "Spd: 161",
        move1f : "-Thunder",
        move2f : "-Quick Attack",
        move3f : "-Iron Tail",
        move4f : "",
    },

]

function displayLGPETrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showLGPEImages(newTrainerId);
        showPokemonLGPEImages(newTrainerId);
    }


    let lgpeTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = lgpe_trainers [lgpeTrainer].namea;
    document.querySelector('#level1').textContent = lgpe_trainers [lgpeTrainer].levela;
    document.querySelector('#type1').textContent = lgpe_trainers [lgpeTrainer].typea;
    document.querySelector('#ability1').textContent= lgpe_trainers [lgpeTrainer].abilitya;
    document.querySelector('#item1').textContent = lgpe_trainers [lgpeTrainer].itema;
    document.querySelector('#hp1').textContent = lgpe_trainers [lgpeTrainer].hpa;
    document.querySelector('#atk1').textContent = lgpe_trainers [lgpeTrainer].atka;
    document.querySelector('#def1').textContent = lgpe_trainers [lgpeTrainer].defa;
    document.querySelector('#spatk1').textContent = lgpe_trainers [lgpeTrainer].spatka;
    document.querySelector('#spdef1').textContent = lgpe_trainers [lgpeTrainer].spdefa;
    document.querySelector('#spd1').textContent = lgpe_trainers [lgpeTrainer].spda;
    document.querySelector('#move1_1').textContent = lgpe_trainers [lgpeTrainer].move1a;
    document.querySelector('#move2_1').textContent = lgpe_trainers [lgpeTrainer].move2a;
    document.querySelector('#move3_1').textContent = lgpe_trainers [lgpeTrainer].move3a;
    document.querySelector('#move4_1').textContent = lgpe_trainers [lgpeTrainer].move4a;

    
    document.querySelector('#name2').textContent = lgpe_trainers [lgpeTrainer].nameb;
    document.querySelector('#level2').textContent = lgpe_trainers [lgpeTrainer].levelb;
    document.querySelector('#type2').textContent = lgpe_trainers [lgpeTrainer].typeb;
    document.querySelector('#ability2').textContent= lgpe_trainers [lgpeTrainer].abilityb;
    document.querySelector('#item2').textContent = lgpe_trainers [lgpeTrainer].itemb;
    document.querySelector('#hp2').textContent = lgpe_trainers [lgpeTrainer].hpb;
    document.querySelector('#atk2').textContent = lgpe_trainers [lgpeTrainer].atkb;
    document.querySelector('#def2').textContent = lgpe_trainers [lgpeTrainer].defb;
    document.querySelector('#spatk2').textContent = lgpe_trainers [lgpeTrainer].spatkb;
    document.querySelector('#spdef2').textContent = lgpe_trainers [lgpeTrainer].spdefb;
    document.querySelector('#spd2').textContent = lgpe_trainers [lgpeTrainer].spdb;
    document.querySelector('#move1_2').textContent = lgpe_trainers [lgpeTrainer].move1b;
    document.querySelector('#move2_2').textContent = lgpe_trainers [lgpeTrainer].move2b;
    document.querySelector('#move3_2').textContent = lgpe_trainers [lgpeTrainer].move3b;
    document.querySelector('#move4_2').textContent = lgpe_trainers [lgpeTrainer].move4b;

    document.querySelector('#name3').textContent = lgpe_trainers [lgpeTrainer].namec;
    document.querySelector('#level3').textContent = lgpe_trainers [lgpeTrainer].levelc;
    document.querySelector('#type3').textContent = lgpe_trainers [lgpeTrainer].typec;
    document.querySelector('#ability3').textContent= lgpe_trainers [lgpeTrainer].abilityc;
    document.querySelector('#item3').textContent = lgpe_trainers [lgpeTrainer].itemc;
    document.querySelector('#hp3').textContent = lgpe_trainers [lgpeTrainer].hpc;
    document.querySelector('#atk3').textContent = lgpe_trainers [lgpeTrainer].atkc;
    document.querySelector('#def3').textContent = lgpe_trainers [lgpeTrainer].defc;
    document.querySelector('#spatk3').textContent = lgpe_trainers [lgpeTrainer].spatkc;
    document.querySelector('#spdef3').textContent = lgpe_trainers [lgpeTrainer].spdefc;
    document.querySelector('#spd3').textContent = lgpe_trainers [lgpeTrainer].spdc;
    document.querySelector('#move1_3').textContent = lgpe_trainers [lgpeTrainer].move1c;
    document.querySelector('#move2_3').textContent = lgpe_trainers [lgpeTrainer].move2c;
    document.querySelector('#move3_3').textContent = lgpe_trainers [lgpeTrainer].move3c;
    document.querySelector('#move4_3').textContent = lgpe_trainers [lgpeTrainer].move4c;

    document.querySelector('#name4').textContent = lgpe_trainers [lgpeTrainer].named;
    document.querySelector('#level4').textContent = lgpe_trainers [lgpeTrainer].leveld;
    document.querySelector('#type4').textContent = lgpe_trainers [lgpeTrainer].typed;
    document.querySelector('#ability4').textContent= lgpe_trainers [lgpeTrainer].abilityd;
    document.querySelector('#item4').textContent = lgpe_trainers [lgpeTrainer].itemd;
    document.querySelector('#hp4').textContent = lgpe_trainers [lgpeTrainer].hpd;
    document.querySelector('#atk4').textContent = lgpe_trainers [lgpeTrainer].atkd;
    document.querySelector('#def4').textContent = lgpe_trainers [lgpeTrainer].defd;
    document.querySelector('#spatk4').textContent = lgpe_trainers [lgpeTrainer].spatkd;
    document.querySelector('#spdef4').textContent = lgpe_trainers [lgpeTrainer].spdefd;
    document.querySelector('#spd4').textContent = lgpe_trainers [lgpeTrainer].spdd;
    document.querySelector('#move1_4').textContent = lgpe_trainers [lgpeTrainer].move1d;
    document.querySelector('#move2_4').textContent = lgpe_trainers [lgpeTrainer].move2d;
    document.querySelector('#move3_4').textContent = lgpe_trainers [lgpeTrainer].move3d;
    document.querySelector('#move4_4').textContent = lgpe_trainers [lgpeTrainer].move4d;

    document.querySelector('#name5').textContent = lgpe_trainers [lgpeTrainer].namee;
    document.querySelector('#level5').textContent = lgpe_trainers [lgpeTrainer].levele;
    document.querySelector('#type5').textContent = lgpe_trainers [lgpeTrainer].typee;
    document.querySelector('#ability5').textContent= lgpe_trainers [lgpeTrainer].abilitye;
    document.querySelector('#item5').textContent = lgpe_trainers [lgpeTrainer].iteme;
    document.querySelector('#hp5').textContent = lgpe_trainers [lgpeTrainer].hpe;
    document.querySelector('#atk5').textContent = lgpe_trainers [lgpeTrainer].atke;
    document.querySelector('#def5').textContent = lgpe_trainers [lgpeTrainer].defe;
    document.querySelector('#spatk5').textContent = lgpe_trainers [lgpeTrainer].spatke;
    document.querySelector('#spdef5').textContent = lgpe_trainers [lgpeTrainer].spdefe;
    document.querySelector('#spd5').textContent = lgpe_trainers [lgpeTrainer].spde;
    document.querySelector('#move1_5').textContent = lgpe_trainers [lgpeTrainer].move1e;
    document.querySelector('#move2_5').textContent = lgpe_trainers [lgpeTrainer].move2e;
    document.querySelector('#move3_5').textContent = lgpe_trainers [lgpeTrainer].move3e;
    document.querySelector('#move4_5').textContent = lgpe_trainers [lgpeTrainer].move4e;

    document.querySelector('#name6').textContent = lgpe_trainers [lgpeTrainer].namef;
    document.querySelector('#level6').textContent = lgpe_trainers [lgpeTrainer].levelf;
    document.querySelector('#type6').textContent = lgpe_trainers [lgpeTrainer].typef;
    document.querySelector('#ability6').textContent= lgpe_trainers [lgpeTrainer].abilityf;
    document.querySelector('#item6').textContent = lgpe_trainers [lgpeTrainer].itemf;
    document.querySelector('#hp6').textContent = lgpe_trainers [lgpeTrainer].hpf;
    document.querySelector('#atk6').textContent = lgpe_trainers [lgpeTrainer].atkf;
    document.querySelector('#def6').textContent = lgpe_trainers [lgpeTrainer].deff;
    document.querySelector('#spatk6').textContent = lgpe_trainers [lgpeTrainer].spatkf;
    document.querySelector('#spdef6').textContent = lgpe_trainers [lgpeTrainer].spdeff;
    document.querySelector('#spd6').textContent = lgpe_trainers [lgpeTrainer].spdf;
    document.querySelector('#move1_6').textContent = lgpe_trainers [lgpeTrainer].move1f;
    document.querySelector('#move2_6').textContent = lgpe_trainers [lgpeTrainer].move2f;
    document.querySelector('#move3_6').textContent = lgpe_trainers [lgpeTrainer].move3f;
    document.querySelector('#move4_6').textContent = lgpe_trainers [lgpeTrainer].move4f;
}

function showLGPEImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/lgpe/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonLGPEImages(trainerId) {
    var pokemon1Picture = document.querySelector("#pokemon_1_image");
    var pokemon2Picture = document.querySelector("#pokemon_2_image");
    var pokemon3Picture = document.querySelector("#pokemon_3_image");
    var pokemon4Picture = document.querySelector("#pokemon_4_image");
    var pokemon5Picture = document.querySelector("#pokemon_5_image");
    var pokemon6Picture = document.querySelector("#pokemon_6_image");
    var imgPokemon1 = document.createElement("img");
    var imgPokemon2 = document.createElement("img");
    var imgPokemon3 = document.createElement("img");
    var imgPokemon4 = document.createElement("img");
    var imgPokemon5 = document.createElement("img");
    var imgPokemon6 = document.createElement("img");
    
    pokemon1Picture.innerHTML = "";
    pokemon2Picture.innerHTML = "";
    pokemon3Picture.innerHTML = "";
    pokemon4Picture.innerHTML = "";
    pokemon5Picture.innerHTML = "";
    pokemon6Picture.innerHTML = "";

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/lgpe/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/lgpe/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/lgpe/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/lgpe/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/lgpe/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/lgpe/" + trainerId + "_6.png";
    imgPokemon1.setAttribute("alt", `Image of Pokemon 1`)
    imgPokemon2.setAttribute("alt", `Image of Pokemon 2`)
    imgPokemon3.setAttribute("alt", `Image of Pokemon 3`)
    imgPokemon4.setAttribute("alt", `Image of Pokemon 4`)
    imgPokemon5.setAttribute("alt", `Image of Pokemon 5`)
    imgPokemon6.setAttribute("alt", `Image of Pokemon 6`)

    imgPokemon1.onerror = function() {
        imgPokemon1.src = "images/trainer_data_images/pokemon/blank.png"; 
    };

    imgPokemon2.onerror = function() {
        imgPokemon2.src = "images/trainer_data_images/pokemon/blank.png";
    };

    imgPokemon3.onerror = function() {
        imgPokemon3.src = "images/trainer_data_images/pokemon/blank.png";
    };

    imgPokemon4.onerror = function() {
        imgPokemon4.src = "images/trainer_data_images/pokemon/blank.png";
    };

    imgPokemon5.onerror = function() {
        imgPokemon5.src = "images/trainer_data_images/pokemon/blank.png";
    };

    imgPokemon6.onerror = function() {
        imgPokemon6.src = "images/trainer_data_images/pokemon/blank.png";
    };

    pokemon1Picture.appendChild(imgPokemon1);
    pokemon2Picture.appendChild(imgPokemon2);
    pokemon3Picture.appendChild(imgPokemon3);
    pokemon4Picture.appendChild(imgPokemon4);
    pokemon5Picture.appendChild(imgPokemon5);
    pokemon6Picture.appendChild(imgPokemon6);

    clearDivs()

    refCredit.textContent = "eddaket"
    refCredit.href = "https://docs.google.com/spreadsheets/d/1zlvzKZAF6m7V3xSsf1md4HGge9CzlnJypIacnQ4fKqs/edit#gid=1454927861"
}

brockLGPE.addEventListener('click', displayLGPETrainers);
mistyLGPE.addEventListener('click', displayLGPETrainers);
ltsurgeLGPE.addEventListener('click', displayLGPETrainers);
erikaLGPE.addEventListener('click', displayLGPETrainers);
kogaLGPE.addEventListener('click', displayLGPETrainers);
sabrinaLGPE.addEventListener('click', displayLGPETrainers);
blaineLGPE.addEventListener('click', displayLGPETrainers);
giovanniLGPE.addEventListener('click', displayLGPETrainers);
loreleiLGPE.addEventListener('click', displayLGPETrainers);
brunoLGPE.addEventListener('click', displayLGPETrainers);
agathaLGPE.addEventListener('click', displayLGPETrainers);
lanceLGPE.addEventListener('click', displayLGPETrainers);
tracePikachu.addEventListener('click', displayLGPETrainers);
traceEevee.addEventListener('click', displayLGPETrainers);
