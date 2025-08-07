let halaSM = document.querySelector ("#hala1");
let oliviaSM = document.querySelector ("#olivia1");
let guzmaSHSM = document.querySelector ("#guzma1");
let nanuSM = document.querySelector ("#nanu1");
let guzmaAHSM = document.querySelector ("#guzma2");
let lusamineSM = document.querySelector ("#lusamine1");
let hapuSM = document.querySelector ("#hapu1");
let motherbeastSM = document.querySelector ("#motherbeast1");
let gladionGSM = document.querySelector ("#gladion1_g");
let gladionFSM = document.querySelector ("#gladion1_f");
let gladionWSM = document.querySelector ("#gladion1_w");
let halaE4SM = document.querySelector ("#hala2");
let oliviaE4SM = document.querySelector ("#olivia2");
let acerolaSM = document.querySelector ("#acerola1");
let kahiliSM = document.querySelector ("#kahili1");
let kukuiGSM = document.querySelector ("#kukui1_g");
let kukuiFSM = document.querySelector ("#kukui1_f");
let kukuiWSM = document.querySelector ("#kukui1_w");

let sm_trainers = [
    {
        namea : "Mankey",
        levela : "LV: 14",
        typea : "Type: Fighting",
        abilitya: "Ability: Anger Point",
        itema : "Item: None",
        hpa : "HP: 48",
        atka : "Atk: 34",
        defa : "Def: 16",
        spatka : "Sp. Atk: 14",
        spdefa : "Sp. Def: 19",
        spda : "Spd: 37",
        move1a : "-Karate Chop",
        move2a : "-Focus Energy",
        move3a : "-Pursuit",
        move4a : "",

        nameb : "Makuhita",
        levelb : "LV: 14",
        typeb : "Type: Fighting",
        abilityb: "Ability: Thick Fat",
        itemb : "Item: None",
        hpb : "HP: 57",
        atkb : "Atk: 28",
        defb : "Def: 15",
        spatkb : "Sp. Atk: 10",
        spdefb : "Sp. Def: 26",
        spdb : "Spd: 14",
        move1b : "-Fake Out",
        move2b : "-Sand Attack",
        move3b : "-Arm Thrust",
        move4b : "",

        namec : "Crabrawler",
        levelc : "LV: 15",
        typec : "Type: Fighting",
        abilityc: "Ability: Iron Fist",
        itemc : "Item: Fightinium Z",
        hpc : "HP: 53",
        atkc : "Atk: 37",
        defc : "Def: 36",
        spatkc : "Sp. Atk: 17",
        spdefc : "Sp. Def: 21",
        spdc : "Spd: 26",
        move1c : "-Power-Up Punch",
        move2c : "-Pursuit",
        move3c : "-Leer",
        move4c : "",
    },

    {
        namea : "Nosepass",
        levela : "LV: 26",
        typea : "Type: Rock",
        abilitya: "Ability: Sturdy",
        itema : "Item: None",
        hpa : "HP: 76",
        atka : "Atk: 32",
        defa : "Def: 83",
        spatka : "Sp. Atk: 28",
        spdefa : "Sp. Def: 83",
        spda : "Spd: 24",
        move1a : "-Rock Slide",
        move2a : "-Spark",
        move3a : "-Thunder Wave",
        move4a : "",

        nameb : "Boldore",
        levelb : "LV: 26",
        typeb : "Type: Rock",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 96",
        atkb : "Atk: 63",
        defb : "Def: 92",
        spatkb : "Sp. Atk: 30",
        spdefb : "Sp. Def: 33",
        spdb : "Spd: 19",
        move1b : "-Rock Blast",
        move2b : "-Mud-Slap",
        move3b : "-Headbutt",
        move4b : "",

        namec : "Lycanroc (Midnight)",
        levelc : "LV: 27",
        typec : "Type: Rock",
        abilityc: "Ability: Vital Spirit",
        itemc : "Item: Rockium Z",
        hpc : "HP: 91",
        atkc : "Atk: 101",
        defc : "Def: 49",
        spatkc : "Sp. Atk: 34",
        spdefc : "Sp. Def: 49",
        spdc : "Spd: 74",
        move1c : "-Bite",
        move2c : "-Rock Throw",
        move3c : "",
        move4c : "",
    },

    {
        namea : "Golisopod",
        levela : "LV: 37",
        typea : "Type: Bug/Water",
        abilitya: "Ability: Emergency Exit",
        itema : "Item: None",
        hpa : "HP: 113",
        atka : "Atk: 145",
        defa : "Def: 114",
        spatka : "Sp. Atk: 48",
        spdefa : "Sp. Def: 77",
        spda : "Spd: 46",
        move1a : "-First Impression",
        move2a : "-Razor Shell",
        move3a : "-Swords Dance",
        move4a : "",

        nameb : "Ariados",
        levelb : "LV: 36",
        typeb : "Type: Bug/Poison",
        abilityb: "Ability: Swarm",
        itemb : "Item: None",
        hpb : "HP: 107",
        atkb : "Atk: 113",
        defb : "Def: 66",
        spatkb : "Sp. Atk: 53",
        spdefb : "Sp. Def: 66",
        spdb : "Spd: 67",
        move1b : "-Fell Stinger",
        move2b : "-Sucker Punch",
        move3b : "-Shadow Sneak",
        move4b : "-Infestation",
    },

    {
        namea : "Sableye",
        levela : "LV: 38",
        typea : "Type: Dark/Ghost",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 97",
        atka : "Atk: 67",
        defa : "Def: 73",
        spatka : "Sp. Atk: 81",
        spdefa : "Sp. Def: 90",
        spda : "Spd: 48",
        move1a : "-Power Gem",
        move2a : "-Shadow Ball",
        move3a : "-Fake Out",
        move4a : "",

        nameb : "Krokorok",
        levelb : "LV: 38",
        typeb : "Type: Ground/Dark",
        abilityb: "Ability: Intimidate",
        itemb : "Item: None",
        hpb : "HP: 105",
        atkb : "Atk: 103",
        defb : "Def: 44",
        spatkb : "Sp. Atk: 39",
        spdefb : "Sp. Def: 44",
        spdb : "Spd: 105",
        move1b : "-Crunch",
        move2b : "-Assurance",
        move3b : "-Swagger",
        move4b : "-Earthquake",

        namec : "Persian (Alolan)",
        levelc : "LV: 39",
        typec : "Type: Dark",
        abilityc: "Ability: Fur Coat",
        itemc : "Item: Darkinium Z",
        hpc : "HP: 111",
        atkc : "Atk: 51",
        defc : "Def: 57",
        spatkc : "Sp. Atk: 100",
        spdefc : "Sp. Def: 61",
        spdc : "Spd: 144",
        move1c : "-Power Gem",
        move2c : "-Fake Out",
        move3c : "-Dark Pulse",
        move4c : "",
    },

    {
        namea : "Golisopod",
        levela : "LV: 41",
        typea : "Type: Bug/Water",
        abilitya: "Ability: Emergency Exit",
        itema : "Item: None",
        hpa : "HP: 125",
        atka : "Atk: 160",
        defa : "Def: 125",
        spatka : "Sp. Atk: 54",
        spdefa : "Sp. Def: 84",
        spda : "Spd: 50",
        move1a : "-First Impression",
        move2a : "-Razor Shell",
        move3a : "-Swords Dance",
        move4a : "",

        nameb : "Ariados",
        levelb : "LV: 40",
        typeb : "Type: Bug/Poison",
        abilityb: "Ability: Swarm",
        itemb : "Item: None",
        hpb : "HP: 118",
        atkb : "Atk: 125",
        defb : "Def: 73",
        spatkb : "Sp. Atk: 58",
        spdefb : "Sp. Def: 73",
        spdb : "Spd: 74",
        move1b : "-Fell Stinger",
        move2b : "-Sucker Punch",
        move3b : "-Shadow Sneak",
        move4b : "",

        namec : "Masquerain",
        levelc : "LV: 40",
        typec : "Type: Bug/Flying",
        abilityc: "Ability: Intimidate",
        itemc : "Item: None",
        hpc : "HP: 118",
        atkc : "Atk: 58",
        defc : "Def: 67",
        spatkc : "Sp. Atk: 134",
        spdefc : "Sp. Def: 83",
        spdc : "Spd: 106",
        move1c : "-Bug Buzz",
        move2c : "-Air Slash",
        move3c : "",
        move4c : "",

        named : "Pinsir",
        leveld : "LV: 40",
        typed : "Type: Bug",
        abilityd: "Ability: Mold Breaker",
        itemd : "Item: None",
        hpd : "HP: 114",
        atkd : "Atk: 156",
        defd : "Def: 97",
        spatkd : "Sp. Atk: 54",
        spdefd : "Sp. Def: 73",
        spdd : "Spd: 85",
        move1d : "-X-Scissor",
        move2d : "-Brick Break",
        move3d : "-Double Hit",
        move4d : "",
    },

    {
        namea : "Clefable",
        levela : "LV: 41",
        typea : "Type: Fairy",
        abilitya: "Ability: Magic Guard",
        itema : "Item: None",
        hpa : "HP: 167",
        atka : "Atk: 61",
        defa : "Def: 77",
        spatka : "Sp. Atk: 89",
        spdefa : "Sp. Def: 128",
        spda : "Spd: 60",
        move1a : "-Cosmic Power",
        move2a : "-Metronome",
        move3a : "-Moonblast",
        move4a : "",

        nameb : "Lilligant",
        levelb : "LV: 41",
        typeb : "Type: Grass",
        abilityb: "Ability: Own Tempo",
        itemb : "Item: None",
        hpb : "HP: 121",
        atkb : "Atk: 54",
        defb : "Def: 72",
        spatkb : "Sp. Atk: 146",
        spdefb : "Sp. Def: 72",
        spdb : "Spd: 117",
        move1b : "-Petal Dance",
        move2b : "-Teeter Dance",
        move3b : "-Stun Spore",
        move4b : "",

        namec : "Mismagius",
        levelc : "LV: 41",
        typec : "Type: Ghost",
        abilityc: "Ability: Levitate",
        itemc : "Item: None",
        hpc : "HP: 112",
        atkc : "Atk: 54",
        defc : "Def: 60",
        spatkc : "Sp. Atk: 141",
        spdefc : "Sp. Def: 97",
        spdc : "Spd: 129",
        move1c : "-Shadow Ball",
        move2c : "-Mystical Fire",
        move3c : "-Power Gem",
        move4c : "",

        named : "Milotic",
        leveld : "LV: 41",
        typed : "Type: Water",
        abilityd: "Ability: Marvel Scale",
        itemd : "Item: None",
        hpd : "HP: 141",
        atkd : "Atk: 54",
        defd : "Def: 75",
        spatkd : "Sp. Atk: 137",
        spdefd : "Sp. Def: 113",
        spdd : "Spd: 109",
        move1d : "-Hydro Pump",
        move2d : "-Flail",
        move3d : "-Safeguard",
        move4d : "",

        namee : "Bewear",
        levele : "LV: 41",
        typee : "Type: Normal/Fighting",
        abilitye: "Ability: Fluffy",
        iteme : "Item: None",
        hpe : "HP: 187",
        atke : "Atk: 160",
        defe : "Def: 83",
        spatke : "Sp. Atk: 50",
        spdefe : "Sp. Def: 60",
        spde : "Spd: 66",
        move1e : "-Baby-Doll Eyes",
        move2e : "-Take Down",
        move3e : "-Hammer Arm",
        move4e : "",
    },

    {
        namea : "Dugtrio (Alolan)",
        levela : "LV: 47",
        typea : "Type: Ground/Steel",
        abilitya: "Ability: Sand Veil",
        itema : "Item: None",
        hpa : "HP: 104",
        atka : "Atk: 143",
        defa : "Def: 68",
        spatka : "Sp. Atk: 59",
        spdefa : "Sp. Def: 77",
        spda : "Spd: 152",
        move1a : "-Iron Head",
        move2a : "-Earthquake",
        move3a : "-Sucker Punch",
        move4a : "-Sandstorm",

        nameb : "Gastrodon",
        levelb : "LV: 47",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Sticky Hold",
        itemb : "Item: None",
        hpb : "HP: 205",
        atkb : "Atk: 90",
        defb : "Def: 113",
        spatkb : "Sp. Atk: 98",
        spdefb : "Sp. Def: 96",
        spdb : "Spd: 48",
        move1b : "-Muddy Water",
        move2b : "-Mud Bomb",
        move3b : "-Recover",
        move4b : "",

        namec : "Flygon",
        levelc : "LV: 47",
        typec : "Type: Ground/Dragon",
        abilityc: "Ability: Levitate",
        itemc : "Item: None",
        hpc : "HP: 146",
        atkc : "Atk: 106",
        defc : "Def: 87",
        spatkc : "Sp. Atk: 124",
        spdefc : "Sp. Def: 87",
        spdc : "Spd: 143",
        move1c : "-Earth Power",
        move2c : "-Dragon Breath",
        move3c : "",
        move4c : "",

        named : "Mudsdale",
        leveld : "LV: 48",
        typed : "Type: Ground",
        abilityd: "Ability: Stamina",
        itemd : "Item: Groundium Z",
        hpd : "HP: 168",
        atkd : "Atk: 170",
        defd : "Def: 146",
        spatkd : "Sp. Atk: 65",
        spdefd : "Sp. Def: 93",
        spdd : "Spd: 45",
        move1d : "-Heavy Slam",
        move2d : "-Earthquake",
        move3d : "-Double Kick",
        move4d : "-Counter",
    },

    {
        namea : "Clefable",
        levela : "LV: 50",
        typea : "Type: Fairy",
        abilitya: "Ability: Magic Guard",
        itema : "Item: None",
        hpa : "HP: 202",
        atka : "Atk: 73",
        defa : "Def: 93",
        spatka : "Sp. Atk: 107",
        spdefa : "Sp. Def: 156 -> 234",
        spda : "Spd: 72",
        move1a : "-Moonblast",
        move2a : "-Cosmic Power",
        move3a : "-Metronome",
        move4a : "-Moonlight",

        nameb : "Lilligant",
        levelb : "LV: 50",
        typeb : "Type: Grass",
        abilityb: "Ability: Own Tempo",
        itemb : "Item: None",
        hpb : "HP: 145",
        atkb : "Atk: 64",
        defb : "Def: 87",
        spatkb : "Sp. Atk: 178 -> 267",
        spdefb : "Sp. Def: 87",
        spdb : "Spd: 142",
        move1b : "-Leech Seed",
        move2b : "-Petal Dance",
        move3b : "-Teeter Dance",
        move4b : "-Stun Spore",

        namec : "Mismagius",
        levelc : "LV: 50",
        typec : "Type: Ghost",
        abilityc: "Ability: Levitate",
        itemc : "Item: None",
        hpc : "HP: 135",
        atkc : "Atk: 64",
        defc : "Def: 72",
        spatkc : "Sp. Atk: 172",
        spdefc : "Sp. Def: 117",
        spdc : "Spd: 157 -> 235",
        move1c : "-Shadow Ball",
        move2c : "-Power Gem",
        move3c : "-Mystical Fire",
        move4c : "-Pain Split",

        named : "Milotic",
        leveld : "LV: 50",
        typed : "Type: Water",
        abilityd: "Ability: Marvel Scale",
        itemd : "Item: None",
        hpd : "HP: 170",
        atkd : "Atk: 64 -> 96",
        defd : "Def: 91",
        spatkd : "Sp. Atk: 167",
        spdefd : "Sp. Def: 137",
        spdd : "Spd: 133",
        move1d : "-Hydro Pump",
        move2d : "-Recover",
        move3d : "-Safeguard",
        move4d : "-Flail",

        namee : "Bewear",
        levele : "LV: 50",
        typee : "Type: Normal/Fighting",
        abilitye: "Ability: Fluffy",
        iteme : "Item: None",
        hpe : "HP: 227",
        atke : "Atk: 194",
        defe : "Def: 100 -> 150",
        spatke : "Sp. Atk: 60",
        spdefe : "Sp. Def: 72",
        spde : "Spd: 72",
        move1e : "-Baby-Doll Eyes",
        move2e : "-Hammer Arm",
        move3e : "-Take Down",
        move4e : "-Pain Split",
    },

    {
        namea : "Crobat",
        levela : "LV: 52",
        typea : "Type: Poison/Flying",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 158",
        atka : "Atk: 106",
        defa : "Def: 96",
        spatka : "Sp. Atk: 85",
        spdefa : "Sp. Def: 96",
        spda : "Spd: 189",
        move1a : "-Acrobatics",
        move2a : "-Cross Poison",
        move3a : "",
        move4a : "",

        nameb : "Weavile",
        levelb : "LV: 52",
        typeb : "Type: Dark/Ice",
        abilityb: "Ability: Pressure",
        itemb : "Item: None",
        hpb : "HP: 150",
        atkb : "Atk: 178",
        defb : "Def: 80",
        spatkb : "Sp. Atk: 59",
        spdefb : "Sp. Def: 101",
        spdb : "Spd: 151",
        move1b : "-Ice Shard",
        move2b : "-Night Slash",
        move3b : "-Metal Claw",
        move4b : "",

        namec : "Lucario",
        levelc : "LV: 52",
        typec : "Type: Fighting/Steel",
        abilityc: "Ability: Inner Focus",
        itemc : "Item: Steelium Z",
        hpc : "HP: 142",
        atkc : "Atk: 135",
        defc : "Def: 85",
        spatkc : "Sp. Atk: 140",
        spdefc : "Sp. Def: 85",
        spdc : "Spd: 147",
        move1c : "-Aura Sphere",
        move2c : "-Quick Attack",
        move3c : "-Metal Claw",
        move4c : "",

        named : "Silvally",
        leveld : "LV: 53",
        typed : "Type: Grass",
        abilityd: "Ability: RKS System",
        itemd : "Item: Grass Memory",
        hpd : "HP: 179",
        atkd : "Atk: 121",
        defd : "Def: 121",
        spatkd : "Sp. Atk: 121",
        spdefd : "Sp. Def: 121",
        spdd : "Spd: 154",
        move1d : "-Multi-Attack",
        move2d : "-X-Scissor",
        move3d : "-Crunch",
        move4d : "-Crush Claw",
    },

    {
        namea : "Crobat",
        levela : "LV: 52",
        typea : "Type: Poison/Flying",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 158",
        atka : "Atk: 106",
        defa : "Def: 96",
        spatka : "Sp. Atk: 85",
        spdefa : "Sp. Def: 96",
        spda : "Spd: 189",
        move1a : "-Acrobatics",
        move2a : "-Cross Poison",
        move3a : "",
        move4a : "",

        nameb : "Weavile",
        levelb : "LV: 52",
        typeb : "Type: Dark/Ice",
        abilityb: "Ability: Pressure",
        itemb : "Item: None",
        hpb : "HP: 150",
        atkb : "Atk: 178",
        defb : "Def: 80",
        spatkb : "Sp. Atk: 59",
        spdefb : "Sp. Def: 101",
        spdb : "Spd: 151",
        move1b : "-Ice Shard",
        move2b : "-Night Slash",
        move3b : "-Metal Claw",
        move4b : "",

        namec : "Lucario",
        levelc : "LV: 52",
        typec : "Type: Fighting/Steel",
        abilityc: "Ability: Inner Focus",
        itemc : "Item: Steelium Z",
        hpc : "HP: 142",
        atkc : "Atk: 135",
        defc : "Def: 85",
        spatkc : "Sp. Atk: 140",
        spdefc : "Sp. Def: 85",
        spdc : "Spd: 147",
        move1c : "-Aura Sphere",
        move2c : "-Quick Attack",
        move3c : "-Metal Claw",
        move4c : "",

        named : "Silvally",
        leveld : "LV: 53",
        typed : "Type: Fire",
        abilityd: "Ability: RKS System",
        itemd : "Item: Fire Memory",
        hpd : "HP: 179",
        atkd : "Atk: 121",
        defd : "Def: 121",
        spatkd : "Sp. Atk: 121",
        spdefd : "Sp. Def: 121",
        spdd : "Spd: 154",
        move1d : "-Multi-Attack",
        move2d : "-X-Scissor",
        move3d : "-Crunch",
        move4d : "-Crush Claw",
    },

    {
        namea : "Crobat",
        levela : "LV: 52",
        typea : "Type: Poison/Flying",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 158",
        atka : "Atk: 106",
        defa : "Def: 96",
        spatka : "Sp. Atk: 85",
        spdefa : "Sp. Def: 96",
        spda : "Spd: 189",
        move1a : "-Acrobatics",
        move2a : "-Cross Poison",
        move3a : "",
        move4a : "",

        nameb : "Weavile",
        levelb : "LV: 52",
        typeb : "Type: Dark/Ice",
        abilityb: "Ability: Pressure",
        itemb : "Item: None",
        hpb : "HP: 150",
        atkb : "Atk: 178",
        defb : "Def: 80",
        spatkb : "Sp. Atk: 59",
        spdefb : "Sp. Def: 101",
        spdb : "Spd: 151",
        move1b : "-Ice Shard",
        move2b : "-Night Slash",
        move3b : "-Metal Claw",
        move4b : "",

        namec : "Lucario",
        levelc : "LV: 52",
        typec : "Type: Fighting/Steel",
        abilityc: "Ability: Inner Focus",
        itemc : "Item: Steelium Z",
        hpc : "HP: 142",
        atkc : "Atk: 135",
        defc : "Def: 85",
        spatkc : "Sp. Atk: 140",
        spdefc : "Sp. Def: 85",
        spdc : "Spd: 147",
        move1c : "-Aura Sphere",
        move2c : "-Quick Attack",
        move3c : "-Metal Claw",
        move4c : "",

        named : "Silvally",
        leveld : "LV: 53",
        typed : "Type: Water",
        abilityd: "Ability: RKS System",
        itemd : "Item: Water Memory",
        hpd : "HP: 179",
        atkd : "Atk: 121",
        defd : "Def: 121",
        spatkd : "Sp. Atk: 121",
        spdefd : "Sp. Def: 121",
        spdd : "Spd: 154",
        move1d : "-Multi-Attack",
        move2d : "-X-Scissor",
        move3d : "-Crunch",
        move4d : "-Crush Claw",
    },

    {
        namea : "Hariyama",
        levela : "LV: 54",
        typea : "Type: Fighting",
        abilitya: "Ability: Thick Fat",
        itema : "Item: None",
        hpa : "HP: 236",
        atka : "Atk: 203",
        defa : "Def: 77",
        spatka : "Sp. Atk: 50",
        spdefa : "Sp. Def: 120",
        spda : "Spd: 67",
        move1a : "-Fake Out",
        move2a : "-Close Combat",
        move3a : "-Knock Off",
        move4a : "",

        nameb : "Primeape",
        levelb : "LV: 54",
        typeb : "Type: Fighting",
        abilityb: "Ability: Anger Point",
        itemb : "Item: None",
        hpb : "HP: 150",
        atkb : "Atk: 185",
        defb : "Def: 77",
        spatkb : "Sp. Atk: 69",
        spdefb : "Sp. Def: 88",
        spdb : "Spd: 158",
        move1b : "-Cross Chop",
        move2b : "-Outrage",
        move3b : "-Punishment",
        move4b : "-Pursuit",

        namec : "Bewear",
        levelc : "LV: 54",
        typec : "Type: Normal/Fighting",
        abilityc: "Ability: Fluffy",
        itemc : "Item: None",
        hpc : "HP: 210",
        atkc : "Atk: 209",
        defc : "Def: 142",
        spatkc : "Sp. Atk: 64",
        spdefc : "Sp. Def: 77",
        spdc : "Spd: 77",
        move1c : "-Hammer Arm",
        move2c : "-Brutal Swing",
        move3c : "",
        move4c : "",

        named : "Poliwrath",
        leveld : "LV: 54",
        typed : "Type: Water/Fighting",
        abilityd: "Ability: Water Absorb",
        itemd : "Item: None",
        hpd : "HP: 177",
        atkd : "Atk: 173",
        defd : "Def: 115",
        spatkd : "Sp. Atk: 79",
        spdefd : "Sp. Def: 152",
        spdd : "Spd: 88",
        move1d : "-Watefall",
        move2d : "-Submission",
        move3d : "",
        move4d : "",

        namee : "Crabominable",
        levele : "LV: 55",
        typee : "Type: Fighting/Ice",
        abilitye: "Ability: Iron Fist",
        iteme : "Item: Fightinium Z",
        hpe : "HP: 188",
        atke : "Atk: 221",
        defe : "Def: 141",
        spatke : "Sp. Atk: 81",
        spdefe : "Sp. Def: 95",
        spde : "Spd: 69",
        move1e : "-Ice Hammer",
        move2e : "-Close Combat",
        move3e : "",
        move4e : "",
    },

    {
        namea : "Relicanth",
        levela : "LV: 54",
        typea : "Type: Water/Rock",
        abilitya: "Ability: Swift Swim",
        itema : "Item: None",
        hpa : "HP: 188",
        atka : "Atk: 118",
        defa : "Def: 153",
        spatka : "Sp. Atk: 95",
        spdefa : "Sp. Def: 83",
        spda : "Spd: 115",
        move1a : "-Hydro Pump",
        move2a : "-Ancient Power",
        move3a : "-Yawn",
        move4a : "",

        nameb : "Carbink",
        levelb : "LV: 54",
        typeb : "Type: Rock/Fairy",
        abilityb: "Ability: Clear Body",
        itemb : "Item: None",
        hpb : "HP: 168",
        atkb : "Atk: 67",
        defb : "Def: 183",
        spatkb : "Sp. Atk: 67",
        spdefb : "Sp. Def: 217",
        spdb : "Spd: 67",
        move1b : "-Power Gem",
        move2b : "-Moonblast",
        move3b : "-Reflect",
        move4b : "",

        namec : "Golem (Alolan)",
        levelc : "LV: 54",
        typec : "Type: Rock/Electric",
        abilityc: "Ability: Sturdy",
        itemc : "Item: None",
        hpc : "HP: 201",
        atkc : "Atk: 142",
        defc : "Def: 196",
        spatkc : "Sp. Atk: 72",
        spdefc : "Sp. Def: 91",
        spdc : "Spd: 61",
        move1c : "-Thunder Punch",
        move2c : "-Rock Blast",
        move3c : "-Steamroller",
        move4c : "",

        named : "Probopass",
        leveld : "LV: 54",
        typed : "Type: Rock/Steel",
        abilityd: "Ability: Sturdy",
        itemd : "Item: None",
        hpd : "HP: 179",
        atkd : "Atk: 72",
        defd : "Def: 178",
        spatkd : "Sp. Atk: 94",
        spdefd : "Sp. Def: 217",
        spdd : "Spd: 56",
        move1d : "-Earth Power",
        move2d : "-Power Gem",
        move3d : "-Thunder Wave",
        move4d : "-Sandstorm",

        namee : "Lycanroc (Midnight)",
        levele : "LV: 55",
        typee : "Type: Rock",
        abilitye: "Ability: Keen Eye",
        iteme : "Item: Rockium Z",
        hpe : "HP: 210",
        atke : "Atk: 148",
        defe : "Def: 139",
        spatke : "Sp. Atk: 82",
        spdefe : "Sp. Def: 104",
        spde : "Spd: 112",
        move1e : "-Crunch",
        move2e : "-Stone Edge",
        move3e : "-Counter",
        move4e : "-Rock Climb",
    },

    {
        namea : "Sableye",
        levela : "LV: 54",
        typea : "Type: Dark/Ghost",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 134",
        atka : "Atk: 136",
        defa : "Def: 94",
        spatka : "Sp. Atk: 83",
        spdefa : "Sp. Def: 83",
        spda : "Spd: 109",
        move1a : "-Shadow Claw",
        move2a : "-Zen Headbutt",
        move3a : "-Confuse Ray",
        move4a : "-Fake Out",

        nameb : "Drifblim",
        levelb : "LV: 54",
        typeb : "Type: Ghost/Flying",
        abilityb: "Ability: Aftermath",
        itemb : "Item: None",
        hpb : "HP: 242",
        atkb : "Atk: 99",
        defb : "Def: 103",
        spatkb : "Sp. Atk: 110",
        spdefb : "Sp. Def: 114",
        spdb : "Spd: 99",
        move1b : "-Ominous Wind",
        move2b : "-Focus Energy",
        move3b : "-Amnesia",
        move4b : "-Baton Pass",

        namec : "Dhelmise",
        levelc : "LV: 54",
        typec : "Type: Ghost/Grass",
        abilityc: "Ability: Steelworker",
        itemc : "Item: None",
        hpc : "HP: 156",
        atkc : "Atk: 154",
        defc : "Def: 163",
        spatkc : "Sp. Atk: 105",
        spdefc : "Sp. Def: 152",
        spdc : "Spd: 56",
        move1c : "-Slam",
        move2c : "-Shadow Ball",
        move3c : "-Energy Ball",
        move4c : "-Whirlpool",

        named : "Froslass",
        leveld : "LV: 54",
        typed : "Type: Ice/Ghost",
        abilityd: "Ability: Snow Cloak",
        itemd : "Item: None",
        hpd : "HP: 156",
        atkd : "Atk: 99",
        defd : "Def: 88",
        spatkd : "Sp. Atk: 142",
        spdefd : "Sp. Def: 88",
        spdd : "Spd: 174",
        move1d : "-Blizzard",
        move2d : "-Shadow Ball",
        move3d : "-Confuse Ray",
        move4d : "-Ice Shard",

        namee : "Palossand",
        levele : "LV: 55",
        typee : "Type: Ghost/Ground",
        abilitye: "Ability: Water Compaction",
        iteme : "Item: Ghostium Z",
        hpe : "HP: 210",
        atke : "Atk: 104",
        defe : "Def: 143",
        spatke : "Sp. Atk: 166",
        spdefe : "Sp. Def: 104",
        spde : "Spd: 60",
        move1e : "-Shadow Ball",
        move2e : "-Earth Power",
        move3e : "-Giga Drain",
        move4e : "-Iron Defense",
    },

    {
        namea : "Skarmory",
        levela : "LV: 54",
        typea : "Type: Steel/Flying",
        abilitya: "Ability: Sturdy",
        itema : "Item: None",
        hpa : "HP: 142",
        atka : "Atk: 142",
        defa : "Def: 172",
        spatka : "Sp. Atk: 56",
        spdefa : "Sp. Def: 88",
        spda : "Spd: 131",
        move1a : "-Slash",
        move2a : "-Steel Wing",
        move3a : "-Feint",
        move4a : "-Spikes",

        nameb : "Crobat",
        levelb : "LV: 54",
        typeb : "Type: Poison/Flying",
        abilityb: "Ability: Inner Focus",
        itemb : "Item: None",
        hpb : "HP: 172",
        atkb : "Atk: 110",
        defb : "Def: 99",
        spatkb : "Sp. Atk: 131",
        spdefb : "Sp. Def: 99",
        spdb : "Spd: 196",
        move1b : "-Air Slash",
        move2b : "-Swift",
        move3b : "-Supersonic",
        move4b : "-Poison Fang",

        namec : "Oricorio (Baile)",
        levelc : "LV: 54",
        typec : "Type: Fire/Flying",
        abilityc: "Ability: Dancer",
        itemc : "Item: None",
        hpc : "HP: 161",
        atkc : "Atk: 88",
        defc : "Def: 88",
        spatkc : "Sp. Atk: 161",
        spdefc : "Sp. Def: 88",
        spdc : "Spd: 156",
        move1c : "-Revelation Dance",
        move2c : "-Teeter Dance",
        move3c : "-Air Slash",
        move4c : "-Feather Dance",

        named : "Mandibuzz",
        leveld : "LV: 54",
        typed : "Type: Dark/Flying",
        abilityd: "Ability: Big Pecks",
        itemd : "Item: None",
        hpd : "HP: 199",
        atkd : "Atk: 83",
        defd : "Def: 169",
        spatkd : "Sp. Atk: 72",
        spdefd : "Sp. Def: 158",
        spdd : "Spd: 99",
        move1d : "-Bone Rush",
        move2d : "-Brave Bird",
        move3d : "-Punishment",
        move4d : "-Flatter",

        namee : "Toucannon",
        levele : "LV: 55",
        typee : "Type: Normal/Flying",
        abilitye: "Ability: Skill Link",
        iteme : "Item: Flyinium Z",
        hpe : "HP: 170",
        atke : "Atk: 188",
        defe : "Def: 104",
        spatke : "Sp. Atk: 104",
        spdefe : "Sp. Def: 104",
        spde : "Spd: 122",
        move1e : "-Bullet Seed",
        move2e : "-Rock Blast",
        move3e : "-Beak Blast",
        move4e : "-Screech",
    },

    {
        namea : "Lycanroc (Midday)",
        levela : "LV: 57",
        typea : "Type: Rock",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 170",
        atka : "Atk: 189",
        defa : "Def: 96",
        spatka : "Sp. Atk: 76",
        spdefa : "Sp. Def: 87",
        spda : "Spd: 186",
        move1a : "-Stone Edge",
        move2a : "-Accelrock",
        move3a : "-Crunch",
        move4a : "-Stealth Rock",

        nameb : "Ninetales (Alolan)",
        levelb : "LV: 56",
        typeb : "Type: Ice/Fairy",
        abilityb: "Ability: Snow Cloak",
        itemb : "Item: None",
        hpb : "HP: 165",
        atkb : "Atk: 88",
        defb : "Def: 97",
        spatkb : "Sp. Atk: 148",
        spdefb : "Sp. Def: 134",
        spdb : "Spd: 179",
        move1b : "-Dazzling Gleam",
        move2b : "-Blizzard",
        move3b : "-Ice Shard",
        move4b : "-Safeguard",

        namec : "Braviary",
        levelc : "LV: 56",
        typec : "Type: Normal/Flying",
        abilityc: "Ability: Keen Eye",
        itemc : "Item: None",
        hpc : "HP: 230",
        atkc : "Atk: 151",
        defc : "Def: 106",
        spatkc : "Sp. Atk: 77",
        spdefc : "Sp. Def: 106",
        spdc : "Spd: 147",
        move1c : "-Crush Claw",
        move2c : "-Brave Bird",
        move3c : "-Tailwind",
        move4c : "-Whirlwind",

        named : "Magnezone",
        leveld : "LV: 56",
        typed : "Type: Electric/Steel",
        abilityd: "Ability: Sturdy",
        itemd : "Item: None",
        hpd : "HP: 197",
        atkd : "Atk: 91",
        defd : "Def: 151",
        spatkd : "Sp. Atk: 203",
        spdefd : "Sp. Def: 123",
        spdd : "Spd: 80",
        move1d : "-Thunderbolt",
        move2d : "-Flash Cannon",
        move3d : "-Thunder Wave",
        move4d : "-Mirror Coat",

        namee : "Snorlax",
        levele : "LV: 56",
        typee : "Type: Normal",
        abilitye: "Ability: Thick Fat",
        iteme : "Item: None",
        hpe : "HP: 297",
        atke : "Atk: 136",
        defe : "Def: 95",
        spatke : "Sp. Atk: 86",
        spdefe : "Sp. Def: 180",
        spde : "Spd: 47",
        move1e : "-Body Slam",
        move2e : "-Crunch",
        move3e : "-Heavy Slam",
        move4e : "-High Horsepower",

        namef : "Decidueye",
        levelf : "LV: 58",
        typef : "Type: Grass/Ghost",
        abilityf: "Ability: Overgrow",
        itemf : "Item: Grassium Z",
        hpf : "HP: 176",
        atkf : "Atk: 183",
        deff : "Def: 109",
        spatkf : "Sp. Atk: 138",
        spdeff : "Sp. Def: 138",
        spdf : "Spd: 140",
        move1f : "-Spirit Shackle",
        move2f : "-Leaf Blade",
        move3f : "-Brave Bird",
        move4f : "-Sucker Punch",
    },

    {
        namea : "Lycanroc (Midday)",
        levela : "LV: 57",
        typea : "Type: Rock",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 170",
        atka : "Atk: 189",
        defa : "Def: 96",
        spatka : "Sp. Atk: 76",
        spdefa : "Sp. Def: 87",
        spda : "Spd: 186",
        move1a : "-Stone Edge",
        move2a : "-Accelrock",
        move3a : "-Crunch",
        move4a : "-Stealth Rock",

        nameb : "Ninetales (Alolan)",
        levelb : "LV: 56",
        typeb : "Type: Ice/Fairy",
        abilityb: "Ability: Snow Cloak",
        itemb : "Item: None",
        hpb : "HP: 165",
        atkb : "Atk: 88",
        defb : "Def: 97",
        spatkb : "Sp. Atk: 148",
        spdefb : "Sp. Def: 134",
        spdb : "Spd: 179",
        move1b : "-Dazzling Gleam",
        move2b : "-Blizzard",
        move3b : "-Ice Shard",
        move4b : "-Safeguard",

        namec : "Braviary",
        levelc : "LV: 56",
        typec : "Type: Normal/Flying",
        abilityc: "Ability: Keen Eye",
        itemc : "Item: None",
        hpc : "HP: 230",
        atkc : "Atk: 151",
        defc : "Def: 106",
        spatkc : "Sp. Atk: 77",
        spdefc : "Sp. Def: 106",
        spdc : "Spd: 147",
        move1c : "-Crush Claw",
        move2c : "-Brave Bird",
        move3c : "-Tailwind",
        move4c : "-Whirlwind",

        named : "Magnezone",
        leveld : "LV: 56",
        typed : "Type: Electric/Steel",
        abilityd: "Ability: Sturdy",
        itemd : "Item: None",
        hpd : "HP: 197",
        atkd : "Atk: 91",
        defd : "Def: 151",
        spatkd : "Sp. Atk: 203",
        spdefd : "Sp. Def: 123",
        spdd : "Spd: 80",
        move1d : "-Thunderbolt",
        move2d : "-Flash Cannon",
        move3d : "-Thunder Wave",
        move4d : "-Mirror Coat",

        namee : "Snorlax",
        levele : "LV: 56",
        typee : "Type: Normal",
        abilitye: "Ability: Thick Fat",
        iteme : "Item: None",
        hpe : "HP: 297",
        atke : "Atk: 136",
        defe : "Def: 95",
        spatke : "Sp. Atk: 86",
        spdefe : "Sp. Def: 180",
        spde : "Spd: 47",
        move1e : "-Body Slam",
        move2e : "-Crunch",
        move3e : "-Heavy Slam",
        move4e : "-High Horsepower",

        namef : "Incineroar",
        levelf : "LV: 58",
        typef : "Type: Fire/Dark",
        abilityf: "Ability: Blaze",
        itemf : "Item: Firium Z",
        hpf : "HP: 232",
        atkf : "Atk: 192",
        deff : "Def: 127",
        spatkf : "Sp. Atk: 115",
        spdeff : "Sp. Def: 127",
        spdf : "Spd: 92",
        move1f : "-Darkest Lariat",
        move2f : "-Flare Blitz",
        move3f : "-Outrage",
        move4f : "-Cross Chop",
    },

    {
        namea : "Lycanroc (Midday)",
        levela : "LV: 57",
        typea : "Type: Rock",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 170",
        atka : "Atk: 189",
        defa : "Def: 96",
        spatka : "Sp. Atk: 76",
        spdefa : "Sp. Def: 87",
        spda : "Spd: 186",
        move1a : "-Stone Edge",
        move2a : "-Accelrock",
        move3a : "-Crunch",
        move4a : "-Stealth Rock",

        nameb : "Ninetales (Alolan)",
        levelb : "LV: 56",
        typeb : "Type: Ice/Fairy",
        abilityb: "Ability: Snow Cloak",
        itemb : "Item: None",
        hpb : "HP: 165",
        atkb : "Atk: 88",
        defb : "Def: 97",
        spatkb : "Sp. Atk: 148",
        spdefb : "Sp. Def: 134",
        spdb : "Spd: 179",
        move1b : "-Dazzling Gleam",
        move2b : "-Blizzard",
        move3b : "-Ice Shard",
        move4b : "-Safeguard",

        namec : "Braviary",
        levelc : "LV: 56",
        typec : "Type: Normal/Flying",
        abilityc: "Ability: Keen Eye",
        itemc : "Item: None",
        hpc : "HP: 230",
        atkc : "Atk: 151",
        defc : "Def: 106",
        spatkc : "Sp. Atk: 77",
        spdefc : "Sp. Def: 106",
        spdc : "Spd: 147",
        move1c : "-Crush Claw",
        move2c : "-Brave Bird",
        move3c : "-Tailwind",
        move4c : "-Whirlwind",

        named : "Magnezone",
        leveld : "LV: 56",
        typed : "Type: Electric/Steel",
        abilityd: "Ability: Sturdy",
        itemd : "Item: None",
        hpd : "HP: 197",
        atkd : "Atk: 91",
        defd : "Def: 151",
        spatkd : "Sp. Atk: 203",
        spdefd : "Sp. Def: 123",
        spdd : "Spd: 80",
        move1d : "-Thunderbolt",
        move2d : "-Flash Cannon",
        move3d : "-Thunder Wave",
        move4d : "-Mirror Coat",

        namee : "Snorlax",
        levele : "LV: 56",
        typee : "Type: Normal",
        abilitye: "Ability: Thick Fat",
        iteme : "Item: None",
        hpe : "HP: 297",
        atke : "Atk: 136",
        defe : "Def: 95",
        spatke : "Sp. Atk: 86",
        spdefe : "Sp. Def: 180",
        spde : "Spd: 47",
        move1e : "-Body Slam",
        move2e : "-Crunch",
        move3e : "-Heavy Slam",
        move4e : "-High Horsepower",

        namef : "Primarina",
        levelf : "LV: 58",
        typef : "Type: Water/Fairy",
        abilityf: "Ability: Torrent",
        itemf : "Item: Waterium Z",
        hpf : "HP: 178",
        atkf : "Atk: 108",
        deff : "Def: 108",
        spatkf : "Sp. Atk: 205",
        spdeff : "Sp. Def: 194",
        spdf : "Spd: 92",
        move1f : "-Sparkling Aria",
        move2f : "-Moonblast",
        move3f : "-Aqua Jet",
        move4f : "-Hyper Voice",
    },
]

function displaySMTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showSMImages(newTrainerId);
        showPokemonSMImages(newTrainerId);
    }


    let smTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = sm_trainers [smTrainer].namea;
    document.querySelector('#level1').textContent = sm_trainers [smTrainer].levela;
    document.querySelector('#type1').textContent = sm_trainers [smTrainer].typea;
    document.querySelector('#ability1').textContent= sm_trainers [smTrainer].abilitya;
    document.querySelector('#item1').textContent = sm_trainers [smTrainer].itema;
    document.querySelector('#hp1').textContent = sm_trainers [smTrainer].hpa;
    document.querySelector('#atk1').textContent = sm_trainers [smTrainer].atka;
    document.querySelector('#def1').textContent = sm_trainers [smTrainer].defa;
    document.querySelector('#spatk1').textContent = sm_trainers [smTrainer].spatka;
    document.querySelector('#spdef1').textContent = sm_trainers [smTrainer].spdefa;
    document.querySelector('#spd1').textContent = sm_trainers [smTrainer].spda;
    document.querySelector('#move1_1').textContent = sm_trainers [smTrainer].move1a;
    document.querySelector('#move2_1').textContent = sm_trainers [smTrainer].move2a;
    document.querySelector('#move3_1').textContent = sm_trainers [smTrainer].move3a;
    document.querySelector('#move4_1').textContent = sm_trainers [smTrainer].move4a;

    
    document.querySelector('#name2').textContent = sm_trainers [smTrainer].nameb;
    document.querySelector('#level2').textContent = sm_trainers [smTrainer].levelb;
    document.querySelector('#type2').textContent = sm_trainers [smTrainer].typeb;
    document.querySelector('#ability2').textContent= sm_trainers [smTrainer].abilityb;
    document.querySelector('#item2').textContent = sm_trainers [smTrainer].itemb;
    document.querySelector('#hp2').textContent = sm_trainers [smTrainer].hpb;
    document.querySelector('#atk2').textContent = sm_trainers [smTrainer].atkb;
    document.querySelector('#def2').textContent = sm_trainers [smTrainer].defb;
    document.querySelector('#spatk2').textContent = sm_trainers [smTrainer].spatkb;
    document.querySelector('#spdef2').textContent = sm_trainers [smTrainer].spdefb;
    document.querySelector('#spd2').textContent = sm_trainers [smTrainer].spdb;
    document.querySelector('#move1_2').textContent = sm_trainers [smTrainer].move1b;
    document.querySelector('#move2_2').textContent = sm_trainers [smTrainer].move2b;
    document.querySelector('#move3_2').textContent = sm_trainers [smTrainer].move3b;
    document.querySelector('#move4_2').textContent = sm_trainers [smTrainer].move4b;

    document.querySelector('#name3').textContent = sm_trainers [smTrainer].namec;
    document.querySelector('#level3').textContent = sm_trainers [smTrainer].levelc;
    document.querySelector('#type3').textContent = sm_trainers [smTrainer].typec;
    document.querySelector('#ability3').textContent= sm_trainers [smTrainer].abilityc;
    document.querySelector('#item3').textContent = sm_trainers [smTrainer].itemc;
    document.querySelector('#hp3').textContent = sm_trainers [smTrainer].hpc;
    document.querySelector('#atk3').textContent = sm_trainers [smTrainer].atkc;
    document.querySelector('#def3').textContent = sm_trainers [smTrainer].defc;
    document.querySelector('#spatk3').textContent = sm_trainers [smTrainer].spatkc;
    document.querySelector('#spdef3').textContent = sm_trainers [smTrainer].spdefc;
    document.querySelector('#spd3').textContent = sm_trainers [smTrainer].spdc;
    document.querySelector('#move1_3').textContent = sm_trainers [smTrainer].move1c;
    document.querySelector('#move2_3').textContent = sm_trainers [smTrainer].move2c;
    document.querySelector('#move3_3').textContent = sm_trainers [smTrainer].move3c;
    document.querySelector('#move4_3').textContent = sm_trainers [smTrainer].move4c;

    document.querySelector('#name4').textContent = sm_trainers [smTrainer].named;
    document.querySelector('#level4').textContent = sm_trainers [smTrainer].leveld;
    document.querySelector('#type4').textContent = sm_trainers [smTrainer].typed;
    document.querySelector('#ability4').textContent= sm_trainers [smTrainer].abilityd;
    document.querySelector('#item4').textContent = sm_trainers [smTrainer].itemd;
    document.querySelector('#hp4').textContent = sm_trainers [smTrainer].hpd;
    document.querySelector('#atk4').textContent = sm_trainers [smTrainer].atkd;
    document.querySelector('#def4').textContent = sm_trainers [smTrainer].defd;
    document.querySelector('#spatk4').textContent = sm_trainers [smTrainer].spatkd;
    document.querySelector('#spdef4').textContent = sm_trainers [smTrainer].spdefd;
    document.querySelector('#spd4').textContent = sm_trainers [smTrainer].spdd;
    document.querySelector('#move1_4').textContent = sm_trainers [smTrainer].move1d;
    document.querySelector('#move2_4').textContent = sm_trainers [smTrainer].move2d;
    document.querySelector('#move3_4').textContent = sm_trainers [smTrainer].move3d;
    document.querySelector('#move4_4').textContent = sm_trainers [smTrainer].move4d;

    document.querySelector('#name5').textContent = sm_trainers [smTrainer].namee;
    document.querySelector('#level5').textContent = sm_trainers [smTrainer].levele;
    document.querySelector('#type5').textContent = sm_trainers [smTrainer].typee;
    document.querySelector('#ability5').textContent= sm_trainers [smTrainer].abilitye;
    document.querySelector('#item5').textContent = sm_trainers [smTrainer].iteme;
    document.querySelector('#hp5').textContent = sm_trainers [smTrainer].hpe;
    document.querySelector('#atk5').textContent = sm_trainers [smTrainer].atke;
    document.querySelector('#def5').textContent = sm_trainers [smTrainer].defe;
    document.querySelector('#spatk5').textContent = sm_trainers [smTrainer].spatke;
    document.querySelector('#spdef5').textContent = sm_trainers [smTrainer].spdefe;
    document.querySelector('#spd5').textContent = sm_trainers [smTrainer].spde;
    document.querySelector('#move1_5').textContent = sm_trainers [smTrainer].move1e;
    document.querySelector('#move2_5').textContent = sm_trainers [smTrainer].move2e;
    document.querySelector('#move3_5').textContent = sm_trainers [smTrainer].move3e;
    document.querySelector('#move4_5').textContent = sm_trainers [smTrainer].move4e;

    document.querySelector('#name6').textContent = sm_trainers [smTrainer].namef;
    document.querySelector('#level6').textContent = sm_trainers [smTrainer].levelf;
    document.querySelector('#type6').textContent = sm_trainers [smTrainer].typef;
    document.querySelector('#ability6').textContent= sm_trainers [smTrainer].abilityf;
    document.querySelector('#item6').textContent = sm_trainers [smTrainer].itemf;
    document.querySelector('#hp6').textContent = sm_trainers [smTrainer].hpf;
    document.querySelector('#atk6').textContent = sm_trainers [smTrainer].atkf;
    document.querySelector('#def6').textContent = sm_trainers [smTrainer].deff;
    document.querySelector('#spatk6').textContent = sm_trainers [smTrainer].spatkf;
    document.querySelector('#spdef6').textContent = sm_trainers [smTrainer].spdeff;
    document.querySelector('#spd6').textContent = sm_trainers [smTrainer].spdf;
    document.querySelector('#move1_6').textContent = sm_trainers [smTrainer].move1f;
    document.querySelector('#move2_6').textContent = sm_trainers [smTrainer].move2f;
    document.querySelector('#move3_6').textContent = sm_trainers [smTrainer].move3f;
    document.querySelector('#move4_6').textContent = sm_trainers [smTrainer].move4f;
}

function showSMImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/sm/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonSMImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/sm/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/sm/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/sm/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/sm/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/sm/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/sm/" + trainerId + "_6.png";
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

    refCredit.textContent = "SCIRESM"
    refCredit.href = "https://pastebin.com/vkaZNTra"
}

halaSM.addEventListener('click', displaySMTrainers);
oliviaSM.addEventListener('click', displaySMTrainers);
guzmaSHSM.addEventListener('click', displaySMTrainers);
nanuSM.addEventListener('click', displaySMTrainers);
guzmaAHSM.addEventListener('click', displaySMTrainers);
lusamineSM.addEventListener('click', displaySMTrainers);
hapuSM.addEventListener('click', displaySMTrainers);
motherbeastSM.addEventListener('click', displaySMTrainers);
gladionGSM.addEventListener('click', displaySMTrainers);
gladionFSM.addEventListener('click', displaySMTrainers);
gladionWSM.addEventListener('click', displaySMTrainers);
halaE4SM.addEventListener('click', displaySMTrainers);
oliviaE4SM.addEventListener('click', displaySMTrainers);
acerolaSM.addEventListener('click', displaySMTrainers);
kahiliSM.addEventListener('click', displaySMTrainers);
kukuiGSM.addEventListener('click', displaySMTrainers);
kukuiFSM.addEventListener('click', displaySMTrainers);
kukuiWSM.addEventListener('click', displaySMTrainers);