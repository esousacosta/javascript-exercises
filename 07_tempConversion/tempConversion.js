const ftoc = function(iTemperatureInFarenheit) {
  const aConvertedTemperature = (iTemperatureInFarenheit - 32) * (5 / 9);
  const aTruncatedConvertedTemperature = parseFloat(aConvertedTemperature.toFixed(1));
  return aTruncatedConvertedTemperature;
};

const ctof = function(iTemperatureInCelsius) {
  const aConvertedTemperature = (iTemperatureInCelsius * (9 / 5)) + 32;
  const aTruncatedConvertedTemperature = parseFloat(aConvertedTemperature.toFixed(1));
  return aTruncatedConvertedTemperature;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
