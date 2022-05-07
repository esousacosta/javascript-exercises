'use strict'
/*
 * @param {array} aStringArray the array to modify the string;
 * @param {string} aReturnString the reversed string to be returned;
 */

const reverseString = function(iString) {
    if (iString === '')
    {
        return '';
    }
    let aStringCharsArray = iString.split("");
    let aReverseString;
    
    aStringCharsArray = aStringCharsArray.reverse();
    aReverseString = aStringCharsArray.join("");
    
    return aReverseString;
};

// Do not edit below this line
module.exports = reverseString;
