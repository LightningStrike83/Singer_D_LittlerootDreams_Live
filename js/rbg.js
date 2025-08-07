let brockRBG = document.querySelector ("#brock1");
let mistyRBG = document.querySelector ("#misty1");
let ltsurgeRBG = document.querySelector ("#ltsurge1");
let erikaRBG = document.querySelector ("#erika1");
let kogaRBG = document.querySelector ("#koga1");
let sabrinaRBG = document.querySelector ("#sabrina1");
let blaineRBG = document.querySelector ("#blaine1");
let giovanniRBG = document.querySelector ("#giovanni1");
let loreleiRBG = document.querySelector ("#lorelei1");
let brunoRBG = document.querySelector ("#bruno1");
let agathaRBG = document.querySelector ("#agatha1");
let lanceRBG = document.querySelector ("#lance1");
let bluegRBG = document.querySelector ("#blue1_g");
let bluefRBG = document.querySelector ("#blue1_f");
let bluewRBG = document.querySelector ("#blue1_w");

let rbg_trainers = [
    {
        namea : "Geodude",
        levela : "LV: 12",
        typea : "Type: Rock/Ground",
        itema : "Item: None",
        hpa : "HP: 33",
        atka : "Atk: 26",
        defa : "Def: 30",
        spa : "Special: 14",
        spda : "Speed: 11",
        move1a : "-Tackle",
        move2a : "-Defense Curl",

        nameb : "Onix",
        levelb : "LV: 14",
        typeb : "Type: Rock/Ground",
        itemb : "Item: None",
        hpb : "HP: 36",
        atkb : "Atk: 20",
        defb : "Def: 52",
        spb : "Special: 15",
        spdb : "Spd: 26",
        move1b : "-Tackle",
        move2b : "-Screech",
        move3b : "-Bind",
    },

    {
        namea : "Staryu",
        levela : "LV: 18",
        typea : "Type: Water",
        itema : "Item: None",
        hpa : "HP: 41",
        atka : "Atk: 24",
        defa : "Def: 27",
        spa : "Special: 33",
        spda : "Speed: 38",
        move1a : "-Tackle",
        move2a : "-Water Gun",
        move3a : "",
        move4a : "",

        nameb : "Starmie",
        levelb : "LV: 21",
        typeb : "Type: Water/Psychic",
        itemb : "Item: None",
        hpb : "HP: 59",
        atkb : "Atk: 40",
        defb : "Def: 44",
        spb : "Special: 50",
        spdb : "Speed: 56",
        move1b : "-Tackle",
        move2b : "-Water Gun",
        move3b : "-BubbleBeam",
        move4b : "",
    },

    {
        namea : "Voltorb",
        levela : "LV: 21",
        typea : "Type: Electric",
        itema : "Item: None",
        hpa : "HP: 50",
        atka : "Atk: 21",
        defa : "Def: 29",
        spa : "Special: 50",
        spda : "Speed: 31",
        move1a : "-Tackle",
        move2a : "-Screech",
        move3a : "-Sonic Boom",
        move4a : "",

        nameb : "Pikachu",
        levelb : "LV: 18",
        typeb : "Type: Electric",
        itemb : "Item: None",
        hpb : "HP: 43",
        atkb : "Atk: 28",
        defb : "Def: 18",
        spb : "Special: 25",
        spdb : "Speed: 40",
        move1b : "-Thunder Shock",
        move2b : "-Growl",
        move3b : "-Thunder Wave",
        move4b : "-Quick Attack",

        namec : "Raichu",
        levelc : "LV: 24",
        typec : "Type: Electric",
        itemc : "Item: None",
        hpc : "HP: 66",
        atkc : "Atk: 52",
        defc : "Def: 35",
        spc : "Special: 52",
        spdc : "Speed: 56",
        move1c : "-Thunder Shock",
        move2c : "-Growl",
        move3c : "-Thunderbolt",
        move4c : "",
    },

    {
        namea : "Victreebel",
        levela : "LV: 29",
        typea : "Type: Grass/Poison",
        itema : "Item: None",
        hpa : "HP: 90",
        atka : "Atk: 71",
        defa : "Def: 47",
        spa : "Special: 67",
        spda : "Speed: 50",
        move1a : "-Razor Leaf",
        move2a : "-Wrap",
        move3a : "-PoisonPowder",
        move4a : "-Sleep Powder",

        nameb : "Tangela",
        levelb : "LV: 24",
        typeb : "Type: Grass",
        itemb : "Item: None",
        hpb : "HP: 69",
        atkb : "Atk: 35",
        defb : "Def: 64",
        spb : "Special: 56",
        spdb : "Speed: 37",
        move1b : "-Constrict",
        move2b : "-Bind",
        move3b : "",
        move4b : "",

        namec : "Vileplume",
        levelc : "LV: 29",
        typec : "Type: Grass/Poison",
        itemc : "Item: None",
        hpc : "HP: 87",
        atkc : "Atk: 56",
        defc : "Def: 58",
        spc : "Special: 67",
        spdc : "Speed: 38",
        move1c : "-Petal Dance",
        move2c : "-PoisonPowder",
        move3c : "-Mega Drain",
        move4c : "-Sleep Powder",
    },

    {
        namea : "Koffing",
        levela : "LV: 37",
        typea : "Type: Poison",
        itema : "Item: None",
        hpa : "HP: 82",
        atka : "Atk: 59",
        defa : "Def: 81",
        spa : "Special: 55",
        spda : "Speed: 36",
        move1a : "-Tackle",
        move2a : "-Smog",
        move3a : "-Sludge",
        move4a : "-Smokescreen",

        nameb : "Muk",
        levelb : "LV: 39",
        typeb : "Type: Poison",
        itemb : "Item: None",
        hpb : "HP: 137",
        atkb : "Atk: 93",
        defb : "Def: 69",
        spb : "Special: 61",
        spdb : "Speed: 50",
        move1b : "-Disable",
        move2b : "-Poison Gas",
        move3b : "-Minimize",
        move4b : "-Sludge",

        namec : "Koffing",
        levelc : "LV: 37",
        typec : "Type: Poison",
        itemc : "Item: None",
        hpc : "HP: 82",
        atkc : "Atk: 59",
        defc : "Def: 81",
        spc : "Special: 55",
        spdc : "Speed: 36",
        move1c : "-Tackle",
        move2c : "-Smog",
        move3c : "-Sludge",
        move4c : "-Smokescreen",

        named : "Weezing",
        leveld : "LV: 43",
        typed : "Type: Poison",
        itemd : "Item: None",
        hpd : "HP: 115",
        atkd : "Atk: 90",
        defd : "Def: 115",
        spd : "Special: 84",
        spdd : "Speed: 63",
        move1d : "-Smog",
        move2d : "-Sludge",
        move3d : "-Toxic",
        move4d : "-Self-Destruct",
    },

    {
        namea : "Kadabra",
        levela : "LV: 38",
        typea : "Type: Psychic",
        itema : "Item: None",
        hpa : "HP: 84",
        atka : "Atk: 38",
        defa : "Def: 33",
        spa : "Special: 102",
        spda : "Speed: 90",
        move1a : "-Disable",
        move2a : "-Psybeam",
        move3a : "-Recover",
        move4a : "-Psychic",

        nameb : "Mr. Mime",
        levelb : "LV: 37",
        typeb : "Type: Psychic",
        itemb : "Item: None",
        hpb : "HP: 82",
        atkb : "Atk: 44",
        defb : "Def: 59",
        spb : "Special: 84",
        spdb : "Speed: 77",
        move1b : "-Confusion",
        move2b : "-Barrier",
        move3b : "-Light Screen",
        move4b : "-DoubleSlap",

        namec : "Venomoth",
        levelc : "LV: 38",
        typec : "Type: Bug/Poison",
        itemc : "Item: None",
        hpc : "HP: 107",
        atkc : "Atk: 61",
        defc : "Def: 56",
        spc : "Special: 79",
        spdc : "Speed: 79",
        move1c : "-PoisonPowder",
        move2c : "-Leech Life",
        move3c : "-Stun Spore",
        move4c : "-Psybeam",

        named : "Alakazam",
        leveld : "LV: 43",
        typed : "Type: Psychic",
        itemd : "Item: None",
        hpd : "HP: 107",
        atkd : "Atk: 55",
        defd : "Def: 50",
        spd : "Special: 127",
        spdd : "Speed: 115",
        move1d : "-Psybeam",
        move2d : "-Recover",
        move3d : "-Psywave",
        move4d : "-Reflect",
    },

    {
        namea : "Growlithe",
        levela : "LV: 42",
        typea : "Type: Fire",
        itema : "Item: None",
        hpa : "HP: 104",
        atka : "Atk: 71",
        defa : "Def: 49",
        spa : "Special: 53",
        spda : "Speed: 62",
        move1a : "-Ember",
        move2a : "-Leer",
        move3a : "-Take Down",
        move4a : "-Agility",

        nameb : "Ponyta",
        levelb : "LV: 40",
        typeb : "Type: Fire",
        itemb : "Item: None",
        hpb : "HP: 96",
        atkb : "Atk: 80",
        defb : "Def: 55",
        spb : "Special: 63",
        spdb : "Speed: 83",
        move1b : "-Tail Whip",
        move2b : "-Stomp",
        move3b : "-Growl",
        move4b : "-Fire Spin",
        
        namec : "Rapidash",
        levelc : "LV: 42",
        typec : "Type: Fire",
        itemc : "Item: None",
        hpc : "HP: 113",
        atkc : "Atk: 96",
        defc : "Def: 70",
        spc : "Special: 78",
        spdc : "Speed: 99",
        move1c : "-Tail Whip",
        move2c : "-Stomp",
        move3c : "-Growl",
        move4c : "-Fire Spin",

        named : "Arcanine",
        leveld : "LV: 47",
        typed : "Type: Fire",
        itemd : "Item: None",
        hpd : "HP: 149",
        atkd : "Atk: 116",
        defd : "Def: 87",
        spd : "Special: 87",
        spdd : "Speed: 101",
        move1d : "-Roar",
        move2d : "-Ember",
        move3d : "-Fire Blast",
        move4d : "-Take Down",
    },

    {
        namea : "Rhyhorn",
        levela : "LV: 45",
        typea : "Type: Ground/Rock",
        itema : "Item: None",
        hpa : "HP: 134",
        atka : "Atk: 89",
        defa : "Def: 97",
        spa : "Special: 39",
        spda : "Speed: 34",
        move1a : "-Stomp",
        move2a : "-Tail Whip",
        move3a : "-Fury Attack",
        move4a : "-Horn Drill",

        nameb : "Dugtrio",
        levelb : "LV: 42",
        typeb : "Type: Ground",
        itemb : "Item: None",
        hpb : "HP: 88",
        atkb : "Atk: 79",
        defb : "Def: 53",
        spb : "Special: 70",
        spdb : "Speed: 112",
        move1b : "-Growl",
        move2b : "-Dig",
        move3b : "-Sand Attack",
        move4b : "-Slash",

        namec : "Nidoqueen",
        levelc : "LV: 44",
        typec : "Type: Poison/Ground",
        itemc : "Item: None",
        hpc : "HP: 140",
        atkc : "Atk: 85",
        defc : "Def: 88",
        spc : "Special: 78",
        spdc : "Speed: 78",
        move1c : "-Scratch",
        move2c : "-Tail Whip",
        move3c : "-Body Slam",
        move4c : "-Poison Sting",

        named : "Nidoking",
        leveld : "LV: 45",
        typed : "Type: Poison/Ground",
        itemd : "Item: None",
        hpd : "HP: 135",
        atkd : "Atk: 95",
        defd : "Def: 81",
        spd : "Special: 79",
        spdd : "Speed: 88",
        move1d : "-Tackle",
        move2d : "-Horn Attack",
        move3d : "-Poison Sting",
        move4d : "-Thrash",

        namee : "Rhydon",
        levele : "LV: 50",
        typee : "Type: Ground/Rock",
        iteme : "Item: None",
        hpe : "HP: 173",
        atke : "Atk: 144",
        defe : "Def: 133",
        spe : "Special: 58",
        spde : "Speed: 53",
        move1e : "-Stomp",
        move2e : "-Tail Whip",
        move3e : "-Fissure",
        move4e : "-Horn Drill",
    },

    {
        namea : "Dewgong",
        levela : "LV: 54",
        typea : "Type: Water/Ice",
        itema : "Item: None",
        hpa : "HP: 169",
        atka : "Atk: 90",
        defa : "Def: 100",
        spa : "Special: 116",
        spda : "Speed: 89",
        move1a : "-Growl",
        move2a : "-Aurora Beam",
        move3a : "-Rest",
        move4a : "-Take Down",

        nameb : "Cloyster",
        levelb : "LV: 53",
        typeb : "Type: Water/Ice",
        itemb : "Item: None",
        hpb : "HP: 124",
        atkb : "Atk: 115",
        defb : "Def: 204",
        spb : "Special: 103",
        spdb : "Speed: 87",
        move1b : "-Supersonic",
        move2b : "-Clamp",
        move3b : "-Aurora Beam",
        move4b : "-Spike Cannon",

        namec : "Slowbro",
        levelc : "LV: 54",
        typec : "Type: Water/Psychic",
        itemc : "Item: None",
        hpc : "HP: 175",
        atkc : "Atk: 95",
        defc : "Def: 132",
        spc : "Special: 100",
        spdc : "Speed: 46",
        move1c : "-Growl",
        move2c : "-Water Gun",
        move3c : "-Withdraw",
        move4c : "-Amnesia",

        named : "Jynx",
        leveld : "LV: 56",
        typed : "Type: Ice/Psychic",
        itemd : "Item: None",
        hpd : "HP: 147",
        atkd : "Atk: 71",
        defd : "Def: 53",
        spd : "Special: 120",
        spdd : "Speed: 120",
        move1d : "-DoubleSlap",
        move2d : "-Ice Punch",
        move3d : "-Body Slam",
        move4d : "-Thrash",

        namee : "Lapras",
        levele : "LV: 56",
        typee : "Type: Water/Ice",
        iteme : "Item: None",
        hpe : "HP: 220",
        atke : "Atk: 110",
        defe : "Def: 103",
        spe : "Special: 120",
        spde : "Speed: 81",
        move1e : "-Body Slam",
        move2e : "-Confuse Ray",
        move3e : "-Blizzard",
        move4e : "-Hydro Pump",
    },

    {
        namea : "Onix",
        levela : "LV: 53",
        typea : "Type: Rock/Ground",
        itema : "Item: None",
        hpa : "HP: 108",
        atka : "Atk: 62",
        defa : "Def: 183",
        spa : "Special: 45",
        spda : "Speed: 87",
        move1a : "-Rock Throw",
        move2a : "-Rage",
        move3a : "-Slam",
        move4a : "-Harden",

        nameb : "Hitmonchan",
        levelb : "LV: 55",
        typeb : "Type: Fighting",
        itemb : "Item: None",
        hpb : "HP: 128",
        atkb : "Atk: 130",
        defb : "Def: 100",
        spb : "Special: 52",
        spdb : "Speed: 97",
        move1b : "-Ice Punch",
        move2b : "-Thunder Punch",
        move3b : "-Mega Punch",
        move4b : "-Counter",

        namec : "Hitmonlee",
        levelc : "LV: 55",
        typec : "Type: Fighting",
        itemc : "Item: None",
        hpc : "HP: 128",
        atkc : "Atk: 146",
        defc : "Def: 72",
        spc : "Special: 52",
        spdc : "Speed: 109",
        move1c : "-Jump Kick",
        move2c : "-Focus Energy",
        move3c : "-High Jump Kick",
        move4c : "-Mega Kick",

        named : "Onix",
        leveld : "LV: 56",
        typed : "Type: Rock/Ground",
        itemd : "Item: None",
        hpd : "HP: 114",
        atkd : "Atk: 65",
        defd : "Def: 193",
        spd : "Special: 47",
        spdd : "Speed: 92",
        move1d : "-Rock Throw",
        move2d : "-Rage",
        move3d : "-Slam",
        move4d : "-Harden",

        namee : "Machamp",
        levele : "LV: 58",
        typee : "Type: Fighting",
        iteme : "Item: None",
        hpe : "HP: 181",
        atke : "Atk: 166",
        defe : "Def: 107",
        spe : "Special: 89",
        spde : "Speed: 78",
        move1e : "-Leer",
        move2e : "-Focus Energy",
        move3e : "-Fissure",
        move4e : "-Submission",
    },

    {
        namea : "Gengar",
        levela : "LV: 56",
        typea : "Type: Ghost/Poison",
        itema : "Item: None",
        hpa : "HP: 142",
        atka : "Atk: 87",
        defa : "Def: 81",
        spa : "Special: 159",
        spda : "Speed: 137",
        move1a : "-Confuse Ray",
        move2a : "-Night Shade",
        move3a : "-Hypnosis",
        move4a : "-Dream Eater",

        nameb : "Golbat",
        levelb : "LV: 56",
        typeb : "Type: Poison/Flying",
        itemb : "Item: None",
        hpb : "HP: 158",
        atkb : "Atk: 104",
        defb : "Def: 92",
        spb : "Special: 97",
        spdb : "Speed: 114",
        move1b : "-Supersonic",
        move2b : "-Confuse Ray",
        move3b : "-Wing Attack",
        move4b : "-Haze",

        namec : "Haunter",
        levelc : "LV: 55",
        typec : "Type: Ghost/Poison",
        itemc : "Item: None",
        hpc : "HP: 123",
        atkc : "Atk: 69",
        defc : "Def: 63",
        spc : "Special: 140",
        spdc : "Speed: 118",
        move1c : "-Confuse Ray",
        move2c : "-Night Shade",
        move3c : "-Hypnosis",
        move4c : "-Dream Eater",

        named : "Arbok",
        leveld : "LV: 58",
        typed : "Type: Poison",
        itemd : "Item: None",
        hpd : "HP: 146",
        atkd : "Atk: 114",
        defd : "Def: 94",
        spd : "Special: 89",
        spdd : "Speed: 107",
        move1d : "-Bite",
        move2d : "-Glare",
        move3d : "-Screech",
        move4d : "-Acid",

        namee : "Gengar",
        levele : "LV: 60",
        typee : "Type: Ghost/Poison",
        iteme : "Item: None",
        hpe : "HP: 151",
        atke : "Atk: 93",
        defe : "Def: 86",
        spe : "Special: 170",
        spde : "Speed: 146",
        move1e : "-Confuse Ray",
        move2e : "-Night Shade",
        move3e : "-Toxic",
        move4e : "-Dream Eater",
    },

    {
        namea : "Gyarados",
        levela : "LV: 58",
        typea : "Type: Water/Flying",
        itema : "Item: None",
        hpa : "HP: 187",
        atka : "Atk: 160",
        defa : "Def: 105",
        spa : "Special: 130",
        spda : "Speed: 108",
        move1a : "-Dragon Rage",
        move2a : "-Leer",
        move3a : "-Hydro Pump",
        move4a : "-Hyper Beam",

        nameb : "Dragonair",
        levelb : "LV: 56",
        typeb : "Type: Dragon",
        itemb : "Item: None",
        hpb : "HP: 143",
        atkb : "Atk: 109",
        defb : "Def: 86",
        spb : "Special: 92",
        spdb : "Speed: 92",
        move1b : "-Agility",
        move2b : "-Slam",
        move3b : "-Dragon Rage",
        move4b : "-Hyper Beam",

        namec : "Dragonair",
        levelc : "LV: 56",
        typec : "Type: Dragon",
        itemc : "Item: None",
        hpc : "HP: 143",
        atkc : "Atk: 109",
        defc : "Def: 86",
        spc : "Special: 92",
        spdc : "Speed: 92",
        move1c : "-Agility",
        move2c : "-Slam",
        move3c : "-Dragon Rage",
        move4c : "-Hyper Beam",

        named : "Aerodactyl",
        leveld : "LV: 60",
        typed : "Type: Rock/Flying",
        itemd : "Item: None",
        hpd : "HP: 175",
        atkd : "Atk: 141",
        defd : "Def: 92",
        spd : "Special: 86",
        spdd : "Speed: 170",
        move1d : "-Supersonic",
        move2d : "-Bite",
        move3d : "-Take Down",
        move4d : "-Hyper Beam",

        namee : "Dragonite",
        levele : "LV: 62",
        typee : "Type: Dragon/Flying",
        iteme : "Item: None",
        hpe : "HP: 194",
        atke : "Atk: 182",
        defe : "Def: 132",
        spe : "Special: 138",
        spde : "Speed: 114",
        move1e : "-Agility",
        move2e : "-Slam",
        move3e : "-Barrier",
        move4e : "-Hyper Beam",
    },

    {
        namea : "Pidgeot",
        levela : "LV: 61",
        typea : "Type: Normal/Flying",
        itema : "Item: None",
        hpa : "HP: 182",
        atka : "Atk: 113",
        defa : "Def: 106",
        spa : "Special: 100",
        spda : "Speed: 125",
        move1a : "-Whirlwind",
        move2a : "-Wing Attack",
        move3a : "-Sky Attack",
        move4a : "-Mirror Move",

        nameb : "Alakazam",
        levelb : "LV: 59",
        typeb : "Type: Psychic",
        itemb : "Item: None",
        hpb : "HP: 143",
        atkb : "Atk: 74",
        defb : "Def: 67",
        spb : "Special: 173",
        spdb : "Speed: 156",
        move1b : "-Psybeam",
        move2b : "-Recover",
        move3b : "-Psychic",
        move4b : "-Reflect",

        namec : "Rhydon",
        levelc : "LV: 61",
        typec : "Type: Ground/Rock",
        itemc : "Item: None",
        hpc : "HP: 208",
        atkc : "Atk: 174",
        defc : "Def: 161",
        spc : "Special: 69",
        spdc : "Speed: 63",
        move1c : "-Tail Whip",
        move2c : "-Fury Attack",
        move3c : "-Horn Drill",
        move4c : "-Leer",

        named : "Gyarados",
        leveld : "LV: 61",
        typed : "Type: Water/Flying",
        itemd : "Item: None",
        hpd : "HP: 196",
        atkd : "Atk: 168",
        defd : "Def: 111",
        spd : "Special: 136",
        spdd : "Speed: 113",
        move1d : "-Dragon Rage",
        move2d : "-Leer",
        move3d : "-Hydro Pump",
        move4d : "-Hyper Beam",

        namee : "Arcanine",
        levele : "LV: 63",
        typee : "Type: Fire",
        iteme : "Item: None",
        hpe : "HP: 196",
        atke : "Atk: 154",
        defe : "Def: 115",
        spe : "Special: 115",
        spde : "Speed: 134",
        move1e : "-Roar",
        move2e : "-Ember",
        move3e : "-Leer",
        move4e : "-Take Down",

        namef : "Venusaur",
        levelf : "LV: 65",
        typef : "Type: Grass/Poison",
        itemf : "Item: None",
        hpf : "HP: 189",
        atkf : "Atk: 123",
        deff : "Def: 123",
        spf : "Special: 145",
        spdf : "Speed: 119",
        move1f : "-Razor Leaf",
        move2f : "-Growth",
        move3f : "-Mega Drain",
        move4f : "-SolarBeam",
    },

    {
        namea : "Pidgeot",
        levela : "LV: 61",
        typea : "Type: Normal/Flying",
        itema : "Item: None",
        hpa : "HP: 182",
        atka : "Atk: 113",
        defa : "Def: 106",
        spa : "Special: 100",
        spda : "Speed: 125",
        move1a : "-Whirlwind",
        move2a : "-Wing Attack",
        move3a : "-Sky Attack",
        move4a : "-Mirror Move",

        nameb : "Alakazam",
        levelb : "LV: 59",
        typeb : "Type: Psychic",
        itemb : "Item: None",
        hpb : "HP: 143",
        atkb : "Atk: 74",
        defb : "Def: 67",
        spb : "Special: 173",
        spdb : "Speed: 156",
        move1b : "-Psybeam",
        move2b : "-Recover",
        move3b : "-Psychic",
        move4b : "-Reflect",

        namec : "Rhydon",
        levelc : "LV: 61",
        typec : "Type: Ground/Rock",
        itemc : "Item: None",
        hpc : "HP: 208",
        atkc : "Atk: 174",
        defc : "Def: 161",
        spc : "Special: 69",
        spdc : "Speed: 63",
        move1c : "-Tail Whip",
        move2c : "-Fury Attack",
        move3c : "-Horn Drill",
        move4c : "-Leer",

        named : "Exeggutor",
        leveld : "LV: 61",
        typed : "Type: Grass/Psychic",
        itemd : "Item: None",
        hpd : "HP: 196",
        atkd : "Atk: 131",
        defd : "Def: 118",
        spd : "Special: 167",
        spdd : "Speed: 81",
        move1d : "-Barrage",
        move2d : "-Hypnosis",
        move3d : "-Stomp",
        move4d : "",

        namee : "Gyarados",
        levele : "LV: 63",
        typee : "Type: Water/Flying",
        iteme : "Item: None",
        hpe : "HP: 202",
        atke : "Atk: 173",
        defe : "Def: 125",
        spe : "Special: 145",
        spde : "Speed: 117",
        move1e : "-Dragon Rage",
        move2e : "-Leer",
        move3e : "-Hydro Pump",
        move4e : "-Hyper Beam",

        namef : "Charizard",
        levelf : "LV: 65",
        typef : "Type: Fire/Flying",
        itemf : "Item: None",
        hpf : "HP: 186",
        atkf : "Atk: 125",
        deff : "Def: 116",
        spf : "Special: 125",
        spdf : "Speed: 145",
        move1f : "-Rage",
        move2f : "-Slash",
        move3f : "-Fire Blast",
        move4f : "-Fire Spin",
    },

    {
        namea : "Pidgeot",
        levela : "LV: 61",
        typea : "Type: Normal/Flying",
        itema : "Item: None",
        hpa : "HP: 182",
        atka : "Atk: 113",
        defa : "Def: 106",
        spa : "Special: 100",
        spda : "Speed: 125",
        move1a : "-Whirlwind",
        move2a : "-Wing Attack",
        move3a : "-Sky Attack",
        move4a : "-Mirror Move",

        nameb : "Alakazam",
        levelb : "LV: 59",
        typeb : "Type: Psychic",
        itemb : "Item: None",
        hpb : "HP: 143",
        atkb : "Atk: 74",
        defb : "Def: 67",
        spb : "Special: 173",
        spdb : "Speed: 156",
        move1b : "-Psybeam",
        move2b : "-Recover",
        move3b : "-Psychic",
        move4b : "-Reflect",

        namec : "Rhydon",
        levelc : "LV: 61",
        typec : "Type: Ground/Rock",
        itemc : "Item: None",
        hpc : "HP: 208",
        atkc : "Atk: 174",
        defc : "Def: 161",
        spc : "Special: 69",
        spdc : "Speed: 63",
        move1c : "-Tail Whip",
        move2c : "-Fury Attack",
        move3c : "-Horn Drill",
        move4c : "-Leer",

        named : "Arcanine",
        leveld : "LV: 61",
        typed : "Type: Fire",
        itemd : "Item: None",
        hpd : "HP: 190",
        atkd : "Atk: 150",
        defd : "Def: 112",
        spd : "Special: 112",
        spdd : "Speed: 130",
        move1d : "-Roar",
        move2d : "-Ember",
        move3d : "-Leer",
        move4d : "-Take Down",

        namee : "Exeggutor",
        levele : "LV: 63",
        typee : "Type: Grass/Psychic",
        iteme : "Item: None",
        hpe : "HP: 202",
        atke : "Atk: 136",
        defe : "Def: 122",
        spe : "Special: 172",
        spde : "Speed: 84",
        move1e : "-Barrage",
        move2e : "-Hypnosis",
        move3e : "-Stomp",
        move4e : "",

        namef : "Blastoise",
        levelf : "LV: 65",
        typef : "Type: Water",
        itemf : "Item: None",
        hpf : "HP: 188",
        atkf : "Atk: 124",
        deff : "Def: 145",
        spf : "Special: 125",
        spdf : "Speed: 116",
        move1f : "-Bite",
        move2f : "-Withdraw",
        move3f : "-Blizzard",
        move4f : "-Hydro Pump",
    },

]

function displayRBGTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        updateSpd1Content();
        updateSpd2Content();
        updateSpd3Content();
        updateSpd4Content();
        updateSpd5Content();
        updateSpd6Content();
        showRBGImages(newTrainerId);
        showPokemonRBGImages(newTrainerId);
    }


    let rgbTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = rbg_trainers [rgbTrainer].namea;
    document.querySelector('#level1').textContent = rbg_trainers [rgbTrainer].levela;
    document.querySelector('#type1').textContent = rbg_trainers [rgbTrainer].typea;
    document.querySelector('#ability1').textContent= rbg_trainers [rgbTrainer].abilitya;
    document.querySelector('#item1').textContent = rbg_trainers [rgbTrainer].itema;
    document.querySelector('#hp1').textContent = rbg_trainers [rgbTrainer].hpa;
    document.querySelector('#atk1').textContent = rbg_trainers [rgbTrainer].atka;
    document.querySelector('#def1').textContent = rbg_trainers [rgbTrainer].defa;
    document.querySelector('#spatk1').textContent = rbg_trainers [rgbTrainer].spa;
    document.querySelector('#spdef1').textContent = rbg_trainers [rgbTrainer].spda;
    document.querySelector('#move1_1').textContent = rbg_trainers [rgbTrainer].move1a;
    document.querySelector('#move2_1').textContent = rbg_trainers [rgbTrainer].move2a;
    document.querySelector('#move3_1').textContent = rbg_trainers [rgbTrainer].move3a;
    document.querySelector('#move4_1').textContent = rbg_trainers [rgbTrainer].move4a;

    
    document.querySelector('#name2').textContent = rbg_trainers [rgbTrainer].nameb;
    document.querySelector('#level2').textContent = rbg_trainers [rgbTrainer].levelb;
    document.querySelector('#type2').textContent = rbg_trainers [rgbTrainer].typeb;
    document.querySelector('#ability2').textContent= rbg_trainers [rgbTrainer].abilityb;
    document.querySelector('#item2').textContent = rbg_trainers [rgbTrainer].itemb;
    document.querySelector('#hp2').textContent = rbg_trainers [rgbTrainer].hpb;
    document.querySelector('#atk2').textContent = rbg_trainers [rgbTrainer].atkb;
    document.querySelector('#def2').textContent = rbg_trainers [rgbTrainer].defb;
    document.querySelector('#spatk2').textContent = rbg_trainers [rgbTrainer].spb;
    document.querySelector('#spdef2').textContent = rbg_trainers [rgbTrainer].spdb;
    document.querySelector('#move1_2').textContent = rbg_trainers [rgbTrainer].move1b;
    document.querySelector('#move2_2').textContent = rbg_trainers [rgbTrainer].move2b;
    document.querySelector('#move3_2').textContent = rbg_trainers [rgbTrainer].move3b;
    document.querySelector('#move4_2').textContent = rbg_trainers [rgbTrainer].move4b;

    document.querySelector('#name3').textContent = rbg_trainers [rgbTrainer].namec;
    document.querySelector('#level3').textContent = rbg_trainers [rgbTrainer].levelc;
    document.querySelector('#type3').textContent = rbg_trainers [rgbTrainer].typec;
    document.querySelector('#ability3').textContent= rbg_trainers [rgbTrainer].abilityc;
    document.querySelector('#item3').textContent = rbg_trainers [rgbTrainer].itemc;
    document.querySelector('#hp3').textContent = rbg_trainers [rgbTrainer].hpc;
    document.querySelector('#atk3').textContent = rbg_trainers [rgbTrainer].atkc;
    document.querySelector('#def3').textContent = rbg_trainers [rgbTrainer].defc;
    document.querySelector('#spatk3').textContent = rbg_trainers [rgbTrainer].spc;
    document.querySelector('#spdef3').textContent = rbg_trainers [rgbTrainer].spdc;
    document.querySelector('#move1_3').textContent = rbg_trainers [rgbTrainer].move1c;
    document.querySelector('#move2_3').textContent = rbg_trainers [rgbTrainer].move2c;
    document.querySelector('#move3_3').textContent = rbg_trainers [rgbTrainer].move3c;
    document.querySelector('#move4_3').textContent = rbg_trainers [rgbTrainer].move4c;

    document.querySelector('#name4').textContent = rbg_trainers [rgbTrainer].named;
    document.querySelector('#level4').textContent = rbg_trainers [rgbTrainer].leveld;
    document.querySelector('#type4').textContent = rbg_trainers [rgbTrainer].typed;
    document.querySelector('#ability4').textContent= rbg_trainers [rgbTrainer].abilityd;
    document.querySelector('#item4').textContent = rbg_trainers [rgbTrainer].itemd;
    document.querySelector('#hp4').textContent = rbg_trainers [rgbTrainer].hpd;
    document.querySelector('#atk4').textContent = rbg_trainers [rgbTrainer].atkd;
    document.querySelector('#def4').textContent = rbg_trainers [rgbTrainer].defd;
    document.querySelector('#spatk4').textContent = rbg_trainers [rgbTrainer].spd;
    document.querySelector('#spdef4').textContent = rbg_trainers [rgbTrainer].spdd;
    document.querySelector('#move1_4').textContent = rbg_trainers [rgbTrainer].move1d;
    document.querySelector('#move2_4').textContent = rbg_trainers [rgbTrainer].move2d;
    document.querySelector('#move3_4').textContent = rbg_trainers [rgbTrainer].move3d;
    document.querySelector('#move4_4').textContent = rbg_trainers [rgbTrainer].move4d;

    document.querySelector('#name5').textContent = rbg_trainers [rgbTrainer].namee;
    document.querySelector('#level5').textContent = rbg_trainers [rgbTrainer].levele;
    document.querySelector('#type5').textContent = rbg_trainers [rgbTrainer].typee;
    document.querySelector('#ability5').textContent= rbg_trainers [rgbTrainer].abilitye;
    document.querySelector('#item5').textContent = rbg_trainers [rgbTrainer].iteme;
    document.querySelector('#hp5').textContent = rbg_trainers [rgbTrainer].hpe;
    document.querySelector('#atk5').textContent = rbg_trainers [rgbTrainer].atke;
    document.querySelector('#def5').textContent = rbg_trainers [rgbTrainer].defe;
    document.querySelector('#spatk5').textContent = rbg_trainers [rgbTrainer].spe;
    document.querySelector('#spdef5').textContent = rbg_trainers [rgbTrainer].spde;
    document.querySelector('#move1_5').textContent = rbg_trainers [rgbTrainer].move1e;
    document.querySelector('#move2_5').textContent = rbg_trainers [rgbTrainer].move2e;
    document.querySelector('#move3_5').textContent = rbg_trainers [rgbTrainer].move3e;
    document.querySelector('#move4_5').textContent = rbg_trainers [rgbTrainer].move4e;

    document.querySelector('#name6').textContent = rbg_trainers [rgbTrainer].namef;
    document.querySelector('#level6').textContent = rbg_trainers [rgbTrainer].levelf;
    document.querySelector('#type6').textContent = rbg_trainers [rgbTrainer].typef;
    document.querySelector('#ability6').textContent= rbg_trainers [rgbTrainer].abilityf;
    document.querySelector('#item6').textContent = rbg_trainers [rgbTrainer].itemf;
    document.querySelector('#hp6').textContent = rbg_trainers [rgbTrainer].hpf;
    document.querySelector('#atk6').textContent = rbg_trainers [rgbTrainer].atkf;
    document.querySelector('#def6').textContent = rbg_trainers [rgbTrainer].deff;
    document.querySelector('#spatk6').textContent = rbg_trainers [rgbTrainer].spf;
    document.querySelector('#spdef6').textContent = rbg_trainers [rgbTrainer].spdf;
    document.querySelector('#move1_6').textContent = rbg_trainers [rgbTrainer].move1f;
    document.querySelector('#move2_6').textContent = rbg_trainers [rgbTrainer].move2f;
    document.querySelector('#move3_6').textContent = rbg_trainers [rgbTrainer].move3f;
    document.querySelector('#move4_6').textContent = rbg_trainers [rgbTrainer].move4f;
}

function updateSpd1Content() {
    document.querySelector('#spd1').textContent = '';
};

function updateSpd2Content() {
    document.querySelector('#spd2').textContent = '';
}

function updateSpd3Content() {
    document.querySelector('#spd3').textContent = '';
}

function updateSpd4Content() {
        document.querySelector('#spd4').textContent = '';
}

function updateSpd5Content() {
        document.querySelector('#spd5').textContent = '';
}

function updateSpd6Content() {
        document.querySelector('#spd6').textContent = '';
}

function showRBGImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/rbg/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonRBGImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/rbg/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/rbg/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/rbg/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/rbg/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/rbg/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/rbg/" + trainerId + "_6.png";
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

    refCredit.textContent = "zerokid"
    refCredit.href = "https://gamefaqs.gamespot.com/gameboy/367023-pokemon-red-version/faqs/64175/introduction"
}

brockRBG.addEventListener('click', displayRBGTrainers);
mistyRBG.addEventListener('click', displayRBGTrainers);
ltsurgeRBG.addEventListener('click', displayRBGTrainers);
erikaRBG.addEventListener('click', displayRBGTrainers);
kogaRBG.addEventListener('click', displayRBGTrainers);
sabrinaRBG.addEventListener('click', displayRBGTrainers);
blaineRBG.addEventListener('click', displayRBGTrainers);
giovanniRBG.addEventListener('click', displayRBGTrainers);
loreleiRBG.addEventListener('click', displayRBGTrainers);
brunoRBG.addEventListener('click', displayRBGTrainers);
agathaRBG.addEventListener('click', displayRBGTrainers);
lanceRBG.addEventListener('click', displayRBGTrainers);
bluegRBG.addEventListener('click', displayRBGTrainers);
bluefRBG.addEventListener('click', displayRBGTrainers);
bluewRBG.addEventListener('click', displayRBGTrainers);