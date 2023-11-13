import {getRandomInt, shuffleArray} from './smallFunctions';
import {WordsOneLessonInt} from '../data/words';
import {aLLscheme} from './verbSimpleTenceScheme';
import {BeScheme, BeInterface} from './verbSimpleTenceScheme';
import {Events, Flags} from '../data/words';

/*
  BeScheme, aLLscheme
  (0)👶✅,  (1)🧑✅,  (2)🧓✅,
  (3)👶❌,  (4)🧑❌,  (5)🧓❌,
  (6)👶❓,  (7)🧑❓,  (8)🧓❓,
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
  let {pronoun, qw} = verbs[verb];
  let Qword = qw[getRandomInt(0, qw.length - 1)];

  const subjectPronouns: SubjectPronounsType[] = [
    'i',
    'you',
    'he',
    'she',
    'we',
    'they',
    'it',
  ];
  const subjectPronouns2 = [...subjectPronouns];

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
    subjectPronouns2.length - 1,
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

  subjectPronouns2.splice(subjectIndex, 1);

  const subjectExtraWords = subjectPronouns2
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

  const isPronoun = [
    // 'walk',
    'read',
    'send',
    'bring',
  ].includes(verb);
  const isCombineWithPronoun = [
    'give',
    'ask',
    'pay',
    'tell',
    'write',
    'buy',
    // 'walk',
    'read',
    'send',
    'bring',
  ].includes(verb);

  if (!pronoun && isPronoun) pronoun = true;

  let data: string[] = [];
  let objP: string | undefined = undefined;

  if (
    Math.random() > 0.5 &&
    !pronoun &&
    (tenseNoteIndex < 6 || Qword !== 'what')
  )
    data = [...fourDoBe, ...subjectExtraWords, ...threeVerbs, ...nouns0];
  else if (!pronoun && (tenseNoteIndex < 6 || Qword !== 'what'))
    data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs, ...nouns0];
  else if (isCombineWithPronoun && (tenseNoteIndex < 6 || Qword !== 'what')) {
    data = [
      ...subjectExtraWords,
      ...fourDoBe,
      ...threeVerbs,
      ...objectExtraWords,
      ...nouns0,
    ];
    objP = ObjectPronoun;
  } else if (tenseNoteIndex < 6 || Qword !== 'what') {
    data = [
      ...subjectExtraWords,
      ...fourDoBe,
      ...threeVerbs,
      ...objectExtraWords,
    ];
    objP = ObjectPronoun;
  } else {
    if (Math.random() > 0.5)
      data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs];
    else data = [...fourDoBe, ...subjectExtraWords, ...threeVerbs];
  }

  const [nounQuestion, nounQword] =
    nounsN.length > 0 ? shuffleArray(nounsN)[0] : ['', ''];

  let question = !objP
    ? [...correctVerb, nounQuestion]
    : isCombineWithPronoun
    ? [...correctVerb, objP, nounQuestion]
    : [...correctVerb, objP];

  let qWord = !objP
    ? [subject, verb, nounQword]
    : isCombineWithPronoun
    ? [subject, verb, objP, nounQword]
    : [subject, verb, objP];

  if (tenseNoteIndex >= 6 && Math.random() > 0.4) {
    QuestionWords.splice(QuestionWords.indexOf(Qword as QuestionWordsType), 1);
    const extraQ = [
      ...QuestionWords.sort(() => Math.random() - 0.5).slice(0, 3),
      Qword,
    ].sort(() => Math.random() - 0.5);

    question.unshift(Qword);
    qWord.unshift(Qword);
    data.unshift(...extraQ);
  } else if (['he', 'she', 'it'].includes(question[0]) && Math.random() > 0.5) {
    Qword = 'who';

    QuestionWords.splice(QuestionWords.indexOf(Qword as QuestionWordsType), 1);

    const extraQ = [
      ...QuestionWords.sort(() => Math.random() - 0.5).slice(0, 3),
      Qword,
    ].sort(() => Math.random() - 0.5);

    question[0] = qWord[0] = Qword;
    const dataStart = data.slice(0, 8);
    const dataEnd = data.slice(8);

    const newDataStart = dataStart.map(el =>
      subjectPronouns.includes(el) ? extraQ.pop() : el,
    ) as string[];

    data = [...newDataStart, ...dataEnd];
  }

  // if (Qword === 'what' && tenseNoteIndex > 6)

  //   console.log(
  //     // verb, subject, tenseNoteIndex
  //     Qword,
  //     '\ncorrectVerb :',
  //     correctVerb,
  //     '\nquestion',
  //     question,
  //     '\nqWord',
  //     qWord,
  //     '\ndata: ',
  //     data,
  //   );

  return JSON.stringify({
    subject,
    verb,
    tenseNoteIndex,
    question,
    qWord,
    testData: data,
  });
};

export const ThirdLesson = (
  words: WordsOneLessonInt,
  beScheme: BeInterface[] = BeScheme,
) => {
  const {verbs, nouns} = words.words;
  const tenseNoteIndex = Math.floor(Math.random() * 9);

  const allLessonVerbs = [...Object.keys(verbs), 'be'];
  // const verb = allLessonVerbs[getRandomInt(0, allLessonVerbs.length - 1)];
  const verb = 'be';

  const subjectPronouns: SubjectPronounsType[] = [
    'i',
    'you',
    'he',
    'she',
    'we',
    'they',
    'it',
  ];

  const subjectPronouns2 = [...subjectPronouns];

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
    subjectPronouns2.length - 1,
  );

  const subject = subjectPronouns[subjectIndex];
  const QStart = beScheme[tenseNoteIndex][subject];
  const verbBe = QStart.filter(el => el !== subject);

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

  subjectPronouns2.splice(subjectIndex, 1);

  const subjectExtraWords = subjectPronouns2
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

  const newBeVerbs0 = beVerbs0
    .filter(el => (verbBe.length === 1 ? el !== verbBe[0] : el !== verbBe[1]))
    .sort(() => Math.random() - 0.5);

  let data: string[] = [];

  if (Math.random() > 0.3) {
    const hereThere = Math.random() > 0.5 ? 'here' : 'there';
    const bbb = ['here', 'there', 'nowhere', 'anywhere'].sort(
      () => Math.random() - 0.5,
    );

    const question = [...QStart, hereThere];

    if (verbBe.length === 1) {
      data = [
        ...subjectExtraWords,
        ...[...newBeVerbs0.slice(0, 3), ...verbBe].sort(
          () => Math.random() - 0.5,
        ),
        ...bbb,
      ];
    } else {
      data = [
        ...['were', 'will', 'was', 'are'].sort(() => Math.random() - 0.5),
        ...subjectExtraWords,
        ...[...newBeVerbs0.slice(0, 3), verbBe[1]].sort(
          () => Math.random() - 0.5,
        ),
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

  let nounsNL0: [string, string][] = [];
  let nounsNL1: [string, string][] = [];
  let nounN0: [string, string][] = [];

  try {
    let extraW: [string, string][] = Object.values(nouns)
      .filter(el => el[3]?.includes('be'))
      ?.map(el => [el[0], el[2]]);

    // Shuffle the extraW array randomly
    extraW = shuffleArray(extraW);

    nounsNL0 = extraW.slice(0, 4);

    nounN0 = [nounsNL0[Math.floor(Math.random() * 4)]];

    nounsNL0 = [...nounsNL0].sort(() => Math.random() - 0.5);

    nounsNL1 = extraW
      .filter(el => Object.keys(Flags).includes(el[1]))
      .slice(0, 4);
  } catch (error) {
    console.error('Error create nounsN data:', error);
  }

  if (verbBe.length === 1) {
    data = [
      ...subjectExtraWords,
      ...[...newBeVerbs0.slice(0, 3), ...verbBe].sort(
        () => Math.random() - 0.5,
      ),
    ];
  } else {
    data = [
      ...['were', 'will', 'was', 'are'].sort(() => Math.random() - 0.5),
      ...subjectExtraWords,
      ...[...newBeVerbs0.slice(0, 3), verbBe[1]].sort(
        () => Math.random() - 0.5,
      ),
    ];
  }

  if (Object.keys(Events).includes(nounN0[0][1])) {
    ('he [will be] at the exhibition in Paris.');
    // Events

    const city = nounsNL1[Math.floor(Math.random() * 4)];

    const question = [...QStart, nounN0[0][0], city[0]];

    data = [
      ...data,
      ...nounsNL0.map(el => el[0]),
      ...nounsNL1.map(el => el[0]),
    ];

    return JSON.stringify({
      subject,
      verb: 'be',
      tenseNoteIndex,
      question,
      qWord: [`${subject}${'be'}`, nounN0[0][1], city[1]],
      testData: data,
    });
  }
  if (verb === 'be') {
    const question = [...QStart, nounN0[0][0]];

    data = [...data, ...nounsNL0.map(el => el[0])];

    return JSON.stringify({
      subject,
      verb: 'be',
      tenseNoteIndex,
      question,
      qWord: [`${subject}${'be'}`, nounN0[0][1]],
      testData: data,
    });
  }
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
