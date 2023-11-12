interface VerbConjugation {
  value0: string;
  value1: string;
  value2: string;
  value3: string;
}

type SubjectPronounsType = 'i' | 'you' | 'he' | 'she' | 'we' | 'they' | 'it';

export const aLLscheme = (
  verbs: VerbConjugation,
  subject: SubjectPronounsType,
) => {
  const scheme: {
    i: string[];
    you: string[];
    he: string[];
    she: string[];
    we: string[];
    they: string[];
    it: string[];
  }[] = [
    {
      i: ['i', verbs.value2],
      you: ['you', verbs.value2],
      he: ['he', verbs.value2],
      she: ['she', verbs.value2],
      we: ['we', verbs.value2],
      they: ['they', verbs.value2],
      it: ['it', verbs.value2],
    },
    {
      i: ['i', verbs.value0],
      you: ['you', verbs.value0],
      he: ['he', verbs.value1],
      she: ['she', verbs.value1],
      we: ['we', verbs.value0],
      they: ['they', verbs.value0],
      it: ['it', verbs.value1],
    },
    {
      i: ['i', 'will', verbs.value0],
      you: ['you', 'will', verbs.value0],
      he: ['he', 'will', verbs.value0],
      she: ['she', 'will', verbs.value0],
      we: ['we', 'will', verbs.value0],
      they: ['they', 'will', verbs.value0],
      it: ['it', 'will', verbs.value0],
    },
    {
      i: ['i', "didn't", verbs.value0],
      you: ['you', "didn't", verbs.value0],
      he: ['he', "didn't", verbs.value0],
      she: ['she', "didn't", verbs.value0],
      we: ['we', "didn't", verbs.value0],
      they: ['they', "didn't", verbs.value0],
      it: ['it', "didn't", verbs.value0],
    },
    {
      i: ['i', "don't", verbs.value0],
      you: ['you', "don't", verbs.value0],
      he: ['he', "doesn't", verbs.value0],
      she: ['she', "doesn't", verbs.value0],
      we: ['we', "don't", verbs.value0],
      they: ['they', "don't", verbs.value0],
      it: ['it', "doesn't", verbs.value0],
    },
    {
      i: ['i', "won't", verbs.value0],
      you: ['you', "won't", verbs.value0],
      he: ['he', "won't", verbs.value0],
      she: ['she', "won't", verbs.value0],
      we: ['we', "won't", verbs.value0],
      they: ['they', "won't", verbs.value0],
      it: ['it', "won't", verbs.value0],
    },
    {
      i: ['did', 'i', verbs.value0],
      you: ['did', 'you', verbs.value0],
      he: ['did', 'he', verbs.value0],
      she: ['did', 'she', verbs.value0],
      we: ['did', 'we', verbs.value0],
      they: ['did', 'they', verbs.value0],
      it: ['did', 'it', verbs.value0],
    },
    {
      i: ['do', 'i', verbs.value0],
      you: ['do', 'you', verbs.value0],
      he: ['does', 'he', verbs.value0],
      she: ['does', 'she', verbs.value0],
      we: ['do', 'we', verbs.value0],
      they: ['do', 'they', verbs.value0],
      it: ['does', 'it', verbs.value0],
    },
    {
      i: ['will', 'i', verbs.value0],
      you: ['will', 'you', verbs.value0],
      he: ['will', 'he', verbs.value0],
      she: ['will', 'she', verbs.value0],
      we: ['will', 'we', verbs.value0],
      they: ['will', 'they', verbs.value0],
      it: ['will', 'it', verbs.value0],
    },
  ];

  return scheme.map(el => el[subject]);
};

export interface BeInterface {
  i: string[];
  you: string[];
  he: string[];
  she: string[];
  we: string[];
  they: string[];
  it: string[];
}

export const BeScheme: BeInterface[] = [
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
