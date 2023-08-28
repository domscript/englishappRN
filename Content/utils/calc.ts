import {getRandomInt, shuffleArray} from './smallFunctions';
import {WordsOneLessonInt} from '../data/words';

interface BeInterface {
  i: string[];
  you: string[];
  he: string[];
  she: string[];
  we: string[];
  they: string[];
  it: string[];
}

const BeScheme: BeInterface[] = [
  {
    i: ['i', 'was'],
    you: ['you', 'were'],
    he: ['he', 'was'],
    she: ['she', 'was'],
    we: ['we', 'were'],
    they: ['they', 'were'],
    it: ['it', 'was'],
  },
  {
    i: ['i', 'am'],
    you: ['you', 'are'],
    he: ['he', 'is'],
    she: ['she', 'is'],
    we: ['we', 'are'],
    they: ['they', 'are'],
    it: ['it', 'is'],
  },
  {
    i: ['i', 'will be'],
    you: ['you', 'will be'],
    he: ['he', 'will be'],
    she: ['she', 'will be'],
    we: ['we', 'will be'],
    they: ['they', 'will be'],
    it: ['it', 'will be'],
  },
  {
    i: ['i', "wasn't"],
    you: ['you', "weren't"],
    he: ['he', "wasn't"],
    she: ['she', "wasn't"],
    we: ['we', "weren't"],
    they: ['they', "weren't"],
    it: ['it', "wasn't"],
  },
  {
    i: ['i', 'am not'],
    you: ['you', "aren't"],
    he: ['he', "isn't"],
    she: ['she', "isn't"],
    we: ['we', "aren't"],
    they: ['they', "aren't"],
    it: ['it', "isn't"],
  },
  {
    i: ['i', "won't be"],
    you: ['you', "won't be"],
    he: ['he', "won't be"],
    she: ['she', "won't be"],
    we: ['we', "won't be"],
    they: ['they', "won't be"],
    it: ['it', "won't be"],
  },
  {
    i: ['was', 'i'],
    you: ['were', 'you'],
    he: ['was', 'he'],
    she: ['was', 'she'],
    we: ['were', 'we'],
    they: ['were', 'they'],
    it: ['was', 'it'],
  },
  {
    i: ['am', 'i'],
    you: ['are', 'you'],
    he: ['is', 'he'],
    she: ['is', 'she'],
    we: ['are', 'we'],
    they: ['are', 'they'],
    it: ['is', 'it'],
  },
  {
    i: ['will', 'i', 'be'],
    you: ['will', 'you', 'be'],
    he: ['will', 'he', 'be'],
    she: ['will', 'she', 'be'],
    we: ['will', 'we', 'be'],
    they: ['will', 'they', 'be'],
    it: ['will', 'it', 'be'],
  },
];

export const SimpleTenseScheme = (words: WordsOneLessonInt) => {
  const {verbs, nouns} = words.words;

  const allLessonVerbs = Object.keys(verbs);

  const verb = allLessonVerbs[getRandomInt(0, allLessonVerbs.length - 1)];

  type SubjectPronounsType = 'i' | 'you' | 'he' | 'she' | 'we' | 'they' | 'it';

  const subjectPronouns: SubjectPronounsType[] = [
    'i',
    'you',
    'he',
    'she',
    'we',
    'they',
    'it',
  ];

  const subject = subjectPronouns[getRandomInt(0, subjectPronouns.length - 1)];

  const aLLscheme: {
    i: string[];
    you: string[];
    he: string[];
    she: string[];
    we: string[];
    they: string[];
    it: string[];
  }[] = [
    {
      i: ['i', verbs[verb].value2],
      you: ['you', verbs[verb].value2],
      he: ['he', verbs[verb].value2],
      she: ['she', verbs[verb].value2],
      we: ['we', verbs[verb].value2],
      they: ['they', verbs[verb].value2],
      it: ['it', verbs[verb].value2],
    },
    {
      i: ['i', verbs[verb].value0],
      you: ['you', verbs[verb].value0],
      he: ['he', verbs[verb].value1],
      she: ['she', verbs[verb].value1],
      we: ['we', verbs[verb].value0],
      they: ['they', verbs[verb].value0],
      it: ['it', verbs[verb].value1],
    },
    {
      i: ['i', 'will', verbs[verb].value0],
      you: ['you', 'will', verbs[verb].value0],
      he: ['he', 'will', verbs[verb].value0],
      she: ['she', 'will', verbs[verb].value0],
      we: ['we', 'will', verbs[verb].value0],
      they: ['they', 'will', verbs[verb].value0],
      it: ['it', 'will', verbs[verb].value0],
    },
    {
      i: ['i', "didn't", verbs[verb].value0],
      you: ['you', "didn't", verbs[verb].value0],
      he: ['he', "didn't", verbs[verb].value0],
      she: ['she', "didn't", verbs[verb].value0],
      we: ['we', "didn't", verbs[verb].value0],
      they: ['they', "didn't", verbs[verb].value0],
      it: ['it', "didn't", verbs[verb].value0],
    },
    {
      i: ['i', "don't", verbs[verb].value0],
      you: ['you', "don't", verbs[verb].value0],
      he: ['he', "doesn't", verbs[verb].value0],
      she: ['she', "doesn't", verbs[verb].value0],
      we: ['we', "don't", verbs[verb].value0],
      they: ['they', "don't", verbs[verb].value0],
      it: ['it', "doesn't", verbs[verb].value0],
    },
    {
      i: ['i', "won't", verbs[verb].value0],
      you: ['you', "won't", verbs[verb].value0],
      he: ['he', "won't", verbs[verb].value0],
      she: ['she', "won't", verbs[verb].value0],
      we: ['we', "won't", verbs[verb].value0],
      they: ['they', "won't", verbs[verb].value0],
      it: ['it', "won't", verbs[verb].value0],
    },
    {
      i: ['did', 'i', verbs[verb].value0],
      you: ['did', 'you', verbs[verb].value0],
      he: ['did', 'he', verbs[verb].value0],
      she: ['did', 'she', verbs[verb].value0],
      we: ['did', 'we', verbs[verb].value0],
      they: ['did', 'they', verbs[verb].value0],
      it: ['did', 'it', verbs[verb].value0],
    },
    {
      i: ['do', 'i', verbs[verb].value0],
      you: ['do', 'you', verbs[verb].value0],
      he: ['does', 'he', verbs[verb].value0],
      she: ['does', 'she', verbs[verb].value0],
      we: ['do', 'we', verbs[verb].value0],
      they: ['do', 'they', verbs[verb].value0],
      it: ['does', 'it', verbs[verb].value0],
    },
    {
      i: ['will', 'i', verbs[verb].value0],
      you: ['will', 'you', verbs[verb].value0],
      he: ['will', 'he', verbs[verb].value0],
      she: ['will', 'she', verbs[verb].value0],
      we: ['will', 'we', verbs[verb].value0],
      they: ['will', 'they', verbs[verb].value0],
      it: ['will', 'it', verbs[verb].value0],
    },
  ];

  let nounsN: [string, string][] = [];

  try {
    let extraW: [string, string][] = Object.values(nouns)
      .filter(el => el[3]?.includes(verb))
      ?.map(el => [el[0], el[2]]);

    // Shuffle the extraW array randomly
    extraW = shuffleArray(extraW);

    nounsN = extraW.slice(0, 4);
  } catch (error) {
    console.error('Error create nounsN data:', error);
  }

  const insexOfSubject = subjectPronouns.indexOf(subject);
  subjectPronouns.splice(insexOfSubject, 1);

  const subjectExtraWords = subjectPronouns
    .splice(0, 3)
    .concat(subject)
    .sort(() => Math.random() - 0.5);

  const tenseNoteIndex = Math.floor(Math.random() * 9);

  const correctVerb = aLLscheme[tenseNoteIndex][subject].map(el =>
    el === '' ? subject : el,
  );

  const particles = [
    'will',
    'does',
    'do',
    'did',
    "won't",
    "don't",
    "doesn't",
    "didn't",
  ].sort(() => Math.random() - 0.5);

  let correctDoBe: string | null = null;
  if (tenseNoteIndex > 1 && tenseNoteIndex < 6) {
    correctDoBe = correctVerb[1];
  } else if (tenseNoteIndex >= 6) {
    correctDoBe = correctVerb[0];
  }
  const newParticles = particles.filter(el => {
    if (correctDoBe) return el !== correctDoBe;
    return true;
  });

  let fourDoBe;
  if (correctDoBe)
    fourDoBe = [correctDoBe, ...newParticles]
      .splice(0, 4)
      .sort(() => Math.random() - 0.5);
  else
    fourDoBe = [...newParticles].splice(0, 4).sort(() => Math.random() - 0.5);

  const threeVerbs = [
    verbs[verb].value0,
    verbs[verb].value1,
    verbs[verb].value2,
    '',
  ];

  const nouns0 = nounsN.map(el => el[0]).sort();

  let data = [];
  if (Math.random() > 0.5)
    data = [...fourDoBe, ...subjectExtraWords, ...threeVerbs, ...nouns0];
  else data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs, ...nouns0];

  const abc = nounsN.length > 0 ? nounsN[0] : ['', ''];

  return {
    tenseNoteIndex,
    question: [...correctVerb, abc[0]],
    testData: data,
    subject,
    verb,
    note: aLLscheme.map(el => el[subject]),
    qWord: [subject, verb, abc[1]],
  };
};

export const SecondLesson = (words: WordsOneLessonInt) => {
  const {verbs, nouns} = words.words;

  const allLessonVerbs = Object.keys(verbs);

  const verb = allLessonVerbs[getRandomInt(0, allLessonVerbs.length - 1)];

  type SubjectPronounsType = 'i' | 'you' | 'he' | 'she' | 'we' | 'they' | 'it';
  type QuestionWordsType = 'when' | 'what' | 'where' | 'who' | 'how' | 'why';

  const subjectPronouns: SubjectPronounsType[] = [
    'i',
    'you',
    'he',
    'she',
    'we',
    'they',
    'it',
  ];

  type ObjectPronounsType =
    | 'me'
    | 'you '
    | 'him'
    | 'her'
    | 'us'
    | 'them'
    | 'it ';

  const ObjectPronouns: ObjectPronounsType[] = [
    'me',
    'you ',
    'him',
    'her',
    'us',
    'them',
    'it ',
  ];

  const QuestionWords: QuestionWordsType[] = [
    'when',
    'what',
    'where',
    'who',
    'how',
    'why',
  ];

  // i: ['i', 'me', 'my', 'mine', 'myself'],
  // you: ['you', 'you', 'your', 'yours', 'yourself'],
  // he: ['he', 'him', 'his', 'his', 'himself'],
  // she: ['she', 'her', 'her', 'hers', 'herself'],
  // it: ['it', 'it', 'its', '', 'itself'],
  // we: ['we', 'us', 'our', 'ours', 'ourself'],
  // they: ['they', 'them', 'their', 'theirs', 'themselves'],

  const objectExtraWords = ObjectPronouns.sort(
    () => Math.random() - 0.5,
  ).splice(0, 4);

  const ObjectPronoun = objectExtraWords[getRandomInt(0, 3)];

  const subject = subjectPronouns[getRandomInt(0, subjectPronouns.length - 1)];

  const aLLscheme: {
    i: string[];
    you: string[];
    he: string[];
    she: string[];
    we: string[];
    they: string[];
    it: string[];
  }[] = [
    {
      i: ['i', verbs[verb].value2],
      you: ['you', verbs[verb].value2],
      he: ['he', verbs[verb].value2],
      she: ['she', verbs[verb].value2],
      we: ['we', verbs[verb].value2],
      they: ['they', verbs[verb].value2],
      it: ['it', verbs[verb].value2],
    },
    {
      i: ['i', verbs[verb].value0],
      you: ['you', verbs[verb].value0],
      he: ['he', verbs[verb].value1],
      she: ['she', verbs[verb].value1],
      we: ['we', verbs[verb].value0],
      they: ['they', verbs[verb].value0],
      it: ['it', verbs[verb].value1],
    },
    {
      i: ['i', 'will', verbs[verb].value0],
      you: ['you', 'will', verbs[verb].value0],
      he: ['he', 'will', verbs[verb].value0],
      she: ['she', 'will', verbs[verb].value0],
      we: ['we', 'will', verbs[verb].value0],
      they: ['they', 'will', verbs[verb].value0],
      it: ['it', 'will', verbs[verb].value0],
    },
    {
      i: ['i', "didn't", verbs[verb].value0],
      you: ['you', "didn't", verbs[verb].value0],
      he: ['he', "didn't", verbs[verb].value0],
      she: ['she', "didn't", verbs[verb].value0],
      we: ['we', "didn't", verbs[verb].value0],
      they: ['they', "didn't", verbs[verb].value0],
      it: ['it', "didn't", verbs[verb].value0],
    },
    {
      i: ['i', "don't", verbs[verb].value0],
      you: ['you', "don't", verbs[verb].value0],
      he: ['he', "doesn't", verbs[verb].value0],
      she: ['she', "doesn't", verbs[verb].value0],
      we: ['we', "don't", verbs[verb].value0],
      they: ['they', "don't", verbs[verb].value0],
      it: ['it', "doesn't", verbs[verb].value0],
    },
    {
      i: ['i', "won't", verbs[verb].value0],
      you: ['you', "won't", verbs[verb].value0],
      he: ['he', "won't", verbs[verb].value0],
      she: ['she', "won't", verbs[verb].value0],
      we: ['we', "won't", verbs[verb].value0],
      they: ['they', "won't", verbs[verb].value0],
      it: ['it', "won't", verbs[verb].value0],
    },
    {
      i: ['did', 'i', verbs[verb].value0],
      you: ['did', 'you', verbs[verb].value0],
      he: ['did', 'he', verbs[verb].value0],
      she: ['did', 'she', verbs[verb].value0],
      we: ['did', 'we', verbs[verb].value0],
      they: ['did', 'they', verbs[verb].value0],
      it: ['did', 'it', verbs[verb].value0],
    },
    {
      i: ['do', 'i', verbs[verb].value0],
      you: ['do', 'you', verbs[verb].value0],
      he: ['does', 'he', verbs[verb].value0],
      she: ['does', 'she', verbs[verb].value0],
      we: ['do', 'we', verbs[verb].value0],
      they: ['do', 'they', verbs[verb].value0],
      it: ['does', 'it', verbs[verb].value0],
    },
    {
      i: ['will', 'i', verbs[verb].value0],
      you: ['will', 'you', verbs[verb].value0],
      he: ['will', 'he', verbs[verb].value0],
      she: ['will', 'she', verbs[verb].value0],
      we: ['will', 'we', verbs[verb].value0],
      they: ['will', 'they', verbs[verb].value0],
      it: ['will', 'it', verbs[verb].value0],
    },
  ];

  let nounsN: [string, string][] = [];

  try {
    let extraW: [string, string][] = Object.values(nouns)
      .filter(el => el[3]?.includes(verb))
      ?.map(el => [el[0], el[2]]);

    // Shuffle the extraW array randomly
    extraW = shuffleArray(extraW);

    nounsN = extraW.slice(0, 4);
  } catch (error) {
    console.error('Error create nounsN data:', error);
  }

  const insexOfSubject = subjectPronouns.indexOf(subject);
  subjectPronouns.splice(insexOfSubject, 1);

  const subjectExtraWords = subjectPronouns
    .splice(0, 3)
    .concat(subject)
    .sort(() => Math.random() - 0.5);

  const tenseNoteIndex = Math.floor(Math.random() * 9);

  const correctVerb = aLLscheme[tenseNoteIndex][subject].map(el =>
    el === '' ? subject : el,
  );

  const particles = [
    'will',
    'does',
    'do',
    'did',
    "won't",
    "don't",
    "doesn't",
    "didn't",
  ].sort(() => Math.random() - 0.5);

  let correctDoBe: string | null = null;
  if (tenseNoteIndex > 1 && tenseNoteIndex < 6) {
    correctDoBe = correctVerb[1];
  } else if (tenseNoteIndex >= 6) {
    correctDoBe = correctVerb[0];
  }
  const newParticles = particles.filter(el => {
    if (correctDoBe) return el !== correctDoBe;
    return true;
  });

  let fourDoBe;
  if (correctDoBe)
    fourDoBe = [correctDoBe, ...newParticles]
      .splice(0, 4)
      .sort(() => Math.random() - 0.5);
  else
    fourDoBe = [...newParticles].splice(0, 4).sort(() => Math.random() - 0.5);

  const threeVerbs = [
    verbs[verb].value0,
    verbs[verb].value1,
    verbs[verb].value2,
    '',
  ];

  const nouns0 = nounsN.map(el => el[0]).sort();
  const {pronoun, qw} = verbs[verb];

  let data: string[] = [];
  let objP: string | undefined = undefined;

  if (Math.random() > 0.5 && !pronoun)
    data = [...fourDoBe, ...subjectExtraWords, ...threeVerbs, ...nouns0];
  else if (!pronoun)
    data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs, ...nouns0];
  else {
    data = [
      ...subjectExtraWords,
      ...fourDoBe,
      ...threeVerbs,
      ...objectExtraWords,
    ];
    objP = ObjectPronoun;
  }

  const abc = nounsN.length > 0 ? nounsN[0] : ['', ''];

  let question = !objP ? [...correctVerb, abc[0]] : [...correctVerb, objP];

  let qWord = !objP ? [subject, verb, abc[1]] : [subject, verb, objP, ''];

  if (tenseNoteIndex >= 6) {
    const Qword = qw[getRandomInt(0, qw.length - 1)];

    QuestionWords.splice(QuestionWords.indexOf(Qword as QuestionWordsType), 1);
    const extraQ = [
      ...QuestionWords.sort(() => Math.random() - 0.5).slice(0, 3),
      Qword,
    ].sort(() => Math.random() - 0.5);

    if (Qword === 'what') {
      data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs];
      question = !objP ? [...correctVerb] : [...correctVerb, objP];
      qWord = !objP ? [subject, verb] : [subject, verb, objP, ''];
    }

    question.unshift(Qword);
    data.unshift(...extraQ);
    qWord.unshift(Qword);
  } else if (
    ['he', 'she', 'it'].includes(question[0]) &&
    Math.random() > 0.01
  ) {
    const Qword = 'who';

    QuestionWords.splice(QuestionWords.indexOf(Qword as QuestionWordsType), 1);
    const extraQ = [
      ...QuestionWords.sort(() => Math.random() - 0.5).slice(0, 3),
      Qword,
    ].sort(() => Math.random() - 0.5);
    if (pronoun)
      data = [...extraQ, ...fourDoBe, ...threeVerbs, ...objectExtraWords];
    else data = [...extraQ, ...fourDoBe, ...threeVerbs, ...nouns0];

    question.shift();
    question.unshift(Qword);
    qWord.shift();
    qWord.unshift(Qword);
  }

  // console.log(434, verb, qw, subject, verb, abc[1], objP);

  return {
    tenseNoteIndex,
    question,
    testData: data,
    subject,
    verb,
    note: aLLscheme.map(el => el[subject]),
    qWord,
  };
};

export const ThirdLesson = (
  words: WordsOneLessonInt,
  beScheme: BeInterface[] = BeScheme,
) => {
  const {verbs, nouns} = words.words;

  type SubjectPronounsType = 'i' | 'you' | 'he' | 'she' | 'we' | 'they' | 'it';
  type QuestionWordsType = 'when' | 'what' | 'where' | 'who' | 'how' | 'why';

  const subjectPronouns: SubjectPronounsType[] = [
    'i',
    'you',
    'he',
    'she',
    'we',
    'they',
    'it',
  ];

  type ObjectPronounsType =
    | 'me'
    | 'you '
    | 'him'
    | 'her'
    | 'us'
    | 'them'
    | 'it ';

  const ObjectPronouns: ObjectPronounsType[] = [
    'me',
    'you ',
    'him',
    'her',
    'us',
    'them',
    'it ',
  ];

  const QuestionWords: QuestionWordsType[] = [
    'when',
    'what',
    'where',
    'who',
    'how',
    'why',
  ];

  // i: ['i', 'me', 'my', 'mine', 'myself'],
  // you: ['you', 'you', 'your', 'yours', 'yourself'],
  // he: ['he', 'him', 'his', 'his', 'himself'],
  // she: ['she', 'her', 'her', 'hers', 'herself'],
  // it: ['it', 'it', 'its', '', 'itself'],
  // we: ['we', 'us', 'our', 'ours', 'ourself'],
  // they: ['they', 'them', 'their', 'theirs', 'themselves'],

  const objectExtraWords = ObjectPronouns.sort(
    () => Math.random() - 0.5,
  ).splice(0, 4);

  const ObjectPronoun = objectExtraWords[getRandomInt(0, 3)];

  const subject = subjectPronouns[getRandomInt(0, subjectPronouns.length - 1)];

  subjectPronouns.splice(subjectPronouns.indexOf(subject), 1);
  subjectPronouns.sort(() => Math.random() - 0.5);

  const subjectExtraWords = subjectPronouns
    .splice(0, 3)
    .concat(subject)
    .sort(() => Math.random() - 0.5);

  const beVerbs0 = [
    'am',
    'is',
    'are',
    'were',
    'was',
    "wasn't",
    'am not',
    "weren't",
    "isn't",
    "aren't",
    'will',
    "won't be",
    'be',
  ];

  const tenseNoteIndex = Math.floor(Math.random() * 9);
  // const tenseNoteIndex = 8;
  const bbb = ['here', 'there', 'nowhere', 'anywhere'];
  bbb.sort(() => Math.random() - 0.5);
  let data: string[] = [];

  if (true) {
    // if (Math.random() > 0) {
    const hereThere = Math.random() > 0.5 ? 'here' : 'there';
    const verbs = beScheme[tenseNoteIndex][subject];
    const question = [...verbs, hereThere];

    const newVerbs = [...verbs];
    let qBeVerbs: string[] = [];
    newVerbs.splice(verbs.indexOf(subject), 1);
    if (newVerbs.length === 1) {
      beVerbs0.sort(() => Math.random() - 0.5);
      beVerbs0.splice(beVerbs0.indexOf(newVerbs[0]), 1);
      qBeVerbs = [...beVerbs0.slice(0, 3), ...newVerbs];
      qBeVerbs.sort(() => Math.random() - 0.5);

      data = [...subjectExtraWords, ...qBeVerbs, ...bbb];
    } else {
      beVerbs0.sort(() => Math.random() - 0.5);
      beVerbs0.splice(beVerbs0.indexOf(newVerbs[1]), 1);
      qBeVerbs = [...beVerbs0.slice(0, 3), newVerbs[1]];
      qBeVerbs.sort(() => Math.random() - 0.5);

      data = [
        ...['were', 'will', 'was', 'are'].sort(() => Math.random() - 0.5),
        ...subjectExtraWords,
        ...qBeVerbs,
        ...bbb,
      ];
    }

    return {
      tenseNoteIndex,
      question,
      testData: data,
      subject,
      verb: 'be',
      note: beScheme.map(el => el[subject]),
      qWord: [`${subject}${'be'}`, hereThere],
    };
  }

  let nounsN: [string, string][] = [];

  try {
    let extraW: [string, string][] = Object.values(nouns)
      .filter(el => el[3]?.includes(verb))
      ?.map(el => [el[0], el[2]]);

    // Shuffle the extraW array randomly
    extraW = shuffleArray(extraW);

    nounsN = extraW.slice(0, 4);
  } catch (error) {
    console.error('Error create nounsN data:', error);
  }

  const insexOfSubject = subjectPronouns.indexOf(subject);
  subjectPronouns.splice(insexOfSubject, 1);

  const correctVerb = aLLscheme[tenseNoteIndex][subject].map(el =>
    el === '' ? subject : el,
  );

  const particles = [
    'will',
    'does',
    'do',
    'did',
    "won't",
    "don't",
    "doesn't",
    "didn't",
  ].sort(() => Math.random() - 0.5);

  let correctDoBe: string | null = null;
  if (tenseNoteIndex > 1 && tenseNoteIndex < 6) {
    correctDoBe = correctVerb[1];
  } else if (tenseNoteIndex >= 6) {
    correctDoBe = correctVerb[0];
  }
  const newParticles = particles.filter(el => {
    if (correctDoBe) return el !== correctDoBe;
    return true;
  });

  let fourDoBe;
  if (correctDoBe)
    fourDoBe = [correctDoBe, ...newParticles]
      .splice(0, 4)
      .sort(() => Math.random() - 0.5);
  else
    fourDoBe = [...newParticles].splice(0, 4).sort(() => Math.random() - 0.5);

  const threeVerbs = [
    verbs[verb].value0,
    verbs[verb].value1,
    verbs[verb].value2,
    '',
  ];

  const nouns0 = nounsN.map(el => el[0]).sort();
  const {pronoun, qw} = verbs[verb];

  let objP: string | undefined = undefined;

  if (Math.random() > 0.5 && !pronoun)
    data = [...fourDoBe, ...subjectExtraWords, ...threeVerbs, ...nouns0];
  else if (!pronoun)
    data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs, ...nouns0];
  else {
    data = [
      ...subjectExtraWords,
      ...fourDoBe,
      ...threeVerbs,
      ...objectExtraWords,
    ];
    objP = ObjectPronoun;
  }

  const abc = nounsN.length > 0 ? nounsN[0] : ['', ''];

  let question = !objP ? [...correctVerb, abc[0]] : [...correctVerb, objP];

  let qWord = !objP ? [subject, verb, abc[1]] : [subject, verb, objP, ''];

  if (tenseNoteIndex >= 6) {
    const Qword = qw[getRandomInt(0, qw.length - 1)];

    QuestionWords.splice(QuestionWords.indexOf(Qword as QuestionWordsType), 1);
    const extraQ = [
      ...QuestionWords.sort(() => Math.random() - 0.5).slice(0, 3),
      Qword,
    ].sort(() => Math.random() - 0.5);

    if (Qword === 'what') {
      data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs];
      question = !objP ? [...correctVerb] : [...correctVerb, objP];
      qWord = !objP ? [subject, verb] : [subject, verb, objP, ''];
    }

    question.unshift(Qword);
    data.unshift(...extraQ);
    qWord.unshift(Qword);
  } else if (
    ['he', 'she', 'it'].includes(question[0]) &&
    Math.random() > 0.01
  ) {
    const Qword = 'who';

    QuestionWords.splice(QuestionWords.indexOf(Qword as QuestionWordsType), 1);
    const extraQ = [
      ...QuestionWords.sort(() => Math.random() - 0.5).slice(0, 3),
      Qword,
    ].sort(() => Math.random() - 0.5);
    if (pronoun)
      data = [...extraQ, ...fourDoBe, ...threeVerbs, ...objectExtraWords];
    else data = [...extraQ, ...fourDoBe, ...threeVerbs, ...nouns0];

    question.shift();
    question.unshift(Qword);
    qWord.shift();
    qWord.unshift(Qword);
  }

  // console.log(434, verb, qw, subject, verb, abc[1], objP);

  return {
    tenseNoteIndex,
    question,
    testData: data,
    subject,
    verb,
    note: aLLscheme.map(el => el[subject]),
    qWord,
  };
};

export const FourthLesson = (
  words: WordsOneLessonInt,
  beScheme: BeInterface[] = BeScheme,
) => {
  const {verbs, nouns, professions} = words.words;

  const allLessonVerbs = Object.keys(verbs);

  const verb = allLessonVerbs[getRandomInt(0, allLessonVerbs.length - 1)];

  type SubjectPronounsType = 'i' | 'you' | 'he' | 'she' | 'we' | 'they' | 'it';
  type QuestionWordsType = 'when' | 'what' | 'where' | 'who' | 'how' | 'why';
  type PossessiveAdjectivesType =
    | 'my'
    | 'your'
    | 'his'
    | 'her'
    | 'its'
    | 'our'
    | 'their';

  const subjectPronouns: SubjectPronounsType[] = [
    'i',
    'you',
    'he',
    'she',
    // 'we',
    // 'they',
    // 'it',
  ];

  type ObjectPronounsType =
    | 'me'
    | 'you '
    | 'him'
    | 'her'
    | 'us'
    | 'them'
    | 'it ';

  const ObjectPronouns: ObjectPronounsType[] = [
    'me',
    'you ',
    'him',
    'her',
    'us',
    'them',
    'it ',
  ];

  const PossessiveAdjectives: PossessiveAdjectivesType[] = [
    'my',
    'your',
    'his',
    'her',
    'our',
    'their',
    'its',
  ];

  const PossessiveA: {[key: string]: PossessiveAdjectivesType} = {
    i: 'my',
    you: 'your',
    he: 'his',
    she: 'her',
    we: 'our',
    they: 'their',
    it: 'its',
  };

  const QuestionWords: QuestionWordsType[] = [
    'when',
    'what',
    'where',
    'who',
    'how',
    'why',
  ];

  // i: ['i', 'me', 'my', 'mine', 'myself'],
  // you: ['you', 'you', 'your', 'yours', 'yourself'],
  // he: ['he', 'him', 'his', 'his', 'himself'],
  // she: ['she', 'her', 'her', 'hers', 'herself'],
  // it: ['it', 'it', 'its', '', 'itself'],
  // we: ['we', 'us', 'our', 'ours', 'ourself'],
  // they: ['they', 'them', 'their', 'theirs', 'themselves'],

  // const objectExtraWords = ObjectPronouns.sort(
  //   () => Math.random() - 0.5,
  // ).splice(0, 4);

  let subject = subjectPronouns[getRandomInt(0, subjectPronouns.length - 1)];

  if (verb === 'give') subject = 'you';

  const PossessiveAdg = PossessiveA[subject];

  PossessiveAdjectives.splice(PossessiveAdjectives.indexOf(PossessiveAdg), 1);

  const PossessiveAdjectivesExtraWords = PossessiveAdjectives.sort(
    () => Math.random() - 0.5,
  ).splice(0, 3);

  PossessiveAdjectivesExtraWords.push(PossessiveAdg);
  PossessiveAdjectivesExtraWords.sort(() => Math.random() - 0.5);

  const aLLscheme: {
    i: string[];
    you: string[];
    he: string[];
    she: string[];
    we: string[];
    they: string[];
    it: string[];
  }[] = [
    {
      i: ['i', verbs[verb].value2],
      you: ['you', verbs[verb].value2],
      he: ['he', verbs[verb].value2],
      she: ['she', verbs[verb].value2],
      we: ['we', verbs[verb].value2],
      they: ['they', verbs[verb].value2],
      it: ['it', verbs[verb].value2],
    },
    {
      i: ['i', verbs[verb].value0],
      you: ['you', verbs[verb].value0],
      he: ['he', verbs[verb].value1],
      she: ['she', verbs[verb].value1],
      we: ['we', verbs[verb].value0],
      they: ['they', verbs[verb].value0],
      it: ['it', verbs[verb].value1],
    },
    {
      i: ['i', 'will', verbs[verb].value0],
      you: ['you', 'will', verbs[verb].value0],
      he: ['he', 'will', verbs[verb].value0],
      she: ['she', 'will', verbs[verb].value0],
      we: ['we', 'will', verbs[verb].value0],
      they: ['they', 'will', verbs[verb].value0],
      it: ['it', 'will', verbs[verb].value0],
    },
    {
      i: ['i', "didn't", verbs[verb].value0],
      you: ['you', "didn't", verbs[verb].value0],
      he: ['he', "didn't", verbs[verb].value0],
      she: ['she', "didn't", verbs[verb].value0],
      we: ['we', "didn't", verbs[verb].value0],
      they: ['they', "didn't", verbs[verb].value0],
      it: ['it', "didn't", verbs[verb].value0],
    },
    {
      i: ['i', "don't", verbs[verb].value0],
      you: ['you', "don't", verbs[verb].value0],
      he: ['he', "doesn't", verbs[verb].value0],
      she: ['she', "doesn't", verbs[verb].value0],
      we: ['we', "don't", verbs[verb].value0],
      they: ['they', "don't", verbs[verb].value0],
      it: ['it', "doesn't", verbs[verb].value0],
    },
    {
      i: ['i', "won't", verbs[verb].value0],
      you: ['you', "won't", verbs[verb].value0],
      he: ['he', "won't", verbs[verb].value0],
      she: ['she', "won't", verbs[verb].value0],
      we: ['we', "won't", verbs[verb].value0],
      they: ['they', "won't", verbs[verb].value0],
      it: ['it', "won't", verbs[verb].value0],
    },
    {
      i: ['did', 'i', verbs[verb].value0],
      you: ['did', 'you', verbs[verb].value0],
      he: ['did', 'he', verbs[verb].value0],
      she: ['did', 'she', verbs[verb].value0],
      we: ['did', 'we', verbs[verb].value0],
      they: ['did', 'they', verbs[verb].value0],
      it: ['did', 'it', verbs[verb].value0],
    },
    {
      i: ['do', 'i', verbs[verb].value0],
      you: ['do', 'you', verbs[verb].value0],
      he: ['does', 'he', verbs[verb].value0],
      she: ['does', 'she', verbs[verb].value0],
      we: ['do', 'we', verbs[verb].value0],
      they: ['do', 'they', verbs[verb].value0],
      it: ['does', 'it', verbs[verb].value0],
    },
    {
      i: ['will', 'i', verbs[verb].value0],
      you: ['will', 'you', verbs[verb].value0],
      he: ['will', 'he', verbs[verb].value0],
      she: ['will', 'she', verbs[verb].value0],
      we: ['will', 'we', verbs[verb].value0],
      they: ['will', 'they', verbs[verb].value0],
      it: ['will', 'it', verbs[verb].value0],
    },
  ];

  let nounsN: [string, string][] = [];

  try {
    let extraW: [string, string][] = Object.values(nouns)
      .filter(el => el[3]?.includes(verb))
      ?.map(el => [el[0], el[2]]);

    // Shuffle the extraW array randomly
    extraW = shuffleArray(extraW);

    nounsN = extraW.slice(0, 4);
  } catch (error) {
    console.error('Error create nounsN data:', error);
  }

  const insexOfSubject = subjectPronouns.indexOf(subject);
  subjectPronouns.splice(insexOfSubject, 1);

  const subjectExtraWords = subjectPronouns
    .splice(0, 3)
    .concat(subject)
    .sort(() => Math.random() - 0.5);

  const tense = verbs[verb]?.tense;

  let tenseNoteIndex = 0;
  if (tense) tenseNoteIndex = tense[Math.floor(Math.random() * tense.length)];

  const correctVerb = aLLscheme[tenseNoteIndex][subject].map(el =>
    el === '' ? subject : el,
  );

  const particles = [
    'will',
    'does',
    'do',
    'did',
    "won't",
    "don't",
    "doesn't",
    "didn't",
  ].sort(() => Math.random() - 0.5);

  let correctDoBe: string | null = null;
  if (tenseNoteIndex > 1 && tenseNoteIndex < 6) {
    correctDoBe = correctVerb[1];
  } else if (tenseNoteIndex >= 6) {
    correctDoBe = correctVerb[0];
  }
  const newParticles = particles.filter(el => {
    if (correctDoBe) return el !== correctDoBe;
    return true;
  });

  let fourDoBe;
  if (correctDoBe)
    fourDoBe = [correctDoBe, ...newParticles]
      .splice(0, 4)
      .sort(() => Math.random() - 0.5);
  else
    fourDoBe = [...newParticles].splice(0, 4).sort(() => Math.random() - 0.5);

  const threeVerbs = [
    verbs[verb].value0,
    verbs[verb].value1,
    verbs[verb].value2,
    '',
  ];

  const nouns0 = nounsN.map(el => el[0]).sort();
  const {pronoun, qw} = verbs[verb];
  console.log(nouns0);
  let data: string[] = [];
  let objP: string | undefined = undefined;

  // if (Math.random() > 0.5 && !pronoun)
  //   data = [...fourDoBe, ...subjectExtraWords, ...threeVerbs, ...nouns0];
  // else if (!pronoun)
  //   data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs, ...nouns0];
  // else {
  data = [
    ...subjectExtraWords,
    ...fourDoBe,
    ...threeVerbs,
    ...PossessiveAdjectivesExtraWords,
    ...nouns0,
  ];
  objP = PossessiveAdg;
  // }

  const abc = nounsN.length > 0 ? nounsN[0] : ['', ''];

  let question = [...correctVerb, objP, abc[0]];

  let qWord = [subject, verb, objP, abc[1]];

  // if (tenseNoteIndex >= 6) {
  //   const Qword = qw[getRandomInt(0, qw.length - 1)];

  //   QuestionWords.splice(QuestionWords.indexOf(Qword as QuestionWordsType), 1);
  //   const extraQ = [
  //     ...QuestionWords.sort(() => Math.random() - 0.5).slice(0, 3),
  //     Qword,
  //   ].sort(() => Math.random() - 0.5);

  //   if (Qword === 'what') {
  //     data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs];
  //     question = !objP ? [...correctVerb] : [...correctVerb, objP];
  //     qWord = !objP ? [subject, verb] : [subject, verb, objP, ''];
  //   }

  //   question.unshift(Qword);
  //   data.unshift(...extraQ);
  //   qWord.unshift(Qword);
  // } else if (
  //   ['he', 'she', 'it'].includes(question[0]) &&
  //   Math.random() > 0.01
  // ) {
  //   const Qword = 'who';

  //   QuestionWords.splice(QuestionWords.indexOf(Qword as QuestionWordsType), 1);
  //   const extraQ = [
  //     ...QuestionWords.sort(() => Math.random() - 0.5).slice(0, 3),
  //     Qword,
  //   ].sort(() => Math.random() - 0.5);
  //   // if (pronoun)
  //   data = [
  //     ...extraQ,
  //     ...fourDoBe,
  //     ...threeVerbs,
  //     ...PossessiveAdjectivesExtraWords,
  //     ...nouns0,
  //   ];
  //   // else data = [...extraQ, ...fourDoBe, ...threeVerbs, ...nouns0];

  //   question.shift();
  //   question.unshift(Qword);
  //   qWord.shift();
  //   qWord.unshift(Qword);
  //   // qWord.push()
  // }

  // console.log(434, verb, qw, subject, verb, abc[1], objP);

  return {
    tenseNoteIndex,
    question,
    testData: data,
    subject,
    verb,
    note: aLLscheme.map(el => el[subject]),
    qWord,
  };
};
