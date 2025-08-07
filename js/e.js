let roxanneE = document.querySelector ("#roxanne2");
let brawlyE = document.querySelector ("#brawly2");
let wattsonE = document.querySelector ("#wattson2");
let flanneryE = document.querySelector ("#flannery2");
let normanE = document.querySelector ("#norman2");
let winonaE = document.querySelector ("#winona2");
let tatelizaE = document.querySelector ("#tateliza2");
let juanE = document.querySelector ("#juan1");
let wallyE = document.querySelector ("#wally2");
let sidneyE = document.querySelector ("#sidney2");
let phoebeE = document.querySelector ("#phoebe2");
let glaciaE = document.querySelector ("#glacia2");
let drakeE = document.querySelector ("#drake2");
let wallaceE = document.querySelector ("#wallace2");
let stevenE = document.querySelector ("#steven2");

let e_trainers = [
    {
        namea : "Geodude",
        levela : "LV: 12",
        typea : "Type: Rock/Ground",
        abilitya : "Ability: Rock Head",
        itema : "Item: None",
        hpa : "HP: 33",
        atka : "Atk: 25",
        defa : "Def: 30",
        spatka : "Sp. Atk: 13",
        spdefa : "Sp. Def: 13",
        spda : "Spd: 11",
        move1a : "-Tackle",
        move2a : "-Rock Throw",
        move3a : "-Rock Tomb",
        move4a : "-Defense Curl",

        nameb : "Geodude",
        levelb : "LV: 12",
        typeb : "Type: Rock/Ground",
        abilityb : "Ability: Rock Head",
        itemb : "Item: None",
        hpb : "HP: 33",
        atkb : "Atk: 25",
        defb : "Def: 30",
        spatkb : "Sp. Atk: 14",
        spdefb : "Sp. Def: 13",
        spdb : "Spd: 9",
        move1b : "-Tackle",
        move2b : "-Rock Throw",
        move3b : "-Rock Tomb",
        move4b : "-Defense Curl",

        namec : "Nosepass",
        levelc : "LV: 15",
        typec : "Type: Rock",
        abilityc : "Ability: Sturdy",
        itemc : "Item: Oran Berry",
        hpc : "HP: 37",
        atkc : "Atk: 24",
        defc : "Def: 44",
        spatkc : "Sp. Atk: 22",
        spdefc : "Sp. Def: 35",
        spdc : "Spd: 17",
        move1c : "-Tackle",
        move2c : "-Rock Tomb",
        move3c : "-Harden",
        move4c : "-Block",
    },

    {
        namea : "Machop",
        levela : "LV: 16",
        typea : "Type: Fighting",
        abilitya : "Ability: Guts",
        itema : "Item: None",
        hpa : "HP: 50",
        atka : "Atk: 32",
        defa : "Def: 22",
        spatka : "Sp. Atk: 18",
        spdefa : "Sp. Def: 18",
        spda : "Spd: 18",
        move1a : "-Karate Chop",
        move2a : "-Low Kick",
        move3a : "-Seismic Toss",
        move4a : "-Bulk Up",

        nameb : "Meditite",
        levelb : "LV: 16",
        typeb : "Type: Fighting/Psychic",
        abilityb : "Ability: Pure Power",
        itemb : "Item: None",
        hpb : "HP: 37",
        atkb : "Atk: 17",
        defb : "Def: 24",
        spatkb : "Sp. Atk: 19",
        spdefb : "Sp. Def: 26",
        spdb : "Spd: 26",
        move1b : "-Focus Punch",
        move2b : "-Light Screen",
        move3b : "-Reflect",
        move4b : "-Bulk Up",

        namec : "Makuhita",
        levelc : "LV: 19",
        typec : "Type: Fighting",
        abilityc : "Ability: Thick Fat",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 60",
        atkc : "Atk: 32",
        defc : "Def: 22",
        spatkc : "Sp. Atk: 17",
        spdefc : "Sp. Def: 18",
        spdc : "Spd: 19",
        move1c : "-Arm Thrust",
        move2c : "-Vital Throw",
        move3c : "-Reversal",
        move4c : "-Bulk Up",
    },

    {
        namea : "Voltorb",
        levela : "LV: 20",
        typea : "Type: Electric",
        abilitya : "Ability: Soundproof",
        itema : "Item: None",
        hpa : "HP: 50",
        atka : "Atk: 21",
        defa : "Def: 29",
        spatka : "Sp. Atk: 31",
        spdefa : "Sp. Def: 31",
        spda : "Spd: 49",
        move1a : "-Rollout",
        move2a : "-Spark",
        move3a : "-Self-Destruct",
        move4a : "-Thunder Wave",

        nameb : "Electrike",
        levelb : "LV: 20",
        typeb : "Type: Electric",
        abilityb : "Ability: Static",
        itemb : "Item: None",
        hpb : "HP: 50",
        atkb : "Atk: 27",
        defb : "Def: 25",
        spatkb : "Sp. Atk: 35",
        spdefb : "Sp. Def: 25",
        spdb : "Spd: 35",
        move1b : "-Shock Wave",
        move2b : "-Leer",
        move3b : "-Quick Attack",
        move4b : "-Howl",

        namec : "Magneton",
        levelc : "LV: 22",
        typec : "Type: Electric/Steel",
        abilityc : "Ability: Magnet Pull",
        itemc : "Item: None",
        hpc : "HP: 59",
        atkc : "Atk: 37",
        defc : "Def: 57",
        spatkc : "Sp. Atk: 56",
        spdefc : "Sp. Def: 41",
        spdc : "Spd: 41",
        move1c : "-Supersonic",
        move2c : "-Shock Wave",
        move3c : "-Thunder Wave",
        move4c : "-Sonic Boom",

        named : "Manectric",
        leveld : "LV: 24",
        typed : "Type: Electric",
        abilityd : "Ability: Static",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 74",
        atkd : "Atk: 52",
        defd : "Def: 41",
        spatkd : "Sp. Atk: 62",
        spdefd : "Sp. Def: 41",
        spdd : "Spd: 55",
        move1d : "-Quick Attack",
        move2d : "-Thunder Wave",
        move3d : "-Shock Wave",
        move4d : "-Howl",
    },

    {
        namea : "Numel",
        levela : "LV: 24",
        typea : "Type: Fire/Ground",
        abilitya : "Ability: Oblivious",
        itema : "Item: None",
        hpa : "HP: 69",
        atka : "Atk: 39",
        defa : "Def: 29",
        spatka : "Sp. Atk: 36",
        spdefa : "Sp. Def: 32",
        spda : "Spd: 29",
        move1a : "-Magnitude",
        move2a : "-Take Down",
        move3a : "-Overheat",
        move4a : "-Sunny Day",

        nameb : "Slugma",
        levelb : "LV: 24",
        typeb : "Type: Fire",
        abilityb : "Ability: Magma Armor",
        itemb : "Item: None",
        hpb : "HP: 58",
        atkb : "Atk: 26",
        defb : "Def: 29",
        spatkb : "Sp. Atk: 44",
        spdefb : "Sp. Def: 31",
        spdb : "Spd: 20",
        move1b : "-Smog",
        move2b : "-Overheat",
        move3b : "-Light Screen",
        move4b : "-Sunny Day",

        namec : "Camerupt",
        levelc : "LV: 26",
        typec : "Type: Fire/Ground",
        abilityc : "Ability: Magma Armor",
        itemc : "Item: None",
        hpc : "HP: 80",
        atkc : "Atk: 70",
        defc : "Def: 49",
        spatkc : "Sp. Atk: 60",
        spdefc : "Sp. Def: 51",
        spdc : "Spd: 33",
        move1c : "-Overheat",
        move2c : "-Tackle",
        move3c : "-Attract",
        move4c : "-Sunny Day",

        named : "Torkoal",
        leveld : "LV: 29",
        typed : "Type: Fire",
        abilityd : "Ability: White Smoke",
        itemd : "Item: White Herb",
        hpd : "HP: 88",
        atkd : "Atk: 56",
        defd : "Def: 94",
        spatkd : "Sp. Atk: 69",
        spdefd : "Sp. Def: 54",
        spdd : "Spd: 25",
        move1d : "-Body Slam",
        move2d : "-Overheat",
        move3d : "-Attract",
        move4d : "-Sunny Day",
    },

    {
        namea : "Spinda",
        levela : "LV: 27",
        typea : "Type: Normal",
        abilitya : "Own Tempo",
        itema : "Item: None",
        hpa : "HP: 75",
        atka : "Atk: 43",
        defa : "Def: 43",
        spatka : "Sp. Atk: 43",
        spdefa : "Sp. Def: 43",
        spda : "Spd: 43",
        move1a : "-Facade",
        move2a : "-Psybeam",
        move3a : "-Teeter Dance",
        move4a : "-Encore",

        nameb : "Vigoroth",
        levelb : "LV: 27",
        typeb : "Type: Normal",
        abilityb : "Vital Spirit",
        itemb : "Item: None",
        hpb : "HP: 86",
        atkb : "Atk: 54",
        defb : "Def: 54",
        spatkb : "Sp. Atk: 41",
        spdefb : "Sp. Def: 36",
        spdb : "Spd: 66",
        move1b : "-Slash",
        move2b : "-Facade",
        move3b : "-Feint Attack",
        move4b : "-Encore",

        namec : "Linoone",
        levelc : "LV: 29",
        typec : "Type: Normal",
        abilityc : "Pickup",
        itemc : "Item: None",
        hpc : "HP: 91",
        atkc : "Atk: 57",
        defc : "Def: 42",
        spatkc : "Sp. Atk: 40",
        spdefc : "Sp. Def: 47",
        spdc : "Spd: 69",
        move1c : "-Slash",
        move2c : "-Facade",
        move3c : "-Headbutt",
        move4c : "-Belly Drum",

        named : "Slaking",
        leveld : "LV: 31",
        typed : "Type: Normal",
        abilityd : "Ability: Truant",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 143",
        atkd : "Atk: 113",
        defd : "Def: 76",
        spatkd : "Sp. Atk: 73",
        spdefd : "Sp. Def: 59",
        spdd : "Spd: 68",
        move1d : "-Facade",
        move2d : "-Feint Attack",
        move3d : "-Counter",
        move4d : "-Yawn",
    },

    {
        namea : "Swablu",
        levela : "LV: 29",
        typea : "Type: Normal/Flying",
        abilitya: "Ability: Natural Cure",
        itema : "Item: None",
        hpa : "HP: 72",
        atka : "Atk: 35",
        defa : "Def: 42",
        spatka : "Sp. Atk: 35",
        spdefa : "Sp. Def: 55",
        spda : "Spd: 45",
        move1a : "-Aerial Ace",
        move2a : "-Perish Song",
        move3a : "-Mirror Move",
        move4a : "-Safeguard",

        nameb : "Tropius",
        levelb : "LV: 29",
        typeb : "Type: Grass/Flying",
        abilityb: "Ability: Chlorophyll",
        itemb : "Item: None",
        hpb : "HP: 103",
        atkb : "Atk: 51",
        defb : "Def: 66",
        spatkb : "Sp. Atk: 48",
        spdefb : "Sp. Def: 62",
        spdb : "Spd: 41",
        move1b : "-Solar Beam",
        move2b : "-Aerial Ace",
        move3b : "-Sunny Day",
        move4b : "-Synthesis",

        namec : "Pelipper",
        levelc : "LV: 30",
        typec : "Type: Water/Flying",
        abilityc: "Ability: Keen Eye",
        itemc : "Item: None",
        hpc : "HP: 83",
        atkc : "Atk: 37",
        defc : "Def: 72",
        spatkc : "Sp. Atk: 63",
        spdefc : "Sp. Def: 59",
        spdc : "Spd: 51",
        move1c : "-Aerial Ace",
        move2c : "-Water Gun",
        move3c : "-Supersonic",
        move4c : "-Protect",

        named : "Skarmory",
        leveld : "LV: 31",
        typed : "Type: Steel/Flying",
        abilityd: "Ability: Keen Eye",
        itemd : "Item: None",
        hpd : "HP: 89",
        atkd : "Atk: 55",
        defd : "Def: 99",
        spatkd : "Sp. Atk: 37",
        spdefd : "Sp. Def: 61",
        spdd : "Spd: 56",
        move1d : "-Aerial Ace",
        move2d : "-Steel Wing",
        move3d : "-Fury Attack",
        move4d : "-Sand Attack",

        namee : "Altaria",
        levele : "LV: 33",
        typee : "Type: Dragon/Flying",
        abilitye: "Ability: Natural Cure",
        iteme : "Item: Oran Berry",
        hpe : "HP: 102",
        atke : "Atk: 61",
        defe : "Def: 74",
        spatke : "Sp. Atk: 61",
        spdefe : "Sp. Def: 84",
        spde : "Spd: 68",
        move1e : "-Earthquake",
        move2e : "-Aerial Ace",
        move3e : "-Dragon Breath",
        move4e : "-Dragon Dance",
    },

    {
        namea : "Claydol",
        levela : "LV: 41",
        typea : "Type: Ground/Psychic",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: 112",
        atka : "Atk: 74",
        defa : "Def: 113",
        spatka : "Sp. Atk: 74",
        spdefa : "Sp. Def: 103",
        spda : "Spd: 78",
        move1a : "-Earthquake",
        move2a : "-Ancient Power",
        move3a : "-Psychic",
        move4a : "-Light Screen",

        nameb : "Xatu",
        levelb : "LV: 41",
        typeb : "Type: Psychic/Flying",
        abilityb: "Ability: Synchronize",
        itemb : "Item: None",
        hpb : "HP: 116",
        atkb : "Atk: 78",
        defb : "Def: 74",
        spatkb : "Sp. Atk: 95",
        spdefb : "Sp. Def: 74",
        spdb : "Spd: 95",
        move1b : "-Psychic",
        move2b : "-Sunny Day",
        move3b : "-Confuse Ray",
        move4b : "-Calm Mind",

        namec : "Lunatone",
        levelc : "LV: 42",
        typec : "Type: Rock/Psychic",
        abilityc: "Ability: Levitate",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 123",
        atkc : "Atk: 63",
        defc : "Def: 79",
        spatkc : "Sp. Atk: 87",
        spdefc : "Sp. Def: 89",
        spdc : "Spd: 76",
        move1c : "-Psychic",
        move2c : "-Hypnosis",
        move3c : "-Calm Mind",
        move4c : "-Light Screen",

        named : "Solrock",
        leveld : "LV: 42",
        typed : "Type: Rock/Psychic",
        abilityd: "Ability: Levitate",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 123",
        atkd : "Atk: 87",
        defd : "Def: 89",
        spatkd : "Sp. Atk: 69",
        spdefd : "Sp. Def: 72",
        spdd : "Spd: 76",
        move1d : "-Solar Beam",
        move2d : "-Psychic",
        move3d : "-Flamethrower",
        move4d : "-Sunny Day",
    },

    {
        namea : "Luvdisc",
        levela : "LV: 41",
        typea : "Type: Water",
        abilitya: "Ability: Swift Swim",
        itema : "Item: None",
        hpa : "HP: 96",
        atka : "Atk: 42",
        defa : "Def: 59",
        spatka : "Sp. Atk: 42",
        spdefa : "Sp. Def: 68",
        spda : "Spd: 94",
        move1a : "-Water Pulse",
        move2a : "-Flail",
        move3a : "-Sweet Kiss",
        move4a : "-Attract",

        nameb : "Whiscash",
        levelb : "LV: 41",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Oblivious",
        itemb : "Item: None",
        hpb : "HP: 151",
        atkb : "Atk: 78",
        defb : "Def: 66",
        spatkb : "Sp. Atk: 77",
        spdefb : "Sp. Def: 73",
        spdb : "Spd: 70",
        move1b : "-Water Pulse",
        move2b : "-Earthquake",
        move3b : "-Rain Dance",
        move4b : "-Amnesia",

        namec : "Sealeo",
        levelc : "LV: 43",
        typec : "Type: Ice/Water",
        abilityc: "Ability: Thick Fat",
        itemc : "Item: None",
        hpc : "HP: 140",
        atkc : "Atk: 66",
        defc : "Def: 75",
        spatkc : "Sp. Atk: 79",
        spdefc : "Sp. Def: 67",
        spdc : "Spd: 59",
        move1c : "-Aurora Beam",
        move2c : "-Water Pulse",
        move3c : "-Body Slam",
        move4c : "-Encore",

        named : "Crawdaunt",
        leveld : "LV: 43",
        typed : "Type: Water/Dark",
        abilityd: "Ability: Hyper Cutter",
        itemd : "Item: None",
        hpd : "HP: 117",
        atkd : "Atk: 129",
        defd : "Def: 88",
        spatkd : "Sp. Atk: 82",
        spdefd : "Sp. Def: 62",
        spdd : "Spd: 62",
        move1d : "-Crabhammer",
        move2d : "-Water Pulse",
        move3d : "-Taunt",
        move4d : "-Leer",

        namee : "Kingdra",
        levele : "LV: 46",
        typee : "Type: Water/Dragon",
        abilitye: "Ability: Swift Swim",
        iteme : "Item: Chesto Berry",
        hpe : "HP: 138",
        atke : "Atk: 106",
        defe : "Def: 106",
        spatke : "Sp. Atk: 106",
        spdefe : "Sp. Def: 95",
        spde : "Spd: 106",
        move1e : "-Ice Beam",
        move2e : "-Water Pulse",
        move3e : "-Double Team",
        move4e : "-Rest",
    },

    {
        namea : "Altaria",
        levela : "LV: 44",
        typea : "Type: Dragon/Flying",
        abilitya: "Ability: Natural Cure",
        itema : "Item: None",
        hpa : "HP: 127",
        atka : "Atk: 74",
        defa : "Def: 92",
        spatka : "Sp. Atk: 66",
        spdefa : "Sp. Def: 105",
        spda : "Spd: 91",
        move1a : "-Aerial Ace",
        move2a : "-Safeguard",
        move3a : "-Dragon Breath",
        move4a : "-Dragon Dance",

        nameb : "Delcatty",
        levelb : "LV: 43",
        typeb : "Type: Normal",
        abilityb: "Ability: Cute Charm",
        itemb : "Item: None",
        hpb : "HP: 120",
        atkb : "Atk: 68",
        defb : "Def: 68",
        spatkb : "Sp. Atk: 60",
        spdefb : "Sp. Def: 60",
        spdb : "Spd: 72",
        move1b : "-Sing",
        move2b : "-Assist",
        move3b : "-Charm",
        move4b : "-Feint Attack",

        namec : "Roselia",
        levelc : "LV: 44",
        typec : "Type: Grass/Poison",
        abilityc: "Ability: Natural Cure",
        itemc : "Item: None",
        hpc : "HP: 105",
        atkc : "Atk: 71",
        defc : "Def: 52",
        spatkc : "Sp. Atk: 90",
        spdefc : "Sp. Def: 83",
        spdc : "Spd: 70",
        move1c : "-Magical Leaf",
        move2c : "-Leech Seed",
        move3c : "-Giga Drain",
        move4c : "-Toxic",

        named : "Magneton",
        leveld : "LV: 41",
        typed : "Type: Electric/Steel",
        abilityd: "Ability: Magnet Pull",
        itemd : "Item: None",
        hpd : "HP: 99",
        atkd : "Atk: 61",
        defd : "Def: 99",
        spatkd : "Sp. Atk: 99",
        spdefd : "Sp. Def: 69",
        spdd : "Spd: 69",
        move1d : "-Supersonic",
        move2d : "-Thunderbolt",
        move3d : "-Tri Attack",
        move4d : "-Screech",

        namee : "Gardevoir",
        levele : "LV: 45",
        typee : "Type: Psychic",
        abilitye: "Ability: Synchronize",
        iteme : "Item: None",
        hpe : "HP: 129",
        atke : "Atk: 77",
        defe : "Def: 77",
        spatke : "Sp. Atk: 131",
        spdefe : "Sp. Def: 109",
        spde : "Spd: 99",
        move1e : "-Double Team",
        move2e : "-Calm Mind",
        move3e : "-Psychic",
        move4e : "-Future Sight",
    },

    {
        namea : "Mightyena",
        levela : "LV: 46",
        typea : "Type: Dark",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 134",
        atka : "Atk: 101",
        defa : "Def: 83",
        spatka : "Sp. Atk: 81",
        spdefa : "Sp. Def: 66",
        spda : "Spd: 83",
        move1a : "-Crunch",
        move2a : "-Double-Edge",
        move3a : "-Sand Attack",
        move4a : "-Roar",

        nameb : "Shiftry",
        levelb : "LV: 48",
        typeb : "Type: Grass/Dark",
        abilityb: "Ability: Chlorophyll",
        itemb : "Item: None",
        hpb : "HP: 158",
        atkb : "Atk: 115",
        defb : "Def: 77",
        spatkb : "Sp. Atk: 94",
        spdefb : "Sp. Def: 77",
        spdb : "Spd: 105",
        move1b : "-Extrasensory",
        move2b : "-Double Team",
        move3b : "-Swagger",
        move4b : "-Torment",

        namec : "Cacturne",
        levelc : "LV: 46",
        typec : "Type: Grass/Dark",
        abilityc: "Ability: Sand Veil",
        itemc : "Item: None",
        hpc : "HP: 134",
        atkc : "Atk: 136",
        defc : "Def: 74",
        spatkc : "Sp. Atk: 111",
        spdefc : "Sp. Def: 74",
        spdc : "Spd: 69",
        move1c : "-Feint Attack",
        move2c : "-Needle Arm",
        move3c : "-Cotton Spore",
        move4c : "-Leech Seed",

        named : "Crawdaunt",
        leveld : "LV: 48",
        typed : "Type: Water/Dark",
        abilityd: "Ability: Hyper Cutter",
        itemd : "Item: None",
        hpd : "HP: 132",
        atkd : "Atk: 147",
        defd : "Def: 101",
        spatkd : "Sp. Atk: 105",
        spdefd : "Sp. Def: 64",
        spdd : "Spd: 74",
        move1d : "-Surf",
        move2d : "-Strength",
        move3d : "-Facade",
        move4d : "-Swords Dance",

        namee : "Absol",
        levele : "LV: 49",
        typee : "Type: Dark",
        abilitye: "Ability: Pressure",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 137",
        atke : "Atk: 132",
        defe : "Def: 85",
        spatke : "Sp. Atk: 93",
        spdefe : "Sp. Def: 78",
        spde : "Spd: 93",
        move1e : "-Aerial Ace",
        move2e : "-Rock Slide",
        move3e : "-Slash",
        move4e : "-Swords Dance",
    },

    {
        namea : "Dusclops",
        levela : "LV: 48",
        typea : "Type: Ghost",
        abilitya: "Ability: Pressure",
        itema : "Item: None",
        hpa : "HP: 110",
        atka : "Atk: 94",
        defa : "Def: 144",
        spatka : "Sp. Atk: 77",
        spdefa : "Sp. Def: 129",
        spda : "Spd: 43",
        move1a : "-Shadow Punch",
        move2a : "-Protect",
        move3a : "-Confuse Ray",
        move4a : "-Curse",

        nameb : "Banette",
        levelb : "LV: 49",
        typeb : "Type: Ghost",
        abilityb: "Ability: Insomnia",
        itemb : "Item: None",
        hpb : "HP: 136",
        atkb : "Atk: 118",
        defb : "Def: 83",
        spatkb : "Sp. Atk: 101",
        spdefb : "Sp. Def: 89",
        spdb : "Spd: 83",
        move1b : "-Shadow Ball",
        move2b : "-Feint Attack",
        move3b : "-Will-O-Wisp",
        move4b : "-Grudge",

        namec : "Sableye",
        levelc : "LV: 50",
        typec : "Type: Dark/Ghost",
        abilityc: "Ability: Keen Eye",
        itemc : "Item: None",
        hpc : "HP: 125",
        atkc : "Atk: 95",
        defc : "Def: 95",
        spatkc : "Sp. Atk: 76",
        spdefc : "Sp. Def: 93",
        spdc : "Spd: 70",
        move1c : "-Shadow Ball",
        move2c : "-Night Shade",
        move3c : "-Feint Attack",
        move4c : "-Double Team",

        named : "Banette",
        leveld : "LV: 49",
        typed : "Type: Ghost",
        abilityd: "Ability: Insomnia",
        itemd : "Item: None",
        hpd : "HP: 136",
        atkd : "Atk: 132",
        defd : "Def: 83",
        spatkd : "Sp. Atk: 101",
        spdefd : "Sp. Def: 72",
        spdd : "Spd: 91",
        move1d : "-Shadow Ball",
        move2d : "-Psychic",
        move3d : "-Thunderbolt",
        move4d : "-Facade",

        namee : "Dusclops",
        levele : "LV: 51",
        typee : "Type: Ghost",
        abilitye: "Ability: Pressure",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 117",
        atke : "Atk: 92",
        defe : "Def: 153",
        spatke : "Sp. Atk: 73",
        spdefe : "Sp. Def: 168",
        spde : "Spd: 46",
        move1e : "-Ice Beam",
        move2e : "-Shadow Ball",
        move3e : "-Rock Slide",
        move4e : "-Earthquake",
    },

    {
        namea : "Sealeo",
        levela : "LV: 50",
        typea : "Type: Ice/Water",
        abilitya: "Ability: Thick Fat",
        itema : "Item: None",
        hpa : "HP: 165",
        atka : "Atk: 88",
        defa : "Def: 90",
        spatka : "Sp. Atk: 95",
        spdefa : "Sp. Def: 90",
        spda : "Spd: 58",
        move1a : "-Ice Ball",
        move2a : "-Body Slam",
        move3a : "-Hail",
        move4a : "-Encore",

        nameb : "Glalie",
        levelb : "LV: 50",
        typeb : "Type: Ice",
        abilityb: "Ability: Inner Focus",
        itemb : "Item: None",
        hpb : "HP: 155",
        atkb : "Atk: 100",
        defb : "Def: 100",
        spatkb : "Sp. Atk: 100",
        spdefb : "Sp. Def: 100",
        spdb : "Spd: 100",
        move1b : "-Ice Beam",
        move2b : "-Icy Wind",
        move3b : "-Crunch",
        move4b : "-Light Screen",

        namec : "Sealeo",
        levelc : "LV: 52",
        typec : "Type: Ice/Water",
        abilityc: "Ability: Thick Fat",
        itemc : "Item: None",
        hpc : "HP: 171",
        atkc : "Atk: 83",
        defc : "Def: 93",
        spatkc : "Sp. Atk: 98",
        spdefc : "Sp. Def: 93",
        spdc : "Spd: 67",
        move1c : "-Blizzard",
        move2c : "-Double-Edge",
        move3c : "-Hail",
        move4c : "-Attract",

        named : "Glalie",
        leveld : "LV: 52",
        typed : "Type: Ice/Water",
        abilityd: "Ability: Inner Focus",
        itemd : "Item: None",
        hpd : "HP: 160",
        atkd : "Atk: 103",
        defd : "Def: 92",
        spatkd : "Sp. Atk: 113",
        spdefd : "Sp. Def: 103",
        spdd : "Spd: 103",
        move1d : "-Ice Beam",
        move2d : "-Explosion",
        move3d : "-Shadow Ball",
        move4d : "-Hail",

        namee : "Walrein",
        levele : "LV: 53",
        typee : "Type: Ice/Water",
        abilitye: "Ability: Thick Fat",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 196",
        atke : "Atk: 106",
        defe : "Def: 116",
        spatke : "Sp. Atk: 122",
        spdefe : "Sp. Def: 104",
        spde : "Spd: 99",
        move1e : "-Ice Beam",
        move2e : "-Surf",
        move3e : "-Body Slam",
        move4e : "-Sheer Cold",
    },

    {
        namea : "Shelgon",
        levela : "LV: 52",
        typea : "Type: Dragon",
        abilitya: "Ability: Rock Head",
        itema : "Item: None",
        hpa : "HP: 145",
        atka : "Atk: 119",
        defa : "Def: 124",
        spatka : "Sp. Atk: 91",
        spdefa : "Sp. Def: 72",
        spda : "Spd: 64",
        move1a : "-Rock Tomb",
        move2a : "-Double-Edge",
        move3a : "-Dragon Claw",
        move4a : "-Protect",

        nameb : "Altaria",
        levelb : "LV: 54",
        typeb : "Type: Dragon/Flying",
        abilityb: "Ability: Natural Cure",
        itemb : "Item: None",
        hpb : "HP: 161",
        atkb : "Atk: 86",
        defb : "Def: 118",
        spatkb : "Sp. Atk: 105",
        spdefb : "Sp. Def: 134",
        spdb : "Spd: 107",
        move1b : "-Dragon Breath",
        move2b : "-Aerial Ace",
        move3b : "-Double-Edge",
        move4b : "-Dragon Dance",

        namec : "Kingdra",
        levelc : "LV: 53",
        typec : "Type: Water/Dragon",
        abilityc: "Ability: Swift Swim",
        itemc : "Item: None",
        hpc : "HP: 158",
        atkc : "Atk: 121",
        defc : "Def: 121",
        spatkc : "Sp. Atk: 121",
        spdefc : "Sp. Def: 121",
        spdc : "Spd: 111",
        move1c : "-Surf",
        move2c : "-Body Slam",
        move3c : "-Dragon Dance",
        move4c : "-Smokescreen",

        named : "Flygon",
        leveld : "LV: 53",
        typed : "Type: Ground/Dragon",
        abilityd: "Ability: Levitate",
        itemd : "Item: None",
        hpd : "HP: 163",
        atkd : "Atk: 126",
        defd : "Def: 115",
        spatkd : "Sp. Atk: 105",
        spdefd : "Sp. Def: 94",
        spdd : "Spd: 126",
        move1d : "-Dragon Breath",
        move2d : "-Earthquake",
        move3d : "-Crunch",
        move4d : "-Flamethrower",

        namee : "Salamence",
        levele : "LV: 55",
        typee : "Type: Dragon/Flying",
        abilitye: "Ability: Intimidate",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 186",
        atke : "Atk: 153",
        defe : "Def: 121",
        spatke : "Sp. Atk: 143",
        spdefe : "Sp. Def: 110",
        spde : "Spd: 132",
        move1e : "-Dragon Claw",
        move2e : "-Rock Slide",
        move3e : "-Crunch",
        move4e : "-Flamethrower",
    },

    {
        namea : "Wailord",
        levela : "LV: 57",
        typea : "Type: Water",
        abilitya: "Ability: Water Veil",
        itema : "Item: None",
        hpa : "HP: 278",
        atka : "Atk: 125",
        defa : "Def: 73",
        spatka : "Sp. Atk: 137",
        spdefa : "Sp. Def: 65",
        spda : "Spd: 91",
        move1a : "-Blizzard",
        move2a : "-Double-Edge",
        move3a : "-Water Spout",
        move4a : "-Rain Dance",

        nameb : "Tentacruel",
        levelb : "LV: 55",
        typeb : "Type: Water/Poison",
        abilityb: "Ability: Clear Body",
        itemb : "Item: None",
        hpb : "HP: 170",
        atkb : "Atk: 99",
        defb : "Def: 93",
        spatkb : "Sp. Atk: 110",
        spdefb : "Sp. Def: 169",
        spdb : "Spd: 118",
        move1b : "-Ice Beam",
        move2b : "-Sludge",
        move3b : "-Hydro Pump",
        move4b : "-Toxic",

        namec : "Ludicolo",
        levelc : "LV: 56",
        typec : "Type: Water/Grass",
        abilityc: "Ability: Swift Swim",
        itemc : "Item: None",
        hpc : "HP: 172",
        atkc : "Atk: 100",
        defc : "Def: 100",
        spatkc : "Sp. Atk: 123",
        spdefc : "Sp. Def: 134",
        spdc : "Spd: 100",
        move1c : "-Giga Drain",
        move2c : "-Surf",
        move3c : "-Double Team",
        move4c : "-Leech Seed",

        named : "Whiscash",
        leveld : "LV: 56",
        typed : "Type: Water/Ground",
        abilityd: "Ability: Oblivious",
        itemd : "Item: None",
        hpd : "HP: 206",
        atkd : "Atk: 109",
        defd : "Def: 104",
        spatkd : "Sp. Atk: 107",
        spdefd : "Sp. Def: 111",
        spdd : "Spd: 80",
        move1d : "-Surf",
        move2d : "-Hyper Beam",
        move3d : "-Earthquake",
        move4d : "-Amnesia",

        namee : "Gyarados",
        levele : "LV: 56",
        typee : "Type: Water/Flying",
        abilitye: "Ability: Intimidate",
        iteme : "Item: None",
        hpe : "HP: 189",
        atke : "Atk: 162",
        defe : "Def: 110",
        spatke : "Sp. Atk: 97",
        spdefe : "Sp. Def: 120",
        spde : "Spd: 113",
        move1e : "-Surf",
        move2e : "-Hyper Beam",
        move3e : "-Earthquake",
        move4e : "-Dragon Dance",

        namef : "Milotic",
        levelf : "LV: 58",
        typef : "Type: Water",
        abilityf: "Ability: Marvel Scale",
        itemf : "Item: Sitrus Berry",
        hpf : "HP: 196",
        atkf : "Atk: 92",
        deff : "Def: 102",
        spatkf : "Sp. Atk: 138",
        spdeff : "Sp. Def: 183",
        spdf : "Spd: 116",
        move1f : "-Ice Beam",
        move2f : "-Surf",
        move3f : "-Toxic",
        move4f : "-Recover",
    },

    {
        namea : "Skarmory",
        levela : "LV: 77",
        typea : "Type: Steel/Flying",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 210",
        atka : "Atk: 136",
        defa : "Def: 244",
        spatka : "Sp. Atk: 99",
        spdefa : "Sp. Def: 136",
        spda : "Spd: 136",
        move1a : "-Toxic",
        move2a : "-Aerial Ace",
        move3a : "-Spikes",
        move4a : "-Steel Wing",

        nameb : "Claydol",
        levelb : "LV: 75",
        typeb : "Type: Ground/Psychic",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: 198",
        atkb : "Atk: 119",
        defb : "Def: 185",
        spatkb : "Sp. Atk: 146",
        spdefb : "Sp. Def: 208",
        spdb : "Spd: 140",
        move1b : "-Reflect",
        move2b : "-Light Screen",
        move3b : "-Ancient Power",
        move4b : "-Earthquake",

        namec : "Aggron",
        levelc : "LV: 76",
        typec : "Type: Steel/Rock",
        abilityc: "Ability: Sturdy",
        itemc : "Item: None",
        hpc : "HP: 215",
        atkc : "Atk: 195",
        defc : "Def: 302",
        spatkc : "Sp. Atk: 119",
        spdefc : "Sp. Def: 107",
        spdc : "Spd: 114",
        move1c : "-Thunder",
        move2c : "-Earthquake",
        move3c : "-Solar Beam",
        move4c : "-Dragon Claw",

        named : "Cradily",
        leveld : "LV: 76",
        typed : "Type: Rock/Grass",
        abilityd: "Ability: Suction Cups",
        itemd : "Item: None",
        hpd : "HP: 240",
        atkd : "Atk: 151",
        defd : "Def: 176",
        spatkd : "Sp. Atk: 151",
        spdefd : "Sp. Def: 171",
        spdd : "Spd: 102",
        move1d : "-Giga Drain",
        move2d : "-Ancient Power",
        move3d : "-Ingrain",
        move4d : "-Confuse Ray",

        namee : "Armaldo",
        levele : "LV: 76",
        typee : "Type: Rock/Bug",
        abilitye: "Ability: Shell Armor",
        iteme : "Item: None",
        hpe : "HP: 223",
        atke : "Atk: 218",
        defe : "Def: 162",
        spatke : "Sp. Atk: 147",
        spdefe : "Sp. Def: 150",
        spde : "Spd: 96",
        move1e : "-Water Pulse",
        move2e : "-Aerial Ace",
        move3e : "-Ancient Power",
        move4e : "-Slash",

        namef : "Metagross",
        levelf : "LV: 78",
        typef : "Type: Steel/Psychic",
        abilityf: "Ability: Clear Body",
        itemf : "Item: Sitrus Berry",
        hpf : "HP: 236",
        atkf : "Atk: 239",
        deff : "Def: 231",
        spatkf : "Sp. Atk: 177",
        spdeff : "Sp. Def: 169",
        spdf : "Spd: 138",
        move1f : "-Earthquake",
        move2f : "-Psychic",
        move3f : "-Meteor Mash",
        move4f : "-Shadow Ball",
    },
]

function displayETrainers() {
    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showEImages(newTrainerId);
        showPokemonEImages(newTrainerId);
    }

    let eTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = e_trainers [eTrainer].namea;
    document.querySelector('#level1').textContent = e_trainers [eTrainer].levela;
    document.querySelector('#type1').textContent = e_trainers [eTrainer].typea;
    document.querySelector('#ability1').textContent= e_trainers [eTrainer].abilitya;
    document.querySelector('#item1').textContent = e_trainers [eTrainer].itema;
    document.querySelector('#hp1').textContent = e_trainers [eTrainer].hpa;
    document.querySelector('#atk1').textContent = e_trainers [eTrainer].atka;
    document.querySelector('#def1').textContent = e_trainers [eTrainer].defa;
    document.querySelector('#spatk1').textContent = e_trainers [eTrainer].spatka;
    document.querySelector('#spdef1').textContent = e_trainers [eTrainer].spdefa;
    document.querySelector('#spd1').textContent = e_trainers [eTrainer].spda;
    document.querySelector('#move1_1').textContent = e_trainers [eTrainer].move1a;
    document.querySelector('#move2_1').textContent = e_trainers [eTrainer].move2a;
    document.querySelector('#move3_1').textContent = e_trainers [eTrainer].move3a;
    document.querySelector('#move4_1').textContent = e_trainers [eTrainer].move4a;

    
    document.querySelector('#name2').textContent = e_trainers [eTrainer].nameb;
    document.querySelector('#level2').textContent = e_trainers [eTrainer].levelb;
    document.querySelector('#type2').textContent = e_trainers [eTrainer].typeb;
    document.querySelector('#ability2').textContent= e_trainers [eTrainer].abilityb;
    document.querySelector('#item2').textContent = e_trainers [eTrainer].itemb;
    document.querySelector('#hp2').textContent = e_trainers [eTrainer].hpb;
    document.querySelector('#atk2').textContent = e_trainers [eTrainer].atkb;
    document.querySelector('#def2').textContent = e_trainers [eTrainer].defb;
    document.querySelector('#spatk2').textContent = e_trainers [eTrainer].spatkb;
    document.querySelector('#spdef2').textContent = e_trainers [eTrainer].spdefb;
    document.querySelector('#spd2').textContent = e_trainers [eTrainer].spdb;
    document.querySelector('#move1_2').textContent = e_trainers [eTrainer].move1b;
    document.querySelector('#move2_2').textContent = e_trainers [eTrainer].move2b;
    document.querySelector('#move3_2').textContent = e_trainers [eTrainer].move3b;
    document.querySelector('#move4_2').textContent = e_trainers [eTrainer].move4b;

    document.querySelector('#name3').textContent = e_trainers [eTrainer].namec;
    document.querySelector('#level3').textContent = e_trainers [eTrainer].levelc;
    document.querySelector('#type3').textContent = e_trainers [eTrainer].typec;
    document.querySelector('#ability3').textContent= e_trainers [eTrainer].abilityc;
    document.querySelector('#item3').textContent = e_trainers [eTrainer].itemc;
    document.querySelector('#hp3').textContent = e_trainers [eTrainer].hpc;
    document.querySelector('#atk3').textContent = e_trainers [eTrainer].atkc;
    document.querySelector('#def3').textContent = e_trainers [eTrainer].defc;
    document.querySelector('#spatk3').textContent = e_trainers [eTrainer].spatkc;
    document.querySelector('#spdef3').textContent = e_trainers [eTrainer].spdefc;
    document.querySelector('#spd3').textContent = e_trainers [eTrainer].spdc;
    document.querySelector('#move1_3').textContent = e_trainers [eTrainer].move1c;
    document.querySelector('#move2_3').textContent = e_trainers [eTrainer].move2c;
    document.querySelector('#move3_3').textContent = e_trainers [eTrainer].move3c;
    document.querySelector('#move4_3').textContent = e_trainers [eTrainer].move4c;

    document.querySelector('#name4').textContent = e_trainers [eTrainer].named;
    document.querySelector('#level4').textContent = e_trainers [eTrainer].leveld;
    document.querySelector('#type4').textContent = e_trainers [eTrainer].typed;
    document.querySelector('#ability4').textContent= e_trainers [eTrainer].abilityd;
    document.querySelector('#item4').textContent = e_trainers [eTrainer].itemd;
    document.querySelector('#hp4').textContent = e_trainers [eTrainer].hpd;
    document.querySelector('#atk4').textContent = e_trainers [eTrainer].atkd;
    document.querySelector('#def4').textContent = e_trainers [eTrainer].defd;
    document.querySelector('#spatk4').textContent = e_trainers [eTrainer].spatkd;
    document.querySelector('#spdef4').textContent = e_trainers [eTrainer].spdefd;
    document.querySelector('#spd4').textContent = e_trainers [eTrainer].spdd;
    document.querySelector('#move1_4').textContent = e_trainers [eTrainer].move1d;
    document.querySelector('#move2_4').textContent = e_trainers [eTrainer].move2d;
    document.querySelector('#move3_4').textContent = e_trainers [eTrainer].move3d;
    document.querySelector('#move4_4').textContent = e_trainers [eTrainer].move4d;

    document.querySelector('#name5').textContent = e_trainers [eTrainer].namee;
    document.querySelector('#level5').textContent = e_trainers [eTrainer].levele;
    document.querySelector('#type5').textContent = e_trainers [eTrainer].typee;
    document.querySelector('#ability5').textContent= e_trainers [eTrainer].abilitye;
    document.querySelector('#item5').textContent = e_trainers [eTrainer].iteme;
    document.querySelector('#hp5').textContent = e_trainers [eTrainer].hpe;
    document.querySelector('#atk5').textContent = e_trainers [eTrainer].atke;
    document.querySelector('#def5').textContent = e_trainers [eTrainer].defe;
    document.querySelector('#spatk5').textContent = e_trainers [eTrainer].spatke;
    document.querySelector('#spdef5').textContent = e_trainers [eTrainer].spdefe;
    document.querySelector('#spd5').textContent = e_trainers [eTrainer].spde;
    document.querySelector('#move1_5').textContent = e_trainers [eTrainer].move1e;
    document.querySelector('#move2_5').textContent = e_trainers [eTrainer].move2e;
    document.querySelector('#move3_5').textContent = e_trainers [eTrainer].move3e;
    document.querySelector('#move4_5').textContent = e_trainers [eTrainer].move4e;

    document.querySelector('#name6').textContent = e_trainers [eTrainer].namef;
    document.querySelector('#level6').textContent = e_trainers [eTrainer].levelf;
    document.querySelector('#type6').textContent = e_trainers [eTrainer].typef;
    document.querySelector('#ability6').textContent= e_trainers [eTrainer].abilityf;
    document.querySelector('#item6').textContent = e_trainers [eTrainer].itemf;
    document.querySelector('#hp6').textContent = e_trainers [eTrainer].hpf;
    document.querySelector('#atk6').textContent = e_trainers [eTrainer].atkf;
    document.querySelector('#def6').textContent = e_trainers [eTrainer].deff;
    document.querySelector('#spatk6').textContent = e_trainers [eTrainer].spatkf;
    document.querySelector('#spdef6').textContent = e_trainers [eTrainer].spdeff;
    document.querySelector('#spd6').textContent = e_trainers [eTrainer].spdf;
    document.querySelector('#move1_6').textContent = e_trainers [eTrainer].move1f;
    document.querySelector('#move2_6').textContent = e_trainers [eTrainer].move2f;
    document.querySelector('#move3_6').textContent = e_trainers [eTrainer].move3f;
    document.querySelector('#move4_6').textContent = e_trainers [eTrainer].move4f;
}

function showEImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/e/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonEImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/e/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/e/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/e/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/e/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/e/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/e/" + trainerId + "_6.png";
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

    refCredit.textContent = "roushmore"
    refCredit.href = "https://docs.google.com/spreadsheets/d/1frqW2CeHop4o0NP6Ja_TAAPPkGIrvxkeQJBfyxFggyk/edit#gid=1064630895"
}

roxanneE.addEventListener('click', displayETrainers);
brawlyE.addEventListener('click', displayETrainers);
wattsonE.addEventListener('click', displayETrainers);
flanneryE.addEventListener('click', displayETrainers);
normanE.addEventListener('click', displayETrainers);
winonaE.addEventListener('click', displayETrainers);
tatelizaE.addEventListener('click', displayETrainers);
juanE.addEventListener('click', displayETrainers);
wallyE.addEventListener('click', displayETrainers);
sidneyE.addEventListener('click', displayETrainers);
phoebeE.addEventListener('click', displayETrainers);
glaciaE.addEventListener('click', displayETrainers);
drakeE.addEventListener('click', displayETrainers);
wallaceE.addEventListener('click', displayETrainers);
stevenE.addEventListener('click', displayETrainers);