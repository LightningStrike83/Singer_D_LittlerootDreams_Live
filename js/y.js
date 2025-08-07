let brockY = document.querySelector ("#brock2");
let mistyY = document.querySelector ("#misty2");
let ltsurgeY = document.querySelector ("#ltsurge2");
let erikaY = document.querySelector ("#erika2");
let kogaY = document.querySelector ("#koga2");
let sabrinaY = document.querySelector ("#sabrina2");
let blaineY = document.querySelector ("#blaine2");
let giovanniY = document.querySelector ("#giovanni2");
let loreleiY = document.querySelector ("#lorelei2");
let brunoY = document.querySelector ("#bruno2");
let agathaY = document.querySelector ("#agatha2");
let lanceY = document.querySelector ("#lance2");
let bluevY = document.querySelector ("#blue2_v");
let bluejY = document.querySelector ("#blue2_j");
let bluefY = document.querySelector ("#blue2_f");

let y_trainers = [
    {
        namea : "Geodude",
        levela : "LV: 10",
        typea : "Type: Rock/Ground",
        itema : "Item: None",
        hpa : "HP: 29",
        atka : "Atk: 22",
        defa : "Def: 26",
        spa : "Special: 12",
        spda : "Speed: 10",
        move1a : "-Tackle",

        nameb : "Onix",
        levelb : "LV: 12",
        typeb : "Type: Rock/Ground",
        itemb : "Item: None",
        hpb : "HP: 32",
        atkb : "Atk: 17",
        defb : "Def: 45",
        spb : "Special: 14",
        spdb : "Spd: 23",
        move1b : "-Tackle",
        move2b : "-Screech",
        move3b : "-Bind",
        move4b : "-Bide",
    },

    {
        namea : "Staryu",
        levela : "LV: 18",
        typea : "Type: Water",
        itema : "Item: None",
        hpa : "HP: 41",
        atka : "Atk: 24",
        defa : "Def: 27",
        spa : "Special: 33",
        spda : "Speed: 38",
        move1a : "-Tackle",
        move2a : "-Water Gun",
        move3a : "",
        move4a : "",

        nameb : "Starmie",
        levelb : "LV: 21",
        typeb : "Type: Water/Psychic",
        itemb : "Item: None",
        hpb : "HP: 59",
        atkb : "Atk: 40",
        defb : "Def: 44",
        spb : "Special: 50",
        spdb : "Speed: 56",
        move1b : "-Tackle",
        move2b : "-Water Gun",
        move3b : "-Harden",
        move4b : "-BubbleBeam",
    },

    {
        namea : "Raichu",
        levela : "LV: 28",
        typea : "Type: Electric",
        itema : "Item: None",
        hpa : "HP: 76",
        atka : "Atk: 60",
        defa : "Def: 40",
        spa : "Special: 59",
        spda : "Speed: 65",
        move1a : "-Thunderbolt",
        move2a : "-Mega Punch",
        move3a : "-Mega Kick",
        move4a : "-Growl",
    },

    {
        namea : "Tangela",
        levela : "LV: 30",
        typea : "Type: Grass",
        itema : "Item: None",
        hpa : "HP: 83",
        atka : "Atk: 43",
        defa : "Def: 78",
        spa : "Special: 69",
        spda : "Speed: 45",
        move1a : "-Constrict",
        move2a : "-Bind",
        move3a : "-Mega Drain",
        move4a : "-Vine Whip",

        nameb : "Weepinbell",
        levelb : "LV: 32",
        typeb : "Type: Grass/Poison",
        itemb : "Item: None",
        hpb : "HP: 88",
        atkb : "Atk: 68",
        defb : "Def: 42",
        spb : "Special: 64",
        spdb : "Speed: 45",
        move1b : "-Razor Leaf",
        move2b : "-Sleep Powder",
        move3b : "-Stun Spore",
        move4b : "-Acid",

        namec : "Gloom",
        levelc : "LV: 32",
        typec : "Type: Grass/Poison",
        itemc : "Item: None",
        hpc : "HP: 85",
        atkc : "Atk: 52",
        defc : "Def: 54",
        spc : "Special: 64",
        spdc : "Speed: 35",
        move1c : "-Petal Dance",
        move2c : "-Stun Spore",
        move3c : "-Sleep Powder",
        move4c : "-Acid",
    },

    {
        namea : "Venonat",
        levela : "LV: 44",
        typea : "Type: Bug/Poison",
        itema : "Item: None",
        hpa : "HP: 113",
        atka : "Atk: 61",
        defa : "Def: 56",
        spa : "Special: 47",
        spda : "Speed: 51",
        move1a : "-Toxic",
        move2a : "-Tackle",
        move3a : "-Sleep Powder",
        move4a : "-Psychic",

        nameb : "Venonat",
        levelb : "LV: 46",
        typeb : "Type: Bug/Poison",
        itemb : "Item: None",
        hpb : "HP: 118",
        atkb : "Atk: 63",
        defb : "Def: 58",
        spb : "Special: 49",
        spdb : "Speed: 53",
        move1b : "-Toxic",
        move2b : "-Psybeam",
        move3b : "-Supersonic",
        move4b : "-Psychic",

        namec : "Venonat",
        levelc : "LV: 48",
        typec : "Type: Bug/Poison",
        itemc : "Item: None",
        hpc : "HP: 123",
        atkc : "Atk: 66",
        defc : "Def: 60",
        spc : "Special: 51",
        spdc : "Speed: 55",
        move1c : "-Toxic",
        move2c : "-Double-Edge",
        move3c : "-Sleep Powder",
        move4c : "-Psychic",

        named : "Venomoth",
        leveld : "LV: 50",
        typed : "Type: Bug/Poison",
        itemd : "Item: None",
        hpd : "HP: 115",
        atkd : "Atk: 90",
        defd : "Def: 115",
        spd : "Special: 84",
        spdd : "Speed: 63",
        move1d : "-Leech Life",
        move2d : "-Double Team",
        move3d : "-Psychic",
        move4d : "-Toxic",
    },

    {
        namea : "Abra",
        levela : "LV: 50",
        typea : "Type: Psychic",
        itema : "Item: None",
        hpa : "HP: 93",
        atka : "Atk: 34",
        defa : "Def: 28",
        spa : "Special: 118",
        spda : "Speed: 103",
        move1a : "-Flash",
        move2a : "",
        move3a : "",
        move4a : "",

        nameb : "Kadabra",
        levelb : "LV: 50",
        typeb : "Type: Psychic",
        itemb : "Item: None",
        hpb : "HP: 108",
        atkb : "Atk: 49",
        defb : "Def: 43",
        spb : "Special: 133",
        spdb : "Speed: 118",
        move1b : "-Kinesis",
        move2b : "-Recover",
        move3b : "-Psycic",
        move4b : "-Psywave",

        namec : "Alakazam",
        levelc : "LV: 50",
        typec : "Type: Psychic",
        itemc : "Item: None",
        hpc : "HP: 123",
        atkc : "Atk: 64",
        defc : "Def: 58",
        spc : "Special: 148",
        spdc : "Speed: 133",
        move1c : "-Psywave",
        move2c : "-Recover",
        move3c : "-Psychic",
        move4c : "-Reflect",
    },

    {
        namea : "Ninetales",
        levela : "LV: 48",
        typea : "Type: Fire",
        itema : "Item: None",
        hpa : "HP: 135",
        atka : "Atk: 86",
        defa : "Def: 84",
        spa : "Special: 108",
        spda : "Speed: 108",
        move1a : "-Flamethrower",
        move2a : "-Tail Whip",
        move3a : "-Quick Attack",
        move4a : "-Confuse Ray",
        
        nameb : "Rapidash",
        levelb : "LV: 50",
        typeb : "Type: Fire",
        itemb : "Item: None",
        hpb : "HP: 133",
        atkb : "Atk: 114",
        defb : "Def: 83",
        spb : "Special: 93",
        spdb : "Speed: 118",
        move1b : "-Stomp",
        move2b : "-Growl",
        move3b : "-Fire Spin",
        move4b : "-Take Down",

        namec : "Arcanine",
        levelc : "LV: 54",
        typec : "Type: Fire",
        itemc : "Item: None",
        hpc : "HP: 169",
        atkc : "Atk: 133",
        defc : "Def: 100",
        spc : "Special: 100",
        spdc : "Speed: 116",
        move1c : "-Flamethrower",
        move2c : "-Fire Blast",
        move3c : "-Reflect",
        move4c : "-Take Down",
    },

    {
        namea : "Dugtrio",
        levela : "LV: 50",
        typea : "Type: Ground",
        itema : "Item: None",
        hpa : "HP: 103",
        atka : "Atk: 94",
        defa : "Def: 63",
        spa : "Special: 83",
        spda : "Speed: 133",
        move1a : "-Dig",
        move2a : "-Sand Attack",
        move3a : "-Fissure",
        move4a : "-Earthquake",

        nameb : "Persian",
        levelb : "LV: 53",
        typeb : "Type: Normal",
        itemb : "Item: None",
        hpb : "HP: 140",
        atkb : "Atk: 88",
        defb : "Def: 77",
        spb : "Special: 82",
        spdb : "Speed: 135",
        move1b : "-Screech",
        move2b : "-Double Team",
        move3b : "-Fury Swipes",
        move4b : "-Slash",

        namec : "Nidoqueen",
        levelc : "LV: 53",
        typec : "Type: Poison/Ground",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spc : "Special: ",
        spdc : "Speed: ",
        move1c : "-Earthquake",
        move2c : "-Tail Whip",
        move3c : "-Thunder",
        move4c : "-Double Kick",

        named : "Nidoking",
        leveld : "LV: 55",
        typed : "Type: Poison/Ground",
        itemd : "Item: None",
        hpd : "HP: 162",
        atkd : "Atk: 116",
        defd : "Def: 98",
        spd : "Special: 96",
        spdd : "Speed: 107",
        move1d : "-Earthquake",
        move2d : "-Leer",
        move3d : "-Thunder",
        move4d : "-Double Kick",

        namee : "Rhydon",
        levele : "LV: 55",
        typee : "Type: Ground/Rock",
        iteme : "Item: None",
        hpe : "HP: 189",
        atke : "Atk: 157",
        defe : "Def: 145",
        spe : "Special: 63",
        spde : "Speed: 57",
        move1e : "-Rock Slide",
        move2e : "-Fury Attack",
        move3e : "-Horn Drill",
        move4e : "-Earthquake",
    },

    {
        namea : "Dewgong",
        levela : "LV: 54",
        typea : "Type: Water/Ice",
        itema : "Item: None",
        hpa : "HP: 169",
        atka : "Atk: 90",
        defa : "Def: 100",
        spa : "Special: 116",
        spda : "Speed: 89",
        move1a : "-BubbleBeam",
        move2a : "-Aurora Beam",
        move3a : "-Rest",
        move4a : "-Take Down",

        nameb : "Cloyster",
        levelb : "LV: 53",
        typeb : "Type: Water/Ice",
        itemb : "Item: None",
        hpb : "HP: 124",
        atkb : "Atk: 115",
        defb : "Def: 204",
        spb : "Special: 103",
        spdb : "Speed: 87",
        move1b : "-Supersonic",
        move2b : "-Clamp",
        move3b : "-Ice Beam",
        move4b : "-Spike Cannon",

        namec : "Slowbro",
        levelc : "LV: 54",
        typec : "Type: Water/Psychic",
        itemc : "Item: None",
        hpc : "HP: 175",
        atkc : "Atk: 95",
        defc : "Def: 132",
        spc : "Special: 100",
        spdc : "Speed: 46",
        move1c : "-Psychic",
        move2c : "-Surf",
        move3c : "-Withdraw",
        move4c : "-Amnesia",

        named : "Jynx",
        leveld : "LV: 56",
        typed : "Type: Ice/Psychic",
        itemd : "Item: None",
        hpd : "HP: 147",
        atkd : "Atk: 71",
        defd : "Def: 53",
        spd : "Special: 120",
        spdd : "Speed: 120",
        move1d : "-DoubleSlap",
        move2d : "-Ice Punch",
        move3d : "-Lovely Kiss",
        move4d : "-Thrash",

        namee : "Lapras",
        levele : "LV: 56",
        typee : "Type: Water/Ice",
        iteme : "Item: None",
        hpe : "HP: 220",
        atke : "Atk: 110",
        defe : "Def: 103",
        spe : "Special: 120",
        spde : "Speed: 81",
        move1e : "-Body Slam",
        move2e : "-Confuse Ray",
        move3e : "-Blizzard",
        move4e : "-Hydro Pump",
    },

    {
        namea : "Onix",
        levela : "LV: 53",
        typea : "Type: Rock/Ground",
        itema : "Item: None",
        hpa : "HP: 108",
        atka : "Atk: 62",
        defa : "Def: 183",
        spa : "Special: 45",
        spda : "Speed: 87",
        move1a : "-Rock Slide",
        move2a : "-Screech",
        move3a : "-Slam",
        move4a : "-Dig",

        nameb : "Hitmonchan",
        levelb : "LV: 55",
        typeb : "Type: Fighting",
        itemb : "Item: None",
        hpb : "HP: 128",
        atkb : "Atk: 130",
        defb : "Def: 100",
        spb : "Special: 52",
        spdb : "Speed: 97",
        move1b : "-Ice Punch",
        move2b : "-Thunder Punch",
        move3b : "-Fire Punch",
        move4b : "-Double Team",

        namec : "Hitmonlee",
        levelc : "LV: 55",
        typec : "Type: Fighting",
        itemc : "Item: None",
        hpc : "HP: 128",
        atkc : "Atk: 146",
        defc : "Def: 72",
        spc : "Special: 52",
        spdc : "Speed: 109",
        move1c : "-Double Kick",
        move2c : "-Mega Kick",
        move3c : "-High Jump Kick",
        move4c : "-Double Team",

        named : "Onix",
        leveld : "LV: 56",
        typed : "Type: Rock/Ground",
        itemd : "Item: None",
        hpd : "HP: 114",
        atkd : "Atk: 65",
        defd : "Def: 193",
        spd : "Special: 47",
        spdd : "Speed: 92",
        move1d : "-Rock Slide",
        move2d : "-Screech",
        move3d : "-Slam",
        move4d : "-Earthquake",

        namee : "Machamp",
        levele : "LV: 58",
        typee : "Type: Fighting",
        iteme : "Item: None",
        hpe : "HP: 181",
        atke : "Atk: 166",
        defe : "Def: 107",
        spe : "Special: 89",
        spde : "Speed: 78",
        move1e : "-Leer",
        move2e : "-Karate Chop",
        move3e : "-Strength",
        move4e : "-Submission",
    },

    {
        namea : "Gengar",
        levela : "LV: 56",
        typea : "Type: Ghost/Poison",
        itema : "Item: None",
        hpa : "HP: 142",
        atka : "Atk: 87",
        defa : "Def: 81",
        spa : "Special: 159",
        spda : "Speed: 137",
        move1a : "-Confuse Ray",
        move2a : "-Substitute",
        move3a : "-Lick",
        move4a : "-Mega Drain",

        nameb : "Golbat",
        levelb : "LV: 56",
        typeb : "Type: Poison/Flying",
        itemb : "Item: None",
        hpb : "HP: 158",
        atkb : "Atk: 104",
        defb : "Def: 92",
        spb : "Special: 97",
        spdb : "Speed: 114",
        move1b : "-Supersonic",
        move2b : "-Toxic",
        move3b : "-Wing Attack",
        move4b : "-Leech Life",

        namec : "Haunter",
        levelc : "LV: 55",
        typec : "Type: Ghost/Poison",
        itemc : "Item: None",
        hpc : "HP: 123",
        atkc : "Atk: 69",
        defc : "Def: 63",
        spc : "Special: 140",
        spdc : "Speed: 118",
        move1c : "-Confuse Ray",
        move2c : "-Lick",
        move3c : "-Hypnosis",
        move4c : "-Dream Eater",

        named : "Arbok",
        leveld : "LV: 58",
        typed : "Type: Poison",
        itemd : "Item: None",
        hpd : "HP: 146",
        atkd : "Atk: 114",
        defd : "Def: 94",
        spd : "Special: 89",
        spdd : "Speed: 107",
        move1d : "-Wrap",
        move2d : "-Glare",
        move3d : "-Screech",
        move4d : "-Acid",

        namee : "Gengar",
        levele : "LV: 60",
        typee : "Type: Ghost/Poison",
        iteme : "Item: None",
        hpe : "HP: 151",
        atke : "Atk: 93",
        defe : "Def: 86",
        spe : "Special: 170",
        spde : "Speed: 146",
        move1e : "-Confuse Ray",
        move2e : "-Psychic",
        move3e : "-Hypnosis",
        move4e : "-Dream Eater",
    },

    {
        namea : "Gyarados",
        levela : "LV: 58",
        typea : "Type: Water/Flying",
        itema : "Item: None",
        hpa : "HP: 187",
        atka : "Atk: 160",
        defa : "Def: 105",
        spa : "Special: 130",
        spda : "Speed: 108",
        move1a : "-Dragon Rage",
        move2a : "-Leer",
        move3a : "-Hydro Pump",
        move4a : "-Hyper Beam",

        nameb : "Dragonair",
        levelb : "LV: 56",
        typeb : "Type: Dragon",
        itemb : "Item: None",
        hpb : "HP: 143",
        atkb : "Atk: 109",
        defb : "Def: 86",
        spb : "Special: 92",
        spdb : "Speed: 92",
        move1b : "-Thunder Wave",
        move2b : "-Slam",
        move3b : "-Thunderbolt",
        move4b : "-Hyper Beam",

        namec : "Dragonair",
        levelc : "LV: 56",
        typec : "Type: Dragon",
        itemc : "Item: None",
        hpc : "HP: 143",
        atkc : "Atk: 109",
        defc : "Def: 86",
        spc : "Special: 92",
        spdc : "Speed: 92",
        move1c : "-BubbleBeam",
        move2c : "-Wrap",
        move3c : "-Ice Beam",
        move4c : "-Hyper Beam",

        named : "Aerodactyl",
        leveld : "LV: 60",
        typed : "Type: Rock/Flying",
        itemd : "Item: None",
        hpd : "HP: 175",
        atkd : "Atk: 141",
        defd : "Def: 92",
        spd : "Special: 86",
        spdd : "Speed: 170",
        move1d : "-Wing Attack",
        move2d : "-Swift",
        move3d : "-Fly",
        move4d : "-Hyper Beam",

        namee : "Dragonite",
        levele : "LV: 62",
        typee : "Type: Dragon/Flying",
        iteme : "Item: None",
        hpe : "HP: 194",
        atke : "Atk: 182",
        defe : "Def: 132",
        spe : "Special: 138",
        spde : "Speed: 114",
        move1e : "-Blizzard",
        move2e : "-Fire Blast",
        move3e : "-Thunder",
        move4e : "-Hyper Beam",
    },

    {
        namea : "Sandslash",
        levela : "LV: 61",
        typea : "Type: Ground",
        itema : "Item: None",
        hpa : "HP: 172",
        atka : "Atk: 137",
        defa : "Def: 148",
        spa : "Special: 81",
        spda : "Speed: 94",
        move1a : "-Slash",
        move2a : "-Poison Sting",
        move3a : "-Earthquake",
        move4a : "-Fury Swipes",

        nameb : "Alakazam",
        levelb : "LV: 59",
        typeb : "Type: Psychic",
        itemb : "Item: None",
        hpb : "HP: 143",
        atkb : "Atk: 74",
        defb : "Def: 67",
        spb : "Special: 173",
        spdb : "Speed: 156",
        move1b : "-Psybeam",
        move2b : "-Recover",
        move3b : "-Psychic",
        move4b : "-Kinesis",

        namec : "Exeggutor",
        levelc : "LV: 61",
        typec : "Type: Grass/Psychic",
        itemc : "Item: None",
        hpc : "HP: 196",
        atkc : "Atk: 131",
        defc : "Def: 118",
        spc : "Special: 167",
        spdc : "Speed: 81",
        move1c : "-Barrage",
        move2c : "-Hypnosis",
        move3c : "-Stomp",
        move4c : "Leech Seed",

        named : "Ninetales",
        leveld : "LV: 61",
        typed : "Type: Fire",
        itemd : "Item: None",
        hpd : "HP: 169",
        atkd : "Atk: 108",
        defd : "Def: 106",
        spd : "Special: 136",
        spdd : "Speed: 136",
        move1d : "-Confuse Ray",
        move2d : "-Tail Whip",
        move3d : "-Quick Attack",
        move4d : "-Fire Spin",

        namee : "Magneton",
        levele : "LV: 63",
        typee : "Type: Electric",
        iteme : "Item: None",
        hpe : "HP: 146",
        atke : "Atk: 91",
        defe : "Def: 134",
        spe : "Special: 166",
        spde : "Speed: 103",
        move1e : "-Thunderbolt",
        move2e : "-Thunder Wave",
        move3e : "-Swift",
        move4e : "-Screech",

        namef : "Vaporeon",
        levelf : "LV: 65",
        typef : "Type: Water",
        itemf : "Item: None",
        hpf : "HP: 254",
        atkf : "Atk: 101",
        deff : "Def: 93",
        spf : "Special: 158",
        spdf : "Speed: 99",
        move1f : "-Aurora Beam",
        move2f : "-Mist",
        move3f : "-Quick Attack",
        move4f : "-Hydro Pump",
    },

    {
        namea : "Sandslash",
        levela : "LV: 61",
        typea : "Type: Ground",
        itema : "Item: None",
        hpa : "HP: 172",
        atka : "Atk: 137",
        defa : "Def: 148",
        spa : "Special: 81",
        spda : "Speed: 94",
        move1a : "-Slash",
        move2a : "-Poison Sting",
        move3a : "-Earthquake",
        move4a : "-Fury Swipes",

        nameb : "Alakazam",
        levelb : "LV: 59",
        typeb : "Type: Psychic",
        itemb : "Item: None",
        hpb : "HP: 143",
        atkb : "Atk: 74",
        defb : "Def: 67",
        spb : "Special: 173",
        spdb : "Speed: 156",
        move1b : "-Psybeam",
        move2b : "-Recover",
        move3b : "-Psychic",
        move4b : "-Kinesis",

        namec : "Exeggutor",
        levelc : "LV: 61",
        typec : "Type: Grass/Psychic",
        itemc : "Item: None",
        hpc : "HP: 196",
        atkc : "Atk: 131",
        defc : "Def: 118",
        spc : "Special: 167",
        spdc : "Speed: 81",
        move1c : "-Barrage",
        move2c : "-Hypnosis",
        move3c : "-Stomp",
        move4c : "Leech Seed",

        named : "Cloyster",
        leveld : "LV: 61",
        typed : "Type: Water/Ice",
        itemd : "Item: None",
        hpd : "HP: 141",
        atkd : "Atk: 131",
        defd : "Def: 234",
        spd : "Special: 118",
        spdd : "Speed: 100",
        move1d : "-Ice Beam",
        move2d : "-Clamp",
        move3d : "-Aurora Beam",
        move4d : "-Spike Cannon",

        namee : "Ninetales",
        levele : "LV: 63",
        typee : "Type: Fire",
        iteme : "Item: None",
        hpe : "HP: 175",
        atke : "Atk: 112",
        defe : "Def: 109",
        spe : "Special: 141",
        spde : "Speed: 141",
        move1e : "-Confuse Ray",
        move2e : "-Tail Whip",
        move3e : "-Quick Attack",
        move4e : "-Fire Spin",

        namef : "Jolteon",
        levelf : "LV: 65",
        typef : "Type: Electric",
        itemf : "Item: None",
        hpf : "HP: 169",
        atkf : "Atk: 101",
        deff : "Def: 93",
        spf : "Special: 158",
        spdf : "Speed: 184",
        move1f : "-Pin Missile",
        move2f : "-Thunder Wave",
        move3f : "-Quick Attack",
        move4f : "-Thunder",
    },

    {
        namea : "Sandslash",
        levela : "LV: 61",
        typea : "Type: Ground",
        itema : "Item: None",
        hpa : "HP: 172",
        atka : "Atk: 137",
        defa : "Def: 148",
        spa : "Special: 81",
        spda : "Speed: 94",
        move1a : "-Slash",
        move2a : "-Poison Sting",
        move3a : "-Earthquake",
        move4a : "-Fury Swipes",

        nameb : "Alakazam",
        levelb : "LV: 59",
        typeb : "Type: Psychic",
        itemb : "Item: None",
        hpb : "HP: 143",
        atkb : "Atk: 74",
        defb : "Def: 67",
        spb : "Special: 173",
        spdb : "Speed: 156",
        move1b : "-Psybeam",
        move2b : "-Recover",
        move3b : "-Psychic",
        move4b : "-Kinesis",

        namec : "Exeggutor",
        levelc : "LV: 61",
        typec : "Type: Grass/Psychic",
        itemc : "Item: None",
        hpc : "HP: 196",
        atkc : "Atk: 131",
        defc : "Def: 118",
        spc : "Special: 167",
        spdc : "Speed: 81",
        move1c : "-Barrage",
        move2c : "-Hypnosis",
        move3c : "-Stomp",
        move4c : "Leech Seed",

        named : "Magneton",
        leveld : "LV: 61",
        typed : "Type: Electric",
        itemd : "Item: None",
        hpd : "HP: 141",
        atkd : "Atk: 89",
        defd : "Def: 130",
        spd : "Special: 161",
        spdd : "Speed: 100",
        move1d : "-Thunderbolt",
        move2d : "-Thunder Wave",
        move3d : "-Swift",
        move4d : "-Screech",

        namee : "Cloyster",
        levele : "LV: 63",
        typee : "Type: Water/Ice",
        iteme : "Item: None",
        hpe : "HP: 146",
        atke : "Atk: 136",
        defe : "Def: 241",
        spe : "Special: 122",
        spde : "Speed: 103",
        move1e : "-Ice Beam",
        move2e : "-Clamp",
        move3e : "-Aurora Beam",
        move4e : "-Spike Cannon",

        namef : "Flareon",
        levelf : "LV: 65",
        typef : "Type: Fire",
        itemf : "Item: None",
        hpf : "HP: 169",
        atkf : "Atk: 185",
        deff : "Def: 93",
        spf : "Special: 158",
        spdf : "Speed: 99",
        move1f : "-Fire Spin",
        move2f : "-Reflect",
        move3f : "-Quick Attack",
        move4f : "-Fire Blast",
    },

]

function displayYTrainers() {
    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        updateSpd1Content();
        updateSpd2Content();
        updateSpd3Content();
        updateSpd4Content();
        updateSpd5Content();
        updateSpd6Content();
        showYImages(newTrainerId);
        showPokemonYImages(newTrainerId);
    }
    
    let yTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = y_trainers [yTrainer].namea;
    document.querySelector('#level1').textContent = y_trainers [yTrainer].levela;
    document.querySelector('#type1').textContent = y_trainers [yTrainer].typea;
    document.querySelector('#ability1').textContent= y_trainers [yTrainer].abilitya;
    document.querySelector('#item1').textContent = y_trainers [yTrainer].itema;
    document.querySelector('#hp1').textContent = y_trainers [yTrainer].hpa;
    document.querySelector('#atk1').textContent = y_trainers [yTrainer].atka;
    document.querySelector('#def1').textContent = y_trainers [yTrainer].defa;
    document.querySelector('#spatk1').textContent = y_trainers [yTrainer].spa;
    document.querySelector('#spdef1').textContent = y_trainers [yTrainer].spda;
    document.querySelector('#move1_1').textContent = y_trainers [yTrainer].move1a;
    document.querySelector('#move2_1').textContent = y_trainers [yTrainer].move2a;
    document.querySelector('#move3_1').textContent = y_trainers [yTrainer].move3a;
    document.querySelector('#move4_1').textContent = y_trainers [yTrainer].move4a;

    
    document.querySelector('#name2').textContent = y_trainers [yTrainer].nameb;
    document.querySelector('#level2').textContent = y_trainers [yTrainer].levelb;
    document.querySelector('#type2').textContent = y_trainers [yTrainer].typeb;
    document.querySelector('#ability2').textContent= y_trainers [yTrainer].abilityb;
    document.querySelector('#item2').textContent = y_trainers [yTrainer].itemb;
    document.querySelector('#hp2').textContent = y_trainers [yTrainer].hpb;
    document.querySelector('#atk2').textContent = y_trainers [yTrainer].atkb;
    document.querySelector('#def2').textContent = y_trainers [yTrainer].defb;
    document.querySelector('#spatk2').textContent = y_trainers [yTrainer].spb;
    document.querySelector('#spdef2').textContent = y_trainers [yTrainer].spdb;
    document.querySelector('#move1_2').textContent = y_trainers [yTrainer].move1b;
    document.querySelector('#move2_2').textContent = y_trainers [yTrainer].move2b;
    document.querySelector('#move3_2').textContent = y_trainers [yTrainer].move3b;
    document.querySelector('#move4_2').textContent = y_trainers [yTrainer].move4b;

    document.querySelector('#name3').textContent = y_trainers [yTrainer].namec;
    document.querySelector('#level3').textContent = y_trainers [yTrainer].levelc;
    document.querySelector('#type3').textContent = y_trainers [yTrainer].typec;
    document.querySelector('#ability3').textContent= y_trainers [yTrainer].abilityc;
    document.querySelector('#item3').textContent = y_trainers [yTrainer].itemc;
    document.querySelector('#hp3').textContent = y_trainers [yTrainer].hpc;
    document.querySelector('#atk3').textContent = y_trainers [yTrainer].atkc;
    document.querySelector('#def3').textContent = y_trainers [yTrainer].defc;
    document.querySelector('#spatk3').textContent = y_trainers [yTrainer].spc;
    document.querySelector('#spdef3').textContent = y_trainers [yTrainer].spdc;
    document.querySelector('#move1_3').textContent = y_trainers [yTrainer].move1c;
    document.querySelector('#move2_3').textContent = y_trainers [yTrainer].move2c;
    document.querySelector('#move3_3').textContent = y_trainers [yTrainer].move3c;
    document.querySelector('#move4_3').textContent = y_trainers [yTrainer].move4c;

    document.querySelector('#name4').textContent = y_trainers [yTrainer].named;
    document.querySelector('#level4').textContent = y_trainers [yTrainer].leveld;
    document.querySelector('#type4').textContent = y_trainers [yTrainer].typed;
    document.querySelector('#ability4').textContent= y_trainers [yTrainer].abilityd;
    document.querySelector('#item4').textContent = y_trainers [yTrainer].itemd;
    document.querySelector('#hp4').textContent = y_trainers [yTrainer].hpd;
    document.querySelector('#atk4').textContent = y_trainers [yTrainer].atkd;
    document.querySelector('#def4').textContent = y_trainers [yTrainer].defd;
    document.querySelector('#spatk4').textContent = y_trainers [yTrainer].spd;
    document.querySelector('#spdef4').textContent = y_trainers [yTrainer].spdd;
    document.querySelector('#move1_4').textContent = y_trainers [yTrainer].move1d;
    document.querySelector('#move2_4').textContent = y_trainers [yTrainer].move2d;
    document.querySelector('#move3_4').textContent = y_trainers [yTrainer].move3d;
    document.querySelector('#move4_4').textContent = y_trainers [yTrainer].move4d;

    document.querySelector('#name5').textContent = y_trainers [yTrainer].namee;
    document.querySelector('#level5').textContent = y_trainers [yTrainer].levele;
    document.querySelector('#type5').textContent = y_trainers [yTrainer].typee;
    document.querySelector('#ability5').textContent= y_trainers [yTrainer].abilitye;
    document.querySelector('#item5').textContent = y_trainers [yTrainer].iteme;
    document.querySelector('#hp5').textContent = y_trainers [yTrainer].hpe;
    document.querySelector('#atk5').textContent = y_trainers [yTrainer].atke;
    document.querySelector('#def5').textContent = y_trainers [yTrainer].defe;
    document.querySelector('#spatk5').textContent = y_trainers [yTrainer].spe;
    document.querySelector('#spdef5').textContent = y_trainers [yTrainer].spde;
    document.querySelector('#move1_5').textContent = y_trainers [yTrainer].move1e;
    document.querySelector('#move2_5').textContent = y_trainers [yTrainer].move2e;
    document.querySelector('#move3_5').textContent = y_trainers [yTrainer].move3e;
    document.querySelector('#move4_5').textContent = y_trainers [yTrainer].move4e;

    document.querySelector('#name6').textContent = y_trainers [yTrainer].namef;
    document.querySelector('#level6').textContent = y_trainers [yTrainer].levelf;
    document.querySelector('#type6').textContent = y_trainers [yTrainer].typef;
    document.querySelector('#ability6').textContent= y_trainers [yTrainer].abilityf;
    document.querySelector('#item6').textContent = y_trainers [yTrainer].itemf;
    document.querySelector('#hp6').textContent = y_trainers [yTrainer].hpf;
    document.querySelector('#atk6').textContent = y_trainers [yTrainer].atkf;
    document.querySelector('#def6').textContent = y_trainers [yTrainer].deff;
    document.querySelector('#spatk6').textContent = y_trainers [yTrainer].spf;
    document.querySelector('#spdef6').textContent = y_trainers [yTrainer].spdf;
    document.querySelector('#move1_6').textContent = y_trainers [yTrainer].move1f;
    document.querySelector('#move2_6').textContent = y_trainers [yTrainer].move2f;
    document.querySelector('#move3_6').textContent = y_trainers [yTrainer].move3f;
    document.querySelector('#move4_6').textContent = y_trainers [yTrainer].move4f;
}

function updateSpd1Content() {
    document.querySelector('#spd1').textContent = '';
};

function updateSpd2Content() {
    document.querySelector('#spd2').textContent = '';
}

function updateSpd3Content() {
    document.querySelector('#spd3').textContent = '';
}

function updateSpd4Content() {
        document.querySelector('#spd4').textContent = '';
}

function updateSpd5Content() {
        document.querySelector('#spd5').textContent = '';
}

function updateSpd6Content() {
        document.querySelector('#spd6').textContent = '';
}

function showYImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/y/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonYImages(trainerId) {
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

    imgPokemon1.src = "images/trainer_data_images/pokemon/y/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/y/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/y/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/y/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/y/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/y/" + trainerId + "_6.png";
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

    refCredit.textContent = "zerokid"
    refCredit.href = "https://gamefaqs.gamespot.com/gameboy/367023-pokemon-red-version/faqs/64175/introduction"
}


brockY.addEventListener('click', displayYTrainers);
mistyY.addEventListener('click', displayYTrainers);
ltsurgeY.addEventListener('click', displayYTrainers);
erikaY.addEventListener('click', displayYTrainers);
kogaY.addEventListener('click', displayYTrainers);
sabrinaY.addEventListener('click', displayYTrainers);
blaineY.addEventListener('click', displayYTrainers);
giovanniY.addEventListener('click', displayYTrainers);
loreleiY.addEventListener('click', displayYTrainers);
brunoY.addEventListener('click', displayYTrainers);
agathaY.addEventListener('click', displayYTrainers);
lanceY.addEventListener('click', displayYTrainers);
bluevY.addEventListener('click', displayYTrainers);
bluejY.addEventListener('click', displayYTrainers);
bluefY.addEventListener('click', displayYTrainers);