export const countProgress = (str: string): [number, string] => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1' || str[i] === '3') {
      count++;
    }
  }

  return [count, str];
};

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Helper function to shuffle an array randomly
export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = getRandomInt(0, i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const roundScore = (score: number): string => {
  const [num, des] = score.toString().split('.');
  if (!des) return num + '.0';
  return num + '.' + des[0];
};
