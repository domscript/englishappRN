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
export const verbs = {
  // study: {
  //   value0: "study",
  //   value1: "studies",
  //   value2: "studied",
  //   value3: "studied",
  //   ving: "studying",
  // },
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
  },
  // come: {
  //   value0: "come",
  //   value1: "comes",
  //   value2: "came",
  //   value3: "come",
  //   ving: "coming",
  // },
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
  },
  close: {
    value0: 'close',
    value1: 'closes',
    value2: 'closed',
    value3: 'closed',
    ving: 'closing',
  },
  drink: {
    value0: 'drink',
    value1: 'drinks',
    value2: 'drank',
    value3: 'drunk',
    ving: 'drinking',
  },
  eat: {
    value0: 'eat',
    value1: 'eats',
    value2: 'ate',
    value3: 'eaten',
    ving: 'eating',
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
  // give: {
  //   value0: "give",
  //   value1: "gives",
  //   value2: "gave",
  //   value3: "given",
  //   ving: "giving",
  // },
  ask: {
    value0: 'ask',
    value1: 'asks',
    value2: 'asked',
    value3: 'asked',
    ving: 'asking',
  },
  // answer: {
  //   value0: "answer",
  //   value1: "answers",
  //   value2: "answered",
  //   value3: "answered",
  //   ving: "answering",
  // },
  // take: {
  //   value0: "take",
  //   value1: "takes",
  //   value2: "took",
  //   value3: "taken",
  //   ving: "taking",
  // },
  // pay: {
  //   value0: "pay",
  //   value1: "pays",
  //   value2: "paid",
  //   value3: "paid",
  //   ving: "paying",
  // },
  sleep: {
    value0: 'sleep',
    value1: 'sleeps',
    value2: 'slept',
    value3: 'slept',
    ving: 'sleeping',
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
  },
  // tell: {
  //   value0: "tell",
  //   value1: "tells",
  //   value2: "told",
  //   value3: "told",
  //   ving: "telling",
  // },
  // leave: {
  //   value0: "leave",
  //   value1: "leaves",
  //   value2: "left",
  //   value3: "left",
  //   ving: "leaving",
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
  // },
  stand: {
    value0: 'stand',
    value1: 'stands',
    value2: 'stood',
    value3: 'stood',
    ving: 'standing',
  },
  run: {
    value0: 'run',
    value1: 'runs',
    value2: 'ran',
    value3: 'run',
    ving: 'running',
  },
  sit: {
    value0: 'sit',
    value1: 'sits',
    value2: 'sat',
    value3: 'sat',
    ving: 'sitting',
  },
  dance: {
    value0: 'dance',
    value1: 'dances',
    value2: 'danced',
    value3: 'danced',
    ving: 'dancing',
  },
  walk: {
    value0: 'walk',
    value1: 'walks',
    value2: 'walked',
    value3: 'walked',
    ving: 'walking',
  },

  read: {
    value0: 'read',
    value1: 'reads',
    value2: 'read',
    value3: 'read',
    ving: 'reading',
  },
  // send: {
  //   value0: "send",
  //   value1: "sends",
  //   value2: "sent",
  //   value3: "sent",
  //   ving: "sending",
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
  // },
  // know: { value0: "know", value1: "knows", value2: "knew", value3: "known" },

  /// TODO: -ing
  // see: {
  //   value0: "see",
  //   value1: "sees",
  //   value2: "saw",
  //   value3: "seen",
  // },
  // say: { value0: "say", value1: "says", value2: "said", value3: "said" },
  // buy: { value0: "buy", value1: "buys", value2: "bought", value3: "bought" },
  // hear: { value0: "hear", value1: "hears", value2: "heard", value3: "heard" },
  // lose: { value0: "lose", value1: "loses", value2: "lost", value3: "lost" },
  // help: { value0: "help", value1: "helps", value2: "helped", value3: "helped" },
  // meet: { value0: "meet", value1: "meets", value2: "met", value3: "met" },
  // make: { value0: "make", value1: "makes", value2: "made", value3: "made" },
  // get: { value0: "get", value1: "gets", value2: "got", value3: "got" },
  // find: { value0: "find", value1: "finds", value2: "found", value3: "found" },
  // show: { value0: "show", value1: "shows", value2: "showed", value3: "shown" },
  // set: { value0: "set", value1: "sets", value2: "set", value3: "set" },
  // grow: { value0: "grow", value1: "grows", value2: "grew", value3: "grown" },
  // hold: { value0: "hold", value1: "holds", value2: "held", value3: "held" },
  // forget: {
  //   value0: "forget",
  //   value1: "forgets",
  //   value2: "forgot",
  //   value3: "forgotten",
  // },
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
  // travel: {
  //   value0: "travel",
  //   value1: "travels",
  //   value2: "traveled",
  //   value3: "traveled",
  // },
  // bring: {
  //   value0: "bring",
  //   value1: "brings",
  //   value2: "brought",
  //   value3: "brought",
  // },
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
  // },
};

export const verbsList = Object.keys(verbs);

export const irregularVerbs = [
  'run',
  'drink',
  'sleep',
  'think',
  'sit',
  'read',
  'eat',

  'write',
  'speak',
  'pay',
  'grow',
  'fly',
  'buy',
  'give',
  'come',
  'hear',
  'tell',
  'understand',
  'say',
  'take',

  'make',
  'see',
  'lose',
  'find',
  'meet',

  'go',
  'know',
  'feel',
  'forget',
  'get',
  'leave',
  'bring',
  'begin',
];

const verbs1Lesson1: {[key: string]: string} = {};
const verbs2IrrLesson1: {[key: string]: string} = {};

Object.values(verbs).map(({value0, value2}) => {
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
  you: ['you', 'you', 'your', 'yours', 'yourselves'],
};

const Interrogatives = {
  when: '🕕🌇🌃?',
  what: '🕋?',
  where: '🌎🌍🌏?',
  who: '👤?',
  how: '🔎🚀?',
  why: '❓',
};

const a = {
  like: 'like',
  want: 'want',
};

export const Professions = {
  D: {
    accountant: 'accountant', // "Auditor"
    actor: 'actor',
    artist: 'artist',
    // assistant: 'assistant',
    astronaut: 'astronaut',
    builder: 'builder', // construction worker/laborer,
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
    // lawyer: 'lawyer',
    // manager: 'manager',
    mechanic: 'mechanic',
    musician: 'musician',
    // nurse: 'nurse',
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
  },
};

export const Family = {
  D: {
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

export const Food = {
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

export const Creatures = {
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
};

export const objectPronounsIcons: {
  [key: string]: {[key: string]: string};
} = {
  B: {
    me: 'me',
    you: 'you',
    him: 'him',
    her: 'her',
    us: 'us',
    them: 'them',
    it: 'it',
  },
};

export const possessiveAdjectivesIcons: {
  [key: string]: {[key: string]: string};
} = {
  D: {
    my: 'my',
    your: 'your',
    his: 'his',
    her: 'her',
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

export const spWord = [
  'bananas',
  'carrots',
  'hamburgers',
  'tomatoes',
  'apples',
  'corn',
  'onions',
  'potatoes',
  'strawberries',
  'chairs',
];

const NounsLs = {
  bananas: ['bananas', 0, 'banana', ['buy', 'eat']],
  carrots: ['carrots', 0, 'carrot', ['buy', 'eat']],
  hamburgers: ['hamburgers', 0, 'hamburger', ['buy', 'eat']],
  tomatoes: ['tomatoes', 0, 'tomato', ['buy', 'eat']],
  apples: ['apples', 0, 'apple', ['buy', 'eat']],
  corn: ['corn', 0, 'corn', ['buy', 'eat']],
  onions: ['onions', 0, 'onion', ['buy']],
  potatoes: ['potatoes', 0, 'potato', ['buy', 'cook']],
  strawberries: ['strawberries', 0, 'strawberry', ['buy', 'eat']],
};
// ask, think, run, walk, like, want

// coconut: 'coconut',
// garlic: 'garlic',
// 'hot pepper': 'hot pepper',
// melon: 'melon',
// olive: 'olive',
// 'sweet potato': 'sweet potato',

const NounsL = {
  door: ['the door', 0, 'door', ['open', 'close']],
  window: ['the window', 0, 'window', ['open', 'close']],
  box: ['a box', 0, 'box', ['open', 'close', 'buy']],
  book: ['a book', 0, 'book', ['open', 'close', 'buy', 'read']],
  message: ['a message', 0, 'message', ['read']],
  text: ['text', 0, 'text', ['read']],
  'news paper': [
    'news paper',
    0,
    'news paper',
    ['open', 'close', 'buy', 'read'],
  ],
  umbrella: ['an umbrella', 0, 'umbrella', ['open', 'close', 'buy']],
  folder: ['a folder', 0, 'folder', ['open', 'close', 'buy']],
  milk: ['a glass of milk', 0, 'milk', ['drink', 'buy']],
  wine: ['a glass of wine', 0, 'wine', ['drink']],
  beer: ['a mug of beer', 0, 'beer', ['drink']],
  tea: ['a cup of tea', 0, 'tea', ['drink']],
  'juice box': ['a box of juice', 0, 'juice box', ['drink', 'buy']],
  hamburger: ['a hamburger', 0, 'hamburger', ['buy', 'eat']],
  // cooking: ['Cooking', 0, 'cooking', ['study', 'love']],
  // math: ['Math', 0, 'math', ['study', 'love']],
  // 'rocket science': ['Rocket Science', 0, 'rocket science', ['study', 'love']],
  // programming: ['Programming', 0, 'programming', ['study', 'love']],
  // english: ['English', 0, '🇬🇧', ['study']],
  // spanish: ['Spanish', 0, '🇪🇸', ['study']],
  // french: ['French', 0, '🇫🇷', ['study']],
  // chinese: ['Chinese', 0, '🇨🇳', ['study']],
  // car: ['a car', 0, 'car', ['buy']],
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
  chair: ['on a chair', 0, 'chair', ['dance', 'sit', 'stand']],
  chairs: ['on chairs', 0, 'chair', ['sleep']],
  table: ['on a table', 0, 'table', ['dance', 'sit', 'sleep', 'stand']], //
  // cabinet: ['cabinet', 0, 'cabinet', ['open', 'close']],
  floor: ['on the floor', 0, 'floor', ['dance', 'sit', 'sleep', 'stand']], // 'sleep'
  bed: ['on the bed', 0, 'bed', ['dance', 'sit', 'sleep', 'stand']],
  // wall: ['on the wall', 0, 'wall', ['dance', 'sit']],
};

const wordsL = {
  A: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        ...NounsLs,
        ...NounsL,
      },
      verbs: verbs,
    },
  },
  B: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        door: ['the door', 0, '🚪', ['open', 'close']],
        window: ['the window', 0, '🪟', ['open', 'close']],
        box: ['a box', 0, '📦', ['open', 'close']],
        book: ['a book', 0, '📕', ['open', 'close', 'buy']],
        umbrella: ['an umbrella', 0, '☂️', ['open', 'close', 'buy']],
        folder: ['a folder', 0, '📂', ['open', 'close']],
        cooking: ['Cooking', 0, '🥘', ['study', 'love']],
        math: ['Math', 0, '🧮', ['study', 'love']],
        'rocket science': ['Rocket Science', 0, '🚀', ['study', 'love']],
        programming: ['Programming', 0, '💻', ['study', 'love']],
        english: ['English', 0, '🇬🇧', ['study']],
        spanish: ['Spanish', 0, '🇪🇸', ['study']],
        french: ['French', 0, '🇫🇷', ['study']],
        chinese: ['Chinese', 0, '🇨🇳', ['study']],
        car: ['a car', 0, '🚗', ['buy']],
        bicycle: ['a bicycle', 0, '🚲', ['buy']],
        cat: ['a cat', 0, '🐈', ['buy']],
        duck: ['a duck', 0, '🦆', ['buy']],
        donkey: ['a donkey', 0, '🫏', ['buy']],
        rabbit: ['a rabbit', 0, '🐇', ['buy']],
        hedgehog: ['a hedgehog', 0, '🦔', ['buy']],
        plant: ['a plant', 0, '🪴', ['buy']],
        dog: ['a dog', 0, '🐕', ['buy']],
        parrot: ['a parrot', 0, '🦜', ['buy']],
        rocket: ['a rocket', 0, '🚀', ['buy']],
        circus: ['a circus', 0, '🎪', ['buy']],
        pen: ['a pen', 0, '🖊️', ['buy']],
        pencil: ['a pencil', 0, '✏️', ['buy']],
        bananas: ['bananas', 0, '🍌🍌', ['buy', 'eat']],
        carrots: ['carrots', 0, '🥕🥕', ['buy', 'eat']],
        bacon: ['bacon', 0, '🥓', ['buy', 'eat']],
        apples: ['apples', 0, '🍎🍏', ['buy', 'eat']],
        broccoli: ['broccoli', 0, '🥦', ['buy', 'eat']],
        hamburger: ['a hamburger', 0, '🍔', ['buy', 'eat']],
        hamburgers: ['two hamburgers', 0, '🍔🍔', ['buy', 'eat']],
        tomatoes: ['tomatoes', 0, '🍅🍅', ['buy', 'eat']],

        // chair: ["on a chair", 0, "🪑", ["dance"]],
        // chair: ["on a chair", 0, "", ["dance"]],

        // cabinet: ["cabinet", 0, "🗄️"],
        // floor: ["floor", 0, "floor"],
        // wall: ["wall", 0, "wall"],
      },
      verbs: verbs,
    },
  },
  C: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        door: ['the door', 0, '🚪', ['open', 'close']],
        window: ['the window', 0, '🪟', ['open', 'close']],
        box: ['a box', 0, '📦', ['open', 'close']],
        book: ['a book', 0, '📕', ['open', 'close', 'buy']],
        umbrella: ['an umbrella', 0, '☂️', ['open', 'close', 'buy']],
        folder: ['a folder', 0, '📂', ['open', 'close']],
        cooking: ['Cooking', 0, '🥘', ['study', 'love']],
        math: ['Math', 0, '🧮', ['study', 'love']],
        'rocket science': ['Rocket Science', 0, '🚀', ['study', 'love']],
        programming: ['Programming', 0, '💻', ['study', 'love']],
        english: ['English', 0, '🇬🇧', ['study']],
        spanish: ['Spanish', 0, '🇪🇸', ['study']],
        french: ['French', 0, '🇫🇷', ['study']],
        chinese: ['Chinese', 0, '🇨🇳', ['study']],
        car: ['a car', 0, '🚗', ['buy']],
        bicycle: ['a bicycle', 0, '🚲', ['buy']],
        cat: ['a cat', 0, '🐈', ['buy']],
        duck: ['a duck', 0, '🦆', ['buy']],
        donkey: ['a donkey', 0, '🫏', ['buy']],
        rabbit: ['a rabbit', 0, '🐇', ['buy']],
        hedgehog: ['a hedgehog', 0, '🦔', ['buy']],
        plant: ['a plant', 0, '🪴', ['buy']],
        dog: ['a dog', 0, '🐕', ['buy']],
        parrot: ['a parrot', 0, '🦜', ['buy']],
        rocket: ['a rocket', 0, '🚀', ['buy']],
        circus: ['a circus', 0, '🎪', ['buy']],
        pen: ['a pen', 0, '🖊️', ['buy']],
        pencil: ['a pencil', 0, '✏️', ['buy']],
        bananas: ['bananas', 0, '🍌🍌', ['buy', 'eat']],
        carrots: ['carrots', 0, '🥕🥕', ['buy', 'eat']],
        bacon: ['bacon', 0, '🥓', ['buy', 'eat']],
        apples: ['apples', 0, '🍎🍏', ['buy', 'eat']],
        broccoli: ['broccoli', 0, '🥦', ['buy', 'eat']],
        hamburger: ['a hamburger', 0, '🍔', ['buy', 'eat']],
        hamburgers: ['two hamburgers', 0, '🍔🍔', ['buy', 'eat']],
        tomatoes: ['tomatoes', 0, '🍅🍅', ['buy', 'eat']],

        // chair: ["on a chair", 0, "🪑", ["dance"]],
        // chair: ["on a chair", 0, "", ["dance"]],

        // cabinet: ["cabinet", 0, "🗄️"],
        // floor: ["floor", 0, "floor"],
        // wall: ["wall", 0, "wall"],
      },
      verbs: verbs,
    },
  },
  D: {
    words: {
      'Subject Pronouns': subjectPronouns,
      names: fNames,
      nouns: {
        door: ['the door', 0, '🚪', ['open', 'close']],
        window: ['the window', 0, '🪟', ['open', 'close']],
        box: ['a box', 0, '📦', ['open', 'close']],
        book: ['a book', 0, '📕', ['open', 'close', 'buy']],
        umbrella: ['an umbrella', 0, '☂️', ['open', 'close', 'buy']],
        folder: ['a folder', 0, '📂', ['open', 'close']],
        cooking: ['Cooking', 0, '🥘', ['study', 'love']],
        math: ['Math', 0, '🧮', ['study', 'love']],
        'rocket science': ['Rocket Science', 0, '🚀', ['study', 'love']],
        programming: ['Programming', 0, '💻', ['study', 'love']],
        english: ['English', 0, '🇬🇧', ['study']],
        spanish: ['Spanish', 0, '🇪🇸', ['study']],
        french: ['French', 0, '🇫🇷', ['study']],
        chinese: ['Chinese', 0, '🇨🇳', ['study']],
        car: ['a car', 0, '🚗', ['buy']],
        bicycle: ['a bicycle', 0, '🚲', ['buy']],
        cat: ['a cat', 0, '🐈', ['buy']],
        duck: ['a duck', 0, '🦆', ['buy']],
        donkey: ['a donkey', 0, '🫏', ['buy']],
        rabbit: ['a rabbit', 0, '🐇', ['buy']],
        hedgehog: ['a hedgehog', 0, '🦔', ['buy']],
        plant: ['a plant', 0, '🪴', ['buy']],
        dog: ['a dog', 0, '🐕', ['buy']],
        parrot: ['a parrot', 0, '🦜', ['buy']],
        rocket: ['a rocket', 0, '🚀', ['buy']],
        circus: ['a circus', 0, '🎪', ['buy']],
        pen: ['a pen', 0, '🖊️', ['buy']],
        pencil: ['a pencil', 0, '✏️', ['buy']],
        bananas: ['bananas', 0, '🍌🍌', ['buy', 'eat']],
        carrots: ['carrots', 0, '🥕🥕', ['buy', 'eat']],
        bacon: ['bacon', 0, '🥓', ['buy', 'eat']],
        apples: ['apples', 0, '🍎🍏', ['buy', 'eat']],
        broccoli: ['broccoli', 0, '🥦', ['buy', 'eat']],
        hamburger: ['a hamburger', 0, '🍔', ['buy', 'eat']],
        hamburgers: ['two hamburgers', 0, '🍔🍔', ['buy', 'eat']],
        tomatoes: ['tomatoes', 0, '🍅🍅', ['buy', 'eat']],

        // chair: ["on a chair", 0, "🪑", ["dance"]],
        // chair: ["on a chair", 0, "", ["dance"]],

        // cabinet: ["cabinet", 0, "🗄️"],
        // floor: ["floor", 0, "floor"],
        // wall: ["wall", 0, "wall"],
      },
      verbs: verbs,
    },
  },
};
const SomeNouns = {
  door: 'door',
  bed: 'bed',
  box: 'box',
  book: 'book',
  umbrella: 'umbrella',
  pen: 'pen',
  pencil: 'pencil',
  folder: 'folder',
  window: 'window',
  chair: 'chair',
  table: 'table',
  floor: 'floor',
  wall: 'wall',

  // // cabinet: '🗄️',
};

export const Nouns = {
  A: {
    ...SomeNouns,
  },
  B: {
    cooking: 'cooking',
    math: 'math',
    'rocket science': 'rocket science',
    programming: 'programming',
    ///
    english: 'english',
    spanish: 'spanish',
    french: 'french',
    chinese: 'chinese',
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
    home: 'home',
    school: 'school',
    hotel: 'hotel',
    hospital: 'hospital',
    factory: 'factory',
    church: 'church',
    mosque: 'mosque',
    synagogue: 'synagogue',
    'convenience store': 'convenience store',
    bank: 'bank',
    house: 'house',
    stadium: 'stadium',
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
    pen: 'pen',
    pencil: 'pencil',
    bag: 'bag',
    book: 'book',
    dress: 'dress',
    letter: 'letter',
    // note: 'note',
    // partner: 'partner',
    message: 'message',
    // task: ["task", 0, "task"],
    // friend: ["friend", 0, "friend"],
    // notice: ["notice", 0, "notice"],
  },
};

const allWords = {
  A: {
    'Subject Pronouns': subjectPronounsIcons.A,
    'Verbs (v1)': verbs1Lesson1,
    Nouns: Nouns.A,
    Food: Food.A,
  },
  AX: {
    'Verbs (v2)': verbs2IrrLesson1,
  },
  B: {
    'Object Pronouns': objectPronounsIcons.B,
    Interrogatives,
    Creatures: Creatures.B,
  },
  C: {
    'Verbs (v1)': {
      like: '👍',
      want: 'want',
      think: 'think',
      walk: 'walk',
      run: 'run',
      read: 'read',
    },
    Nouns: Nouns.C,
    Preposition: {
      here: '👇',
      there: '👆',
      at: '@',
      in: '📥',
      out: '📤',
      on: '📲',
      // to: ["to", 0, "to"],
    },
  },
  D: {
    'Possessive Adjectives': possessiveAdjectivesIcons.D,
    Nouns: Nouns.D,
    Family: Family.D,
    Professions: Professions.D,
  },
};

export const test = {A: {}, B: {}, C: {}, D: {}};

function calc(words: typeof wordsL | typeof allWords) {
  return {...words};
}

export const lessons = calc(wordsL);
export const words = calc(allWords);
