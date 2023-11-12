import {getRandomInt, shuffleArray} from './smallFunctions';
import {WordsOneLessonInt} from '../data/words';
import {aLLscheme} from './verbSimpleTenceScheme';
import {BeScheme, BeInterface} from './verbSimpleTenceScheme';
/*
  BeScheme, aLLscheme
  👶✅,
  🧑✅,
  🧓✅,
  👶❌,
  🧑❌,
  🧓❌,
  👶❓,
  🧑❓,
  🧓❓,
*/

type SubjectPronounsType = 'i' | 'you' | 'he' | 'she' | 'we' | 'they' | 'it';
type ObjectPronounsType = 'me' | 'you ' | 'him' | 'her' | 'us' | 'them' | 'it ';
type QuestionWordsType = 'when' | 'what' | 'where' | 'who' | 'how' | 'why';

export const SimpleTenseScheme = (words: WordsOneLessonInt) => {
  const {verbs, nouns} = words.words;

  const allLessonVerbs = Object.keys(verbs);

  const verb = allLessonVerbs[getRandomInt(0, allLessonVerbs.length - 1)];

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

  const note = aLLscheme(verbs[verb], subject);

  const correctVerb = note[tenseNoteIndex].map(el =>
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

  // if ([...correctVerb, abc[0]].includes('have'))
  //   console.log(
  //     tenseNoteIndex,
  //     'question: ',
  //     [...correctVerb, abc[0]],
  //     'testData: ',
  //     data,
  //     subject,
  //     verb,
  //     'qWord: ',
  //     [subject, verb, abc[1]],
  //   );

  return JSON.stringify({
    subject,
    verb,
    tenseNoteIndex,
    question: [...correctVerb, abc[0]],
    qWord: [subject, verb, abc[1]],
    testData: data,
  });
};

export const SecondLesson = (words: WordsOneLessonInt) => {
  const {verbs, nouns} = words.words;
  const tenseNoteIndex = Math.floor(Math.random() * 9);

  const allLessonVerbs = Object.keys(verbs);

  const verb = allLessonVerbs[getRandomInt(0, allLessonVerbs.length - 1)];

  const subjectPronouns: SubjectPronounsType[] = [
    'i',
    'you',
    'he',
    'she',
    'we',
    'they',
    'it',
  ];

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

  const subjectIndex = getRandomInt(
    [6, 7, 8].includes(tenseNoteIndex) ? 1 : 0,
    subjectPronouns.length - 1,
  );

  const subject = subjectPronouns[subjectIndex];

  if ([0, 4].includes(subjectIndex)) {
    ObjectPronouns.splice(4, 1);
    ObjectPronouns.splice(0, 1);
  } else {
    ObjectPronouns.splice(subjectIndex, 1);
  }

  const objectExtraWords = ObjectPronouns.sort(
    () => Math.random() - 0.5,
  ).splice(0, 4);

  const ObjectPronoun = objectExtraWords[getRandomInt(0, 3)];

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

  subjectPronouns.splice(subjectIndex, 1);

  const subjectExtraWords = subjectPronouns
    .splice(0, 3)
    .concat(subject)
    .sort(() => Math.random() - 0.5);

  const correctVerb = aLLscheme(verbs[verb], subject)[tenseNoteIndex].map(el =>
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

  return JSON.stringify({
    tenseNoteIndex,
    question,
    testData: data,
    subject,
    verb,
    qWord,
  });
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

    return JSON.stringify({
      subject,
      verb: 'be',
      tenseNoteIndex,
      question,
      qWord: [`${subject}${'be'}`, hereThere],
      testData: data,
    });
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
    subject,
    verb,
    tenseNoteIndex,
    question,
    qWord,
    testData: data,
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
    'we',
    'they',
    'it',
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

  const note = aLLscheme(verbs[verb], subject);

  const correctVerb = note[tenseNoteIndex].map(el =>
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
  // console.log(nouns0);
  let data: string[] = [];
  let objP: string | undefined = undefined;

  let prof = 'teacher';
  let qWord: string[] = [];
  let question: string[] = [];

  objP = PossessiveAdg;

  if (Math.random() > 0.01 && professions) {
    //   data = [...fourDoBe, ...subjectExtraWords, ...threeVerbs, ...nouns0];
    // else if (!pronoun)
    //   data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs, ...nouns0];

    const prof_4 = Object.values(professions)
      .sort(() => Math.random() - 0.5)
      .slice(4);

    prof = prof_4[0];

    data = [
      ...subjectExtraWords,
      ...fourDoBe,
      ...threeVerbs,
      ...PossessiveAdjectivesExtraWords,
      ...[...prof_4].sort(() => Math.random() - 0.5),
    ];

    const verb = beScheme[tenseNoteIndex][subject];

    question = [...verb, objP, prof];
    qWord = [...verb, objP, prof];
  } else {
    const abc = nounsN.length > 0 ? nounsN[0] : ['', ''];

    data = [
      ...subjectExtraWords,
      ...fourDoBe,
      ...threeVerbs,
      ...PossessiveAdjectivesExtraWords,
      ...nouns0,
    ];
    question = [...correctVerb, objP, abc[0]];
    qWord = [subject, verb, objP, abc[1]];
  }
  console.log(question);
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

  return JSON.stringify({
    subject,
    verb,
    tenseNoteIndex,
    question,
    qWord,
    testData: data,
  });
};
