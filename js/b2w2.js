let cherenB2W2 = document.querySelector ("#cheren1");
let roxieB2W2 = document.querySelector ("#roxie1");
let burghB2W2 = document.querySelector ("#burgh2");
let elesaB2W2 = document.querySelector ("#elesa2");
let clayB2W2 = document.querySelector ("#clay2");
let skylaB2W2 = document.querySelector ("#skyla2");
let draydenB2W2 = document.querySelector ("#drayden2");
let marlonB2W2 = document.querySelector ("#marlon1");
let ghetsisB2W2 = document.querySelector ("#ghetsis2");
let shauntalB2W2 = document.querySelector ("#shauntal2");
let marshalB2W2 = document.querySelector ("#marshal2");
let grimsleyB2W2 = document.querySelector ("#grimsley2");
let caitlinB2W2 = document.querySelector ("#caitlin2");
let irisB2W2 = document.querySelector ("#iris2");

let b2w2_trainers = [
    {
        namea : "Patrat",
        levela : "LV: 11",
        typea : "Type: Normal",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 31",
        atka : "Atk: 17",
        defa : "Def: 14",
        spatka : "Sp. Atk: 13",
        spdefa : "Sp. Def: 14",
        spda : "Spd: 14",
        move1a : "-Work Up",
        move2a : "-Tackle",
        move3a : "-Bite",
        move4a : "",

        nameb : "Lillipup",
        levelb : "LV: 13",
        typeb : "Type: Normal",
        abilityb: "Ability: Vital Spirit",
        itemb : "Item: None",
        hpb : "HP: 35",
        atkb : "Atk: 21",
        defb : "Def: 17",
        spatkb : "Sp. Atk: 12",
        spdefb : "Sp. Def: 17",
        spdb : "Spd: 20",
        move1b : "-Work Up",
        move2b : "-Tackle",
        move3b : "-Bite",
        move4b : "",
    },

    {
        namea : "Koffing",
        levela : "LV: 16",
        typea : "Type: Poison",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: 39",
        atka : "Atk: 26",
        defa : "Def: 36",
        spatka : "Sp. Atk: 22",
        spdefa : "Sp. Def: 20",
        spda : "Spd: 18",
        move1a : "-Assurance",
        move2a : "-Tackle",
        move3a : "-Smog",
        move4a : "",

        nameb : "Whirlipede",
        levelb : "LV: 18",
        typeb : "Type: Bug/Poison",
        abilityb: "Ability: Poison Point",
        itemb : "Item: None",
        hpb : "HP: 44",
        atkb : "Atk: 26",
        defb : "Def: 37",
        spatkb : "Sp. Atk: 21",
        spdefb : "Sp. Def: 35",
        spdb : "Spd: 26",
        move1b : "-Venoshock",
        move2b : "-Protect",
        move3b : "-Poison Sting",
        move4b : "-Pursuit",
    },

    {
        namea : "Swadloon",
        levela : "LV: 22",
        typea : "Type: Bug/Grass",
        abilitya: "Ability: Leaf Guard",
        itema : "Item: None",
        hpa : "HP: 57",
        atka : "Atk: 34",
        defa : "Def: 45",
        spatka : "Sp. Atk: 28",
        spdefa : "Sp. Def: 41",
        spda : "Spd: 24",
        move1a : "-String Shot",
        move2a : "-Razor Leaf",
        move3a : "-Struggle Bug",
        move4a : "-Protect",

        nameb : "Dwebble",
        levelb : "LV: 22",
        typeb : "Type: Bug/Rock",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 55",
        atkb : "Atk: 30",
        defb : "Def: 47",
        spatkb : "Sp. Atk: 21",
        spdefb : "Sp. Def: 21",
        spdb : "Spd: 30",
        move1b : "-Smack Down",
        move2b : "-Feint Attack",
        move3b : "-Rock Polish",
        move4b : "-Struggle Bug",

        namec : "Leavanny",
        levelc : "LV: 24",
        typec : "Type: Bug/Grass",
        abilityc: "Ability: Swarm",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 72",
        atkc : "Atk: 62",
        defc : "Def: 46",
        spatkc : "Sp. Atk: 41",
        spdefc : "Sp. Def: 41",
        spdc : "Spd: 46",
        move1c : "-Razor Leaf",
        move2c : "-Cut",
        move3c : "-String Shot",
        move4c : "-Struggle Bug",
    },

    {
        namea : "Emolga",
        levela : "LV: 28",
        typea : "Type: Electic/Flying",
        abilitya: "Ability: Static",
        itema : "Item: None",
        hpa : "HP: 72",
        atka : "Atk: 55",
        defa : "Def: 41",
        spatka : "Sp. Atk: 50",
        spdefa : "Sp. Def: 36",
        spda : "Spd: 66",
        move1a : "-Quick Attack",
        move2a : "-Pursuit",
        move3a : "-Volt Switch",
        move4a : "",

        nameb : "Flaaffy",
        levelb : "LV: 28",
        typeb : "Type: Electric",
        abilityb: "Ability: Static",
        itemb : "Item: None",
        hpb : "HP: 80",
        atkb : "Atk: 39",
        defb : "Def: 42",
        spatkb : "Sp. Atk: 53",
        spdefb : "Sp. Def: 36",
        spdb : "Spd: 33",
        move1b : "-Volt Switch",
        move2b : "-Thunder Wave",
        move3b : "-Take Down",
        move4b : "",

        namec : "Zebstrika",
        levelc : "LV: 30",
        typec : "Type: Electric",
        abilityc: "Ability: Motor Drive",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 88",
        atkc : "Atk: 68",
        defc : "Def: 41",
        spatkc : "Sp. Atk: 61",
        spdefc : "Sp. Def: 46",
        spdc : "Spd: 78",
        move1c : "-Quick Attack",
        move2c : "-Volt Switch",
        move3c : "-Flame Charge",
        move4c : "-Pursuit",
    },

    {
        namea : "Krokorok",
        levela : "LV: 31",
        typea : "Type: Ground/Dark",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 81",
        atka : "Atk: 59",
        defa : "Def: 39",
        spatka : "Sp. Atk: 36",
        spdefa : "Sp. Def: 36",
        spda : "Spd: 48",
        move1a : "-Bulldoze",
        move2a : "-Torment",
        move3a : "-Crunch",
        move4a : "-Sand Tomb",

        nameb : "Sandslash",
        levelb : "LV: 31",
        typeb : "Type: Ground",
        abilityb: "Ability: Sand Veil",
        itemb : "Item: None",
        hpb : "HP: 91",
        atkb : "Atk: 70",
        defb : "Def: 76",
        spatkb : "Sp. Atk: 36",
        spdefb : "Sp. Def: 42",
        spdb : "Spd: 49",
        move1b : "-Bulldoze",
        move2b : "-Crush Claw",
        move3b : "-Fury Cutter",
        move4b : "-Rollout",

        namec : "Excadrill",
        levelc : "LV: 33",
        typec : "Type: Ground/Steel",
        abilityc: "Ability: Sand Force",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 121",
        atkc : "Atk: 100",
        defc : "Def: 50",
        spatkc : "Sp. Atk: 47",
        spdefc : "Sp. Def: 47",
        spdc : "Spd: 69",
        move1c : "-Bulldoze",
        move2c : "-Slash",
        move3c : "-Rock Slide",
        move4c : "-Metal Claw",
    },

    {
        namea : "Swoobat",
        levela : "LV: 37",
        typea : "Type: Psychic/Flying",
        abilitya: "Ability: Unaware",
        itema : "Item: None",
        hpa : "HP: 103",
        atka : "Atk: 58",
        defa : "Def: 52",
        spatka : "Sp. Atk: 61",
        spdefa : "Sp. Def: 52",
        spda : "Spd: 96",
        move1a : "-Acrobatics",
        move2a : "-Heart Stamp",
        move3a : "-Assurance",
        move4a : "-Attract",

        nameb : "Skarmory",
        levelb : "LV: 37",
        typeb : "Type: Steel/Flying",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 101",
        atkb : "Atk: 70",
        defb : "Def: 115",
        spatkb : "Sp. Atk: 41",
        spdefb : "Sp. Def: 63",
        spdb : "Spd: 63",
        move1b : "-Air Cutter",
        move2b : "-Agility",
        move3b : "-Steel Wing",
        move4b : "-Fury Attack",

        namec : "Swanna",
        levelc : "LV: 39",
        typec : "Type: Water/Flying",
        abilityc: "Ability: Big Pecks",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 114",
        atkc : "Atk: 79",
        defc : "Def: 67",
        spatkc : "Sp. Atk: 79",
        spdefc : "Sp. Def: 54",
        spdc : "Spd: 88",
        move1c : "-Air Slash",
        move2c : "-Bubble Beam",
        move3c : "-Roost",
        move4c : "-Feather Dance",
    },

    {
        namea : "Druddigon",
        levela : "LV: 46",
        typea : "Type: Dragon",
        abilitya: "Ability: Sheer Force",
        itema : "Item: None",
        hpa : "HP: 135",
        atka : "Atk: 110",
        defa : "Def: 96",
        spatka : "Sp. Atk: 74",
        spdefa : "Sp. Def: 96",
        spda : "Spd: 57",
        move1a : "-Revenge",
        move2a : "-Crunch",
        move3a : "-Slash",
        move4a : "-Dragon Tail",

        nameb : "Flygon",
        levelb : "LV: 46",
        typeb : "Type: Ground/Dragon",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: 137",
        atkb : "Atk: 105",
        defb : "Def: 94",
        spatkb : "Sp. Atk: 86",
        spdefb : "Sp. Def: 77",
        spdb : "Spd: 105",
        move1b : "-Rock Slide",
        move2b : "-Earth Power",
        move3b : "-Crunch",
        move4b : "-Dragon Tail",

        namec : "Haxorus",
        levelc : "LV: 48",
        typec : "Type: Dragon",
        abilityc: "Ability: Mold Breaker",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 142",
        atkc : "Atk: 172",
        defc : "Def: 91",
        spatkc : "Sp. Atk: 74",
        spdefc : "Sp. Def: 83",
        spdc : "Spd: 109",
        move1c : "-Dragon Dance",
        move2c : "-Assurance",
        move3c : "-Slash",
        move4c : "-Dragon Tail",
    },

    {
        namea : "Carracosta",
        levela : "LV: 49",
        typea : "Type: Water/Rock",
        abilitya: "Ability: Sturdy",
        itema : "Item: None",
        hpa : "HP: 143",
        atka : "Atk: 122",
        defa : "Def: 147",
        spatka : "Sp. Atk: 107",
        spdefa : "Sp. Def: 80",
        spda : "Spd: 43",
        move1a : "-Smack Down",
        move2a : "-Shell Smash",
        move3a : "-Scald",
        move4a : "-Crunch",

        nameb : "Wailord",
        levelb : "LV: 49",
        typeb : "Type: Water",
        abilityb: "Ability: Water Veil",
        itemb : "Item: None",
        hpb : "HP: 237",
        atkb : "Atk: 104",
        defb : "Def: 60",
        spatkb : "Sp. Atk: 114",
        spdefb : "Sp. Def: 60",
        spdb : "Spd: 67",
        move1b : "-Amnesia",
        move2b : "-Scald",
        move3b : "-Rollout",
        move4b : "-Bounce",

        namec : "Jellicent",
        levelc : "LV: 51",
        typec : "Type: Water/Ghost",
        abilityc: "Ability: Cursed Body",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 178",
        atkc : "Atk: 81",
        defc : "Def: 81",
        spatkc : "Sp. Atk: 117",
        spdefc : "Sp. Def: 127",
        spdc : "Spd: 81",
        move1c : "-Brine",
        move2c : "-Recover",
        move3c : "-Scald",
        move4c : "-Ominous Wind",
    },

    {
        namea : "Cofagrigus",
        levela : "LV: 50",
        typea : "Type: Ghost",
        abilitya: "Ability: Mummy",
        itema : "Item: Leftovers",
        hpa : "HP: 130",
        atka : "Atk: 67",
        defa : "Def: 145",
        spatka : "Sp. Atk: 112",
        spdefa : "Sp. Def: 134",
        spda : "Spd: 47",
        move1a : "-Shadow Ball",
        move2a : "-Protect",
        move3a : "-Psychic",
        move4a : "-Toxic",

        nameb : "Seismitoad",
        levelb : "LV: 50",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Poison Touch",
        itemb : "Item: None",
        hpb : "HP: 177",
        atkb : "Atk: 112",
        defb : "Def: 82",
        spatkb : "Sp. Atk: 102",
        spdefb : "Sp. Def: 92",
        spdb : "Spd: 91",
        move1b : "-Muddy Water",
        move2b : "-Earthquake",
        move3b : "-Drain Punch",
        move4b : "-Sludge Wave",

        namec : "Eelektross",
        levelc : "LV: 50",
        typec : "Type: Electric",
        abilityc: "Ability: Levitate",
        itemc : "Item: None",
        hpc : "HP: 157",
        atkc : "Atk: 132",
        defc : "Def: 97",
        spatkc : "Sp. Atk: 109",
        spdefc : "Sp. Def: 97",
        spdc : "Spd: 73",
        move1c : "-Thunderbolt",
        move2c : "-Flamethrower",
        move3c : "-Acrobatics",
        move4c : "-Crunch",

        named : "Drapion",
        leveld : "LV: 50",
        typed : "Type: Poison/Dark",
        abilityd: "Ability: Sniper",
        itemd : "Item: None",
        hpd : "HP: 145",
        atkd : "Atk: 110",
        defd : "Def: 117",
        spatkd : "Sp. Atk: 88",
        spdefd : "Sp. Def: 95",
        spdd : "Spd: 115",
        move1d : "-Night Slash",
        move2d : "-Earthquake",
        move3d : "-Poison Fang",
        move4d : "-X-Scissor",

        namee : "Toxicroak",
        levele : "LV: 50",
        typee : "Type: Poison/Fighting",
        abilitye: "Ability: Anticipation",
        iteme : "Item: None",
        hpe : "HP: 158",
        atke : "Atk: 126",
        defe : "Def: 85",
        spatke : "Sp. Atk: 106",
        spdefe : "Sp. Def: 93",
        spde : "Spd: 94",
        move1e : "-Brick Break",
        move2e : "-Shadow Ball",
        move3e : "-Sucker Punch",
        move4e : "-Poison Jab",

        namef : "Hydreigon",
        levelf : "LV: 52",
        typef : "Type: Dark/Dragon",
        abilityf: "Ability: Levitate",
        itemf : "Item: Life Orb",
        hpf : "HP: 173",
        atkf : "Atk: 141",
        deff : "Def: 102",
        spatkf : "Sp. Atk: 150",
        spdeff : "Sp. Def: 114",
        spdf : "Spd: 122",
        move1f : "-Dragon Rush",
        move2f : "-Crunch",
        move3f : "-Rock Slide",
        move4f : "-Frustration",
    },

    {
        namea : "Cofagrigus",
        levela : "LV: 56",
        typea : "Type: Ghost",
        abilitya: "Ability: Mummy",
        itema : "Item: None",
        hpa : "HP: 144",
        atka : "Atk: 74",
        defa : "Def: 180",
        spatka : "Sp. Atk: 124",
        spdefa : "Sp. Def: 122",
        spda : "Spd: 57",
        move1a : "-Psychic",
        move2a : "-Will-O-Wisp",
        move3a : "-Shadow Ball",
        move4a : "-Grass Knot",

        nameb : "Drifblim",
        levelb : "LV: 56",
        typeb : "Type: Ghost/Flying",
        abilityb: "Ability: Aftermath",
        itemb : "Item: None",
        hpb : "HP: 247",
        atkb : "Atk: 108",
        defb : "Def: 60",
        spatkb : "Sp. Atk: 130",
        spdefb : "Sp. Def: 78",
        spdb : "Spd: 108",
        move1b : "-Acrobatics",
        move2b : "-Shadow Ball",
        move3b : "-Thunderbolt",
        move4b : "-Psychic",

        namec : "Golurk",
        levelc : "LV: 56",
        typec : "Type: Ghost/Ground",
        abilityc: "Ability: Iron Fist",
        itemc : "Item: None",
        hpc : "HP: 179",
        atkc : "Atk: 141",
        defc : "Def: 118",
        spatkc : "Sp. Atk: 80",
        spdefc : "Sp. Def: 108",
        spdc : "Spd: 80",
        move1c : "-Earthquake",
        move2c : "-Shadow Punch",
        move3c : "-Brick Break",
        move4c : "-Heavy Slam",

        named : "Chandelure",
        leveld : "LV: 58",
        typed : "Type: Ghost/Fire",
        abilityd: "Ability: Flame Body",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 155",
        atkd : "Atk: 86",
        defd : "Def: 113",
        spatkd : "Sp. Atk: 209",
        spdefd : "Sp. Def: 126",
        spdd : "Spd: 115",
        move1d : "-Fire Blast",
        move2d : "-Shadow Ball",
        move3d : "-Psychic",
        move4d : "-Energy Ball",
    },

    {
        namea : "Throh",
        levela : "LV: 56",
        typea : "Type: Fighting",
        abilitya: "Ability: Guts",
        itema : "Item: None",
        hpa : "HP: 213",
        atka : "Atk: 130",
        defa : "Def: 113",
        spatka : "Sp. Atk: 52",
        spdefa : "Sp. Def: 113",
        spda : "Spd: 68",
        move1a : "-Rock Tomb",
        move2a : "-Payback",
        move3a : "-Bulldoze",
        move4a : "-Storm Throw",

        nameb : "Sawk",
        levelb : "LV: 56",
        typeb : "Type: Fighting",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 163",
        atkb : "Atk: 173",
        defb : "Def: 91",
        spatkb : "Sp. Atk: 52",
        spdefb : "Sp. Def: 102",
        spdb : "Spd: 113",
        move1b : "-Payback",
        move2b : "-Rock Slide",
        move3b : "-Brick Break",
        move4b : "-Retaliate",

        namec : "Mienshao",
        levelc : "LV: 56",
        typec : "Type: Fighting",
        abilityc: "Ability: Regenerator",
        itemc : "Item: None",
        hpc : "HP: 152",
        atkc : "Atk: 173",
        defc : "Def: 85",
        spatkc : "Sp. Atk: 124",
        spdefc : "Sp. Def: 85",
        spdc : "Spd: 122",
        move1c : "-U-Turn",
        move2c : "-High Jump Kick",
        move3c : "-Bounce",
        move4c : "-Retaliate",

        named : "Conkeldurr",
        leveld : "LV: 58",
        typed : "Type: Fighting",
        abilityd: "Ability: Guts",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 207",
        atkd : "Atk: 184",
        defd : "Def: 132",
        spatkd : "Sp. Atk: 86",
        spdefd : "Sp. Def: 97",
        spdd : "Spd: 74",
        move1d : "-Stone Edge",
        move2d : "-Hammer Arm",
        move3d : "-Retaliate",
        move4d : "-Bulk Up",
    },

    {
        namea : "Liepard",
        levela : "LV: 56",
        typea : "Type: Dark",
        abilitya: "Ability: Limber",
        itema : "Item: None",
        hpa : "HP: 151",
        atka : "Atk: 117",
        defa : "Def: 74",
        spatka : "Sp. Atk: 117",
        spdefa : "Sp. Def: 74",
        spda : "Spd: 137",
        move1a : "-Fake Out",
        move2a : "-Night Slash",
        move3a : "-Aerial Ace",
        move4a : "-Attract",

        nameb : "Scrafty",
        levelb : "LV: 56",
        typeb : "Type: Dark/Fighting",
        abilityb: "Ability: Moxie",
        itemb : "Item: None",
        hpb : "HP: 152",
        atkb : "Atk: 130",
        defb : "Def: 147",
        spatkb : "Sp. Atk: 68",
        spdefb : "Sp. Def: 147",
        spdb : "Spd: 74",
        move1b : "-Rock Tomb",
        move2b : "-Crunch",
        move3b : "-Poison Jab",
        move4b : "-Brick Break",

        namec : "Krookodile",
        levelc : "LV: 56",
        typec : "Type: Ground/Dark",
        abilityc: "Ability: Intimidate",
        itemc : "Item: None",
        hpc : "HP: 185",
        atkc : "Atk: 149",
        defc : "Def: 86",
        spatkc : "Sp. Atk: 91",
        spdefc : "Sp. Def: 96",
        spdc : "Spd: 133",
        move1c : "-Rock Tomb",
        move2c : "-Crunch",
        move3c : "-Dragon Claw",
        move4c : "-Earthquake",

        named : "Bisharp",
        leveld : "LV: 58",
        typed : "Type: Dark/Steel",
        abilityd: "Ability: Defiant",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 160",
        atkd : "Atk: 167",
        defd : "Def: 138",
        spatkd : "Sp. Atk: 92",
        spdefd : "Sp. Def: 113",
        spdd : "Spd: 92",
        move1d : "-Night Slash",
        move2d : "-Aerial Ace",
        move3d : "-Metal Claw",
        move4d : "-X-Scissor",
    },

    {
        namea : "Musharna",
        levela : "LV: 56",
        typea : "Type: Psychic",
        abilitya: "Ability: Synchronize",
        itema : "Item: None",
        hpa : "HP: 209",
        atka : "Atk: 80",
        defa : "Def: 113",
        spatka : "Sp. Atk: 138",
        spdefa : "Sp. Def: 136",
        spda : "Spd: 45",
        move1a : "-Yawn",
        move2a : "-Dream Eater",
        move3a : "-Charge Beam",
        move4a : "-Reflect",

        nameb : "Sigilyph",
        levelb : "LV: 56",
        typeb : "Type: Psychic/Flying",
        abilityb: "Ability: Wonder Skin",
        itemb : "Item: None",
        hpb : "HP: 160",
        atkb : "Atk: 83",
        defb : "Def: 108",
        spatkb : "Sp. Atk: 133",
        spdefb : "Sp. Def: 118",
        spdb : "Spd: 114",
        move1b : "-Psychic",
        move2b : "-Air Slash",
        move3b : "-Ice Beam",
        move4b : "-Shadow Ball",

        namec : "Reuniclus",
        levelc : "LV: 56",
        typec : "Type: Psychic",
        abilityc: "Ability: Magic Guard",
        itemc : "Item: None",
        hpc : "HP: 202",
        atkc : "Atk: 91",
        defc : "Def: 102",
        spatkc : "Sp. Atk: 158",
        spdefc : "Sp. Def: 124",
        spdc : "Spd: 46",
        move1c : "-Recover",
        move2c : "-Focus Blast",
        move3c : "-Energy Ball",
        move4c : "-Psychic",

        named : "Gothitelle",
        leveld : "LV: 58",
        typed : "Type: Psychic",
        abilityd: "Ability: Frisk",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 166",
        atkd : "Atk: 86",
        defd : "Def: 145",
        spatkd : "Sp. Atk: 132",
        spdefd : "Sp. Def: 135",
        spdd : "Spd: 97",
        move1d : "-Calm Mind",
        move2d : "-Psychic",
        move3d : "-Thunderbolt",
        move4d : "-Shadow Ball",
    },

    {
        namea : "Hydreigon",
        levela : "LV: 57",
        typea : "Type: Dark/Dragon",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: 188",
        atka : "Atk: 155",
        defa : "Def: 124",
        spatka : "Sp. Atk: 147",
        spdefa : "Sp. Def: 124",
        spda : "Spd: 133",
        move1a : "-Flamethrower",
        move2a : "-Charge Beam",
        move3a : "-Dragon Pulse",
        move4a : "-Surf",

        nameb : "Druddigon",
        levelb : "LV: 57",
        typeb : "Type: Dragon",
        abilityb: "Ability: Sheer Force",
        itemb : "Item: Life Orb",
        hpb : "HP: 171",
        atkb : "Atk: 158",
        defb : "Def: 124",
        spatkb : "Sp. Atk: 90",
        spdefb : "Sp. Def: 124",
        spdb : "Spd: 76",
        move1b : "-Rock Slide",
        move2b : "-Flamethrower",
        move3b : "-Dragon Tail",
        move4b : "-Focus Blast",

        namec : "Archeops",
        levelc : "LV: 57",
        typec : "Type: Rock/Flying",
        abilityc: "Ability: Defeatist",
        itemc : "Item: None",
        hpc : "HP: 169",
        atkc : "Atk: 199",
        defc : "Def: 96",
        spatkc : "Sp. Atk: 149",
        spdefc : "Sp. Def: 86",
        spdc : "Spd: 147",
        move1c : "-Acrobatics",
        move2c : "-Rock Slide",
        move3c : "-Dragon Claw",
        move4c : "-Endeavor",

        named : "Aggron",
        leveld : "LV: 57",
        typed : "Type: Steel/Rock",
        abilityd: "Ability: Rock Head",
        itemd : "Item: None",
        hpd : "HP: 163",
        atkd : "Atk: 147",
        defd : "Def: 227",
        spatkd : "Sp. Atk: 90",
        spdefd : "Sp. Def: 90",
        spdd : "Spd: 79",
        move1d : "-Earthquake",
        move2d : "-Double-Edge",
        move3d : "-Rock Slide",
        move4d : "-Autotomize",

        namee : "Lapras",
        levele : "LV: 57",
        typee : "Type: Water/Ice",
        abilitye: "Ability: Water Absorb",
        iteme : "Item: None",
        hpe : "HP: 232",
        atke : "Atk: 130",
        defe : "Def: 101",
        spatke : "Sp. Atk: 119",
        spdefe : "Sp. Def: 130",
        spde : "Spd: 90",
        move1e : "-Surf",
        move2e : "-Ice Beam",
        move3e : "-Thunderbolt",
        move4e : "-Sing",

        namef : "Haxorus",
        levelf : "LV: 59",
        typef : "Type: Dragon",
        abilityf: "Ability: Mold Breaker",
        itemf : "Item: Focus Sash",
        hpf : "HP: 176",
        atkf : "Atk: 196",
        deff : "Def: 140",
        spatkf : "Sp. Atk: 83",
        spdeff : "Sp. Def: 105",
        spdf : "Spd: 137",
        move1f : "-Earthquake",
        move2f : "-X-Scissor",
        move3f : "-Dual Chop",
        move4f : "-Dragon Dance",
    },

    
]

function displayB2W2Trainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showB2W2Images(newTrainerId);
        showPokemonB2W2Images(newTrainerId);
    }


    let b2w2Trainer = this.dataset.member;

    document.querySelector('#name1').textContent = b2w2_trainers [b2w2Trainer].namea;
    document.querySelector('#level1').textContent = b2w2_trainers [b2w2Trainer].levela;
    document.querySelector('#type1').textContent = b2w2_trainers [b2w2Trainer].typea;
    document.querySelector('#ability1').textContent= b2w2_trainers [b2w2Trainer].abilitya;
    document.querySelector('#item1').textContent = b2w2_trainers [b2w2Trainer].itema;
    document.querySelector('#hp1').textContent = b2w2_trainers [b2w2Trainer].hpa;
    document.querySelector('#atk1').textContent = b2w2_trainers [b2w2Trainer].atka;
    document.querySelector('#def1').textContent = b2w2_trainers [b2w2Trainer].defa;
    document.querySelector('#spatk1').textContent = b2w2_trainers [b2w2Trainer].spatka;
    document.querySelector('#spdef1').textContent = b2w2_trainers [b2w2Trainer].spdefa;
    document.querySelector('#spd1').textContent = b2w2_trainers [b2w2Trainer].spda;
    document.querySelector('#move1_1').textContent = b2w2_trainers [b2w2Trainer].move1a;
    document.querySelector('#move2_1').textContent = b2w2_trainers [b2w2Trainer].move2a;
    document.querySelector('#move3_1').textContent = b2w2_trainers [b2w2Trainer].move3a;
    document.querySelector('#move4_1').textContent = b2w2_trainers [b2w2Trainer].move4a;

    
    document.querySelector('#name2').textContent = b2w2_trainers [b2w2Trainer].nameb;
    document.querySelector('#level2').textContent = b2w2_trainers [b2w2Trainer].levelb;
    document.querySelector('#type2').textContent = b2w2_trainers [b2w2Trainer].typeb;
    document.querySelector('#ability2').textContent= b2w2_trainers [b2w2Trainer].abilityb;
    document.querySelector('#item2').textContent = b2w2_trainers [b2w2Trainer].itemb;
    document.querySelector('#hp2').textContent = b2w2_trainers [b2w2Trainer].hpb;
    document.querySelector('#atk2').textContent = b2w2_trainers [b2w2Trainer].atkb;
    document.querySelector('#def2').textContent = b2w2_trainers [b2w2Trainer].defb;
    document.querySelector('#spatk2').textContent = b2w2_trainers [b2w2Trainer].spatkb;
    document.querySelector('#spdef2').textContent = b2w2_trainers [b2w2Trainer].spdefb;
    document.querySelector('#spd2').textContent = b2w2_trainers [b2w2Trainer].spdb;
    document.querySelector('#move1_2').textContent = b2w2_trainers [b2w2Trainer].move1b;
    document.querySelector('#move2_2').textContent = b2w2_trainers [b2w2Trainer].move2b;
    document.querySelector('#move3_2').textContent = b2w2_trainers [b2w2Trainer].move3b;
    document.querySelector('#move4_2').textContent = b2w2_trainers [b2w2Trainer].move4b;

    document.querySelector('#name3').textContent = b2w2_trainers [b2w2Trainer].namec;
    document.querySelector('#level3').textContent = b2w2_trainers [b2w2Trainer].levelc;
    document.querySelector('#type3').textContent = b2w2_trainers [b2w2Trainer].typec;
    document.querySelector('#ability3').textContent= b2w2_trainers [b2w2Trainer].abilityc;
    document.querySelector('#item3').textContent = b2w2_trainers [b2w2Trainer].itemc;
    document.querySelector('#hp3').textContent = b2w2_trainers [b2w2Trainer].hpc;
    document.querySelector('#atk3').textContent = b2w2_trainers [b2w2Trainer].atkc;
    document.querySelector('#def3').textContent = b2w2_trainers [b2w2Trainer].defc;
    document.querySelector('#spatk3').textContent = b2w2_trainers [b2w2Trainer].spatkc;
    document.querySelector('#spdef3').textContent = b2w2_trainers [b2w2Trainer].spdefc;
    document.querySelector('#spd3').textContent = b2w2_trainers [b2w2Trainer].spdc;
    document.querySelector('#move1_3').textContent = b2w2_trainers [b2w2Trainer].move1c;
    document.querySelector('#move2_3').textContent = b2w2_trainers [b2w2Trainer].move2c;
    document.querySelector('#move3_3').textContent = b2w2_trainers [b2w2Trainer].move3c;
    document.querySelector('#move4_3').textContent = b2w2_trainers [b2w2Trainer].move4c;

    document.querySelector('#name4').textContent = b2w2_trainers [b2w2Trainer].named;
    document.querySelector('#level4').textContent = b2w2_trainers [b2w2Trainer].leveld;
    document.querySelector('#type4').textContent = b2w2_trainers [b2w2Trainer].typed;
    document.querySelector('#ability4').textContent= b2w2_trainers [b2w2Trainer].abilityd;
    document.querySelector('#item4').textContent = b2w2_trainers [b2w2Trainer].itemd;
    document.querySelector('#hp4').textContent = b2w2_trainers [b2w2Trainer].hpd;
    document.querySelector('#atk4').textContent = b2w2_trainers [b2w2Trainer].atkd;
    document.querySelector('#def4').textContent = b2w2_trainers [b2w2Trainer].defd;
    document.querySelector('#spatk4').textContent = b2w2_trainers [b2w2Trainer].spatkd;
    document.querySelector('#spdef4').textContent = b2w2_trainers [b2w2Trainer].spdefd;
    document.querySelector('#spd4').textContent = b2w2_trainers [b2w2Trainer].spdd;
    document.querySelector('#move1_4').textContent = b2w2_trainers [b2w2Trainer].move1d;
    document.querySelector('#move2_4').textContent = b2w2_trainers [b2w2Trainer].move2d;
    document.querySelector('#move3_4').textContent = b2w2_trainers [b2w2Trainer].move3d;
    document.querySelector('#move4_4').textContent = b2w2_trainers [b2w2Trainer].move4d;

    document.querySelector('#name5').textContent = b2w2_trainers [b2w2Trainer].namee;
    document.querySelector('#level5').textContent = b2w2_trainers [b2w2Trainer].levele;
    document.querySelector('#type5').textContent = b2w2_trainers [b2w2Trainer].typee;
    document.querySelector('#ability5').textContent= b2w2_trainers [b2w2Trainer].abilitye;
    document.querySelector('#item5').textContent = b2w2_trainers [b2w2Trainer].iteme;
    document.querySelector('#hp5').textContent = b2w2_trainers [b2w2Trainer].hpe;
    document.querySelector('#atk5').textContent = b2w2_trainers [b2w2Trainer].atke;
    document.querySelector('#def5').textContent = b2w2_trainers [b2w2Trainer].defe;
    document.querySelector('#spatk5').textContent = b2w2_trainers [b2w2Trainer].spatke;
    document.querySelector('#spdef5').textContent = b2w2_trainers [b2w2Trainer].spdefe;
    document.querySelector('#spd5').textContent = b2w2_trainers [b2w2Trainer].spde;
    document.querySelector('#move1_5').textContent = b2w2_trainers [b2w2Trainer].move1e;
    document.querySelector('#move2_5').textContent = b2w2_trainers [b2w2Trainer].move2e;
    document.querySelector('#move3_5').textContent = b2w2_trainers [b2w2Trainer].move3e;
    document.querySelector('#move4_5').textContent = b2w2_trainers [b2w2Trainer].move4e;

    document.querySelector('#name6').textContent = b2w2_trainers [b2w2Trainer].namef;
    document.querySelector('#level6').textContent = b2w2_trainers [b2w2Trainer].levelf;
    document.querySelector('#type6').textContent = b2w2_trainers [b2w2Trainer].typef;
    document.querySelector('#ability6').textContent= b2w2_trainers [b2w2Trainer].abilityf;
    document.querySelector('#item6').textContent = b2w2_trainers [b2w2Trainer].itemf;
    document.querySelector('#hp6').textContent = b2w2_trainers [b2w2Trainer].hpf;
    document.querySelector('#atk6').textContent = b2w2_trainers [b2w2Trainer].atkf;
    document.querySelector('#def6').textContent = b2w2_trainers [b2w2Trainer].deff;
    document.querySelector('#spatk6').textContent = b2w2_trainers [b2w2Trainer].spatkf;
    document.querySelector('#spdef6').textContent = b2w2_trainers [b2w2Trainer].spdeff;
    document.querySelector('#spd6').textContent = b2w2_trainers [b2w2Trainer].spdf;
    document.querySelector('#move1_6').textContent = b2w2_trainers [b2w2Trainer].move1f;
    document.querySelector('#move2_6').textContent = b2w2_trainers [b2w2Trainer].move2f;
    document.querySelector('#move3_6').textContent = b2w2_trainers [b2w2Trainer].move3f;
    document.querySelector('#move4_6').textContent = b2w2_trainers [b2w2Trainer].move4f;
}

function showB2W2Images(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/b2w2/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonB2W2Images(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/b2w2/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/b2w2/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/b2w2/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/b2w2/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/b2w2/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/b2w2/" + trainerId + "_6.png";
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

    refCredit.textContent = "sheepscope"
    refCredit.href = "https://www.tapatalk.com/groups/nuzlocke_forum/official-natures-movesets-and-stats-t3452.html#p1630226"
}

cherenB2W2.addEventListener('click', displayB2W2Trainers);
roxieB2W2.addEventListener('click', displayB2W2Trainers);
burghB2W2.addEventListener('click', displayB2W2Trainers);
elesaB2W2.addEventListener('click', displayB2W2Trainers);
clayB2W2.addEventListener('click', displayB2W2Trainers);
skylaB2W2.addEventListener('click', displayB2W2Trainers);
draydenB2W2.addEventListener('click', displayB2W2Trainers);
marlonB2W2.addEventListener('click', displayB2W2Trainers);
ghetsisB2W2.addEventListener('click', displayB2W2Trainers);
shauntalB2W2.addEventListener('click', displayB2W2Trainers);
marshalB2W2.addEventListener('click', displayB2W2Trainers);
grimsleyB2W2.addEventListener('click', displayB2W2Trainers);
caitlinB2W2.addEventListener('click', displayB2W2Trainers);
irisB2W2.addEventListener('click', displayB2W2Trainers);