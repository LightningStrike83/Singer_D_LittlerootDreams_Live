let roarkDP = document.querySelector ("#roark1");
let marsDP = document.querySelector ("#mars1");
let gardeniaDP = document.querySelector ("#gardenia1");
let jupiterDP = document.querySelector ("#jupiter1");
let mayleneDP = document.querySelector ("#maylene1");
let crasherwakeDP = document.querySelector ("#crasherwake1");
let fantinaDP = document.querySelector ("#fantina1");
let byronDP = document.querySelector ("#byron1");
let candiceDP = document.querySelector ("#candice1");
let cyrusDP = document.querySelector ("#cyrus1");
let volknerDP = document.querySelector ("#volkner1");
let barry1GDP = document.querySelector("#barry1_g");
let barry1FDP = document.querySelector("#barry1_f");
let barry1WDP = document.querySelector("#barry1_w");
let aaronDP = document.querySelector ("#aaron1");
let berthaDP = document.querySelector ("#bertha1");
let flintDP = document.querySelector ("#flint1");
let lucianDP = document.querySelector ("#lucian1");
let cynthiaDP = document.querySelector ("#cynthia1");

let dp_trainers = [
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
        levela : "LV: 14",
        typea : "Type: Poison/Flying",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 36",
        atka : "Atk: 17",
        defa : "Def: 16",
        spatka : "Sp. Atk: 15",
        spdefa : "Sp. Def: 18",
        spda : "Spd: 22",
        move1a : "-Bite",
        move2a : "-Leech Life",
        move3a : "-Toxic",
        move4a : "",

        nameb : "Purugly",
        levelb : "LV: 16",
        typeb : "Type: Normal",
        abilityb: "Ability: Thick Fat",
        itemb : "Item: Oran Berry",
        hpb : "HP: 50",
        atkb : "Atk: 33",
        defb : "Def: 29",
        spatkb : "Sp. Atk: 24",
        spdefb : "Sp. Def: 25",
        spdb : "Spd: 42",
        move1b : "-Fake Out",
        move2b : "-Scratch",
        move3b : "-Feint Attack",
        move4b : "",
    },

    {
        namea : "Cherubi",
        levela : "LV: 19",
        typea : "Type: Grass",
        abilitya: "Ability: Chlorophyll",
        itema : "Item: None",
        hpa : "HP: 47",
        atka : "Atk: 19",
        defa : "Def: 23",
        spatka : "Sp. Atk: 39",
        spdefa : "Sp. Def: 28",
        spda : "Spd: 17",
        move1a : "-Grass Knot",
        move2a : "-Growth",
        move3a : "-Leech Seed",
        move4a : "-Safeguard",

        nameb : "Turtwig",
        levelb : "LV: 19",
        typeb : "Type: Grass",
        abilityb: "Ability: Overgrow",
        itemb : "Item: None",
        hpb : "HP: 51",
        atkb : "Atk: 31",
        defb : "Def: 27",
        spatkb : "Sp. Atk: 23",
        spdefb : "Sp. Def: 29",
        spdb : "Spd: 17",
        move1b : "-Grass Knot",
        move2b : "-Razor Leaf",
        move3b : "-Reflect",
        move4b : "-Withdraw",

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
        levela : "LV: 18",
        typea : "Type: Poison/Flying",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 44",
        atka : "Atk: 23",
        defa : "Def: 19",
        spatka : "Sp. Atk: 17",
        spdefa : "Sp. Def: 21",
        spda : "Spd: 26",
        move1a : "-Giga Drain",
        move2a : "-Wing Attack",
        move3a : "-Bite",
        move4a : "",

        nameb : "Skuntank",
        levelb : "LV: 20",
        typeb : "Type: Poison/Dark",
        abilityb: "Ability: Stench",
        itemb : "Item: Sitrus Berry",
        hpb : "HP: 73",
        atkb : "Atk: 44",
        defb : "Def: 30",
        spatkb : "Sp. Atk: 38",
        spdefb : "Sp. Def: 31",
        spdb : "Spd: 41",
        move1b : "-Poison Gas",
        move2b : "-Night Slash",
        move3b : "-Screech",
        move4b : "-Smokescreen",
    },

    {
        namea : "Meditite",
        levela : "LV: 27",
        typea : "Type: Psychic/Fighting",
        abilitya: "Ability: Pure Power",
        itema : "Item: None",
        hpa : "HP: 56",
        atka : "Atk: 26",
        defa : "Def: 37",
        spatka : "Sp. Atk: 29",
        spdefa : "Sp. Def: 37",
        spda : "Spd: 44",
        move1a : "-Drain Punch",
        move2a : "-Confusion",
        move3a : "-Detect",
        move4a : "-Meditate",

        nameb : "Machoke",
        levelb : "LV: 27",
        typeb : "Type: Fighting",
        abilityb: "Ability: Guts",
        itemb : "Item: None",
        hpb : "HP: 83",
        atkb : "Atk: 62",
        defb : "Def: 50",
        spatkb : "Sp. Atk: 35",
        spdefb : "Sp. Def: 36",
        spdb : "Spd: 32",
        move1b : "-Brick Break",
        move2b : "-Leer",
        move3b : "-Rock Tomb",
        move4b : "-Foresight",

        namec : "Lucario",
        levelc : "LV: 30",
        typec : "Type: Fighting/Steel",
        abilityc: "Ability: Steadfast",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 85",
        atkc : "Atk: 74",
        defc : "Def: 45",
        spatkc : "Sp. Atk: 84",
        spdefc : "Sp. Def: 50",
        spdc : "Spd: 62",
        move1c : "-Drain Punch",
        move2c : "-Bone Rush",
        move3c : "-Metal Claw",
        move4c : "-Force Palm",
    },

    {
        namea : "Gyarados",
        levela : "LV: 27",
        typea : "Type: Water/Flying",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 91",
        atka : "Atk: 75",
        defa : "Def: 50",
        spatka : "Sp. Atk: 40",
        spdefa : "Sp. Def: 62",
        spda : "Spd: 51",
        move1a : "-Brine",
        move2a : "-Dragon Rage",
        move3a : "-Bite",
        move4a : "-Swagger",

        nameb : "Quagsire",
        levelb : "LV: 27",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Damp",
        itemb : "Item: None",
        hpb : "HP: 91",
        atkb : "Atk: 54",
        defb : "Def: 54",
        spatkb : "Sp. Atk: 47",
        spdefb : "Sp. Def: 38",
        spdb : "Spd: 27",
        move1b : "-Slam",
        move2b : "-Mud Bomb",
        move3b : "-Mud Sport",
        move4b : "-Tail Whip",

        namec : "Floatzel",
        levelc : "LV: 30",
        typec : "Type: Water",
        abilityc: "Ability: Swift Swim",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 94",
        atkc : "Atk: 78",
        defc : "Def: 41",
        spatkc : "Sp. Atk: 53",
        spdefc : "Sp. Def: 38",
        spdc : "Spd: 77",
        move1c : "-Brine",
        move2c : "-Ice Fang",
        move3c : "-Pursuit",
        move4c : "-Swift",
    },

    {
        namea : "Drifblim",
        levela : "LV: 32",
        typea : "Type: Ghost/Flying",
        abilitya: "Ability: Aftermath",
        itema : "Item: None",
        hpa : "HP: 143",
        atka : "Atk: 61",
        defa : "Def: 38",
        spatka : "Sp. Atk: 68",
        spdefa : "Sp. Def: 45",
        spda : "Spd: 61",
        move1a : "-Ominous Wind",
        move2a : "-Gust",
        move3a : "-Astonish",
        move4a : "-Minimize",

        nameb : "Gengar",
        levelb : "LV: 34",
        typeb : "Type: Ghost/Poison",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: 90",
        atkb : "Atk: 55",
        defb : "Def: 51",
        spatkb : "Sp. Atk: 89",
        spdefb : "Sp. Def: 62",
        spdb : "Spd: 93",
        move1b : "-Shadow Claw",
        move2b : "-Confuse Ray",
        move3b : "-Poison Jab",
        move4b : "-Spite",

        namec : "Mismagius",
        levelc : "LV: 36",
        typec : "Type: Ghost",
        abilityc: "Ability: Levitate",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 95",
        atkc : "Atk: 54",
        defc : "Def: 48",
        spatkc : "Sp. Atk: 95",
        spdefc : "Sp. Def: 87",
        spdc : "Spd: 87",
        move1c : "-Confuse Ray",
        move2c : "-Shadow Ball",
        move3c : "-Psybeam",
        move4c : "-Magical Leaf",
    },

    {
        namea : "Bronzor",
        levela : "LV: 36",
        typea : "Type: Steel/Psychic",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: 93",
        atka : "Atk: 28",
        defa : "Def: 65",
        spatka : "Sp. Atk: 28",
        spdefa : "Sp. Def: 80",
        spda : "Spd: 28",
        move1a : "-Confuse Ray",
        move2a : "-Hypnosis",
        move3a : "-Extrasensory",
        move4a : "-Flash Cannon",

        nameb : "Steelix",
        levelb : "LV: 36",
        typeb : "Type: Steel/Ground",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 106",
        atkb : "Atk: 72",
        defb : "Def: 155",
        spatkb : "Sp. Atk: 51",
        spdefb : "Sp. Def: 58",
        spdb : "Spd: 33",
        move1b : "-Ice Fang",
        move2b : "-Dragon Breath",
        move3b : "-Sandstorm",
        move4b : "-Gyro Ball",

        namec : "Bastiodon",
        levelc : "LV: 39",
        typec : "Type: Rock/Steel",
        abilityc: "Ability: Sturdy",
        itemc : "Item: Chesto Berry",
        hpc : "HP: 102",
        atkc : "Atk: 52",
        defc : "Def: 128",
        spatkc : "Sp. Atk: 48",
        spdefc : "Sp. Def: 130",
        spdc : "Spd: 35",
        move1c : "-Iron Defense",
        move2c : "-Rest",
        move3c : "-Ancient Power",
        move4c : "-Flash Cannon",
    },

    {
        namea : "Snover",
        levela : "LV: 38",
        typea : "Type: Grass/Ice",
        abilitya: "Ability: Snow Warning",
        itema : "Item: None",
        hpa : "HP: 102",
        atka : "Atk: 67",
        defa : "Def: 52",
        spatka : "Sp. Atk: 61",
        spdefa : "Sp. Def: 53",
        spda : "Spd: 44",
        move1a : "-Leer",
        move2a : "-Razor Leaf",
        move3a : "-Ingrain",
        move4a : "-Avalanche",

        nameb : "Sneasel",
        levelb : "LV: 38",
        typeb : "Type: Dark/Ice",
        abilityb: "Ability: Inner Focus",
        itemb : "Item: None",
        hpb : "HP: 98",
        atkb : "Atk: 86",
        defb : "Def: 55",
        spatkb : "Sp. Atk: 40",
        spdefb : "Sp. Def: 63",
        spdb : "Spd: 111",
        move1b : "-Feint Attack",
        move2b : "-Slash",
        move3b : "-Taunt",
        move4b : "-Avalanche",

        namec : "Medicham",
        levelc : "LV: 40",
        typec : "Type: Fightning/Psychic",
        abilityc: "Ability: Pure Power",
        itemc : "Item: None",
        hpc : "HP: 107",
        atkc : "Atk: 62",
        defc : "Def: 74",
        spatkc : "Sp. Atk: 62",
        spdefc : "Sp. Def: 66",
        spdc : "Spd: 85",
        move1c : "-Ice Punch",
        move2c : "-Bulk Up",
        move3c : "-Force Palm",
        move4c : "-Detect",

        named : "Abomasnow",
        leveld : "LV: 42",
        typed : "Type: Grass/Ice",
        abilityd: "Ability: Snow Warning",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 137",
        atkd : "Atk: 101",
        defd : "Def: 78",
        spatkd : "Sp. Atk: 92",
        spdefd : "Sp. Def: 77",
        spdd : "Spd: 65",
        move1d : "-Wood Hammer",
        move2d : "-Swagger",
        move3d : "-Grass Whistle",
        move4d : "-Avalanche",
    },

    {
        namea : "Honchkrow",
        levela : "LV: 45",
        typea : "Type: Insomnia",
        abilitya: "Ability: Dark/Flying",
        itema : "Item: None",
        hpa : "HP: 155",
        atka : "Atk: 128",
        defa : "Def: 62",
        spatka : "Sp. Atk: 110",
        spdefa : "Sp. Def: 62",
        spda : "Spd: 79",
        move1a : "-Drill Peck",
        move2a : "-Dark Pulse",
        move3a : "-Steel Wing",
        move4a : "-Embargo",

        nameb : "Gyarados",
        levelb : "LV: 45",
        typeb : "Type: Water/Flying",
        abilityb: "Ability: Intimidate",
        itemb : "Item: None",
        hpb : "HP: 151",
        atkb : "Atk: 128",
        defb : "Def: 86",
        spatkb : "Sp. Atk: 75",
        spdefb : "Sp. Def: 105",
        spdb : "Spd: 79",
        move1b : "-Aqua Tail",
        move2b : "-Earthquake",
        move3b : "-Ice Fang",
        move4b : "-Earthquake",

        namec : "Crobat",
        levelc : "LV: 46",
        typec : "Type: Poison/Flying",
        abilityc: "Ability: Inner Focus",
        itemc : "Item: None",
        hpc : "HP: 145",
        atkc : "Atk: 98",
        defc : "Def: 89",
        spatkc : "Sp. Atk: 80",
        spdefc : "Sp. Def: 89",
        spdc : "Spd: 135",
        move1c : "-Cross Poison",
        move2c : "-Air Slash",
        move3c : "-Bite",
        move4c : "-Confuse Ray",

        named : "Weavile",
        leveld : "LV: 48",
        typed : "Type: Dark/Ice",
        abilityd: "Ability: Pressure",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 136",
        atkd : "Atk: 144",
        defd : "Def: 70",
        spatkd : "Sp. Atk: 59",
        spdefd : "Sp. Def: 98",
        spdd : "Spd: 136",
        move1d : "-Night Slash",
        move2d : "-Ice Punch",
        move3d : "-Brick Break",
        move4d : "-X-Scissor",
    },

    {
        namea : "Raichu",
        levela : "LV: 46",
        typea : "Type: Electric",
        abilitya: "Ability: Static",
        itema : "Item: None",
        hpa : "HP: 122",
        atka : "Atk: 98",
        defa : "Def: 66",
        spatka : "Sp. Atk: 98",
        spdefa : "Sp. Def: 97",
        spda : "Spd: 97",
        move1a : "-Brick Break",
        move2a : "-Thunder Wave",
        move3a : "-Light Screen",
        move4a : "-Charge Beam",

        nameb : "Ambipom",
        levelb : "LV: 47",
        typeb : "Type: Normal",
        abilityb: "Ability: Technician",
        itemb : "Item: None",
        hpb : "HP: 138",
        atkb : "Atk: 121",
        defb : "Def: 78",
        spatkb : "Sp. Atk: 72",
        spdefb : "Sp. Def: 78",
        spdb : "Spd: 111",
        move1b : "-Baton Pass",
        move2b : "-Shock Wave",
        move3b : "-Nasty Plot",
        move4b : "-Agility",

        namec : "Octillery",
        levelc : "LV: 47",
        typec : "Type: Water",
        abilityc: "Ability: Sniper",
        itemc : "Item: None",
        hpc : "HP: 138",
        atkc : "Atk: 114",
        defc : "Def: 94",
        spatkc : "Sp. Atk: 114",
        spdefc : "Sp. Def: 77",
        spdc : "Spd: 58",
        move1c : "-Octazooka",
        move2c : "-Bullet Seed",
        move3c : "-Charge Beam",
        move4c : "-Aurora Beam",

        named : "Luxray",
        leveld : "LV: 49",
        typed : "Type: Electric",
        abilityd: "Ability: Rivalry",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 149",
        atkd : "Atk: 134",
        defd : "Def: 94",
        spatkd : "Sp. Atk: 109",
        spdefd : "Sp. Def: 103",
        spdd : "Spd: 76",
        move1d : "-Thunder Fang",
        move2d : "-Thunder Wave",
        move3d : "-Crunch",
        move4d : "-Charge Beam",
    },

    {
        namea : "Staraptor",
        levela : "LV: 48",
        typea : "Type: Normal/Flying",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 151",
        atka : "Atk: 131",
        defa : "Def: 83",
        spatka : "Sp. Atk: 70",
        spdefa : "Sp. Def: 64",
        spda : "Spd: 100",
        move1a : "-Close Combat",
        move2a : "-Aerial Ace",
        move3a : "-Steel Wing",
        move4a : "-U-Turn",

        nameb : "Heracross",
        levelb : "LV: 50",
        typeb : "Type: Bug/Fighting",
        abilityb: "Ability: Swarm",
        itemb : "Item: None",
        hpb : "HP: 152",
        atkb : "Atk: 156",
        defb : "Def: 92",
        spatkb : "Sp. Atk: 57",
        spdefb : "Sp. Def: 100",
        spdb : "Spd: 102",
        move1b : "-Rock Slide",
        move2b : "-Close Combat",
        move3b : "-Night Slash",
        move4b : "-Aerial Ace",

        namec : "Snorlax",
        levelc : "LV: 51",
        typec : "Type: Normal",
        abilityc: "Ability: Immunity",
        itemc : "Item: None",
        hpc : "HP: 236",
        atkc : "Atk: 129",
        defc : "Def: 83",
        spatkc : "Sp. Atk: 91",
        spdefc : "Sp. Def: 129",
        spdc : "Spd: 42",
        move1c : "-Rest",
        move2c : "-Crunch",
        move3c : "-Earthquake",
        move4c : "-Body Slam",

        named : "Floatzel",
        leveld : "LV: 49",
        typed : "Type: Water",
        abilityd: "Ability: Swift Swim",
        itemd : "Item: None",
        hpd : "HP: U/A",
        atkd : "Atk: U/A",
        defd : "Def: U/A",
        spatkd : "Sp. Atk: U/A",
        spdefd : "Sp. Def: U/A",
        spdd : "Spd: U/A",
        move1d : "-Aqua Jet",
        move2d : "-Ice Fang",
        move3d : "-Crunch",
        move4d : "-Brick Break",

        namee : "Rapidash",
        levele : "LV: 49",
        typee : "Type: Fire",
        abilitye: "Ability: Run Away",
        iteme : "Item: None",
        hpe : "HP: 134",
        atke : "Atk: 114",
        defe : "Def: 93",
        spatke : "Sp. Atk: 95",
        spdefe : "Sp. Def: 85",
        spde : "Spd: 119",
        move1e : "-Will-O-Wisp",
        move2e : "-Sunny Day",
        move3e : "-Bounce",
        move4e : "-Fire Blast",

        namef : "Torterra",
        levelf : "LV: 53",
        typef : "Type: Grass/Ground",
        abilityf: "Ability: Overgrow",
        itemf : "Item: None",
        hpf : "HP: U/A",
        atkf : "Atk: U/A",
        deff : "Def: U/A",
        spatkf : "Sp. Atk: U/A",
        spdeff : "Sp. Def: U/A",
        spdf : "Spd: U/A",
        move1f : "-Leaf Storm",
        move2f : "-Earthquake",
        move3f : "-Crunch",
        move4f : "-Synthesis",
    },

    {
        namea : "Staraptor",
        levela : "LV: 48",
        typea : "Type: Normal/Flying",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 151",
        atka : "Atk: 131",
        defa : "Def: 83",
        spatka : "Sp. Atk: 70",
        spdefa : "Sp. Def: 64",
        spda : "Spd: 100",
        move1a : "-Close Combat",
        move2a : "-Aerial Ace",
        move3a : "-Steel Wing",
        move4a : "-U-Turn",

        nameb : "Heracross",
        levelb : "LV: 50",
        typeb : "Type: Bug/Fighting",
        abilityb: "Ability: Swarm",
        itemb : "Item: None",
        hpb : "HP: 152",
        atkb : "Atk: 156",
        defb : "Def: 92",
        spatkb : "Sp. Atk: 57",
        spdefb : "Sp. Def: 100",
        spdb : "Spd: 102",
        move1b : "-Rock Slide",
        move2b : "-Close Combat",
        move3b : "-Night Slash",
        move4b : "-Aerial Ace",

        namec : "Snorlax",
        levelc : "LV: 51",
        typec : "Type: Normal",
        abilityc: "Ability: Immunity",
        itemc : "Item: None",
        hpc : "HP: 236",
        atkc : "Atk: 129",
        defc : "Def: 83",
        spatkc : "Sp. Atk: 91",
        spdefc : "Sp. Def: 129",
        spdc : "Spd: 42",
        move1c : "-Rest",
        move2c : "-Crunch",
        move3c : "-Earthquake",
        move4c : "-Body Slam",

        named : "Roserade",
        leveld : "LV: 49",
        typed : "Type: Grass/Poison",
        abilityd: "Ability: Natural Cure",
        itemd : "Item: None",
        hpd : "HP: 129",
        atkd : "Atk: 85",
        defd : "Def: 70",
        spatkd : "Sp. Atk: 125",
        spdefd : "Sp. Def: 130",
        spdd : "Spd: 104",
        move1d : "-Poison Jab",
        move2d : "-Giga Drain",
        move3d : "-Shadow Ball",
        move4d : "-GrassWhistle",

        namee : "Floatzel",
        levele : "LV: 49",
        typee : "Type: Water",
        abilitye: "Ability: Swift Swim",
        iteme : "Item: None",
        hpe : "HP: U/A",
        atke : "Atk: U/A",
        defe : "Def: U/A",
        spatke : "Sp. Atk: U/A",
        spdefe : "Sp. Def: U/A",
        spde : "Spd: U/A",
        move1e : "-Aqua Jet",
        move2e : "-Ice Fang",
        move3e : "-Crunch",
        move4e : "-Brick Break",

        namef : "Infernape",
        levelf : "LV: 53",
        typef : "Type: Fire/Fighting",
        abilityf: "Ability: Blaze",
        itemf : "Item: None",
        hpf : "HP: U/A",
        atkf : "Atk: U/A",
        deff : "Def: U/A",
        spatkf : "Sp. Atk: U/A",
        spdeff : "Sp. Def: U/A",
        spdf : "Spd: U/A",
        move1f : "-Flamethrower",
        move2f : "-Focus Blast",
        move3f : "-Aerial Ace",
        move4f : "-Shadow Claw",
    },

    {
        namea : "Staraptor",
        levela : "LV: 48",
        typea : "Type: Normal/Flying",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 151",
        atka : "Atk: 131",
        defa : "Def: 83",
        spatka : "Sp. Atk: 70",
        spdefa : "Sp. Def: 64",
        spda : "Spd: 100",
        move1a : "-Close Combat",
        move2a : "-Aerial Ace",
        move3a : "-Steel Wing",
        move4a : "-U-Turn",

        nameb : "Heracross",
        levelb : "LV: 50",
        typeb : "Type: Bug/Fighting",
        abilityb: "Ability: Swarm",
        itemb : "Item: None",
        hpb : "HP: 152",
        atkb : "Atk: 156",
        defb : "Def: 92",
        spatkb : "Sp. Atk: 57",
        spdefb : "Sp. Def: 100",
        spdb : "Spd: 102",
        move1b : "-Rock Slide",
        move2b : "-Close Combat",
        move3b : "-Night Slash",
        move4b : "-Aerial Ace",

        namec : "Snorlax",
        levelc : "LV: 51",
        typec : "Type: Normal",
        abilityc: "Ability: Immunity",
        itemc : "Item: None",
        hpc : "HP: 236",
        atkc : "Atk: 129",
        defc : "Def: 83",
        spatkc : "Sp. Atk: 91",
        spdefc : "Sp. Def: 129",
        spdc : "Spd: 42",
        move1c : "-Rest",
        move2c : "-Crunch",
        move3c : "-Earthquake",
        move4c : "-Body Slam",

        named : "Rapidash",
        leveld : "LV: 49",
        typed : "Type: Fire",
        abilityd : "Ability: Run Away",
        itemd : "Item: None",
        hpd : "HP: 134",
        atkd : "Atk: 114",
        defd : "Def: 93",
        spatkd : "Sp. Atk: 95",
        spdefd : "Sp. Def: 85",
        spdd : "Spd: 119",
        move1d : "-Will-O-Wisp",
        move2d : "-Sunny Day",
        move3d : "-Bounce",
        move4d : "-Fire Blast",

        namee : "Roserade",
        levele : "LV: 49",
        typee : "Type: Grass/Poison",
        abilitye: "Ability: Natural Cure",
        iteme : "Item: None",
        hpe : "HP: 129",
        atke : "Atk: 85",
        defe : "Def: 70",
        spatke : "Sp. Atk: 125",
        spdefe : "Sp. Def: 130",
        spde : "Spd: 104",
        move1e : "-Poison Jab",
        move2e : "-Giga Drain",
        move3e : "-Shadow Ball",
        move4e : "-GrassWhistle",

        namef : "Empoleon",
        levelf : "LV: 53",
        typef : "Type: Water/Steel",
        abilityf: "Ability: Torrent",
        itemf : "Item: None",
        hpf : "HP: 164",
        atkf : "Atk: 108",
        deff : "Def: 99",
        spatkf : "Sp. Atk: 135",
        spdeff : "Sp. Def: 124",
        spdf : "Spd: 89",
        move1f : "-Brine",
        move2f : "-Metal Claw",
        move3f : "-Aerial Ace",
        move4f : "-Shadow Claw",
    },

    {
        namea : "Dustox",
        levela : "LV: 53",
        typea : "Type: Bug/Poison",
        abilitya: "Ability: Shield Dust",
        itema : "Item: None",
        hpa : "HP: 142",
        atka : "Atk: 65",
        defa : "Def: 95",
        spatka : "Sp. Atk: 80",
        spdefa : "Sp. Def: 116",
        spda : "Spd: 89",
        move1a : "-Toxic",
        move2a : "-Bug Buzz",
        move3a : "-Double Team",
        move4a : "-Light Screen",

        nameb : "Beautifly",
        levelb : "LV: 53",
        typeb : "Type: Bug/Flying",
        abilityb: "Ability: Swarm",
        itemb : "Item: None",
        hpb : "HP: 142",
        atkb : "Atk: 95",
        defb : "Def: 73",
        spatkb : "Sp. Atk: 127",
        spdefb : "Sp. Def: 65",
        spdb : "Spd: 89",
        move1b : "-Bug Buzz",
        move2b : "-Shadow Ball",
        move3b : "-Psychic",
        move4b : "-Energy Ball",

        namec : "Vespiquen",
        levelc : "LV: 54",
        typec : "Type: Bug/Flying",
        abilityc: "Ability: Pressure",
        itemc : "Item: None",
        hpc : "HP: 155",
        atkc : "Atk: 107",
        defc : "Def: 131",
        spatkc : "Sp. Atk: 107",
        spdefc : "Sp. Def: 131",
        spdc : "Spd: 64",
        move1c : "-Power Gem",
        move2c : "-Attack Order",
        move3c : "-Heal Order",
        move4c : "-Defend Order",

        named : "Heracross",
        leveld : "LV: 54",
        typed : "Type: Bug/Fighting",
        abilityd: "Ability: Swarm",
        itemd : "Item: None",
        hpd : "HP: 166",
        atkd : "Atk: 156",
        defd : "Def: 102",
        spatkd : "Sp. Atk: 64",
        spdefd : "Sp. Def: 110",
        spdd : "Spd: 124",
        move1d : "-Megahorn",
        move2d : "-Stone Edge",
        move3d : "-Night Slash",
        move4d : "-Close Combat",

        namee : "Drapion",
        levele : "LV: 57",
        typee : "Type: Poison/Dark",
        abilitye: "Ability: Battle Armor",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 163",
        atke : "Atk: 111",
        defe : "Def: 161",
        spatke : "Sp. Atk: 90",
        spdefe : "Sp. Def: 107",
        spde : "Spd: 130",
        move1e : "-Cross Poison",
        move2e : "-Aerial Ace",
        move3e : "-Ice Fang",
        move4e : "-X-Scissor",
    },

    {
        namea : "Quagsire",
        levela : "LV: 55",
        typea : "Type: Water/Ground",
        abilitya: "Ability: Damp",
        itema : "Item: None",
        hpa : "HP: 186",
        atka : "Atk: 126",
        defa : "Def: 115",
        spatka : "Sp. Atk: 93",
        spdefa : "Sp. Def: 93",
        spda : "Spd: 54",
        move1a : "-Protect",
        move2a : "-Double Team",
        move3a : "-Dig",
        move4a : "-Sandstorm",

        nameb : "Sudowoodo",
        levelb : "LV: 56",
        typeb : "Type: Rock",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 161",
        atkb : "Atk: 133",
        defb : "Def: 150",
        spatkb : "Sp. Atk: 49",
        spdefb : "Sp. Def: 103",
        spdb : "Spd: 55",
        move1b : "-Earthquake",
        move2b : "-Hammer Arm",
        move3b : "-Sucker Punch",
        move4b : "-Sandstorm",

        namec : "Golem",
        levelc : "LV: 56",
        typec : "Type: Rock/Ground",
        abilityc: "Ability: Rock Head",
        itemc : "Item: None",
        hpc : "HP: 172",
        atkc : "Atk: 159",
        defc : "Def: 167",
        spatkc : "Sp. Atk: 83",
        spdefc : "Sp. Def: 94",
        spdc : "Spd: 64",
        move1c : "-Sandstorm",
        move2c : "-Gyro Ball",
        move3c : "-Earthquake",
        move4c : "-Brick Break",

        named : "Whiscash",
        leveld : "LV: 55",
        typed : "Type: Water/Ground",
        abilityd: "Ability: Oblivious",
        itemd : "Item: None",
        hpd : "HP: 202",
        atkd : "Atk: 107",
        defd : "Def: 90",
        spatkd : "Sp. Atk: 105",
        spdefd : "Sp. Def: 108",
        spdd : "Spd: 87",
        move1d : "-Fissure",
        move2d : "-Zen Headbutt",
        move3d : "-Rock Slide",
        move4d : "-Aqua Tail",

        namee : "Hippowdon",
        levele : "LV: 59",
        typee : "Type: Ground",
        abilitye: "Ability: Sand Stream",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 214",
        atke : "Atk: 154",
        defe : "Def: 144",
        spatke : "Sp. Atk: 112",
        spdefe : "Sp. Def: 107",
        spde : "Spd: 78",
        move1e : "-Stone Edge",
        move2e : "-Earthquake",
        move3e : "-Crunch",
        move4e : "-Curse",
    },

    {
        namea : "Rapidash",
        levela : "LV: 58",
        typea : "Type: Fire",
        abilitya: "Ability: Run Away",
        itema : "Item: None",
        hpa : "HP: 160",
        atka : "Atk: 151",
        defa : "Def: 103",
        spatka : "Sp. Atk: 115",
        spdefa : "Sp. Def: 103",
        spda : "Spd: 144",
        move1a : "-Flare Blitz",
        move2a : "-Solar Beam",
        move3a : "-Bounce",
        move4a : "-Sunny Day",

        nameb : "Steelix",
        levelb : "LV: 57",
        typeb : "Type: Steel/Ground",
        abilityb: "Ability: Rock Head",
        itemb : "Item: None",
        hpb : "HP: 169",
        atkb : "Atk: 119",
        defb : "Def: 250",
        spatkb : "Sp. Atk: 84",
        spdefb : "Sp. Def: 96",
        spdb : "Spd: 56",
        move1b : "-Rock Tomb",
        move2b : "-Fire Fang",
        move3b : "-Screech",
        move4b : "-Sunny Day",

        namec : "Drifblim",
        levelc : "LV: 58",
        typec : "Type: Ghost/Flying",
        abilityc: "Ability: Aftermath",
        itemc : "Item: None",
        hpc : "HP: 259",
        atkc : "Atk: 115",
        defc : "Def: 80",
        spatkc : "Sp. Atk: 126",
        spdefc : "Sp. Def: 85",
        spdc : "Spd: 103",
        move1c : "-Ominous Wind",
        move2c : "-Double Team",
        move3c : "-Baton Bass",
        move4c : "-Will-O-Wisp",

        named : "Lopunny",
        leveld : "LV: 57",
        typed : "Type: Normal",
        abilityd: "Ability: Cute Charm",
        itemd : "Item: None",
        hpd : "HP: 158",
        atkd : "Atk: 108",
        defd : "Def: 128",
        spatkd : "Sp. Atk: 74",
        spdefd : "Sp. Def: 131",
        spdd : "Spd: 141",
        move1d : "-Mirror Coat",
        move2d : "-Charm",
        move3d : "-Sunny Day",
        move4d : "-Fire Punch",

        namee : "Infernape",
        levele : "LV: 61",
        typee : "Type: Fire/Fighting",
        abilitye: "Ability: Blaze",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 182",
        atke : "Atk: 150",
        defe : "Def: 109",
        spatke : "Sp. Atk: 135",
        spdefe : "Sp. Def: 109",
        spde : "Spd: 170",
        move1e : "-Flare Blitz",
        move2e : "-Thunder Punch",
        move3e : "-Earthquake",
        move4e : "-Mach Punch",
    },

    {
        namea : "Mr. Mime",
        levela : "LV: 59",
        typea : "Type: Psychic",
        abilitya: "Ability: Soundproof",
        itema : "Item: None",
        hpa : "HP: 133",
        atka : "Atk: 75",
        defa : "Def: 99",
        spatka : "Sp. Atk: 140",
        spdefa : "Sp. Def: 164",
        spda : "Spd: 128",
        move1a : "-Light Screen",
        move2a : "-Reflect",
        move3a : "-Psychic",
        move4a : "-Thunderbolt",

        nameb : "Girafarig",
        levelb : "LV: 59",
        typeb : "Type: Normal/Psychic",
        abilityb: "Ability: Inner Focus",
        itemb : "Item: None",
        hpb : "HP: 169",
        atkb : "Atk: 117",
        defb : "Def: 89",
        spatkb : "Sp. Atk: 128",
        spdefb : "Sp. Def: 99",
        spdb : "Spd: 135",
        move1b : "-Crunch",
        move2b : "-Psychic",
        move3b : "-Shadow Ball",
        move4b : "-Double Hit",

        namec : "Medicham",
        levelc : "LV: 60",
        typec : "Type: Psychic/Fightning",
        abilityc: "Ability: Pure Power",
        itemc : "Item: None",
        hpc : "HP: 160",
        atkc : "Atk: 95",
        defc : "Def: 113",
        spatkc : "Sp. Atk: 95",
        spdefc : "Sp. Def: 113",
        spdc : "Spd: 119",
        move1c : "-Drain Punch",
        move2c : "-Fire Punch",
        move3c : "-Thunder Punch",
        move4c : "-Ice Punch",

        named : "Alakazam",
        leveld : "LV: 60",
        typed : "Type: Psychic",
        abilityd: "Ability: Synchronize",
        itemd : "Item: None",
        hpd : "HP: 154",
        atkd : "Atk: 83",
        defd : "Def: 84",
        spatkd : "Sp. Atk: 185",
        spdefd : "Sp. Def: 112",
        spdd : "Spd: 167",
        move1d : "-Recover",
        move2d : "-Psychic",
        move3d : "-Focus Blast",
        move4d : "-Energy Ball",

        namee : "Bronzong",
        levele : "LV: 63",
        typee : "Type: Steel/Psychic",
        abilitye: "Ability: Levitate",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 176",
        atke : "Atk: 136",
        defe : "Def: 187",
        spatke : "Sp. Atk: 110",
        spdefe : "Sp. Def: 170",
        spde : "Spd: 65",
        move1e : "-Gyro Ball",
        move2e : "-Earthquake",
        move3e : "-Psychic",
        move4e : "-Calm Mind",
    },

    {
        namea : "Spiritomb",
        levela : "LV: 61",
        typea : "Type: Ghost/Dark",
        abilitya: "Ability: Pressure",
        itema : "Item: None",
        hpa : "HP: 150",
        atka : "Atk: 135",
        defa : "Def: 155",
        spatka : "Sp. Atk: 121",
        spdefa : "Sp. Def: 155",
        spda : "Spd: 72",
        move1a : "-Silver Wind",
        move2a : "-Dark Pulse",
        move3a : "-Psychic",
        move4a : "-Embargo",

        nameb : "Roserade",
        levelb : "LV: 60",
        typeb : "Type: Grass/Poison",
        abilityb: "Ability: Natural Cure",
        itemb : "Item: None",
        hpb : "HP: 160",
        atkb : "Atk: 117",
        defb : "Def: 89",
        spatkb : "Sp. Atk: 173",
        spdefb : "Sp. Def: 134",
        spdb : "Spd: 131",
        move1b : "-Extrasensory",
        move2b : "-Shadow Ball",
        move3b : "-Sludge Bomb",
        move4b : "-Energy Ball",

        namec : "Gastrodon",
        levelc : "LV: 60",
        typec : "Type: Water/Ground",
        abilityc: "Ability: Sticky Hold",
        itemc : "Item: None",
        hpc : "HP: 221",
        atkc : "Atk: 109",
        defc : "Def: 104",
        spatkc : "Sp. Atk: 133",
        spdefc : "Sp. Def: 133",
        spdc : "Spd: 69",
        move1c : "-Muddy Water",
        move2c : "-Earthquake",
        move3c : "-Sludge Bomb",
        move4c : "-Stone Edge",

        named : "Lucario",
        leveld : "LV: 63",
        typed : "Type: Fighting/Steel",
        abilityd: "Ability: Steadfast",
        itemd : "Item: None",
        hpd : "HP: 180",
        atkd : "Atk: 145",
        defd : "Def: 112",
        spatkd : "Sp. Atk: 168",
        spdefd : "Sp. Def: 112",
        spdd : "Spd: 150",
        move1d : "-Aura Sphere",
        move2d : "-Dragon Pulse",
        move3d : "-Psychic",
        move4d : "-Earthquake",

        namee : "Milotic",
        levele : "LV: 63",
        typee : "Type: Water",
        abilitye: "Ability: Marvel Scale",
        iteme : "Item: None",
        hpe : "HP: 211",
        atke : "Atk: 99",
        defe : "Def: 123",
        spatke : "Sp. Atk: 149",
        spdefe : "Sp. Def: 199",
        spde : "Spd: 112",
        move1e : "-Aqua Ring",
        move2e : "-Mirror Coat",
        move3e : "-Ice Beam",
        move4e : "-Surf",

        namef : "Garchomp",
        levelf : "LV: 66",
        typef : "Type: Dragon/Ground",
        abilityf: "Ability: Sand Veil",
        itemf : "Item: Sitrus Berry",
        hpf : "HP: 238",
        atkf : "Atk: 176",
        deff : "Def: 150",
        spatkf : "Sp. Atk: 130",
        spdeff : "Sp. Def: 137",
        spdf : "Spd: 174",
        move1f : "-Dragon Rush",
        move2f : "-Earthquake",
        move3f : "-Brick Break",
        move4f : "-Giga Impact",
    },
]

function displaydpTrainers() {
    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showDPImages(newTrainerId);
        showPokemonDPImages(newTrainerId);
    }
    let dpTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = dp_trainers [dpTrainer].namea;
    document.querySelector('#level1').textContent = dp_trainers [dpTrainer].levela;
    document.querySelector('#type1').textContent = dp_trainers [dpTrainer].typea;
    document.querySelector('#ability1').textContent= dp_trainers [dpTrainer].abilitya;
    document.querySelector('#item1').textContent = dp_trainers [dpTrainer].itema;
    document.querySelector('#hp1').textContent = dp_trainers [dpTrainer].hpa;
    document.querySelector('#atk1').textContent = dp_trainers [dpTrainer].atka;
    document.querySelector('#def1').textContent = dp_trainers [dpTrainer].defa;
    document.querySelector('#spatk1').textContent = dp_trainers [dpTrainer].spatka;
    document.querySelector('#spdef1').textContent = dp_trainers [dpTrainer].spdefa;
    document.querySelector('#spd1').textContent = dp_trainers [dpTrainer].spda;
    document.querySelector('#move1_1').textContent = dp_trainers [dpTrainer].move1a;
    document.querySelector('#move2_1').textContent = dp_trainers [dpTrainer].move2a;
    document.querySelector('#move3_1').textContent = dp_trainers [dpTrainer].move3a;
    document.querySelector('#move4_1').textContent = dp_trainers [dpTrainer].move4a;

    
    document.querySelector('#name2').textContent = dp_trainers [dpTrainer].nameb;
    document.querySelector('#level2').textContent = dp_trainers [dpTrainer].levelb;
    document.querySelector('#type2').textContent = dp_trainers [dpTrainer].typeb;
    document.querySelector('#ability2').textContent= dp_trainers [dpTrainer].abilityb;
    document.querySelector('#item2').textContent = dp_trainers [dpTrainer].itemb;
    document.querySelector('#hp2').textContent = dp_trainers [dpTrainer].hpb;
    document.querySelector('#atk2').textContent = dp_trainers [dpTrainer].atkb;
    document.querySelector('#def2').textContent = dp_trainers [dpTrainer].defb;
    document.querySelector('#spatk2').textContent = dp_trainers [dpTrainer].spatkb;
    document.querySelector('#spdef2').textContent = dp_trainers [dpTrainer].spdefb;
    document.querySelector('#spd2').textContent = dp_trainers [dpTrainer].spdb;
    document.querySelector('#move1_2').textContent = dp_trainers [dpTrainer].move1b;
    document.querySelector('#move2_2').textContent = dp_trainers [dpTrainer].move2b;
    document.querySelector('#move3_2').textContent = dp_trainers [dpTrainer].move3b;
    document.querySelector('#move4_2').textContent = dp_trainers [dpTrainer].move4b;

    document.querySelector('#name3').textContent = dp_trainers [dpTrainer].namec;
    document.querySelector('#level3').textContent = dp_trainers [dpTrainer].levelc;
    document.querySelector('#type3').textContent = dp_trainers [dpTrainer].typec;
    document.querySelector('#ability3').textContent= dp_trainers [dpTrainer].abilityc;
    document.querySelector('#item3').textContent = dp_trainers [dpTrainer].itemc;
    document.querySelector('#hp3').textContent = dp_trainers [dpTrainer].hpc;
    document.querySelector('#atk3').textContent = dp_trainers [dpTrainer].atkc;
    document.querySelector('#def3').textContent = dp_trainers [dpTrainer].defc;
    document.querySelector('#spatk3').textContent = dp_trainers [dpTrainer].spatkc;
    document.querySelector('#spdef3').textContent = dp_trainers [dpTrainer].spdefc;
    document.querySelector('#spd3').textContent = dp_trainers [dpTrainer].spdc;
    document.querySelector('#move1_3').textContent = dp_trainers [dpTrainer].move1c;
    document.querySelector('#move2_3').textContent = dp_trainers [dpTrainer].move2c;
    document.querySelector('#move3_3').textContent = dp_trainers [dpTrainer].move3c;
    document.querySelector('#move4_3').textContent = dp_trainers [dpTrainer].move4c;

    document.querySelector('#name4').textContent = dp_trainers [dpTrainer].named;
    document.querySelector('#level4').textContent = dp_trainers [dpTrainer].leveld;
    document.querySelector('#type4').textContent = dp_trainers [dpTrainer].typed;
    document.querySelector('#ability4').textContent= dp_trainers [dpTrainer].abilityd;
    document.querySelector('#item4').textContent = dp_trainers [dpTrainer].itemd;
    document.querySelector('#hp4').textContent = dp_trainers [dpTrainer].hpd;
    document.querySelector('#atk4').textContent = dp_trainers [dpTrainer].atkd;
    document.querySelector('#def4').textContent = dp_trainers [dpTrainer].defd;
    document.querySelector('#spatk4').textContent = dp_trainers [dpTrainer].spatkd;
    document.querySelector('#spdef4').textContent = dp_trainers [dpTrainer].spdefd;
    document.querySelector('#spd4').textContent = dp_trainers [dpTrainer].spdd;
    document.querySelector('#move1_4').textContent = dp_trainers [dpTrainer].move1d;
    document.querySelector('#move2_4').textContent = dp_trainers [dpTrainer].move2d;
    document.querySelector('#move3_4').textContent = dp_trainers [dpTrainer].move3d;
    document.querySelector('#move4_4').textContent = dp_trainers [dpTrainer].move4d;

    document.querySelector('#name5').textContent = dp_trainers [dpTrainer].namee;
    document.querySelector('#level5').textContent = dp_trainers [dpTrainer].levele;
    document.querySelector('#type5').textContent = dp_trainers [dpTrainer].typee;
    document.querySelector('#ability5').textContent= dp_trainers [dpTrainer].abilitye;
    document.querySelector('#item5').textContent = dp_trainers [dpTrainer].iteme;
    document.querySelector('#hp5').textContent = dp_trainers [dpTrainer].hpe;
    document.querySelector('#atk5').textContent = dp_trainers [dpTrainer].atke;
    document.querySelector('#def5').textContent = dp_trainers [dpTrainer].defe;
    document.querySelector('#spatk5').textContent = dp_trainers [dpTrainer].spatke;
    document.querySelector('#spdef5').textContent = dp_trainers [dpTrainer].spdefe;
    document.querySelector('#spd5').textContent = dp_trainers [dpTrainer].spde;
    document.querySelector('#move1_5').textContent = dp_trainers [dpTrainer].move1e;
    document.querySelector('#move2_5').textContent = dp_trainers [dpTrainer].move2e;
    document.querySelector('#move3_5').textContent = dp_trainers [dpTrainer].move3e;
    document.querySelector('#move4_5').textContent = dp_trainers [dpTrainer].move4e;

    document.querySelector('#name6').textContent = dp_trainers [dpTrainer].namef;
    document.querySelector('#level6').textContent = dp_trainers [dpTrainer].levelf;
    document.querySelector('#type6').textContent = dp_trainers [dpTrainer].typef;
    document.querySelector('#ability6').textContent= dp_trainers [dpTrainer].abilityf;
    document.querySelector('#item6').textContent = dp_trainers [dpTrainer].itemf;
    document.querySelector('#hp6').textContent = dp_trainers [dpTrainer].hpf;
    document.querySelector('#atk6').textContent = dp_trainers [dpTrainer].atkf;
    document.querySelector('#def6').textContent = dp_trainers [dpTrainer].deff;
    document.querySelector('#spatk6').textContent = dp_trainers [dpTrainer].spatkf;
    document.querySelector('#spdef6').textContent = dp_trainers [dpTrainer].spdeff;
    document.querySelector('#spd6').textContent = dp_trainers [dpTrainer].spdf;
    document.querySelector('#move1_6').textContent = dp_trainers [dpTrainer].move1f;
    document.querySelector('#move2_6').textContent = dp_trainers [dpTrainer].move2f;
    document.querySelector('#move3_6').textContent = dp_trainers [dpTrainer].move3f;
    document.querySelector('#move4_6').textContent = dp_trainers [dpTrainer].move4f;
}

function showDPImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/dp/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonDPImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/dp/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/dp/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/dp/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/dp/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/dp/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/dp/" + trainerId + "_6.png";
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

    refCredit.textContent = "werster"
    refCredit.href = "https://www.dropbox.com/s/utieptnrxl64ka3/Pearl%20Trainer%20data.xlsx"
}

roarkDP.addEventListener('click', displaydpTrainers);
marsDP.addEventListener('click', displaydpTrainers);
gardeniaDP.addEventListener('click', displaydpTrainers);
jupiterDP.addEventListener('click', displaydpTrainers);
mayleneDP.addEventListener('click', displaydpTrainers);
crasherwakeDP.addEventListener('click', displaydpTrainers);
fantinaDP.addEventListener('click', displaydpTrainers);
byronDP.addEventListener('click', displaydpTrainers);
candiceDP.addEventListener('click', displaydpTrainers);
cyrusDP.addEventListener('click', displaydpTrainers);
volknerDP.addEventListener('click', displaydpTrainers);
barry1GDP.addEventListener("click", displaydpTrainers);
barry1FDP.addEventListener("click", displaydpTrainers);
barry1WDP.addEventListener("click", displaydpTrainers);
aaronDP.addEventListener('click', displaydpTrainers);
berthaDP.addEventListener('click', displaydpTrainers);
flintDP.addEventListener('click', displaydpTrainers);
lucianDP.addEventListener('click', displaydpTrainers);
cynthiaDP.addEventListener('click', displaydpTrainers);