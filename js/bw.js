let cilanBW = document.querySelector ("#cilan1");
let chiliBW = document.querySelector ("#cress1");
let cressBW = document.querySelector ("#chili1");
let lenoraBW = document.querySelector ("#lenora1");
let burghBW = document.querySelector ("#burgh1");
let elesaBW = document.querySelector ("#elesa1");
let clayBW = document.querySelector ("#clay1");
let skylaBW = document.querySelector ("#skyla1");
let brycenBW = document.querySelector ("#brycen1");
let draydenBW = document.querySelector ("#drayden1");
let irisBW = document.querySelector ("#iris1");
let shauntalBW = document.querySelector ("#shauntal1");
let marshalBW = document.querySelector ("#marshal1");
let grimsleyBW = document.querySelector ("#grimsley1");
let caitlinBW = document.querySelector ("#caitlin1");
let nBBW = document.querySelector ("#n1_b");
let nWBW = document.querySelector ("#n1_w");
let ghetsisBW = document.querySelector ("#ghetsis1");


let bw_trainers = [
    {
        namea : "Lillipup",
        levela : "LV: 12",
        typea : "Type: Normal",
        abilitya: "Ability: Pickup",
        itema : "Item: None",
        hpa : "HP: U/A",
        atka : "Atk: U/A",
        defa : "Def: U/A",
        spatka : "Sp. Atk: U/A",
        spdefa : "Sp. Def: U/A",
        spda : "Spd: U/A",
        move1a : "-Bite",
        move2a : "-Work Up",
        move3a : "",
        move4a : "",

        nameb : "Pansage",
        levelb : "LV: 14",
        typeb : "Type: Grass",
        abilityb: "Ability: Gluttony",
        itemb : "Item: None",
        hpb : "HP: U/A",
        atkb : "Atk: U/A",
        defb : "Def: U/A",
        spatkb : "Sp. Atk: U/A",
        spdefb : "Sp. Def: U/A",
        spdb : "Spd: U/A",
        move1b : "-Vine Whip",
        move2b : "-Work Up",
        move3b : "",
        move4b : "",
    },

    {
        namea : "Lillipup",
        levela : "LV: 12",
        typea : "Type: Normal",
        abilitya: "Ability: Pickup",
        itema : "Item: None",
        hpa : "HP: 33",
        atka : "Atk: 20",
        defa : "Def: 16",
        spatka : "Sp. Atk: 9",
        spdefa : "Sp. Def: 17",
        spda : "Spd: 18",
        move1a : "-Bite",
        move2a : "-Work Up",
        move3a : "",
        move4a : "",

        nameb : "Pansear",
        levelb : "LV: 14",
        typeb : "Type: Fire",
        abilityb: "Ability: Gluttony",
        itemb : "Item: None",
        hpb : "HP: 39",
        atkb : "Atk: 21",
        defb : "Def: 20",
        spatkb : "Sp. Atk: 21",
        spdefb : "Sp. Def: 18",
        spdb : "Spd: 26",
        move1b : "-Incinerate",
        move2b : "-Work Up",
        move3b : "",
        move4b : "",
    },

    {
        namea : "Lillipup",
        levela : "LV: 12",
        typea : "Type: Normal",
        abilitya: "Ability: Pickup",
        itema : "Item: None",
        hpa : "HP: 33",
        atka : "Atk: 20",
        defa : "Def: 17",
        spatka : "Sp. Atk: 11",
        spdefa : "Sp. Def: 14",
        spda : "Spd: 18",
        move1a : "-Bite",
        move2a : "-Work Up",
        move3a : "",
        move4a : "",

        nameb : "Panpour",
        levelb : "LV: 14",
        typeb : "Type: Water",
        abilityb: "Ability: Gluttony",
        itemb : "Item: None",
        hpb : "HP: 39",
        atkb : "Atk: 23",
        defb : "Def: 20",
        spatkb : "Sp. Atk: 18",
        spdefb : "Sp. Def: 20",
        spdb : "Spd: 24",
        move1b : "-Water Gun",
        move2b : "-Work Up",
        move3b : "",
        move4b : "",
    },

    {
        namea : "Herdier",
        levela : "LV: 18",
        typea : "Type: Normal",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 52",
        atka : "Atk: 37",
        defa : "Def: 29",
        spatka : "Sp. Atk: 16",
        spdefa : "Sp. Def: 29",
        spda : "Spd: 27",
        move1a : "-Take Down",
        move2a : "-Bite",
        move3a : "-Retaliate",
        move4a : "-Leer",

        nameb : "Watchog",
        levelb : "LV: 20",
        typeb : "Type: Normal",
        abilityb: "Ability: Illuminate",
        itemb : "Item: None",
        hpb : "HP: 56",
        atkb : "Atk: 36",
        defb : "Def: 35",
        spatkb : "Sp. Atk: 34",
        spdefb : "Sp. Def: 35",
        spdb : "Spd: 38",
        move1b : "-Leer",
        move2b : "-Crunch",
        move3b : "-Retaliate",
        move4b : "-Hypnosis",
    },

    {
        namea : "Whirlipede",
        levela : "LV: 21",
        typea : "Type: Bug/Poison",
        abilitya: "Ability: Swarm",
        itema : "Item: None",
        hpa : "HP: 50",
        atka : "Atk: 30",
        defa : "Def: 49",
        spatka : "Sp. Atk: 26",
        spdefa : "Sp. Def: 40",
        spda : "Spd: 24",
        move1a : "-Screech",
        move2a : "-Pursuit",
        move3a : "-Poison Tail",
        move4a : "-Struggle Bug",

        nameb : "Dwebble",
        levelb : "LV: 21",
        typeb : "Type: Bug/Rock",
        abilityb: "Ability: Shell Armor",
        itemb : "Item: None",
        hpb : "HP: 54",
        atkb : "Atk: 30",
        defb : "Def: 43",
        spatkb : "Sp. Atk: 22",
        spdefb : "Sp. Def: 24",
        spdb : "Spd: 30",
        move1b : "-Sand Attack",
        move2b : "-Feint Attack",
        move3b : "-Smack Down",
        move4b : "-Struggle Bug",

        namec : "Leavanny",
        levelc : "LV: 23",
        typec : "Type: Bug/Grass",
        abilityc: "Ability: Swarm",
        itemc : "Item: None",
        hpc : "HP: 71",
        atkc : "Atk: 56",
        defc : "Def: 49",
        spatkc : "Sp. Atk: 41",
        spdefc : "Sp. Def: 41",
        spdc : "Spd: 45",
        move1c : "-Protect",
        move2c : "-String Shot",
        move3c : "-Razor Leaf",
        move4c : "-Struggle Bug",
    },

    {
        namea : "Emolga",
        levela : "LV: 25",
        typea : "Type: Electic/Flying",
        abilitya: "Ability: Static",
        itema : "Item: None",
        hpa : "HP: 65",
        atka : "Atk: 40",
        defa : "Def: 38",
        spatka : "Sp. Atk: 45",
        spdefa : "Sp. Def: 38",
        spda : "Spd: 64",
        move1a : "-Volt Switch",
        move2a : "-Quick Attack",
        move3a : "-Pursuit",
        move4a : "-Aerial Ace",

        nameb : "Emolga",
        levelb : "LV: 25",
        typeb : "Type: Electric/Flying",
        abilityb: "Ability: Static",
        itemb : "Item: None",
        hpb : "HP: 65",
        atkb : "Atk: 40",
        defb : "Def: 38",
        spatkb : "Sp. Atk: 45",
        spdefb : "Sp. Def: 38",
        spdb : "Spd: 64",
        move1b : "-Volt Switch",
        move2b : "-Quick Attack",
        move3b : "-Pursuit",
        move4b : "-Aerial Ace",

        namec : "Zebstrika",
        levelc : "LV: 27",
        typec : "Type: Electric",
        abilityc: "Ability: Lightning Rod",
        itemc : "Item: None",
        hpc : "HP: 82",
        atkc : "Atk: 69",
        defc : "Def: 38",
        spatkc : "Sp. Atk: 53",
        spdefc : "Sp. Def: 43",
        spdc : "Spd: 72",
        move1c : "-Quick Attack",
        move2c : "-Volt Switch",
        move3c : "-Flame Charge",
        move4c : "-Spark",
    },

    {
        namea : "Krokorok",
        levela : "LV: 29",
        typea : "Type: Ground/Dark",
        abilitya: "Ability: Moxie",
        itema : "Item: None",
        hpa : "HP: 77",
        atka : "Atk: 50",
        defa : "Def: 37",
        spatka : "Sp. Atk: 34",
        spdefa : "Sp. Def: 34",
        spda : "Spd: 51",
        move1a : "-Bulldoze",
        move2a : "-Torment",
        move3a : "-Crunch",
        move4a : "-Swagger",

        nameb : "Palpitoad",
        levelb : "LV: 29",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Swift Swim",
        itemb : "Item: None",
        hpb : "HP: 85",
        atkb : "Atk: 46",
        defb : "Def: 40",
        spatkb : "Sp. Atk: 41",
        spdefb : "Sp. Def: 44",
        spdb : "Spd: 48",
        move1b : "-Bulldoze",
        move2b : "-Aqua Ring",
        move3b : "-Bubble Beam",
        move4b : "-Muddy Water",

        namec : "Excadrill",
        levelc : "LV: 31",
        typec : "Type: Ground/Steel",
        abilityc: "Ability: Sand Rush",
        itemc : "Item: None",
        hpc : "HP: 114",
        atkc : "Atk: 94",
        defc : "Def: 47",
        spatkc : "Sp. Atk: 41",
        spdefc : "Sp. Def: 50",
        spdc : "Spd: 65",
        move1c : "-Bulldoze",
        move2c : "-Slash",
        move3c : "-Rock Slide",
        move4c : "-Hone Claws",
    },

    {
        namea : "Swoobat",
        levela : "LV: 33",
        typea : "Type: Psychic/Flying",
        abilitya: "Ability: Unaware",
        itema : "Item: None",
        hpa : "HP: 91",
        atka : "Atk: 50",
        defa : "Def: 45",
        spatka : "Sp. Atk: 53",
        spdefa : "Sp. Def: 45",
        spda : "Spd: 84",
        move1a : "-Acrobatics",
        move2a : "-Heart Stamp",
        move3a : "-Assurance",
        move4a : "-Amnesia",

        nameb : "Unfezant",
        levelb : "LV: 33",
        typeb : "Type: Normal/Flying",
        abilityb: "Ability: Big Pecks",
        itemb : "Item: None",
        hpb : "HP: 99",
        atkb : "Atk: 78",
        defb : "Def: 67",
        spatkb : "Sp. Atk: 51",
        spdefb : "Sp. Def: 40",
        spdb : "Spd: 70",
        move1b : "-Quick Attack",
        move2b : "-Leer",
        move3b : "-Air Slash",
        move4b : "-Razor Wind",

        namec : "Swanna",
        levelc : "LV: 35",
        typec : "Type: Water/Flying",
        abilityc: "Ability: Keen Eye",
        itemc : "Item: None",
        hpc : "HP: 103",
        atkc : "Atk: 72",
        defc : "Def: 55",
        spatkc : "Sp. Atk: 64",
        spdefc : "Sp. Def: 60",
        spdc : "Spd: 79",
        move1c : "-Air Slash",
        move2c : "-Bubble Beam",
        move3c : "-Aerial Ace",
        move4c : "-Aqua Ring",
    },

    {
        namea : "Vanillish",
        levela : "LV: 37",
        typea : "Type: Ice",
        abilitya: "Ability: Ice Body",
        itema : "Item: None",
        hpa : "HP: 91",
        atka : "Atk: 59",
        defa : "Def: 59",
        spatka : "Sp. Atk: 63",
        spdefa : "Sp. Def: 67",
        spda : "Spd: 60",
        move1a : "-Acid Armor",
        move2a : "-Astonish",
        move3a : "-Mirror Shot",
        move4a : "-Frost Breath",

        nameb : "Cryogonal",
        levelb : "LV: 37",
        typeb : "Type: Ice",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: 105",
        atkb : "Atk: 48",
        defb : "Def: 36",
        spatkb : "Sp. Atk: 72",
        spdefb : "Sp. Def: 111",
        spdb : "Spd: 89",
        move1b : "-Reflect",
        move2b : "-Rapid Spin",
        move3b : "-Aurora Beam",
        move4b : "-Frost Breath",

        namec : "Beartic",
        levelc : "LV: 39",
        typec : "Type: Ice",
        abilityc: "Ability: Snow Cloak",
        itemc : "Item: None",
        hpc : "HP: 132",
        atkc : "Atk: 90",
        defc : "Def: 76",
        spatkc : "Sp. Atk: 68",
        spdefc : "Sp. Def: 83",
        spdc : "Spd: 53",
        move1c : "-Swagger",
        move2c : "-Brine",
        move3c : "-Slash",
        move4c : "-Icicle Crash",
    },

    {
        namea : "Fraxure",
        levela : "LV: 41",
        typea : "Type: Dragon",
        abilitya: "Ability: Rivalry",
        itema : "Item: None",
        hpa : "HP: 112",
        atka : "Atk: 118",
        defa : "Def: 69",
        spatka : "Sp. Atk: 40",
        spdefa : "Sp. Def: 53",
        spda : "Spd: 67",
        move1a : "-Dragon Dance",
        move2a : "-Dragon Rage",
        move3a : "-Assurance",
        move4a : "-Dragon Tail",

        nameb : "Druddigon",
        levelb : "LV: 41",
        typeb : "Type: Dragon",
        abilityb: "Ability: Rough Skin",
        itemb : "Item: None",
        hpb : "HP: 121",
        atkb : "Atk: 110",
        defb : "Def: 94",
        spatkb : "Sp. Atk: 54",
        spdefb : "Sp. Def: 86",
        spdb : "Spd: 51",
        move1b : "-Revenge",
        move2b : "-Chip Away",
        move3b : "-Night Slash",
        move4b : "-Dragon Tail",

        namec : "Haxorus",
        levelc : "LV: 43",
        typec : "Type: Dragon",
        abilityc: "Ability: Rivalry",
        itemc : "Item: None",
        hpc : "HP: 128",
        atkc : "Atk: 141",
        defc : "Def: 82",
        spatkc : "Sp. Atk: 66",
        spdefc : "Sp. Def: 82",
        spdc : "Spd: 98",
        move1c : "-Dragon Dance",
        move2c : "-Assurance",
        move3c : "-Slash",
        move4c : "-Dragon Tail",
    },

    {
        namea : "Fraxure",
        levela : "LV: 41",
        typea : "Type: Dragon",
        abilitya: "Ability: Rivalry",
        itema : "Item: None",
        hpa : "HP: U/A",
        atka : "Atk: U/A",
        defa : "Def: U/A",
        spatka : "Sp. Atk: U/A",
        spdefa : "Sp. Def: U/A",
        spda : "Spd: U/A",
        move1a : "-Dragon Dance",
        move2a : "-Dragon Rage",
        move3a : "-Assurance",
        move4a : "-Dragon Tail",

        nameb : "Druddigon",
        levelb : "LV: 41",
        typeb : "Type: Dragon",
        abilityb: "Ability: Sheer Force",
        itemb : "Item: None",
        hpb : "HP: U/A",
        atkb : "Atk: U/A",
        defb : "Def: U/A",
        spatkb : "Sp. Atk: U/A",
        spdefb : "Sp. Def: U/A",
        spdb : "Spd: U/A",
        move1b : "-Revenge",
        move2b : "-Chip Away",
        move3b : "-Night Slash",
        move4b : "-Dragon Tail",

        namec : "Haxorus",
        levelc : "LV: 43",
        typec : "Type: Dragon",
        abilityc: "Ability: Mold Breaker",
        itemc : "Item: None",
        hpc : "HP: U/A",
        atkc : "Atk: U/A",
        defc : "Def: U/A",
        spatkc : "Sp. Atk: U/A",
        spdefc : "Sp. Def: U/A",
        spdc : "Spd: U/A",
        move1c : "-Dragon Dance",
        move2c : "-Assurance",
        move3c : "-Slash",
        move4c : "-Dragon Tail",
    },

    {
        namea : "Cofagrigus",
        levela : "LV: 48",
        typea : "Type: Ghost",
        abilitya: "Ability: Mummy",
        itema : "Item: None",
        hpa : "HP: 125",
        atka : "Atk: 64",
        defa : "Def: 139",
        spatka : "Sp. Atk: 107",
        spdefa : "Sp. Def: 128",
        spda : "Spd: 45",
        move1a : "-Psychic",
        move2a : "-Will-O-Wisp",
        move3a : "-Shadow Ball",
        move4a : "-Grass Knot",

        nameb : "Jellicent",
        levelb : "LV: 48",
        typeb : "Type: Water/Ghost",
        abilityb: "Ability: Cursed Body",
        itemb : "Item: None",
        hpb : "HP: 165",
        atkb : "Atk: 74",
        defb : "Def: 83",
        spatkb : "Sp. Atk: 98",
        spdefb : "Sp. Def: 128",
        spdb : "Spd: 88",
        move1b : "-Surf",
        move2b : "-Shadow Ball",
        move3b : "-Brine",
        move4b : "-Energy Ball",

        namec : "Golurk",
        levelc : "LV: 48",
        typec : "Type: Ghost/Ground",
        abilityc: "Ability: Iron Fist",
        itemc : "Item: None",
        hpc : "HP: 154",
        atkc : "Atk: 135",
        defc : "Def: 93",
        spatkc : "Sp. Atk: 69",
        spdefc : "Sp. Def: 93",
        spdc : "Spd: 69",
        move1c : "-Earthquake",
        move2c : "-Shadow Punch",
        move3c : "-Brick Break",
        move4c : "-Curse",

        named : "Chandelure",
        leveld : "LV: 50",
        typed : "Type: Ghost/Fire",
        abilityd: "Ability: Flame Body",
        itemd : "Item: None",
        hpd : "HP: 135",
        atkd : "Atk: 75",
        defd : "Def: 110",
        spatkd : "Sp. Atk: 148",
        spdefd : "Sp. Def: 121",
        spdd : "Spd: 100",
        move1d : "-Fire Blast",
        move2d : "-Shadow Ball",
        move3d : "-Psychic",
        move4d : "-Payback",
    },

    {
        namea : "Throh",
        levela : "LV: 48",
        typea : "Type: Fighting",
        abilitya: "Ability: Guts",
        itema : "Item: None",
        hpa : "HP: 184",
        atka : "Atk: 112",
        defa : "Def: 107",
        spatka : "Sp. Atk: 45",
        spdefa : "Sp. Def: 88",
        spda : "Spd: 59",
        move1a : "-Stone Edge",
        move2a : "-Payback",
        move3a : "-Bulldoze",
        move4a : "-Storm Throw",

        nameb : "Sawk",
        levelb : "LV: 48",
        typeb : "Type: Fighting",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 141",
        atkb : "Atk: 136",
        defb : "Def: 79",
        spatkb : "Sp. Atk: 45",
        spdefb : "Sp. Def: 88",
        spdb : "Spd: 107",
        move1b : "-Stone Edge",
        move2b : "-Karate Chop",
        move3b : "-Grass Knot",
        move4b : "-Retaliate",

        namec : "Conkeldurr",
        levelc : "LV: 48",
        typec : "Type: Fighting",
        abilityc: "Ability: Sheer Force",
        itemc : "Item: None",
        hpc : "HP: 170",
        atkc : "Atk: 165",
        defc : "Def: 107",
        spatkc : "Sp. Atk: 69",
        spdefc : "Sp. Def: 70",
        spdc : "Spd: 59",
        move1c : "-Stone Edge",
        move2c : "-Hammer Arm",
        move3c : "-Retaliate",
        move4c : "-Grass Knot",

        named : "Mienshao",
        leveld : "LV: 50",
        typed : "Type: Fighting",
        abilityd: "Ability: Inner Focus",
        itemd : "Item: None",
        hpd : "HP: 140",
        atkd : "Atk: 145",
        defd : "Def: 88",
        spatkd : "Sp. Atk: 115",
        spdefd : "Sp. Def: 80",
        spdd : "Spd: 112",
        move1d : "-U-Turn",
        move2d : "-Jump Kick",
        move3d : "-Rock Slide",
        move4d : "-Retaliate",
    },

    {
        namea : "Scrafty",
        levela : "LV: 48",
        typea : "Type: Dark/Fighting",
        abilitya: "Ability: Moxie",
        itema : "Item: None",
        hpa : "HP: 131",
        atka : "Atk: 91",
        defa : "Def: 138",
        spatka : "Sp. Atk: 59",
        spdefa : "Sp. Def: 126",
        spda : "Spd: 72",
        move1a : "-Sand Attack",
        move2a : "-Crunch",
        move3a : "-Poison Jab",
        move4a : "-Brick Break",

        nameb : "Krookodile",
        levelb : "LV: 48",
        typeb : "Type: Ground/Dark",
        abilityb: "Ability: Intimidate",
        itemb : "Item: None",
        hpb : "HP: 160",
        atkb : "Atk: 128",
        defb : "Def: 83",
        spatkb : "Sp. Atk: 78",
        spdefb : "Sp. Def: 74",
        spdb : "Spd: 114",
        move1b : "-Foul Play",
        move2b : "-Crunch",
        move3b : "-Dragon Claw",
        move4b : "-Earthquake",

        namec : "Liepard",
        levelc : "LV: 48",
        typec : "Type: Dark",
        abilityc: "Ability: Limber",
        itemc : "Item: None",
        hpc : "HP: 130",
        atkc : "Atk: 101",
        defc : "Def: 64",
        spatkc : "Sp. Atk: 101",
        spdefc : "Sp. Def: 64",
        spdc : "Spd: 118",
        move1c : "-Fake Out",
        move2c : "-Night Slash",
        move3c : "-Aerial Ace",
        move4c : "-Attract",

        named : "Bisharp",
        leveld : "LV: 50",
        typed : "Type: Dark/Steel",
        abilityd: "Ability: Defiant",
        itemd : "Item: None",
        hpd : "HP: 140",
        atkd : "Atk: 145",
        defd : "Def: 120",
        spatkd : "Sp. Atk: 80",
        spdefd : "Sp. Def: 90",
        spdd : "Spd: 90",
        move1d : "-Night Slash",
        move2d : "-Aerial Ace",
        move3d : "-Metal Claw",
        move4d : "-X-Scissor",
    },

    {
        namea : "Reuniclus",
        levela : "LV: 48",
        typea : "Type: Psychic",
        abilitya: "Ability: Magic Guard",
        itema : "Item: None",
        hpa : "HP: 175",
        atka : "Atk: 78",
        defa : "Def: 88",
        spatka : "Sp. Atk: 149",
        spdefa : "Sp. Def: 88",
        spda : "Spd: 45",
        move1a : "-Thunder",
        move2a : "-Focus Blast",
        move3a : "-Energy Ball",
        move4a : "-Psychic",

        nameb : "Musharna",
        levelb : "LV: 48",
        typeb : "Type: Psychic",
        abilityb: "Ability: Synchronize",
        itemb : "Item: None",
        hpb : "HP: 180",
        atkb : "Atk: 62",
        defb : "Def: 98",
        spatkb : "Sp. Atk: 119",
        spdefb : "Sp. Def: 117",
        spdb : "Spd: 44",
        move1b : "-Psychic",
        move2b : "-Shadow Ball",
        move3b : "-Charge Beam",
        move4b : "-Reflect",

        namec : "Sigilyph",
        levelc : "LV: 48",
        typec : "Type: Psychic/Flying",
        abilityc: "Ability: Wonder Skin",
        itemc : "Item: None",
        hpc : "HP: 138",
        atkc : "Atk: 72",
        defc : "Def: 93",
        spatkc : "Sp. Atk: 126",
        spdefc : "Sp. Def: 83",
        spdc : "Spd: 109",
        move1c : "-Psychic",
        move2c : "-Air Slash",
        move3c : "-Ice Beam",
        move4c : "-Shadow Ball",

        named : "Gothitelle",
        leveld : "LV: 50",
        typed : "Type: Psychic",
        abilityd: "Ability: Frisk",
        itemd : "Item: None",
        hpd : "HP: 145",
        atkd : "Atk: 75",
        defd : "Def: 126",
        spatkd : "Sp. Atk: 115",
        spdefd : "Sp. Def: 130",
        spdd : "Spd: 76",
        move1d : "-Calm Mind",
        move2d : "-Psychic",
        move3d : "-Thunderbolt",
        move4d : "-Shadow Ball",
    },

    {
        namea : "Zekrom",
        levela : "LV: 52",
        typea : "Type: Dragon/Electric",
        abilitya: "Ability: Teravolt",
        itema : "Item: None",
        hpa : "HP: 181",
        atka : "Atk: 158",
        defa : "Def: 145",
        spatka : "Sp. Atk: 145",
        spdefa : "Sp. Def: 124",
        spda : "Spd: 125",
        move1a : "-Fusion Bolt",
        move2a : "-Zen Headbutt",
        move3a : "-Giga Impact",
        move4a : "-Light Screen",

        nameb : "Carracosta",
        levelb : "LV: 50",
        typeb : "Type: Water/Rock",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 149",
        atkb : "Atk: 140",
        defb : "Def: 153",
        spatkb : "Sp. Atk: 92",
        spdefb : "Sp. Def: 85",
        spdb : "Spd: 52",
        move1b : "-Stone Edge",
        move2b : "-Aqua Jet",
        move3b : "-Crunch",
        move4b : "-Waterfall",

        namec : "Vanilluxe",
        levelc : "LV: 50",
        typec : "Type: Ice",
        abilityc: "Ability: Ice Body",
        itemc : "Item: None",
        hpc : "HP: 146",
        atkc : "Atk: 115",
        defc : "Def: 105",
        spatkc : "Sp. Atk: 130",
        spdefc : "Sp. Def: 103",
        spdc : "Spd: 108",
        move1c : "-Blizzard",
        move2c : "-Hail",
        move3c : "-Flash Cannon",
        move4c : "-Frost Breath",

        named : "Archeops",
        leveld : "LV: 50",
        typed : "Type: Rock/Flying",
        abilityd: "Ability: Defeatist",
        itemd : "Item: None",
        hpd : "HP: 150",
        atkd : "Atk: 160",
        defd : "Def: 93",
        spatkd : "Sp. Atk: 118",
        spdefd : "Sp. Def: 85",
        spdd : "Spd: 130",
        move1d : "-Stone Edge",
        move2d : "-Acrobatics",
        move3d : "-Dragon Claw",
        move4d : "-Crunch",

        namee : "Zoroark",
        levele : "LV: 50",
        typee : "Type: Dark",
        abilitye: "Ability: Illusion",
        iteme : "Item: None",
        hpe : "HP: 135",
        atke : "Atk: 125",
        defe : "Def: 80",
        spatke : "Sp. Atk: 140",
        spdefe : "Sp. Def: 80",
        spde : "Spd: 125",
        move1e : "-Flamethrower",
        move2e : "-Focus Blast",
        move3e : "-Night Slash",
        move4e : "-Retaliate",

        namef : "Klingklang",
        levelf : "LV: 50",
        typef : "Type: Steel",
        abilityf: "Ability: Plus",
        itemf : "Item: None",
        hpf : "HP: 135",
        atkf : "Atk: 120",
        deff : "Def: 135",
        spatkf : "Sp. Atk: 99",
        spdeff : "Sp. Def: 94",
        spdf : "Spd: 110",
        move1f : "-Flash Cannon",
        move2f : "-Metal Sound",
        move3f : "-Hyper Beam",
        move4f : "-Thunderbolt",
    },

    {
        namea : "Reshiram",
        levela : "LV: 52",
        typea : "Type: Dragon/Fire",
        abilitya: "Ability: Turboblaze",
        itema : "Item: None",
        hpa : "HP: U/A",
        atka : "Atk: U/A",
        defa : "Def: U/A",
        spatka : "Sp. Atk: U/A",
        spdefa : "Sp. Def: U/A",
        spda : "Spd: U/A",
        move1a : "-Fusion Flare",
        move2a : "-Extrasensory",
        move3a : "-Hyper Beam",
        move4a : "-Reflect",

        nameb : "Carracosta",
        levelb : "LV: 50",
        typeb : "Type: Water/Rock",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 149",
        atkb : "Atk: 140",
        defb : "Def: 153",
        spatkb : "Sp. Atk: 92",
        spdefb : "Sp. Def: 85",
        spdb : "Spd: 52",
        move1b : "-Stone Edge",
        move2b : "-Aqua Jet",
        move3b : "-Crunch",
        move4b : "-Waterfall",

        namec : "Vanilluxe",
        levelc : "LV: 50",
        typec : "Type: Ice",
        abilityc: "Ability: Ice Body",
        itemc : "Item: None",
        hpc : "HP: 146",
        atkc : "Atk: 115",
        defc : "Def: 105",
        spatkc : "Sp. Atk: 130",
        spdefc : "Sp. Def: 103",
        spdc : "Spd: 108",
        move1c : "-Blizzard",
        move2c : "-Hail",
        move3c : "-Flash Cannon",
        move4c : "-Frost Breath",

        named : "Archeops",
        leveld : "LV: 50",
        typed : "Type: Rock/Flying",
        abilityd: "Ability: Defeatist",
        itemd : "Item: None",
        hpd : "HP: 150",
        atkd : "Atk: 160",
        defd : "Def: 93",
        spatkd : "Sp. Atk: 118",
        spdefd : "Sp. Def: 85",
        spdd : "Spd: 130",
        move1d : "-Stone Edge",
        move2d : "-Acrobatics",
        move3d : "-Dragon Claw",
        move4d : "-Crunch",

        namee : "Zoroark",
        levele : "LV: 50",
        typee : "Type: Dark",
        abilitye: "Ability: Illusion",
        iteme : "Item: None",
        hpe : "HP: 135",
        atke : "Atk: 125",
        defe : "Def: 80",
        spatke : "Sp. Atk: 140",
        spdefe : "Sp. Def: 80",
        spde : "Spd: 125",
        move1e : "-Flamethrower",
        move2e : "-Focus Blast",
        move3e : "-Night Slash",
        move4e : "-Retaliate",

        namef : "Klingklang",
        levelf : "LV: 50",
        typef : "Type: Steel",
        abilityf: "Ability: Plus",
        itemf : "Item: None",
        hpf : "HP: 135",
        atkf : "Atk: 120",
        deff : "Def: 135",
        spatkf : "Sp. Atk: 99",
        spdeff : "Sp. Def: 94",
        spdf : "Spd: 110",
        move1f : "-Flash Cannon",
        move2f : "-Metal Sound",
        move3f : "-Hyper Beam",
        move4f : "-Thunderbolt",
    },

    {
        namea : "Cofagrigus",
        levela : "LV: 52",
        typea : "Type: Ghost",
        abilitya: "Ability: Mummy",
        itema : "Item: None",
        hpa : "HP: 137",
        atka : "Atk: 72",
        defa : "Def: 171",
        spatka : "Sp. Atk: 107",
        spdefa : "Sp. Def: 129",
        spda : "Spd: 56",
        move1a : "-Shadow Ball",
        move2a : "-Protect",
        move3a : "-Psychic",
        move4a : "-Toxic",

        nameb : "Bouffalant",
        levelb : "LV: 52",
        typeb : "Type: Normal",
        abilityb: "Ability: Reckless",
        itemb : "Item: None",
        hpb : "HP: 176",
        atkb : "Atk: 135",
        defb : "Def: 119",
        spatkb : "Sp. Atk: 62",
        spdefb : "Sp. Def: 130",
        spdb : "Spd: 69",
        move1b : "-Head Charge",
        move2b : "-Wild Charge",
        move3b : "-Earthquake",
        move4b : "-Poison Jab",

        namec : "Seismitoad",
        levelc : "LV: 52",
        typec : "Type: Water/Ground",
        abilityc: "Ability: Swift Swim",
        itemc : "Item: None",
        hpc : "HP: 186",
        atkc : "Atk: 119",
        defc : "Def: 98",
        spatkc : "Sp. Atk: 98",
        spdefc : "Sp. Def: 98",
        spdc : "Spd: 97",
        move1c : "-Muddy Water",
        move2c : "-Rain Dance",
        move3c : "-Earthquake",
        move4c : "-Sludge Wave",

        named : "Bisharp",
        leveld : "LV: 52",
        typed : "Type: Dark/Steel",
        abilityd: "Ability: Defiant",
        itemd : "Item: None",
        hpd : "HP: 145",
        atkd : "Atk: 150",
        defd : "Def: 124",
        spatkd : "Sp. Atk: 91",
        spdefd : "Sp. Def: 93",
        spdd : "Spd: 83",
        move1d : "-Night Slash",
        move2d : "-Stone Edge",
        move3d : "-X-Scissor",
        move4d : "-Metal Burst",

        namee : "Eelektross",
        levele : "LV: 52",
        typee : "Type: Electric",
        abilitye: "Ability: Levitate",
        iteme : "Item: None",
        hpe : "HP: 166",
        atke : "Atk: 126",
        defe : "Def: 103",
        spatke : "Sp. Atk: 129",
        spdefe : "Sp. Def: 103",
        spde : "Spd: 79",
        move1e : "-Wild Charge",
        move2e : "-Flamethrower",
        move3e : "-Acrobatics",
        move4e : "-Crunch",

        namef : "Hydreigon",
        levelf : "LV: 54",
        typef : "Type: Dark/Dragon",
        abilityf: "Ability: Levitate",
        itemf : "Item: None",
        hpf : "HP: 179",
        atkf : "Atk: 120",
        deff : "Def: 118",
        spatkf : "Sp. Atk: 156",
        spdeff : "Sp. Def: 118",
        spdf : "Spd: 139",
        move1f : "-Dragon Pulse",
        move2f : "-Fire Blast",
        move3f : "-Surf",
        move4f : "-Focus Blast",
    },
]

function displayBWTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showBWImages(newTrainerId);
        showPokemonBWImages(newTrainerId);
    }


    let bwTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = bw_trainers [bwTrainer].namea;
    document.querySelector('#level1').textContent = bw_trainers [bwTrainer].levela;
    document.querySelector('#type1').textContent = bw_trainers [bwTrainer].typea;
    document.querySelector('#ability1').textContent= bw_trainers [bwTrainer].abilitya;
    document.querySelector('#item1').textContent = bw_trainers [bwTrainer].itema;
    document.querySelector('#hp1').textContent = bw_trainers [bwTrainer].hpa;
    document.querySelector('#atk1').textContent = bw_trainers [bwTrainer].atka;
    document.querySelector('#def1').textContent = bw_trainers [bwTrainer].defa;
    document.querySelector('#spatk1').textContent = bw_trainers [bwTrainer].spatka;
    document.querySelector('#spdef1').textContent = bw_trainers [bwTrainer].spdefa;
    document.querySelector('#spd1').textContent = bw_trainers [bwTrainer].spda;
    document.querySelector('#move1_1').textContent = bw_trainers [bwTrainer].move1a;
    document.querySelector('#move2_1').textContent = bw_trainers [bwTrainer].move2a;
    document.querySelector('#move3_1').textContent = bw_trainers [bwTrainer].move3a;
    document.querySelector('#move4_1').textContent = bw_trainers [bwTrainer].move4a;

    
    document.querySelector('#name2').textContent = bw_trainers [bwTrainer].nameb;
    document.querySelector('#level2').textContent = bw_trainers [bwTrainer].levelb;
    document.querySelector('#type2').textContent = bw_trainers [bwTrainer].typeb;
    document.querySelector('#ability2').textContent= bw_trainers [bwTrainer].abilityb;
    document.querySelector('#item2').textContent = bw_trainers [bwTrainer].itemb;
    document.querySelector('#hp2').textContent = bw_trainers [bwTrainer].hpb;
    document.querySelector('#atk2').textContent = bw_trainers [bwTrainer].atkb;
    document.querySelector('#def2').textContent = bw_trainers [bwTrainer].defb;
    document.querySelector('#spatk2').textContent = bw_trainers [bwTrainer].spatkb;
    document.querySelector('#spdef2').textContent = bw_trainers [bwTrainer].spdefb;
    document.querySelector('#spd2').textContent = bw_trainers [bwTrainer].spdb;
    document.querySelector('#move1_2').textContent = bw_trainers [bwTrainer].move1b;
    document.querySelector('#move2_2').textContent = bw_trainers [bwTrainer].move2b;
    document.querySelector('#move3_2').textContent = bw_trainers [bwTrainer].move3b;
    document.querySelector('#move4_2').textContent = bw_trainers [bwTrainer].move4b;

    document.querySelector('#name3').textContent = bw_trainers [bwTrainer].namec;
    document.querySelector('#level3').textContent = bw_trainers [bwTrainer].levelc;
    document.querySelector('#type3').textContent = bw_trainers [bwTrainer].typec;
    document.querySelector('#ability3').textContent= bw_trainers [bwTrainer].abilityc;
    document.querySelector('#item3').textContent = bw_trainers [bwTrainer].itemc;
    document.querySelector('#hp3').textContent = bw_trainers [bwTrainer].hpc;
    document.querySelector('#atk3').textContent = bw_trainers [bwTrainer].atkc;
    document.querySelector('#def3').textContent = bw_trainers [bwTrainer].defc;
    document.querySelector('#spatk3').textContent = bw_trainers [bwTrainer].spatkc;
    document.querySelector('#spdef3').textContent = bw_trainers [bwTrainer].spdefc;
    document.querySelector('#spd3').textContent = bw_trainers [bwTrainer].spdc;
    document.querySelector('#move1_3').textContent = bw_trainers [bwTrainer].move1c;
    document.querySelector('#move2_3').textContent = bw_trainers [bwTrainer].move2c;
    document.querySelector('#move3_3').textContent = bw_trainers [bwTrainer].move3c;
    document.querySelector('#move4_3').textContent = bw_trainers [bwTrainer].move4c;

    document.querySelector('#name4').textContent = bw_trainers [bwTrainer].named;
    document.querySelector('#level4').textContent = bw_trainers [bwTrainer].leveld;
    document.querySelector('#type4').textContent = bw_trainers [bwTrainer].typed;
    document.querySelector('#ability4').textContent= bw_trainers [bwTrainer].abilityd;
    document.querySelector('#item4').textContent = bw_trainers [bwTrainer].itemd;
    document.querySelector('#hp4').textContent = bw_trainers [bwTrainer].hpd;
    document.querySelector('#atk4').textContent = bw_trainers [bwTrainer].atkd;
    document.querySelector('#def4').textContent = bw_trainers [bwTrainer].defd;
    document.querySelector('#spatk4').textContent = bw_trainers [bwTrainer].spatkd;
    document.querySelector('#spdef4').textContent = bw_trainers [bwTrainer].spdefd;
    document.querySelector('#spd4').textContent = bw_trainers [bwTrainer].spdd;
    document.querySelector('#move1_4').textContent = bw_trainers [bwTrainer].move1d;
    document.querySelector('#move2_4').textContent = bw_trainers [bwTrainer].move2d;
    document.querySelector('#move3_4').textContent = bw_trainers [bwTrainer].move3d;
    document.querySelector('#move4_4').textContent = bw_trainers [bwTrainer].move4d;

    document.querySelector('#name5').textContent = bw_trainers [bwTrainer].namee;
    document.querySelector('#level5').textContent = bw_trainers [bwTrainer].levele;
    document.querySelector('#type5').textContent = bw_trainers [bwTrainer].typee;
    document.querySelector('#ability5').textContent= bw_trainers [bwTrainer].abilitye;
    document.querySelector('#item5').textContent = bw_trainers [bwTrainer].iteme;
    document.querySelector('#hp5').textContent = bw_trainers [bwTrainer].hpe;
    document.querySelector('#atk5').textContent = bw_trainers [bwTrainer].atke;
    document.querySelector('#def5').textContent = bw_trainers [bwTrainer].defe;
    document.querySelector('#spatk5').textContent = bw_trainers [bwTrainer].spatke;
    document.querySelector('#spdef5').textContent = bw_trainers [bwTrainer].spdefe;
    document.querySelector('#spd5').textContent = bw_trainers [bwTrainer].spde;
    document.querySelector('#move1_5').textContent = bw_trainers [bwTrainer].move1e;
    document.querySelector('#move2_5').textContent = bw_trainers [bwTrainer].move2e;
    document.querySelector('#move3_5').textContent = bw_trainers [bwTrainer].move3e;
    document.querySelector('#move4_5').textContent = bw_trainers [bwTrainer].move4e;

    document.querySelector('#name6').textContent = bw_trainers [bwTrainer].namef;
    document.querySelector('#level6').textContent = bw_trainers [bwTrainer].levelf;
    document.querySelector('#type6').textContent = bw_trainers [bwTrainer].typef;
    document.querySelector('#ability6').textContent= bw_trainers [bwTrainer].abilityf;
    document.querySelector('#item6').textContent = bw_trainers [bwTrainer].itemf;
    document.querySelector('#hp6').textContent = bw_trainers [bwTrainer].hpf;
    document.querySelector('#atk6').textContent = bw_trainers [bwTrainer].atkf;
    document.querySelector('#def6').textContent = bw_trainers [bwTrainer].deff;
    document.querySelector('#spatk6').textContent = bw_trainers [bwTrainer].spatkf;
    document.querySelector('#spdef6').textContent = bw_trainers [bwTrainer].spdeff;
    document.querySelector('#spd6').textContent = bw_trainers [bwTrainer].spdf;
    document.querySelector('#move1_6').textContent = bw_trainers [bwTrainer].move1f;
    document.querySelector('#move2_6').textContent = bw_trainers [bwTrainer].move2f;
    document.querySelector('#move3_6').textContent = bw_trainers [bwTrainer].move3f;
    document.querySelector('#move4_6').textContent = bw_trainers [bwTrainer].move4f;
}

function showBWImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/bw/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonBWImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/bw/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/bw/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/bw/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/bw/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/bw/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/bw/" + trainerId + "_6.png";
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

    if (event.target.parentNode.id === "cress1") {
        refCredit.textContent = "JTMagicman"
        refCredit.href = "https://www.dropbox.com/s/vfy5xok1knq069a/Pokemon%20Black%20-%20Game%20Information%20(Tepig).xlsx?dl=0"
    } else {
        refCredit.textContent = "Human"
        refCredit.href = "https://drive.google.com/file/d/1l7SBH1yeJvEYxml5DpARCNuC5yDf_7cu/view"
    }
}

cilanBW.addEventListener('click', displayBWTrainers);
chiliBW.addEventListener('click', displayBWTrainers);
cressBW.addEventListener('click', displayBWTrainers);
lenoraBW.addEventListener('click', displayBWTrainers);
burghBW.addEventListener('click', displayBWTrainers);
elesaBW.addEventListener('click', displayBWTrainers);
clayBW.addEventListener('click', displayBWTrainers);
skylaBW.addEventListener('click', displayBWTrainers);
brycenBW.addEventListener('click', displayBWTrainers);
draydenBW.addEventListener('click', displayBWTrainers);
irisBW.addEventListener('click', displayBWTrainers);
shauntalBW.addEventListener('click', displayBWTrainers);
marshalBW.addEventListener('click', displayBWTrainers);
grimsleyBW.addEventListener('click', displayBWTrainers);
caitlinBW.addEventListener('click', displayBWTrainers);
nBBW.addEventListener('click', displayBWTrainers);
nWBW.addEventListener('click', displayBWTrainers);
ghetsisBW.addEventListener('click', displayBWTrainers);
