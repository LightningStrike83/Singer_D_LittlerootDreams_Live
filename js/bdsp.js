let roarkBDSP = document.querySelector ("#roark3");
let marsBDSP = document.querySelector ("#mars3");
let gardeniaBDSP = document.querySelector ("#gardenia3");
let jupiterBDSP = document.querySelector ("#jupiter3");
let mayleneBDSP = document.querySelector ("#maylene3");
let crasherwakeBDSP = document.querySelector ("#crasherwake3");
let fantinaBDSP = document.querySelector ("#fantina3");
let byronBDSP = document.querySelector ("#byron3");
let candiceBDSP = document.querySelector ("#candice3");
let cyrusBDSP = document.querySelector ("#cyrus4");
let volknerBDSP = document.querySelector ("#volkner3");
let barry3GBDSP = document.querySelector("#barry3_g");
let barry3FBDSP = document.querySelector("#barry3_f");
let barry3WBDSP = document.querySelector("#barry3_w");
let aaronBDSP = document.querySelector ("#aaron3");
let berthaBDSP = document.querySelector ("#bertha3");
let flintBDSP = document.querySelector ("#flint3");
let lucianBDSP = document.querySelector ("#lucian3");
let cynthiaBDSP = document.querySelector ("#cynthia3");

let bdsp_trainers = [
    {
        namea : "Geodude",
        levela : "LV: 12",
        typea : "Type: Rock/Ground",
        abilitya: "Ability: Rock Head",
        itema : "Item: None",
        hpa : "HP: 31",
        atka : "Atk: 24",
        defa : "Def: 31",
        spatka : "Sp. Atk: 10",
        spdefa : "Sp. Def: 12",
        spda : "Spd: 9",
        move1a : "-Stealth Rock",
        move2a : "-Defense Curl",
        move3a : "-Rollout",
        move4a : "",

        nameb : "Onix",
        levelb : "LV: 12",
        typeb : "Type: Rock/Ground",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 30",
        atkb : "Atk: 16",
        defb : "Def: 43",
        spatkb : "Sp. Atk: 10",
        spdefb : "Sp. Def: 15",
        spdb : "Spd: 21",
        move1b : "-Stealth Rock",
        move2b : "-Rock Throw",
        move3b : "-Bind",
        move4b : "",

        namec : "Cranidos",
        levelc : "LV: 14",
        typec : "Type: Rock",
        abilityc: "Ability: Mold Breaker",
        itemc : "Item: None",
        hpc : "HP: 42",
        atkc : "Atk: 40",
        defc : "Def: 16",
        spatkc : "Sp. Atk: 11",
        spdefc : "Sp. Def: 13",
        spdc : "Spd: 23",
        move1c : "-Headbutt",
        move2c : "-Bulldoze",
        move3c : "-Leer",
        move4c : "",
    },
    
    {
        namea : "Zubat",
        levela : "LV: 14",
        typea : "Type: Poison/Flying",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 37",
        atka : "Atk: 17",
        defa : "Def: 16",
        spatka : "Sp. Atk: 11",
        spdefa : "Sp. Def: 18",
        spda : "Spd: 22",
        move1a : "-Absorb",
        move2a : "-Supersonic",
        move3a : "-Astonish",
        move4a : "-U-Turn",

        nameb : "Purugly",
        levelb : "LV: 16",
        typeb : "Type: Normal",
        abilityb: "Ability: Thick Fat",
        itemb : "Item: Oran Berry",
        hpb : "HP: 51",
        atkb : "Atk: 31",
        defb : "Def: 27",
        spatkb : "Sp. Atk: 22",
        spdefb : "Sp. Def: 26",
        spdb : "Spd: 44",
        move1b : "-Fake Out",
        move2b : "-Scratch",
        move3b : "-Growl",
        move4b : "-Thief",
    },

    {
        namea : "Cherubi",
        levela : "LV: 19",
        typea : "Type: Grass",
        abilitya: "Ability: Chlorophyll",
        itema : "Item: None",
        hpa : "HP: 46",
        atka : "Atk: 16",
        defa : "Def: 22",
        spatka : "Sp. Atk: 28",
        spdefa : "Sp. Def: 25",
        spda : "Spd: 19",
        move1a : "-Grass Knot",
        move2a : "-Growth",
        move3a : "-Dazzling Gleam",
        move4a : "-Safeguard",

        nameb : "Turtwig",
        levelb : "LV: 19",
        typeb : "Type: Grass",
        abilityb: "Ability: Overgrow",
        itemb : "Item: Miracle Seed",
        hpb : "HP: 49",
        atkb : "Atk: 30",
        defb : "Def: 31",
        spatkb : "Sp. Atk: 22",
        spdefb : "Sp. Def: 25",
        spdb : "Spd: 14",
        move1b : "-Grass Knot",
        move2b : "-Razor Leaf",
        move3b : "-Reflect",
        move4b : "-Work Up",

        namec : "Roserade",
        levelc : "LV: 22",
        typec : "Type: Grass/Poison",
        abilityc: "Ability: Technician",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 58",
        atkc : "Atk: 41",
        defc : "Def: 33",
        spatkc : "Sp. Atk: 65",
        spdefc : "Sp. Def: 51",
        spdc : "Spd: 49",
        move1c : "-Grass Knot",
        move2c : "-Petal Blizzard",
        move3c : "-Poison Sting",
        move4c : "-Stun Spore",
    },

    {
        namea : "Zubat",
        levela : "LV: 18",
        typea : "Type: Poison/Flying",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 48",
        atka : "Atk: 18",
        defa : "Def: 23",
        spatka : "Sp. Atk: 16",
        spdefa : "Sp. Def: 25",
        spda : "Spd: 24",
        move1a : "-Absorb",
        move2a : "-Supersonic",
        move3a : "-Mean Look",
        move4a : "-Poison Fang",

        nameb : "Skuntank",
        levelb : "LV: 20",
        typeb : "Type: Poison/Dark",
        abilityb: "Ability: Aftermath",
        itemb : "Item: Sitrus Berry",
        hpb : "HP: 77",
        atkb : "Atk: 37",
        defb : "Def: 38",
        spatkb : "Sp. Atk: 36",
        spdefb : "Sp. Def: 35",
        spdb : "Spd: 38",
        move1b : "-Poison Gas",
        move2b : "-Flamethrower",
        move3b : "-Acid Spray",
        move4b : "-Snarl",
    },

    {
        namea : "Meditite",
        levela : "LV: 27",
        typea : "Type: Psychic/Fighting",
        abilitya: "Ability: Pure Power",
        itema : "Item: Light Clay",
        hpa : "HP: 59",
        atka : "Atk: 34",
        defa : "Def: 34",
        spatka : "Sp. Atk: 26",
        spdefa : "Sp. Def: 30",
        spda : "Spd: 47",
        move1a : "-Drain Punch",
        move2a : "-Light Screen",
        move3a : "-Flash",
        move4a : "-Bulk Up",

        nameb : "Machoke",
        levelb : "LV: 27",
        typeb : "Type: Fighting",
        abilityb: "Ability: Guts",
        itemb : "Item: Expert Belt",
        hpb : "HP: 86",
        atkb : "Atk: 72",
        defb : "Def: 42",
        spatkb : "Sp. Atk: 28",
        spdefb : "Sp. Def: 37",
        spdb : "Spd: 35",
        move1b : "-Low Sweep",
        move2b : "-Knock Off",
        move3b : "-Rock Tomb",
        move4b : "-Bulldoze",

        namec : "Lucario",
        levelc : "LV: 30",
        typec : "Type: Fighting/Steel",
        abilityc: "Ability: Steadfast",
        itemc : "Item: Big Root",
        hpc : "HP: 82",
        atkc : "Atk: 88",
        defc : "Def: 56",
        spatkc : "Sp. Atk: 66",
        spdefc : "Sp. Def: 47",
        spdc : "Spd: 68",
        move1c : "-Drain Punch",
        move2c : "-Screech",
        move3c : "-Metal Claw",
        move4c : "-Bulk Up",
    },

    {
        namea : "Gyarados",
        levela : "LV: 27",
        typea : "Type: Water/Flying",
        abilitya: "Ability: Intimidate",
        itema : "Item: Wide Lens",
        hpa : "HP: 95",
        atka : "Atk: 80",
        defa : "Def: 47",
        spatka : "Sp. Atk: 33",
        spdefa : "Sp. Def: 59",
        spda : "Spd: 60",
        move1a : "-Brine",
        move2a : "-Ice Fang",
        move3a : "-Crunch",
        move4a : "-Flail",

        nameb : "Quagsire",
        levelb : "LV: 27",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Damp",
        itemb : "Item: Damp Rock",
        hpb : "HP: 95",
        atkb : "Atk: 57",
        defb : "Def: 52",
        spatkb : "Sp. Atk: 52",
        spdefb : "Sp. Def: 41",
        spdb : "Spd: 20",
        move1b : "-Rain Dance",
        move2b : "-Haze",
        move3b : "-Mud Shot",
        move4b : "-Scald",

        namec : "Floatzel",
        levelc : "LV: 30",
        typec : "Type: Water",
        abilityc: "Ability: Swift Swim",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 91",
        atkc : "Atk: 86",
        defc : "Def: 38",
        spatkc : "Sp. Atk: 55",
        spdefc : "Sp. Def: 35",
        spdc : "Spd: 85",
        move1c : "-Brine",
        move2c : "-Ice Fang",
        move3c : "-Bite",
        move4c : "-Aqua Jet",
    },

    {
        namea : "Drifblim",
        levela : "LV: 32",
        typea : "Type: Ghost/Flying",
        abilitya: "Ability: Aftermath",
        itema : "Item: Zoom Lens",
        hpa : "HP: 148",
        atka : "Atk: 50",
        defa : "Def: 35",
        spatka : "Sp. Atk: 74",
        spdefa : "Sp. Def: 41",
        spda : "Spd: 72",
        move1a : "-Strength Sap",
        move2a : "-Hex",
        move3a : "-Fly",
        move4a : "-Will-O-Wisp",

        nameb : "Gengar",
        levelb : "LV: 34",
        typeb : "Type: Ghost/Poison",
        abilityb: "Ability: Cursed Body",
        itemb : "Item: Colbur Berry",
        hpb : "HP: 95",
        atkb : "Atk: 44",
        defb : "Def: 47",
        spatkb : "Sp. Atk: 106",
        spdefb : "Sp. Def: 58",
        spdb : "Spd: 101",
        move1b : "-Shadow Claw",
        move2b : "-Confuse Ray",
        move3b : "-Sludge Bomb",
        move4b : "-Dazzling Gleam",

        namec : "Mismagius",
        levelc : "LV: 36",
        typec : "Type: Ghost",
        abilityc: "Ability: Levitate",
        itemc : "Item: Expert Belt",
        hpc : "HP: 100",
        atkc : "Atk: 43",
        defc : "Def: 50",
        spatkc : "Sp. Atk: 95",
        spdefc : "Sp. Def: 82",
        spdc : "Spd: 102",
        move1c : "-Confuse Ray",
        move2c : "-Phantom Force",
        move3c : "-Dazzling Gleam",
        move4c : "-Magical Leaf",
    },

    {
        namea : "Bronzor",
        levela : "LV: 36",
        typea : "Type: Steel/Psychic",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: 99",
        atka : "Atk: 22",
        defa : "Def: 86",
        spatka : "Sp. Atk: 32",
        spdefa : "Sp. Def: 79",
        spda : "Spd: 18",
        move1a : "-Confuse Ray",
        move2a : "-Sandstorm",
        move3a : "-Trick Room",
        move4a : "-Flash Cannon",

        nameb : "Steelix",
        levelb : "LV: 36",
        typeb : "Type: Steel/Ground",
        abilityb: "Ability: Sturdy",
        itemb : "Item: Soft Sand",
        hpb : "HP: 100",
        atkb : "Atk: 91",
        defb : "Def: 161",
        spatkb : "Sp. Atk: 44",
        spdefb : "Sp. Def: 64",
        spdb : "Spd: 23",
        move1b : "-Thunder Fang",
        move2b : "-Earthquake",
        move3b : "-Sandstorm",
        move4b : "-Gyro Ball",

        namec : "Bastiodon",
        levelc : "LV: 39",
        typec : "Type: Rock/Steel",
        abilityc: "Ability: Sturdy",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 95",
        atkc : "Atk: 45",
        defc : "Def: 163",
        spatkc : "Sp. Atk: 60",
        spdefc : "Sp. Def: 125",
        spdc : "Spd: 25",
        move1c : "-Iron Defense",
        move2c : "-Thunderbolt",
        move3c : "-Stone Edge",
        move4c : "-Flash Cannon",
    },

    {
        namea : "Snover",
        levela : "LV: 38",
        typea : "Type: Grass/Ice",
        abilitya: "Ability: Snow Warning",
        itema : "Item: Icy Rock",
        hpa : "HP: 106",
        atka : "Atk: 73",
        defa : "Def: 47",
        spatka : "Sp. Atk: 73",
        spdefa : "Sp. Def: 50",
        spda : "Spd: 31",
        move1a : "-Mist",
        move2a : "-Razor Leaf",
        move3a : "-Water Pulse",
        move4a : "-Avalanche",

        nameb : "Sneasel",
        levelb : "LV: 38",
        typeb : "Type: Dark/Ice",
        abilityb: "Ability: Pickpocket",
        itemb : "Item: Chople Berry",
        hpb : "HP: 99",
        atkb : "Atk: 98",
        defb : "Def: 50",
        spatkb : "Sp. Atk: 27",
        spdefb : "Sp. Def: 62",
        spdb : "Spd: 124",
        move1b : "-Metal Claw",
        move2b : "-Hone Claws",
        move3b : "-Dig",
        move4b : "-Avalanche",

        namec : "Medicham",
        levelc : "LV: 40",
        typec : "Type: Fightning/Psychic",
        abilityc: "Ability: Pure Power",
        itemc : "Item: Expert Belt",
        hpc : "HP: 108",
        atkc : "Atk: 75",
        defc : "Def: 65",
        spatkc : "Sp. Atk: 47",
        spdefc : "Sp. Def: 65",
        spdc : "Spd: 100",
        move1c : "-Ice Punch",
        move2c : "-Bulk Up",
        move3c : "-Brick Break",
        move4c : "-Rock Slide",

        named : "Abomasnow",
        leveld : "LV: 42",
        typed : "Type: Grass/Ice",
        abilityd: "Ability: Snow Warning",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 146",
        atkd : "Atk: 99",
        defd : "Def: 72",
        spatkd : "Sp. Atk: 121",
        spdefd : "Sp. Def: 80",
        spdd : "Spd: 49",
        move1d : "-Aurora Veil",
        move2d : "-Giga Drain",
        move3d : "-Earthquake",
        move4d : "-Blizzard",
    },

    {
        namea : "Honchkrow",
        levela : "LV: 45",
        typea : "Type: Dark/Flying",
        abilitya: "Ability: Super Luck",
        itema : "Item: Scope Lens",
        hpa : "HP: 159",
        atka : "Atk: 117",
        defa : "Def: 66",
        spatka : "Sp. Atk: 89",
        spdefa : "Sp. Def: 66",
        spda : "Spd: 74",
        move1a : "-Night Slash",
        move2a : "-Air Cutter",
        move3a : "-Steel Wing",
        move4a : "-Defog",

        nameb : "Crobat",
        levelb : "LV: 46",
        typeb : "Type: Poison/Flying",
        abilityb: "Ability: Infiltrator",
        itemb : "Item: Quick Claw",
        hpb : "HP: 148",
        atkb : "Atk: 87",
        defb : "Def: 93",
        spatkb : "Sp. Atk: 62",
        spdefb : "Sp. Def: 93",
        spdb : "Spd: 136",
        move1b : "-Cross Poison",
        move2b : "-Air Cutter",
        move3b : "-Tailwind",
        move4b : "-U-Turn",

        namec : "Gyarados",
        levelc : "LV: 45",
        typec : "Type: Water/Flying",
        abilityc: "Ability: Intimidate",
        itemc : "Item: Wacan Berry",
        hpc : "HP: 154",
        atkc : "Atk: 117",
        defc : "Def: 90",
        spatkc : "Sp. Atk: 53",
        spdefc : "Sp. Def: 109",
        spdc : "Spd: 84",
        move1c : "-Waterfall",
        move2c : "-Earthquake",
        move3c : "-Ice Fang",
        move4c : "-Crunch",

        named : "Weavile",
        leveld : "LV: 48",
        typed : "Type: Dark/Ice",
        abilityd: "Ability: Pickpocket",
        itemd : "Item: Chople Berry",
        hpd : "HP: 140",
        atkd : "Atk: 120",
        defd : "Def: 82",
        spatkd : "Sp. Atk: 48",
        spdefd : "Sp. Def: 101",
        spdd : "Spd: 125",
        move1d : "-Metal Claw",
        move2d : "-Fling",
        move3d : "-Dig",
        move4d : "-Aerial ace",
    },

    {
        namea : "Raichu",
        levela : "LV: 46",
        typea : "Type: Electric",
        abilitya: "Ability: Static",
        itema : "Item: Shuca Berry",
        hpa : "HP: 117",
        atka : "Atk: 78",
        defa : "Def: 62",
        spatka : "Sp. Atk: 119",
        spdefa : "Sp. Def: 85",
        spda : "Spd: 150",
        move1a : "-Nuzzle",
        move2a : "-Volt Switch",
        move3a : "-Surf",
        move4a : "-Charge Beam",

        nameb : "Ambipom",
        levelb : "LV: 47",
        typeb : "Type: Normal",
        abilityb: "Ability: Technician",
        itemb : "Item: Chople Berry",
        hpb : "HP: 134",
        atkb : "Atk: 117",
        defb : "Def: 73",
        spatkb : "Sp. Atk: 80",
        spdefb : "Sp. Def: 65",
        spdb : "Spd: 159",
        move1b : "-Fake Out",
        move2b : "-Thundebolt",
        move3b : "-Double Hit",
        move4b : "-Last Resort",

        namec : "Octillery",
        levelc : "LV: 47",
        typec : "Type: Water",
        abilityc: "Ability: Sniper",
        itemc : "Item: Expert Belt",
        hpc : "HP: 134",
        atkc : "Atk: 92",
        defc : "Def: 82",
        spatkc : "Sp. Atk: 148",
        spdefc : "Sp. Def: 82",
        spdc : "Spd: 79",
        move1c : "-Octazooka",
        move2c : "-Focus Energy",
        move3c : "-Charge Beam",
        move4c : "-Aurora Beam",

        named : "Luxray",
        leveld : "LV: 49",
        typed : "Type: Electric",
        abilityd: "Ability: Intimidate",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 148",
        atkd : "Atk: 155",
        defd : "Def: 93",
        spatkd : "Sp. Atk: 88",
        spdefd : "Sp. Def: 82",
        spdd : "Spd: 123",
        move1d : "-Thunder Fang",
        move2d : "-Ice Fang",
        move3d : "-Crunch",
        move4d : "-Iron Tail",
    },

    {
        namea : "Staraptor",
        levela : "LV: 49",
        typea : "Type: Normal/Flying",
        abilitya : "Ability: Intimidate",
        itema : "Item: Focus Sash",
        hpa : "HP: 151",
        atka : "Atk: 143",
        defa : "Def: 80",
        spatka : "Sp. Atk: 50",
        spdefa : "Sp. Def: 70",
        spda : "Spd: 135",
        move1a : "-Close Combat",
        move2a : "-Pluck",
        move3a : "-Sunny Day",
        move4a : "-U-Turn",

        nameb : "Floatzel",
        levelb : "LV: 49",
        typeb : "Type: Water",
        abilityb : "Ability: Swift Swim",
        itemb : "Item: Quick Claw",
        hpb : "HP: 150",
        atkb : "Atk: 123",
        defb : "Def: 66",
        spatkb : "Sp. Atk: 81",
        spdefb : "Sp. Def: 61",
        spdb : "Spd: 154",
        move1b : "-Ice Fang",
        move2b : "-Crunch",
        move3b : "-Swift",
        move4b : "-Brine",

        namec : "Heracross",
        levelc : "LV: 51",
        typec : "Type: Bug/Fighting",
        abilityc : "Ability: Swarm",
        itemc : "Item: None",
        hpc : "HP: 152",
        atkc : "Atk: 150",
        defc : "Def: 91",
        spatkc : "Sp. Atk: 45",
        spdefc : "Sp. Def: 112",
        spdc : "Spd: 127",
        move1c : "-Pin Missile",
        move2c : "-Swords Dance",
        move3c : "-Rock Slide",
        move4c : "-Thief",

        named : "Rapidash",
        leveld : "LV: 49",
        typed : "Type: Fire",
        abilityd : "Ability: Flash Fire",
        itemd : "Item: Expert Belt",
        hpd : "HP: 139",
        atkd : "Atk: 127",
        defd : "Def: 87",
        spatkd : "Sp. Atk: 81",
        spdefd : "Sp. Def: 98",
        spdd : "Spd: 154",
        move1d : "-Smart Strike",
        move2d : "-Megahorn",
        move3d : "-Poison Jab",
        move4d : "-Flame Wheel",

        namee : "Snorlax",
        levele : "LV: 52",
        typee : "Type: Normal",
        abilitye : "Ability: Thick Fat",
        iteme : "Item: None",
        hpe : "HP: 245",
        atke : "Atk: 152",
        defe : "Def: 89",
        spatke : "Sp. Atk: 69",
        spdefe : "Sp. Def: 135",
        spde : "Spd: 40",
        move1e : "-Covet",
        move2e : "-Yawn",
        move3e : "-Crunch",
        move4e : "-High Horsepower",

        namef : "Torterra",
        levelf : "LV: 55",
        typef : "Type: Grass/Ground",
        abilityf : "Ability: Overgrow",
        itemf : "Item: Leftovers",
        hpf : "HP: 198",
        atkf : "Atk: 143",
        deff : "Def: 133",
        spatkf : "Sp. Atk: 90",
        spdeff : "Sp. Def: 133",
        spdf : "Spd: 72",
        move1f : "-Earthquake",
        move2f : "-Wood Hammer",
        move3f : "-Roar",
        move4f : "-Stealth Rock",
    },

    {
        namea : "Staraptor",
        levela : "LV: 49",
        typea : "Type: Normal/Flying",
        abilitya : "Ability: Intimidate",
        itema : "Item: Focus Sash",
        hpa : "HP: 151",
        atka : "Atk: 143",
        defa : "Def: 80",
        spatka : "Sp. Atk: 50",
        spdefa : "Sp. Def: 70",
        spda : "Spd: 135",
        move1a : "-Close Combat",
        move2a : "-Pluck",
        move3a : "-Steel Wing",
        move4a : "-U-Turn",

        nameb : "Floatzel",
        levelb : "LV: 49",
        typeb : "Type: Water",
        abilityb : "Ability: Swift Swim",
        itemb : "Item: Quick Claw",
        hpb : "HP: 150",
        atkb : "Atk: 123",
        defb : "Def: 66",
        spatkb : "Sp. Atk: 81",
        spdefb : "Sp. Def: 61",
        spdb : "Spd: 154",
        move1b : "-Ice Fang",
        move2b : "-Crunch",
        move3b : "-Swift",
        move4b : "-Brine",

        namec : "Heracross",
        levelc : "LV: 51",
        typec : "Type: Bug/Fighting",
        abilityc : "Ability: Swarm",
        itemc : "Item: None",
        hpc : "HP: 152",
        atkc : "Atk: 150",
        defc : "Def: 91",
        spatkc : "Sp. Atk: 45",
        spdefc : "Sp. Def: 112",
        spdc : "Spd: 127",
        move1c : "-Pin Missile",
        move2c : "-Swords Dance",
        move3c : "-Rock Slide",
        move4c : "-Thief",

        named : "Roserade",
        leveld : "LV: 49",
        typed : "Type: Grass/Poison",
        abilityd : "Ability: Poison Point",
        itemd : "Item: Big Root",
        hpd : "HP: 126",
        atkd : "Atk: 69",
        defd : "Def: 78",
        spatkd : "Sp. Atk: 145",
        spdefd : "Sp. Def: 117",
        spdd : "Spd: 129",
        move1d : "-Grassy Terrain",
        move2d : "-Giga Drain",
        move3d : "-Toxic",
        move4d : "-Grass Knot",

        namee : "Snorlax",
        levele : "LV: 52",
        typee : "Type: Normal",
        abilitye : "Ability: Thick Fat",
        iteme : "Item: None",
        hpe : "HP: 245",
        atke : "Atk: 152",
        defe : "Def: 89",
        spatke : "Sp. Atk: 69",
        spdefe : "Sp. Def: 135",
        spde : "Spd: 40",
        move1e : "-Covet",
        move2e : "-Yawn",
        move3e : "-Crunch",
        move4e : "-Hammer Arm",

        namef : "Infernape",
        levelf : "LV: 55",
        typef : "Type: Fire/Fighting",
        abilityf : "Ability: Blaze",
        itemf : "Item: Expert Belt",
        hpf : "HP: 161",
        atkf : "Atk: 146",
        deff : "Def: 96",
        spatkf : "Sp. Atk: 112",
        spdeff : "Sp. Def: 96",
        spdf : "Spd: 167",
        move1f : "-Close Combat",
        move2f : "-Flame Wheel",
        move3f : "-U-Turn",
        move4f : "-Shadow Claw",
    },

    {
        namea : "Staraptor",
        levela : "LV: 49",
        typea : "Type: Normal/Flying",
        abilitya : "Ability: Intimidate",
        itema : "Item: Focus Sash",
        hpa : "HP: 151",
        atka : "Atk: 143",
        defa : "Def: 80",
        spatka : "Sp. Atk: 50",
        spdefa : "Sp. Def: 70",
        spda : "Spd: 135",
        move1a : "-Close Combat",
        move2a : "-Pluck",
        move3a : "-Rain Dance",
        move4a : "-U-Turn",

        nameb : "Roserade",
        levelb : "LV: 49",
        typeb : "Type: Grass/Poison",
        abilityb : "Ability: Natural Cure",
        itemb : "Item: Black Sludge",
        hpb : "HP: 125",
        atkb : "Atk: 68",
        defb : "Def: 76",
        spatkb : "Sp. Atk: 143",
        spdefb : "Sp. Def: 115",
        spdb : "Spd: 126",
        move1b : "-Grassy Terrain",
        move2b : "-Petal Blizzard",
        move3b : "-Stun Spore",
        move4b : "-Shadow Ball",

        namec : "Heracross",
        levelc : "LV: 51",
        typec : "Type: Bug/Fighting",
        abilityc : "Ability: Swarm",
        itemc : "Item: None",
        hpc : "HP: 152",
        atkc : "Atk: 150",
        defc : "Def: 91",
        spatkc : "Sp. Atk: 45",
        spdefc : "Sp. Def: 112",
        spdc : "Spd: 127",
        move1c : "-Pin Missile",
        move2c : "-Swords Dance",
        move3c : "-Rock Slide",
        move4c : "-Thief",

        named : "Rapidash",
        leveld : "LV: 49",
        typed : "Type: Fire",
        abilityd : "Ability: Flash Fire",
        itemd : "Item: Expert Belt",
        hpd : "HP: 139",
        atkd : "Atk: 127",
        defd : "Def: 87",
        spatkd : "Sp. Atk: 81",
        spdefd : "Sp. Def: 98",
        spdd : "Spd: 154",
        move1d : "-Smart Strike",
        move2d : "-Megahorn",
        move3d : "-Poison Jab",
        move4d : "-Flame Wheel",

        namee : "Snorlax",
        levele : "LV: 52",
        typee : "Type: Normal",
        abilitye : "Ability: Thick Fat",
        iteme : "Item: None",
        hpe : "HP: 245",
        atke : "Atk: 152",
        defe : "Def: 89",
        spatke : "Sp. Atk: 69",
        spdefe : "Sp. Def: 135",
        spde : "Spd: 40",
        move1e : "-Covet",
        move2e : "-Yawn",
        move3e : "-Crunch",
        move4e : "-High Horsepower",

        namef : "Empoleon",
        levelf : "LV: 55",
        typef : "Type: Water/Steel",
        abilityf : "Ability: Torrent",
        itemf : "Item: Quick Claw",
        hpf : "HP: 170",
        atkf : "Atk: 94",
        deff : "Def: 115",
        spatkf : "Sp. Atk: 154",
        spdeff : "Sp. Def: 129",
        spdf : "Spd: 108",
        move1f : "-Charm",
        move2f : "-Grass Knot",
        move3f : "-Brine",
        move4f : "-Flash Cannon",
    },

    {
        namea : "Dustox",
        levela : "LV: 53",
        typea : "Type: Bug/Poison",
        abilitya: "Ability: Shield Dust",
        itema : "Item: Black Sludge",
        hpa : "HP: 176",
        atka : "Atk: 52",
        defa : "Def: 100",
        spatka : "Sp. Atk: 70",
        spdefa : "Sp. Def: 113",
        spda : "Spd: 91",
        move1a : "-Toxic",
        move2a : "-Bug Buzz",
        move3a : "-Moonlight",
        move4a : "-Light Screen",

        nameb : "Beautifly",
        levelb : "LV: 53",
        typeb : "Type: Bug/Flying",
        abilityb: "Ability: Swarm",
        itemb : "Item: Wise Glasses",
        hpb : "HP: 139",
        atkb : "Atk: 71",
        defb : "Def: 70",
        spatkb : "Sp. Atk: 148",
        spdefb : "Sp. Def: 70",
        spdb : "Spd: 117",
        move1b : "-Bug Buzz",
        move2b : "-Shadow Ball",
        move3b : "-Psychic",
        move4b : "-Quiver Dance",

        namec : "Vespiquen",
        levelc : "LV: 54",
        typec : "Type: Bug/Flying",
        abilityc: "Ability: Unnerve",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 190",
        atkc : "Atk: 118",
        defc : "Def: 131",
        spatkc : "Sp. Atk: 81",
        spdefc : "Sp. Def: 131",
        spdc : "Spd: 64",
        move1c : "-Acrobatics",
        move2c : "-Attack Order",
        move3c : "-Aerial Ace",
        move4c : "-Defend Order",

        named : "Heracross",
        leveld : "LV: 54",
        typed : "Type: Bug/Fighting",
        abilityd: "Ability: Guts",
        itemd : "Item: Flame Orb",
        hpd : "HP: 163",
        atkd : "Atk: 164",
        defd : "Def: 98",
        spatkd : "Sp. Atk: 43",
        spdefd : "Sp. Def: 120",
        spdd : "Spd: 155",
        move1d : "-Earthquake",
        move2d : "-Rock Slide",
        move3d : "-Facade",
        move4d : "-Brick Break",

        namee : "Drapion",
        levele : "LV: 57",
        typee : "Type: Poison/Dark",
        abilitye: "Ability: Sniper",
        iteme : "Item: Scope Lens",
        hpe : "HP: 166",
        atke : "Atk: 133",
        defe : "Def: 148",
        spatke : "Sp. Atk: 65",
        spdefe : "Sp. Def: 108",
        spde : "Spd: 176",
        move1e : "-Cross Poison",
        move2e : "-Night Slash",
        move3e : "-Earthquake",
        move4e : "-X-Scissor",
    },

    {
        namea : "Quagsire",
        levela : "LV: 55",
        typea : "Type: Water/Ground",
        abilitya: "Ability: Water Absorb",
        itema : "Item: Leftovers",
        hpa : "HP: 183",
        atka : "Atk: 115",
        defa : "Def: 165",
        spatka : "Sp. Atk: 70",
        spdefa : "Sp. Def: 85",
        spda : "Spd: 62",
        move1a : "-Recover",
        move2a : "-Toxic",
        move3a : "-Earthquake",
        move4a : "-Surf",

        nameb : "Sudowoodo",
        levelb : "LV: 56",
        typeb : "Type: Rock",
        abilityb: "Ability: Rock Head",
        itemb : "Item: Sitrus Berry",
        hpb : "HP: 156",
        atkb : "Atk: 185",
        defb : "Def: 152",
        spatkb : "Sp. Atk: 34",
        spdefb : "Sp. Def: 85",
        spdb : "Spd: 57",
        move1b : "-Double-Edge",
        move2b : "-Rock Slide",
        move3b : "-Sucker Punch",
        move4b : "-Low Kick",

        namec : "Golem",
        levelc : "LV: 56",
        typec : "Type: Rock/Ground",
        abilityc: "Ability: Sturdy",
        itemc : "Item: Soft Sand",
        hpc : "HP: 169",
        atkc : "Atk: 165",
        defc : "Def: 164",
        spatkc : "Sp. Atk: 59",
        spdefc : "Sp. Def: 91",
        spdc : "Spd: 111",
        move1c : "-Rock Polish",
        move2c : "-Heavy Slam",
        move3c : "-Earthquake",
        move4c : "-Stone Edge",

        named : "Whiscash",
        leveld : "LV: 55",
        typed : "Type: Water/Ground",
        abilityd: "Ability: Hydration",
        itemd : "Item: Rindo Berry",
        hpd : "HP: 199",
        atkd : "Atk: 98",
        defd : "Def: 98",
        spatkd : "Sp. Atk: 154",
        spdefd : "Sp. Def: 96",
        spdd : "Spd: 71",
        move1d : "-Bulldoze",
        move2d : "-Ice Beam",
        move3d : "-Belch",
        move4d : "-Hydro Pump",

        namee : "Hippowdon",
        levele : "LV: 59",
        typee : "Type: Ground",
        abilitye: "Ability: Sand Stream",
        iteme : "Item: Chesto Berry",
        hpe : "HP: 216",
        atke : "Atk: 211",
        defe : "Def: 162",
        spatke : "Sp. Atk: 76",
        spdefe : "Sp. Def: 108",
        spde : "Spd: 78",
        move1e : "-Ice Fang",
        move2e : "-Earthquake",
        move3e : "-Crunch",
        move4e : "-Rest",
    },

    {
        namea : "Rapidash",
        levela : "LV: 58",
        typea : "Type: Fire",
        abilitya: "Ability: Flame Body",
        itema : "Item: Wide Lens",
        hpa : "HP: 159",
        atka : "Atk: 147",
        defa : "Def: 102",
        spatka : "Sp. Atk: 87",
        spdefa : "Sp. Def: 114",
        spda : "Spd: 191",
        move1a : "-Flame Charge",
        move2a : "-Iron Tail",
        move3a : "-Poison Jab",
        move4a : "-Hypnosis",

        nameb : "Steelix",
        levelb : "LV: 57",
        typeb : "Type: Steel/Ground",
        abilityb: "Ability: Sheer Force",
        itemb : "Item: Life Orb",
        hpb : "HP: 171",
        atkb : "Atk: 170",
        defb : "Def: 250",
        spatkb : "Sp. Atk: 62",
        spdefb : "Sp. Def: 98",
        spdb : "Spd: 56",
        move1b : "-Thunder Fang",
        move2b : "-Fire Fang",
        move3b : "-Iron Tail",
        move4b : "-Crunch",

        namec : "Drifblim",
        levelc : "LV: 58",
        typec : "Type: Ghost/Flying",
        abilityc: "Ability: Unburden",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 261",
        atkc : "Atk: 95",
        defc : "Def: 75",
        spatkc : "Sp. Atk: 109",
        spdefc : "Sp. Def: 87",
        spdc : "Spd: 159",
        move1c : "-Strength Sap",
        move2c : "-Minimize",
        move3c : "-Baton Bass",
        move4c : "-Will-O-Wisp",

        named : "Lopunny",
        leveld : "LV: 57",
        typed : "Type: Normal",
        abilityd: "Ability: Cute Charm",
        itemd : "Item: Leftovers",
        hpd : "HP: 194",
        atkd : "Atk: 109",
        defd : "Def: 118",
        spatkd : "Sp. Atk: 59",
        spdefd : "Sp. Def: 132",
        spdd : "Spd: 156",
        move1d : "-Mirror Coat",
        move2d : "-High Jump Kick",
        move3d : "-Quick Attack",
        move4d : "-Fire Punch",

        namee : "Infernape",
        levele : "LV: 61",
        typee : "Type: Fire/Fighting",
        abilitye: "Ability: Iron Fist",
        iteme : "Item: Focus Sash",
        hpe : "HP: 184",
        atke : "Atk: 159",
        defe : "Def: 110",
        spatke : "Sp. Atk: 117",
        spdefe : "Sp. Def: 110",
        spde : "Spd: 204",
        move1e : "-Fire Punch",
        move2e : "-Thunder Punch",
        move3e : "-Close Combat",
        move4e : "-Mach Punch",
    },

    {
        namea : "Mr. Mime",
        levela : "LV: 59",
        typea : "Type: Psychic/Fairy",
        abilitya: "Ability: Filter",
        itema : "Item: Light Clay",
        hpa : "HP: 171",
        atka : "Atk: 52",
        defa : "Def: 111",
        spatka : "Sp. Atk: 143",
        spdefa : "Sp. Def: 166",
        spda : "Spd: 131",
        move1a : "-Light Screen",
        move2a : "-Reflect",
        move3a : "-Psychic",
        move4a : "-Dazzling Gleam",

        nameb : "Girafarig",
        levelb : "LV: 59",
        typeb : "Type: Normal/Psychic",
        abilityb: "Ability: Sap Sipper",
        itemb : "Item: Mental Herb",
        hpb : "HP: 207",
        atkb : "Atk: 89",
        defb : "Def: 101",
        spatkb : "Sp. Atk: 131",
        spdefb : "Sp. Def: 111",
        spdb : "Spd: 105",
        move1b : "-Light Screen",
        move2b : "-Psychic",
        move3b : "-Thundebolt",
        move4b : "-Trick Room",

        namec : "Medicham",
        levelc : "LV: 60",
        typec : "Type: Psychic/Fightning",
        abilityc: "Ability: Pure Power",
        itemc : "Item: Muscle Band",
        hpc : "HP: 160",
        atkc : "Atk: 146",
        defc : "Def: 113",
        spatkc : "Sp. Atk: 77",
        spdefc : "Sp. Def: 113",
        spdc : "Spd: 90",
        move1c : "-Zen Headbutt",
        move2c : "-High Jump Kick",
        move3c : "-Thunder Punch",
        move4c : "-Ice Punch",

        named : "Alakazam",
        leveld : "LV: 60",
        typed : "Type: Psychic",
        abilityd: "Ability: Magic Guard",
        itemd : "Item: Life Orb",
        hpd : "HP: 154",
        atkd : "Atk: 58",
        defd : "Def: 77",
        spatkd : "Sp. Atk: 185",
        spdefd : "Sp. Def: 137",
        spdd : "Spd: 225",
        move1d : "-Nasty Plot",
        move2d : "-Psychic",
        move3d : "-Future Sight",
        move4d : "-Shock Wave",

        namee : "Bronzong",
        levele : "LV: 63",
        typee : "Type: Steel/Psychic",
        abilitye: "Ability: Levitate",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 178",
        atke : "Atk: 193",
        defe : "Def: 170",
        spatke : "Sp. Atk: 104",
        spdefe : "Sp. Def: 170",
        spde : "Spd: 41",
        move1e : "-Gyro Ball",
        move2e : "-Earthquake",
        move3e : "-Payback",
        move4e : "-Trick Room",
    },

    {
        namea : "Spiritomb",
        levela : "LV: 61",
        typea : "Type: Ghost/Dark",
        abilitya: "Ability: Pressure",
        itema : "Item: Sitrus Berry",
        hpa : "HP: 189",
        atka : "Atk: 136",
        defa : "Def: 155",
        spatka : "Sp. Atk: 191",
        spdefa : "Sp. Def: 155",
        spda : "Spd: 59",
        move1a : "-Shadow Ball",
        move2a : "-Dark Pulse",
        move3a : "-Psychic",
        move4a : "-Sucker Punch",

        nameb : "Roserade",
        levelb : "LV: 60",
        typeb : "Type: Grass/Poison",
        abilityb: "Ability: Poison Point",
        itemb : "Item: Expert Belt",
        hpb : "HP: 168",
        atkb : "Atk: 80",
        defb : "Def: 101",
        spatkb : "Sp. Atk: 211",
        spdefb : "Sp. Def: 149",
        spdb : "Spd: 178",
        move1b : "-Dazzling Gleam",
        move2b : "-Shadow Ball",
        move3b : "-Sludge Bomb",
        move4b : "-Energy Ball",

        namec : "Gastrodon",
        levelc : "LV: 60",
        typec : "Type: Water/Ground",
        abilityc: "Ability: Storm Drain",
        itemc : "Item: Leftovers",
        hpc : "HP: 259",
        atkc : "Atk: 123",
        defc : "Def: 157",
        spatkc : "Sp. Atk: 134",
        spdefc : "Sp. Def: 122",
        spdc : "Spd: 45",
        move1c : "-Scald",
        move2c : "-Earthquake",
        move3c : "-Sludge Bomb",
        move4c : "-Rock Tomb",

        named : "Lucario",
        leveld : "LV: 63",
        typed : "Type: Fighting/Steel",
        abilityd: "Ability: Inner Focus",
        itemd : "Item: Wise Glasses",
        hpd : "HP: 188",
        atkd : "Atk: 128",
        defd : "Def: 112",
        spatkd : "Sp. Atk: 209",
        spdefd : "Sp. Def: 112",
        spdd : "Spd: 187",
        move1d : "-Aura Sphere",
        move2d : "-Dragon Pulse",
        move3d : "-Flash Cannon",
        move4d : "-Nasty Plot",

        namee : "Milotic",
        levele : "LV: 63",
        typee : "Type: Water",
        abilitye: "Ability: Marvel Scale",
        iteme : "Item: Flame Orb",
        hpe : "HP: 251",
        atke : "Atk: 72",
        defe : "Def: 179",
        spatke : "Sp. Atk: 151",
        spdefe : "Sp. Def: 182",
        spde : "Spd: 126",
        move1e : "-Recover",
        move2e : "-Mirror Coat",
        move3e : "-Ice Beam",
        move4e : "-Scald",

        namef : "Garchomp",
        levelf : "LV: 66",
        typef : "Type: Dragon/Ground",
        abilityf: "Ability: Rough Skin",
        itemf : "Item: Yache Berry",
        hpf : "HP: 247",
        atkf : "Atk: 238",
        deff : "Def: 150",
        spatkf : "Sp. Atk: 99",
        spdeff : "Sp. Def: 137",
        spdf : "Spd: 212",
        move1f : "-Dragon Claw",
        move2f : "-Earthquake",
        move3f : "-Swords Dance",
        move4f : "-Poison Jab",
    },
]

function displayBDSPTrainers() {
    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showBDSPImages(newTrainerId);
        showPokemonBDSPImages(newTrainerId);
    }

    let bdspTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = bdsp_trainers [bdspTrainer].namea;
    document.querySelector('#level1').textContent = bdsp_trainers [bdspTrainer].levela;
    document.querySelector('#type1').textContent = bdsp_trainers [bdspTrainer].typea;
    document.querySelector('#ability1').textContent= bdsp_trainers [bdspTrainer].abilitya;
    document.querySelector('#item1').textContent = bdsp_trainers [bdspTrainer].itema;
    document.querySelector('#hp1').textContent = bdsp_trainers [bdspTrainer].hpa;
    document.querySelector('#atk1').textContent = bdsp_trainers [bdspTrainer].atka;
    document.querySelector('#def1').textContent = bdsp_trainers [bdspTrainer].defa;
    document.querySelector('#spatk1').textContent = bdsp_trainers [bdspTrainer].spatka;
    document.querySelector('#spdef1').textContent = bdsp_trainers [bdspTrainer].spdefa;
    document.querySelector('#spd1').textContent = bdsp_trainers [bdspTrainer].spda;
    document.querySelector('#move1_1').textContent = bdsp_trainers [bdspTrainer].move1a;
    document.querySelector('#move2_1').textContent = bdsp_trainers [bdspTrainer].move2a;
    document.querySelector('#move3_1').textContent = bdsp_trainers [bdspTrainer].move3a;
    document.querySelector('#move4_1').textContent = bdsp_trainers [bdspTrainer].move4a;

    
    document.querySelector('#name2').textContent = bdsp_trainers [bdspTrainer].nameb;
    document.querySelector('#level2').textContent = bdsp_trainers [bdspTrainer].levelb;
    document.querySelector('#type2').textContent = bdsp_trainers [bdspTrainer].typeb;
    document.querySelector('#ability2').textContent= bdsp_trainers [bdspTrainer].abilityb;
    document.querySelector('#item2').textContent = bdsp_trainers [bdspTrainer].itemb;
    document.querySelector('#hp2').textContent = bdsp_trainers [bdspTrainer].hpb;
    document.querySelector('#atk2').textContent = bdsp_trainers [bdspTrainer].atkb;
    document.querySelector('#def2').textContent = bdsp_trainers [bdspTrainer].defb;
    document.querySelector('#spatk2').textContent = bdsp_trainers [bdspTrainer].spatkb;
    document.querySelector('#spdef2').textContent = bdsp_trainers [bdspTrainer].spdefb;
    document.querySelector('#spd2').textContent = bdsp_trainers [bdspTrainer].spdb;
    document.querySelector('#move1_2').textContent = bdsp_trainers [bdspTrainer].move1b;
    document.querySelector('#move2_2').textContent = bdsp_trainers [bdspTrainer].move2b;
    document.querySelector('#move3_2').textContent = bdsp_trainers [bdspTrainer].move3b;
    document.querySelector('#move4_2').textContent = bdsp_trainers [bdspTrainer].move4b;

    document.querySelector('#name3').textContent = bdsp_trainers [bdspTrainer].namec;
    document.querySelector('#level3').textContent = bdsp_trainers [bdspTrainer].levelc;
    document.querySelector('#type3').textContent = bdsp_trainers [bdspTrainer].typec;
    document.querySelector('#ability3').textContent= bdsp_trainers [bdspTrainer].abilityc;
    document.querySelector('#item3').textContent = bdsp_trainers [bdspTrainer].itemc;
    document.querySelector('#hp3').textContent = bdsp_trainers [bdspTrainer].hpc;
    document.querySelector('#atk3').textContent = bdsp_trainers [bdspTrainer].atkc;
    document.querySelector('#def3').textContent = bdsp_trainers [bdspTrainer].defc;
    document.querySelector('#spatk3').textContent = bdsp_trainers [bdspTrainer].spatkc;
    document.querySelector('#spdef3').textContent = bdsp_trainers [bdspTrainer].spdefc;
    document.querySelector('#spd3').textContent = bdsp_trainers [bdspTrainer].spdc;
    document.querySelector('#move1_3').textContent = bdsp_trainers [bdspTrainer].move1c;
    document.querySelector('#move2_3').textContent = bdsp_trainers [bdspTrainer].move2c;
    document.querySelector('#move3_3').textContent = bdsp_trainers [bdspTrainer].move3c;
    document.querySelector('#move4_3').textContent = bdsp_trainers [bdspTrainer].move4c;

    document.querySelector('#name4').textContent = bdsp_trainers [bdspTrainer].named;
    document.querySelector('#level4').textContent = bdsp_trainers [bdspTrainer].leveld;
    document.querySelector('#type4').textContent = bdsp_trainers [bdspTrainer].typed;
    document.querySelector('#ability4').textContent= bdsp_trainers [bdspTrainer].abilityd;
    document.querySelector('#item4').textContent = bdsp_trainers [bdspTrainer].itemd;
    document.querySelector('#hp4').textContent = bdsp_trainers [bdspTrainer].hpd;
    document.querySelector('#atk4').textContent = bdsp_trainers [bdspTrainer].atkd;
    document.querySelector('#def4').textContent = bdsp_trainers [bdspTrainer].defd;
    document.querySelector('#spatk4').textContent = bdsp_trainers [bdspTrainer].spatkd;
    document.querySelector('#spdef4').textContent = bdsp_trainers [bdspTrainer].spdefd;
    document.querySelector('#spd4').textContent = bdsp_trainers [bdspTrainer].spdd;
    document.querySelector('#move1_4').textContent = bdsp_trainers [bdspTrainer].move1d;
    document.querySelector('#move2_4').textContent = bdsp_trainers [bdspTrainer].move2d;
    document.querySelector('#move3_4').textContent = bdsp_trainers [bdspTrainer].move3d;
    document.querySelector('#move4_4').textContent = bdsp_trainers [bdspTrainer].move4d;

    document.querySelector('#name5').textContent = bdsp_trainers [bdspTrainer].namee;
    document.querySelector('#level5').textContent = bdsp_trainers [bdspTrainer].levele;
    document.querySelector('#type5').textContent = bdsp_trainers [bdspTrainer].typee;
    document.querySelector('#ability5').textContent= bdsp_trainers [bdspTrainer].abilitye;
    document.querySelector('#item5').textContent = bdsp_trainers [bdspTrainer].iteme;
    document.querySelector('#hp5').textContent = bdsp_trainers [bdspTrainer].hpe;
    document.querySelector('#atk5').textContent = bdsp_trainers [bdspTrainer].atke;
    document.querySelector('#def5').textContent = bdsp_trainers [bdspTrainer].defe;
    document.querySelector('#spatk5').textContent = bdsp_trainers [bdspTrainer].spatke;
    document.querySelector('#spdef5').textContent = bdsp_trainers [bdspTrainer].spdefe;
    document.querySelector('#spd5').textContent = bdsp_trainers [bdspTrainer].spde;
    document.querySelector('#move1_5').textContent = bdsp_trainers [bdspTrainer].move1e;
    document.querySelector('#move2_5').textContent = bdsp_trainers [bdspTrainer].move2e;
    document.querySelector('#move3_5').textContent = bdsp_trainers [bdspTrainer].move3e;
    document.querySelector('#move4_5').textContent = bdsp_trainers [bdspTrainer].move4e;

    document.querySelector('#name6').textContent = bdsp_trainers [bdspTrainer].namef;
    document.querySelector('#level6').textContent = bdsp_trainers [bdspTrainer].levelf;
    document.querySelector('#type6').textContent = bdsp_trainers [bdspTrainer].typef;
    document.querySelector('#ability6').textContent= bdsp_trainers [bdspTrainer].abilityf;
    document.querySelector('#item6').textContent = bdsp_trainers [bdspTrainer].itemf;
    document.querySelector('#hp6').textContent = bdsp_trainers [bdspTrainer].hpf;
    document.querySelector('#atk6').textContent = bdsp_trainers [bdspTrainer].atkf;
    document.querySelector('#def6').textContent = bdsp_trainers [bdspTrainer].deff;
    document.querySelector('#spatk6').textContent = bdsp_trainers [bdspTrainer].spatkf;
    document.querySelector('#spdef6').textContent = bdsp_trainers [bdspTrainer].spdeff;
    document.querySelector('#spd6').textContent = bdsp_trainers [bdspTrainer].spdf;
    document.querySelector('#move1_6').textContent = bdsp_trainers [bdspTrainer].move1f;
    document.querySelector('#move2_6').textContent = bdsp_trainers [bdspTrainer].move2f;
    document.querySelector('#move3_6').textContent = bdsp_trainers [bdspTrainer].move3f;
    document.querySelector('#move4_6').textContent = bdsp_trainers [bdspTrainer].move4f;
}

function showBDSPImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/bdsp/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonBDSPImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/bdsp/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/bdsp/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/bdsp/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/bdsp/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/bdsp/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/bdsp/" + trainerId + "_6.png";
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

    refCredit.textContent = "Hematite/HemaH2O and Kaphotics"
    refCredit.href = "https://heystacks.com/doc/1042/bdsp-trainer-data"
}

roarkBDSP.addEventListener('click', displayBDSPTrainers);
marsBDSP.addEventListener('click', displayBDSPTrainers);
gardeniaBDSP.addEventListener('click', displayBDSPTrainers);
jupiterBDSP.addEventListener('click', displayBDSPTrainers);
mayleneBDSP.addEventListener('click', displayBDSPTrainers);
crasherwakeBDSP.addEventListener('click', displayBDSPTrainers);
fantinaBDSP.addEventListener('click', displayBDSPTrainers);
byronBDSP.addEventListener('click', displayBDSPTrainers);
candiceBDSP.addEventListener('click', displayBDSPTrainers);
cyrusBDSP.addEventListener('click', displayBDSPTrainers);
volknerBDSP.addEventListener('click', displayBDSPTrainers);
barry3GBDSP.addEventListener('click', displayBDSPTrainers);
barry3FBDSP.addEventListener('click', displayBDSPTrainers);
barry3WBDSP.addEventListener('click', displayBDSPTrainers);
aaronBDSP.addEventListener('click', displayBDSPTrainers);
berthaBDSP.addEventListener('click', displayBDSPTrainers);
flintBDSP.addEventListener('click', displayBDSPTrainers);
lucianBDSP.addEventListener('click', displayBDSPTrainers);
cynthiaBDSP.addEventListener('click', displayBDSPTrainers);