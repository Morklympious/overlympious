const statuses = [
    "...AT LEAST YOU'RE NOT ON HOLD. FUCK BEING ON HOLD",
    "A KISS IS LIKE A FIGHT WITH YOUR MOUTHS. THINK ABOUT THAT THOUGH.",
    "AS IF YOU'RE GONNA READ EVERY ONE OF THESE MESSAGES. AS IF.",
    "ARGUING WITH SOMEONE IN CHAT VIA WHISPERS",
    "ASSEMBLING THE WORLDS MOST ANNOYING WOODEN KAZOO",
    "AT SOME POINT I'M JUST GOING TO TURN THESE MESSAGES INTO A MARKOV BOT",
    "BECOMING INCREASINGLY, BEGRUDGINGLY LOST IN THE SAUCE",
    "CHUGGING EVERY SINGLE SYRUP I HAVE. EVEN THE OLD ONES",
    "CLEANING CANS OFF OF THE OL' DESK",
    "COMPLETING MY 3 HOUR MONSTER ENERGY SOMMOLIER COURSE",
    "COUNTING PRIMES. BACKWARDS. SKIPPING EVERY OTHER PRIME. GET ON MY LEVEL.",
    "CALLING WARLORD SCHOOL AND PULLING KROM OUT OF WARLORD CLASS EARLY",
    "CONCOCTING ANOTHER HONEY-SRIRACHA OREO TYPE FOOD CRIME",
    "DEADLIFTING 7000LBS IN PREPARATION FOR STREAM",
    "DECIDING TO MAKE COFFEE FOR JOY OR NOT",
    "DESTROYING MY OBS SETUP PRE-STREAM",
    "DON'T PANIC. JUST FUCKING WAIT. JESUS. GOD DAMN.",
    "EXPLODING SHOCKERS, SHOCKING EXPLODERS, YOU KNOW. STREAMER STUFF.",
    "FINDING OUT HOW I'M GOING TO WORK THE GODDAMN KAZOO INTO THE STREAM TODAY",
    "FINDING OUT THE PROPER SKILL-TO-SHENANIGANS RATIO FOR TODAY",
    "GETTING HARD. STAYING HARD. MORTAL SHELL. FEELING WELL.",
    "FUCKING HELL I LOVE FISHING",
    "I AM A FISHING GOD. DON'T ASK ME HOW",
    "IF I YELL AT YOU, ITS JUST THE WAY I COMMUNICATE",
    "HOPPING ON THE FUCK TRUCK AND BARRELLING STRAIGHT INTO POUND TOWN (PLATONIC)",
    "I'M BUSY PLAYING BOLVER, JUST ONE MORE GAME, HANG ON",
    "I AM SUMMONING THE ENERGY TO BRING YOU THE CONTENT",
    "I AM ONCE AGAIN ASKING YOU TO USE YOUR PRIME SUB ON CREATORS YOU LOVE",
    "JUST COUNT TO 10 AND THEN DO IT AGAIN. COUNT TO 400 I DONT GIVE A SHIT. JUST CHILL.",
    "KROM STOLE MY PROCESSOR AND HES TRYING TO EAT IT, BRB",
    "KROM IS LITERALLY CRAWLING INTO MY PC LIKE A CAT, HOLD ON",
    "LAST-MINUTE EDITING MY LATEST YOUTUBE VIDEO (FOR FIVE YEARS)",
    "LOADING THOSE HIGH POLY, LIFELIKE TEXTURES",
    "MEDITATING UNTIL MY BRAIN VIBRATES INTO MY FEET",
    "MENTALLY GETTING FUCKED ON BY THE CONTENT I NEED TO BRING YOU",
    "POOP NAPPING LIKE SOME KIND OF POOP NAPPER",
    "PLEASE THANK THE MODS FOR KEEPING YOU FUCKERS HONEST",
    "PONDERING THE ORB FOR CONTENT CREATION",
    "PRE-CALCULATING HOW MANY TIMES I CAN SAY WELL WELL WELL TODAY",
    "SETTING THE FUCK UP, OKAY? DAMN. ITS LIKE YOU WANT ME TO START NOW",
    "STUDYING KEY WIKIPEDIA ARTICLES",
    "SCROLLING TWITTER FOR MEMES TO STEAL",
    "LAMENTING THE LACK OF SOLID ASS BROTHERGRAMS. BROTHERGRAMS ABOUT SOLID ASS.",
    "THE STREAMER™ WILL BE GIVING YOU YOUR CONTENT™ SOON™.",
    "HAVE I EVER TOLD YOU THE TALE OF DARTH PLAGUEIS THE WISE?",
    "IVE BEEN CHUGGING SYRUP AND SCREAMING AT THE KIDS OUTSIDE MY ROOM. IM ALMOST READY.",
    "TAKE THIS TIME TO REFLECT ON WHY YOURE HERE AND WHAT YOU'VE DONE. (PUNITIVE)",
    "TAKING A BATH IN ALL THE PINS I KEEP BUYING. ITS NOT A PROBLEM... I THINK",
    "TODAYS BROTHERGRAMS BROUGHT TO YOU BY \"100% SOULS BROTHERGRAM\". FUCK.",
    "I JUST SPILLED ROOT BEER. LIKE FOUR CANS OF IT. GIMME A SEC.",
    "LOCATING MORE ETHICALLY SOURCED SINGLE ORIGIN MARC-TO-MORK VIDEOS",
    "Y'ALL REMEMBER ANIMORPHS?",
    "I DON'T THINK I'VE OWNED A HAIRBRUSH FOR LIKE... YEARS.",
];


const OCTOBER = [
    "SPOOKY SCARY MORK IS SWIGGITY SWOOTY SWINGIN HIS BOOTY",
    "SKELETONS. WITCHES. CAULDRONS. FUCK. SHIT. PISS. BONES.",
    "WELCOME TO THE BONE ZONE, FOR STREAMING. BONING. STREAM-BONING.",
    "IM MORKLYMPI S. PUMPKINS, AND IM HERE TO SCARE THE HELL OUT OF YOU",
    "GET YOUR SHOVEL. GET YOUR TRUCK. WE ARE GONNA DIG GRAVES",
    "HERE LIES LIGMA JOHNSON, HE DIED FROM AN OVERDOSE OF MINDGOBLIN",
    "YOU EVER JUST SUCK THE SOUL OUT OF ANOTHER MAN? THATS REAPER STUFF.",
    "INTRODUCING: THE BONESLURPER™, A NEW ELDRITCH HORROR DESIGNED BY KROM",
];

const NOVEMBER = [
    "So I guess Turkey happened this month. I don't give a shit. but yeah.",
    "Turkey is a shit-tier bird to eat for Thanksgiving. I don't like it.",
];

const DECEMBER = [
    "ITS BEGINNING TO LOOK A LOT LIKE MORKSMAS",
    "JINGLE BELL JINGLE BELL JINGLE BELL MORK",
    "IM DREAMING OF MORK SLAMMING DOWN MY CHIMNEY AND SCREAMING 'WELL WELL WELL'",
    "REMEMBER TO LEAVE MORK AND COOKIES OUT FOR SANTA KROMS",
    "THIS IS ONE FUCKING CONTENT CREATOR THATS SHITTING, PISSING, AND OOZING CRIMMINS SPIRIT",
    "KROM JUST CHUGGED TOO MUCH EGG NOG AND HE WONT STOP BURPING. ONE SECOND",
    "THINKING ABOUT PUTTING UP A TREE AND THEN JUST... LEAVING IT ALL YEAR.",
    "ENJOYING SOME OF KROM MOMS FRESHLY BAKED HOLIDAY KROOKIES",
    "KROM WONT STOP TRYING TO 'HUNT' SANTA. GOD DAMMIT",
    "YOU KNOW WHAT THE HOLIDAYS NEED MORE OF? SKELETONS. BONE-LADS.",
    "FLIPPING THROUGH THE NORDIC CHAINSAW CATALOG, KROM WANTS A CHAINSAW",
    "CAN YOU BELIEVE THIS IS A HOLIDAY STATUS THAT'S JUST MIXED IN WITH THE OTHERS?",
    "THIS IS A STATUS THAT ONLY SHOWS UP IN DECEMBER. IM A LEGEND.",
    "I FUCKING DARE YOU. SLAM AN ENTIRE FRUITCAKE. EMBRACE THE HOLIDAY SPIRIT YOU CLOWN",
    "HERE, HAVE A TREE. FUCK IT, HAVE FIVE 🎄🎄🎄🎄🎄",
    "WELCOME TO THE MORKLYMPIOUS TREE CUTTING HOT COCOA FUCKFEST EXTRAVAGANZA",
];

const JANUARY = [
    "CAN YOU BELIEVE IT'S MY FUCKING BIRTH-MONTH",
    "ITS JANUARY. ITS A FRESH YEAR. THE YEAR OF OUR MORK [REDACTED]",
];


const map = {
    JAN : [ ...statuses, ...JANUARY ],
    FEB : [ ...statuses ],
    MAR : [ ...statuses ],
    APR : [ ...statuses ],
    MAY : [ ...statuses ],
    JUN : [ ...statuses ],
    JUL : [ ...statuses ],
    AUG : [ ...statuses ],
    SEP : [ ...statuses ],
    OCT : [ ...statuses, ...OCTOBER ],
    NOV : [ ...statuses, ...NOVEMBER ],
    DEC : [ ...statuses, ...DECEMBER ],
};

const month = new Date().toLocaleString("default", { month : "short" });

export default map[month.toUpperCase()];
