/**
 * @param {Array} iOriginalArray;
 */
const removeFromArray = function(iOriginalArray, iElementsToRemove) {
    let aIndexOfElement = -1;
    let aArgsArray = Array.from(arguments);
    aArgsArray = aArgsArray.slice(1);
    // This is to create a copy of the original array - needed due to Javascript's
    // pass by reference + value system.
    let aModifiedArray = iOriginalArray.slice(0, iOriginalArray.length);
    for (const element of aArgsArray)
    {
        aIndexOfElement = aModifiedArray.indexOf(element) === -1 ? null : aModifiedArray.indexOf(element);
        if (aIndexOfElement !== -1 && aIndexOfElement !== null)
        {
            aModifiedArray.splice(aIndexOfElement, 1);
        }
    }
    return aModifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
