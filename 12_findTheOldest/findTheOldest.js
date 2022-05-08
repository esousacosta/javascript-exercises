/**
 * 
 * @param {Array} iPersonsList an array of people with birth and death dates
 */
const findTheOldest = function(iPersonsList) {
    const aOldestPerson = iPersonsList.reduce(returnOlderPerson);
    return aOldestPerson;
};

/**
 * The first call will use the first person as the iPreviousResult
 * @param {Object} iPreviousResult the previous person that has been returned as the oldest
 * @param {Object} iCurrentElement the current person to be compared against the oldest
 */
function returnOlderPerson(ioPreviousReturnedPersonElement, ioCurrentPersonElement)
{
    const aTodayDate = new Date();
    let aCurrentPersonAge;
    let aPreviousPersonAge;
    if (!ioPreviousReturnedPersonElement['yearOfDeath'] && !ioCurrentPersonElement['yearOfDeath'])
    {
        aPreviousPersonAge = aTodayDate.getFullYear() - ioPreviousReturnedPersonElement['yearOfBirth'];
        aCurrentPersonAge = aTodayDate.getFullYear() - ioCurrentPersonElement['yearOfBirth'];
    }
    else if (!ioPreviousReturnedPersonElement['yearOfDeath'])
    {
        aPreviousPersonAge = aTodayDate.getFullYear() - ioPreviousReturnedPersonElement['yearOfBirth'];
        aCurrentPersonAge = ioCurrentPersonElement['yearOfDeath'] - ioCurrentPersonElement['yearOfBirth'];
    }
    else if (!ioCurrentPersonElement['yearOfDeath'])
    {
        aPreviousPersonAge = ioPreviousReturnedPersonElement['yearOfDeath'] - ioPreviousReturnedPersonElement['yearOfBirth'];
        aCurrentPersonAge = aTodayDate.getFullYear() - ioCurrentPersonElement['yearOfBirth'];
    }
    else
    {
        aPreviousPersonAge = ioPreviousReturnedPersonElement['yearOfDeath'] - ioPreviousReturnedPersonElement['yearOfBirth'];
        aCurrentPersonAge = ioCurrentPersonElement['yearOfDeath'] - ioCurrentPersonElement['yearOfBirth'];
    }
    return aCurrentPersonAge > aPreviousPersonAge ? ioCurrentPersonElement : ioPreviousReturnedPersonElement;
}

// Do not edit below this line
module.exports = findTheOldest;
