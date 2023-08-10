import {getRandomInt, shuffleArray} from './smallFunctions';
import {subjectPronounsIcons} from '../data/words';

export const SimpleTenseScheme = (words, spIcons = subjectPronounsIcons.A) => {
  const {verbs, nouns} = words.words;

  const allLessonVerbs = Object.keys(verbs);

  const verb = allLessonVerbs[getRandomInt(0, allLessonVerbs.length - 1)];

  const subjectPronouns = ['i', 'you', 'he', 'she', 'we', 'they', 'it'];

  const subject = subjectPronouns[getRandomInt(0, subjectPronouns.length - 1)];

  const aLLscheme = [
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

  let nounsN: any[][] = [];

  try {
    let extraW = Object.values(nouns)
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

  let correctDoBe = null;
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
    qWord: [spIcons[subject], verb, abc[1]],
  };
};
