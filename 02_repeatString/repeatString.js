const repeatString = function(iString, iNumOfRepetitions) {
    let aReturnedString = "";
    if (iNumOfRepetitions < 0)
    {
        return "ERROR";
    }
    for (let i = 0; i < iNumOfRepetitions; i++)
    {
        aReturnedString += iString;
    }
    return aReturnedString;
};

// Do not edit below this line
module.exports = repeatString;
