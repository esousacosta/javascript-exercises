const add = function(iFirstNumber, iSecondNumber) {
  if (typeof iFirstNumber !== 'number' || typeof iSecondNumber !== 'number')
  {
    return 'ERROR';
  }
  return iFirstNumber + iSecondNumber;
};

const subtract = function(iFirstNumber, iSecondNumber) {
  if (typeof iFirstNumber !== 'number' || typeof iSecondNumber !== 'number')
  {
    return 'ERROR';
  }
  return iFirstNumber - iSecondNumber;
};

const sum = function(iArray) {
  return iArray.reduce((aPrecedingResult, aNextNumber) => aPrecedingResult + aNextNumber, 0);
};

const multiply = function(iArray) {
  return iArray.reduce((aPrecedingResult, aNextNumber) => aPrecedingResult * aNextNumber, 1);
};

const power = function(iBaseNumber, iExponentNumber) {
  if (typeof iBaseNumber !== 'number' || typeof iExponentNumber !== 'number')
  {
    return 'ERROR';
  }
  return Math.pow(iBaseNumber, iExponentNumber);
};

const factorial = function(iNumber) {
  if (typeof iNumber !== 'number')
  {
    return 'ERROR';
  }
  if (iNumber === 0)
  {
    return 1;
  }
  let aNumberFactorial = 1;
  while (iNumber > 0)
  {
    aNumberFactorial *= iNumber;
    iNumber--;
  }
  return aNumberFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
