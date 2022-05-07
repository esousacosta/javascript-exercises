const sumAll = function(iFirstNumber, iSecondNumber) {
    if (typeof iFirstNumber !== 'number' || typeof iSecondNumber !== 'number' || iSecondNumber < 0 || iFirstNumber < 0)
    {
        return 'ERROR';
    }
    
    let aSmallerNumber;
    let aLargerNumber;
    
    if (iFirstNumber < iSecondNumber)
    {
        aSmallerNumber = iFirstNumber;
        aLargerNumber = iSecondNumber;
    }
    else
    {
        aLargerNumber = iFirstNumber;
        aSmallerNumber = iSecondNumber;
    }
    
    let aSum = 0;
    for (let i = aSmallerNumber; i <= aLargerNumber; i++)
    {
        aSum += i;
    }

    return aSum;
};

// Do not edit below this line
module.exports = sumAll;
