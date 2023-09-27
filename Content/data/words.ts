// NOTE .
// For dictinary 6 words min  in one group
// For lessons 4 choices min in each verb

// TODO .
// give;

// love?, hate, need, prefer, want, realise, suppose, mean, believe, remember, belong, contain, consist, seem.

// pronoun: he, she, it, they
// verb: (action, state, or occurrence) Example: run, sleep, eat
// noun: dog, city, love
// article: the, a, an
// numeral: one, three, hundred
// adjective: big, happy, blue
// adverb: quickly, very, here
// preposition: in, on, at, under
// conjunction: and, but, or, because
// interjection: wow, oh, hurray
// determiner: the, a, this, some

// check
// hide, install, move, repair, sell, wash, swim, let, wait, expect, yell, spend, reply, suggest, listen, fall, decide, join
const verbsA = {
  study: {
    value0: 'study',
    value1: 'studies',
    value2: 'studied',
    value3: 'studied',
    ving: 'studying',
    pronoun: false,
    qw: ['what', 'where', 'why', 'how'],
  },
  // work: {
  //   value0: "work",
  //   value1: "works",
  //   value2: "worked",
  //   value3: "worked",
  //   ving: "working",
  // },
  love: {
    value0: 'love',
    value1: 'loves',
    value2: 'loved',
    value3: 'loved',
    // ving: "loving",
    pronoun: true,
    qw: ['what', 'why', 'how'],
  },
  come: {
    value0: 'come',
    value1: 'comes',
    value2: 'came',
    value3: 'come',
    ving: 'coming',
    qw: ['why', 'how', 'when'],
  },
  // go: {
  //   value0: "go",
  //   value1: "goes",
  //   value2: "went",
  //   value3: "gone",
  //   ving: "going",
  // },

  // live: {
  //   value0: "live",
  //   value1: "lives",
  //   value2: "lived",
  //   value3: "lived",
  //   ving: "living",
  // },
  open: {
    value0: 'open',
    value1: 'opens',
    value2: 'opened',
    value3: 'opened',
    ving: 'opening',
    pronoun: false,
    qw: ['what', 'why', 'how', 'when'],
  },
  close: {
    value0: 'close',
    value1: 'closes',
    value2: 'closed',
    value3: 'closed',
    ving: 'closing',
    pronoun: false,
    qw: ['what', 'why', 'how', 'when'],
  },
  drink: {
    value0: 'drink',
    value1: 'drinks',
    value2: 'drank',
    value3: 'drunk',
    ving: 'drinking',
    pronoun: false,
    qw: ['what', 'where', 'why', 'when'],
  },
  eat: {
    value0: 'eat',
    value1: 'eats',
    value2: 'ate',
    value3: 'eaten',
    ving: 'eating',
    pronoun: false,
    qw: ['what', 'where', 'why', 'when'],
  },
  // feel: {
  //   value0: "feel",
  //   value1: "feels",
  //   value2: "felt",
  //   value3: "felt",
  //   ving: "feeling",
  // },
  // fly: {
  //   value0: "fly",
  //   value1: "flies",
  //   value2: "flew",
  //   value3: "flown",
  //   ving: "flying",
  // },
  give: {
    value0: 'give',
    value1: 'gives',
    value2: 'gave',
    value3: 'given',
    ving: 'giving',
    pronoun: true,
    qw: ['what', 'why', 'when'],
  },
  ask: {
    value0: 'ask',
    value1: 'asks',
    value2: 'asked',
    value3: 'asked',
    ving: 'asking',
    pronoun: true,
    qw: ['what', 'why', 'how', 'when'],
  },
  jump: {
    value0: 'jump',
    value1: 'jumps',
    value2: 'jumped',
    value3: 'jumped',
    ving: 'jumping',
    pronoun: false,
    qw: ['why', 'how', 'when', 'where'],
  },
  // answer: {
  //   value0: "answer",
  //   value1: "answers",
  //   value2: "answered",
  //   value3: "answered",
  //   ving: "answering",
  // pronoun: true,
  // },
  // take: {
  //   value0: "take",
  //   value1: "takes",
  //   value2: "took",
  //   value3: "taken",
  //   ving: "taking",
  // },
  pay: {
    value0: 'pay',
    value1: 'pays',
    value2: 'paid',
    value3: 'paid',
    ving: 'paying',
    pronoun: true,
    qw: ['why', 'when'],
  },
  sleep: {
    value0: 'sleep',
    value1: 'sleeps',
    value2: 'slept',
    value3: 'slept',
    ving: 'sleeping',
    pronoun: false,
    qw: ['where', 'why', 'how', 'when'],
  },
  // speak: {
  //   value0: "speak",
  //   value1: "speaks",
  //   value2: "spoke",
  //   value3: "spoken",
  //   ving: "speaking",
  // },
  think: {
    value0: 'think',
    value1: 'thinks',
    value2: 'thought',
    value3: 'thought',
    ving: 'thinking',
    pronoun: false,
    qw: ['what', 'why', 'how'],
  },
  // tell: {
  //   value0: "tell",
  //   value1: "tells",
  //   value2: "told",
  //   value3: "told",
  //   ving: "telling",
  // pronoun: true,
  // },
  // leave: {
  //   value0: "leave",
  //   value1: "leaves",
  //   value2: "left",
  //   value3: "left",
  //   ving: "leaving",
  // pronoun: true,
  // },
  // put: {
  //   value0: "put",
  //   value1: "puts",
  //   value2: "put",
  //   value3: "put",
  //   ving: "putting",
  // },
  // write: {
  //   value0: "write",
  //   value1: "writes",
  //   value2: "wrote",
  //   value3: "written",
  //   ving: "writing",
  // pronoun: true,
  // },
  stand: {
    value0: 'stand',
    value1: 'stands',
    value2: 'stood',
    value3: 'stood',
    ving: 'standing',
    pronoun: false,
    qw: ['where', 'why'],
  },
  run: {
    value0: 'run',
    value1: 'runs',
    value2: 'ran',
    value3: 'run',
    ving: 'running',
    pronoun: false,
    qw: ['where', 'why'],
  },
  sit: {
    value0: 'sit',
    value1: 'sits',
    value2: 'sat',
    value3: 'sat',
    ving: 'sitting',
    pronoun: false,
    qw: ['where', 'why'],
  },
  dance: {
    value0: 'dance',
    value1: 'dances',
    value2: 'danced',
    value3: 'danced',
    ving: 'dancing',
    pronoun: false,
    qw: ['where', 'why', 'how'],
  },
  walk: {
    value0: 'walk',
    value1: 'walks',
    value2: 'walked',
    value3: 'walked',
    ving: 'walking',
    pronoun: false,
    qw: ['where', 'why'],
  },
  fall: {
    value0: 'fall',
    value1: 'falls',
    value2: 'fell',
    value3: 'fallen',
    ving: 'falling',
    pronoun: false,
    qw: ['where', 'why'],
  },
  read: {
    value0: 'read',
    value1: 'reads',
    value2: 'read ',
    value3: 'read ',
    ving: 'reading',
    pronoun: false,
    qw: ['what', 'why'],
  },
  // send: {
  //   value0: "send",
  //   value1: "sends",
  //   value2: "sent",
  //   value3: "sent",
  //   ving: "sending",
  // },
  // talk: {
  //   value0: "talk",
  //   value1: "",
  //   value2: "",
  //   value3: "",
  //   ving: "talking",
  // },
  // have: {
  //   value0: "have",
  //   value1: "",
  //   value2: "",
  //   value3: "",
  //   ving: "",
  // },
  // play: {
  //   value0: "play",
  //   value1: "",
  //   value2: "",
  //   value3: "",
  //   ving: "",
  // },
  // cook: {
  //   value0: "cook",
  //   value1: "",
  //   value2: "",
  //   value3: "",
  //   ving: "",
  // },
  // bake: {
  //   value0: "bake",
  //   value1: "",
  //   value2: "",
  //   value3: "",
  //   ving: "",
  // },
  // stop: {
  //   value0: "stop",
  //   value1: "",
  //   value2: "",
  //   value3: "",
  //   ving: "",
  // },
  // seek: {
  //   value0: "seek",
  //   value1: "",
  //   value2: "",
  //   value3: "",
  //   ving: "",
  // },
  // look: {
  //   value0: "look",
  //   value1: "looks",
  //   value2: "looked",
  //   value3: "looked",
  //   ving: "looking",
  // },
  // break: {
  //   value0: "break",
  //   value1: "breaks",
  //   value2: "broke",
  //   value3: "broken",
  //   ving: "breaking",
  // },
  // turn: {
  //   value0: "turn",
  //   value1: "turns",
  //   value2: "turned",
  //   value3: "turned",
  //   ving: "turning",
  // },
  /// without '-ing'
  // understand: {
  //   value0: "understand",
  //   value1: "understands",
  //   value2: "understood",
  //   value3: "understood",
  // pronoun: true,
  // },
  // know: { value0: "know", value1: "knows", value2: "knew", value3: "known",  pronoun: true,},

  /// TODO: -ing
  // see: {
  //   value0: "see",
  //   value1: "sees",
  //   value2: "saw",
  //   value3: "seen",
  // pronoun: true,
  // },
  // watch: {
  //   value0: "watch",
  //   value1: "",
  //   value2: "",
  //   value3: "",
  // pronoun: false,
  // },
  // say: { value0: "say", value1: "says", value2: "said", value3: "said" },
  buy: {
    value0: 'buy',
    value1: 'buys',
    value2: 'bought',
    value3: 'bought',
    pronoun: true,
    qw: ['what', 'where', 'why', 'when'],
  },
  // hear: { value0: "hear", value1: "hears", value2: "heard", value3: "heard",     pronoun: true,},
  lose: {
    value0: 'lose',
    value1: 'loses',
    value2: 'lost',
    value3: 'lost',
    pronoun: true,
    qw: ['what', 'where', 'why', 'when'],
  },
  help: {
    value0: 'help',
    value1: 'helps',
    value2: 'helped',
    value3: 'helped',
    pronoun: true,
    qw: ['what', 'why', 'when'],
  },
  // meet: { value0: "meet", value1: "meets", value2: "met", value3: "met",     pronoun: true, },
  // make: { value0: "make", value1: "makes", value2: "made", value3: "made" },
  // get: { value0: "get", value1: "gets", value2: "got", value3: "got" },
  // find: { value0: "find", value1: "finds", value2: "found", value3: "found",   // pronoun: true, },
  // show: { value0: "show", value1: "shows", value2: "showed", value3: "shown" ,   pronoun: true,},
  // set: { value0: "set", value1: "sets", value2: "set", value3: "set" },
  grow: {
    value0: 'grow',
    value1: 'grows',
    value2: 'grew',
    value3: 'grown',
    pronoun: false,
    qw: ['why'],
  },
  // hold: { value0: "hold", value1: "holds", value2: "held", value3: "held" },
  forget: {
    value0: 'forget',
    value1: 'forgets',
    value2: 'forgot',
    value3: 'forgotten',
    pronoun: true,
    qw: ['what', 'why'],
  },
  // start: {
  //   value0: "start",
  //   value1: "starts",
  //   value2: "started",
  //   value3: "started",
  // },
  // finish: {
  //   value0: "finish",
  //   value1: "finishes",
  //   value2: "finished",
  //   value3: "finished",
  // },
  travel: {
    value0: 'travel',
    value1: 'travels',
    value2: 'traveled',
    value3: 'traveled',
    pronoun: false,
    qw: ['where', 'why', 'how', 'when'],
  },
  bring: {
    value0: 'bring',
    value1: 'brings',
    value2: 'brought',
    value3: 'brought',
    pronoun: false,
    qw: ['when', 'what', 'why'],
  },
  // begin: {
  //   value0: "begin",
  //   value1: "begins",
  //   value2: "began",
  //   value3: "begun",
  // },

  // impress: {
  //   value0: "impress",
  //   value1: "impresses",
  //   value2: "impressed",
  //   value3: "impressed",
  // pronoun: true,
  // },
};

const verbsC = {
  like: {
    value0: 'like',
    value1: 'likes',
    value2: 'liked',
    value3: 'liked',
    pronoun: true,
    qw: ['what', 'why', 'how'],
  },
  want: {
    value0: 'want',
    value1: 'wants',
    value2: 'wanted',
    value3: 'wanted',
    pronoun: true,
    qw: ['what', 'why', 'how'],
  },
};

// check, see, take, put, find
const verbsD = {
  love: {...verbsA.love, tense: [1, 2]},
  bring: {...verbsA.bring, tense: [0, 2, 6, 8]},
  forget: {...verbsA.forget, tense: [0, 5]},
  give: {...verbsA.give, tense: [8]},
  help: {...verbsA.help, tense: [0, 2, 6, 8]},
  lose: {...verbsA.lose, tense: [0, 5]},
};

const verbs = {...verbsA, ...verbsC};

export const verbsList = Object.keys(verbs);

export const irregularVerbs = [
  'run',
  'drink',
  'sleep',
  'think',
  'sit',
  'read',
  'eat',
  'give',
  'pay',
  'forget',
  'bring',
  'lose',
  'buy',
  'fall',
  'grow',
  'come',

  'write',
  'speak',
  'fly',
  'hear',
  'tell',
  'understand',
  'say',
  'take',

  'make',
  'see',
  'find',
  'meet',

  'go',
  'know',
  'feel',
  'get',
  'leave',
  'begin',
];

const verbs1Lesson1: {[key: string]: string} = {};
const verbs2IrrLesson1: {[key: string]: string} = {};

Object.values(verbsA).map(({value0, value2}) => {
  if (irregularVerbs.includes(value0)) verbs2IrrLesson1[value2] = value0;

  verbs1Lesson1[value0] = value0;
});

const pronouns = {
  // [subject pronouns, object pronouns, possessive adjectives, possessive pronouns, reflexive pronouns]
  i: ['i', 'me', 'my', 'mine', 'myself'],
  you: ['you', 'you', 'your', 'yours', 'yourself'],
  he: ['he', 'him', 'his', 'his', 'himself'],
  she: ['she', 'her', 'her', 'hers', 'herself'],
  it: ['it', 'it', 'its', '', 'itself'],
  we: ['we', 'us', 'our', 'ours', 'ourself'],
  they: ['they', 'them', 'their', 'theirs', 'themselves'],
  // TODO .
  // you: ['you', 'you', 'your', 'yours', 'yourselves'],
};

export const Interrogatives = {
  when: 'when',
  what: 'what',
  where: 'where',
  who: 'who',
  how: 'how',
  why: 'why',
};

const Adjectives = {
  good: {
    absolute: 'good',
    comparative: 'better',
    superlative: 'best',
  },

  bad: {
    absolute: 'bad',
    comparative: 'worse',
    superlative: 'worst',
  },
  little: {
    absolute: 'little',
    comparative: 'less',
    superlative: 'least',
  },
  far: {
    absolute: 'far',
    comparative: 'farther',
    superlative: 'farthest',
  },
  beautiful: {
    absolute: 'beautiful',
    comparative: 'more beautiful',
    superlative: 'most beautiful',
  },
  big: {
    absolute: 'big',
    comparative: 'bigger',
    superlative: 'biggest',
  },
  busy: {
    absolute: 'busy',
    comparative: 'busier',
    superlative: 'busiest',
  },
  cheap: {
    absolute: 'cheap',
    comparative: 'cheaper',
    superlative: 'cheapest',
  },
  easy: {
    absolute: 'easy',
    comparative: 'easier',
    superlative: 'easiest',
  },
  expensive: {
    absolute: 'expensive',
    comparative: 'more expensive',
    superlative: 'most expensive',
  },
  fast: {
    absolute: 'fast',
    comparative: 'faster',
    superlative: 'fastest',
  },
  tall: {
    absolute: 'tall',
    comparative: 'taller',
    superlative: 'tallest',
  },
  hot: {
    absolute: 'hot',
    comparative: 'hotter',
    superlative: 'hottest',
  },
  large: {
    absolute: 'large',
    comparative: 'larger',
    superlative: 'largest',
  },
  long: {
    absolute: 'long',
    comparative: 'longer',
    superlative: 'longest',
  },
  new: {
    absolute: 'new',
    comparative: 'newer',
    superlative: 'newest',
  },
  old: {
    absolute: 'old',
    comparative: 'older',
    superlative: 'oldest',
  },
  slow: {
    absolute: 'slow',
    comparative: 'slower',
    superlative: 'slowest',
  },
  small: {
    absolute: 'small',
    comparative: 'smaller',
    superlative: 'smallest',
  },
  young: {
    absolute: 'young',
    comparative: 'younger',
    superlative: 'youngest',
  },
  poor: {
    absolute: 'poor',
    comparative: 'poorer',
    superlative: 'poorest',
  },
  boring: {
    absolute: 'boring',
    comparative: 'more boring',
    superlative: 'most boring',
  },
  cheerful: {
    absolute: 'cheerful',
    comparative: 'more cheerful',
    superlative: 'most cheerful',
  },
  slim: {
    absolute: 'slim',
    comparative: 'slimmer',
    superlative: 'slimmest',
  },
  short: {
    absolute: 'short',
    comparative: 'shorter',
    superlative: 'shortest',
  },
  fresh: {
    absolute: 'fresh',
    comparative: 'fresher',
    superlative: 'freshest',
  },
  tasty: {
    absolute: 'tasty',
    comparative: 'tastier',
    superlative: 'tastiest',
  },
};

const Professions = {
  D: {
    accountant: 'accountant',
    actor: 'actor',
    artist: 'artist', // // Artist/Painter/Sculptor
    // assistant: 'assistant',
    astronaut: 'astronaut',
    baker: 'baker',
    builder: 'builder', // construction worker,
    cardiologist: 'cardiologist',
    // cashier: 'cashier',
    cleaner: 'cleaner',
    cook: 'cook',
    // consultant: 'consultant',
    dentist: 'dentist',
    designer: 'designer',
    detective: 'detective',
    doctor: 'doctor',
    driver: 'driver',
    engineer: 'engineer',
    farmer: 'farmer',
    firefighter: 'firefighter',
    // friend: 'friend',
    guide: 'guide',
    interpreter: 'interpreter',
    historian: 'historian',
    judge: 'judge',
    lawyer: 'lawyer',
    // manager: 'manager',
    mechanic: 'mechanic',
    musician: 'musician',
    nurse: 'nurse',
    nutritionist: 'nutritionist',
    'office clerk': 'office clerk',
    orthopedist: 'orthopedist',
    pilot: 'pilot',
    'police officer': 'police officer',
    // partner: 'partner',
    programmer: 'programmer',
    receptionist: 'receptionist',
    // 'retail salesperson': 'retail salesperson',
    // 'sales manager': "sales manager",
    scientist: 'scientist',
    singer: 'singer',
    'social worker': 'social worker',
    'taxi driver': 'taxi driver',
    'truck driver': 'truck driver',
    welder: 'welder',
    teacher: 'teacher',
    writer: 'writer',

    // Data Scientist
    // Artificial Intelligence/Machine Learning Engineer
    // Sustainability/Environmental Specialist
    // Cybersecurity Analyst
    // Content Creator/Influencer
    // Telehealth/Remote Healthcare Provider
    // Renewable Energy Technician
    // E-commerce Specialist
    // Blockchain Developer
    // Virtual Reality/Augmented Reality Developer

    // 'Administrative Assistant': 'Administrative Assistant',
    // 'Marketing Manager': 'Marketing Manager',
    // 'Financial Advisor/Planner': 'Financial Advisor/Planner',

    // Knight
    // Blacksmith
    //
    // Journalist/Reporter
    // Spy/Secret Agent
    // Soldier/Military Personnel
    // Businessperson/Entrepreneur
    // Athlete/Sports Professional
    // Architect
    // Politician/Government Official
    // Psychologist/Psychiatrist
    // Paramedic/EMT
    // Fashion Designer
    // Photographer
    // Waiter/Waitress
    // Bartender
    // Librarian
  },
  E: {
    author: 'author',
    auditor: 'auditor',
    attorney: 'attorney',
    chef: 'chef',
    'construction electrician': 'construction electrician',
    'construction engineer': 'construction engineer',
    'firefighter inspector': 'firefighter inspector',
    laborer: 'laborer',
    professor: 'professor',
    researcher: 'researcher',
    'safety inspector': 'safety inspector',

    // White: Site managers, engineers, or supervisors.
    // Yellow: General laborers or earth-moving operators.
    // Blue: Electricians or other technical personnel.
    // Green: Safety inspectors or new workers.
    // Red: Firefighters or medical personnel.
  },
};

const Family = {
  D: {
    family: 'family',
    mother: 'mother',
    father: 'father',
    daughter: 'daughter',
    son: 'son',
    children: 'children',
    parents: 'parents',
    wife: 'wife',
    husband: 'husband',
    sister: 'sister',
    brother: 'brother',
    grandmother: 'grandmother',
    grandfather: 'grandfather',
  },
};

const Food = {
  A: {
    apple: 'apple',
    avocado: 'avocado',
    banana: 'banana',
    'bell pepper': 'bell pepper',
    blueberries: 'blueberries',
    broccoli: 'broccoli',
    carrot: 'carrot',
    cherries: 'cherries',
    coconut: 'coconut',
    corn: 'corn',
    cucumber: 'cucumber',
    eggplant: 'eggplant',
    garlic: 'garlic',
    grapes: 'grapes',
    'hot pepper': 'hot pepper',
    kiwi: 'kiwi',
    lemon: 'lemon',
    mango: 'mango',
    melon: 'melon',
    olive: 'olive',
    onion: 'onion',
    peach: 'peach',
    pear: 'pear',
    pineapple: 'pineapple',
    potato: 'potato',
    strawberry: 'strawberry',
    'sweet potato': 'sweet potato',
    tangerine: 'tangerine',
    tomato: 'tomato',
    watermelon: 'watermelon',
  },
};

const Food2 = {
  bacon: 'bacon',
  beans: 'beans',
  bone: 'bone',
  burrito: 'burrito',
  butter: 'butter',
  candy: 'candy',
  cheese: 'cheese',
  chestnut: 'chestnut',
  'chocolate bar': 'chocolate bar',
  'cooked rice': 'cooked rice',
  'curry and rice': 'curry and rice',
  custard: 'custard',
  dango: 'dango',
  dumpling: 'dumpling',
  egg: 'egg',
  falafel: 'falafel',
  fondue: 'fondue',
  'fortune cookie': 'fortune cookie',
  'french fries': 'french fries',
  'fried shrimp': 'fried shrimp',
  'green salad': 'green salad',
  hamburger: 'hamburger',
  honey: 'honey pot',
  'hot dog': 'hot dog',
  'ice cream': 'ice cream',
  ice: 'ice',
  lollipop: 'lollipop',
  oden: 'oden',
  oyster: 'oyster',
  peanuts: 'peanuts',
  'pita sandwich': 'pita sandwich',
  pizza: 'pizza',
  popcorn: 'popcorn',
  'poultry leg': 'poultry leg',
  'rice ball': 'rice ball',
  'rice cracker': 'rice cracker',
  salt: 'salt',
  sandwich: 'sandwich',
  'shaved ice': 'shaved ice',
  'soft ice cream': 'soft ice cream',
  spaghetti: 'spaghetti',
  steak: 'steak',
  sushi: 'sushi',
  taco: 'taco',
  tamale: 'tamale',
};

const Drinks = {
  beer: 'beer',
  'boba tea': 'boba tea',
  cocktail: 'cocktail',
  drink: 'drink ',
  'juice box': 'juice box',
  maté: 'maté',
  milk: 'milk',
  tea: 'tea',
  'tropical drink': 'tropical drink',
  wine: 'wine',
};

const Creatures = {
  B: {
    ant: 'ant',
    badger: 'badger',
    bat: 'bat',
    bear: 'bear',
    beaver: 'beaver',
    bee: 'bee',
    beetle: 'beetle',
    bison: 'bison',
    blowfish: 'blowfish',
    bug: 'bug',
    butterfly: 'butterfly',
    camel: 'camel',
    cat: 'cat',
    chick: 'chick',
    chipmunk: 'chipmunk',
    cockroach: 'cockroach',
    cow: 'cow',
    crab: 'crab',
    cricket: 'cricket',
    crocodile: 'crocodile',
    deer: 'deer',
    dinosaur: 'dinosaur',
    'dodo bird': 'dodo bird',
    dog: 'dog',
    dolphin: 'dolphin',
    dove: 'dove',
    dragon: 'dragon',
    duck: 'duck',
    eagle: 'eagle',
    elephant: 'elephant',
    fish: 'fish',
    flamingo: 'flamingo',
    fly: 'fly',
    fox: 'fox',
    giraffe: 'giraffe',
    goat: 'goat',
    gorilla: 'gorilla',
    hedgehog: 'hedgehog',
    hippo: 'hippo',
    horse: 'horse',
    kangaroo: 'kangaroo',
    ladybug: 'ladybug',
    leopard: 'leopard',
    lion: 'lion',
    lizard: 'lizard',
    llama: 'llama',
    lobster: 'lobster',
    mammoth: 'mammoth',
    mouse: 'mouse',
    octopus: 'octopus',
    orangutan: 'orangutan',
    otter: 'otter',
    owl: 'owl',
    ox: 'ox',
    panda: 'panda',
    parrot: 'parrot',
    peacock: 'peacock',
    penguin: 'penguin',
    pig: 'pig',
    'polar bear': 'polar bear',
    poodle: 'poodle',
    rabbit: 'rabbit',
    raccoon: 'raccoon',
    ram: 'ram',
    rat: 'rat',
    rhino: 'rhino',
    rooster: 'rooster',
    scorpion: 'scorpion',
    seal: 'seal',
    shark: 'shark',
    sheep: 'sheep',
    shrimp: 'shrimp',
    skunk: 'skunk',
    sloth: 'sloth',
    snail: 'snail',
    snake: 'snake',
    spider: 'spider',
    squid: 'squid',
    swan: 'swan',
    'T-Rex': 'T-Rex',
    tiger: 'tiger',
    'tropical fish': 'tropical fish',
    turkey: 'turkey',
    turtle: 'turtle',
    'two-hump camel': 'two-hump camel',
    'water buffalo': 'water buffalo',
    whale: 'whale',
    wolf: 'wolf',
    worm: 'worm',
    zebra: 'zebra',
  },
};

export const subjectPronounsIcons: {
  [key: string]: {[key: string]: string};
} = {
  A: {
    i: 'i',
    you: 'you',
    he: 'he',
    she: 'she',
    we: 'we',
    they: 'they',
    it: 'it',
  },
  B: {who: 'who'},
};

const objectPronounsIcons: {
  [key: string]: {[key: string]: string};
} = {
  B: {
    me: 'me',
    'you ': 'you ',
    him: 'him',
    her: 'her',
    us: 'us',
    them: 'them',
    'it ': 'it ',
  },
};

const Accessories = {
  backpack: 'backpack',
  'boxing glove': 'boxing glove',
  briefcase: 'briefcase',
  crown: 'crown',
  'diving mask': 'diving mask',
  glasses: 'glasses',
  goggles: 'goggles',
  luggage: 'luggage',
  'military helmet': 'military helmet',
  pouch: 'pouch',
  purse: 'purse',
  razor: 'razor',
  'ribbon bow': 'ribbon bow',
  ring: 'ring',
  sunglasses: 'sunglasses',
  toothbrush: 'toothbrush',
};

const Flora = {
  bouquet: 'bouquet',
  cactus: 'cactus',
  'Christmas tree': 'Christmas tree',
  coral: 'coral',
  'evergreen tree': 'evergreen tree',
  flower: 'flower',
  herb: 'herb',
  hibiscus: 'hibiscus',
  lotus: 'lotus',
  mushroom: 'mushroom',
  'palm tree': 'palm tree',
  'potted plant': 'potted plant',
  rose: 'rose',
  seedling: 'seedling',
  sunflower: 'sunflower',
  tree: 'tree',
  tulip: 'tulip',
};

const Utensils = {
  'baby bottle': 'baby bottle',
  bowl: 'bowl',
  chopsticks: 'chopsticks',
  fork: 'fork',
  jar: 'jar',
  knife: 'knife',
  plate: 'plate',
  spoon: 'spoon',
  'table knife': 'table knife',
  teapot: 'teapot',
};

const Pastries = {
  bagel: 'bagel',
  baguette: 'baguette',
  'birthday cake': 'birthday cake',
  bread: 'bread',
  cookie: 'cookie',
  croissant: 'croissant',
  cupcake: 'cupcake',
  doughnut: 'doughnut',
  'flat bread': 'flat bread',
  mooncake: 'mooncake',
  pancakes: 'pancakes',
  pie: 'pie',
  pretzel: 'pretzel',
  shortcake: 'shortcake',
  waffle: 'waffle',
};

const Clothes = {
  'ballet shoes': 'ballet shoes',
  bikini: 'bikini',
  'billed hat': 'billed hat',
  blouse: 'blouse',
  briefs: 'briefs',
  coat: 'coat',
  dress: 'dress',
  'dress shoe': 'dress shoe',
  'flat shoe': 'flat shoe',
  gloves: 'gloves',
  'graduation cap': 'graduation cap',
  'hat with bow': 'hat with bow',
  'heeled boots': 'heeled boots',
  'heeled sandal': 'heeled sandal',
  'high-heeled shoe': 'high-heeled shoe',
  'hiking boot': 'hiking boot',
  jeans: 'jeans',
  kimono: 'kimono',
  'lab coat': 'lab coat',
  'martial arts uniform': 'martial arts uniform',
  'one-piece swimsuit': 'one-piece swimsuit',
  'polo shirt': 'polo shirt',
  'running shirt': 'running shirt',
  'safety vest': 'safety vest',
  sandal: 'sandal',
  sari: 'sari',
  scarf: 'scarf',
  shorts: 'shorts',
  socks: 'socks',
  'tennis shoe': 'tennis shoe',
  'top hat': 'top hat',
};

const Transport = {
  airplane: 'airplane',
  ambulance: 'ambulance',
  bicycle: 'bicycle',
  bus: 'bus',
  car: 'car',
  'delivery truck': 'delivery truck',
  ferry: 'ferry',
  'fire engine': 'fire engine',
  helicopter: 'helicopter',
  'ice skate': 'ice skate',
  minibus: 'minibus',
  'motor scooter': 'motor scooter',
  motorboat: 'motorboat',
  motorcycle: 'motorcycle',
  'passenger ship': 'passenger ship',
  'pickup truck': 'pickup truck',
  'police car': 'police car',
  'race car': 'race car',
  rocket: 'rocket',
  'roller skate': 'roller skate',
  sailboat: 'sailboat',
  scooter: 'scooter',
  'semi-truck': 'semi-truck',
  ship: 'ship',
  skateboard: 'skateboard',
  sled: 'sled',
  'small airplane': 'small airplane',
  speedboat: 'speedboat',
  suv: 'SUV',
  taxi: 'taxi',
  tractor: 'tractor',
  trolleybus: 'trolleybus',
  UFO: 'UFO',
};

export const possessiveAdjectivesIcons: {
  [key: string]: {[key: string]: string};
} = {
  D: {
    my: 'my',
    your: 'your',
    his: 'his',
    'her ': 'her ',
    our: 'our',
    their: 'their',
    its: 'its',
  },
};

const subjectPronouns: {
  [key: string]: [string, number, string];
} = {};
const objectPronouns: {
  [key: string]: [string, number, string];
} = {};
const possessiveAdjectives: {
  [key: string]: [string, number, string];
} = {};

Object.entries(subjectPronounsIcons.A).map(([key, value]) => {
  subjectPronouns[key] = [key, 0, value];
});
Object.entries(objectPronounsIcons.B).map(([key, value]) => {
  objectPronouns[key] = [key, 0, value];
});
Object.entries(possessiveAdjectivesIcons.D).map(([key, value]) => {
  possessiveAdjectives[key] = [key, 0, value];
});

const fNames = {
  he: [
    'Bob',
    'Tom',
    'John',
    'Eric',
    'Mark',
    'James',
    'Robert',
    'Paul',
    'David',
    'Kevin',
  ],
  she: [
    'Mia',
    'Emma',
    'Mary',
    'Sarah',
    'Lisa',
    'Amy',
    'Anna',
    'Olivia',
    'Linda',
    'Susan',
  ],
};

const InstrumentsMechanismsTools = {
  abacus: 'abacus',
  'alarm clock': 'alarm clock',
  anchor: 'anchor',
  axe: 'axe',
  boomerang: 'boomerang',
  broom: 'broom',
  bucket: 'bucket',
  compass: 'compass',
  'construction sign': 'construction sign',
  dagger: 'dagger',
  'fire extinguisher': 'fire extinguisher',
  flashlight: 'flashlight',
  gear: 'gear',
  hammer: 'hammer',
  'hand saw': 'hand saw',
  hook: 'hook',
  hourglass: 'hourglass',
  key: 'key',
  ladder: 'ladder',
  'magic wand': 'magic wand',
  'magnifying glass': 'magnifying glass',
  microphone: 'microphone',
  microscope: 'microscope',
  mirror: 'mirror',
  paperclip: 'paperclip',
  pick: 'pick',
  plunger: 'plunger',
  'safety pin': 'safety pin',
  'satellite antenna': 'satellite antenna',
  scales: 'scales',
  scissors: 'scissors',
  screwdriver: 'screwdriver',
  'sewing needle': 'sewing needle',
  shield: 'shield',
  stopwatch: 'stopwatch',
  'straight ruler': 'straight ruler',
  sword: 'sword',
  telescope: 'telescope',
  'test tube': 'test tube',
  thread: 'thread',
  'timer clock': 'timer clock',
  toolbox: 'toolbox',
  'traffic light': 'traffic light',
  'triangular ruler': 'triangular ruler',
  wrench: 'wrench',
  yarn: 'yarn',
};

const MedicalThings = {
  'adhesive bandage': 'adhesive bandage',
  DNA: 'DNA',
  microbe: 'microbe',
  pill: 'pill',
  stethoscope: 'stethoscope',
  syringe: 'syringe',
  thermometer: 'thermometer',
  'X-ray': 'X-ray',
};

export const spWord = [
  'bananas',
  'carrots',
  'hamburgers',
  'strawberries',
  'tomatoes',
  'apples',
  'corn',
  'onions',
  'potatoes',
  'cookies',
  'corn',
  'chairs',
];

const Flags = {
  Argentina: 'Argentina',
  Australia: 'Australia',
  Canada: 'Canada',
  China: 'China',
  France: 'France',
  Germany: 'Germany',
  India: 'India',
  Japan: 'Japan',
  Panama: 'Panama',
  'South Korea': 'South Korea',
  Spain: 'Spain',
  Thailand: 'Thailand',
  'the UK': 'the UK',
  'the USA': 'the USA',
};

interface NounsLessonsInt {
  [key: string]: [string, number, string, string[]];
}

const NounsLs: NounsLessonsInt = {
  bananas: ['bananas', 0, 'bananas', ['buy', 'eat']],
  carrot: ['carrots', 0, 'carrots', ['buy', 'eat']],
  hamburgers: ['hamburgers', 0, 'hamburgers', ['buy', 'eat']],
  tomatoes: ['tomatoes', 0, 'tomatoes', ['buy', 'eat']],
  apples: ['apples', 0, 'apples', ['buy', 'eat', 'love']],
  corn: ['corn', 0, 'corn', ['buy', 'eat', 'love']],
  onions: ['onions', 0, 'onions', ['buy']],
  potatoes: ['potatoes', 0, 'potatoes', ['buy', 'cook']],
  strawberries: ['strawberries', 0, 'strawberry', ['buy', 'eat']],
  cookies: ['cookies', 0, 'cookies', ['buy', 'eat', 'love']],
};
// ask, think, run, walk, like, want

// coconut: 'coconut',
// garlic: 'garlic',
// 'hot pepper': 'hot pepper',
// melon: 'melon',
// olive: 'olive',
// 'sweet potato': 'sweet potato',

const NounsL: NounsLessonsInt = {
  door: ['the door', 0, 'door', ['open', 'close']],
  window: ['the window', 0, 'window', ['open', 'close']],
  bag: ['a bag', 0, 'bag', ['open', 'close', 'buy']],
  box: ['a box', 0, 'box', ['open', 'close', 'buy']],
  book: ['a book', 0, 'book', ['open', 'close', 'buy', 'read']],
  message: ['a message', 0, 'message', ['read']],
  text: ['a text', 0, 'text', ['read']],
  newspaper: ['newspaper', 0, 'newspaper', ['open', 'close', 'buy', 'read']],
  umbrella: ['an umbrella', 0, 'umbrella', ['open', 'close', 'buy']],
  folder: ['a folder', 0, 'folder', ['open', 'close', 'buy']],
  milk: ['a glass of milk', 0, 'glass of milk', ['drink', 'buy']],
  // 'hot chocolate': [
  //   'a glass of hot chocolate',
  //   0,
  //   'glass of hot chocolate',
  //   ['drink'],
  // ],
  // juice: ['a glass of juice', 0, 'glass of juice', ['drink']],
  water: ['a glass of water', 0, 'glass of water', ['drink']],
  // wine: ['a glass of wine', 0, 'wine', ['drink']],
  // beer: ['a mug of beer', 0, 'beer', ['drink']],
  tea: ['a cup of tea', 0, 'tea', ['drink']],
  'juice box': ['a box of juice', 0, 'juice box', ['drink', 'buy']],
  hamburger: ['a hamburger', 0, 'hamburger', ['buy', 'eat']],
  cooking: ['Cooking', 0, 'cooking', ['study', 'love']],
  // math: ['Math', 0, 'math', ['study', 'love']],
  // 'rocket science': ['Rocket Science', 0, 'rocket science', ['study', 'love']],
  // programming: ['Programming', 0, 'programming', ['study', 'love']],
  english: ['English', 0, 'English', ['study', 'teach']],
  spanish: ['Spanish', 0, 'Spanish', ['study', 'teach']],
  french: ['French', 0, 'French', ['study', 'teach']],
  chinese: ['Chinese', 0, 'Chinese', ['study', 'teach']],
  thai: ['Thai', 0, 'Thai', ['study', 'teach']],
  korean: ['Korean', 0, 'Korean', ['study', 'teach']],
  german: ['German', 0, 'German', ['study', 'teach']],
  japanese: ['Japanese', 0, 'Japanese', ['study', 'teach']],
  car: ['a car', 0, 'car', ['buy']],
  // bicycle: ['a bicycle', 0, 'bicycle', ['buy']],
  // cat: ['a cat', 0, 'cat', ['buy']],
  // duck: ['a duck', 0, 'duck', ['buy']],
  // donkey: ['a donkey', 0, 'donkey', ['buy']],
  // rabbit: ['a rabbit', 0, 'rabbit', ['buy']],
  // hedgehog: ['a hedgehog', 0, 'hedgehog', ['buy']],
  // plant: ['a plant', 0, 'plant', ['buy']],
  // dog: ['a dog', 0, 'dog', ['buy']],
  // parrot: ['a parrot', 0, 'parrot', ['buy']],
  // rocket: ['a rocket', 0, 'rocket', ['buy']],
  // circus: ['a circus', 0, 'circus', ['buy']],
  pen: ['a pen', 0, 'pen', ['buy']],
  pencil: ['a pencil', 0, 'pencil', ['buy']],
  // bacon: ['bacon', 0, 'bacon', ['buy', 'eat']],

  'bell pepper': ['a bell pepper', 0, 'bell pepper', ['buy', 'eat']],
  carrot: ['a carrot', 0, 'carrot', ['buy', 'eat']],
  tangerine: ['a tangerine', 0, 'tangerine', ['buy', 'eat']],
  avocado: ['an avocado', 0, 'avocado', ['buy', 'eat']],
  watermelon: ['a peace of watermelon', 0, 'watermelon', ['eat']],
  cucumber: ['a cucumber', 0, 'cucumber', ['buy', 'eat']],
  eggplant: ['an eggplant', 0, 'eggplant', ['buy']],
  lemon: ['a lemon', 0, 'lemon', ['buy', 'eat']],
  mango: ['a mango', 0, 'mango', ['buy', 'eat']],
  peach: ['a peach', 0, 'peach', ['buy', 'eat']],
  pear: ['a pear', 0, 'pear', ['buy', 'eat']],
  kiwi: ['a kiwi', 0, 'kiwi', ['buy', 'eat']],
  blueberries: ['blueberries', 0, 'blueberries', ['buy', 'eat']],
  grapes: ['grapes', 0, 'grapes', ['buy', 'eat']],
  cherries: ['cherries', 0, 'cherries', ['buy', 'eat']],
  pineapple: ['a pineapple', 0, 'pineapple', ['buy', 'eat']],
  broccoli: ['broccoli', 0, 'broccoli', ['buy', 'eat']],
  chair: ['on the chair', 0, 'chair', ['dance', 'sit', 'stand']],
  chairs: ['on chairs', 0, 'chair', ['sleep']],
  table: ['on the table', 0, 'table', ['dance', 'sit', 'sleep', 'stand']],
  // cabinet: ['cabinet', 0, 'cabinet', ['open', 'close']],
  floor: ['on the floor', 0, 'floor', ['dance', 'sit', 'sleep', 'stand']],
  bed: ['on the bed', 0, 'bed', ['dance', 'sit', 'sleep', 'stand']],
  // wall: ['on the wall', 0, 'wall', ['paint', 'lean']],
};

['love', 'bring', 'forget', 'give', 'help', 'lose'];
// check, see, take, put, find

const NounsLD: NounsLessonsInt = {
  id: ['id', 0, 'id', ['bring', 'lose', 'forget']],
  book: ['book', 0, 'book', ['bring', 'lose', 'forget']],
  umbrella: ['umbrella', 0, 'umbrella', ['give', 'lose', 'forget']],
  bag: ['bag', 0, 'bag', ['lose', 'forget']],
  folder: ['folder', 0, 'folder', ['bring', 'give', 'lose', 'forget']],
  pen: ['pen', 0, 'pen', ['bring', 'give', 'lose', 'forget']],
  pencil: ['pencil', 0, 'pencil', ['bring', 'give', 'lose', 'forget']],
  car: ['car', 0, 'car', ['give', 'love']],
  cat: ['cat', 0, 'cat', ['love']],
  dog: ['dog', 0, 'dog', ['love']],
  chair: ['chair', 0, 'chair', ['give']],
  chairs: ['chairs', 0, 'chair', ['give']],
  mother: ['mother', 0, 'mother', ['love', 'help']],
  family: ['family', 0, 'family', ['love', 'help']],
  father: ['father', 0, 'father', ['love', 'help']],
  daughter: ['daughter', 0, 'daughter', ['love', 'help']],
  son: ['son', 0, 'son', ['love', 'help']],
  children: ['children', 0, 'children', ['love', 'help']],
  parents: ['parents', 0, 'parents', ['love', 'help']],
  wife: ['wife', 0, 'wife', ['love', 'help']],
  husband: ['husband', 0, 'husband', ['love', 'help']],
  sister: ['sister', 0, 'sister', ['love', 'help']],
  brother: ['brother', 0, 'brother', ['love', 'help']],
  grandmother: ['grandmother', 0, 'grandmother', ['love', 'help']],
  grandfather: ['grandfather', 0, 'grandfather', ['love', 'help']],

  // table: ['table', 0, 'table', ['give',]],
  // bed: ['on the bed', 0, 'bed', ['dance', 'sit', 'sleep', 'stand']],
};

export interface WordsOneLessonInt {
  words: {
    'Subject Pronouns': {
      [key: string]: [string, number, string];
    };
    names: {
      he: string[];
      she: string[];
    };
    nouns: NounsLessonsInt;
    verbs: {
      [key: string]: {
        value0: string;
        value1: string;
        value2: string;
        value3: string;
        ving?: string;
        tense?: number[];
        pronoun: boolean;
        qw: string[];
      };
    };
    professions?: {[key: string]: string};
  };
}

const wordsL: {
  A: WordsOneLessonInt;
  B: WordsOneLessonInt;
  C: WordsOneLessonInt;
  D: WordsOneLessonInt;
  E: WordsOneLessonInt;
  F: WordsOneLessonInt;
  G: WordsOneLessonInt;
  H: WordsOneLessonInt;
  I: WordsOneLessonInt;
  J: WordsOneLessonInt;
  K: WordsOneLessonInt;
  L: WordsOneLessonInt;
  M: WordsOneLessonInt;
  N: WordsOneLessonInt;
  O: WordsOneLessonInt;
  P: WordsOneLessonInt;
} = {
  A: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  B: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  C: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsC,
    },
  },
  D: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLD,
      },
      professions: Professions.D,
      verbs: verbsD,
    },
  },
  E: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  F: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  G: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  H: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  I: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  J: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  K: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  L: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  M: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  N: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  O: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
  P: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbsA,
    },
  },
};

const SomeNouns = {
  id: 'id',
  'credit card': 'credit card',
  money: 'money',
  ticket: 'ticket',
  water: 'droplet',
  tea: 'tea',
  juice: 'juice box',
  milk: 'milk',
  bag: 'bag',
  box: 'box',
  book: 'book',
  message: 'message',
  text: 'text',
  newspaper: 'newspaper',
  umbrella: 'umbrella',
  pen: 'pen',
  pencil: 'pencil',
  folder: 'folder',
  chair: 'chair',
  table: 'table',
  seat: 'seat',
  couch: 'couch',
  bed: 'bed',
  door: 'door',
  window: 'window',
  floor: 'floor',
  wall: 'wall',
  cooking: 'cooking',
  hamburger: 'hamburger',
  cookie: 'cookie',
  car: 'car',
  man: 'man',
  woman: 'woman',
  toilet: 'toilet',
};

const Electronics = {
  headphones: 'headphones',
  laptop: 'laptop',
  printer: 'printer',
  'smart phone': 'smart phone',
  'video camera': 'video camera',
  watch: 'watch',
};

const Music = {
  accordion: 'accordion',
  banjo: 'banjo',
  drum: 'drum',
  guitar: 'guitar',
  saxophone: 'saxophone',
  trumpet: 'trumpet',
  violin: 'violin',
};

const Buildings = {
  bank: 'bank',
  castle: 'castle',
  church: 'church',
  circus: 'circus',
  'convenience store': 'convenience store',
  'department store': 'department store',
  factory: 'factory',
  // home: 'home',
  hospital: 'hospital',
  hotel: 'hotel',
  house: 'house',
  mosque: 'mosque',
  museum: 'museum',
  'post office': 'post office',
  school: 'school',
  stadium: 'stadium',
  synagogue: 'synagogue',
  theater: 'theater',
};

const Places = {
  basement: 'basement',
  bedroom: 'bedroom',
  cinema: 'cinema',
  home: 'home',
  kitchen: 'kitchen',
  office: 'office',
  room: 'room',
  work: 'work',
};

const Events = {
  Carnaval: 'Carnaval',
  Concert: 'Concert',
  Exhibition: 'Exhibition',
  'Fashion Show': 'Fashion Show',
  Meeting: 'Meeting',
  Presentation: 'Presentation',
};

export const Nouns = {
  A: {
    ...SomeNouns,
  },
  B: {
    math: 'math',
    'rocket science': 'rocket science',
    programming: 'programming',
    ///
    // english: 'english',
    // spanish: 'spanish',
    // french: 'french',
    // chinese: 'chinese',
    ///
    // car: 'car',
    // bicycle: 'bicycle',
    // donkey: 'donkey',
    plant: 'plant',
    rocket: 'rocket',
    circus: 'circus',
    ///
    carrots: 'carrots',
    bacon: 'bacon',
    broccoli: 'broccoli',
    hamburger: 'hamburger',
    ...Creatures.B,
  },
  C: {
    ...Buildings,
    // elevator: 'elevator',
    // airplane: 'airplane',
    // car: 'car',
    // cake: 'cake',
    // drink: 'drink',
    // film: 'film',
    // gift: 'gift',
    // cup: 'cup',
    // tea: 'tea',
    // cinema: 'cinema',
    // circus: 'circus',
    // theater: 'theater',
    // receipt: 'receipt',
  },
  D: {
    bag: 'bag',
    dress: 'dress',
    letter: 'letter',
    message: 'message',
    memo: 'memo',
    car: 'car',
    // partner: 'partner',
    // task: ["task", 0, "task"],
    // friend: ["friend", 0, "friend"],
    // notice: ["notice", 0, "notice"],
  },
  E: {},
  F: {},
  G: {},
  H: {},
  I: {},
  J: {},
  K: {},
  L: {},
  M: {},
  N: {},
  O: {},
  P: {},
};

const allWords = {
  A: {
    'Subject Pronouns': subjectPronounsIcons.A,
    'Verbs (v1)': verbs1Lesson1,
    Nouns: Nouns.A,
  },
  AX: {
    'Verbs (v2)': verbs2IrrLesson1,
  },
  AXX: {
    Food: {...Food.A, ...Food2},
  },
  AXXX: {
    Flags,
  },
  B: {
    'Object Pronouns': objectPronounsIcons.B,
    Interrogatives,
    Creatures: Creatures.B,
  },
  C: {
    'Verbs (v1)': {
      like: 'like',
      want: 'want',
      think: 'think',
      walk: 'walk',
      run: 'run',
      read: 'read',
    },
    Places,
    Events,
    // Nouns: Nouns.C,
    Buildings,
    Preposition: {
      here: 'here',
      there: 'there',
      to: 'to',
      at: 'at',
      in: 'in',
      out: 'out',
      on: 'on',
    },
  },
  D: {
    'Possessive Adjectives': possessiveAdjectivesIcons.D,
    // Nouns: Nouns.D,
    Family: Family.D,
    Professions: Professions.D,
  },
  E: {
    Family: Family.D,
  },
  F: {
    Family: Family.D,
  },
  G: {
    Family: Family.D,
  },
  H: {
    Family: Family.D,
  },
  I: {
    Family: Family.D,
  },
  J: {
    Family: Family.D,
  },
  K: {
    Family: Family.D,
  },
  L: {
    Family: Family.D,
  },
  M: {
    Family: Family.D,
  },
  N: {
    Family: Family.D,
  },
  NX: {
    Family: Family.D,
  },
  O: {
    Family: Family.D,
  },
  P: {
    Family: Family.D,
  },
  PX: {
    Family: Family.D,
  },
};

export const test = {A: {}, B: {}, C: {}, D: {}};

function calc0(words: typeof wordsL) {
  return {...words};
}
function calc1(words: typeof allWords) {
  return {...words};
}

export const lessons = calc0(wordsL);
export const words = calc1(allWords);
