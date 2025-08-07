let roxanneRS = document.querySelector ("#roxanne1");
let brawlyRS = document.querySelector ("#brawly1");
let wattsonRS = document.querySelector ("#wattson1");
let flanneryRS = document.querySelector ("#flannery1");
let normanRS = document.querySelector ("#norman1");
let winonaRS = document.querySelector ("#winona1");
let tatelizaRS = document.querySelector ("#tateliza1");
let wallaceRS = document.querySelector ("#wallace1");
let wallyRS = document.querySelector ("#wally1");
let sidneyRS = document.querySelector ("#sidney1");
let phoebeRS = document.querySelector ("#phoebe1");
let glaciaRS = document.querySelector ("#glacia1");
let drakeRS = document.querySelector ("#drake1");
let stevenRS = document.querySelector ("#steven1");

let rs_trainers = [
    {
        namea : "Geodude",
        levela : "LV: 14",
        typea : "Type: Rock/Ground",
        abilitya : "Ability: Sturdy",
        itema : "Item: None",
        hpa : "HP: 37",
        atka : "Atk: 29",
        defa : "Def: 35",
        spatka : "Sp. Atk: 15",
        spdefa : "Sp. Def: 15",
        spda : "Spd: 13",
        move1a : "-Tackle",
        move2a : "-Defense Curl",
        move3a : "-Rock Throw",
        move4a : "-Rock Tomb",

        nameb : "Nosepass",
        levelb : "LV: 15",
        typeb : "Type: Rock",
        abilityb : "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 37",
        atkb : "Atk: 19",
        defb : "Def: 49",
        spatkb : "Sp. Atk: 24",
        spdefb : "Sp. Def: 35",
        spdb : "Spd: 17",
        move1b : "-Tackle",
        move2b : "-Harden",
        move3b : "-Rock Throw",
        move4b : "-Rock Tomb",
    },

    {
        namea : "Machop",
        levela : "LV: 17",
        typea : "Type: Fighting",
        abilitya : "Ability: Guts",
        itema : "Item: None",
        hpa : "HP: 53",
        atka : "Atk: 35",
        defa : "Def: 25",
        spatka : "Sp. Atk: 19",
        spdefa : "Sp. Def: 19",
        spda : "Spd: 19",
        move1a : "-Karate Chop",
        move2a : "-Leer",
        move3a : "-Seismic Toss",
        move4a : "-Bulk Up",

        nameb : "Makuhita",
        levelb : "LV: 18",
        typeb : "Type: Fighting",
        abilityb : "Ability: Thick Fat",
        itemb : "Item: None",
        hpb : "HP: 60",
        atkb : "Atk: 32",
        defb : "Def: 22",
        spatkb : "Sp. Atk: 17",
        spdefb : "Sp. Def: 18",
        spdb : "Spd: 19",
        move1b : "-Arm Thrust",
        move2b : "-Knock Off",
        move3b : "-Sand Attack",
        move4b : "-Bulk Up",
    },

    {
        namea : "Magnemite",
        levela : "LV: 22",
        typea : "Type: Electric/Steel",
        abilitya: "Ability: Magnet Pull",
        itema : "Item: None",
        hpa : "HP: 48",
        atka : "Atk: 25",
        defa : "Def: 36",
        spatka : "Sp. Atk: 52",
        spdefa : "Sp. Def: 34",
        spda : "Spd: 33",
        move1a : "-Supersonic",
        move2a : "-Sonicboom",
        move3a : "-Thunder Shock",
        move4a : "-Thunder Wave",

        nameb : "Voltorb",
        levelb : "LV: 20",
        typeb : "Type: Electric",
        abilityb : "Ability: Soundproof",
        itemb : "Item: None",
        hpb : "HP: 50",
        atkb : "Atk: 21",
        defb : "Def: 29",
        spatkb : "Sp. Atk: 31",
        spdefb : "Sp. Def: 31",
        spdb : "Spd: 49",
        move1b : "-Rollout",
        move2b : "-Spark",
        move3b : "-Self-Destruct",
        move4b : "-Sonic Boom",

        namec : "Magneton",
        levelc : "LV: 23",
        typec : "Type: Electric/Steel",
        abilityc : "Ability: Magnet Pull",
        itemc : "Item: None",
        hpc : "HP: 62",
        atkc : "Atk: 42",
        defc : "Def: 55",
        spatkc : "Sp. Atk: 67",
        spdefc : "Sp. Def: 44",
        spdc : "Spd: 39",
        move1c : "-Supersonic",
        move2c : "-Shock Wave",
        move3c : "-Thunder Wave",
        move4c : "-Sonic Boom",
    },

    {
        namea : "Slugma",
        levela : "LV: 26",
        typea : "Type: Fire",
        abilitya: "Ability: Magma Armor",
        itema : "Item: None",
        hpa : "HP: 63",
        atka : "Atk: 35",
        defa : "Def: 32",
        spatka : "Sp. Atk: 47",
        spdefa : "Sp. Def: 32",
        spda : "Spd: 18",
        move1a : "-Overheat",
        move2a : "-Smog",
        move3a : "-Light Screen",
        move4a : "-Sunny Day",

        nameb : "Slugma",
        levelb : "LV: 26",
        typeb : "Type: Fire",
        abilityb : "Ability: Magma Armor",
        itemb : "Item: None",
        hpb : "HP: 63",
        atkb : "Atk: 32",
        defb : "Def: 35",
        spatkb : "Sp. Atk: 47",
        spdefb : "Sp. Def: 28",
        spdb : "Spd: 21",
        move1b : "-Flamethrower",
        move2b : "-Rock Slide",
        move3b : "-Light Screen",
        move4b : "-Sunny Day",

        namec : "Torkoal",
        levelc : "LV: 28",
        typec : "Type: Fire",
        abilityc : "Ability: White Smoke",
        itemc : "Item: None",
        hpc : "HP: 85",
        atkc : "Atk: 61",
        defc : "Def: 81",
        spatkc : "Sp. Atk: 61",
        spdefc : "Sp. Def: 57",
        spdc : "Spd: 24",
        move1c : "-Body Slam",
        move2c : "-Overheat",
        move3c : "-Attract",
        move4c : "-Flail",
    },

    {
        namea : "Slaking",
        levela : "LV: 28",
        typea : "Type: Normal",
        abilitya: "Ability: Truant",
        itema : "Item: None",
        hpa : "HP: 128",
        atka : "Atk: 101",
        defa : "Def: 73",
        spatka : "Sp. Atk: 64",
        spdefa : "Sp. Def: 48",
        spda : "Spd: 60",
        move1a : "-Encore",
        move2a : "-Yawn",
        move3a : "-Facade",
        move4a : "-Feint Attack",

        nameb : "Vigoroth",
        levelb : "LV: 30",
        typeb : "Type: Normal",
        abilityb : "Vital Spirit",
        itemb : "Item: None",
        hpb : "HP: 95",
        atkb : "Atk: 54",
        defb : "Def: 60",
        spatkb : "Sp. Atk: 49",
        spdefb : "Sp. Def: 45",
        spdb : "Spd: 66",
        move1b : "-Slash",
        move2b : "-Facade",
        move3b : "-Feint Attack",
        move4b : "-Encore",

        namec : "Slaking",
        levelc : "LV: 31",
        typec : "Type: Normal",
        abilityc : "Ability: Truant",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 143",
        atkc : "Atk: 113",
        defc : "Def: 68",
        spatkc : "Sp. Atk: 64",
        spdefc : "Sp. Def: 48",
        spdc : "Spd: 83",
        move1c : "-Focus Punch",
        move2c : "-Slack Off",
        move3c : "-Facade",
        move4c : "-Feint Attack",
    },

    {
        namea : "Swellow",
        levela : "LV: 31",
        typea : "Type: Normal/Flying",
        abilitya: "Ability: Guts",
        itema : "Item: None",
        hpa : "HP: 85",
        atka : "Atk: 65",
        defa : "Def: 49",
        spatka : "Sp. Atk: 38",
        spdefa : "Sp. Def: 43",
        spda : "Spd: 97",
        move1a : "-Quick Attack",
        move2a : "-Aerial Ace",
        move3a : "-Double Team",
        move4a : "-Endeavor",

        nameb : "Pelipper",
        levelb : "LV: 30",
        typeb : "Type: Water/Flying",
        abilityb: "Ability: Keen Eye",
        itemb : "Item: None",
        hpb : "HP: 83",
        atkb : "Atk: 42",
        defb : "Def: 72",
        spatkb : "Sp. Atk: 63",
        spdefb : "Sp. Def: 54",
        spdb : "Spd: 51",
        move1b : "-Aerial Ace",
        move2b : "-Water Gun",
        move3b : "-Supersonic",
        move4b : "-Protect",

        namec : "Skarmory",
        levelc : "LV: 32",
        typec : "Type: Steel/Flying",
        abilityc: "Ability: Keen Eye",
        itemc : "Item: None",
        hpc : "HP: 91",
        atkc : "Atk: 63",
        defc : "Def: 102",
        spatkc : "Sp. Atk: 38",
        spdefc : "Sp. Def: 57",
        spdc : "Spd: 57",
        move1c : "-Aerial Ace",
        move2c : "-Steel Wing",
        move3c : "-Fury Attack",
        move4c : "-Sand Attack",

        named : "Altaria",
        leveld : "LV: 33",
        typed : "Type: Dragon/Flying",
        abilityd: "Ability: Natural Cure",
        itemd : "Item: None",
        hpd : "HP: 102",
        atkd : "Atk: 61",
        defd : "Def: 66",
        spatkd : "Sp. Atk: 61",
        spdefd : "Sp. Def: 84",
        spdd : "Spd: 73",
        move1d : "-Earthquake",
        move2d : "-Aerial Ace",
        move3d : "-Dragon Breath",
        move4d : "-Dragon Dance",
    },

    {

        namea : "Lunatone",
        levela : "LV: 42",
        typea : "Type: Rock/Psychic",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: 123",
        atka : "Atk: 56",
        defa : "Def: 79",
        spatka : "Sp. Atk: 97",
        spdefa : "Sp. Def: 89",
        spda : "Spd: 76",
        move1a : "-Psychic",
        move2a : "-Hypnosis",
        move3a : "-Calm Mind",
        move4a : "-Light Screen",

        nameb : "Solrock",
        levelb : "LV: 42",
        typeb : "Type: Rock/Psychic",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: 123",
        atkb : "Atk: 97",
        defb : "Def: 89",
        spatkb : "Sp. Atk: 63",
        spdefb : "Sp. Def: 72",
        spdb : "Spd: 76",
        move1b : "-Solar Beam",
        move2b : "-Psychic",
        move3b : "-Flamethrower",
        move4b : "-Sunny Day",
    },

    {
        namea : "Luvdisc",
        levela : "LV: 40",
        typea : "Type: Water",
        abilitya: "Ability: Swift Swim",
        itema : "Item: None",
        hpa : "HP: 94",
        atka : "Atk: 38",
        defa : "Def: 58",
        spatka : "Sp. Atk: 50",
        spdefa : "Sp. Def: 66",
        spda : "Spd: 82",
        move1a : "-Water Pulse",
        move2a : "-Flail",
        move3a : "-Sweet Kiss",
        move4a : "-Attract",

        nameb : "Sealeo",
        levelb : "LV: 40",
        typeb : "Type: Ice/Water",
        abilityb: "Ability: Thick Fat",
        itemb : "Item: None",
        hpb : "HP: 131",
        atkb : "Atk: 62",
        defb : "Def: 70",
        spatkb : "Sp. Atk: 74",
        spdefb : "Sp. Def: 70",
        spdb : "Spd: 50",
        move1b : "-Aurora Beam",
        move2b : "-Water Pulse",
        move3b : "-Body Slam",
        move4b : "-Encore",

        namec : "Seaking",
        levelc : "LV: 42",
        typec : "Type: Water",
        abilityc: "Ability: Swift Swim",
        itemc : "Item: None",
        hpc : "HP: 129",
        atkc : "Atk: 92",
        defc : "Def: 69",
        spatkc : "Sp. Atk: 69",
        spdefc : "Sp. Def: 82",
        spdc : "Spd: 72",
        move1c : "-Horn Drill",
        move2c : "-Fury Attack",
        move3c : "-Rain Dance",
        move4c : "-Water Pulse",

        named : "Whiscash",
        leveld : "LV: 42",
        typed : "Type: Water/Ground",
        abilityd: "Ability: Oblivious",
        itemd : "Item: None",
        hpd : "HP: 154",
        atkd : "Atk: 80",
        defd : "Def: 76",
        spatkd : "Sp. Atk: 78",
        spdefd : "Sp. Def: 66",
        spdd : "Spd: 71",
        move1d : "-Water Pulse",
        move2d : "-Earthquake",
        move3d : "-Rain Dance",
        move4d : "-Amnesia",

        namee : "Milotic",
        levele : "LV: 43",
        typee : "Type: Water",
        abilitye: "Ability: Marvel Scale",
        iteme : "Item: None",
        hpe : "HP: 147",
        atke : "Atk: 62",
        defe : "Def: 85",
        spatke : "Sp. Atk: 103",
        spdefe : "Sp. Def: 137",
        spde : "Spd: 87",
        move1e : "-Water Pulse",
        move2e : "-Twister",
        move3e : "-Recover",
        move4e : "-Ice Beam",

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
        move2a : "-Take Down",
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
        move4b : "-Fake Out",

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

        named : "Sharpedo",
        leveld : "LV: 48",
        typed : "Type: Water/Dark",
        abilityd: "Ability: Rough Skin",
        itemd : "Item: None",
        hpd : "HP: 139",
        atkd : "Atk: 134",
        defd : "Def: 57",
        spatkd : "Sp. Atk: 110",
        spdefd : "Sp. Def: 57",
        spdd : "Spd: 110",
        move1d : "-Surf",
        move2d : "-Crunch",
        move3d : "-Slash",
        move4d : "-Swagger",

        namee : "Absol",
        levele : "LV: 49",
        typee : "Type: Dark",
        abilitye: "Ability: Pressure",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 137",
        atke : "Atk: 147",
        defe : "Def: 78",
        spatke : "Sp. Atk: 93",
        spdefe : "Sp. Def: 78",
        spde : "Spd: 93",
        move1e : "-Aerial Ace",
        move2e : "-Snatch",
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
        move2a : "-Future Sight",
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
        move4b : "-Spite",

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
        move2c : "-Psychic",
        move3c : "-Feint Attack",
        move4c : "-Attract",

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
        move3d : "-Toxic",
        move4d : "-Skill Swap",

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
        move3e : "-Confuse Ray",
        move4e : "-Earthquake",
    },

    {

        namea : "Glalie",
        levela : "LV: 50",
        typea : "Type: Ice",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 155",
        atka : "Atk: 100",
        defa : "Def: 90",
        spatka : "Sp. Atk: 100",
        spdefa : "Sp. Def: 100",
        spda : "Spd: 110",
        move1a : "-Ice Beam",
        move2a : "-Hail",
        move3a : "-Crunch",
        move4a : "-Light Screen",

        nameb : "Sealeo",
        levelb : "LV: 50",
        typeb : "Type: Ice/Water",
        abilityb: "Ability: Thick Fat",
        itemb : "Item: None",
        hpb : "HP: 165",
        atkb : "Atk: 80",
        defb : "Def: 90",
        spatkb : "Sp. Atk: 95",
        spdefb : "Sp. Def: 90",
        spdb : "Spd: 65",
        move1b : "-Ice Ball",
        move2b : "-Body Slam",
        move3b : "-Hail",
        move4b : "-Surf",

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
        move2c : "-Dive",
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
        move2d : "-Crunch",
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
        move1e : "-Blizzard",
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
        move2a : "-Crunch",
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
        move2b : "-Refresh",
        move3b : "-Take Down",
        move4b : "-Dragon Dance",

        namec : "Flygon",
        levelc : "LV: 53",
        typec : "Type: Ground/Dragon",
        abilityc: "Ability: Levitate",
        itemc : "Item: None",
        hpc : "HP: 163",
        atkc : "Atk: 126",
        defc : "Def: 105",
        spatkc : "Sp. Atk: 105",
        spdefc : "Sp. Def: 105",
        spdc : "Spd: 126",
        move1d : "-Dragon Breath",
        move2d : "-Sand Attack",
        move3d : "-Crunch",
        move4d : "-Flamethrower",

        named : "Flygon",
        leveld : "LV: 53",
        typed : "Type: Ground/Dragon",
        abilityd: "Ability: Levitate",
        itemd : "Item: None",
        hpd : "HP: 163",
        atkd : "Atk: 126",
        defd : "Def: 115",
        spatkd : "Sp. Atk: 94",
        spdefd : "Sp. Def: 105",
        spdd : "Spd: 126",
        move1d : "-Fly",
        move2d : "-Dig",
        move3d : "-Dragon Breath",
        move4d : "-Sandstorm",

        namee : "Salamence",
        levele : "LV: 55",
        typee : "Type: Dragon/Flying",
        abilitye: "Ability: Intimidate",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 186",
        atke : "Atk: 187",
        defe : "Def: 110",
        spatke : "Sp. Atk: 143",
        spdefe : "Sp. Def: 99",
        spde : "Spd: 132",
        move1e : "-Dragon Claw",
        move2e : "-Fly",
        move3e : "-Crunch",
        move4e : "-Flamethrower",
    },

    {
        namea : "Skarmory",
        levela : "LV: 57",
        typea : "Type: Steel/Flying",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 158",
        atka : "Atk: 101",
        defa : "Def: 182",
        spatka : "Sp. Atk: 74",
        spdefa : "Sp. Def: 102",
        spda : "Spd: 102",
        move1a : "-Toxic",
        move2a : "-Aerial Ace",
        move3a : "-Spikes",
        move4a : "-Steel Wing",

        nameb : "Claydol",
        levelb : "LV: 55",
        typeb : "Type: Ground/Psychic",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: 148",
        atkb : "Atk: 89",
        defb : "Def: 137",
        spatkb : "Sp. Atk: 108",
        spdefb : "Sp. Def: 154",
        spdb : "Spd: 104",
        move1b : "-Reflect",
        move2b : "-Light Screen",
        move3b : "-Ancient Power",
        move4b : "-Earthquake",

        namec : "Aggron",
        levelc : "LV: 56",
        typec : "Type: Steel/Rock",
        abilityc: "Ability: Sturdy",
        itemc : "Item: None",
        hpc : "HP: 161",
        atkc : "Atk: 145",
        defc : "Def: 223",
        spatkc : "Sp. Atk: 89",
        spdefc : "Sp. Def: 80",
        spdc : "Spd: 85",
        move1c : "-Thunder",
        move2c : "-Earthquake",
        move3c : "-Solar Beam",
        move4c : "-Dragon Claw",

        named : "Cradily",
        leveld : "LV: 56",
        typed : "Type: Rock/Grass",
        abilityd: "Ability: Suction Cups",
        itemd : "Item: None",
        hpd : "HP: 179",
        atkd : "Atk: 113",
        defd : "Def: 131",
        spatkd : "Sp. Atk: 113",
        spdefd : "Sp. Def: 127",
        spdd : "Spd: 77",
        move1d : "-Giga Drain",
        move2d : "-Ancient Power",
        move3d : "-Sludge Bomb",
        move4d : "-Confuse Ray",

        namee : "Armaldo",
        levele : "LV: 56",
        typee : "Type: Rock/Bug",
        abilitye: "Ability: Shell Armor",
        iteme : "Item: None",
        hpe : "HP: 167",
        atke : "Atk: 162",
        defe : "Def: 120",
        spatke : "Sp. Atk: 110",
        spdefe : "Sp. Def: 111",
        spde : "Spd: 72",
        move1e : "-Water Pulse",
        move2e : "-Aerial Ace",
        move3e : "-Ancient Power",
        move4e : "-Slash",

        namef : "Metagross",
        levelf : "LV: 58",
        typef : "Type: Steel/Psychic",
        abilityf: "Ability: Clear Body",
        itemf : "Item: Sitrus Berry",
        hpf : "HP: 178",
        atkf : "Atk: 179",
        deff : "Def: 173",
        spatkf : "Sp. Atk: 133",
        spdeff : "Sp. Def: 127",
        spdf : "Spd: 104",
        move1f : "-Earthquake",
        move2f : "-Psychic",
        move3f : "-Meteor Mash",
        move4f : "-Hyper Beam",
    },
]

function displayRSTrainers() {
    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showRSImages(newTrainerId);
        showPokemonRSImages(newTrainerId);
    }

    let rsTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = rs_trainers [rsTrainer].namea;
    document.querySelector('#level1').textContent = rs_trainers [rsTrainer].levela;
    document.querySelector('#type1').textContent = rs_trainers [rsTrainer].typea;
    document.querySelector('#ability1').textContent= rs_trainers [rsTrainer].abilitya;
    document.querySelector('#item1').textContent = rs_trainers [rsTrainer].itema;
    document.querySelector('#hp1').textContent = rs_trainers [rsTrainer].hpa;
    document.querySelector('#atk1').textContent = rs_trainers [rsTrainer].atka;
    document.querySelector('#def1').textContent = rs_trainers [rsTrainer].defa;
    document.querySelector('#spatk1').textContent = rs_trainers [rsTrainer].spatka;
    document.querySelector('#spdef1').textContent = rs_trainers [rsTrainer].spdefa;
    document.querySelector('#spd1').textContent = rs_trainers [rsTrainer].spda;
    document.querySelector('#move1_1').textContent = rs_trainers [rsTrainer].move1a;
    document.querySelector('#move2_1').textContent = rs_trainers [rsTrainer].move2a;
    document.querySelector('#move3_1').textContent = rs_trainers [rsTrainer].move3a;
    document.querySelector('#move4_1').textContent = rs_trainers [rsTrainer].move4a;

    
    document.querySelector('#name2').textContent = rs_trainers [rsTrainer].nameb;
    document.querySelector('#level2').textContent = rs_trainers [rsTrainer].levelb;
    document.querySelector('#type2').textContent = rs_trainers [rsTrainer].typeb;
    document.querySelector('#ability2').textContent= rs_trainers [rsTrainer].abilityb;
    document.querySelector('#item2').textContent = rs_trainers [rsTrainer].itemb;
    document.querySelector('#hp2').textContent = rs_trainers [rsTrainer].hpb;
    document.querySelector('#atk2').textContent = rs_trainers [rsTrainer].atkb;
    document.querySelector('#def2').textContent = rs_trainers [rsTrainer].defb;
    document.querySelector('#spatk2').textContent = rs_trainers [rsTrainer].spatkb;
    document.querySelector('#spdef2').textContent = rs_trainers [rsTrainer].spdefb;
    document.querySelector('#spd2').textContent = rs_trainers [rsTrainer].spdb;
    document.querySelector('#move1_2').textContent = rs_trainers [rsTrainer].move1b;
    document.querySelector('#move2_2').textContent = rs_trainers [rsTrainer].move2b;
    document.querySelector('#move3_2').textContent = rs_trainers [rsTrainer].move3b;
    document.querySelector('#move4_2').textContent = rs_trainers [rsTrainer].move4b;

    document.querySelector('#name3').textContent = rs_trainers [rsTrainer].namec;
    document.querySelector('#level3').textContent = rs_trainers [rsTrainer].levelc;
    document.querySelector('#type3').textContent = rs_trainers [rsTrainer].typec;
    document.querySelector('#ability3').textContent= rs_trainers [rsTrainer].abilityc;
    document.querySelector('#item3').textContent = rs_trainers [rsTrainer].itemc;
    document.querySelector('#hp3').textContent = rs_trainers [rsTrainer].hpc;
    document.querySelector('#atk3').textContent = rs_trainers [rsTrainer].atkc;
    document.querySelector('#def3').textContent = rs_trainers [rsTrainer].defc;
    document.querySelector('#spatk3').textContent = rs_trainers [rsTrainer].spatkc;
    document.querySelector('#spdef3').textContent = rs_trainers [rsTrainer].spdefc;
    document.querySelector('#spd3').textContent = rs_trainers [rsTrainer].spdc;
    document.querySelector('#move1_3').textContent = rs_trainers [rsTrainer].move1c;
    document.querySelector('#move2_3').textContent = rs_trainers [rsTrainer].move2c;
    document.querySelector('#move3_3').textContent = rs_trainers [rsTrainer].move3c;
    document.querySelector('#move4_3').textContent = rs_trainers [rsTrainer].move4c;

    document.querySelector('#name4').textContent = rs_trainers [rsTrainer].named;
    document.querySelector('#level4').textContent = rs_trainers [rsTrainer].leveld;
    document.querySelector('#type4').textContent = rs_trainers [rsTrainer].typed;
    document.querySelector('#ability4').textContent= rs_trainers [rsTrainer].abilityd;
    document.querySelector('#item4').textContent = rs_trainers [rsTrainer].itemd;
    document.querySelector('#hp4').textContent = rs_trainers [rsTrainer].hpd;
    document.querySelector('#atk4').textContent = rs_trainers [rsTrainer].atkd;
    document.querySelector('#def4').textContent = rs_trainers [rsTrainer].defd;
    document.querySelector('#spatk4').textContent = rs_trainers [rsTrainer].spatkd;
    document.querySelector('#spdef4').textContent = rs_trainers [rsTrainer].spdefd;
    document.querySelector('#spd4').textContent = rs_trainers [rsTrainer].spdd;
    document.querySelector('#move1_4').textContent = rs_trainers [rsTrainer].move1d;
    document.querySelector('#move2_4').textContent = rs_trainers [rsTrainer].move2d;
    document.querySelector('#move3_4').textContent = rs_trainers [rsTrainer].move3d;
    document.querySelector('#move4_4').textContent = rs_trainers [rsTrainer].move4d;

    document.querySelector('#name5').textContent = rs_trainers [rsTrainer].namee;
    document.querySelector('#level5').textContent = rs_trainers [rsTrainer].levele;
    document.querySelector('#type5').textContent = rs_trainers [rsTrainer].typee;
    document.querySelector('#ability5').textContent= rs_trainers [rsTrainer].abilitye;
    document.querySelector('#item5').textContent = rs_trainers [rsTrainer].iteme;
    document.querySelector('#hp5').textContent = rs_trainers [rsTrainer].hpe;
    document.querySelector('#atk5').textContent = rs_trainers [rsTrainer].atke;
    document.querySelector('#def5').textContent = rs_trainers [rsTrainer].defe;
    document.querySelector('#spatk5').textContent = rs_trainers [rsTrainer].spatke;
    document.querySelector('#spdef5').textContent = rs_trainers [rsTrainer].spdefe;
    document.querySelector('#spd5').textContent = rs_trainers [rsTrainer].spde;
    document.querySelector('#move1_5').textContent = rs_trainers [rsTrainer].move1e;
    document.querySelector('#move2_5').textContent = rs_trainers [rsTrainer].move2e;
    document.querySelector('#move3_5').textContent = rs_trainers [rsTrainer].move3e;
    document.querySelector('#move4_5').textContent = rs_trainers [rsTrainer].move4e;

    document.querySelector('#name6').textContent = rs_trainers [rsTrainer].namef;
    document.querySelector('#level6').textContent = rs_trainers [rsTrainer].levelf;
    document.querySelector('#type6').textContent = rs_trainers [rsTrainer].typef;
    document.querySelector('#ability6').textContent= rs_trainers [rsTrainer].abilityf;
    document.querySelector('#item6').textContent = rs_trainers [rsTrainer].itemf;
    document.querySelector('#hp6').textContent = rs_trainers [rsTrainer].hpf;
    document.querySelector('#atk6').textContent = rs_trainers [rsTrainer].atkf;
    document.querySelector('#def6').textContent = rs_trainers [rsTrainer].deff;
    document.querySelector('#spatk6').textContent = rs_trainers [rsTrainer].spatkf;
    document.querySelector('#spdef6').textContent = rs_trainers [rsTrainer].spdeff;
    document.querySelector('#spd6').textContent = rs_trainers [rsTrainer].spdf;
    document.querySelector('#move1_6').textContent = rs_trainers [rsTrainer].move1f;
    document.querySelector('#move2_6').textContent = rs_trainers [rsTrainer].move2f;
    document.querySelector('#move3_6').textContent = rs_trainers [rsTrainer].move3f;
    document.querySelector('#move4_6').textContent = rs_trainers [rsTrainer].move4f;
}

function showRSImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/rs/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonRSImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/rs/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/rs/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/rs/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/rs/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/rs/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/rs/" + trainerId + "_6.png";
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

roxanneRS.addEventListener('click', displayRSTrainers);
brawlyRS.addEventListener('click', displayRSTrainers);
wattsonRS.addEventListener('click', displayRSTrainers);
flanneryRS.addEventListener('click', displayRSTrainers);
normanRS.addEventListener('click', displayRSTrainers);
winonaRS.addEventListener('click', displayRSTrainers);
tatelizaRS.addEventListener('click', displayRSTrainers);
wallaceRS.addEventListener('click', displayRSTrainers);
wallyRS.addEventListener('click', displayRSTrainers);
sidneyRS.addEventListener('click', displayRSTrainers);
phoebeRS.addEventListener('click', displayRSTrainers);
glaciaRS.addEventListener('click', displayRSTrainers);
drakeRS.addEventListener('click', displayRSTrainers);
stevenRS.addEventListener('click', displayRSTrainers);