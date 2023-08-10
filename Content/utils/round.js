function roundSVGPathToWholeNumbers(svgPath) {
  // Regular expression to match floating-point numbers
  const regex = /[-+]?\d*\.\d+|\d+/g;

  // Replace each floating-point number with its rounded whole number equivalent
  const roundedPath = svgPath.replace(regex, match => {
    return Math.round(Number(match));
  });

  return roundedPath;
}

const path = 'M203.635 331.157L337.453 255.034L203.635 178.901V331.157Z';

console.log(roundSVGPathToWholeNumbers(path));
