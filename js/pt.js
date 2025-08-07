let roarkPT = document.querySelector ("#roark2");
let marsPT = document.querySelector ("#mars2");
let gardeniaPT = document.querySelector ("#gardenia2");
let jupiterPT = document.querySelector ("#jupiter2");
let maylenePT = document.querySelector ("#maylene2");
let crasherwakePT = document.querySelector ("#crasherwake2");
let fantinaPT = document.querySelector ("#fantina2");
let byronPT = document.querySelector ("#byron2");
let candicePT = document.querySelector ("#candice2");
let cyrusPT = document.querySelector ("#cyrus2");
let volknerPT = document.querySelector ("#volkner2");
let barry2GPT = document.querySelector("#barry2_g");
let barry2FPT = document.querySelector("#barry2_f");
let barry2WPT = document.querySelector("#barry2_w");
let aaronPT = document.querySelector ("#aaron2");
let berthaPT = document.querySelector ("#bertha2");
let flintPT = document.querySelector ("#flint2");
let lucianPT = document.querySelector ("#lucian2");
let cynthiaPT = document.querySelector ("#cynthia2");

let pt_trainers = [
    {
        namea : "Geodude",
        levela : "LV: 12",
        typea : "Type: Rock/Ground",
        abilitya: "Ability: Rock Head",
        itema : "Item: None",
        hpa : "HP: 32",
        atka : "Atk: 24",
        defa : "Def: 31",
        spatka : "Sp. Atk: 12",
        spdefa : "Sp. Def: 10",
        spda : "Spd: 10",
        move1a : "-Rock Throw",
        move2a : "-Stealth Rock",
        move3a : "",
        move4a : "",

        nameb : "Onix",
        levelb : "LV: 12",
        typeb : "Type: Rock/Ground",
        abilityb: "Ability: Rock Head",
        itemb : "Item: None",
        hpb : "HP: 32",
        atkb : "Atk: 14",
        defb : "Def: 48",
        spatkb : "Sp. Atk: 12",
        spdefb : "Sp. Def: 16",
        spdb : "Spd: 22",
        move1b : "-Stealth Rock",
        move2b : "-Rock Throw",
        move3b : "-Screech",
        move4b : "",

        namec : "Cranidos",
        levelc : "LV: 14",
        typec : "Type: Rock",
        abilityc: "Ability: Mold Breaker",
        itemc : "Item: None",
        hpc : "HP: 43",
        atkc : "Atk: 40",
        defc : "Def: 17",
        spatkc : "Sp. Atk: 12",
        spdefc : "Sp. Def: 14",
        spdc : "Spd: 24",
        move1c : "-Headbutt",
        move2c : "-Pursuit",
        move3c : "-Leer",
        move4c : "",
    },

    {
        namea : "Zubat",
        levela : "LV: 15",
        typea : "Type: Poison/Flying",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 38",
        atka : "Atk: 18",
        defa : "Def: 18",
        spatka : "Sp. Atk: 15",
        spdefa : "Sp. Def: 18",
        spda : "Spd: 23",
        move1a : "-Bite",
        move2a : "-Leech Life",
        move3a : "-Toxic",
        move4a : "",

        nameb : "Purugly",
        levelb : "LV: 17",
        typeb : "Type: Normal",
        abilityb: "Ability: Thick Fat",
        itemb : "Item: Oran Berry",
        hpb : "HP: 53",
        atkb : "Atk: 34",
        defb : "Def: 28",
        spatkb : "Sp. Atk: 28",
        spdefb : "Sp. Def: 27",
        spdb : "Spd: 45",
        move1b : "-Fake Out",
        move2b : "-Scratch",
        move3b : "-Feint Attack",
        move4b : "",
    },

    {
        namea : "Turtwig",
        levela : "LV: 20",
        typea : "Type: Grass",
        abilitya: "Ability: Overgrow",
        itema : "Item: None",
        hpa : "HP: 53",
        atka : "Atk: 33",
        defa : "Def: 31",
        spatka : "Sp. Atk: 24",
        spdefa : "Sp. Def: 28",
        spda : "Spd: 18",
        move1a : "-Grass Knot",
        move2a : "-Razor Leaf",
        move3a : "-Reflect",
        move4a : "-Sunny Day",

        nameb : "Cherrim",
        levelb : "LV: 20",
        typeb : "Type: Grass",
        abilityb: "Ability: Flower Gift",
        itemb : "Item: None",
        hpb : "HP: 59",
        atkb : "Atk: 30",
        defb : "Def: 37",
        spatkb : "Sp. Atk: 41",
        spdefb : "Sp. Def: 33",
        spdb : "Spd: 40",
        move1b : "-Grass Knot",
        move2b : "-Magical Leaf",
        move3b : "-Leech Seed",
        move4b : "-Safeguard",

        namec : "Roserade",
        levelc : "LV: 22",
        typec : "Type: Grass/Poison",
        abilityc: "Ability: Natural Cure",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 59",
        atkc : "Atk: 37",
        defc : "Def: 30",
        spatkc : "Sp. Atk: 61",
        spdefc : "Sp. Def: 46",
        spdc : "Spd: 49",
        move1c : "-Grass Knot",
        move2c : "-Magical Leaf",
        move3c : "-Poison Sting",
        move4c : "-Stun Spore",
    },

    {
        namea : "Zubat",
        levela : "LV: 21",
        typea : "Type: Poison/Flying",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 50",
        atka : "Atk: 28",
        defa : "Def: 22",
        spatka : "Sp. Atk: 20",
        spdefa : "Sp. Def: 24",
        spda : "Spd: 27",
        move1a : "-Giga Drain",
        move2a : "-Wing Attack",
        move3a : "-Bite",
        move4a : "",

        nameb : "Skuntank",
        levelb : "LV: 23",
        typeb : "Type: Poison/Dark",
        abilityb: "Ability: Stench",
        itemb : "Item: Sitrus Berry",
        hpb : "HP: 83",
        atkb : "Atk: 45",
        defb : "Def: 38",
        spatkb : "Sp. Atk: 44",
        spdefb : "Sp. Def: 35",
        spdb : "Spd: 46",
        move1b : "-Poison Gas",
        move2b : "-Night Slash",
        move3b : "-Screech",
        move4b : "-Smokescreen",
    },

    {
        namea : "Duskull",
        levela : "LV: 24",
        typea : "Type: Ghost",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: 46",
        atka : "Atk: 27",
        defa : "Def: 45",
        spatka : "Sp. Atk: 24",
        spdefa : "Sp. Def: 51",
        spda : "Spd: 19",
        move1a : "-Shadow Sneak",
        move2a : "-Will-O-Wisp",
        move3a : "-Future Sight",
        move4a : "-Pursuit",

        nameb : "Haunter",
        levelb : "LV: 24",
        typeb : "Type: Ghost/Poison",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: 58",
        atkb : "Atk: 31",
        defb : "Def: 29",
        spatkb : "Sp. Atk: 63",
        spdefb : "Sp. Def: 34",
        spdb : "Spd: 53",
        move1b : "-Shadow Claw",
        move2b : "-Confuse Ray",
        move3b : "-Sucker Punch",
        move4b : "-Hypnosis",

        namec : "Mismagius",
        levelc : "LV: 26",
        typec : "Type: Ghost",
        abilityc: "Ability: Levitate",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 70",
        atkc : "Atk: 39",
        defc : "Def: 42",
        spatkc : "Sp. Atk: 55",
        spdefc : "Sp. Def: 62",
        spdc : "Spd: 62",
        move1c : "-Confuse Ray",
        move2c : "-Shadow Ball",
        move3c : "-Psybeam",
        move4c : "-Magical Leaf",
    },

    {
        namea : "Meditite",
        levela : "LV: 28",
        typea : "Type: Psychic/Fighting",
        abilitya: "Ability: Pure Power",
        itema : "Item: None",
        hpa : "HP: 61",
        atka : "Atk: 37",
        defa : "Def: 42",
        spatka : "Sp. Atk: 34",
        spdefa : "Sp. Def: 42",
        spda : "Spd: 40",
        move1a : "-Drain Punch",
        move2a : "-Confusion",
        move3a : "-Fake Out",
        move4a : "-Rock Tomb",

        nameb : "Machoke",
        levelb : "LV: 29",
        typeb : "Type: Fighting",
        abilityb: "Ability: Guts",
        itemb : "Item: None",
        hpb : "HP: 92",
        atkb : "Atk: 75",
        defb : "Def: 52",
        spatkb : "Sp. Atk: 40",
        spdefb : "Sp. Def: 41",
        spdb : "Spd: 38",
        move1b : "-Karate Chop",
        move2b : "-Focus Energy",
        move3b : "-Rock Tomb",
        move4b : "-Strength",

        namec : "Lucario",
        levelc : "LV: 32",
        typec : "Type: Fighting/Steel",
        abilityc: "Ability: Steadfast",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 94",
        atkc : "Atk: 83",
        defc : "Def: 51",
        spatkc : "Sp. Atk: 86",
        spdefc : "Sp. Def: 57",
        spdc : "Spd: 77",
        move1c : "-Drain Punch",
        move2c : "-Bone Rush",
        move3c : "-Metal Claw",
        move4c : "-Force Palm",
    },

    {
        namea : "Gyarados",
        levela : "LV: 33",
        typea : "Type: Water/Flying",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 111",
        atka : "Atk: 93",
        defa : "Def: 69",
        spatka : "Sp. Atk: 50",
        spdefa : "Sp. Def: 68",
        spda : "Spd: 64",
        move1a : "-Brine",
        move2a : "-Waterfall",
        move3a : "-Bite",
        move4a : "-Twister",

        nameb : "Quagsire",
        levelb : "LV: 34",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Damp",
        itemb : "Item: None",
        hpb : "HP: 114",
        atkb : "Atk: 74",
        defb : "Def: 68",
        spatkb : "Sp. Atk: 55",
        spdefb : "Sp. Def: 49",
        spdb : "Spd: 34",
        move1b : "-Water Pulse",
        move2b : "-Mud Shot",
        move3b : "-Rock Tomb",
        move4b : "-Yawn",

        namec : "Floatzel",
        levelc : "LV: 37",
        typec : "Type: Water",
        abilityc: "Ability: Swift Swim",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 116",
        atkc : "Atk: 97",
        defc : "Def: 52",
        spatkc : "Sp. Atk: 74",
        spdefc : "Sp. Def: 43",
        spdc : "Spd: 96",
        move1c : "-Brine",
        move2c : "-Ice Fang",
        move3c : "-Crunch",
        move4c : "-Aqua Jet",
    },

    {
        namea : "Magneton",
        levela : "LV: 36",
        typea : "Type: Electric/Steel",
        abilitya: "Ability: Magnet Pull",
        itema : "Item: None",
        hpa : "HP: 92",
        atka : "Atk: 58",
        defa : "Def: 92",
        spatka : "Sp. Atk: 102",
        spdefa : "Sp. Def: 65",
        spda : "Spd: 58",
        move1a : "-Thunder Bolt",
        move2a : "-Tri Attack",
        move3a : "-Metal Sound",
        move4a : "-Flash Cannon",

        nameb : "Steelix",
        levelb : "LV: 38",
        typeb : "Type: Steel/Ground",
        abilityb: "Ability: Rock Head",
        itemb : "Item: None",
        hpb : "HP: 114",
        atkb : "Atk: 78",
        defb : "Def: 166",
        spatkb : "Sp. Atk: 55",
        spdefb : "Sp. Def: 63",
        spdb : "Spd: 36",
        move1b : "-Ice Fang",
        move2b : "-Earthquake",
        move3b : "-Sandstorm",
        move4b : "-Flash Cannon",

        namec : "Bastiodon",
        levelc : "LV: 41",
        typec : "Type: Rock/Steel",
        abilityc: "Ability: Sturdy",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 110",
        atkc : "Atk: 57",
        defc : "Def: 167",
        spatkc : "Sp. Atk: 53",
        spdefc : "Sp. Def: 115",
        spdc : "Spd: 39",
        move1c : "-Iron Defense",
        move2c : "-Taunt",
        move3c : "-Stone Edge",
        move4c : "-Metal Burst",
    },

    {

        namea : "Sneasel",
        levela : "LV: 40",
        typea : "Type: Dark/Ice",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 106",
        atka : "Atk: 93",
        defa : "Def: 61",
        spatka : "Sp. Atk: 45",
        spdefa : "Sp. Def: 77",
        spda : "Spd: 109",
        move1a : "-Feint Attack",
        move2a : "-Ice Shard",
        move3a : "-Slash",
        move4a : "-Aerial Ace",

        nameb : "Piloswine",
        levelb : "LV: 40",
        typeb : "Type: Ice/Ground",
        abilityb: "Ability: Oblivious",
        itemb : "Item: None",
        hpb : "HP: 142",
        atkb : "Atk: 97",
        defb : "Def: 72",
        spatkb : "Sp. Atk: 71",
        spdefb : "Sp. Def: 65",
        spdb : "Spd: 57",
        move1b : "-Hail",
        move2b : "-Earthquake",
        move3b : "-Stone Edge",
        move4b : "-Avalanche",

        namec : "Abomasnow",
        levelc : "LV: 42",
        typec : "Type: Grass/Ice",
        abilityc: "Ability: Snow Warning",
        itemc : "Item: None",
        hpc : "HP: 140",
        atkc : "Atk: 94",
        defc : "Def: 88",
        spatkc : "Sp. Atk: 94",
        spdefc : "Sp. Def: 89",
        spdc : "Spd: 61",
        move1c : "-Wood Hammer",
        move2c : "-Focus Blast",
        move3c : "-Water Pulse",
        move4c : "-Avalanche",

        named : "Froslass",
        leveld : "LV: 44",
        typed : "Type: Ice/Ghost",
        abilityd: "Ability: Snow Cloak",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 128",
        atkd : "Atk: 96",
        defd : "Def: 71",
        spatkd : "Sp. Atk: 88",
        spdefd : "Sp. Def: 79",
        spdd : "Spd: 115",
        move1d : "-Shadow Ball",
        move2d : "-Double Team",
        move3d : "-Psychic",
        move4d : "-Blizzard",
    },

    {
        namea : "Houndoom",
        levela : "LV: 45",
        typea : "Type: Dark/Fire",
        abilitya: "Ability: Flash Fire",
        itema : "Item: None",
        hpa : "HP: 136",
        atka : "Atk: 99",
        defa : "Def: 63",
        spatka : "Sp. Atk: 117",
        spdefa : "Sp. Def: 90",
        spda : "Spd: 104",
        move1a : "-Will-O-Wisp",
        move2a : "-Flamethrower",
        move3a : "-Dark Pulse",
        move4a : "-Thunder Fang",

        nameb : "Honchkrow",
        levelb : "LV: 47",
        typeb : "Type: Dark/Flying",
        abilityb: "Ability: Insomnia",
        itemb : "Item: None",
        hpb : "HP: 165",
        atkb : "Atk: 149",
        defb : "Def: 67",
        spatkb : "Sp. Atk: 105",
        spdefb : "Sp. Def: 67",
        spdb : "Spd: 85",
        move1b : "-Night Slash",
        move2b : "-Drill Peck",
        move3b : "-Heat Wave",
        move4b : "-Psychic",

        namec : "Crobat",
        levelc : "LV: 46",
        typec : "Type: Poison/Flying",
        abilityc: "Ability: Inner Focus",
        itemc : "Item: None",
        hpc : "HP: 148",
        atkc : "Atk: 101",
        defc : "Def: 92",
        spatkc : "Sp. Atk: 83",
        spdefc : "Sp. Def: 82",
        spdc : "Spd: 151",
        move1c : "-Toxic",
        move2c : "-Cross Poison",
        move3c : "-Air Slash",
        move4c : "-Confuse Ray",

        named : "Gyarados",
        leveld : "LV: 46",
        typed : "Type: Water/Flying",
        abilityd: "Ability: Intimidate",
        itemd : "Item: None",
        hpd : "HP: 157",
        atkd : "Atk: 133",
        defd : "Def: 91",
        spatkd : "Sp. Atk: 66",
        spdefd : "Sp. Def: 121",
        spdd : "Spd: 93",
        move1d : "-Waterfall",
        move2d : "-Earthquake",
        move3d : "-Ice Fang",
        move4d : "-Giga Impact",

        namee : "Weavile",
        levele : "LV: 48",
        typee : "Type: Dark/Ice",
        abilitye: "Ability: Pressure",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 139",
        atke : "Atk: 120",
        defe : "Def: 81",
        spatke : "Sp. Atk: 68",
        spdefe : "Sp. Def: 101",
        spde : "Spd: 139",
        move1e : "-Fake Out",
        move2e : "-Night Slash",
        move3e : "-Ice Punch",
        move4e : "-X-Scissor",
    },

    {
        namea : "Jolteon",
        levela : "LV: 46",
        typea : "Type: Electric",
        abilitya: "Ability: Volt Absorb",
        itema : "Item: None",
        hpa : "HP: 129",
        atka : "Atk: 78",
        defa : "Def: 81",
        spatka : "Sp. Atk: 120",
        spdefa : "Sp. Def: 106",
        spda : "Spd: 124",
        move1a : "-Charge Beam",
        move2a : "-Thunder Wave",
        move3a : "-Iron Tail",
        move4a : "-Quick Attack",

        nameb : "Raichu",
        levelb : "LV: 46",
        typeb : "Type: Electric",
        abilityb: "Ability: Static",
        itemb : "Item: None",
        hpb : "HP: 125",
        atkb : "Atk: 101",
        defb : "Def: 62",
        spatkb : "Sp. Atk: 101",
        spdefb : "Sp. Def: 101",
        spdb : "Spd: 110",
        move1b : "-Signal Beam",
        move2b : "-Focus Blast",
        move3b : "-Quick Attack",
        move4b : "-Charge Beam",

        namec : "Luxray",
        levelc : "LV: 48",
        typec : "Type: Electric",
        abilityc: "Ability: Rivalry",
        itemc : "Item: None",
        hpc : "HP: 149",
        atkc : "Atk: 134",
        defc : "Def: 104",
        spatkc : "Sp. Atk: 110",
        spdefc : "Sp. Def: 85",
        spdc : "Spd: 86",
        move1c : "-Thunder Fang",
        move2c : "-Fire Fang",
        move3c : "-Crunch",
        move4c : "-Ice Fang",

        named : "Electivire",
        leveld : "LV: 50",
        typed : "Type: Electric",
        abilityd: "Ability: Motor Drive",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 137",
        atkd : "Atk: 129",
        defd : "Def: 94",
        spatkd : "Sp. Atk: 98",
        spdefd : "Sp. Def: 97",
        spdd : "Spd: 109",
        move1d : "-Thunder Punch",
        move2d : "-Fire Punch",
        move3d : "-Giga Impact",
        move4d : "-Quick Attack",
    },

    {
        namea : "Staraptor",
        levela : "LV: 48",
        typea : "Type: Normal/Flying",
        abilitya : "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 151",
        atka : "Atk: 131",
        defa : "Def: 91",
        spatka : "Sp. Atk: 64",
        spdefa : "Sp. Def: 64",
        spda : "Spd: 100",
        move1a : "-Close Combat",
        move2a : "-Steel Wing",
        move3a : "-Aerial Ace",
        move4a : "-U-Turn",

        nameb : "Rapidash",
        levelb : "LV: 47",
        typeb : "Type: Fire",
        abilityb : "Ability: Run Away",
        itemb : "Item: None",
        hpb : "HP: 129",
        atkb : "Atk: 99",
        defb : "Def: 90",
        spatkb : "Sp. Atk: 91",
        spdefb : "Sp. Def: 91",
        spdb : "Spd: 114",
        move1b : "-Fire Blast",
        move2b : "-Sunny Day",
        move3b : "-Bounce",
        move4b : "-Will-O-Wisp",

        namec : "Snorlax",
        levelc : "LV: 49",
        typec : "Type: Normal",
        abilityc : "Ability: Immunity",
        itemc : "Item: None",
        hpc : "HP: 227",
        atkc : "Atk: 124",
        defc : "Def: 80",
        spatkc : "Sp. Atk: 88",
        spdefc : "Sp. Def: 111",
        spdc : "Spd: 46",
        move1c : "-Body Slam",
        move2c : "-Earthquake",
        move3c : "-Crunch",
        move4c : "-Rest",

        named : "Heracross",
        leveld : "LV: 48",
        typed : "Type: Bug/Fighting",
        abilityd : "Ability: Swarm",
        itemd : "Item: None",
        hpd : "HP: 146",
        atkd : "Atk: 136",
        defd : "Def: 88",
        spatkd : "Sp. Atk: 54",
        spdefd : "Sp. Def: 107",
        spdd : "Spd: 98",
        move1d : "-Aerial Ace",
        move2d : "-Close Combat",
        move3d : "-Night Slash",
        move4d : "-Rock Slide",

        namee : "Floatzel",
        levele : "LV: 47",
        typee : "Type: Water",
        abilitye : "Ability: Swift Swim",
        iteme : "Item: None",
        hpe : "HP: 148",
        atke : "Atk: 114",
        defe : "Def: 67",
        spatke : "Sp. Atk: 96",
        spdefe : "Sp. Def: 63",
        spde : "Spd: 124",
        move1e : "-Aqua Jet",
        move2e : "-Crunch",
        move3e : "-Ice Fang",
        move4e : "-Brick Break",

        namef : "Torterra",
        levelf : "LV: 51",
        typef : "Type: Grass/Ground",
        abilityf : "Ability: Overgrow",
        itemf : "Item: None",
        hpf : "HP: 170",
        atkf : "Atk: 115",
        deff : "Def: 124",
        spatkf : "Sp. Atk: 102",
        spdeff : "Sp. Def: 103",
        spdf : "Spd: 74",
        move1f : "-Leaf Storm",
        move2f : "-Crunch",
        move3f : "-Earthquake",
        move4f : "-Synthesis",
    },

    {
        namea : "Staraptor",
        levela : "LV: 48",
        typea : "Type: Normal/Flying",
        abilitya : "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 151",
        atka : "Atk: 131",
        defa : "Def: 91",
        spatka : "Sp. Atk: 64",
        spdefa : "Sp. Def: 64",
        spda : "Spd: 100",
        move1a : "-Close Combat",
        move2a : "-Steel Wing",
        move3a : "-Aerial Ace",
        move4a : "-U-Turn",

        nameb : "Floatzel",
        levelb : "LV: 47",
        typeb : "Type: Water",
        abilityb : "Ability: Swift Swim",
        itemb : "Item: None",
        hpb : "HP: 148",
        atkb : "Atk: 114",
        defb : "Def: 67",
        spatkb : "Sp. Atk: 96",
        spdefb : "Sp. Def: 63",
        spdb : "Spd: 124",
        move1b : "-Aqua Jet",
        move2b : "-Crunch",
        move3b : "-Ice Fang",
        move4b : "-Brick Break",

        namec : "Snorlax",
        levelc : "LV: 49",
        typec : "Type: Normal",
        abilityc : "Ability: Immunity",
        itemc : "Item: None",
        hpc : "HP: 227",
        atkc : "Atk: 124",
        defc : "Def: 80",
        spatkc : "Sp. Atk: 88",
        spdefc : "Sp. Def: 111",
        spdc : "Spd: 46",
        move1c : "-Body Slam",
        move2c : "-Earthquake",
        move3c : "-Crunch",
        move4c : "-Rest",

        named : "Heracross",
        leveld : "LV: 48",
        typed : "Type: Bug/Fighting",
        abilityd : "Ability: Swarm",
        itemd : "Item: None",
        hpd : "HP: 146",
        atkd : "Atk: 136",
        defd : "Def: 88",
        spatkd : "Sp. Atk: 54",
        spdefd : "Sp. Def: 107",
        spdd : "Spd: 98",
        move1d : "-Aerial Ace",
        move2d : "-Close Combat",
        move3d : "-Night Slash",
        move4d : "-Rock Slide",

        namee : "Roserade",
        levele : "LV: 47",
        typee : "Type: Grass/Poison",
        abilitye : "Ability: Natural Cure",
        iteme : "Item: None",
        hpe : "HP: U/A",
        atke : "Atk: U/A",
        defe : "Def: U/A",
        spatke : "Sp. Atk: U/A",
        spdefe : "Sp. Def: U/A",
        spde : "Spd: U/A",
        move1e : "-Giga Drain",
        move2e : "-GrassWhistle",
        move3e : "-Shadow Ball",
        move4e : "-Poison Jab",

        namef : "Infernape",
        levelf : "LV: 51",
        typef : "Type: Fire/Fighting",
        abilityf : "Ability: Blaze",
        itemf : "Item: None",
        hpf : "HP: U/A",
        atkf : "Atk: U/A",
        deff : "Def: U/A",
        spatkf : "Sp. Atk: U/A",
        spdeff : "Sp. Def: U/A",
        spdf : "Spd: U/A",
        move1f : "-Focus Blast",
        move2f : "-Shadow Claw",
        move3f : "-Flamethrower",
        move4f : "-Aerial Ace",
    },

    {
        namea : "Staraptor",
        levela : "LV: 48",
        typea : "Type: Normal/Flying",
        abilitya : "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 151",
        atka : "Atk: 131",
        defa : "Def: 91",
        spatka : "Sp. Atk: 64",
        spdefa : "Sp. Def: 64",
        spda : "Spd: 100",
        move1a : "-Close Combat",
        move2a : "-Steel Wing",
        move3a : "-Aerial Ace",
        move4a : "-U-Turn",

        nameb : "Rapidash",
        levelb : "LV: 47",
        typeb : "Type: Fire",
        abilityb : "Ability: Run Away",
        itemb : "Item: None",
        hpb : "HP: 129",
        atkb : "Atk: 99",
        defb : "Def: 90",
        spatkb : "Sp. Atk: 91",
        spdefb : "Sp. Def: 91",
        spdb : "Spd: 114",
        move1b : "-Fire Blast",
        move2b : "-Sunny Day",
        move3b : "-Bounce",
        move4b : "-Will-O-Wisp",

        namec : "Snorlax",
        levelc : "LV: 49",
        typec : "Type: Normal",
        abilityc : "Ability: Immunity",
        itemc : "Item: None",
        hpc : "HP: 227",
        atkc : "Atk: 124",
        defc : "Def: 80",
        spatkc : "Sp. Atk: 88",
        spdefc : "Sp. Def: 111",
        spdc : "Spd: 46",
        move1c : "-Body Slam",
        move2c : "-Earthquake",
        move3c : "-Crunch",
        move4c : "-Rest",

        named : "Heracross",
        leveld : "LV: 48",
        typed : "Type: Bug/Fighting",
        abilityd : "Ability: Swarm",
        itemd : "Item: None",
        hpd : "HP: 146",
        atkd : "Atk: 136",
        defd : "Def: 88",
        spatkd : "Sp. Atk: 54",
        spdefd : "Sp. Def: 107",
        spdd : "Spd: 98",
        move1d : "-Aerial Ace",
        move2d : "-Close Combat",
        move3d : "-Night Slash",
        move4d : "-Rock Slide",

        namee : "Roserade",
        levele : "LV: 47",
        typee : "Type: Grass/Poison",
        abilitye : "Ability: Natural Cure",
        iteme : "Item: None",
        hpe : "HP: U/A",
        atke : "Atk: U/A",
        defe : "Def: U/A",
        spatke : "Sp. Atk: U/A",
        spdefe : "Sp. Def: U/A",
        spde : "Spd: U/A",
        move1e : "-Giga Drain",
        move2e : "-GrassWhistle",
        move3e : "-Shadow Ball",
        move4e : "-Poison Jab",

        namef : "Empoleon",
        levelf : "LV: 51",
        typef : "Type: Water/Steel",
        abilityf : "Ability: Torrent",
        itemf : "Item: None",
        hpf : "HP: U/A",
        atkf : "Atk: U/A",
        deff : "Def: U/A",
        spatkf : "Sp. Atk: U/A",
        spdeff : "Sp. Def: U/A",
        spdf : "Spd: U/A",
        move1f : "-Brine",
        move2f : "-Metal Claw",
        move3f : "-Aerial Ace",
        move4f : "-Shadow Claw",
    },

    {
        namea : "Yanmega",
        levela : "LV: 49",
        typea : "Type: Bug/Flying",
        abilitya: "Ability: Speed Boost",
        itema : "Item: None",
        hpa : "HP: 157",
        atka : "Atk: 94",
        defa : "Def: 103",
        spatka : "Sp. Atk: 146",
        spdefa : "Sp. Def: 66",
        spda : "Spd: 112",
        move1a : "-Bug Buzz",
        move2a : "-Air Slash",
        move3a : "-U-Turn",
        move4a : "-Double Team",

        nameb : "Scizor",
        levelb : "LV: 49",
        typeb : "Type: Bug/Steel",
        abilityb: "Ability: Swarm",
        itemb : "Item: None",
        hpb : "HP: 142",
        atkb : "Atk: 147",
        defb : "Def: 105",
        spatkb : "Sp. Atk: 73",
        spdefb : "Sp. Def: 107",
        spdb : "Spd: 83",
        move1b : "-X-Scissor",
        move2b : "-Iron Head",
        move3b : "-Night Slash",
        move4b : "-Quick Attack",

        namec : "Heracross",
        levelc : "LV: 51",
        typec : "Type: Bug/Fighting",
        abilityc: "Ability: Swarm",
        itemc : "Item: None",
        hpc : "HP: 157",
        atkc : "Atk: 161",
        defc : "Def: 96",
        spatkc : "Sp. Atk: 61",
        spdefc : "Sp. Def: 105",
        spdc : "Spd: 107",
        move1c : "-Megahorn",
        move2c : "-Stone Edge",
        move3c : "-Night Slash",
        move4c : "-Close Combat",

        named : "Vespiquen",
        leveld : "LV: 50",
        typed : "Type: Bug/Flying",
        abilityd: "Ability: Pressure",
        itemd : "Item: None",
        hpd : "HP: 145",
        atkd : "Atk: 100",
        defd : "Def: 122",
        spatkd : "Sp. Atk: 90",
        spdefd : "Sp. Def: 134",
        spdd : "Spd: 60",
        move1d : "-Power Gem",
        move2d : "-Attack Order",
        move3d : "-Heal Order",
        move4d : "-Defend Order",

        namee : "Drapion",
        levele : "LV: 53",
        typee : "Type: Poison/Dark",
        abilitye: "Ability: Battle Armor",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 153",
        atke : "Atk: 116",
        defe : "Def: 137",
        spatke : "Sp. Atk: 75",
        spdefe : "Sp. Def: 100",
        spde : "Spd: 133",
        move1e : "-Cross Poison",
        move2e : "-Aerial Ace",
        move3e : "-Ice Fang",
        move4e : "-X-Scissor",
    },

    {
        namea : "Whiscash",
        levela : "LV: 50",
        typea : "Type: Water/Ground",
        abilitya: "Ability: Oblivious",
        itema : "Item: None",
        hpa : "HP: 185",
        atka : "Atk: 98",
        defa : "Def: 83",
        spatka : "Sp. Atk: 105",
        spdefa : "Sp. Def: 91",
        spda : "Spd: 80",
        move1a : "-Earth Power",
        move2a : "-Zen Headbutt",
        move3a : "-Sandstorm",
        move4a : "-Aqua Tail",

        nameb : "Gliscor",
        levelb : "LV: 53",
        typeb : "Type: Ground/Flying",
        abilityb: "Ability: Hyper Cutter",
        itemb : "Item: None",
        hpb : "HP: 158",
        atkb : "Atk: 121",
        defb : "Def: 153",
        spatkb : "Sp. Atk: 68",
        spdefb : "Sp. Def: 100",
        spdb : "Spd: 121",
        move1b : "-Earthquake",
        move2b : "-Fire Fang",
        move3b : "-Ice Fang",
        move4b : "-Thunder Fang",

        namec : "Hippowdon",
        levelc : "LV: 52",
        typec : "Type: Ground",
        abilityc: "Ability: Sand Stream",
        itemc : "Item: None",
        hpc : "HP: 189",
        atkc : "Atk: 137",
        defc : "Def: 143",
        spatkc : "Sp. Atk: 91",
        spdefc : "Sp. Def: 95",
        spdc : "Spd: 69",
        move1c : "-Stone Edge",
        move2c : "-Earthquake",
        move3c : "-Crunch",
        move4c : "-Yawn",

        named : "Golem",
        leveld : "LV: 52",
        typed : "Type: Rock/Ground",
        abilityd: "Ability: Rock Head",
        itemd : "Item: None",
        hpd : "HP: 160",
        atkd : "Atk: 135",
        defd : "Def: 155",
        spatkd : "Sp. Atk: 77",
        spdefd : "Sp. Def: 88",
        spdd : "Spd: 67",
        move1d : "-Sandstorm",
        move2d : "-Fire Punch",
        move3d : "-Earthquake",
        move4d : "-Thunder Punch",

        namee : "Rhyperior",
        levele : "LV: 55",
        typee : "Type: Ground/Rock",
        abilitye: "Ability: Lightningrod",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 208",
        atke : "Atk: 192",
        defe : "Def: 164",
        spatke : "Sp. Atk: 82",
        spdefe : "Sp. Def: 73",
        spde : "Spd: 65",
        move1e : "-Earthquake",
        move2e : "-Rock Wrecker",
        move3e : "-Megahorn",
        move4e : "-Avalanche",

    },

    {
        namea : "Houndoom",
        levela : "LV: 52",
        typea : "Type: Dark/Fire",
        abilitya: "Ability: Early Bird",
        itema : "Item: None",
        hpa : "HP: 155",
        atka : "Atk: 114",
        defa : "Def: 79",
        spatka : "Sp. Atk: 135",
        spdefa : "Sp. Def: 103",
        spda : "Spd: 107",
        move1a : "-Flamethrower",
        move2a : "-Sludge Bomb",
        move3a : "-Dark Pulse",
        move4a : "-Sunny Day",

        nameb : "Flareon",
        levelb : "LV: 55",
        typeb : "Type: Fire",
        abilityb: "Ability: Flash Fire",
        itemb : "Item: None",
        hpb : "HP: 153",
        atkb : "Atk: 164",
        defb : "Def: 87",
        spatkb : "Sp. Atk: 126",
        spdefb : "Sp. Def: 142",
        spdb : "Spd: 93",
        move1b : "-Overheat",
        move2b : "-Giga Impact",
        move3b : "-Quick Attack",
        move4b : "-Will-O-Wisp",
        
        namec : "Rapidash",
        levelc : "LV: 53",
        typec : "Type: Fire",
        abilityc: "Ability: Run Away",
        itemc : "Item: None",
        hpc : "HP: 147",
        atkc : "Atk: 126",
        defc : "Def: 95",
        spatkc : "Sp. Atk: 105",
        spdefc : "Sp. Def: 105",
        spdc : "Spd: 132",
        move1c : "-Flare Blitz",
        move2c : "-Solar Beam",
        move3c : "-Bounce",
        move4c : "-Sunny Day",

        named : "Infernape",
        leveld : "LV: 55",
        typed : "Type: Fire/Fighting",
        abilityd: "Ability: Blaze",
        itemd : "Item: None",
        hpd : "HP: 165",
        atkd : "Atk: 121",
        defd : "Def: 108",
        spatkd : "Sp. Atk: 135",
        spdefd : "Sp. Def: 99",
        spdd : "Spd: 140",
        move1d : "-Flare Blitz",
        move2d : "-Thunder Punch",
        move3d : "-Earthquake",
        move4d : "-Mach Punch",

        namee : "Magmortar",
        levele : "LV: 57",
        typee : "Type: Fire",
        abilitye: "Ability: Flame Body",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 169",
        atke : "Atk: 130",
        defe : "Def: 88",
        spatke : "Sp. Atk: 164",
        spdefe : "Sp. Def: 143",
        spde : "Spd: 116",
        move1e : "-Flamethrower",
        move2e : "-Thunderbolt",
        move3e : "-Solar Beam",
        move4e : "-Hyper Beam",
    },

    {
        namea : "Mr. Mime",
        levela : "LV: 53",
        typea : "Type: Psychic",
        abilitya: "Ability: Soundproof",
        itema : "Item: None",
        hpa : "HP: 121",
        atka : "Atk: 68",
        defa : "Def: 80",
        spatka : "Sp. Atk: 126",
        spdefa : "Sp. Def: 148",
        spda : "Spd: 127",
        move1a : "-Light Screen",
        move2a : "-Reflect",
        move3a : "-Psychic",
        move4a : "-Thunderbolt",

        nameb : "Espeon",
        levelb : "LV: 55",
        typeb : "Type: Psychic",
        abilityb: "Ability: Synchronize",
        itemb : "Item: None",
        hpb : "HP: 153",
        atkb : "Atk: 93",
        defb : "Def: 87",
        spatkb : "Sp. Atk: 164",
        spdefb : "Sp. Def: 126",
        spdb : "Spd: 142",
        move1b : "-Psychic",
        move2b : "-Shadow Ball",
        move3b : "-Quick Attack",
        move4b : "-Signal Beam",

        namec : "Bronzong",
        levelc : "LV: 54",
        typec : "Type: Steel/Psychic",
        abilityc: "Ability: Levitate",
        itemc : "Item: None",
        hpc : "HP: 152",
        atkc : "Atk: 117",
        defc : "Def: 146",
        spatkc : "Sp. Atk: 106",
        spdefc : "Sp. Def: 131",
        spdc : "Spd: 61",
        move1c : "-Gyro Ball",
        move2c : "-Earthquake",
        move3c : "-Psychic",
        move4c : "-Calm Mind",

        named : "Alakazam",
        leveld : "LV: 56",
        typed : "Type: Psychic",
        abilityd: "Ability: Synchronize",
        itemd : "Item: None",
        hpd : "HP: 144",
        atkd : "Atk: 77",
        defd : "Def: 72",
        spatkd : "Sp. Atk: 173",
        spdefd : "Sp. Def: 117",
        spdd : "Spd: 156",
        move1d : "-Recover",
        move2d : "-Psychic",
        move3d : "-Focus Blast",
        move4d : "-Energy Ball",

        namee : "Gallade",
        levele : "LV: 59",
        typee : "Type: Psychic/Fighting",
        abilitye: "Ability: Steadfast",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 166",
        atke : "Atk: 170",
        defe : "Def: 99",
        spatke : "Sp. Atk: 89",
        spdefe : "Sp. Def: 173",
        spde : "Spd: 117",
        move1e : "-Drain Punch",
        move2e : "-Psycho Cut",
        move3e : "-Leaf Blade",
        move4e : "-Stone Edge",
    },

    {
        namea : "Spiritomb",
        levela : "LV: 58",
        typea : "Type: Ghost/Dark",
        abilitya: "Ability: Pressure",
        itema : "Item: None",
        hpa : "HP: 143",
        atka : "Atk: 116",
        defa : "Def: 147",
        spatka : "Sp. Atk: 129",
        spdefa : "Sp. Def: 147",
        spda : "Spd: 69",
        move1a : "-Silver Wind",
        move2a : "-Dark Pulse",
        move3a : "-Psychic",
        move4a : "-Shadow Ball",

        nameb : "Roserade",
        levelb : "LV: 58",
        typeb : "Type: Grass/Poison",
        abilityb: "Ability: Natural Cure",
        itemb : "Item: None",
        hpb : "HP: 155",
        atkb : "Atk: 103",
        defb : "Def: 77",
        spatkb : "Sp. Atk: 183",
        spdefb : "Sp. Def: 144",
        spdb : "Spd: 126",
        move1b : "-Extrasensory",
        move2b : "-Toxic",
        move3b : "-Sludge Bomb",
        move4b : "-Energy Ball",

        namec : "Togekiss",
        levelc : "LV: 60",
        typec : "Type: Normal/Flying",
        abilityc: "Ability: Hustle",
        itemc : "Item: None",
        hpc : "HP: 190",
        atkc : "Atk: 83",
        defc : "Def: 137",
        spatkc : "Sp. Atk: 167",
        spdefc : "Sp. Def: 161",
        spdc : "Spd: 119",
        move1c : "-Air Slash",
        move2c : "-Aura Sphere",
        move3c : "-Water Pulse",
        move4c : "-Shock Wave",

        named : "Lucario",
        leveld : "LV: 60",
        typed : "Type: Fighting/Steel",
        abilityd: "Ability: Steadfast",
        itemd : "Item: None",
        hpd : "HP: 172",
        atkd : "Atk: 155",
        defd : "Def: 107",
        spatkd : "Sp. Atk: 144",
        spdefd : "Sp. Def: 117",
        spdd : "Spd: 131",
        move1d : "-Aura Sphere",
        move2d : "-Extremespeed",
        move3d : "-Shadow Ball",
        move4d : "-Stone Edge",

        namee : "Milotic",
        levele : "LV: 58",
        typee : "Type: Water",
        abilitye: "Ability: Marvel Scale",
        iteme : "Item: None",
        hpe : "HP: 195",
        atke : "Atk: 92",
        defe : "Def: 114",
        spatke : "Sp. Atk: 138",
        spdefe : "Sp. Def: 167",
        spde : "Spd: 116",
        move1e : "-Dragon Pulse",
        move2e : "-Mirror Coat",
        move3e : "-Ice Beam",
        move4e : "-Surf",

        namef : "Garchomp",
        levelf : "LV: 62",
        typef : "Type: Dragon/Ground",
        abilityf: "Ability: Sand Veil",
        itemf : "Item: Sitrus Berry",
        hpf : "HP: 224",
        atkf : "Atk: 184",
        deff : "Def: 141",
        spatkf : "Sp. Atk: 122",
        spdeff : "Sp. Def: 129",
        spdf : "Spd: 150",
        move1f : "-Dragon Rush",
        move2f : "-Earthquake",
        move3f : "-Flamethrower",
        move4f : "-Giga Impact",
    },
]

function displayPTTrainers() {
    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showPTImages(newTrainerId);
        showPokemonPTImages(newTrainerId);
    }

    let ptTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = pt_trainers [ptTrainer].namea;
    document.querySelector('#level1').textContent = pt_trainers [ptTrainer].levela;
    document.querySelector('#type1').textContent = pt_trainers [ptTrainer].typea;
    document.querySelector('#ability1').textContent= pt_trainers [ptTrainer].abilitya;
    document.querySelector('#item1').textContent = pt_trainers [ptTrainer].itema;
    document.querySelector('#hp1').textContent = pt_trainers [ptTrainer].hpa;
    document.querySelector('#atk1').textContent = pt_trainers [ptTrainer].atka;
    document.querySelector('#def1').textContent = pt_trainers [ptTrainer].defa;
    document.querySelector('#spatk1').textContent = pt_trainers [ptTrainer].spatka;
    document.querySelector('#spdef1').textContent = pt_trainers [ptTrainer].spdefa;
    document.querySelector('#spd1').textContent = pt_trainers [ptTrainer].spda;
    document.querySelector('#move1_1').textContent = pt_trainers [ptTrainer].move1a;
    document.querySelector('#move2_1').textContent = pt_trainers [ptTrainer].move2a;
    document.querySelector('#move3_1').textContent = pt_trainers [ptTrainer].move3a;
    document.querySelector('#move4_1').textContent = pt_trainers [ptTrainer].move4a;

    
    document.querySelector('#name2').textContent = pt_trainers [ptTrainer].nameb;
    document.querySelector('#level2').textContent = pt_trainers [ptTrainer].levelb;
    document.querySelector('#type2').textContent = pt_trainers [ptTrainer].typeb;
    document.querySelector('#ability2').textContent= pt_trainers [ptTrainer].abilityb;
    document.querySelector('#item2').textContent = pt_trainers [ptTrainer].itemb;
    document.querySelector('#hp2').textContent = pt_trainers [ptTrainer].hpb;
    document.querySelector('#atk2').textContent = pt_trainers [ptTrainer].atkb;
    document.querySelector('#def2').textContent = pt_trainers [ptTrainer].defb;
    document.querySelector('#spatk2').textContent = pt_trainers [ptTrainer].spatkb;
    document.querySelector('#spdef2').textContent = pt_trainers [ptTrainer].spdefb;
    document.querySelector('#spd2').textContent = pt_trainers [ptTrainer].spdb;
    document.querySelector('#move1_2').textContent = pt_trainers [ptTrainer].move1b;
    document.querySelector('#move2_2').textContent = pt_trainers [ptTrainer].move2b;
    document.querySelector('#move3_2').textContent = pt_trainers [ptTrainer].move3b;
    document.querySelector('#move4_2').textContent = pt_trainers [ptTrainer].move4b;

    document.querySelector('#name3').textContent = pt_trainers [ptTrainer].namec;
    document.querySelector('#level3').textContent = pt_trainers [ptTrainer].levelc;
    document.querySelector('#type3').textContent = pt_trainers [ptTrainer].typec;
    document.querySelector('#ability3').textContent= pt_trainers [ptTrainer].abilityc;
    document.querySelector('#item3').textContent = pt_trainers [ptTrainer].itemc;
    document.querySelector('#hp3').textContent = pt_trainers [ptTrainer].hpc;
    document.querySelector('#atk3').textContent = pt_trainers [ptTrainer].atkc;
    document.querySelector('#def3').textContent = pt_trainers [ptTrainer].defc;
    document.querySelector('#spatk3').textContent = pt_trainers [ptTrainer].spatkc;
    document.querySelector('#spdef3').textContent = pt_trainers [ptTrainer].spdefc;
    document.querySelector('#spd3').textContent = pt_trainers [ptTrainer].spdc;
    document.querySelector('#move1_3').textContent = pt_trainers [ptTrainer].move1c;
    document.querySelector('#move2_3').textContent = pt_trainers [ptTrainer].move2c;
    document.querySelector('#move3_3').textContent = pt_trainers [ptTrainer].move3c;
    document.querySelector('#move4_3').textContent = pt_trainers [ptTrainer].move4c;

    document.querySelector('#name4').textContent = pt_trainers [ptTrainer].named;
    document.querySelector('#level4').textContent = pt_trainers [ptTrainer].leveld;
    document.querySelector('#type4').textContent = pt_trainers [ptTrainer].typed;
    document.querySelector('#ability4').textContent= pt_trainers [ptTrainer].abilityd;
    document.querySelector('#item4').textContent = pt_trainers [ptTrainer].itemd;
    document.querySelector('#hp4').textContent = pt_trainers [ptTrainer].hpd;
    document.querySelector('#atk4').textContent = pt_trainers [ptTrainer].atkd;
    document.querySelector('#def4').textContent = pt_trainers [ptTrainer].defd;
    document.querySelector('#spatk4').textContent = pt_trainers [ptTrainer].spatkd;
    document.querySelector('#spdef4').textContent = pt_trainers [ptTrainer].spdefd;
    document.querySelector('#spd4').textContent = pt_trainers [ptTrainer].spdd;
    document.querySelector('#move1_4').textContent = pt_trainers [ptTrainer].move1d;
    document.querySelector('#move2_4').textContent = pt_trainers [ptTrainer].move2d;
    document.querySelector('#move3_4').textContent = pt_trainers [ptTrainer].move3d;
    document.querySelector('#move4_4').textContent = pt_trainers [ptTrainer].move4d;

    document.querySelector('#name5').textContent = pt_trainers [ptTrainer].namee;
    document.querySelector('#level5').textContent = pt_trainers [ptTrainer].levele;
    document.querySelector('#type5').textContent = pt_trainers [ptTrainer].typee;
    document.querySelector('#ability5').textContent= pt_trainers [ptTrainer].abilitye;
    document.querySelector('#item5').textContent = pt_trainers [ptTrainer].iteme;
    document.querySelector('#hp5').textContent = pt_trainers [ptTrainer].hpe;
    document.querySelector('#atk5').textContent = pt_trainers [ptTrainer].atke;
    document.querySelector('#def5').textContent = pt_trainers [ptTrainer].defe;
    document.querySelector('#spatk5').textContent = pt_trainers [ptTrainer].spatke;
    document.querySelector('#spdef5').textContent = pt_trainers [ptTrainer].spdefe;
    document.querySelector('#spd5').textContent = pt_trainers [ptTrainer].spde;
    document.querySelector('#move1_5').textContent = pt_trainers [ptTrainer].move1e;
    document.querySelector('#move2_5').textContent = pt_trainers [ptTrainer].move2e;
    document.querySelector('#move3_5').textContent = pt_trainers [ptTrainer].move3e;
    document.querySelector('#move4_5').textContent = pt_trainers [ptTrainer].move4e;

    document.querySelector('#name6').textContent = pt_trainers [ptTrainer].namef;
    document.querySelector('#level6').textContent = pt_trainers [ptTrainer].levelf;
    document.querySelector('#type6').textContent = pt_trainers [ptTrainer].typef;
    document.querySelector('#ability6').textContent= pt_trainers [ptTrainer].abilityf;
    document.querySelector('#item6').textContent = pt_trainers [ptTrainer].itemf;
    document.querySelector('#hp6').textContent = pt_trainers [ptTrainer].hpf;
    document.querySelector('#atk6').textContent = pt_trainers [ptTrainer].atkf;
    document.querySelector('#def6').textContent = pt_trainers [ptTrainer].deff;
    document.querySelector('#spatk6').textContent = pt_trainers [ptTrainer].spatkf;
    document.querySelector('#spdef6').textContent = pt_trainers [ptTrainer].spdeff;
    document.querySelector('#spd6').textContent = pt_trainers [ptTrainer].spdf;
    document.querySelector('#move1_6').textContent = pt_trainers [ptTrainer].move1f;
    document.querySelector('#move2_6').textContent = pt_trainers [ptTrainer].move2f;
    document.querySelector('#move3_6').textContent = pt_trainers [ptTrainer].move3f;
    document.querySelector('#move4_6').textContent = pt_trainers [ptTrainer].move4f;
}

function showPTImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/pt/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonPTImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/pt/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/pt/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/pt/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/pt/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/pt/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/pt/" + trainerId + "_6.png";

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

    refCredit.textContent = "MoneyHypeMike and majorkatsuragi"
    refCredit.href = "https://www.dropbox.com/sh/9tfr2gxm9tabxjk/AAA-K8XULd16TQf_uLfSQaFda?preview=Pok%C3%A9mon+Platinum+-+Script+File+(Piplup).xlsx"
}

roarkPT.addEventListener('click', displayPTTrainers);
marsPT.addEventListener('click', displayPTTrainers);
gardeniaPT.addEventListener('click', displayPTTrainers);
jupiterPT.addEventListener('click', displayPTTrainers);
maylenePT.addEventListener('click', displayPTTrainers);
crasherwakePT.addEventListener('click', displayPTTrainers);
fantinaPT.addEventListener('click', displayPTTrainers);
byronPT.addEventListener('click', displayPTTrainers);
candicePT.addEventListener('click', displayPTTrainers);
cyrusPT.addEventListener('click', displayPTTrainers);
volknerPT.addEventListener('click', displayPTTrainers);
barry2GPT.addEventListener("click", displayPTTrainers);
barry2FPT.addEventListener("click", displayPTTrainers);
barry2WPT.addEventListener("click", displayPTTrainers);
aaronPT.addEventListener('click', displayPTTrainers);
berthaPT.addEventListener('click', displayPTTrainers);
flintPT.addEventListener('click', displayPTTrainers);
lucianPT.addEventListener('click', displayPTTrainers);
cynthiaPT.addEventListener('click', displayPTTrainers);