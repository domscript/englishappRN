// NOTE .
// For dictinary 6 words min  in one group
// For lessons 4 choices min in each verb

// TODO .
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
// hide, install, move, repair, sell, wash, swim, let, wait, expect, yell, spend, reply, suggest, listen, decide, join
const verbsA = {
  study: {
    value0: 'study',
    value1: 'studies',
    value2: 'studied',
    value3: 'studied',
    ving: 'studying',
    pronoun: false,
    qw: ['what', 'where', 'why', 'how'],
    value_root: 'stud', // for simple tense table
    value_end_v1: 'ies', // for simple tense table
    value_end_v2: 'ied', // for simple tense table
  },
  work: {
    value0: 'work',
    value1: 'works',
    value2: 'worked',
    value3: 'worked',
    ving: 'working',
    pronoun: false,
    qw: ['where', 'why'],
    value_end_v2: 'ed',
  },
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
    pronoun: false,
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
    value_end_v2: 'ed',
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
  fly: {
    value0: 'fly',
    value1: 'flies',
    value2: 'flew',
    value3: 'flown',
    ving: 'flying',
    pronoun: false,
    qw: ['what', 'why', 'how', 'when'],
    value_root: 'fl',
    value_end_v1: 'ies',
  },
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
    value_end_v2: 'ed',
  },
  jump: {
    value0: 'jump',
    value1: 'jumps',
    value2: 'jumped',
    value3: 'jumped',
    ving: 'jumping',
    pronoun: false,
    qw: ['why', 'how', 'when', 'where'],
    value_end_v2: 'ed',
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
  speak: {
    value0: 'speak',
    value1: 'speaks',
    value2: 'spoke',
    value3: 'spoken',
    ving: 'speaking',
    pronoun: false,
    qw: ['what'],
  },
  think: {
    value0: 'think',
    value1: 'thinks',
    value2: 'thought',
    value3: 'thought',
    ving: 'thinking',
    pronoun: false,
    qw: ['what', 'why', 'how'],
  },
  tell: {
    value0: 'tell',
    value1: 'tells',
    value2: 'told',
    value3: 'told',
    ving: 'telling',
    pronoun: true,
    qw: ['what', 'why', 'when'],
  },
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
  write: {
    value0: 'write',
    value1: 'writes',
    value2: 'wrote',
    value3: 'written',
    ving: 'writing',
    pronoun: true,
    qw: ['what', 'why', 'when'],
  },
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
    value_end_v2: 'ed',
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
    value_end_v2: ' ',
  },
  send: {
    value0: 'send',
    value1: 'sends',
    value2: 'sent',
    value3: 'sent',
    ving: 'sending',
    pronoun: false,
    qw: ['how', 'what', 'when'],
  },
  talk: {
    value0: 'talk',
    value1: 'talks',
    value2: 'talked',
    value3: 'talked',
    ving: 'talking',
    pronoun: false,
    qw: ['how', 'what', 'when'],
    value_end_v2: 'ed',
  },
  have: {
    value0: 'have',
    value1: 'has',
    value2: 'had',
    value3: 'had',
    pronoun: false,
    qw: ['what'],
  },
  play: {
    value0: 'play',
    value1: 'plays',
    value2: 'played',
    value3: 'played',
    ving: 'playing',
    pronoun: false,
    qw: ['what'],
    value_end_v2: 'ed',
  },
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
  seek: {
    value0: 'seek',
    value1: 'seeks',
    value2: 'sought',
    value3: 'sought',
    ving: 'seeking',
    pronoun: false,
    qw: ['what', 'when'],
  },
  look: {
    value0: 'look',
    value1: 'looks',
    value2: 'looked',
    value3: 'looked',
    ving: 'looking',
    pronoun: false,
    qw: ['what', 'why', 'when'],
    value_end_v2: 'ed',
  },
  break: {
    value0: 'break',
    value1: 'breaks',
    value2: 'broke',
    value3: 'broken',
    ving: 'breaking',
    pronoun: false,
    qw: ['what', 'why', 'when'],
  },
  turn: {
    value0: 'turn',
    value1: 'turns',
    value2: 'turned',
    value3: 'turned',
    ving: 'turning',
    pronoun: false,
    qw: ['why', 'when'],
    value_end_v2: 'ed',
  },
  /// without '-ing'
  understand: {
    value0: 'understand',
    value1: 'understands',
    value2: 'understood',
    value3: 'understood',
    pronoun: true,
    qw: ['how', 'what', 'why', 'when'],
  },
  know: {
    value0: 'know',
    value1: 'knows',
    value2: 'knew',
    value3: 'known',
    pronoun: true,
    qw: ['how', 'what'],
  },

  /// TODO: -ing
  see: {
    value0: 'see',
    value1: 'sees',
    value2: 'saw',
    value3: 'seen',
    pronoun: true,
    qw: ['how', 'where', 'what', 'why', 'when'],
  },
  // watch: {
  //   value0: "watch",
  //   value1: "",
  //   value2: "",
  //   value3: "",
  // pronoun: false,
  // },
  say: {
    value0: 'say',
    value1: 'says',
    value2: 'said',
    value3: 'said',
    pronoun: false,
    qw: ['what', 'when'],
  },
  buy: {
    value0: 'buy',
    value1: 'buys',
    value2: 'bought',
    value3: 'bought',
    pronoun: true,
    qw: ['what', 'where', 'why', 'when'],
  },
  hear: {
    value0: 'hear',
    value1: 'hears',
    value2: 'heard',
    value3: 'heard',
    pronoun: true,
    qw: ['what', 'when'],
  },
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
    qw: ['why', 'when'],
    value_end_v2: 'ed',
  },
  meet: {
    value0: 'meet',
    value1: 'meets',
    value2: 'met',
    value3: 'met',
    pronoun: true,
    qw: ['how', 'when'],
  },
  make: {
    value0: 'make',
    value1: 'makes',
    value2: 'made',
    value3: 'made',
    pronoun: true,
    qw: ['what'],
  },
  // get: { value0: "get", value1: "gets", value2: "got", value3: "got" },
  find: {
    value0: 'find',
    value1: 'finds',
    value2: 'found',
    value3: 'found',
    pronoun: false,
    qw: ['what', 'when'],
  },
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
  start: {
    value0: 'start',
    value1: 'starts',
    value2: 'started',
    value3: 'started',
    pronoun: false,
    qw: ['what', 'why', 'how', 'when'],
    value_end_v2: 'ed',
  },
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
    value_end_v2: 'ed',
  },
  bring: {
    value0: 'bring',
    value1: 'brings',
    value2: 'brought',
    value3: 'brought',
    pronoun: false,
    qw: ['when', 'what', 'why'],
  },
  begin: {
    value0: 'begin',
    value1: 'begins',
    value2: 'began',
    value3: 'begun',
    pronoun: false,
    qw: ['where', 'how', 'when'],
  },

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
    value_end_v2: 'ed',
  },
};

// check, take, put
const verbsD = {
  love: {...verbsA.love, tense: [1, 2]},
  bring: {...verbsA.bring, tense: [0, 2, 6, 8]},
  forget: {...verbsA.forget, tense: [0, 5]},
  give: {...verbsA.give, tense: [8]},
  help: {...verbsA.help, tense: [0, 2, 6, 8]},
  lose: {...verbsA.lose, tense: [0, 5]},
};

const verbs = {...verbsA, ...verbsC};
export const Sverbs = {...verbsA, ...verbsC}; // used for help lesson 1

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
  'break',
  'hear',
  'speak',
  'tell',
  'say',
  'meet',
  'write',
  'begin',
  'see',
  'send',
  'fly',
  'understand',
  'have',
  'know',
  'make',
  'find',
  'seek',

  'take',

  'go',
  'feel',
  'get',
  'leave',

  'wear',
  'choose',
  'drive',
  'ride',
  'sell',
  'hold',
  'keep',
  'cut',
  'burst',
  'build',
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

function removePlurals(professions) {
  const updatedProfessions = {};
  for (const letter in professions) {
    if (Object.hasOwnProperty.call(professions, letter)) {
      const professionsForLetter = professions[letter];
      const updatedProfessionsForLetter = {};

      for (const profession in professionsForLetter) {
        if (Object.hasOwnProperty.call(professionsForLetter, profession)) {
          // Remove everything after the first semicolon (if any)
          const singularForm = professionsForLetter[profession]
            .split(';')[0]
            .trim();
          updatedProfessionsForLetter[profession] = singularForm;
        }
      }

      updatedProfessions[letter] = updatedProfessionsForLetter;
    }
  }
  return updatedProfessions;
}

function convertToNewFormat(professions) {
  const result = {};

  for (const key in professions) {
    if (Object.hasOwnProperty.call(professions, key)) {
      const [singular, plural] = professions[key]
        .split(';')
        .map(item => item.trim());
      result[plural] = singular;
    }
  }

  return result;
}

const Professions = {
  D: {
    accountant: 'accountant;accountants',
    actor: 'actor;actors',
    artist: 'artist;artists', // // Artist/Painter/Sculptor
    // assistant: 'assistant',
    astronaut: 'astronaut;astronauts',
    baker: 'baker;bakers',
    builder: 'builder;builders', // construction worker,
    cardiologist: 'cardiologist;cardiologists',
    // cashier: 'cashier',
    cleaner: 'cleaner;cleaners',
    cook: 'cook;cooks',
    // consultant: 'consultant',
    dentist: 'dentist;dentists',
    designer: 'designer;designers',
    detective: 'detective;detectives',
    doctor: 'doctor;doctors',
    driver: 'driver;drivers',
    engineer: 'engineer;engineers',
    farmer: 'farmer;farmers',
    firefighter: 'firefighter;firefighters',
    // friend: 'friend',
    guide: 'guide;guides',
    interpreter: 'interpreter;interpreters',
    historian: 'historian;historians',
    judge: 'judge;judges',
    lawyer: 'lawyer;lawyers',
    // manager: 'manager',
    mechanic: 'mechanic;mechanics',
    musician: 'musician;musicians',
    nurse: 'nurse;nurses',
    nutritionist: 'nutritionist;nutritionists',
    'office clerk': 'office clerk;office clerks',
    orthopedist: 'orthopedist;orthopedists',
    pilot: 'pilot;pilots',
    'police officer': 'police officer;police officers',
    // partner: 'partner',
    programmer: 'programmer;programmers',
    receptionist: 'receptionist;receptionists',
    // 'retail salesperson': 'retail salesperson',
    // 'sales manager': "sales manager",
    scientist: 'scientist;scientists',
    singer: 'singer;singers',
    'social worker': 'social worker;social workers',
    'taxi driver': 'taxi driver;taxi drivers',
    'truck driver': 'truck driver;truck drivers',
    welder: 'welder;welders',
    teacher: 'teacher;teachers',
    writer: 'writer;writers',

    // Journalist: 'Journalist;Journalists', // Reporter

    ////

    // 'Data Scientist': 'Data Scientist;Data Scientists',
    // 'Machine Learning Engineer':
    //   'Machine Learning Engineer;Machine Learning Engineers',
    // 'Environmental Specialist':
    //   'Environmental Specialist;Environmental Specialists',
    // 'Cybersecurity Analyst': 'Cybersecurity Analyst;Cybersecurity Analysts',
    // 'Content Creator': 'Content Creator;Content Creators', // Influencer
    // 'Remote Healthcare Provider':
    //   'Remote Healthcare Provider;Remote Healthcare Providers',
    // 'Renewable Energy Technician':
    //   'Renewable Energy Technician;Renewable Energy Technicians',
    // 'E-commerce Specialist': 'E-commerce Specialist;E-commerce Specialists',
    // 'Blockchain Developer': 'Blockchain Developer;Blockchain Developers',
    // 'Augmented Reality Developer':
    //   'Augmented Reality Developer;Augmented Reality Developers', // Virtual Reality
    // 'Administrative Assistant':
    //   'Administrative Assistant;Administrative Assistants',
    // 'Marketing Manager': 'Marketing Manager;Marketing Managers',
    // 'Financial Advisor': 'Financial Advisor;Financial Advisors', // Planner
    // Knight: 'Knight;Knights',
    // Blacksmith: 'Blacksmith;Blacksmiths',
    // Spy: 'Spy;Spies', // Secret Agent
    // Soldier: 'Soldier;Soldiers', // Military Personnel
    // Businessperson: 'Businessperson;Businesspeople', // Entrepreneur
    // Athlete: 'Athlete;Athletes', // Sports Professional
    // Architect: 'Architect;Architects',
    // Politician: 'Politician;Politicians', // Government Official
    // Psychologist: 'Psychologist;Psychologists', // Psychiatrist
    // Paramedic: 'Paramedic;Paramedics', // EMT
    // 'Fashion Designer': 'Fashion Designer;Fashion Designers',
    // Photographer: 'Photographer;Photographers',
    // Waiter: 'Waiter;Waiters', // Waitress
    // Bartender: 'Bartender;Bartenders',
    // Librarian: 'Librarian;Librarians',
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

export const spWordE = {
  bananas: 'banana',
  carrots: 'carrot',
  hamburgers: 'hamburger',
  strawberries: 'strawberry',
  tomatoes: 'tomato',
  apples: 'apple',
  corn: 'corn',
  onions: 'onion',
  potatoes: 'potato',
  cookies: 'cookie',
  chairs: 'chair',
  windows: 'window',
  tangerines: 'tangerine',
  'bell peppers': 'bell pepper',
  avocados: 'avocado',
  eggplants: 'eggplant',
  lemons: 'lemon',
  mangos: 'mango',
  peaches: 'peach',
  pears: 'pear',
  kiwis: 'kiwi',
  pineapples: 'pineapple',
  pens: 'pen',
  pencils: 'pencil',
  ...convertToNewFormat(Professions.D),
  ...convertToNewFormat(Professions.E),
};

export const Flags = {
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
  bananas: ['bananas', 0, 'bananas', ['buy', 'eat', 'find']],
  carrots: ['carrots', 0, 'carrots', ['buy', 'eat', 'find']],
  hamburgers: ['hamburgers', 0, 'hamburgers', ['buy', 'eat', 'find']],
  tomatoes: ['tomatoes', 0, 'tomatoes', ['buy', 'eat', 'find']],
  apples: ['apples', 0, 'apples', ['buy', 'eat', 'love', 'find']],
  corn: ['corn', 0, 'corn', ['buy', 'eat', 'love', 'find']],
  onions: ['onions', 0, 'onions', ['buy', 'find']],
  tangerines: ['tangerines', 0, 'tangerines', ['buy', 'eat', 'have', 'find']],
  'bell peppers': [
    'bell peppers',
    0,
    'bell peppers',
    ['buy', 'eat', 'have', 'find'],
  ],
  avocados: ['avocados', 0, 'avocados', ['buy', 'eat', 'have', 'find']],
  eggplants: ['eggplants', 0, 'eggplants', ['buy', 'have', 'find']],
  lemons: ['lemons', 0, 'lemons', ['buy', 'eat', 'have', 'find']],
  mangos: ['mangos', 0, 'mangos', ['buy', 'eat', 'have', 'find']],
  peaches: ['peaches', 0, 'peaches', ['buy', 'eat', 'have', 'find']],
  pears: ['pears', 0, 'pears', ['buy', 'eat', 'have', 'find']],
  kiwis: ['kiwis', 0, 'kiwis', ['buy', 'eat', 'have', 'find']],
  pineapples: ['pineapples', 0, 'pineapples', ['buy', 'eat', 'have', 'find']],
  pens: ['pens', 0, 'pens', ['buy', 'have', 'bring', 'give', 'find', 'ask']],
  pencils: [
    'pencils',
    0,
    'pencils',
    ['buy', 'have', 'bring', 'give', 'find', 'ask'],
  ],
  potatoes: ['potatoes', 0, 'potatoes', ['buy', 'cook', 'find']],
  strawberries: ['strawberries', 0, 'strawberry', ['buy', 'eat']],
  cookies: ['cookies', 0, 'cookies', ['buy', 'eat', 'love', 'find']],
  chairs: ['on chairs', 0, 'chairs', ['sleep']],
  windows: ['windows', 0, 'windows', ['open', 'close']],
  money: ['money', 0, 'money', ['find', 'ask']],
};
// ask, think, run, walk, like, want

// coconut: 'coconut',
// garlic: 'garlic',
// 'hot pepper': 'hot pepper',
// melon: 'melon',
// olive: 'olive',
// 'sweet potato': 'sweet potato',

const NounsL: NounsLessonsInt = {
  door: ['the door', 0, 'door', ['open', 'close', 'find']],
  window: ['the window', 0, 'window', ['open', 'close']],
  bag: ['a bag', 0, 'bag', ['open', 'close', 'buy', 'find']],
  box: ['a box', 0, 'box', ['open', 'close', 'buy', 'bring', 'see', 'send']],
  book: [
    'a book',
    0,
    'book',
    ['open', 'close', 'buy', 'read', 'have', 'see', 'give'],
  ],
  message: ['a message', 0, 'message', ['read', 'write', 'see', 'send']],
  gift: ['a gift', 0, 'gift', ['see', 'send', 'give']],
  text: ['a text', 0, 'text', ['read', 'write', 'see']],
  letter: ['a letter', 0, 'letter', ['read', 'write', 'see', 'send', 'find']],
  email: ['an email', 0, 'email', ['read', 'write', 'see', 'send']],
  newspaper: [
    'newspaper',
    0,
    'newspaper',
    ['open', 'close', 'buy', 'read', 'ask'],
  ],
  umbrella: [
    'an umbrella',
    0,
    'umbrella',
    ['open', 'close', 'buy', 'have', 'bring'],
  ],
  folder: ['a folder', 0, 'folder', ['open', 'close', 'buy', 'find']],
  milk: [
    'a glass of milk',
    0,
    'glass of milk',
    ['drink', 'buy', 'have', 'ask'],
  ],
  // 'hot chocolate': [
  //   'a glass of hot chocolate',
  //   0,
  //   'glass of hot chocolate',
  //   ['drink'],
  // ],
  // juice: ['a glass of juice', 0, 'glass of juice', ['drink']],
  water: [
    'a glass of water',
    0,
    'glass of water',
    ['drink', 'have', 'give', 'ask'],
  ],
  // water: ['water', 0, 'droplet', ['']],
  // wine: ['a glass of wine', 0, 'wine', ['drink']],
  // beer: ['a mug of beer', 0, 'beer', ['drink']],
  tea: ['a cup of tea', 0, 'tea', ['drink', 'give']],
  'juice box': ['a box of juice', 0, 'juice box', ['drink', 'buy', 'ask']],
  hamburger: ['a hamburger', 0, 'hamburger', ['buy', 'eat', 'have']],
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
  pen: ['a pen', 0, 'pen', ['buy', 'have', 'bring', 'give', 'ask']],
  pencil: ['a pencil', 0, 'pencil', ['buy', 'have', 'bring', 'give', 'ask']],
  // bacon: ['bacon', 0, 'bacon', ['buy', 'eat']],

  'bell pepper': ['a bell pepper', 0, 'bell pepper', ['buy', 'eat', 'have']],
  carrot: ['a carrot', 0, 'carrot', ['buy', 'eat', 'have']],
  tangerine: ['a tangerine', 0, 'tangerine', ['buy', 'eat', 'have']],
  avocado: ['an avocado', 0, 'avocado', ['buy', 'eat', 'have']],
  watermelon: ['a peace of watermelon', 0, 'watermelon', ['eat', 'have']],
  cucumber: ['a cucumber', 0, 'cucumber', ['buy', 'eat', 'have']],
  eggplant: ['an eggplant', 0, 'eggplant', ['buy', 'have']],
  lemon: ['a lemon', 0, 'lemon', ['buy', 'eat', 'have']],
  mango: ['a mango', 0, 'mango', ['buy', 'eat', 'have']],
  peach: ['a peach', 0, 'peach', ['buy', 'eat', 'have']],
  pear: ['a pear', 0, 'pear', ['buy', 'eat', 'have']],
  kiwi: ['a kiwi', 0, 'kiwi', ['buy', 'eat', 'have']],
  blueberries: ['blueberries', 0, 'blueberries', ['buy', 'eat', 'have']],
  grapes: ['grapes', 0, 'grapes', ['buy', 'eat', 'have']],
  cherries: ['cherries', 0, 'cherries', ['buy', 'eat', 'have']],
  pineapple: ['a pineapple', 0, 'pineapple', ['buy', 'eat', 'have']],
  broccoli: ['broccoli', 0, 'broccoli', ['buy', 'eat', 'have']],
  chair: [
    'on the chair',
    0,
    'chair',
    ['dance', 'sit', 'stand', 'bring', 'jump'],
  ],
  table: [
    'on the table',
    0,
    'table',
    ['dance', 'sit', 'sleep', 'stand', 'write', 'jump'],
  ],
  // cabinet: ['cabinet', 0, 'cabinet', ['open', 'close']],
  floor: [
    'on the floor',
    0,
    'floor',
    ['dance', 'sit', 'sleep', 'stand', 'jump'],
  ],
  bed: ['on the bed', 0, 'bed', ['dance', 'sit', 'sleep', 'stand', 'jump']],
  // wall: ['on the wall', 0, 'wall', ['paint', 'lean']],

  // juice: 'juice box',

  // seat: 'seat',
  // couch: 'couch',

  // man: 'man',
  // woman: 'woman',
  // toilet: 'toilet',
};
// TODO fall, break

['love', 'bring', 'forget', 'give', 'help', 'lose'];
// check, see, take, put, find

const NounsLC: NounsLessonsInt = {
  // Transport
  car: ['in the car', 0, 'car', ['be']],

  // Buildings
  home: ['at home', 0, 'home', ['be']],
  school: ['at school', 0, 'school', ['be']],
  work: ['at work', 0, 'work ', ['be']],
  cinema: ['at the Cinema', 0, 'cinema', ['be']],
  room: ['in the room', 0, 'room', ['be']],
  bedroom: ['in the bedroom', 0, 'bedroom', ['be']],
  basement: ['in the basement', 0, 'basement', ['be']],
  kitchen: ['in the kitchen', 0, 'kitchen', ['be']],
  house: ['in the house', 0, 'house', ['be']],
  office: ['in the Office', 0, 'office', ['be']],
  bank: ['at the Bank', 0, 'bank', ['be']],
  museum: ['at the Museum', 0, 'museum', ['be']],
  theater: ['at the Theater', 0, 'theater', ['be']],
  castle: ['at the Castle', 0, 'castle', ['be']],
  church: ['at the Church', 0, 'church', ['be']],
  circus: ['at the Circus', 0, 'circus', ['be']],
  'convenience store': [
    'at the Convenience Store',
    0,
    'convenience store',
    ['be'],
  ],
  'department store': [
    'at the Department Store',
    0,
    'department store',
    ['be'],
  ],
  factory: ['at the Factory', 0, 'factory', ['be']],
  hospital: ['at the Hospital', 0, 'hospital', ['be']],
  hotel: ['at the Hotel', 0, 'hotel', ['be']],
  mosque: ['at the Mosque', 0, 'mosque', ['be']],
  stadium: ['at the Stadium', 0, 'stadium', ['be']],
  synagogue: ['at the Synagogue', 0, 'synagogue', ['be']],
  'post office': ['at the Post Office', 0, 'post office', ['be']],

  // Events
  Carnaval: ['at Carnaval', 0, 'Carnaval', ['be']],
  Concert: ['at the Concert', 0, 'Concert', ['be']],
  Exhibition: ['at the Exhibition', 0, 'Exhibition', ['be']],
  'Fashion Show': ['at the Fashion Show', 0, 'Fashion Show', ['be']],
  Meeting: ['at the Meeting', 0, 'Meeting', ['be']],
  Presentation: ['at the Presentation', 0, 'Presentation', ['be']],

  // Countries
  Argentina: ['in Argentina', 0, 'Argentina', ['be']],
  Australia: ['in Australia', 0, 'Australia', ['be']],
  Canada: ['in Canada', 0, 'Canada', ['be']],
  China: ['in China', 0, 'China', ['be']],
  France: ['in France', 0, 'France', ['be']],
  Germany: ['in Germany', 0, 'Germany', ['be']],
  India: ['in India', 0, 'India', ['be']],
  Japan: ['in Japan', 0, 'Japan', ['be']],
  'South Korea': ['in South Korea', 0, 'South Korea', ['be']],
  Spain: ['in Spain', 0, 'Spain', ['be']],
  Panama: ['in Panama', 0, 'Panama', ['be']],
  Thailand: ['in Thailand', 0, 'Thailand', ['be']],
  'the UK': ['in the UK', 0, 'the UK', ['be']],
  'the USA': ['in the USA', 0, 'the USA', ['be']],

  // wouldlike
  apple: ['an apple', 0, 'apple', ['wouldlike', 'want', 'like']],
  tea: ['a cup of tea', 0, 'tea', ['wouldlike', 'want', 'like']],
  avocado: ['an avocado', 0, 'avocado', ['wouldlike', 'want', 'like']],
  milk: ['a glass of milk', 0, 'glass of milk', ['wouldlike', 'want', 'like']],
};

const NounsLD: NounsLessonsInt = {
  'credit card': [
    'credit card',
    0,
    'credit card',
    ['bring', 'give', 'lose', 'forget'],
  ],
  money: ['money', 0, 'money', ['bring', 'give', 'lose']],
  ticket: ['ticket', 0, 'ticket', ['bring', 'give', 'lose', 'forget']],
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
        ...NounsLC,
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
  letter: 'letter',
  email: 'email',
  gift: 'gift',
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
  'work ': 'work ',
};

export const Events = {
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
    // cake: 'cake',
    // drink: 'drink',
    // film: 'film',
    // cup: 'cup',
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
    Professions: removePlurals(Professions).D,
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
