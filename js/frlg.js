let brockFRLG = document.querySelector ("#brock4");
let mistyFRLG = document.querySelector ("#misty4");
let ltsurgeFRLG = document.querySelector ("#ltsurge4");
let erikaFRLG = document.querySelector ("#erika4");
let kogaFRLG = document.querySelector ("#koga4");
let sabrinaFRLG = document.querySelector ("#sabrina4");
let blaineFRLG = document.querySelector ("#blaine4");
let giovanniFRLG = document.querySelector ("#giovanni3");
let loreleiFRLG = document.querySelector ("#lorelei3");
let brunoFRLG = document.querySelector ("#bruno4");
let agathaFRLG = document.querySelector ("#agatha3");
let lanceFRLG = document.querySelector ("#lance4");
let bluegFRLG = document.querySelector ("#blue4_g");
let bluefFRLG = document.querySelector ("#blue4_f");
let bluewFRLG = document.querySelector ("#blue4_w");

let frlg_trainers = [
    {
        namea : "Geodude",
        levela : "LV: 12",
        typea : "Type: Rock/Ground",
        abilitya: "Ability: Rock Head",
        itema : "Item: None",
        hpa : "HP: 31",
        atka : "Atk: 24",
        defa : "Def: 29",
        spatka : "Sp. Atk: 10",
        spdefa : "Sp. Def: 12",
        spda : "Spd: 9",
        move1a : "-Tackle",
        move2a : "-Defense Curl",
        move3a : "",
        move4a : "",

        nameb : "Onix",
        levelb : "LV: 14",
        typeb : "Type: Rock/Ground",
        abilityb: "Ability: Rock Head",
        itemb : "Item: None",
        hpb : "HP: 33",
        atkb : "Atk: 17",
        defb : "Def: 49",
        spatkb : "Sp. Atk: 11",
        spdefb : "Sp. Def: 18",
        spdb : "Spd: 24",
        move1b : "-Tackle",
        move2b : "-Bind",
        move3b : "-Rock Tomb",
        move4b : "",
    },

    {
        namea : "Staryu",
        levela : "LV: 18",
        typea : "Type: Water",
        abilitya: "Ability: Natural Cure",
        itema : "Item: None",
        hpa : "HP: 38",
        atka : "Atk: 21",
        defa : "Def: 21",
        spatka : "Sp. Atk: 30",
        spdefa : "Sp. Def: 24",
        spda : "Spd: 38",
        move1a : "-Tackle",
        move2a : "-Harden",
        move3a : "-Recover",
        move4a : "-Water Pulse",

        nameb : "Starmie",
        levelb : "LV: 21",
        typeb : "Type: Water/Psychic",
        abilityb: "Ability: Natural Cure",
        itemb : "Item: None",
        hpb : "HP: 56",
        atkb : "Atk: 39",
        defb : "Def: 40",
        spatkb : "Sp. Atk: 47",
        spdefb : "Sp. Def: 36",
        spdb : "Spd: 53",
        move1b : "-Rapid Spin",
        move2b : "-Swift",
        move3b : "-Recover",
        move4b : "-Water Pulse",
    },

    {
        namea : "Voltorb",
        levela : "LV: 21",
        typea : "Type: Electric",
        abilitya: "Ability: Soundproof",
        itema : "Item: None",
        hpa : "HP: 47",
        atka : "Atk: 27",
        defa : "Def: 28",
        spatka : "Sp. Atk: 28",
        spdefa : "Sp. Def: 25",
        spda : "Spd: 47",
        move1a : "-Shock Wave",
        move2a : "-Tackle",
        move3a : "-Screech",
        move4a : "-Sonic Boom",

        nameb : "Pikachu",
        levelb : "LV: 18",
        typeb : "Type: Electric",
        abilityb: "Ability: Static",
        itemb : "Item: None",
        hpb : "HP: 40",
        atkb : "Atk: 24",
        defb : "Def: 15",
        spatkb : "Sp. Atk: 23",
        spdefb : "Sp. Def: 20",
        spdb : "Spd: 33",
        move1b : "-Shock Wave",
        move2b : "-Thunder Wave",
        move3b : "-Quick Attack",
        move4b : "-Double Team",

        namec : "Raichu",
        levelc : "LV: 24",
        typec : "Type: Electric",
        abilityc: "Ability: Static",
        itemc : "Item: None",
        hpc : "HP: 62",
        atkc : "Atk: 43",
        defc : "Def: 31",
        spatkc : "Sp. Atk: 52",
        spdefc : "Sp. Def: 43",
        spdc : "Spd: 53",
        move1c : "-Shock Wave",
        move2c : "-Thunder Wave",
        move3c : "-Quick Attack",
        move4c : "-Double Team",
    },

    {
        namea : "Victreebel",
        levela : "LV: 29",
        typea : "Type: Grass/Poison",
        abilitya: "Ability: Chlorophyll",
        itema : "Item: None",
        hpa : "HP: 85",
        atka : "Atk: 58",
        defa : "Def: 46",
        spatka : "Sp. Atk: 63",
        spdefa : "Sp. Def: 39",
        spda : "Spd: 45",
        move1a : "-Stun Spore",
        move2a : "-Acid",
        move3a : "-Poison Powder",
        move4a : "-Giga Drain",

        nameb : "Tangela",
        levelb : "LV: 24",
        typeb : "Type: Grass",
        abilityb: "Ability: Chlorophyll",
        itemb : "Item: None",
        hpb : "HP: 65",
        atkb : "Atk: 31",
        defb : "Def: 54",
        spatkb : "Sp. Atk: 53",
        spdefb : "Sp. Def: 26",
        spdb : "Spd: 33",
        move1b : "-Poison Powder",
        move2b : "-Constrict",
        move3b : "-Ingrain",
        move4b : "-Giga Drain",

        namec : "Vileplume",
        levelc : "LV: 29",
        typec : "Type: Grass/Poison",
        abilityc: "Ability: Chlorophyll",
        itemc : "Item: None",
        hpc : "HP: 82",
        atkc : "Atk: 51",
        defc : "Def: 54",
        spatkc : "Sp. Atk: 63",
        spdefc : "Sp. Def: 57",
        spdc : "Spd: 34",
        move1c : "-Sleep Powder",
        move2c : "-Acid",
        move3c : "-Stun Spore",
        move4c : "-Giga Drain",
    },

    {
        namea : "Koffing",
        levela : "LV: 37",
        typea : "Type: Poison",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: 76",
        atka : "Atk: 53",
        defa : "Def: 75",
        spatka : "Sp. Atk: 49",
        spdefa : "Sp. Def: 38",
        spda : "Spd: 30",
        move1a : "-Self-Destruct",
        move2a : "-Sludge",
        move3a : "-Smokescreen",
        move4a : "-Toxic",

        nameb : "Muk",
        levelb : "LV: 39",
        typeb : "Type: Poison",
        abilityb: "Ability: Sticky Hold",
        itemb : "Item: None",
        hpb : "HP: 130",
        atkb : "Atk: 77",
        defb : "Def: 63",
        spatkb : "Sp. Atk: 55",
        spdefb : "Sp. Def: 83",
        spdb : "Spd: 48",
        move1b : "-Minimize",
        move2b : "-Sludge",
        move3b : "-Acid Armor",
        move4b : "-Toxic",

        namec : "Koffing",
        levelc : "LV: 37",
        typec : "Type: Poison",
        abilityc: "Ability: Levitate",
        itemc : "Item: None",
        hpc : "HP: 76",
        atkc : "Atk: 53",
        defc : "Def: 75",
        spatkc : "Sp. Atk: 44",
        spdefc : "Sp. Def: 41",
        spdc : "Spd: 30",
        move1c : "-Self-Destruct",
        move2c : "-Sludge",
        move3c : "-Smokescreen",
        move4c : "-Toxic",

        named : "Weezing",
        leveld : "LV: 43",
        typed : "Type: Poison",
        abilityd: "Ability: Levitate",
        itemd : "Item: None",
        hpd : "HP: 108",
        atkd : "Atk: 82",
        defd : "Def: 108",
        spatkd : "Sp. Atk: 78",
        spdefd : "Sp. Def: 65",
        spdd : "Spd: 56",
        move1d : "-Tackle",
        move2d : "-Sludge",
        move3d : "-Smokescreen",
        move4d : "-Toxic",
    },

    {
        namea : "Kadabra",
        levela : "LV: 38",
        typea : "Type: Psychic",
        abilitya: "Ability: Synchronize",
        itema : "Item: None",
        hpa : "HP: 78",
        atka : "Atk: 31",
        defa : "Def: 27",
        spatka : "Sp. Atk: 96",
        spdefa : "Sp. Def: 58",
        spda : "Spd: 96",
        move1a : "-Psybeam",
        move2a : "-Reflect",
        move3a : "-Future Sight",
        move4a : "-Calm Mind",

        nameb : "Mr. Mime",
        levelb : "LV: 37",
        typeb : "Type: Psychic",
        abilityb: "Ability: Soundproof",
        itemb : "Item: None",
        hpb : "HP: 76",
        atkb : "Atk: 38",
        defb : "Def: 53",
        spatkb : "Sp. Atk: 79",
        spdefb : "Sp. Def: 93",
        spdb : "Spd: 71",
        move1b : "-Barrier",
        move2b : "-Psybeam",
        move3b : "-Baton Pass",
        move4b : "-Calm Mind",

        namec : "Venomoth",
        levelc : "LV: 38",
        typec : "Type: Bug/Poison",
        abilityc: "Ability: Shield Dust",
        itemc : "Item: None",
        hpc : "HP: 101",
        atkc : "Atk: 54",
        defc : "Def: 55",
        spatkc : "Sp. Atk: 65",
        spdefc : "Sp. Def: 62",
        spdc : "Spd: 73",
        move1c : "-Psybeam",
        move2c : "-Gust",
        move3c : "-Leech Life",
        move4c : "-Supersonic",

        named : "Alakazam",
        leveld : "LV: 43",
        typed : "Type: Psychic",
        abilityd: "Ability: Synchronize",
        itemd : "Item: None",
        hpd : "HP: 100",
        atkd : "Atk: 52",
        defd : "Def: 43",
        spatkd : "Sp. Atk: 108",
        spdefd : "Sp. Def: 78",
        spdd : "Spd: 108",
        move1d : "-Psychic",
        move2d : "-Recover",
        move3d : "-Future Sight",
        move4d : "-Calm Mind",
    },

    {
        namea : "Growlithe",
        levela : "LV: 42",
        typea : "Type: Fire",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 98",
        atka : "Atk: 63",
        defa : "Def: 37",
        spatka : "Sp. Atk: 63",
        spdefa : "Sp. Def: 47",
        spda : "Spd: 60",
        move1a : "-Bite",
        move2a : "-Roar",
        move3a : "-Take Down",
        move4a : "-Fire Blast",

        nameb : "Ponyta",
        levelb : "LV: 40",
        typeb : "Type: Fire",
        abilityb: "Ability: Flash Fire",
        itemb : "Item: None",
        hpb : "HP: 90",
        atkb : "Atk: 73",
        defb : "Def: 53",
        spatkb : "Sp. Atk: 57",
        spdefb : "Sp. Def: 57",
        spdb : "Spd: 69",
        move1b : "-Stomp",
        move2b : "-Bounce",
        move3b : "-Fire Spin",
        move4b : "-Fire Blast",

        namec : "Rapidash",
        levelc : "LV: 42",
        typec : "Type: Fire",
        abilityc: "Ability: Flash Fire",
        itemc : "Item: None",
        hpc : "HP: 106",
        atkc : "Atk: 80",
        defc : "Def: 63",
        spatkc : "Sp. Atk: 72",
        spdefc : "Sp. Def: 79",
        spdc : "Spd: 93",
        move1c : "-Stomp",
        move2c : "-Bounce",
        move3c : "-Fire Spin",
        move4c : "-Fire Blast",

        named : "Arcanine",
        leveld : "LV: 47",
        typed : "Type: Fire",
        abilityd: "Ability: Intimidate",
        itemd : "Item: None",
        hpd : "HP: 141",
        atkd : "Atk: 108",
        defd : "Def: 80",
        spatkd : "Sp. Atk: 108",
        spdefd : "Sp. Def: 80",
        spdd : "Spd: 84",
        move1d : "-Bite",
        move2d : "-Roar",
        move3d : "-Take Down",
        move4d : "-Fire Blast",
    },

    {
        namea : "Rhyhorn",
        levela : "LV: 45",
        typea : "Type: Ground/Rock",
        abilitya: "Ability: Lightning Rod",
        itema : "Item: None",
        hpa : "HP: 127",
        atka : "Atk: 81",
        defa : "Def: 99",
        spatka : "Sp. Atk: 28",
        spdefa : "Sp. Def: 32",
        spda : "Spd: 27",
        move1a : "-Take Down",
        move2a : "-Rock Blast",
        move3a : "-Scary Face",
        move4a : "-Earthquake",

        nameb : "Dugtrio",
        levelb : "LV: 42",
        typeb : "Type: Ground",
        abilityb: "Ability: Sand Veil",
        itemb : "Item: None",
        hpb : "HP: 81",
        atkb : "Atk: 72",
        defb : "Def: 51",
        spatkb : "Sp. Atk: 42",
        spdefb : "Sp. Def: 63",
        spdb : "Spd: 105",
        move1b : "-Slash",
        move2b : "-Sand Tomb",
        move3b : "-Mud-Slap",
        move4b : "-Earthquake",

        namec : "Nidoqueen",
        levelc : "LV: 44",
        typec : "Type: Poison/Ground",
        abilityc: "Ability: Poison Point",
        itemc : "Item: None",
        hpc : "HP: 133",
        atkc : "Atk: 77",
        defc : "Def: 81",
        spatkc : "Sp. Atk: 71",
        spdefc : "Sp. Def: 79",
        spdc : "Spd: 71",
        move1c : "-Double Kick",
        move2c : "-Earthquake",
        move3c : "-Body Slam",
        move4c : "-Poison Sting",

        named : "Nidoking",
        leveld : "LV: 45",
        typed : "Type: Poison/Ground",
        abilityd: "Ability: Poison Point",
        itemd : "Item: None",
        hpd : "HP: 127",
        atkd : "Atk: 87",
        defd : "Def: 74",
        spatkd : "Sp. Atk: 81",
        spdefd : "Sp. Def: 72",
        spdd : "Spd: 81",
        move1d : "-Double Kick",
        move2d : "-Earthquake",
        move3d : "-Thrash",
        move4d : "-Poison Sting",

        namee : "Rhyhorn",
        levele : "LV: 50",
        typee : "Type: Ground/Rock",
        abilitye: "Ability: Lightning Rod",
        iteme : "Item: None",
        hpe : "HP: 140",
        atke : "Atk: 90",
        defe : "Def: 100",
        spatke : "Sp. Atk: 35",
        spdefe : "Sp. Def: 38",
        spde : "Spd: 27",
        move1e : "-Take Down",
        move2e : "-Rock Blast",
        move3e : "-Scary Face",
        move4e : "-Earthquake",
    },

    {
        namea : "Dewgong",
        levela : "LV: 52",
        typea : "Type: Water Ice",
        abilitya: "Ability: Thick Fat",
        itema : "Item: None",
        hpa : "HP: 171",
        atka : "Atk: 93",
        defa : "Def: 103",
        spatka : "Sp. Atk: 93",
        spdefa : "Sp. Def: 119",
        spda : "Spd: 93",
        move1a : "-Surf",
        move2a : "-Ice Beam",
        move3a : "-Hail",
        move4a : "-Safeguard",

        nameb : "Cloyster",
        levelb : "LV: 51",
        typeb : "Type: Water/Ice",
        abilityb: "Ability: Shell Armor",
        itemb : "Item: None",
        hpb : "HP: 127",
        atkb : "Atk: 117",
        defb : "Def: 203",
        spatkb : "Sp. Atk: 96",
        spdefb : "Sp. Def: 72",
        spdb : "Spd: 91",
        move1b : "-Spikes",
        move2b : "-Dive",
        move3b : "-Hail",
        move4b : "-Protect",

        namec : "Slowbro",
        levelc : "LV: 52",
        typec : "Type: Water/Psychic",
        abilityc: "Ability: Oblivious",
        itemc : "Item: None",
        hpc : "HP: 176",
        atkc : "Atk: 107",
        defc : "Def: 135",
        spatkc : "Sp. Atk: 125",
        spdefc : "Sp. Def: 103",
        spdc : "Spd: 45",
        move1c : "-Ice Beam",
        move2c : "-Surf",
        move3c : "-Amnesia",
        move4c : "-Yawn",

        named : "Jynx",
        leveld : "LV: 54",
        typed : "Type: Ice/Psychic",
        abilityd: "Ability: Oblivious",
        itemd : "Item: None",
        hpd : "HP: 150",
        atkd : "Atk: 75",
        defd : "Def: 59",
        spatkd : "Sp. Atk: 145",
        spdefd : "Sp. Def: 135",
        spdd : "Spd: 110",
        move1d : "-Double Slap",
        move2d : "-Ice Punch",
        move3d : "-Lovely Kiss",
        move4d : "-Attract",

        namee : "Lapras",
        levele : "LV: 54",
        typee : "Type: Water/Ice",
        abilitye: "Ability: Water Absorb",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 220",
        atke : "Atk: 113",
        defe : "Def: 107",
        spatke : "Sp. Atk: 101",
        spdefe : "Sp. Def: 123",
        spde : "Spd: 94",
        move1e : "-Body Slam",
        move2e : "-Confuse Ray",
        move3e : "-Surf",
        move4e : "-Ice Beam",
    },

    {
        namea : "Onix",
        levela : "LV: 51",
        typea : "Type: Rock/Ground",
        abilitya: "Ability: Rock Head",
        itema : "Item: None",
        hpa : "HP: 112",
        atka : "Atk: 66",
        defa : "Def: 183",
        spatka : "Sp. Atk: 50",
        spdefa : "Sp. Def: 72",
        spda : "Spd: 81",
        move1a : "-Earthquake",
        move2a : "-Iron Tail",
        move3a : "-Rock Tomb",
        move4a : "-Roar",

        nameb : "Hitmonchan",
        levelb : "LV: 53",
        typeb : "Type: Fightning",
        abilityb: "Ability: Keen Eye",
        itemb : "Item: None",
        hpb : "HP: 131",
        atkb : "Atk: 132",
        defb : "Def: 104",
        spatkb : "Sp. Atk: 59",
        spdefb : "Sp. Def: 137",
        spdb : "Spd: 101",
        move1b : "-Sky Uppercut",
        move2b : "-Mach Punch",
        move3b : "-Rock Tomb",
        move4b : "-Counter",

        namec : "Hitmonlee",
        levelc : "LV: 53",
        typec : "Type: Fightning",
        abilityc: "Ability: Limber",
        itemc : "Item: None",
        hpc : "HP: 131",
        atkc : "Atk: 148",
        defc : "Def: 77",
        spatkc : "Sp. Atk: 58",
        spdefc : "Sp. Def: 137",
        spdc : "Spd: 113",
        move1c : "-Mega Kick",
        move2c : "-Foresight",
        move3c : "-Brick Break",
        move4c : "-Facade",

        named : "Onix",
        leveld : "LV: 54",
        typed : "Type: Rock/Ground",
        abilityd: "Ability: Rock Head",
        itemd : "Item: None",
        hpd : "HP: 118",
        atkd : "Atk: 69",
        defd : "Def: 194",
        spatkd : "Sp. Atk: 47",
        spdefd : "Sp. Def: 75",
        spdd : "Spd: 96",
        move1d : "-Earthquake",
        move2d : "-Iron Tail",
        move3d : "-Sand Tomb",
        move4d : "-Double-Edge",

        namee : "Machamp",
        levele : "LV: 56",
        typee : "Type: Fighting",
        abilitye: "Ability: Guts",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 183",
        atke : "Atk: 150",
        defe : "Def: 119",
        spatke : "Sp. Atk: 103",
        spdefe : "Sp. Def: 117",
        spde : "Spd: 83",
        move1e : "-Bulk Up",
        move2e : "-Cross Chop",
        move3e : "-Scary Face",
        move4e : "-Rock Tomb",
    },

    {
        namea : "Gengar",
        levela : "LV: 54",
        typea : "Type: Ghost/Poison",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: 145",
        atka : "Atk: 100",
        defa : "Def: 86",
        spatka : "Sp. Atk: 161",
        spdefa : "Sp. Def: 102",
        spda : "Spd: 126",
        move1a : "-Confuse Ray",
        move2a : "-Shadow Punch",
        move3a : "-Double Team",
        move4a : "-Toxic",

        nameb : "Golbat",
        levelb : "LV: 54",
        typeb : "Type: Poison/Flying",
        abilityb: "Ability: Inner Focus",
        itemb : "Item: None",
        hpb : "HP: 161",
        atkb : "Atk: 107",
        defb : "Def: 96",
        spatkb : "Sp. Atk: 91",
        spdefb : "Sp. Def: 91",
        spdb : "Spd: 129",
        move1b : "-Confuse Ray",
        move2b : "-Bite",
        move3b : "-Air Cutter",
        move4b : "-Poison Fang",

        namec : "Haunter",
        levelc : "LV: 53",
        typec : "Type: Ghost/Poison",
        abilityc: "Ability: Levitate",
        itemc : "Item: None",
        hpc : "HP: 126",
        atkc : "Atk: 73",
        defc : "Def: 68",
        spatkc : "Sp. Atk: 142",
        spdefc : "Sp. Def: 86",
        spdc : "Spd: 108",
        move1c : "-Hypnosis",
        move2c : "-Dream Eater",
        move3c : "-Curse",
        move4c : "-Mean Look",

        named : "Arbok",
        leveld : "LV: 56",
        typed : "Type: Poison",
        abilityd: "Ability: Intimidate",
        itemd : "Item: None",
        hpd : "HP: 150",
        atkd : "Atk: 117",
        defd : "Def: 108",
        spatkd : "Sp. Atk: 84",
        spdefd : "Sp. Def: 110",
        spdd : "Spd: 111",
        move1d : "-Bite",
        move2d : "-Sludge Bomb",
        move3d : "-Screech",
        move4d : "-Iron Tail",

        namee : "Gengar",
        levele : "LV: 58",
        typee : "Type: Ghost/Poison",
        abilitye: "Ability: Levitate",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 155",
        atke : "Atk: 87",
        defe : "Def: 92",
        spatke : "Sp. Atk: 190",
        spdefe : "Sp. Def: 109",
        spde : "Spd: 150",
        move1e : "-Hypnosis",
        move2e : "-Sludge Bomb",
        move3e : "-Shadow Ball",
        move4e : "-Nightmare",
    },

    {
        namea : "Gyarados",
        levela : "LV: 56",
        typea : "Type: Water/Flying",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 189",
        atka : "Atk: 161",
        defa : "Def: 110",
        spatka : "Sp. Atk: 97",
        spdefa : "Sp. Def: 119",
        spda : "Spd: 112",
        move1a : "-Bite",
        move2a : "-Dragon Rage",
        move3a : "-Twister",
        move4a : "-Hyper Beam",

        nameb : "Dragonair",
        levelb : "LV: 54",
        typeb : "Type: Dragon",
        abilityb: "Ability: Shed Skin",
        itemb : "Item: None",
        hpb : "HP: 146",
        atkb : "Atk: 111",
        defb : "Def: 91",
        spatkb : "Sp. Atk: 96",
        spdefb : "Sp. Def: 96",
        spdb : "Spd: 96",
        move1b : "-Safeguard",
        move2b : "-Outrage",
        move3b : "-Dragon Rage",
        move4b : "-Hyper Beam",

        namec : "Dragonair",
        levelc : "LV: 54",
        typec : "Type: Dragon",
        abilityc: "Ability: Shed Skin",
        itemc : "Item: None",
        hpc : "HP: 146",
        atkc : "Atk: 111",
        defc : "Def: 91",
        spatkc : "Sp. Atk: 96",
        spdefc : "Sp. Def: 96",
        spdc : "Spd: 96",
        move1c : "-Safeguard",
        move2c : "-Outrage",
        move3c : "-Thunder Wave",
        move4c : "-Hyper Beam",

        named : "Aerodactyl",
        leveld : "LV: 58",
        typed : "Type: Rock/Flying",
        abilityd: "Ability: Rock Head",
        itemd : "Item: None",
        hpd : "HP: 178",
        atkd : "Atk: 129",
        defd : "Def: 106",
        spatkd : "Sp. Atk: 92",
        spdefd : "Sp. Def: 109",
        spdd : "Spd: 173",
        move1d : "-Ancient Power",
        move2d : "-Scary Face",
        move3d : "-Wing Attack",
        move4d : "-Hyper Beam",

        namee : "Dragonite",
        levele : "LV: 60",
        typee : "Type: Dragon/Flying",
        abilitye: "Ability: Inner Focus",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 197",
        atke : "Atk: 183",
        defe : "Def: 137",
        spatke : "Sp. Atk: 143",
        spdefe : "Sp. Def: 157",
        spde : "Spd: 107",
        move1e : "-Safeguard",
        move2e : "-Outrage",
        move3e : "-Wing Attack",
        move4e : "-Hyper Beam",
    },

    {
        namea : "Pidgeot",
        levela : "LV: 59",
        typea : "Type: Normal/Flying",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 185",
        atka : "Atk: 117",
        defa : "Def: 111",
        spatka : "Sp. Atk: 105",
        spdefa : "Sp. Def: 105",
        spda : "Spd: 130",
        move1a : "-Aerial Ace",
        move2a : "-Feather Dance",
        move3a : "-Sand Attack",
        move4a : "-Whirlwind",

        nameb : "Alakazam",
        levelb : "LV: 57",
        typeb : "Type: Psychic",
        abilityb: "Ability: Synchronize",
        itemb : "Item: None",
        hpb : "HP: 147",
        atkb : "Atk: 71",
        defb : "Def: 73",
        spatkb : "Sp. Atk: 176",
        spdefb : "Sp. Def: 130",
        spdb : "Spd: 159",
        move1b : "-Psychic",
        move2b : "-Future Sight",
        move3b : "-Recover",
        move4b : "-Reflect",

        namec : "Rhydon",
        levelc : "LV: 57",
        typec : "Type: Ground/Rock",
        abilityc: "Ability: Lightning Rod",
        itemc : "Item: None",
        hpc : "HP: 211",
        atkc : "Atk: 176",
        defc : "Def: 147",
        spatkc : "Sp. Atk: 83",
        spdefc : "Sp. Def: 76",
        spdc : "Spd: 70",
        move1c : "-Take Down",
        move2c : "-Earthquake",
        move3c : "-Rock Tomb",
        move4c : "-Scary Face",

        named : "Gyarados",
        leveld : "LV: 59",
        typed : "Type: Water/Flying",
        abilityd: "Ability: Intimidate",
        itemd : "Item: None",
        hpd : "HP: 199",
        atkd : "Atk: 153",
        defd : "Def: 127",
        spatkd : "Sp. Atk: 94",
        spdefd : "Sp. Def: 141",
        spdd : "Spd: 118",
        move1d : "-Hydro Pump",
        move2d : "-Dragon Rage",
        move3d : "-Thrash",
        move4d : "-Bite",

        namee : "Arcanine",
        levele : "LV: 61",
        typee : "Type: Fire",
        abilitye: "Ability: Intimidate",
        iteme : "Item: None",
        hpe : "HP: 199",
        atke : "Atk: 158",
        defe : "Def: 121",
        spatke : "Sp. Atk: 159",
        spdefe : "Sp. Def: 108",
        spde : "Spd: 139",
        move1e : "-Extreme Speed",
        move2e : "-Flamethrower",
        move3e : "-Roar",
        move4e : "-Bite",

        namef : "Venusaur",
        levelf : "LV: 63",
        typef : "Type: Grass/Poison",
        abilityf: "Ability: Overgrow",
        itemf : "Item: Sitrus Berry",
        hpf : "HP: 193",
        atkf : "Atk: 127",
        deff : "Def: 129",
        spatkf : "Sp. Atk: 165",
        spdeff : "Sp. Def: 135",
        spdf : "Spd: 125",
        move1f : "-Solar Beam",
        move2f : "-Synthesis",
        move3f : "-Sunny Day",
        move4f : "-Growth",
    },

    {
        namea : "Pidgeot",
        levela : "LV: 59",
        typea : "Type: Normal/Flying",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 185",
        atka : "Atk: 117",
        defa : "Def: 111",
        spatka : "Sp. Atk: 105",
        spdefa : "Sp. Def: 105",
        spda : "Spd: 130",
        move1a : "-Aerial Ace",
        move2a : "-Feather Dance",
        move3a : "-Sand Attack",
        move4a : "-Whirlwind",

        nameb : "Alakazam",
        levelb : "LV: 57",
        typeb : "Type: Psychic",
        abilityb: "Ability: Synchronize",
        itemb : "Item: None",
        hpb : "HP: 147",
        atkb : "Atk: 71",
        defb : "Def: 73",
        spatkb : "Sp. Atk: 176",
        spdefb : "Sp. Def: 130",
        spdb : "Spd: 159",
        move1b : "-Psychic",
        move2b : "-Future Sight",
        move3b : "-Recover",
        move4b : "-Reflect",

        namec : "Rhydon",
        levelc : "LV: 57",
        typec : "Type: Ground/Rock",
        abilityc: "Ability: Lightning Rod",
        itemc : "Item: None",
        hpc : "HP: 211",
        atkc : "Atk: 176",
        defc : "Def: 147",
        spatkc : "Sp. Atk: 83",
        spdefc : "Sp. Def: 76",
        spdc : "Spd: 70",
        move1c : "-Take Down",
        move2c : "-Earthquake",
        move3c : "-Rock Tomb",
        move4c : "-Scary Face",

        named : "Exeggutor",
        leveld : "LV: 59",
        typed : "Type: Grass/Psychic",
        abilityd: "Ability: Chlorophyll",
        itemd : "Item: None",
        hpd : "HP: 199",
        atkd : "Atk: 135",
        defd : "Def: 123",
        spatkd : "Sp. Atk: 153",
        spdefd : "Sp. Def: 99",
        spdd : "Spd: 96",
        move1d : "-Giga Drain",
        move2d : "-Egg Bomb",
        move3d : "-Sleep Powder",
        move4d : "-Light Screen",

        namee : "Gyarados",
        levele : "LV: 61",
        typee : "Type: Water/Flying",
        abilitye: "Ability: Intimidate",
        iteme : "Item: None",
        hpe : "HP: 205",
        atke : "Atk: 193",
        defe : "Def: 120",
        spatke : "Sp. Atk: 97",
        spdefe : "Sp. Def: 145",
        spde : "Spd: 109",
        move1e : "-Hydro Pump",
        move2e : "-Dragon Rage",
        move3e : "-Thrash",
        move4e : "-Bite",

        namef : "Charizard",
        levelf : "LV: 63",
        typef : "Type: Fire/Flying",
        abilityf: "Ability: Blaze",
        itemf : "Item: Sitrus Berry",
        hpf : "HP: 190",
        atkf : "Atk: 117",
        deff : "Def: 122",
        spatkf : "Sp. Atk: 161",
        spdeff : "Sp. Def: 144",
        spdf : "Spd: 150",
        move1f : "-Fire Blast",
        move2f : "-Aerial Ace",
        move3f : "-Slash",
        move4f : "-Fire Spin",
    },

    {
        namea : "Pidgeot",
        levela : "LV: 59",
        typea : "Type: Normal/Flying",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 185",
        atka : "Atk: 117",
        defa : "Def: 111",
        spatka : "Sp. Atk: 105",
        spdefa : "Sp. Def: 105",
        spda : "Spd: 130",
        move1a : "-Aerial Ace",
        move2a : "-Feather Dance",
        move3a : "-Sand Attack",
        move4a : "-Whirlwind",

        nameb : "Alakazam",
        levelb : "LV: 57",
        typeb : "Type: Psychic",
        abilityb: "Ability: Synchronize",
        itemb : "Item: None",
        hpb : "HP: 147",
        atkb : "Atk: 71",
        defb : "Def: 73",
        spatkb : "Sp. Atk: 176",
        spdefb : "Sp. Def: 130",
        spdb : "Spd: 159",
        move1b : "-Psychic",
        move2b : "-Future Sight",
        move3b : "-Recover",
        move4b : "-Reflect",

        namec : "Rhydon",
        levelc : "LV: 57",
        typec : "Type: Ground/Rock",
        abilityc: "Ability: Lightning Rod",
        itemc : "Item: None",
        hpc : "HP: 211",
        atkc : "Atk: 176",
        defc : "Def: 147",
        spatkc : "Sp. Atk: 83",
        spdefc : "Sp. Def: 76",
        spdc : "Spd: 70",
        move1c : "-Take Down",
        move2c : "-Earthquake",
        move3c : "-Rock Tomb",
        move4c : "-Scary Face",

        named : "Arcanine",
        leveld : "LV: 59",
        typed : "Type: Fire",
        abilityd: "Ability: Intimidate",
        itemd : "Item: None",
        hpd : "HP: 193",
        atkd : "Atk: 137",
        defd : "Def: 128",
        spatkd : "Sp. Atk: 141",
        spdefd : "Sp. Def: 117",
        spdd : "Spd: 135",
        move1d : "-Extreme Speed",
        move2d : "-Flamethrower",
        move3d : "-Roar",
        move4d : "-Bite",

        namee : "Exeggutor",
        levele : "LV: 61",
        typee : "Type: Grass/Psychic",
        abilitye: "Ability: Chlorophyll",
        iteme : "Item: None",
        hpe : "HP: 205",
        atke : "Atk: 152",
        defe : "Def: 127",
        spatke : "Sp. Atk: 176",
        spdefe : "Sp. Def: 103",
        spde : "Spd: 81",
        move1e : "-Giga Drain",
        move2e : "-Egg Bomb",
        move3e : "-Sleep Powder",
        move4e : "-Light Screen",

        namef : "Blastoise",
        levelf : "LV: 63",
        typef : "Type: Water",
        abilityf: "Ability: Torrent",
        itemf : "Item: Sitrus Berry",
        hpf : "HP: 192",
        atkf : "Atk: 141",
        deff : "Def: 150",
        spatkf : "Sp. Atk: 131",
        spdeff : "Sp. Def: 140",
        spdf : "Spd: 122",
        move1f : "-Hydro Pump",
        move2f : "-Rain Dance",
        move3f : "-Skull Bash",
        move4f : "-Bite",
    },

]

function displayFRLGTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showFRLGImages(newTrainerId);
        showPokemonFRLGImages(newTrainerId);
    }


    let frlgTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = frlg_trainers [frlgTrainer].namea;
    document.querySelector('#level1').textContent = frlg_trainers [frlgTrainer].levela;
    document.querySelector('#type1').textContent = frlg_trainers [frlgTrainer].typea;
    document.querySelector('#ability1').textContent= frlg_trainers [frlgTrainer].abilitya;
    document.querySelector('#item1').textContent = frlg_trainers [frlgTrainer].itema;
    document.querySelector('#hp1').textContent = frlg_trainers [frlgTrainer].hpa;
    document.querySelector('#atk1').textContent = frlg_trainers [frlgTrainer].atka;
    document.querySelector('#def1').textContent = frlg_trainers [frlgTrainer].defa;
    document.querySelector('#spatk1').textContent = frlg_trainers [frlgTrainer].spatka;
    document.querySelector('#spdef1').textContent = frlg_trainers [frlgTrainer].spdefa;
    document.querySelector('#spd1').textContent = frlg_trainers [frlgTrainer].spda;
    document.querySelector('#move1_1').textContent = frlg_trainers [frlgTrainer].move1a;
    document.querySelector('#move2_1').textContent = frlg_trainers [frlgTrainer].move2a;
    document.querySelector('#move3_1').textContent = frlg_trainers [frlgTrainer].move3a;
    document.querySelector('#move4_1').textContent = frlg_trainers [frlgTrainer].move4a;

    
    document.querySelector('#name2').textContent = frlg_trainers [frlgTrainer].nameb;
    document.querySelector('#level2').textContent = frlg_trainers [frlgTrainer].levelb;
    document.querySelector('#type2').textContent = frlg_trainers [frlgTrainer].typeb;
    document.querySelector('#ability2').textContent= frlg_trainers [frlgTrainer].abilityb;
    document.querySelector('#item2').textContent = frlg_trainers [frlgTrainer].itemb;
    document.querySelector('#hp2').textContent = frlg_trainers [frlgTrainer].hpb;
    document.querySelector('#atk2').textContent = frlg_trainers [frlgTrainer].atkb;
    document.querySelector('#def2').textContent = frlg_trainers [frlgTrainer].defb;
    document.querySelector('#spatk2').textContent = frlg_trainers [frlgTrainer].spatkb;
    document.querySelector('#spdef2').textContent = frlg_trainers [frlgTrainer].spdefb;
    document.querySelector('#spd2').textContent = frlg_trainers [frlgTrainer].spdb;
    document.querySelector('#move1_2').textContent = frlg_trainers [frlgTrainer].move1b;
    document.querySelector('#move2_2').textContent = frlg_trainers [frlgTrainer].move2b;
    document.querySelector('#move3_2').textContent = frlg_trainers [frlgTrainer].move3b;
    document.querySelector('#move4_2').textContent = frlg_trainers [frlgTrainer].move4b;

    document.querySelector('#name3').textContent = frlg_trainers [frlgTrainer].namec;
    document.querySelector('#level3').textContent = frlg_trainers [frlgTrainer].levelc;
    document.querySelector('#type3').textContent = frlg_trainers [frlgTrainer].typec;
    document.querySelector('#ability3').textContent= frlg_trainers [frlgTrainer].abilityc;
    document.querySelector('#item3').textContent = frlg_trainers [frlgTrainer].itemc;
    document.querySelector('#hp3').textContent = frlg_trainers [frlgTrainer].hpc;
    document.querySelector('#atk3').textContent = frlg_trainers [frlgTrainer].atkc;
    document.querySelector('#def3').textContent = frlg_trainers [frlgTrainer].defc;
    document.querySelector('#spatk3').textContent = frlg_trainers [frlgTrainer].spatkc;
    document.querySelector('#spdef3').textContent = frlg_trainers [frlgTrainer].spdefc;
    document.querySelector('#spd3').textContent = frlg_trainers [frlgTrainer].spdc;
    document.querySelector('#move1_3').textContent = frlg_trainers [frlgTrainer].move1c;
    document.querySelector('#move2_3').textContent = frlg_trainers [frlgTrainer].move2c;
    document.querySelector('#move3_3').textContent = frlg_trainers [frlgTrainer].move3c;
    document.querySelector('#move4_3').textContent = frlg_trainers [frlgTrainer].move4c;

    document.querySelector('#name4').textContent = frlg_trainers [frlgTrainer].named;
    document.querySelector('#level4').textContent = frlg_trainers [frlgTrainer].leveld;
    document.querySelector('#type4').textContent = frlg_trainers [frlgTrainer].typed;
    document.querySelector('#ability4').textContent= frlg_trainers [frlgTrainer].abilityd;
    document.querySelector('#item4').textContent = frlg_trainers [frlgTrainer].itemd;
    document.querySelector('#hp4').textContent = frlg_trainers [frlgTrainer].hpd;
    document.querySelector('#atk4').textContent = frlg_trainers [frlgTrainer].atkd;
    document.querySelector('#def4').textContent = frlg_trainers [frlgTrainer].defd;
    document.querySelector('#spatk4').textContent = frlg_trainers [frlgTrainer].spatkd;
    document.querySelector('#spdef4').textContent = frlg_trainers [frlgTrainer].spdefd;
    document.querySelector('#spd4').textContent = frlg_trainers [frlgTrainer].spdd;
    document.querySelector('#move1_4').textContent = frlg_trainers [frlgTrainer].move1d;
    document.querySelector('#move2_4').textContent = frlg_trainers [frlgTrainer].move2d;
    document.querySelector('#move3_4').textContent = frlg_trainers [frlgTrainer].move3d;
    document.querySelector('#move4_4').textContent = frlg_trainers [frlgTrainer].move4d;

    document.querySelector('#name5').textContent = frlg_trainers [frlgTrainer].namee;
    document.querySelector('#level5').textContent = frlg_trainers [frlgTrainer].levele;
    document.querySelector('#type5').textContent = frlg_trainers [frlgTrainer].typee;
    document.querySelector('#ability5').textContent= frlg_trainers [frlgTrainer].abilitye;
    document.querySelector('#item5').textContent = frlg_trainers [frlgTrainer].iteme;
    document.querySelector('#hp5').textContent = frlg_trainers [frlgTrainer].hpe;
    document.querySelector('#atk5').textContent = frlg_trainers [frlgTrainer].atke;
    document.querySelector('#def5').textContent = frlg_trainers [frlgTrainer].defe;
    document.querySelector('#spatk5').textContent = frlg_trainers [frlgTrainer].spatke;
    document.querySelector('#spdef5').textContent = frlg_trainers [frlgTrainer].spdefe;
    document.querySelector('#spd5').textContent = frlg_trainers [frlgTrainer].spde;
    document.querySelector('#move1_5').textContent = frlg_trainers [frlgTrainer].move1e;
    document.querySelector('#move2_5').textContent = frlg_trainers [frlgTrainer].move2e;
    document.querySelector('#move3_5').textContent = frlg_trainers [frlgTrainer].move3e;
    document.querySelector('#move4_5').textContent = frlg_trainers [frlgTrainer].move4e;

    document.querySelector('#name6').textContent = frlg_trainers [frlgTrainer].namef;
    document.querySelector('#level6').textContent = frlg_trainers [frlgTrainer].levelf;
    document.querySelector('#type6').textContent = frlg_trainers [frlgTrainer].typef;
    document.querySelector('#ability6').textContent= frlg_trainers [frlgTrainer].abilityf;
    document.querySelector('#item6').textContent = frlg_trainers [frlgTrainer].itemf;
    document.querySelector('#hp6').textContent = frlg_trainers [frlgTrainer].hpf;
    document.querySelector('#atk6').textContent = frlg_trainers [frlgTrainer].atkf;
    document.querySelector('#def6').textContent = frlg_trainers [frlgTrainer].deff;
    document.querySelector('#spatk6').textContent = frlg_trainers [frlgTrainer].spatkf;
    document.querySelector('#spdef6').textContent = frlg_trainers [frlgTrainer].spdeff;
    document.querySelector('#spd6').textContent = frlg_trainers [frlgTrainer].spdf;
    document.querySelector('#move1_6').textContent = frlg_trainers [frlgTrainer].move1f;
    document.querySelector('#move2_6').textContent = frlg_trainers [frlgTrainer].move2f;
    document.querySelector('#move3_6').textContent = frlg_trainers [frlgTrainer].move3f;
    document.querySelector('#move4_6').textContent = frlg_trainers [frlgTrainer].move4f;
}

function showFRLGImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/frlg/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonFRLGImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/frlg/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/frlg/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/frlg/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/frlg/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/frlg/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/frlg/" + trainerId + "_6.png";
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

brockFRLG.addEventListener('click', displayFRLGTrainers);
mistyFRLG.addEventListener('click', displayFRLGTrainers);
ltsurgeFRLG.addEventListener('click', displayFRLGTrainers);
erikaFRLG.addEventListener('click', displayFRLGTrainers);
kogaFRLG.addEventListener('click', displayFRLGTrainers);
sabrinaFRLG.addEventListener('click', displayFRLGTrainers);
blaineFRLG.addEventListener('click', displayFRLGTrainers);
giovanniFRLG.addEventListener('click', displayFRLGTrainers);
loreleiFRLG.addEventListener('click', displayFRLGTrainers);
brunoFRLG.addEventListener('click', displayFRLGTrainers);
agathaFRLG.addEventListener('click', displayFRLGTrainers);
lanceFRLG.addEventListener('click', displayFRLGTrainers);
bluegFRLG.addEventListener('click', displayFRLGTrainers);
bluefFRLG.addEventListener('click', displayFRLGTrainers);
bluewFRLG.addEventListener('click', displayFRLGTrainers);