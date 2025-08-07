let cherenB2W2C = document.querySelector ("#cheren2");
let roxieB2W2C = document.querySelector ("#roxie2");
let burghB2W2C = document.querySelector ("#burgh3");
let elesaB2W2C = document.querySelector ("#elesa3");
let clayB2W2C = document.querySelector ("#clay3");
let skylaB2W2C = document.querySelector ("#skyla3");
let draydenB2W2C = document.querySelector ("#drayden3");
let marlonB2W2C = document.querySelector ("#marlon2");
let ghetsisB2W2C = document.querySelector ("#ghetsis3");
let shauntalB2W2C = document.querySelector ("#shauntal3");
let marshalB2W2C = document.querySelector ("#marshal3");
let grimsleyB2W2C = document.querySelector ("#grimsley3");
let caitlinB2W2C = document.querySelector ("#caitlin3");
let irisB2W2C = document.querySelector ("#iris3");

let b2w2c_trainers = [
    {
        namea : "Patrat",
        levela : "LV: 12",
        typea : "Type: Normal",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 36",
        atka : "Atk: 18",
        defa : "Def: 18",
        spatka : "Sp. Atk: 17",
        spdefa : "Sp. Def: 17",
        spda : "Spd: 18",
        move1a : "-Tackle",
        move2a : "-Work Up",
        move3a : "-Bite",
        move4a : "-Detect",

        nameb : "Pidove",
        levelb : "LV: 12",
        typeb : "Type: Normal/Flying",
        abilityb: "Ability: Super Luck",
        itemb : "Item: None",
        hpb : "HP: 37",
        atkb : "Atk: 21",
        defb : "Def: 18",
        spatkb : "Sp. Atk: 18",
        spdefb : "Sp. Def: 15",
        spdb : "Spd: 18",
        move1b : "-Quick Attack",
        move2b : "-Work Up",
        move3b : "-Leer",
        move4b : "-Growl",

        namec : "Lillipup",
        levelc : "LV: 14",
        typec : "Type: Normal",
        abilityc: "Ability: Vital Spirit",
        itemc : "Item: Oran Berry",
        hpc : "HP: 40",
        atkc : "Atk: 26",
        defc : "Def: 23",
        spatkc : "Sp. Atk: 16",
        spdefc : "Sp. Def: 18",
        spdc : "Spd: 24",
        move1c : "-Tackle",
        move2c : "-Work Up",
        move3c : "-Bite",
        move4c : "-Helping Hand",
    },

    {
        namea : "Koffing",
        levela : "LV: 17",
        typea : "Type: Poison",
        abilitya: "Ability: Levitate",
        itema : "Item: Oran Berry",
        hpa : "HP: 45",
        atka : "Atk: 35",
        defa : "Def: 37",
        spatka : "Sp. Atk: 30",
        spdefa : "Sp. Def: 25",
        spda : "Spd: 22",
        move1a : "-Assurance",
        move2a : "-Tackle",
        move3a : "-Smog",
        move4a : "-Venoshock",

        nameb : "Grimer",
        levelb : "LV: 17",
        typeb : "Type: Poison",
        abilityb: "Ability: Stench",
        itemb : "Item: None",
        hpb : "HP: 59",
        atkb : "Atk: 37",
        defb : "Def: 27",
        spatkb : "Sp. Atk: 20",
        spdefb : "Sp. Def: 29",
        spdb : "Spd: 18",
        move1b : "-Venoshock",
        move2b : "-Mud-Slap",
        move3b : "-Poison Gas",
        move4b : "-Disable",

        namec : "Whirlipede",
        levelc : "LV: 19",
        typec : "Type: Bug/Poison",
        abilityc: "Ability: Poison Point",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 49",
        atkc : "Atk: 31",
        defc : "Def: 48",
        spatkc : "Sp. Atk: 25",
        spdefc : "Sp. Def: 40",
        spdc : "Spd: 28",
        move1c : "-Venoshock",
        move2c : "-Protect",
        move3c : "-Poison Sting",
        move4c : "-Rollout",
    },

    {
        namea : "Dwebble",
        levela : "LV: 24",
        typea : "Type: Bug/Rock",
        abilitya: "Ability: Sturdy",
        itema : "Item: Sitrus Berry",
        hpa : "HP: 65",
        atka : "Atk: 47",
        defa : "Def: 53",
        spatka : "Sp. Atk: 29",
        spdefa : "Sp. Def: 29",
        spda : "Spd: 34",
        move1a : "-Rock Blast",
        move2a : "-Feint Attack",
        move3a : "-Rock Polish",
        move4a : "-Struggle Bug",

        nameb : "Shelmet",
        levelb : "LV: 24",
        typeb : "Type: Bug",
        abilityb: "Ability: Shell Armor",
        itemb : "Item: None",
        hpb : "HP: 65",
        atkb : "Atk: 34",
        defb : "Def: 53",
        spatkb : "Sp. Atk: 27",
        spdefb : "Sp. Def: 43",
        spdb : "Spd: 24",
        move1b : "-Acid",
        move2b : "-Mega Drain",
        move3b : "-Struggle Bug",
        move4b : "-Curse",

        namec : "Karrablast",
        levelc : "LV: 24",
        typec : "Type: Bug",
        abilityc: "Ability: Shed Skin",
        itemc : "Item: None",
        hpc : "HP: 65",
        atkc : "Atk: 48",
        defc : "Def: 33",
        spatkc : "Sp. Atk: 31",
        spdefc : "Sp. Def: 33",
        spdc : "Spd: 41",
        move1c : "-Endure",
        move2c : "-Aerial Ace",
        move3c : "-Struggle Bug",
        move4c : "-Headbutt",

        named : "Leavanny",
        leveld : "LV: 26",
        typed : "Type: Bug/Grass",
        abilityd: "Ability: Swarm",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 82",
        atkd : "Atk: 66",
        defd : "Def: 54",
        spatkd : "Sp. Atk: 49",
        spdefd : "Sp. Def: 49",
        spdd : "Spd: 60",
        move1d : "-Razor Leaf",
        move2d : "-Grass Whistle",
        move3d : "-Aerial Ace",
        move4d : "-Struggle Bug",
    },

    {
        namea : "Emolga",
        levela : "LV: 30",
        typea : "Type: Electic/Flying",
        abilitya: "Ability: Static",
        itema : "Item: Sitrus Berry",
        hpa : "HP: 82",
        atka : "Atk: 59",
        defa : "Def: 50",
        spatka : "Sp. Atk: 53",
        spdefa : "Sp. Def: 55",
        spda : "Spd: 75",
        move1a : "-Quick Attack",
        move2a : "-Pursuit",
        move3a : "-Aerial Ace",
        move4a : "-Volt Switch",

        nameb : "Flaaffy",
        levelb : "LV: 30",
        typeb : "Type: Electric",
        abilityb: "Ability: Static",
        itemb : "Item: None",
        hpb : "HP: 91",
        atkb : "Atk: 51",
        defb : "Def: 47",
        spatkb : "Sp. Atk: 62",
        spdefb : "Sp. Def: 50",
        spdb : "Spd: 36",
        move1b : "-Volt Switch",
        move2b : "-Thunder Wave",
        move3b : "-Confuse Ray",
        move4b : "-Take Down",

        namec : "Joltik",
        levelc : "LV: 30",
        typec : "Type: Bug/Electric",
        abilityc: "Ability: Unnerve",
        itemc : "Item: None",
        hpc : "HP: 79",
        atkc : "Atk: 42",
        defc : "Def: 44",
        spatkc : "Sp. Atk: 52",
        spdefc : "Sp. Def: 44",
        spdc : "Spd: 47",
        move1c : "-Thunder Wave",
        move2c : "-Volt Switch",
        move3c : "-Energy Ball",
        move4c : "-X-Scissor",

        named : "Zebstrika",
        leveld : "LV: 32",
        typed : "Type: Electric",
        abilityd: "Ability: Motor Drive",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 99",
        atkd : "Atk: 70",
        defd : "Def: 54",
        spatkd : "Sp. Atk: 65",
        spdefd : "Sp. Def: 54",
        spdd : "Spd: 96",
        move1d : "-Stomp",
        move2d : "-Volt Switch",
        move3d : "-Flame Charge",
        move4d : "-Pursuit",
    },

    {
        namea : "Krokorok",
        levela : "LV: 34",
        typea : "Type: Ground/Dark",
        abilitya: "Ability: Intimidate",
        itema : "Item: Sitrus Berry",
        hpa : "HP: 95",
        atka : "Atk: 70",
        defa : "Def: 40",
        spatka : "Sp. Atk: 45",
        spdefa : "Sp. Def: 45",
        spda : "Spd: 71",
        move1a : "-Bulldoze",
        move2a : "-Torment",
        move3a : "-Crunch",
        move4a : "-Sandstorm",

        nameb : "Sandslash",
        levelb : "LV: 34",
        typeb : "Type: Ground",
        abilityb: "Ability: Sand Veil",
        itemb : "Item: None",
        hpb : "HP: 105",
        atkb : "Atk: 83",
        defb : "Def: 81",
        spatkb : "Sp. Atk: 49",
        spdefb : "Sp. Def: 52",
        spdb : "Spd: 59",
        move1b : "-Bulldoze",
        move2b : "-Crush Claw",
        move3b : "-Hone Claws",
        move4b : "-Rock Slide",

        namec : "Onix",
        levelc : "LV: 34",
        typec : "Type: Rock/Ground",
        abilityc: "Ability: Sturdy",
        itemc : "Item: None",
        hpc : "HP: 78",
        atkc : "Atk: 45",
        defc : "Def: 124",
        spatkc : "Sp. Atk: 38",
        spdefc : "Sp. Def: 45",
        spdc : "Spd: 55",
        move1c : "-Explosion",
        move2c : "-Bulldoze",
        move3c : "-Rock Polish",
        move4c : "-Rock Slide",

        named : "Excadrill",
        leveld : "LV: 36",
        typed : "Type: Ground/Steel",
        abilityd: "Ability: Sand Force",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 136",
        atkd : "Atk: 124",
        defd : "Def: 59",
        spatkd : "Sp. Atk: 51",
        spdefd : "Sp. Def: 62",
        spdd : "Spd: 71",
        move1d : "-Bulldoze",
        move2d : "-Slash",
        move3d : "-Rock Slide",
        move4d : "-Metal Claw",
    },

    {
        namea : "Swoobat",
        levela : "LV: 40",
        typea : "Type: Psychic/Flying",
        abilitya: "Ability: Unaware",
        itema : "Item: None",
        hpa : "HP: 115",
        atka : "Atk: 62",
        defa : "Def: 61",
        spatka : "Sp. Atk: 78",
        spdefa : "Sp. Def: 61",
        spda : "Spd: 108",
        move1a : "-Acrobatics",
        move2a : "-Psychic",
        move3a : "-Energy Ball",
        move4a : "-Attract",

        nameb : "Skarmory",
        levelb : "LV: 40",
        typeb : "Type: Steel/Flying",
        abilityb: "Ability: Sturdy",
        itemb : "Item: Sitrus Berry",
        hpb : "HP: 114",
        atkb : "Atk: 81",
        defb : "Def: 116",
        spatkb : "Sp. Atk: 49",
        spdefb : "Sp. Def: 80",
        spdb : "Spd: 73",
        move1b : "-Aerial Ace",
        move2b : "-Agility",
        move3b : "-Steel Wing",
        move4b : "-X-Scissor",
        
        namec : "Sigilyph",
        levelc : "LV: 40",
        typec : "Type: Psychic/Flying",
        abilityc: "Ability: Magic Guard",
        itemc : "Item: None",
        hpc : "HP: 119",
        atkc : "Atk: 63",
        defc : "Def: 81",
        spatkc : "Sp. Atk: 99",
        spdefc : "Sp. Def: 81",
        spdc : "Spd: 94",
        move1c : "-Psychic",
        move2c : "-Hypnosis",
        move3c : "-Air Cutter",
        move4c : "-Flash Cannon",

        named : "Swanna",
        leveld : "LV: 42",
        typed : "Type: Water/Flying",
        abilityd: "Ability: Big Pecks",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 127",
        atkd : "Atk: 90",
        defd : "Def: 63",
        spatkd : "Sp. Atk: 90",
        spdefd : "Sp. Def: 70",
        spdd : "Spd: 108",
        move1d : "-Air Slash",
        move2d : "-Surf",
        move3d : "-Roost",
        move4d : "-Feather Dance",
    },

    {
        namea : "Druddigon",
        levela : "LV: 50",
        typea : "Type: Dragon",
        abilitya: "Ability: Sheer Force",
        itema : "Item: Sitrus Berry",
        hpa : "HP: 152",
        atka : "Atk: 140",
        defa : "Def: 99",
        spatka : "Sp. Atk: 80",
        spdefa : "Sp. Def: 121",
        spda : "Spd: 68",
        move1a : "-Revenge",
        move2a : "-Crunch",
        move3a : "-Rock Slide",
        move4a : "-Dragon Tail",

        nameb : "Flygon",
        levelb : "LV: 50",
        typeb : "Type: Ground/Dragon",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: 155",
        atkb : "Atk: 108",
        defb : "Def: 100",
        spatkb : "Sp. Atk: 110",
        spdefb : "Sp. Def: 100",
        spdb : "Spd: 120",
        move1b : "-Rock Slide",
        move2b : "-Earth Power",
        move3b : "-Crunch",
        move4b : "-Dragon Tail",

        namec : "Altaria",
        levelc : "LV: 50",
        typec : "Type: Dragon/Flying",
        abilityc: "Ability: Natural Cure",
        itemc : "Item: None",
        hpc : "HP: 150",
        atkc : "Atk: 90",
        defc : "Def: 110",
        spatkc : "Sp. Atk: 81",
        spdefc : "Sp. Def: 125",
        spdc : "Spd: 110",
        move1c : "-Cotton Guard",
        move2c : "-Fire Blast",
        move3c : "-Sing",
        move4c : "-Dragon Pulse",

        named : "Haxorus",
        leveld : "LV: 52",
        typed : "Type: Dragon",
        abilityd: "Ability: Mold Breaker",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 156",
        atkd : "Atk: 190",
        defd : "Def: 114",
        spatkd : "Sp. Atk: 83",
        spdefd : "Sp. Def: 83",
        spdd : "Spd: 121",
        move1d : "-Dragon Dance",
        move2d : "-Shadow Claw",
        move3d : "-X-Scissor",
        move4d : "-Dragon Tail",
    },

    {
        namea : "Wailord",
        levela : "LV: 53",
        typea : "Type: Water",
        abilitya: "Ability: Water Veil",
        itema : "Item: None",
        hpa : "HP: 259",
        atka : "Atk: 116",
        defa : "Def: 68",
        spatka : "Sp. Atk: 127",
        spdefa : "Sp. Def: 61",
        spda : "Spd: 84",
        move1a : "-Scald",
        move2a : "-Ice Beam",
        move3a : "-Rain Dance",
        move4a : "-Earthquake",

        nameb : "Mantine",
        levelb : "LV: 53",
        typeb : "Type: Water/Flying",
        abilityb: "Ability: Swift Swim",
        itemb : "Item: None",
        hpb : "HP: 147",
        atkb : "Atk: 63",
        defb : "Def: 95",
        spatkb : "Sp. Atk: 105",
        spdefb : "Sp. Def: 185",
        spdb : "Spd: 85",
        move1b : "-Air Slash",
        move2b : "-Ice Beam",
        move3b : "-Confuse Ray",
        move4b : "-Scald",

        namec : "Carracosta",
        levelc : "LV: 53",
        typec : "Type: Water/Rock",
        abilityc: "Ability: Sturdy",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 157",
        atkc : "Atk: 121",
        defc : "Def: 161",
        spatkc : "Sp. Atk: 108",
        spdefc : "Sp. Def: 97",
        spdc : "Spd: 54",
        move1c : "-Rock Slide",
        move2c : "-Shell Smash",
        move3c : "-Scald",
        move4c : "-Crunch",

        named : "Jellicent",
        leveld : "LV: 55",
        typed : "Type: Water/Ghost",
        abilityd: "Ability: Cursed Body",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 191",
        atkd : "Atk: 87",
        defd : "Def: 88",
        spatkd : "Sp. Atk: 126",
        spdefd : "Sp. Def: 137",
        spdd : "Spd: 87",
        move1d : "-Energy Ball",
        move2d : "-Recover",
        move3d : "-Scald",
        move4d : "-Shadow Ball",
    },

    {
        namea : "Cofagrigus",
        levela : "LV: 54",
        typea : "Type: Ghost",
        abilitya: "Ability: Mummy",
        itema : "Item: Leftovers",
        hpa : "HP: 139",
        atka : "Atk: 71",
        defa : "Def: 156",
        spatka : "Sp. Atk: 120",
        spdefa : "Sp. Def: 144",
        spda : "Spd: 50",
        move1a : "-Shadow Ball",
        move2a : "-Protect",
        move3a : "-Psychic",
        move4a : "-Toxic",

        nameb : "Seismitoad",
        levelb : "LV: 54",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Poison Touch",
        itemb : "Item: None",
        hpb : "HP: 190",
        atkb : "Atk: 119",
        defb : "Def: 88",
        spatkb : "Sp. Atk: 109",
        spdefb : "Sp. Def: 98",
        spdb : "Spd: 97",
        move1b : "-Muddy Water",
        move2b : "-Earthquake",
        move3b : "-Drain Punch",
        move4b : "-Sludge Wave",

        namec : "Eelektross",
        levelc : "LV: 54",
        typec : "Type: Electric",
        abilityc: "Ability: Levitate",
        itemc : "Item: None",
        hpc : "HP: 168",
        atkc : "Atk: 142",
        defc : "Def: 104",
        spatkc : "Sp. Atk: 117",
        spdefc : "Sp. Def: 104",
        spdc : "Spd: 78",
        move1c : "-Thunderbolt",
        move2c : "-Flamethrower",
        move3c : "-Acrobatics",
        move4c : "-Crunch",

        named : "Drapion",
        leveld : "LV: 54",
        typed : "Type: Poison/Dark",
        abilityd: "Ability: Sniper",
        itemd : "Item: None",
        hpd : "HP: 155",
        atkd : "Atk: 118",
        defd : "Def: 126",
        spatkd : "Sp. Atk: 94",
        spdefd : "Sp. Def: 102",
        spdd : "Spd: 123",
        move1d : "-Night Slash",
        move2d : "-Earthquake",
        move3d : "-Poison Fang",
        move4d : "-X-Scissor",

        namee : "Toxicroak",
        levele : "LV: 54",
        typee : "Type: Poison/Fighting",
        abilitye: "Ability: Anticipation",
        iteme : "Item: None",
        hpe : "HP: 169",
        atke : "Atk: 135",
        defe : "Def: 91",
        spatke : "Sp. Atk: 114",
        spdefe : "Sp. Def: 100",
        spde : "Spd: 101",
        move1e : "-Brick Break",
        move2e : "-Shadow Ball",
        move3e : "-Sucker Punch",
        move4e : "-Poison Jab",

        namef : "Hydreigon",
        levelf : "LV: 56",
        typef : "Type: Dark/Dragon",
        abilityf: "Ability: Levitate",
        itemf : "Item: Life Orb",
        hpf : "HP: 185",
        atkf : "Atk: 152",
        deff : "Def: 109",
        spatkf : "Sp. Atk: 161",
        spdeff : "Sp. Def: 122",
        spdf : "Spd: 131",
        move1f : "-Dragon Rush",
        move2f : "-Crunch",
        move3f : "-Rock Slide",
        move4f : "-Frustration",
    },

    {
        namea : "Cofagrigus",
        levela : "LV: 60",
        typea : "Type: Ghost",
        abilitya: "Ability: Mummy",
        itema : "Item: Leftovers",
        hpa : "HP: 157",
        atka : "Atk: 83",
        defa : "Def: 177",
        spatka : "Sp. Atk: 137",
        spdefa : "Sp. Def: 163",
        spda : "Spd: 59",
        move1a : "-Psychic",
        move2a : "-Will-O-Wisp",
        move3a : "-Shadow Ball",
        move4a : "-Grass Knot",

        nameb : "Drifblim",
        levelb : "LV: 60",
        typeb : "Type: Ghost/Flying",
        abilityb: "Ability: Unburden",
        itemb : "Item: Flying Gem",
        hpb : "HP: 268",
        atkb : "Atk: 119",
        defb : "Def: 75",
        spatkb : "Sp. Atk: 131",
        spdefb : "Sp. Def: 87",
        spdb : "Spd: 119",
        move1b : "-Acrobatics",
        move2b : "-Shadow Ball",
        move3b : "-Thunderbolt",
        move4b : "-Psychic",

        namec : "Golurk",
        levelc : "LV: 60",
        typec : "Type: Ghost/Ground",
        abilityc: "Ability: Iron Fist",
        itemc : "Item: Expert Belt",
        hpc : "HP: 194",
        atkc : "Atk: 188",
        defc : "Def: 107",
        spatkc : "Sp. Atk: 89",
        spdefc : "Sp. Def: 119",
        spdc : "Spd: 89",
        move1c : "-Earthquake",
        move2c : "-Shadow Punch",
        move3c : "-Brick Break",
        move4c : "-Heavy Slam",

        named : "Banette",
        leveld : "LV: 60",
        typed : "Type: Ghost",
        abilityd: "Ability: Insomnia",
        itemd : "Item: Muscle Band",
        hpd : "HP: 164",
        atkd : "Atk: 161",
        defd : "Def: 101",
        spatkd : "Sp. Atk: 122",
        spdefd : "Sp. Def: 88",
        spdd : "Spd: 111",
        move1d : "-Shadow Claw",
        move2d : "-Will-O-Wisp",
        move3d : "-Psychic",
        move4d : "-Sucker Punch",

        namee : "Chandelure",
        levele : "LV: 62",
        typee : "Type: Ghost/Fire",
        abilitye: "Ability: Flame Body",
        iteme : "Item: Choice Scarf",
        hpe : "HP: 165",
        atke : "Atk: 91",
        defe : "Def: 135",
        spatke : "Sp. Atk: 223",
        spdefe : "Sp. Def: 121",
        spde : "Spd: 122",
        move1e : "-Fire Blast",
        move2e : "-Shadow Ball",
        move3e : "-Psychic",
        move4e : "-Energy Ball",
    },

    {
        namea : "Throh",
        levela : "LV: 60",
        typea : "Type: Fighting",
        abilitya: "Ability: Guts",
        itema : "Item: Leftovers",
        hpa : "HP: 232",
        atka : "Atk: 128",
        defa : "Def: 137",
        spatka : "Sp. Atk: 59",
        spdefa : "Sp. Def: 125",
        spda : "Spd: 77",
        move1a : "-Rock Tomb",
        move2a : "-Payback",
        move3a : "-Bulldoze",
        move4a : "-Storm Throw",

        nameb : "Sawk",
        levelb : "LV: 60",
        typeb : "Type: Fighting",
        abilityb: "Ability: Sturdy",
        itemb : "Item: Muscle Band",
        hpb : "HP: 178",
        atkb : "Atk: 173",
        defb : "Def: 124",
        spatkb : "Sp. Atk: 59",
        spdefb : "Sp. Def: 113",
        spdb : "Spd: 112",
        move1b : "-Payback",
        move2b : "-Rock Slide",
        move3b : "-Brick Break",
        move4b : "-Retaliate",

        namec : "Mienshao",
        levelc : "LV: 60",
        typec : "Type: Fighting",
        abilityc: "Ability: Regenerator",
        itemc : "Item: Expert Belt",
        hpc : "HP: 166",
        atkc : "Atk: 173",
        defc : "Def: 104",
        spatkc : "Sp. Atk: 123",
        spdefc : "Sp. Def: 95",
        spdc : "Spd: 149",
        move1c : "-U-Turn",
        move2c : "-High Jump Kick",
        move3c : "-Bounce",
        move4c : "-Retaliate",

        named : "Lucario",
        leveld : "LV: 60",
        typed : "Type: Fightning/Steel",
        abilityd: "Ability: Inner Focus",
        itemd : "Item: Wise Glasses",
        hpd : "HP: 172",
        atkd : "Atk: 170",
        defd : "Def: 107",
        spatkd : "Sp. Atk: 161",
        spdefd : "Sp. Def: 107",
        spdd : "Spd: 117",
        move1d : "-Shadow Ball",
        move2d : "-Aura Sphere",
        move3d : "-Psychic",
        move4d : "-Calm Mind",

        namee : "Conkeldurr",
        levele : "LV: 62",
        typee : "Type: Fighting",
        abilitye: "Ability: Guts",
        iteme : "Item: Flame Orb",
        hpe : "HP: 220",
        atke : "Atk: 177",
        defe : "Def: 141",
        spatke : "Sp. Atk: 100",
        spdefe : "Sp. Def: 104",
        spde : "Spd: 79",
        move1e : "-Stone Edge",
        move2e : "-Hammer Arm",
        move3e : "-Earthquake",
        move4e : "-Bulk Up",
    },

    {
        namea : "Liepard",
        levela : "LV: 60",
        typea : "Type: Dark",
        abilitya: "Ability: Unburden",
        itema : "Item: Normal Gem",
        hpa : "HP: 164",
        atka : "Atk: 140",
        defa : "Def: 74",
        spatka : "Sp. Atk: 128",
        spdefa : "Sp. Def: 83",
        spda : "Spd: 150",
        move1a : "-Fake Out",
        move2a : "-Night Slash",
        move3a : "-Aerial Ace",
        move4a : "-Attract",

        nameb : "Scrafty",
        levelb : "LV: 60",
        typeb : "Type: Dark/Fighting",
        abilityb: "Ability: Moxie",
        itemb : "Item: Leftovers",
        hpb : "HP: 166",
        atkb : "Atk: 131",
        defb : "Def: 144",
        spatkb : "Sp. Atk: 77",
        spdefb : "Sp. Def: 161",
        spdb : "Spd: 101",
        move1b : "-Rock Tomb",
        move2b : "-Crunch",
        move3b : "-Poison Jab",
        move4b : "-Brick Break",

        namec : "Krookodile",
        levelc : "LV: 60",
        typec : "Type: Ground/Dark",
        abilityc: "Ability: Intimidate",
        itemc : "Item: Expert Belt",
        hpc : "HP: 202",
        atkc : "Atk: 163",
        defc : "Def: 107",
        spatkc : "Sp. Atk: 101",
        spdefc : "Sp. Def: 107",
        spdc : "Spd: 133",
        move1c : "-Rock Tomb",
        move2c : "-Crunch",
        move3c : "-Dragon Claw",
        move4c : "-Earthquake",

        named : "Absol",
        leveld : "LV: 60",
        typed : "Type: Dark",
        abilityd: "Ability: Super Luck",
        itemd : "Item: Muscle Band",
        hpd : "HP: 166",
        atkd : "Atk: 179",
        defd : "Def: 95",
        spatkd : "Sp. Atk: 113",
        spdefd : "Sp. Def: 95",
        spdd : "Spd: 113",
        move1d : "-Swords Dance",
        move2d : "-Night Slash",
        move3d : "-Psycho Cut",
        move4d : "-X-Scissor",

        namee : "Bisharp",
        levele : "LV: 62",
        typee : "Type: Dark/Steel",
        abilitye: "Ability: Defiant",
        iteme : "Item: Quick Claw",
        hpe : "HP: 171",
        atke : "Atk: 178",
        defe : "Def: 132",
        spatke : "Sp. Atk: 98",
        spdefe : "Sp. Def: 110",
        spde : "Spd: 121",
        move1e : "-Night Slash",
        move2e : "-Aerial Ace",
        move3e : "-Metal Claw",
        move4e : "-X-Scissor",
    },

    {
        namea : "Musharna",
        levela : "LV: 60",
        typea : "Type: Psychic",
        abilitya: "Ability: Synchronize",
        itema : "Item: Zoom Lens",
        hpa : "HP: 227",
        atka : "Atk: 89",
        defa : "Def: 125",
        spatka : "Sp. Atk: 151",
        spdefa : "Sp. Def: 137",
        spda : "Spd: 57",
        move1a : "-Hypnosis",
        move2a : "-Dream Eater",
        move3a : "-Charge Beam",
        move4a : "-Reflect",

        nameb : "Sigilyph",
        levelb : "LV: 60",
        typeb : "Type: Psychic/Flying",
        abilityb: "Ability: Wonder Skin",
        itemb : "Item: Expert Belt",
        hpb : "HP: 174",
        atkb : "Atk: 92",
        defb : "Def: 119",
        spatkb : "Sp. Atk: 146",
        spdefb : "Sp. Def: 119",
        spdb : "Spd: 139",
        move1b : "-Psychic",
        move2b : "-Air Slash",
        move3b : "-Ice Beam",
        move4b : "-Shadow Ball",

        namec : "Reuniclus",
        levelc : "LV: 60",
        typec : "Type: Psychic",
        abilityc: "Ability: Magic Guard",
        itemc : "Item: Leftovers",
        hpc : "HP: 220",
        atkc : "Atk: 101",
        defc : "Def: 113",
        spatkc : "Sp. Atk: 173",
        spdefc : "Sp. Def: 125",
        spdc : "Spd: 59",
        move1c : "-Recover",
        move2c : "-Focus Blast",
        move3c : "-Energy Ball",
        move4c : "-Psychic",

        named : "Gothitelle",
        leveld : "LV: 60",
        typed : "Type: Psychic",
        abilityd: "Ability: Frisk",
        itemd : "Item: Wise Glasses",
        hpd : "HP: 172",
        atkd : "Atk: 80",
        defd : "Def: 137",
        spatkd : "Sp. Atk: 137",
        spdefd : "Sp. Def: 155",
        spdd : "Spd: 111",
        move1d : "-Calm Mind",
        move2d : "-Psychic",
        move3d : "-Thunderbolt",
        move4d : "-Shadow Ball",

        namee : "Metagross",
        levele : "LV: 62",
        typee : "Type: Steel/Psychic",
        abilitye: "Ability: Clear Body",
        iteme : "Item: Life Orb",
        hpe : "HP: 189",
        atke : "Atk: 210",
        defe : "Def: 165",
        spatke : "Sp. Atk: 141",
        spdefe : "Sp. Def: 135",
        spde : "Spd: 110",
        move1e : "-Zen Headbutt",
        move2e : "-Bullet Punch",
        move3e : "-Hammer Arm",
        move4e : "-Shadow Ball",
    },

    {
        namea : "Hydreigon",
        levela : "LV: 61",
        typea : "Type: Dark/Dragon",
        abilitya: "Ability: Levitate",
        itema : "Item: Wise Glasses",
        hpa : "HP: 201",
        atka : "Atk: 166",
        defa : "Def: 119",
        spatka : "Sp. Atk: 175",
        spdefa : "Sp. Def: 133",
        spda : "Spd: 142",
        move1a : "-Fire Blast",
        move2a : "-Focus Blast",
        move3a : "-Dragon Pulse",
        move4a : "-Surf",

        nameb : "Druddigon",
        levelb : "LV: 61",
        typeb : "Type: Dragon",
        abilityb: "Ability: Sheer Force",
        itemb : "Item: Life Orb",
        hpb : "HP: 183",
        atkb : "Atk: 185",
        defb : "Def: 133",
        spatkb : "Sp. Atk: 96",
        spdefb : "Sp. Def: 119",
        spdb : "Spd: 81",
        move1b : "-Thunder Punch",
        move2b : "-Fire Punch",
        move3b : "-Outrage",
        move4b : "-Focus Blast",

        namec : "Archeops",
        levelc : "LV: 61",
        typec : "Type: Rock/Flying",
        abilityc: "Ability: Defeatist",
        itemc : "Item: Flying Gem",
        hpc : "HP: 180",
        atkc : "Atk: 213",
        defc : "Def: 102",
        spatkc : "Sp. Atk: 159",
        spdefc : "Sp. Def: 102",
        spdc : "Spd: 141",
        move1c : "-Acrobatics",
        move2c : "-Stone Edge",
        move3c : "-Dragon Claw",
        move4c : "-Endeavor",

        named : "Aggron",
        leveld : "LV: 61",
        typed : "Type: Steel/Rock",
        abilityd: "Ability: Rock Head",
        itemd : "Item: Muscle Band",
        hpd : "HP: 174",
        atkd : "Atk: 157",
        defd : "Def: 242",
        spatkd : "Sp. Atk: 86",
        spdefd : "Sp. Def: 105",
        spdd : "Spd: 84",
        move1d : "-Earthquake",
        move2d : "-Double-Edge",
        move3d : "-Head Smash",
        move4d : "-Autotomize",

        namee : "Lapras",
        levele : "LV: 61",
        typee : "Type: Water/Ice",
        abilitye: "Ability: Water Absorb",
        iteme : "Item: Wide Lens",
        hpe : "HP: 247",
        atke : "Atk: 127",
        defe : "Def: 108",
        spatke : "Sp. Atk: 127",
        spdefe : "Sp. Def: 139",
        spde : "Spd: 106",
        move1e : "-Hydro Pump",
        move2e : "-Blizzard",
        move3e : "-Thunder",
        move4e : "-Sing",

        namef : "Haxorus",
        levelf : "LV: 63",
        typef : "Type: Dragon",
        abilityf: "Ability: Mold Breaker",
        itemf : "Item: Focus Sash",
        hpf : "HP: 187",
        atkf : "Atk: 209",
        deff : "Def: 137",
        spatkf : "Sp. Atk: 99",
        spdeff : "Sp. Def: 112",
        spdf : "Spd: 146",
        move1f : "-Earthquake",
        move2f : "-X-Scissor",
        move3f : "-Outrage",
        move4f : "-Dragon Dance",
    },

    
]

function displayB2W2CTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showB2W2CImages(newTrainerId);
        showPokemonB2W2CImages(newTrainerId);
    }


    let b2w2cTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = b2w2c_trainers [b2w2cTrainer].namea;
    document.querySelector('#level1').textContent = b2w2c_trainers [b2w2cTrainer].levela;
    document.querySelector('#type1').textContent = b2w2c_trainers [b2w2cTrainer].typea;
    document.querySelector('#ability1').textContent= b2w2c_trainers [b2w2cTrainer].abilitya;
    document.querySelector('#item1').textContent = b2w2c_trainers [b2w2cTrainer].itema;
    document.querySelector('#hp1').textContent = b2w2c_trainers [b2w2cTrainer].hpa;
    document.querySelector('#atk1').textContent = b2w2c_trainers [b2w2cTrainer].atka;
    document.querySelector('#def1').textContent = b2w2c_trainers [b2w2cTrainer].defa;
    document.querySelector('#spatk1').textContent = b2w2c_trainers [b2w2cTrainer].spatka;
    document.querySelector('#spdef1').textContent = b2w2c_trainers [b2w2cTrainer].spdefa;
    document.querySelector('#spd1').textContent = b2w2c_trainers [b2w2cTrainer].spda;
    document.querySelector('#move1_1').textContent = b2w2c_trainers [b2w2cTrainer].move1a;
    document.querySelector('#move2_1').textContent = b2w2c_trainers [b2w2cTrainer].move2a;
    document.querySelector('#move3_1').textContent = b2w2c_trainers [b2w2cTrainer].move3a;
    document.querySelector('#move4_1').textContent = b2w2c_trainers [b2w2cTrainer].move4a;

    
    document.querySelector('#name2').textContent = b2w2c_trainers [b2w2cTrainer].nameb;
    document.querySelector('#level2').textContent = b2w2c_trainers [b2w2cTrainer].levelb;
    document.querySelector('#type2').textContent = b2w2c_trainers [b2w2cTrainer].typeb;
    document.querySelector('#ability2').textContent= b2w2c_trainers [b2w2cTrainer].abilityb;
    document.querySelector('#item2').textContent = b2w2c_trainers [b2w2cTrainer].itemb;
    document.querySelector('#hp2').textContent = b2w2c_trainers [b2w2cTrainer].hpb;
    document.querySelector('#atk2').textContent = b2w2c_trainers [b2w2cTrainer].atkb;
    document.querySelector('#def2').textContent = b2w2c_trainers [b2w2cTrainer].defb;
    document.querySelector('#spatk2').textContent = b2w2c_trainers [b2w2cTrainer].spatkb;
    document.querySelector('#spdef2').textContent = b2w2c_trainers [b2w2cTrainer].spdefb;
    document.querySelector('#spd2').textContent = b2w2c_trainers [b2w2cTrainer].spdb;
    document.querySelector('#move1_2').textContent = b2w2c_trainers [b2w2cTrainer].move1b;
    document.querySelector('#move2_2').textContent = b2w2c_trainers [b2w2cTrainer].move2b;
    document.querySelector('#move3_2').textContent = b2w2c_trainers [b2w2cTrainer].move3b;
    document.querySelector('#move4_2').textContent = b2w2c_trainers [b2w2cTrainer].move4b;

    document.querySelector('#name3').textContent = b2w2c_trainers [b2w2cTrainer].namec;
    document.querySelector('#level3').textContent = b2w2c_trainers [b2w2cTrainer].levelc;
    document.querySelector('#type3').textContent = b2w2c_trainers [b2w2cTrainer].typec;
    document.querySelector('#ability3').textContent= b2w2c_trainers [b2w2cTrainer].abilityc;
    document.querySelector('#item3').textContent = b2w2c_trainers [b2w2cTrainer].itemc;
    document.querySelector('#hp3').textContent = b2w2c_trainers [b2w2cTrainer].hpc;
    document.querySelector('#atk3').textContent = b2w2c_trainers [b2w2cTrainer].atkc;
    document.querySelector('#def3').textContent = b2w2c_trainers [b2w2cTrainer].defc;
    document.querySelector('#spatk3').textContent = b2w2c_trainers [b2w2cTrainer].spatkc;
    document.querySelector('#spdef3').textContent = b2w2c_trainers [b2w2cTrainer].spdefc;
    document.querySelector('#spd3').textContent = b2w2c_trainers [b2w2cTrainer].spdc;
    document.querySelector('#move1_3').textContent = b2w2c_trainers [b2w2cTrainer].move1c;
    document.querySelector('#move2_3').textContent = b2w2c_trainers [b2w2cTrainer].move2c;
    document.querySelector('#move3_3').textContent = b2w2c_trainers [b2w2cTrainer].move3c;
    document.querySelector('#move4_3').textContent = b2w2c_trainers [b2w2cTrainer].move4c;

    document.querySelector('#name4').textContent = b2w2c_trainers [b2w2cTrainer].named;
    document.querySelector('#level4').textContent = b2w2c_trainers [b2w2cTrainer].leveld;
    document.querySelector('#type4').textContent = b2w2c_trainers [b2w2cTrainer].typed;
    document.querySelector('#ability4').textContent= b2w2c_trainers [b2w2cTrainer].abilityd;
    document.querySelector('#item4').textContent = b2w2c_trainers [b2w2cTrainer].itemd;
    document.querySelector('#hp4').textContent = b2w2c_trainers [b2w2cTrainer].hpd;
    document.querySelector('#atk4').textContent = b2w2c_trainers [b2w2cTrainer].atkd;
    document.querySelector('#def4').textContent = b2w2c_trainers [b2w2cTrainer].defd;
    document.querySelector('#spatk4').textContent = b2w2c_trainers [b2w2cTrainer].spatkd;
    document.querySelector('#spdef4').textContent = b2w2c_trainers [b2w2cTrainer].spdefd;
    document.querySelector('#spd4').textContent = b2w2c_trainers [b2w2cTrainer].spdd;
    document.querySelector('#move1_4').textContent = b2w2c_trainers [b2w2cTrainer].move1d;
    document.querySelector('#move2_4').textContent = b2w2c_trainers [b2w2cTrainer].move2d;
    document.querySelector('#move3_4').textContent = b2w2c_trainers [b2w2cTrainer].move3d;
    document.querySelector('#move4_4').textContent = b2w2c_trainers [b2w2cTrainer].move4d;

    document.querySelector('#name5').textContent = b2w2c_trainers [b2w2cTrainer].namee;
    document.querySelector('#level5').textContent = b2w2c_trainers [b2w2cTrainer].levele;
    document.querySelector('#type5').textContent = b2w2c_trainers [b2w2cTrainer].typee;
    document.querySelector('#ability5').textContent= b2w2c_trainers [b2w2cTrainer].abilitye;
    document.querySelector('#item5').textContent = b2w2c_trainers [b2w2cTrainer].iteme;
    document.querySelector('#hp5').textContent = b2w2c_trainers [b2w2cTrainer].hpe;
    document.querySelector('#atk5').textContent = b2w2c_trainers [b2w2cTrainer].atke;
    document.querySelector('#def5').textContent = b2w2c_trainers [b2w2cTrainer].defe;
    document.querySelector('#spatk5').textContent = b2w2c_trainers [b2w2cTrainer].spatke;
    document.querySelector('#spdef5').textContent = b2w2c_trainers [b2w2cTrainer].spdefe;
    document.querySelector('#spd5').textContent = b2w2c_trainers [b2w2cTrainer].spde;
    document.querySelector('#move1_5').textContent = b2w2c_trainers [b2w2cTrainer].move1e;
    document.querySelector('#move2_5').textContent = b2w2c_trainers [b2w2cTrainer].move2e;
    document.querySelector('#move3_5').textContent = b2w2c_trainers [b2w2cTrainer].move3e;
    document.querySelector('#move4_5').textContent = b2w2c_trainers [b2w2cTrainer].move4e;

    document.querySelector('#name6').textContent = b2w2c_trainers [b2w2cTrainer].namef;
    document.querySelector('#level6').textContent = b2w2c_trainers [b2w2cTrainer].levelf;
    document.querySelector('#type6').textContent = b2w2c_trainers [b2w2cTrainer].typef;
    document.querySelector('#ability6').textContent= b2w2c_trainers [b2w2cTrainer].abilityf;
    document.querySelector('#item6').textContent = b2w2c_trainers [b2w2cTrainer].itemf;
    document.querySelector('#hp6').textContent = b2w2c_trainers [b2w2cTrainer].hpf;
    document.querySelector('#atk6').textContent = b2w2c_trainers [b2w2cTrainer].atkf;
    document.querySelector('#def6').textContent = b2w2c_trainers [b2w2cTrainer].deff;
    document.querySelector('#spatk6').textContent = b2w2c_trainers [b2w2cTrainer].spatkf;
    document.querySelector('#spdef6').textContent = b2w2c_trainers [b2w2cTrainer].spdeff;
    document.querySelector('#spd6').textContent = b2w2c_trainers [b2w2cTrainer].spdf;
    document.querySelector('#move1_6').textContent = b2w2c_trainers [b2w2cTrainer].move1f;
    document.querySelector('#move2_6').textContent = b2w2c_trainers [b2w2cTrainer].move2f;
    document.querySelector('#move3_6').textContent = b2w2c_trainers [b2w2cTrainer].move3f;
    document.querySelector('#move4_6').textContent = b2w2c_trainers [b2w2cTrainer].move4f;
}

function showB2W2CImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/b2w2_challenge/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonB2W2CImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/b2w2_challenge/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/b2w2_challenge/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/b2w2_challenge/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/b2w2_challenge/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/b2w2_challenge/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/b2w2_challenge/" + trainerId + "_6.png";
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

cherenB2W2C.addEventListener('click', displayB2W2CTrainers);
roxieB2W2C.addEventListener('click', displayB2W2CTrainers);
burghB2W2C.addEventListener('click', displayB2W2CTrainers);
elesaB2W2C.addEventListener('click', displayB2W2CTrainers);
clayB2W2C.addEventListener('click', displayB2W2CTrainers);
skylaB2W2C.addEventListener('click', displayB2W2CTrainers);
draydenB2W2C.addEventListener('click', displayB2W2CTrainers);
marlonB2W2C.addEventListener('click', displayB2W2CTrainers);
ghetsisB2W2C.addEventListener('click', displayB2W2CTrainers);
shauntalB2W2C.addEventListener('click', displayB2W2CTrainers);
marshalB2W2C.addEventListener('click', displayB2W2CTrainers);
grimsleyB2W2C.addEventListener('click', displayB2W2CTrainers);
caitlinB2W2C.addEventListener('click', displayB2W2CTrainers);
irisB2W2C.addEventListener('click', displayB2W2CTrainers);