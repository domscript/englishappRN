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
type PossessiveAdjectivesType =
  | 'my'
  | 'your'
  | 'his'
  | 'her'
  | 'its'
  | 'our'
  | 'their';

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

  let data: string[] = [];
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

  [...correctVerb, abc[0]].forEach(el => {
    if (!data.includes(el))
      console.log(
        //   // verb, subject, tenseNoteIndex
        '\n',
        subject,
        '\nquestion',
        [...correctVerb, abc[0]],
        '\nqWord',
        [subject, verb, abc[1]],
        '\ndata: ',
        data,
      );
  });

  // console.log([...correctVerb, abc[0]].filter(_ => _).join(' '));

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

  if (Math.random() > 0.5 && !pronoun && tenseNoteIndex < 6)
    data = [...fourDoBe, ...subjectExtraWords, ...threeVerbs, ...nouns0];
  else if (!pronoun)
    data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs, ...nouns0];
  else if (
    (isCombineWithPronoun && tenseNoteIndex < 6) ||
    (tenseNoteIndex >= 6 && Qword !== 'what')
  ) {
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
  } else if (Qword === 'what' && tenseNoteIndex >= 6) {
    if (Math.random() > 0.5)
      data = [...subjectExtraWords, ...fourDoBe, ...threeVerbs];
    else data = [...fourDoBe, ...subjectExtraWords, ...threeVerbs];
  }

  const [nounQuestion, nounQword] =
    nounsN.length > 0 ? shuffleArray(nounsN)[0] : ['', ''];

  let question = [''];
  let qWord = [''];

  if (Qword === 'what' && tenseNoteIndex >= 6) {
    question = !objP ? [...correctVerb] : [...correctVerb, objP];

    qWord = !objP ? [subject, verb] : [subject, verb, objP];
  } else if (pronoun) {
    question = !objP
      ? [...correctVerb, nounQuestion]
      : isCombineWithPronoun
      ? [...correctVerb, objP, nounQuestion]
      : [...correctVerb, objP];

    qWord = !objP
      ? [subject, verb, nounQword]
      : isCombineWithPronoun
      ? [subject, verb, objP, nounQword]
      : [subject, verb, objP];
  } else {
    question = [...correctVerb, nounQuestion];

    qWord = [subject, verb, nounQword];
  }

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
      subjectPronouns.includes(el as SubjectPronounsType) ? extraQ.pop() : el,
    ) as string[];

    data = [...newDataStart, ...dataEnd];
  }

  question.forEach(el => {
    if (!data.includes(el))
      console.log(
        //   // verb, subject, tenseNoteIndex
        '\ncorrectVerb :',
        correctVerb,
        '\n',
        Qword,
        '\n',
        '\nquestion',
        question,
        '\nqWord',
        qWord,
        '\ndata: ',
        data,
      );
  });

  // console.log(question.filter(_ => _).join(' '));

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
  let verb = allLessonVerbs[getRandomInt(0, allLessonVerbs.length - 1)];

  if ([2, 8].includes(tenseNoteIndex) && Math.random() > 0.5)
    verb = 'wouldlike';

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

  if ([6, 7, 8].includes(tenseNoteIndex)) {
    subjectPronouns2.splice(4, 1);
  }

  const subjectIndex = getRandomInt(
    [6, 7, 8].includes(tenseNoteIndex) ? 1 : 0,
    subjectPronouns2.length - 1,
  );

  const subject = subjectPronouns2[subjectIndex];
  const QStart = beScheme[tenseNoteIndex][subject];
  const verbBe = QStart.filter(el => el !== subject);

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

  if (Math.random() < 0.2) {
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

    question.forEach(el => {
      if (!data.includes(el))
        console.log(
          //   // verb, subject, tenseNoteIndex
          '\n',
          subject,
          '\nquestion',
          question,
          '\nqWord',
          [`${subject}${'be'}`, hereThere],
          '\ndata: ',
          data,
        );
    });

    // console.log(question.filter(_ => _).join(' '));

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
      .filter(el => el[3]?.includes(verb))
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

    question.forEach(el => {
      if (!data.includes(el))
        console.log(
          //   // verb, subject, tenseNoteIndex
          '\n',
          subject,
          '\nquestion',
          question,
          '\nqWord',
          [`${subject}${'be'}`, nounN0[0][1], city[1]],
          '\ndata: ',
          data,
        );
    });

    // console.log(question.filter(_ => _).join(' '));

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

    question.forEach(el => {
      if (!data.includes(el))
        console.log(
          //   // verb, subject, tenseNoteIndex
          '\n',
          subject,
          '\nquestion',
          question,
          '\nqWord',
          [`${subject}${'be'}`, nounN0[0][1]],
          '\ndata: ',
          data,
        );
    });

    // console.log(question.filter(_ => _).join(' '));

    return JSON.stringify({
      subject,
      verb: 'be',
      tenseNoteIndex,
      question,
      qWord: [`${subject}${'be'}`, nounN0[0][1]],
      testData: data,
    });
  }

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

  if (verb === 'wouldlike') {
    [
      'would they like to (see, watch) ([the film], a film, the movie, a movie)?', // TODO .
      'he would like to (see, watch) ([the film], a film, the movie, a movie).',

      'they would like [a drink].', // here
      'I would like to come.',
    ];

    const threeVerbs = [
      verbs['like'].value0,
      verbs['like'].value1,
      verbs['like'].value2,
      '',
    ];
    // ["like", "want"]
    let question: string[] = [];
    let qWord: string[] = [subject, 'like', nounN0[0][1]];

    if (tenseNoteIndex === 2) {
      question = [subject, 'would', 'like', nounN0[0][0]];
      data = [
        ...subjectExtraWords,
        ...[...particles.slice(0, 3), 'would'].sort(() => Math.random() - 0.5),
        ...threeVerbs,
        ...nounsNL0.map(el => el[0]),
      ];
    }
    if (tenseNoteIndex === 8) {
      question = ['would', subject, 'like', nounN0[0][0]];
      data = [
        ...[...particles.slice(0, 3), 'would'].sort(() => Math.random() - 0.5),
        ...subjectExtraWords,
        ...threeVerbs,
        ...nounsNL0.map(el => el[0]),
      ];
    }

    question.forEach(el => {
      if (!data.includes(el))
        console.log(
          //   // verb, subject, tenseNoteIndex
          '\n',
          subject,
          '\nquestion',
          question,
          '\nqWord',
          qWord,
          '\ndata: ',
          data,
        );
    });

    // console.log(question.filter(_ => _).join(' '));

    return JSON.stringify({
      subject,
      verb: 'be',
      tenseNoteIndex,
      question,
      qWord,
      testData: data,
    });
  }

  const correctVerb = aLLscheme(verbs[verb], subject)[tenseNoteIndex].map(el =>
    el === '' ? subject : el,
  );
  let correctDoBe: string = '';
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

  if (verb === 'want' || verb === 'like') {
    const wantLikeVerbs = [
      'study',
      'work',
      'come',
      'open',
      'close',
      'drink',
      'eat',
      'fly',
      'jump',
      'understand',
      'know',
      'ask',
      'pay',
      'sleep',
      'speak',
      'think',
      'tell',
      'talk',
      'write',
      'stand',
      'run',
      'sit',
      'dance',
      'walk',
      'read',
      'play',
      'look',
      'break',
      'turn',
      'see',
      'say',
      'buy',
      'lose',
      'help',
      'meet',
      'make',
      'forget',
      'start',
      'travel',
      'bring',
      'begin',

      // love
      // give
      // fall
      // send
      // 'have'
      // seek
      // hear
      // find
      // grow

      // '?answer',
      // '?shut',
      // '?live',
      // '?finish',
      // '?end',
      // '?watch',
      // '?put',
      // '?go',
      // '?show',

      // 'get gifts',
      // 'receive gifts',
    ];

    const fourVerb = [...wantLikeVerbs]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);

    const infVerb = fourVerb[Math.floor(Math.random() * 4)];

    const threeVerbs = [
      verbs[verb].value0,
      verbs[verb].value1,
      verbs[verb].value2,
      '',
    ];
    let question: string[] = [];
    let qWord: string[] = [subject, verb, infVerb];

    if (correctDoBe && [6, 7, 8].includes(tenseNoteIndex)) {
      question = [...correctVerb, `to ${infVerb}`];
      data = [
        ...[...fourDoBe].sort(() => Math.random() - 0.5),
        ...subjectExtraWords,
        ...threeVerbs,
        ...fourVerb.map(el => `to ${el}`),
      ];
    } else if (correctDoBe) {
      question = [...correctVerb, `to ${infVerb}`];
      data = [
        ...[...fourDoBe].sort(() => Math.random() - 0.5),
        ...subjectExtraWords,
        ...threeVerbs,
        ...fourVerb.map(el => `to ${el}`),
      ];
    } else {
      question = [...correctVerb, `to ${infVerb}`];
      data = [
        ...[...particles.slice(0, 4)].sort(() => Math.random() - 0.5),
        ...subjectExtraWords,
        ...threeVerbs,
        ...fourVerb.map(el => `to ${el}`),
      ];
    }

    question.forEach(el => {
      if (!data.includes(el))
        console.log(
          //   // verb, subject, tenseNoteIndex
          '\n',
          subject,
          '\nquestion',
          question,
          '\nqWord',
          qWord,
          '\ndata: ',
          data,
        );
    });

    // console.log(question.filter(_ => _).join(' '));

    return JSON.stringify({
      subject,
      verb,
      tenseNoteIndex,
      question,
      qWord,
      testData: data,
    });
  }

  console.log('bad');
};

export const FourthLesson = (
  words: WordsOneLessonInt,
  beScheme: BeInterface[] = BeScheme,
) => {
  const {verbs, nouns, professions} = words.words;
  const allLessonVerbs = Object.keys(verbs);

  const verb = allLessonVerbs[getRandomInt(0, allLessonVerbs.length - 1)];

  const tense = verbs[verb]?.tense;

  let tenseNoteIndex = 0;
  if (tense) tenseNoteIndex = tense[Math.floor(Math.random() * tense.length)];

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

  const PossessiveAdjectives: PossessiveAdjectivesType[] = [
    'my',
    'your',
    'his',
    'her',
    'our',
    'their',
    'its',
  ];
  let PossessiveAdjectives2 = [...PossessiveAdjectives];
  let PossessiveAdjectives3 = [...PossessiveAdjectives];

  const PossessiveA: {[key: string]: PossessiveAdjectivesType} = {
    i: [
      PossessiveAdjectives[1],
      PossessiveAdjectives[2],
      PossessiveAdjectives[3],
      PossessiveAdjectives[5],
      PossessiveAdjectives[6],
    ][Math.floor(Math.random() * 5)],
    you: [
      PossessiveAdjectives[0],
      PossessiveAdjectives[2],
      PossessiveAdjectives[3],
      PossessiveAdjectives[5],
      PossessiveAdjectives[6],
    ][Math.floor(Math.random() * 5)],
    he: [
      PossessiveAdjectives[0],
      PossessiveAdjectives[1],
      PossessiveAdjectives[3],
      PossessiveAdjectives[4],
      PossessiveAdjectives[6],
    ][Math.floor(Math.random() * 5)],
    she: [
      PossessiveAdjectives[0],
      PossessiveAdjectives[1],
      PossessiveAdjectives[2],
      PossessiveAdjectives[4],
      PossessiveAdjectives[6],
    ][Math.floor(Math.random() * 5)],
    we: [
      PossessiveAdjectives[2],
      PossessiveAdjectives[3],
      PossessiveAdjectives[5],
      PossessiveAdjectives[6],
    ][Math.floor(Math.random() * 4)],
    they: [
      PossessiveAdjectives[0],
      PossessiveAdjectives[2],
      PossessiveAdjectives[3],
      PossessiveAdjectives[6],
    ][Math.floor(Math.random() * 4)],
    it: [
      PossessiveAdjectives[0],
      PossessiveAdjectives[2],
      PossessiveAdjectives[3],
      PossessiveAdjectives[4],
      PossessiveAdjectives[6],
    ][Math.floor(Math.random() * 5)],
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

  let subject = subjectPronouns[getRandomInt(0, subjectPronouns.length - 1)];

  if (verb === 'give') subject = 'you';

  if (['i', 'we'].includes(subject) && tenseNoteIndex >= 6)
    PossessiveAdjectives2 = PossessiveAdjectives.filter(
      el => !['my', 'our'].includes(el),
    );

  const PossessiveAdg = PossessiveA[subject];

  PossessiveAdjectives2.splice(PossessiveAdjectives2.indexOf(PossessiveAdg), 1);

  const PossessiveAdjectivesExtraWords = PossessiveAdjectives2.sort(
    () => Math.random() - 0.5,
  ).slice(0, 3);

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

  let data: string[] = [];
  let objP: string | undefined = undefined;

  let [prof, prof_s] = ['teacher', 'teachers'];
  let qWord: string[] = [];
  let question: string[] = [];

  objP = PossessiveAdg;

  if (Math.random() > 0.6 && professions) {
    tenseNoteIndex = Math.floor(Math.random() * 9);

    if ([6, 7, 8].includes(tenseNoteIndex)) {
      subjectPronouns2.splice(4, 1);
    }

    const subjectIndex = getRandomInt(
      [6, 7, 8].includes(tenseNoteIndex) ? 1 : 0,
      subjectPronouns2.length - 1,
    );

    const subject = subjectPronouns2[subjectIndex];

    if (['i', 'we'].includes(subject) && tenseNoteIndex >= 6)
      PossessiveAdjectives3 = PossessiveAdjectives.filter(
        el => !['my', 'our'].includes(el),
      );

    const PossessiveAdg = PossessiveA[subject];

    PossessiveAdjectives3.splice(
      PossessiveAdjectives3.indexOf(PossessiveAdg),
      1,
    );

    const PossessiveAdjectivesExtraWords = PossessiveAdjectives3.sort(
      () => Math.random() - 0.5,
    ).slice(0, 3);

    PossessiveAdjectivesExtraWords.push(PossessiveAdg);
    PossessiveAdjectivesExtraWords.sort(() => Math.random() - 0.5);

    subjectPronouns2.splice(subjectIndex, 1);

    const subjectExtraWords = subjectPronouns2
      .splice(0, 3)
      .concat(subject)
      .sort(() => Math.random() - 0.5);

    const QStart = beScheme[tenseNoteIndex][subject];
    const verbBe = QStart.filter(el => el !== subject);

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

    let prof_4 = Object.values(professions)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);

    [prof, prof_s] = prof_4[0].split(';');
    if (['we', 'they'].includes(subject)) {
      prof = professions[prof].split(';')[1];
      prof_4 = prof_4.map(el => el.split(';')[1]);
    } else {
      prof_4 = prof_4.map(el => el.split(';')[0]);
    }

    const withoutPossAdj = [
      'actor',
      'actors',
      'artist',
      'artists',
      'astronaut',
      'astronauts',
      'baker',
      'bakers',
      'builder',
      'builders',
      'designer',
      'designers',
      'engineer',
      'engineers',
      'farmer',
      'farmers',
      'firefighter',
      'firefighters',
      'musician',
      'musicians',
      'nurse',
      'nurses',
      'office clerk',
      'office clerks',
      'police officer',
      'police officers',
      'programmer',
      'programmers',
      'receptionist',
      'receptionists',
      'scientist',
      'scientists',
      'singer',
      'singers',
      'social worker',
      'social workers',
      'taxi driver',
      'taxi drivers',
      'truck driver',
      'truck drivers',
      'welder',
      'welders',
      'writer',
      'writers',
    ].includes(prof);

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

    question = [...QStart];
    qWord = [`${subject}be`];

    if (
      (!withoutPossAdj && PossessiveAdg !== 'its') ||
      (PossessiveAdg === 'its' && ['programmer', 'programmers'].includes(prof))
    ) {
      data.push(...PossessiveAdjectivesExtraWords);
      question.push(PossessiveAdg);
      qWord.push(PossessiveAdg);
    }

    data.push(...[...prof_4].sort(() => Math.random() - 0.5));
    question.push(prof);
    qWord.push(prof);

    question.forEach(el => {
      if (!data.includes(el))
        console.log(
          'L4-1',
          //   // verb, subject, tenseNoteIndex
          '\n',
          subject,
          '\nquestion',
          question,
          '\nqWord',
          qWord,
          '\ndata: ',
          data,
        );
    });

    // console.log(question.filter(_ => _).join(' '));

    return JSON.stringify({
      subject,
      verb: 'be',
      tenseNoteIndex,
      question,
      qWord,
      testData: data,
    });
  }

  if (objP === 'its') {
    objP = 'my';
    PossessiveAdjectivesExtraWords.splice(
      PossessiveAdjectivesExtraWords.indexOf('its'),
      1,
      objP as PossessiveAdjectivesType,
    );
  }

  let i = 0;

  while (
    (verb === 'love' && ['wife', 'husband'].includes(nounsN[0][1])) ||
    (['our', 'their'].includes(objP) &&
      ['wife', 'husband'].includes(nounsN[0][1])) ||
    (['her'].includes(objP) && ['wife'].includes(nounsN[0][1])) ||
    (['his'].includes(objP) && ['husband'].includes(nounsN[0][1])) ||
    i < 4
  ) {
    nounsN.push(nounsN.shift() as [string, string]);
    i++;
  }

  const abc = nounsN.length > 0 ? nounsN[0] : ['', ''];

  const ObjectPronouns: ObjectPronounsType[] = [
    'me',
    'you ',
    'him',
    'her',
    'us',
    'them',
    'it ',
  ];

  const ObjPronounsA: {[key: string]: ObjectPronounsType} = {
    my: ObjectPronouns[0],
    your: ObjectPronouns[1],
    his: ObjectPronouns[2],
    her: ObjectPronouns[3],
    our: ObjectPronouns[4],
    their: ObjectPronouns[5],
    its: ObjectPronouns[6],
  };

  if (['give'].includes(verb)) {
    data = [
      ...subjectExtraWords,
      ...fourDoBe,
      ...threeVerbs,
      ...PossessiveAdjectivesExtraWords.map(el => ObjPronounsA[el]),
      ...PossessiveAdjectivesExtraWords,
      ...nouns0,
    ];
    question = [...correctVerb, ObjPronounsA[objP], objP, abc[0]];
    qWord = [subject, verb, ObjPronounsA[objP], objP, abc[1]];
  } else {
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

  question.forEach(el => {
    if (!data.includes(el))
      console.log(
        'L4-2',
        //   // verb, subject, tenseNoteIndex
        '\n',
        subject,
        '\nquestion',
        question,
        '\nqWord',
        qWord,
        '\ndata: ',
        data,
      );
  });

  // if (subject === 'i' && objP === 'my')
  // if (['give'].includes(verb))
  // console.log(question.filter(_ => _).join(' '));

  // if (tenseNoteIndex >= 6) {
  //   const Qword

  return JSON.stringify({
    subject,
    verb,
    tenseNoteIndex,
    question,
    qWord,
    testData: data,
  });
};
