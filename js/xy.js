let violaXY = document.querySelector ("#viola1");
let grantXY = document.querySelector ("#grant1");
let korrinaXY = document.querySelector ("#korrina1");
let ramosXY = document.querySelector ("#ramos1");
let clemontXY = document.querySelector ("#clemont1");
let valerieXY = document.querySelector ("#valerie1");
let lysandreXY = document.querySelector ("#lysandre1");
let olympiaXY = document.querySelector ("#olympia1");
let wulfricXY = document.querySelector ("#wulfric1");
let malvaXY = document.querySelector ("#malva1");
let wikstromXY = document.querySelector ("#wikstrom1");
let drasnaXY = document.querySelector ("#drasna1");
let sieboldXY = document.querySelector ("#siebold1");
let dianthaXY = document.querySelector ("#diantha1");

let xy_trainers = [
    {
        namea : "Surskit",
        levela : "LV: 10",
        typea : "Type: Bug/Water",
        abilitya: "Ability: Swift Swim",
        itema : "Item: None",
        hpa : "HP: 30",
        atka : "Atk: 13",
        defa : "Def: 13",
        spatka : "Sp. Atk: 17",
        spdefa : "Sp. Def: 15",
        spda : "Spd: 22",
        move1a : "-Quick Attack",
        move2a : "-Bubble",
        move3a : "-Water Sport",
        move4a : "",

        nameb : "Vivillon",
        levelb : "LV: 12",
        typeb : "Type: Bug/Flying",
        abilityb: "Ability: Shield Dust",
        itemb : "Item: None",
        hpb : "HP: 43",
        atkb : "Atk: 18",
        defb : "Def: 19",
        spatkb : "Sp. Atk: 29",
        spdefb : "Sp. Def: 20",
        spdb : "Spd: 29",
        move1b : "-Harden",
        move2b : "-Infestation",
        move3b : "-Tackle",
        move4b : "",
    },

    {
        namea : "Amaura",
        levela : "LV: 25",
        typea : "Type: Rock/Ice",
        abilitya: "Ability: Refrigerate",
        itema : "Item: None",
        hpa : "HP: 79",
        atka : "Atk: 40",
        defa : "Def: 35",
        spatka : "Sp. Atk: 39",
        spdefa : "Sp. Def: 46",
        spda : "Spd: 33",
        move1a : "-Aurora Beam",
        move2a : "-Rock Tomb",
        move3a : "-Thunder Wave",
        move4a : "-Take Down",

        nameb : "Tyrunt",
        levelb : "LV: 25",
        typeb : "Type: Rock/Dragon",
        abilityb: "Ability: Strong Jaw",
        itemb : "Item: None",
        hpb : "HP: 69",
        atkb : "Atk: 55",
        defb : "Def: 49",
        spatkb : "Sp. Atk: 33",
        spdefb : "Sp. Def: 33",
        spdb : "Spd: 34",
        move1b : "-Rock Tomb",
        move2b : "-Bite",
        move3b : "-Stomp",
        move4b : "",
    },

    {
        namea : "Mienfoo",
        levela : "LV: 29",
        typea : "Type: Fighting",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 71",
        atka : "Atk: 60",
        defa : "Def: 40",
        spatka : "Sp. Atk: 43",
        spdefa : "Sp. Def: 44",
        spda : "Spd: 44",
        move1a : "-Power-Up Punch",
        move2a : "-Fake Out",
        move3a : "-Double Slap",
        move4a : "",

        nameb : "Machoke",
        levelb : "LV: 28",
        typeb : "Type: Fighting",
        abilityb: "Ability: Guts",
        itemb : "Item: None",
        hpb : "HP: 88",
        atkb : "Atk: 67",
        defb : "Def: 45",
        spatkb : "Sp. Atk: 39",
        spdefb : "Sp. Def: 48",
        spdb : "Spd: 36",
        move1b : "-Power-Up Punch",
        move2b : "-Rock Tomb",
        move3b : "-Leer",
        move4b : "",

        namec : "Hawlucha",
        levelc : "LV: 32",
        typec : "Type: Fighting/Flying",
        abilityc: "Ability: Urburden",
        itemc : "Item: None",
        hpc : "HP: 98",
        atkc : "Atk: 70",
        defc : "Def: 60",
        spatkc : "Sp. Atk: 59",
        spdefc : "Sp. Def: 52",
        spdc : "Spd: 87",
        move1c : "-Flying Press",
        move2c : "-Hone Claws",
        move3c : "-Power-Up Punch",
        move4c : "",
    },

    {
        namea : "Jumpluff",
        levela : "LV: 30",
        typea : "Type: Grass/Flying",
        abilitya: "Ability: Chlorophyll",
        itema : "Item: None",
        hpa : "HP: 91",
        atka : "Atk: 44",
        defa : "Def: 53",
        spatka : "Sp. Atk: 48",
        spdefa : "Sp. Def: 61",
        spda : "Spd: 77",
        move1a : "-Grass Knot",
        move2a : "-Acrobatics",
        move3a : "-Leech Seed",
        move4a : "",

        nameb : "Weepinbell",
        levelb : "LV: 31",
        typeb : "Type: Grass/Poison",
        abilityb: "Ability: Chlorophyll",
        itemb : "Item: None",
        hpb : "HP: 88",
        atkb : "Atk: 67",
        defb : "Def: 37",
        spatkb : "Sp. Atk: 70",
        spdefb : "Sp. Def: 39",
        spdb : "Spd: 45",
        move1b : "-Grass Knot",
        move2b : "-Acid",
        move3b : "-Poison Powder",
        move4b : "-Gastro Acid",

        namec : "Gogoat",
        levelc : "LV: 34",
        typec : "Type: Grass",
        abilityc: "Ability: Sap Sipper",
        itemc : "Item: None",
        hpc : "HP: 135",
        atkc : "Atk: 88",
        defc : "Def: 54",
        spatkc : "Sp. Atk: 78",
        spdefc : "Sp. Def: 67",
        spdc : "Spd: 52",
        move1c : "-Grass Knot",
        move2c : "-Bulldoze",
        move3c : "-Take Down",
        move4c : "",
    },

    {
        namea : "Emolga",
        levela : "LV: 35",
        typea : "Type: Electric/Flying",
        abilitya: "Ability: Static",
        itema : "Item: None",
        hpa : "HP: 91",
        atka : "Atk: 65",
        defa : "Def: 59",
        spatka : "Sp. Atk: 65",
        spdefa : "Sp. Def: 48",
        spda : "Spd: 84",
        move1a : "-Volt Switch",
        move2a : "-Quick Attack",
        move3a : "-Aerial Ace",
        move4a : "",

        nameb : "Magneton",
        levelb : "LV: 35",
        typeb : "Type: Electric/Steel",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 87",
        atkb : "Atk: 54",
        defb : "Def: 86",
        spatkb : "Sp. Atk: 96",
        spdefb : "Sp. Def: 61",
        spdb : "Spd: 54",
        move1b : "-Thunderbolt",
        move2b : "-Electric Terrain",
        move3b : "-Mirror Shot",
        move4b : "",

        namec : "Heliolisk",
        levelc : "LV: 37",
        typec : "Type: Normal/Electric",
        abilityc: "Ability: Dry Skin",
        itemc : "Item: None",
        hpc : "HP: 101",
        atkc : "Atk: 53",
        defc : "Def: 56",
        spatkc : "Sp. Atk: 93",
        spdefc : "Sp. Def: 82",
        spdc : "Spd: 83",
        move1c : "-Thunderbolt",
        move2c : "-Quick Attack",
        move3c : "-Grass Knot",
        move4c : "",
    },

    {
        namea : "Mawile",
        levela : "LV: 38",
        typea : "Type: Steel/Fairy",
        abilitya: "Ability: Hyper Cutter",
        itema : "Item: None",
        hpa : "HP: 94",
        atka : "Atk: 77",
        defa : "Def: 77",
        spatka : "Sp. Atk: 49",
        spdefa : "Sp. Def: 55",
        spda : "Spd: 56",
        move1a : "-Feint Attack",
        move2a : "-Crunch",
        move3a : "-Iron Defense",
        move4a : "",

        nameb : "Mr. Mime",
        levelb : "LV: 39",
        typeb : "Type: Psychic/Fairy",
        abilityb: "Ability: Soundproof",
        itemb : "Item: None",
        hpb : "HP: 88",
        atkb : "Atk: 48",
        defb : "Def: 64",
        spatkb : "Sp. Atk: 91",
        spdefb : "Sp. Def: 107",
        spdb : "Spd: 83",
        move1b : "-Light Screen",
        move2b : "-Reflect",
        move3b : "-Dazzling Gleam",
        move4b : "-Psychic",

        namec : "Sylveon",
        levelc : "LV: 42",
        typec : "Type: Fairy",
        abilityc: "Ability: Cute Charm",
        itemc : "Item: None",
        hpc : "HP: 141",
        atkc : "Atk: 68",
        defc : "Def: 74",
        spatkc : "Sp. Atk: 106",
        spdefc : "Sp. Def: 110",
        spdc : "Spd: 64",
        move1c : "-Dazzling Gleam",
        move2c : "-Quick Attack",
        move3c : "-Swift",
        move4c : "-Charm",
    },

    {
        namea : "Sigilyph",
        levela : "LV: 44",
        typea : "Type: Psychic/Flying",
        abilitya: "Ability: Magic Guard",
        itema : "Item: None",
        hpa : "HP: 127",
        atka : "Atk: 65",
        defa : "Def: 85",
        spatka : "Sp. Atk: 94",
        spdefa : "Sp. Def: 93",
        spda : "Spd: 100",
        move1a : "-Psychic",
        move2a : "-Air Slash",
        move3a : "-Reflect",
        move4a : "-Light Screen",

        nameb : "Slowking",
        levelb : "LV: 45",
        typeb : "Type: Water/Psychic",
        abilityb: "Ability: Oblivious",
        itemb : "Item: None",
        hpb : "HP: 150",
        atkb : "Atk: 90",
        defb : "Def: 77",
        spatkb : "Sp. Atk: 104",
        spdefb : "Sp. Def: 113",
        spdb : "Spd: 41",
        move1b : "-Psychic",
        move2b : "-Calm Mind",
        move3b : "-Power Gem",
        move4b : "-Yawn",

        namec : "Meowstic",
        levelc : "LV: 48",
        typec : "Type: Psychic",
        abilityc: "Ability: Infiltrator",
        itemc : "Item: None",
        hpc : "HP: 136",
        atkc : "Atk: 63",
        defc : "Def: 85",
        spatkc : "Sp. Atk: 92",
        spdefc : "Sp. Def: 81",
        spdc : "Spd: 112",
        move1c : "-Psychic",
        move2c : "-Calm Mind",
        move3c : "-Fake Out",
        move4c : "-Shadow Ball",
    },

    {
        namea : "Mienshao",
        levela : "LV: 49",
        typea : "Type: Fighting",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 132",
        atka : "Atk: 137",
        defa : "Def: 73",
        spatka : "Sp. Atk: 96",
        spdefa : "Sp. Def: 73",
        spda : "Spd: 128",
        move1a : "-Swords Dance",
        move2a : "-High Jump Kick",
        move3a : "-Acrobatics",
        move4a : "",

        nameb : "Honchkrow",
        levelb : "LV: 49",
        typeb : "Type: Dark/Flying",
        abilityb: "Ability: Super Luck",
        itemb : "Item: None",
        hpb : "HP: 166",
        atkb : "Atk: 137",
        defb : "Def: 58",
        spatkb : "Sp. Atk: 117",
        spdefb : "Sp. Def: 65",
        spdb : "Spd: 92",
        move1b : "-Night Slash",
        move2b : "-Aerial Ace",
        move3b : "-Retaliate",
        move4b : "-Steel Wing",

        namec : "Pyroar",
        levelc : "LV: 49",
        typec : "Type: Fire/Normal",
        abilityc: "Ability: Unnerve",
        itemc : "Item: None",
        hpc : "HP: 158",
        atkc : "Atk: 75",
        defc : "Def: 88",
        spatkc : "Sp. Atk: 138",
        spdefc : "Sp. Def: 82",
        spdc : "Spd: 123",
        move1c : "-Hyper Voice",
        move2c : "-Fire Blast",
        move3c : "-Dark Pulse",
        move4c : "",

        named : "Mega Gyarados",
        leveld : "LV: 53",
        typed : "Type: Water/Dark",
        abilityd: "Ability: Mold Breaker",
        itemd : "Item: Gyaradosite",
        hpd : "HP: 174",
        atkd : "Atk: 196",
        defd : "Def: 131",
        spatkd : "Sp. Atk: 80",
        spdefd : "Sp. Def: 153",
        spdd : "Spd: 101",
        move1d : "-Aqua Tail",
        move2d : "-Earthquake",
        move3d : "-Iron Head",
        move4d : "-Outrage",
    },

    {
        namea : "Abomasnow",
        levela : "LV: 56",
        typea : "Type: Grass/Ice",
        abilitya: "Ability: Snow Warning",
        itema : "Item: None",
        hpa : "HP: 179",
        atka : "Atk: 120",
        defa : "Def: 111",
        spatka : "Sp. Atk: 120",
        spdefa : "Sp. Def: 112",
        spda : "Spd: 75",
        move1a : "-Ice Beam",
        move2a : "-Ice Shard",
        move3a : "-Energy Ball",
        move4a : "",

        nameb : "Cryogonal",
        levelb : "LV: 55",
        typeb : "Type: Ice",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: 154",
        atkb : "Atk: 72",
        defb : "Def: 55",
        spatkb : "Sp. Atk: 108",
        spdefb : "Sp. Def: 165",
        spdb : "Spd: 132",
        move1b : "-Ice Beam",
        move2b : "-Confuse Ray",
        move3b : "-Flash Cannon",
        move4b : "-Hail",

        namec : "Avalugg",
        levelc : "LV: 59",
        typec : "Type: Ice",
        abilityc: "Ability: Ice Body",
        itemc : "Item: None",
        hpc : "HP: 194",
        atkc : "Atk: 156",
        defc : "Def: 235",
        spatkc : "Sp. Atk: 75",
        spdefc : "Sp. Def: 72",
        spdc : "Spd: 45",
        move1c : "-Avalanche",
        move2c : "-Crunch",
        move3c : "-Curse",
        move4c : "-Gyro Ball",
    },

    {
        namea : "Pyroar",
        levela : "LV: 63",
        typea : "Type: Fire/Normal",
        abilitya: "Ability: Rivalry",
        itema : "Item: None",
        hpa : "HP: 195",
        atka : "Atk: 104",
        defa : "Def: 109",
        spatka : "Sp. Atk: 156",
        spdefa : "Sp. Def: 102",
        spda : "Spd: 152",
        move1a : "-Hyper Voice",
        move2a : "-Flamethrower",
        move3a : "-Wild Charge",
        move4a : "-Noble Roar",

        nameb : "Torkoal",
        levelb : "LV: 63",
        typeb : "Type: Fire",
        abilityb: "Ability: White Smoke",
        itemb : "Item: None",
        hpb : "HP: 175",
        atkb : "Atk: 125",
        defb : "Def: 175",
        spatkb : "Sp. Atk: 125",
        spdefb : "Sp. Def: 107",
        spdb : "Spd: 48",
        move1b : "-Curse",
        move2b : "-Earthquake",
        move3b : "-Stone Edge",
        move4b : "-Flame Wheel",

        namec : "Chandelure",
        levelc : "LV: 63",
        typec : "Type: Ghost/Fire",
        abilityc: "Ability: Flame Body",
        itemc : "Item: None",
        hpc : "HP: 162",
        atkc : "Atk: 88",
        defc : "Def: 132",
        spatkc : "Sp. Atk: 201",
        spdefc : "Sp. Def: 118",
        spdc : "Spd: 130",
        move1c : "-Flamethrower",
        move2c : "-Shadow Ball",
        move3c : "-Confuse Ray",
        move4c : "-Confide",

        named : "Talonflame",
        leveld : "LV: 65",
        typed : "Type: Fire/Flying",
        abilityd: "Ability: Flame Body",
        itemd : "Item: None",
        hpd : "HP: 190",
        atkd : "Atk: 121",
        defd : "Def: 111",
        spatkd : "Sp. Atk: 115",
        spdefd : "Sp. Def: 109",
        spdd : "Spd: 183",
        move1d : "-Brave Bird",
        move2d : "-Quick Attack",
        move3d : "-Flare Blitz",
        move4d : "-Flail",
    },

    {
        namea : "Klefki",
        levela : "LV: 63",
        typea : "Type: Steel/Fairy",
        abilitya: "Ability: Prankster",
        itema : "Item: None",
        hpa : "HP: 158",
        atka : "Atk: 107",
        defa : "Def: 146",
        spatka : "Sp. Atk: 119",
        spdefa : "Sp. Def: 128",
        spda : "Spd: 113",
        move1a : "-Dazzling Gleam",
        move2a : "-Flash Cannon",
        move3a : "-Torment",
        move4a : "-Spikes",

        nameb : "Probopass",
        levelb : "LV: 63",
        typeb : "Type: Rock/Steel",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 162",
        atkb : "Atk: 88",
        defb : "Def: 221",
        spatkb : "Sp. Atk: 113",
        spdefb : "Sp. Def: 186",
        spdb : "Spd: 69",
        move1b : "-Earth Power",
        move2b : "-Power Gem",
        move3b : "-Discharge",
        move4b : "-Flash Cannon",

        namec : "Scizor",
        levelc : "LV: 63",
        typec : "Type: Bug/Steel",
        abilityc: "Ability: Technician",
        itemc : "Item: None",
        hpc : "HP: 175",
        atkc : "Atk: 182",
        defc : "Def: 144",
        spatkc : "Sp. Atk: 88",
        spdefc : "Sp. Def: 119",
        spdc : "Spd: 100",
        move1c : "-Bullet Punch",
        move2c : "-X-Scissor",
        move3c : "-Iron Head",
        move4c : "-Night Slash",

        named : "Aegislash",
        leveld : "LV: 65",
        typed : "Type: Steel/Ghost",
        abilityd: "Ability: Stance Change",
        itemd : "Item: None",
        hpd : "HP: 167",
        atkd : "Atk: 84 <--> 214",
        defd : "Def: 235 <--> 92",
        spatkd : "Sp. Atk: 75 <--> 192",
        spdefd : "Sp. Def: 215 <--> 84",
        spdd : "Spd: 97",
        move1d : "-King's Shield",
        move2d : "-Sacred Sword",
        move3d : "-Shadow Claw",
        move4d : "-Iron Head",
    },

    {
        namea : "Dragalge",
        levela : "LV: 63",
        typea : "Type: Poison/Dragon",
        abilitya: "Ability: Poison Point",
        itema : "Item: None",
        hpa : "HP: 168",
        atka : "Atk: 113",
        defa : "Def: 132",
        spatka : "Sp. Atk: 126",
        spdefa : "Sp. Def: 190",
        spda : "Spd: 74",
        move1a : "-Dragon Pulse",
        move2a : "-Surf",
        move3a : "-Sludge Bomb",
        move4a : "-Thunderbolt",

        nameb : "Druddigon",
        levelb : "LV: 63",
        typeb : "Type: Dragon",
        abilityb: "Ability: Rough Skin",
        itemb : "Item: None",
        hpb : "HP: 183",
        atkb : "Atk: 170",
        defb : "Def: 132",
        spatkb : "Sp. Atk: 84",
        spdefb : "Sp. Def: 145",
        spdb : "Spd: 79",
        move1b : "-Dragon Tail",
        move2b : "-Revenge",
        move3b : "-Retaliate",
        move4b : "-Chip Away",

        namec : "Altaria",
        levelc : "LV: 63",
        typec : "Type: Dragon/Flying",
        abilityc: "Ability: Natural Cure",
        itemc : "Item: None",
        hpc : "HP: 181",
        atkc : "Atk: 117",
        defc : "Def: 132",
        spatkc : "Sp. Atk: 107",
        spdefc : "Sp. Def: 151",
        spdc : "Spd: 107",
        move1c : "-Moonblast",
        move2c : "-Dragon Pulse",
        move3c : "-Cotton Guard",
        move4c : "-Sing",

        named : "Noivern",
        leveld : "LV: 65",
        typed : "Type: Flying/Dragon",
        abilityd: "Ability: Frisk",
        itemd : "Item: None",
        hpd : "HP: 199",
        atkd : "Atk: 99",
        defd : "Def: 135",
        spatkd : "Sp. Atk: 145",
        spdefd : "Sp. Def: 123",
        spdd : "Spd: 179",
        move1d : "-Air Slash",
        move2d : "-Dragon Pulse",
        move3d : "-Flamethrower",
        move4d : "-Super Fang",
    },

    {
        namea : "Clawitzer",
        levela : "LV: 63",
        typea : "Type: Water",
        abilitya: "Ability: Mega Launcher",
        itema : "Item: None",
        hpa : "HP: 176",
        atka : "Atk: 110",
        defa : "Def: 129",
        spatka : "Sp. Atk: 170",
        spdefa : "Sp. Def: 131",
        spda : "Spd: 93",
        move1a : "-Water Pulse",
        move2a : "-Dark Pulse",
        move3a : "-Dark Pulse",
        move4a : "-Aura Sphere",

        nameb : "Gyarados",
        levelb : "LV: 63",
        typeb : "Type: Water/Flying",
        abilityb: "Ability: Intimidate",
        itemb : "Item: None",
        hpb : "HP: 206",
        atkb : "Atk: 176",
        defb : "Def: 129",
        spatkb : "Sp. Atk: 84",
        spdefb : "Sp. Def: 144",
        spdb : "Spd: 120",
        move1b : "-Waterfall",
        move2b : "-Ice Fang",
        move3b : "-Earthquake",
        move4b : "-Dragon Dance",

        namec : "Starmie",
        levelc : "LV: 63",
        typec : "Type: Water/Psychic",
        abilityc: "Ability: Illuminate",
        itemc : "Item: None",
        hpc : "HP: 162",
        atkc : "Atk: 101",
        defc : "Def: 137",
        spatkc : "Sp. Atk: 144",
        spdefc : "Sp. Def: 125",
        spdc : "Spd: 163",
        move1c : "-Dazzling Gleam",
        move2c : "-Psychic",
        move3c : "-Surf",
        move4c : "-Light Screen",

        named : "Barbaracle",
        leveld : "LV: 65",
        typed : "Type: Rock/Water",
        abilityd: "Ability: Tough Claws",
        itemd : "Item: None",
        hpd : "HP: 182",
        atkd : "Atk: 139",
        defd : "Def: 168",
        spatkd : "Sp. Atk: 89",
        spdefd : "Sp. Def: 144",
        spdd : "Spd: 107",
        move1d : "-Cross Chop",
        move2d : "-Stone Edge",
        move3d : "-Razor Shell",
        move4d : "-X-Scissor",
    },

    {
        namea : "Hawlucha",
        levela : "LV: 64",
        typea : "Type: Fighting/Flying",
        abilitya: "Ability: Limber",
        itema : "Item: None",
        hpa : "HP: 178",
        atka : "Atk: 127",
        defa : "Def: 95",
        spatka : "Sp. Atk: 104",
        spdefa : "Sp. Def: 90",
        spda : "Spd: 177",
        move1a : "-Swords Dance",
        move2a : "-Flying Press",
        move3a : "-X-Scissor",
        move4a : "-Poison Jab",

        nameb : "Tyrantrum",
        levelb : "LV: 65",
        typeb : "Type: Rock/Dragon",
        abilityb: "Ability: Strong Jaw",
        itemb : "Item: None",
        hpb : "HP: 186",
        atkb : "Atk: 167",
        defb : "Def: 180",
        spatkb : "Sp. Atk: 99",
        spdefb : "Sp. Def: 86",
        spdb : "Spd: 91",
        move1b : "-Head Smash",
        move2b : "-Earthquake",
        move3b : "-Dragon Claw",
        move4b : "-Crunch",

        namec : "Aurorus",
        levelc : "LV: 65",
        typec : "Type: Rock/Ice",
        abilityc: "Ability: Refrigerate",
        itemc : "Item: None",
        hpc : "HP: 240",
        atkc : "Atk: 110",
        defc : "Def: 103",
        spatkc : "Sp. Atk: 138",
        spdefc : "Sp. Def: 129",
        spdc : "Spd: 85",
        move1c : "-Thunder",
        move2c : "-Blizzard",
        move3c : "-Reflect",
        move4c : "-Light Screen",

        named : "Gourgeist",
        leveld : "LV: 65",
        typed : "Type: Ghost/Grass",
        abilityd: "Ability: Pickup",
        itemd : "Item: None",
        hpd : "HP: 164",
        atkd : "Atk: 127",
        defd : "Def: 168",
        spatkd : "Sp. Atk: 85",
        spdefd : "Sp. Def: 107",
        spdd : "Spd: 119",
        move1d : "-Trick-or-Treat",
        move2d : "-Phantom Force",
        move3d : "-Seed Bomb",
        move4d : "-Shadow Sneak",

        namee : "Goodra",
        levele : "LV: 66",
        typee : "Type: Dragon",
        abilitye: "Ability: Sap Sipper",
        iteme : "Item: None",
        hpe : "HP: 200",
        atke : "Atk: 142",
        defe : "Def: 112",
        spatke : "Sp. Atk: 139",
        spdefe : "Sp. Def: 208",
        spde : "Spd: 115",
        move1e : "-Dragon Pulse",
        move2e : "-Muddy Water",
        move3e : "-Fire Blast",
        move4e : "-Focus Blast",

        namef : "Mega Gardevoir",
        levelf : "LV: 68",
        typef : "Type: Psychic/Fairy",
        abilityf: "Ability: Pixelate",
        itemf : "Item: Gardevoirite",
        hpf : "HP: 175",
        atkf : "Atk: 126",
        deff : "Def: 98",
        spatkf : "Sp. Atk: 210",
        spdeff : "Sp. Def: 194",
        spdf : "Spd: 160",
        move1f : "-Moonblast",
        move2f : "-Psychic",
        move3f : "-Shadow Ball",
        move4f : "-Thunderbolt",
    },
]

function displayXYTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showXYImages(newTrainerId);
        showPokemonXYImages(newTrainerId);
    }


    let xyTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = xy_trainers [xyTrainer].namea;
    document.querySelector('#level1').textContent = xy_trainers [xyTrainer].levela;
    document.querySelector('#type1').textContent = xy_trainers [xyTrainer].typea;
    document.querySelector('#ability1').textContent= xy_trainers [xyTrainer].abilitya;
    document.querySelector('#item1').textContent = xy_trainers [xyTrainer].itema;
    document.querySelector('#hp1').textContent = xy_trainers [xyTrainer].hpa;
    document.querySelector('#atk1').textContent = xy_trainers [xyTrainer].atka;
    document.querySelector('#def1').textContent = xy_trainers [xyTrainer].defa;
    document.querySelector('#spatk1').textContent = xy_trainers [xyTrainer].spatka;
    document.querySelector('#spdef1').textContent = xy_trainers [xyTrainer].spdefa;
    document.querySelector('#spd1').textContent = xy_trainers [xyTrainer].spda;
    document.querySelector('#move1_1').textContent = xy_trainers [xyTrainer].move1a;
    document.querySelector('#move2_1').textContent = xy_trainers [xyTrainer].move2a;
    document.querySelector('#move3_1').textContent = xy_trainers [xyTrainer].move3a;
    document.querySelector('#move4_1').textContent = xy_trainers [xyTrainer].move4a;

    
    document.querySelector('#name2').textContent = xy_trainers [xyTrainer].nameb;
    document.querySelector('#level2').textContent = xy_trainers [xyTrainer].levelb;
    document.querySelector('#type2').textContent = xy_trainers [xyTrainer].typeb;
    document.querySelector('#ability2').textContent= xy_trainers [xyTrainer].abilityb;
    document.querySelector('#item2').textContent = xy_trainers [xyTrainer].itemb;
    document.querySelector('#hp2').textContent = xy_trainers [xyTrainer].hpb;
    document.querySelector('#atk2').textContent = xy_trainers [xyTrainer].atkb;
    document.querySelector('#def2').textContent = xy_trainers [xyTrainer].defb;
    document.querySelector('#spatk2').textContent = xy_trainers [xyTrainer].spatkb;
    document.querySelector('#spdef2').textContent = xy_trainers [xyTrainer].spdefb;
    document.querySelector('#spd2').textContent = xy_trainers [xyTrainer].spdb;
    document.querySelector('#move1_2').textContent = xy_trainers [xyTrainer].move1b;
    document.querySelector('#move2_2').textContent = xy_trainers [xyTrainer].move2b;
    document.querySelector('#move3_2').textContent = xy_trainers [xyTrainer].move3b;
    document.querySelector('#move4_2').textContent = xy_trainers [xyTrainer].move4b;

    document.querySelector('#name3').textContent = xy_trainers [xyTrainer].namec;
    document.querySelector('#level3').textContent = xy_trainers [xyTrainer].levelc;
    document.querySelector('#type3').textContent = xy_trainers [xyTrainer].typec;
    document.querySelector('#ability3').textContent= xy_trainers [xyTrainer].abilityc;
    document.querySelector('#item3').textContent = xy_trainers [xyTrainer].itemc;
    document.querySelector('#hp3').textContent = xy_trainers [xyTrainer].hpc;
    document.querySelector('#atk3').textContent = xy_trainers [xyTrainer].atkc;
    document.querySelector('#def3').textContent = xy_trainers [xyTrainer].defc;
    document.querySelector('#spatk3').textContent = xy_trainers [xyTrainer].spatkc;
    document.querySelector('#spdef3').textContent = xy_trainers [xyTrainer].spdefc;
    document.querySelector('#spd3').textContent = xy_trainers [xyTrainer].spdc;
    document.querySelector('#move1_3').textContent = xy_trainers [xyTrainer].move1c;
    document.querySelector('#move2_3').textContent = xy_trainers [xyTrainer].move2c;
    document.querySelector('#move3_3').textContent = xy_trainers [xyTrainer].move3c;
    document.querySelector('#move4_3').textContent = xy_trainers [xyTrainer].move4c;

    document.querySelector('#name4').textContent = xy_trainers [xyTrainer].named;
    document.querySelector('#level4').textContent = xy_trainers [xyTrainer].leveld;
    document.querySelector('#type4').textContent = xy_trainers [xyTrainer].typed;
    document.querySelector('#ability4').textContent= xy_trainers [xyTrainer].abilityd;
    document.querySelector('#item4').textContent = xy_trainers [xyTrainer].itemd;
    document.querySelector('#hp4').textContent = xy_trainers [xyTrainer].hpd;
    document.querySelector('#atk4').textContent = xy_trainers [xyTrainer].atkd;
    document.querySelector('#def4').textContent = xy_trainers [xyTrainer].defd;
    document.querySelector('#spatk4').textContent = xy_trainers [xyTrainer].spatkd;
    document.querySelector('#spdef4').textContent = xy_trainers [xyTrainer].spdefd;
    document.querySelector('#spd4').textContent = xy_trainers [xyTrainer].spdd;
    document.querySelector('#move1_4').textContent = xy_trainers [xyTrainer].move1d;
    document.querySelector('#move2_4').textContent = xy_trainers [xyTrainer].move2d;
    document.querySelector('#move3_4').textContent = xy_trainers [xyTrainer].move3d;
    document.querySelector('#move4_4').textContent = xy_trainers [xyTrainer].move4d;

    document.querySelector('#name5').textContent = xy_trainers [xyTrainer].namee;
    document.querySelector('#level5').textContent = xy_trainers [xyTrainer].levele;
    document.querySelector('#type5').textContent = xy_trainers [xyTrainer].typee;
    document.querySelector('#ability5').textContent= xy_trainers [xyTrainer].abilitye;
    document.querySelector('#item5').textContent = xy_trainers [xyTrainer].iteme;
    document.querySelector('#hp5').textContent = xy_trainers [xyTrainer].hpe;
    document.querySelector('#atk5').textContent = xy_trainers [xyTrainer].atke;
    document.querySelector('#def5').textContent = xy_trainers [xyTrainer].defe;
    document.querySelector('#spatk5').textContent = xy_trainers [xyTrainer].spatke;
    document.querySelector('#spdef5').textContent = xy_trainers [xyTrainer].spdefe;
    document.querySelector('#spd5').textContent = xy_trainers [xyTrainer].spde;
    document.querySelector('#move1_5').textContent = xy_trainers [xyTrainer].move1e;
    document.querySelector('#move2_5').textContent = xy_trainers [xyTrainer].move2e;
    document.querySelector('#move3_5').textContent = xy_trainers [xyTrainer].move3e;
    document.querySelector('#move4_5').textContent = xy_trainers [xyTrainer].move4e;

    document.querySelector('#name6').textContent = xy_trainers [xyTrainer].namef;
    document.querySelector('#level6').textContent = xy_trainers [xyTrainer].levelf;
    document.querySelector('#type6').textContent = xy_trainers [xyTrainer].typef;
    document.querySelector('#ability6').textContent= xy_trainers [xyTrainer].abilityf;
    document.querySelector('#item6').textContent = xy_trainers [xyTrainer].itemf;
    document.querySelector('#hp6').textContent = xy_trainers [xyTrainer].hpf;
    document.querySelector('#atk6').textContent = xy_trainers [xyTrainer].atkf;
    document.querySelector('#def6').textContent = xy_trainers [xyTrainer].deff;
    document.querySelector('#spatk6').textContent = xy_trainers [xyTrainer].spatkf;
    document.querySelector('#spdef6').textContent = xy_trainers [xyTrainer].spdeff;
    document.querySelector('#spd6').textContent = xy_trainers [xyTrainer].spdf;
    document.querySelector('#move1_6').textContent = xy_trainers [xyTrainer].move1f;
    document.querySelector('#move2_6').textContent = xy_trainers [xyTrainer].move2f;
    document.querySelector('#move3_6').textContent = xy_trainers [xyTrainer].move3f;
    document.querySelector('#move4_6').textContent = xy_trainers [xyTrainer].move4f;
}

function showXYImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/xy/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonXYImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/xy/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/xy/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/xy/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/xy/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/xy/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/xy/" + trainerId + "_6.png";
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

    refCredit.textContent = "wartab"
    refCredit.href = "https://www.speedrun.com/pkmnxy/guides/2afgl"
}

violaXY.addEventListener('click', displayXYTrainers);
grantXY.addEventListener('click', displayXYTrainers);
korrinaXY.addEventListener('click', displayXYTrainers);
ramosXY.addEventListener('click', displayXYTrainers);
clemontXY.addEventListener('click', displayXYTrainers);
valerieXY.addEventListener('click', displayXYTrainers);
lysandreXY.addEventListener('click', displayXYTrainers);
olympiaXY.addEventListener('click', displayXYTrainers);
wulfricXY.addEventListener('click', displayXYTrainers);
malvaXY.addEventListener('click', displayXYTrainers);
wikstromXY.addEventListener('click', displayXYTrainers);
drasnaXY.addEventListener('click', displayXYTrainers);
sieboldXY.addEventListener('click', displayXYTrainers);
dianthaXY.addEventListener('click', displayXYTrainers);