/**
 * 
 * @param {string} iUncodedString input string to be encoded
 * @param {number} iShift number of places to shift each character
 */
const caesar = function(iUncodedString, iShift) {
    const aUncodedStringArray = iUncodedString.split("");
    for (let i = 0; i < aUncodedStringArray.length; ++i)
    {
        if (aUncodedStringArray[i].match(/[^0-9a-zA-Z]/gi))
        {
            continue;
        }
        // Wraping mechanism to prevent inclusion of undesired characters where the current one
        // is at the border of the "chars" territory within ASCII
        // Upper cases wrapping
        if (aUncodedStringArray[i].charCodeAt(0) >= 65 && aUncodedStringArray[i].charCodeAt(0) <= 90)
        {
            aUncodedStringArray[i] = String.fromCharCode(((aUncodedStringArray[i].charCodeAt(0) + iShift) % 91) - 26 +
                Math.min(Math.floor((aUncodedStringArray[i].charCodeAt(0) + iShift) / 91), 1) * 65);
            while (aUncodedStringArray[i].charCodeAt(0) < 65)
            {
                aUncodedStringArray[i] = String.fromCharCode(90 - 65 + (aUncodedStringArray[i].charCodeAt(0) + 1));
            }
            while (aUncodedStringArray[i].charCodeAt(0) > 90)
            {
                aUncodedStringArray[i] = String.fromCharCode(aUncodedStringArray[i].charCodeAt(0) - 90 - 1 + 65);
            }
        }
        // Lower case wrapping
        else if (aUncodedStringArray[i].charCodeAt(0) >= 97 && aUncodedStringArray[i].charCodeAt(0) <= 122)
        {
            aUncodedStringArray[i] = String.fromCharCode(((aUncodedStringArray[i].charCodeAt(0) + iShift) % 123) - 26 +
                Math.min(Math.floor((aUncodedStringArray[i].charCodeAt(0) + iShift) / 123), 1) * 97);
            while (aUncodedStringArray[i].charCodeAt(0) < 97)
            {
                aUncodedStringArray[i] = String.fromCharCode(122 - 97 + (aUncodedStringArray[i].charCodeAt(0) + 1));
            }
            while (aUncodedStringArray[i].charCodeAt(0) > 122)
            {
                aUncodedStringArray[i] = String.fromCharCode(aUncodedStringArray[i].charCodeAt(0) - 122 - 1 + 97);
            }
        }
    }
    return aUncodedStringArray.join("");
};

// Do not edit below this line
module.exports = caesar;
